!function(e){function t(t){for(var n,s,l=t[0],d=t[1],o=t[2],u=0,f=[];u<l.length;u++)s=l[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(e[n]=d[n]);for(c&&c(t);f.length;)f.shift()();return i.push.apply(i,o||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,l=1;l<a.length;l++){var d=a[l];0!==r[d]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={1:0},i=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/assets/";var l=window.webpackJsonp=window.webpackJsonp||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var o=0;o<l.length;o++)t(l[o]);var c=d;i.push([164,0]),a()}({164:function(e,t,a){e.exports=a(165)},165:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=(a(79),a(23));window.$=window.jQuery=r.a;var s=a(337),l=(a(105),a(341),a(342),function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var a={lengthMenu:"Viser _MENU_ elementer pr side",zeroRecords:"Der blev fundet intet resultat",info:"Viser sider _PAGE_ af _PAGES_",infoEmpty:"Intet resultat",infoFiltered:"(filtreret fra _MAX_ elementer)",emptyTable:"Ingen data",search:"Filtrer:",Sort:!0,paginate:{first:"Første",last:"Sidste",next:"Næste",previous:"Forrige"}};i.a.init({onShow:function(){document.getElementsByTagName("body")[0].classList.add("modal-active")},onClose:function(){document.getElementsByTagName("body")[0].classList.remove("modal-active")}});r()("#js-datatable-example-basic").DataTable({language:a,responsive:!0,createdRow:function(e,t,a){r()(e).find("td").each((function(e,t){r()(t).hasClass("row-control")||r()(t).attr("tabindex",0)}))},fnDrawCallback:function(e){r()(".dataTables_paginate a[aria-disabled=true]").removeAttr("aria-disabled"),r()(".dataTables_paginate .disabled").attr("aria-disabled","true")}}),r()("#js-datatable-example-ajax").DataTable({language:a,responsive:!0,processing:!0,ajax:{url:"https://jsonplaceholder.typicode.com/users",dataSrc:"",crossDomain:!0},columns:[{data:"name"},{data:"email"},{data:"address.street"},{data:"address.city"},{data:"phone"}],createdRow:function(e,t,a){r()(e).find("td").each((function(e,t){r()(t).hasClass("row-control")||r()(t).attr("tabindex",0)}))},fnDrawCallback:function(e){r()(".dataTables_paginate a[aria-disabled=true]").removeAttr("aria-disabled"),r()(".dataTables_paginate .disabled").attr("aria-disabled","true")}}),r()("#js-datatable-example-selectable").DataTable({language:a,responsive:!0,columnDefs:[{orderable:!1,targets:0,render:function(e,t,a,n){var r="checkbox-"+Math.random().toString(36).substring(7);return"<div class='form-group'><input id='"+r+"' type='checkbox' name='checked' class='form-checkbox'><label for='"+r+"' ></label></div>"}}],order:[[1,"asc"]],createdRow:function(e,t,a){r()(e).find("td").each((function(e,t){r()(t).hasClass("row-control")||r()(t).attr("tabindex",0)}))},fnDrawCallback:function(e){r()(".dataTables_paginate a[aria-disabled=true]").removeAttr("aria-disabled"),r()(".dataTables_paginate .disabled").attr("aria-disabled","true")}});r()("#js-datatable-example-selectable").on("click","input[type='checkbox']",(function(e){e.target.checked?r()(e.target).closest("tr").addClass("selected-row"):r()(e.target).closest("tr").removeClass("selected-row")}));var n=r()("#js-datatable-example-detailsrow").DataTable({language:a,ajax:{url:"https://jsonplaceholder.typicode.com/users",dataSrc:"",crossDomain:!0},rowId:"id",columns:[{className:"details-control",orderable:!1,data:null,defaultContent:"",width:"24px"},{data:"name"},{data:"address.street"},{data:"address.city"},{data:"phone"}],order:[[1,"asc"]],responsive:{details:!1},createdRow:function(e,t,a){r()(e).find("td").each((function(e,t){r()(t).hasClass("row-control")||r()(t).attr("tabindex",0),r()(t).hasClass("details-control")&&r()(t).attr("aria-label","Klik her for at udfolde en række nedenfor med detaljer.")}))},fnDrawCallback:function(e){r()(".dataTables_paginate a[aria-disabled=true]").removeAttr("aria-disabled"),r()(".dataTables_paginate .disabled").attr("aria-disabled","true")}}),l=function(e){var t=r()(e).closest("tr"),a=n.row(t);a.child.isShown()?(a.child.hide(),r()(r()(t).find(".details-control")[0]).attr("aria-expanded",!1),t.removeClass("shown")):(a.child((a.data(),'<div class="details-row-content"><h3 class="mt-0">Overskrift</h3> <div class="table--responsive-scroll">\n        <table class="table table--zebra">\n            <thead>\n                <tr>\n                    <th>Affaldstype</th>\n                    <th>Farvekode</th>\n                    <th>Beskrivelse</th>\n                    <th>Hvor ender det?</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>Dagrenovation</td>\n                    <td>Grøn</td>\n                    <td>Madaffald, samt papir, pap eller plastik der ikke\n                        kan genanvendes, fordi der er madrester eller andet\n                        snask på.</td>\n                    <td>Alt det affald, du smider ud i din primære\n                        skraldespand, som er dagrenovationen, bliver hentet\n                        og kørt på forbrændingen. </td>\n                </tr>\n                <tr>\n                    <td>Bioaffald og kompost</td>\n                    <td>Beige</td>\n                    <td>Alt madaffald uden fødevareemballage.</td>\n                    <td>Bioaffaldet kommes i bionedbrydelige poser, som\n                        bliver komposteret til muld.</td>\n                </tr>\n                <tr>\n                    <td>Glas</td>\n                    <td>Hvid</td>\n                    <td>Alle typer glas og flasker.</td>\n                    <td>De hele vinflasker rengøres og genbruges af\n                        vinhuse, mens glasskårene bliver smeltet om til nyt\n                        glas.</td>\n                </tr>\n                <tr>\n                    <td>Elektronik</td>\n                    <td>Orange</td>\n                    <td>Genstande der har brugt strøm.</td>\n                    <td>Det elektroniske affald bliver typisk kørt til et\n                        demonteringsanlæg, hvor det bliver skilt ad, så de\n                        forskellige dele kan genanvendes separat.</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>'),"child").show(),r()(a.child()[0]).attr("aria-label","Række med detaljer"),r()(r()(t).find(".details-control")[0]).attr("aria-expanded",!0),t.addClass("shown"))};r()("#js-datatable-example-detailsrow").on("click","td.details-control",(function(){l(this)})),r()("#js-datatable-example-detailsrow").keypress((function(e){13!=e.which&&32!=e.which||l(e.target)}));var d=r()("#js-datatable-example-edit").DataTable({language:a,ajax:{url:"https://jsonplaceholder.typicode.com/users",dataSrc:"",crossDomain:!0},rowId:"id",columns:[{data:"name"},{data:"address.street"},{data:"address.city"},{data:"company.name"},{targets:-1,className:"row-control",data:null,orderable:!1,responsivePriority:1,render:function(e,t,a,n){var r="overflow-table-"+a.id;return'<div class="overflow-menu overflow-menu--open-left overflow-menu--hover-bg">\n                                <button class="button-overflow-menu js-dropdown" data-js-target="#'+r+'" aria-haspopup="true" aria-expanded="false">\n                                    <svg class="icon-svg" aria-hidden="true" focusable="false" tabindex="-1"><use xlink:href="#dots-vertical"></use></svg>\n                                </button>\n                                <div class="overflow-menu-inner" id="'+r+'" aria-hidden="true">\n                                    <ul class="overflow-list">\n                                        <li><button class="js-edit-modal-trigger">Rediger <svg class="icon-svg" aria-hidden="true" focusable="false" tabindex="-1"><use xlink:href="#pencil"></use></svg></button></li>\n                                        <li><button class="js-delete-modal-trigger danger-delete">Slet <svg class="icon-svg" aria-hidden="true" focusable="false" tabindex="-1"><use xlink:href="#delete"></use></svg></button></li>\n                                    </ul>\n                                </div>\n                            </div>'}}],createdRow:function(e,t,a){r()(e).find("td").each((function(e,t){r()(t).hasClass("row-control")||r()(t).attr("tabindex",0)}))},order:[[1,"asc"]],responsive:!0,initComplete:function(e,t){r()("#js-datatable-example-edit").find(".js-dropdown").each((function(e){new s(this)}))},fnDrawCallback:function(e){r()(".dataTables_paginate a[aria-disabled=true]").removeAttr("aria-disabled"),r()(".dataTables_paginate .disabled").attr("aria-disabled","true")}}),o=null;r()("#js-datatable-example-edit").on("click",".js-edit-modal-trigger",(function(){o=r()(this).closest("tr");var e=d.row(o).data(),t=d.row(o).id();r()("#edit-row-id").val(t),r()("#edit-navn").val(e.name),r()("#edit-vejnavn").val(e.address.street),r()("#edit-by").val(e.address.city),r()("#edit-firmanavn").val(e.company.name),i.a.show("modal-edit")})),r()("body").on("click",".js-edit-save-trigger",(function(){var e=d.row(o).data();e.name=r()("#edit-navn").val(),e.address.street=r()("#edit-vejnavn").val(),e.address.city=r()("#edit-by").val(),e.company.name=r()("#edit-firmanavn").val(),d.row(o).data(e).draw(),i.a.close("modal-edit")}));var c=null;r()("#js-datatable-example-edit").on("click",".js-delete-modal-trigger",(function(){c=r()(this).closest("tr"),i.a.show("modal-delete")})),r()("body").on("click",".js-delete-trigger",(function(){d.row(c).remove().draw(),i.a.close("modal-delete")}));r()("#js-datatable-example-edit2").DataTable({language:a,ajax:{url:"https://jsonplaceholder.typicode.com/users",dataSrc:"",crossDomain:!0},rowId:"id",columns:[{data:"name"},{data:"address.street"},{data:"address.city"},{data:"company.name"},{targets:-1,className:"row-control",data:null,orderable:!1,responsivePriority:1,render:function(e,t,a,n){return'<button class="button button-unstyled px-3 js-delete-modal-trigger"><svg class="icon-svg" aria-hidden="true" focusable="false" tabindex="-1"><use xlink:href="#delete-outline"></use></svg><span class="sr-only">Slet</span></button>'}}],order:[[1,"asc"]],responsive:!0,createdRow:function(e,t,a){r()(e).find("td").each((function(e,t){r()(t).hasClass("row-control")||r()(t).attr("tabindex",0)}))},fnDrawCallback:function(e){r()(".dataTables_paginate a[aria-disabled=true]").removeAttr("aria-disabled"),r()(".dataTables_paginate .disabled").attr("aria-disabled","true")}});r()("#js-datatable-example-edit2").on("click",".js-delete-modal-trigger",(function(){c=r()(this).closest("tr"),i.a.show("modal-delete")}))});r()(document).ready((function(){new l}))},337:function(e,t,a){"use strict";function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}a(338),a(339);var r=a(340),i="data-js-target",s=function(){function e(t){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.responsiveListCollapseEnabled=!1,this.triggerEl=null,this.targetEl=null,this.init(t),null!==this.triggerEl&&void 0!==this.triggerEl&&null!==this.targetEl&&void 0!==this.targetEl){var a=this;if((this.triggerEl.parentNode.classList.contains("overflow-menu--md-no-responsive")||this.triggerEl.parentNode.classList.contains("overflow-menu--lg-no-responsive"))&&(this.responsiveListCollapseEnabled=!0),document.getElementsByTagName("body")[0].removeEventListener("click",c),document.getElementsByTagName("body")[0].addEventListener("click",c),this.triggerEl.removeEventListener("click",o),this.triggerEl.addEventListener("click",o),this.responsiveListCollapseEnabled){var n=this.triggerEl;if(window.IntersectionObserver)new IntersectionObserver((function(e){e[0].intersectionRatio?"false"===n.getAttribute("aria-expanded")&&a.targetEl.setAttribute("aria-hidden","true"):"true"===a.targetEl.getAttribute("aria-hidden")&&a.targetEl.setAttribute("aria-hidden","false")}),{root:document.body}).observe(n);else u(a.triggerEl)&&"false"===n.getAttribute("aria-expanded")?a.targetEl.setAttribute("aria-hidden","true"):a.targetEl.setAttribute("aria-hidden","false"),window.addEventListener("resize",(function(){u(a.triggerEl)&&"false"===n.getAttribute("aria-expanded")?a.targetEl.setAttribute("aria-hidden","true"):a.targetEl.setAttribute("aria-hidden","false")}))}document.onkeydown=function(e){27===(e=e||window.event).keyCode&&l()}}}var t,a,r;return t=e,(a=[{key:"init",value:function(e){if(this.triggerEl=e,null!==this.triggerEl&&void 0!==this.triggerEl){var t=this.triggerEl.getAttribute(i);if(null!=t){var a=document.getElementById(t.replace("#",""));null!=a&&(this.targetEl=a)}}}}])&&n(t.prototype,a),r&&n(t,r),e}(),l=function(){var e=document.createEvent("Event");e.initEvent("fds.dropdown.close",!0,!0);document.querySelector("body");for(var t=document.getElementsByClassName("overflow-menu"),a=0;a<t.length;a++){var n=t[a],r=n.querySelector(".js-dropdown"),s=n.querySelector("#"+r.getAttribute(i).replace("#",""));null!==s&&null!==r&&u(r)&&(!0===r.getAttribute("aria-expanded")&&r.dispatchEvent(e),r.setAttribute("aria-expanded","false"),s.classList.add("collapsed"),s.setAttribute("aria-hidden","true"))}},d=function(e){var t=e.getBoundingClientRect(),a=window.pageXOffset||document.documentElement.scrollLeft,n=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+n,left:t.left+a}},o=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.stopPropagation(),e.preventDefault();var a=document.createEvent("Event");a.initEvent("fds.dropdown.close",!0,!0);var n=document.createEvent("Event");n.initEvent("fds.dropdown.open",!0,!0);var r=this,s=null;if(null!=r){var o=r.getAttribute(i);null!=o&&(s=document.getElementById(o.replace("#","")))}if(null!=r&&null!=s)if(s.style.left=null,s.style.right=null,"true"===r.getAttribute("aria-expanded")||t)r.setAttribute("aria-expanded","false"),s.classList.add("collapsed"),s.setAttribute("aria-hidden","true"),r.dispatchEvent(a);else{l(),r.setAttribute("aria-expanded","true"),s.classList.remove("collapsed"),s.setAttribute("aria-hidden","false"),r.dispatchEvent(n);var c=d(s);c.left<0&&(s.style.left="0px",s.style.right="auto");var u=c.left+s.offsetWidth;u>window.innerWidth&&(s.style.left="auto",s.style.right="0px");var f=d(s);f.left<0&&(s.style.left="0px",s.style.right="auto"),(u=f.left+s.offsetWidth)>window.innerWidth&&(s.style.left="auto",s.style.right="0px")}},c=function(e){if(null===document.querySelector("body.mobile_nav-active"))for(var t=document.querySelectorAll(".js-dropdown[aria-expanded=true]"),a=0;a<t.length;a++){var n=t[a],r=null,s=n.getAttribute(i);if(null!=s&&(r=document.getElementById(s)),u(n)&&e.target!==n){n.setAttribute("aria-expanded","false"),r.classList.add("collapsed"),r.setAttribute("aria-hidden","true");var l=document.createEvent("Event");l.initEvent("fds.dropdown.close",!0,!0),n.dispatchEvent(l)}}},u=function(e){if(!e.classList.contains("js-dropdown--responsive-collapse")){if(!e.parentNode.classList.contains("overflow-menu--md-no-responsive")&&!e.parentNode.classList.contains("overflow-menu--lg-no-responsive"))return!0;if(window.innerWidth<=f(e))return!0}return!1},f=function(e){return e.parentNode.classList.contains("overflow-menu--md-no-responsive")?r.md:e.parentNode.classList.contains("overflow-menu--lg-no-responsive")?r.lg:void 0};e.exports=s},338:function(e,t,a){"use strict";e.exports=function(e,t){for(var a=e.matches||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector;e&&!a.call(e,t);)e=e.parentElement;return e}},339:function(e,t,a){"use strict";e.exports=function(e,t){"boolean"!=typeof t&&(t="false"===e.getAttribute("aria-expanded")),e.setAttribute("aria-expanded",t);var a=e.getAttribute("aria-controls"),n=document.getElementById(a);if(!n)throw new Error('No toggle target found with id: "'+a+'"');return n.setAttribute("aria-hidden",!t),t}},340:function(e,t,a){"use strict";e.exports={xs:0,sm:576,md:768,lg:992,xl:1200}}});