(()=>{function e(e){"true"===e.getAttribute("aria-checked")?e.setAttribute("aria-checked","false"):e.setAttribute("aria-checked","true")}document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelectorAll(".toggle-switch");null!==document.getElementById("completed-switch")&&null!==document.getElementById("yearold-switch")&&(document.getElementById("completed-switch").addEventListener("click",(function(){e(this)}),!1),document.getElementById("yearold-switch").addEventListener("click",(function(){e(this)}),!1));for(var n=0;n<t.length;n++)t[n].addEventListener("click",(function(){e(this)}),!1)}))})();