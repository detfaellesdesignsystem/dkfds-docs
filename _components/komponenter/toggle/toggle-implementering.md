---
permalink: "/komponenter/toggle/implementering/"
guidelinelink: "/komponenter/toggle/guidelines/"
redirect_from:
- "/kode/komponenter/toggle/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Toggle switch
lead: "En toggle switch er en digital tænd/sluk-knap. Til forskel fra en radioknap eller tjekboks træder valget i kraft i det øjeblik brugerne interagerer med komponenten."
component: "toggle"
componentTitle: "Eksempel på toggle komponent"
anchor: false
description: "Dokumentation på implementering af toggle switch."
tags: 
---

## Installation

### HTML Struktur

Afstand mellem label og knap skal tilpasses til ens løsning. Hvorvidt toggle switches skal placeres i en liste eller i en anden semantisk struktur, afhænger af konteksten.

{% include code/syntax.html component="toggle" copybutton=true %}

### Javascript

Der medfølger ikke funktionalitet med denne komponent. Når der trykkes på switchen, skal man derfor selv - udover at implementere den ønskede funktionalitet - sørge for at skifte værdien i attributten `aria-checked` til `true`/`false`.