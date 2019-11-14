'use strict';
import $ from "jquery";
window.$ = window.jQuery = $;
import "@babel/polyfill/noConflict";
import MicroModal from 'micromodal';
const dropdown = require('dkfds/src/js/components/dropdown.js');
const dt = require( 'datatables.net' ); //Core datatables
const dt_select = require( 'datatables.net-select' ); //Makes datatable rows selectable
const dt_responsive = require( 'datatables.net-responsive' ); //Makes datatables responsive

const jsSelectorDatatable_Example_basic = "#js-datatable-example-basic";
const jsSelectorDatatable_Example_extra_pagination = "#js-datatable-example-extra_pagination";
const jsSelectorDatatable_Example_ajax = "#js-datatable-example-ajax";
const jsSelectorDatatable_Example_detailsrow = "#js-datatable-example-detailsrow";
const jsSelectorDatatable_Example_selectable = "#js-datatable-example-selectable";
const jsSelectorDatatable_Example_edit = "#js-datatable-example-edit";
const jsSelectorDatatable_Example_edit2 = "#js-datatable-example-edit2";

const jsSelectorDatatable_Example_praktikplads = "#js-datatable-example-praktikplads";

class datatablesExamples {
  constructor(el){

    var languageConfig = {
        "lengthMenu": "Viser _MENU_ elementer pr side",
        "zeroRecords": "Der blev fundet intet resultat",
        "info": "Viser sider _PAGE_ af _PAGES_",
        "infoEmpty": "Intet resultat",
        "infoFiltered": "(filtreret fra _MAX_ elementer)",
        "emptyTable": "Ingen data",
        "search": "Filtrer:",
        "Sort": true,
        "paginate": {
            "first":      "Første",
            "last":       "Sidste",
            "next":       "Næste",
            "previous":   "Forrige"
        },
    };

    MicroModal.init({
        onShow: function(){
            document.getElementsByTagName('body')[0].classList.add('modal-active');
        },
        onClose: function(){
            document.getElementsByTagName('body')[0].classList.remove('modal-active');
        }
    });

    //////////////////////////////////////
    //Init a datatable with no configuration
    //////////////////////////////////////
    var table_basic = $(jsSelectorDatatable_Example_basic).DataTable({
        'language': languageConfig,
        'responsive': true,
        'createdRow': function( row, data, dataIndex ) {
            $(row).find('td').each(function( index, elm ) {
                if(!$(elm).hasClass('row-control')){
                    $(elm).attr('tabindex', 0); //Accessibility fix: make td's focusable by tab
                }
            });
        },
        "fnDrawCallback": function( oSettings ) {
            $('.dataTables_paginate a[aria-disabled=true]').removeAttr("aria-disabled");
            $('.dataTables_paginate .disabled').attr("aria-disabled", "true");
        }
    });


    //////////////////////////////////////
    //Init a datatable with ajax data
    //////////////////////////////////////
    var table_ajax = $(jsSelectorDatatable_Example_ajax).DataTable({
        'language': languageConfig,
        'responsive': true,
        'processing': true,
        'ajax': {
            "url": "https://jsonplaceholder.typicode.com/users",
            "dataSrc": ""
        },
        'columns': [
            { "data": "name" },
            { "data": "email" },
            { "data": "address.street" },
            { "data": "address.city" },
            { "data": "phone" }
        ],
        'createdRow': function( row, data, dataIndex ) {
            $(row).find('td').each(function( index, elm ) {
                if(!$(elm).hasClass('row-control')){
                    $(elm).attr('tabindex', 0); //Accessibility fix: make td's focusable by tab
                }
            });
        },
        "fnDrawCallback": function( oSettings ) {
            $('.dataTables_paginate a[aria-disabled=true]').removeAttr("aria-disabled");
            $('.dataTables_paginate .disabled').attr("aria-disabled", "true");
        }
    } );

    //////////////////////////////////////
    //Init a datatable with selectable rows
    //////////////////////////////////////
    var table_selectable = $(jsSelectorDatatable_Example_selectable).DataTable({
        'language': languageConfig,
        'responsive': true,
        'columnDefs': [ {
            orderable: false,
            targets:   0,
            render: function ( data, type, full, meta ) {
                var checkboxid = "checkbox-"+ Math.random().toString(36).substring(7);
                return "<div class='form-group'>"+
                            "<input id='"+checkboxid+"' type='checkbox' name='checked' class='form-checkbox'>"+
                            "<label for='"+checkboxid+"' ></label>" +
                        "</div>"
            }
        } ],
        /*select: {
            style:    'single',
            selector: 'td:first-child'
        },*/
        'order': [[ 1, 'asc' ]],
        'createdRow': function( row, data, dataIndex ) {
            $(row).find('td').each(function( index, elm ) {
                if(!$(elm).hasClass('row-control')){
                    $(elm).attr('tabindex', 0); //Accessibility fix: make td's focusable by tab
                }
            });
        },
        "fnDrawCallback": function( oSettings ) {
            $('.dataTables_paginate a[aria-disabled=true]').removeAttr("aria-disabled");
            $('.dataTables_paginate .disabled').attr("aria-disabled", "true");
        }
    });

    $(jsSelectorDatatable_Example_selectable).on("click", "input[type='checkbox']", function (event) {
        if (event.target.checked) {
            $(event.target).closest("tr").addClass("selected-row");
        } else {
            $(event.target).closest("tr").removeClass("selected-row");
        }
    } );

    //////////////////////////////////////
    //Init a datatable with expand row
    //////////////////////////////////////

    // Formatting function for row details - modify as you need
    function format ( d ) {
        // `d` is the original data object for the row
        return '<div class="details-row-content">' +
            '<h3 class="mt-0">Overskrift</h3>'+
          ' <div class="table--responsive-scroll">\n' +
            '        <table class="table">\n' +
            '            <thead>\n' +
            '                <tr>\n' +
            '                    <th>Affaldstype</th>\n' +
            '                    <th>Farvekode</th>\n' +
            '                    <th>Beskrivelse</th>\n' +
            '                    <th>Hvor ender det?</th>\n' +
            '                </tr>\n' +
            '            </thead>\n' +
            '            <tbody>\n' +
            '                <tr>\n' +
            '                    <td>Dagrenovation</td>\n' +
            '                    <td>Grøn</td>\n' +
            '                    <td>Madaffald, samt papir, pap eller plastik der ikke\n' +
            '                        kan genanvendes, fordi der er madrester eller andet\n' +
            '                        snask på.</td>\n' +
            '                    <td>Alt det affald, du smider ud i din primære\n' +
            '                        skraldespand, som er dagrenovationen, bliver hentet\n' +
            '                        og kørt på forbrændingen. </td>\n' +
            '                </tr>\n' +
            '                <tr>\n' +
            '                    <td>Bioaffald og kompost</td>\n' +
            '                    <td>Beige</td>\n' +
            '                    <td>Alt madaffald uden fødevareemballage.</td>\n' +
            '                    <td>Bioaffaldet kommes i bionedbrydelige poser, som\n' +
            '                        bliver komposteret til muld.</td>\n' +
            '                </tr>\n' +
            '                <tr>\n' +
            '                    <td>Glas</td>\n' +
            '                    <td>Hvid</td>\n' +
            '                    <td>Alle typer glas og flasker.</td>\n' +
            '                    <td>De hele vinflasker rengøres og genbruges af\n' +
            '                        vinhuse, mens glasskårene bliver smeltet om til nyt\n' +
            '                        glas.</td>\n' +
            '                </tr>\n' +
            '                <tr>\n' +
            '                    <td>Elektronik</td>\n' +
            '                    <td>Orange</td>\n' +
            '                    <td>Genstande der har brugt strøm.</td>\n' +
            '                    <td>Det elektroniske affald bliver typisk kørt til et\n' +
            '                        demonteringsanlæg, hvor det bliver skilt ad, så de\n' +
            '                        forskellige dele kan genanvendes separat.</td>\n' +
            '                </tr>\n' +
            '            </tbody>\n' +
            '        </table>\n' +
            '    </div>'
        '</div>';
    }


    var table_detailsrow = $(jsSelectorDatatable_Example_detailsrow).DataTable( {
        'language': languageConfig,
        'ajax': {
            "url": "https://jsonplaceholder.typicode.com/users",
            "dataSrc": ""
        },
        'rowId': "id",
        'columns': [
            {
                "className":      'details-control',
                "orderable":      false,
                "data":           null,
                "defaultContent": '',
                "width": "24px"
            },
            { "data": "name" },
            { "data": "address.street" },
            { "data": "address.city" },
            { "data": "phone" },
        ],
        'order': [[1, 'asc']],
        'responsive': {
            details: false
        },
        'createdRow': function( row, data, dataIndex ) {
            $(row).find('td').each(function( index, elm ) {
                if(!$(elm).hasClass('row-control')){
                    $(elm).attr('tabindex', 0); //Accessibility fix: make td's focusable by tab
                }
                if($(elm).hasClass('details-control')){
                    $(elm).attr('aria-label', 'Klik her for at udfolde en række nedenfor med detaljer.');
                }
            });
        },
        "fnDrawCallback": function( oSettings ) {
            $('.dataTables_paginate a[aria-disabled=true]').removeAttr("aria-disabled");
            $('.dataTables_paginate .disabled').attr("aria-disabled", "true");
        }
    } );

    var toggleDetails = function(element){
        var tr = $(element).closest('tr');
        var row = table_detailsrow.row( tr );

        if ( row.child.isShown() ) {
            // This row is already open - close it
            row.child.hide();
            $($(tr).find('.details-control')[0]).attr('aria-expanded', false);
            tr.removeClass('shown');
        }
        else {
            // Open this row
            row.child( format(row.data()), 'child').show();
            $(row.child()[0]).attr('aria-label', 'Række med detaljer');
            $($(tr).find('.details-control')[0]).attr('aria-expanded', true)
            tr.addClass('shown');
        }
    }

    // Add event listener for opening and closing details
    $(jsSelectorDatatable_Example_detailsrow).on('click', 'td.details-control', function () {
        toggleDetails(this);
    });
    $(jsSelectorDatatable_Example_detailsrow).keypress(function(event) {
        if(event.which == 13 || event.which == 32) { //enter and space
            toggleDetails(event.target);
        }
    });


    //////////////////////////////////////
    //Init a datatable with edit and delete
    //////////////////////////////////////
    var table_edit = $(jsSelectorDatatable_Example_edit).DataTable( {
        language: languageConfig,
        ajax: {
            "url": "https://jsonplaceholder.typicode.com/users",
            "dataSrc": ""
        },
        rowId: "id",
        columns: [
            { "data": "name" },
            { "data": "address.street" },
            { "data": "address.city" },
            { "data": "company.name" },
            {
                "targets": -1,
                "className":      'row-control',
                "data": null,
                "orderable": false,
                "responsivePriority": 1, //do not responsive hide last
                "render": function ( data, type, full, meta ) {
                    var overflowID = "overflow-table-"+full.id;
                    return  `<div class="overflow-menu overflow-menu--open-left overflow-menu--hover-bg">
                                <button class="button-overflow-menu js-dropdown" data-js-target="#`+ overflowID +`" aria-haspopup="true" aria-expanded="false">
                                    <svg class="icon-svg" aria-hidden="true" focusable="false" tabindex="-1"><use xlink:href="#dots-vertical"></use></svg>
                                </button>
                                <div class="overflow-menu-inner" id="`+ overflowID +`" aria-hidden="true">
                                    <ul class="overflow-list">
                                        <li><button class="js-edit-modal-trigger">Rediger <svg class="icon-svg" aria-hidden="true" focusable="false" tabindex="-1"><use xlink:href="#pencil"></use></svg></button></li>
                                        <li><button class="js-delete-modal-trigger danger-delete">Slet <svg class="icon-svg" aria-hidden="true" focusable="false" tabindex="-1"><use xlink:href="#delete"></use></svg></button></li>
                                    </ul>
                                </div>
                            </div>`
                }
            }
        ],
        'createdRow': function( row, data, dataIndex ) {
            $(row).find('td').each(function( index, elm ) {
                if(!$(elm).hasClass('row-control')){
                    $(elm).attr('tabindex', 0); //Accessibility fix: make td's focusable by tab
                }
            });
        },
        order: [[1, 'asc']],
        'responsive': true,
        'initComplete': function(settings, json) {
            $(jsSelectorDatatable_Example_edit).find('.js-dropdown').each(function( index ) {
                new dropdown(this);
            });
        },
        "fnDrawCallback": function( oSettings ) {
            $('.dataTables_paginate a[aria-disabled=true]').removeAttr("aria-disabled");
            $('.dataTables_paginate .disabled').attr("aria-disabled", "true");
        }
    } );

    var currentEditTr = null

    //Open edit modal
    $(jsSelectorDatatable_Example_edit).on('click', '.js-edit-modal-trigger', function () {

        //get data from row
        currentEditTr = $(this).closest('tr');
        var data = table_edit.row(currentEditTr).data();
        var id = table_edit.row(currentEditTr).id()

        //insert data in modal
        $('#edit-row-id').val(id);
        $('#edit-navn').val(data.name);
        $('#edit-vejnavn').val(data.address.street);
        $('#edit-by').val(data.address.city);
        $('#edit-firmanavn').val(data.company.name);

        //open modal
        MicroModal.show('modal-edit');
    });

    //Update edit row
    $('body').on('click', '.js-edit-save-trigger', function () {

        //get row data
        var data = table_edit.row(currentEditTr).data();

        //update  data
        data.name = $('#edit-navn').val();
        data.address.street = $('#edit-vejnavn').val();
        data.address.city =  $('#edit-by').val();
        data.company.name = $('#edit-firmanavn').val();

        //Update row and redraw
        table_edit.row(currentEditTr).data(data).draw();

        //close modal
        MicroModal.close('modal-edit');
    });

    var currentDeleteTr = null
    //Open delete modal
    $(jsSelectorDatatable_Example_edit).on('click', '.js-delete-modal-trigger', function () {

        currentDeleteTr = $(this).closest('tr');

        //open modal
        MicroModal.show('modal-delete');
    });
    //do delete
    $('body').on('click', '.js-delete-trigger', function () {

        //delete row
        table_edit.row(currentDeleteTr).remove().draw();

        //close modal
        MicroModal.close('modal-delete');
    });

    //////////////////////////////////
    //Edit tabel uden overflow-menu.
    //////////////////////////////////
    var table_edit2 = $(jsSelectorDatatable_Example_edit2).DataTable( {
        language: languageConfig,
        ajax: {
            "url": "https://jsonplaceholder.typicode.com/users",
            "dataSrc": ""
        },
        rowId: "id",
        columns: [
            { "data": "name" },
            { "data": "address.street" },
            { "data": "address.city" },
            { "data": "company.name" },
            {
                "targets": -1,
                "className":      'row-control',
                "data": null,
                "orderable": false,
                "responsivePriority": 1, //do not responsive hide last
                "render": function ( data, type, full, meta ) {
                    return  `<button class="button button-unstyled px-3 js-delete-modal-trigger"><svg class="icon-svg" aria-hidden="true" focusable="false" tabindex="-1"><use xlink:href="#delete-outline"></use></svg><span class="sr-only">Slet</span></button>`
                }
            }
        ],
        order: [[1, 'asc']],
        'responsive': true,
        'createdRow': function( row, data, dataIndex ) {
            $(row).find('td').each(function( index, elm ) {
                if(!$(elm).hasClass('row-control')){
                    $(elm).attr('tabindex', 0); //Accessibility fix: make td's focusable by tab
                }
            });
        },
        "fnDrawCallback": function( oSettings ) {
            $('.dataTables_paginate a[aria-disabled=true]').removeAttr("aria-disabled");
            $('.dataTables_paginate .disabled').attr("aria-disabled", "true");
        }
    });
    $(jsSelectorDatatable_Example_edit2).on('click', '.js-delete-modal-trigger', function () {

        currentDeleteTr = $(this).closest('tr');

        //open modal
        MicroModal.show('modal-delete');
    });

    /////////////////////////////////
    //Give dummy buttons to top bar (all datatables)
    /////////////////////////////////
    var downloadButton = "<button class='button button-unstyled mr-4' tabindex='0' aria-label='Download som PDF'><svg class='icon-svg m-0' aria-hidden=\"true\" tabindex=\"-1\" focusable=\"false\"><use xlink:href='#download'></use></svg></button>";
    var settingsButton = "<button class='button button-unstyled mr-4' tabindex='0' aria-label='Rediger egenskaber'><svg class='icon-svg m-0' aria-hidden=\"true\" tabindex=\"-1\" focusable=\"false\"><use xlink:href='#settings'></use></button>";
    $('.dataTables_filter').prepend(downloadButton).prepend(settingsButton);

    /////////////////////////////////
    //PRAKTIKPLADS DATATABLE
    /////////////////////////////////
    var table_praktikplads = $(jsSelectorDatatable_Example_praktikplads).DataTable( {
        language: languageConfig,
        ajax: {
            "url": "https://api.myjson.com/bins/1adkvm",
            "dataSrc": ""
        },
        rowId: "id",
        columns: [
            { "data": "student", "width": "20%" },
            { "data": "birthday" },
            { "data": "education" },
            { "data": "education2" },
            { "data": "education3" },
            { "data": "education4" }
        ],
        order: [[1, 'asc']],
        paging:   false,
        searching: false,
        info:     false,
        'responsive': true,
        'createdRow': function( row, data, dataIndex ) {
            $(row).find('td').each(function( index, elm ) {
                if(!$(elm).hasClass('row-control')){
                    $(elm).attr('tabindex', 0); //Accessibility fix: make td's focusable by tab
                }
            });
        },
        "fnDrawCallback": function( oSettings ) {
            $('.dataTables_paginate a[aria-disabled=true]').removeAttr("aria-disabled");
            $('.dataTables_paginate .disabled').attr("aria-disabled", "true");
        }
    } );

  }
}

$(document).ready(function() {
    new datatablesExamples();
});
