const path = require('path');
const fs = require('fs');

const END_COLOR = '\x1b[0m';
const GREEN_COLOR = '\x1b[32m';
const YELLOW_COLOR = '\x1b[33m';
const RED_COLOR = '\x1b[31m';
const CYAN_COLOR = '\x1b[36m';

let folder = 'docs';
//let folder = 'docs/styleguide';
//let folder = 'docs/komponenter';
//let folder = 'docs/styleguide/borders';
//let folder = 'docs/komponenter/anchorlinks';
//let folder = 'docs/komponenter/tags';

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

getFilesFromDir(folder); // Update allFiles

function extractText(file) {
    try {
        const data = fs.readFileSync(file, 'utf8');
        return data;
    } catch (err) {
        console.error(err);
    }
}

function isRedirectPage(file) {
    let text = extractText(file);
    let isRedirect = text.includes('<title>Du sendes videre til en anden side</title>');
    return isRedirect;
}

function isExamplePage(file) {
    let isExample = file.includes('docs\\eksempel');
    return isExample;
}

function isMasterTestPage(file) {
    let text = extractText(file);
    let isMasterTest = text.includes('class="layout-mastertest"');
    return isMasterTest;
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
        console.log(GREEN_COLOR + '\nCHECK DONE: All files have titles' + END_COLOR);
    }
    else {
        console.log(RED_COLOR + '\nCHECK DONE: Title is missing in these files:' + END_COLOR);
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
        let isStyleguidePage = allFiles[f].includes('docs\\styleguide');
        let isComponentPage = allFiles[f].includes('docs\\komponenter');

        if (!isRedirectPage(allFiles[f]) && (isStyleguidePage || isComponentPage)) {
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
        console.log(GREEN_COLOR + '\nCHECK DONE: All styleguide and component pages have lead text' + END_COLOR);
        if (styleguideFiles === 0) { console.log(YELLOW_COLOR + 'WARNING: No styleguide files processed' + END_COLOR); }
        if (componentFiles === 0) { console.log(YELLOW_COLOR + 'WARNING: No component files processed' + END_COLOR); }
    }
    else {
        console.log(RED_COLOR + '\nCHECK DONE: Lead text is missing in these files:' + END_COLOR);
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
        let regex2 = /<nav class="anchorbox"(.*?)<\/nav>(\s*?)(<div id="guidelines-section">)?(\s*?)<h2/gs;
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
        let file = allFiles[f];
        if (!isExamplePage(file)) {
            let text = extractText(file);
            let hasHeadingAfterAnchorlinks = check_hasHeadingAfterAnchorlinks(text);
            if (!hasHeadingAfterAnchorlinks) {
                problemFiles.push(file);
                errorsFound++;
            }
        }
    }

    if (problemFiles.length === 0) {
        console.log(GREEN_COLOR + '\nCHECK DONE: All files with anchorlinks have a heading following it' + END_COLOR);
    }
    else {
        console.log(RED_COLOR + '\nCHECK DONE: A heading is missing after the anchorlinks in these files:' + END_COLOR);
        for (let f = 0; f < problemFiles.length; f++) {
            console.log(RED_COLOR + '-- ' + problemFiles[f] + END_COLOR);
        }
    }
}

run_hasHeadingAfterAnchorlinks();

// ---- CHECK THAT H2s AND ANCHORLINKS MATCH

