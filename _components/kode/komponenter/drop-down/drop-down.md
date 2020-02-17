---
permalink: /kode/komponenter/drop-down/
parentlink: /kode/komponenter/
layout: styleguide
type: component
title: Dropdown-menu
category: Kode_category
description: "Dokumentation på implementering af dropdown-menu."
tags:
subcategory: Kode
---

{% include code/preview-box.html component="select" title="Eksempel på drop-down" %}

## Eksempler og retningslinjer
<ul class="nobullet-list">
    <li><a href="/komponenter/drop-down/#retningslinjer">Retningslinjer</a></li>
    <li><a href="/komponenter/drop-down/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur

{% include code/syntax.html component="select" %}

Dropdown menu skal have et label tilknyttet.

Anvend ikke JavaScript til automatisk at sende den valgte værdi, da en skærmlæser vælger hver option i takt med, at den læser dem op.

Brug dropdown menu i begrænset omfang. Værdierne i en dropdown menu er ikke umiddelbart synlige for brugerne, og det øger sidens kompleksitet for dem.
