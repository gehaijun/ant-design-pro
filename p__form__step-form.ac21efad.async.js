(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[32],{"0JQy":function(e,t){var n="\\ud800-\\udfff",r="\\u0300-\\u036f",o="\\ufe20-\\ufe2f",a="\\u20d0-\\u20ff",c=r+o+a,u="\\ufe0e\\ufe0f",i="["+n+"]",s="["+c+"]",l="\\ud83c[\\udffb-\\udfff]",f="(?:"+s+"|"+l+")",p="[^"+n+"]",m="(?:\\ud83c[\\udde6-\\uddff]){2}",d="[\\ud800-\\udbff][\\udc00-\\udfff]",y="\\u200d",v=f+"?",b="["+u+"]?",g="(?:"+y+"(?:"+[p,m,d].join("|")+")"+b+v+")*",h=b+v+g,x="(?:"+[p+s+"?",s,m,d,i].join("|")+")",E=RegExp(l+"(?="+l+")|"+x+h,"g");function w(e){return e.match(E)||[]}e.exports=w},"5rEg":function(e,t,n){"use strict";var r=n("mh/l"),o=n("q1tI"),a=n("TSYQ"),c=n.n(a),u=n("H84U");function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(e){return o["createElement"](u["a"],null,(function(t){var n,r=t.getPrefixCls,a=t.direction,u=e.prefixCls,s=e.className,l=void 0===s?"":s,f=r("input-group",u),p=c()(f,(n={},i(n,"".concat(f,"-lg"),"large"===e.size),i(n,"".concat(f,"-sm"),"small"===e.size),i(n,"".concat(f,"-compact"),e.compact),i(n,"".concat(f,"-rtl"),"rtl"===a),n),l);return o["createElement"]("span",{className:p,style:e.style,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur},e.children)}))},l=s,f=n("w6Tc"),p=n.n(f),m=n("gZBC"),d=n.n(m),y=n("2/Rp"),v=n("3Nzz"),b=n("0n0R");function g(e){return g="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(){return x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x.apply(this,arguments)}function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t,n){return t&&w(e.prototype,t),n&&w(e,n),e}function j(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}function S(e,t){return S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},S(e,t)}function C(e){var t=I();return function(){var n,r=k(e);if(t){var o=k(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return P(this,n)}}function P(e,t){return!t||"object"!==g(t)&&"function"!==typeof t?F(e):t}function F(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}var A=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},T=function(e){j(n,e);var t=C(n);function n(){var e;return E(this,n),e=t.apply(this,arguments),e.saveInput=function(t){e.input=t},e.onChange=function(t){var n=e.props,r=n.onChange,o=n.onSearch;t&&t.target&&"click"===t.type&&o&&o(t.target.value,t),r&&r(t)},e.onMouseDown=function(t){document.activeElement===e.input.input&&t.preventDefault()},e.onSearch=function(t){var n=e.props,r=n.onSearch,o=n.loading,a=n.disabled;o||a||r&&r(e.input.input.value,t)},e.renderLoading=function(t){var n=e.props,r=n.enterButton,a=n.size;return r?o["createElement"](v["b"].Consumer,{key:"enterButton"},(function(e){return o["createElement"](y["a"],{className:"".concat(t,"-button"),type:"primary",size:a||e},o["createElement"](d.a,null))})):o["createElement"](d.a,{className:"".concat(t,"-icon"),key:"loadingIcon"})},e.renderSuffix=function(t){var n=e.props,r=n.suffix,a=n.enterButton,c=n.loading;if(c&&!a)return[r,e.renderLoading(t)];if(a)return r;var u=o["createElement"](p.a,{className:"".concat(t,"-icon"),key:"searchIcon",onClick:e.onSearch});return r?[Object(b["c"])(r,null,{key:"suffix"}),u]:u},e.renderAddonAfter=function(t,n){var r,a=e.props,c=a.enterButton,u=a.disabled,i=a.addonAfter,s=a.loading,l="".concat(t,"-button");if(s&&c)return[e.renderLoading(t),i];if(!c)return i;var f=c,m=f.type&&!0===f.type.__ANT_BUTTON;return r=m||"button"===f.type?Object(b["a"])(f,x({onMouseDown:e.onMouseDown,onClick:e.onSearch,key:"enterButton"},m?{className:l,size:n}:{})):o["createElement"](y["a"],{className:l,type:"primary",size:n,disabled:u,key:"enterButton",onMouseDown:e.onMouseDown,onClick:e.onSearch},!0===c?o["createElement"](p.a,null):c),i?[r,Object(b["c"])(i,null,{key:"addonAfter"})]:r},e.renderSearch=function(t){var n=t.getPrefixCls,a=t.direction,u=e.props,i=u.prefixCls,s=u.inputPrefixCls,l=u.enterButton,f=u.className,p=u.size,m=A(u,["prefixCls","inputPrefixCls","enterButton","className","size"]);delete m.onSearch,delete m.loading;var d=n("input-search",i),y=n("input",s),b=function(e){var t,n;l?t=c()(d,f,(n={},h(n,"".concat(d,"-rtl"),"rtl"===a),h(n,"".concat(d,"-enter-button"),!!l),h(n,"".concat(d,"-").concat(e),!!e),n)):t=c()(d,f,h({},"".concat(d,"-rtl"),"rtl"===a));return t};return o["createElement"](v["b"].Consumer,null,(function(t){return o["createElement"](r["a"],x({onPressEnter:e.onSearch},m,{size:p||t,prefixCls:y,addonAfter:e.renderAddonAfter(d,p||t),suffix:e.renderSuffix(d),onChange:e.onChange,ref:e.saveInput,className:b(p||t)}))}))},e}return O(n,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){return o["createElement"](u["a"],null,this.renderSearch)}}]),n}(o["Component"]);T.defaultProps={enterButton:!1};var N=n("whJP"),R=n("BGR+"),_=n("qPY4"),M=n.n(_),D=n("fUL4"),z=n.n(D);function q(e){return q="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(e)}function B(){return B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B.apply(this,arguments)}function H(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function L(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Q(e,t,n){return t&&U(e.prototype,t),n&&U(e,n),e}function Y(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&J(e,t)}function J(e,t){return J=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},J(e,t)}function Z(e){var t=G();return function(){var n,r=W(e);if(t){var o=W(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return V(this,n)}}function V(e,t){return!t||"object"!==q(t)&&"function"!==typeof t?K(e):t}function K(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function G(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function W(e){return W=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},W(e)}var $=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},X={click:"onClick",hover:"onMouseOver"},ee=function(e){Y(n,e);var t=Z(n);function n(){var e;return L(this,n),e=t.apply(this,arguments),e.state={visible:!1},e.onVisibleChange=function(){var t=e.props.disabled;t||e.setState((function(e){var t=e.visible;return{visible:!t}}))},e.getIcon=function(t){var n,r=e.props,a=r.action,c=r.iconRender,u=void 0===c?function(){return null}:c,i=e.state.visible,s=X[a]||"",l=u(i),f=(n={},H(n,s,e.onVisibleChange),H(n,"className","".concat(t,"-icon")),H(n,"key","passwordIcon"),H(n,"onMouseDown",(function(e){e.preventDefault()})),H(n,"onMouseUp",(function(e){e.preventDefault()})),n);return o["cloneElement"](o["isValidElement"](l)?l:o["createElement"]("span",null,l),f)},e.saveInput=function(t){t&&t.input&&(e.input=t.input)},e.renderPassword=function(t){var n=t.getPrefixCls,a=e.props,u=a.className,i=a.prefixCls,s=a.inputPrefixCls,l=a.size,f=a.visibilityToggle,p=$(a,["className","prefixCls","inputPrefixCls","size","visibilityToggle"]),m=n("input",s),d=n("input-password",i),y=f&&e.getIcon(d),v=c()(d,u,H({},"".concat(d,"-").concat(l),!!l)),b=B(B({},Object(R["a"])(p,["suffix","iconRender"])),{type:e.state.visible?"text":"password",className:v,prefixCls:m,suffix:y,ref:e.saveInput});return l&&(b.size=l),o["createElement"](r["a"],b)},e}return Q(n,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"select",value:function(){this.input.select()}},{key:"render",value:function(){return o["createElement"](u["a"],null,this.renderPassword)}}]),n}(o["Component"]);ee.defaultProps={action:"click",visibilityToggle:!0,iconRender:function(e){return e?o["createElement"](M.a,null):o["createElement"](z.a,null)}},r["a"].Group=l,r["a"].Search=T,r["a"].TextArea=N["a"],r["a"].Password=ee;t["a"]=r["a"]},"6D9b":function(e,t,n){e.exports={"ant-statistic":"ant-statistic","ant-statistic-title":"ant-statistic-title","ant-statistic-content":"ant-statistic-content","ant-statistic-content-value":"ant-statistic-content-value","ant-statistic-content-value-decimal":"ant-statistic-content-value-decimal","ant-statistic-content-prefix":"ant-statistic-content-prefix","ant-statistic-content-suffix":"ant-statistic-content-suffix","ant-statistic-rtl":"ant-statistic-rtl"}},"6Oiv":function(e,t,n){e.exports={card:"antd-pro-pages-form-step-form-style-card",heading:"antd-pro-pages-form-step-form-style-heading",steps:"antd-pro-pages-form-step-form-style-steps",errorIcon:"antd-pro-pages-form-step-form-style-errorIcon",anticon:"antd-pro-pages-form-step-form-style-anticon",errorPopover:"antd-pro-pages-form-step-form-style-errorPopover",errorListItem:"antd-pro-pages-form-step-form-style-errorListItem",errorField:"antd-pro-pages-form-step-form-style-errorField",editable:"antd-pro-pages-form-step-form-style-editable",advancedForm:"antd-pro-pages-form-step-form-style-advancedForm",optional:"antd-pro-pages-form-step-form-style-optional"}},"711d":function(e,t){function n(e){return function(t){return null==t?void 0:t[e]}}e.exports=n},"B6l+":function(e,t,n){var r=n("Sq3C"),o=n("Z1HP"),a=n("Sxd8"),c=n("dt0z");function u(e,t,n){e=c(e),t=a(t);var u=t?o(e):0;return t&&u<t?e+r(t-u,n):e}e.exports=u},Em2t:function(e,t,n){var r=n("bahg"),o=n("quyA"),a=n("0JQy");function c(e){return o(e)?a(e):r(e)}e.exports=c},HA5P:function(e,t,n){e.exports={stepForm:"antd-pro-pages-form-step-form-components-step3-index-stepForm",stepFormText:"antd-pro-pages-form-step-form-components-step3-index-stepFormText",result:"antd-pro-pages-form-step-form-components-step3-index-result",desc:"antd-pro-pages-form-step-form-components-step3-index-desc",information:"antd-pro-pages-form-step-form-components-step3-index-information",label:"antd-pro-pages-form-step-form-components-step3-index-label",uppercase:"antd-pro-pages-form-step-form-components-step3-index-uppercase"}},IXXQ:function(e,t,n){"use strict";n.r(t);n("IzEo");var r=n("bx4M"),o=n("tJVT"),a=(n("FJo9"),n("L41K")),c=n("q1tI"),u=n.n(c),i=n("Hx5s"),s=n("9kvl"),l=(n("/zsF"),n("PArb")),f=n("0Owb"),p=(n("+L6B"),n("2/Rp")),m=(n("5NDa"),n("5rEg")),d=n("WmNS"),y=n.n(d),v=n("9og8"),b=(n("y8nQ"),n("Vl3Y")),g=(n("OaEy"),n("2fM7")),h=n("Uqu4"),x=n.n(h),E=g["a"].Option,w={labelCol:{span:5},wrapperCol:{span:19}},O=function(e){var t=e.dispatch,n=e.data,r=b["a"].useForm(),a=Object(o["a"])(r,1),c=a[0];if(!n)return null;var i=c.validateFields,s=function(){var e=Object(v["a"])(y.a.mark((function e(){var n;return y.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i();case 2:n=e.sent,t&&(t({type:"formAndstepForm/saveStepFormData",payload:n}),t({type:"formAndstepForm/saveCurrentStep",payload:"confirm"}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return u.a.createElement(u.a.Fragment,null,u.a.createElement(b["a"],Object(f["a"])({},w,{form:c,layout:"horizontal",className:x.a.stepForm,hideRequiredMark:!0,initialValues:n}),u.a.createElement(b["a"].Item,{label:"\u4ed8\u6b3e\u8d26\u6237",name:"payAccount",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u4ed8\u6b3e\u8d26\u6237"}]},u.a.createElement(g["a"],{placeholder:"test@example.com"},u.a.createElement(E,{value:"ant-design@alipay.com"},"ant-design@alipay.com"))),u.a.createElement(b["a"].Item,{label:"\u6536\u6b3e\u8d26\u6237"},u.a.createElement(m["a"].Group,{compact:!0},u.a.createElement(g["a"],{defaultValue:"alipay",style:{width:100}},u.a.createElement(E,{value:"alipay"},"\u652f\u4ed8\u5b9d"),u.a.createElement(E,{value:"bank"},"\u94f6\u884c\u8d26\u6237")),u.a.createElement(b["a"].Item,{noStyle:!0,name:"receiverAccount",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6536\u6b3e\u4eba\u8d26\u6237"},{type:"email",message:"\u8d26\u6237\u540d\u5e94\u4e3a\u90ae\u7bb1\u683c\u5f0f"}]},u.a.createElement(m["a"],{style:{width:"calc(100% - 100px)"},placeholder:"test@example.com"})))),u.a.createElement(b["a"].Item,{label:"\u6536\u6b3e\u4eba\u59d3\u540d",name:"receiverName",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6536\u6b3e\u4eba\u59d3\u540d"}]},u.a.createElement(m["a"],{placeholder:"\u8bf7\u8f93\u5165\u6536\u6b3e\u4eba\u59d3\u540d"})),u.a.createElement(b["a"].Item,{label:"\u8f6c\u8d26\u91d1\u989d",name:"amount",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u8f6c\u8d26\u91d1\u989d"},{pattern:/^(\d+)((?:\.\d+)?)$/,message:"\u8bf7\u8f93\u5165\u5408\u6cd5\u91d1\u989d\u6570\u5b57"}]},u.a.createElement(m["a"],{prefix:"\uffe5",placeholder:"\u8bf7\u8f93\u5165\u91d1\u989d"})),u.a.createElement(b["a"].Item,{wrapperCol:{xs:{span:24,offset:0},sm:{span:w.wrapperCol.span,offset:w.labelCol.span}}},u.a.createElement(p["a"],{type:"primary",onClick:s},"\u4e0b\u4e00\u6b65"))),u.a.createElement(l["a"],{style:{margin:"40px 0 24px"}}),u.a.createElement("div",{className:x.a.desc},u.a.createElement("h3",null,"\u8bf4\u660e"),u.a.createElement("h4",null,"\u8f6c\u8d26\u5230\u652f\u4ed8\u5b9d\u8d26\u6237"),u.a.createElement("p",null,"\u5982\u679c\u9700\u8981\uff0c\u8fd9\u91cc\u53ef\u4ee5\u653e\u4e00\u4e9b\u5173\u4e8e\u4ea7\u54c1\u7684\u5e38\u89c1\u95ee\u9898\u8bf4\u660e\u3002\u5982\u679c\u9700\u8981\uff0c\u8fd9\u91cc\u53ef\u4ee5\u653e\u4e00\u4e9b\u5173\u4e8e\u4ea7\u54c1\u7684\u5e38\u89c1\u95ee\u9898\u8bf4\u660e\u3002\u5982\u679c\u9700\u8981\uff0c\u8fd9\u91cc\u53ef\u4ee5\u653e\u4e00\u4e9b\u5173\u4e8e\u4ea7\u54c1\u7684\u5e38\u89c1\u95ee\u9898\u8bf4\u660e\u3002"),u.a.createElement("h4",null,"\u8f6c\u8d26\u5230\u94f6\u884c\u5361"),u.a.createElement("p",null,"\u5982\u679c\u9700\u8981\uff0c\u8fd9\u91cc\u53ef\u4ee5\u653e\u4e00\u4e9b\u5173\u4e8e\u4ea7\u54c1\u7684\u5e38\u89c1\u95ee\u9898\u8bf4\u660e\u3002\u5982\u679c\u9700\u8981\uff0c\u8fd9\u91cc\u53ef\u4ee5\u653e\u4e00\u4e9b\u5173\u4e8e\u4ea7\u54c1\u7684\u5e38\u89c1\u95ee\u9898\u8bf4\u660e\u3002\u5982\u679c\u9700\u8981\uff0c\u8fd9\u91cc\u53ef\u4ee5\u653e\u4e00\u4e9b\u5173\u4e8e\u4ea7\u54c1\u7684\u5e38\u89c1\u95ee\u9898\u8bf4\u660e\u3002")))},j=Object(s["b"])((function(e){var t=e.formAndstepForm;return{data:t.step}}))(O),S=(n("aHsQ"),n("sGsY")),C=(n("bP8k"),n("gFTJ")),P=(n("fOrg"),n("+KLJ")),F=n("k1fw"),I=n("Tuhz"),k=n.n(I),A={labelCol:{span:5},wrapperCol:{span:19}},T=function(e){var t=b["a"].useForm(),n=Object(o["a"])(t,1),r=n[0],a=e.data,c=e.dispatch,i=e.submitting;if(!a)return null;var s=r.validateFields,d=r.getFieldsValue,g=function(){if(c){var e=d();c({type:"formAndstepForm/saveStepFormData",payload:Object(F["a"])(Object(F["a"])({},a),e)}),c({type:"formAndstepForm/saveCurrentStep",payload:"info"})}},h=function(){var e=Object(v["a"])(y.a.mark((function e(){var t;return y.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s();case 2:t=e.sent,c&&c({type:"formAndstepForm/submitStepForm",payload:Object(F["a"])(Object(F["a"])({},a),t)});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=a.payAccount,E=a.receiverAccount,w=a.receiverName,O=a.amount;return u.a.createElement(b["a"],Object(f["a"])({},A,{form:r,layout:"horizontal",className:k.a.stepForm,initialValues:{password:"123456"}}),u.a.createElement(P["a"],{closable:!0,showIcon:!0,message:"\u786e\u8ba4\u8f6c\u8d26\u540e\uff0c\u8d44\u91d1\u5c06\u76f4\u63a5\u6253\u5165\u5bf9\u65b9\u8d26\u6237\uff0c\u65e0\u6cd5\u9000\u56de\u3002",style:{marginBottom:24}}),u.a.createElement(C["a"],{column:1},u.a.createElement(C["a"].Item,{label:"\u4ed8\u6b3e\u8d26\u6237"}," ",x),u.a.createElement(C["a"].Item,{label:"\u6536\u6b3e\u8d26\u6237"}," ",E),u.a.createElement(C["a"].Item,{label:"\u6536\u6b3e\u4eba\u59d3\u540d"}," ",w),u.a.createElement(C["a"].Item,{label:"\u8f6c\u8d26\u91d1\u989d"},u.a.createElement(S["a"],{value:O,suffix:"\u5143"}))),u.a.createElement(l["a"],{style:{margin:"24px 0"}}),u.a.createElement(b["a"].Item,{label:"\u652f\u4ed8\u5bc6\u7801",name:"password",required:!1,rules:[{required:!0,message:"\u9700\u8981\u652f\u4ed8\u5bc6\u7801\u624d\u80fd\u8fdb\u884c\u652f\u4ed8"}]},u.a.createElement(m["a"],{type:"password",autoComplete:"off",style:{width:"80%"}})),u.a.createElement(b["a"].Item,{style:{marginBottom:8},wrapperCol:{xs:{span:24,offset:0},sm:{span:A.wrapperCol.span,offset:A.labelCol.span}}},u.a.createElement(p["a"],{type:"primary",onClick:h,loading:i},"\u63d0\u4ea4"),u.a.createElement(p["a"],{onClick:g,style:{marginLeft:8}},"\u4e0a\u4e00\u6b65")))},N=Object(s["b"])((function(e){var t=e.formAndstepForm,n=e.loading;return{submitting:n.effects["formAndstepForm/submitStepForm"],data:t.step}}))(T),R=(n("J+/v"),n("MoRW")),_=n("HA5P"),M=n.n(_),D=function(e){var t=e.data,n=e.dispatch;if(!t)return null;var r=t.payAccount,o=t.receiverAccount,a=t.receiverName,c=t.amount,i=function(){n&&n({type:"formAndstepForm/saveCurrentStep",payload:"info"})},s=u.a.createElement("div",{className:M.a.information},u.a.createElement(C["a"],{column:1},u.a.createElement(C["a"].Item,{label:"\u4ed8\u6b3e\u8d26\u6237"}," ",r),u.a.createElement(C["a"].Item,{label:"\u6536\u6b3e\u8d26\u6237"}," ",o),u.a.createElement(C["a"].Item,{label:"\u6536\u6b3e\u4eba\u59d3\u540d"}," ",a),u.a.createElement(C["a"].Item,{label:"\u8f6c\u8d26\u91d1\u989d"},u.a.createElement(S["a"],{value:c,suffix:"\u5143"})))),l=u.a.createElement(u.a.Fragment,null,u.a.createElement(p["a"],{type:"primary",onClick:i},"\u518d\u8f6c\u4e00\u7b14"),u.a.createElement(p["a"],null,"\u67e5\u770b\u8d26\u5355"));return u.a.createElement(R["a"],{status:"success",title:"\u64cd\u4f5c\u6210\u529f",subTitle:"\u9884\u8ba1\u4e24\u5c0f\u65f6\u5185\u5230\u8d26",extra:l,className:M.a.result},s)},z=Object(s["b"])((function(e){var t=e.formAndstepForm;return{data:t.step}}))(D),q=n("6Oiv"),B=n.n(q),H=a["a"].Step,L=function(e){switch(e){case"confirm":return{step:1,component:u.a.createElement(N,null)};case"result":return{step:2,component:u.a.createElement(z,null)};case"info":default:return{step:0,component:u.a.createElement(j,null)}}},U=function(e){var t=e.current,n=Object(c["useState"])(u.a.createElement(j,null)),s=Object(o["a"])(n,2),l=s[0],f=s[1],p=Object(c["useState"])(0),m=Object(o["a"])(p,2),d=m[0],y=m[1];return Object(c["useEffect"])((function(){var e=L(t),n=e.step,r=e.component;y(n),f(r)}),[t]),u.a.createElement(i["c"],{content:"\u5c06\u4e00\u4e2a\u5197\u957f\u6216\u7528\u6237\u4e0d\u719f\u6089\u7684\u8868\u5355\u4efb\u52a1\u5206\u6210\u591a\u4e2a\u6b65\u9aa4\uff0c\u6307\u5bfc\u7528\u6237\u5b8c\u6210\u3002"},u.a.createElement(r["a"],{bordered:!1},u.a.createElement(u.a.Fragment,null,u.a.createElement(a["a"],{current:d,className:B.a.steps},u.a.createElement(H,{title:"\u586b\u5199\u8f6c\u8d26\u4fe1\u606f"}),u.a.createElement(H,{title:"\u786e\u8ba4\u8f6c\u8d26\u4fe1\u606f"}),u.a.createElement(H,{title:"\u5b8c\u6210"})),l)))};t["default"]=Object(s["b"])((function(e){var t=e.formAndstepForm;return{current:t.current}}))(U)},KxBF:function(e,t){function n(e,t,n){var r=-1,o=e.length;t<0&&(t=-t>o?0:o+t),n=n>o?o:n,n<0&&(n+=o),o=t>n?0:n-t>>>0,t>>>=0;var a=Array(o);while(++r<o)a[r]=e[r+t];return a}e.exports=n},"QQZ/":function(e,t,n){var r=n("Sq3C"),o=n("Z1HP"),a=n("Sxd8"),c=n("dt0z");function u(e,t,n){e=c(e),t=a(t);var u=t?o(e):0;return t&&u<t?r(t-u,n)+e:e}e.exports=u},Sq3C:function(e,t,n){var r=n("sKgW"),o=n("zoYe"),a=n("wy8a"),c=n("quyA"),u=n("Z1HP"),i=n("Em2t"),s=Math.ceil;function l(e,t){t=void 0===t?" ":o(t);var n=t.length;if(n<2)return n?r(t,e):t;var l=r(t,s(e/u(t)));return c(t)?a(i(l),0,e).join(""):l.slice(0,e)}e.exports=l},Sxd8:function(e,t,n){var r=n("ZCgT");function o(e){var t=r(e),n=t%1;return t===t?n?t-n:t:0}e.exports=o},Tuhz:function(e,t,n){e.exports={stepForm:"antd-pro-pages-form-step-form-components-step2-index-stepForm",stepFormText:"antd-pro-pages-form-step-form-components-step2-index-stepFormText",result:"antd-pro-pages-form-step-form-components-step2-index-result",desc:"antd-pro-pages-form-step-form-components-step2-index-desc",information:"antd-pro-pages-form-step-form-components-step2-index-information",label:"antd-pro-pages-form-step-form-components-step2-index-label",money:"antd-pro-pages-form-step-form-components-step2-index-money",uppercase:"antd-pro-pages-form-step-form-components-step2-index-uppercase"}},Uqu4:function(e,t,n){e.exports={stepForm:"antd-pro-pages-form-step-form-components-step1-index-stepForm",stepFormText:"antd-pro-pages-form-step-form-components-step1-index-stepFormText",result:"antd-pro-pages-form-step-form-components-step1-index-result",desc:"antd-pro-pages-form-step-form-components-step1-index-desc",information:"antd-pro-pages-form-step-form-components-step1-index-information",label:"antd-pro-pages-form-step-form-components-step1-index-label",money:"antd-pro-pages-form-step-form-components-step1-index-money",uppercase:"antd-pro-pages-form-step-form-components-step1-index-uppercase"}},Z1HP:function(e,t,n){var r=n("ycre"),o=n("quyA"),a=n("q4HE");function c(e){return o(e)?a(e):r(e)}e.exports=c},ZCgT:function(e,t,n){var r=n("tLB3"),o=1/0,a=17976931348623157e292;function c(e){if(!e)return 0===e?e:0;if(e=r(e),e===o||e===-o){var t=e<0?-1:1;return t*a}return e===e?e:0}e.exports=c},aHsQ:function(e,t,n){"use strict";n("cIOH"),n("6D9b")},bahg:function(e,t){function n(e){return e.split("")}e.exports=n},dt0z:function(e,t,n){var r=n("zoYe");function o(e){return null==e?"":r(e)}e.exports=o},eUgh:function(e,t){function n(e,t){var n=-1,r=null==e?0:e.length,o=Array(r);while(++n<r)o[n]=t(e[n],n,e);return o}e.exports=n},fUL4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n("r+aA"));function o(e){return e&&e.__esModule?e:{default:e}}var a=r;t.default=a,e.exports=a},q4HE:function(e,t){var n="\\ud800-\\udfff",r="\\u0300-\\u036f",o="\\ufe20-\\ufe2f",a="\\u20d0-\\u20ff",c=r+o+a,u="\\ufe0e\\ufe0f",i="["+n+"]",s="["+c+"]",l="\\ud83c[\\udffb-\\udfff]",f="(?:"+s+"|"+l+")",p="[^"+n+"]",m="(?:\\ud83c[\\udde6-\\uddff]){2}",d="[\\ud800-\\udbff][\\udc00-\\udfff]",y="\\u200d",v=f+"?",b="["+u+"]?",g="(?:"+y+"(?:"+[p,m,d].join("|")+")"+b+v+")*",h=b+v+g,x="(?:"+[p+s+"?",s,m,d,i].join("|")+")",E=RegExp(l+"(?="+l+")|"+x+h,"g");function w(e){var t=E.lastIndex=0;while(E.test(e))++t;return t}e.exports=w},qPY4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n("u4NN"));function o(e){return e&&e.__esModule?e:{default:e}}var a=r;t.default=a,e.exports=a},quyA:function(e,t){var n="\\ud800-\\udfff",r="\\u0300-\\u036f",o="\\ufe20-\\ufe2f",a="\\u20d0-\\u20ff",c=r+o+a,u="\\ufe0e\\ufe0f",i="\\u200d",s=RegExp("["+i+n+c+u+"]");function l(e){return s.test(e)}e.exports=l},sGsY:function(e,t,n){"use strict";var r=n("q1tI"),o=n("TSYQ"),a=n.n(o),c=n("H84U"),u=n("B6l+"),i=n.n(u),s=function(e){var t,n=e.value,o=e.formatter,a=e.precision,c=e.decimalSeparator,u=e.groupSeparator,s=void 0===u?"":u,l=e.prefixCls;if("function"===typeof o)t=o(n);else{var f=String(n),p=f.match(/^(-?)(\d*)(\.(\d+))?$/);if(p&&"-"!==f){var m=p[1],d=p[2]||"0",y=p[4]||"";d=d.replace(/\B(?=(\d{3})+(?!\d))/g,s),"number"===typeof a&&(y=i()(y,a,"0").slice(0,a)),y&&(y="".concat(c).concat(y)),t=[r["createElement"]("span",{key:"int",className:"".concat(l,"-content-value-int")},m,d),y&&r["createElement"]("span",{key:"decimal",className:"".concat(l,"-content-value-decimal")},y)]}else t=f}return r["createElement"]("span",{className:"".concat(l,"-content-value")},t)},l=s;function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}var m=function(e){var t=e.prefixCls,n=e.className,o=e.style,c=e.valueStyle,u=e.value,i=void 0===u?0:u,s=e.title,m=e.valueRender,d=e.prefix,y=e.suffix,v=e.direction,b=e.onMouseEnter,g=e.onMouseLeave,h=r["createElement"](l,p({},e,{value:i})),x=a()(t,n,f({},"".concat(t,"-rtl"),"rtl"===v));return r["createElement"]("div",{className:x,style:o,onMouseEnter:b,onMouseLeave:g},s&&r["createElement"]("div",{className:"".concat(t,"-title")},s),r["createElement"]("div",{style:c,className:"".concat(t,"-content")},d&&r["createElement"]("span",{className:"".concat(t,"-content-prefix")},d),m?m(h):h,y&&r["createElement"]("span",{className:"".concat(t,"-content-suffix")},y)))};m.defaultProps={decimalSeparator:".",groupSeparator:","};var d=Object(c["c"])({prefixCls:"statistic"})(m),y=d,v=n("QQZ/"),b=n.n(v);function g(e,t){return O(e)||w(e,t)||x(e,t)||h()}function h(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function x(e,t){if(e){if("string"===typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(e,t):void 0}}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function w(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var c,u=e[Symbol.iterator]();!(r=(c=u.next()).done);r=!0)if(n.push(c.value),t&&n.length===t)break}catch(i){o=!0,a=i}finally{try{r||null==u["return"]||u["return"]()}finally{if(o)throw a}}return n}}function O(e){if(Array.isArray(e))return e}var j=[["Y",31536e6],["M",2592e6],["D",864e5],["H",36e5],["m",6e4],["s",1e3],["S",1]];function S(e,t){var n=e,r=/\[[^\]]*]/g,o=(t.match(r)||[]).map((function(e){return e.slice(1,-1)})),a=t.replace(r,"[]"),c=j.reduce((function(e,t){var r=g(t,2),o=r[0],a=r[1];if(-1!==e.indexOf(o)){var c=Math.floor(n/a);return n-=c*a,e.replace(new RegExp("".concat(o,"+"),"g"),(function(e){var t=e.length;return b()(c.toString(),t,"0")}))}return e}),a),u=0;return c.replace(r,(function(){var e=o[u];return u+=1,e}))}function C(e,t){var n=t.format,r=void 0===n?"":n,o=new Date(e).getTime(),a=Date.now(),c=Math.max(o-a,0);return S(c,r)}var P=n("0n0R");function F(e){return F="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F(e)}function I(){return I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},I.apply(this,arguments)}function k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(e,t,n){return t&&A(e.prototype,t),n&&A(e,n),e}function N(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}function R(e,t){return R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},R(e,t)}function _(e){var t=z();return function(){var n,r=q(e);if(t){var o=q(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return M(this,n)}}function M(e,t){return!t||"object"!==F(t)&&"function"!==typeof t?D(e):t}function D(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function z(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}var B=1e3/30;function H(e){return new Date(e).getTime()}var L=function(e){N(n,e);var t=_(n);function n(){var e;return k(this,n),e=t.apply(this,arguments),e.syncTimer=function(){var t=e.props.value,n=H(t);n>=Date.now()?e.startTimer():e.stopTimer()},e.startTimer=function(){e.countdownId||(e.countdownId=window.setInterval((function(){e.forceUpdate()}),B))},e.stopTimer=function(){var t=e.props,n=t.onFinish,r=t.value;if(e.countdownId){clearInterval(e.countdownId),e.countdownId=void 0;var o=H(r);n&&o<Date.now()&&n()}},e.formatCountdown=function(t,n){var r=e.props.format;return C(t,I(I({},n),{format:r}))},e.valueRender=function(e){return Object(P["a"])(e,{title:void 0})},e}return T(n,[{key:"componentDidMount",value:function(){this.syncTimer()}},{key:"componentDidUpdate",value:function(){this.syncTimer()}},{key:"componentWillUnmount",value:function(){this.stopTimer()}},{key:"render",value:function(){return r["createElement"](y,I({valueRender:this.valueRender},this.props,{formatter:this.formatCountdown}))}}]),n}(r["Component"]);L.defaultProps={format:"HH:mm:ss"};var U=L;y.Countdown=U;t["a"]=y},sKgW:function(e,t){var n=9007199254740991,r=Math.floor;function o(e,t){var o="";if(!e||t<1||t>n)return o;do{t%2&&(o+=e),t=r(t/2),t&&(e+=e)}while(t);return o}e.exports=o},wy8a:function(e,t,n){var r=n("KxBF");function o(e,t,n){var o=e.length;return n=void 0===n?o:n,!t&&n>=o?e:r(e,t,n)}e.exports=o},ycre:function(e,t,n){var r=n("711d"),o=r("length");e.exports=o},zoYe:function(e,t,n){var r=n("nmnc"),o=n("eUgh"),a=n("Z0cm"),c=n("/9aa"),u=1/0,i=r?r.prototype:void 0,s=i?i.toString:void 0;function l(e){if("string"==typeof e)return e;if(a(e))return o(e,l)+"";if(c(e))return s?s.call(e):"";var t=e+"";return"0"==t&&1/e==-u?"-0":t}e.exports=l}}]);