import{d as x,m as V,n as h,o as u,c as p,a as e,w as l,k as y,q as k,s as E,j as q,h as B,v as L,x as U,y as z,b as s,F as C,r as R,f as S,t as v,p as T,g as M,_ as N}from"./index-DigC4U8C.js";/* empty css               */const $="/assets/14-BogLOwp5.jpg",D="/assets/15-BLpMjZ7v.jpg",O={style:{height:"524px","padding-right":"20px"}},A=x({__name:"formTable",setup(d){const c=V("default"),_=V(),a=h({name:"",tel:"",project:"",date:"",desc:""}),i=h({name:[{required:!0,message:"请填入您的名字",trigger:"blur"}],tel:[{required:!0,message:"请输入您的电话",trigger:"blur"}],project:[{required:!0,message:"请输入您的医疗项目",trigger:"blur"}],desc:[{required:!0,message:"请输入您的备注信息",trigger:"blur"}],date:[{type:"date",required:!0,message:"请选择预约日期",trigger:"change"}]}),g=async f=>{f&&await f.validate((t,r)=>{t?console.log("提交!"):console.log("error submit!",r)})};return(f,t)=>{const r=k,n=E,b=q,w=B,j=L,F=U,I=z;return u(),p("div",O,[e(I,{ref_key:"ruleFormRef",ref:_,model:a,rules:i,"label-width":"auto",class:"demo-ruleForm",size:c.value,"status-icon":"","label-position":"top"},{default:l(()=>[e(w,{gutter:20},{default:l(()=>[e(b,{span:8},{default:l(()=>[e(n,{label:"您的姓名",prop:"name"},{default:l(()=>[e(r,{modelValue:a.name,"onUpdate:modelValue":t[0]||(t[0]=o=>a.name=o),placeholder:"请输入您的姓名",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(b,{span:8},{default:l(()=>[e(n,{label:"您的电话",prop:"tel"},{default:l(()=>[e(r,{modelValue:a.tel,"onUpdate:modelValue":t[1]||(t[1]=o=>a.tel=o),modelModifiers:{number:!0},placeholder:"请输入您的电话",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(b,{span:8},{default:l(()=>[e(n,{label:"医疗项目",prop:"project"},{default:l(()=>[e(r,{modelValue:a.project,"onUpdate:modelValue":t[2]||(t[2]=o=>a.project=o),placeholder:"请输入医疗项目",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(n,{label:"预约时间",prop:"date"},{default:l(()=>[e(j,{modelValue:a.date,"onUpdate:modelValue":t[3]||(t[3]=o=>a.date=o),type:"date",value:"large",label:"请选择预约时间",placeholder:"请输入预约时间",style:{width:"100%"},clearable:""},null,8,["modelValue"])]),_:1}),e(n,{label:"备注",prop:"desc"},{default:l(()=>[e(r,{modelValue:a.desc,"onUpdate:modelValue":t[4]||(t[4]=o=>a.desc=o),rows:"5",resize:"none",type:"textarea",placeholder:"请输入您的备注",clearable:""},null,8,["modelValue"])]),_:1}),e(n,null,{default:l(()=>[e(F,{onClick:t[5]||(t[5]=o=>g(_.value)),type:"success","auto-insert-space":"true",size:"large",color:"#0479da",style:{width:"236px","margin-top":"30px"}},{default:l(()=>[y(" 马 上 提 交 ")]),_:1})]),_:1})]),_:1},8,["model","rules","size"])])}}}),m=d=>(T("data-v-135daf6f"),d=d(),M(),d),P=m(()=>s("img",{src:$,alt:"",class:"aboutAde"},null,-1)),Z={class:"mainContent"},G={class:"orderTop"},H=m(()=>s("div",{class:"orderLeft animate__animated animate__fadeInLeft"},[s("img",{src:D,alt:""})],-1)),J={class:"orderRight animate__animated animate__fadeInRight"},K=m(()=>s("p",{class:"abTit"},"我们拥有专业医疗技术",-1)),Q=m(()=>s("p",{class:"abOur"},"请您放心预约，专业医生为您提供专业牙科服务",-1)),W={class:"aite"},X=x({__name:"order",setup(d){let c=[{icon:"@",msg:"充足的医疗资源，拥有丰富医疗的设备和专业的医疗团队目"},{icon:"@",msg:"丰富的临床经验，获得50个国际医疗奖项,特色专科"},{icon:"@",msg:"突出以学科齐全、技术力量雄厚、享苦海内外"},{icon:"@",msg:"国家省部级质控中心,培养学科"}];return(_,a)=>(u(),p("div",null,[P,s("div",Z,[s("div",G,[H,s("div",J,[K,Q,(u(!0),p(C,null,R(S(c),(i,g)=>(u(),p("p",{class:"abMsg",key:g},[s("span",W,v(i.icon),1),y(v(i.msg),1)]))),128))])]),e(A,{class:"animate__animated animate__slideInUp"})])]))}}),te=N(X,[["__scopeId","data-v-135daf6f"]]);export{te as default};
