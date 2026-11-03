const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const beautify = require('js-beautify').html;

// https://www.npmjs.com/package/js-beautify#css--html
const BEAUTIFY_OPTIONS = {
    "indent_size": 4,
    "unformatted": [],
    "preserve_newlines": false,
    "indent_inner_html": true,
    "inline": ['use'],
    "inline_custom_elements": false
};

const srcDir = '_includes/code-examples';
const destDir = '_includes/output-files-from-build/code-examples-generated-html';

const dom = new JSDOM(`<!DOCTYPE html><head></head><body></body>`);
const window = dom.window;
const document = window.document;
const body = document.body;

const SKIP_FILES = [
    'fds-tabs-default',
    'fds-tabs-icons',
    'fds-alert-variants',
    'fds-alert-text-variants',
    'fds-alert-close',
];

global.HTMLElement = window.HTMLElement;
global.document = window.document;
global.window = window;
global.customElements = dom.window.customElements;
global.Event = window.Event;
global.CustomEvent = window.CustomEvent;
global.MutationObserver = window.MutationObserver;
global.CSSStyleSheet = window.CSSStyleSheet;
global.Node = window.Node;
global.HTMLFieldSetElement = window.HTMLFieldSetElement;

// Mock ResizeObserver since jsdom doesn't support it
global.ResizeObserver = class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
};

const DKFDS = require('dkfds/dkfds-web-components');

DKFDS.registerAccordion();
DKFDS.registerAccordionGroup();
DKFDS.registerInput();
DKFDS.registerHelpText();
DKFDS.registerCharacterLimit();
DKFDS.registerErrorMessage();
DKFDS.registerCheckbox();
DKFDS.registerCheckboxGroup();
DKFDS.registerRadioButton();
DKFDS.registerRadioButtonGroup();
DKFDS.registerDateInput();
DKFDS.registerSelect();
DKFDS.registerDatePicker();
DKFDS.registerDatePickerGrid();
DKFDS.registerTextarea();
DKFDS.registerErrorSummary();
DKFDS.registerInputAffix();
DKFDS.registerPortalInfo();
DKFDS.registerSolutionInfo();
DKFDS.registerDropdownMenu();
DKFDS.registerMainMenu();
DKFDS.registerTooltip();
DKFDS.registerTooltipIcon();
DKFDS.registerToggleSwitch();
DKFDS.registerModalOpener();
DKFDS.registerModalCloser();
DKFDS.registerModal();
DKFDS.registerAlert();

// Don't register tabs as they use assign() and the examples are skipped anyway

//DKFDS.registerTab();
//DKFDS.registerTabPanel();
//DKFDS.registerTabs();

fs.readdirSync(srcDir).forEach(file => {
    if (!SKIP_FILES.includes(file)) {
        const content = fs.readFileSync(`${srcDir}/${file}`, 'utf8');
        body.innerHTML = content;
        const beautifiedContent = beautify(body.innerHTML, BEAUTIFY_OPTIONS);
        fs.writeFileSync(`${destDir}/${file}`, beautifiedContent);
    }
});

process.on('exit', () => {
    console.log(`Files created in ${destDir}`);
});