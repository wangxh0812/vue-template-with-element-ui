webpackJsonp([6,4],{0:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}n(138),n(137);var s=n(126),i=r(s),a=n(4),u=r(a),o=n(164),l=r(o),c=n(144),d=r(c),f=n(78),p=r(f),v=n(82);u.default.use(i.default),u.default.use(l.default);var _=new l.default({routes:p.default});new u.default({store:v.store,router:_,el:"#app",template:"<App/>",components:{App:d.default}})},78:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=[{path:"/",component:function(t){return n.e(3,function(e){var n=[e(150)];t.apply(null,n)}.bind(this))}},{path:"/question",component:function(t){return n.e(1,function(e){var n=[e(151)];t.apply(null,n)}.bind(this))}},{path:"/user",component:function(t){return n.e(0,function(e){var n=[e(153)];t.apply(null,n)}.bind(this))}},{path:"/table",component:function(t){return n.e(2,function(e){var n=[e(152)];t.apply(null,n)}.bind(this))}}]},79:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={register:function(t,e){var n=t.commit;setTimeout(function(){n("register",e)},500)}}},80:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={unregisterdUsers:function(t){return t.users.filter(function(t){return!t.registered})},registerdUsers:function(t){return t.registrations},totalRegistrations:function(t){return t.registrations.length}}},81:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={register:function(t,e){var n=new Date,r=t.users.find(function(t){return t.id===e});r.registered=!0;var s={userId:e,name:r.name,date:n.getMonth()+"/"+n.getDay()};t.registrations.push(s)},unregister:function(t,e){var n=t.users.find(function(t){return t.id===e.userId});n.registered=!1;var r=t.registrations.find(function(t){return t.userId===e.userId});t.registrations.splice(t.registrations.indexOf(r),1)}}},82:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.store=void 0;var s=n(4),i=r(s),a=n(17),u=r(a),o=n(80),l=r(o),c=n(81),d=r(c),f=n(79),p=r(f);i.default.use(u.default);var v={users:[{id:1,name:"Kevin",registered:!1},{id:3,name:"Aqua",registered:!1},{id:2,name:"Jim",registered:!1}],registrations:[]};e.store=new u.default.Store({state:v,getters:l.default,mutations:d.default,actions:p.default})},83:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),n(139);var s=n(148),i=r(s),a=n(147),u=r(a);e.default={name:"app",components:{NavMenu:i.default,Container:u.default}}},86:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(149),i=r(s);e.default={components:{TopBar:i.default}}},87:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{avatar_url:"http://img0.imgtn.bdimg.com/it/u=1787407765,2524017231&fm=11&gp=0.jpg"}},methods:{signOut:function(){console.log("退出登录")}}}},137:function(t,e){},138:function(t,e){},139:function(t,e){},141:function(t,e){},144:function(t,e,n){var r,s;r=n(83);var i=n(154);s=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(s=r=r.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,t.exports=r},147:function(t,e,n){var r,s;n(141),r=n(86);var i=n(162);s=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(s=r=r.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,t.exports=r},148:function(t,e,n){var r,s,i=n(158);s=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(s=r=r.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,t.exports=r},149:function(t,e,n){var r,s;r=n(87);var i=n(159);s=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(s=r=r.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,t.exports=r},154:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("NavMenu"),t._v(" "),n("Container")],1)},staticRenderFns:[]}},158:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-menu",{attrs:{"default-active":"1",id:"nav-menu",theme:"dark"}},[n("div",{staticClass:"logo"},[n("router-link",{attrs:{to:"/"}},[n("p",[t._v("tmpbook")])])],1),t._v(" "),n("el-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-plus"}),t._v("导航一")]),t._v(" "),n("el-menu-item",{attrs:{index:"1-1"}},[n("router-link",{staticClass:"nav-link",attrs:{to:"/question"}},[n("i",{staticClass:"el-icon-document"}),t._v("Ajax Demo")])],1),t._v(" "),n("el-menu-item",{attrs:{index:"1-2"}},[n("router-link",{staticClass:"nav-link",attrs:{to:"/user"}},[n("i",{staticClass:"el-icon-document"}),t._v("Vuex(User)")])],1)],2),t._v(" "),n("el-menu-item",{attrs:{index:"2"}},[n("router-link",{staticClass:"nav-link",attrs:{to:"/table"}},[n("i",{staticClass:"el-icon-document"}),t._v("表格")])],1)],1)},staticRenderFns:[]}},159:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",{staticClass:"top-bar"},[n("div",{staticClass:"top-wrapper"},[n("div",{staticClass:"user-area pull-right"},[n("div",{staticClass:"user-avatar"},[n("span",{staticClass:"avatar-img",style:{backgroundImage:"url("+t.avatar_url+")"}}),t._v(" "),n("i",{staticClass:"el-icon-arrow-down"}),t._v(" "),n("div",{staticClass:"drop-menu"},[n("ul",[n("li",[n("i",{staticClass:"iconfont"},[t._v("")]),t._v("管理员")]),t._v(" "),n("li",{on:{click:t.signOut}},[n("i",{staticClass:"iconfont"},[t._v("")]),t._v("退出")])])])])]),t._v(" "),n("el-col",{staticClass:"search-area pull-right",attrs:{span:8}},[n("el-form",[n("el-form-item",[n("i",{staticClass:"el-icon-search"}),t._v(" "),n("el-input",{attrs:{placeholder:"搜索"}})],1)],1)],1)],1)])},staticRenderFns:[]}},162:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"container"}},[n("TopBar"),t._v(" "),n("transition",{attrs:{name:"slide-fade"}},[n("router-view",{staticClass:"content"})],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=app.ae7868f61633118e4719.js.map