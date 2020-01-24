---
title: Implementering
parent: Tabnav
order: 20
headingClass: h3
---
<h3 class="h4">JavaScript</h3>

Hvis en komponent først bliver tilføjet på siden efter pageload, så vil der være stor sandsynlighed for at komponenten ikke virker optimalt, da events ikke er blevet sat.

Hvis man står i denne situation kan man definere denne komponent i JavaScript således:

```
new DKFDS.Tabnav(document.getElementByID('TABNAV-ID'));
```

Bemærk, at dette kun gælder fra version 5.0.0.

<h3 class="h5">Events</h3>

Når man vælger et nyt faneblad, bliver eventet `fds.tabnav.changed` udløst på `.tabnav` elementet, som man kan koble sig på med en eventlistener.

Når et faneblad åbnes, bliver eventet `fds.tabnav.open` udløst på det tilhørende `.tabnav-item` menu element, som man kan koble sig på med en eventlistener.

Når et faneblad lukkes, bliver eventet `fds.tabnav.close` udløst på det tilhørende `.tabnav-item` menu element, som man kan koble sig på med en eventlistener.
