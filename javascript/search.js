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
            console.log(query);
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
                let description = formatDescription(truncateString(page.description, 180, '...'), query);

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
    text += description.substr(0, index);
    let otherHalf = description.substr(index, description.length - index);
    let word = otherHalf.split(/[\s, "”\)\(]+/)[0];
    let startPoint = index+word.length;
    text += '<span class="weight-semibold">'+word+'</span>'+formatDescription(description.substr(startPoint, description.length-startPoint), query);
    return text;

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
        if (page.title.toLowerCase().indexOf(word.toLowerCase()) >= 0 || page.lead.toLowerCase().indexOf(word.toLowerCase()) >= 0 || page.tags.toLowerCase().indexOf(word.toLowerCase()) >= 0 || page.content.toLowerCase().indexOf(word.toLowerCase()) >= 0) {
            matched = true;
        } else {
            let phrasesMatched = [];
            for (let phrase in phrases) {
                let currentPhrase = phrases[phrase].toLowerCase();
                if (currentPhrase.length > 2) {
                    if (!matched && (page.title.toLowerCase().indexOf(currentPhrase) >= 0 || page.lead.toLowerCase().indexOf(currentPhrase) >= 0 || page.tags.toLowerCase().indexOf(currentPhrase) >= 0 || page.content.toLowerCase().indexOf(currentPhrase) >= 0)) {
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
    console.log('sorted', sortedResult);
    let endResult = [];
    sortedResult.forEach(function(page){
      if(page.score > 60){
          endResult.push(page);
      }
    });
    return endResult;
}

function setScoreOnWord(page, query){
    let score = 0;
    let word = query;
    if(excludeWords.includes(query)){
        return 0;
    }
    // priority title
    if (page.title.toLowerCase().indexOf(word.toLowerCase()) >= 0) {
        score = score+60;

    }
    if(page.phrasesMatched && score === 0){
        for (let pm = 0; pm < page.phrasesMatched.length; pm++){
            if(page.title.toLowerCase().indexOf(page.phrasesMatched[pm].toLowerCase()) >= 0){
                if(page.phrasesMatched[pm].length > 3) {
                    score = score + 60;
                }
            }
        }
    }
    // priority lead
    if (page.lead.toLowerCase().indexOf(word.toLowerCase()) >= 0) {
        score = score+35;
    }

    /*
    // priority tags
     */
    if (page.tags.toLowerCase().indexOf(word.toLowerCase()) >= 0 ) {
        score = score+44;
    }

    // priority subnav
    for(let subnav in page.subnav){
        if(page.subnav[subnav].toLowerCase().indexOf(word.toLowerCase()) >= 0){
            score = score+1;
        }
    }



    // priority matching instances in content
    var regex = new RegExp(word,"g");
    let instances = page.content.match(regex);
    if(instances !== null){
        let countOfInstances = (instances).length;
        let scoreOfInstances = countOfInstances / 10;
        score = score+scoreOfInstances;
    }

    console.log('--');
    console.log('word', word);
    console.log('score', score);
    console.log('--');
    return score;
}

function sort(result, query){
    result.forEach(function (page) {
        let score = 0;

        let splitSentence = query.split(" ");

        // is sentence
        if(splitSentence.length > 1){

            score = score + setScoreOnWord(page, query);
            if(page.content.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
                score = score + 50;
            }

        } else{
            let syns = searchWords(query);
            for(let s in syns){
                let scoreWord = setScoreOnWord(page, syns[s]);
                score = score + scoreWord;
            }
        }

        // priority category
        switch (page.category) {
            case "Komponenter_category":
                score = score+15;
                break;
            case "Kode_category":
                score = score+13;
                break;
            case "Design_category":
                score = score+8;
                break;
            case "Kom_i_gang_category":
                score = score+6;
                break;
            case "Om_designsystemet_category":
                score = score+5;
                break;
        }

        if(page.layout === "demo"){
            score = score+30;
        }

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
