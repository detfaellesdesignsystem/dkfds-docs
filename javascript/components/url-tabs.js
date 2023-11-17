let pageContents = {
    0: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Consequat mauris nunc congue nisi vitae suscipit tellus. Turpis egestas integer eget aliquet nibh praesent tristique magna sit. Aenean et tortor at risus viverra. Ornare aenean euismod elementum nisi quis eleifend. Nibh tortor id aliquet lectus proin nibh nisl condimentum id. Aliquet nec ullamcorper sit amet. In hac habitasse platea dictumst vestibulum. Id faucibus nisl tincidunt eget nullam. Faucibus a pellentesque sit amet porttitor eget. Etiam sit amet nisl purus in mollis nunc. Gravida neque convallis a cras semper auctor. Pretium aenean pharetra magna ac placerat vestibulum. Magnis dis parturient montes nascetur. Sit amet porttitor eget dolor morbi non arcu risus. Luctus accumsan tortor posuere ac ut. Quam viverra orci sagittis eu volutpat odio facilisis mauris sit. Arcu odio ut sem nulla pharetra diam sit. Enim sit amet venenatis urna. Mauris ultrices eros in cursus turpis massa. Integer enim neque volutpat ac tincidunt vitae semper quis.',
    1: 'Pretium fusce id velit ut tortor pretium viverra suspendisse potenti. Sollicitudin tempor id eu nisl nunc. Curabitur gravida arcu ac tortor dignissim. Quis varius quam quisque id diam vel. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Habitant morbi tristique senectus et netus et. Ultricies mi eget mauris pharetra et ultrices neque ornare aenean. Bibendum est ultricies integer quis auctor elit sed vulputate mi. Pretium aenean pharetra magna ac placerat. Suspendisse potenti nullam ac tortor vitae purus faucibus. Ullamcorper sit amet risus nullam eget felis eget nunc. Dolor purus non enim praesent. Amet risus nullam eget felis eget nunc. Scelerisque eu ultrices vitae auctor eu augue ut lectus.',
    2: 'At erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Purus viverra accumsan in nisl. Cras ornare arcu dui vivamus arcu felis bibendum. Eget magna fermentum iaculis eu non diam. Risus in hendrerit gravida rutrum. Posuere morbi leo urna molestie at. Arcu bibendum at varius vel pharetra vel turpis. Sit amet est placerat in. Facilisis leo vel fringilla est. Neque laoreet suspendisse interdum consectetur libero id faucibus. Augue lacus viverra vitae congue eu. Neque gravida in fermentum et sollicitudin ac orci phasellus egestas. Tempor commodo ullamcorper a lacus vestibulum sed.'
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