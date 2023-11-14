---
permalink: "/kode/komponenter/datofelter/"
parentlink: /kode/komponenter/
redirect_from:
- "/kode/komponenter/dato-felt/"
layout: styleguide
category: Kode_category
subcategory: Kode
title: Datofelter
component: "date-input"
componentTitle: "Eksempel på datofelter"
anchor: false
description: "Dokumentation på implementering af datofelter."
tags:
---

## Eksempler og retningslinjer
<ul class="nobullet-list">
    <li><a href="/komponenter/datofelter/#retningslinjer">Retningslinjer</a></li>
    <li><a href="/komponenter/datofelter/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur

{% include code/syntax.html component="date-input" copybutton=true %}

- Anvend ikke JavaScript til automatisk at flytte fokus fra felt til felt, da det gør det svært for tastatur-brugere at navigere i formularen.
- Datofelter-komponenten består af 3 inputfelter.

{:#fejlmeddelelse}
## Fejlmeddelelse
<a href="/kode/komponenter/fejlmeddelelser/#datofelter">Læs mere om korrekt brug af fejlmeddelelser og deres formuleringer.</a>

Når der vises en fejlmeddelelse, vis da også <a href="/kode/komponenter/fejlopsummering/">fejlopsummering</a>.