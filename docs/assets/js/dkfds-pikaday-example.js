!function(e){function t(t){for(var s,i,u=t[0],o=t[1],l=t[2],p=0,d=[];p<u.length;p++)i=u[p],r[i]&&d.push(r[i][0]),r[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);for(j&&j(t);d.length;)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],s=!0,u=1;u<n.length;u++){var o=n[u];0!==r[o]&&(s=!1)}s&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var s={},r={2:0},a=[];function i(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=s,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/assets/";var u=window.webpackJsonp=window.webpackJsonp||[],o=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var j=o;a.push([165,0]),n()}({165:function(e,t,n){e.exports=n(166)},166:function(e,t,n){"use strict";n.r(t);var s=n(1),r=n.n(s);function a(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}window.$=window.jQuery=r.a;var i=n(167),u=".js-calendar-datepicker",o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.pikadayInstance=null,this.datepickerElement=r()(t).find(u),this.dateGroup=t,this.formGroup=r()(t).parent(".form-group"),this.dayInputElement=null,this.monthInputElement=null,this.yearInputElement=null,this.initDateInputs(),0!=this.datepickerElement.length&&this.initDatepicker(this.datepickerElement[0])}var t,n,s;return t=e,(n=[{key:"initDateInputs",value:function(){this.dayInputElement=this.formGroup.find(".js-calendar-day-input")[0],this.monthInputElement=this.formGroup.find(".js-calendar-month-input")[0],this.yearInputElement=this.formGroup.find(".js-calendar-year-input")[0];var e=this;this.dayInputElement.addEventListener("blur",function(){e.formatInputs(),e.validateInputs()}),this.dayInputElement.addEventListener("paste",function(){e.formatInputs(),e.validateInputs()}),this.monthInputElement.addEventListener("blur",function(){e.formatInputs(),e.validateInputs()}),this.monthInputElement.addEventListener("paste",function(){e.formatInputs(),e.validateInputs()}),this.yearInputElement.addEventListener("blur",function(){e.formatInputs(),e.validateInputs()}),this.yearInputElement.addEventListener("paste",function(){e.formatInputs(),e.validateInputs()})}},{key:"initDatepicker",value:function(e){if(e){this.initDone=!1;var t=this;this.pikadayInstance=new i({field:e,format:"DD/MM/YYYY",firstDay:1,i18n:{previousMonth:"Forrige måned",nextMonth:"Næste måned",months:["Januar","Februar","Marth","April","Maj","Juni","July","August","September","Oktober","November","December"],weekdays:["Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Fredag","Lørdag"],weekdaysShort:["Søn","Man","Tir","Ons","Tor","Fre","Lør"]},onSelect:function(e){t.initDone&&(t.updateDateInputs(e),t.validateInputs())},onOpen:function(){var e=parseInt(t.dayInputElement.value),n=parseInt(t.monthInputElement.value)-1,s=parseInt(t.yearInputElement.value),r=new Date(s,n,e);t.validateInputs()&&t.updateDatepickerDate(r)}});var n=new Date;this.pikadayInstance.setDate(n),this.initDone=!0}}},{key:"validateInputs",value:function(){var e=this.dayInputElement.value,t=this.monthInputElement.value,n=this.yearInputElement.value,s=new Date(n,t,0).getDate(),r=this.dayInputElement.getAttribute("data-input-regex"),a=this.monthInputElement.getAttribute("data-input-regex"),i=this.yearInputElement.getAttribute("data-input-regex"),u=new RegExp(r),o=new RegExp(a),l=new RegExp(i),j="",p=!0;return""==e&&""==t&&""==n||(null===u.exec(e)||null===o.exec(t)||null===l.exec(n)?(p=!1,j="Beklager, men du kan kun bruge tal.",this.showError(j)):e>s?(p=!1,j="Hov, den dag findes ikke i den valgte måned.",this.showError(j)):t>12&&(p=!1,j="Hov, den måned findes ikke.",this.showError(j))),p&&this.removeError(),p}},{key:"showError",value:function(e){this.formGroup[0].classList.add("form-error");var t=r()(this.dateGroup).siblings(".form-error-message");0!=t.length&&(t[0].textContent=e)}},{key:"removeError",value:function(){this.formGroup[0].classList.remove("form-error");var e=r()(this.dateGroup).siblings(".form-error-message");0!=e.length&&(e[0].textContent="")}},{key:"updateDateInputs",value:function(e){var t=e.getDate(),n=e.getMonth()+1,s=e.getFullYear();this.dayInputElement.value=this.dayFormat(t),this.monthInputElement.value=this.monthFormat(n),this.yearInputElement.value=s}},{key:"dayFormat",value:function(e){return("0"+e).slice(-2)}},{key:"monthFormat",value:function(e){return("0"+e).slice(-2)}},{key:"formatInputs",value:function(){var e=parseInt(this.dayInputElement.value),t=parseInt(this.monthInputElement.value);isNaN(e)||(this.dayInputElement.value=this.dayFormat(e)),isNaN(t)||(this.monthInputElement.value=this.monthFormat(t))}},{key:"updateDatepickerDate",value:function(e){this.pikadayInstance.setDate(e)}}])&&a(t.prototype,n),s&&a(t,s),e}();r()(document).ready(function(){for(var e=r()(".js-calendar-group"),t=0;t<e.length;t++)new o(e[t])})},169:function(e,t,n){var s={"./af":8,"./af.js":8,"./ar":9,"./ar-dz":10,"./ar-dz.js":10,"./ar-kw":11,"./ar-kw.js":11,"./ar-ly":12,"./ar-ly.js":12,"./ar-ma":13,"./ar-ma.js":13,"./ar-sa":14,"./ar-sa.js":14,"./ar-tn":15,"./ar-tn.js":15,"./ar.js":9,"./az":16,"./az.js":16,"./be":17,"./be.js":17,"./bg":18,"./bg.js":18,"./bm":19,"./bm.js":19,"./bn":20,"./bn.js":20,"./bo":21,"./bo.js":21,"./br":22,"./br.js":22,"./bs":23,"./bs.js":23,"./ca":24,"./ca.js":24,"./cs":25,"./cs.js":25,"./cv":26,"./cv.js":26,"./cy":27,"./cy.js":27,"./da":28,"./da.js":28,"./de":29,"./de-at":30,"./de-at.js":30,"./de-ch":31,"./de-ch.js":31,"./de.js":29,"./dv":32,"./dv.js":32,"./el":33,"./el.js":33,"./en-SG":34,"./en-SG.js":34,"./en-au":35,"./en-au.js":35,"./en-ca":36,"./en-ca.js":36,"./en-gb":37,"./en-gb.js":37,"./en-ie":38,"./en-ie.js":38,"./en-il":39,"./en-il.js":39,"./en-nz":40,"./en-nz.js":40,"./eo":41,"./eo.js":41,"./es":42,"./es-do":43,"./es-do.js":43,"./es-us":44,"./es-us.js":44,"./es.js":42,"./et":45,"./et.js":45,"./eu":46,"./eu.js":46,"./fa":47,"./fa.js":47,"./fi":48,"./fi.js":48,"./fo":49,"./fo.js":49,"./fr":50,"./fr-ca":51,"./fr-ca.js":51,"./fr-ch":52,"./fr-ch.js":52,"./fr.js":50,"./fy":53,"./fy.js":53,"./ga":54,"./ga.js":54,"./gd":55,"./gd.js":55,"./gl":56,"./gl.js":56,"./gom-latn":57,"./gom-latn.js":57,"./gu":58,"./gu.js":58,"./he":59,"./he.js":59,"./hi":60,"./hi.js":60,"./hr":61,"./hr.js":61,"./hu":62,"./hu.js":62,"./hy-am":63,"./hy-am.js":63,"./id":64,"./id.js":64,"./is":65,"./is.js":65,"./it":66,"./it-ch":67,"./it-ch.js":67,"./it.js":66,"./ja":68,"./ja.js":68,"./jv":69,"./jv.js":69,"./ka":70,"./ka.js":70,"./kk":71,"./kk.js":71,"./km":72,"./km.js":72,"./kn":73,"./kn.js":73,"./ko":74,"./ko.js":74,"./ku":75,"./ku.js":75,"./ky":76,"./ky.js":76,"./lb":77,"./lb.js":77,"./lo":78,"./lo.js":78,"./lt":79,"./lt.js":79,"./lv":80,"./lv.js":80,"./me":81,"./me.js":81,"./mi":82,"./mi.js":82,"./mk":83,"./mk.js":83,"./ml":84,"./ml.js":84,"./mn":85,"./mn.js":85,"./mr":86,"./mr.js":86,"./ms":87,"./ms-my":88,"./ms-my.js":88,"./ms.js":87,"./mt":89,"./mt.js":89,"./my":90,"./my.js":90,"./nb":91,"./nb.js":91,"./ne":92,"./ne.js":92,"./nl":93,"./nl-be":94,"./nl-be.js":94,"./nl.js":93,"./nn":95,"./nn.js":95,"./pa-in":96,"./pa-in.js":96,"./pl":97,"./pl.js":97,"./pt":98,"./pt-br":99,"./pt-br.js":99,"./pt.js":98,"./ro":100,"./ro.js":100,"./ru":101,"./ru.js":101,"./sd":102,"./sd.js":102,"./se":103,"./se.js":103,"./si":104,"./si.js":104,"./sk":105,"./sk.js":105,"./sl":106,"./sl.js":106,"./sq":107,"./sq.js":107,"./sr":108,"./sr-cyrl":109,"./sr-cyrl.js":109,"./sr.js":108,"./ss":110,"./ss.js":110,"./sv":111,"./sv.js":111,"./sw":112,"./sw.js":112,"./ta":113,"./ta.js":113,"./te":114,"./te.js":114,"./tet":115,"./tet.js":115,"./tg":116,"./tg.js":116,"./th":117,"./th.js":117,"./tl-ph":118,"./tl-ph.js":118,"./tlh":119,"./tlh.js":119,"./tr":120,"./tr.js":120,"./tzl":121,"./tzl.js":121,"./tzm":122,"./tzm-latn":123,"./tzm-latn.js":123,"./tzm.js":122,"./ug-cn":124,"./ug-cn.js":124,"./uk":125,"./uk.js":125,"./ur":126,"./ur.js":126,"./uz":127,"./uz-latn":128,"./uz-latn.js":128,"./uz.js":127,"./vi":129,"./vi.js":129,"./x-pseudo":130,"./x-pseudo.js":130,"./yo":131,"./yo.js":131,"./zh-cn":132,"./zh-cn.js":132,"./zh-hk":133,"./zh-hk.js":133,"./zh-tw":134,"./zh-tw.js":134};function r(e){var t=a(e);return n(t)}function a(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=a,e.exports=r,r.id=169}});