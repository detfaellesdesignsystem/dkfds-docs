---
type: component
title: Streger
parent: borders-shadows
order: 02
---

{% include code/preview.html component="borders" %}
<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
    aria-expanded="false" aria-controls="borders-docs">
    Implementering
  </button>
  <div id="borders-docs" class="accordion-content">
    <section>
        <h3 class="h4">Ydre streger</h3>
        <ul>
            <li>Ydre streger er 1px bredde og er mørkegrå. Brug variablen $outer-border for at opsætte ydre kanter.</li>
            <li>Bruges som ydre streger på komponenter, til at adskille dem fra hinanden.</li>
        </ul>
        <p class="h5 mb-3">Eksempel:</p>
        <div class="code-highlight">
            <code>border: $outer-border;</code>
        </div>
        <h3 class="h4">Indre streger</h3>
        <ul>
            <li><p>Indre streger er 1px bredde og er lysegrå. For at bruge indre borders bruges variablen <code>$inner-border</code></p></li>
            <li><p>Anvendes som indvendige streger i komponenter, der kræver separering af elementer.</p></li>
        </ul>
        <p class="h5 mb-3">Eksempel:</p>
        <div class="code-highlight">
            <code>border: $inner-border;</code>
        </div>
        <h3 class="h4">Knap borders</h3>
        <ul>
            <li><p>Borders på knapper er 2px bredde og farven afhænger af elementet. For at bruge borders til knapper bruges variablen <code>$button-border</code></p></li>
            <li><p>Har ekstra border bredde, som bruges på knapper</p></li>
        </ul>
        <p class="h5 mb-3">Eksempel:</p>
        <div class="code-highlight">
            <code>border: $button-border;</code>
        </div>
    </section>
  </div>
</div>
