document.addEventListener("DOMContentLoaded", function() {
    if(document.getElementById('completed-switch') !== null && document.getElementById('yearold-switch') !== null) {
        document.getElementById('completed-switch').addEventListener("click", function() { flipToggleSwitch(this); }, false);
        document.getElementById('yearold-switch').addEventListener("click", function() { flipToggleSwitch(this); }, false);
    }
});

function flipToggleSwitch(toggleSwitch) {
    if (toggleSwitch.getAttribute("aria-checked") === "true") {
        toggleSwitch.setAttribute("aria-checked", "false");
    } else {
        toggleSwitch.setAttribute("aria-checked", "true");
    }
}