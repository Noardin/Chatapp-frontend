(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~e34125d1"],{"75a9":function(t,e,n){"use strict";e.__esModule=!0,e.default=void 0;var i=r(n("d57a")),o=n("4565"),s=n("24e2");function r(t){return t&&t.__esModule?t:{default:t}}function l(t){return l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}var a="__BV_ScrollSpy__",c=function(t){var e={};return t.arg&&(e.element="#".concat(t.arg)),(0,s.keys)(t.modifiers).forEach(function(t){/^\d+$/.test(t)?e.offset=parseInt(t,10):/^(auto|position|offset)$/.test(t)&&(e.method=t)}),"string"===typeof t.value?e.element=t.value:"number"===typeof t.value?e.offset=Math.round(t.value):"object"===l(t.value)&&(0,s.keys)(t.value).filter(function(t){return Boolean(i.default.DefaultType[t])}).forEach(function(n){e[n]=t.value[n]}),e},u=function(t,e,n){if(o.inBrowser){var s=c(e);t[a]?t[a].updateConfig(s,n.context.$root):t[a]=new i.default(t,s,n.context.$root)}},f=function(t){t[a]&&(t[a].dispose(),t[a]=null,delete t[a])},h={bind:function(t,e,n){u(t,e,n)},inserted:function(t,e,n){u(t,e,n)},update:function(t,e,n){e.value!==e.oldValue&&u(t,e,n)},componentUpdated:function(t,e,n){e.value!==e.oldValue&&u(t,e,n)},unbind:function(t){f(t)}};e.default=h},d57a:function(t,e,n){"use strict";e.__esModule=!0,e.default=void 0;var i=r(n("bf9c")),o=r(n("93e0")),s=n("1611");function r(t){return t&&t.__esModule?t:{default:t}}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){a(t,e,n[e])})}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function f(t,e,n){return e&&u(t.prototype,e),n&&u(t,n),t}var h="v-b-scrollspy",v="bv::scrollspy::activate",g={element:"body",offset:10,method:"auto",throttle:75},d={element:"(string|element|component)",offset:"number",method:"string",throttle:"number"},$={DROPDOWN_ITEM:"dropdown-item",ACTIVE:"active"},p={ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",NAV_ITEMS:".nav-item",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown, .dropup",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},m={OFFSET:"offset",POSITION:"position"},y=/^.*(#[^#]+)$/,b=["webkitTransitionEnd","transitionend","otransitionend","oTransitionEnd"],O={passive:!0,capture:!1};function S(t){return{}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function T(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var r=n[i],l=e[i],a=l&&(0,s.isElement)(l)?"element":S(l);a=l&&l._isVue?"component":a,new RegExp(r).test(a)||(0,o.default)("".concat(t,': Option "').concat(i,'" provided type "').concat(a,'" but expected type "').concat(r,'"'))}}var w=function(){function t(e,n,i){c(this,t),this.$el=e,this.$scroller=null,this.$selector=[p.NAV_LINKS,p.LIST_ITEMS,p.DROPDOWN_ITEMS].join(","),this.$offsets=[],this.$targets=[],this.$activeTarget=null,this.$scrollHeight=0,this.$resizeTimeout=null,this.$obs_scroller=null,this.$obs_targets=null,this.$root=i||null,this.$config=null,this.updateConfig(n)}return f(t,[{key:"updateConfig",value:function(t,e){this.$scroller&&(this.unlisten(),this.$scroller=null);var n=l({},this.constructor.Default,t);if(e&&(this.$root=e),T(this.constructor.Name,n,this.constructor.DefaultType),this.$config=n,this.$root){var i=this;this.$root.$nextTick(function(){i.listen()})}else this.listen()}},{key:"dispose",value:function(){this.unlisten(),clearTimeout(this.$resizeTimeout),this.$resizeTimeout=null,this.$el=null,this.$config=null,this.$scroller=null,this.$selector=null,this.$offsets=null,this.$targets=null,this.$activeTarget=null,this.$scrollHeight=null}},{key:"listen",value:function(){var t=this,e=this.getScroller();e&&"BODY"!==e.tagName&&(0,s.eventOn)(e,"scroll",this,O),(0,s.eventOn)(window,"scroll",this,O),(0,s.eventOn)(window,"resize",this,O),(0,s.eventOn)(window,"orientationchange",this,O),b.forEach(function(e){(0,s.eventOn)(window,e,t,O)}),this.setObservers(!0),this.handleEvent("refresh")}},{key:"unlisten",value:function(){var t=this,e=this.getScroller();this.setObservers(!1),e&&"BODY"!==e.tagName&&(0,s.eventOff)(e,"scroll",this,O),(0,s.eventOff)(window,"scroll",this,O),(0,s.eventOff)(window,"resize",this,O),(0,s.eventOff)(window,"orientationchange",this,O),b.forEach(function(e){(0,s.eventOff)(window,e,t,O)})}},{key:"setObservers",value:function(t){var e=this;this.$obs_scroller&&(this.$obs_scroller.disconnect(),this.$obs_scroller=null),this.$obs_targets&&(this.$obs_targets.disconnect(),this.$obs_targets=null),t&&(this.$obs_targets=(0,i.default)(this.$el,function(){e.handleEvent("mutation")},{subtree:!0,childList:!0,attributes:!0,attributeFilter:["href"]}),this.$obs_scroller=(0,i.default)(this.getScroller(),function(){e.handleEvent("mutation")},{subtree:!0,childList:!0,characterData:!0,attributes:!0,attributeFilter:["id","style","class"]}))}},{key:"handleEvent",value:function(t){var e="string"===typeof t?t:t.type,n=this;function i(){n.$resizeTimeout||(n.$resizeTimeout=setTimeout(function(){n.refresh(),n.process(),n.$resizeTimeout=null},n.$config.throttle))}"scroll"===e?(this.$obs_scroller||this.listen(),this.process()):/(resize|orientationchange|mutation|refresh)/.test(e)&&i()}},{key:"refresh",value:function(){var t=this,e=this.getScroller();if(e){var n=e!==e.window?m.POSITION:m.OFFSET,i="auto"===this.$config.method?n:this.$config.method,o=i===m.POSITION?s.position:s.offset,r=i===m.POSITION?this.getScrollTop():0;return this.$offsets=[],this.$targets=[],this.$scrollHeight=this.getScrollHeight(),(0,s.selectAll)(this.$selector,this.$el).map(function(t){return(0,s.getAttr)(t,"href")}).filter(function(t){return t&&y.test(t||"")}).map(function(t){var n=t.replace(y,"$1").trim();if(!n)return null;var i=(0,s.select)(n,e);return i&&(0,s.isVisible)(i)?{offset:parseInt(o(i).top,10)+r,target:n}:null}).filter(Boolean).sort(function(t,e){return t.offset-e.offset}).reduce(function(e,n){return e[n.target]||(t.$offsets.push(n.offset),t.$targets.push(n.target),e[n.target]=!0),e},{}),this}}},{key:"process",value:function(){var t=this.getScrollTop()+this.$config.offset,e=this.getScrollHeight(),n=this.$config.offset+e-this.getOffsetHeight();if(this.$scrollHeight!==e&&this.refresh(),t>=n){var i=this.$targets[this.$targets.length-1];this.$activeTarget!==i&&this.activate(i)}else{if(this.$activeTarget&&t<this.$offsets[0]&&this.$offsets[0]>0)return this.$activeTarget=null,void this.clear();for(var o=this.$offsets.length;o--;){var s=this.$activeTarget!==this.$targets[o]&&t>=this.$offsets[o]&&("undefined"===typeof this.$offsets[o+1]||t<this.$offsets[o+1]);s&&this.activate(this.$targets[o])}}}},{key:"getScroller",value:function(){if(this.$scroller)return this.$scroller;var t=this.$config.element;return t?((0,s.isElement)(t.$el)?t=t.$el:"string"===typeof t&&(t=(0,s.select)(t)),t?(this.$scroller="BODY"===t.tagName?window:t,this.$scroller):null):null}},{key:"getScrollTop",value:function(){var t=this.getScroller();return t===window?t.pageYOffset:t.scrollTop}},{key:"getScrollHeight",value:function(){return this.getScroller().scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}},{key:"getOffsetHeight",value:function(){var t=this.getScroller();return t===window?window.innerHeight:(0,s.getBCR)(t).height}},{key:"activate",value:function(t){var e=this;this.$activeTarget=t,this.clear();var n=(0,s.selectAll)(this.$selector.split(",").map(function(e){return"".concat(e,'[href$="').concat(t,'"]')}).join(","),this.$el);n.forEach(function(t){if((0,s.hasClass)(t,$.DROPDOWN_ITEM)){var n=(0,s.closest)(p.DROPDOWN,t);n&&e.setActiveState((0,s.select)(p.DROPDOWN_TOGGLE,n),!0),e.setActiveState(t,!0)}else{e.setActiveState(t,!0),(0,s.matches)(t.parentElement,p.NAV_ITEMS)&&e.setActiveState(t.parentElement,!0);var i=t;while(i){i=(0,s.closest)(p.NAV_LIST_GROUP,i);var o=i?i.previousElementSibling:null;o&&(0,s.matches)(o,"".concat(p.NAV_LINKS,", ").concat(p.LIST_ITEMS))&&e.setActiveState(o,!0),o&&(0,s.matches)(o,p.NAV_ITEMS)&&(e.setActiveState((0,s.select)(p.NAV_LINKS,o),!0),e.setActiveState(o,!0))}}}),n&&n.length>0&&this.$root&&this.$root.$emit(v,t,n)}},{key:"clear",value:function(){var t=this;(0,s.selectAll)("".concat(this.$selector,", ").concat(p.NAV_ITEMS),this.$el).filter(function(t){return(0,s.hasClass)(t,$.ACTIVE)}).forEach(function(e){return t.setActiveState(e,!1)})}},{key:"setActiveState",value:function(t,e){t&&(e?(0,s.addClass)(t,$.ACTIVE):(0,s.removeClass)(t,$.ACTIVE))}}],[{key:"Name",get:function(){return h}},{key:"Default",get:function(){return g}},{key:"DefaultType",get:function(){return d}}]),t}(),_=w;e.default=_}}]);
//# sourceMappingURL=chunk-vendors~e34125d1.6de0f3ee.js.map