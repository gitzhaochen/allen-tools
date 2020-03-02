//js 组件
import treelog from './treelog/index.js'
import windowScaleTip from './windowScaleTip/index.js'

//vue 组件
import zgLogo from './zgLogo/index.js'
import zgInput from './zgInput/index.js'

const components = [zgLogo, zgInput]
const ZgTools = Object.assign({ installed: false, treelog, windowScaleTip }, components)
const install = function(Vue, opts) {
  if (ZgTools.installed) return
  components.map(component => Vue.component(component.name, component))
  ZgTools.installed = true
}

// 用于script标签引入
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

ZgTools.install = install

export default ZgTools
