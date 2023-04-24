import{z as y,c as E,r as _,w as Z,a as ee,h as i,Y as te,N as j,X as ae,g as re,ah as ne,ai as le,aj as U,o as ie,ak as oe,B as ue,V as ce,a3 as I,a4 as se,a5 as n,O as de,al as T,a7 as t,W as C,a8 as m,am as D,ab as R,a9 as N,E as fe,an as me,ao as L,ap as he,aa as ge,aq as ve,ar as pe}from"./index.dcb69e76.js";import{u as ye,a as _e,Q as O,b as q,c as g}from"./QList.c76c7cd9.js";import{Q as be}from"./QPage.ddef1799.js";import{_ as V}from"./NativeAds.084f54a8.js";const we={ratio:[String,Number]};function Se(e,a){return y(()=>{const r=Number(e.ratio||(a!==void 0?a.value:void 0));return isNaN(r)!==!0&&r>0?{paddingBottom:`${100/r}%`}:null})}const ke=16/9;var $=E({name:"QImg",props:{...we,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:ke},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:a,emit:r}){const u=_(e.initialRatio),s=Se(e,u);let d;const o=[_(null),_(e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null)],f=_(0),h=_(!1),p=_(!1),c=y(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),w=y(()=>({width:e.width,height:e.height})),S=y(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),b=y(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));Z(()=>k(),H);function k(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function H(l){if(clearTimeout(d),p.value=!1,l===null){h.value=!1,o[0].value=null,o[1].value=null;return}h.value=!0,o[f.value].value=l}function Y({target:l}){d!==null&&(clearTimeout(d),u.value=l.naturalHeight===0?.5:l.naturalWidth/l.naturalHeight,A(l,1))}function A(l,x){d===null||x===1e3||(l.complete===!0?G(l):d=setTimeout(()=>{A(l,x+1)},50))}function G(l){d!==null&&(f.value=f.value===1?0:1,o[f.value].value=null,h.value=!1,p.value=!1,r("load",l.currentSrc||l.src))}function J(l){clearTimeout(d),h.value=!1,p.value=!0,o[0].value=null,o[1].value=null,r("error",l)}function K(l,x){return i("div",{class:"q-img__container absolute-full",key:l},x)}function M(l){const x=o[l].value,P={key:"img_"+l,class:S.value,style:b.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...x};return f.value===l?(P.class+=" q-img__image--waiting",Object.assign(P,{onLoad:Y,onError:J})):P.class+=" q-img__image--loaded",K("img"+l,i("img",P))}function X(){return h.value!==!0?i("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},j(a[p.value===!0?"error":"default"])):i("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},a.loading!==void 0?a.loading():e.noSpinner===!0?void 0:[i(ae,{color:e.spinnerColor,size:e.spinnerSize})])}return H(k()),ee(()=>{clearTimeout(d),d=null}),()=>{const l=[];return s.value!==null&&l.push(i("div",{key:"filler",style:s.value})),p.value!==!0&&(o[0].value!==null&&l.push(M(0)),o[1].value!==null&&l.push(M(1))),l.push(i(te,{name:"q-transition--fade"},X)),i("div",{class:c.value,style:w.value,role:"img","aria-label":e.alt},l)}}}),v=E({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:a}){const r=y(()=>parseInt(e.lines,10)),u=y(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(r.value===1?" ellipsis":"")),s=y(()=>e.lines!==void 0&&r.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":r.value}:null);return()=>i("div",{style:s.value,class:u.value},j(a.default))}}),W=E({name:"QCard",props:{...ye,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:a}){const{proxy:{$q:r}}=re(),u=_e(e,r),s=y(()=>"q-card"+(u.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>i(e.tag,{class:s.value},j(a.default))}});const xe=[i("g",[i("path",{fill:"none",stroke:"currentColor","stroke-width":"5","stroke-miterlimit":"10",d:"M58.4,51.7c-0.9-0.9-1.4-2-1.4-2.3s0.5-0.4,1.4-1.4 C70.8,43.8,79.8,30.5,80,15.5H70H30H20c0.2,15,9.2,28.1,21.6,32.3c0.9,0.9,1.4,1.2,1.4,1.5s-0.5,1.6-1.4,2.5 C29.2,56.1,20.2,69.5,20,85.5h10h40h10C79.8,69.5,70.8,55.9,58.4,51.7z"}),i("clipPath",{id:"uil-hourglass-clip1"},[i("rect",{x:"15",y:"20",width:" 70",height:"25"},[i("animate",{attributeName:"height",from:"25",to:"0",dur:"1s",repeatCount:"indefinite",values:"25;0;0",keyTimes:"0;0.5;1"}),i("animate",{attributeName:"y",from:"20",to:"45",dur:"1s",repeatCount:"indefinite",values:"20;45;45",keyTimes:"0;0.5;1"})])]),i("clipPath",{id:"uil-hourglass-clip2"},[i("rect",{x:"15",y:"55",width:" 70",height:"25"},[i("animate",{attributeName:"height",from:"0",to:"25",dur:"1s",repeatCount:"indefinite",values:"0;25;25",keyTimes:"0;0.5;1"}),i("animate",{attributeName:"y",from:"80",to:"55",dur:"1s",repeatCount:"indefinite",values:"80;55;55",keyTimes:"0;0.5;1"})])]),i("path",{d:"M29,23c3.1,11.4,11.3,19.5,21,19.5S67.9,34.4,71,23H29z","clip-path":"url(#uil-hourglass-clip1)",fill:"currentColor"}),i("path",{d:"M71.6,78c-3-11.6-11.5-20-21.5-20s-18.5,8.4-21.5,20H71.6z","clip-path":"url(#uil-hourglass-clip2)",fill:"currentColor"}),i("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"180 50 50",repeatCount:"indefinite",dur:"1s",values:"0 50 50;0 50 50;180 50 50",keyTimes:"0;0.7;1"})])];var Ce=E({name:"QSpinnerHourglass",props:ne,setup(e){const{cSize:a,classes:r}=le(e);return()=>i("svg",{class:r.value,width:a.value,height:a.value,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",xmlns:"http://www.w3.org/2000/svg"},xe)}});function Q(){return Q=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&(e[u]=r[u])}return e},Q.apply(this,arguments)}var qe=function(){var a=!1,r=[],u=function(){if(!a){a=!0;for(var f=0,h=r.length;f<h;f++)r[f]()}},s=function(f){if(!a){r.push(f);return}f()},d={resolved:function(){return a},resolve:u,promise:{then:s}};return d},F=Object.prototype.hasOwnProperty;function Ie(){var e=qe();return{notify:function(){e.resolve()},wait:function(){return e.promise},render:function(r,u,s){this.wait().then(function(){s(window.grecaptcha.render(r,u))})},reset:function(r){typeof r!="undefined"&&(this.assertLoaded(),this.wait().then(function(){return window.grecaptcha.reset(r)}))},execute:function(r){typeof r!="undefined"&&(this.assertLoaded(),this.wait().then(function(){return window.grecaptcha.execute(r)}))},checkRecaptchaLoad:function(){F.call(window,"grecaptcha")&&F.call(window.grecaptcha,"render")&&this.notify()},assertLoaded:function(){if(!e.resolved())throw new Error("ReCAPTCHA has not been loaded")}}}var B=Ie();typeof window!="undefined"&&(window.vueRecaptchaApiLoaded=B.notify);var z=U({name:"VueRecaptcha",props:{sitekey:{type:String,required:!0},theme:{type:String},badge:{type:String},type:{type:String},size:{type:String},tabindex:{type:String},loadRecaptchaScript:{type:Boolean,default:!0},recaptchaScriptId:{type:String,default:"__RECAPTCHA_SCRIPT"},recaptchaHost:{type:String,default:"www.google.com"},language:{type:String,default:""}},emits:["render","verify","expired","error"],setup:function(a,r){var u=r.slots,s=r.emit,d=_(null),o=_(null),f=function(w){s("verify",w)},h=function(){s("expired")},p=function(){s("error")};return ie(function(){if(B.checkRecaptchaLoad(),a.loadRecaptchaScript&&!document.getElementById(a.recaptchaScriptId)){var c=document.createElement("script");c.id=a.recaptchaScriptId,c.src="https://"+a.recaptchaHost+"/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit&hl="+a.language,c.async=!0,c.defer=!0,document.head.appendChild(c)}var w=Q({},a,{callback:f,"expired-callback":h,"error-callback":p}),S=d.value,b=u.default?S.children[0]:S;B.render(b,w,function(k){o.value=k,s("render",k)})}),{root:d,widgetId:o,reset:function(){B.reset(o.value)},execute:function(){B.execute(o.value)}}},render:function(){var a=this.$slots.default,r;return typeof a=="function"?r=a():r=a,i("div",{ref:"root"},r)}});const Be=e=>(ve("data-v-595648f9"),e=e(),pe(),e),Re=Be(()=>R("div",null,[R("h3",{class:"text-center q-mt-md text-weight-bold"},"Power up your device with the perfect charger!")],-1)),Pe={class:"flex flex-center"},Te={class:"flex flex-center column"},De={class:"text-center"},Ne=U({name:"IndexPage",name:"ReCaptcha",components:{VueRecaptcha:z}}),Ee=Object.assign(Ne,{props:{cellData:Object},setup(e){const a=e,r=de("emitter"),u=c=>{r.emit("pass-index",c)},s=c=>{a.cellData.data[c].loading=!0,a.cellData.data,a.cellData.data[c].url},d=y(()=>"6Lc_I1UkAAAAAG-k-goZwhIGY_pDTRsIIbMJqN5I"),o=_(null),f=()=>{r.emit("pass-value")},h=()=>{},p=()=>{r.emit("pass-value"),o.value.reset()};return ue(()=>{r.emit("pass-value-ondeactivated"),o.value.reset()}),ce(()=>{r.emit("pass-value-updated"),o.value.reset()}),(c,w)=>(I(),se(be,{class:"flex column flex-center q-pa-md"},{default:n(()=>[Re,e.cellData.img?(I(),T(L,{key:0},[t(W,{class:"my-card q-mb-xl"},{default:n(()=>[t($,{src:e.cellData.img},null,8,["src"]),t(O,null,{default:n(()=>[t(q,{clickable:""},{default:n(()=>[t(g,{avatar:""},{default:n(()=>[t(C,{color:"primary",name:"smartphone"})]),_:1}),t(g,null,{default:n(()=>[t(v,null,{default:n(()=>[m(D(e.cellData.title),1)]),_:1}),t(v,{caption:""},{default:n(()=>[m("Phone model")]),_:1})]),_:1})]),_:1}),t(q,{clickable:""},{default:n(()=>[t(g,{avatar:""},{default:n(()=>[t(C,{color:"red",name:"battery_charging_full"})]),_:1}),t(g,null,{default:n(()=>[t(v,null,{default:n(()=>[m(D(e.cellData.bat),1)]),_:1}),t(v,{caption:""},{default:n(()=>[m("Battery information")]),_:1})]),_:1})]),_:1}),t(q,{clickable:""},{default:n(()=>[t(g,{avatar:""},{default:n(()=>[t(C,{color:"amber",name:"power"})]),_:1}),t(g,null,{default:n(()=>[t(v,null,{default:n(()=>[m(D(e.cellData.charge),1)]),_:1}),t(v,{caption:""},{default:n(()=>[m("Charge capacity")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),R("div",Pe,[t(N(z),{sitekey:N(d),onVerify:f,onError:h,onExpired:p,ref_key:"recaptcha",ref:o},null,8,["sitekey"])]),t(V),R("div",Te,[fe(R("h4",De," Not what you're looking for? See more options below:",512),[[me,e.cellData.data!==""]]),(I(!0),T(L,null,he(e.cellData.data,(S,b)=>(I(),T("div",{key:b,class:"btn q-ma-sm"},[t(ge,{loading:e.cellData.data[b].loading,onClick:k=>{u(b),s(b)},color:"teal-8",size:"lg",style:{width:"250px"}},{loading:n(()=>[t(Ce,{class:"on-left"}),m(" Loading... ")]),default:n(()=>[m(D(S.name)+" ",1)]),_:2},1032,["loading","onClick"])]))),128))])],64)):(I(),T(L,{key:1},[t(W,{class:"my-card q-mb-xl"},{default:n(()=>[t($,{src:"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-pro-max.jpg"}),t(O,null,{default:n(()=>[t(q,{clickable:""},{default:n(()=>[t(g,{avatar:""},{default:n(()=>[t(C,{color:"primary",name:"smartphone"})]),_:1}),t(g,null,{default:n(()=>[t(v,null,{default:n(()=>[m("iPhone 13")]),_:1}),t(v,{caption:""},{default:n(()=>[m("Phone model")]),_:1})]),_:1})]),_:1}),t(q,{clickable:""},{default:n(()=>[t(g,{avatar:""},{default:n(()=>[t(C,{color:"red",name:"battery_charging_full"})]),_:1}),t(g,null,{default:n(()=>[t(v,null,{default:n(()=>[m("20W")]),_:1}),t(v,{caption:""},{default:n(()=>[m("Max wired watts supported")]),_:1})]),_:1})]),_:1}),t(q,{clickable:""},{default:n(()=>[t(g,{avatar:""},{default:n(()=>[t(C,{color:"amber",name:"power"})]),_:1}),t(g,null,{default:n(()=>[t(v,null,{default:n(()=>[m("15W")]),_:1}),t(v,{caption:""},{default:n(()=>[m("Max wireless watts supported")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(N(z),{class:"flex flex-center",sitekey:N(d),onVerify:f,onError:h,onExpired:p,ref_key:"recaptcha",ref:o},null,8,["sitekey"]),t(V)],64))]),_:1}))}});var He=oe(Ee,[["__scopeId","data-v-595648f9"]]);export{He as default};
