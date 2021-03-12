---
permalink: "/kode/komponenter/notifikation/"
parentlink: /kode/komponenter/
layout: styleguide
type: component
title: Notifikation
category: Kode_category
subcategory: Kode
description: "Dokumentation på implementering af notifikation."
tags: 
anchor: true
subnav:
- text: Succes
  href: "#succes"
- text: Advarsel
  href: "#advarsel"
- text: Fejl
  href: "#fejl"
- text: Information
  href: "#information"
---

{% include code/preview-box.html component="notification-info" title="Eksempel på notifikation komponent" %}

## Eksempler og retningslinjer
<ul class="nobullet-list">
    <li><a href="/komponenter/notifikation/#retningslinjer">Retningslinjer</a></li>
    <li><a href="/komponenter/notifikation/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur

{% include code/syntax.html component="notification-info" %}

Kopiér ovenstående kode for at indsætte én notifikation. 

### Javascript
Der medfølger ikke javascript for denne komponent, da komponenten gerne tilføjes af løsningernes egen kode. Husk at tilføje håndtering af luk knappen, når komponenten tilføjes på siden.

## Varianter

{:#succes}
### Succes
{% include code/syntax.html component="notification-success" link="true" %}

{:#advarsel}
### Advarsel
{% include code/syntax.html component="notification-warning" link="true" %}

{:#fejl}
### Fejl
{% include code/syntax.html component="notification-error" link="true" %}

{:#information}
### Information
{% include code/syntax.html component="notification-info" link="true" %}
