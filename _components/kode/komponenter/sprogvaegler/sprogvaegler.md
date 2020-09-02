---
permalink: "/kode/komponenter/sprogvaegler/"
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
  href: '#sprogvælger-med-tooltip'
---

{% include code/preview-image.html component="language-switcher" alt="Billedet viser en sprogvælger" title="Eksempel på sprogvælger" %}

## Eksempler og retningslinjer
<ul class="nobullet-list">
    <li><a href="/komponenter/sprogvaegler/#retningslinjer">Retningslinjer</a></li>
    <li><a href="/komponenter/sprogvaegler/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur

{% include code/syntax.html component="language-switcher" %}

Sprogvælgeren indsættes nederst i footeren. <a href="/eksempler/selvbetjeningsloesninger/#solution-7">Se eksempel på implementering i eksempelløsningen “Sager hos AES”</a>

Hvert sprog tilføjes i listen på original sproget og med den tilsvarende landekode i `lang` attributten.

Bemærk aria-labels i koden, hvor der vil være tekst og formuleringer der skal tilpasses for hvert sprog man kan vælge.

## Varianter

### Sprogvælger med tooltip

{% include code/syntax.html component="language-switcher-tooltip" link="true" %}

<a href="/kode/komponenter/tooltip/">For mere info om implementering se tooltip komponenten</a>
