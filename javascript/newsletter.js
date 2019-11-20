'use strict';
import $ from "jquery";
function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
    return pattern.test(emailAddress);
};

$( document ).ready(function( $ ) {

    if ( $('.newsletter-container').length ) {
        $.ajax({
            url: "https://w2l.dk/pls/wopdprod/aboutils.nyhedsbrev2_drupal_xml?aboid=278&aboid=279&aboid=280",
            async: false,
            cache: true,
            success: function( xmlResponse ) {
                $('#subscriptions').append(function() {
                    var res = '';

                    $(xmlResponse).find('gruppe').each(function(i,e) {
                        $(e).find('segment').each(function(i,e) {
                            res += '<li>';
                            res += '<input id="id' + $(e).attr('segment_id') + '" type="checkbox" name="i_segmentid" class="form-checkbox checkbox-large" value="' + $(e).attr('segment_id') + '">';
                            res += '<label class="form-label" for="id' + $(e).attr('segment_id') + '">';
                            res += $(e).children('overskrift').text();
                            res += '</label>';
                            res += '</li>';
                        });
                    });
                    return res;
                });

                $( "#newsform" ).submit(function( event ) {
                    event.preventDefault();
                });

                $("#unsubmitall").click(function(e) {
                    e.preventDefault();

                    $("#newsform [type='checkbox']").attr('checked', true);
                    $("#Frameld").click();
                });

                $("#Tilmeld, #Frameld").click(function(e) {
                    e.preventDefault();

                    var tilmeld = '';
                    var frameld = '';
                    let error = false;
                    $(this).attr("id") == 'Tilmeld' ? tilmeld = $(this).attr("id") : frameld = $(this).attr("id");

                    if (!isValidEmailAddress($("#i_newsform_email").val())) {
                        $('#i_newsform_email').parent('.form-group').addClass('form-error');
                        $('#i_newsform_email').parent('.form-group').find('.form-error-message')[0].innerHTML = "E-mailadresse er ikke gyldig.";
                        $('#i_newsform_email').parent('.form-group').find('.form-error-message').removeClass('d-none');
                        $("#i_newsform_email").focus();
                        error = true;
                    } else{
                        $('#i_newsform_email').parent('.form-group').removeClass('form-error');
                        $('#i_newsform_email').parent('.form-group').find('.form-error-message')[0].innerHTML = "";
                        $('#i_newsform_email').parent('.form-group').find('.form-error-message').addClass('d-none');
                    }

                    var segmentid = [];
                    $("#newsform [type='checkbox']:checked").each(function(i,e) {
                        segmentid.push($(e).val());
                    });

                    if ( segmentid.length == 0 ) {
                        $($('#subscriptions').parents('.form-group')[0]).addClass('form-error');
                        $($('#subscriptions').parents('.form-group')[0]).find('.form-error-message')[0].innerHTML = "Der skal vælges minimum et nyhedsbrev.";
                        $($('#subscriptions').parents('.form-group')[0]).find('.form-error-message').removeClass('d-none');
                        if(error !== true) {
                            $("#newsform [type='checkbox']:first").focus();
                        }
                        error = true;
                    } else{
                        $($('#subscriptions').parents('.form-group')[0]).removeClass('form-error');
                        $($('#subscriptions').parents('.form-group')[0]).find('.form-error-message')[0].innerHTML = "";
                        $($('#subscriptions').parents('.form-group')[0]).find('.form-error-message').addClass('d-none');
                    }

                    if(error === true) {
                        return false;
                    }

                    $.ajax({
                        url: 'https://w2l.dk/pls/wopdprod/aboutils.abo_submit_drupal',
                        type: "POST",
                        dataType: "xml",
                        traditional: true,
                        data: { i_segmentid: segmentid,
                            i_email: $("#i_newsform_email").val(),
                            i_navn: '',
                            i_firma: '',
                            i_sprog: 'DA',
                            i_siteid: 'detfaellesdesignsystem',
                            tilmeld: tilmeld,
                            frameld: frameld
                        },
                        success: function( xmlResponse ) {
                            $('#newsletter-message .alert-text').html($(xmlResponse).text());
                            $('#newsletter-message').removeClass('d-none');
                            $('.newsletter-container .form-error-message').addClass('d-none');
                            $('.newsletter-container .form-error').removeClass('form-error');
                        }
                    });

                    $("#newsform [type='checkbox']").attr('checked', false);
                    $("#i_newsform_email").val('');
                });

            }
        });
    };

});
