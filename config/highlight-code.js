const hljs = require('highlight.js');
const fs = require('fs');
const log = require("fancy-log");
const colors = require("ansi-colors");
const util = require('util');
util.inspect.styles.date = 'grey';

const DEBUG = false;

function removeHighlight(str) {
    return str.replaceAll('<span class="hljs-name">', '')
              .replaceAll('<span class="hljs-attr">', '')
              .replaceAll('<span class="hljs-string">', '')
              .replaceAll('<span class="hljs-tag">', '')
              .replaceAll('<span class="hljs-comment">', '')
              .replaceAll('<span class="hljs-symbol">', '')
              .replaceAll('</span>', '')
              .replaceAll('&#x27;', '&#39;');
}

log(colors.white('Started syntax highlighting...'));

const DIRECTORIES = [
    '_site/komponenter/',
    '_site/styleguide/',
    '_site/styleguide/typografi/',
    '_site/eksempel/ikon-samling/',
    '_site/eksempler/patterns/'
];

for (let d = 0; d < DIRECTORIES.length; d++) {
    let dir = DIRECTORIES[d];
    let dircontent = fs.readdirSync(dir);
    dircontent.forEach(subdir => {
        let filepath = dir + subdir + '/index.html';
        if (subdir === 'index.html') {
            filepath = dir + 'index.html';
        }
        if (fs.existsSync(filepath)) {
            try {
                const originalContent = fs.readFileSync(filepath, 'utf8');
                let codeSections = originalContent.match(/<pre[^>]*?>[^<]*?<code[^>]*?>[\s\S]*?<\/code>[^<]*?<\/pre>/gi);
                let highlightedContent = originalContent;
                let unexpectedCode = false;
                if (codeSections) {
                    for (let i = 0; i < codeSections.length; i++) {
                        /* Remove the <code> tags */
                        let code = codeSections[i].replace(/<pre[^>]*?>[^<]*?<code[^>]*?>|<\/code>[^<]*?<\/pre>/gi, '');
    
                        /* Remove any existing syntax highlight. */
                        code = removeHighlight(code);
    
                        /* Replace the character codes. Otherwise, highlight.js won't work correctly. */
                        let modifiedCode = code;
                        modifiedCode = modifiedCode.replaceAll('&lt;', '<')
                                                   .replaceAll('&quot;', '"')
                                                   .replaceAll('&gt;', '>')
                                                   .replaceAll('&#39;', "'")
                                                   .replaceAll('&amp;', '&');
    
                        /* Use highlight.js to add syntax highlighting. */
                        let highlightedCode = hljs.highlight(modifiedCode, { language: 'xml' }).value;
                        highlightedCode = highlightedCode.replaceAll('&#x27;', '&#39;');
    
                        /* Verify that the code wasn't modified in unexpected ways. */
                        let restoredCode = removeHighlight(highlightedCode);
                        if (code !== restoredCode) {
                            unexpectedCode = true;
                            if (DEBUG) {
                                log(colors.green('EXPECTED:\n' + code));
                                log(colors.red('UNEXPECTED\n' + restoredCode));
                            }
                        }
                        highlightedContent = highlightedContent.replace(code, highlightedCode);
                    }
                    if (unexpectedCode) {
                        log(colors.yellow(`WARNING: Unexpected code changes found in ${filepath} during syntax highlighting. Please inspect the generated code from highlight.js.`));
                    }
                    fs.writeFileSync(filepath, highlightedContent);
                }
            } catch (err) {
                log(colors.red(err));
            }
        }
        else {
            log(colors.red(filepath + ' not found'));
        }
    });
}

log(colors.green('Syntax highlighting done.'));
