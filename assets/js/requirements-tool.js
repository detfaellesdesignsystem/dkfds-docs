!function(e){function t(t){for(var r,i,l=t[0],u=t[1],s=t[2],c=0,m=[];c<l.length;c++)i=l[c],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&m.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(d&&d(t);m.length;)m.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,l=1;l<n.length;l++){var u=n[l];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={2:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/assets/";var l=window.webpackJsonp=window.webpackJsonp||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var d=u;a.push([18,0]),n()}({18:function(e,t,n){e.exports=n(19)},19:function(e,t,n){"use strict";n.r(t);var r=n(1),o=!1,a={},i=window.location.origin+"/krav-vaerktoej",l=window.location.origin+"/komigang/krav/",u=[{id:"Q100",path:"/anvendes-af-virksomheder/",status:!0},{id:"Q200",path:"/anvendes-af-borgere/",status:!0},{id:"Q300",path:"/obligatorisk-for-borgere/",status:!1,trueIf:[{question:"Q200",value:!0}]},{id:"Q400",path:"/besoegende-om-aaret/",status:!1,trueIf:[{question:"Q100",value:!0},{question:"Q300",value:!0}]},{id:"Q500",path:"/en-eller-flere-loesninger-brugertest/",status:!1,trueIf:[{question:"Q400",value:!0}]},{id:"Q600",path:"/bestaaet-faellesoffentlige-brugertest/",status:!1,trueIf:[{question:"Q500",value:!1}]},{id:"Q700",path:"/transaktioner-per-aar/",status:!1,trueIf:[{question:"Q100",value:!0},{question:"Q300",value:!0}]},{id:"Q000",path:"/resultat/",status:!0}],s=[""];s[1]={title:"Tidlig brugerinddragelse",krav:!1},s[2]={title:"Sprog",krav:!1,trueIf:[{question:"Q100",value:!0},{question:"Q300",value:!0}]},s[3]={title:"Konventioner for flow og funktionalitet",krav:!1},s[4]={title:"Feltvalidering",krav:!1,trueIf:[{question:"Q100",value:!0},{question:"Q300",value:!0}]},s[5]={title:"Personalisering",krav:!1},s[6]={title:"Understøttelse af styresystemer og browsere",krav:!1,trueIf:[{question:"Q100",value:!0},{question:"Q300",value:!0}]},s[7]={title:"Understøttelse af skærmstørrelser",krav:!1,trueIf:[{question:"Q100",value:!0},{question:"Q300",value:!0}]},s[8]={title:"Bestå den fællesoffentlige brugertest",krav:!1,trueIf:[{question:"Q600",value:!1}]},s[9]={title:"Indsamling af viden om brugernes anvendelse af digitale løsninger",krav:!1,trueIf:[{question:"Q700",value:!0}]},s[10]={title:"Anvendelse af infrastrukturkomponenter og andre komponenter",krav:!1,trueIf:[{question:"Q100",value:!0},{question:"Q300",value:!0}]},s[11]={title:"Genbrug af datakilder",krav:!1,trueIf:[{question:"Q100",value:!0},{question:"Q300",value:!0}]},s[12]={title:"Efterlevelse af aftalte arkitekturstandarder",krav:!1,trueIf:[{question:"Q100",value:!0},{question:"Q300",value:!0}]},s[13]={title:"Krav til løsninger, der skal på borger.dk og Virk",krav:!1,trueIf:[{question:"Q100",value:!0},{question:"Q300",value:!0}]},document.addEventListener("DOMContentLoaded",(function(){new r.Navigation,new r.Modal(document.getElementById("modal-contact")).init();var e=document.getElementById("modal-print");null!==e&&new r.Modal(e).init();for(var t=document.getElementsByClassName("js-tooltip"),n=0;n<t.length;n++)new r.Tooltip(t[n]);if(document.getElementsByTagName("body")[0].classList.contains("page-resultat")){var i=document.getElementById("modal-print"),l=document.getElementById("modal-print").classList.contains("is-open");new MutationObserver((function(e){for(var t in e)if("class"==e[t].attributeName){var n=e[t].target.classList.contains("is-open");!0===l&&!1===n?(l=n,"true"===document.getElementById("print-title").getAttribute("data-print")&&(document.getElementById("print-title").setAttribute("data-print","false"),window.print())):l=n}})).observe(i,{attributes:!0})}var u=document.getElementById("back-link");null!==u&&u.addEventListener("click",b);var s=document.getElementById("back-link-mobile");null!==s&&s.addEventListener("click",b),a=y(),f(),w(),g(),L(),B(),d(),c();var m=document.getElementById("close-tool");null!==m&&m.addEventListener("click",N);var v=document.getElementsByClassName("close-tool");0!==v.length&&v[0].addEventListener("click",N),window.onbeforeunload=function(e){var t=!0;if(o)t=!1;else{var n=document.activeElement;void 0===n.href||"Redigér"!==n.innerText&&"Tilbage"!==n.innerText&&"https://github.com/detfaellesdesignsystem/dkfds-components/issues/108"!==n.getAttribute("href")&&-1===n.getAttribute("href").indexOf("mailto:")||(t=!1)}if(t)return(e=e||window.event)&&(e.returnValue="Sure?"),t=!0,"Sure?"}}));var d=function(){var e=document.getElementById("print-result-solution");null!==e&&e.addEventListener("click",(function(){var e=document.getElementById("solution-name-input").value;""!==e?(document.getElementById("print-title").innerText='Fælles aftalte krav som "'+e+'" skal efterleve',document.getElementById("print-title").setAttribute("data-print","true"),document.getElementById("result-container").getElementsByTagName("h1")[0].classList.add("d-print-none"),document.getElementById("print-title").classList.add("d-print-block"),printModal.hide()):(document.getElementById("print-title").setAttribute("data-print","true"),document.getElementById("result-container").getElementsByTagName("h1")[0].classList.remove("d-print-none"),document.getElementById("print-title").classList.remove("d-print-block"),printModal.hide())}))},c=function(){var e=document.getElementById("start-over");null!==e&&e.addEventListener("click",T)},m=function(e){return u.findIndex((function(t){return t.id===e}))},f=function(){for(var e=0;e<u.length;e++)if(void 0!==u[e].trueIf){for(var t=!1,n=0;n<u[e].trueIf.length;n++){var r=u[e].trueIf[n];!0===u[m(r.question)].status&&void 0!==a[r.question]&&a[r.question]===r.value&&(t=!0)}u[e].status=t}},g=function(){var e=document.getElementsByTagName("form");if(e.length>0){var t=e[0].id.split("-")[1];e[0].addEventListener("submit",(function(e){e.preventDefault(),v(t)}),!1)}},v=function(e){h()&&(a[e]="1"===document.querySelector('input[name="radio"]:checked').value,f(),I(),E(p(e).path))},p=function(e){for(var t=null,n=m(e)+1;n<u.length;n++)if(!0===u[n].status){t=u[n];break}return t},y=function(){var e=localStorage.getItem("reqTool");return null===e?{}:JSON.parse(e)},I=function(){!function(){var e={};for(var t in a)!0===u[m(t)].status&&(e[t]=a[t]);a=e}(),localStorage.setItem("reqTool",JSON.stringify(a))},h=function(){if(null===document.querySelector('input[name="radio"]:checked')){return document.getElementsByClassName("form-group")[0].classList.add("form-error"),document.getElementById("error-message").innerText="Vælg venligst Ja eller Nej",document.getElementById("error-message").classList.remove("d-none"),document.getElementById("error-summary").getElementsByClassName("nobullet-list")[0].innerHTML='<li><a href="#radio-yes" class="function-link">Vælg venligst Ja eller Nej</a></li>',document.getElementById("error-summary").classList.remove("d-none"),!1}return document.getElementsByClassName("form-group")[0].classList.remove("form-error"),document.getElementById("error-message").classList.add("d-none"),document.getElementById("error-message").innerText="",document.getElementById("error-summary").getElementsByClassName("nobullet-list")[0].innerHTML="",document.getElementById("error-summary").classList.add("d-none"),!0},E=function(e){o=!0,window.location.href=i+e},b=function(){var e=Q(),t=k(e);E(t.path)},k=function e(t){var n=m(t),r=u[n-1];return!0===r.status?r:e(r.id)},B=function(){var e=function(){var e=[];return u.forEach((function(t){!0===t.status&&"Q000"!==t.id&&void 0===a[t.id]&&(!0,e.push(t))})),e}();if(0===e.length){if(null!==document.querySelector("body.page-resultat")){if(0===Object.getOwnPropertyNames(y()).length)return void(window.location.href=l);for(var t=document.getElementById("summary").getElementsByTagName("tr"),n=0;n<t.length;n++){var r=t[n].id,s=a[r];void 0!==s?(t[n].querySelector(".value").innerText=!0===s?"Ja":"Nej",t[n].classList.remove("d-none")):t[n].classList.add("d-none")}for(var d=document.getElementById("resultat").getElementsByTagName("tr"),c=0;c<d.length;c++){var m=c+1,f=d[c].getElementsByTagName("label")[0];q(m)?(f.innerText="Krav",f.classList.add("badge-warning")):(f.innerText="Anbefaling",f.classList.add("badge-info"))}document.getElementById("result-container").classList.remove("d-none")}}else null!==document.getElementById("error-container")&&(o=!0,document.getElementById("continue-questionnaire-link").setAttribute("href",i+e[0].path),document.getElementById("error-container").classList.remove("d-none"))},q=function(e){if(void 0!==s[e].trueIf)for(var t=0;t<s[e].trueIf.length;t++){if(a[s[e].trueIf[t].question]===s[e].trueIf[t].value)return!0}return!1},w=function(){var e=document.getElementsByTagName("form");if(e.length>0){var t=e[0].id.split("-")[1],n=a[t];void 0!==n&&(!0===n?(document.getElementById("radio-yes").checked=!0,document.getElementById("radio-no").checked=!1):(document.getElementById("radio-yes").checked=!1,document.getElementById("radio-no").checked=!0))}},Q=function(){var e=document.getElementsByTagName("form");return e.length>0&&e[0].id.split("-")[1]},L=function(){!1!==Q()&&!1===u[m(Q())].status&&N()},T=function(){localStorage.removeItem("reqTool"),E(u[0].path)},N=function(){localStorage.removeItem("reqTool"),o=!0,-1===window.location.href.indexOf("krav-vaerktoej/resultat/")&&(o=!1),window.location.href=l}}});