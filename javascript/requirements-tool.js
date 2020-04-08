'use strict';
import "@babel/polyfill";
import tippy from 'tippy.js';
import MicroModal from 'micromodal';
let toolIsProcessing = false;
require('./theme');


let questionnaire = {};
const storageKey = "reqTool";
const root = window.location.origin + "/krav-vaerktoej";
const restart = window.location.origin + '/komigang/krav/';

let questions = [
    {'id': "Q100", "path": "/anvendes-af-virksomheder/", "status": true},
    {'id': "Q200", "path": "/anvendes-af-borgere/", "status": true},
    {'id': "Q300", "path": "/obligatorisk-for-borgere/", "status": false, "trueIf": [{"question": "Q200", "value": true}]},
    {'id': "Q400", "path": "/besoegende-om-aaret/", "status": false, "trueIf": [{"question": "Q100", "value": true}, {"question": "Q300", "value": true}]},
    {'id': "Q500", "path": "/en-eller-flere-loesninger-brugertest/", "status": false, "trueIf": [{"question": "Q400", "value": true}]},
    {'id': "Q600", "path": "/bestaaet-faellesoffentlige-brugertest/", "status": false, "trueIf": [{"question": "Q500", "value": false}]},
    {'id': "Q700", "path": "/transaktioner-per-aar/", "status": false, "trueIf": [{"question": "Q100", "value": true}, {"question": "Q300", "value": true}]},
    {'id': "Q000", "path": "/resultat/", "status": true},
];

// define krav og anbefalinger - hvornår er det krav, og hvornår er det anbefaling?
let krav = [""];
krav[1] = {"title": "Tidlig brugerinddragelse", "krav": false};

krav[2] = {"title": "Sprog", "krav": false, "trueIf": [
        {"question": "Q100", "value": true},
        {"question": "Q300", "value": true},
        ]};

krav[3] = {"title": "Konventioner for flow og funktionalitet", "krav": false};

krav[4] = {"title": "Feltvalidering", "krav": false, "trueIf": [
            {"question": "Q100", "value": true},
            {"question": "Q300", "value": true},
        ]};

krav[5] = {"title": "Personalisering", "krav": false};

krav[6] = {"title": "Understøttelse af styresystemer og browsere", "krav": false, "trueIf": [
            {"question": "Q100", "value": true},
            {"question": "Q300", "value": true},
        ]};

krav[7] = {"title": "Understøttelse af skærmstørrelser", "krav": false, "trueIf": [
            {"question": "Q100", "value": true},
            {"question": "Q300", "value": true},
        ]};

krav[8] = {"title": "Bestå den fællesoffentlige brugertest", "krav": false, "trueIf": [
        {"question": "Q600", "value": false}
    ]};

krav[9] = {"title": "Indsamling af viden om brugernes anvendelse af digitale løsninger", "krav": false, "trueIf": [
        {"question": "Q700", "value": true}
    ]};

krav[10] = {"title": "Anvendelse af infrastrukturkomponenter og andre komponenter", "krav": false, "trueIf": [
            {"question": "Q100", "value": true},
            {"question": "Q300", "value": true},
        ]};

krav[11] = {"title": "Genbrug af datakilder", "krav": false, "trueIf": [
        {"question": "Q100", "value": true},
        {"question": "Q300", "value": true},
    ]};

krav[12] = {"title": "Efterlevelse af aftalte arkitekturstandarder", "krav": false, "trueIf": [
        {"question": "Q100", "value": true},
        {"question": "Q300", "value": true},
    ]};

krav[13] = {"title": "Krav til løsninger, der skal på borger.dk og Virk", "krav": false, "trueIf": [
        {"question": "Q100", "value": true},
        {"question": "Q300", "value": true},
    ]};



