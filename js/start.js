'use strict';

var $ = require('jquery');
var Cookies = require('./vendor/js-cookie');
require('./form-disable');
require('./scroll-to-top-for-hash');
require('./sidenav');
require('./vendor/politespace');
require('./vendor/stickyfill.min.js');


// Initialize sticky fill
var stickyElements = document.getElementsByClassName('sticky');

for (var i = stickyElements.length - 1; i >= 0; i--) {
  Stickyfill.add(stickyElements[i]);
}

$('.style-switcher').val(window.curStyle);

$('.style-switcher').on('change', function () {
  if (window.curStyle !== this.value) {
    var onlyUrl = window.location.href.replace(window.location.search, '');
    window.location = onlyUrl + '?s=' + this.value;
  }
});

$('a').on('click', function (e) {
  e.preventDefault();
  window.location.href = $(this).attr('href') + '?s=' + window.curStyle;
});

function setContentWidthToDefault() {
  $('.styleguide-content').removeClass('styleguide-content-full-width');
  $('.styleguide-content').addClass('styleguide-content-default-width');
}

function setContentWidthToFull() {
  $('.styleguide-content').removeClass('styleguide-content-default-width');
  $('.styleguide-content').addClass('styleguide-content-full-width');
}

$('.preview-iframe').on('load', function () {
  var $iframe = $(this);

  $(this.contentWindow).on('resize', function () {
    var $body = $iframe.contents().find('body');
    var $marigin = 60;
    var $height = $body.prop('scrollHeight') + $marigin;
    $iframe.css('height', $height + 'px');    
  });

  $iframe.attr({ width: '375px' });
  $('.loader-container').hide();
  $(this).show();
});

$('.components__resizer-button').on('click', function () {
  var $width = undefined;
  var $iframe = $('#component-preview').find('iframe');

  switch (this.id) {
    case 'mobil':
      $width = '375px';
      setContentWidthToDefault();
      break;
    case 'tablet':
      $width = '768px';
      setContentWidthToDefault();
      break;
    case 'desktop':
      $width = '1024px';
      setContentWidthToFull();
      break;
    case 'full':
      $width = '100%';
      setContentWidthToFull();
      break;
    default:
      return;
  }

  $iframe.attr({ width: $width });

  $('.is-active').removeClass('is-active');
  $(this).addClass('is-active');

  $('.showtext').removeClass('showtext');
  $('.components__' + this.id).addClass('showtext');
});




