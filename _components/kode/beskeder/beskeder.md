---
permalink: /kode/beskeder/
layout: styleguide
type: component
title: Beskeder (Alerts)
category: Kode_category
subcategory: Kode
---

{% include code/preview-box.html component="alert" title="Eksempel på besked komponent" %}


## Eksempler og dokumentation
<ul class="nobullet-list">
    <li><a href="/komponenter/beskeder/#retningslinjer">Retningslinjer</a></li>
    <li><a href="/komponenter/beskeder/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur
{% include code/syntax.html component="alert" %}

## Varianter
### Farver
#### Informativ
Informativ er blå, og defineres med klassen `alert-info`.

{% include code/syntax.html component="alert" %}

#### Succes
Succesbesked er grøn, og defineres med klassen `alert-success`.

{% include code/syntax.html component="alert-success" %}

#### Advarsel
Besked med advarsel er orange, og defineres med klassen `alert-warning`.

Bemærk, at attributten `role="alert"` bør tilføjes i dette tilfælde for at øge tilgængeligheden. Uanset, hvor fokus er på siden, vil beskeden da blive læst op med det samme.

{% include code/syntax.html component="alert-warning" %}

#### Fejl
Besked med fejl er rød, og defineres med klassen `alert-error`.

Bemærk, at attributten `role="alert"` bør tilføjes i dette tilfælde for at øge tilgængeligheden. Uanset, hvor fokus er på siden, vil beskeden da blive læst op med det samme.

{% include code/syntax.html component="alert-error" %}

### Ikon
{% include code/syntax.html component="alert-icon" %}

<a href="/komponenter/beskeder/#beskeder-med-ikon">Se eksempel på denne variation</a>

### Paragrafbredde
{% include code/syntax.html component="alert-paragraph" %}

<a href="/komponenter/beskeder/#forskellige-teksteksempler">Se eksempel på denne variation</a>

### Luk knap
{% include code/syntax.html component="alert-close" %}

<a href="/komponenter/beskeder/#beskeder-med-luk-knap">Se eksempel på denne variation</a>
