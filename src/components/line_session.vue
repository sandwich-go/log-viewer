<template>
  <div class="line-session">
    <span v-if="isSessionStart">
      <span v-if="isLineCollapse" @click="switchCollapseStatus"
        ><i class="el-icon-arrow-right"
      /></span>
      <span v-else @click="switchCollapseStatus"
        ><i class="el-icon-arrow-down"
      /></span>
    </span>
  </div>
</template>
<script>
export default {
  name: 'LineSession',
  props: {
    isSessionStart: Boolean,
    setCollapse: Function,
    number: Number
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
