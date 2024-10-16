import * as DKFDS from "dkfds";

document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementById('table-pagination') !== null) {
        let t = document.getElementById('table-pagination');

        /* Create table rows */
        let row1 = '<td>Grøn</td><td>ASDF</td><td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>';
        let row2 = '<td>Blå</td><td>GHJK</td><td>Cras pellentesque sapien eu ante consequat pellentesque.</td>';
        let row3 = '<td>Rød</td><td>YUIO</td><td>Curabitur vel augue et felis aliquam dictum at a risus.</td>';
        let row4 = '<td>Gul</td><td>RTYU</td><td>Etiam tempus, nibh in varius mollis, tellus urna ultrices nunc.</td>';
        let row5 = '<td>Lilla</td><td>VBNM</td><td>Aliquam nec dignissim nulla.</td>';
        let row6 = '<td>Orange</td><td>QWER</td><td>Nam ut mi eget eros gravida pretium a at enim.</td>';
        let row7 = '<td>Hvid</td><td>HJKL</td><td>Nullam risus lacus, volutpat sit amet lacus ut, sollicitudin suscipit libero.</td>';
        let rows = [row1, row2, row3, row4, row5, row6, row7];
        let r = 0;
        t.querySelector('tbody').innerHTML = '';
        let rows_wanted = 90;
        for (let i = 0; i < rows_wanted; i++) {
            if (r > rows.length - 1) {
                r = 0;
            }
            let row = document.createElement('tr');
            let checkbox = `<td><div class="form-group-checkbox"><input id="table-pagination-check-${i+1}" type="checkbox" name="table-pagination-check[]" class="form-checkbox" value="Grøn"><label for="table-pagination-check-${i+1}"><span class="sr-only">Vælg række</span></label></div></td>`;
            row.innerHTML = checkbox + rows[r];
            t.querySelector('tbody').appendChild(row);
            r++;
        }

        let table_rows = t.querySelectorAll('tbody tr');
        let defaultRows = 10;
        let defaultPage = 0;
        let pagination = document.querySelector('.table-pagination-options');
        
        setVisibleRows(table_rows, defaultRows, defaultPage);
        createPaginationButtons(table_rows, defaultRows, pagination.querySelector('.table-pagination'));
        updateVisiblePaginationButtons(pagination.querySelector('.table-pagination'), defaultPage);

        let pagination_pagedropdown = pagination.querySelector('select');
        pagination_pagedropdown.addEventListener('change', (event) => {
            if (event.target.value === 'all') {
                setVisibleRows(table_rows, table_rows.length, defaultPage);
                pagination.querySelector('.table-pagination').setAttribute('hidden', '');
            }
            else {
                setVisibleRows(table_rows, parseInt(event.target.value), defaultPage);
                createPaginationButtons(table_rows, parseInt(event.target.value), pagination.querySelector('.table-pagination'));
                updateVisiblePaginationButtons(pagination.querySelector('.table-pagination'), defaultPage);
                pagination.querySelector('.table-pagination').removeAttribute('hidden');
            }
            scrollPaginationIntoView(pagination);
        });
        new DKFDS.TableSelectableRows(t).init();

        t.addEventListener('fds.table.selectable.updated', function(e){
            let number = e.detail.checkedNumber;
            let paginationElement = this.parentNode.nextElementSibling;
            let tableActions = paginationElement.nextElementSibling;
            let numberElement = tableActions.getElementsByClassName('table-selected-number')[0];
            if(number > 1){
                numberElement.innerHTML = number+ " rækker valgt";
                numberElement.classList.remove('no-selected');
            } else if (number === 1){
                numberElement.innerHTML = number+ " række valgt";
                numberElement.classList.remove('no-selected');
            } else{
                numberElement.innerHTML = "Ingen rækker valgt";
                numberElement.classList.add('no-selected');
            }
        });
    }
});

function getRowArrays(allTableRows, rowsPerPage) {
    let arrays = [];
    let i = 0;
    while (i < allTableRows.length) {
        let array = [];
        for (let n = 0; n < rowsPerPage; n++) {
            if (allTableRows[i]) {
                array.push(allTableRows[i]);
                i++;
            }
            else {
                break;
            }
        }
        arrays.push(array);
    }
    return arrays;
}

