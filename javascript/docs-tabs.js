function showGuidelines() {
    let guidelineTab = document.getElementById('guidelines-tab');
    let codeTab = document.getElementById('code-tab');
    document.getElementById('guidelines-section').classList.remove('d-none');
    document.getElementById("code-section").classList.add('d-none');
    guidelineTab?.setAttribute('aria-current', 'true');
    codeTab?.removeAttribute('aria-current');
    let introExample = document.querySelector('.intro-example');
    introExample?.classList.remove('d-none');
    let guidelineAnchorlinks = document.querySelectorAll('.anchorlink-guidelines');
    let codeAnchorlinks = document.querySelectorAll('.anchorlink-code');
    for (let i = 0; i < guidelineAnchorlinks.length; i++) {
        guidelineAnchorlinks[i].classList.remove('d-none');
    }
    for (let i = 0; i < codeAnchorlinks.length; i++) {
        codeAnchorlinks[i].classList.add('d-none');
    }
    let anchorboxes = document.querySelectorAll('.anchorbox');
    for (let i = 0; i < anchorboxes.length; i++) {
        anchorboxes[i].classList.remove('d-none');
        if (anchorboxes[i].classList.contains('hide-guidelines')) {
            anchorboxes[i].classList.add('d-none');
        }
    }
}

function showCode() {
    let guidelineTab = document.getElementById('guidelines-tab');
    let codeTab = document.getElementById('code-tab');
    document.getElementById('guidelines-section').classList.add('d-none');
    document.getElementById('code-section').classList.remove('d-none');
    guidelineTab?.removeAttribute('aria-current');
    codeTab?.setAttribute('aria-current', 'true');
    let introExample = document.querySelector('.intro-example');
    introExample?.classList.add('d-none');
    let guidelineAnchorlinks = document.querySelectorAll('.anchorlink-guidelines');
    let codeAnchorlinks = document.querySelectorAll('.anchorlink-code');
    for (let i = 0; i < guidelineAnchorlinks.length; i++) {
        guidelineAnchorlinks[i].classList.add('d-none');
    }
    for (let i = 0; i < codeAnchorlinks.length; i++) {
        codeAnchorlinks[i].classList.remove('d-none');
    }
    let anchorboxes = document.querySelectorAll('.anchorbox');
    for (let i = 0; i < anchorboxes.length; i++) {
        anchorboxes[i].classList.remove('d-none');
        if (anchorboxes[i].classList.contains('hide-code')) {
            anchorboxes[i].classList.add('d-none');
        }
    }
}

function updatePage(hash) {
    if (hash === '' || hash === '#retningslinjer') {
        showGuidelines();
    }
    else if (hash === '#kode') {
        showCode();
    }
    else if (hash !== null) {
        let hashElement = document.querySelector(hash);
        if (hashElement !== null && document.getElementById('guidelines-section').contains(hashElement)) {
            showGuidelines();
            hashElement.scrollIntoView();
        }
        else if (hashElement !== null && document.getElementById('code-section').contains(hashElement)) {
            showCode();
            hashElement.scrollIntoView();
        }
    }
}

window.addEventListener('hashchange', function(e) {
    updatePage(window.location.hash);
});

document.addEventListener('DOMContentLoaded', function() {
    updatePage(window.location.hash);
});