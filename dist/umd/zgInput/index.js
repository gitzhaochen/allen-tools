!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("core-js/modules/es.function.name"),require("core-js/modules/es.object.assign")):"function"==typeof define&&define.amd?define(["core-js/modules/es.function.name","core-js/modules/es.object.assign"],t):(e=e||self).ZgTools_zgInput=t()}(this,(function(){"use strict";var e={name:"ZgInput",data:function(){return{}},mounted:function(){var e=Object.assign({},{x:"ZgInput"});console.info(e)}};const t="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());let n;const o={};const s=function(e,t,n,o,s,i,d,a,r,c){"boolean"!=typeof d&&(r=a,a=d,d=!1);const l="function"==typeof n?n.options:n;let u;if(e&&e.render&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0,s&&(l.functional=!0)),o&&(l._scopeId=o),i?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,r(e)),e&&e._registeredComponents&&e._registeredComponents.add(i)},l._ssrRegister=u):t&&(u=d?function(e){t.call(this,c(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,a(e))}),u)if(l.functional){const e=l.render;l.render=function(t,n){return u.call(n),e(t,n)}}else{const e=l.beforeCreate;l.beforeCreate=e?[].concat(e,u):[u]}return n}({render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"zg-input"},[this._v("这是一个ZgInput组件")])},staticRenderFns:[]},(function(e){e&&e("data-v-34ab1d2c_0",{source:".zg-input[data-v-34ab1d2c]{font-size:20px}",map:void 0,media:void 0})}),e,"data-v-34ab1d2c",!1,void 0,!1,(function(e){return(e,s)=>function(e,s){const i=t?s.media||"default":e,d=o[i]||(o[i]={ids:new Set,styles:[]});if(!d.ids.has(e)){d.ids.add(e);let t=s.source;if(s.map&&(t+="\n/*# sourceURL="+s.map.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s.map))))+" */"),d.element||(d.element=document.createElement("style"),d.element.type="text/css",s.media&&d.element.setAttribute("media",s.media),void 0===n&&(n=document.head||document.getElementsByTagName("head")[0]),n.appendChild(d.element)),"styleSheet"in d.element)d.styles.push(t),d.element.styleSheet.cssText=d.styles.filter(Boolean).join("\n");else{const e=d.ids.size-1,n=document.createTextNode(t),o=d.element.childNodes;o[e]&&d.element.removeChild(o[e]),o.length?d.element.insertBefore(n,o[e]):d.element.appendChild(n)}}}(e,s)}),void 0,void 0);return s.install=function(e){e.component(s.name,s)},s}));