webpackJsonp([6],{115:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{height:"100%"}},[n("nv-head",{attrs:{"page-type":"关于","fix-head":!0,"need-add":!0}}),e._v(" "),e._m(0)],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("dl",{staticClass:"about-info"},[n("dt",[e._v("关于项目")]),e._v(" "),n("dd",[e._v("该项目是基于Cnodejs的api，采用vue.js重写的webapp。")]),e._v(" "),n("dt",[e._v("源码地址")]),e._v(" "),n("dd",[n("a",{attrs:{href:"https://github.com/shinygang/Vue-cnodejs"}},[e._v("https://github.com/shinygang/Vue.cnodejs")])]),e._v(" "),n("dt",[e._v("意见反馈")]),e._v(" "),n("dd",[n("a",{attrs:{href:"https://github.com/shinygang/Vue.cnodejs/issues"}},[e._v("\n        发表意见或者提需求\n      ")])]),e._v(" "),n("dt",[e._v("当前版本")]),e._v(" "),n("dd",[e._v("V2.0")])])}]}},24:function(e,t,n){var s=n(58)(n(84),n(115),null,null);e.exports=s.exports},58:function(e,t){e.exports=function(e,t,n,s){var o,a=e=e||{},r=typeof e.default;"object"!==r&&"function"!==r||(o=e,a=e.default);var i="function"==typeof a?a.options:a;if(t&&(i.render=t.render,i.staticRenderFns=t.staticRenderFns),n&&(i._scopeId=n),s){var u=Object.create(i.computed||null);Object.keys(s).forEach(function(e){var t=s[e];u[e]=function(){return t}}),i.computed=u}return{esModule:o,exports:a,options:i}}},59:function(e,t,n){"use strict";t.__esModule=!0;var s=n(63),o=function(e){return e&&e.__esModule?e:{default:e}}(s);t.default=o.default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}},60:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(1),o=function(e){return e&&e.__esModule?e:{default:e}}(s);t.default={replace:!0,props:{pageType:String,fixHead:Boolean,messageCount:Number,needAdd:{type:Boolean,default:!0}},data:function(){return{nickname:"",profileurl:"",show:!1}},methods:{openMenu:function(){(0,o.default)("html, body, #page").addClass("scroll-hide"),this.show=!this.show},showMenus:function(){this.show=!this.show,(0,o.default)("html, body, #page").removeClass("scroll-hide")}},components:{nvMenu:n(72)}}},61:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={replace:!0,props:["showMenu","pageType","nickName","profileUrl"],components:{userInfo:n(73)}}},62:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(59),o=function(e){return e&&e.__esModule?e:{default:e}}(s),a=n(18);t.default={replace:!0,computed:(0,o.default)({},(0,a.mapGetters)({userInfo:"getUserInfo"})),methods:{goEnter:function(){this.$router.push({name:"login",query:{redirect:encodeURIComponent(this.$route.path)}})},goUser:function(){this.$router.push({name:"user",params:{loginname:this.userInfo.loginname}})}}}},63:function(e,t,n){e.exports={default:n(64),__esModule:!0}},64:function(e,t,n){n(68),e.exports=n(2).Object.assign},65:function(e,t,n){"use strict";var s=n(21),o=n(66),a=n(67),r=n(22),i=n(20),u=Object.assign;e.exports=!u||n(3)(function(){var e={},t={},n=Symbol(),s="abcdefghijklmnopqrst";return e[n]=7,s.split("").forEach(function(e){t[e]=e}),7!=u({},e)[n]||Object.keys(u({},t)).join("")!=s})?function(e,t){for(var n=r(e),u=arguments.length,c=1,l=o.f,f=a.f;u>c;)for(var d,v=i(arguments[c++]),p=l?s(v).concat(l(v)):s(v),_=p.length,m=0;_>m;)f.call(v,d=p[m++])&&(n[d]=v[d]);return n}:u},66:function(e,t){t.f=Object.getOwnPropertySymbols},67:function(e,t){t.f={}.propertyIsEnumerable},68:function(e,t,n){var s=n(19);s(s.S+s.F,"Object",{assign:n(65)})},69:function(e,t){},70:function(e,t){},71:function(e,t,n){n(70);var s=n(58)(n(60),n(76),null,null);e.exports=s.exports},72:function(e,t,n){n(69);var s=n(58)(n(61),n(74),null,null);e.exports=s.exports},73:function(e,t,n){var s=n(58)(n(62),n(75),null,null);e.exports=s.exports},74:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"nav-list",class:{show:e.showMenu},attrs:{id:"sideBar"}},[n("user-info"),e._v(" "),n("section",{staticClass:"list-ul"},[n("router-link",{staticClass:"icon-quanbu iconfont item",attrs:{to:{name:"list",query:{tab:"all"}}}},[e._v("全部")]),e._v(" "),n("router-link",{staticClass:"icon-hao iconfont item",attrs:{to:{name:"list",query:{tab:"good"}}}},[e._v("精华")]),e._v(" "),n("router-link",{staticClass:"icon-fenxiang iconfont item",attrs:{to:{name:"list",query:{tab:"share"}}}},[e._v("分享")]),e._v(" "),n("router-link",{staticClass:"icon-wenda iconfont item",attrs:{to:{name:"list",query:{tab:"ask"}}}},[e._v("问答")]),e._v(" "),n("router-link",{staticClass:"icon-zhaopin iconfont item",attrs:{to:{name:"list",query:{tab:"job"}}}},[e._v("招聘")]),e._v(" "),n("router-link",{staticClass:"icon-xiaoxi iconfont item line",attrs:{to:{name:"message"}}},[e._v("消息")]),e._v(" "),n("router-link",{staticClass:"icon-about iconfont item",attrs:{to:{name:"about"}}},[e._v("关于")])],1)],1)},staticRenderFns:[]}},75:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"user-info"},[e.userInfo.loginname?e._e():n("ul",{staticClass:"login-no"},[n("li",{staticClass:"login",on:{click:e.goEnter}},[n("a",[e._v("登录")])])]),e._v(" "),e.userInfo.loginname?n("div",{staticClass:"login-yes",on:{click:e.goUser}},[n("div",{staticClass:"avatar"},[e.userInfo.avatar_url?n("img",{attrs:{src:e.userInfo.avatar_url}}):e._e()]),e._v(" "),n("div",{staticClass:"info"},[e.userInfo.loginname?n("p",{domProps:{textContent:e._s(e.userInfo.loginname)}}):e._e()])]):e._e()])},staticRenderFns:[]}},76:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.show&&e.fixHead?n("div",{staticClass:"page-cover",on:{click:e.showMenus}}):e._e(),e._v(" "),n("header",{class:{show:e.show&&e.fixHead,"fix-header":e.fixHead,"no-fixed":!e.fixHead},attrs:{id:"hd"}},[n("div",{staticClass:"nv-toolbar"},[e.fixHead?n("div",{staticClass:"toolbar-nav",on:{click:e.openMenu}}):e._e(),e._v(" "),n("span",{domProps:{textContent:e._s(e.pageType)}}),e._v(" "),e.messageCount>0?n("i",{staticClass:"num"},[e._v("\n       "+e._s(e.messageCount)+"\n     ")]):e._e(),e._v(" "),n("router-link",{attrs:{to:"/add"}},[n("i",{directives:[{name:"show",rawName:"v-show",value:!e.messageCount||e.messageCount<=0,expression:"!messageCount || messageCount <= 0"}],staticClass:"iconfont add-icon"},[e._v("")])])],1)]),e._v(" "),e.fixHead?n("nv-menu",{attrs:{"show-menu":e.show,"page-type":e.pageType,"nick-name":e.nickname,"profile-url":e.profileurl}}):e._e()],1)},staticRenderFns:[]}},84:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(71),o=function(e){return e&&e.__esModule?e:{default:e}}(s);t.default={components:{nvHead:o.default}}}});