function check_anchorlinksMatchHeadings(text, filename) {

    /* Find all h2s */
    let regex_main = /<main(.*?)<\/main>/gs;
    let main = text.match(regex_main);
    let headings = [];
    if (main?.length > 0) {
        let regex_h2s = /<h2(.*?)<\/h2>/gs;
        let h2s = main[0].match(regex_h2s);
        if (h2s?.length > 0) {
            for (let i = 0; i < h2s.length; i++) {
                let alertHeading = h2s[i].includes('alert-heading');
                let anchorHeading = h2s[i].includes('anchortitle');
                let modalHeading = h2s[i].includes('modal-title');
                let mobileHeading = h2s[i].includes('mobile-subpages-section');
                let accordionHeading = h2s[i].includes('accordion-button');
                if (!alertHeading && !anchorHeading && !modalHeading && !mobileHeading && !accordionHeading) {
                    let heading_regex = />(.*?)</gs;
                    let heading = h2s[i].match(heading_regex);
                    headings.push(heading[0]);
                }
            }
        }
    }
    //console.log("Headings: ", headings);
    
    /* Find all anchorlinks */
    let regex_anchorbox = /<nav class="anchorbox(.*?)<\/nav>/gs;
    let anchorbox = text.match(regex_anchorbox);
    if (filename.includes('docs\\komponenter\\anchorlinks')) {
        // The component page about anchorlinks have two anchorboxes - pick the right one
        let correct_anchorbox = /<\/div>(\s*?)<nav class="anchorbox(.*?)<\/nav>/gs; 
        anchorbox = (text.match(correct_anchorbox))[0].match(regex_anchorbox);
    }
    let anchorlinks = [];
    if (anchorbox?.length > 0) {
        let regex_links = /<a(.*?)<\/a>/gs;
        let links = anchorbox[0].match(regex_links);
        for (let i = 0; i < links.length; i++) {
            let link_regex = />(.*?)</gs;
            let link = links[i].match(link_regex);
            anchorlinks.push(link[0]);
        }
    }
    //console.log("Anchorlinks: ", anchorlinks);

    /* Compare the two lists */
    if (headings.length === anchorlinks.length) {
        let allHeadingsMatchLinks = true;
        for (let i = 0; i < headings.length; i++) {
            if (headings[i] !== anchorlinks[i]) {
                allHeadingsMatchLinks = false;
                break;
            }
        }
        return allHeadingsMatchLinks;
    }
    else if (anchorlinks.length === 0) {
        return true; // There are no anchorlinks --> No mismatch can happen
    }
    else {
        return false;
    }
}

function run_anchorlinksMatchHeadings() {
    let problemFiles = [];

    for (let f = 0; f < allFiles.length; f++) {
        let file = allFiles[f];
        let text = extractText(file);
        let anchorlinksMatchHeadings = check_anchorlinksMatchHeadings(text, file);
        if (!anchorlinksMatchHeadings && !isExamplePage(file)) {
            problemFiles.push(file);
            errorsFound++;
        }
    }

    if (problemFiles.length === 0) {
        console.log(GREEN_COLOR + '\nCHECK DONE: All files have matching h2s and anchorlinks' + END_COLOR);
    }
    else {
        console.log(RED_COLOR + '\nCHECK DONE: Anchorlinks mismatch in these files:' + END_COLOR);
        for (let f = 0; f < problemFiles.length; f++) {
            console.log(RED_COLOR + '-- ' + problemFiles[f] + END_COLOR);
        }
    }
}

run_anchorlinksMatchHeadings();

// ---- CHECK THAT ALL SKIP LINKS ARE FIRST ELEMENT IN HEADER

function check_hasSkipLinkFirstElementInHeader(text) {
    let regex = /<header class="header(\s*?)(d-print-none)?">(\s*?)<a class="skipnav"/gs;
    let matches = text.match(regex);
    let result = matches?.length > 0;
    return result;
}

function run_hasSkipLinkFirstElementInHeader() {
    let problemFiles = [];

    for (let f = 0; f < allFiles.length; f++) {
        let file = allFiles[f];
        if (!isExamplePage(file) && !isRedirectPage(file) && !isMasterTestPage(file)) {
            let text = extractText(file);
            let hasSkipLinkFirstElementInHeader = check_hasSkipLinkFirstElementInHeader(text);
            if (!hasSkipLinkFirstElementInHeader) {
                problemFiles.push(file);
                errorsFound++;
            }
        }
    }

    if (problemFiles.length === 0) {
        console.log(GREEN_COLOR + '\nCHECK DONE: All skip links are first element in header' + END_COLOR);
    }
    else {
        console.log(RED_COLOR + '\nCHECK DONE: Skip links not placed correctly in these files:' + END_COLOR);
        for (let f = 0; f < problemFiles.length; f++) {
            console.log(RED_COLOR + '-- ' + problemFiles[f] + END_COLOR);
        }
    }
}

run_hasSkipLinkFirstElementInHeader();

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