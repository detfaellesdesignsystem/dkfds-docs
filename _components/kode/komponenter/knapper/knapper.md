---
permalink: /kode/komponenter/knapper/
parentlink: /kode/komponenter/
layout: styleguide
type: component
title: Knapper
category: Kode_category
subcategory: Kode
description: "Dokumentation på implementering af knapper."
anchor: true
tags:
- "primærknap"
- "sekundærknap"
- "tertiærknap"
subnav:
- text: Primærknap
  href: '#primaerknap'
- text: Sekundærknapper
  href: '#sekundaerknapper'
- text: Tertiærknapper
  href: '#tertiaerknapper'
- text: Tilbage-knap
  href: '#tilbage-knap'
- text: Knap med ikon
  href: '#knap-med-ikon'
- text: Ikon som knap
  href: '#ikon-som-knap'
---

{% include code/preview-box.html component="button-primary" title="Eksempel på knap" %}

## Eksempler og retningslinjer
<ul class="nobullet-list">
    <li><a href="/komponenter/knapper/#retningslinjer">Retningslinjer</a></li>
    <li><a href="/komponenter/knapper/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur

{% include code/syntax.html component="button-primary" %}

- Knapper markeres tydeligt med en fokus tilstand, når brugere ved hjælp af tab-tasten navigerer sig frem til dem.
- Undgå at anvende `div` eller `img` tags til at konstruere en knap, da skærmlæsere i givet fald ikke automatisk kan afkode knappens funktionalitet.
- Styler du et link, så det ligner en knap, skal du være opmærksom på, at skærmlæsere håndterer et link og en knap forskelligt:
    - Et link aktiveres ved at trykke ”Enter”.
    - En knap aktiveres ved at trykke ”Space”.

## Varianter

{:#primaerknap}
### Primær

Defineres med klassen `button-primary`.

Bemærk særlige <a href="/komponenter/knapper/#retningslinjer">retningslinjer</a> for primær knap.

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
{% include code/syntax.html component="buttons-with-icon" %}

{:#ikon-som-knap}
### Ikon som knap
{% include code/syntax.html component="buttons-only-icon" %}

`button-unstyled` bruges i de tilfælde, hvor knappen kun indeholder et ikon. For at gøre knappen tilgængelig husk da at tilføje tekst til skærmlæsere. Fx `<span class="sr-only">Slet</span>`.
