---
title: Responsiv
parent: Tables
order: 50
component: table--responsive
componentTitle: "Eksempel på responsiv tabel"
---

### Implementering

`data-title` attribut bør tilføjes til hver `td`, således at en label bliver tilføjet for hver celle på mindre skærme.

Bemærk, at `data-title` automatisk bliver tilføjet til hver `td`, hvis man har DKFDS javascript filen inkluderet i sit projekt.

#### Eksempel
```
<tr>
    <td data-title="Affaldstype">Dagrenovation</td>
    <td data-title="Farvekode">Grøn</td>
    <td data-title="Beskrivelse">Madaffald, samt papir, pap eller plastik der ikke kan genanvendes, fordi der er madrester eller andet snask på.</td>
    <td data-title="Hvor ender det?">Alt det affald, du smider ud i din primære skraldespand, som er dagrenovationen, bliver hentet og kørt på forbrændingen.</td>
</tr>
```

#### JavaScript

Hvis en komponent først bliver tilføjet på siden efter pageload, så vil der være stor sandsynlighed for at komponenten ikke virker optimalt, da events ikke er blevet sat.

Hvis man står i denne situation kan man definere denne komponent i JavaScript således:

```
new DKFDS.ResponsiveTable(document.getElementByID('TABLE-ID'));
```

Bemærk, at dette kun gælder fra version 5.0.0.
