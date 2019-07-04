'use strict';

import $ from "jquery";
var calculateAnchorPosition = require('./calculate-anchor-position');

/* Firefox needs html, others need body */
var root = $('body, html');

// capture that the enter key was used to "click"
$('.sidenav').on('keydown', 'a', function (e) {
    var ENTER = 13;
    if (e.which === ENTER) {
        $(this).data('keypress', true);
    }
});

$('.sidenav').on('click', 'a', function (e) {
    console.log("click");
    // long url splitting
    var hashLocation  = $(this).attr('href').split('#')[ 1 ];
    var scrollTopPos  = calculateAnchorPosition(hashLocation);

    //if anchor doesn't exist on the page, or calc fails
    //then exit gracefully
    if (scrollTopPos === 0) {
        return true;
    }

    e.preventDefault();

    root.animate({
        scrollTop: scrollTopPos,
    }, {
        duration: 200,
        start: function () {
            var newHash = '#' + hashLocation;

            if(history.pushState) {
                history.pushState(null, null, newHash);
            }
            else {
                location.hash = newHash;
            }
        },
        done: function () {
            // if keyboard was used, update keyboard focus to section
            var link    = $(e.target);
            var section = $('#' + hashLocation);

            section.attr('tabindex', '-1');
            section.focus();


            if (link.data('keypress') === true) {
                link.removeData('keypress');
            }
        },
    });
});

