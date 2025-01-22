var gulp = require('gulp');
var dutil = require('./doc-util');
var runSequence = require('gulp4-run-sequence').use(gulp);
var runCmd = require('gulp-run-command').default;
var task = 'html';

var remoteSrc = require('gulp-remote-src');
var rename = require("gulp-rename");
var gulpif = require("gulp-if");
var modifyFile = require('gulp-modify-file');
var prettify = require('gulp-jsbeautifier');
var plumber = require('gulp-plumber');
var nunjucksRender = require('gulp-nunjucks-render');
var data = require('gulp-data');
var fs = require('fs');
var path = require('path');
var flatten = require('gulp-flatten');

var distComponentCode = '_includes/code/components';
var distJekyllComponentPreview = '_preview-components';

var titles = require('./example-titles').default;

var buildAll = ['examples/**/**/*.njk', 'examples/**/**/**/*.njk'];
var buildTestOnly = ['examples/testfiles/**/*.njk'];
var buildExamples = ['examples/examples/**/*.njk'];
var buildFile = ['examples/components/table/*.njk'];

var activeBuild = buildAll;

var testfiles = [
    "test-html-elements",
    "test-headings-no-sections",
    "test-headings-with-sections",
    "test-headings-long-text",
    "test-icons-svg-and-class",
    "test-accordion-headings",
    "test-accordion-variants",
    "test-accordion-classes",
    "test-accordion-open-close-button",
    "test-accordion-long-text",
    "test-accordion-javascript",
    "test-accordion-language",
    "test-alerts-1",
    "test-alerts-2",
    "test-alerts-3",
    "test-date-input-1",
    "test-date-input-2",
    "test-date-input-3",
    "test-date-input-4",
    "test-date-input-5",
    "test-date-input-6",
    "test-datepicker-1",
    "test-datepicker-2",
    "test-datepicker-3",
    "test-datepicker-4",
    "test-datepicker-5",
    "test-datepicker-6",
    "test-datepicker-7",
    "test-dropdown-1",
    "test-dropdown-2",
    "test-dropdown-3",
    "test-dropdown-4",
    "test-dropdown-5",
    "test-dropdown-6",
    "test-dropdown-7",
    "test-dropdown-long-text",
    "test-tabs-buttons",
    "test-tabs-buttons-icons",
    "test-tabs-buttons-many-tabs",
    "test-tabs-buttons-no-tabs",
    "test-tabs-buttons-only-one-tab",
    "test-tabs-buttons-no-active-tabs",
    "test-tabs-buttons-several-active-tabs",
    "test-tabs-buttons-javascript",
    "test-tabs-buttons-long-sentences",
    "test-tabs-buttons-long-strings",
    "test-tabs-buttons-long-strings-with-icons",
    "test-tabs-navigation",
    "test-tabs-navigation-icons",
    "test-tabs-navigation-many-tabs",
    "test-tabs-navigation-no-tabs",
    "test-tabs-navigation-only-one-tab",
    "test-tabs-navigation-no-active-tabs",
    "test-tabs-navigation-several-active-tabs",
    "test-tabs-navigation-long-sentences",
    "test-tabs-navigation-long-strings",
    "test-tabs-navigation-long-strings-with-icons",
    "test-function-link",
    "test-skip-link-default",
    "test-header-portal-only",
    "test-header-solution-only",
    "test-header-portal-and-solution",
    "test-header-solution-and-navigation",
    "test-header-three-simple-rows",
    "test-header-navigation-with-only-searchfield",
    "test-header-navigation-with-searchfield",
    "test-header-dropdown-navigation",
    "test-header-navigation-many-items",
    "test-header-language-switcher",
    "test-header-long-sentences",
    "test-header-long-strings",
    "test-header-mobile-helptext",
    "test-header-breadcrumb-function-links",
    "test-header-init",
    "test-input-fields-1",
    "test-input-fields-2",
    "test-input-fields-3",
    "test-input-fields-4",
    "test-input-fields-5",
    "test-input-fields-6",
    "test-input-fields-7",
    "test-input-fields-8",
    "test-input-fields-9",
    "test-buttons-in-row",
    "test-buttons-in-divs",
    "test-buttons-next-to-text",
    "test-button-long-text",
    "test-buttons-1",
    "test-modal-types",
    "test-modal-javascript",
    "test-modal-inert",
    "test-modal-long",
    "test-overflow-menus-1",
    "test-overflow-menus-2",
    "test-overflow-menu-placement",
    "test-pagination",
    "test-radiobuttons-error",
    "test-radiobuttons-1",
    "test-radiobuttons-2",
    "test-radiobuttons-3",
    "test-radiobuttons-4",
    "test-radiobuttons-5",
    "test-search",
    "test-structured-list-1",
    "test-structured-list-2",
    "test-structured-list-3",
    "test-structured-list-4",
    "test-structured-list-5",
    "test-simple-table",
    "test-responsive-table",
    "test-sorting-table",
    "test-selectable-table",
    "test-selectable-table-with-buttons",
    "test-table-many-columns",
    "test-table-many-columns-with-buttons",
    "test-table-pagination",
    "test-table-pagination-with-buttons",
    "test-table-with-components",
    "test-tables-1",
    "test-tables-2",
    "test-tables-3",
    "test-tables-4",
    "test-tables-5",
    "test-tables-6",
    "test-tables-7",
    "test-tables-8",
    "test-tables-responsive-sorting",
    "test-textarea-1",
    "test-textarea-2",
    "test-textarea-3",
    "test-textarea-4",
    "test-textarea-5",
    "test-textarea-6",
    "test-textarea-7",
    "test-back-to-top-long-page",
    "test-back-to-top-short-page",
    "test-checkbox-simple",
    "test-checkboxes-1",
    "test-checkboxes-2",
    "test-checkboxes-3",
    "test-checkboxes-4",
    "test-checkboxes-5",
    "test-checkboxes-6",
    "test-checkboxes-7",
    "test-checkboxes-8",
    "test-checkboxes-9",
    "test-toggle",
    "test-tooltips",
    "test-tooltip-force-visible",
    "test-tooltip-javascript",
    "test-step-guide-1",
    "test-step-guide-2",
    "test-step-guide-3",
    "test-step-guide-4",
    "test-step-guide-5",
    "test-step-guide-6",
    "test-step-guide-7",
    "test-venstremenu"
];

