(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~cd9e4e36"],{"0096":function(t,e,i){"use strict";e.__esModule=!0,e.default=e.props=void 0;var s=r(i("2b0e")),n=o(i("4e40"));function o(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var s=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,i):{};s.get||s.set?Object.defineProperty(e,i,s):e[i]=t[i]}return e.default=t,e}function r(t){return t&&t.__esModule?t:{default:t}}var a=(0,n.propsFactory)();e.props=a;var l=s.default.extend({name:"BDropdownItem",inject:{bvDropdown:{default:null}},props:a,methods:{closeDropdown:function(){this.bvDropdown&&this.bvDropdown.hide(!0)},onClick:function(t){this.$emit("click",t),this.closeDropdown()}},render:function(t){return t(n.default,{props:this.$props,staticClass:"dropdown-item",attrs:{role:"menuitem"},on:{click:this.onClick}},this.$slots.default)}});e.default=l},"22dc":function(t,e,i){"use strict";e.__esModule=!0,e.default=void 0;var s=a(i("2b0e")),n=r(i("0596")),o=i("b42e");function r(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var s=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,i):{};s.get||s.set?Object.defineProperty(e,i,s):e[i]=t[i]}return e.default=t,e}function a(t){return t&&t.__esModule?t:{default:t}}function l(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},s=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),s.forEach(function(e){d(t,e,i[e])})}return t}function d(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var u=s.default.extend({name:"BDropdownForm",functional:!0,props:l({},n.props),render:function(t,e){var i=e.props,s=e.data,r=e.children;return t(n.default,(0,o.mergeData)(s,{props:i,staticClass:"b-dropdown-form"}),r)}});e.default=u},4034:function(t,e,i){"use strict";e.__esModule=!0,e.default=e.props=void 0;var s=o(i("2b0e")),n=i("b42e");function o(t){return t&&t.__esModule?t:{default:t}}var r={tag:{type:String,default:"div"}};e.props=r;var a=s.default.extend({name:"BDropdownDivider",functional:!0,props:r,render:function(t,e){var i=e.props,s=e.data;return t(i.tag,(0,n.mergeData)(s,{staticClass:"dropdown-divider",attrs:{role:"separator"}}))}});e.default=a},"5df9":function(t,e,i){"use strict";e.__esModule=!0,e.default=e.props=void 0;var s=n(i("2b0e"));function n(t){return t&&t.__esModule?t:{default:t}}function o(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var r={active:{type:Boolean,default:!1},activeClass:{type:String,default:"active"},disabled:{type:Boolean,default:!1}};e.props=r;var a=s.default.extend({name:"BDropdownItemButton",inject:{bvDropdown:{default:null}},props:r,methods:{closeDropdown:function(){this.bvDropdown&&this.bvDropdown.hide(!0)},onClick:function(t){this.$emit("click",t),this.closeDropdown()}},render:function(t){return t("button",{staticClass:"dropdown-item",class:o({},this.activeClass,this.active),attrs:{role:"menuitem",type:"button",disabled:this.disabled},on:{click:this.onClick}},this.$slots.default)}});e.default=a},9668:function(t,e,i){"use strict";e.__esModule=!0,e.default=e.props=void 0;var s=o(i("2b0e")),n=i("b42e");function o(t){return t&&t.__esModule?t:{default:t}}var r={id:{type:String,default:null},tag:{type:String,default:"h6"}};e.props=r;var a=s.default.extend({name:"BDropdownHeader",functional:!0,props:r,render:function(t,e){var i=e.props,s=e.data,o=e.children;return t(i.tag,(0,n.mergeData)(s,{staticClass:"dropdown-header",attrs:{id:i.id||null}}),o)}});e.default=a},"9d3f":function(t,e,i){"use strict";e.__esModule=!0,e.default=void 0;var s=o(i("2b0e")),n=i("b42e");function o(t){return t&&t.__esModule?t:{default:t}}var r=s.default.extend({name:"BDropdownText",functional:!0,props:{tag:{type:String,default:"p"}},render:function(t,e){var i=e.props,s=e.data,o=e.children;return t(i.tag,(0,n.mergeData)(s,{props:i,staticClass:"b-dropdown-text"}),o)}});e.default=r},c7b9:function(t,e,i){"use strict";e.__esModule=!0,e.default=void 0;var s=c(i("e14e")),n=c(i("0096")),o=c(i("5df9")),r=c(i("9668")),a=c(i("4034")),l=c(i("22dc")),d=c(i("9d3f")),u=i("0a8d");function c(t){return t&&t.__esModule?t:{default:t}}var h={BDropdown:s.default,BDd:s.default,BDropdownItem:n.default,BDdItem:n.default,BDropdownItemButton:o.default,BDropdownItemBtn:o.default,BDdItemButton:o.default,BDdItemBtn:o.default,BDropdownHeader:r.default,BDdHeader:r.default,BDropdownDivider:a.default,BDdDivider:a.default,BDropdownForm:l.default,BDdForm:l.default,BDropdownText:d.default,BDdText:d.default},p={install:(0,u.installFactory)({components:h})};e.default=p},e14e:function(t,e,i){"use strict";e.__esModule=!0,e.default=e.props=void 0;var s=d(i("2b0e")),n=i("be11"),o=i("eb60"),r=d(i("eae0")),a=d(i("c190")),l=d(i("b664"));function d(t){return t&&t.__esModule?t:{default:t}}var u="BDropdown",c={toggleText:{type:String,default:function(){return String((0,o.getComponentConfig)(u,"toggleText"))}},size:{type:String,default:null},variant:{type:String,default:function(){return String((0,o.getComponentConfig)(u,"variant")||"")||null}},menuClass:{type:[String,Array],default:null},toggleTag:{type:String,default:"button"},toggleClass:{type:[String,Array],default:null},noCaret:{type:Boolean,default:!1},split:{type:Boolean,default:!1},splitHref:{type:String},splitTo:{type:[String,Object]},splitVariant:{type:String,default:null},role:{type:String,default:"menu"},boundary:{type:[String,Object],default:"scrollParent"}};e.props=c;var h=s.default.extend({name:u,mixins:[r.default,a.default],props:c,computed:{dropdownClasses:function(){var t="scrollParent"!==this.boundary||!this.boundary,e="";return this.dropup?e="dropup":this.dropright?e="dropright":this.dropleft&&(e="dropleft"),["btn-group","b-dropdown","dropdown",e,{show:this.visible,"position-static":t}]},menuClasses:function(){return["dropdown-menu",{"dropdown-menu-right":this.right,show:this.visible},this.menuClass]},toggleClasses:function(){return["dropdown-toggle",{"dropdown-toggle-split":this.split,"dropdown-toggle-no-caret":this.noCaret&&!this.split},this.toggleClass]}},render:function(t){var e=t(!1);if(this.split){var i={disabled:this.disabled,variant:this.splitVariant||this.variant,size:this.size};this.splitTo&&(i.to=this.splitTo),this.splitHref&&(i.href=this.splitHref),e=t(l.default,{ref:"button",props:i,attrs:{id:this.safeId("_BV_button_")},on:{click:this.click}},[this.$slots["button-content"]||this.$slots.text||this.html||(0,n.stripTags)(this.text)])}var s=t(l.default,{ref:"toggle",class:this.toggleClasses,props:{variant:this.variant,size:this.size,disabled:this.disabled,tag:this.toggleTag},attrs:{id:this.safeId("_BV_toggle_"),"aria-haspopup":"true","aria-expanded":this.visible?"true":"false"},on:{click:this.toggle,keydown:this.toggle}},[this.split?t("span",{class:["sr-only"]},[this.toggleText]):this.$slots["button-content"]||this.$slots.text||this.html||(0,n.stripTags)(this.text)]),o=t("div",{ref:"menu",class:this.menuClasses,attrs:{role:this.role,tabindex:"-1","aria-labelledby":this.safeId(this.split?"_BV_button_":"_BV_toggle_")},on:{mouseover:this.onMouseOver,keydown:this.onKeydown}},[this.$slots.default]);return t("div",{attrs:{id:this.safeId()},class:this.dropdownClasses},[e,s,o])}});e.default=h},e4c5:function(t,e,i){"use strict";e.__esModule=!0,e.default=void 0;var s=a(i("2b0e")),n=a(i("edbc")),o=i("4565"),r=i("1611");function a(t){return t&&t.__esModule?t:{default:t}}var l="bv::collapse::state",d="bv::collapse::accordion",u="bv::collapse::sync::state",c="bv::toggle::collapse",h={passive:!0,capture:!1},p=s.default.extend({name:"BCollapse",mixins:[n.default],model:{prop:"visible",event:"input"},props:{id:{type:String,required:!0},isNav:{type:Boolean,default:!1},accordion:{type:String,default:null},visible:{type:Boolean,default:!1},tag:{type:String,default:"div"}},data:function(){return{show:this.visible,transitioning:!1}},computed:{classObject:function(){return{"navbar-collapse":this.isNav,collapse:!this.transitioning,show:this.show&&!this.transitioning}}},watch:{visible:function(t){t!==this.show&&(this.show=t)},show:function(t,e){t!==e&&this.emitState()}},created:function(){this.show=this.visible,this.listenOnRoot(c,this.handleToggleEvt),this.listenOnRoot(d,this.handleAccordionEvt)},mounted:function(){var t=this;this.show=this.visible,this.isNav&&o.inBrowser&&(this.setWindowEvents(!0),this.handleResize()),this.$nextTick(function(){t.emitState()})},updated:function(){this.$root.$emit(u,this.id,this.show)},deactivated:function(){this.isNav&&o.inBrowser&&this.setWindowEvents(!1)},activated:function(){this.isNav&&o.inBrowser&&this.setWindowEvents(!0),this.$root.$emit(u,this.id,this.show)},beforeDestroy:function(){this.show=!1,this.isNav&&o.inBrowser&&this.setWindowEvents(!1)},methods:{setWindowEvents:function(t){var e=t?r.eventOn:r.eventOff;e(window,"resize",this.handleResize,h),e(window,"orientationchange",this.handleResize,h)},toggle:function(){this.show=!this.show},onEnter:function(t){t.style.height=0,(0,r.reflow)(t),t.style.height=t.scrollHeight+"px",this.transitioning=!0,this.$emit("show")},onAfterEnter:function(t){t.style.height=null,this.transitioning=!1,this.$emit("shown")},onLeave:function(t){t.style.height="auto",t.style.display="block",t.style.height=(0,r.getBCR)(t).height+"px",(0,r.reflow)(t),this.transitioning=!0,t.style.height=0,this.$emit("hide")},onAfterLeave:function(t){t.style.height=null,this.transitioning=!1,this.$emit("hidden")},emitState:function(){this.$emit("input",this.show),this.$root.$emit(l,this.id,this.show),this.accordion&&this.show&&this.$root.$emit(d,this.id,this.accordion)},clickHandler:function(t){var e=t.target;this.isNav&&e&&"block"===(0,r.getCS)(this.$el).display&&((0,r.matches)(e,".nav-link,.dropdown-item")||(0,r.closest)(".nav-link,.dropdown-item",e))&&(this.show=!1)},handleToggleEvt:function(t){t===this.id&&this.toggle()},handleAccordionEvt:function(t,e){this.accordion&&e===this.accordion&&(t===this.id?this.show||this.toggle():this.show&&this.toggle())},handleResize:function(){this.show="block"===(0,r.getCS)(this.$el).display}},render:function(t){var e=t(this.tag,{class:this.classObject,directives:[{name:"show",value:this.show}],attrs:{id:this.id||null},on:{click:this.clickHandler}},[this.$slots.default]);return t("transition",{props:{enterClass:"",enterActiveClass:"collapsing",enterToClass:"",leaveClass:"",leaveActiveClass:"collapsing",leaveToClass:""},on:{enter:this.onEnter,afterEnter:this.onAfterEnter,leave:this.onLeave,afterLeave:this.onAfterLeave}},[e])}});e.default=p},f3fa:function(t,e,i){"use strict";e.__esModule=!0,e.default=void 0;var s=r(i("e4c5")),n=r(i("a596")),o=i("0a8d");function r(t){return t&&t.__esModule?t:{default:t}}var a={BCollapse:s.default},l={BToggle:n.default},d={install:(0,o.installFactory)({components:a,directives:l})};e.default=d}}]);
//# sourceMappingURL=chunk-vendors~cd9e4e36.f8d53270.js.map