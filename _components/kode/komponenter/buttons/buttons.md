---
permalink: /kode/komponenter/buttons/
parentlink: /kode/komponenter/
layout: styleguide
type: component
title: Knapper
category: Kode_category
subcategory: Kode
anchor: true
tags: "primærknap,sekundærknap,tertiærknap"
subnav:
- text: Primærknap
  href: '#primærknap'
- text: Sekundærknapper
  href: '#sekundærknapper'
- text: Tertiærknapper
  href: '#tertiærknapper'
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
    <li><a href="/komponenter/buttons/#retningslinjer">Retningslinjer</a></li>
    <li><a href="/komponenter/buttons/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur

{% include code/syntax.html component="button-primary" %}

## Varianter

{:#primærknap}
### Primær

Defineres med klassen `button-primary`.

Bemærk særlige <a href="/komponenter/buttons/#retningslinjer">retningslinjer</a> for primær knap.

{:#sekundærknap}
### Sekundær
Defineres med klassen `button-secondary`.

{:#tertiærknap}
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

