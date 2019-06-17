import $ from "jquery";
window.$ = window.jQuery = $;
import tippy from 'tippy.js';

var initTippy = function (){
    //init tooltip on elements with the .js-tooltip class
    tippy('.js-tippy', {
        duration: 0,
        arrow: true
    });
};

$(document).ready(function() {
    initTippy();
});

