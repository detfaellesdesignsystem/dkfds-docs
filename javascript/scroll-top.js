'use strict';

import $ from "jquery";

/* Firefox needs html, others need body */
var root = $('body, html');

// capture that the enter key was used to "click"
$(document).on('click', "a[href='#top']", function (event) {
    var ENTER = 13;
    if (event.which === ENTER) {
        $(this).data('keypress', true);
    }
});

$(document).on('click', "a[href='#top']", function (event) {
    var hashLocation  = $(this).attr('href').split('#')[ 1 ];

    event.preventDefault();

    var scrollPos = 0;
    if ($($.attr(this, 'href')).length === 1) {
        scrollPos = $($.attr(this, 'href')).offset().top;
    }

    root.animate({
        scrollTop: scrollPos,
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
            var link    = $(event.target);
            var section = $('#' + hashLocation);

            section.attr('tabindex', '-1');
            section.focus();

            if (link.data('keypress') === true) {
                link.removeData('keypress');
            }
        },
    });
});