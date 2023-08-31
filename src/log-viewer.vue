<template>
  <div>
    <div
      v-if="logSessions.length || innerControl.length"
      class="div-flex-end-container"
      style="gap: 9px; padding-bottom: 3px;"
    >
      <div v-if="logSessions.length" class="flex-item">
        <select
          v-if="!sessionSlot"
          size="10"
          v-model="currentSession"
          style="width: 100%; font-size: 13px; border-radius: 0;"
          v-on:change="toSession(currentSession)"
        >
          <option value="0" disabled>select session</option>
          <option
            v-for="option in logSessions"
            :key="option.value"
            class="session-highlight"
            :value="option.value"
            >{{ option.label }}
          </option>
        </select>
        <slot
          :name="sessionSlot"
          :options="logSessions"
          :onChange="toSession"
        ></slot>
      </div>
      <slot name="status"></slot>
      <div v-if="innerControl.length !== 0" class="flex-end-buttons">
        <template v-for="item in innerControl">
          <button
            v-if="item === 'softWrap'"
            data-shift="west"
            title="自动换行"
            class="btn tooltip-toggle"
            v-on:click="softWrap = !softWrap"
            :style="{
              'font-size': '110%',
              width: '28px'
            }"
          >
            <svg
              class="svg-icon-bigger-12"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 4h11a4 4 0 010 8H9.414l.293.293a1 1 0 11-1.414 1.414L5.586 11l2.707-2.707a1 1 0 011.414 1.414L9.414 10H12a2 2 0 100-4H1a1 1 0 010-2z"
                :fill="softWrap ? 'darkgreen' : '#000000'"
              />
              <path
                d="M0 11a1 1 0 011-1h3a1 1 0 110 2H1a1 1 0 01-1-1z"
                :fill="softWrap ? 'green' : '#000000'"
              />
            </svg>
          </button>
          <button
            v-if="item === 'autoScroll'"
            title="自动更新日志并滚动至底部"
            class="btn"
            v-on:click="autoScroll = !autoScroll"
            :style="{
              'font-size': '110%',
              width: '28px'
            }"
          >
            <svg
              class="svg-icon-bigger-12"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 12C21 16.9706 16.9706 21 12 21C9.69494 21 7.59227 20.1334 6 18.7083L3 16M3 12C3 7.02944 7.02944 3 12 3C14.3051 3 16.4077 3.86656 18 5.29168L21 8M3 21V16M3 16H8M21 3V8M21 8H16"
                :stroke="autoScroll ? 'green' : '#000000'"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button
            v-if="item === 'collapse'"
            title="折叠/展开所有日志段落"
            :disabled="inCollapse.length === 0"
            class="btn"
            v-on:click="allSwitchCollapse"
            :style="{
              'font-size': '110%',
              width: '28px'
            }"
          >
            <svg
              v-if="allCollapse"
              class="svg-icon-bigger"
              viewBox="0 0 24 24"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              aria-labelledby="chevronsRightIconTitle"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="none"
              color="#000000"
            >
              <title id="chevronsRightIconTitle">Chevrons Right</title>
              <polyline points="13 7 18 12 13 17 13 17" />
              <polyline points="7 7 12 12 7 17 7 17" />
            </svg>
            <svg
              v-else
              class="svg-icon-bigger"
              viewBox="0 0 24 24"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              aria-labelledby="chevronsDownIconTitle"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="none"
              color="#000000"
            >
              <title id="chevronsDownIconTitle">Chevrons Down</title>
              <polyline points="7 13 12 18 17 13" />
              <polyline points="7 7 12 12 17 7" />
            </svg>
          </button>
          <button
            v-if="item === 'toStart'"
            title="到日志第一行"
            class="btn"
            v-on:click="toStart"
            :style="{'font-size': '110%', width: '28px'}"
          >
            <svg
              class="svg-icon-bigger"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 12L12 8M12 8L16 12M12 8V20M4 4H20"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button
            v-if="item === 'toEnd'"
            class="btn"
            data-shift="west"
            title="到日志最后一行"
            v-on:click="toEnd"
            :style="{'font-size': '110%', width: '28px'}"
          >
            <svg
              class="svg-icon-bigger"
              fill="#000000"
              viewBox="0 0 56 56"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 12.1797 44.4648 C 10.9610 44.4648 10.1406 45.3320 10.1406 46.5508 C 10.1406 47.7695 10.9610 48.6602 12.1797 48.6602 L 43.7734 48.6602 C 45.0156 48.6602 45.8594 47.7695 45.8594 46.5508 C 45.8594 45.3320 45.0156 44.4648 43.7734 44.4648 L 28.4922 44.4648 C 28.8906 44.3477 29.2422 44.1367 29.5703 43.7852 L 45.0859 28.2695 C 45.5547 27.7773 45.7656 27.2617 45.7656 26.6992 C 45.7656 25.5273 44.9219 24.6367 43.7266 24.6367 C 43.1641 24.6367 42.6250 24.8476 42.2266 25.2227 L 36.9766 30.4024 L 29.9219 38.1133 L 30.1094 33.0976 L 30.1094 9.4258 C 30.1094 8.2071 29.2188 7.3398 28 7.3398 C 26.7812 7.3398 25.9141 8.2071 25.9141 9.4258 L 25.9141 33.0976 L 26.0781 38.1367 L 19.0234 30.4024 L 13.7734 25.2227 C 13.3984 24.8476 12.8359 24.6367 12.2734 24.6367 C 11.1016 24.6367 10.2344 25.5273 10.2344 26.6992 C 10.2344 27.2617 10.4688 27.7773 10.9375 28.2695 L 26.4297 43.7852 C 26.7578 44.1367 27.1328 44.3477 27.5312 44.4648 Z"
              />
            </svg>
          </button>
          <button
            v-if="item === 'copy'"
            class="btn"
            title="拷贝"
            v-on:click="copy"
            :style="{'font-size': '110%', width: '28px'}"
          >
            <svg
              fill="#000000"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              xml:space="preserve"
            >
              <g>
                <g>
                  <path
                    d="M479.168,113.227c-0.537-1.284-1.319-2.451-2.304-3.435L370.197,3.125c-2.002-1.991-4.707-3.114-7.531-3.125h-192
			C164.776,0,160,4.776,160,10.667V64H42.667C36.776,64,32,68.776,32,74.667v426.667C32,507.224,36.776,512,42.667,512h298.667
			c5.891,0,10.667-4.776,10.667-10.667V448h117.333c5.891,0,10.667-4.776,10.667-10.667v-320
			C479.997,115.923,479.714,114.527,479.168,113.227z M373.333,36.416l70.251,70.251h-70.251V36.416z M330.667,490.667H53.333
			V85.333H224v96c0,5.891,4.776,10.667,10.667,10.667h96V490.667z M245.333,170.667v-70.251l70.251,70.251H245.333z
			 M458.667,426.667H352V181.333c-0.009-2.827-1.132-5.537-3.125-7.541L242.208,67.125c-2.005-1.994-4.714-3.117-7.541-3.125
			h-53.333V21.333H352v96c0,5.891,4.776,10.667,10.667,10.667h96V426.667z"
                  />
                </g>
              </g>
            </svg>
          </button>
        </template>
      </div>
    </div>

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
const jsb = require('@sandwich-go/jsb')

