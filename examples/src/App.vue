<template>
  <div id="app">
    <div id="measure-vh" style="position: fixed; height: 100vh;"></div>
    <div class="div-flex-start" style="gap: 30px;">
      <div>
        <input type="checkbox" id="softWrap" v-model="softWrap" />
        <label for="softWrap">{{
          softWrap ? 'Soft Wrap' : 'Soft Wrap Off'
        }}</label>
      </div>
      <div>
        <input type="checkbox" id="lineNumber" v-model="lineNumber" />
        <label for="lineNumber">{{
          lineNumber ? 'Line Number' : 'Line Number Off'
        }}</label>
      </div>
      <div>
        <input type="checkbox" id="autoScroll" v-model="autoScroll" />
        <label for="autoScroll">{{
          autoScroll ? 'Auto Scroll' : 'Auto Scroll Off'
        }}</label>
      </div>
      <div>
        <label for="fontSize" style="padding-right: 3px;">FontSize</label>
        <select v-model="fontSize" id="fontSize">
          <option selected>12</option>
          <option>13</option>
          <option>14</option>
        </select>
      </div>
    </div>
    <br />
    <div>
      <log-viewer
        :soft-wrp="softWrap"
        :has-number="lineNumber"
        :custom-style="customStyle"
        :auto-scroll="autoScroll"
        :is-session-start="
          ({line}) => {
            if (line.startsWith('+ kubectl logs')) {
              return `${line} ### POD启动日志`
            }
            return line.startsWith('+')
          }
        "
        :height="logViewHeight(80)"
        :loading="loading"
        :font-size="Number(fontSize)"
        :scroll-duration="0"
        :log="log"
        :session-slot="`session-select-slot`"
        :event-mapping="{
          logserver: {
            textShow: k => {
              return `====> ${k} <====`
            }
          }
        }"
        @event-user="eventUser"
        @event-text-copy="textCopy"
        ref="logViewer"
      >
        <template v-slot:session-select-slot="{options, onChange}">
          <select
            v-if="options.length"
            v-model="currentSession"
            style="width: 100%; font-size: 13px; border-radius: 0;"
            v-on:change="onChange(currentSession)"
          >
            <option value="0" disabled>select session</option>
            <option
              v-for="option in options"
              :key="option.value"
              class="session-highlight"
              :value="option.value"
              ><div style="color: red; background-color: red;">
                {{ option.label }}
              </div></option
            >
          </select>
        </template>
      </log-viewer>
    </div>
  </div>
</template>

<script>
import LogViewer from '../../src'
// import LogViewer from '@sandwich-go/log-viewer/src/index'
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
            _this.customStyle = {'border-top': '3px solid red'}
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
      fontSize: 12,
      customStyle: {},
      log: demoLog,
      currentSession: 0
    }
  },
  methods: {
    eventUser({event, text}) {
      console.log(event, text)
    },
    textCopy({jsEvent, text}) {
      console.log(jsEvent, text)
    },
    logViewHeight(diff) {
      const vh = document.querySelector('#measure-vh')
      return vh ? vh.clientHeight - (diff || 0) : 800
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
}

.div-flex-start {
  display: flex;
  align-items: center;
  color: gray;
  justify-content: flex-start;
  overflow: hidden;
  z-index: 10;
}
</style>
