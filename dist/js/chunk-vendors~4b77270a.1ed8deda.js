(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~4b77270a"],{"32ec":function(e,t,a){"use strict";t.__esModule=!0,t.default=void 0;var n=i(a("cc37")),r=a("0a8d");function i(e){return e&&e.__esModule?e:{default:e}}var o={BEmbed:n.default},s={install:(0,r.installFactory)({components:o})};t.default=s},cc37:function(e,t,a){"use strict";t.__esModule=!0,t.default=t.props=void 0;var n=o(a("2b0e")),r=a("b42e"),i=a("bb2f");function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var d={type:{type:String,default:"iframe",validator:function(e){return(0,i.arrayIncludes)(["iframe","embed","video","object","img","b-img","b-img-lazy"],e)}},tag:{type:String,default:"div"},aspect:{type:String,default:"16by9"}};t.props=d;var u=n.default.extend({name:"BEmbed",functional:!0,props:d,render:function(e,t){var a=t.props,n=t.data,i=t.children;return e(a.tag,{ref:n.ref,staticClass:"embed-responsive",class:s({},"embed-responsive-".concat(a.aspect),Boolean(a.aspect))},[e(a.type,(0,r.mergeData)(n,{ref:"",staticClass:"embed-responsive-item"}),i)])}});t.default=u}}]);
//# sourceMappingURL=chunk-vendors~4b77270a.1ed8deda.js.map