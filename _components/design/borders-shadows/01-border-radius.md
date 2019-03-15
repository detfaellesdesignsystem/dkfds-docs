---
type: component
title: Hjørner
parent: borders-shadows
order: 01
---

{% include code/preview.html component="border-radius" %}
{% include code/accordion.html component="border-radius" %}
<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
    aria-expanded="false" aria-controls="border-radius-docs">
    Implementering
  </button>
  <div id="border-radius-docs" class="accordion-content">
    <section>
        <h3 class="h4">Statiske hjørner</h3>
        <ul>
            <li>Statiske hjørner er lige og har en <code>border-radius: 0px;</code></li>
            <li>For at få lige hjørner skal du bruge variablen <code>$static-border-radius</code></li>
        </ul>
        <p class="h5 mb-3">Eksempel:</p>
        <div class="code-highlight">
            <code>border-radius: $static-border-radius;</code>
        </div>
        <h3 class="h4">Interaktive hjørner</h3>
        <ul>
            <li>Interaktive hjørner er runde og har en <code>border-radius: 4px;</code></li>
            <li>For at få runde hjørner skal du bruge variablen <code>$interactive-border-radius</code></li>
            <li>Interaktive hjørner bør kun bruges til håndtering af interaktive elementer, da det er meningen at differentiere indhold fra aktion.</li>
        </ul>
        <p class="h5 mb-3">Eksempel:</p>
        <div class="code-highlight">
            <code>border-radius: $interactive-border-radius;</code>
        </div>
    </section>
  </div>
</div>