import{E as c,y as o}from"./index-DJShjt1M.js";const l=(t,s={},e,a="warning")=>new Promise((r,n)=>{c.confirm(`是否${e}?`,"温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:a,draggable:!0}).then(async()=>{if(!await t(s))return n(!1);o({type:"success",message:`${e}成功!`}),r(!0)}).catch(()=>{})});export{l as u};
