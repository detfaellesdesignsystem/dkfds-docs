let pageContents = {
    0: 'Pretium fusce id velit ut tortor pretium viverra suspendisse potenti. Sollicitudin tempor id eu nisl nunc. Curabitur gravida arcu ac tortor dignissim. Quis varius quam quisque id diam vel. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Habitant morbi tristique senectus et netus et. Ultricies mi eget mauris pharetra et ultrices neque ornare aenean. Bibendum est ultricies integer quis auctor elit sed vulputate mi.',
    1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Consequat mauris nunc congue nisi vitae suscipit tellus. Turpis egestas integer eget aliquet nibh praesent tristique magna sit.',
    2: 'At erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Purus viverra accumsan in nisl. Cras ornare arcu dui vivamus arcu felis bibendum. Eget magna fermentum iaculis eu non diam. Risus in hendrerit gravida rutrum. Posuere morbi leo urna molestie at. Arcu bibendum at varius vel pharetra vel turpis. Sit amet est placerat in. Facilisis leo vel fringilla est.'
}

document.addEventListener("DOMContentLoaded", function() {
    setupExample();
});

function setupExample() {
if (document.getElementById('tab-component') !== null) {
    let tabContainer = document.getElementById('tab-component');

    tabs = tabContainer.getElementsByClassName('tab-item');
    if (tabs.length !== 0) {
        const tabContentArray = [];

        for (i=0; i<tabs.length; i++) {
            tabs[i].setAttribute('id', i.toString());
            tabs[i].addEventListener("click", function() {
                changePage(this, tabs);
                setActiveTabContent(tabs, tabContentArray);
            });

            setupTabContent(i, tabContainer, tabContentArray);
        }
        setActiveTabContent(tabs, tabContentArray);
    }
    
    } else {throw new Error ('No tab items are found in the document and therefore no eventlisteners are set')}
}

function changePage(pressedTab, tabList) {
    for(i=0; i<tabList.length; i++) {
        if(tabList[i].getAttribute('aria-current') === "page") {
            tabList[i].removeAttribute('aria-current');
        }
    }
    pressedTab.setAttribute('aria-current',"page");
}

function setupTabContent(index, tabContainer, tabContentArray) {
    const tabContentDiv = document.createElement('div');
    tabContentDiv.setAttribute('id', "tabContent-" + i.toString());
    let content = document.createElement('p');
    content.innerText = pageContents[index];
    tabContentDiv.appendChild(content);
    tabContainer.after(tabContentDiv);
    tabContentArray.push(tabContentDiv);
}

function setActiveTabContent(tabs, tabContentArray) {
    for (i=0; i<tabs.length; i++) {
        
        if (tabs[i].getAttribute("aria-current") === null || tabs[i].getAttribute("aria-current") === "") {
            // hide the corresponding content of that tab
            for (j=0; j<tabContentArray.length; j++) {
                tabContentId = tabContentArray[j].getAttribute('id').split('-').pop();
                tabId = tabs[i].getAttribute('id').toString();
                if (tabId == tabContentId) {
                    tabContentArray[j].style.display = "none";
                }
            }

        } else {
            // show the corresponding content of that tab
            for (j=0; j<tabContentArray.length; j++) {
                tabContentId = tabContentArray[j].getAttribute('id').split('-').pop();
                tabId = tabs[i].getAttribute('id');
                if (tabId == tabContentId) {
                    tabContentArray[j].style.display = "block";
                }
            }
        }
    }
}