webpackJsonp([2],{hyde:function(e,t){},"n+aD":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n("tDEZ");var a=n("M9vp"),o=n("Xxa5"),r=n.n(o),i=n("exGp"),s=n.n(i),c=(n("UwZg"),n("WN1D")),l=(n("MWi0"),n("rR2l")),u=(n("Qn8x"),n("LvBD")),d=(n("0eFu"),n("mkZp")),p=n("7+uW"),v=(n("2bvH"),n("nUeE")),f=n.n(v),h=n("Qoap");p.default.use(c.a).use(l.a).use(u.a).use(d.a);var g={props:{onLogin:Function},data:function(){return{tel:"13249064450",code:"143934",imgCode:"",loading:!1}},computed:{disabled:function(){return 11!==this.tel.length||this.code.length<6},redirect:function(){return this.$route.query.redirect}},created:function(){this.$route.query.authType&&(this.authType=this.$route.query.authType)},methods:{handleGetCode:function(){var e=this;return s()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:h.a.getCode(e.tel,e.imgCode).then(function(e){console.log(e)});case 1:case"end":return t.stop()}},t,e)}))()},handleLogin:function(){var e=this;return s()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:h.a.login(e.tel,e.code).then(function(e){0==+e._errCode?(f.a.set("userInfo",e._data),f.a.set("token",e._data.token)):Object(a.a)(e._errStr)});case 1:case"end":return t.stop()}},t,e)}))()}}},m={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"view view-login"},[n("div",{staticClass:"form"},[n("van-cell-group",[n("div",{staticClass:"form-item"},[n("van-field",{staticClass:"tel-input",attrs:{placeholder:"手机号码"},model:{value:e.tel,callback:function(t){e.tel=t},expression:"tel"}}),e._v(" "),n("van-button",{staticClass:"code-button",attrs:{type:"primary",size:"small",disabled:11!==e.tel.length},on:{click:e.handleGetCode}},[e._v("获取验证码")])],1),e._v(" "),n("van-field",{attrs:{placeholder:"短信验证码"},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}})],1),e._v(" "),n("van-button",{staticClass:"button",attrs:{type:"primary",size:"large",loading:e.loading,disabled:e.disabled},on:{click:e.handleLogin}},[e._v("立即登录")])],1)])},staticRenderFns:[]};var b=n("VU/8")(g,m,!1,function(e){n("hyde")},"data-v-1ee05139",null);t.default=b.exports}});
//# sourceMappingURL=2.1d979d9f2157b82354fe.js.map