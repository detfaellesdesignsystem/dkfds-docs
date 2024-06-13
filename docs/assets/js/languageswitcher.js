document.addEventListener("DOMContentLoaded",(function(){!function(){if(document.getElementsByTagName("body")[0].classList.contains("page-language-switcher")){var e=window.location.search;if(""!==e&&-1!==e.indexOf("lang=")){var t=e.replace("?lang=","");if("da"!==t){var a=document.getElementsByClassName("language-switcher")[0].getElementsByTagName("ul")[0],l=a.querySelector("li:first-of-type a");l.removeChild(l.getElementsByTagName("svg")[0]),a.querySelector("li:first-of-type a").removeAttribute("aria-label");var r=a.querySelector('a[lang="'+t+'"]'),s="http://www.w3.org/2000/svg",n="http://www.w3.org/1999/xlink",i=document.createElementNS(s,"svg");i.classList.add("icon-svg"),i.setAttribute("focusable","false"),i.setAttribute("aria-hidden","true");var o=document.createElementNS(s,"use");switch(o.setAttributeNS(n,"href","#done"),i.appendChild(o),r.prepend(i),a.prepend(r.parentNode),t){case"en-GB":a.setAttribute("aria-label","Choose language"),r.setAttribute("aria-label","Current language: English"),document.getElementsByTagName("body")[0].classList.contains("page-language-switcher-tooltip")&&(a.querySelector('a[lang="en-GB"]').removeAttribute("data-tooltip"),a.querySelector('a[lang="en-GB"]').classList.remove("js-tooltip"),a.querySelector('a[lang="da"]').classList.add("js-tooltip"),a.querySelector('a[lang="da"]').setAttribute("data-tooltip","Danish"),a.querySelector('a[lang="en-GB"]').setAttribute("data-tooltip","English"),a.querySelector('a[lang="de"]').setAttribute("data-tooltip","German"),a.querySelector('a[lang="pl"]').setAttribute("data-tooltip","Polish"));break;case"de":a.setAttribute("aria-label","Sprache wählen"),r.setAttribute("aria-label","Aktuelle Sprache: Deutsch"),document.getElementsByTagName("body")[0].classList.contains("page-language-switcher-tooltip")&&(a.querySelector('a[lang="de"]').removeAttribute("data-tooltip"),a.querySelector('a[lang="de"]').classList.remove("js-tooltip"),a.querySelector('a[lang="da"]').classList.add("js-tooltip"),a.querySelector('a[lang="da"]').setAttribute("data-tooltip","Dänisch"),a.querySelector('a[lang="en-GB"]').setAttribute("data-tooltip","Englisch"),a.querySelector('a[lang="pl"]').setAttribute("data-tooltip","Polieren"));break;case"pl":a.setAttribute("aria-label","Wybierz język"),r.setAttribute("aria-label","Aktualny język: polski"),document.getElementsByTagName("body")[0].classList.contains("page-language-switcher-tooltip")&&(a.querySelector('a[lang="pl"]').removeAttribute("data-tooltip"),a.querySelector('a[lang="pl"]').classList.remove("js-tooltip"),a.querySelector('a[lang="da"]').classList.add("js-tooltip"),a.querySelector('a[lang="da"]').setAttribute("data-tooltip","Duński"),a.querySelector('a[lang="en-GB"]').setAttribute("data-tooltip","Angielski"),a.querySelector('a[lang="de"]').setAttribute("data-tooltip","Niemiecki"))}}}}else if(document.getElementsByTagName("body")[0].classList.contains("page-header-switch-language")){var u=window.location.search;if(""!==u&&-1!==u.indexOf("lang=")){var g=u.replace("?lang=",""),c=document.getElementsByClassName("select-language-button")[0],d=document.getElementsByClassName("select-language-list")[0].getElementsByClassName("overflow-list")[0],m=document.getElementsByClassName("language-switcher-mobile")[0].getElementsByTagName("UL")[0],y=d.getElementsByTagName("LI"),b=y[0],T=y[1],L=y[2],p=y[3],A='<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#language"></use></svg>',h='<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#done"></use></svg>';switch(g){case"en-GB":c.innerHTML=A+"English",b.getElementsByTagName("A")[0].removeAttribute("aria-label"),T.getElementsByTagName("A")[0].setAttribute("aria-label","Current language: English"),d.innerHTML=T.outerHTML+b.outerHTML+L.outerHTML+p.outerHTML;var M=T;M.getElementsByTagName("A")[0].innerHTML=h+"English",m.innerHTML=M.outerHTML+b.outerHTML+L.outerHTML+p.outerHTML;break;case"de":c.innerHTML=A+"Deutsch",b.getElementsByTagName("A")[0].removeAttribute("aria-label"),L.getElementsByTagName("A")[0].setAttribute("aria-label","Aktuelle Sprache: Deutsch"),d.innerHTML=L.outerHTML+b.outerHTML+T.outerHTML+p.outerHTML;var H=L;H.getElementsByTagName("A")[0].innerHTML=h+"Deutsch",m.innerHTML=H.outerHTML+b.outerHTML+T.outerHTML+p.outerHTML;break;case"pl":c.innerHTML=A+"Polski",b.getElementsByTagName("A")[0].removeAttribute("aria-label"),p.getElementsByTagName("A")[0].setAttribute("aria-label","Aktualny język: polski"),d.innerHTML=p.outerHTML+b.outerHTML+T.outerHTML+L.outerHTML;var v=p;v.getElementsByTagName("A")[0].innerHTML=h+"Polski",m.innerHTML=v.outerHTML+b.outerHTML+T.outerHTML+L.outerHTML}}}}()}));