import tippy from 'tippy.js';

var initTippy = function (){
    //init tooltip on elements with the .js-tooltip class
    tippy('.js-tippy', {
        duration: 0,
        arrow: true
    });
};

document.addEventListener("DOMContentLoaded", function(){
    initTippy();
});
