---
permalink: /kode/komponenter/beskeder/
parentlink: /kode/komponenter/
layout: styleguide
type: component
title: Beskeder (Alerts)
category: Kode_category
subcategory: Kode
anchor: true
subnav:
- text: Farver
  href: '#farver'
- text: Beskeder med ikon
  href: '#beskeder-med-ikon'
- text: Paragrafbredde
  href: '#paragrafbredde'
- text: Luk knap
  href: '#luk-knap'
---

{% include code/preview-box.html component="alert" title="Eksempel på besked komponent" %}


## Eksempler og retningslinjer
<ul class="nobullet-list">
    <li><a href="/komponenter/beskeder/#retningslinjer">Retningslinjer</a></li>
    <li><a href="/komponenter/beskeder/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur
{% include code/syntax.html component="alert" %}

## Varianter

{:#farver}
### Farver

#### Informativ
Informativ er blå, og defineres med klassen `alert-info`.

{% include code/syntax.html component="alert" link="true" %}

#### Succes
Succesbesked er grøn, og defineres med klassen `alert-success`.

{% include code/syntax.html component="alert-success" link="true" %}

#### Advarsel
Besked med advarsel er orange, og defineres med klassen `alert-warning`.

Bemærk, at attributten `role="alert"` bør tilføjes i dette tilfælde for at øge tilgængeligheden. Uanset, hvor fokus er på siden, vil beskeden da blive læst op med det samme.

{% include code/syntax.html component="alert-warning" link="true" %}

#### Fejl
Besked med fejl er rød, og defineres med klassen `alert-error`.

Bemærk, at attributten `role="alert"` bør tilføjes i dette tilfælde for at øge tilgængeligheden. Uanset, hvor fokus er på siden, vil beskeden da blive læst op med det samme.

{% include code/syntax.html component="alert-error" link="true" %}

{:#beskeder-med-ikon}
### Ikon
{% include code/syntax.html component="alerts-icons" link="true"%}

{:#paragrafbredde}
### Paragrafbredde
{% include code/syntax.html component="alert-paragraph" link="true" %}

{:#luk-knap}
### Luk knap
{% include code/syntax.html component="alert-close" link="true" %}
