---
permalink: "/komponenter/knapper/implementering/"
guidelinelink: "/komponenter/knapper/guidelines/"
redirect_from:
- "/kode/komponenter/knapper/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Knapper (Buttons)
lead: Knapper lader brugeren udføre centrale funktioner.
component: "button-primary"
componentTitle: "Eksempel på knap"
anchor: true
subnav:
- text: Primærknap
  href: '#primaerknap'
- text: Sekundærknapper
  href: '#sekundaerknap'
- text: Tertiærknapper
  href: '#tertiaerknap'
- text: Tilbage-knap
  href: '#tilbage-knap'
- text: Knap med ikon
  href: '#knap-med-ikon'
- text: Klikbart ikon
  href: '#klikbart-ikon'
description: "Dokumentation på implementering af knapper."
tags:
- "primærknap"
- "sekundærknap"
- "tertiærknap"
---

## Installation

### HTML Struktur

{% include code/syntax.html component="button-primary" copybutton=true %}

- Undgå at anvende `div` eller `img` tags til at konstruere en knap, da skærmlæsere i givet fald ikke automatisk kan afkode knappens funktionalitet.
- Styler du et link, så det ligner en knap, skal du være opmærksom på, at der skal tilføjes attributten `role="button"`

## Varianter

{:#primaerknap}
### Primær

Defineres med klassen `button-primary`.

Bemærk særlige {% include links/component-links.html linktext="retningslinjer" %} for primær knap.

{:#sekundaerknap}
### Sekundær
Defineres med klassen `button-secondary`.

{:#tertiaerknap}
### Tertiær

Defineres med klassen `button-tertiary`.

{:#tilbage-knap}
### Tilbage-knap

Defineres med klassen `button-quaternary`.

{:#knap-med-ikon}
### Knap med ikon
{% include code/syntax.html component="buttons-with-icon" copybutton=true %}

{:#klikbart-ikon}
### Klikbart ikon
{% include code/syntax.html component="buttons-only-icon" copybutton=true %}

`button-unstyled` bruges i de tilfælde, hvor knappen kun indeholder et ikon. For at gøre knappen tilgængelig husk da at tilføje tekst til skærmlæsere. Fx `<span class="sr-only">Slet</span>`.
