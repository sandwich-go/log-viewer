<template>
  <div class="line-session">
    <span v-if="isSessionStart" style="font-size: 110%;">
      <span v-if="isLineCollapse">&#8680;</span>
      <span v-else>&#8681;</span>
    </span>
  </div>
</template>
<script>
export default {
  name: 'LineSession',
  props: {
    isSessionStart: Boolean,
    setCollapse: Function,
    number: Number,
    parentSwitchCollapseStatus: Function
  },
  data() {
    return {
      isLineCollapse: false
    }
  },
  methods: {
    switchCollapseStatus() {
      this.isLineCollapse = !this.isLineCollapse
      this.setCollapse(this.number, this.isLineCollapse)
    }
  }
}
</script>
