import pkg from '../package.json'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import vue from 'rollup-plugin-vue2'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
const isProduction = process.env.NODE_ENV === 'production'
export default {
  input: 'packages/index.js',
  plugins: [
    resolve(),
    commonjs({ include: 'node_modules/**' }),
    vue(),
    postcss(),
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**'
    }),
    isProduction && terser(),
  ],
  external(id) {
    // 对babel-runtime corejs等进行external
    return /^@babel|core-js/.test(id) || id === 'vue'
  }
}
