---
permalink: "/komponenter/toastbesked/guidelines/"
redirect_from:
- "/komponenter/notifikation/"
- "/komponenter/toastbesked/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Toastbesked
lead: Toastbeskeder viser aktuel information og dukker op på skærmen i det øjeblik, de bliver relevante. Toastbeskeder vises typisk som reaktion på brugerinteraktion.
component: "toastbesked"
componentTitle: "Eksempel på toastbesked"
componentLink: true
anchor: true
subnav:
- text: Sådan bruges komponenten
  href: "#retningslinjer"
- text: Varianter
  href: "#varianter"
description: 
tags:
- toast
- toastbesked
- notifikation
- besked
---

Til forskel fra {% include links/component-guideline-link.html linktext="Beskeder (alerts)" %} som er placeret som en del af sideindholdet, placeres toastbeskeder ovenpå selve siden.
Vær opmærksom på at toastbeskeder hurtigt kan gå fra at opfattes som nyttige til at opfattes som anmassende og påtrængende, så overvej nøje om det er denne komponent, der er det rigtige valg.

{:#retningslinjer}
## Sådan bruges komponenten

### Anvendes til

At gøre brugeren opmærksom på vigtige oplysninger, ofte relateret til brugerens aktuelle aktivitet.

### Anvendes ikke til

Brug {% include links/component-guideline-link.html linktext="Beskeder (alerts)" %}, hvis en besked skal placeres som en del af indholdet på siden.

Brug ikke toastbeskeder til at markere fejlindtastning i et specifikt felt. Brug da {% include links/component-guideline-link.html linktext="fejlmeddelelser" %} i stedet.

Brug modal dialog – ikke toastbeskeder – til at give brugerne information om en potentielt kritisk handling. Dermed risikerer brugeren ikke at overse eller misforstå beskeden.

Kritiske beskeder eller lange beskeder, hvis toastbeskeden er tidsindstillet og forsvinder automatisk. Det gør det vanskeligt for brugere, som fx gør brug af hjælpeteknologier, at læse meddelelsen før den forsvinder.

### Vejledning

Gør informationen i toastbeskeden aktiv og handlingsanvisende, så brugeren forstår, hvad der er behov for eller hvad den aktuelle status er.

Brug ord og begreber, som brugeren kan genkende fra løsningen.

Skriv kort og præcist og undgå tekniske beskeder, der kan forvirre brugeren.

Brug beskeder til at øge brugerens forståelse for løsningen.

Tilføj ikke interaktivt indhold som links ol. på toastbeskeden, da der kan opstå udfordringer i forbindelse med tilgængelighed.

Når toastbeskeden vises, kan man lade den forsvinde igen, men vær opmærksom på at {% include links/external-link.html linktext="WCAG succes kriteriet 2.2.1: Timing Adjustable" %} skal efterleves.

Vis den nyeste toastbesked øverst. Hvis der kan være flere toastbeskeder vist ad gangen og rækkefølgen er vigtig, så tilføj et tidsstempel til toastbeskeden.

{:#varianter}
## Varianter

{:#succes}
### Succes

{% include code/preview-box.html component="toastbesked-success" title="Eksempel på notifikation med success farver" %}

{:#advarsel}
### Advarsel

{% include code/preview-box.html component="toastbesked-warning" title="Eksempel på notifikation med advarselsfarver" %}

{:#fejl}
### Fejl

{% include code/preview-box.html component="toastbesked-error" title="Eksempel på notifikation med fejlfarver" %}

{:#information}
### Information

{% include code/preview-box.html component="toastbesked-info" title="Eksempel på notifikation med infofarver" %}

{:#uden-broedtekst}
### Uden brødtekst

{% include code/preview-box.html component="toastbesked-onlyheading" title="Eksempel på notifikation uden brødtekst" %}
