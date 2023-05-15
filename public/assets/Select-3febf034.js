import{d as ue,c5 as Rt,c6 as Ft,o as ze,c7 as rn,bR as an,c as W,r as z,bd as Ke,bG as at,G as f,b2 as sn,be as gt,c8 as De,a8 as cn,bc as Ee,aA as ft,c9 as dn,ca as bt,X as Pt,Z as Mt,cb as ht,bH as Te,a4 as un,a3 as zt,H as D,K as H,ap as Q,J as ie,S as Ce,R as It,O as be,T as oe,cc as fn,W as Oe,ab as st,_ as He,bt as ct,bO as hn,aw as vn,ay as gn,bi as ee,cd as Qe,ce as bn,L as Bt,at as pn,bb as mn,P as yn,cf as wn,ao as ce,bv as pt,cg as xn,ac as Cn,ch as kn,ci as Sn,aT as Tn,F as On,af as mt,V as Rn,c0 as Fn,ae as Pn,$ as Mn,ag as dt,ah as zn,ai as In,ak as Bn,a1 as _n,a5 as An,al as yt,cj as Nn,an as $n,ck as En}from"./index-2a868905.js";import{a as Ln}from"./Tabs-2e12da33.js";function Ve(e,n){let{target:t}=e;for(;t;){if(t.dataset&&t.dataset[n]!==void 0)return!0;t=t.parentElement}return!1}function Kn(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function et(e){const n=e.filter(t=>t!==void 0);if(n.length!==0)return n.length===1?n[0]:t=>{e.forEach(o=>{o&&o(t)})}}function wt(e){return e&-e}class Dn{constructor(n,t){this.l=n,this.min=t;const o=new Array(n+1);for(let l=0;l<n+1;++l)o[l]=0;this.ft=o}add(n,t){if(t===0)return;const{l:o,ft:l}=this;for(n+=1;n<=o;)l[n]+=t,n+=wt(n)}get(n){return this.sum(n+1)-this.sum(n)}sum(n){if(n===void 0&&(n=this.l),n<=0)return 0;const{ft:t,min:o,l}=this;if(n>l)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let s=n*o;for(;n>0;)s+=t[n],n-=wt(n);return s}getBound(n){let t=0,o=this.l;for(;o>t;){const l=Math.floor((t+o)/2),s=this.sum(l);if(s>n){o=l;continue}else if(s<n){if(t===l)return this.sum(t+1)<=n?t+1:l;t=l}else return l}return t}}let Le;function Vn(){return Le===void 0&&("matchMedia"in window?Le=window.matchMedia("(pointer:coarse)").matches:Le=!1),Le}let tt;function xt(){return tt===void 0&&(tt="chrome"in window?window.devicePixelRatio:1),tt}const Wn=De(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[De("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[De("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),jn=ue({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const n=Rt();Wn.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:Ft,ssr:n}),ze(()=>{const{defaultScrollIndex:g,defaultScrollKey:x}=e;g!=null?d({index:g}):x!=null&&d({key:x})});let t=!1,o=!1;rn(()=>{if(t=!1,!o){o=!0;return}d({top:p.value,left:y})}),an(()=>{t=!0,o||(o=!0)});const l=W(()=>{const g=new Map,{keyField:x}=e;return e.items.forEach((B,q)=>{g.set(B[x],q)}),g}),s=z(null),a=z(void 0),r=new Map,b=W(()=>{const{items:g,itemSize:x,keyField:B}=e,q=new Dn(g.length,x);return g.forEach((Y,U)=>{const L=Y[B],X=r.get(L);X!==void 0&&q.add(U,X)}),q}),h=z(0);let y=0;const p=z(0),F=Ke(()=>Math.max(b.value.getBound(p.value-at(e.paddingTop))-1,0)),S=W(()=>{const{value:g}=a;if(g===void 0)return[];const{items:x,itemSize:B}=e,q=F.value,Y=Math.min(q+Math.ceil(g/B+1),x.length-1),U=[];for(let L=q;L<=Y;++L)U.push(x[L]);return U}),d=(g,x)=>{if(typeof g=="number"){O(g,x,"auto");return}const{left:B,top:q,index:Y,key:U,position:L,behavior:X,debounce:c=!0}=g;if(B!==void 0||q!==void 0)O(B,q,X);else if(Y!==void 0)T(Y,X,c);else if(U!==void 0){const m=l.value.get(U);m!==void 0&&T(m,X,c)}else L==="bottom"?O(0,Number.MAX_SAFE_INTEGER,X):L==="top"&&O(0,0,X)};let R,I=null;function T(g,x,B){const{value:q}=b,Y=q.sum(g)+at(e.paddingTop);if(!B)s.value.scrollTo({left:0,top:Y,behavior:x});else{R=g,I!==null&&window.clearTimeout(I),I=window.setTimeout(()=>{R=void 0,I=null},16);const{scrollTop:U,offsetHeight:L}=s.value;if(Y>U){const X=q.get(g);Y+X<=U+L||s.value.scrollTo({left:0,top:Y+X-L,behavior:x})}else s.value.scrollTo({left:0,top:Y,behavior:x})}}function O(g,x,B){s.value.scrollTo({left:g,top:x,behavior:B})}function $(g,x){var B,q,Y;if(t||e.ignoreItemResize||E(x.target))return;const{value:U}=b,L=l.value.get(g),X=U.get(L),c=(Y=(q=(B=x.borderBoxSize)===null||B===void 0?void 0:B[0])===null||q===void 0?void 0:q.blockSize)!==null&&Y!==void 0?Y:x.contentRect.height;if(c===X)return;c-e.itemSize===0?r.delete(g):r.set(g,c-e.itemSize);const j=c-X;if(j===0)return;U.add(L,j);const te=s.value;if(te!=null){if(R===void 0){const re=U.sum(L);te.scrollTop>re&&te.scrollBy(0,j)}else if(L<R)te.scrollBy(0,j);else if(L===R){const re=U.sum(L);c+re>te.scrollTop+te.offsetHeight&&te.scrollBy(0,j)}Z()}h.value++}const w=!Vn();let C=!1;function P(g){var x;(x=e.onScroll)===null||x===void 0||x.call(e,g),(!w||!C)&&Z()}function V(g){var x;if((x=e.onWheel)===null||x===void 0||x.call(e,g),w){const B=s.value;if(B!=null){if(g.deltaX===0&&(B.scrollTop===0&&g.deltaY<=0||B.scrollTop+B.offsetHeight>=B.scrollHeight&&g.deltaY>=0))return;g.preventDefault(),B.scrollTop+=g.deltaY/xt(),B.scrollLeft+=g.deltaX/xt(),Z(),C=!0,cn(()=>{C=!1})}}}function G(g){if(t||E(g.target)||g.contentRect.height===a.value)return;a.value=g.contentRect.height;const{onResize:x}=e;x!==void 0&&x(g)}function Z(){const{value:g}=s;g!=null&&(p.value=g.scrollTop,y=g.scrollLeft)}function E(g){let x=g;for(;x!==null;){if(x.style.display==="none")return!0;x=x.parentElement}return!1}return{listHeight:a,listStyle:{overflow:"auto"},keyToIndex:l,itemsStyle:W(()=>{const{itemResizable:g}=e,x=Ee(b.value.sum());return h.value,[e.itemsStyle,{boxSizing:"content-box",height:g?"":x,minHeight:g?x:"",paddingTop:Ee(e.paddingTop),paddingBottom:Ee(e.paddingBottom)}]}),visibleItemsStyle:W(()=>(h.value,{transform:`translateY(${Ee(b.value.sum(F.value))})`})),viewportItems:S,listElRef:s,itemsElRef:z(null),scrollTo:d,handleListResize:G,handleListScroll:P,handleListWheel:V,handleItemResize:$}},render(){const{itemResizable:e,keyField:n,keyToIndex:t,visibleItemsTag:o}=this;return f(gt,{onResize:this.handleListResize},{default:()=>{var l,s;return f("div",sn(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?f("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[f(o,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>this.viewportItems.map(a=>{const r=a[n],b=t.get(r),h=this.$slots.default({item:a,index:b})[0];return e?f(gt,{key:r,onResize:y=>this.handleItemResize(r,y)},{default:()=>h}):(h.key=r,h)})})]):(s=(l=this.$slots).empty)===null||s===void 0?void 0:s.call(l)])}})}}),xe="v-hidden",Hn=De("[v-hidden]",{display:"none!important"}),Ct=ue({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateOverflow:Function},setup(e,{slots:n}){const t=z(null),o=z(null);function l(){const{value:a}=t,{getCounter:r,getTail:b}=e;let h;if(r!==void 0?h=r():h=o.value,!a||!h)return;h.hasAttribute(xe)&&h.removeAttribute(xe);const{children:y}=a,p=a.offsetWidth,F=[],S=n.tail?b==null?void 0:b():null;let d=S?S.offsetWidth:0,R=!1;const I=a.children.length-(n.tail?1:0);for(let O=0;O<I-1;++O){if(O<0)continue;const $=y[O];if(R){$.hasAttribute(xe)||$.setAttribute(xe,"");continue}else $.hasAttribute(xe)&&$.removeAttribute(xe);const w=$.offsetWidth;if(d+=w,F[O]=w,d>p){const{updateCounter:C}=e;for(let P=O;P>=0;--P){const V=I-1-P;C!==void 0?C(V):h.textContent=`${V}`;const G=h.offsetWidth;if(d-=F[P],d+G<=p||P===0){R=!0,O=P-1,S&&(O===-1?(S.style.maxWidth=`${p-G}px`,S.style.boxSizing="border-box"):S.style.maxWidth="");break}}}}const{onUpdateOverflow:T}=e;R?T!==void 0&&T(!0):(T!==void 0&&T(!1),h.setAttribute(xe,""))}const s=Rt();return Hn.mount({id:"vueuc/overflow",head:!0,anchorMetaName:Ft,ssr:s}),ze(l),{selfRef:t,counterRef:o,sync:l}},render(){const{$slots:e}=this;return ft(this.sync),f("div",{class:"v-overflow",ref:"selfRef"},[dn(e,"default"),e.counter?e.counter():f("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function _t(e,n){n&&(ze(()=>{const{value:t}=e;t&&bt.registerHandler(t,n)}),Pt(()=>{const{value:t}=e;t&&bt.unregisterHandler(t)}))}const Gn=ue({name:"Checkmark",render(){return f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},f("g",{fill:"none"},f("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),Un=ue({props:{onFocus:Function,onBlur:Function},setup(e){return()=>f("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}});function kt(e){return Array.isArray(e)?e:[e]}const ut={STOP:"STOP"};function At(e,n){const t=n(e);e.children!==void 0&&t!==ut.STOP&&e.children.forEach(o=>At(o,n))}function qn(e,n={}){const{preserveGroup:t=!1}=n,o=[],l=t?a=>{a.isLeaf||(o.push(a.key),s(a.children))}:a=>{a.isLeaf||(a.isGroup||o.push(a.key),s(a.children))};function s(a){a.forEach(l)}return s(e),o}function Yn(e,n){const{isLeaf:t}=e;return t!==void 0?t:!n(e)}function Xn(e){return e.children}function Zn(e){return e.key}function Jn(){return!1}function Qn(e,n){const{isLeaf:t}=e;return!(t===!1&&!Array.isArray(n(e)))}function eo(e){return e.disabled===!0}function to(e,n){return e.isLeaf===!1&&!Array.isArray(n(e))}function nt(e){var n;return e==null?[]:Array.isArray(e)?e:(n=e.checkedKeys)!==null&&n!==void 0?n:[]}function ot(e){var n;return e==null||Array.isArray(e)?[]:(n=e.indeterminateKeys)!==null&&n!==void 0?n:[]}function no(e,n){const t=new Set(e);return n.forEach(o=>{t.has(o)||t.add(o)}),Array.from(t)}function oo(e,n){const t=new Set(e);return n.forEach(o=>{t.has(o)&&t.delete(o)}),Array.from(t)}function lo(e){return(e==null?void 0:e.type)==="group"}function io(e){const n=new Map;return e.forEach((t,o)=>{n.set(t.key,o)}),t=>{var o;return(o=n.get(t))!==null&&o!==void 0?o:null}}class ro extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function ao(e,n,t,o){return We(n.concat(e),t,o,!1)}function so(e,n){const t=new Set;return e.forEach(o=>{const l=n.treeNodeMap.get(o);if(l!==void 0){let s=l.parent;for(;s!==null&&!(s.disabled||t.has(s.key));)t.add(s.key),s=s.parent}}),t}function co(e,n,t,o){const l=We(n,t,o,!1),s=We(e,t,o,!0),a=so(e,t),r=[];return l.forEach(b=>{(s.has(b)||a.has(b))&&r.push(b)}),r.forEach(b=>l.delete(b)),l}function lt(e,n){const{checkedKeys:t,keysToCheck:o,keysToUncheck:l,indeterminateKeys:s,cascade:a,leafOnly:r,checkStrategy:b,allowNotLoaded:h}=e;if(!a)return o!==void 0?{checkedKeys:no(t,o),indeterminateKeys:Array.from(s)}:l!==void 0?{checkedKeys:oo(t,l),indeterminateKeys:Array.from(s)}:{checkedKeys:Array.from(t),indeterminateKeys:Array.from(s)};const{levelTreeNodeMap:y}=n;let p;l!==void 0?p=co(l,t,n,h):o!==void 0?p=ao(o,t,n,h):p=We(t,n,h,!1);const F=b==="parent",S=b==="child"||r,d=p,R=new Set,I=Math.max.apply(null,Array.from(y.keys()));for(let T=I;T>=0;T-=1){const O=T===0,$=y.get(T);for(const w of $){if(w.isLeaf)continue;const{key:C,shallowLoaded:P}=w;if(S&&P&&w.children.forEach(E=>{!E.disabled&&!E.isLeaf&&E.shallowLoaded&&d.has(E.key)&&d.delete(E.key)}),w.disabled||!P)continue;let V=!0,G=!1,Z=!0;for(const E of w.children){const g=E.key;if(!E.disabled){if(Z&&(Z=!1),d.has(g))G=!0;else if(R.has(g)){G=!0,V=!1;break}else if(V=!1,G)break}}V&&!Z?(F&&w.children.forEach(E=>{!E.disabled&&d.has(E.key)&&d.delete(E.key)}),d.add(C)):G&&R.add(C),O&&S&&d.has(C)&&d.delete(C)}}return{checkedKeys:Array.from(d),indeterminateKeys:Array.from(R)}}function We(e,n,t,o){const{treeNodeMap:l,getChildren:s}=n,a=new Set,r=new Set(e);return e.forEach(b=>{const h=l.get(b);h!==void 0&&At(h,y=>{if(y.disabled)return ut.STOP;const{key:p}=y;if(!a.has(p)&&(a.add(p),r.add(p),to(y.rawNode,s))){if(o)return ut.STOP;if(!t)throw new ro}})}),r}function uo(e,{includeGroup:n=!1,includeSelf:t=!0},o){var l;const s=o.treeNodeMap;let a=e==null?null:(l=s.get(e))!==null&&l!==void 0?l:null;const r={keyPath:[],treeNodePath:[],treeNode:a};if(a!=null&&a.ignored)return r.treeNode=null,r;for(;a;)!a.ignored&&(n||!a.isGroup)&&r.treeNodePath.push(a),a=a.parent;return r.treeNodePath.reverse(),t||r.treeNodePath.pop(),r.keyPath=r.treeNodePath.map(b=>b.key),r}function fo(e){if(e.length===0)return null;const n=e[0];return n.isGroup||n.ignored||n.disabled?n.getNext():n}function ho(e,n){const t=e.siblings,o=t.length,{index:l}=e;return n?t[(l+1)%o]:l===t.length-1?null:t[l+1]}function St(e,n,{loop:t=!1,includeDisabled:o=!1}={}){const l=n==="prev"?vo:ho,s={reverse:n==="prev"};let a=!1,r=null;function b(h){if(h!==null){if(h===e){if(!a)a=!0;else if(!e.disabled&&!e.isGroup){r=e;return}}else if((!h.disabled||o)&&!h.ignored&&!h.isGroup){r=h;return}if(h.isGroup){const y=vt(h,s);y!==null?r=y:b(l(h,t))}else{const y=l(h,!1);if(y!==null)b(y);else{const p=go(h);p!=null&&p.isGroup?b(l(p,t)):t&&b(l(h,!0))}}}}return b(e),r}function vo(e,n){const t=e.siblings,o=t.length,{index:l}=e;return n?t[(l-1+o)%o]:l===0?null:t[l-1]}function go(e){return e.parent}function vt(e,n={}){const{reverse:t=!1}=n,{children:o}=e;if(o){const{length:l}=o,s=t?l-1:0,a=t?-1:l,r=t?-1:1;for(let b=s;b!==a;b+=r){const h=o[b];if(!h.disabled&&!h.ignored)if(h.isGroup){const y=vt(h,n);if(y!==null)return y}else return h}}return null}const bo={getChild(){return this.ignored?null:vt(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return St(this,"next",e)},getPrev(e={}){return St(this,"prev",e)}};function po(e,n){const t=n?new Set(n):void 0,o=[];function l(s){s.forEach(a=>{o.push(a),!(a.isLeaf||!a.children||a.ignored)&&(a.isGroup||t===void 0||t.has(a.key))&&l(a.children)})}return l(e),o}function mo(e,n){const t=e.key;for(;n;){if(n.key===t)return!0;n=n.parent}return!1}function Nt(e,n,t,o,l,s=null,a=0){const r=[];return e.forEach((b,h)=>{var y;const p=Object.create(o);if(p.rawNode=b,p.siblings=r,p.level=a,p.index=h,p.isFirstChild=h===0,p.isLastChild=h+1===e.length,p.parent=s,!p.ignored){const F=l(b);Array.isArray(F)&&(p.children=Nt(F,n,t,o,l,p,a+1))}r.push(p),n.set(p.key,p),t.has(a)||t.set(a,[]),(y=t.get(a))===null||y===void 0||y.push(p)}),r}function yo(e,n={}){var t;const o=new Map,l=new Map,{getDisabled:s=eo,getIgnored:a=Jn,getIsGroup:r=lo,getKey:b=Zn}=n,h=(t=n.getChildren)!==null&&t!==void 0?t:Xn,y=n.ignoreEmptyChildren?w=>{const C=h(w);return Array.isArray(C)?C.length?C:null:C}:h,p=Object.assign({get key(){return b(this.rawNode)},get disabled(){return s(this.rawNode)},get isGroup(){return r(this.rawNode)},get isLeaf(){return Yn(this.rawNode,y)},get shallowLoaded(){return Qn(this.rawNode,y)},get ignored(){return a(this.rawNode)},contains(w){return mo(this,w)}},bo),F=Nt(e,o,l,p,y);function S(w){if(w==null)return null;const C=o.get(w);return C&&!C.isGroup&&!C.ignored?C:null}function d(w){if(w==null)return null;const C=o.get(w);return C&&!C.ignored?C:null}function R(w,C){const P=d(w);return P?P.getPrev(C):null}function I(w,C){const P=d(w);return P?P.getNext(C):null}function T(w){const C=d(w);return C?C.getParent():null}function O(w){const C=d(w);return C?C.getChild():null}const $={treeNodes:F,treeNodeMap:o,levelTreeNodeMap:l,maxLevel:Math.max(...l.keys()),getChildren:y,getFlattenedNodes(w){return po(F,w)},getNode:S,getPrev:R,getNext:I,getParent:T,getChild:O,getFirstAvailableNode(){return fo(F)},getPath(w,C={}){return uo(w,C,$)},getCheckedKeys(w,C={}){const{cascade:P=!0,leafOnly:V=!1,checkStrategy:G="all",allowNotLoaded:Z=!1}=C;return lt({checkedKeys:nt(w),indeterminateKeys:ot(w),cascade:P,leafOnly:V,checkStrategy:G,allowNotLoaded:Z},$)},check(w,C,P={}){const{cascade:V=!0,leafOnly:G=!1,checkStrategy:Z="all",allowNotLoaded:E=!1}=P;return lt({checkedKeys:nt(C),indeterminateKeys:ot(C),keysToCheck:w==null?[]:kt(w),cascade:V,leafOnly:G,checkStrategy:Z,allowNotLoaded:E},$)},uncheck(w,C,P={}){const{cascade:V=!0,leafOnly:G=!1,checkStrategy:Z="all",allowNotLoaded:E=!1}=P;return lt({checkedKeys:nt(C),indeterminateKeys:ot(C),keysToUncheck:w==null?[]:kt(w),cascade:V,leafOnly:G,checkStrategy:Z,allowNotLoaded:E},$)},getNonLeafKeys(w={}){return qn(F,w)}};return $}function wo(e,n){return f(zt,{name:"fade-in-scale-up-transition"},{default:()=>e?f(un,{clsPrefix:n,class:`${n}-base-select-option__check`},{default:()=>f(Gn)}):null})}const Tt=ue({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:n,pendingTmNodeRef:t,multipleRef:o,valueSetRef:l,renderLabelRef:s,renderOptionRef:a,labelFieldRef:r,valueFieldRef:b,showCheckmarkRef:h,nodePropsRef:y,handleOptionClick:p,handleOptionMouseEnter:F}=Mt(ht),S=Ke(()=>{const{value:T}=t;return T?e.tmNode.key===T.key:!1});function d(T){const{tmNode:O}=e;O.disabled||p(T,O)}function R(T){const{tmNode:O}=e;O.disabled||F(T,O)}function I(T){const{tmNode:O}=e,{value:$}=S;O.disabled||$||F(T,O)}return{multiple:o,isGrouped:Ke(()=>{const{tmNode:T}=e,{parent:O}=T;return O&&O.rawNode.type==="group"}),showCheckmark:h,nodeProps:y,isPending:S,isSelected:Ke(()=>{const{value:T}=n,{value:O}=o;if(T===null)return!1;const $=e.tmNode.rawNode[b.value];if(O){const{value:w}=l;return w.has($)}else return T===$}),labelField:r,renderLabel:s,renderOption:a,handleMouseMove:I,handleMouseEnter:R,handleClick:d}},render(){const{clsPrefix:e,tmNode:{rawNode:n},isSelected:t,isPending:o,isGrouped:l,showCheckmark:s,nodeProps:a,renderOption:r,renderLabel:b,handleClick:h,handleMouseEnter:y,handleMouseMove:p}=this,F=wo(t,e),S=b?[b(n,t),s&&F]:[Te(n[this.labelField],n,t),s&&F],d=a==null?void 0:a(n),R=f("div",Object.assign({},d,{class:[`${e}-base-select-option`,n.class,d==null?void 0:d.class,{[`${e}-base-select-option--disabled`]:n.disabled,[`${e}-base-select-option--selected`]:t,[`${e}-base-select-option--grouped`]:l,[`${e}-base-select-option--pending`]:o,[`${e}-base-select-option--show-checkmark`]:s}],style:[(d==null?void 0:d.style)||"",n.style||""],onClick:et([h,d==null?void 0:d.onClick]),onMouseenter:et([y,d==null?void 0:d.onMouseenter]),onMousemove:et([p,d==null?void 0:d.onMousemove])}),f("div",{class:`${e}-base-select-option__content`},S));return n.render?n.render({node:R,option:n,selected:t}):r?r({node:R,option:n,selected:t}):R}}),Ot=ue({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:n,labelFieldRef:t,nodePropsRef:o}=Mt(ht);return{labelField:t,nodeProps:o,renderLabel:e,renderOption:n}},render(){const{clsPrefix:e,renderLabel:n,renderOption:t,nodeProps:o,tmNode:{rawNode:l}}=this,s=o==null?void 0:o(l),a=n?n(l,!1):Te(l[this.labelField],l,!1),r=f("div",Object.assign({},s,{class:[`${e}-base-select-group-header`,s==null?void 0:s.class]}),a);return l.render?l.render({node:r,option:l}):t?t({node:r,option:l,selected:!1}):r}}),xo=D("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[D("scrollbar",`
 max-height: var(--n-height);
 `),D("virtual-list",`
 max-height: var(--n-height);
 `),D("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[H("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),D("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),D("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),H("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),H("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),H("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),D("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),D("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[Q("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),ie("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),ie("&:active",`
 color: var(--n-option-text-color-pressed);
 `),Q("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),Q("pending",[ie("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),Q("selected",`
 color: var(--n-option-text-color-active);
 `,[ie("&::before",`
 background-color: var(--n-option-color-active);
 `),Q("pending",[ie("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),Q("disabled",`
 cursor: not-allowed;
 `,[Ce("selected",`
 color: var(--n-option-text-color-disabled);
 `),Q("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),H("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[It({enterScale:"0.5"})])])]),Co=ue({name:"InternalSelectMenu",props:Object.assign(Object.assign({},be.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const n=be("InternalSelectMenu","-internal-select-menu",xo,fn,e,oe(e,"clsPrefix")),t=z(null),o=z(null),l=z(null),s=W(()=>e.treeMate.getFlattenedNodes()),a=W(()=>io(s.value)),r=z(null);function b(){const{treeMate:c}=e;let m=null;const{value:j}=e;j===null?m=c.getFirstAvailableNode():(e.multiple?m=c.getNode((j||[])[(j||[]).length-1]):m=c.getNode(j),(!m||m.disabled)&&(m=c.getFirstAvailableNode())),g(m||null)}function h(){const{value:c}=r;c&&!e.treeMate.getNode(c.key)&&(r.value=null)}let y;Oe(()=>e.show,c=>{c?y=Oe(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?b():h(),ft(x)):h()},{immediate:!0}):y==null||y()},{immediate:!0}),Pt(()=>{y==null||y()});const p=W(()=>at(n.value.self[ee("optionHeight",e.size)])),F=W(()=>Qe(n.value.self[ee("padding",e.size)])),S=W(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),d=W(()=>{const c=s.value;return c&&c.length===0});function R(c){const{onToggle:m}=e;m&&m(c)}function I(c){const{onScroll:m}=e;m&&m(c)}function T(c){var m;(m=l.value)===null||m===void 0||m.sync(),I(c)}function O(){var c;(c=l.value)===null||c===void 0||c.sync()}function $(){const{value:c}=r;return c||null}function w(c,m){m.disabled||g(m,!1)}function C(c,m){m.disabled||R(m)}function P(c){var m;Ve(c,"action")||(m=e.onKeyup)===null||m===void 0||m.call(e,c)}function V(c){var m;Ve(c,"action")||(m=e.onKeydown)===null||m===void 0||m.call(e,c)}function G(c){var m;(m=e.onMousedown)===null||m===void 0||m.call(e,c),!e.focusable&&c.preventDefault()}function Z(){const{value:c}=r;c&&g(c.getNext({loop:!0}),!0)}function E(){const{value:c}=r;c&&g(c.getPrev({loop:!0}),!0)}function g(c,m=!1){r.value=c,m&&x()}function x(){var c,m;const j=r.value;if(!j)return;const te=a.value(j.key);te!==null&&(e.virtualScroll?(c=o.value)===null||c===void 0||c.scrollTo({index:te}):(m=l.value)===null||m===void 0||m.scrollTo({index:te,elSize:p.value}))}function B(c){var m,j;!((m=t.value)===null||m===void 0)&&m.contains(c.target)&&((j=e.onFocus)===null||j===void 0||j.call(e,c))}function q(c){var m,j;!((m=t.value)===null||m===void 0)&&m.contains(c.relatedTarget)||(j=e.onBlur)===null||j===void 0||j.call(e,c)}st(ht,{handleOptionMouseEnter:w,handleOptionClick:C,valueSetRef:S,pendingTmNodeRef:r,nodePropsRef:oe(e,"nodeProps"),showCheckmarkRef:oe(e,"showCheckmark"),multipleRef:oe(e,"multiple"),valueRef:oe(e,"value"),renderLabelRef:oe(e,"renderLabel"),renderOptionRef:oe(e,"renderOption"),labelFieldRef:oe(e,"labelField"),valueFieldRef:oe(e,"valueField")}),st(bn,t),ze(()=>{const{value:c}=l;c&&c.sync()});const Y=W(()=>{const{size:c}=e,{common:{cubicBezierEaseInOut:m},self:{height:j,borderRadius:te,color:re,groupHeaderTextColor:pe,actionDividerColor:me,optionTextColorPressed:he,optionTextColor:fe,optionTextColorDisabled:se,optionTextColorActive:le,optionOpacityDisabled:ve,optionCheckColor:de,actionTextColor:Re,optionColorPending:ye,optionColorActive:we,loadingColor:Fe,loadingSize:Pe,optionColorActivePending:Me,[ee("optionFontSize",c)]:ke,[ee("optionHeight",c)]:Se,[ee("optionPadding",c)]:ae}}=n.value;return{"--n-height":j,"--n-action-divider-color":me,"--n-action-text-color":Re,"--n-bezier":m,"--n-border-radius":te,"--n-color":re,"--n-option-font-size":ke,"--n-group-header-text-color":pe,"--n-option-check-color":de,"--n-option-color-pending":ye,"--n-option-color-active":we,"--n-option-color-active-pending":Me,"--n-option-height":Se,"--n-option-opacity-disabled":ve,"--n-option-text-color":fe,"--n-option-text-color-active":le,"--n-option-text-color-disabled":se,"--n-option-text-color-pressed":he,"--n-option-padding":ae,"--n-option-padding-left":Qe(ae,"left"),"--n-option-padding-right":Qe(ae,"right"),"--n-loading-color":Fe,"--n-loading-size":Pe}}),{inlineThemeDisabled:U}=e,L=U?He("internal-select-menu",W(()=>e.size[0]),Y,e):void 0,X={selfRef:t,next:Z,prev:E,getPendingTmNode:$};return _t(t,e.onResize),Object.assign({mergedTheme:n,virtualListRef:o,scrollbarRef:l,itemSize:p,padding:F,flattenedNodes:s,empty:d,virtualListContainer(){const{value:c}=o;return c==null?void 0:c.listElRef},virtualListContent(){const{value:c}=o;return c==null?void 0:c.itemsElRef},doScroll:I,handleFocusin:B,handleFocusout:q,handleKeyUp:P,handleKeyDown:V,handleMouseDown:G,handleVirtualListResize:O,handleVirtualListScroll:T,cssVars:U?void 0:Y,themeClass:L==null?void 0:L.themeClass,onRender:L==null?void 0:L.onRender},X)},render(){const{$slots:e,virtualScroll:n,clsPrefix:t,mergedTheme:o,themeClass:l,onRender:s}=this;return s==null||s(),f("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${t}-base-select-menu`,l,this.multiple&&`${t}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},this.loading?f("div",{class:`${t}-base-select-menu__loading`},f(hn,{clsPrefix:t,strokeWidth:20})):this.empty?f("div",{class:`${t}-base-select-menu__empty`,"data-empty":!0},gn(e.empty,()=>[f(Ln,{theme:o.peers.Empty,themeOverrides:o.peerOverrides.Empty})])):f(vn,{ref:"scrollbarRef",theme:o.peers.Scrollbar,themeOverrides:o.peerOverrides.Scrollbar,scrollable:this.scrollable,container:n?this.virtualListContainer:void 0,content:n?this.virtualListContent:void 0,onScroll:n?void 0:this.doScroll},{default:()=>n?f(jn,{ref:"virtualListRef",class:`${t}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:a})=>a.isGroup?f(Ot,{key:a.key,clsPrefix:t,tmNode:a}):a.ignored?null:f(Tt,{clsPrefix:t,key:a.key,tmNode:a})}):f("div",{class:`${t}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(a=>a.isGroup?f(Ot,{key:a.key,clsPrefix:t,tmNode:a}):f(Tt,{clsPrefix:t,key:a.key,tmNode:a})))}),ct(e.action,a=>a&&[f("div",{class:`${t}-base-select-menu__action`,"data-action":!0,key:"action"},a),f(Un,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),ko={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},So=D("tag",`
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[Q("strong",`
 font-weight: var(--n-font-weight-strong);
 `),H("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),H("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),H("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),H("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),Q("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[H("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),H("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),Q("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),Q("icon, avatar",[Q("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),Q("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),Q("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[Ce("disabled",[ie("&:hover","background-color: var(--n-color-hover-checkable);",[Ce("checked","color: var(--n-text-color-hover-checkable);")]),ie("&:active","background-color: var(--n-color-pressed-checkable);",[Ce("checked","color: var(--n-text-color-pressed-checkable);")])]),Q("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[Ce("disabled",[ie("&:hover","background-color: var(--n-color-checked-hover);"),ie("&:active","background-color: var(--n-color-checked-pressed);")])])])]),To=Object.assign(Object.assign(Object.assign({},be.props),ko),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),Oo=yn("n-tag"),it=ue({name:"Tag",props:To,setup(e){const n=z(null),{mergedBorderedRef:t,mergedClsPrefixRef:o,inlineThemeDisabled:l,mergedRtlRef:s}=Bt(e),a=be("Tag","-tag",So,wn,e,o);st(Oo,{roundRef:oe(e,"round")});function r(S){if(!e.disabled&&e.checkable){const{checked:d,onCheckedChange:R,onUpdateChecked:I,"onUpdate:checked":T}=e;I&&I(!d),T&&T(!d),R&&R(!d)}}function b(S){if(e.triggerClickOnClose||S.stopPropagation(),!e.disabled){const{onClose:d}=e;d&&ce(d,S)}}const h={setTextContent(S){const{value:d}=n;d&&(d.textContent=S)}},y=pn("Tag",s,o),p=W(()=>{const{type:S,size:d,color:{color:R,textColor:I}={}}=e,{common:{cubicBezierEaseInOut:T},self:{padding:O,closeMargin:$,closeMarginRtl:w,borderRadius:C,opacityDisabled:P,textColorCheckable:V,textColorHoverCheckable:G,textColorPressedCheckable:Z,textColorChecked:E,colorCheckable:g,colorHoverCheckable:x,colorPressedCheckable:B,colorChecked:q,colorCheckedHover:Y,colorCheckedPressed:U,closeBorderRadius:L,fontWeightStrong:X,[ee("colorBordered",S)]:c,[ee("closeSize",d)]:m,[ee("closeIconSize",d)]:j,[ee("fontSize",d)]:te,[ee("height",d)]:re,[ee("color",S)]:pe,[ee("textColor",S)]:me,[ee("border",S)]:he,[ee("closeIconColor",S)]:fe,[ee("closeIconColorHover",S)]:se,[ee("closeIconColorPressed",S)]:le,[ee("closeColorHover",S)]:ve,[ee("closeColorPressed",S)]:de}}=a.value;return{"--n-font-weight-strong":X,"--n-avatar-size-override":`calc(${re} - 8px)`,"--n-bezier":T,"--n-border-radius":C,"--n-border":he,"--n-close-icon-size":j,"--n-close-color-pressed":de,"--n-close-color-hover":ve,"--n-close-border-radius":L,"--n-close-icon-color":fe,"--n-close-icon-color-hover":se,"--n-close-icon-color-pressed":le,"--n-close-icon-color-disabled":fe,"--n-close-margin":$,"--n-close-margin-rtl":w,"--n-close-size":m,"--n-color":R||(t.value?c:pe),"--n-color-checkable":g,"--n-color-checked":q,"--n-color-checked-hover":Y,"--n-color-checked-pressed":U,"--n-color-hover-checkable":x,"--n-color-pressed-checkable":B,"--n-font-size":te,"--n-height":re,"--n-opacity-disabled":P,"--n-padding":O,"--n-text-color":I||me,"--n-text-color-checkable":V,"--n-text-color-checked":E,"--n-text-color-hover-checkable":G,"--n-text-color-pressed-checkable":Z}}),F=l?He("tag",W(()=>{let S="";const{type:d,size:R,color:{color:I,textColor:T}={}}=e;return S+=d[0],S+=R[0],I&&(S+=`a${pt(I)}`),T&&(S+=`b${pt(T)}`),t.value&&(S+="c"),S}),p,e):void 0;return Object.assign(Object.assign({},h),{rtlEnabled:y,mergedClsPrefix:o,contentRef:n,mergedBordered:t,handleClick:r,handleCloseClick:b,cssVars:l?void 0:p,themeClass:F==null?void 0:F.themeClass,onRender:F==null?void 0:F.onRender})},render(){var e,n;const{mergedClsPrefix:t,rtlEnabled:o,closable:l,color:{borderColor:s}={},round:a,onRender:r,$slots:b}=this;r==null||r();const h=ct(b.avatar,p=>p&&f("div",{class:`${t}-tag__avatar`},p)),y=ct(b.icon,p=>p&&f("div",{class:`${t}-tag__icon`},p));return f("div",{class:[`${t}-tag`,this.themeClass,{[`${t}-tag--rtl`]:o,[`${t}-tag--strong`]:this.strong,[`${t}-tag--disabled`]:this.disabled,[`${t}-tag--checkable`]:this.checkable,[`${t}-tag--checked`]:this.checkable&&this.checked,[`${t}-tag--round`]:a,[`${t}-tag--avatar`]:h,[`${t}-tag--icon`]:y,[`${t}-tag--closable`]:l}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},y||h,f("span",{class:`${t}-tag__content`,ref:"contentRef"},(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e)),!this.checkable&&l?f(mn,{clsPrefix:t,class:`${t}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:a,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?f("div",{class:`${t}-tag__border`,style:{borderColor:s}}):null)}}),Ro=ie([D("base-selection",`
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[D("base-loading",`
 color: var(--n-loading-color);
 `),D("base-selection-tags","min-height: var(--n-height);"),H("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),H("state-border",`
 z-index: 1;
 border-color: #0000;
 `),D("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[H("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),D("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[H("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),D("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[H("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),D("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),D("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[D("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[H("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),H("render-label",`
 color: var(--n-text-color);
 `)]),Ce("disabled",[ie("&:hover",[H("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),Q("focus",[H("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),Q("active",[H("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),D("base-selection-label","background-color: var(--n-color-active);"),D("base-selection-tags","background-color: var(--n-color-active);")])]),Q("disabled","cursor: not-allowed;",[H("arrow",`
 color: var(--n-arrow-color-disabled);
 `),D("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[D("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),H("render-label",`
 color: var(--n-text-color-disabled);
 `)]),D("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),D("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),D("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[H("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),H("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>Q(`${e}-status`,[H("state-border",`border: var(--n-border-${e});`),Ce("disabled",[ie("&:hover",[H("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),Q("active",[H("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),D("base-selection-label",`background-color: var(--n-color-active-${e});`),D("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),Q("focus",[H("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),D("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),D("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[ie("&:last-child","padding-right: 0;"),D("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[H("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),Fo=ue({name:"InternalSelection",props:Object.assign(Object.assign({},be.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const n=z(null),t=z(null),o=z(null),l=z(null),s=z(null),a=z(null),r=z(null),b=z(null),h=z(null),y=z(null),p=z(!1),F=z(!1),S=z(!1),d=be("InternalSelection","-internal-selection",Ro,xn,e,oe(e,"clsPrefix")),R=W(()=>e.clearable&&!e.disabled&&(S.value||e.active)),I=W(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Te(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),T=W(()=>{const u=e.selectedOption;if(u)return u[e.labelField]}),O=W(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function $(){var u;const{value:k}=n;if(k){const{value:J}=t;J&&(J.style.width=`${k.offsetWidth}px`,e.maxTagCount!=="responsive"&&((u=h.value)===null||u===void 0||u.sync()))}}function w(){const{value:u}=y;u&&(u.style.display="none")}function C(){const{value:u}=y;u&&(u.style.display="inline-block")}Oe(oe(e,"active"),u=>{u||w()}),Oe(oe(e,"pattern"),()=>{e.multiple&&ft($)});function P(u){const{onFocus:k}=e;k&&k(u)}function V(u){const{onBlur:k}=e;k&&k(u)}function G(u){const{onDeleteOption:k}=e;k&&k(u)}function Z(u){const{onClear:k}=e;k&&k(u)}function E(u){const{onPatternInput:k}=e;k&&k(u)}function g(u){var k;(!u.relatedTarget||!(!((k=o.value)===null||k===void 0)&&k.contains(u.relatedTarget)))&&P(u)}function x(u){var k;!((k=o.value)===null||k===void 0)&&k.contains(u.relatedTarget)||V(u)}function B(u){Z(u)}function q(){S.value=!0}function Y(){S.value=!1}function U(u){!e.active||!e.filterable||u.target!==t.value&&u.preventDefault()}function L(u){G(u)}function X(u){if(u.key==="Backspace"&&!c.value&&!e.pattern.length){const{selectedOptions:k}=e;k!=null&&k.length&&L(k[k.length-1])}}const c=z(!1);let m=null;function j(u){const{value:k}=n;if(k){const J=u.target.value;k.textContent=J,$()}e.ignoreComposition&&c.value?m=u:E(u)}function te(){c.value=!0}function re(){c.value=!1,e.ignoreComposition&&E(m),m=null}function pe(u){var k;F.value=!0,(k=e.onPatternFocus)===null||k===void 0||k.call(e,u)}function me(u){var k;F.value=!1,(k=e.onPatternBlur)===null||k===void 0||k.call(e,u)}function he(){var u,k;if(e.filterable)F.value=!1,(u=a.value)===null||u===void 0||u.blur(),(k=t.value)===null||k===void 0||k.blur();else if(e.multiple){const{value:J}=l;J==null||J.blur()}else{const{value:J}=s;J==null||J.blur()}}function fe(){var u,k,J;e.filterable?(F.value=!1,(u=a.value)===null||u===void 0||u.focus()):e.multiple?(k=l.value)===null||k===void 0||k.focus():(J=s.value)===null||J===void 0||J.focus()}function se(){const{value:u}=t;u&&(C(),u.focus())}function le(){const{value:u}=t;u&&u.blur()}function ve(u){const{value:k}=r;k&&k.setTextContent(`+${u}`)}function de(){const{value:u}=b;return u}function Re(){return t.value}let ye=null;function we(){ye!==null&&window.clearTimeout(ye)}function Fe(){e.disabled||e.active||(we(),ye=window.setTimeout(()=>{O.value&&(p.value=!0)},100))}function Pe(){we()}function Me(u){u||(we(),p.value=!1)}Oe(O,u=>{u||(p.value=!1)}),ze(()=>{Cn(()=>{const u=a.value;u&&(u.tabIndex=e.disabled||F.value?-1:0)})}),_t(o,e.onResize);const{inlineThemeDisabled:ke}=e,Se=W(()=>{const{size:u}=e,{common:{cubicBezierEaseInOut:k},self:{borderRadius:J,color:Ie,placeholderColor:Ge,textColor:Ue,paddingSingle:qe,paddingMultiple:Ye,caretColor:Be,colorDisabled:_e,textColorDisabled:Ae,placeholderColorDisabled:Xe,colorActive:Ze,boxShadowFocus:Ne,boxShadowActive:ge,boxShadowHover:i,border:v,borderFocus:M,borderHover:K,borderActive:_,arrowColor:N,arrowColorDisabled:A,loadingColor:ne,colorActiveWarning:$e,boxShadowFocusWarning:Je,boxShadowActiveWarning:Et,boxShadowHoverWarning:Lt,borderWarning:Kt,borderFocusWarning:Dt,borderHoverWarning:Vt,borderActiveWarning:Wt,colorActiveError:jt,boxShadowFocusError:Ht,boxShadowActiveError:Gt,boxShadowHoverError:Ut,borderError:qt,borderFocusError:Yt,borderHoverError:Xt,borderActiveError:Zt,clearColor:Jt,clearColorHover:Qt,clearColorPressed:en,clearSize:tn,arrowSize:nn,[ee("height",u)]:on,[ee("fontSize",u)]:ln}}=d.value;return{"--n-bezier":k,"--n-border":v,"--n-border-active":_,"--n-border-focus":M,"--n-border-hover":K,"--n-border-radius":J,"--n-box-shadow-active":ge,"--n-box-shadow-focus":Ne,"--n-box-shadow-hover":i,"--n-caret-color":Be,"--n-color":Ie,"--n-color-active":Ze,"--n-color-disabled":_e,"--n-font-size":ln,"--n-height":on,"--n-padding-single":qe,"--n-padding-multiple":Ye,"--n-placeholder-color":Ge,"--n-placeholder-color-disabled":Xe,"--n-text-color":Ue,"--n-text-color-disabled":Ae,"--n-arrow-color":N,"--n-arrow-color-disabled":A,"--n-loading-color":ne,"--n-color-active-warning":$e,"--n-box-shadow-focus-warning":Je,"--n-box-shadow-active-warning":Et,"--n-box-shadow-hover-warning":Lt,"--n-border-warning":Kt,"--n-border-focus-warning":Dt,"--n-border-hover-warning":Vt,"--n-border-active-warning":Wt,"--n-color-active-error":jt,"--n-box-shadow-focus-error":Ht,"--n-box-shadow-active-error":Gt,"--n-box-shadow-hover-error":Ut,"--n-border-error":qt,"--n-border-focus-error":Yt,"--n-border-hover-error":Xt,"--n-border-active-error":Zt,"--n-clear-size":tn,"--n-clear-color":Jt,"--n-clear-color-hover":Qt,"--n-clear-color-pressed":en,"--n-arrow-size":nn}}),ae=ke?He("internal-selection",W(()=>e.size[0]),Se,e):void 0;return{mergedTheme:d,mergedClearable:R,patternInputFocused:F,filterablePlaceholder:I,label:T,selected:O,showTagsPanel:p,isComposing:c,counterRef:r,counterWrapperRef:b,patternInputMirrorRef:n,patternInputRef:t,selfRef:o,multipleElRef:l,singleElRef:s,patternInputWrapperRef:a,overflowRef:h,inputTagElRef:y,handleMouseDown:U,handleFocusin:g,handleClear:B,handleMouseEnter:q,handleMouseLeave:Y,handleDeleteOption:L,handlePatternKeyDown:X,handlePatternInputInput:j,handlePatternInputBlur:me,handlePatternInputFocus:pe,handleMouseEnterCounter:Fe,handleMouseLeaveCounter:Pe,handleFocusout:x,handleCompositionEnd:re,handleCompositionStart:te,onPopoverUpdateShow:Me,focus:fe,focusInput:se,blur:he,blurInput:le,updateCounter:ve,getCounter:de,getTail:Re,renderLabel:e.renderLabel,cssVars:ke?void 0:Se,themeClass:ae==null?void 0:ae.themeClass,onRender:ae==null?void 0:ae.onRender}},render(){const{status:e,multiple:n,size:t,disabled:o,filterable:l,maxTagCount:s,bordered:a,clsPrefix:r,onRender:b,renderTag:h,renderLabel:y}=this;b==null||b();const p=s==="responsive",F=typeof s=="number",S=p||F,d=f(Sn,null,{default:()=>f(kn,{clsPrefix:r,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var I,T;return(T=(I=this.$slots).arrow)===null||T===void 0?void 0:T.call(I)}})});let R;if(n){const{labelField:I}=this,T=x=>f("div",{class:`${r}-base-selection-tag-wrapper`,key:x.value},h?h({option:x,handleClose:()=>this.handleDeleteOption(x)}):f(it,{size:t,closable:!x.disabled,disabled:o,onClose:()=>this.handleDeleteOption(x),internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>y?y(x,!0):Te(x[I],x,!0)})),O=()=>(F?this.selectedOptions.slice(0,s):this.selectedOptions).map(T),$=l?f("div",{class:`${r}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},f("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:o,value:this.pattern,autofocus:this.autofocus,class:`${r}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),f("span",{ref:"patternInputMirrorRef",class:`${r}-base-selection-input-tag__mirror`},this.pattern)):null,w=p?()=>f("div",{class:`${r}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},f(it,{size:t,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:o})):void 0;let C;if(F){const x=this.selectedOptions.length-s;x>0&&(C=f("div",{class:`${r}-base-selection-tag-wrapper`,key:"__counter__"},f(it,{size:t,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:o},{default:()=>`+${x}`})))}const P=p?l?f(Ct,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:O,counter:w,tail:()=>$}):f(Ct,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:O,counter:w}):F?O().concat(C):O(),V=S?()=>f("div",{class:`${r}-base-selection-popover`},p?O():this.selectedOptions.map(T)):void 0,G=S?{show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover}:null,E=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?f("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`},f("div",{class:`${r}-base-selection-placeholder__inner`},this.placeholder)):null,g=l?f("div",{ref:"patternInputWrapperRef",class:`${r}-base-selection-tags`},P,p?null:$,d):f("div",{ref:"multipleElRef",class:`${r}-base-selection-tags`,tabindex:o?void 0:0},P,d);R=f(On,null,S?f(Tn,Object.assign({},G,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>g,default:V}):g,E)}else if(l){const I=this.pattern||this.isComposing,T=this.active?!I:!this.selected,O=this.active?!1:this.selected;R=f("div",{ref:"patternInputWrapperRef",class:`${r}-base-selection-label`},f("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${r}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:o,disabled:o,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),O?f("div",{class:`${r}-base-selection-label__render-label ${r}-base-selection-overlay`,key:"input"},f("div",{class:`${r}-base-selection-overlay__wrapper`},h?h({option:this.selectedOption,handleClose:()=>{}}):y?y(this.selectedOption,!0):Te(this.label,this.selectedOption,!0))):null,T?f("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`,key:"placeholder"},f("div",{class:`${r}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,d)}else R=f("div",{ref:"singleElRef",class:`${r}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?f("div",{class:`${r}-base-selection-input`,title:Kn(this.label),key:"input"},f("div",{class:`${r}-base-selection-input__content`},h?h({option:this.selectedOption,handleClose:()=>{}}):y?y(this.selectedOption,!0):Te(this.label,this.selectedOption,!0))):f("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`,key:"placeholder"},f("div",{class:`${r}-base-selection-placeholder__inner`},this.placeholder)),d);return f("div",{ref:"selfRef",class:[`${r}-base-selection`,this.themeClass,e&&`${r}-base-selection--${e}-status`,{[`${r}-base-selection--active`]:this.active,[`${r}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${r}-base-selection--disabled`]:this.disabled,[`${r}-base-selection--multiple`]:this.multiple,[`${r}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},R,a?f("div",{class:`${r}-base-selection__border`}):null,a?f("div",{class:`${r}-base-selection__state-border`}):null)}});function je(e){return e.type==="group"}function $t(e){return e.type==="ignored"}function rt(e,n){try{return!!(1+n.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function Po(e,n){return{getIsGroup:je,getIgnored:$t,getKey(o){return je(o)?o.name||o.key||"key-required":o[e]},getChildren(o){return o[n]}}}function Mo(e,n,t,o){if(!n)return e;function l(s){if(!Array.isArray(s))return[];const a=[];for(const r of s)if(je(r)){const b=l(r[o]);b.length&&a.push(Object.assign({},r,{[o]:b}))}else{if($t(r))continue;n(t,r)&&a.push(r)}return a}return l(e)}function zo(e,n,t){const o=new Map;return e.forEach(l=>{je(l)?l[t].forEach(s=>{o.set(s[n],s)}):o.set(l[n],l)}),o}const Io=ie([D("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),D("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[It({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),Bo=Object.assign(Object.assign({},be.props),{to:dt.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),No=ue({name:"Select",props:Bo,setup(e){const{mergedClsPrefixRef:n,mergedBorderedRef:t,namespaceRef:o,inlineThemeDisabled:l}=Bt(e),s=be("Select","-select",Io,Nn,e,n),a=z(e.defaultValue),r=oe(e,"value"),b=mt(r,a),h=z(!1),y=z(""),p=W(()=>{const{valueField:i,childrenField:v}=e,M=Po(i,v);return yo(x.value,M)}),F=W(()=>zo(E.value,e.valueField,e.childrenField)),S=z(!1),d=mt(oe(e,"show"),S),R=z(null),I=z(null),T=z(null),{localeRef:O}=Rn("Select"),$=W(()=>{var i;return(i=e.placeholder)!==null&&i!==void 0?i:O.value.placeholder}),w=Fn(e,["items","options"]),C=[],P=z([]),V=z([]),G=z(new Map),Z=W(()=>{const{fallbackOption:i}=e;if(i===void 0){const{labelField:v,valueField:M}=e;return K=>({[v]:String(K),[M]:K})}return i===!1?!1:v=>Object.assign(i(v),{value:v})}),E=W(()=>V.value.concat(P.value).concat(w.value)),g=W(()=>{const{filter:i}=e;if(i)return i;const{labelField:v,valueField:M}=e;return(K,_)=>{if(!_)return!1;const N=_[v];if(typeof N=="string")return rt(K,N);const A=_[M];return typeof A=="string"?rt(K,A):typeof A=="number"?rt(K,String(A)):!1}}),x=W(()=>{if(e.remote)return w.value;{const{value:i}=E,{value:v}=y;return!v.length||!e.filterable?i:Mo(i,g.value,v,e.childrenField)}});function B(i){const v=e.remote,{value:M}=G,{value:K}=F,{value:_}=Z,N=[];return i.forEach(A=>{if(K.has(A))N.push(K.get(A));else if(v&&M.has(A))N.push(M.get(A));else if(_){const ne=_(A);ne&&N.push(ne)}}),N}const q=W(()=>{if(e.multiple){const{value:i}=b;return Array.isArray(i)?B(i):[]}return null}),Y=W(()=>{const{value:i}=b;return!e.multiple&&!Array.isArray(i)?i===null?null:B([i])[0]||null:null}),U=Pn(e),{mergedSizeRef:L,mergedDisabledRef:X,mergedStatusRef:c}=U;function m(i,v){const{onChange:M,"onUpdate:value":K,onUpdateValue:_}=e,{nTriggerFormChange:N,nTriggerFormInput:A}=U;M&&ce(M,i,v),_&&ce(_,i,v),K&&ce(K,i,v),a.value=i,N(),A()}function j(i){const{onBlur:v}=e,{nTriggerFormBlur:M}=U;v&&ce(v,i),M()}function te(){const{onClear:i}=e;i&&ce(i)}function re(i){const{onFocus:v,showOnFocus:M}=e,{nTriggerFormFocus:K}=U;v&&ce(v,i),K(),M&&se()}function pe(i){const{onSearch:v}=e;v&&ce(v,i)}function me(i){const{onScroll:v}=e;v&&ce(v,i)}function he(){var i;const{remote:v,multiple:M}=e;if(v){const{value:K}=G;if(M){const{valueField:_}=e;(i=q.value)===null||i===void 0||i.forEach(N=>{K.set(N[_],N)})}else{const _=Y.value;_&&K.set(_[e.valueField],_)}}}function fe(i){const{onUpdateShow:v,"onUpdate:show":M}=e;v&&ce(v,i),M&&ce(M,i),S.value=i}function se(){X.value||(fe(!0),S.value=!0,e.filterable&&Ae())}function le(){fe(!1)}function ve(){y.value="",V.value=C}const de=z(!1);function Re(){e.filterable&&(de.value=!0)}function ye(){e.filterable&&(de.value=!1,d.value||ve())}function we(){X.value||(d.value?e.filterable?Ae():le():se())}function Fe(i){var v,M;!((M=(v=T.value)===null||v===void 0?void 0:v.selfRef)===null||M===void 0)&&M.contains(i.relatedTarget)||(h.value=!1,j(i),le())}function Pe(i){re(i),h.value=!0}function Me(i){h.value=!0}function ke(i){var v;!((v=R.value)===null||v===void 0)&&v.$el.contains(i.relatedTarget)||(h.value=!1,j(i),le())}function Se(){var i;(i=R.value)===null||i===void 0||i.focus(),le()}function ae(i){var v;d.value&&(!((v=R.value)===null||v===void 0)&&v.$el.contains($n(i))||le())}function u(i){if(!Array.isArray(i))return[];if(Z.value)return Array.from(i);{const{remote:v}=e,{value:M}=F;if(v){const{value:K}=G;return i.filter(_=>M.has(_)||K.has(_))}else return i.filter(K=>M.has(K))}}function k(i){J(i.rawNode)}function J(i){if(X.value)return;const{tag:v,remote:M,clearFilterAfterSelect:K,valueField:_}=e;if(v&&!M){const{value:N}=V,A=N[0]||null;if(A){const ne=P.value;ne.length?ne.push(A):P.value=[A],V.value=C}}if(M&&G.value.set(i[_],i),e.multiple){const N=u(b.value),A=N.findIndex(ne=>ne===i[_]);if(~A){if(N.splice(A,1),v&&!M){const ne=Ie(i[_]);~ne&&(P.value.splice(ne,1),K&&(y.value=""))}}else N.push(i[_]),K&&(y.value="");m(N,B(N))}else{if(v&&!M){const N=Ie(i[_]);~N?P.value=[P.value[N]]:P.value=C}_e(),le(),m(i[_],i)}}function Ie(i){return P.value.findIndex(M=>M[e.valueField]===i)}function Ge(i){d.value||se();const{value:v}=i.target;y.value=v;const{tag:M,remote:K}=e;if(pe(v),M&&!K){if(!v){V.value=C;return}const{onCreate:_}=e,N=_?_(v):{[e.labelField]:v,[e.valueField]:v},{valueField:A}=e;w.value.some(ne=>ne[A]===N[A])||P.value.some(ne=>ne[A]===N[A])?V.value=C:V.value=[N]}}function Ue(i){i.stopPropagation();const{multiple:v}=e;!v&&e.filterable&&le(),te(),v?m([],[]):m(null,null)}function qe(i){!Ve(i,"action")&&!Ve(i,"empty")&&i.preventDefault()}function Ye(i){me(i)}function Be(i){var v,M,K,_,N;switch(i.key){case" ":if(e.filterable)break;i.preventDefault();case"Enter":if(!(!((v=R.value)===null||v===void 0)&&v.isComposing)){if(d.value){const A=(M=T.value)===null||M===void 0?void 0:M.getPendingTmNode();A?k(A):e.filterable||(le(),_e())}else if(se(),e.tag&&de.value){const A=V.value[0];if(A){const ne=A[e.valueField],{value:$e}=b;e.multiple&&Array.isArray($e)&&$e.some(Je=>Je===ne)||J(A)}}}i.preventDefault();break;case"ArrowUp":if(i.preventDefault(),e.loading)return;d.value&&((K=T.value)===null||K===void 0||K.prev());break;case"ArrowDown":if(i.preventDefault(),e.loading)return;d.value?(_=T.value)===null||_===void 0||_.next():se();break;case"Escape":d.value&&(En(i),le()),(N=R.value)===null||N===void 0||N.focus();break}}function _e(){var i;(i=R.value)===null||i===void 0||i.focus()}function Ae(){var i;(i=R.value)===null||i===void 0||i.focusInput()}function Xe(){var i;d.value&&((i=I.value)===null||i===void 0||i.syncPosition())}he(),Oe(oe(e,"options"),he);const Ze={focus:()=>{var i;(i=R.value)===null||i===void 0||i.focus()},blur:()=>{var i;(i=R.value)===null||i===void 0||i.blur()}},Ne=W(()=>{const{self:{menuBoxShadow:i}}=s.value;return{"--n-menu-box-shadow":i}}),ge=l?He("select",void 0,Ne,e):void 0;return Object.assign(Object.assign({},Ze),{mergedStatus:c,mergedClsPrefix:n,mergedBordered:t,namespace:o,treeMate:p,isMounted:Mn(),triggerRef:R,menuRef:T,pattern:y,uncontrolledShow:S,mergedShow:d,adjustedTo:dt(e),uncontrolledValue:a,mergedValue:b,followerRef:I,localizedPlaceholder:$,selectedOption:Y,selectedOptions:q,mergedSize:L,mergedDisabled:X,focused:h,activeWithoutMenuOpen:de,inlineThemeDisabled:l,onTriggerInputFocus:Re,onTriggerInputBlur:ye,handleTriggerOrMenuResize:Xe,handleMenuFocus:Me,handleMenuBlur:ke,handleMenuTabOut:Se,handleTriggerClick:we,handleToggle:k,handleDeleteOption:J,handlePatternInput:Ge,handleClear:Ue,handleTriggerBlur:Fe,handleTriggerFocus:Pe,handleKeydown:Be,handleMenuAfterLeave:ve,handleMenuClickOutside:ae,handleMenuScroll:Ye,handleMenuKeydown:Be,handleMenuMousedown:qe,mergedTheme:s,cssVars:l?void 0:Ne,themeClass:ge==null?void 0:ge.themeClass,onRender:ge==null?void 0:ge.onRender})},render(){return f("div",{class:`${this.mergedClsPrefix}-select`},f(zn,null,{default:()=>[f(In,null,{default:()=>f(Fo,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,n;return[(n=(e=this.$slots).arrow)===null||n===void 0?void 0:n.call(e)]}})}),f(Bn,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===dt.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>f(zt,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,n,t;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),_n(f(Co,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(n=this.menuProps)===null||n===void 0?void 0:n.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(t=this.menuProps)===null||t===void 0?void 0:t.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var o,l;return[(l=(o=this.$slots).empty)===null||l===void 0?void 0:l.call(o)]},action:()=>{var o,l;return[(l=(o=this.$slots).action)===null||l===void 0?void 0:l.call(o)]}}),this.displayDirective==="show"?[[An,this.mergedShow],[yt,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[yt,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{Co as N,jn as V,Po as a,No as b,yo as c,Ve as h,et as m,Oo as t};
