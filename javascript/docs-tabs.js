function showGuidelines() {
    let guidelineTab = document.getElementById('guidelines-tab');
    let codeTab = document.getElementById('code-tab');
    document.getElementById("guidelines-section").classList.remove('d-none');
    document.getElementById("code-section").classList.add('d-none');
    guidelineTab?.setAttribute('aria-current', 'page');
    codeTab?.removeAttribute('aria-current');
}

function showCode() {
    let guidelineTab = document.getElementById('guidelines-tab');
    let codeTab = document.getElementById('code-tab');
    document.getElementById("guidelines-section").classList.add('d-none');
    document.getElementById("code-section").classList.remove('d-none');
    guidelineTab?.removeAttribute('aria-current');
    codeTab?.setAttribute('aria-current', 'page');
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
        if (hashElement !== null && document.getElementById("guidelines-section").contains(hashElement)) {
            showGuidelines();
            hashElement.scrollIntoView();
        }
        else if (hashElement !== null && document.getElementById("code-section").contains(hashElement)) {
            showCode();
            hashElement.scrollIntoView();
        }
    }
}

window.addEventListener("hashchange", function(e) {
    updatePage(window.location.hash);
});

document.addEventListener("DOMContentLoaded", function() {
    updatePage(window.location.hash);
});