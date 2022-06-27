---
permalink: /kode/komponenter/tekstomraade/
redirect_from:
- /kode/komponenter/textarea/
parentlink: /kode/komponenter/
title: Tekstområde (Textarea)
layout: styleguide
type: component
category: Kode_category
description: "Dokumentation på implementering af tekstområde."
tags:
subcategory: Kode
---

{% include code/preview-box.html component="text-area" title="Eksempel på tekstområde" %}

## Eksempler og retningslinjer
<ul class="nobullet-list">
    <li><a href="/komponenter/tekstomraade/#retningslinjer">Retningslinjer</a></li>
    <li><a href="/komponenter/tekstomraade/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur

{% include code/syntax.html component="text-area" %}
  
Sørg for at rette værdierne i følgende attributter, så de svarer til din løsning:

- `for`
- `id`
- `name`
- `rows`


Sæt højden på et tekstområde ved brug af `rows` attributten. Sæt højden, så det svarer til den mængde tekst, der forventes indtastet.

## Varianter

## Fejl

{% include code/syntax.html component="text-area-error" link="true" %}

Sørg for at rette værdierne i følgende attributter, så de svarer til din løsning:

- `for`
- `id`
- `name`
- `aria-describedby`
- `name`
