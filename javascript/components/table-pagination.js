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
        let rows = [row1, row2, row3, row4, row5, row6];
        let r = 0;
        t.querySelector('tbody').innerHTML = '';
        let rows_wanted = 12;
        for (let i = 0; i < rows_wanted; i++) {
            if (r > rows.length - 1) {
                r = 0;
            }
            let row = document.createElement('tr');
            row.innerHTML = rows[r];
            t.querySelector('tbody').appendChild(row);
            r++;
        }

        let table_rows = t.querySelectorAll('tbody tr');
        let defaultRows = 5;
        let defaultPage = 0;
        let pagination = document.querySelector('#table-pagination + .table-pagination-options');
        
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
    for (let r = 0; r < allTableRows.length; r++) {
        let cells = allTableRows[r].querySelectorAll('td');
        for (let c = 0; c < cells.length; c++) {
            cells[c].style.borderBottom = '';
        }
        if (rowArrays[page].includes(allTableRows[r])) {
            allTableRows[r].removeAttribute('hidden');
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
}

function createPaginationButtons(allTableRows, rowsPerPage, pagination) {
    let pagination_items = pagination.querySelector('.pagination__items');
    let rowArrays = getRowArrays(allTableRows, rowsPerPage);
    pagination_items.innerHTML = '';
    for (let b = 0; b < rowArrays.length; b++) {
        let listelement = document.createElement('li');
        listelement.classList.add('pagination-item', 'pagination-number');
        let button = document.createElement('button');
        button.classList.add('button', 'button-secondary');
        button.textContent = b + 1;
        button.addEventListener('click', () => {
            setVisibleRows(allTableRows, rowsPerPage, parseInt(b));
            updateVisiblePaginationButtons(pagination, b);
        });
        listelement.appendChild(button);
        pagination_items.appendChild(listelement);
        if (b === 0 || b === rowArrays.length-2) {
            let overflowelement = document.createElement('li');
            overflowelement.classList.add('pagination-item', 'pagination-overflow');
            overflowelement.innerHTML = '<span>...</span>';
            pagination_items.appendChild(overflowelement);
        }
    }
}

function updateVisiblePaginationButtons(pagination, page) {
    let pagination_items = pagination.querySelector('.pagination__items');
    let buttons = pagination_items.querySelectorAll('.pagination-number');
    let overflow = pagination_items.querySelectorAll('.pagination-overflow');
    if (buttons.length < 8) {
        for (let o = 0; o < overflow.length; o++) {
            overflow[o].setAttribute('hidden', '');
        }
        for (let b = 0; b < buttons.length; b++) {
            let button = buttons[b].querySelector('button');
            buttons[b].removeAttribute('hidden');
            button.classList.add('button-secondary');
            button.classList.remove('current-page');
            button.removeAttribute('aria-current');
            if (b === page) {
                button.classList.remove('button-secondary');
                button.classList.add('current-page');
                button.setAttribute('aria-current', 'true');
            }
        }
    }
}