function setVisibleRows(allTableRows, rowsPerPage, page) {
    let rowArrays = getRowArrays(allTableRows, rowsPerPage);
    let rowsDisplayed = 0;
    for (let r = 0; r < allTableRows.length; r++) {
        let cells = allTableRows[r].querySelectorAll('td');
        for (let c = 0; c < cells.length; c++) {
            cells[c].style.borderBottom = '';
        }
        if (rowArrays[page].includes(allTableRows[r])) {
            allTableRows[r].removeAttribute('hidden');
            rowsDisplayed++;
        }
        else {
            allTableRows[r].setAttribute('hidden', '');
        }
    }
    /* Remove the bottom border from the last _visible_ row. 
       Only the border on the last row in the _entire_ table is removed by the styling. */
    let lastVisibleRow = ((page+1) * rowsPerPage) - 1;
    if (allTableRows[lastVisibleRow]) {
        let removeBottomBorderCells = allTableRows[lastVisibleRow].querySelectorAll('td');
        for (let c = 0; c < removeBottomBorderCells.length; c++) {
            removeBottomBorderCells[c].style.borderBottom = '0';
        }
    }
    let first_row_displayed = ((page+1)*rowsPerPage) - (rowsPerPage-1);
    let last_row_displayed = first_row_displayed + rowsDisplayed - 1;
    document.getElementById('table-pagination-message').querySelector('.displayed-rows').textContent = `${first_row_displayed}-${last_row_displayed}`;
    document.getElementById('table-pagination-message').querySelector('.total-rows').textContent = `${allTableRows.length}`;
}

function createPaginationButtons(allTableRows, rowsPerPage, pagination) {
    let pagination_items = pagination.querySelector('.pagination__items');
    let rowArrays = getRowArrays(allTableRows, rowsPerPage);

    /* Clear previous event listeners by cloning the buttons */
    let first_button = pagination.querySelector('.button-first').cloneNode(true);
    let previous_button = pagination.querySelector('.button-previous').cloneNode(true);
    let next_button = pagination.querySelector('.button-next').cloneNode(true);
    let last_button = pagination.querySelector('.button-last').cloneNode(true);
    
    pagination.innerHTML = '';
    pagination_items.innerHTML = '';

    pagination.appendChild(first_button);
    pagination.appendChild(previous_button);

    let mobilePageMessage = document.createElement('span');
    mobilePageMessage.classList.add('pagination-mobile');
    mobilePageMessage.innerHTML = `Side 1 af ${rowArrays.length}`;
    pagination.appendChild(mobilePageMessage);

    for (let b = 0; b < rowArrays.length; b++) {
        let listelement = document.createElement('li');
        listelement.classList.add('pagination-item', 'pagination-number');
        let button = document.createElement('button');
        button.classList.add('button', 'button-secondary');
        if (b < rowArrays.length-1) {
            button.setAttribute('aria-label', `Side ${b + 1}`);
        }
        else {
            button.setAttribute('aria-label', `Sidste side, side ${b + 1}`);
        }
        button.textContent = b + 1;
        button.addEventListener('click', () => {
            setVisibleRows(allTableRows, rowsPerPage, b);
            updateVisiblePaginationButtons(pagination, b);
        });
        listelement.appendChild(button);
        pagination_items.appendChild(listelement);
        if (b === 0 || b === rowArrays.length-2) {
            let overflowelement = document.createElement('li');
            overflowelement.classList.add('pagination-item', 'pagination-overflow');
            overflowelement.innerHTML = '<span class="sr-only">Prikker som indikerer skjulte sider</span><span>...</span>';
            pagination_items.appendChild(overflowelement);
        }
    }
    pagination.appendChild(pagination_items);

    pagination.appendChild(next_button);
    pagination.appendChild(last_button);

    first_button.addEventListener('click', () => {
        setVisibleRows(allTableRows, rowsPerPage, 0);
        updateVisiblePaginationButtons(pagination, 0);
    });

    previous_button.addEventListener('click', () => {
        if (pagination.querySelector('.current-page')) {
            let current_page = parseInt(pagination.querySelector('.current-page').textContent)-1;
            if (current_page > 0) {
                setVisibleRows(allTableRows, rowsPerPage, current_page-1);
                updateVisiblePaginationButtons(pagination, current_page-1);
            }
        }
    });

    next_button.addEventListener('click', () => {
        if (pagination.querySelector('.current-page')) {
            let current_page = parseInt(pagination.querySelector('.current-page').textContent)-1;
            if (current_page < rowArrays.length-1) {
                setVisibleRows(allTableRows, rowsPerPage, current_page+1);
                updateVisiblePaginationButtons(pagination, current_page+1);
            }
        }
    });

    last_button.addEventListener('click', () => {
        setVisibleRows(allTableRows, rowsPerPage, rowArrays.length-1);
        updateVisiblePaginationButtons(pagination, rowArrays.length-1);
    });
}