function getPath (dirname){

    var pathArray = dirname.split('\\');
    var path = [];
    var indexFrom = pathArray.indexOf("examples");
    var length = pathArray.length - 1;
    var loops = length - indexFrom;
    for(var i = 0; i < loops; i++){
        var index = i+1;

        path.push(pathArray[indexFrom+index]);
    }


    return path.join("/");
}

function isThisAComponentExample(file){
    if (file.path.toString().indexOf('\\example-') !== -1){
        return false;
    }
    return true;
}

function createMarkdown(content, path, file) {
    var fileName = path.split("\\").pop().replace('.html', '');
    var title = fileName[0].toUpperCase() + fileName.slice(1);
    if (titles[fileName]) {
        if (titles[fileName] !== fileName) {
            title = titles[fileName];
        }
    }
    var header = ``;
    if((path.includes('language-switcher') || path.includes('footer') || path.includes('cookie-message') || (path.includes('header') && !path.includes('table--body-headers') ) || path.includes('toastbesked')) && !path.includes('test')) {
        header = `--- 
permalink: /eksempel/` + fileName + `/
layout: example 
filename: ` + fileName + `
title: ` + title + `
---
`
    } else if(path.includes('test')) {
        var index = testfiles.indexOf(fileName);
        var previous = "";
        var next = "";
        if (index > 0) {
            previous = "/eksempel/" + testfiles[index-1] + "/";
        }
        if (index < testfiles.length - 1) {
            next = "/eksempel/" + testfiles[index + 1] + "/";
        }
        header = `--- 
permalink: /eksempel/` + fileName + `/
layout: test-example 
filename: ` + fileName + `
title: Testfil | ` + title.toLowerCase() + `
previoustest: ` + previous + `
nexttest: ` + next + `
---
`
    } else{
        header = `--- 
permalink: /eksempel/` + fileName + `/
layout: example-contained 
filename: ` + fileName + `
title: ` + title + `
---
`
    }

    return header + content;
}

gulp.task('nunjucks', done => {
    return gulp.src(activeBuild,
        {base: 'examples/'})
        .pipe(data(function(file) {
            //dutil.logMessage('nunjucks', file.path.toString());
            var basename = path.basename(file.path);
            var filename = basename.replace(path.extname(file.path), "");
            var pathFromExample = getPath(path.dirname(file.path));

            var fileContents;
            try {
                fileContents = fs.readFileSync('./examples/'+pathFromExample+'/' + filename + '.json');
                //dutil.logMessage('nunjucks','./examples/'+pathFromExample+'/' + filename + '.json' );
            } catch (err) {
                // Here you get the error when the file was not found,
                // but you also get any other error
                //dutil.logError('nunjucks', err);
                //dutil.logError('nunjucks','./examples/' + pathFromExample + '/' + filename + '.json does not exist' );
            }
            if(fileContents != undefined){
                return JSON.parse(fileContents);
            }
        }))
        .pipe(nunjucksRender({
            path: 'node_modules/dkfds/src/'
        }))
        .pipe(prettify({
            wrap_line_length: 94,
            max_preserve_newlines: 1,
            unformatted: [ /*'a',*/ 'abbr','pre', 'area', 'audio', 'b', 'bdi', 'bdo', 'br', /*'button',*/ 'canvas', 'cite',
                'code', 'data', 'datalist', 'del', 'dfn', 'em', 'embed', /*'i',*/ 'iframe', 'img',
                /*'input',*/ 'ins', 'kbd', 'keygen', /*'label',*/ 'link', 'map', 'mark', 'math', 'meter', 'noscript',
                'object', 'output', 'progress', 'q', 'ruby', 's', 'samp', /* 'script', */ /*'select',*/ 'small',
                /*'span',*/ 'strong', 'sub', 'sup', 'svg', 'template', 'textarea', 'time', 'u', 'var',
                'video', 'wbr', /*'text',*/
                // prexisting - not sure of full effect of removing, leaving in
                'acronym', /*'address',*/ 'big', 'dt', 'ins', 'strike', 'tt',
            ],
            content_unformatted:'',
            extra_liners: 'head,body,/html'
        }))
        .pipe(flatten())
        .pipe(gulp.dest(distComponentCode))
        .pipe(modifyFile(createMarkdown))
        .pipe(rename(function(path){
            path.extname = ".md";
        }))
        .pipe(gulpif(isThisAComponentExample, gulp.dest(distJekyllComponentPreview)));
});


gulp.task(task, done => {

    runSequence(
        'nunjucks',
        done
  );
});

