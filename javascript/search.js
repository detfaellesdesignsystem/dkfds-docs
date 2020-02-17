let synonyms = [
    ["checkbox", "tjekboks"],
    ["radiobutton", "radioknap", "radio", "radiobuttons", "radioknapper", "radioknappr", "radioknaper", "radioknaper"],
    ["select", "dropdown", "drop down", "drop-down", "dropdown menu", "fold ud", "foldud"],
    ["tekstfelt", "felt", "input", "inputfelt"],
    ["datoangivelse", "dato felt", "datofelt"],
    ["vedhæft", "filupload", "fil upload", "fil-upload"],
    ["funktionslink", "funktions-link", "funktions link"],
    ["tekstområde", "textarea"],
    ["sidenavigation", "venstremenu"],
    ["primærknap", "primær knap", "primary", "primær"],
    ["sekundærknap", "sekundærknap", "secondary", "sekundær"],
    ["trinindikator", "tringuide"],
    ["avancerede tabeller", "datatables"],
    ["skip-link", "skip link"]
];

let excludeWords = ["Når", "i", "I", "er", "det", "der", "dem", "den", "et", "hvad", "hvor", "hvem", "på", "og"];


const limit = 1000;



document.addEventListener("DOMContentLoaded", function() {
    let url_queries = window.location.search.substr(1).split('&');
    if(url_queries.length !== 0) {
        let start = 0;
        let query = null;
        for(let q in url_queries){
            let loop_query = url_queries[q].split('=');

            if(loop_query[0] === "start"){
                start = parseInt(loop_query[1]);
            }
            if (loop_query[0] === "q") {
                query = decodeURIComponent(loop_query[1]).split('+').join(' ');
            }
        }
        if(query !== null && query !== "") {
            let results = search(query);
            populateSearch(results, decodeURIComponent(query), start);
        } else{
            populateSearch([], decodeURIComponent(query), start);
        }
    }

});
function populateSearch (results, query, start){
    document.getElementById('search-input').value = query;
    document.getElementById('results-count').innerText = results.length;
    document.getElementById('results-text').innerText = query;
    if(results.length > 0) {
        if (start !== 0) {
            let nextStart = start - limit;
            document.getElementById('previous-page').href = "?q=" + query + "&start=" + nextStart;
            document.getElementById('previous-page').classList.remove('d-none');
        }
        if (results.length > start + limit) {
            let nextStart = start + limit;
            document.getElementById('next-page').href = "?q=" + query + "&start=" + nextStart;
            document.getElementById('next-page').classList.remove('d-none');
        }
        let html = "";
        for (let r = start; r < start + limit; r++) {
            if (results[r] == undefined) {
                break;
            }
            let page = results[r];
            html += '<div class="page-result">';
            html += '<h2 class="h4 mb-0 page-title"><a href="' + page.url + '">' + page.title;
            if(page.subcategory === "Kode") {
                html += '&nbsp;<span class="page-category weight-normal small-text">[' + page.subcategory + ']</span>';
            }
            else if(page.layout === "demo") {
                html += '&nbsp;<span class="page-category weight-normal small-text">[Eksempel]</span>';
            }
            html += '</a></h2>';

            if(page.description.length > 0) {
                let description = formatDescription(truncateString(page.description, 170, '...'), query);

                html += '<p class="mt-0 mb-0 page-description">' + description + '</p>';
            }
            html += '</div>';
        }
        document.getElementById('results').innerHTML = html;
    } else{
        document.getElementById('results').innerHTML = "<p>Vi fandt ingen sider, der matchede din søgning.</p>";
    }

    document.getElementById('results-container').classList.remove('d-none');
}
function formatDescription(description, query){
    let text = "";
    let index = description.toLowerCase().indexOf(query.toLowerCase());
    if(index === -1){
        return description;
    }

    return description.replace(query, '<span class="weight-semibold">'+query+'</span>');
}


function truncateString(str, len, append)
{
    if(str.length > len) {
        var newLength;
        append = append || "";  //Optional: append a string to str after truncating. Defaults to an empty string if no value is given

        if (append.length > 0) {
            append = " " + append;  //Add a space to the beginning of the appended text
        }
        if (str.indexOf(' ') + append.length > len) {
            return str;   //if the first word + the appended text is too long, the function returns the original String
        }

        str.length + append.length > len ? newLength = len - append.length : newLength = str.length; // if the length of original string and the appended string is greater than the max length, we need to truncate, otherwise, use the original string

        var tempString = str.substring(0, newLength);  //cut the string at the new length
        tempString = tempString.replace(/\s+\S*$/, ""); //find the last space that appears before the substringed text

        if (append.length > 0) {
            tempString = tempString + append;
        }
        return tempString;
    } else {
        return str;
    }
};

function searchWords(query){
    let returnValue  = [query];
    for (let s in synonyms) {
        let word = synonyms[s];

        let check = word.includes(query.toLowerCase());
        if (check) {
            returnValue = word;
            break;
        }
    }
    return returnValue;
}

