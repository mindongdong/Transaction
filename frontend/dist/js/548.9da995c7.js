"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[548],{9548:function(o,e,t){t.r(e),t.d(e,{default:function(){return V}});var i=t(3396),l=t(9242);const n={class:"board-register-form"},r=(0,i._)("div",{class:"form-title"},[(0,i._)("h1",null,"구매 등록")],-1),s={class:"form-section"},a=(0,i._)("label",{for:"title"},"글 제목",-1),c={class:"form-section"},u=(0,i._)("label",null,"카테고리",-1),p=(0,i.uE)('<option value="">서버를 선택하세요</option><option value="luna">루나</option><option value="scania">스카니아</option><option value="elysium">엘리시움</option><option value="croa">크로아</option><option value="aurora">오로라</option><option value="red">레드</option><option value="enosys">이노시스</option>',8),d=[p],m={class:"form-section"},f=(0,i._)("label",{for:"price"},"판매가격",-1),_={class:"form-section"},b=(0,i._)("label",{for:"description"},"내용",-1),v=(0,i._)("div",{class:"form-section last-section"},[(0,i._)("label",{for:"screenshot"},"스크린샷"),(0,i._)("input",{type:"file",id:"screenshot"})],-1),y={class:"form-buttons"},h={class:"form-submit"};function w(o,e,t,p,w,k){const g=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",n,[r,(0,i._)("div",s,[a,(0,i.wy)((0,i._)("input",{type:"text",id:"title","onUpdate:modelValue":e[0]||(e[0]=o=>w.form.title=o),placeholder:"글 제목을 입력하세요"},null,512),[[l.nr,w.form.title]])]),(0,i._)("div",c,[u,(0,i.wy)((0,i._)("select",{"onUpdate:modelValue":e[1]||(e[1]=o=>w.form.category=o)},d,512),[[l.bM,w.form.category]])]),(0,i._)("div",m,[f,(0,i.wy)((0,i._)("input",{type:"number",id:"price",min:"0",step:"1000","onUpdate:modelValue":e[2]||(e[2]=o=>w.form.price=o),placeholder:"가격을 입력하세요"},null,512),[[l.nr,w.form.price]])]),(0,i._)("div",_,[b,(0,i.wy)((0,i._)("textarea",{id:"description","onUpdate:modelValue":e[3]||(e[3]=o=>w.form.description=o),rows:"4",placeholder:"내용을 입력하세요"},null,512),[[l.nr,w.form.description]])]),v,(0,i._)("div",y,[(0,i._)("button",{class:"form-submit",type:"submit",onClick:e[4]||(e[4]=(...o)=>k.submitForm&&k.submitForm(...o))}," 글 등록하기 "),(0,i._)("button",h,[(0,i.Wm)(g,{to:"/",class:"link"},{default:(0,i.w5)((()=>[(0,i.Uk)("취소하기")])),_:1})])])])}var k={data(){return{form:{title:"",category:"",tradeType:"sell",price:null,description:""}}},methods:{submitForm(){console.log(this.form)}}},g=t(89);const U=(0,g.Z)(k,[["render",w]]);var V=U}}]);
//# sourceMappingURL=548.9da995c7.js.map