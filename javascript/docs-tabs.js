'use strict';

let guidelinesTab = document.getElementById('guidelines-tab');
let codeTab = document.getElementById('code-tab');
let webComponentTab = document.getElementById('web-component-tab');

let guidelinesSection = document.getElementById('guidelines-section');
let codeSection = document.getElementById("code-section");
let webComponentSection = document.getElementById("web-component-section");

let guidelinesAnchorlinks = document.querySelectorAll('.anchorlink-guidelines');
let codeAnchorlinks = document.querySelectorAll('.anchorlink-code');
let webComponentAnchorlinks = document.querySelectorAll('.anchorlink-web-component');

let hiddenGuidelines = 'hide-guidelines';
let hiddenCode = 'hide-code';
let hiddenWebComponent = 'hide-web-component';

function showTab(tabElement, sectionElement, anchorlinks, navhidden) {
    if (tabElement !== null && sectionElement !== null && anchorlinks !== null) {
        /* Show the page content */
        sectionElement.classList.remove('d-none');

        /* Select the tab */
        tabElement.setAttribute('aria-current', 'true');

        /* Show anchorlinks */
        for (let i = 0; i < anchorlinks.length; i++) {
            anchorlinks[i].classList.remove('d-none');
        }

        /* Hide the anchorlinks nav if it has the 'navhidden' class. 
        Only used in rare cases, e.g. if the page is very short. */
        let anchorboxes = document.querySelectorAll('.anchorbox');
        for (let i = 0; i < anchorboxes.length; i++) {
            anchorboxes[i].classList.remove('d-none');
            if (anchorboxes[i].classList.contains(navhidden)) {
                anchorboxes[i].classList.add('d-none');
            }
        }
    }
}

function hideTab(tabElement, sectionElement, anchorlinks) {
    if (tabElement !== null && sectionElement !== null && anchorlinks !== null) {
        /* Hide the page content */
        sectionElement.classList.add('d-none');

        /* Unselect the tab */
        tabElement.removeAttribute('aria-current');

        /* Hide anchorlinks */
        for (let i = 0; i < anchorlinks.length; i++) {
            anchorlinks[i].classList.add('d-none');
        }
    }
}

function showGuidelines() {
    showTab(guidelinesTab, guidelinesSection, guidelinesAnchorlinks, hiddenGuidelines);
    hideTab(codeTab, codeSection, codeAnchorlinks);
    hideTab(webComponentTab, webComponentSection, webComponentAnchorlinks);

    let introExample = document.querySelector('.intro-example');
    introExample?.classList.remove('d-none');
}

function showCode() {
    hideTab(guidelinesTab, guidelinesSection, guidelinesAnchorlinks);
    showTab(codeTab, codeSection, codeAnchorlinks, hiddenCode);
    hideTab(webComponentTab, webComponentSection, webComponentAnchorlinks);

    let introExample = document.querySelector('.intro-example');
    introExample?.classList.add('d-none');
}

function showWebComponent() {
    hideTab(guidelinesTab, guidelinesSection, guidelinesAnchorlinks);
    hideTab(codeTab, codeSection, codeAnchorlinks);
    showTab(webComponentTab, webComponentSection, webComponentAnchorlinks, hiddenWebComponent);

    let introExample = document.querySelector('.intro-example');
    introExample?.classList.add('d-none');
}

function updatePage(hash) {
    if (hash === '' || hash === '#retningslinjer') {
        showGuidelines();
    }
    else if (hash === '#kode') {
        showCode();
    }
    else if (hash === '#web-component') {
        showWebComponent();
    }
    else if (hash !== null) {
        let hashElement = document.querySelector(hash);

        let guidelineTabHidden = guidelinesTab?.classList.contains('d-none');
        let codeTabHidden = codeTab?.classList.contains('d-none');
        let webComponentTabHidden = webComponentTab?.classList.contains('d-none');

        if (hashElement !== null && guidelinesSection !== null && guidelinesSection.contains(hashElement)) {
            showGuidelines();
            hashElement.scrollIntoView();
        }
        else if (hashElement !== null && codeSection !== null && codeSection.contains(hashElement)) {
            showCode();
            hashElement.scrollIntoView();
        }
        else if (hashElement !== null && webComponentSection !== null && webComponentSection.contains(hashElement)) {
            showWebComponent();
            hashElement.scrollIntoView();
        }
        /* User opens a new tab/window with a hash not found on the page */
        else if (!guidelineTabHidden && !codeTabHidden && !webComponentTabHidden) {
            showGuidelines();
        }
    }
}

window.addEventListener('hashchange', function(e) {
    updatePage(window.location.hash);
});

document.addEventListener('DOMContentLoaded', function() {
    updatePage(window.location.hash);
});