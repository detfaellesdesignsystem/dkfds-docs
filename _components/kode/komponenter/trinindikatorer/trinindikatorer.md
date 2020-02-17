---
permalink: "/kode/komponenter/trinindikatorer/"
title: Trinindikatorer
parentlink: /kode/komponenter/
layout: styleguide
type: component
category: Kode_category
description: "Dokumentation på implementering af trinindikatorer."
tags:
subcategory: Kode
anchor: true
subnav:
- text: Responsiv
  href: "#responsiv"
- text: Klikbar
  href: "#klikbar"
- text: Låst
  href: "#låst"
- text: Ekstra information
  href: "#ekstra-information"
---

{% include code/preview-box.html component="tringuide-overflowmenu" title="Eksempel på trinindikator i overflow menu" %}

## Eksempler og retningslinjer
<ul class="nobullet-list">
    <li><a href="/komponenter/trinindikatorer/#retningslinjer">Retningslinjer</a></li>
    <li><a href="/komponenter/trinindikatorer/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur

{% include code/syntax.html component="tringuide-overflowmenu" %}

Hvis man gør brug af en trinindikator i forbindelse med en <a href="/komponenter/overflowmenu/">overflow menu komponent</a>, så se venligst <a href="/kode/komponenter/overflowmenu/">dokumentationen for implementering for overflow menu</a>.

#### Aktivt og overstået trin i trinindikator

- Det aktive menupunkt skal have klassen `active` og `current`.
- For at indikere et overstået trin, kan der indsættes et ikon med klassen `sidenav-icon`. Dette ikon er sat til højre i trinet.

## Varianter

Nedenstående varianter implementeres i et grid på samme måde som <a href="/komponenter/sidenav/">sidenavigation</a>, således at komponenten vises i en kolonne til venstre for indholdet.

{:#responsiv}
### Responsiv
{% include code/syntax.html component="tringuide-responsive-overflowmenu" link="true" %}

{:#klikbar}
### Klikbar
{% include code/syntax.html component="tringuide-clickable" link="true" %}

{:#låst}
### Låst
{% include code/syntax.html component="tringuide-locked" link="true" %}

{:#ekstra-information}
## Ekstra information
{% include code/syntax.html component="tringuide-information" link="true" %}
