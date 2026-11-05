const hljs = require('highlight.js');
const fs = require('fs');
const log = require("fancy-log");
const colors = require("ansi-colors");
const util = require('util');
util.inspect.styles.date = 'grey';

const DEBUG = false;

function restoreCode(str) {
    return str.replaceAll('<span class="hljs-name">', '')
        .replaceAll('<span class="hljs-attr">', '')
        .replaceAll('<span class="hljs-string">', '')
        .replaceAll('<span class="hljs-number">', '')
        .replaceAll('<span class="hljs-tag">', '')
        .replaceAll('<span class="hljs-comment">', '')
        .replaceAll('<span class="hljs-symbol">', '')
        .replaceAll('<span class="hljs-keyword">', '')
        .replaceAll('<span class="hljs-literal">', '')
        .replaceAll('<span class="hljs-built_in">', '')
        .replaceAll('<span class="hljs-title">', '')
        .replaceAll('<span class="hljs-params">', '')
        .replaceAll('<span class="hljs-function">', '')
        .replaceAll('<span class="hljs-title function_">', '')
        .replaceAll('<span class="hljs-property">', '')
        .replaceAll('<span class="hljs-variable language_">', '')
        .replaceAll('<span class="language-xml">', '')
        .replaceAll('<span class="language-javascript">', '')
        .replaceAll('<span class="hljs-title class_">', '')
        .replaceAll('<span class="hljs-meta">', '')
        .replaceAll('</span>', '')
        .replaceAll('&#x27;', '&#39;')
        .replaceAll('&lt;', '<')
        .replaceAll('&quot;', '"')
        .replaceAll('&gt;', '>')
        .replaceAll('&#39;', "'")
        .replaceAll('&amp;', '&');
}

function highlightCode(str, lang) {
    let unexpectedCode = false;

    // Use highlight.js to add syntax highlighting.
    let highlightedCode = hljs.highlight(str, { language: lang }).value;

    // Replace apostrophe as hexadecimal code with decimal code
    highlightedCode = highlightedCode.replaceAll('&#x27;', '&#39;');

    // Verify that the code wasn't modified in unexpected ways.
    const restoredCode = restoreCode(highlightedCode);
    if (str !== restoredCode) {
        unexpectedCode = true;
        if (DEBUG) {
            log(colors.green('EXPECTED:\n' + str));
            log(colors.red('UNEXPECTED\n' + restoredCode));
        }
    }
    if (unexpectedCode) {
        log(colors.yellow(`WARNING: Unexpected code changes found during syntax highlighting. Please inspect the generated code from highlight.js.`));
    }

    return highlightedCode;
}

log(colors.white('Started example syntax highlighting...'));

fs.readdirSync('_includes/code-examples/').forEach(file => {
    const content = fs.readFileSync(`${'_includes/code-examples/'}/${file}`, 'utf8');
    let highlightedContent = highlightCode(content, 'xml');
    if (file.includes('react')) {
        highlightedContent = highlightCode(content, 'jsx');
    }
    fs.writeFileSync(`${'_includes/output-files-from-build/highlighted-examples/'}/${file}`, highlightedContent);
});

fs.readdirSync('_includes/output-files-from-build/code-examples-generated-html/').forEach(file => {
    const content = fs.readFileSync(`${'_includes/output-files-from-build/code-examples-generated-html/'}/${file}`, 'utf8');
    let highlightedContent = highlightCode(content, 'xml');
    fs.writeFileSync(`${'_includes/output-files-from-build/highlighted-examples-generated-html/'}/${file}`, highlightedContent);
});

log(colors.green('Example syntax highlighting done.'));
