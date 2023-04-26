<template>
  <div>
    <select
      v-if="logSessions.length"
      v-model="currentSession"
      style="width: 100%;"
      v-on:change="toSession"
    >
      <option
        v-for="option in logSessions"
        :key="option.value"
        :value="option.value"
        >{{ option.text }}</option
      >
    </select>
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
    }
  },
  data() {
    return {
      start: 0,
      scrollStart: 0,
      animate: null,
      LineWrapper,
      currentSession: 0,
      logSessions: []
    }
  },
  computed: {
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
      // 合并连续的session start
      let currentSession = ''
      let currentSessionIndex = 0
      lineParsed.forEach((item, index) => {
        if (item.isSessionStart) {
          if (currentSession === '') {
            currentSessionIndex = index + 1
          }
          currentSession = `${currentSession}${item.session}`
        } else {
          if (currentSession !== '') {
            let indexPart = `${currentSessionIndex}`
            this.logSessions.push({
              text: `@${indexPart.padStart(
                String(lineParsed.length).length,
                '0'
              )} ${currentSession}`,
              value: currentSessionIndex
            })
            currentSession = ''
          }
        }
      })
      return lineParsed
    },
    linesCount() {
      return this.lines.length + (this.loading ? 1 : 0)
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
      handler(lines) {
        this.$refs.virtualList && this.$refs.virtualList.forceRender()
        if (this.autoScroll) {
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
    toSession() {
      this.setScrollTop(this.currentSession - 1)
    },
    //
    getLineWrapperProps(index) {
      const height = this.rowHeight
      const props = {
        height,
        hasNumber: this.hasNumber,
        softWrap: this.softWrap,
        numberFollowLineStyle: this.numberFollowLineStyle,
        background: this.background,
        numberData: {
          number: index + 1
        }
      }
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
      props.data = this.lines[index]
      return {
        props
      }
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
</style>