document.addEventListener("DOMContentLoaded", function(){

    tippy('.js-tippy', {
        duration: 0,
        arrow: true
    });

    MicroModal.init({
        onShow: function(){
            document.getElementsByTagName('body')[0].classList.add('modal-active');
        },
        onClose: function(){
            document.getElementsByTagName('body')[0].classList.remove('modal-active');
        }
    });

    if(document.getElementsByTagName('body')[0].classList.contains('page-resultat')) {
        let elemToObserve = document.getElementById('modal-print');
        let stateToObserve = document.getElementById('modal-print').classList.contains('is-open');
        var observer = new MutationObserver(function (mutations) {
            for(let mutation in mutations) {
                if (mutations[mutation].attributeName == "class") {
                    let newStateToObserve = mutations[mutation].target.classList.contains('is-open');
                    if (stateToObserve === true && newStateToObserve === false) {
                        stateToObserve = newStateToObserve;
                        if (document.getElementById('print-title').getAttribute('data-print') === "true") {
                            document.getElementById('print-title').setAttribute('data-print', "false");
                            window.print();
                        }
                    } else {
                        stateToObserve = newStateToObserve;
                    }
                }
            }
        });
        observer.observe(elemToObserve, {attributes: true});
    }

    let backlink = document.getElementById('back-link');
    if(backlink !== null){
        backlink.addEventListener('click', goOneQuestionBack);
    }

    questionnaire = getQuestionnaire();
    manageFlow();
    setAnswerOnLoad();
    formSubmitHandler();
    checkTotalMeltdown();

    // result page
    generateResult();
    printResultHandler();
    startOverButtonHandler();

    let close = document.getElementById('close-tool');
    if(close !== null){
        close.addEventListener('click', closeTool);
    }
    let closeClass = document.getElementsByClassName('close-tool');
    if(closeClass.length !== 0){
        closeClass[0].addEventListener('click', closeTool);
    }

    // alert upon closing page
    window.onbeforeunload = function (e) {
        let showPopup = true;
        if(toolIsProcessing){
            showPopup = false;
        } else {
            let activeElement = document.activeElement;
            if(activeElement.href !== undefined && (activeElement.innerText === "Redigér" || activeElement.innerText === "Tilbage" || activeElement.getAttribute('href').indexOf('mailto:') !== -1)){
                showPopup = false;
            }
        }

        if(showPopup) {
            e = e || window.event;

            // For IE and Firefox prior to version 4
            if (e) {
                e.returnValue = 'Sure?';
            }

            showPopup = true;

            // For Safari
            return 'Sure?';
        }
    };


});

let printResultHandler = function(){
    let printButton = document.getElementById('print-result-solution');
    if(printButton !== null){
        printButton.addEventListener('click', function(){
            let value = document.getElementById('solution-name-input').value;
            if(value !== "") {
                document.getElementById('print-title').innerText = 'Fælles krav som "' + value + '" skal overholde';
                document.getElementById('print-title').setAttribute('data-print', "true");
                document.getElementById('modal-print').getElementsByClassName('form-group')[0].classList.remove('form-error');
                document.getElementById('solution-name-error').classList.add('d-none');
                document.getElementById('solution-name-input').removeAttribute('aria-describedby');
                document.getElementById('result-container').getElementsByTagName('h1')[0].classList.add('d-print-none');
                document.getElementById('print-title').classList.add('d-print-block');
                MicroModal.close('modal-print');
            } else{
                // error
                document.getElementById('modal-print').getElementsByClassName('form-group')[0].classList.add('form-error');
                document.getElementById('solution-name-error').classList.remove('d-none');
                document.getElementById('solution-name-input').setAttribute('aria-describedby', document.getElementById('solution-name-error').getAttribute('id'))
            }
        });
    }
};

let startOverButtonHandler = function(){
    let button = document.getElementById('start-over');
    if(button !== null){
        button.addEventListener('click', startOver);
    }
};

/**
 * Get the index of a certain question in the questions array
 * @param id ID of question
 * @returns {number} Returns the index of the question in the questions array
 */
let getIndexOfQuestion = function(id){
    return questions.findIndex(obj => obj.id === id);
};

/***
 * Define which questions are relevant at this stage
 */
