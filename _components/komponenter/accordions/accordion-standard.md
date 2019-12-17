---
title: Standard
parent: Accordions
order: "20"
component: accordion
componentTitle: Eksempel på accordion

---
<div class="accordion accordion-bordered">
<button class="button-unstyled accordion-button" aria-expanded="false" aria-controls="technical">
Implementering
</button>
<div id="technical" class="accordion-content">

Man kan undlade at sætte ```aria-hidden``` attribut på ```accordion-content```, hvis man har implementeret dkfds.js i sit projekt. ```aria-hidden``` vil da blive tilføjet automatisk via javascript.

<h2 class="h4">JavaScript</h2>

Hvis en komponent først bliver tilføjet på siden efter pageload, så vil der være stor sandsynlighed for at komponenten ikke virker optimalt, da events ikke er blevet sat.

Hvis man står i denne situation kan man definere denne komponent i JavaScript således:
  
```
  new DKFDS.Accordion(document.getElementByID('ACCORDION-ID'));
```

Bemærk, at dette kun gælder fra version 5.0.0.

<h3 class="h5">Events</h3>

Når en accordion bliver foldet ud, bliver eventet ```fds.accordion.open``` udløst på accordion knappen, som man kan koble sig på med en eventlistener.

Når en accordion bliver foldet ind, bliver eventet ```fds.accordion.close``` udløst på accordion knappen, som man kan koble sig på med en eventlistener.

</div>
</div>