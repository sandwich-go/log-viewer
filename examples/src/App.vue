<template>
  <div id="app">
    <div style="position: absolute; left: 6px;">
      <input type="checkbox" id="softWrap" v-model="softWrap" />
      <label for="softWrap">{{
        softWrap ? 'Soft Wrap' : 'Soft Wrap Off'
      }}</label>
    </div>
    <div style="position: absolute; left: 140px;">
      <input type="checkbox" id="lineNumber" v-model="lineNumber" />
      <label for="lineNumber">{{
        lineNumber ? 'Line Number' : 'Line Number Off'
      }}</label>
    </div>
    <div style="position: absolute; left: 300px;">
      <input type="checkbox" id="autoScroll" v-model="autoScroll" />
      <label for="autoScroll">{{
        autoScroll ? 'Auto Scroll' : 'Auto Scroll Off'
      }}</label>
    </div>
    <br />
    <div>
      <log-viewer
        :soft-wrp="softWrap"
        :has-number="lineNumber"
        :auto-scroll="autoScroll"
        :height="800"
        :loading="loading"
        :scroll-duration="1000"
        :log="log"
      />
    </div>
  </div>
</template>

<script>
// import LogViewer from '../../src'
import LogViewer from '@sandwich-go/log-viewer'
import {demoLog} from '@/app'
export default {
  name: 'App',
  components: {
    LogViewer
  },
  watch: {
    autoScroll: {
      handler() {
        if (!this.autoScroll) {
          return
        }
        this.log = ''
        const _this = this
        this.$nextTick(function() {
          if (this.autoScroll) {
            this.loading = true
            setTimeout(function() {
              _this.log = demoLog
              _this.loading = false
            }, 1000)
          } else {
            this.log = demoLog
          }
        })
      }
    }
  },
  data() {
    return {
      softWrap: true,
      lineNumber: true,
      autoScroll: true,
      loading: false,
      log: demoLog
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.has-number {
  margin-bottom: 8px;
}
</style>
