---
permalink: /kode/komponenter/search/
parentlink: /kode/komponenter/
title: Søgefelt
layout: styleguide
type: component
category: Kode_category
description: "Dokumentation på implementering af søgefelt."
tags:
subcategory: Kode
---

{% include code/preview-box.html component="search" title="Eksempel på søgefelt" %}

## Eksempler og retningslinjer
<ul class="nobullet-list">
    <li><a href="/komponenter/search/#retningslinjer">Retningslinjer</a></li>
    <li><a href="/komponenter/search/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur

{% include code/syntax.html component="search" %}

Du kan styre søgefeltets bredde via `input-width-` og `input-char-` se mere under punktet formular elementer og input bredde og validering.

Du bør som oftest implementere auto-suggest på søgefelter, så brugeren foreslås relevante søge ord/sætninger.

Ordet ”Søg” skal altid fremgå af søgeknappen. Hvis der anvendes et lup-ikon, skal ”søg” fremgå i en aria-label, så skærmlæsere kan se funktionen.

Formularens felt skal have et skjult label af hensyn til skærmlæsere.
