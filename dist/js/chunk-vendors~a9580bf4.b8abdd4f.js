(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~a9580bf4"],{2635:function(t,e,n){"use strict";e.__esModule=!0,e.default=void 0;var i=r(n("4c76")),l=r(n("294b")),o=n("0a8d");function r(t){return t&&t.__esModule?t:{default:t}}var s={BImg:i.default,BImgLazy:l.default},u={install:(0,o.installFactory)({components:s})};e.default=u},"294b":function(t,e,n){"use strict";e.__esModule=!0,e.default=e.props=void 0;var i=s(n("2b0e")),l=s(n("4c76")),o=n("1611"),r=n("eb60");function s(t){return t&&t.__esModule?t:{default:t}}var u="BImgLazy",a=100,h={passive:!0,capture:!1},d={src:{type:String,default:null,required:!0},alt:{type:String,default:null},width:{type:[Number,String],default:null},height:{type:[Number,String],default:null},blankSrc:{type:String,default:null},blankColor:{type:String,default:function(){return String((0,r.getComponentConfig)(u,"blankColor"))}},blankWidth:{type:[Number,String],default:null},blankHeight:{type:[Number,String],default:null},show:{type:Boolean,default:!1},fluid:{type:Boolean,default:!1},fluidGrow:{type:Boolean,default:!1},block:{type:Boolean,default:!1},thumbnail:{type:Boolean,default:!1},rounded:{type:[Boolean,String],default:!1},left:{type:Boolean,default:!1},right:{type:Boolean,default:!1},center:{type:Boolean,default:!1},offset:{type:[Number,String],default:360},throttle:{type:[Number,String],default:a}};e.props=d;var c=i.default.extend({name:u,props:d,data:function(){return{isShown:!1,scrollTimeout:null}},computed:{computedSrc:function(){return!this.blankSrc||this.isShown?this.src:this.blankSrc},computedBlank:function(){return!(this.isShown||this.blankSrc)},computedWidth:function(){return this.isShown?this.width:this.blankWidth||this.width},computedHeight:function(){return this.isShown?this.height:this.blankHeight||this.height}},watch:{show:function(t,e){t!==e&&(this.isShown=t,t||this.setListeners(!0))},isShown:function(t,e){t!==e&&this.$emit("update:show",t)}},created:function(){this.isShown=this.show},mounted:function(){this.isShown?this.setListeners(!1):(this.setListeners(!0),this.$nextTick(this.checkView))},activated:function(){this.isShown||(this.setListeners(!0),this.$nextTick(this.checkView))},deactivated:function(){this.setListeners(!1)},beforeDestroy:function(){this.setListeners(!1)},methods:{setListeners:function(t){this.scrollTimeout&&(clearTimeout(this.scrollTimeout),this.scrollTimeout=null);var e=window;t?((0,o.eventOn)(this.$el,"load",this.checkView),(0,o.eventOn)(e,"scroll",this.onScroll,h),(0,o.eventOn)(e,"resize",this.onScroll,h),(0,o.eventOn)(e,"orientationchange",this.onScroll,h),(0,o.eventOn)(document,"transitionend",this.onScroll,h)):((0,o.eventOff)(this.$el,"load",this.checkView),(0,o.eventOff)(e,"scroll",this.onScroll,h),(0,o.eventOff)(e,"resize",this.onScroll,h),(0,o.eventOff)(e,"orientationchange",this.onScroll,h),(0,o.eventOff)(document,"transitionend",this.onScroll,h))},checkView:function(){if(this.isShown)this.setListeners(!1);else{var t=parseInt(this.offset,10)||0,e=document.documentElement,n={l:0-t,t:0-t,b:e.clientHeight+t,r:e.clientWidth+t},i=(0,o.getBCR)(this.$el);i.right>=n.l&&i.bottom>=n.t&&i.left<=n.r&&i.top<=n.b&&(this.isShown=!0,this.setListeners(!1))}},onScroll:function(){this.isShown?this.setListeners(!1):(clearTimeout(this.scrollTimeout),this.scrollTimeout=setTimeout(this.checkView,parseInt(this.throttle,10)||a))}},render:function(t){return t(l.default,{props:{src:this.computedSrc,alt:this.alt,blank:this.computedBlank,blankColor:this.blankColor,width:this.computedWidth,height:this.computedHeight,fluid:this.fluid,fluidGrow:this.fluidGrow,block:this.block,thumbnail:this.thumbnail,rounded:this.rounded,left:this.left,right:this.right,center:this.center}})}});e.default=c},"4c76":function(t,e,n){"use strict";e.__esModule=!0,e.default=e.props=void 0;var i=r(n("2b0e")),l=n("b42e"),o=n("eb60");function r(t){return t&&t.__esModule?t:{default:t}}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u="BImg",a='<svg width="%{w}" height="%{h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %{w} %{h}" preserveAspectRatio="none"><rect width="100%" height="100%" style="fill:%{f};"></rect></svg>';function h(t,e,n){var i=encodeURIComponent(a.replace("%{w}",String(t)).replace("%{h}",String(e)).replace("%{f}",n));return"data:image/svg+xml;charset=UTF-8,".concat(i)}var d={src:{type:String,default:null},alt:{type:String,default:null},width:{type:[Number,String],default:null},height:{type:[Number,String],default:null},block:{type:Boolean,default:!1},fluid:{type:Boolean,default:!1},fluidGrow:{type:Boolean,default:!1},rounded:{type:[Boolean,String],default:!1},thumbnail:{type:Boolean,default:!1},left:{type:Boolean,default:!1},right:{type:Boolean,default:!1},center:{type:Boolean,default:!1},blank:{type:Boolean,default:!1},blankColor:{type:String,default:function(){return String((0,o.getComponentConfig)(u,"blankColor"))}}};e.props=d;var c=i.default.extend({name:"BImg",functional:!0,props:d,render:function(t,e){var n,i=e.props,o=e.data,r=i.src,u=parseInt(i.width,10)?parseInt(i.width,10):null,a=parseInt(i.height,10)?parseInt(i.height,10):null,d=null,c=i.block;return i.blank&&(!a&&Boolean(u)?a=u:!u&&Boolean(a)&&(u=a),u||a||(u=1,a=1),r=h(u,a,i.blankColor||"transparent")),i.left?d="float-left":i.right?d="float-right":i.center&&(d="mx-auto",c=!0),t("img",(0,l.mergeData)(o,{attrs:{src:r,alt:i.alt,width:u?String(u):null,height:a?String(a):null},class:(n={"img-thumbnail":i.thumbnail,"img-fluid":i.fluid||i.fluidGrow,"w-100":i.fluidGrow,rounded:""===i.rounded||!0===i.rounded},s(n,"rounded-".concat(i.rounded),"string"===typeof i.rounded&&""!==i.rounded),s(n,d,Boolean(d)),s(n,"d-block",c),n)}))}});e.default=c}}]);
//# sourceMappingURL=chunk-vendors~a9580bf4.b8abdd4f.js.map