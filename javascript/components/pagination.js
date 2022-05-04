document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementById('pagination-ID') !== null) {
        let paginationElement = document.getElementById('pagination-ID');

        paginationElement.getElementsByClassName('button-previous')[0].addEventListener("click", function() {
            previousPage(paginationElement);
        });

        paginationElement.getElementsByClassName('button-next')[0].addEventListener("click", function() {
            nextPage(paginationElement);
        });

        paginationElement.getElementsByClassName('button-first')[0].addEventListener("click", function() {
            firstPage(paginationElement);
        });

        paginationElement.getElementsByClassName('button-last')[0].addEventListener("click", function() {
            lastPage(paginationElement);
        });

        makeButtonsChangePage(paginationElement);
    }
    const paginationIDs = ['pagination-ID-short-1', 'pagination-ID-short-4', 'pagination-ID-short-7', 'pagination-ID-long-1', 'pagination-ID-long-5', 'pagination-ID-long-12'];
    for (let pID = 0; pID < paginationIDs.length; pID++) {
        if (document.getElementById(paginationIDs[pID]) !== null) {
            let currentID = document.getElementById(paginationIDs[pID]);
            currentID.getElementsByClassName('button-previous')[0].addEventListener("click", function(event) {
                event.preventDefault();
            });
            currentID.getElementsByClassName('button-next')[0].addEventListener("click", function(event) {
                event.preventDefault();
            });
            currentID.getElementsByClassName('button-first')[0].addEventListener("click", function(event) {
                event.preventDefault();
            });
            currentID.getElementsByClassName('button-last')[0].addEventListener("click", function(event) {
                event.preventDefault();
            });
            const buttons = currentID.getElementsByClassName('pagination-number');
            for (let i = 0; i < buttons.length; i++) {
                if (buttons[i].getElementsByClassName('button').length > 0) {
                    buttons[i].getElementsByClassName('button')[0].addEventListener("click", function(event) {
                        event.preventDefault();
                    });
                }
            }
        }
    }
});

function previousPage(paginationElement) {
    let newPage = parseInt(paginationElement.getElementsByClassName('current-page')[0].innerHTML) - 1;
    changePage(paginationElement, newPage);
}

function firstPage(paginationElement) {
    changePage(paginationElement, 1);
}

function nextPage(paginationElement) {
    let newPage = parseInt(paginationElement.getElementsByClassName('current-page')[0].innerHTML) + 1;
    changePage(paginationElement, newPage);
}

function lastPage(paginationElement) {
    const paginationItems = paginationElement.getElementsByClassName('pagination-item');
    let newPage = parseInt(paginationItems[paginationItems.length-1].getElementsByTagName('a')[0].innerHTML); // Get the number on the last pagination button
    changePage(paginationElement, newPage);
}

function makeButtonsChangePage(paginationElement) {
    const buttons = paginationElement.getElementsByClassName('pagination-number');
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].getElementsByClassName('button').length > 0) {
            buttons[i].getElementsByClassName('button')[0].addEventListener("click", function() {
                changePage(paginationElement, parseInt(buttons[i].getElementsByClassName('button')[0].innerHTML));
            });
        }
    }
}

