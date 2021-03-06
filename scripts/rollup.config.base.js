import pkg from '../package.json'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import vue from 'rollup-plugin-vue'
import { terser } from 'rollup-plugin-terser'
import autoprefixer from 'autoprefixer'
import url from '@rollup/plugin-url';

const isProduction = process.env.NODE_ENV === 'production'
export default {
  plugins: [
    resolve(), //帮助rollup查找npm包路径
    commonjs({ include: 'node_modules/**' }), //将cjs的npm包转成esm,在代码中可以用import引入
    vue({
      style: {
        postcssPlugins: [autoprefixer()]
      }
    }),
    url({publicPath:'static/',destDir:'dist/static'}),
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**'
    }),
    isProduction && terser()
  ],
  external(id) {
    // 对babel-runtime corejs等进行external
    return /^@babel|core-js/.test(id) || id === 'vue'
  }
}
