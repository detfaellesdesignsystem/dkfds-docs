document.addEventListener("DOMContentLoaded",(function(){!function(){if(null!==document.getElementById("btn-demo-return")){for(var e=window.location.search,t=document.getElementsByTagName("a"),n=0;n<t.length;n++){var r=t[n],o=r.getAttribute("href");""!==o&&!o.startsWith("#")&&-1===o.indexOf("javascript")&&o.length>5&&-1!==window.location.href.indexOf("?r=/eksempler/selvbetjeningsloesninger/")&&r.setAttribute("href",o+e)}for(var i=document.getElementsByTagName("form"),a=0;a<i.length;a++){var l=i[a],d=l.getAttribute("action");null!==d&&""!==d&&"#"!==d&&d.length>5&&-1!==window.location.href.indexOf("?r=/eksempler/selvbetjeningsloesninger/")&&l.setAttribute("action",d+e)}var s=new URLSearchParams(e).get("r");null!==s&&document.getElementById("btn-demo-return").setAttribute("href",s.replace("%23","#"))}}()}));