export default {
  name: 'LogViewer',
  components: {
    LineWrapper,
    VirtualList
  },
  props: {
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
    sessionSlot: String,
    innerControl: {
      type: Array,
      default() {
        return [
          'softWrap',
          'autoScroll',
          'collapse',
          'toStart',
          'toEnd',
          'copy'
        ]
      }
    }
  },
  data() {
    return {
      softWrap: true,
      autoScroll: true,
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
      clickCollapse: false,
      allCollapse: false
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
      if (this.linesShowing.length === 0) {
        this.freshLineShowing(this.lines)
      }
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
    switchCollapse(sessionLineNumber) {
      this.clickCollapse = true
      this.inCollapse[sessionLineNumber] = !this.inCollapse[sessionLineNumber]
      this.freshLineShowing(this.lines)
    },
    sessionInCollapse(sessionLineNumber) {
      return this.inCollapse[sessionLineNumber]
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
        isSessionStart: data ? data.isSessionStart : false,
        numberData: {
          number: data ? data.lineNumber : index + 1
        }
      }
      props.switchCollapse = this.switchCollapse
      props.inCollapse = this.sessionInCollapse
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
    toStart() {
      this.setScrollTop(0)
    },
    allSwitchCollapse() {
      this.allCollapse = !this.allCollapse
      let changed = false
      jsb.each(this.inCollapse, (v, k) => {
        if (v !== this.allCollapse) {
          this.inCollapse[k] = this.allCollapse
          changed = true
        }
      })
      if (changed) {
        this.freshLineShowing(this.lines)
      }
    },
    toEnd() {
      this.setScrollTop(this.linesCount)
    },
    copy(event) {
      jsb.clipCopy(this.log, event)
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

.div-flex-end-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.flex-item {
  flex: 1;
}

.flex-end-buttons {
  display: flex;
  gap: 3px;
  justify-content: flex-end; /* 将按钮靠右排列 */
}

select {
  height: 28px;
  -webkit-appearance: menulist-button;
  -moz-appearance: none;
}

.svg-icon-bigger {
  transform: scale(1.3);
}

.svg-icon-bigger-12 {
  transform: scale(1.2);
}
</style>
