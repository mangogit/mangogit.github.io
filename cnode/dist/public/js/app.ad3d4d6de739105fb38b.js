webpackJsonp([9],{11:function(e,t,n){"use strict";var a=n(23),u=function(e){return e&&e.__esModule?e:{default:e}}(a);t.getLastTimeStr=function(e,t){return t?u.default.MillisecondToDate(e):u.default.fmtDate(new Date(e),"yyyy-MM-dd hh:mm")},t.getTabStr=function(e,t,n){var a="";if(n)a="置顶";else if(t)a="精华";else switch(e){case"share":a="分享";break;case"ask":a="问答";break;case"job":a="招聘";break;default:a="暂无"}return a},t.getTabClassName=function(e,t,n){var a="";if(n)a="top";else if(t)a="good";else switch(e){case"share":a="share";break;case"ask":a="ask";break;case"job":a="job";break;default:a="default"}return a}},12:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(0),o=a(u),r=n(1),s=a(r);t.default={install:function(){var e=null;o.default.prototype.$alert=function(t){(0,s.default)("alertweek").remove();var n='<div class="weekalert" id="alertweek"> </div>';(0,s.default)("body").append(n),n.html(t),n.addClass("alert-show"),clearTimeout(e),e=setTimeout(function(){n.remove()},2e3)}}}},13:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){n.e(7).then(function(){e(n(25))}.bind(null,n)).catch(n.oe)},u=function(e){n.e(1).then(function(){e(n(26))}.bind(null,n)).catch(n.oe)},o=[{path:"/",name:"home",component:a},{path:"/cnodevue",name:"cnodevue",component:a},{path:"/list",name:"list",component:u},{path:"/topic/:id",name:"topic",component:function(e){n.e(0).then(function(){e(n(30))}.bind(null,n)).catch(n.oe)}},{path:"/add",name:"add",component:function(e){n.e(3).then(function(){e(n(29))}.bind(null,n)).catch(n.oe)},meta:{requiresAuth:!0}},{path:"/message",name:"message",component:function(e){n.e(5).then(function(){e(n(28))}.bind(null,n)).catch(n.oe)},meta:{requiresAuth:!0}},{path:"/user/:loginname",name:"user",component:function(e){n.e(4).then(function(){e(n(31))}.bind(null,n)).catch(n.oe)}},{path:"/about",name:"about",component:function(e){n.e(6).then(function(){e(n(24))}.bind(null,n)).catch(n.oe)}},{path:"/login",name:"login",component:function(e){n.e(2).then(function(){e(n(27))}.bind(null,n)).catch(n.oe)}},{path:"*",component:a}];t.default=o},14:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(0),o=a(u),r=n(18),s=a(r);o.default.use(s.default);var c=new s.default.Store({state:{userInfo:{}},getters:{getUserInfo:function(e){return e.userInfo}},mutations:{setUserInfo:function(e,t){e.userInfo=t}},actions:{setUserInfo:function(e,t){(0,e.commit)("setUserInfo",t)}}});t.default=c},23:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var u=n(55),o=a(u),r=n(56),s=a(r),c={checkEmail:function(e){return!!/^([a-zA-Z0-9_\\.\\-])+\\@(([a-zA-Z0-9\\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e)},checkPhone:function(e){return!!/^1\d{10}$/.test(e)}},i=function(e){if(!e)return[];[/```.+？```/g,/^```[\s\S]+?^```/gm,/`[\s\S]+?`/g,/^.*/gm,/\b\S*?@[^\s]*?\..+?\b/g,/\[@.+?\\]\(\/.+?\)/g].forEach(function(t){e=e.replace(t,"")});var t=e.match(/@[a-zA-Z0-9\-_]+\b/gim),n=[];if(t)for(var a=0,u=t.length;a<u;a++){var r=t[a];r=r.slice(1),n.push(r)}return n=o.default.uniq(n)},l=function(e){for(var t=i(e),n=0,a=t.length;n<a;n++){var u=t[n];e=e.replace(new RegExp("@"+u+"\\b(?!\\])","g"),"[@"+u+"](/user/"+u+")")}return e},f=function(e,t){var n={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length)));for(var a in n)new RegExp("("+a+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?n[a]:("00"+n[a]).substr((""+n[a]).length)));return t},d=function(e){var t="";if(null!==e&&""!==e){t=(new s.default).format(e,"zh_CN")}return t};t.getLastTimeStr=function(e,t){return t?d(e):f(new Date(e),"yyyy-MM-dd hh:mm")},t.getTabInfo=function(e,t,n,a){var u="",o="";if(n)u="置顶",o="top";else if(t)u="精华",o="good";else switch(e){case"share":u="分享",o="share";break;case"ask":u="问答",o="ask";break;case"job":u="招聘",o="job";break;default:u="暂无",o="default"}return a?o:u},t.throttle=function(e,t,n){var a=void 0,u=new Date;return function(){var o=this,r=arguments,s=new Date;clearTimeout(a),s-u>=n?(e.apply(o,r),u=s):a=setTimeout(e,t)}},t.linkUsers=l,t.fetchUsers=i,t.getCheck=c,t.fmtDate=f,t.MillisecondToDate=d},32:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var u=n(15),o=a(u),r=n(0),s=a(r),c=n(17),i=a(c),l=n(1),f=a(l),d=n(13),h=a(d),m=n(12),p=a(m),g=n(14),b=a(g),v=n(16),k=a(v),w=n(11),M=a(w);s.default.use(i.default),s.default.use(p.default),f.default.ajaxSettings.crossDomain=!0,(0,o.default)(M.default).forEach(function(e){return s.default.filter(e,M.default[e])});var y=new i.default({base:"dist",mode:"history",routes:h.default});k.default.attach(document.body),window.sessionStorage.user&&b.default.dispatch("setUserInfo",JSON.parse(window.sessionStorage.user)),y.beforeEach(function(e,t,n){(0,f.default)("html, body, #page").removeClass("scroll-hide"),e.matched.some(function(e){return e.meta.requiresAuth})?b.default.state.userInfo.userId?n():n({path:"/login",query:{redirect:e.fullPath}}):n()}),new s.default({router:y,store:b.default}).$mount("#app")}},[32]);