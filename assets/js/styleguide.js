!function(e){function t(t){for(var a,o,s=t[0],l=t[1],d=t[2],u=0,m=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);for(c&&c(t);m.length;)m.shift()();return i.push.apply(i,d||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={4:0},i=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/assets/";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var c=l;i.push([6,1,0]),n()}([,,,,,,function(e,t,n){n(7),e.exports=n(15)},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(2),o=n(1),s=(n(8),n(9));function l(){new o.Toast(document.getElementsByClassName("toast-container")[0].getElementsByClassName("hide")[0]).show()}n(10),n(12),n(13),n(14),document.addEventListener("DOMContentLoaded",(function(){!function(){if(document.getElementsByTagName("body")[0].classList.contains("page-language-switcher")||document.getElementsByTagName("body")[0].classList.contains("page-language-switcher-tooltip")){var e=window.location.search;if(""!==e&&-1!==e.indexOf("lang=")){var t=e.replace("?lang=","");if("da"!==t){var n=document.getElementsByClassName("language-switcher")[0].getElementsByTagName("ul")[0],a=n.querySelector("li:first-of-type a");a.removeChild(a.getElementsByTagName("svg")[0]),n.querySelector("li:first-of-type a").removeAttribute("aria-label");var r=n.querySelector('a[lang="'+t+'"]'),i="http://www.w3.org/2000/svg",o=document.createElementNS(i,"svg");o.classList.add("icon-svg"),o.setAttribute("focusable","false"),o.setAttribute("aria-hidden","true");var s=document.createElementNS(i,"use");switch(s.setAttributeNS("http://www.w3.org/1999/xlink","href","#done"),o.appendChild(s),r.prepend(o),n.prepend(r.parentNode),t){case"en-GB":n.setAttribute("aria-label","Choose language"),r.setAttribute("aria-label","Current language: English"),document.getElementsByTagName("body")[0].classList.contains("page-language-switcher-tooltip")&&(n.querySelector('a[lang="en-GB"]').removeAttribute("data-tooltip"),n.querySelector('a[lang="en-GB"]').classList.remove("js-tooltip"),n.querySelector('a[lang="da"]').classList.add("js-tooltip"),n.querySelector('a[lang="da"]').setAttribute("data-tooltip","Danish"),n.querySelector('a[lang="en-GB"]').setAttribute("data-tooltip","English"),n.querySelector('a[lang="de"]').setAttribute("data-tooltip","German"),n.querySelector('a[lang="pl"]').setAttribute("data-tooltip","Polish"));break;case"de":n.setAttribute("aria-label","Sprache wählen"),r.setAttribute("aria-label","Aktuelle Sprache: Deutsch"),document.getElementsByTagName("body")[0].classList.contains("page-language-switcher-tooltip")&&(n.querySelector('a[lang="de"]').removeAttribute("data-tooltip"),n.querySelector('a[lang="de"]').classList.remove("js-tooltip"),n.querySelector('a[lang="da"]').classList.add("js-tooltip"),n.querySelector('a[lang="da"]').setAttribute("data-tooltip","Dänisch"),n.querySelector('a[lang="en-GB"]').setAttribute("data-tooltip","Englisch"),n.querySelector('a[lang="pl"]').setAttribute("data-tooltip","Polieren"));break;case"pl":n.setAttribute("aria-label","Wybierz język"),r.setAttribute("aria-label","Aktualny język: polski"),document.getElementsByTagName("body")[0].classList.contains("page-language-switcher-tooltip")&&(n.querySelector('a[lang="pl"]').removeAttribute("data-tooltip"),n.querySelector('a[lang="pl"]').classList.remove("js-tooltip"),n.querySelector('a[lang="da"]').classList.add("js-tooltip"),n.querySelector('a[lang="da"]').setAttribute("data-tooltip","Duński"),n.querySelector('a[lang="en-GB"]').setAttribute("data-tooltip","Angielski"),n.querySelector('a[lang="de"]').setAttribute("data-tooltip","Niemiecki"))}}}}}(),o.init(),-1!==window.location.pathname.split("/").indexOf("mastertest")&&new s(o),function(){var e=document.getElementById("toast-example-button");if(null!==e){var t=document.createElement("div");t.classList.add("toast-container"),document.body.appendChild(t),e.addEventListener("click",(function(){var e=["info","warning","error","success"],t=Math.floor(Math.random()*e.length),n=document.getElementsByClassName("toast-container")[0],a=document.createElement("div");a.classList.add("toast","toast-"+e[t],"hide"),a.setAttribute("role","status");var r=document.createElement("div");r.classList.add("toast-icon"),a.appendChild(r);var i=document.createElement("div");i.classList.add("toast-message");var o=document.createElement("p");o.classList.add("bold"),o.innerText=["Du har fået en besked","Dette er en advarsel","Der opstod en fejl","Din ansøgning er afsendt"][t],i.appendChild(o);var s=document.createElement("button");s.classList.add("toast-close"),s.innerText="Luk",i.appendChild(s);var d=document.createElement("p");d.innerText="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",i.appendChild(d),a.appendChild(i),n.appendChild(a),requestAnimationFrame(l)}))}}();var e=document.getElementsByClassName("icon-box");if(0!==e.length)for(var t=0;t<e.length;t++)new o.Tooltip(e[t].getElementsByTagName("p")[0]);var n=document.getElementById("search-form");null!==n&&n.getElementsByTagName("form")[0].addEventListener("submit",(function(e){return""!==document.getElementById("search-input").value||(e.preventDefault(),!1)}),!1)})),r()(document).ready((function(){if(0===document.getElementsByClassName("page-cookie-message").length)i.CookiePrompter.init({trackers:[{name:i.PiwikProTracker,config:{account:"e1985634-0fc1-4992-baf6-59088ee23b2a",piwikProPath:"erst.containers.piwik.pro"}}],readMoreUrl:"/omdesignsystemet/privatlivspolitik-cookies/",enableLog:!1,explicitAccept:!0,textHeader:"Fortæl os om du accepterer cookies",textblock1:"Vi indsamler statistik ved hjælp af cookies. Alle indsamlede data anonymiseres.",textblock2:"",textReadMore:"Læs mere om vores brug af cookies",textDontAccept:"Nej tak til cookies",textAccept:"Accepter cookies",onReady:function(){0!==r()("#cookieMessage").length&&(r()("body").addClass("cookie-message-active"),r()(".acceptCookieButton").click((function(){r()("body").removeClass("cookie-message-active")})))},onOptOut:function(){r()("body").removeClass("cookie-message-active")}});r()("#start-reqtool").click((function(e){e.preventDefault(),localStorage.removeItem("reqTool"),window.location.href=r()(this).attr("href")})),r()(".layout-demo form").submit((function(e){e.preventDefault(),window.location.href=window.location.origin+r()(this).attr("action")})),0!==r()("#cookieForm").length&&("n"===i.CookieMgr.readCookie("cookieOptOut")?(r()("#statCookiesNo").prop("checked",!0),r()("#originalValue").val("0")):r()("#originalValue").val("1"),r()("#cookieForm").submit((function(e){e.preventDefault(),"1"===r()("input[name=statCookies]:checked").val()?(i.CookieMgr.createCookie("cookieOptOut","y",1),r()("#cookieYesAlert").removeClass("d-none"),r()("#originalValue").val("1")):(i.CookiePrompter.eraseCookiesAndRemovePrompt(),r()("#cookieNoAlert").removeClass("d-none"),r()("#originalValue").val("0")),r()("#cookieButtons").addClass("d-none")})),r()("input[type=radio][name=statCookies]").change((function(){r()("#cookieButtons").removeClass("d-none"),r()("#cookieNoAlert").addClass("d-none"),r()("#cookieYesAlert").addClass("d-none")})),r()("#cookieCancel").click((function(){"1"===r()("#originalValue").val()?r()("#statCookiesYes").prop("checked",!0):r()("#statCookiesNo").prop("checked",!0),r()("#cookieButtons").addClass("d-none")})));var e=!1;r()(".layout-demo a, .layout-demo button").click((function(t){return e=!0,r()(this).hasClass("alert-leave")?1==confirm("Du er ved at forlade selvbetjeningsløsningen. Data, der ikke er gemt vil gå tabt. Vil du fortsætte?")?(e=!0,!0):(t.preventDefault(),e=!1,!1):r()(this).hasClass("alert-leave2")?1==confirm("Du er ved at forlade siden. Evt. indtastninger der ikke er gemt vil gå tabt. Vil du fortsætte?")?(e=!0,!0):(t.preventDefault(),e=!1,!1):void 0})),r()(".layout-iframed .icon-link, .layout-demo .icon-link").click((function(t){return 1==confirm("Du er ved at forlade selvbetjeningsløsningen. Data, der ikke er gemt vil gå tabt. Vil du fortsætte?")?(e=!0,!0):(t.preventDefault(),e=!1,!1)})),window.onbeforeunload=function(t){if(document.getElementsByClassName("layout-demo").length>0&&void 0===window.themeChangeProcess){var n=!0;if(null!==document.activeElement.href&&void 0!==document.activeElement.href&&null!==window.location.href&&void 0!==window.location.href){var a=document.activeElement.href.split("/"),r=window.location.href.split("/");0!=a.length&&a[5]==r[5]&&(n=!1)}if(n&&!e)return(t=t||window.event)&&(t.returnValue="Sure?"),"Sure?"}}}))},,function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.DKFDS=t,this.setEvents()}var t,a,r;return t=e,(a=[{key:"setEvents",value:function(){var e=this,t="none",n=document.getElementById("newAccordionTrigger");n.addEventListener("click",(function(a){var r="myNewAccordion",i=e.createAccordion(r);document.getElementById("newAccordion").innerHTML=i,new e.DKFDS.Accordion(document.getElementById(r)),n.style.display=t}));var a=document.getElementById("newOverflowMenuTrigger");a.addEventListener("click",(function(n){var r="myNewOverflowMenu",i=e.createOverflowMenu(r);document.getElementById("newOverflowMenu").innerHTML=i,new e.DKFDS.Dropdown(document.getElementById(r)),a.style.display=t}));var r=document.getElementById("newCollapseTrigger");r.addEventListener("click",(function(n){var a="myNewCollapse",i=e.createCollapse(a);document.getElementById("newCollapse").innerHTML=i,new e.DKFDS.Collapse(document.getElementById(a)),r.style.display=t}));var i=document.getElementById("newCollapseRadioTrigger");i.addEventListener("click",(function(n){var a="myNewCollapseRadio",r=e.createCollapseRadio(a);document.getElementById("newCollapseRadio").innerHTML=r,new e.DKFDS.RadioToggleGroup(document.getElementById(a)),i.style.display=t}));var o=document.getElementById("newCollapseCheckboxTrigger");o.addEventListener("click",(function(n){var a="myNewCollapseCheckbox",r=e.createCollapseCheckbox(a);document.getElementById("newCollapseCheckbox").innerHTML=r,new e.DKFDS.CheckboxToggleContent(document.getElementById(a)),o.style.display=t}));var s=document.getElementById("newTableTrigger");s.addEventListener("click",(function(n){var a="myNewTable",r=e.createTable(a);document.getElementById("newTable").innerHTML=r,new e.DKFDS.ResponsiveTable(document.getElementById(a)),s.style.display=t}));var l=document.getElementById("newTabnavTrigger");l.addEventListener("click",(function(n){var a="myNewTabnav",r=e.createTabnav(a);document.getElementById("newTabnav").innerHTML=r,new e.DKFDS.Tabnav(document.getElementById(a)),l.style.display=t}));var d=document.getElementById("newTooltipTrigger");d.addEventListener("click",(function(n){var a="myNewTooltip",r=e.createTooltip(a);document.getElementById("newTooltip").innerHTML=r,new e.DKFDS.Tooltip(document.getElementById(a)),d.style.display=t}))}},{key:"createTooltip",value:function(e){return'<a href="javascript:void(0)" id=\''+e+'\' class="js-tooltip"\n        data-tooltip="Dette er en hjælpetekst i en popover"><svg class="icon-svg "  focusable="false" aria-hidden="true" ><use xlink:href="#help-circle-outline"></use></svg></a>'}},{key:"createTabnav",value:function(e){return'<ul class="tabnav" id=\''+e+'\'>\n\n        <li>\n            <a href="#tab11" class=" tabnav-item" aria-expanded="false">\n                <span>Tabnav 1</span>\n\n            </a>\n\n            <section class="tabnav-panel" aria-hidden="true" id="tab11">\n                <h2>Tabnav 1</h2>\n                <p>Mauris tempor, tellus a laoreet finibus, neque metus\n                    hendrerit augue, ac lacinia nisl dolor et augue. Ut\n                    lorem massa, consequat ut orci sit amet, maximus dictum\n                    orci. Mauris pharetra nunc sed augue bibendum semper.\n                    Donec in cursus orci. Ut sed posuere elit, quis semper\n                    turpis. Curabitur malesuada nisi nec nisl facilisis\n                    ornare. Praesent vestibulum, velit id sollicitudin\n                    auctor, ipsum lacus auctor nisl, in lacinia sem massa\n                    eget urna.</p>\n            </section>\n        </li>\n\n        <li class=\'active\'>\n            <a href="#tab21" class="tabnav-item"\n                aria-expanded="true">\n                <span>Tabnav 2</span>\n                <span class="sr-only">(valgt)</span>\n            </a>\n\n            <section class="tabnav-panel" aria-hidden="false" id="tab21">\n                <h2>Tabnav 2</h2>\n                <p>Mauris tempor, tellus a laoreet finibus, neque metus\n                    hendrerit augue, ac lacinia nisl dolor et augue. Ut\n                    lorem massa, consequat ut orci sit amet, maximus dictum\n                    orci. Mauris pharetra nunc sed augue bibendum semper.\n                    Donec in cursus orci. Ut sed posuere elit, quis semper\n                    turpis. Curabitur malesuada nisi nec nisl facilisis\n                    ornare. Praesent vestibulum, velit id sollicitudin\n                    auctor, ipsum lacus auctor nisl, in lacinia sem massa\n                    eget urna.</p>\n            </section>\n        </li>\n\n        <li>\n            <a href="#tab31" class=" tabnav-item" aria-expanded="false">\n                <span>Tabnav 3</span>\n\n            </a>\n\n            <section class="tabnav-panel" aria-hidden="true" id="tab31">\n                <h2>Tabnav 3</h2>\n                <p>Mauris tempor, tellus a laoreet finibus, neque metus\n                    hendrerit augue, ac lacinia nisl dolor et augue. Ut\n                    lorem massa, consequat ut orci sit amet, maximus dictum\n                    orci. Mauris pharetra nunc sed augue bibendum semper.\n                    Donec in cursus orci. Ut sed posuere elit, quis semper\n                    turpis. Curabitur malesuada nisi nec nisl facilisis\n                    ornare. Praesent vestibulum, velit id sollicitudin\n                    auctor, ipsum lacus auctor nisl, in lacinia sem massa\n                    eget urna.</p>\n            </section>\n        </li>\n    </ul>\n'}},{key:"createTable",value:function(e){return'<table class="table table--borderless table--responsive-headers" id=\''+e+"'>\n        <thead>\n            <tr>\n                <th>Affaldstype</th>\n                <th>Farvekode</th>\n                <th>Beskrivelse</th>\n                <th>Hvor ender det?</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr>\n                <td>Dagrenovation</td>\n                <td>Grøn</td>\n                <td>Madaffald, samt papir, pap eller plastik der ikke kan\n                    genanvendes, fordi der er madrester eller andet snask\n                    på.</td>\n                <td>Alt det affald, du smider ud i din primære\n                    skraldespand, som er dagrenovationen, bliver hentet og\n                    kørt på forbrændingen. </td>\n            </tr>\n            <tr>\n                <td>Bioaffald og kompost</td>\n                <td>Beige</td>\n                <td>Alt madaffald uden fødevareemballage.</td>\n                <td>Bioaffaldet kommes i bionedbrydelige poser, som bliver\n                    komposteret til muld.</td>\n            </tr>\n            <tr>\n                <td>Glas</td>\n                <td>Hvid</td>\n                <td>Alle typer glas og flasker.</td>\n                <td>De hele vinflasker rengøres og genbruges af vinhuse,\n                    mens glasskårene bliver smeltet om til nyt glas.</td>\n            </tr>\n            <tr>\n                <td>Elektronik</td>\n                <td>Orange</td>\n                <td>Genstande der har brugt strøm.</td>\n                <td>Det elektroniske affald bliver typisk kørt til et\n                    demonteringsanlæg, hvor det bliver skilt ad, så de\n                    forskellige dele kan genanvendes separat.</td>\n            </tr>\n        </tbody>\n    </table>"}},{key:"createCollapseCheckbox",value:function(e){return'<input id="'+e+'" type="checkbox" name="Name"\n                        value="Value"\n                        class="form-checkbox  checkbox-large js-checkbox-toggle-content"\n                        data-js-target=\'#collapse-check12\'\n                        aria-controls=\'collapse-check1\'\n                        aria-expanded=\'false\' />\n                    <label for="'+e+'" class="">Checkbox viser\n                        indhold</label>\n\n                    <div id="collapse-check12" aria-hidden="true"\n                        class="box-border-l collapsed">\n                        <div class="py-4">\n                            <p>Dette indhold bliver vist når checkboxen er\n                                valgt.</p>\n                        </div>\n                    </div>'}},{key:"createCollapseRadio",value:function(e){return'<div class="js-radio-toggle-group" id=\''+e+'\'>\n    <fieldset>\n        <legend>\n            <h2 class="h4">Vælg en radioknap</h2>\n        </legend>\n        <ul class="nobullet-list">\n            <li>\n\n                <input id="id-radio1" type="radio" name="radio-group1"\n                    value="Value" class="form-radio  radio-large " checked\n                    data-js-target=\'#collapse-radio1\'\n                    aria-controls=\'collapse-radio1\'\n                    aria-expanded=\'false\' />\n                <label for="id-radio1" class="">Radioknap viser indhold\n                    <span class="sr-only">Udfyld informationer\n                        herunder</span></label>\n\n                <div id="collapse-radio1" aria-hidden="true"\n                    class="box-border-l collapsed">\n                    <div class="py-4">\n\n                        <div class="form-group">\n                            <label class="form-label "\n                                for="textinput1">Inputfelt med\n                                label</label>\n\n                            <input class="form-input  input-width-m "\n                                placeholder="" id="textinput1" value=""\n                                name="text1" type="text">\n                        </div>\n\n                    </div>\n                </div>\n            </li>\n            <li>\n\n                <input id="id-radio2" type="radio" name="radio-group1"\n                    value="Value" class="form-radio  radio-large "\n                    data-js-target=\'#collapse-radio2\' />\n                <label for="id-radio2" class="">Radioknap viser indhold\n                    <span class="sr-only">Udfyld informationer\n                        herunder</span></label>\n\n                <div id="collapse-radio2" aria-hidden="true"\n                    class="box-border-l collapsed">\n                    <div class="py-4">\n\n                        <div class="form-group">\n                            <label class="form-label "\n                                for="textinput2">Inputfelt med\n                                label</label>\n\n                            <input class="form-input  input-width-m "\n                                placeholder="" id="textinput2" value=""\n                                name="text2" type="text">\n                        </div>\n\n                    </div>\n                </div>\n            </li>\n        </ul>\n    </fieldset>\n</div>'}},{key:"createCollapse",value:function(e){return"<button class=\"button button-secondary js-collapse\"\n        data-js-target='#collapse12' id='"+e+'\' aria-controls=\'collapse1\'\n        aria-expanded=\'false\'>Vis indhold</button>\n    <div id="collapse12" aria-hidden="true"\n        class="box-border-l mt-4 collapsed">\n        <div class="py-4">\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed\n                do eiusmod tempor incididunt ut labore et dolore magna\n                aliqua.</p>\n        </div>\n    </div>'}},{key:"createOverflowMenu",value:function(e){return'\n    <div class="overflow-menu  overflow-menu--open-right ">\n        <button class="button-overflow-menu js-dropdown "\n            data-js-target="#overflow11" id=\''+e+'\' aria-haspopup="true"\n            aria-expanded="false">\n            Overflow menu\n            <svg class="icon-svg" aria-hidden="true" focusable="false" tabindex="-1"><use xlink:href="#dots-vertical"></use></svg>\n            <span class="sr-only">Åbner overflow menu</span>\n        </button>\n        <div class="overflow-menu-inner" id="overflow11" aria-hidden="true">\n\n            <ul class=\'overflow-list\'>\n                <li><button>Option 1</button></li>\n                <li><button>Option 2</button></li>\n                <li><a href=\'#\'>Option 3 as link</a></li>\n                <li><button>Option 4 is longer text</button></li>\n            </ul>\n\n        </div>\n    </div>'}},{key:"createAccordion",value:function(e){return' <ul class="accordion " id=\''+e+'\'>\n\n        <li>\n            <button class="accordion-button " aria-expanded="false"\n                aria-controls="a11">\n                Lorem ipsum dolor sit amet\n                <span class="accordion-icon ">\n                    <span class="icon_text">Information</span>\n                    <svg class="icon-svg "  focusable="false" aria-hidden="true" ><use xlink:href="#info"></use></svg>\n                </span>\n            </button>\n\n            <div id="a11" aria-hidden="true" class="accordion-content">\n\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n                    sed do eiusmod tempor incididunt ut labore et dolore\n                    magna aliqua. Ut enim ad minim veniam, quis nostrud\n                    exercitation ullamco laboris nisi ut aliquip ex ea\n                    commodo consequat.</p>\n            </div>\n        </li>\n\n        <li>\n            <button class="accordion-button  accordion-error "\n                aria-expanded="true" aria-describedby="a2"\n                aria-controls="a21">\n                Consectetur adipiscing elit\n                <span class="accordion-icon ">\n                    <span class="icon_text">Fejl</span>\n                    <svg class="icon-svg "  focusable="false" aria-hidden="true" ><use xlink:href="#close-circle-outline"></use></svg>\n                </span>\n            </button>\n\n            <div id="a21" aria-hidden="false" class="accordion-content">\n\n                <div class="alert alert-error" role="alert"\n                    aria-label="Fejlbesked i accordion">\n                    <div class="alert-body">\n                        <p class="alert-text">Sed ut perspiciatis unde\n                            omnis iste natus\n                            error sit voluptatem accusantium doloremque\n                            laudantium.</p>\n                    </div>\n                </div>\n\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n                    sed do eiusmod tempor incididunt ut labore et dolore\n                    magna aliqua. Ut enim ad minim veniam, quis nostrud\n                    exercitation ullamco laboris nisi ut aliquip ex ea\n                    commodo consequat.</p>\n            </div>\n        </li>\n\n        <li>\n            <button class="accordion-button " aria-expanded="false"\n                aria-controls="a31">\n                Sed do eiusmod tempor\n                <span class="accordion-icon ">\n                    <span class="icon_text">Advarsel</span>\n                    <svg class="icon-svg "  focusable="false" aria-hidden="true" ><use xlink:href="#alert-outline"></use></svg>\n                </span>\n            </button>\n\n            <div id="a31" aria-hidden="true" class="accordion-content">\n\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n                    sed do eiusmod tempor incididunt ut labore et dolore\n                    magna aliqua. Ut enim ad minim veniam, quis nostrud\n                    exercitation ullamco laboris nisi ut aliquip ex ea\n                    commodo consequat.</p>\n            </div>\n        </li>\n    </ul>'}}])&&n(t.prototype,a),r&&n(t,r),e}();e.exports=a},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(11),o=r()("body, html");r()(".sidenav").on("keydown","a",(function(e){13===e.which&&r()(this).data("keypress",!0)})),r()(".sidenav").on("click","a",(function(e){var t=r()(this).attr("href").split("#")[1],n=i(t);if(0===n)return!0;e.preventDefault(),o.animate({scrollTop:n},{duration:200,start:function(){var e="#"+t;history.pushState?history.pushState(null,null,e):location.hash=e},done:function(){var n=r()(e.target),a=r()("#"+t);a.attr("tabindex","-1"),a.focus(),!0===n.data("keypress")&&n.removeData("keypress")}})}))},function(e,t,n){var a=n(0);e.exports=function(e){var t=a("#"+e),n=0;if(0===t.length)return n;var r=parseInt(a(".sidenav").css("padding-top"),10),i=parseInt(t.css("padding-top"),10);return n=a(".navbar-primary").first().outerHeight(),n-=i-r,t.offset().top-n}},function(e,t,n){"use strict";n.r(t);var a=n(0);function r(e){return new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i).test(e)}n.n(a)()(document).ready((function(e){if(e("body").hasClass("page-tilmelding-til-nyhedsmail")){var t=window.location.search.substr(1).split("&")[0].split("=");if("response"==t[0]){var n=decodeURI(t[1]);e("#newsletter-message .alert-text").html(n),e("#newsletter-message").removeClass("d-none")}}e(".newsletter-container").length&&e.ajax({url:"https://w2l.dk/pls/wopdprod/aboutils.nyhedsbrev2_drupal_xml?aboid=278&aboid=279&aboid=280",async:!1,cache:!0,success:function(t){var n="",a=[];e(t).find("gruppe").each((function(t,r){e(r).find("segment").each((function(t,r){n+="<li>",n+='<input id="id'+e(r).attr("segment_id")+'" type="checkbox" name="i_segmentid" class="form-checkbox checkbox-large" value="'+e(r).attr("segment_id")+'">',n+='<label class="form-label" for="id'+e(r).attr("segment_id")+'">',n+=e(r).children("overskrift").text(),n+="</label>",n+="</li>",a.push(e(r).attr("segment_id"))}))})),0!==a.length&&null!==e("#i_newsform_segment")&&e("#i_newsform_segment").val(a.join()),e("#subscriptions").append(n),e("#subscriptions").removeClass("d-none"),e("#newsform").submit((function(e){e.preventDefault()})),e("#unsubmitall").click((function(t){t.preventDefault(),e("#newsform [type='checkbox']").attr("checked",!0),e("#Frameld").click()})),e("#Tilmeld").click((function(t){t.preventDefault();var n=!1;e("#mail-error-summary .nobullet-list").html(""),r(e("#i_newsform_email").val())?(e("#i_newsform_email").parent(".form-group").removeClass("form-error"),e("#i_newsform_email").parent(".form-group").find(".form-error-message")[0].innerHTML=""):(e("#i_newsform_email").parent(".form-group").addClass("form-error"),e("#mail-error-summary .nobullet-list").append('<li><a class="function-link" href="#i_newsform_email">Indtast en gyldig e-mailadresse.</a></li>'),e("#i_newsform_email").parent(".form-group").find(".form-error-message")[0].innerHTML="Indtast en gyldig e-mailadresse.",e("#i_newsform_email").focus(),n=!0);var a=[];if(e("#newsform [type='checkbox']:checked").each((function(t,n){a.push(e(n).val())})),0==a.length?(e(e("#subscriptions").parents(".form-group")[0]).addClass("form-error"),e("#mail-error-summary .nobullet-list").append('<li><a class="function-link" href="#'+e(e("#subscriptions input")[0]).attr("id")+'">Der skal vælges minimum et nyhedsbrev.</a></li>'),e(e("#subscriptions").parents(".form-group")[0]).find(".form-error-message")[0].innerHTML="Der skal vælges minimum et nyhedsbrev.",!0!==n&&e("#newsform [type='checkbox']:first").focus(),n=!0):(e(e("#subscriptions").parents(".form-group")[0]).removeClass("form-error"),e(e("#subscriptions").parents(".form-group")[0]).find(".form-error-message")[0].innerHTML=""),e("#samtykke-check").prop("checked")?(e("#samtykke-group").removeClass("form-error"),e("#samtykke-group .form-error-message").innerHTML=""):(n=!0,e("#samtykke-group").addClass("form-error"),e("#mail-error-summary .nobullet-list").append('<li><a class="function-link" href="#samtykke-check">Giv os venligst samtykke, så vi må opbevare din mailadresse. Uden dit samtykke kan vi ikke sende dig nyhedsmails.</a></li>'),document.querySelector("#samtykke-group .form-error-message").innerHTML="Giv os venligst samtykke, så vi må opbevare din mailadresse. Uden dit samtykke kan vi ikke sende dig nyhedsmails."),!0===n)return e("#mail-error-summary").removeClass("d-none"),!1;e("#mail-error-summary").addClass("d-none"),e.ajax({url:"https://w2l.dk/pls/wopdprod/aboutils.abo_submit_drupal",type:"POST",dataType:"xml",traditional:!0,data:{i_segmentid:a,i_email:e("#i_newsform_email").val(),i_navn:"",i_firma:"",i_sprog:"DA",i_siteid:"detfaellesdesignsystem",tilmeld:"Tilmeld",frameld:""},success:function(t){var n=window.location.origin+"/omdesignsystemet/nyhedsmail/tilmeldt?";n+="response="+encodeURI(e(t).text()),window.location.href=n}}),e("#newsform [type='checkbox']").attr("checked",!1),e("#i_newsform_email").val("")})),e("#Frameld").click((function(t){t.preventDefault();var n=!1;r(e("#i_newsform_email").val())?(e("#i_newsform_email").parent(".form-group").removeClass("form-error"),e("#i_newsform_email").parent(".form-group").find(".form-error-message")[0].innerHTML="",e("#i_newsform_email").parent(".form-group").find(".form-error-message").addClass("d-none")):(e("#i_newsform_email").parent(".form-group").addClass("form-error"),e("#i_newsform_email").parent(".form-group").find(".form-error-message")[0].innerHTML="E-mailadresse er ikke gyldig.",e("#i_newsform_email").parent(".form-group").find(".form-error-message").removeClass("d-none"),n=!0);var a=e("#i_newsform_segment").val().split(",");if(e("#newsform [type='checkbox']:checked").each((function(t,n){a.push(e(n).val())})),!0===n)return!1;e.ajax({url:"https://w2l.dk/pls/wopdprod/aboutils.abo_submit_drupal",type:"POST",dataType:"xml",traditional:!0,data:{i_segmentid:a,i_email:e("#i_newsform_email").val(),i_navn:"",i_firma:"",i_sprog:"DA",i_siteid:"detfaellesdesignsystem",tilmeld:"",frameld:"Frameld"},success:function(t){e("#newsletter-message .alert-text").html(e(t).text()),e("#newsletter-message").removeClass("d-none"),e(".newsletter-container .form-error-message").addClass("d-none"),e(".newsletter-container .form-error").removeClass("form-error")}}),e("#newsform [type='checkbox']").attr("checked",!1),e("#i_newsform_email").val("")}))}})}))},function(e,t){var n=[{ms:5e3,text:"Arbejder"},{ms:5e3,text:"Arbejder stadig"},{ms:11e3,text:"Det tager længere end forventet, beklager"},{ms:18e3,text:"Vi er stadig i gang, undskyld ventetiden"}];document.addEventListener("DOMContentLoaded",(function(){document.getElementsByTagName("body")[0].classList.contains("page-spinner")&&function e(t){var a=n[t].text,r=n[t].ms;setTimeout((function(){document.getElementsByClassName("spinner-status")[0].innerHTML=a,++t>3&&(t=0),e(t)}),r)}(1)}))},function(e,t){var n=[{affaldstype:"Dagrenovation",farvekode:"Grøn",beskrivelse:"Madaffald, samt papir, pap eller plastik der ikke kan genanvendes, fordi der er madrester eller andet snask på.",hvorenderdet:"Alt det affald, du smider ud i din primære skraldespand, som er dagrenovationen, bliver hentet og kørt på forbrændingen."},{affaldstype:"Bioaffald og kompost",farvekode:"Beige",beskrivelse:"Alt madaffald uden fødevareemballage.",hvorenderdet:"Bioaffaldet kommes i bionedbrydelige poser, som bliver komposteret til muld."},{affaldstype:"Glas",farvekode:"Hvid",beskrivelse:"Alle typer glas og flasker.",hvorenderdet:"De hele vinflasker rengøres og genbruges af vinhuse, mens glasskårene bliver smeltet om til nyt glas."},{affaldstype:"Elektronik",farvekode:"Orange",beskrivelse:"Genstande der har brugt strøm.",hvorenderdet:"Det elektroniske affald bliver typisk kørt til et demonteringsanlæg, hvor det bliver skilt ad, så de forskellige dele kan genanvendes separat."}];function a(e,t){var n="sort-table-none";"ascending"===t?n="sort-table-ascending":"descending"===t&&(n="sort-table-descending"),e.getElementsByTagName("svg")[0].getElementsByTagName("use")[0].setAttribute("href","#"+n)}function r(e,t,n){var a=(e=e.toLowerCase())<(t=t.toLowerCase())?-1:e>t?1:0;return"descending"===n?1===a?-1:1:a}function i(e,t){var a=document.getElementById("sortingTable").getElementsByTagName("tbody")[0];for(var i in a.setAttribute("aria-busy","true"),a.innerHTML="",n.sort((function(n,a){return"affaldstype"==e?r(n.affaldstype,a.affaldstype,t):"farvekode"==e?r(n.farvekode,a.farvekode,t):void 0})),n){var o=document.createElement("tr"),s=document.createElement("td");s.setAttribute("data-title","Affaldstype"),s.innerText=n[i].affaldstype;var l=document.createElement("td");l.setAttribute("data-title","Farvekode"),l.innerText=n[i].farvekode;var d=document.createElement("td");d.setAttribute("data-title","Beskrivelse"),d.innerText=n[i].beskrivelse;var c=document.createElement("td");c.setAttribute("data-title","Hvor ender det?"),c.innerText=n[i].hvorenderdet,o.appendChild(s),o.appendChild(l),o.appendChild(d),o.appendChild(c),a.appendChild(o)}a.removeAttribute("aria-busy")}document.addEventListener("DOMContentLoaded",(function(){if(function(){if(0!==document.getElementsByClassName("table--selectable").length)for(var e=document.getElementsByClassName("table--selectable"),t=0;t<e.length;t++){var n=e[t];if(null!==n.nextElementSibling&&n.nextElementSibling.classList.contains("table-actions")){n.addEventListener("fds.table.selectable.updated",(function(e){var t=e.detail.checkedNumber,n=this.nextElementSibling.getElementsByClassName("table-selected-number")[0];t>1?(n.innerHTML=t+" rækker valgt",n.classList.remove("no-selected"),n.classList.remove("form-error-message"),n.removeAttribute("role")):1===t?(n.innerHTML=t+" række valgt",n.classList.remove("form-error-message"),n.classList.remove("no-selected"),n.removeAttribute("role")):(n.innerHTML="Vælg en eller flere rækker for at udføre funktioner.",n.classList.add("no-selected"),n.classList.remove("form-error-message"),n.removeAttribute("role"))}));for(var a=n.nextElementSibling.getElementsByTagName("button"),r=0;r<a.length;r++){a[r].addEventListener("click",(function(e){var t=this.parentNode.getElementsByClassName("table-selected-number")[0];t.classList.contains("no-selected")&&(t.classList.add("form-error-message"),t.classList.remove("no-selected"),t.setAttribute("role","alert"))}))}}}}(),null!==document.getElementById("btn-sort-by-affaldstype")){var e=document.getElementById("btn-sort-by-affaldstype"),t=document.getElementById("btn-sort-by-farvekode");e.addEventListener("click",(function(){var e="ascending";"ascending"==this.parentNode.getAttribute("aria-sort")&&(e="descending"),a(this,e),t.parentNode.setAttribute("aria-sort","none"),a(t,"none"),this.parentNode.setAttribute("aria-sort",e),i("affaldstype",e)})),t.addEventListener("click",(function(){var t="ascending";"ascending"==this.parentNode.getAttribute("aria-sort")&&(t="descending"),a(this,t),e.parentNode.setAttribute("aria-sort","none"),a(e,"none"),this.parentNode.setAttribute("aria-sort",t),i("farvekode",t)}))}null!==document.getElementById("btnSearchTable")&&document.getElementById("formSearchTable").addEventListener("submit",(function(e){e.preventDefault(),function(e){var t=document.getElementById("searchTable").getElementsByTagName("tbody")[0];for(var a in t.setAttribute("aria-busy","true"),t.innerHTML="",n){var r=n[a];if(""===e||r.affaldstype.toLowerCase().includes(e)||r.farvekode.toLowerCase().includes(e)||r.beskrivelse.toLowerCase().includes(e)||r.hvorenderdet.toLowerCase().includes(e)){var i=document.createElement("tr"),o=document.createElement("td");o.setAttribute("data-title","Affaldstype"),o.innerText=n[a].affaldstype;var s=document.createElement("td");s.setAttribute("data-title","Farvekode"),s.innerText=n[a].farvekode;var l=document.createElement("td");l.setAttribute("data-title","Beskrivelse"),l.innerText=n[a].beskrivelse;var d=document.createElement("td");d.setAttribute("data-title","Hvor ender det?"),d.innerText=n[a].hvorenderdet,i.appendChild(o),i.appendChild(s),i.appendChild(l),i.appendChild(d),t.appendChild(i)}}t.removeAttribute("aria-busy")}(document.getElementById("inputSearchTable").value)}))}))},function(e,t,n){}]);