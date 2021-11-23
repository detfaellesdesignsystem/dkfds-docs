document.addEventListener("DOMContentLoaded", function() {
    demoReturnToPreviousPage();
});

/**
 * If demo page with demo footer handle link to previous page if defined
 */
function demoReturnToPreviousPage(){
    if(document.getElementById('btn-demo-return') !== null){
        const queryString = window.location.search;
        let links = document.getElementsByTagName('a');
        for(let l = 0; l < links.length; l++){
            let link = links[l]
            let href = link.getAttribute('href');
            if(href !== "" && !href.startsWith("#") && href.indexOf("javascript") === -1 && href.length > 5 && window.location.href.indexOf('?r=/eksempler/selvbetjeningsloesninger/') !== -1){
                link.setAttribute('href', href + queryString);
            }
        }
        
        let forms = document.getElementsByTagName('form');
        for(let f = 0; f < forms.length; f++){
            let form = forms[f]
            let action = form.getAttribute('action');
            if(action !== null && (action !== "" && action !== "#" && action.length > 5 && window.location.href.indexOf('?r=/eksempler/selvbetjeningsloesninger/') !== -1)){
                form.setAttribute('action', action + queryString);
            }
        }
        
        const urlParams = new URLSearchParams(queryString);
        const returnUrl = urlParams.get('r');
        if (returnUrl !== null){
            document.getElementById('btn-demo-return').setAttribute('href', returnUrl.replace('%23', '#'));
        }
    }
}
