(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/forum/forum-add-or-update"],{"0bbf":function(e,n,t){"use strict";(function(e){t("99e5");r(t("66fd"));var n=r(t("d549"));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t("543d")["createPage"])},"45e8":function(e,n,t){"use strict";t.r(n);var r=t("5ee2"),u=t.n(r);for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);n["default"]=u.a},"5ee2":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=u(t("a34a"));function u(e){return e&&e.__esModule?e:{default:e}}function a(e,n,t,r,u,a,o){try{var i=e[a](o),f=i.value}catch(c){return void t(c)}i.done?n(f):Promise.resolve(f).then(r,u)}function o(e){return function(){var n=this,t=arguments;return new Promise((function(r,u){var o=e.apply(n,t);function i(e){a(o,r,u,i,f,"next",e)}function f(e){a(o,r,u,i,f,"throw",e)}i(void 0)}))}}var i={data:function(){return{forum:{forumContent:"",id:"",forumName:"",forumTypes:null,forumStateTypes:1},username:"",user:{}}},onLoad:function(n){var t=this;return o(r.default.mark((function u(){var a,o,i,f;return r.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=t,o=e.getStorageSync("nowTable"),r.next=4,a.$api.session(o);case 4:if(i=r.sent,a.user=i.data,"yonghu"==o&&(a.yonghuId=a.user.id),!n.id){r.next=13;break}return a.id=n.id,r.next=11,a.$api.info("forum",a.id);case 11:f=r.sent,a.forum=f.data;case 13:a.styleChange();case 14:case"end":return r.stop()}}),u)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},onSubmitTap:function(){var e=this;return o(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.forum.username=e.username,!e.id){n.next=6;break}return n.next=4,e.$api.update("forum",e.forum);case 4:n.next=8;break;case 6:return n.next=8,e.$api.save("forum",e.forum);case 8:e.$utils.msgBack("操作成功");case 9:case"end":return n.stop()}}),n)})))()}}};n.default=i}).call(this,t("543d")["default"])},"6f95":function(e,n,t){"use strict";var r;t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return r}));var u=function(){var e=this,n=e.$createElement;e._self._c},a=[]},7517:function(e,n,t){},a0bd:function(e,n,t){"use strict";var r=t("7517"),u=t.n(r);u.a},d549:function(e,n,t){"use strict";t.r(n);var r=t("6f95"),u=t("45e8");for(var a in u)"default"!==a&&function(e){t.d(n,e,(function(){return u[e]}))}(a);t("a0bd");var o,i=t("f0c5"),f=Object(i["a"])(u["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);n["default"]=f.exports}},[["0bbf","common/runtime","common/vendor"]]]);