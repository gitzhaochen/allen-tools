import zgLogo from './zgLogo/index.js'
import zgInput from './zgInput/index.js'

const components = [zgLogo, zgInput]
const zgVueLib = Object.assign({ installed: false }, components)
const install = function(Vue, opts) {
  if (zgVueLib.installed) return
  components.map(component => Vue.component(component.name, component))
  zgVueLib.installed = true
}

// 用于script标签引入
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

zgVueLib.install = install

export default zgVueLib