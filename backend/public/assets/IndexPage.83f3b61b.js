import{y as L,c as Y,r as F,w as ie,a as oe,h as E,V as se,K as X,U as le,g as ue,ad as ce,ae as fe,af as J,$,ag as z,a7 as B,o as de,ah as he,A as pe,S as me,a0 as ge,a1 as C,L as ve,a3 as v,T as H,a4 as D,ai as U,a5 as V,D as ye,aj as _e,ak as K,al as Te,a6 as Se,am as we,an as be}from"./index.4f107955.js";import{u as xe,a as Ce,Q as j,b as Q,c as M}from"./QList.13dfe537.js";import{Q as ke}from"./QPage.88f59579.js";var Ae=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function Ne(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}const Ee={ratio:[String,Number]};function Re(s,_){return L(()=>{const d=Number(s.ratio||(_!==void 0?_.value:void 0));return isNaN(d)!==!0&&d>0?{paddingBottom:`${100/d}%`}:null})}const Pe=16/9;var ee=Y({name:"QImg",props:{...Ee,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:Pe},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(s,{slots:_,emit:d}){const w=F(s.initialRatio),k=Re(s,w);let T;const n=[F(null),F(s.placeholderSrc!==void 0?{src:s.placeholderSrc}:null)],h=F(0),y=F(!1),u=F(!1),b=L(()=>`q-img q-img--${s.noNativeMenu===!0?"no-":""}menu`),f=L(()=>({width:s.width,height:s.height})),p=L(()=>`q-img__image ${s.imgClass!==void 0?s.imgClass+" ":""}q-img__image--with${s.noTransition===!0?"out":""}-transition`),g=L(()=>({...s.imgStyle,objectFit:s.fit,objectPosition:s.position}));ie(()=>m(),o);function m(){return s.src||s.srcset||s.sizes?{src:s.src,srcset:s.srcset,sizes:s.sizes}:null}function o(r){if(clearTimeout(T),u.value=!1,r===null){y.value=!1,n[0].value=null,n[1].value=null;return}y.value=!0,n[h.value].value=r}function i({target:r}){T!==null&&(clearTimeout(T),w.value=r.naturalHeight===0?.5:r.naturalWidth/r.naturalHeight,c(r,1))}function c(r,S){T===null||S===1e3||(r.complete===!0?x(r):T=setTimeout(()=>{c(r,S+1)},50))}function x(r){T!==null&&(h.value=h.value===1?0:1,n[h.value].value=null,y.value=!1,u.value=!1,d("load",r.currentSrc||r.src))}function l(r){clearTimeout(T),y.value=!1,u.value=!0,n[0].value=null,n[1].value=null,d("error",r)}function a(r,S){return E("div",{class:"q-img__container absolute-full",key:r},S)}function e(r){const S=n[r].value,A={key:"img_"+r,class:p.value,style:g.value,crossorigin:s.crossorigin,decoding:s.decoding,referrerpolicy:s.referrerpolicy,height:s.height,width:s.width,loading:s.loading,fetchpriority:s.fetchpriority,"aria-hidden":"true",draggable:s.draggable,...S};return h.value===r?(A.class+=" q-img__image--waiting",Object.assign(A,{onLoad:i,onError:l})):A.class+=" q-img__image--loaded",a("img"+r,E("img",A))}function t(){return y.value!==!0?E("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},X(_[u.value===!0?"error":"default"])):E("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},_.loading!==void 0?_.loading():s.noSpinner===!0?void 0:[E(le,{color:s.spinnerColor,size:s.spinnerSize})])}return o(m()),oe(()=>{clearTimeout(T),T=null}),()=>{const r=[];return k.value!==null&&r.push(E("div",{key:"filler",style:k.value})),u.value!==!0&&(n[0].value!==null&&r.push(e(0)),n[1].value!==null&&r.push(e(1))),r.push(E(se,{name:"q-transition--fade"},t)),E("div",{class:b.value,style:f.value,role:"img","aria-label":s.alt},r)}}}),O=Y({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(s,{slots:_}){const d=L(()=>parseInt(s.lines,10)),w=L(()=>"q-item__label"+(s.overline===!0?" q-item__label--overline text-overline":"")+(s.caption===!0?" q-item__label--caption text-caption":"")+(s.header===!0?" q-item__label--header":"")+(d.value===1?" ellipsis":"")),k=L(()=>s.lines!==void 0&&d.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":d.value}:null);return()=>E("div",{style:k.value,class:w.value},X(_.default))}}),te=Y({name:"QCard",props:{...xe,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(s,{slots:_}){const{proxy:{$q:d}}=ue(),w=Ce(s,d),k=L(()=>"q-card"+(w.value===!0?" q-card--dark q-dark":"")+(s.bordered===!0?" q-card--bordered":"")+(s.square===!0?" q-card--square no-border-radius":"")+(s.flat===!0?" q-card--flat no-shadow":""));return()=>E(s.tag,{class:k.value},X(_.default))}});const qe=[E("g",[E("path",{fill:"none",stroke:"currentColor","stroke-width":"5","stroke-miterlimit":"10",d:"M58.4,51.7c-0.9-0.9-1.4-2-1.4-2.3s0.5-0.4,1.4-1.4 C70.8,43.8,79.8,30.5,80,15.5H70H30H20c0.2,15,9.2,28.1,21.6,32.3c0.9,0.9,1.4,1.2,1.4,1.5s-0.5,1.6-1.4,2.5 C29.2,56.1,20.2,69.5,20,85.5h10h40h10C79.8,69.5,70.8,55.9,58.4,51.7z"}),E("clipPath",{id:"uil-hourglass-clip1"},[E("rect",{x:"15",y:"20",width:" 70",height:"25"},[E("animate",{attributeName:"height",from:"25",to:"0",dur:"1s",repeatCount:"indefinite",values:"25;0;0",keyTimes:"0;0.5;1"}),E("animate",{attributeName:"y",from:"20",to:"45",dur:"1s",repeatCount:"indefinite",values:"20;45;45",keyTimes:"0;0.5;1"})])]),E("clipPath",{id:"uil-hourglass-clip2"},[E("rect",{x:"15",y:"55",width:" 70",height:"25"},[E("animate",{attributeName:"height",from:"0",to:"25",dur:"1s",repeatCount:"indefinite",values:"0;25;25",keyTimes:"0;0.5;1"}),E("animate",{attributeName:"y",from:"80",to:"55",dur:"1s",repeatCount:"indefinite",values:"80;55;55",keyTimes:"0;0.5;1"})])]),E("path",{d:"M29,23c3.1,11.4,11.3,19.5,21,19.5S67.9,34.4,71,23H29z","clip-path":"url(#uil-hourglass-clip1)",fill:"currentColor"}),E("path",{d:"M71.6,78c-3-11.6-11.5-20-21.5-20s-18.5,8.4-21.5,20H71.6z","clip-path":"url(#uil-hourglass-clip2)",fill:"currentColor"}),E("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"180 50 50",repeatCount:"indefinite",dur:"1s",values:"0 50 50;0 50 50;180 50 50",keyTimes:"0;0.7;1"})])];var Ie=Y({name:"QSpinnerHourglass",props:ce,setup(s){const{cSize:_,classes:d}=fe(s);return()=>E("svg",{class:d.value,width:_.value,height:_.value,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",xmlns:"http://www.w3.org/2000/svg"},qe)}}),ne={exports:{}};/**
 * @file postscribe
 * @description Asynchronously write javascript, even with document.write.
 * @version v2.0.8
 * @see {@link https://krux.github.io/postscribe}
 * @license MIT
 * @author Derek Brans
 * @copyright 2016 Krux Digital, Inc
 */(function(s,_){(function(w,k){s.exports=k()})(Ae,function(){return function(d){var w={};function k(T){if(w[T])return w[T].exports;var n=w[T]={exports:{},id:T,loaded:!1};return d[T].call(n.exports,n,n.exports,k),n.loaded=!0,n.exports}return k.m=d,k.c=w,k.p="",k(0)}([function(d,w,k){var T=k(1),n=h(T);function h(y){return y&&y.__esModule?y:{default:y}}d.exports=n.default},function(d,w,k){w.__esModule=!0;var T=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(a[r]=t[r])}return a};w.default=l;var n=k(2),h=f(n),y=k(4),u=b(y);function b(a){if(a&&a.__esModule)return a;var e={};if(a!=null)for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t]);return e.default=a,e}function f(a){return a&&a.__esModule?a:{default:a}}function p(){}var g={afterAsync:p,afterDequeue:p,afterStreamStart:p,afterWrite:p,autoFix:!0,beforeEnqueue:p,beforeWriteToken:function(e){return e},beforeWrite:function(e){return e},done:p,error:function(e){throw new Error(e.msg)},releaseAsync:!1},m=0,o=[],i=null;function c(){var a=o.shift();if(a){var e=u.last(a);e.afterDequeue(),a.stream=x.apply(void 0,a),e.afterStreamStart()}}function x(a,e,t){i=new h.default(a,t),i.id=m++,i.name=t.name||i.id,l.streams[i.name]=i;var r=a.ownerDocument,S={close:r.close,open:r.open,write:r.write,writeln:r.writeln};function A(R){R=t.beforeWrite(R),i.write(R),t.afterWrite(R)}T(r,{close:p,open:p,write:function(){for(var N=arguments.length,P=Array(N),I=0;I<N;I++)P[I]=arguments[I];return A(P.join(""))},writeln:function(){for(var N=arguments.length,P=Array(N),I=0;I<N;I++)P[I]=arguments[I];return A(P.join("")+`
`)}});var q=i.win.onerror||p;return i.win.onerror=function(R,N,P){t.error({msg:R+" - "+N+": "+P}),q.apply(i.win,[R,N,P])},i.write(e,function(){T(r,S),i.win.onerror=q,t.done(),i=null,c()}),i}function l(a,e,t){if(u.isFunction(t))t={done:t};else if(t==="clear"){o=[],i=null,m=0;return}t=u.defaults(t,g),/^#/.test(a)?a=window.document.getElementById(a.substr(1)):a=a.jquery?a[0]:a;var r=[a,e,t];return a.postscribe={cancel:function(){r.stream?r.stream.abort():r[1]=p}},t.beforeEnqueue(r),o.push(r),i||c(),a.postscribe}T(l,{streams:{},queue:o,WriteStream:h.default})},function(d,w,k){w.__esModule=!0;var T=Object.assign||function(l){for(var a=1;a<arguments.length;a++){var e=arguments[a];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(l[t]=e[t])}return l},n=k(3),h=f(n),y=k(4),u=b(y);function b(l){if(l&&l.__esModule)return l;var a={};if(l!=null)for(var e in l)Object.prototype.hasOwnProperty.call(l,e)&&(a[e]=l[e]);return a.default=l,a}function f(l){return l&&l.__esModule?l:{default:l}}function p(l,a){if(!(l instanceof a))throw new TypeError("Cannot call a class as a function")}var g="data-ps-",m="ps-style",o="ps-script";function i(l,a){var e=g+a,t=l.getAttribute(e);return u.existy(t)?String(t):t}function c(l,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,t=g+a;u.existy(e)&&e!==""?l.setAttribute(t,e):l.removeAttribute(t)}var x=function(){function l(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};p(this,l),this.root=a,this.options=e,this.doc=a.ownerDocument,this.win=this.doc.defaultView||this.doc.parentWindow,this.parser=new h.default("",{autoFix:e.autoFix}),this.actuals=[a],this.proxyHistory="",this.proxyRoot=this.doc.createElement(a.nodeName),this.scriptStack=[],this.writeQueue=[],c(this.proxyRoot,"proxyof",0)}return l.prototype.write=function(){var e;for((e=this.writeQueue).push.apply(e,arguments);!this.deferredRemote&&this.writeQueue.length;){var t=this.writeQueue.shift();u.isFunction(t)?this._callFunction(t):this._writeImpl(t)}},l.prototype._callFunction=function(e){var t={type:"function",value:e.name||e.toString()};this._onScriptStart(t),e.call(this.win,this.doc),this._onScriptDone(t)},l.prototype._writeImpl=function(e){this.parser.append(e);for(var t=void 0,r=void 0,S=void 0,A=[];(t=this.parser.readToken())&&!(r=u.isScript(t))&&!(S=u.isStyle(t));)t=this.options.beforeWriteToken(t),t&&A.push(t);A.length>0&&this._writeStaticTokens(A),r&&this._handleScriptToken(t),S&&this._handleStyleToken(t)},l.prototype._writeStaticTokens=function(e){var t=this._buildChunk(e);return t.actual?(t.html=this.proxyHistory+t.actual,this.proxyHistory+=t.proxy,this.proxyRoot.innerHTML=t.html,this._walkChunk(),t):null},l.prototype._buildChunk=function(e){for(var t=this.actuals.length,r=[],S=[],A=[],q=e.length,R=0;R<q;R++){var N=e[R],P=N.toString();if(r.push(P),N.attrs){if(!/^noscript$/i.test(N.tagName)){var I=t++;S.push(P.replace(/(\/?>)/," "+g+"id="+I+" $1")),N.attrs.id!==o&&N.attrs.id!==m&&A.push(N.type==="atomicTag"?"":"<"+N.tagName+" "+g+"proxyof="+I+(N.unary?" />":">"))}}else S.push(P),A.push(N.type==="endTag"?P:"")}return{tokens:e,raw:r.join(""),actual:S.join(""),proxy:A.join("")}},l.prototype._walkChunk=function(){for(var e=void 0,t=[this.proxyRoot];u.existy(e=t.shift());){var r=e.nodeType===1,S=r&&i(e,"proxyof");if(!S){r&&(this.actuals[i(e,"id")]=e,c(e,"id"));var A=e.parentNode&&i(e.parentNode,"proxyof");A&&this.actuals[A].appendChild(e)}t.unshift.apply(t,u.toArray(e.childNodes))}},l.prototype._handleScriptToken=function(e){var t=this,r=this.parser.clear();r&&this.writeQueue.unshift(r),e.src=e.attrs.src||e.attrs.SRC,e=this.options.beforeWriteToken(e),e&&(e.src&&this.scriptStack.length?this.deferredRemote=e:this._onScriptStart(e),this._writeScriptToken(e,function(){t._onScriptDone(e)}))},l.prototype._handleStyleToken=function(e){var t=this.parser.clear();t&&this.writeQueue.unshift(t),e.type=e.attrs.type||e.attrs.TYPE||"text/css",e=this.options.beforeWriteToken(e),e&&this._writeStyleToken(e),t&&this.write()},l.prototype._writeStyleToken=function(e){var t=this._buildStyle(e);this._insertCursor(t,m),e.content&&(t.styleSheet&&!t.sheet?t.styleSheet.cssText=e.content:t.appendChild(this.doc.createTextNode(e.content)))},l.prototype._buildStyle=function(e){var t=this.doc.createElement(e.tagName);return t.setAttribute("type",e.type),u.eachKey(e.attrs,function(r,S){t.setAttribute(r,S)}),t},l.prototype._insertCursor=function(e,t){this._writeImpl('<span id="'+t+'"/>');var r=this.doc.getElementById(t);r&&r.parentNode.replaceChild(e,r)},l.prototype._onScriptStart=function(e){e.outerWrites=this.writeQueue,this.writeQueue=[],this.scriptStack.unshift(e)},l.prototype._onScriptDone=function(e){if(e!==this.scriptStack[0]){this.options.error({msg:"Bad script nesting or script finished twice"});return}this.scriptStack.shift(),this.write.apply(this,e.outerWrites),!this.scriptStack.length&&this.deferredRemote&&(this._onScriptStart(this.deferredRemote),this.deferredRemote=null)},l.prototype._writeScriptToken=function(e,t){var r=this._buildScript(e),S=this._shouldRelease(r),A=this.options.afterAsync;e.src&&(r.src=e.src,this._scriptLoadHandler(r,S?A:function(){t(),A()}));try{this._insertCursor(r,o),(!r.src||S)&&t()}catch(q){this.options.error(q),t()}},l.prototype._buildScript=function(e){var t=this.doc.createElement(e.tagName);return u.eachKey(e.attrs,function(r,S){t.setAttribute(r,S)}),e.content&&(t.text=e.content),t},l.prototype._scriptLoadHandler=function(e,t){function r(){e=e.onload=e.onreadystatechange=e.onerror=null}var S=this.options.error;function A(){r(),t!=null&&t(),t=null}function q(N){r(),S(N),t!=null&&t(),t=null}function R(N,P){var I=N["on"+P];I!=null&&(N["_on"+P]=I)}R(e,"load"),R(e,"error"),T(e,{onload:function(){if(e._onload)try{e._onload.apply(this,Array.prototype.slice.call(arguments,0))}catch(P){q({msg:"onload handler failed "+P+" @ "+e.src})}A()},onerror:function(){if(e._onerror)try{e._onerror.apply(this,Array.prototype.slice.call(arguments,0))}catch(P){q({msg:"onerror handler failed "+P+" @ "+e.src});return}q({msg:"remote script failed "+e.src})},onreadystatechange:function(){/^(loaded|complete)$/.test(e.readyState)&&A()}})},l.prototype._shouldRelease=function(e){var t=/^script$/i.test(e.nodeName);return!t||!!(this.options.releaseAsync&&e.src&&e.hasAttribute("async"))},l}();w.default=x},function(d,w,k){/**
 * @file prescribe
 * @description Tiny, forgiving HTML parser
 * @version vundefined
 * @see {@link https://github.com/krux/prescribe/}
 * @license MIT
 * @author Derek Brans
 * @copyright 2016 Krux Digital, Inc
 */(function(n,h){d.exports=h()})(this,function(){return function(T){var n={};function h(y){if(n[y])return n[y].exports;var u=n[y]={exports:{},id:y,loaded:!1};return T[y].call(u.exports,u,u.exports,h),u.loaded=!0,u.exports}return h.m=T,h.c=n,h.p="",h(0)}([function(T,n,h){var y=h(1),u=b(y);function b(f){return f&&f.__esModule?f:{default:f}}T.exports=u.default},function(T,n,h){n.__esModule=!0;var y=h(2),u=i(y),b=h(3),f=i(b),p=h(6),g=o(p),m=h(5);function o(e){return e&&e.__esModule?e:{default:e}}function i(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var x={comment:/^<!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},l=function(){function e(){var t=this,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};c(this,e),this.stream=r;var A=!1,q={};for(var R in u)u.hasOwnProperty(R)&&(S.autoFix&&(q[R+"Fix"]=!0),A=A||q[R+"Fix"]);A?(this._readToken=(0,g.default)(this,q,function(){return t._readTokenImpl()}),this._peekToken=(0,g.default)(this,q,function(){return t._peekTokenImpl()})):(this._readToken=this._readTokenImpl,this._peekToken=this._peekTokenImpl)}return e.prototype.append=function(r){this.stream+=r},e.prototype.prepend=function(r){this.stream=r+this.stream},e.prototype._readTokenImpl=function(){var r=this._peekTokenImpl();if(r)return this.stream=this.stream.slice(r.length),r},e.prototype._peekTokenImpl=function(){for(var r in x)if(x.hasOwnProperty(r)&&x[r].test(this.stream)){var S=f[r](this.stream);if(S)return S.type==="startTag"&&/script|style/i.test(S.tagName)?null:(S.text=this.stream.substr(0,S.length),S)}},e.prototype.peekToken=function(){return this._peekToken()},e.prototype.readToken=function(){return this._readToken()},e.prototype.readTokens=function(r){for(var S=void 0;S=this.readToken();)if(r[S.type]&&r[S.type](S)===!1)return},e.prototype.clear=function(){var r=this.stream;return this.stream="",r},e.prototype.rest=function(){return this.stream},e}();n.default=l,l.tokenToString=function(e){return e.toString()},l.escapeAttributes=function(e){var t={};for(var r in e)e.hasOwnProperty(r)&&(t[r]=(0,m.escapeQuotes)(e[r],null));return t},l.supports=u;for(var a in u)u.hasOwnProperty(a)&&(l.browserHasFlaw=l.browserHasFlaw||!u[a]&&a)},function(T,n){n.__esModule=!0;var h=!1,y=!1,u=window.document.createElement("div");try{var b="<P><I></P></I>";u.innerHTML=b,n.tagSoup=h=u.innerHTML!==b}catch{n.tagSoup=h=!1}try{u.innerHTML="<P><i><P></P></i></P>",n.selfClose=y=u.childNodes.length===2}catch{n.selfClose=y=!1}u=null,n.tagSoup=h,n.selfClose=y},function(T,n,h){n.__esModule=!0;var y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i};n.comment=f,n.chars=p,n.startTag=g,n.atomicTag=m,n.endTag=o;var u=h(4),b={startTag:/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,endTag:/^<\/([\-A-Za-z0-9_]+)[^>]*>/,attr:/(?:([\-A-Za-z0-9_]+)\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))|(?:([\-A-Za-z0-9_]+)(\s|$)+)/g,fillAttr:/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i};function f(i){var c=i.indexOf("-->");if(c>=0)return new u.CommentToken(i.substr(4,c-1),c+3)}function p(i){var c=i.indexOf("<");return new u.CharsToken(c>=0?c:i.length)}function g(i){var c=i.indexOf(">");if(c!==-1){var x=i.match(b.startTag);if(x){var l=function(){var a={},e={},t=x[2];return x[2].replace(b.attr,function(r,S){arguments[2]||arguments[3]||arguments[4]||arguments[5]?arguments[5]?(a[arguments[5]]="",e[arguments[5]]=!0):a[S]=arguments[2]||arguments[3]||arguments[4]||b.fillAttr.test(S)&&S||"":a[S]="",t=t.replace(r,"")}),{v:new u.StartTagToken(x[1],x[0].length,a,e,!!x[3],t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""))}}();if((typeof l=="undefined"?"undefined":y(l))==="object")return l.v}}}function m(i){var c=g(i);if(c){var x=i.slice(c.length);if(x.match(new RegExp("</\\s*"+c.tagName+"\\s*>","i"))){var l=x.match(new RegExp("([\\s\\S]*?)</\\s*"+c.tagName+"\\s*>","i"));if(l)return new u.AtomicTagToken(c.tagName,l[0].length+c.length,c.attrs,c.booleanAttrs,l[1])}}}function o(i){var c=i.match(b.endTag);if(c)return new u.EndTagToken(c[1],c[0].length)}},function(T,n,h){n.__esModule=!0,n.EndTagToken=n.AtomicTagToken=n.StartTagToken=n.TagToken=n.CharsToken=n.CommentToken=n.Token=void 0;var y=h(5);function u(f,p){if(!(f instanceof p))throw new TypeError("Cannot call a class as a function")}n.Token=function f(p,g){u(this,f),this.type=p,this.length=g,this.text=""},n.CommentToken=function(){function f(p,g){u(this,f),this.type="comment",this.length=g||(p?p.length:0),this.text="",this.content=p}return f.prototype.toString=function(){return"<!--"+this.content},f}(),n.CharsToken=function(){function f(p){u(this,f),this.type="chars",this.length=p,this.text=""}return f.prototype.toString=function(){return this.text},f}();var b=n.TagToken=function(){function f(p,g,m,o,i){u(this,f),this.type=p,this.length=m,this.text="",this.tagName=g,this.attrs=o,this.booleanAttrs=i,this.unary=!1,this.html5Unary=!1}return f.formatTag=function(g){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,o="<"+g.tagName;for(var i in g.attrs)if(g.attrs.hasOwnProperty(i)){o+=" "+i;var c=g.attrs[i];(typeof g.booleanAttrs=="undefined"||typeof g.booleanAttrs[i]=="undefined")&&(o+='="'+(0,y.escapeQuotes)(c)+'"')}return g.rest&&(o+=" "+g.rest),g.unary&&!g.html5Unary?o+="/>":o+=">",m!=null&&(o+=m+"</"+g.tagName+">"),o},f}();n.StartTagToken=function(){function f(p,g,m,o,i,c){u(this,f),this.type="startTag",this.length=g,this.text="",this.tagName=p,this.attrs=m,this.booleanAttrs=o,this.html5Unary=!1,this.unary=i,this.rest=c}return f.prototype.toString=function(){return b.formatTag(this)},f}(),n.AtomicTagToken=function(){function f(p,g,m,o,i){u(this,f),this.type="atomicTag",this.length=g,this.text="",this.tagName=p,this.attrs=m,this.booleanAttrs=o,this.unary=!1,this.html5Unary=!1,this.content=i}return f.prototype.toString=function(){return b.formatTag(this,this.content)},f}(),n.EndTagToken=function(){function f(p,g){u(this,f),this.type="endTag",this.length=g,this.text="",this.tagName=p}return f.prototype.toString=function(){return"</"+this.tagName+">"},f}()},function(T,n){n.__esModule=!0,n.escapeQuotes=h;function h(y){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return y?y.replace(/([^"]*)"/g,function(b,f){return/\\/.test(f)?f+'"':f+'\\"'}):u}},function(T,n){n.__esModule=!0,n.default=g;var h=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,y=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i;function u(m){return m&&m.type==="startTag"&&(m.unary=h.test(m.tagName)||m.unary,m.html5Unary=!/\/>$/.test(m.text)),m}function b(m,o){var i=m.stream,c=u(o());return m.stream=i,c}function f(m,o){var i=o.pop();m.prepend("</"+i.tagName+">")}function p(){var m=[];return m.last=function(){return this[this.length-1]},m.lastTagNameEq=function(o){var i=this.last();return i&&i.tagName&&i.tagName.toUpperCase()===o.toUpperCase()},m.containsTagName=function(o){for(var i=0,c;c=this[i];i++)if(c.tagName===o)return!0;return!1},m}function g(m,o,i){var c=p(),x={startTag:function(e){var t=e.tagName;t.toUpperCase()==="TR"&&c.lastTagNameEq("TABLE")?(m.prepend("<TBODY>"),l()):o.selfCloseFix&&y.test(t)&&c.containsTagName(t)?c.lastTagNameEq(t)?f(m,c):(m.prepend("</"+e.tagName+">"),l()):e.unary||c.push(e)},endTag:function(e){var t=c.last();t?o.tagSoupFix&&!c.lastTagNameEq(e.tagName)?f(m,c):c.pop():o.tagSoupFix&&(i(),l())}};function l(){var a=b(m,i);a&&x[a.type]&&x[a.type](a)}return function(){return l(),u(i())}}}])})},function(d,w){w.__esModule=!0;var k=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o};w.existy=T,w.isFunction=n,w.each=h,w.eachKey=y,w.defaults=u,w.toArray=b,w.last=f,w.isTag=p,w.isScript=g,w.isStyle=m;function T(o){return o!=null}function n(o){return typeof o=="function"}function h(o,i,c){var x=void 0,l=o&&o.length||0;for(x=0;x<l;x++)i.call(c,o[x],x)}function y(o,i,c){for(var x in o)o.hasOwnProperty(x)&&i.call(c,x,o[x])}function u(o,i){return o=o||{},y(i,function(c,x){T(o[c])||(o[c]=x)}),o}function b(o){try{return Array.prototype.slice.call(o)}catch{var i=function(){var x=[];return h(o,function(l){x.push(l)}),{v:x}}();if((typeof i=="undefined"?"undefined":k(i))==="object")return i.v}}function f(o){return o[o.length-1]}function p(o,i){return!o||!(o.type==="startTag"||o.type==="atomicTag")||!("tagName"in o)?!1:!!~o.tagName.toLowerCase().indexOf(i)}function g(o){return p(o,"script")}function m(o){return p(o,"style")}}])})})(ne);var De=Ne(ne.exports);const Me=B("h4",{class:"text-center"},"See our recommendations",-1),Oe=B("div",{id:"amzn-assoc-ad-fb33a7fe-fbee-4bf4-9032-5777eee05da5"},null,-1),Le=[Me,Oe],Fe=J({name:"NativeAds",name:"Ads-Example",mounted:function(){De("#amzn-assoc-ad-fb33a7fe-fbee-4bf4-9032-5777eee05da5",'<script defer async src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=fb33a7fe-fbee-4bf4-9032-5777eee05da5"><\/script>')}}),re=Object.assign(Fe,{setup(s){return(_,d)=>($(),z("div",null,Le))}});function G(){return G=Object.assign?Object.assign.bind():function(s){for(var _=1;_<arguments.length;_++){var d=arguments[_];for(var w in d)Object.prototype.hasOwnProperty.call(d,w)&&(s[w]=d[w])}return s},G.apply(this,arguments)}var Be=function(){var _=!1,d=[],w=function(){if(!_){_=!0;for(var h=0,y=d.length;h<y;h++)d[h]()}},k=function(h){if(!_){d.push(h);return}h()},T={resolved:function(){return _},resolve:w,promise:{then:k}};return T},ae=Object.prototype.hasOwnProperty;function He(){var s=Be();return{notify:function(){s.resolve()},wait:function(){return s.promise},render:function(d,w,k){this.wait().then(function(){k(window.grecaptcha.render(d,w))})},reset:function(d){typeof d!="undefined"&&(this.assertLoaded(),this.wait().then(function(){return window.grecaptcha.reset(d)}))},execute:function(d){typeof d!="undefined"&&(this.assertLoaded(),this.wait().then(function(){return window.grecaptcha.execute(d)}))},checkRecaptchaLoad:function(){ae.call(window,"grecaptcha")&&ae.call(window.grecaptcha,"render")&&this.notify()},assertLoaded:function(){if(!s.resolved())throw new Error("ReCAPTCHA has not been loaded")}}}var W=He();typeof window!="undefined"&&(window.vueRecaptchaApiLoaded=W.notify);var Z=J({name:"VueRecaptcha",props:{sitekey:{type:String,required:!0},theme:{type:String},badge:{type:String},type:{type:String},size:{type:String},tabindex:{type:String},loadRecaptchaScript:{type:Boolean,default:!0},recaptchaScriptId:{type:String,default:"__RECAPTCHA_SCRIPT"},recaptchaHost:{type:String,default:"www.google.com"},language:{type:String,default:""}},emits:["render","verify","expired","error"],setup:function(_,d){var w=d.slots,k=d.emit,T=F(null),n=F(null),h=function(f){k("verify",f)},y=function(){k("expired")},u=function(){k("error")};return de(function(){if(W.checkRecaptchaLoad(),_.loadRecaptchaScript&&!document.getElementById(_.recaptchaScriptId)){var b=document.createElement("script");b.id=_.recaptchaScriptId,b.src="https://"+_.recaptchaHost+"/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit&hl="+_.language,b.async=!0,b.defer=!0,document.head.appendChild(b)}var f=G({},_,{callback:h,"expired-callback":y,"error-callback":u}),p=T.value,g=w.default?p.children[0]:p;W.render(g,f,function(m){n.value=m,k("render",m)})}),{root:T,widgetId:n,reset:function(){W.reset(n.value)},execute:function(){W.execute(n.value)}}},render:function(){var _=this.$slots.default,d;return typeof _=="function"?d=_():d=_,E("div",{ref:"root"},d)}});const Qe=s=>(we("data-v-25076241"),s=s(),be(),s),$e=Qe(()=>B("div",null,[B("h3",{class:"text-center q-mt-md text-weight-bold"},"Power up your device with the perfect charger!")],-1)),ze={class:"flex flex-center"},We={class:"flex flex-center column"},Ue={class:"text-center"},Ve=J({name:"IndexPage",name:"ReCaptcha",components:{VueRecaptcha:Z}}),Ye=Object.assign(Ve,{props:{cellData:Object},setup(s){const _=s,d=ve("emitter"),w=b=>{d.emit("pass-index",b)},k=b=>{_.cellData.data[b].loading=!0,_.cellData.data,_.cellData.data[b].url},T=L(()=>"6Lc_I1UkAAAAAG-k-goZwhIGY_pDTRsIIbMJqN5I"),n=F(null),h=()=>{d.emit("pass-value")},y=()=>{},u=()=>{d.emit("pass-value"),n.value.reset()};return pe(()=>{d.emit("pass-value-ondeactivated"),n.value.reset()}),me(()=>{d.emit("pass-value-updated"),n.value.reset()}),(b,f)=>($(),ge(ke,{class:"flex column flex-center q-pa-md"},{default:C(()=>[$e,s.cellData.img?($(),z(K,{key:0},[v(te,{class:"my-card q-mb-xl"},{default:C(()=>[v(ee,{src:s.cellData.img},null,8,["src"]),v(j,null,{default:C(()=>[v(Q,{clickable:""},{default:C(()=>[v(M,{avatar:""},{default:C(()=>[v(H,{color:"primary",name:"smartphone"})]),_:1}),v(M,null,{default:C(()=>[v(O,null,{default:C(()=>[D(U(s.cellData.title),1)]),_:1}),v(O,{caption:""},{default:C(()=>[D("Phone model")]),_:1})]),_:1})]),_:1}),v(Q,{clickable:""},{default:C(()=>[v(M,{avatar:""},{default:C(()=>[v(H,{color:"red",name:"battery_charging_full"})]),_:1}),v(M,null,{default:C(()=>[v(O,null,{default:C(()=>[D(U(s.cellData.bat),1)]),_:1}),v(O,{caption:""},{default:C(()=>[D("Battery information")]),_:1})]),_:1})]),_:1}),v(Q,{clickable:""},{default:C(()=>[v(M,{avatar:""},{default:C(()=>[v(H,{color:"amber",name:"power"})]),_:1}),v(M,null,{default:C(()=>[v(O,null,{default:C(()=>[D(U(s.cellData.charge),1)]),_:1}),v(O,{caption:""},{default:C(()=>[D("Charge capacity")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),B("div",ze,[v(V(Z),{sitekey:V(T),onVerify:h,onError:y,onExpired:u,ref_key:"recaptcha",ref:n},null,8,["sitekey"])]),v(re),B("div",We,[ye(B("h4",Ue," Not what you're looking for? See more options below:",512),[[_e,s.cellData.data!==""]]),($(!0),z(K,null,Te(s.cellData.data,(p,g)=>($(),z("div",{key:g,class:"btn q-ma-sm"},[v(Se,{loading:s.cellData.data[g].loading,onClick:m=>{w(g),k(g)},color:"teal-8",size:"lg",style:{width:"250px"}},{loading:C(()=>[v(Ie,{class:"on-left"}),D(" Loading... ")]),default:C(()=>[D(U(p.name)+" ",1)]),_:2},1032,["loading","onClick"])]))),128))])],64)):($(),z(K,{key:1},[v(te,{class:"my-card q-mb-xl"},{default:C(()=>[v(ee,{src:"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-pro-max.jpg"}),v(j,null,{default:C(()=>[v(Q,{clickable:""},{default:C(()=>[v(M,{avatar:""},{default:C(()=>[v(H,{color:"primary",name:"smartphone"})]),_:1}),v(M,null,{default:C(()=>[v(O,null,{default:C(()=>[D("iPhone 13")]),_:1}),v(O,{caption:""},{default:C(()=>[D("Phone model")]),_:1})]),_:1})]),_:1}),v(Q,{clickable:""},{default:C(()=>[v(M,{avatar:""},{default:C(()=>[v(H,{color:"red",name:"battery_charging_full"})]),_:1}),v(M,null,{default:C(()=>[v(O,null,{default:C(()=>[D("20W")]),_:1}),v(O,{caption:""},{default:C(()=>[D("Max wired watts supported")]),_:1})]),_:1})]),_:1}),v(Q,{clickable:""},{default:C(()=>[v(M,{avatar:""},{default:C(()=>[v(H,{color:"amber",name:"power"})]),_:1}),v(M,null,{default:C(()=>[v(O,null,{default:C(()=>[D("15W")]),_:1}),v(O,{caption:""},{default:C(()=>[D("Max wireless watts supported")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),v(V(Z),{class:"flex flex-center",sitekey:V(T),onVerify:h,onError:y,onExpired:u,ref_key:"recaptcha",ref:n},null,8,["sitekey"]),v(re)],64))]),_:1}))}});var Xe=he(Ye,[["__scopeId","data-v-25076241"]]);export{Xe as default};
