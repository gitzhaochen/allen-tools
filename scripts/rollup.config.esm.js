import base from './rollup.config.base.js'
import pkg from '../package.json'
import path from 'path'
path.join(process.cwd(), './packages/vueLib')
import { getDirsByPath } from './utils'
//所有packages下面的一级目录
const dirsPaths = getDirsByPath(path.join(process.cwd(), './packages'))
//vueLib下面的目录
const vueDirsPaths = getDirsByPath(path.join(process.cwd(), './packages/vueLib')).map(dirPath => `vueLib/${dirPath}`)

const allPaths = ['entry', ...dirsPaths, ...vueDirsPaths]

const config = allPaths.map(dir => {
  return Object.assign({}, base, {
    input: dir === 'entry' ? `./packages/index.js` : `./packages/${dir}/index.js`,
    output: {
      file: dir === 'entry' ? pkg.module : `./dist/esm/${dir}/index.js`,
      format: 'esm'
    }
  })
})

export default config
