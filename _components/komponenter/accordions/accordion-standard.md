---
title: Standard
parent: Accordions
order: 20
component: accordion
componentTitle: "Eksempel på accordion"
---
<div class="accordion accordion-bordered">
    <button class="button-unstyled accordion-button" aria-expanded="false" aria-controls="technical">
        Implementering
    </button>
    <div id="technical" class="accordion-content">
        <p>Man kan undlade at sætte <code>aria-hidden</code> attribut på <code>accordion-content</code>, hvis man har implementeret dkfds.js i sit projekt. <code>aria-hidden</code> vil da blive tilføjet automatisk via javascript.</p>
        <h2 class="h4">JavaScript</h2>
        <p>Hvis en komponent først bliver tilføjet på siden efter pageload, så vil der være stor sandsynlighed for at komponenten ikke virker optimalt, da events ikke er blevet sat.</p>
        <p>Hvis man står i denne situation kan man definere denne komponent i JavaScript således:</p>
        <pre>new DKFDS.Accordion(document.getElementByID('ACCORDION-ID'));</pre>
        <p>Bemærk, at dette kun gælder fra version 5.0.0.</p>
        <h3 class="h5">Events</h3>
        <p>Når en accordion bliver foldet ud, bliver eventet <code>fds.accordion.open</code> udløst på accordion knappen, som man kan koble sig på med en eventlistener.</p>
        <p>Når en accordion bliver foldet ind, bliver eventet <code>fds.accordion.close</code> udløst på accordion knappen, som man kan koble sig på med en eventlistener.</p>
    </div>
</div>
