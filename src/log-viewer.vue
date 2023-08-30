<template>
  <div>
    <select
      v-if="!sessionSlot && logSessions.length"
      v-model="currentSession"
      style="width: 50%; font-size: 13px; border-radius: 0; padding-bottom: 3px;"
      v-on:change="toSession(currentSession)"
    >
      <option value="0" disabled>select session</option>
      <option
        v-for="option in logSessions"
        :key="option.value"
        class="session-highlight"
        :value="option.value"
        >{{ option.label }}</option
      >
    </select>
    <slot
      :name="sessionSlot"
      :options="logSessions"
      :onChange="toSession"
      style="padding-bottom: 3px;"
    ></slot>
    <virtual-list
      class="log-viewer"
      v-bind:style="logViewerStyle"
      ref="virtualList"
      v-bind="virtualAttrs"
      :size="rowHeight"
      :remain="remain"
      :bench="0"
      :start="start"
      :item="LineWrapper"
      :itemcount="linesCount"
      :itemprops="getLineWrapperProps"
      :onscroll="onscroll"
      :estimate-size="80"
      :item-class="'log-viewer-item'"
    >
    </virtual-list>
  </div>
</template>
<script>
import VirtualList from 'vue-virtual-scroll-list'
import LineWrapper from './components/line-wrapper.vue'
import LogLoading from './components/loading.vue'
import parse from './utils'
import {highlightLine} from './utils/highlight'

