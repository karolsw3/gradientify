!function(){"use strict";var t;function e(){return void 0===this||Object.getPrototypeOf(this)!==e.prototype?new e:this}function n(t,e,n){return e.map((e,i)=>{let r=function(t,e,n){let i=document.createElement("div");return Object.assign(i.style,{backgroundImage:t,opacity:0===e?1:0,transitionDuration:`${n/1e3}s`}),i.classList.add("gradientify-gradient"),i}(e,i,n);return t.append(r),r})}function i(t,e){setInterval(()=>{for(let e=0;e<t.length;e++)"1"===t[e].style.opacity&&(t[e].style.opacity=0,t[++e%t.length].style.opacity=1)},e+40)}e.prototype.gradientifize=function(e,r,o){let s;r.constructor!==Array?function(e){if(t)e(t);else{let n=new XMLHttpRequest;n.overrideMimeType("application/json"),n.open("GET","https://raw.githubusercontent.com/karolsw2/gradientify.js/master/build/presets.json",!0),n.onreadystatechange=function(){4===n.readyState&&200===n.status&&(t=JSON.parse(n.responseText),e(t))},n.send(null)}}(t=>{o=t[r].interval,r=t[r].gradients,i(s=n(e,r,o),o)}):i(s=n(e,r,o),o)},window.Gradientify=e}();