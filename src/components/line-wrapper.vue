<template>
  <div class="line-wrapper">
    <line-number
      v-if="hasNumber"
      v-bind="numberData"
      :style="numberFollowLineStyle ? customStyle : {}"
    ></line-number>
    <slot>
      <line-content :soft-wrap="softWrap" :content="data"></line-content>
    </slot>
  </div>
</template>
<script>
import LineContent from './line-content.vue'
import LineNumber from './line-number.vue'
export default {
  name: 'LineWrapper',
  components: {
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
    numberData: Object
  },
  computed: {
    customStyle() {
      const height =
        typeof this.height === 'number' ? this.height + 'px' : this.height
      return Object.assign(
        {
          lineHeight: height
          // height
        },
        this.comStyle
      )
    }
  }
}
</script>
<style lang="less">
.line-wrapper {
  display: flex;
  color: #f1f1f1;
  line-height: 20px;
  //white-space: pre;
  //word-break: break-all;
  //box-sizing: border-box;
  padding-left: 16px;
  padding-right: 16px;

  &:hover {
    background-color: #444;
  }

  .line-number {
    min-width: 40px;
    text-align: right;
    color: #666;
    padding-right: 10px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
}
</style>
