const fs = require('fs');
const fse = require('fs-extra');
const log = require("fancy-log");
const colors = require("ansi-colors");

log(colors.white('Started copying files from _site to docs...'));

let filesCopied = false;

/* Copy the files */
try {
    fse.copySync('_site', 'docs');
    filesCopied = true;
} catch (err) {
    log(colors.red(err));
}

if (filesCopied) {
    log(colors.white('Checking redirects...'));
    /* 
    The redirect files in _site will sometimes fail and include "http://localhost:4000"
    in the href's. The code below checks a single redirect file and throws a warning
    if localhost was found in the code. Any redirect file can be used for this check. 
    */
    let redirectFile = 'docs/krav-vaerktoej/anvendes-af-borgere/index.html';
    try {
        const data = fs.readFileSync(redirectFile, 'utf8');
        if (!data.includes('<title>Du sendes videre til en anden side</title>')) {
            log(colors.red('ERROR: File used for "http://localhost:4000" check contains unexpected content.'));
        }
        if (data.includes('http://localhost:4000')) {
            log(colors.yellow('Copied files from _site to docs'));
            log(colors.yellow('WARNING: "http://localhost:4000" detected in redirect files. Try rebuilding _site again.'));
        }
        else {
            log(colors.green('Success: Copied files from _site to docs.'));
        }
    } catch (err) {
        log(colors.red('Check for "http://localhost:4000" failed.\n' + err));
    }
}
