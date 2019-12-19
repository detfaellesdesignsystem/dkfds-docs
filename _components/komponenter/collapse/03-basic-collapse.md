---
title: Generel skjul og vis indhold funktionalitet
parent: Collapse
order: 30
component: basic-collapse
componentTitle: "Eksempel på skjul/visning af indhold ved brug af knap"
---

### Implementering

For at initialisere collapse funktionaliteten skal et HTML-element have klassen `.js-collapse`. Collapse/expand funktionaliteten bliver nu kaldt når man klikker på dette element.

Dette HTML-element skal yderligere have følgende attributter:

- `data-js-target="#id-of-target-to-collapse"`. Der henføres her til det element som skal collapses/expandes. 
- `aria-expanded="true/false". `
- `aria-controls="id-of-target-to-collapse"`

Det element som skal collapses/expanded skal have følgende:

- `id=”id-of-target-to-collapse”`
- `aria-hidden="true/false"`

#### JavaScript

Hvis en komponent først bliver tilføjet på siden efter pageload, så vil der være stor sandsynlighed for at komponenten ikke virker optimalt, da events ikke er blevet sat.

Hvis man står i denne situation kan man definere denne komponent i JavaScript således:

```
new DKFDS.Collapse(document.getElementByID('COLLAPSE-BUTTON-ID'));
```

Bemærk, at dette kun gælder fra version 5.0.0.

##### Events

Når en skjul/vis komponent bliver foldet ud, bliver eventet `fds.collapse.open` udløst på knappen, som man kan koble sig på med en eventlistener.

Når en skjul/vis komponent bliver foldet ind, bliver eventet `fds.collapse.close` udløst på knappen, som man kan koble sig på med en eventlistener.

### Retningslinjer

#### Tilgængelighed

- Skjul ikke meningsbærende indhold med denne funktionalitet.
- Skjult indhold skal fortsat overholde dokumentets outline (overskriftshierarki) og tilgængelighedskrav.

#### Brugervenlighed
##### Anvendes til

Vise yderligere information eller en ekstra funktion relevant til brugerens valg.

##### Anvendes ikke til

- Anvendes ikke som erstatning for accordions.
- Anvendes ikke til meningsbærende indhold som fx sidens brødtekst.

##### Vejledning

- Hold det enkelt. Hvis du har behov for at eksponere større mængder af ekstra funktionalitet eller indhold, bør du overveje, at fordele det ud over flere sider i stedet.