function changePage(paginationElement, newPage) {
    const oldPaginationNumbers = paginationElement.getElementsByClassName('pagination-item');
    let totalPages = parseInt(oldPaginationNumbers[oldPaginationNumbers.length-1].getElementsByTagName('a')[0].innerHTML); // Get the number on the last pagination button

    if (totalPages <= 7) {
        for (let i = 0; i < totalPages; i++) {
            if ((i + 1) === newPage) {
                oldPaginationNumbers[i].innerHTML = '<a href="#" class="button current-page" aria-current="page">' + (i+1) + '</a>';
            }
            else {
                oldPaginationNumbers[i].innerHTML = '<a href="#" class="button button-secondary">' + (i+1) + '</a>';
            }
            if (i+1 == totalPages) {
                oldPaginationNumbers[i].getElementsByTagName('a')[0].ariaLabel = "Sidste side, side " + totalPages;
            }
            else {
                oldPaginationNumbers[i].getElementsByTagName('a')[0].ariaLabel = "Side " + (i+1);
            }
            
        }
    }

    else if (totalPages > 7) {
        let outerHTMLstart = '<li class="pagination-item pagination-number"><a href="#" class="button button-secondary">';
        let outerHTMLend = '</a></li>';
        let outerHTMLdots = '<li class="pagination-item pagination-overflow" role="presentation"><span>...</span></li>';

        // The new page is one of the first four pages
        if (newPage > 0 && newPage < 5) {
            for (let i = 0; i < 5; i++) {
                oldPaginationNumbers[i].outerHTML = outerHTMLstart + (i+1) + outerHTMLend;
                if (oldPaginationNumbers[i].getElementsByTagName('a').length > 0) {
                    oldPaginationNumbers[i].getElementsByTagName('a')[0].ariaLabel = "Side " + (i+1);
                }
            }

            oldPaginationNumbers[5].outerHTML = outerHTMLdots;

            oldPaginationNumbers[6].outerHTML = outerHTMLstart + totalPages + outerHTMLend;
            oldPaginationNumbers[6].getElementsByTagName('a')[0].ariaLabel = "Sidste side, side " + totalPages;

            oldPaginationNumbers[newPage-1].innerHTML = '<a href="#" class="button current-page">' + newPage + '</a>';
            oldPaginationNumbers[newPage-1].getElementsByTagName('a')[0].ariaLabel = "Side " + newPage;
        }

        // The new page is a middle option
        else if (newPage > 4 && newPage < (totalPages - 3)) {
            oldPaginationNumbers[0].outerHTML = outerHTMLstart + 1 + outerHTMLend;
            oldPaginationNumbers[0].getElementsByTagName('a')[0].ariaLabel = "Side 1";

            oldPaginationNumbers[1].outerHTML = outerHTMLdots;

            oldPaginationNumbers[2].innerHTML = '<a href="#" class="button button-secondary">' + (newPage - 1) + '</a>';
            oldPaginationNumbers[2].getElementsByTagName('a')[0].ariaLabel = "Side " + (newPage - 1);
            oldPaginationNumbers[3].innerHTML = '<a href="#" class="button current-page" aria-current="page">' + newPage + '</a>';
            oldPaginationNumbers[3].getElementsByTagName('a')[0].ariaLabel = "Side " + newPage;
            oldPaginationNumbers[4].innerHTML = '<a href="#" class="button button-secondary">' + (newPage + 1) + '</a>';
            oldPaginationNumbers[4].getElementsByTagName('a')[0].ariaLabel = "Side " + (newPage + 1);

            oldPaginationNumbers[5].outerHTML = outerHTMLdots;

            oldPaginationNumbers[6].outerHTML = outerHTMLstart + totalPages + outerHTMLend;
            oldPaginationNumbers[6].getElementsByTagName('a')[0].ariaLabel = "Sidste side, side " + totalPages;
        }

        // The new page is one of the last four pages
        else if (newPage >= (totalPages - 3) && newPage <= totalPages) {
            oldPaginationNumbers[0].outerHTML = outerHTMLstart + 1 + outerHTMLend;
            oldPaginationNumbers[0].getElementsByTagName('a')[0].ariaLabel = "Side 1";

            oldPaginationNumbers[1].outerHTML = outerHTMLdots;

            let j = 2;
            for (let i = 4; i > -1; i--) {
                oldPaginationNumbers[j].outerHTML = outerHTMLstart + (totalPages-i) + outerHTMLend;
                if ((totalPages-i) === newPage) {
                    oldPaginationNumbers[j].innerHTML = '<a href="#" class="button current-page" aria-current="page">' + (totalPages-i) + '</a>';
                }
                if (oldPaginationNumbers[j].getElementsByTagName('a').length > 0) {
                    oldPaginationNumbers[j].getElementsByTagName('a')[0].ariaLabel = "Side " + (totalPages-i);
                }
                j++;
            }

            oldPaginationNumbers[6].getElementsByTagName('a')[0].ariaLabel = "Sidste side, side " + totalPages;
        }
    }

    // Hide or show next/previous buttons
    if (newPage <= 1) {
        paginationElement.getElementsByClassName('button-first')[0].classList.add('hidden');
        paginationElement.getElementsByClassName('button-previous')[0].classList.add('hidden');
        paginationElement.getElementsByClassName('button-next')[0].classList.remove('hidden');
        paginationElement.getElementsByClassName('button-last')[0].classList.remove('hidden');
    }
    else if (newPage >= totalPages) {
        paginationElement.getElementsByClassName('button-first')[0].classList.remove('hidden');
        paginationElement.getElementsByClassName('button-previous')[0].classList.remove('hidden');
        paginationElement.getElementsByClassName('button-next')[0].classList.add('hidden');
        paginationElement.getElementsByClassName('button-last')[0].classList.add('hidden');
    }
    else {
        paginationElement.getElementsByClassName('button-first')[0].classList.remove('hidden');
        paginationElement.getElementsByClassName('button-previous')[0].classList.remove('hidden');
        paginationElement.getElementsByClassName('button-next')[0].classList.remove('hidden');
        paginationElement.getElementsByClassName('button-last')[0].classList.remove('hidden');
    }

    makeButtonsChangePage(paginationElement);

    // Change the text on mobile
    let paginationText = paginationElement.getElementsByClassName('pagination-mobile');
    paginationText[0].innerHTML = "Side " + newPage + " af " + totalPages;
}
