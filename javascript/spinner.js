let flow = [
    {'ms': 5000, 'text': 'Arbejder'},
    {'ms': 5000, 'text': 'Arbejder stadig'},
    {'ms': 11000, 'text': 'Det tager længere end forventet, beklager'},
    {'ms': 18000, 'text': 'Vi er stadig i gang, undskyld ventetiden'}
];

document.addEventListener("DOMContentLoaded", function() {
    if(document.getElementsByTagName('body')[0].classList.contains('page-spinner') ){
        timeoutSpinner(1);
    }
});

function timeoutSpinner(index){
    let text = flow[index].text;
    let ms = flow[index].ms;
    setTimeout(function(){ 
        document.getElementsByClassName('spinner-status')[0].innerHTML = text;
        index++;
        if(index > 3){
            index = 0;
        }
        timeoutSpinner(index);
    }, ms);
}