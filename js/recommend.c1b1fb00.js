(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["recommend"],{"0e22":function(e,t,n){},1043:function(e,t,n){},"283e":function(e,t,n){
/*!
 * Vue-Lazyload.js v1.2.3
 * (c) 2018 Awe <hilongjw@gmail.com>
 * Released under the MIT License.
 */
!function(t,n){e.exports=n()}(0,function(){"use strict";function e(e){return e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function t(e){e=e||{};var t=arguments.length,r=0;if(1===t)return e;for(;++r<t;){var o=arguments[r];y(e)&&(e=o),i(o)&&n(e,o)}return e}function n(e,n){for(var o in g(e,n),n)if("__proto__"!==o&&r(n,o)){var s=n[o];i(s)?("undefined"===_(e[o])&&"function"===_(s)&&(e[o]=s),e[o]=t(e[o]||{},s)):e[o]=s}return e}function i(e){return"object"===_(e)||"function"===_(e)}function r(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function o(e,t){if(e.length){var n=e.indexOf(t);return n>-1?e.splice(n,1):void 0}}function s(e,t){for(var n=!1,i=0,r=e.length;i<r;i++)if(t(e[i])){n=!0;break}return n}function a(e,t){if("IMG"===e.tagName&&e.getAttribute("data-srcset")){var n=e.getAttribute("data-srcset"),i=[],r=e.parentNode,o=r.offsetWidth*t,s=void 0,a=void 0,u=void 0;n=n.trim().split(","),n.map(function(e){e=e.trim(),s=e.lastIndexOf(" "),-1===s?(a=e,u=999998):(a=e.substr(0,s),u=parseInt(e.substr(s+1,e.length-s-2),10)),i.push([u,a])}),i.sort(function(e,t){if(e[0]<t[0])return-1;if(e[0]>t[0])return 1;if(e[0]===t[0]){if(-1!==t[1].indexOf(".webp",t[1].length-5))return 1;if(-1!==e[1].indexOf(".webp",e[1].length-5))return-1}return 0});for(var l="",d=void 0,c=i.length,h=0;h<c;h++)if(d=i[h],d[0]>=o){l=d[1];break}return l}}function u(e,t){for(var n=void 0,i=0,r=e.length;i<r;i++)if(t(e[i])){n=e[i];break}return n}function l(){if(!L)return!1;var e=!0,t=document;try{var n=t.createElement("object");n.type="image/webp",n.style.visibility="hidden",n.innerHTML="!",t.body.appendChild(n),e=!n.offsetWidth,t.body.removeChild(n)}catch(t){e=!1}return e}function d(e,t){var n=null,i=0;return function(){if(!n){var r=Date.now()-i,o=this,s=arguments,a=function(){i=Date.now(),n=!1,e.apply(o,s)};r>=t?a():n=setTimeout(a,t)}}}function c(e){return null!==e&&"object"===(void 0===e?"undefined":p(e))}function h(e){if(!(e instanceof Object))return[];if(Object.keys)return Object.keys(e);var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t}function f(e){for(var t=e.length,n=[],i=0;i<t;i++)n.push(e[i]);return n}function v(){}var p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},m=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),y=function(e){return null==e||"function"!=typeof e&&"object"!==(void 0===e?"undefined":p(e))},g=function(e,t){if(null===e||void 0===e)throw new TypeError("expected first argument to be an object.");if(void 0===t||"undefined"==typeof Symbol)return e;if("function"!=typeof Object.getOwnPropertySymbols)return e;for(var n=Object.prototype.propertyIsEnumerable,i=Object(e),r=arguments.length,o=0;++o<r;)for(var s=Object(arguments[o]),a=Object.getOwnPropertySymbols(s),u=0;u<a.length;u++){var l=a[u];n.call(s,l)&&(i[l]=s[l])}return i},w=Object.prototype.toString,_=function(t){var n=void 0===t?"undefined":p(t);return"undefined"===n?"undefined":null===t?"null":!0===t||!1===t||t instanceof Boolean?"boolean":"string"===n||t instanceof String?"string":"number"===n||t instanceof Number?"number":"function"===n||t instanceof Function?void 0!==t.constructor.name&&"Generator"===t.constructor.name.slice(0,9)?"generatorfunction":"function":void 0!==Array.isArray&&Array.isArray(t)?"array":t instanceof RegExp?"regexp":t instanceof Date?"date":(n=w.call(t),"[object RegExp]"===n?"regexp":"[object Date]"===n?"date":"[object Arguments]"===n?"arguments":"[object Error]"===n?"error":"[object Promise]"===n?"promise":e(t)?"buffer":"[object Set]"===n?"set":"[object WeakSet]"===n?"weakset":"[object Map]"===n?"map":"[object WeakMap]"===n?"weakmap":"[object Symbol]"===n?"symbol":"[object Map Iterator]"===n?"mapiterator":"[object Set Iterator]"===n?"setiterator":"[object String Iterator]"===n?"stringiterator":"[object Array Iterator]"===n?"arrayiterator":"[object Int8Array]"===n?"int8array":"[object Uint8Array]"===n?"uint8array":"[object Uint8ClampedArray]"===n?"uint8clampedarray":"[object Int16Array]"===n?"int16array":"[object Uint16Array]"===n?"uint16array":"[object Int32Array]"===n?"int32array":"[object Uint32Array]"===n?"uint32array":"[object Float32Array]"===n?"float32array":"[object Float64Array]"===n?"float64array":"object")},k=t,L="undefined"!=typeof window,E=L&&"IntersectionObserver"in window,A={event:"event",observer:"observer"},j=function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}if(L)return"function"==typeof window.CustomEvent?window.CustomEvent:(e.prototype=window.Event.prototype,e)}(),z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return L&&window.devicePixelRatio||e},T=function(){if(L){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch(e){}return e}}(),x={on:function(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];T?e.addEventListener(t,n,{capture:i,passive:!0}):e.addEventListener(t,n,i)},off:function(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e.removeEventListener(t,n,i)}},C=function(e,t,n){var i=new Image;i.src=e.src,i.onload=function(){t({naturalHeight:i.naturalHeight,naturalWidth:i.naturalWidth,src:i.src})},i.onerror=function(e){n(e)}},I=function(e,t){return"undefined"!=typeof getComputedStyle?getComputedStyle(e,null).getPropertyValue(t):e.style[t]},$=function(e){return I(e,"overflow")+I(e,"overflow-y")+I(e,"overflow-x")},O=function(e){if(L){if(!(e instanceof HTMLElement))return window;for(var t=e;t&&t!==document.body&&t!==document.documentElement&&t.parentNode;){if(/(scroll|auto)/.test($(t)))return t;t=t.parentNode}return window}},S={},P=function(){function e(t){var n=t.el,i=t.src,r=t.error,o=t.loading,s=t.bindType,a=t.$parent,u=t.options,l=t.elRenderer;b(this,e),this.el=n,this.src=i,this.error=r,this.loading=o,this.bindType=s,this.attempt=0,this.naturalHeight=0,this.naturalWidth=0,this.options=u,this.rect=null,this.$parent=a,this.elRenderer=l,this.performanceData={init:Date.now(),loadStart:0,loadEnd:0},this.filter(),this.initState(),this.render("loading",!1)}return m(e,[{key:"initState",value:function(){this.el.dataset.src=this.src,this.state={error:!1,loaded:!1,rendered:!1}}},{key:"record",value:function(e){this.performanceData[e]=Date.now()}},{key:"update",value:function(e){var t=e.src,n=e.loading,i=e.error,r=this.src;this.src=t,this.loading=n,this.error=i,this.filter(),r!==this.src&&(this.attempt=0,this.initState())}},{key:"getRect",value:function(){this.rect=this.el.getBoundingClientRect()}},{key:"checkInView",value:function(){return this.getRect(),this.rect.top<window.innerHeight*this.options.preLoad&&this.rect.bottom>this.options.preLoadTop&&this.rect.left<window.innerWidth*this.options.preLoad&&this.rect.right>0}},{key:"filter",value:function(){var e=this;h(this.options.filter).map(function(t){e.options.filter[t](e,e.options)})}},{key:"renderLoading",value:function(e){var t=this;C({src:this.loading},function(n){t.render("loading",!1),e()},function(){e(),t.options.silent||console.warn("VueLazyload log: load failed with loading image("+t.loading+")")})}},{key:"load",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v;return this.attempt>this.options.attempt-1&&this.state.error?(this.options.silent||console.log("VueLazyload log: "+this.src+" tried too more than "+this.options.attempt+" times"),void t()):this.state.loaded||S[this.src]?(this.state.loaded=!0,t(),this.render("loaded",!0)):void this.renderLoading(function(){e.attempt++,e.record("loadStart"),C({src:e.src},function(n){e.naturalHeight=n.naturalHeight,e.naturalWidth=n.naturalWidth,e.state.loaded=!0,e.state.error=!1,e.record("loadEnd"),e.render("loaded",!1),S[e.src]=1,t()},function(t){!e.options.silent&&console.error(t),e.state.error=!0,e.state.loaded=!1,e.render("error",!1)})})}},{key:"render",value:function(e,t){this.elRenderer(this,e,t)}},{key:"performance",value:function(){var e="loading",t=0;return this.state.loaded&&(e="loaded",t=(this.performanceData.loadEnd-this.performanceData.loadStart)/1e3),this.state.error&&(e="error"),{src:this.src,state:e,time:t}}},{key:"destroy",value:function(){this.el=null,this.src=null,this.error=null,this.loading=null,this.bindType=null,this.attempt=0}}]),e}(),H="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",Q=["scroll","wheel","mousewheel","resize","animationend","transitionend","touchmove"],R={rootMargin:"0px",threshold:0},W=function(e){return function(){function t(e){var n=e.preLoad,i=e.error,r=e.throttleWait,o=e.preLoadTop,s=e.dispatchEvent,a=e.loading,u=e.attempt,c=e.silent,h=void 0===c||c,f=e.scale,v=e.listenEvents,p=(e.hasbind,e.filter),m=e.adapter,y=e.observer,g=e.observerOptions;b(this,t),this.version="1.2.3",this.mode=A.event,this.ListenerQueue=[],this.TargetIndex=0,this.TargetQueue=[],this.options={silent:h,dispatchEvent:!!s,throttleWait:r||200,preLoad:n||1.3,preLoadTop:o||0,error:i||H,loading:a||H,attempt:u||3,scale:f||z(f),ListenEvents:v||Q,hasbind:!1,supportWebp:l(),filter:p||{},adapter:m||{},observer:!!y,observerOptions:g||R},this._initEvent(),this.lazyLoadHandler=d(this._lazyLoadHandler.bind(this),this.options.throttleWait),this.setMode(this.options.observer?A.observer:A.event)}return m(t,[{key:"config",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};k(this.options,e)}},{key:"performance",value:function(){var e=[];return this.ListenerQueue.map(function(t){e.push(t.performance())}),e}},{key:"addLazyBox",value:function(e){this.ListenerQueue.push(e),L&&(this._addListenerTarget(window),this._observer&&this._observer.observe(e.el),e.$el&&e.$el.parentNode&&this._addListenerTarget(e.$el.parentNode))}},{key:"add",value:function(t,n,i){var r=this;if(s(this.ListenerQueue,function(e){return e.el===t}))return this.update(t,n),e.nextTick(this.lazyLoadHandler);var o=this._valueFormatter(n.value),u=o.src,l=o.loading,d=o.error;e.nextTick(function(){u=a(t,r.options.scale)||u,r._observer&&r._observer.observe(t);var o=Object.keys(n.modifiers)[0],s=void 0;o&&(s=i.context.$refs[o],s=s?s.$el||s:document.getElementById(o)),s||(s=O(t));var c=new P({bindType:n.arg,$parent:s,el:t,loading:l,error:d,src:u,elRenderer:r._elRenderer.bind(r),options:r.options});r.ListenerQueue.push(c),L&&(r._addListenerTarget(window),r._addListenerTarget(s)),r.lazyLoadHandler(),e.nextTick(function(){return r.lazyLoadHandler()})})}},{key:"update",value:function(t,n){var i=this,r=this._valueFormatter(n.value),o=r.src,s=r.loading,l=r.error;o=a(t,this.options.scale)||o;var d=u(this.ListenerQueue,function(e){return e.el===t});d&&d.update({src:o,loading:s,error:l}),this._observer&&(this._observer.unobserve(t),this._observer.observe(t)),this.lazyLoadHandler(),e.nextTick(function(){return i.lazyLoadHandler()})}},{key:"remove",value:function(e){if(e){this._observer&&this._observer.unobserve(e);var t=u(this.ListenerQueue,function(t){return t.el===e});t&&(this._removeListenerTarget(t.$parent),this._removeListenerTarget(window),o(this.ListenerQueue,t)&&t.destroy())}}},{key:"removeComponent",value:function(e){e&&(o(this.ListenerQueue,e),this._observer&&this._observer.unobserve(e.el),e.$parent&&e.$el.parentNode&&this._removeListenerTarget(e.$el.parentNode),this._removeListenerTarget(window))}},{key:"setMode",value:function(e){var t=this;E||e!==A.observer||(e=A.event),this.mode=e,e===A.event?(this._observer&&(this.ListenerQueue.forEach(function(e){t._observer.unobserve(e.el)}),this._observer=null),this.TargetQueue.forEach(function(e){t._initListen(e.el,!0)})):(this.TargetQueue.forEach(function(e){t._initListen(e.el,!1)}),this._initIntersectionObserver())}},{key:"_addListenerTarget",value:function(e){if(e){var t=u(this.TargetQueue,function(t){return t.el===e});return t?t.childrenCount++:(t={el:e,id:++this.TargetIndex,childrenCount:1,listened:!0},this.mode===A.event&&this._initListen(t.el,!0),this.TargetQueue.push(t)),this.TargetIndex}}},{key:"_removeListenerTarget",value:function(e){var t=this;this.TargetQueue.forEach(function(n,i){n.el===e&&(--n.childrenCount||(t._initListen(n.el,!1),t.TargetQueue.splice(i,1),n=null))})}},{key:"_initListen",value:function(e,t){var n=this;this.options.ListenEvents.forEach(function(i){return x[t?"on":"off"](e,i,n.lazyLoadHandler)})}},{key:"_initEvent",value:function(){var e=this;this.Event={listeners:{loading:[],loaded:[],error:[]}},this.$on=function(t,n){e.Event.listeners[t].push(n)},this.$once=function(t,n){function i(){r.$off(t,i),n.apply(r,arguments)}var r=e;e.$on(t,i)},this.$off=function(t,n){n?o(e.Event.listeners[t],n):e.Event.listeners[t]=[]},this.$emit=function(t,n,i){e.Event.listeners[t].forEach(function(e){return e(n,i)})}}},{key:"_lazyLoadHandler",value:function(){var e=this;this.ListenerQueue.forEach(function(t,n){t.state.loaded||t.checkInView()&&t.load(function(){!t.error&&t.loaded&&e.ListenerQueue.splice(n,1)})})}},{key:"_initIntersectionObserver",value:function(){var e=this;E&&(this._observer=new IntersectionObserver(this._observerHandler.bind(this),this.options.observerOptions),this.ListenerQueue.length&&this.ListenerQueue.forEach(function(t){e._observer.observe(t.el)}))}},{key:"_observerHandler",value:function(e,t){var n=this;e.forEach(function(e){e.isIntersecting&&n.ListenerQueue.forEach(function(t){if(t.el===e.target){if(t.state.loaded)return n._observer.unobserve(t.el);t.load()}})})}},{key:"_elRenderer",value:function(e,t,n){if(e.el){var i=e.el,r=e.bindType,o=void 0;switch(t){case"loading":o=e.loading;break;case"error":o=e.error;break;default:o=e.src}if(r?i.style[r]='url("'+o+'")':i.getAttribute("src")!==o&&i.setAttribute("src",o),i.setAttribute("lazy",t),this.$emit(t,e,n),this.options.adapter[t]&&this.options.adapter[t](e,this.options),this.options.dispatchEvent){var s=new j(t,{detail:e});i.dispatchEvent(s)}}}},{key:"_valueFormatter",value:function(e){var t=e,n=this.options.loading,i=this.options.error;return c(e)&&(e.src||this.options.silent||console.error("Vue Lazyload warning: miss src with "+e),t=e.src,n=e.loading||this.options.loading,i=e.error||this.options.error),{src:t,loading:n,error:i}}}]),t}()},D=function(e){return{props:{tag:{type:String,default:"div"}},render:function(e){return!1===this.show?e(this.tag):e(this.tag,null,this.$slots.default)},data:function(){return{el:null,state:{loaded:!1},rect:{},show:!1}},mounted:function(){this.el=this.$el,e.addLazyBox(this),e.lazyLoadHandler()},beforeDestroy:function(){e.removeComponent(this)},methods:{getRect:function(){this.rect=this.$el.getBoundingClientRect()},checkInView:function(){return this.getRect(),L&&this.rect.top<window.innerHeight*e.options.preLoad&&this.rect.bottom>0&&this.rect.left<window.innerWidth*e.options.preLoad&&this.rect.right>0},load:function(){this.show=!0,this.state.loaded=!0,this.$emit("show",this)}}}},B=function(){function e(t){var n=t.lazy;b(this,e),this.lazy=n,n.lazyContainerMananger=this,this._queue=[]}return m(e,[{key:"bind",value:function(e,t,n){var i=new M({el:e,binding:t,vnode:n,lazy:this.lazy});this._queue.push(i)}},{key:"update",value:function(e,t,n){var i=u(this._queue,function(t){return t.el===e});i&&i.update({el:e,binding:t,vnode:n})}},{key:"unbind",value:function(e,t,n){var i=u(this._queue,function(t){return t.el===e});i&&(i.clear(),o(this._queue,i))}}]),e}(),N={selector:"img"},M=function(){function e(t){var n=t.el,i=t.binding,r=t.vnode,o=t.lazy;b(this,e),this.el=null,this.vnode=r,this.binding=i,this.options={},this.lazy=o,this._queue=[],this.update({el:n,binding:i})}return m(e,[{key:"update",value:function(e){var t=this,n=e.el,i=e.binding;this.el=n,this.options=k({},N,i.value),this.getImgs().forEach(function(e){t.lazy.add(e,k({},t.binding,{value:{src:e.dataset.src,error:e.dataset.error,loading:e.dataset.loading}}),t.vnode)})}},{key:"getImgs",value:function(){return f(this.el.querySelectorAll(this.options.selector))}},{key:"clear",value:function(){var e=this;this.getImgs().forEach(function(t){return e.lazy.remove(t)}),this.vnode=null,this.binding=null,this.lazy=null}}]),e}();return{install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=W(e),i=new n(t),r=new B({lazy:i}),o="2"===e.version.split(".")[0];e.prototype.$Lazyload=i,t.lazyComponent&&e.component("lazy-component",D(i)),o?(e.directive("lazy",{bind:i.add.bind(i),update:i.update.bind(i),componentUpdated:i.lazyLoadHandler.bind(i),unbind:i.remove.bind(i)}),e.directive("lazy-container",{bind:r.bind.bind(r),update:r.update.bind(r),unbind:r.unbind.bind(r)})):(e.directive("lazy",{bind:i.lazyLoadHandler.bind(i),update:function(e,t){k(this.vm.$refs,this.vm.$els),i.add(this.el,{modifiers:this.modifiers||{},arg:this.arg,value:e,oldValue:t},{context:this.vm})},unbind:function(){i.remove(this.el)}}),e.directive("lazy-container",{update:function(e,t){r.update(this.el,{modifiers:this.modifiers||{},arg:this.arg,value:e,oldValue:t},{context:this.vm})},unbind:function(){r.unbind(this.el)}}))}}})},"2d72":function(e,t,n){"use strict";var i=n("5e3c"),r=n.n(i);r.a},"343b":function(e,t,n){"use strict";var i=n("283e"),r=n.n(i);t["a"]=r.a},"3bb2":function(e,t,n){"use strict";var i=n("0e22"),r=n.n(i);r.a},4802:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"recommend"},[n("slide",e._l(e.recommend.banner,function(t,i){return n("div",{key:i},[n("img",{staticClass:"needsclick",attrs:{src:t.img},on:{click:function(n){return e.goAlbum(t.albumId)}}})])}),0),e._l(e.recommend.recommend,function(e,t){return n("module",{key:t,attrs:{module:e}})})],2)},r=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"recommend-mod"},[n("h2",{staticClass:"mod-title"},[n("span",{staticClass:"txt"},[e._v(e._s(e.module.type))])]),n("list",{attrs:{data:e.module.item}})],1)},s=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"radio-list"},e._l(e.data,function(t,i){return n("li",{key:i,staticClass:"item bBor",on:{click:function(n){return e.goAlbum(t.albumId)}}},[n("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:t.cover,expression:"item.cover",arg:"background-image"}],staticClass:"pic"},[n("div",{staticClass:"mask"}),n("i",{staticClass:"iconfont icon-play"})]),n("div",{staticClass:"main"},[n("div",{staticClass:"inner"},[n("div",{staticClass:"title"},[e._v(e._s(t.title))]),n("div",{staticClass:"info"},[e._v(e._s(t.info))]),n("div",{staticClass:"meta"},[e._v(e._s(t.meta))])])])])}),0)},u=[],l=(n("66cf"),n("343b")),d=n("2b0e");d["a"].use(l["a"],{loading:n("1579"),error:n("1579")});var c={props:["data"],methods:{goAlbum:function(e){this.$router.push({name:"album",params:{id:e}})}}},h=c,f=(n("3bb2"),n("2877")),v=Object(f["a"])(h,a,u,!1,null,"08fc44f0",null),p=v.exports,b={props:["module"],components:{List:p}},m=b,y=(n("8399"),Object(f["a"])(m,o,s,!1,null,"d9955bda",null)),g=y.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"slide",staticClass:"slide"},[n("div",{ref:"slideGroup",staticClass:"slide-group"},[e._t("default")],2),e.showDot?n("div",{staticClass:"dots"},e._l(e.dots,function(t,i){return n("span",{key:i,staticClass:"dot",class:{active:e.currentPageIndex===i}})}),0):e._e()])},_=[],k=(n("c5f6"),n("2d08")),L=n("b5ae"),E=n("1fba"),A="slide",j={name:A,props:{loop:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!0},interval:{type:Number,default:4e3},showDot:{type:Boolean,default:!0},click:{type:Boolean,default:!0},threshold:{type:Number,default:.3},speed:{type:Number,default:400}},data:function(){return{dots:[],currentPageIndex:0}},mounted:function(){var e=this;this.update(),window.addEventListener("resize",function(){e.slide&&e.slide.enabled&&(e.resizeTimer&&e.resizeTimer.stop(),e.resizeTimer=Object(L["a"])(function(){e.slide.isInTransition?e._onScrollEnd():e.autoPlay&&e._play(),e.refresh()},60))})},activated:function(){if(this.slide){this.slide.enable();var e=this.slide.getCurrentPage().pageX;this.slide.goToPage(e,0,0),this.currentPageIndex=e,this.autoPlay&&this._play()}},deactivated:function(){this.slide.disable(),this.timer&&this.timer.stop()},beforeDestroy:function(){this.slide.disable(),this.timer&&this.timer.stop()},methods:{update:function(){var e=this;this.slide&&this.slide.destroy(),this.$nextTick(function(){e.init()})},refresh:function(){this._setSlideWidth(!0),this.slide.refresh()},prev:function(){this.slide.prev()},next:function(){this.slide.next()},init:function(){this.timer&&this.timer.stop(),this.currentPageIndex=0,this._setSlideWidth(),this.showDot&&this._initDots(),this._initSlide(),this.autoPlay&&this._play()},_setSlideWidth:function(e){this.children=this.$refs.slideGroup.children;for(var t=0,n=this.$refs.slide.clientWidth,i=0;i<this.children.length;i++){var r=this.children[i];Object(k["a"])(r,"slide-item"),r.style.width=n+"px",t+=n}this.loop&&!e&&(t+=2*n),this.$refs.slideGroup.style.width=t+"px"},_initSlide:function(){var e=this;this.slide=new E["a"](this.$refs.slide,{scrollX:!0,scrollY:!1,momentum:!1,snap:{loop:this.loop,threshold:this.threshold,speed:this.speed},bounce:!1,stopPropagation:!0,click:this.click}),this.slide.on("scrollEnd",this._onScrollEnd),this.slide.on("touchEnd",function(){e.autoPlay&&e._play()}),this.slide.on("beforeScrollStart",function(){e.autoPlay&&e.timer&&e.timer.stop()})},_onScrollEnd:function(){var e=this.slide.getCurrentPage().pageX;this.currentPageIndex=e,this.autoPlay&&this._play()},_initDots:function(){this.dots=new Array(this.children.length)},_play:function(){var e=this;this.timer&&this.timer.stop(),this.timer=Object(L["a"])(function(){e.slide.next()},this.interval)}},watch:{loop:function(){this.update()},autoPlay:function(){this.update()},speed:function(){this.update()},threshold:function(){this.update()}}},z=j,T=(n("2d72"),Object(f["a"])(z,w,_,!1,null,"959b3982",null)),x=T.exports,C=n("f8c8"),I={data:function(){return{recommend:{}}},methods:{getRecommend:function(){this.recommend=C["a"].getRecommend()},goAlbum:function(e){this.$router.push({name:"album",params:{id:e}})}},mounted:function(){this.getRecommend()},components:{Slide:x,Module:g}},$=I,O=(n("8624"),Object(f["a"])($,i,r,!1,null,"05deff0b",null));t["default"]=O.exports},"5e3c":function(e,t,n){},"66cf":function(e,t,n){"use strict";n("68ef")},8399:function(e,t,n){"use strict";var i=n("a140"),r=n.n(i);r.a},8624:function(e,t,n){"use strict";var i=n("1043"),r=n.n(i);r.a},a140:function(e,t,n){}}]);
//# sourceMappingURL=recommend.c1b1fb00.js.map