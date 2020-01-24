---
permalink: /kode/tags/
title: Tags
layout: styleguide
type: component
category: Kode_category
subcategory: Kode
---

{% include code/preview-box.html component="tags" title="Eksempel på tags" %}

## Eksempler og dokumentation
<ul class="nobullet-list">
    <li><a href="/komponenter/tags/#retningslinjer">Dokumentation</a></li>
    <li><a href="/komponenter/tags/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur

{% include code/syntax.html component="tags" %}

- Tags markeres tydeligt med en fokus tilstand, når brugere ved hjælp af tab-tasten navigerer sig frem til dem.
- Undgå at anvende `div` eller `img` tags til at konstruere et tag, da skærmlæsere ikke automatisk kan afkode funktionaliteten i så fald.
- Tags med et indlejret svg-ikon som fx (X) for ”Slet” eller ”Fjern” skal være klikbare på hele tag’et og ikke kun ikonet.

## Varianter

### Tags med ikon

{% include code/syntax.html component="tags-icon" link="true" %}
