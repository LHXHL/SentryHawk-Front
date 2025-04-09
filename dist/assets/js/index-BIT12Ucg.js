import{u as m}from"./useHandleData-X0P66sxs.js";import{_ as h}from"./index.vue_vue_type_script_setup_true_name_ProTable_lang-DCAO8Awy.js";import{_ as x}from"./ScanDialog.vue_vue_type_style_index_0_lang-CeE96tnm.js";import{z as u,d as w,i as b,m as T,r as $,c as L,o as N,a as D,b as o,w as i,u as c,v as q,e as d,n as B,p as g,q as V}from"./index-DJShjt1M.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./sortable.esm-C83syoBY.js";import"./assets-PgFR1Ftv.js";const A=a=>u.post("/getScanList/",a),H=a=>u.post("/scan/add/",a),R=a=>u.post("/scan/edit/",a),v=a=>u.post("/scan/delete/",a),j=a=>u.post("/startScan/",a),z={class:"main-box"},E={class:"table-box"},F=w({name:"useTreeFilter"}),Q=w({...F,setup(a){const r=b(),p=[{status:!0,msg:"启用"},{status:!1,msg:"禁用"}],k=T([{type:"selection",width:50},{prop:"scan_name",label:"扫描模板名称",width:282,search:{el:"input"}},{prop:"scan_schedule",label:"扫描进度",width:170},{prop:"asset_scan_if",enum:p,tag:!0,label:"是否开启资产收集",width:170,fieldNames:{label:"msg",value:"status"}},{prop:"info_scan_if",enum:p,tag:!0,label:"是否开启信息收集",width:170,fieldNames:{label:"msg",value:"status"}},{prop:"vuln_scan_if",enum:p,tag:!0,label:"是否开启漏洞扫描",width:170,fieldNames:{label:"msg",value:"status"}},{prop:"project_id",label:"所属项目",width:160,search:{el:"input"}},{prop:"scan_start_time",label:"扫描开始时间",width:170},{prop:"scan_end_time",label:"扫描结束时间",width:170},{prop:"operation",label:"操作",width:210,fixed:"right"}]),y=async t=>{var e;await m(v,{id:[t.id]},`删除【${t.scan_name}】`),(e=r.value)==null||e.getTableList()},C=async t=>{var e;await m(j,{id:t.id},`使用【${t.scan_name}】开始扫描`),(e=r.value)==null||e.getTableList()},S=async t=>{var e,s;await m(v,{id:t},"删除所选模板"),(e=r.value)==null||e.clearSelection(),(s=r.value)==null||s.getTableList()},_=b(null),f=(t,e={})=>{var n,l;const s={title:t,row:{...e},api:t==="新建"?H:t==="编辑"?R:void 0,getTableList:(n=r.value)==null?void 0:n.getTableList};(l=_.value)==null||l.acceptParams(s)};return(t,e)=>{const s=$("el-button");return N(),L("div",z,[D("div",E,[o(h,{ref_key:"proTable",ref:r,columns:k,"request-api":c(A),"search-col":{xs:1,sm:1,md:2,lg:3,xl:3}},{tableHeader:i(n=>[o(s,{type:"primary",icon:c(V),onClick:e[0]||(e[0]=l=>f("新建"))},{default:i(()=>e[1]||(e[1]=[d("新建扫描模板")])),_:1},8,["icon"]),o(s,{type:"danger",icon:c(g),disabled:!n.isSelected,onClick:l=>S(n.selectedListIds)},{default:i(()=>e[2]||(e[2]=[d(" 批量删除扫描模板 ")])),_:2},1032,["icon","disabled","onClick"])]),operation:i(n=>[o(s,{type:"primary",link:"",icon:c(q),onClick:l=>C(n.row)},{default:i(()=>e[3]||(e[3]=[d("开始扫描")])),_:2},1032,["icon","onClick"]),o(s,{type:"primary",link:"",icon:c(B),onClick:l=>f("编辑",n.row)},{default:i(()=>e[4]||(e[4]=[d("编辑")])),_:2},1032,["icon","onClick"]),o(s,{type:"primary",link:"",icon:c(g),onClick:l=>y(n.row)},{default:i(()=>e[5]||(e[5]=[d("删除")])),_:2},1032,["icon","onClick"])]),_:1},8,["columns","request-api"]),o(x,{ref_key:"DialogRef",ref:_},null,512)])])}}});export{Q as default};
