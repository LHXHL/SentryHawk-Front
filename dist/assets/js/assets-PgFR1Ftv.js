import{z as s}from"./index-DJShjt1M.js";const n=t=>s.post("/getAssetlist/",t),o=t=>s.post("/asset/add/",t),a=t=>s.post("/asset/BatchAdd/",t),r=t=>s.post("/asset/edit/",t),i=t=>s.post("/asset/delete/",t),c=t=>s.download("/asset/downloadAssetInfo/",t),d=t=>s.download("/getAssetAddDemo/",t),g=()=>s.get("/asset/type/"),u=()=>s.get("/getAssetOrganization/",{},{cancel:!1}),A=()=>s.get("/asset/project/",{},{cancel:!1}),l=t=>s.get("/asset/detail/",t),p=t=>s.post("/sensitive_dir/list/",t),f=t=>s.post("/sensitive_info/list/",t),m=()=>s.get("/asset/count/"),v=()=>s.get("/asset/counts/");export{a as B,p as a,f as b,u as c,n as d,i as e,d as f,l as g,o as h,r as i,c as j,g as k,A as l,m,v as n};
