---
permalink: /kode/komponenter/paginering/
parentlink: /kode/komponenter/
layout: styleguide
category: Kode_category
subcategory: Kode
title: Paginering
component: "pagination"
componentTitle: "Eksempel på paginering"
anchor: false
description: "Dokumentation på implementering af paginering."
tags:
- paginering
- pagination
- sidevælger
---

## Eksempler og retningslinjer
<ul class="nobullet-list">
    <li><a href="/komponenter/paginering/#retningslinjer">Retningslinjer</a></li>
    <li><a href="/komponenter/paginering/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur

{% include code/syntax.html component="pagination" copybutton=true %}

Brug `class="hidden"` på Forrige-, Næste-, Første- og Sidste-knapperne, når de ikke skal vises.

## Tilgængelighed

Lad knappen med tallet til sidste side indeholde en aria-label, der oplyser dette. Husk at lade den aktuelle side være markeret med `aria-current="page"`.

Sørg for at alle Forrige-, Næste-, Første- og Sidste-knapper på mindre skærme har en skjult, tilknyttet tekst, så ikonerne kan læses højt af en skærmlæser.


### JavaScript
Bemærk at DKFDS på nuværende tidspunkt kun leverer HTML og CSS til denne komponent. Funktionaliteten skal man derfor selv håndtere.
