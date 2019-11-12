'use strict';
import $ from "jquery";
window.$ = window.jQuery = $;
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
      this.dayInputElement = null;
      this.monthInputElement = null;
      this.yearInputElement = null;

      this.initDateInputs();
      if(this.datepickerElement.length !== 0){
          this.initDatepicker(this.datepickerElement[0]);
      }
    }

    initDateInputs(){
        this.dayInputElement = $(this.dateGroup).find(jsDayInput)[0];
        this.monthInputElement = $(this.dateGroup).find(jsMonthInput)[0];
        this.yearInputElement = $(this.dateGroup).find(jsYearInput)[0];

        let that = this;

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
            let that = this;

            this.pikadayInstance = new Pikaday({
                field: el,
                format: 'DD/MM/YYYY',
                firstDay: 1, //mandag
                i18n: {
                    previousMonth : 'Forrige måned',
                    nextMonth     : 'Næste måned',
                    months        : ['Januar','Februar','Marts','April','Maj','Juni','Juli','August','September','Oktober','November','December'],
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
                    let day = parseInt(that.dayInputElement.value);
                    let month = parseInt(that.monthInputElement.value) -1;
                    let year = parseInt(that.yearInputElement.value);
                    let newDate = new Date(year, month, day);
                    if(that.validateInputs()){
                        that.updateDatepickerDate(newDate)
                    }
                }
            });

            let initDate = new Date();
            this.pikadayInstance.setDate(initDate);
            //this.updateDateInputs(initDate);
            this.initDone = true;
        }
    }

    validateInputs(){
        let day = this.dayInputElement.value;
        let month = this.monthInputElement.value;
        let year = this.yearInputElement.value;
        let maxDay = new Date(year, month, 0).getDate();

        let dayRegexStr = this.dayInputElement.getAttribute('data-input-regex');
        let monthRegexStr = this.monthInputElement.getAttribute('data-input-regex');
        let yearRegexStr = this.yearInputElement.getAttribute('data-input-regex');

        let rDay = new RegExp(dayRegexStr);
        let rMonth = new RegExp(monthRegexStr);
        let rYear = new RegExp(yearRegexStr);

        let msg = "";
        let isValid = true;
        if(day !== "" || month !== "" ||  year !== "") {
            if ((rDay.exec(day) === null || rMonth.exec(month) === null || rYear.exec(year) === null)) {
                isValid = false;
            }
            if (day > maxDay) {
                isValid = false;
            }
            if (month > 12) {
                isValid = false;
            }
            if((day !== "") && !(parseInt(day) >= this.dayInputElement.getAttribute('data-min') && parseInt(day) <= this.dayInputElement.getAttribute('data-max'))){
                isValid = false;
            }
            if((month !== "") && !(parseInt(month) >= this.monthInputElement.getAttribute('data-min') && parseInt(month) <= this.monthInputElement.getAttribute('data-max'))){
                isValid = false;
            }
            if((year !== "") && !(parseInt(year) >= this.yearInputElement.getAttribute('data-min') && parseInt(year) <= this.yearInputElement.getAttribute('data-max'))){
                isValid = false;
            }
        }


        if(isValid === false) {
            msg = "Ugyldig dato. Vælg en anden.";
            this.showError(msg);
        }

        if(isValid){
            this.removeError();
        }

        return isValid;
    }

    showError(msg){
        this.dateGroup.classList.add("form-error");
        let message = $(this.dateGroup).siblings(".form-error-message");
        if(message.length !== 0){
            message[0].textContent = msg;
            message.removeClass('d-none');
        }
    }
    removeError(){
        this.dateGroup.classList.remove("form-error");
        let message = $(this.dateGroup).siblings(".form-error-message");
        if(message.length !== 0){
            message[0].textContent = "";
            message.addClass('d-none');
        }
    }

    updateDateInputs(date){
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

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
        let day = parseInt(this.dayInputElement.value);
        let month = parseInt(this.monthInputElement.value);
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
    let calendarGroup = $('.js-calendar-group');
    for (let d = 0; d < calendarGroup.length; d++){
        new datepickerGroup(calendarGroup[d]);
    }
});
