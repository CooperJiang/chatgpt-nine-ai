
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{Z as e}from"./index-be23d7e6.js";const a={queryKeyList:t=>e.get("chatgpt/keyList",{params:t}),queryKeyModelList:t=>e.get("chatgpt/keyModelList",{params:t}),queryKeyDetail:t=>e.get("chatgpt/keyDetail",{params:t}),addGptKey:t=>e.post("chatgpt/addKey",t),updateGptKey:t=>e.post("chatgpt/updateKey",t),addWhiteUser:t=>e.post("chatgpt/addWhiteUser",t),updateWhiteUser:t=>e.post("chatgpt/updateWhiteUser",t),queryWhiteUserList:t=>e.get("chatgpt/userWhiteList",{params:t})};export{a as A};
