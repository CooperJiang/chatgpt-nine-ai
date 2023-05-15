
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as i,y as m,r as c,B as g,o,I as p,f,c as l,b as e,J as r,t as h,G as k,h as y,n as x}from"./index-be23d7e6.js";const B="/admin/assets/logo-a7a87197.png",b=["src"],w={key:1},C=i({name:"Logo"}),L=i({...C,props:{showLogo:{type:Boolean,default:!0},showTitle:{type:Boolean,default:!0}},setup(s){const n=m(),a=c("Nine-AI"),_=c(B),u=g(()=>{const t={};return n.settings.home.enable&&(t.name="home"),t});return(t,v)=>{const d=y("router-link");return o(),p(d,{to:e(u),class:k(["title",{"is-link":e(n).settings.home.enable}]),title:e(a)},{default:f(()=>[s.showLogo?(o(),l("img",{key:0,src:e(_),class:"logo"},null,8,b)):r("",!0),s.showTitle?(o(),l("span",w,h(e(a)),1)):r("",!0)]),_:1},8,["to","class","title"])}}});const I=x(L,[["__scopeId","data-v-3c2d5fb6"]]);export{I as default};
