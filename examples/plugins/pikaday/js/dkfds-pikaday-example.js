'use strict';
import $ from "jquery";
window.$ = window.jQuery = $
const Pikaday = require('pikaday');
const jsDatepickerSelector = '.js-calendar-datepicker';
const jsDayInput = '.js-calendar-day-input';
const jsMonthInput = '.js-calendar-month-input';
const jsYearInput = '.js-calendar-year-input';
class datepickerGroup {
    constructor(el){

      this.pikadayInstance = null;
      this.datepickerElement = $(el).find(jsDatepickerSelector);
      this.dateGroup = el;
      this.formGroup = $(el).parent('.form-group');
      this.dayInputElement = null;
      this.monthInputElement = null;
      this.yearInputElement = null;

      this.initDateInputs();
      if(this.datepickerElement.length != 0){
          this.initDatepicker(this.datepickerElement[0]);
      }
    }

    initDateInputs(){
        this.dayInputElement = this.formGroup.find(jsDayInput)[0];
        this.monthInputElement = this.formGroup.find(jsMonthInput)[0];
        this.yearInputElement = this.formGroup.find(jsYearInput)[0];

        var that = this;

        this.dayInputElement.addEventListener("blur", function(){
            that.formatInputs();
            that.validateInputs();
        });
        this.dayInputElement.addEventListener("paste", function(){
            that.formatInputs();
            that.validateInputs();
        });

        this.monthInputElement.addEventListener("blur", function(){
            that.formatInputs();
            that.validateInputs();
        });
        this.monthInputElement.addEventListener("paste", function(){
            that.formatInputs();
            that.validateInputs();
        });

        this.yearInputElement.addEventListener("blur", function(){
            that.formatInputs();
            that.validateInputs();
        });
        this.yearInputElement.addEventListener("paste", function(){
            that.formatInputs();
            that.validateInputs();
        });
    }

    initDatepicker(el){
        if(el){
            //Note: el may not be a <svg>, IE11 does not add .blur() method to svg elements (--> esc and enter does not dismiss pikaday).
            this.initDone = false;
            var that = this;

            this.pikadayInstance = new Pikaday({
                field: el,
                format: 'DD/MM/YYYY',
                firstDay: 1, //mandag
                i18n: {
                    previousMonth : 'Forrige måned',
                    nextMonth     : 'Næste måned',
                    months        : ['Januar','Februar','Marth','April','Maj','Juni','July','August','September','Oktober','November','December'],
                    weekdays      : ['Søndag','Mandag','Tirsdag','Onsdag','Torsdag','Fredag','Lørdag'],
                    weekdaysShort : ['Søn','Man','Tir','Ons','Tor','Fre','Lør']
                },
                onSelect: function(date) {
                    //selected new date in pikaday, update input fields.
                    if(that.initDone){
                        that.updateDateInputs(date);
                        that.validateInputs();
                    }
                },
                onOpen: function(){
                    //update pikaday with values from input fields
                    var day = parseInt(that.dayInputElement.value);
                    var month = parseInt(that.monthInputElement.value) -1;
                    var year = parseInt(that.yearInputElement.value);
                    var newDate = new Date(year, month, day);
                    if(that.validateInputs()){
                        that.updateDatepickerDate(newDate)
                    }
                }
            });

            var initDate = new Date();
            this.pikadayInstance.setDate(initDate);
            //this.updateDateInputs(initDate);
            this.initDone = true;
        }
    }

    validateInputs(){
        var day = this.dayInputElement.value;
        var month = this.monthInputElement.value;
        var year = this.yearInputElement.value;
        var maxDay = new Date(year, month, 0).getDate();

        var dayRegexStr = this.dayInputElement.getAttribute('data-input-regex');
        var monthRegexStr = this.monthInputElement.getAttribute('data-input-regex');
        var yearRegexStr = this.yearInputElement.getAttribute('data-input-regex');

        var rDay = new RegExp(dayRegexStr);
        var rMonth = new RegExp(monthRegexStr);
        var rYear = new RegExp(yearRegexStr);

        var msg = "";
        var isValid = true;
        if(day != "" || month != "" ||  year != "") {
            if ((rDay.exec(day) === null || rMonth.exec(month) === null || rYear.exec(year) === null)) {
                isValid = false;
                msg = "Beklager, men du kan kun bruge tal."
                this.showError(msg);
            } else if (day > maxDay) {
                isValid = false;
                msg = "Hov, den dag findes ikke i den valgte måned."
                this.showError(msg);
            } else if (month > 12) {
                isValid = false;
                msg = "Hov, den måned findes ikke."
                this.showError(msg);
            }
        }

        if(isValid){
            this.removeError();
        }

        return isValid;
    }
    showError(msg){
        this.formGroup[0].classList.add("form-error");
        var message = $(this.dateGroup).siblings(".form-error-message");
        if(message.length != 0){
            message[0].textContent = msg;
        }
    }
    removeError(){
        this.formGroup[0].classList.remove("form-error");
        var message = $(this.dateGroup).siblings(".form-error-message");
        if(message.length != 0){
            message[0].textContent = "";
        }
    }

    updateDateInputs(date){
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();

        this.dayInputElement.value = this.dayFormat(day);
        this.monthInputElement.value = this.monthFormat(month);
        this.yearInputElement.value = year;
    }

    //adds 0 at the front of day number
    dayFormat(day){
        return ("0" + day).slice(-2);
    }
    monthFormat(month){
        return ("0" + month).slice(-2);
    }
    formatInputs(){
        var day = parseInt(this.dayInputElement.value)
        var month = parseInt(this.monthInputElement.value);
        if(!isNaN(day) ) {
            this.dayInputElement.value = this.dayFormat(day);
        }
        if(!isNaN(month)){
            this.monthInputElement.value = this.monthFormat(month);
        }
    }

    updateDatepickerDate(newDate){
        this.pikadayInstance.setDate(newDate);
    }
}

$(document).ready(function() {
    var calendarGroup = $('.js-calendar-group');
    for (var d = 0; d < calendarGroup.length; d++){
        new datepickerGroup(calendarGroup[d]);
    }
});
