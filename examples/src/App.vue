<template>
  <div id="app">
    <div style="position: absolute; left: 6px;">
      <input type="checkbox" id="checkbox" v-model="softWrap" />
      <label for="checkbox">{{
        softWrap ? 'Soft Wrap' : 'Soft Wrap Off'
      }}</label>
    </div>
    <br />
    <div>
      <log-viewer
        class="has-number"
        v-for="hasNumber in hasNumbers"
        :key="hasNumber"
        :soft-wrap="softWrap"
        :height="100"
        :log="log"
        :has-number="hasNumber"
      />
    </div>
  </div>
</template>

<script>
// import LogViewer from '../../src'
import LogViewer from '@sandwich-go/log-viewer'
export default {
  name: 'App',
  components: {
    LogViewer
  },
  watch: {
    softWrap: {
      handler(val) {
        console.log('softWrap watch ', val)
      },
      immediate: true
    }
  },
  data() {
    return {
      softWrap: true,
      log:
        'test number linetest number linetest number linetest number linetest number linetest number lumber linetest number linetest number linetumber linetest number linetest number linetumber linetest number linetest number linetumber linetest number linetest number linetumber linetest number linetest number linetumber linetest number linetest number linetumber linetest number linetest number linetumber linetest number linetest number linetumber linetest number linetest number linetumber linetest number linetest number linetinetest number linetest number linetest number linetest number linetest number linetest number linetest number linetest number line.\ntesinetest number linetest number linetest number linetest number linetest number luinetest number linetest number linetest number linetest number linetest number luinetest number linetest number linetest number linetest number linetest number luinetest number linetest number linetest number linetest number linetest number luinetest number linetest number linetest number linetest number linetest number luinetest number linetest number linetest number linetest number linetest number luinetest number linetest number linetest number linetest number linetest number luinetest number linetest number linetest number linetest number linetest number luinetest number linetest number linetest number linetest number linetest number luinetest number linetest number linetest number linetest number linetest number luinetest number linetest number linetest number linetest number linetest number luinetest number linetest number linetest number linetest number linetest number luinetest number linetest number linetest number linetest number linetest number luinetest number linetest number linetest number linetest number linetest number luinetest number linetest number linetest number linetest number linetest number luinetest number linetest number linetest number linetest number linetest number luinetest number linetest number linetest number linetest number linetest number luinetest number linetest number linetest number linetest number linetest number luinetest number linetest number linetest number linetest number linetest number luinetest number linetest number linetest number linetest number linetest number luinetest number linetest number linetest number linetest number linetest number lut number line.',
      hasNumbers: [true, false]
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
