import{d as D,r as $,c5 as ft,c6 as bt,G as o,c8 as pe,cl as ut,cm as G,cn as vt,H as i,K as P,J as T,L as ze,O as Y,V as pt,Z as ie,co as ht,c as k,_ as Se,a4 as Te,cp as gt,bi as W,P as mt,av as xt,b2 as yt,F as Ct,bH as wt,bb as Rt,bC as zt,ap as C,S as St,c0 as he,bf as Q,af as Tt,W as ee,ab as $t,T as F,cq as Pt,ac as Lt,bt as ge,be as me,cr as _t,ao as Z,aA as te,a1 as Wt,a5 as Bt,cs as Et,bg as At}from"./index-2a868905.js";const kt=pe(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[pe("&::-webkit-scrollbar",{width:0,height:0})]),It=D({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=$(null);function n(s){!(s.currentTarget.offsetWidth<s.currentTarget.scrollWidth)||s.deltaY===0||(s.currentTarget.scrollLeft+=s.deltaY+s.deltaX,s.preventDefault())}const r=ft();return kt.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:bt,ssr:r}),Object.assign({selfRef:e,handleWheel:n},{scrollTo(...s){var p;(p=e.value)===null||p===void 0||p.scrollTo(...s)}})},render(){return o("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});var jt=/\s/;function Ht(e){for(var n=e.length;n--&&jt.test(e.charAt(n)););return n}var Ot=/^\s+/;function Ft(e){return e&&e.slice(0,Ht(e)+1).replace(Ot,"")}var xe=0/0,Dt=/^[-+]0x[0-9a-f]+$/i,Mt=/^0b[01]+$/i,Vt=/^0o[0-7]+$/i,Nt=parseInt;function ye(e){if(typeof e=="number")return e;if(ut(e))return xe;if(G(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=G(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=Ft(e);var r=Mt.test(e);return r||Vt.test(e)?Nt(e.slice(2),r?2:8):Dt.test(e)?xe:+e}var Ut=function(){return vt.Date.now()};const ne=Ut;var Xt="Expected a function",Kt=Math.max,Zt=Math.min;function Gt(e,n,r){var v,s,p,h,b,m,g=0,f=!1,d=!1,u=!0;if(typeof e!="function")throw new TypeError(Xt);n=ye(n)||0,G(r)&&(f=!!r.leading,d="maxWait"in r,p=d?Kt(ye(r.maxWait)||0,n):p,u="trailing"in r?!!r.trailing:u);function w(y){var E=v,j=s;return v=s=void 0,g=y,h=e.apply(j,E),h}function R(y){return g=y,b=setTimeout(B,n),f?w(y):h}function L(y){var E=y-m,j=y-g,O=n-E;return d?Zt(O,p-j):O}function S(y){var E=y-m,j=y-g;return m===void 0||E>=n||E<0||d&&j>=p}function B(){var y=ne();if(S(y))return x(y);b=setTimeout(B,L(y))}function x(y){return b=void 0,u&&v?w(y):(v=s=void 0,h)}function z(){b!==void 0&&clearTimeout(b),g=0,v=m=s=b=void 0}function I(){return b===void 0?h:x(ne())}function N(){var y=ne(),E=S(y);if(v=arguments,s=this,m=y,E){if(b===void 0)return R(m);if(d)return clearTimeout(b),b=setTimeout(B,n),w(m)}return b===void 0&&(b=setTimeout(B,n)),h}return N.cancel=z,N.flush=I,N}var Yt="Expected a function";function ae(e,n,r){var v=!0,s=!0;if(typeof e!="function")throw new TypeError(Yt);return G(r)&&(v="leading"in r?!!r.leading:v,s="trailing"in r?!!r.trailing:s),Gt(e,n,{leading:v,maxWait:n,trailing:s})}const qt=D({name:"Add",render(){return o("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))}}),Jt=D({name:"Empty",render(){return o("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),o("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),Qt=i("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[P("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[T("+",[P("description",`
 margin-top: 8px;
 `)])]),P("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),P("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),en=Object.assign(Object.assign({},Y.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),on=D({name:"Empty",props:en,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:r}=ze(e),v=Y("Empty","-empty",Qt,gt,e,n),{localeRef:s}=pt("Empty"),p=ie(ht,null),h=k(()=>{var f,d,u;return(f=e.description)!==null&&f!==void 0?f:(u=(d=p==null?void 0:p.mergedComponentPropsRef.value)===null||d===void 0?void 0:d.Empty)===null||u===void 0?void 0:u.description}),b=k(()=>{var f,d;return((d=(f=p==null?void 0:p.mergedComponentPropsRef.value)===null||f===void 0?void 0:f.Empty)===null||d===void 0?void 0:d.renderIcon)||(()=>o(Jt,null))}),m=k(()=>{const{size:f}=e,{common:{cubicBezierEaseInOut:d},self:{[W("iconSize",f)]:u,[W("fontSize",f)]:w,textColor:R,iconColor:L,extraTextColor:S}}=v.value;return{"--n-icon-size":u,"--n-font-size":w,"--n-bezier":d,"--n-text-color":R,"--n-icon-color":L,"--n-extra-text-color":S}}),g=r?Se("empty",k(()=>{let f="";const{size:d}=e;return f+=d[0],f}),m,e):void 0;return{mergedClsPrefix:n,mergedRenderIcon:b,localizedDescription:k(()=>h.value||s.value.description),cssVars:r?void 0:m,themeClass:g==null?void 0:g.themeClass,onRender:g==null?void 0:g.onRender}},render(){const{$slots:e,mergedClsPrefix:n,onRender:r}=this;return r==null||r(),o("div",{class:[`${n}-empty`,this.themeClass],style:this.cssVars},this.showIcon?o("div",{class:`${n}-empty__icon`},e.icon?e.icon():o(Te,{clsPrefix:n},{default:this.mergedRenderIcon})):null,this.showDescription?o("div",{class:`${n}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?o("div",{class:`${n}-empty__extra`},e.extra()):null)}}),se=mt("n-tabs"),$e={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},sn=D({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:$e,setup(e){const n=ie(se,null);return n||xt("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:n.paneStyleRef,class:n.paneClassRef,mergedClsPrefix:n.mergedClsPrefixRef}},render(){return o("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),tn=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},zt($e,["displayDirective"])),oe=D({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:tn,setup(e){const{mergedClsPrefixRef:n,valueRef:r,typeRef:v,closableRef:s,tabStyleRef:p,tabChangeIdRef:h,onBeforeLeaveRef:b,triggerRef:m,handleAdd:g,activateTab:f,handleClose:d}=ie(se);return{trigger:m,mergedClosable:k(()=>{if(e.internalAddable)return!1;const{closable:u}=e;return u===void 0?s.value:u}),style:p,clsPrefix:n,value:r,type:v,handleClose(u){u.stopPropagation(),!e.disabled&&d(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){g();return}const{name:u}=e,w=++h.id;if(u!==r.value){const{value:R}=b;R?Promise.resolve(R(e.name,r.value)).then(L=>{L&&h.id===w&&f(u)}):f(u)}}}},render(){const{internalAddable:e,clsPrefix:n,name:r,disabled:v,label:s,tab:p,value:h,mergedClosable:b,style:m,trigger:g,$slots:{default:f}}=this,d=s??p;return o("div",{class:`${n}-tabs-tab-wrapper`},this.internalLeftPadded?o("div",{class:`${n}-tabs-tab-pad`}):null,o("div",Object.assign({key:r,"data-name":r,"data-disabled":v?!0:void 0},yt({class:[`${n}-tabs-tab`,h===r&&`${n}-tabs-tab--active`,v&&`${n}-tabs-tab--disabled`,b&&`${n}-tabs-tab--closable`,e&&`${n}-tabs-tab--addable`],onClick:g==="click"?this.activateTab:void 0,onMouseenter:g==="hover"?this.activateTab:void 0,style:e?void 0:m},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),o("span",{class:`${n}-tabs-tab__label`},e?o(Ct,null,o("div",{class:`${n}-tabs-tab__height-placeholder`}," "),o(Te,{clsPrefix:n},{default:()=>o(qt,null)})):f?f():typeof d=="object"?d:wt(d??r)),b&&this.type==="card"?o(Rt,{clsPrefix:n,class:`${n}-tabs-tab__close`,onClick:this.handleClose,disabled:v}):null))}}),nn=i("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[C("segment-type",[i("tabs-rail",[T("&.transition-disabled","color: red;",[i("tabs-tab",`
 transition: none;
 `)])])]),C("left, right",`
 flex-direction: row;
 `,[i("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),i("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),C("right",`
 flex-direction: row-reverse;
 `,[i("tabs-bar",`
 left: 0;
 `)]),C("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[i("tabs-bar",`
 top: 0;
 `)]),i("tabs-rail",`
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[i("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[i("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[C("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 `),T("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),C("flex",[i("tabs-nav",{width:"100%"},[i("tabs-wrapper",{width:"100%"},[i("tabs-tab",{marginRight:0})])])]),i("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[P("prefix, suffix",`
 display: flex;
 align-items: center;
 `),P("prefix","padding-right: 16px;"),P("suffix","padding-left: 16px;")]),i("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[C("shadow-before",[T("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),C("shadow-after",[T("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),i("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[T("&::-webkit-scrollbar",`
 width: 0;
 height: 0;
 `)]),T("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 20px;
 z-index: 1;
 `),T("&::before",`
 left: 0;
 `),T("&::after",`
 right: 0;
 `)]),i("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 width: fit-content;
 `),i("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),i("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),i("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[C("disabled",{cursor:"not-allowed"}),P("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),P("label",`
 display: flex;
 align-items: center;
 `)]),i("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[T("&.transition-disabled",`
 transition: none;
 `),C("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),i("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),i("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 padding: var(--n-pane-padding);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[T("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),T("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),T("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),T("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),T("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),i("tabs-tab-pad",`
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),C("line-type, bar-type",[i("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[T("&:hover",{color:"var(--n-tab-text-color-hover)"}),C("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),C("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),i("tabs-nav",[C("line-type",[P("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),i("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),i("tabs-bar",`
 border-radius: 0;
 bottom: -1px;
 `)]),C("card-type",[P("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),i("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),i("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),i("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[C("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[P("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),St("disabled",[T("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),C("closable","padding-right: 6px;"),C("active",`
 border-bottom: 1px solid #0000;
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),C("disabled","color: var(--n-tab-text-color-disabled);")]),i("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")]),C("left, right",[i("tabs-wrapper",`
 flex-direction: column;
 `,[i("tabs-tab-wrapper",`
 flex-direction: column;
 `,[i("tabs-tab-pad",`
 height: var(--n-tab-gap);
 width: 100%;
 `)])]),i("tabs-nav-scroll-content",`
 border-bottom: none;
 `)]),C("left",[i("tabs-nav-scroll-content",`
 box-sizing: border-box;
 border-right: 1px solid var(--n-tab-border-color);
 `)]),C("right",[i("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `)]),C("bottom",[i("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 border-bottom: none;
 `)])])]),an=Object.assign(Object.assign({},Y.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],barWidth:Number,paneClass:String,paneStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),ln=D({name:"Tabs",props:an,setup(e,{slots:n}){var r,v,s,p;const{mergedClsPrefixRef:h,inlineThemeDisabled:b}=ze(e),m=Y("Tabs","-tabs",nn,_t,e,h),g=$(null),f=$(null),d=$(null),u=$(null),w=$(null),R=$(!0),L=$(!0),S=he(e,["labelSize","size"]),B=he(e,["activeName","value"]),x=$((v=(r=B.value)!==null&&r!==void 0?r:e.defaultValue)!==null&&v!==void 0?v:n.default?(p=(s=Q(n.default())[0])===null||s===void 0?void 0:s.props)===null||p===void 0?void 0:p.name:null),z=Tt(B,x),I={id:0},N=k(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});ee(z,()=>{I.id=0,O(),le()});function y(){var t;const{value:a}=z;return a===null?null:(t=g.value)===null||t===void 0?void 0:t.querySelector(`[data-name="${a}"]`)}function E(t){if(e.type==="card")return;const{value:a}=f;if(a&&t){const l=`${h.value}-tabs-bar--disabled`,{barWidth:c,placement:A}=e;if(t.dataset.disabled==="true"?a.classList.add(l):a.classList.remove(l),["top","bottom"].includes(A)){if(j(["top","maxHeight","height"]),typeof c=="number"&&t.offsetWidth>=c){const _=Math.floor((t.offsetWidth-c)/2)+t.offsetLeft;a.style.left=`${_}px`,a.style.maxWidth=`${c}px`}else a.style.left=`${t.offsetLeft}px`,a.style.maxWidth=`${t.offsetWidth}px`;a.style.width="8192px",a.offsetWidth}else{if(j(["left","maxWidth","width"]),typeof c=="number"&&t.offsetHeight>=c){const _=Math.floor((t.offsetHeight-c)/2)+t.offsetTop;a.style.top=`${_}px`,a.style.maxHeight=`${c}px`}else a.style.top=`${t.offsetTop}px`,a.style.maxHeight=`${t.offsetHeight}px`;a.style.height="8192px",a.offsetHeight}}}function j(t){const{value:a}=f;if(a)for(const l of t)a.style[l]=""}function O(){if(e.type==="card")return;const t=y();t&&E(t)}function le(t){var a;const l=(a=w.value)===null||a===void 0?void 0:a.$el;if(!l)return;const c=y();if(!c)return;const{scrollLeft:A,offsetWidth:_}=l,{offsetLeft:V,offsetWidth:K}=c;A>V?l.scrollTo({top:0,left:V,behavior:"smooth"}):V+K>A+_&&l.scrollTo({top:0,left:V+K-_,behavior:"smooth"})}const U=$(null);let q=0,H=null;function Pe(t){const a=U.value;if(a){q=t.getBoundingClientRect().height;const l=`${q}px`,c=()=>{a.style.height=l,a.style.maxHeight=l};H?(c(),H(),H=null):H=c}}function Le(t){const a=U.value;if(a){const l=t.getBoundingClientRect().height,c=()=>{document.body.offsetHeight,a.style.maxHeight=`${l}px`,a.style.height=`${Math.max(q,l)}px`};H?(H(),H=null,c()):H=c}}function _e(){const t=U.value;t&&(t.style.maxHeight="",t.style.height="")}const de={value:[]},ce=$("next");function We(t){const a=z.value;let l="next";for(const c of de.value){if(c===a)break;if(c===t){l="prev";break}}ce.value=l,Be(t)}function Be(t){const{onActiveNameChange:a,onUpdateValue:l,"onUpdate:value":c}=e;a&&Z(a,t),l&&Z(l,t),c&&Z(c,t),x.value=t}function Ee(t){const{onClose:a}=e;a&&Z(a,t)}function fe(){const{value:t}=f;if(!t)return;const a="transition-disabled";t.classList.add(a),O(),t.classList.remove(a)}let be=0;function Ae(t){var a;if(t.contentRect.width===0&&t.contentRect.height===0||be===t.contentRect.width)return;be=t.contentRect.width;const{type:l}=e;(l==="line"||l==="bar")&&fe(),l!=="segment"&&J((a=w.value)===null||a===void 0?void 0:a.$el)}const ke=ae(Ae,64);ee([()=>e.justifyContent,()=>e.size],()=>{te(()=>{const{type:t}=e;(t==="line"||t==="bar")&&fe()})});const X=$(!1);function Ie(t){var a;const{target:l,contentRect:{width:c}}=t,A=l.parentElement.offsetWidth;if(!X.value)A<c&&(X.value=!0);else{const{value:_}=u;if(!_)return;A-c>_.$el.offsetWidth&&(X.value=!1)}J((a=w.value)===null||a===void 0?void 0:a.$el)}const je=ae(Ie,64);function He(){const{onAdd:t}=e;t&&t(),te(()=>{const a=y(),{value:l}=w;!a||!l||l.scrollTo({left:a.offsetLeft,top:0,behavior:"smooth"})})}function J(t){if(!t)return;const{scrollLeft:a,scrollWidth:l,offsetWidth:c}=t;R.value=a<=0,L.value=a+c>=l}const Oe=ae(t=>{J(t.target)},64);$t(se,{triggerRef:F(e,"trigger"),tabStyleRef:F(e,"tabStyle"),paneClassRef:F(e,"paneClass"),paneStyleRef:F(e,"paneStyle"),mergedClsPrefixRef:h,typeRef:F(e,"type"),closableRef:F(e,"closable"),valueRef:z,tabChangeIdRef:I,onBeforeLeaveRef:F(e,"onBeforeLeave"),activateTab:We,handleClose:Ee,handleAdd:He}),Pt(()=>{O(),le()}),Lt(()=>{const{value:t}=d;if(!t||["left","right"].includes(e.placement))return;const{value:a}=h,l=`${a}-tabs-nav-scroll-wrapper--shadow-before`,c=`${a}-tabs-nav-scroll-wrapper--shadow-after`;R.value?t.classList.remove(l):t.classList.add(l),L.value?t.classList.remove(c):t.classList.add(c)});const ue=$(null);ee(z,()=>{if(e.type==="segment"){const t=ue.value;t&&te(()=>{t.classList.add("transition-disabled"),t.offsetWidth,t.classList.remove("transition-disabled")})}});const Fe={syncBarPosition:()=>{O()}},ve=k(()=>{const{value:t}=S,{type:a}=e,l={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[a],c=`${t}${l}`,{self:{barColor:A,closeIconColor:_,closeIconColorHover:V,closeIconColorPressed:K,tabColor:De,tabBorderColor:Me,paneTextColor:Ve,tabFontWeight:Ne,tabBorderRadius:Ue,tabFontWeightActive:Xe,colorSegment:Ke,fontWeightStrong:Ze,tabColorSegment:Ge,closeSize:Ye,closeIconSize:qe,closeColorHover:Je,closeColorPressed:Qe,closeBorderRadius:et,[W("panePadding",t)]:tt,[W("tabPadding",c)]:nt,[W("tabPaddingVertical",c)]:at,[W("tabGap",c)]:rt,[W("tabTextColor",a)]:ot,[W("tabTextColorActive",a)]:it,[W("tabTextColorHover",a)]:st,[W("tabTextColorDisabled",a)]:lt,[W("tabFontSize",t)]:dt},common:{cubicBezierEaseInOut:ct}}=m.value;return{"--n-bezier":ct,"--n-color-segment":Ke,"--n-bar-color":A,"--n-tab-font-size":dt,"--n-tab-text-color":ot,"--n-tab-text-color-active":it,"--n-tab-text-color-disabled":lt,"--n-tab-text-color-hover":st,"--n-pane-text-color":Ve,"--n-tab-border-color":Me,"--n-tab-border-radius":Ue,"--n-close-size":Ye,"--n-close-icon-size":qe,"--n-close-color-hover":Je,"--n-close-color-pressed":Qe,"--n-close-border-radius":et,"--n-close-icon-color":_,"--n-close-icon-color-hover":V,"--n-close-icon-color-pressed":K,"--n-tab-color":De,"--n-tab-font-weight":Ne,"--n-tab-font-weight-active":Xe,"--n-tab-padding":nt,"--n-tab-padding-vertical":at,"--n-tab-gap":rt,"--n-pane-padding":tt,"--n-font-weight-strong":Ze,"--n-tab-color-segment":Ge}}),M=b?Se("tabs",k(()=>`${S.value[0]}${e.type[0]}`),ve,e):void 0;return Object.assign({mergedClsPrefix:h,mergedValue:z,renderedNames:new Set,tabsRailElRef:ue,tabsPaneWrapperRef:U,tabsElRef:g,barElRef:f,addTabInstRef:u,xScrollInstRef:w,scrollWrapperElRef:d,addTabFixed:X,tabWrapperStyle:N,handleNavResize:ke,mergedSize:S,handleScroll:Oe,handleTabsResize:je,cssVars:b?void 0:ve,themeClass:M==null?void 0:M.themeClass,animationDirection:ce,renderNameListRef:de,onAnimationBeforeLeave:Pe,onAnimationEnter:Le,onAnimationAfterEnter:_e,onRender:M==null?void 0:M.onRender},Fe)},render(){const{mergedClsPrefix:e,type:n,placement:r,addTabFixed:v,addable:s,mergedSize:p,renderNameListRef:h,onRender:b,$slots:{default:m,prefix:g,suffix:f}}=this;b==null||b();const d=m?Q(m()).filter(x=>x.type.__TAB_PANE__===!0):[],u=m?Q(m()).filter(x=>x.type.__TAB__===!0):[],w=!u.length,R=n==="card",L=n==="segment",S=!R&&!L&&this.justifyContent;h.value=[];const B=()=>{const x=o("div",{style:this.tabWrapperStyle,class:[`${e}-tabs-wrapper`]},S?null:o("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),w?d.map((z,I)=>(h.value.push(z.props.name),re(o(oe,Object.assign({},z.props,{internalCreatedByPane:!0,internalLeftPadded:I!==0&&(!S||S==="center"||S==="start"||S==="end")}),z.children?{default:z.children.tab}:void 0)))):u.map((z,I)=>(h.value.push(z.props.name),re(I!==0&&!S?Re(z):z))),!v&&s&&R?we(s,(w?d.length:u.length)!==0):null,S?null:o("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return o("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},R&&s?o(me,{onResize:this.handleTabsResize},{default:()=>x}):x,R?o("div",{class:`${e}-tabs-pad`}):null,R?null:o("div",{ref:"barElRef",class:`${e}-tabs-bar`}))};return o("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${n}-type`,`${e}-tabs--${p}-size`,S&&`${e}-tabs--flex`,`${e}-tabs--${r}`],style:this.cssVars},o("div",{class:[`${e}-tabs-nav--${n}-type`,`${e}-tabs-nav--${r}`,`${e}-tabs-nav`]},ge(g,x=>x&&o("div",{class:`${e}-tabs-nav__prefix`},x)),L?o("div",{class:`${e}-tabs-rail`,ref:"tabsRailElRef"},w?d.map((x,z)=>(h.value.push(x.props.name),o(oe,Object.assign({},x.props,{internalCreatedByPane:!0,internalLeftPadded:z!==0}),x.children?{default:x.children.tab}:void 0))):u.map((x,z)=>(h.value.push(x.props.name),z===0?x:Re(x)))):o(me,{onResize:this.handleNavResize},{default:()=>o("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(r)?o(It,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:B}):o("div",{class:`${e}-tabs-nav-y-scroll`},B()))}),v&&s&&R?we(s,!0):null,ge(f,x=>x&&o("div",{class:`${e}-tabs-nav__suffix`},x))),w&&(this.animated?o("div",{ref:"tabsPaneWrapperRef",class:`${e}-tabs-pane-wrapper`},Ce(d,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Ce(d,this.mergedValue,this.renderedNames)))}});function Ce(e,n,r,v,s,p,h){const b=[];return e.forEach(m=>{const{name:g,displayDirective:f,"display-directive":d}=m.props,u=R=>f===R||d===R,w=n===g;if(m.key!==void 0&&(m.key=g),w||u("show")||u("show:lazy")&&r.has(g)){r.has(g)||r.add(g);const R=!u("if");b.push(R?Wt(m,[[Bt,w]]):m)}}),h?o(Et,{name:`${h}-transition`,onBeforeLeave:v,onEnter:s,onAfterEnter:p},{default:()=>b}):b}function we(e,n){return o(oe,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:n,disabled:typeof e=="object"&&e.disabled})}function Re(e){const n=At(e);return n.props?n.props.internalLeftPadded=!0:n.props={internalLeftPadded:!0},n}function re(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}export{sn as N,on as a,ln as b};
