/*!
 * Draggable 3.2.4
 * https://greensock.com
 * 
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(t){"use strict";function u(t,e){if(t.parentNode&&(d||y(t))){var n=X(t),o=n?n.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",r=n?e?"rect":"g":"div",i=2!==e?0:100,a=3===e?100:0,l="position:absolute;display:block;pointer-events:none;",s=d.createElementNS?d.createElementNS(o.replace(/^https/,"http"),r):d.createElement(r);return e&&(n?(f=f||u(t),s.setAttribute("width",.01),s.setAttribute("height",.01),s.setAttribute("transform","translate("+i+","+a+")"),f.appendChild(s)):(h||((h=u(t)).style.cssText=l),s.style.cssText=l+"width:1px;height:1px;top:"+a+"px;left:"+i+"px",h.appendChild(s))),s}throw"Need document and parent."}function w(t,e,n,o,r,i,a){return t.a=e,t.b=n,t.c=o,t.d=r,t.e=i,t.f=a,t}var d,p,r,i,h,f,g,x,e,m="transform",v=m+"Origin",y=function _setDoc(t){var e=t.ownerDocument||t;!(m in t.style)&&"msTransform"in t.style&&(v=(m="msTransform")+"Origin");for(;e.parentNode&&(e=e.parentNode););if(p=window,g=new ht,e){r=(d=e).documentElement,i=e.body;var n=e.createElement("div"),o=e.createElement("div");i.appendChild(n),n.appendChild(o),n.style.position="static",n.style[m]="translate3d(0,0,1px)",x=o.offsetParent!==n,i.removeChild(n)}return e},b=[],D=[],E=function _getDocScrollTop(){return p.pageYOffset||d.scrollTop||r.scrollTop||i.scrollTop||0},M=function _getDocScrollLeft(){return p.pageXOffset||d.scrollLeft||r.scrollLeft||i.scrollLeft||0},X=function _svgOwner(t){return t.ownerSVGElement||("svg"===(t.tagName+"").toLowerCase()?t:null)},Y=function _isFixed(t){return"fixed"===p.getComputedStyle(t).position||((t=t.parentNode)&&1===t.nodeType?_isFixed(t):void 0)},L=function _placeSiblings(t,e){var n,o,r,i,a,l=X(t),s=t===l,c=l?b:D;if(t===p)return t;if(c.length||c.push(u(t,1),u(t,2),u(t,3)),n=l?f:h,l)r=s?{x:0,y:0}:t.getBBox(),a=(o=t.transform?t.transform.baseVal:{}).numberOfItems?(i=(o=o.consolidate().matrix).a*r.x+o.c*r.y,o.b*r.x+o.d*r.y):(o=g,i=r.x,r.y),e&&"g"===t.tagName.toLowerCase()&&(i=a=0),n.setAttribute("transform","matrix("+o.a+","+o.b+","+o.c+","+o.d+","+(o.e+i)+","+(o.f+a)+")"),(s?l:t.parentNode).appendChild(n);else{if(i=a=0,x)for(o=t.offsetParent,r=t;(r=r&&r.parentNode)&&r!==o&&r.parentNode;)4<(p.getComputedStyle(r)[m]+"").length&&(i=r.offsetLeft,a=r.offsetTop,r=0);(r=n.style).top=t.offsetTop-a+"px",r.left=t.offsetLeft-i+"px",o=p.getComputedStyle(t),r[m]=o[m],r[v]=o[v],r.position="fixed"===o.position?"fixed":"absolute",t.parentNode.appendChild(n)}return n},ht=((e=Matrix2D.prototype).inverse=function inverse(){var t=this.a,e=this.b,n=this.c,o=this.d,r=this.e,i=this.f,a=t*o-e*n;return w(this,o/a,-e/a,-n/a,t/a,(n*i-o*r)/a,-(t*i-e*r)/a)},e.multiply=function multiply(t){var e=this.a,n=this.b,o=this.c,r=this.d,i=this.e,a=this.f,l=t.a,s=t.c,c=t.b,u=t.d,d=t.e,p=t.f;return w(this,l*e+c*o,l*n+c*r,s*e+u*o,s*n+u*r,i+d*e+p*o,a+d*n+p*r)},e.clone=function clone(){return new Matrix2D(this.a,this.b,this.c,this.d,this.e,this.f)},e.equals=function equals(t){var e=this.a,n=this.b,o=this.c,r=this.d,i=this.e,a=this.f;return e===t.a&&n===t.b&&o===t.c&&r===t.d&&i===t.e&&a===t.f},e.apply=function apply(t,e){void 0===e&&(e={});var n=t.x,o=t.y,r=this.a,i=this.b,a=this.c,l=this.d,s=this.e,c=this.f;return e.x=n*r+o*a+s||0,e.y=n*i+o*l+c||0,e},Matrix2D);function Matrix2D(t,e,n,o,r,i){void 0===t&&(t=1),void 0===e&&(e=0),void 0===n&&(n=0),void 0===o&&(o=1),void 0===r&&(r=0),void 0===i&&(i=0),w(this,t,e,n,o,r,i)}function getGlobalMatrix(t,e,n){if(!t||!t.parentNode||(d||y(t)).documentElement===t)return new ht;var o=X(t)?b:D,r=L(t,n),i=o[0].getBoundingClientRect(),a=o[1].getBoundingClientRect(),l=o[2].getBoundingClientRect(),s=r.parentNode,c=Y(t),u=new ht((a.left-i.left)/100,(a.top-i.top)/100,(l.left-i.left)/100,(l.top-i.top)/100,i.left+(c?0:M()),i.top+(c?0:E()));return s.removeChild(r),e?u.inverse():u}function R(){return"undefined"!=typeof window}function S(){return ft||R()&&(ft=window.gsap)&&ft.registerPlugin&&ft}function T(t){return"function"==typeof t}function U(t){return"object"==typeof t}function V(t){return void 0===t}function W(){return!1}function Z(t){return Math.round(1e4*t)/1e4}function _(t,e){var n=xt.createElementNS?xt.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):xt.createElement(t);return n.style?n:xt.createElement(t)}function la(t,e){var n,o={};for(n in t)o[n]=e?t[n]*e:t[n];return o}function na(){return Ct.forEach(function(t){return t()})}function pa(){return!Ct.length&&ft.ticker.remove(na)}function qa(t){for(var e=Ct.length;e--;)Ct[e]===t&&Ct.splice(e,1);ft.to(pa,{overwrite:!0,delay:15,duration:0,onComplete:pa,data:"_draggable"})}function sa(t,e,n,o){if(t.addEventListener){var r=bt[e];o=o||(k?{passive:!1}:null),t.addEventListener(r||e,n,o),r&&e!==r&&"pointer"!==r.substr(0,7)&&t.addEventListener(e,n,o)}}function ta(t,e,n){if(t.removeEventListener){var o=bt[e];t.removeEventListener(o||e,n),o&&e!==o&&"pointer"!==o.substr(0,7)&&t.removeEventListener(e,n)}}function ua(t){t.preventDefault&&(t.preventDefault(),t.preventManipulation&&t.preventManipulation())}function wa(t){Dt=t.touches&&Tt<t.touches.length,ta(t.target,"touchend",wa)}function xa(t){Dt=t.touches&&Tt<t.touches.length,sa(t.target,"touchend",wa)}function ya(t){return gt.pageYOffset||t.scrollTop||t.documentElement.scrollTop||t.body.scrollTop||0}function za(t){return gt.pageXOffset||t.scrollLeft||t.documentElement.scrollLeft||t.body.scrollLeft||0}function Aa(t,e){sa(t,"scroll",e),Ft(t.parentNode)||Aa(t.parentNode,e)}function Ba(t,e){ta(t,"scroll",e),Ft(t.parentNode)||Ba(t.parentNode,e)}function Da(t,e){var n="x"===e?"Width":"Height",o="scroll"+n,r="client"+n;return Math.max(0,Ft(t)?Math.max(mt[o],a[o])-(gt["inner"+n]||mt[r]||a[r]):t[o]-t[r])}function Ea(t){var e=Da(t,"x"),n=Da(t,"y");Ft(t)?t=It:Ea(t.parentNode),t._gsMaxScrollX=e,t._gsMaxScrollY=n,t._gsScrollX=t.scrollLeft||0,t._gsScrollY=t.scrollTop||0}function Fa(t,e,n){var o=t.style;o&&(V(o[e])&&(e=c(e,t)||e),null==n?o.removeProperty&&o.removeProperty(e.replace(/([A-Z])/g,"-$1").toLowerCase()):o[e]=n)}function Ga(t){return gt.getComputedStyle(t instanceof Element?t:t.host||(t.parentNode||{}).host||t)}function Ia(t){if(t===gt)return O.left=O.top=0,O.width=O.right=mt.clientWidth||t.innerWidth||a.clientWidth||0,O.height=O.bottom=(t.innerHeight||0)-20<mt.clientHeight?mt.clientHeight:t.innerHeight||a.clientHeight||0,O;var e=t.ownerDocument||xt,n=V(t.pageX)?t.nodeType||V(t.left)||V(t.top)?yt(t)[0].getBoundingClientRect():t:{left:t.pageX-za(e),top:t.pageY-ya(e),right:t.pageX-za(e)+1,bottom:t.pageY-ya(e)+1};return V(n.right)&&!V(n.width)?(n.right=n.left+n.width,n.bottom=n.top+n.height):V(n.width)&&(n={width:n.right-n.left,height:n.bottom-n.top,right:n.right,left:n.left,bottom:n.bottom,top:n.top}),n}function Ja(t,e,n){var o,r=t.vars,i=r[n],a=t._listeners[e];return T(i)&&(o=i.apply(r.callbackScope||t,r[n+"Params"]||[t.pointerEvent])),a&&!1===t.dispatchEvent(e)&&(o=!1),o}function Ka(t,e){var n,o,r,i=yt(t)[0];return i.nodeType||i===gt?A(i,e):V(t.left)?{left:o=t.min||t.minX||t.minRotation||0,top:n=t.min||t.minY||0,width:(t.max||t.maxX||t.maxRotation||0)-o,height:(t.max||t.maxY||0)-n}:(r={x:0,y:0},{left:t.left-r.x,top:t.top-r.y,width:t.width,height:t.height})}function Na(r,i,t,e,a,n){var o,l,s,c={};if(i)if(1!==a&&i instanceof Array){if(c.end=o=[],s=i.length,U(i[0]))for(l=0;l<s;l++)o[l]=la(i[l],a);else for(l=0;l<s;l++)o[l]=i[l]*a;t+=1.1,e-=1.1}else T(i)?c.end=function(t){var e,n,o=i.call(r,t);if(1!==a)if(U(o)){for(n in e={},o)e[n]=o[n]*a;o=e}else o*=a;return o}:c.end=i;return!t&&0!==t||(c.max=t),!e&&0!==e||(c.min=e),n&&(c.velocity=0),c}function Oa(t){var e;return!(!t||!t.getAttribute||t===a)&&(!("true"!==(e=t.getAttribute("data-clickable"))&&("false"===e||!t.onclick&&!o.test(t.nodeName+"")&&"true"!==t.getAttribute("contentEditable")))||Oa(t.parentNode))}function Pa(t,e){for(var n,o=t.length;o--;)(n=t[o]).ondragstart=n.onselectstart=e?null:W,ft.set(n,{lazy:!0,userSelect:e?"text":"none"})}function Ta(i,r){i=ft.utils.toArray(i)[0],r=r||{};var a,l,s,t,c,u,d=document.createElement("div"),p=d.style,e=i.firstChild,h=0,f=0,g=i.scrollTop,x=i.scrollLeft,m=i.scrollWidth,v=i.scrollHeight,y=0,w=0,b=0;P&&!1!==r.force3D?(c="translate3d(",u="px,0px)"):C&&(c="translate(",u="px)"),this.scrollTop=function(t,e){if(!arguments.length)return-this.top();this.top(-t,e)},this.scrollLeft=function(t,e){if(!arguments.length)return-this.left();this.left(-t,e)},this.left=function(t,e){if(!arguments.length)return-(i.scrollLeft+f);var n=i.scrollLeft-x,o=f;if((2<n||n<-2)&&!e)return x=i.scrollLeft,ft.killTweensOf(this,{left:1,scrollLeft:1}),this.left(-x),void(r.onKill&&r.onKill());(t=-t)<0?(f=t-.5|0,t=0):w<t?(f=t-w|0,t=w):f=0,(f||o)&&(this._skip||(p[C]=c+-f+"px,"+-h+u),0<=f+y&&(p.paddingRight=f+y+"px")),i.scrollLeft=0|t,x=i.scrollLeft},this.top=function(t,e){if(!arguments.length)return-(i.scrollTop+h);var n=i.scrollTop-g,o=h;if((2<n||n<-2)&&!e)return g=i.scrollTop,ft.killTweensOf(this,{top:1,scrollTop:1}),this.top(-g),void(r.onKill&&r.onKill());(t=-t)<0?(h=t-.5|0,t=0):b<t?(h=t-b|0,t=b):h=0,(h||o)&&(this._skip||(p[C]=c+-f+"px,"+-h+u)),i.scrollTop=0|t,g=i.scrollTop},this.maxScrollTop=function(){return b},this.maxScrollLeft=function(){return w},this.disable=function(){for(e=d.firstChild;e;)t=e.nextSibling,i.appendChild(e),e=t;i===d.parentNode&&i.removeChild(d)},this.enable=function(){if((e=i.firstChild)!==d){for(;e;)t=e.nextSibling,d.appendChild(e),e=t;i.appendChild(d),this.calibrate()}},this.calibrate=function(t){var e,n,o,r=i.clientWidth===a;g=i.scrollTop,x=i.scrollLeft,r&&i.clientHeight===l&&d.offsetHeight===s&&m===i.scrollWidth&&v===i.scrollHeight&&!t||((h||f)&&(n=this.left(),o=this.top(),this.left(-i.scrollLeft),this.top(-i.scrollTop)),e=Ga(i),r&&!t||(p.display="block",p.width="auto",p.paddingRight="0px",(y=Math.max(0,i.scrollWidth-i.clientWidth))&&(y+=parseFloat(e.paddingLeft)+(N?parseFloat(e.paddingRight):0))),p.display="inline-block",p.position="relative",p.overflow="visible",p.verticalAlign="top",p.boxSizing="content-box",p.width="100%",p.paddingRight=y+"px",N&&(p.paddingBottom=e.paddingBottom),a=i.clientWidth,l=i.clientHeight,m=i.scrollWidth,v=i.scrollHeight,w=i.scrollWidth-a,b=i.scrollHeight-l,s=d.offsetHeight,p.display="block",(n||o)&&(this.left(n),this.top(o)))},this.content=d,this.element=i,this._skip=!1,this.enable()}function Ua(t){var e,n,o,r,i;R()&&document.body&&(gt=window,xt=document,mt=xt.documentElement,a=xt.body,l=_("div"),St=!!window.PointerEvent,(vt=_("div")).style.cssText="visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab",Xt="grab"===vt.style.cursor?"grab":"move",Et=gt.navigator&&-1!==gt.navigator.userAgent.toLowerCase().indexOf("android"),wt="ontouchstart"in mt&&"orientation"in gt,n=_("div"),o=_("div"),r=o.style,i=a,r.display="inline-block",r.position="relative",n.style.cssText=o.innerHTML="width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden",n.appendChild(o),i.appendChild(n),e=o.offsetHeight+18>n.scrollHeight,i.removeChild(n),N=e,bt=function(t){for(var e=t.split(","),n=(V(l.onpointerdown)?V(l.onmspointerdown)?t:"MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel":"pointerdown,pointermove,pointerup,pointercancel").split(","),o={},r=4;-1<--r;)o[e[r]]=n[r],o[n[r]]=e[r];try{mt.addEventListener("test",null,Object.defineProperty({},"passive",{get:function get(){k=1}}))}catch(t){}return o}("touchstart,touchmove,touchend,touchcancel"),sa(xt,"touchcancel",W),sa(gt,"touchmove",W),a&&a.addEventListener("touchstart",W),sa(xt,"contextmenu",function(){for(var t in Rt)Rt[t].isPressed&&Rt[t].endDrag()}),ft=s=S()),ft?(Mt=ft.plugins.inertia,c=ft.utils.checkPrefix,C=c(C),Yt=c(Yt),yt=ft.utils.toArray,P=!!c("perspective")):t&&console.warn("Please gsap.registerPlugin(Draggable)")}var ft,gt,xt,mt,a,l,vt,s,c,yt,k,wt,bt,Tt,Dt,Et,Mt,Xt,St,P,N,n,C="transform",Yt="transformOrigin",_t=Array.isArray,Lt=180/Math.PI,kt=1e20,Pt=new ht,Nt=Date.now||function(){return(new Date).getTime()},Ct=[],Rt={},Ot=0,o=/^(?:a|input|textarea|button|select)$/i,At=0,Bt={},It={},Ft=function _isRoot(t){return!(t&&t!==mt&&9!==t.nodeType&&t!==xt.body&&t!==gt&&t.nodeType&&t.parentNode)},O={},Wt={},A=function _getElementBounds(t,e){e=yt(e)[0];var n,o,r,i,a,l,s,c,u,d,p,h,f,g,x=t.getBBox&&t.ownerSVGElement,m=t.ownerDocument||xt;if(t===gt)r=ya(m),o=(n=za(m))+(m.documentElement.clientWidth||t.innerWidth||m.body.clientWidth||0),i=r+((t.innerHeight||0)-20<m.documentElement.clientHeight?m.documentElement.clientHeight:t.innerHeight||m.body.clientHeight||0);else{if(e===gt||V(e))return t.getBoundingClientRect();n=r=0,x?(p=(d=t.getBBox()).width,h=d.height):(t.viewBox&&(d=t.viewBox.baseVal)&&(n=d.x||0,r=d.y||0,p=d.width,h=d.height),p||(f=Ga(t),p=(parseFloat(f.width)||t.clientWidth||0)+parseFloat(f.borderLeftWidth)+parseFloat(f.borderRightWidth),h=(parseFloat(f.height)||t.clientHeight||0)+parseFloat(f.borderTopWidth)+parseFloat(f.borderBottomWidth))),o=p,i=h}return t===e?{left:n,top:r,width:o-n,height:i-r}:(l=(a=getGlobalMatrix(e,!0).multiply(getGlobalMatrix(t))).apply({x:n,y:r}),s=a.apply({x:o,y:r}),c=a.apply({x:o,y:i}),u=a.apply({x:n,y:i}),n=Math.min(l.x,s.x,c.x,u.x),r=Math.min(l.y,s.y,c.y,u.y),{left:n+((g=e.parentNode||{}).scrollLeft||0),top:r+(g.scrollTop||0),width:Math.max(l.x,s.x,c.x,u.x)-n,height:Math.max(l.y,s.y,c.y,u.y)-r})},B=((n=EventDispatcher.prototype).addEventListener=function addEventListener(t,e){var n=this._listeners[t]||(this._listeners[t]=[]);~n.indexOf(e)||n.push(e)},n.removeEventListener=function removeEventListener(t,e){var n=this._listeners[t],o=n&&n.indexOf(e)||-1;-1<o&&n.splice(o,1)},n.dispatchEvent=function dispatchEvent(e){var n,o=this;return(this._listeners[e]||[]).forEach(function(t){return!1===t.call(o,{type:e,target:o.target})&&(n=!1)}),n},EventDispatcher);function EventDispatcher(t){this._listeners={},this.target=t||this}var Ht,I=(function _inheritsLoose(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}(Draggable,Ht=B),Draggable.register=function register(t){ft=t,Ua()},Draggable.create=function create(t,e){return s||Ua(!0),yt(t).map(function(t){return new Draggable(t,e)})},Draggable.get=function get(t){return Rt[(yt(t)[0]||{})._gsDragID]},Draggable.timeSinceDrag=function timeSinceDrag(){return(Nt()-At)/1e3},Draggable.hitTest=function hitTest(t,e,n){if(t===e)return!1;var o,r,i,a=Ia(t),l=Ia(e),s=a.top,c=a.left,u=a.right,d=a.bottom,p=a.width,h=a.height,f=l.left>u||l.right<c||l.top>d||l.bottom<s;return f||!n?!f:(i=-1!==(n+"").indexOf("%"),n=parseFloat(n)||0,(o={left:Math.max(c,l.left),top:Math.max(s,l.top)}).width=Math.min(u,l.right)-o.left,o.height=Math.min(d,l.bottom)-o.top,!(o.width<0||o.height<0)&&(i?p*h*(n*=.01)<=(r=o.width*o.height)||r>=l.width*l.height*n:o.width>n&&o.height>n))},Draggable);function Draggable(h,d){var t;t=Ht.call(this)||this,ft||Ua(1),h=yt(h)[0],Mt=Mt||ft.plugins.inertia,t.vars=d=la(d||{}),t.target=h,t.x=t.y=t.rotation=0,t.dragResistance=parseFloat(d.dragResistance)||0,t.edgeResistance=isNaN(d.edgeResistance)?1:parseFloat(d.edgeResistance)||0,t.lockAxis=d.lockAxis,t.autoScroll=d.autoScroll||0,t.lockedAxis=null,t.allowEventDefault=!!d.allowEventDefault,ft.getProperty(h,"x");function qg(t,e){return parseFloat(at.get(h,t,e))}function Wg(t){if(!(K.isPressed&&t.which<2))return ua(t),t.stopPropagation(),!1;K.endDrag()}function Xg(t){if(K.autoScroll&&K.isDragging&&(Q||k)){var e,n,o,r,i,a,l,s,c=h,u=15*K.autoScroll;for(Q=!1,It.scrollTop=null!=gt.pageYOffset?gt.pageYOffset:null!=st.documentElement.scrollTop?st.documentElement.scrollTop:st.body.scrollTop,It.scrollLeft=null!=gt.pageXOffset?gt.pageXOffset:null!=st.documentElement.scrollLeft?st.documentElement.scrollLeft:st.body.scrollLeft,r=K.pointerX-It.scrollLeft,i=K.pointerY-It.scrollTop;c&&!n;)e=(n=Ft(c.parentNode))?It:c.parentNode,o=n?{bottom:Math.max(mt.clientHeight,gt.innerHeight||0),right:Math.max(mt.clientWidth,gt.innerWidth||0),left:0,top:0}:e.getBoundingClientRect(),a=l=0,z&&((s=e._gsMaxScrollY-e.scrollTop)<0?l=s:i>o.bottom-nt&&s?(Q=!0,l=Math.min(s,u*(1-Math.max(0,o.bottom-i)/nt)|0)):i<o.top+tt&&e.scrollTop&&(Q=!0,l=-Math.min(e.scrollTop,u*(1-Math.max(0,i-o.top)/tt)|0)),l&&(e.scrollTop+=l)),G&&((s=e._gsMaxScrollX-e.scrollLeft)<0?a=s:r>o.right-et&&s?(Q=!0,a=Math.min(s,u*(1-Math.max(0,o.right-r)/et)|0)):r<o.left+ot&&e.scrollLeft&&(Q=!0,a=-Math.min(e.scrollLeft,u*(1-Math.max(0,r-o.left)/ot)|0)),a&&(e.scrollLeft+=a)),n&&(a||l)&&(gt.scrollTo(e.scrollLeft,e.scrollTop),dt(K.pointerX+a,K.pointerY+l)),c=e}if(k){var d=K.x,p=K.y;H?(K.deltaX=d-parseFloat(at.rotation),K.rotation=d,at.rotation=d+"deg",at.renderTransform(1,at)):f?(z&&(K.deltaY=p-f.top(),f.top(p)),G&&(K.deltaX=d-f.left(),f.left(d))):W?(z&&(K.deltaY=p-parseFloat(at.y),at.y=p+"px"),G&&(K.deltaX=d-parseFloat(at.x),at.x=d+"px"),at.renderTransform(1,at)):(z&&(K.deltaY=p-parseFloat(h.style.top||0),h.style.top=p+"px"),G&&(K.deltaY=d-parseFloat(h.style.left||0),h.style.left=d+"px")),!g||t||I||(!(I=!0)===Ja(K,"drag","onDrag")&&(G&&(K.x-=K.deltaX),z&&(K.y-=K.deltaY),Xg(!0)),I=!1)}k=!1}function Yg(t,e){var n,o,r=K.x,i=K.y;h._gsap||(at=ft.core.getCache(h)),W?(K.x=parseFloat(at.x),K.y=parseFloat(at.y)):H?K.x=K.rotation=parseFloat(at.rotation):f?(K.y=f.top(),K.x=f.left()):(K.y=parseInt(h.style.top||(o=Ga(h))&&o.top,10)||0,K.x=parseInt(h.style.left||(o||{}).left,10)||0),(P||N||C)&&!e&&(K.isDragging||K.isThrowing)&&(C&&(Bt.x=K.x,Bt.y=K.y,(n=C(Bt)).x!==K.x&&(K.x=n.x,k=!0),n.y!==K.y&&(K.y=n.y,k=!0)),P&&(n=P(K.x))!==K.x&&(K.x=n,H&&(K.rotation=n),k=!0),N&&((n=N(K.y))!==K.y&&(K.y=n),k=!0)),k&&Xg(!0),t||(K.deltaX=K.x-r,K.deltaY=K.y-i,Ja(K,"throwupdate","onThrowUpdate"))}function Zg(a,l,s,n){return null==l&&(l=-kt),null==s&&(s=kt),T(a)?function(t){var e=K.isPressed?1-K.edgeResistance:1;return a.call(K,s<t?s+(t-s)*e:t<l?l+(t-l)*e:t)*n}:_t(a)?function(t){for(var e,n,o=a.length,r=0,i=kt;-1<--o;)(n=(e=a[o])-t)<0&&(n=-n),n<i&&l<=e&&e<=s&&(r=o,i=n);return a[r]}:isNaN(a)?function(t){return t}:function(){return a*n}}function _g(){var t,e,n,o;M=!1,f?(f.calibrate(),K.minX=S=-f.maxScrollLeft(),K.minY=_=-f.maxScrollTop(),K.maxX=X=K.maxY=Y=0,M=!0):d.bounds&&(t=Ka(d.bounds,h.parentNode),H?(K.minX=S=t.left,K.maxX=X=t.left+t.width,K.minY=_=K.maxY=Y=0):V(d.bounds.maxX)&&V(d.bounds.maxY)?(e=Ka(h,h.parentNode),K.minX=S=Math.round(qg(u,"px")+t.left-e.left),K.minY=_=Math.round(qg(J,"px")+t.top-e.top),K.maxX=X=Math.round(S+(t.width-e.width)),K.maxY=Y=Math.round(_+(t.height-e.height))):(t=d.bounds,K.minX=S=t.minX,K.minY=_=t.minY,K.maxX=X=t.maxX,K.maxY=Y=t.maxY),X<S&&(K.minX=X,K.maxX=X=S,S=K.minX),Y<_&&(K.minY=Y,K.maxY=Y=_,_=K.minY),H&&(K.minRotation=S,K.maxRotation=X),M=!0),d.liveSnap&&(n=!0===d.liveSnap?d.snap||{}:d.liveSnap,o=_t(n)||T(n),H?(P=Zg(o?n:n.rotation,S,X,1),N=null):n.points?C=function buildPointSnapFunc(s,l,c,u,d,p,h){return p=p&&p<kt?p*p:kt,T(s)?function(t){var e,n,o,r=K.isPressed?1-K.edgeResistance:1,i=t.x,a=t.y;return t.x=i=c<i?c+(i-c)*r:i<l?l+(i-l)*r:i,t.y=a=d<a?d+(a-d)*r:a<u?u+(a-u)*r:a,(e=s.call(K,t))!==t&&(t.x=e.x,t.y=e.y),1!==h&&(t.x*=h,t.y*=h),p<kt&&(n=t.x-i,o=t.y-a,p<n*n+o*o&&(t.x=i,t.y=a)),t}:_t(s)?function(t){for(var e,n,o,r,i=s.length,a=0,l=kt;-1<--i;)(r=(e=(o=s[i]).x-t.x)*e+(n=o.y-t.y)*n)<l&&(a=i,l=r);return l<=p?s[a]:t}:function(t){return t}}(o?n:n.points,S,X,_,Y,n.radius,f?-1:1):(G&&(P=Zg(o?n:n.x||n.left||n.scrollLeft,S,X,f?-1:1)),z&&(N=Zg(o?n:n.y||n.top||n.scrollTop,_,Y,f?-1:1))))}function ah(){K.isThrowing=!1,Ja(K,"throwcomplete","onThrowComplete")}function bh(){K.isThrowing=!1}function ch(t,e){var n,o,r,i;t&&Mt?(!0===t&&(n=d.snap||d.liveSnap||{},o=_t(n)||T(n),t={resistance:(d.throwResistance||d.resistance||1e3)/(H?10:1)},H?t.rotation=Na(K,o?n:n.rotation,X,S,1,e):(G&&(t[u]=Na(K,o?n:n.points||n.x||n.left,X,S,f?-1:1,e||"x"===K.lockedAxis)),z&&(t[J]=Na(K,o?n:n.points||n.y||n.top,Y,_,f?-1:1,e||"y"===K.lockedAxis)),(n.points||_t(n)&&U(n[0]))&&(t.linkedProps=u+","+J,t.radius=n.radius))),K.isThrowing=!0,i=isNaN(d.overshootTolerance)?1===d.edgeResistance?0:1-K.edgeResistance+.2:d.overshootTolerance,t.duration||(t.duration={max:Math.max(d.minDuration||0,"maxDuration"in d?d.maxDuration:2),min:isNaN(d.minDuration)?0===i||U(t)&&1e3<t.resistance?0:.5:d.minDuration,overshoot:i}),K.tween=r=ft.to(f||h,{inertia:t,data:"_draggable",onComplete:ah,onInterrupt:bh,onUpdate:d.fastMode?Ja:Yg,onUpdateParams:d.fastMode?[K,"onthrowupdate","onThrowUpdate"]:n&&n.radius?[!1,!0]:[]}),d.fastMode||(f&&(f._skip=!0),r.render(r.duration(),!0,!0),Yg(!0,!0),K.endX=K.x,K.endY=K.y,H&&(K.endRotation=K.x),r.play(0),Yg(!0,!0),f&&(f._skip=!1))):M&&K.applyBounds()}function dh(t){var e,n=R;R=getGlobalMatrix(h.parentNode,!0),t&&K.isPressed&&!R.equals(n||new ht)&&(e=n.inverse().apply({x:w,y:b}),R.apply(e,e),w=e.x,b=e.y),R.equals(Pt)&&(R=null)}function eh(){var t,e,n,o=1-K.edgeResistance;dh(!1),R&&(Wt.x=K.pointerX,Wt.y=K.pointerY,R.apply(Wt,Wt),w=Wt.x,b=Wt.y),k&&(dt(K.pointerX,K.pointerY),Xg(!0)),f?(_g(),E=f.top(),D=f.left()):(ct()?(Yg(!0,!0),_g()):K.applyBounds(),H?(t=h.ownerSVGElement?[at.xOrigin-h.getBBox().x,at.yOrigin-h.getBBox().y]:(Ga(h)[Yt]||"0 0").split(" "),L=K.rotationOrigin=getGlobalMatrix(h).apply({x:parseFloat(t[0])||0,y:parseFloat(t[1])||0}),Yg(!0,!0),e=K.pointerX-L.x,n=L.y-K.pointerY,lt&&(e-=za(st),n+=ya(st)),D=K.x,E=K.y=Math.atan2(n,e)*Lt):(E=qg(J,"px"),D=qg(u,"px"))),M&&o&&(X<D?D=X+(D-X)/o:D<S&&(D=S-(S-D)/o),H||(Y<E?E=Y+(E-Y)/o:E<_&&(E=_-(_-E)/o))),K.startX=D,K.startY=E}function gh(){!vt.parentNode||ct()||K.isDragging||vt.parentNode.removeChild(vt)}function hh(t,e){var n;if(p&&!K.isPressed&&t&&("mousedown"!==t.type&&"pointerdown"!==t.type||e||!(Nt()-it<30)||!bt[K.pointerEvent.type])){if(O=ct(),K.pointerEvent=t,bt[t.type]?(y=~t.type.indexOf("touch")?t.currentTarget||t.target:st,sa(y,"touchend",pt),sa(y,"touchmove",ut),sa(y,"touchcancel",pt),sa(st,"touchstart",xa)):(y=null,sa(st,"mousemove",ut)),B=null,St&&y||(sa(st,"mouseup",pt),t&&t.target&&sa(t.target,"mouseup",pt)),v=rt.call(K,t.target)&&!1===d.dragClickables&&!e)return sa(t.target,"change",pt),Ja(K,"pressInit","onPressInit"),Ja(K,"press","onPress"),void Pa(j,!0);if((A=!(!y||G==z||!1===K.vars.allowNativeTouchScrolling||K.vars.allowContextMenu&&t&&(t.ctrlKey||2<t.which))&&(G?"y":"x"))||K.allowEventDefault||(ua(t),sa(gt,"touchforcechange",ua)),t.changedTouches?(t=x=t.changedTouches[0],m=t.identifier):t.pointerId?m=t.pointerId:x=m=null,Tt++,function _addToRenderQueue(t){Ct.push(t),1===Ct.length&&ft.ticker.add(na)}(Xg),b=K.pointerY=t.pageY,w=K.pointerX=t.pageX,Ja(K,"pressInit","onPressInit"),(A||K.autoScroll)&&Ea(h.parentNode),!h.parentNode||!K.autoScroll||f||H||!h.parentNode._gsMaxScrollX||vt.parentNode||h.getBBox||(vt.style.width=h.parentNode.scrollWidth+"px",h.parentNode.appendChild(vt)),eh(),K.tween&&K.tween.kill(),K.isThrowing=!1,ft.killTweensOf(f||h,o,!0),f&&ft.killTweensOf(h,{scrollTo:1},!0),K.tween=K.lockedAxis=null,!d.zIndexBoost&&(H||f||!1===d.zIndexBoost)||(h.style.zIndex=Draggable.zIndex++),K.isPressed=!0,g=!(!d.onDrag&&!K._listeners.drag),s=!(!d.onMove&&!K._listeners.move),!H&&(!1!==d.cursor||d.activeCursor))for(n=j.length;-1<--n;)ft.set(j[n],{cursor:d.activeCursor||d.cursor||("grab"===Xt?"grabbing":Xt)});Ja(K,"press","onPress")}}function lh(t){if(t&&K.isDragging&&!f){var e=t.target||h.parentNode,n=e.scrollLeft-e._gsScrollX,o=e.scrollTop-e._gsScrollY;(n||o)&&(R?(w-=n*R.a+o*R.c,b-=o*R.d+n*R.b):(w-=n,b-=o),e._gsScrollX+=n,e._gsScrollY+=o,dt(K.pointerX,K.pointerY))}}function mh(t){var e=Nt(),n=e-it<40,o=e-$<40,r=n&&F===it,i=K.pointerEvent&&K.pointerEvent.defaultPrevented,a=n&&c===it,l=t.isTrusted||null==t.isTrusted&&n&&r;if((r||o&&!1!==K.vars.suppressClickOnDrag)&&t.stopImmediatePropagation&&t.stopImmediatePropagation(),n&&(!K.pointerEvent||!K.pointerEvent.defaultPrevented)&&(!r||l&&!a))return l&&r&&(c=it),void(F=it);(K.isPressed||o||n)&&(l&&t.detail&&n&&!i||ua(t))}function nh(t){return R?{x:t.x*R.a+t.y*R.c+R.e,y:t.x*R.b+t.y*R.d+R.f}:{x:t.x,y:t.y}}var p,f,w,b,D,E,M,g,s,X,S,Y,_,x,m,L,k,e,P,N,C,v,y,R,O,A,B,I,F,c,n=(d.type||"x,y").toLowerCase(),W=~n.indexOf("x")||~n.indexOf("y"),H=-1!==n.indexOf("rotation"),u=H?"rotation":W?"x":"left",J=W?"y":"top",G=!(!~n.indexOf("x")&&!~n.indexOf("left")&&"scroll"!==n),z=!(!~n.indexOf("y")&&!~n.indexOf("top")&&"scroll"!==n),q=d.minimumMovement||2,K=function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t),j=yt(d.trigger||d.handle||h),o={},$=0,Q=!1,tt=d.autoScrollMarginTop||40,et=d.autoScrollMarginRight||40,nt=d.autoScrollMarginBottom||40,ot=d.autoScrollMarginLeft||40,rt=d.clickableTest||Oa,it=0,at=h._gsap||ft.core.getCache(h),lt=function _isFixed(t){return"fixed"===Ga(t).position||((t=t.parentNode)&&1===t.nodeType?_isFixed(t):void 0)}(h),st=h.ownerDocument||xt,ct=function isTweening(){return K.tween&&K.tween.isActive()},ut=function onMove(t){var e,n,o,r,i,a,l=t;if(p&&!Dt&&K.isPressed&&t){if(e=(K.pointerEvent=t).changedTouches){if((t=e[0])!==x&&t.identifier!==m){for(r=e.length;-1<--r&&(t=e[r]).identifier!==m;);if(r<0)return}}else if(t.pointerId&&m&&t.pointerId!==m)return;y&&A&&!B&&(Wt.x=t.pageX,Wt.y=t.pageY,R&&R.apply(Wt,Wt),n=Wt.x,o=Wt.y,((i=Math.abs(n-w))!==(a=Math.abs(o-b))&&(q<i||q<a)||Et&&A===B)&&(B=a<i&&G?"x":"y",A&&B!==A&&sa(gt,"touchforcechange",ua),!1!==K.vars.lockAxisOnTouchScroll&&(K.lockedAxis="x"===B?"y":"x",T(K.vars.onLockAxis)&&K.vars.onLockAxis.call(K,l)),Et&&A===B))?pt(l):(K.allowEventDefault||A&&(!B||A===B)||!1===l.cancelable||ua(l),K.autoScroll&&(Q=!0),dt(t.pageX-(lt&&H?za(st):0),t.pageY-(lt&&H?ya(st):0),s))}},dt=function setPointerPosition(t,e,n){var o,r,i,a,l,s,c=1-K.dragResistance,u=1-K.edgeResistance,d=K.pointerX,p=K.pointerY,h=E,f=K.x,g=K.y,x=K.endX,m=K.endY,v=K.endRotation,y=k;K.pointerX=t,K.pointerY=e,H?(a=Math.atan2(L.y-e,t-L.x)*Lt,180<(l=K.y-a)?(E-=360,K.y=a):l<-180&&(E+=360,K.y=a),i=K.x!==D||Math.abs(E-a)>q?(K.y=a,D+(E-a)*c):D):(R&&(s=t*R.a+e*R.c+R.e,e=t*R.b+e*R.d+R.f,t=s),(r=e-b)<q&&-q<r&&(r=0),(o=t-w)<q&&-q<o&&(o=0),(K.lockAxis||K.lockedAxis)&&(o||r)&&((s=K.lockedAxis)||(K.lockedAxis=s=G&&Math.abs(o)>Math.abs(r)?"y":z?"x":null,s&&T(K.vars.onLockAxis)&&K.vars.onLockAxis.call(K,K.pointerEvent)),"y"===s?r=0:"x"===s&&(o=0)),i=Z(D+o*c),a=Z(E+r*c)),(P||N||C)&&(K.x!==i||K.y!==a&&!H)?(C&&(Bt.x=i,Bt.y=a,s=C(Bt),i=Z(s.x),a=Z(s.y)),P&&(i=Z(P(i))),N&&(a=Z(N(a)))):M&&(X<i?i=X+Math.round((i-X)*u):i<S&&(i=S+Math.round((i-S)*u)),H||(Y<a?a=Math.round(Y+(a-Y)*u):a<_&&(a=Math.round(_+(a-_)*u)))),K.x===i&&(K.y===a||H)||(H?(K.endRotation=K.x=K.endX=i,k=!0):(z&&(K.y=K.endY=a,k=!0),G&&(K.x=K.endX=i,k=!0)),n&&!1===Ja(K,"move","onMove")?(K.pointerX=d,K.pointerY=p,E=h,K.x=f,K.y=g,K.endX=x,K.endY=m,K.endRotation=v,k=y):!K.isDragging&&K.isPressed&&(K.isDragging=!0,Ja(K,"dragstart","onDragStart")))},pt=function onRelease(t,e){if(p&&K.isPressed&&(!t||null==m||e||!(t.pointerId&&t.pointerId!==m||t.changedTouches&&!function _hasTouchID(t,e){for(var n=t.length;n--;)if(t[n].identifier===e)return!0}(t.changedTouches,m)))){K.isPressed=!1;var n,o,r,i,a,l=t,s=K.isDragging,c=K.vars.allowContextMenu&&t&&(t.ctrlKey||2<t.which),u=ft.delayedCall(.001,gh);if(y?(ta(y,"touchend",onRelease),ta(y,"touchmove",ut),ta(y,"touchcancel",onRelease),ta(st,"touchstart",xa)):ta(st,"mousemove",ut),ta(gt,"touchforcechange",ua),St&&y||(ta(st,"mouseup",onRelease),t&&t.target&&ta(t.target,"mouseup",onRelease)),k=!1,v&&!c)return t&&(ta(t.target,"change",onRelease),K.pointerEvent=l),Pa(j,!1),Ja(K,"release","onRelease"),Ja(K,"click","onClick"),void(v=!1);if(qa(Xg),!H)for(o=j.length;-1<--o;)Fa(j[o],"cursor",d.cursor||(!1!==d.cursor?Xt:null));if(s&&($=At=Nt(),K.isDragging=!1),Tt--,t){if((n=t.changedTouches)&&(t=n[0])!==x&&t.identifier!==m){for(o=n.length;-1<--o&&(t=n[o]).identifier!==m;);if(o<0)return}K.pointerEvent=l,K.pointerX=t.pageX,K.pointerY=t.pageY}return c&&l?(ua(l),Ja(K,"release","onRelease")):l&&!s?(O&&(d.snap||d.bounds)&&ch(d.inertia||d.throwProps),Ja(K,"release","onRelease"),Et&&"touchmove"===l.type||-1!==l.type.indexOf("cancel")||(Ja(K,"click","onClick"),Nt()-it<300&&Ja(K,"doubleclick","onDoubleClick"),i=l.target||h,it=Nt(),a=function syntheticClick(){it===F||!K.enabled()||K.isPressed||l.defaultPrevented||(i.click?i.click():st.createEvent&&((r=st.createEvent("MouseEvents")).initMouseEvent("click",!0,!0,gt,1,K.pointerEvent.screenX,K.pointerEvent.screenY,K.pointerX,K.pointerY,!1,!1,!1,!1,0,null),i.dispatchEvent(r)))},Et||l.defaultPrevented||ft.delayedCall(.05,a))):(ch(d.inertia||d.throwProps),K.allowEventDefault||!l||!1===d.dragClickables&&rt.call(K,l.target)||!s||A&&(!B||A!==B)||!1===l.cancelable||ua(l),Ja(K,"release","onRelease")),ct()&&u.duration(K.tween.duration()),s&&Ja(K,"dragend","onDragEnd"),!0}};return(e=Draggable.get(h))&&e.kill(),t.startDrag=function(t,e){var n,o,r,i;hh(t||K.pointerEvent,!0),e&&!K.hitTest(t||K.pointerEvent)&&(n=Ia(t||K.pointerEvent),o=Ia(h),r=nh({x:n.left+n.width/2,y:n.top+n.height/2}),i=nh({x:o.left+o.width/2,y:o.top+o.height/2}),w-=r.x-i.x,b-=r.y-i.y),K.isDragging||(K.isDragging=!0,Ja(K,"dragstart","onDragStart"))},t.drag=ut,t.endDrag=function(t){return pt(t||K.pointerEvent,!0)},t.timeSinceDrag=function(){return K.isDragging?0:(Nt()-$)/1e3},t.timeSinceClick=function(){return(Nt()-it)/1e3},t.hitTest=function(t,e){return Draggable.hitTest(K.target,t,e)},t.getDirection=function(t,e){var n,o,r,i,a,l,s="velocity"===t&&Mt?t:U(t)&&!H?"element":"start";return"element"===s&&(a=Ia(K.target),l=Ia(t)),n="start"===s?K.x-D:"velocity"===s?Mt.getVelocity(h,u):a.left+a.width/2-(l.left+l.width/2),H?n<0?"counter-clockwise":"clockwise":(e=e||2,o="start"===s?K.y-E:"velocity"===s?Mt.getVelocity(h,J):a.top+a.height/2-(l.top+l.height/2),i=(r=Math.abs(n/o))<1/e?"":n<0?"left":"right",r<e&&(""!==i&&(i+="-"),i+=o<0?"up":"down"),i)},t.applyBounds=function(t,e){var n,o,r,i,a,l;if(t&&d.bounds!==t)return d.bounds=t,K.update(!0,e);if(Yg(!0),_g(),M&&!ct()){if(n=K.x,o=K.y,X<n?n=X:n<S&&(n=S),Y<o?o=Y:o<_&&(o=_),(K.x!==n||K.y!==o)&&(r=!0,K.x=K.endX=n,H?K.endRotation=n:K.y=K.endY=o,Xg(k=!0),K.autoScroll&&!K.isDragging))for(Ea(h.parentNode),i=h,It.scrollTop=null!=gt.pageYOffset?gt.pageYOffset:null!=st.documentElement.scrollTop?st.documentElement.scrollTop:st.body.scrollTop,It.scrollLeft=null!=gt.pageXOffset?gt.pageXOffset:null!=st.documentElement.scrollLeft?st.documentElement.scrollLeft:st.body.scrollLeft;i&&!l;)a=(l=Ft(i.parentNode))?It:i.parentNode,z&&a.scrollTop>a._gsMaxScrollY&&(a.scrollTop=a._gsMaxScrollY),G&&a.scrollLeft>a._gsMaxScrollX&&(a.scrollLeft=a._gsMaxScrollX),i=a;K.isThrowing&&(r||K.endX>X||K.endX<S||K.endY>Y||K.endY<_)&&ch(d.inertia||d.throwProps,r)}return K},t.update=function(t,e,n){var o=K.x,r=K.y;return dh(!e),t?K.applyBounds():(k&&n&&Xg(!0),Yg(!0)),e&&(dt(K.pointerX,K.pointerY),k&&Xg(!0)),K.isPressed&&!e&&(G&&.01<Math.abs(o-K.x)||z&&.01<Math.abs(r-K.y)&&!H)&&eh(),K.autoScroll&&(Ea(h.parentNode),Q=K.isDragging,Xg(!0),Ba(h,lh),Aa(h,lh)),K},t.enable=function(t){var e,n,o,r={lazy:!0};if(H||!1===d.cursor||(r.cursor=d.cursor||Xt),ft.utils.checkPrefix("touchCallout")&&(r.touchCallout="none"),r.touchAction=G==z?"none":d.allowNativeTouchScrolling||d.allowEventDefault?"manipulation":G?"pan-y":"pan-x","soft"!==t){for(n=j.length;-1<--n;)o=j[n],St||sa(o,"mousedown",hh),sa(o,"touchstart",hh),sa(o,"click",mh,!0),ft.set(o,r),o.getBBox&&o.ownerSVGElement&&ft.set(o.ownerSVGElement,{touchAction:G==z?"none":d.allowNativeTouchScrolling||d.allowEventDefault?"manipulation":G?"pan-y":"pan-x"}),d.allowContextMenu||sa(o,"contextmenu",Wg);Pa(j,!1)}return Aa(h,lh),p=!0,Mt&&"soft"!==t&&Mt.track(f||h,W?"x,y":H?"rotation":"top,left"),h._gsDragID=e="d"+Ot++,Rt[e]=K,f&&(f.enable(),f.element._gsDragID=e),(d.bounds||H)&&eh(),d.bounds&&K.applyBounds(),K},t.disable=function(t){var e,n,o=K.isDragging;if(!H)for(e=j.length;-1<--e;)Fa(j[e],"cursor",null);if("soft"!==t){for(e=j.length;-1<--e;)n=j[e],Fa(n,"touchCallout",null),Fa(n,"touchAction",null),ta(n,"mousedown",hh),ta(n,"touchstart",hh),ta(n,"click",mh),ta(n,"contextmenu",Wg);Pa(j,!0),y&&(ta(y,"touchcancel",pt),ta(y,"touchend",pt),ta(y,"touchmove",ut)),ta(st,"mouseup",pt),ta(st,"mousemove",ut)}return Ba(h,lh),p=!1,Mt&&"soft"!==t&&Mt.untrack(f||h,W?"x,y":H?"rotation":"top,left"),f&&f.disable(),qa(Xg),K.isDragging=K.isPressed=v=!1,o&&Ja(K,"dragend","onDragEnd"),K},t.enabled=function(t,e){return arguments.length?t?K.enable(e):K.disable(e):p},t.kill=function(){return K.isThrowing=!1,K.tween&&K.tween.kill(),K.disable(),ft.set(j,{clearProps:"userSelect"}),delete Rt[h._gsDragID],K},~n.indexOf("scroll")&&(f=t.scrollProxy=new Ta(h,function _extend(t,e){for(var n in e)n in t||(t[n]=e[n]);return t}({onKill:function onKill(){K.isPressed&&pt(null)}},d)),h.style.overflowY=z&&!wt?"auto":"hidden",h.style.overflowX=G&&!wt?"auto":"hidden",h=f.content),H?o.rotation=1:(G&&(o[u]=1),z&&(o[J]=1)),at.force3D=!("force3D"in d)||d.force3D,t.enable(),t}!function _setDefaults(t,e){for(var n in e)n in t||(t[n]=e[n])}(I.prototype,{pointerX:0,pointerY:0,startX:0,startY:0,deltaX:0,deltaY:0,isDragging:!1,isPressed:!1}),I.zIndex=1e3,I.version="3.2.4",S()&&ft.registerPlugin(I),t.Draggable=I,t.default=I;if (typeof(window)==="undefined"||window!==t){Object.defineProperty(t,"__esModule",{value:!0})} else {delete t.default}});