function matchSearch(page, query){

    let matched = false;

    let phrases = query.split(" ");
    let syns = searchWords(query);
    for(let w in syns) {
        let word = syns[w];
        let tags = page.tags.join(',').toLowerCase().split(',');
        if (page.title.toLowerCase().indexOf(word.toLowerCase()) >= 0 || page.lead.toLowerCase().indexOf(word.toLowerCase()) >= 0 || tags.indexOf(word.toLowerCase()) >= 0 || page.content.toLowerCase().indexOf(word.toLowerCase()) >= 0) {
            matched = true;
        } else {
            let phrasesMatched = [];
            for (let phrase in phrases) {
                let currentPhrase = phrases[phrase].toLowerCase();
                if (currentPhrase.length > 2) {
                    if (!matched && (page.title.toLowerCase().indexOf(currentPhrase) >= 0 || page.lead.toLowerCase().indexOf(currentPhrase) >= 0 || tags.indexOf(currentPhrase) >= 0 || page.content.toLowerCase().indexOf(currentPhrase) >= 0)) {
                        matched = true;
                        phrasesMatched.push(currentPhrase);
                    }
                }
            }
            if (matched) {
                page.phrasesMatched = phrasesMatched;
            }
        }
        if (matched) {
            page.matched = true;
            break;
        }
    }
    return page;
}

function search(query){
    let result = [];
    // search phrase
    searchIndex.forEach(function(page){
        let matchedPage = matchSearch(page, query);

        if(matchedPage.matched) {
            result.push(matchedPage);
        }
    });
    let sortedResult = sort(result, query);
    console.log("sortedResult", sortedResult);
    let endResult = [];
    sortedResult.forEach(function(page){
      if(page.score >= 50){
          endResult.push(page);
      }
    });
    return endResult;
}

function matchForString(haystack, needle){
    if((Array.isArray(haystack)) && haystack.indexOf(needle.toLowerCase()) >= 0) {
        return true;
    } else if ((!Array.isArray(haystack)) && haystack.toLowerCase().indexOf(needle.toLowerCase()) >= 0) {
        return true;
    }
    return false;
}

function sort(result, query){
    let syns = searchWords(query);
    result.forEach(function (page) {
        let score = 0;
        let matched = {};

        // match title
        matched.title = false;
        if(matchForString(page.title, query)) {
            matched.title = true;
            matched.titleString = true;
        } else {
            for (let s in syns) {
                if (matchForString(page.title, syns[s])) {
                    matched.title = true;
                }
            }
        }

        // match tags
        matched.tags = false;

        let tags = page.tags.join(',').toLowerCase().split(',');
        if (matchForString(tags, query)) {
            matched.tags = true;
        } else{
            for (let s in syns) {
                if (matchForString(tags, syns[s])) {
                    matched.tags = true;
                }
            }
        }

        // match tags
        matched.description = false;
        if (matchForString(page.description, query)) {
            matched.description = true;
            matched.descriptionString = true;
        } else{
            for (let s in syns) {
                if (matchForString(page.description, syns[s])) {
                    matched.description = true;
                }
            }
        }

        // match subnav
        matched.subnav = false;
        if (matchForString(page.subnav, query)) {
            matched.subnav = true;
        } else{
            for (let s in syns) {
                if (matchForString(page.subnav, syns[s])) {
                    matched.subnav = true;
                }
            }
        }

        // match content
        matched.content = false;

        if (matchForString(page.content, query)) {
            matched.content = true;
            matched.contentString = true;
        } else {
            for (let s in syns) {
                if (matchForString(page.subnav, syns[s])) {
                    matched.subnav = true;
                }
            }
        }

        // match category
        matched.category = 0;

        // priority category
        switch (page.category) {
            case "Komponenter_category":
                matched.category = 1;
                break;
            case "Kode_category":
                matched.category = 2;
                break;
            case "Design_category":
                matched.category = 3;
                break;
            case "Kom_i_gang_category":
                matched.category = 4;
                break;
            case "Om_designsystemet_category":
                matched.category = 5;
                break;
        }

        matched.demo = false;
        if(page.layout === "demo"){
            matched.demo = true;
        }

        // Set scores
        if(matched.title){
            score = score + 60;
        }

        if(matched.tags){
            score = score + 44;
        }
        if(matched.description){
            score = score + 35;
        }
        if(matched.subnav){
            score = score + 20;
        }
        if(matched.content){
            score = score + 30;
            if(query.indexOf(" ") >= 0){
                score = score + 20;
            }
        }

        switch (matched.category) {
            case 1:
                score = score + 15;
                break;
            case 2:
                score = score + 13;
                break;
            case 3:
                score = score + 8;
                break;
            case 4:
                score = score + 6;
                break;
            case 5:
                score = score + 5;
                break;
        }

        if(matched.demo){
            score = score + 25;
        }
        page.matched = matched;
        page.score = score;
    });

    return result.sort( function(a, b) {
        if(a.score > b.score){
            return -1;
        } else if(a.score < b.score){
            return 1;
        }
        return 0;
    });
}
