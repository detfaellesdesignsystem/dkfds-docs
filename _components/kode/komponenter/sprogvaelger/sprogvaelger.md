---
permalink: "/kode/komponenter/sprogvaelger/"
redirect_from:
- /kode/komponenter/sprogvaegler/
parentlink: /kode/komponenter/
layout: styleguide
type: component
title: Sprogvælger
category: Kode_category
subcategory: Kode
description: "Dokumentation på implementering af sprogvælger."
tags: 
anchor: true
subnav:
- text: Tooltip
  href: '#sprogvaelger-med-tooltip'
---

{% include code/preview-image.html component="language-switcher" alt="Billedet viser en sprogvælger" title="Eksempel på sprogvælger" %}

## Eksempler og retningslinjer
<ul class="nobullet-list">
    <li><a href="/komponenter/sprogvaelger/#retningslinjer">Retningslinjer</a></li>
    <li><a href="/komponenter/sprogvaelger/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur

{% include code/syntax.html component="language-switcher" copybutton=true %}

<div class="alert alert-warning" role="alert">
    <div class="alert-body">
        <p class="alert-text">Bemærk, at man i løsningen selv står for funktionaliteten i denne komponent.</p>
    </div>
</div>

Sprogvælgeren indsættes nederst i footeren. Se <a href="/eksempler/selvbetjeningsloesninger/#sagsoversigt">eksempelløsningen "Sagsoversigt"</a> for placering i koden.

Hvert sprog tilføjes i listen på original sproget og med den tilsvarende landekode i `lang` attributten.

Bemærk aria-labels i koden, hvor der vil være tekst og formuleringer der skal tilpasses for hvert sprog man kan vælge.

## Varianter

{:#sprogvaelger-med-tooltip}
### Sprogvælger med tooltip

{% include code/syntax.html component="language-switcher-tooltip" link=true copybutton=true %}

<a href="/kode/komponenter/tooltip/">For mere info om implementering se tooltip komponenten</a>