export default {
  name: 'LogViewer',
  components: {
    LineWrapper,
    VirtualList
  },
  props: {
    softWrap: {
      type: Boolean,
      default: true
    },
    customStyle: {
      type: Object,
      default() {}
    },
    background: [Function, Object],
    eventMapping: Object,
    fontSize: {
      type: Number,
      default: 12
    },
    /**
     * VirtualList original props
     * Reference: https://github.com/tangbc/vue-virtual-scroll-list
     */
    virtualAttrs: {
      type: Object,
      default() {}
    },
    /**
     * A fixed row height in pixels. Controls how tall a line is, as well as the lineHeight style of the line's text.
     * Defaults to 20.
     */
    rowHeight: {
      type: Number,
      default: 20
    },
    /**
     * The log-viewer container height
     * Defaults to 0,and the component is 30 * rowHeight
     */
    height: {
      type: Number,
      default: 0
    },
    lineStyle: {
      type: Function,
      default: highlightLine
    },
    isSessionStart: Function,
    numberFollowLineStyle: Boolean,
    /**
     * The orginal log text shuold be shown
     */
    log: String,
    /**
     * Loading Status flag
     */
    loading: Boolean,
    /**
     * Auto scroll to the bottom when the logs update. Defaults to be true
     */
    autoScroll: {
      type: Boolean,
      default: true
    },
    /**
     * Has number line if hasNumber is true. Defaults to be true.
     */
    hasNumber: {
      type: Boolean,
      default: true
    },
    /**
     * Auto scroll to bottom's time duration(ms), defaults to 0 means to no duration.
     */
    scrollDuration: {
      type: Number,
      default: 0
    },
    sessionSlot: String
  },
  data() {
    return {
      start: 0,
      scrollStart: 0,
      animate: null,
      LineWrapper,
      currentSession: 0,
      currentHighlight: 0,
      logSessions: [],
      logHighlight: [],
      inCollapse: {},
      linesShowing: [],
      clickCollapse: false
    }
  },
  computed: {
    inCollapseLineSorted() {
      return Object.keys(this.inCollapse).map(key => Number(key))
    },
    remain() {
      if (typeof +this.height === 'number') {
        return this.height > 0 ? Math.floor(this.height / this.rowHeight) : 30
      }
      if (this.height.indexOf('px') > 0) {
        return Math.floor(this.height.split('px')[0] / this.rowHeight)
      }
      return 30
    },
    lines() {
      const lineParsed = parse(
        this.log,
        this.lineStyle,
        this.eventMapping,
        this.isSessionStart
      )
      this.logSessions = []
      this.logHighlight = []
      // 合并连续的session start
      let currentSession = ''
      let currentSessionIndex = 0
      lineParsed.forEach((item, index) => {
        item.lineNumber = index + 1
        if (item.isHighlight) {
          this.logSessions.push({
            label: `@${`${index}`.padStart(
              String(lineParsed.length).length,
              '0'
            )} ${item.session}`,
            value: index,
            isHighlight: true,
            lineStyle: item.lineStyle
          })
          currentSession = ''
          return
        }
        if (item.isSessionStart) {
          if (currentSession === '') {
            currentSessionIndex = index + 1
          }
          currentSession = `${currentSession}${item.session}`
        } else {
          if (currentSession !== '') {
            let indexPart = `${currentSessionIndex}`
            this.logSessions.push({
              label: `@${indexPart.padStart(
                String(lineParsed.length).length,
                '0'
              )} ${currentSession}`,
              value: currentSessionIndex,
              isSession: true
            })
            currentSession = ''
          }
        }
      })
      this.freshLineShowing(lineParsed)
      return lineParsed
    },
    linesCount() {
      return this.linesShowing.length + (this.loading ? 1 : 0)
    },
    logViewerStyle() {
      let style = this.customStyle || {}
      if (!style['font-size']) {
        style['font-size'] = `${this.fontSize}px`
      }
      return style
    }
  },
  watch: {
    lines: {
      immediate: true,
      handler(newValue, oldValue) {
        if (newValue === oldValue) {
          return
        }
        this.$refs.virtualList && this.$refs.virtualList.forceRender()
        if (this.autoScroll && !this.clickCollapse) {
          this.setScrollTop(this.linesCount)
        }
      }
    }
  },
  methods: {
    /**
     * virtualList forceRender method
     */
    forceRender() {
      this.$refs.virtualList.forceRender()
    },
    toSession(to) {
      this.currentSession = to
      this.setScrollTop(this.currentSession - 1)
    },
    getLineWrapperProps(index) {
      let height = this.rowHeight
      const data = this.linesShowing[index]
      const props = {
        height,
        hasNumber: this.hasNumber,
        softWrap: this.softWrap,
        numberFollowLineStyle: this.numberFollowLineStyle,
        background: this.background,
        isSessionStart: data.isSessionStart,
        numberData: {
          number: data.lineNumber
        }
      }
      const _this = this
      props.setCollapse = (number, inCollapse) => {
        _this.clickCollapse = true
        _this.inCollapse[number] = inCollapse
        _this.freshLineShowing(this.lines)
      }
      props.data = data
      this.lineWrapperStyle &&
        (props.comStyle = this.lineWrapperStyle(index + 1))
      if (this.loading && index === this.linesCount - 1) {
        return {
          props,
          scopedSlots: {
            default: () => this.$createElement(LogLoading)
          }
        }
      }
      return {
        props
      }
    },
    freshLineShowing(linesNow) {
      this.linesShowing = []
      let lastSessionCollapse = false
      linesNow.forEach(item => {
        if (item.isSessionStart) {
          this.inCollapse[item.lineNumber] =
            this.inCollapse[item.lineNumber] || false
          lastSessionCollapse = this.inCollapse[item.lineNumber]
          this.linesShowing.push(item)
        } else {
          if (!lastSessionCollapse) {
            this.linesShowing.push(item)
          }
        }
      })
    },
    setScrollTop(line) {
      if (this.scrollDuration === 0) {
        this.$nextTick(() => {
          // 在nextick外面执行会导致自动滚动到上一次的位置
          this.start = this.linesCount
        })
        return
      }
      if (this.animate) {
        cancelAnimationFrame(this.animate)
      }
      let i = this.scrollStart
      let step = 0
      step =
        Math.abs(line - this.scrollStart) / ((this.scrollDuration * 60) / 1e3)
      step = step < 1 ? 1 : step
      const animation = () => {
        this.animate = requestAnimationFrame(() => {
          // 从起始行开始滚动，若起始行小于目标行时，每帧逐渐增加行数（向下滚），直到目标行
          // 同理，若起始行大于目标行时，每帧减少行数（向上滚），直到目标行
          // 若当前行在目标行范围内[line-step,line+step], 直接滚到目标行
          if (i < line - step || i > line + step) {
            this.start = i
            i = Math.floor(i < line - step ? i + step : i - step)
            animation()
          } else {
            this.start = line
            this.scrollStart = this.start
          }
        })
      }
      animation()
    },
    onscroll(event, data) {
      this.scrollStart = Math.ceil(data.offset / this.rowHeight)
    }
  }
}
</script>
<style lang="less">
.log-viewer {
  font-size: 12px;
  background-color: #222;
  overflow-x: auto;
  padding: 9px 0;
}

.session-highlight {
  background-color: red;
  z-index: 10000;
}
</style>
