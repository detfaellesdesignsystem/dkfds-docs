---
permalink: /kode/tooltip/
title: Tooltip og popover
layout: styleguide
type: component
category: Kode_category
subcategory: Kode
---

{% include code/preview-box.html component="tooltip-icon" title="Eksempel på tooltip" %}

## Eksempler og dokumentation
<ul class="nobullet-list">
    <li><a href="/komponenter/tooltip/#retningslinjer">Dokumentation</a></li>
    <li><a href="/komponenter/tooltip/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur

{% include code/syntax.html component="tooltip-icon" %}

Du bør opdatere følgende attributter til din løsning ved almindeligt tooltip:

- `data-tooltip`: Din tooltip-tekst

- Tooltip og popovers skal kunne lukkes med escape tasten på tastaturet.
- Fokus skal blive på det element, der aktiverede tooltip eller popover.
- Brug aria-describedby på elementet der udløser tooltip eller popover.
- Tooltips skal både vises, ved markering med mus og keyboard.

## Varianter

### Placering af tooltip
{% include code/syntax.html component="tooltip-position" link="true" %}

### Tooltip ved klik (Popover)
{% include code/syntax.html component="popover-icon" link="true" %}

Du bør opdatere følgende attributter til din løsning ved almindeligt tooltip:

- `data-tooltip`: Din tooltip-tekst
- `data-tooltip-trigger`: Hvis dit tooltip skal reagere kun ved klik, så skal denne sættes til `click`
- `aria-label`: For at forklare, at brugeren skal aktivere knappen, for at få teksten
