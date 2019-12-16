---
title: Tillad mere end én åben accordion
parent: Accordions
order: 40
component: accordion-multi
componentTitle: "Eksempel på accordion, hvor flere kan være åbne på samme tid"
---
<div class="accordion accordion-bordered">
    <button class="button-unstyled accordion-button" aria-expanded="false" aria-controls="technical-multi">
        Implementering
    </button>
    <div id="technical-multi" class="accordion-content">
        <p>Man kan også tillade at flere kan være åbne på samme tid. Dette gøres ved at tilføje klassen <code>accordion-multiselectable</code> til <code>.accordion</code>.</p>
    </div>
</div>
