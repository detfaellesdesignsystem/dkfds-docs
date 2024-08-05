document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("icon-search-input");
    const searchForm = document.getElementById("search-icons-form");

    searchForm.addEventListener("submit" , handleInput);

    /* Show icons matching the URL search */
    let queryParams = new URLSearchParams(window.location.search);
    let searchTermInURL = queryParams.get('s');
    searchInput.value = searchTermInURL;
    let initialResults = showSearchResults(searchTermInURL);
    if (initialResults && searchTermInURL) {
        document.getElementById('initial-result-message').textContent = `Ikonoversigten er filtreret. Viser de ikoner, der matcher søgningen '${searchInput.value}'.`;
    }
    
    function handleInput(e) {
        e.preventDefault();
        let searchTerm = searchInput.value.toLowerCase();
        let queryParams = new URLSearchParams(window.location.search);
        let foundResults = showSearchResults(searchTerm);
        document.getElementById('initial-result-message').classList.add('d-none');
        document.getElementById('initial-result-message').textContent = '';
        
        /* Update URL */
        if (searchTerm !== null && searchTerm.trim() !== "") {
            queryParams.set('s', searchInput.value);
            history.replaceState(null, null, "?" + queryParams.toString());
        } 
        else {
            history.replaceState(null, null, window.location.origin + window.location.pathname);
        }

        if (foundResults) {
            document.getElementById('sr-result-message').classList.remove('d-none');
            document.getElementById('sr-result-message').textContent = `Ikonoversigten er filtreret. Viser de ikoner, der matcher søgningen '${searchTerm}'.`;
        }
        else {
            document.getElementById('sr-result-message').classList.add('d-none');
        }
    }

    function showSearchResults(input) {
        let foundResults = false;
        let sections = document.getElementsByClassName('icon-section');
        for (let s = 0; s < sections.length; s++) {
            let foundIconsInSection = false;
            let icons = sections[s].getElementsByClassName('icon-box');
            for (let i = 0; i < icons.length; i++) {

                /* Create a string with the icon's information (iconInfo) */
                const iconName = icons[i].dataset.iconName.toLowerCase();
                const iconKeywords = icons[i].dataset.iconKeywords.toLowerCase().trim();
                const iconLabel = icons[i].getElementsByTagName('p')[0].innerText.toLowerCase();
                let iconInfo = iconName + ' ' + iconKeywords + ' ' + iconLabel;

                /* If the input is null, show the icon */
                if (input === null) {
                    foundIconsInSection = true;
                    foundResults = true;
                    icons[i].classList.remove('d-none');
                }
                /* If the input is empty, only whitespace, or matches the iconInfo string, show the icon */
                else if (input.trim() === '' || iconInfo.includes(input.toLowerCase())) {
                    foundIconsInSection = true;
                    foundResults = true;
                    icons[i].classList.remove('d-none');
                }
                /* If the input doesn't match the iconInfo string, hide the icon */
                else {
                    icons[i].classList.add('d-none');
                }
            }
            if (!foundIconsInSection) {
                sections[s].classList.add('d-none');
            }
            else {
                sections[s].classList.remove('d-none');
            }
        }
        let messageElement = document.getElementById('no-results-message');
        if (foundResults) {
            messageElement.classList.add('d-none');
        } 
        else {
            messageElement.classList.remove('d-none');
            document.getElementById('search-words').textContent = input;
        }
        return foundResults;
    }
});