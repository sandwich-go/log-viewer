<template>
  <div class="line-session">
    <span v-if="isSessionStart" style="font-size: 110%;">
      <span v-if="inCollapse(number)">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 6L15 12L9 18" stroke="white" stroke-width="2" />
        </svg>
      </span>
      <span v-else>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 9L12 15L6 9" stroke="white" stroke-width="2" />
        </svg>
      </span>
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
