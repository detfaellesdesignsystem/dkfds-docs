const path = require('path');
const fs = require('fs');

const END_COLOR = '\x1b[0m';
const GREEN_COLOR = '\x1b[32m';
const YELLOW_COLOR = '\x1b[33m';
const RED_COLOR = '\x1b[31m';
const CYAN_COLOR = '\x1b[36m';

let folder = 'docs';
//let folder = 'docs/design';
//let folder = 'docs/komponenter';
//let folder = 'docs/design/borders';

let allFiles = [];

function getFilesFromDir(folderPath) {

    if (!fs.existsSync(folderPath)) {
        console.log(RED_COLOR + "Could not find " + folderPath + END_COLOR);
        return;
    }

    var files = fs.readdirSync(folderPath);
    for (var i = 0; i < files.length; i++) {
        var filename = path.join(folderPath, files[i]);
        var stat = fs.lstatSync(filename);
        if (stat.isDirectory()) {
            getFilesFromDir(filename);
        } else if (filename.endsWith('.html')) {
            allFiles.push(filename);
        };
    };
};

getFilesFromDir(folder);

function extractText(file) {
    try {
        const data = fs.readFileSync(file, 'utf8');
        return data;
    } catch (err) {
        console.error(err);
    }
}

let errorsFound = 0;

// ---- CHECK THAT ALL FILES HAVE TITLES

function check_hasTitle(text) {
    let regex = /<title>(.*?)<\/title>/gs;
    let matches = text.match(regex);
    let result = matches?.length > 0;
    return result;
}

function run_hasTitle() {
    let filesWithNoTitle = [];

    for (let f = 0; f < allFiles.length; f++) {
        let text = extractText(allFiles[f]);
        let hasTitle = check_hasTitle(text);
        if (!hasTitle) {
            filesWithNoTitle.push(allFiles[f]);
            errorsFound++;
        }
    }

    if (filesWithNoTitle.length === 0) {
        console.log(GREEN_COLOR + '\nAll files have titles' + END_COLOR);
    }
    else {
        console.log(RED_COLOR + '\nTitle is missing in these files:' + END_COLOR);
        for (let f = 0; f < filesWithNoTitle.length; f++) {
            console.log(RED_COLOR + '-- ' + filesWithNoTitle[f] + END_COLOR);
        }
    }
}

run_hasTitle();

// ---- CHECK THAT STYLEGUIDE AND COMPONENT PAGES HAVE LEAD TEXT

function check_hasLeadText(text) {
    let regex = /<h1(.*?)<\/h1>(\s*?)<p class="font-lead">(.*?)<\/p>/gs;
    let matches = text.match(regex);
    let result = matches?.length > 0;
    return result;
}

function run_hasLeadText() {
    let filesWithNoLeadText = [];

    let styleguideFiles = 0;
    let componentFiles = 0;
    for (let f = 0; f < allFiles.length; f++) {
        let text = extractText(allFiles[f]);
        let isRedirectPage = text.includes('<title>Du sendes videre til en anden side</title>');
        let isStyleguidePage = allFiles[f].includes('docs\\design');
        let isComponentPage = allFiles[f].includes('docs\\komponenter');

        if (!isRedirectPage && (isStyleguidePage || isComponentPage)) {
            if (isStyleguidePage) { styleguideFiles++; }
            if (isComponentPage) { componentFiles++; }
            let hasLead = check_hasLeadText(text);
            if (!hasLead) {
                filesWithNoLeadText.push(allFiles[f]);
                errorsFound++;
            }
        }
    }

    if (filesWithNoLeadText.length === 0) {
        console.log(GREEN_COLOR + '\nAll styleguide and component pages have lead text' + END_COLOR);
        if (styleguideFiles === 0) { console.log(YELLOW_COLOR + 'WARNING: No styleguide files processed' + END_COLOR); }
        if (componentFiles === 0) { console.log(YELLOW_COLOR + 'WARNING: No component files processed' + END_COLOR); }
    }
    else {
        console.log(RED_COLOR + '\nLead text is missing in these files:' + END_COLOR);
        for (let f = 0; f < filesWithNoLeadText.length; f++) {
            console.log(RED_COLOR + '-- ' + filesWithNoLeadText[f] + END_COLOR);
        }
        if (styleguideFiles === 0) { console.log(YELLOW_COLOR + 'WARNING: No styleguide files processed' + END_COLOR); }
        if (componentFiles === 0) { console.log(YELLOW_COLOR + 'WARNING: No component files processed' + END_COLOR); }
    }
}

run_hasLeadText();

// ---- CHECK THAT THERE IS A HEADING AFTER ANCHORLINKS

function check_hasHeadingAfterAnchorlinks(text) {
    let regex1 = /<nav class="anchorbox"/gs;
    let matches1 = text.match(regex1);
    let hasAnchorlinks = matches1?.length > 0;
    if (hasAnchorlinks) {
        let regex2 = /<nav class="anchorbox"(.*?)<\/nav>(\s*?)<h2/gs;
        let matches2 = text.match(regex2);
        let result = matches2?.length > 0;
        return result;
    }
    else {
        return true;
    }
}

function run_hasHeadingAfterAnchorlinks() {
    let problemFiles = [];

    for (let f = 0; f < allFiles.length; f++) {
        let isExamplePage = allFiles[f].includes('docs\\eksempel');
        if (!isExamplePage) {
            let text = extractText(allFiles[f]);
            let hasHeadingAfterAnchorlinks = check_hasHeadingAfterAnchorlinks(text);
            if (!hasHeadingAfterAnchorlinks) {
                problemFiles.push(allFiles[f]);
                errorsFound++;
            }
        }
    }

    if (problemFiles.length === 0) {
        console.log(GREEN_COLOR + '\nAll files with anchorlinks have a heading following it' + END_COLOR);
    }
    else {
        console.log(RED_COLOR + '\nA heading is missing after the anchorlinks in these files:' + END_COLOR);
        for (let f = 0; f < problemFiles.length; f++) {
            console.log(RED_COLOR + '-- ' + problemFiles[f] + END_COLOR);
        }
    }
}

run_hasHeadingAfterAnchorlinks();

// WRAPUP

console.log('\nCHECKED ' + allFiles.length + ' HTML FILES');
if (errorsFound === 0) {
    console.log(GREEN_COLOR + '0 errors found' + END_COLOR);
}
else if (errorsFound === 1) {
    console.log(RED_COLOR + '1 error found' + END_COLOR);
}
else if (errorsFound > 1) {
    console.log(RED_COLOR + errorsFound + ' errors found' + END_COLOR);
}