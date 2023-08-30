<template>
  <div class="line-wrapper" @click="switchCollapseStatus">
    <line-session
      ref="lineSession"
      :is-session-start="isSessionStart"
      :number="numberData['number']"
      :style="customStyle"
      :switch-collapse="switchCollapse"
      :in-collapse="inCollapse"
    ></line-session>
    <line-number
      v-if="hasNumber"
      v-bind="numberData"
      :style="customStyle"
    ></line-number>
    <slot>
      <line-content :soft-wrap="softWrap" :content="data"></line-content>
    </slot>
  </div>
</template>
<script>
import LineContent from './line-content.vue'
import LineNumber from './line-number.vue'
import LineSession from './line_session.vue'

export default {
  name: 'LineWrapper',
  components: {
    LineSession,
    LineContent,
    LineNumber
  },
  props: {
    /**
     * line-content attrs
     */
    data: {
      type: Object,
      default() {
        return {
          lineStyle: {},
          items: [
            {
              text: ''
            }
          ]
        }
      }
    },
    /**
     * the line height
     */
    height: {
      type: [Number, String],
      default: 20
    },
    comStyle: {
      type: Object,
      default() {
        return {}
      }
    },
    softWrap: Boolean,
    numberFollowLineStyle: Boolean,
    hasNumber: Boolean,
    numberData: Object,
    isSessionStart: Boolean,
    switchCollapse: Function,
    inCollapse: Function
  },
  data() {
    return {
      isLineCollapse: false
    }
  },
  computed: {
    customStyle() {
      const height =
        typeof this.height === 'number' ? this.height + 'px' : this.height
      let lineStyle = Object.assign(
        {
          lineHeight: height
          // height
        },
        this.comStyle
      )
      if (this.numberFollowLineStyle) {
        lineStyle = Object.assign(lineStyle, this.data.lineStyle)
      }
      return lineStyle
    }
  },
  methods: {
    switchCollapseStatus() {
      if (!this.isSessionStart) {
        return
      }
      this.$refs.lineSession.switchCollapseStatus()
    }
  }
}
</script>
<style lang="less">
.line-wrapper {
  display: flex;
  color: #f1f1f1;
  line-height: 20px;
  //white-space: pre; //word-break: break-all; //box-sizing: border-box; padding-left: 16px;
  padding-right: 16px;

  &:hover {
    background-color: #444;
  }

  .line-number {
    min-width: 30px;
    text-align: right;
    color: #666;
    padding-right: 10px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .line-session {
    width: 20px;
    text-align: right;
    color: white;
    padding-right: 3px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
}
</style>
