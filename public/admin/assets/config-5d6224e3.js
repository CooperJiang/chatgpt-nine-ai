
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{Z as o}from"./index-be23d7e6.js";const s={queryAllConfig:()=>o.get("config/queryAll"),queryGptKeys:()=>o.get("config/queryGptKeys"),setGptKeys:e=>o.post("config/setGptKeys",e),queryConfig:e=>o.post("config/query",e),setConfig:e=>o.post("config/set",e)};export{s as a};
