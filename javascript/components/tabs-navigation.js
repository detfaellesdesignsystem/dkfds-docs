window.addEventListener('hashchange', function(e) {
    updateExample(window.location.hash);
});

document.addEventListener("DOMContentLoaded", function() {
    setupExample();
    updateExample(window.location.hash);
});

function setupExample() {
    let main = document.querySelector('main');
    if (main) {
        let content1 = document.createElement('div');
        content1.id = "content1";
        content1.innerHTML = '<h2>Indhold 1</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper, enim eu fringilla varius, massa lectus molestie lacus, sed malesuada justo magna sit amet eros. Nam accumsan dignissim dignissim. In hac habitasse platea dictumst. Cras feugiat maximus turpis, id ullamcorper purus congue ut.</p>';
        main.appendChild(content1);

        let content2 = document.createElement('div');
        content2.id = "content2";
        content2.innerHTML = '<h2>Indhold 2</h2><p>Praesent consequat erat nec felis semper dignissim. Duis mattis massa in hendrerit varius. Sed commodo at augue sit amet auctor. Maecenas ligula massa, rutrum quis porttitor id, semper ut libero. Nam quis felis porta lorem consequat eleifend a rutrum ante.</p>';
        content2.classList.add('d-none');
        main.appendChild(content2);

        let content3 = document.createElement('div');
        content3.id = "content3";
        content3.innerHTML = '<h2>Indhold 3</h2><p>Phasellus sodales lectus mi, vel pellentesque massa semper non. Sed iaculis sed nisl id dapibus. Aenean vitae tristique purus. Sed faucibus sit amet eros vitae commodo. Integer bibendum, justo nec scelerisque malesuada, nunc risus ultricies diam, euismod dignissim orci eros eget neque.</p>';
        content3.classList.add('d-none');
        main.appendChild(content3);
    }
}

function updateExample(hash) {
    let content1 = document.getElementById('content1');
    let content2 = document.getElementById('content2');
    let content3 = document.getElementById('content3');
    let tabs = document.querySelectorAll('.tab-button');
    if (hash === '' || hash === '#indhold1') {
        content1.classList.remove('d-none');
        content2.classList.add('d-none');
        content3.classList.add('d-none');
        tabs[0].setAttribute('aria-current', 'true');
        tabs[1].removeAttribute('aria-current');
        tabs[2].removeAttribute('aria-current');
    }
    else if (hash === '#indhold2') {
        content1.classList.add('d-none');
        content2.classList.remove('d-none');
        content3.classList.add('d-none');
        tabs[0].removeAttribute('aria-current');
        tabs[1].setAttribute('aria-current', 'true');
        tabs[2].removeAttribute('aria-current');
    }
    else if (hash === '#indhold3') {
        content1.classList.add('d-none');
        content2.classList.add('d-none');
        content3.classList.remove('d-none');
        tabs[0].removeAttribute('aria-current');
        tabs[1].removeAttribute('aria-current');
        tabs[2].setAttribute('aria-current', 'true');
    }
}