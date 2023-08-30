<template>
  <div class="line-session">
    <span v-if="isSessionStart" style="font-size: 110%;">
      <span v-if="inCollapse(number)">&#8680;</span>
      <span v-else>&#8681;</span>
    </span>
  </div>
</template>
<script>
export default {
  name: 'LineSession',
  props: {
    isSessionStart: Boolean,
    switchCollapse: Function,
    inCollapse: Function,
    number: Number,
    parentSwitchCollapseStatus: Function
  },
  methods: {
    switchCollapseStatus() {
      this.switchCollapse(this.number)
      // 强刷一次，链路太长更新不及时
      this.$forceUpdate()
    }
  }
}
</script>
