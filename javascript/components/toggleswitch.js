document.addEventListener("DOMContentLoaded", function() {
    let toggleSwitches = document.querySelectorAll('.toggle-switch');
    if(document.getElementById('completed-switch') !== null && document.getElementById('yearold-switch') !== null) {
        document.getElementById('completed-switch').addEventListener("click", function() { flipToggleSwitch(this); }, false);
        document.getElementById('yearold-switch').addEventListener("click", function() { flipToggleSwitch(this); }, false);
    }
    for(let i = 0; i < toggleSwitches.length; i++) {
        toggleSwitches[i].addEventListener("click", function() { flipToggleSwitch(this); }, false);
    }
});

function flipToggleSwitch(toggleSwitch) {
    if (toggleSwitch.getAttribute("aria-checked") === "true") {
        toggleSwitch.setAttribute("aria-checked", "false");
    } else {
        toggleSwitch.setAttribute("aria-checked", "true");
    }
}