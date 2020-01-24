---
permalink: /kode/radiobutton/
title: Radioknap
layout: styleguide
type: component
category: Kode_category
subcategory: Kode
---

{% include code/preview-box.html component="radiobutton" title="Eksempel på radioknap" %}

## Eksempler og dokumentation
<ul class="nobullet-list">
    <li><a href="/komponenter/radiobutton/#retningslinjer">Dokumentation</a></li>
    <li><a href="/komponenter/radiobutton/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur

{% include code/syntax.html component="radiobutton" %}

- Indsæt altid to eller flere radioknapper i et fieldset inklusive legend.
- Giv hver radioknap sit eget id og angiv samme værdi til det tilhørende label.
- Radioknappernes design er ændret i forhold til standardvisningen for at gøre dem tydeligere og øge deres visuelle respons til brugerens interaktion.

## Varianter

### Lille radioknap

{% include code/syntax.html component="radiobutton-small" link="true" %}

### Radioknap med hjælpetekst
{% include code/syntax.html component="radiobutton-helptext" link="true" %}

### Radioknap med fejl
{% include code/syntax.html component="radiobutton-error" link="true" %}
