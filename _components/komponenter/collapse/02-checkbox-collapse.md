---
title: Checkbox - skjul og vis indhold
parent: Collapse
order: 20
component: checkbox-toggle-content
componentTitle: "Eksempel på skjul/vis med tjekbokse"
---

### Implementering
For at initialisere collapse funktionaliteten på en checkbox skal `input[type=checkbox]` have følgende:

- Klassen `'js-checkbox-toggle-content'`. Denne klasse gør at funktionaliteten bliver initialiseret. 
- Attributten `data-js-target="id-of-target-to-collapse"`: denne attribute skal have id'et på det element som skal vises på tjekboksen er aktiveret. 
- Hvis man ønsker at tjekboksen skal være valgt fra starten af, skal den have attributten `'checked'`.
- `aria-controls="id-of-target-to-collapse" `

Det element som skal collapses/expandes skal have følgende:

- `id=”id-of-target-to-collapse”`
- `aria-hidden="true/false"`

<h2 class="h5">JavaScript</h2>

Hvis en komponent først bliver tilføjet på siden efter pageload, så vil der være stor sandsynlighed for at komponenten ikke virker optimalt, da events ikke er blevet sat.

Hvis man står i denne situation kan man definere denne komponent i JavaScript således:

```
new DKFDS.CheckboxToggleContent(document.getElementByID('CHECKBOX-INPUT-ID'));
```

Bemærk, at dette kun gælder fra version 5.0.0.

<h3 class="h5">Events</h3>

Når en skjul/vis komponent bliver foldet ud, bliver eventet `fds.collapse.open` udløst på `input` elementet, som man kan koble sig på med en eventlistener.

Når en skjul/vis komponent bliver foldet ind, bliver eventet `fds.collapse.close` udløst på `input` elementet, som man kan koble sig på med en eventlistener.
