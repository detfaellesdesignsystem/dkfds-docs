'use strict';

document.addEventListener("DOMContentLoaded", function () {

    let copyButtons = document.querySelectorAll('.button-copy');

    for (let i = 0; i < copyButtons.length; i++) {
        copyButtons[i].addEventListener("click", function () {
            let codeToCopy = copyButtons[i].parentElement.nextElementSibling.querySelector('code').innerText;
            navigator.clipboard.writeText(codeToCopy);
        });
    }

    let newCopyButtons = document.querySelectorAll('.copy-code');

    newCopyButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Copy button for code blocks in tabs
            let tabsContainer = button.closest('.code-in-tabs');
            if (tabsContainer) {
                let tabs = tabsContainer.querySelector('fds-tabs');
                if (!tabs) return;

                let selectedTabKey = tabs.getAttribute('data-selected-tab');
                if (!selectedTabKey) return;

                let activePanel = tabsContainer.querySelector('fds-tab-panel[tab-key="' + selectedTabKey + '"]');
                if (!activePanel) return;

                let codeElement = activePanel.querySelector('code');
                if (!codeElement) return;

                navigator.clipboard.writeText(codeElement.innerText);
                return;
            }

            // Copy button for a single code box
            let boxContainer = button.closest('.code-in-box');
            if (boxContainer) {
                let codeElement = boxContainer.querySelector('code');
                if (!codeElement) return;

                navigator.clipboard.writeText(codeElement.innerText);
                return;
            }
        });
    });
});
