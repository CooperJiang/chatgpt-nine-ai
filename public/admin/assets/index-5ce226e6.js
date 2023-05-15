
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as g,y as S,A as b,o as t,I as d,f as u,b as s,c as n,e as m,a as p,N as f,R as y,J as c,T as C,h as M,G as x,t as B,_ as N,n as w}from"./index-be23d7e6.js";import T from"./index-2626cdf7.js";import{u as V}from"./useMenu-5076e294.js";const I={key:0,class:"main-sidebar-container"},L={class:"nav"},$=["title","onClick"],z=g({name:"MainSidebar"}),A=g({...z,setup(D){const a=S(),i=b(),{switchTo:v}=V();return(E,F)=>{const h=N,k=M("el-icon");return t(),d(C,{name:"main-sidebar"},{default:u(()=>[s(a).settings.menu.menuMode==="side"||s(a).mode==="mobile"&&s(a).settings.menu.menuMode!=="single"?(t(),n("div",I,[m(T,{"show-title":!1,class:"sidebar-logo"}),p("div",L,[(t(!0),n(f,null,y(s(i).allMenus,(e,o)=>{var l,r,_;return t(),n(f,null,[e.children&&e.children.length!==0?(t(),n("div",{key:o,class:x(["item",{active:o===s(i).actived}]),title:((l=e.meta)==null?void 0:l.title)??"[ 无标题 ]",onClick:G=>s(v)(o)},[(r=e.meta)!=null&&r.icon?(t(),d(k,{key:0},{default:u(()=>[m(h,{name:e.meta.icon},null,8,["name"])]),_:2},1024)):c("",!0),p("span",null,B(((_=e.meta)==null?void 0:_.title)??"[ 无标题 ]"),1)],10,$)):c("",!0)],64)}),256))])])):c("",!0)]),_:1})}}});const q=w(A,[["__scopeId","data-v-27edc889"]]);export{q as default};
