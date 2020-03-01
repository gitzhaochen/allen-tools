import zgLogo from './zgLogo/index.js'
import zgInput from './zgInput/index.js'

const components = [zgLogo, zgInput]
const vueLibTools = Object.assign({ installed: false }, components)
const install = function(Vue, opts) {
  if (vueLibTools.installed) return
  components.map(component => Vue.component(component.name, component))
  Vue.prototype.$notify = zgNotify
  vueLibTools.installed = true
}

// 用于script标签引入
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

vueLibTools.install = install

export default vueLibTools