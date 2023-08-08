---
permalink: /kode/typografi/overskrifter/
parentlink: /kode/typografi/
layout: styleguide
category: Kode_category
subcategory: Kode
title: Overskrifter
component: "headings"
componentTitle: "Eksempel på overskrifter"
anchor: true
subnav:
- text: Subheading
  href: "#subheading"
description:
tags:
- "h1"
- "h2"
- "h3"
- "h4"
- "h5"
- "h6"
---

<a href="/design/typografi/overskrifter/#retningslinjer">Læs retningslinjerne for overskrifter</a>

## HTML Struktur

{% include code/syntax.html component="headings" copybutton=true %}

Hold en stram overskriftsstruktur i koden. En `<h3>` altid er under en `<h2>`, en `<h4>` under en `<h3>` osv. `<h1>` er altid øverst i hierarkiet.  

Lad være med at springe overskriftsled over. Hvis du visuelt vil have et andet udtryk, så brug en klasse til at style overskriften.

### Eksempel på en overskrift, der ligner et andet niveau

{% include code/syntax.html component="heading" link=true copybutton=true %}

## Subheading

{% include code/preview-box.html component="subheading" link=false title="Eksempel på subheading" %}

<a href="/design/typografi/overskrifter/#subheading">Læs retningslinjer for subheadings</a>

### HTML Struktur

{% include code/syntax.html component="subheading" copybutton=true %}
