// rollup.config.js
import vue from 'rollup-plugin-vue'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import {terser} from 'rollup-plugin-terser'
import minimist from 'minimist'

const argv = minimist(process.argv.slice(2))

const config = {
  input: 'src/index.js',
  output: {
    name: 'LogViewer',
    exports: 'named',
    globals: {
      'vue-virtual-scroll-list': 'VirtualList',
      '@babel/runtime/helpers/slicedToArray': '_slicedToArray',
      '@babel/runtime/helpers/defineProperty': '_defineProperty'
    }
  },
  external: [
    'vue-virtual-scroll-list',
    '@babel/runtime/helpers/slicedToArray',
    '@babel/runtime/helpers/defineProperty'
  ],
  plugins: [
    commonjs(),
    vue({
      css: true,
      compileTemplate: true,
      style: {
        postcssPlugins: [require('autoprefixer')]
      }
    }),
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**'
    })
  ]
}

// Only minify browser (iife) version
if (argv.format === 'iife') {
  config.plugins.push(terser())
}

export default config
