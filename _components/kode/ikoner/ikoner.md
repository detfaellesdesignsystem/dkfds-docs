---
permalink: "/kode/ikoner/"
title: Ikoner
layout: styleguide
type: component
category: Kode_category
subcategory: Kode
order: 25
description: "Sådan bruger du ikoner med FDS."
---

{% include code/preview-box.html component="icon" title="Eksempel på ikon" %}

## Installation

### HTML Struktur

{% include code/syntax.html component="icon" %}

Ovenstående kode refererer til en ikonsamling. For at få ikonet vist, skal man derfor huske at implementere ikomsamlingen på hver side.

#### Implementering af ikonsamlingen

{% include code/syntax.html component="simple-base-svg" link="true" url="example-base-svg" %}

Bemærk, at ovenstående kodeeksempel ikke er den fulde ikonsamling. Hele ikonsamlingen er dog vist, hvis du åbner eksemplet i et nyt vindue.

Ikonsamlingen placeres i toppen af `<body>` i et område, der er skjult.

### Tilgængelighed

Ikoner bør tilføjes en `aria-label` tekst til elementet, der beskriver ikonet, så skærmlæsere kan læse ikonet op, såfremt ikonet har betydning for forståelsen.

I tilfælde, hvor ikonet ikke skal læses op, tilføj da attributten `aria-hidden="true"`. Denne attribut vil gøre ikonet usynligt for skærmlæsere.

Dekorative ikoner bør undgås, men hvis de bruges, skal de ikke beskrives eller have beskrivende attributter, da de ikke bærer nogen betydning eller er vigtige for brugeren.

Da Internet Explorer sætter fokus på svg elementer bør `focusable="false"` tilføjes, således at der ikke længeres sættes fokus på ikonet med tab-tasten.

## Varianter

### Ikoner indsat med klasser

Ikoner der indsættes inline med i-tagget får på den måde samme skriftstørrelse. Følgende kode indsætter et 'alert'-ikon: `<i class="icon icon-alert-outline"></i>`

Denne metode har nogle begrænsninger, hvorfor vi anbefaler, at man benytter den anden metode.
        
### Tilpasning af ikonet til teksten

Tilføj klassen `inline-svg` på ikoner, som skal fremgå i en tekst. Ikonet vil da tilpasse sig linjehøjden. Se eksemplet herunder:

Lorem ipsum <svg class="icon-svg inline-svg" focusable="false" aria-hidden="true"><use xlink:href="#language"></use></svg> dolor sit amet.