let manageFlow = function(){
    for (let i = 0; i < questions.length; i++){
        if(questions[i].trueIf !== undefined){
            let status = false;
            for (let b = 0; b < questions[i].trueIf.length; b++){
                let trueIf = questions[i].trueIf[b];
                // if chosen value matches condition, then show question
                if(questions[getIndexOfQuestion(trueIf.question)].status === true && questionnaire[trueIf.question] !== undefined && questionnaire[trueIf.question] === trueIf.value){
                    status = true;
                }
            }

            questions[i].status = status;
        }
    }
};

/**
 * Update localStorage, so only answers to enabled questions remain
 */
let verifyAnswersToQuestions = function(){
    let updateQuestionnaire = {};
    for (var key in questionnaire) {
        if(questions[getIndexOfQuestion(key)].status === true){
            updateQuestionnaire[key] = questionnaire[key];
        }
    }
    questionnaire = updateQuestionnaire;
};

/**
 * Set form eventlistener on submit
 */
let formSubmitHandler = function(){

    let form = document.getElementsByTagName("form");
    if(form.length > 0) {
        let id = form[0].id.split('-')[1];
        form[0].addEventListener("submit", function(e){
            e.preventDefault();
            formSubmit(id);
        }, false);
    }
};

/**
 * validate and save value from form + navigate to next question
 * @param id ID of question
 */
let formSubmit = function(id){
    if(validate()) {
        questionnaire[id] = (document.querySelector('input[name="radio"]:checked').value === '1');
        manageFlow();
        saveQuestionnaire();
        goTo(getNextEnabledQuestion(id).path);
    }
};

/**
 * Get next question where status is true
 * @param currentQuestionID the id of the current question
 * @returns returns the next question in the array
 */
let getNextEnabledQuestion = function(currentQuestionID){
    let currentIndex = getIndexOfQuestion(currentQuestionID);
    let nextQuestion = null;
    for (let i = currentIndex+1; i < questions.length; i++){
        if(questions[i].status === true){
            nextQuestion = questions[i];
            break;
        }
    }
    return nextQuestion;
};

/**
 * Get questionnaire from localstorage
 * @returns JSON
 */
let getQuestionnaire = function(){
    let reqTool = localStorage.getItem(storageKey);
    if(reqTool === null){
        return {};
    }
    return JSON.parse(reqTool);
};


/**
 * Save questionnaire to localstorage
 */
let saveQuestionnaire = function(){
    verifyAnswersToQuestions();
    localStorage.setItem(storageKey, JSON.stringify(questionnaire));
};

/**
 * Validate form
 * @returns {boolean}
 */
let validate = function(){
    let radio = document.querySelector('input[name="radio"]:checked');
    if(radio === null){
        document.getElementsByClassName('form-group')[0].classList.add('form-error');
        document.getElementById('error-message').innerText = "Vælg venligst Ja eller Nej";
        document.getElementById('error-message').classList.remove('d-none');
        return false;
    }

    document.getElementsByClassName('form-group')[0].classList.remove('form-error');
    document.getElementById('error-message').classList.add('d-none');
    document.getElementById('error-message').innerText = "";
    return true;
};

/**
 * Go to new page
 * @param url
 */
let goTo = function(url){
    toolIsProcessing = true;
    window.location.href =  root + url;
};


let goOneQuestionBack = function(){
    let current = getCurrentFormId();
    let nextQuestion = getPreviousActiveQuestion(current);
    goTo(nextQuestion.path);
};

let getPreviousActiveQuestion = function(current){
    let getIndexOfCurrent = getIndexOfQuestion(current);
    let prevIndex = getIndexOfCurrent-1;
    let nextQuestion = questions[prevIndex];
    if(nextQuestion.status === true){
        return nextQuestion;
    }

    return getPreviousActiveQuestion(nextQuestion.id);
};

