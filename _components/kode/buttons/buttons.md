---
permalink: /kode/buttons/
layout: styleguide
type: component
title: Knapper
category: Kode_category
subcategory: Kode
---

{% include code/preview-box.html component="button-primary" title="Eksempel på knap" %}

## Eksempler og dokumentation
<ul class="nobullet-list">
    <li><a href="/komponenter/buttons/#retningslinjer">Retningslinjer</a></li>
    <li><a href="/komponenter/buttons/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur

{% include code/syntax.html component="button-primary" %}

## Varianter

### Primær

Defineres med klassen `button-primary`.

Bemærk særlige <a href="/komponenter/buttons/#retningslinjer">retningslinjer</a> for primær knap.

### Sekundær
Defineres med klassen `button-secondary`.

### Tertiær

Defineres med klassen `button-tertiary`.

### Tilbage

Defineres med klassen `button-quaternary`.

### Knap med ikon
{% include code/syntax.html component="buttons-with-icon" %}

### Ikon som knap
{% include code/syntax.html component="buttons-only-icon" %}

`button-unstyled` bruges i de tilfælde, hvor knappen kun indeholder et ikon. For at gøre knappen tilgængelig husk da at tilføje tekst til skærmlæsere. Fx `<span class="sr-only">Slet</span>`.
