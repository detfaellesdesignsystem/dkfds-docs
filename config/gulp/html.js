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

var buildAll = ['examples/**/**/*.njk', 'examples/**/**/**/*.njk'];
var buildTestOnly = ['examples/testfiles/**/*.njk'];
var buildHeader = ['examples/components/header/*.njk'];
var buildExamples = ['examples/examples/**/*.njk'];

var activeBuild = buildAll;

var testfiles = [
    "test-header-portal-and-solution",
    "test-header-three-simple-rows",
    "test-header-dropdown-navigation",
    "test-buttons-in-row",
    "test-buttons-in-divs",
    "test-buttons-next-to-text",
    "test-button-long-text",
    "test-button-break-word",
    "test-back-to-top-long-page",
    "test-checkbox-simple"
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
    var header = ``;
    if((path.includes('language-switcher') || path.includes('footer') || path.includes('cookie-message') || (path.includes('header') && !path.includes('table--body-headers') ) || path.includes('toastbesked')) && !path.includes('test')) {
        header = `--- 
permalink: /eksempel/` + fileName + `/
layout: example 
title: ` + fileName[0].toUpperCase() + fileName.slice(1) + `
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
title: ` + fileName[0].toUpperCase() + fileName.slice(1) + `
previoustest: ` + previous + `
nexttest: ` + next + `
---
`
    } else{
        header = `--- 
permalink: /eksempel/` + fileName + `/
layout: example-contained 
title: ` + fileName[0].toUpperCase() + fileName.slice(1) + `
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

