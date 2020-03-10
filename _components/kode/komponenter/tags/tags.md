---
permalink: /kode/komponenter/tags/
parentlink: /kode/komponenter/
title: Tags
layout: styleguide
type: component
category: Kode_category
subcategory: Kode
description: "Dokumentation på implementering af tags."
tags:
anchor: true
subnav:
- text: Tags med ikon
  href: '#tags-med-ikon'
---

{% include code/preview-box.html component="tags" title="Eksempel på tags" %}

## Eksempler og retningslinjer
<ul class="nobullet-list">
    <li><a href="/komponenter/tags/#retningslinjer">Retningslinjer</a></li>
    <li><a href="/komponenter/tags/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur

{% include code/syntax.html component="tags" %}

- Tags markeres tydeligt med en fokus tilstand, når brugere ved hjælp af tab-tasten navigerer sig frem til dem.
- Undgå at anvende `div` eller `img` tags til at konstruere et tag, da skærmlæsere ikke automatisk kan afkode funktionaliteten i så fald.
- Tags med et indlejret svg-ikon som fx (X) for ”Slet” eller ”Fjern” skal være klikbare på hele tag’et og ikke kun ikonet.

## Varianter

{:#tags-med-ikon}
### Tags med ikon

{% include code/syntax.html component="tags-icon" link="true" %}
