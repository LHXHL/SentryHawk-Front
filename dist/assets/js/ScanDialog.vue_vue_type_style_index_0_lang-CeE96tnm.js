import{l as S}from"./assets-PgFR1Ftv.js";import{d as V,j as E,i as m,r as t,g as w,o as r,w as v,a,c as d,k as f,b as s,F as C,f as T,u as j,e as B,y as D}from"./index-DJShjt1M.js";const H={class:"dialog-main"},N={class:"dialog-row"},P={class:"dialog-row"},W={class:"dialog-row"},q={key:0,class:"switch-row"},A={class:"dialog-row"},J={key:1,class:"switch-row"},L={class:"dialog-row"},I={key:2,class:"switch-row"},M=V({name:"ScanDialog"}),G=V({...M,setup(O,{expose:c}){let p=[];const _=async()=>{try{const{data:i}=await S();p=i}catch{}};E(()=>{_()});const u=m(!1),e=m({title:"",row:{}}),g=i=>{e.value=i,u.value=!0},U=async()=>{try{if(!e.value.api)throw new Error("API method is not defined.");await e.value.api(e.value.row),D.success({message:`${e.value.title}扫描模板成功！`}),await e.value.getTableList(),u.value=!1}catch(i){console.error(i)}};return c({acceptParams:g}),(i,l)=>{const y=t("el-input"),k=t("el-option"),x=t("el-select"),n=t("el-switch"),b=t("el-button"),F=t("el-dialog");return r(),w(F,{center:"",title:`${e.value.title}扫描模板`,modelValue:u.value,"onUpdate:modelValue":l[20]||(l[20]=o=>u.value=o),width:"50%",class:"dialog-all"},{default:v(()=>[a("main",H,[a("div",N,[l[21]||(l[21]=a("span",{class:"inside_span"},"  模板名称:  ",-1)),s(y,{modelValue:e.value.row.scan_name,"onUpdate:modelValue":l[0]||(l[0]=o=>e.value.row.scan_name=o),placeholder:"请输入内容",style:{width:"400px"}},null,8,["modelValue"])]),a("div",P,[l[22]||(l[22]=a("span",{class:"inside_span"},"所属项目:  ",-1)),s(x,{modelValue:e.value.row.project_id,"onUpdate:modelValue":l[1]||(l[1]=o=>e.value.row.project_id=o),placeholder:"Select",filterable:"",style:{width:"400px"}},{default:v(()=>[(r(!0),d(C,null,T(j(p),o=>(r(),w(k,{key:o.id,label:o.name,value:o.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),l[42]||(l[42]=a("span",{class:"divider"},"---------------------------资产收集---------------------------",-1)),a("div",W,[l[23]||(l[23]=a("span",{class:"inside_span"},"是否开启资产收集",-1)),s(n,{modelValue:e.value.row.asset_scan_if,"onUpdate:modelValue":l[2]||(l[2]=o=>e.value.row.asset_scan_if=o),"active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue"])]),e.value.row.asset_scan_if?(r(),d("div",q,[l[24]||(l[24]=a("span",{class:"inside_span"},"fofa 收集",-1)),s(n,{modelValue:e.value.row.fofa_if,"onUpdate:modelValue":l[3]||(l[3]=o=>e.value.row.fofa_if=o),"active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue"]),l[25]||(l[25]=a("span",{class:"inside_span"},"hunter 收集",-1)),s(n,{modelValue:e.value.row.hunter_if,"onUpdate:modelValue":l[4]||(l[4]=o=>e.value.row.hunter_if=o),"active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue"]),l[26]||(l[26]=a("span",{class:"inside_span"},"quake 收集",-1)),s(n,{modelValue:e.value.row.quake_if,"onUpdate:modelValue":l[5]||(l[5]=o=>e.value.row.quake_if=o),"active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue"])])):f("",!0),l[43]||(l[43]=a("span",{class:"divider"},"---------------------------信息收集---------------------------",-1)),a("div",A,[l[27]||(l[27]=a("span",{class:"inside_span"},"是否开启信息收集",-1)),s(n,{modelValue:e.value.row.info_scan_if,"onUpdate:modelValue":l[6]||(l[6]=o=>e.value.row.info_scan_if=o),"active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue"])]),e.value.row.info_scan_if?(r(),d("div",J,[l[28]||(l[28]=a("span",{class:"inside_span"},"crt.sh子域名收集",-1)),s(n,{modelValue:e.value.row.crt_sh_scan_if,"onUpdate:modelValue":l[7]||(l[7]=o=>e.value.row.crt_sh_scan_if=o),"active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue"]),l[29]||(l[29]=a("span",{class:"inside_span"},"rustscan端口扫描",-1)),s(n,{modelValue:e.value.row.port_scan_if,"onUpdate:modelValue":l[8]||(l[8]=o=>e.value.row.port_scan_if=o),"active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue"]),l[30]||(l[30]=a("span",{class:"inside_span"},"EHole指纹识别",-1)),s(n,{modelValue:e.value.row.EHole_scan_if,"onUpdate:modelValue":l[9]||(l[9]=o=>e.value.row.EHole_scan_if=o),"active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue"]),l[31]||(l[31]=a("span",{class:"inside_span"},"TideFinger指纹识别",-1)),s(n,{modelValue:e.value.row.TideFinger_scan_if,"onUpdate:modelValue":l[10]||(l[10]=o=>e.value.row.TideFinger_scan_if=o),"active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue"]),l[32]||(l[32]=a("span",{class:"inside_span"},"WIH探测",-1)),s(n,{modelValue:e.value.row.Wih_scan_if,"onUpdate:modelValue":l[11]||(l[11]=o=>e.value.row.Wih_scan_if=o),"active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue"]),l[33]||(l[33]=a("span",{class:"inside_span"},"JSfinder扫描",-1)),s(n,{modelValue:e.value.row.JSFinder_scan_if,"onUpdate:modelValue":l[12]||(l[12]=o=>e.value.row.JSFinder_scan_if=o),"active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue"]),l[34]||(l[34]=a("span",{class:"inside_span"},"Dirsearch",-1)),s(n,{modelValue:e.value.row.Dirsearch_scan_if,"onUpdate:modelValue":l[13]||(l[13]=o=>e.value.row.Dirsearch_scan_if=o),"active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue"]),l[35]||(l[35]=a("span",{class:"inside_span"},"oneforall子域名收集",-1)),s(n,{modelValue:e.value.row.Oneforall_scan_if,"onUpdate:modelValue":l[14]||(l[14]=o=>e.value.row.Oneforall_scan_if=o),"active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue"])])):f("",!0),l[44]||(l[44]=a("span",{class:"divider"},"---------------------------漏洞扫描---------------------------",-1)),a("div",L,[l[36]||(l[36]=a("span",{class:"inside_span"},"是否开启漏洞扫描",-1)),s(n,{modelValue:e.value.row.vuln_scan_if,"onUpdate:modelValue":l[15]||(l[15]=o=>e.value.row.vuln_scan_if=o),"active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue"])]),e.value.row.vuln_scan_if?(r(),d("div",I,[l[37]||(l[37]=a("span",{class:"inside_span"},"xray扫描",-1)),s(n,{modelValue:e.value.row.xray_scan_if,"onUpdate:modelValue":l[16]||(l[16]=o=>e.value.row.xray_scan_if=o),"active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue"]),l[38]||(l[38]=a("span",{class:"inside_span"},"nuclei扫描",-1)),s(n,{modelValue:e.value.row.nuclei_scan_if,"onUpdate:modelValue":l[17]||(l[17]=o=>e.value.row.nuclei_scan_if=o),"active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue"]),l[39]||(l[39]=a("span",{class:"inside_span"},"afrog扫描",-1)),s(n,{modelValue:e.value.row.afrog_scan_if,"onUpdate:modelValue":l[18]||(l[18]=o=>e.value.row.afrog_scan_if=o),"active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue"]),l[40]||(l[40]=a("span",{class:"inside_span"},"AWVS扫描",-1)),s(n,{modelValue:e.value.row.awvs_scan_if,"onUpdate:modelValue":l[19]||(l[19]=o=>e.value.row.awvs_scan_if=o),"active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue"])])):f("",!0),a("div",null,[s(b,{type:"primary",onClick:U,style:{"margin-top":"20px",width:"400px"}},{default:v(()=>l[41]||(l[41]=[B("保存")])),_:1})])])]),_:1},8,["title","modelValue"])}}});export{G as _};
