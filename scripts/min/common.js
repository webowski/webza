!function(t){"function"==typeof define&&define.amd?define(t):t()}((function(){"use strict";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(t,n,e){return t(e={path:n,exports:{},require:function(t,n){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==n&&e.path)}},e.exports),e.exports}var e=function(t){return t&&t.Math==Math&&t},r=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof t&&t)||Function("return this")(),o=function(t){try{return!!t()}catch(t){return!0}},i=!o((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),c=function(t){return"object"==typeof t?null!==t:"function"==typeof t},u=r.document,f=c(u)&&c(u.createElement),a=function(t){return f?u.createElement(t):{}},s=!i&&!o((function(){return 7!=Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a})),l=function(t){if(!c(t))throw TypeError(String(t)+" is not an object");return t},p=function(t,n){if(!c(t))return t;var e,r;if(n&&"function"==typeof(e=t.toString)&&!c(r=e.call(t)))return r;if("function"==typeof(e=t.valueOf)&&!c(r=e.call(t)))return r;if(!n&&"function"==typeof(e=t.toString)&&!c(r=e.call(t)))return r;throw TypeError("Can't convert object to primitive value")},v=Object.defineProperty,h={f:i?v:function(t,n,e){if(l(t),n=p(n,!0),l(e),s)try{return v(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},d=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}},y=i?function(t,n,e){return h.f(t,n,d(1,e))}:function(t,n,e){return t[n]=e,t},g=function(t,n){try{y(r,t,n)}catch(e){r[t]=n}return n},m="__core-js_shared__",b=r[m]||g(m,{}),w=n((function(t){(t.exports=function(t,n){return b[t]||(b[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.5",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),j={}.hasOwnProperty,S=function(t,n){return j.call(t,n)},O=0,E=Math.random(),T=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++O+E).toString(36)},P=!!Object.getOwnPropertySymbols&&!o((function(){return!String(Symbol())})),x=P&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,M=w("wks"),k=r.Symbol,I=x?k:k&&k.withoutSetter||T,L=function(t){return S(M,t)||(P&&S(k,t)?M[t]=k[t]:M[t]=I("Symbol."+t)),M[t]},A={};A[L("toStringTag")]="z";var C="[object z]"===String(A),F=Function.toString;"function"!=typeof b.inspectSource&&(b.inspectSource=function(t){return F.call(t)});var N,D,_,z,q=b.inspectSource,H=r.WeakMap,R="function"==typeof H&&/native code/.test(q(H)),W=w("keys"),G={},K=r.WeakMap;if(R){var U=new K,B=U.get,V=U.has,Y=U.set;N=function(t,n){return Y.call(U,t,n),n},D=function(t){return B.call(U,t)||{}},_=function(t){return V.call(U,t)}}else{var J=W[z="state"]||(W[z]=T(z));G[J]=!0,N=function(t,n){return y(t,J,n),n},D=function(t){return S(t,J)?t[J]:{}},_=function(t){return S(t,J)}}var Q={set:N,get:D,has:_,enforce:function(t){return _(t)?D(t):N(t,{})},getterFor:function(t){return function(n){var e;if(!c(n)||(e=D(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}},X=n((function(t){var n=Q.get,e=Q.enforce,o=String(String).split("String");(t.exports=function(t,n,i,c){var u=!!c&&!!c.unsafe,f=!!c&&!!c.enumerable,a=!!c&&!!c.noTargetGet;"function"==typeof i&&("string"!=typeof n||S(i,"name")||y(i,"name",n),e(i).source=o.join("string"==typeof n?n:"")),t!==r?(u?!a&&t[n]&&(f=!0):delete t[n],f?t[n]=i:y(t,n,i)):f?t[n]=i:g(n,i)})(Function.prototype,"toString",(function(){return"function"==typeof this&&n(this).source||q(this)}))})),Z={}.toString,$=function(t){return Z.call(t).slice(8,-1)},tt=L("toStringTag"),nt="Arguments"==$(function(){return arguments}()),et=C?$:function(t){var n,e,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),tt))?e:nt?$(n):"Object"==(r=$(n))&&"function"==typeof n.callee?"Arguments":r},rt=C?{}.toString:function(){return"[object "+et(this)+"]"};C||X(Object.prototype,"toString",rt,{unsafe:!0});var ot={}.propertyIsEnumerable,it=Object.getOwnPropertyDescriptor,ct={f:it&&!ot.call({1:2},1)?function(t){var n=it(this,t);return!!n&&n.enumerable}:ot},ut="".split,ft=o((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==$(t)?ut.call(t,""):Object(t)}:Object,at=function(t){return ft(function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}(t))},st=Object.getOwnPropertyDescriptor,lt={f:i?st:function(t,n){if(t=at(t),n=p(n,!0),s)try{return st(t,n)}catch(t){}if(S(t,n))return d(!ct.f.call(t,n),t[n])}},pt=r,vt=function(t){return"function"==typeof t?t:void 0},ht=function(t,n){return arguments.length<2?vt(pt[t])||vt(r[t]):pt[t]&&pt[t][n]||r[t]&&r[t][n]},dt=Math.ceil,yt=Math.floor,gt=function(t){return isNaN(t=+t)?0:(t>0?yt:dt)(t)},mt=Math.min,bt=function(t){return t>0?mt(gt(t),9007199254740991):0},wt=Math.max,jt=Math.min,St=function(t){return function(n,e,r){var o,i=at(n),c=bt(i.length),u=function(t,n){var e=gt(t);return e<0?wt(e+n,0):jt(e,n)}(r,c);if(t&&e!=e){for(;c>u;)if((o=i[u++])!=o)return!0}else for(;c>u;u++)if((t||u in i)&&i[u]===e)return t||u||0;return!t&&-1}},Ot={includes:St(!0),indexOf:St(!1)}.indexOf,Et=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype"),Tt={f:Object.getOwnPropertyNames||function(t){return function(t,n){var e,r=at(t),o=0,i=[];for(e in r)!S(G,e)&&S(r,e)&&i.push(e);for(;n.length>o;)S(r,e=n[o++])&&(~Ot(i,e)||i.push(e));return i}(t,Et)}},Pt={f:Object.getOwnPropertySymbols},xt=ht("Reflect","ownKeys")||function(t){var n=Tt.f(l(t)),e=Pt.f;return e?n.concat(e(t)):n},Mt=function(t,n){for(var e=xt(n),r=h.f,o=lt.f,i=0;i<e.length;i++){var c=e[i];S(t,c)||r(t,c,o(n,c))}},kt=/#|\.prototype\./,It=function(t,n){var e=At[Lt(t)];return e==Ft||e!=Ct&&("function"==typeof n?o(n):!!n)},Lt=It.normalize=function(t){return String(t).replace(kt,".").toLowerCase()},At=It.data={},Ct=It.NATIVE="N",Ft=It.POLYFILL="P",Nt=It,Dt=lt.f,_t=function(t,n){var e,o,i,c,u,f=t.target,a=t.global,s=t.stat;if(e=a?r:s?r[f]||g(f,{}):(r[f]||{}).prototype)for(o in n){if(c=n[o],i=t.noTargetGet?(u=Dt(e,o))&&u.value:e[o],!Nt(a?o:f+(s?".":"#")+o,t.forced)&&void 0!==i){if(typeof c==typeof i)continue;Mt(c,i)}(t.sham||i&&i.sham)&&y(c,"sham",!0),X(e,o,c,t)}},zt=r.Promise,qt=h.f,Ht=L("toStringTag"),Rt=L("species"),Wt=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t},Gt={},Kt=L("iterator"),Ut=Array.prototype,Bt=function(t,n,e){if(Wt(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}},Vt=L("iterator"),Yt=function(t,n,e,r){try{return r?n(l(e)[0],e[1]):n(e)}catch(n){var o=t.return;throw void 0!==o&&l(o.call(t)),n}},Jt=n((function(t){var n=function(t,n){this.stopped=t,this.result=n};(t.exports=function(t,e,r,o,i){var c,u,f,a,s,p,v,h,d=Bt(e,r,o?2:1);if(i)c=t;else{if("function"!=typeof(u=function(t){if(null!=t)return t[Vt]||t["@@iterator"]||Gt[et(t)]}(t)))throw TypeError("Target is not iterable");if(void 0!==(h=u)&&(Gt.Array===h||Ut[Kt]===h)){for(f=0,a=bt(t.length);a>f;f++)if((s=o?d(l(v=t[f])[0],v[1]):d(t[f]))&&s instanceof n)return s;return new n(!1)}c=u.call(t)}for(p=c.next;!(v=p.call(c)).done;)if("object"==typeof(s=Yt(c,d,v.value,o))&&s&&s instanceof n)return s;return new n(!1)}).stop=function(t){return new n(!0,t)}})),Qt=L("iterator"),Xt=!1;try{var Zt=0,$t={next:function(){return{done:!!Zt++}},return:function(){Xt=!0}};$t[Qt]=function(){return this},Array.from($t,(function(){throw 2}))}catch(t){}var tn,nn,en,rn=L("species"),on=ht("document","documentElement"),cn=ht("navigator","userAgent")||"",un=/(iphone|ipod|ipad).*applewebkit/i.test(cn),fn=r.location,an=r.setImmediate,sn=r.clearImmediate,ln=r.process,pn=r.MessageChannel,vn=r.Dispatch,hn=0,dn={},yn="onreadystatechange",gn=function(t){if(dn.hasOwnProperty(t)){var n=dn[t];delete dn[t],n()}},mn=function(t){return function(){gn(t)}},bn=function(t){gn(t.data)},wn=function(t){r.postMessage(t+"",fn.protocol+"//"+fn.host)};an&&sn||(an=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return dn[++hn]=function(){("function"==typeof t?t:Function(t)).apply(void 0,n)},tn(hn),hn},sn=function(t){delete dn[t]},"process"==$(ln)?tn=function(t){ln.nextTick(mn(t))}:vn&&vn.now?tn=function(t){vn.now(mn(t))}:pn&&!un?(en=(nn=new pn).port2,nn.port1.onmessage=bn,tn=Bt(en.postMessage,en,1)):!r.addEventListener||"function"!=typeof postMessage||r.importScripts||o(wn)||"file:"===fn.protocol?tn=yn in a("script")?function(t){on.appendChild(a("script")).onreadystatechange=function(){on.removeChild(this),gn(t)}}:function(t){setTimeout(mn(t),0)}:(tn=wn,r.addEventListener("message",bn,!1)));var jn,Sn,On,En,Tn,Pn,xn,Mn,kn={set:an,clear:sn},In=lt.f,Ln=kn.set,An=r.MutationObserver||r.WebKitMutationObserver,Cn=r.process,Fn=r.Promise,Nn="process"==$(Cn),Dn=In(r,"queueMicrotask"),_n=Dn&&Dn.value;_n||(jn=function(){var t,n;for(Nn&&(t=Cn.domain)&&t.exit();Sn;){n=Sn.fn,Sn=Sn.next;try{n()}catch(t){throw Sn?En():On=void 0,t}}On=void 0,t&&t.enter()},Nn?En=function(){Cn.nextTick(jn)}:An&&!un?(Tn=!0,Pn=document.createTextNode(""),new An(jn).observe(Pn,{characterData:!0}),En=function(){Pn.data=Tn=!Tn}):Fn&&Fn.resolve?(xn=Fn.resolve(void 0),Mn=xn.then,En=function(){Mn.call(xn,jn)}):En=function(){Ln.call(r,jn)});var zn,qn,Hn=_n||function(t){var n={fn:t,next:void 0};On&&(On.next=n),Sn||(Sn=n,En()),On=n},Rn=function(t){var n,e;this.promise=new t((function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r})),this.resolve=Wt(n),this.reject=Wt(e)},Wn={f:function(t){return new Rn(t)}},Gn=function(t,n){if(l(t),c(n)&&n.constructor===t)return n;var e=Wn.f(t);return(0,e.resolve)(n),e.promise},Kn=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}},Un=r.process,Bn=Un&&Un.versions,Vn=Bn&&Bn.v8;Vn?qn=(zn=Vn.split("."))[0]+zn[1]:cn&&(!(zn=cn.match(/Edge\/(\d+)/))||zn[1]>=74)&&(zn=cn.match(/Chrome\/(\d+)/))&&(qn=zn[1]);var Yn,Jn,Qn,Xn,Zn,$n,te,ne=qn&&+qn,ee=kn.set,re=L("species"),oe="Promise",ie=Q.get,ce=Q.set,ue=Q.getterFor(oe),fe=zt,ae=r.TypeError,se=r.document,le=r.process,pe=ht("fetch"),ve=Wn.f,he=ve,de="process"==$(le),ye=!!(se&&se.createEvent&&r.dispatchEvent),ge="unhandledrejection",me=Nt(oe,(function(){if(!(q(fe)!==String(fe))){if(66===ne)return!0;if(!de&&"function"!=typeof PromiseRejectionEvent)return!0}if(ne>=51&&/native code/.test(fe))return!1;var t=fe.resolve(1),n=function(t){t((function(){}),(function(){}))};return(t.constructor={})[re]=n,!(t.then((function(){}))instanceof n)})),be=me||!function(t,n){if(!n&&!Xt)return!1;var e=!1;try{var r={};r[Qt]=function(){return{next:function(){return{done:e=!0}}}},t(r)}catch(t){}return e}((function(t){fe.all(t).catch((function(){}))})),we=function(t){var n;return!(!c(t)||"function"!=typeof(n=t.then))&&n},je=function(t,n,e){if(!n.notified){n.notified=!0;var r=n.reactions;Hn((function(){for(var o=n.value,i=1==n.state,c=0;r.length>c;){var u,f,a,s=r[c++],l=i?s.ok:s.fail,p=s.resolve,v=s.reject,h=s.domain;try{l?(i||(2===n.rejection&&Te(t,n),n.rejection=1),!0===l?u=o:(h&&h.enter(),u=l(o),h&&(h.exit(),a=!0)),u===s.promise?v(ae("Promise-chain cycle")):(f=we(u))?f.call(u,p,v):p(u)):v(o)}catch(t){h&&!a&&h.exit(),v(t)}}n.reactions=[],n.notified=!1,e&&!n.rejection&&Oe(t,n)}))}},Se=function(t,n,e){var o,i;ye?((o=se.createEvent("Event")).promise=n,o.reason=e,o.initEvent(t,!1,!0),r.dispatchEvent(o)):o={promise:n,reason:e},(i=r["on"+t])?i(o):t===ge&&function(t,n){var e=r.console;e&&e.error&&(1===arguments.length?e.error(t):e.error(t,n))}("Unhandled promise rejection",e)},Oe=function(t,n){ee.call(r,(function(){var e,r=n.value;if(Ee(n)&&(e=Kn((function(){de?le.emit("unhandledRejection",r,t):Se(ge,t,r)})),n.rejection=de||Ee(n)?2:1,e.error))throw e.value}))},Ee=function(t){return 1!==t.rejection&&!t.parent},Te=function(t,n){ee.call(r,(function(){de?le.emit("rejectionHandled",t):Se("rejectionhandled",t,n.value)}))},Pe=function(t,n,e,r){return function(o){t(n,e,o,r)}},xe=function(t,n,e,r){n.done||(n.done=!0,r&&(n=r),n.value=e,n.state=2,je(t,n,!0))},Me=function(t,n,e,r){if(!n.done){n.done=!0,r&&(n=r);try{if(t===e)throw ae("Promise can't be resolved itself");var o=we(e);o?Hn((function(){var r={done:!1};try{o.call(e,Pe(Me,t,r,n),Pe(xe,t,r,n))}catch(e){xe(t,r,e,n)}})):(n.value=e,n.state=1,je(t,n,!1))}catch(e){xe(t,{done:!1},e,n)}}};me&&(fe=function(t){!function(t,n,e){if(!(t instanceof n))throw TypeError("Incorrect "+(e?e+" ":"")+"invocation")}(this,fe,oe),Wt(t),Yn.call(this);var n=ie(this);try{t(Pe(Me,this,n),Pe(xe,this,n))}catch(t){xe(this,n,t)}},(Yn=function(t){ce(this,{type:oe,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=function(t,n,e){for(var r in n)X(t,r,n[r],e);return t}(fe.prototype,{then:function(t,n){var e,r,o,i=ue(this),c=ve((e=fe,void 0===(o=l(this).constructor)||null==(r=l(o)[rn])?e:Wt(r)));return c.ok="function"!=typeof t||t,c.fail="function"==typeof n&&n,c.domain=de?le.domain:void 0,i.parent=!0,i.reactions.push(c),0!=i.state&&je(this,i,!1),c.promise},catch:function(t){return this.then(void 0,t)}}),Jn=function(){var t=new Yn,n=ie(t);this.promise=t,this.resolve=Pe(Me,t,n),this.reject=Pe(xe,t,n)},Wn.f=ve=function(t){return t===fe||t===Qn?new Jn(t):he(t)},"function"==typeof zt&&(Xn=zt.prototype.then,X(zt.prototype,"then",(function(t,n){var e=this;return new fe((function(t,n){Xn.call(e,t,n)})).then(t,n)}),{unsafe:!0}),"function"==typeof pe&&_t({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return Gn(fe,pe.apply(r,arguments))}}))),_t({global:!0,wrap:!0,forced:me},{Promise:fe}),$n=oe,te=!1,(Zn=fe)&&!S(Zn=te?Zn:Zn.prototype,Ht)&&qt(Zn,Ht,{configurable:!0,value:$n}),function(t){var n=ht(t),e=h.f;i&&n&&!n[Rt]&&e(n,Rt,{configurable:!0,get:function(){return this}})}(oe),Qn=ht(oe),_t({target:oe,stat:!0,forced:me},{reject:function(t){var n=ve(this);return n.reject.call(void 0,t),n.promise}}),_t({target:oe,stat:!0,forced:me},{resolve:function(t){return Gn(this,t)}}),_t({target:oe,stat:!0,forced:be},{all:function(t){var n=this,e=ve(n),r=e.resolve,o=e.reject,i=Kn((function(){var e=Wt(n.resolve),i=[],c=0,u=1;Jt(t,(function(t){var f=c++,a=!1;i.push(void 0),u++,e.call(n,t).then((function(t){a||(a=!0,i[f]=t,--u||r(i))}),o)})),--u||r(i)}));return i.error&&o(i.value),e.promise},race:function(t){var n=this,e=ve(n),r=e.reject,o=Kn((function(){var o=Wt(n.resolve);Jt(t,(function(t){o.call(n,t).then(e.resolve,r)}))}));return o.error&&r(o.value),e.promise}});var ke="./images/icons.min.svg";fetch(ke).then((function(t){return t.text()})).then((function(t){var n=document.createElement("div");n.classList.add("visuallyHidden"),n.innerHTML=t,document.body.appendChild(n)})).catch((function(t){console.log("svg file not found:",ke)}))}));