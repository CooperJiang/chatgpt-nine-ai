
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as v,y as S,A as M,r as B,o as e,I as f,f as p,b as s,c as o,a as n,e as i,l as T,N as h,R as x,J as a,T as N,h as w,G as R,t as V,_ as H,n as I}from"./index-be23d7e6.js";import L from"./index-2626cdf7.js";import{T as W}from"./index-bc16b80e.js";import{u as $}from"./useMenu-5076e294.js";import"./index-0d28c1a7.js";const b={key:0},z={class:"header-container"},A={class:"main"},D=["onWheel"],E=["onClick"],F={key:1},G=v({name:"Header"}),J=v({...G,setup(Y){const l=S(),_=M(),{switchTo:k}=$(),d=B();function y(r){d.value.scrollBy({left:(r.deltaY||r.detail)>0?50:-50})}return(r,j)=>{const g=H,C=w("el-icon");return e(),f(N,{name:"header"},{default:p(()=>[s(l).mode==="pc"&&s(l).settings.menu.menuMode==="head"?(e(),o("header",b,[n("div",z,[n("div",A,[i(L),n("div",{ref_key:"navRef",ref:d,class:"nav",onWheel:T(y,["prevent"])},[(e(!0),o(h,null,x(s(_).allMenus,(t,c)=>{var u,m;return e(),o(h,{key:c},[t.children&&t.children.length!==0?(e(),o("div",{key:0,class:R(["item-container",{active:c===s(_).actived}])},[n("div",{class:"item",onClick:q=>s(k)(c)},[(u=t.meta)!=null&&u.icon?(e(),f(C,{key:0},{default:p(()=>[i(g,{name:t.meta.icon},null,8,["name"])]),_:2},1024)):a("",!0),(m=t.meta)!=null&&m.title?(e(),o("span",F,V(t.meta.title),1)):a("",!0)],8,E)],2)):a("",!0)],64)}),128))],40,D)]),i(W)])])):a("",!0)]),_:1})}}});const X=I(J,[["__scopeId","data-v-381f1d85"]]);export{X as default};
