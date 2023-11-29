---
permalink: "/kode/komponenter/toggle/"
parentlink: /kode/komponenter/
layout: styleguide
category: Kode_category
subcategory: Kode
title: Toggle switch
component: "toggle"
componentTitle: "Eksempel på toggle komponent"
anchor: false
description: "Dokumentation på implementering af accordions."
tags: 
---

## Eksempler og retningslinjer
<ul class="nobullet-list">
    <li><a href="/komponenter/toggle/#retningslinjer">Retningslinjer</a></li>
    <li><a href="/komponenter/toggle/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur

Afstand mellem label og knap skal tilpasses til ens løsning. Hvorvidt toggle switches skal placeres i en liste eller i en anden semantisk struktur, afhænger af konteksten.

{% include code/syntax.html component="toggle" copybutton=true %}

### Javascript

Der medfølger ikke funktionalitet med denne komponent. Når der trykkes på switchen, skal man derfor selv - udover at implementere den ønskede funktionalitet - sørge for at skifte værdien i attributten `aria-checked` til `true`/`false`.