function updateVisiblePaginationButtons(pagination, page) {
    let pagination_items = pagination.querySelector('.pagination__items');
    let buttons = pagination_items.querySelectorAll('.pagination-number');
    let overflow = pagination_items.querySelectorAll('.pagination-overflow');
    let first_button = pagination.querySelector('.button-first');
    let previous_button = pagination.querySelector('.button-previous');
    let next_button = pagination.querySelector('.button-next');
    let last_button = pagination.querySelector('.button-last');

    for (let o = 0; o < overflow.length; o++) {
        overflow[o].setAttribute('hidden', '');
    }
    for (let b = 0; b < buttons.length; b++) {
        buttons[b].setAttribute('hidden', '');
        buttons[b].querySelector('button').classList.add('button-secondary');
        buttons[b].querySelector('button').classList.remove('current-page');
        buttons[b].querySelector('button').removeAttribute('aria-current');
    }
    if (buttons.length < 8) {
        for (let b = 0; b < buttons.length; b++) {
            buttons[b].removeAttribute('hidden');
        }
    }
    else {
        buttons[0].removeAttribute('hidden');
        buttons[buttons.length-1].removeAttribute('hidden');
        if (page < 4) {
            buttons[1].removeAttribute('hidden');
            buttons[2].removeAttribute('hidden');
            buttons[3].removeAttribute('hidden');
            buttons[4].removeAttribute('hidden');
            overflow[1].removeAttribute('hidden');
        }
        else if (page > buttons.length-5) {
            overflow[0].removeAttribute('hidden');
            buttons[buttons.length-5].removeAttribute('hidden');
            buttons[buttons.length-4].removeAttribute('hidden');
            buttons[buttons.length-3].removeAttribute('hidden');
            buttons[buttons.length-2].removeAttribute('hidden');
        }
        else {
            overflow[0].removeAttribute('hidden');
            buttons[page-1].removeAttribute('hidden');
            buttons[page].removeAttribute('hidden');
            buttons[page+1].removeAttribute('hidden');
            overflow[1].removeAttribute('hidden');
        }
    }
    buttons[page].querySelector('button').classList.remove('button-secondary');
    buttons[page].querySelector('button').classList.add('current-page');
    buttons[page].querySelector('button').setAttribute('aria-current', 'true');

    if (page === 0) {
        first_button.classList.add('hidden');
        previous_button.classList.add('hidden');
    }
    else {
        first_button.classList.remove('hidden');
        previous_button.classList.remove('hidden');
    }

    if (page === buttons.length-1) {
        next_button.classList.add('hidden');
        last_button.classList.add('hidden');
    }
    else {
        next_button.classList.remove('hidden');
        last_button.classList.remove('hidden');
    }

    pagination.querySelector('.pagination-mobile').textContent = `Side ${page+1} af ${buttons.length}`;
}

function scrollPaginationIntoView(pagination) {
    let rect = pagination.getBoundingClientRect();
    if (!(rect.top >= 0 && 
          rect.left >= 0 && 
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && 
          rect.right <= (window.innerWidth || document.documentElement.clientWidth))) {
        pagination.scrollIntoView(false);
    }
}