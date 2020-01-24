---
permalink: /kode/spinner/
title: Spinner
layout: styleguide
type: component
category: Kode_category
subcategory: Kode
---

{% include code/preview-box.html component="spinner" title="Eksempel på spinner" %}

## Eksempler og dokumentation
<ul class="nobullet-list">
    <li><a href="/komponenter/spinner/#retningslinjer">Dokumentation</a></li>
    <li><a href="/komponenter/spinner/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur

{% include code/syntax.html component="spinner" %}

For at ændre spinnerens størrelse kan `font-size` gøres større eller mindre.

Anvend ARIA attributten `aria-busy="true"` på elementet, der er igang med at blive opdateret til at markere for skærmlæsere, at der er en live region i gang med indlæsning og sæt værdien til `false`, når den er indlæst.
