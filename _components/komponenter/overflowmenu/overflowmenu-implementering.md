---
title: Implementering
parent: Overflowmenu
order: 40
headingClass: h3
---
<h3 class="h4">Klasser</h3>

Følgende aria tags styrer hvorvidt menuen er foldet ud:

- Button: `aria-expanded="false"`
- Overflow menu: `aria-hidden="true"`

Følgende klasser styrer i hvilken retning menuen skal folde ud:

- Venstre: `.overflow-menu--open-left`
- Højre: `.overflow-menu--open-right`

Der er lavet et specifikt liste element til overflow-menuen (se `.overflow-list`) som kan indeholde links eller buttons. Det er dog ikke nødvendigt at benytte denne liste. Overflow-menuen er bare en container hvor man kan placere det indhold man nu har lyst til.

<h3 class="h4">Skjul/vis</h3>

Initialiser collapse/expand javascript med at placere følgende på button elementet: `class="js-dropdown" data-js-target="#overflow1"`

Elementet som skal collapses/expandes skal have et matchende id `id="overflow1"` (placeres på `.overflow-menu-inner`)

<h3 class="h4">Javascript</h3>

Hvis en komponent først bliver tilføjet på siden efter pageload, så vil der være stor sandsynlighed for at komponenten ikke virker optimalt, da events ikke er blevet sat.

Hvis man står i denne situation kan man definere denne komponent i JavaScript således:

```
new DKFDS.Dropdown(document.getElementByID('OVERFLOW-BUTTON-ID'));
```

Bemærk, at dette kun gælder fra version 5.0.0.

<h4 class="h5">Events</h4>

Når en overflow menu bliver foldet ud, bliver eventet `fds.dropdown.open` udløst på knappen, som man kan koble sig på med en eventlistener.

Når en overflow menu bliver foldet ind, bliver eventet `fds.dropdown.close` udløst på knappen, som man kan koble sig på med en eventlistener.