let validateAllQuestions = function (){
    let error = false;
    let errorQuestions = [];
    questions.forEach(question => {
        if(question.status === true && question.id !== 'Q000'){
            if(questionnaire[question.id] === undefined){
                error = true;
                errorQuestions.push(question);
            }
        }
    });

    return errorQuestions;
};

/**
 * Set correct chosen values on results page. Hide Questions not answered.
 */
let generateResult = function () {
    let errorQuestions = validateAllQuestions();
    if(errorQuestions.length === 0){
        if(document.querySelector('body.page-resultat') !== null){
            if(Object.getOwnPropertyNames(getQuestionnaire()).length === 0){
             goTo('');
             return;
            }

            let summaryTable = document.getElementById('summary');
            let rows = summaryTable.getElementsByTagName('tr');
            for(let i = 0; i < rows.length; i++){
                let id = rows[i].id;
                let value = questionnaire[id];
                if(value === undefined){
                    rows[i].classList.add('d-none');
                    continue;
                }
                if(value === true){
                    rows[i].querySelector('.value').innerText = "Ja";
                } else {
                    rows[i].querySelector('.value').innerText = "Nej";
                }
                rows[i].classList.remove('d-none');
            }

            let resultTable = document.getElementById('resultat');
            let resultRows = resultTable.getElementsByTagName('tr');
            for (let v = 0; v < resultRows.length; v++){
                let kravNo = v+1;
                let badge = resultRows[v].getElementsByTagName('label')[0];
                if(isThisAKrav(kravNo)){
                    badge.innerText = "Krav";
                    badge.classList.add('badge-warning');
                } else{
                    badge.innerText = "Anbefaling";
                    badge.classList.add('badge-info');
                }
            }
            document.getElementById('result-container').classList.remove('d-none');
        }
    } else if(document.getElementById('error-container') !== null){
        toolIsProcessing = true;
        document.getElementById('continue-questionnaire-link').setAttribute('href', root + errorQuestions[0].path)
        document.getElementById('error-container').classList.remove('d-none');
    }
};

/**
 * Check if the krav is a requirement or recommendation dependent on the answers provided
 * @param kravNo number of the requirement/recommendation
 * @returns {boolean} return true if it's a requirement, false if recommendation
 */
let isThisAKrav = function(kravNo){
    if(krav[kravNo].trueIf !== undefined) {
        for (let i = 0; i < krav[kravNo].trueIf.length; i++) {
            let answer = questionnaire[krav[kravNo].trueIf[i].question];
            if (answer === krav[kravNo].trueIf[i].value) {
                return true;
            }
        }
    }
    return false;
};

/**
 * If going back in the flow to a previous step
 */
let setAnswerOnLoad = function(){
    let form = document.getElementsByTagName("form");
    if(form.length > 0) {
        let id = form[0].id.split('-')[1];
        let questionnaireValue = questionnaire[id];
        if(questionnaireValue !== undefined){
            if(questionnaireValue === true){
                document.getElementById('radio-yes').checked = true;
                document.getElementById('radio-no').checked = false;
            } else{
                document.getElementById('radio-yes').checked = false;
                document.getElementById('radio-no').checked = true;
            }
        }
    }
};

/**
 * Get the ID of the current form
 * @returns Returns string containing ID of the current question from the array - returns false, if no form was found
 */
let getCurrentFormId = function(){

    let form = document.getElementsByTagName("form");
    if(form.length > 0) {
        return form[0].id.split('-')[1];
    }
    return false;
};

/**
 * There was an error - delete all and be gone from this place!
 */
let checkTotalMeltdown = function(){
  if (getCurrentFormId() !== false && questions[getIndexOfQuestion(getCurrentFormId())].status === false){
      closeTool();
  }
};

let startOver = function(){
    localStorage.removeItem(storageKey);
    goTo(questions[0].path);
};
let closeTool = function(){
    localStorage.removeItem(storageKey);

    toolIsProcessing = true;
    if(window.location.href.indexOf('krav-vaerktoej/resultat/') === -1){
        toolIsProcessing = false;

    }
    window.location.href = window.location.origin + '/komigang/krav/';
};
