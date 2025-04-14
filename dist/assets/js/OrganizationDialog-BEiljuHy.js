import{z as i,d as L,i as c,j as w,r,g as _,o as n,w as u,a as s,b as p,c as y,F as b,f as V,e as B,y as x}from"./index-ICckUsEc.js";import{a as C}from"./user-Bf4eujp4.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";const K=l=>i.post("/getProjectList/",l),Q=l=>i.post("/project/add/",l),R=l=>i.post("/project/edit/",l),W=l=>i.post("/project/delete/",l),E=()=>i.get("/project/tag/"),M={class:"dialog-main"},N={class:"dialog_div"},S={class:"dialog_div"},$={class:"dialog_div"},F={style:{display:"flex","justify-content":"center","margin-top":"10px"}},I=L({name:"OrganizationDialog"}),A=L({...I,setup(l,{expose:P}){const m=c([]),v=async()=>{try{const{data:a}=await E();m.value=a}catch(a){console.error("获取项目类型失败:",a)}};w(()=>{v()});const g=c([]),k=async()=>{try{const{data:a}=await C();g.value=a.list}catch(a){console.error("获取用户列表失败:",a),x.error("获取用户列表失败")}};w(()=>{v(),k()});const d=c(!1),o=c({title:"",row:{}}),O=a=>{o.value=a,d.value=!0},U=async()=>{try{if(!o.value.api)throw new Error("API method is not defined.");await o.value.api(o.value.row),x.success({message:`${o.value.title}单位成功！`}),await o.value.getTableList(),d.value=!1}catch(a){console.error(a)}};return P({acceptParams:O}),(a,e)=>{const h=r("el-input"),f=r("el-option"),j=r("el-select"),z=r("el-button"),T=r("el-dialog");return n(),_(T,{center:"",title:`${o.value.title}单位`,modelValue:d.value,"onUpdate:modelValue":e[3]||(e[3]=t=>d.value=t),width:"50%"},{default:u(()=>[s("main",M,[s("div",N,[e[4]||(e[4]=s("span",{class:"inside_span"},"单位名称",-1)),p(h,{modelValue:o.value.row.project_name,"onUpdate:modelValue":e[0]||(e[0]=t=>o.value.row.project_name=t),placeholder:"请输入内容",style:{width:"calc(100% - 100px)"}},null,8,["modelValue"])]),s("div",S,[e[5]||(e[5]=s("span",{class:"inside_span"},"项目类型",-1)),p(j,{modelValue:o.value.row.project_tag,"onUpdate:modelValue":e[1]||(e[1]=t=>o.value.row.project_tag=t),filterable:"","allow-create":"","default-first-option":"",placeholder:"请选择或输入项目类型",style:{width:"calc(100% - 100px)"}},{default:u(()=>[(n(!0),y(b,null,V(m.value,t=>(n(),_(f,{key:t.id,label:t.name,value:t.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),s("div",$,[e[6]||(e[6]=s("span",{class:"inside_span"},"所属人员",-1)),p(j,{modelValue:o.value.row.project_user,"onUpdate:modelValue":e[2]||(e[2]=t=>o.value.row.project_user=t),filterable:"",placeholder:"请选择所属人员",style:{width:"calc(100% - 100px)"}},{default:u(()=>[(n(!0),y(b,null,V(g.value,t=>(n(),_(f,{key:t.id,label:t.username,value:t.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),s("div",F,[p(z,{type:"primary",onClick:U},{default:u(()=>e[7]||(e[7]=[B("保存")])),_:1})])])]),_:1},8,["title","modelValue"])}}}),q=D(A,[["__scopeId","data-v-7246d221"]]),X=Object.freeze(Object.defineProperty({__proto__:null,default:q},Symbol.toStringTag,{value:"Module"}));export{q as O,Q as a,X as b,W as d,R as e,K as g};
