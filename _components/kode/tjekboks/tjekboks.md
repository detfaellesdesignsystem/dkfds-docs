---
permalink: /kode/tjekboks/
title: Tjekboks
layout: styleguide
type: component
category: Kode_category
subcategory: Kode
---

{% include code/preview-box.html component="checkbox-large" title="Eksempel på tjekboks" %}

## Eksempler og dokumentation
<ul class="nobullet-list">
    <li><a href="/komponenter/tjekboks/#retningslinjer">Dokumentation</a></li>
    <li><a href="/komponenter/tjekboks/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur

{% include code/syntax.html component="checkbox-large" %}

- Indsæt altid to eller flere tjekbokse i et fieldset inklusive legend. En enkelt tjekboks skal ikke sidde i et fieldset.
- Giv hver tjekboks sit eget id og angiv samme værdi til det tilhørende label.
- Tjekboksenes design er ændret ift. standardvisningen for at gøre dem tydeligere og øge deres visuelle respons til brugerens interaktion.
- Tjekboksene er gjort tilgængelige for skærmlæsere på trods af deres visuelle design, ved at selve tagget for tjekboksen er placeret uden for det synlige skærmområde.

## Varianter

### Lille tjekboks

{% include code/syntax.html component="checkbox-small" link="true" %}

Vær opmærksom på, at vi anbefaler, at man bruger den store tjekbox.

### Tjekboks med fejl
{% include code/syntax.html component="checkbox-error" link="true" %}
