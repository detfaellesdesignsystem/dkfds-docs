---
permalink: "/kode/komponenter/trinindikator/"
redirect_from:
- /kode/komponenter/trinindikatorer/
title: Trinindikator
parentlink: /kode/komponenter/
layout: styleguide
type: component
category: Kode_category
description: "Dokumentation på implementering af trinindikator."
tags:
subcategory: Kode
anchor: true
subnav:
- text: Alle trin synlige
  href: "#klikbar"
- text: Responsiv
  href: "#responsiv"
- text: Låst
  href: "#laast"
- text: Ekstra information
  href: "#ekstra-information"
- text: Trinindikator med fejl
  href: "#med-fejl"
---

{% include code/preview-box.html component="tringuide-overflowmenu" title="Eksempel på trinindikator i overflow menu" %}

## Eksempler og retningslinjer
<ul class="nobullet-list">
    <li><a href="/komponenter/trinindikator/#retningslinjer">Retningslinjer</a></li>
    <li><a href="/komponenter/trinindikator/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur

{% include code/syntax.html component="tringuide-overflowmenu" copybutton=true %}

Hvis man gør brug af en trinindikator i forbindelse med en <a href="/komponenter/overflowmenu/">overflow menu komponent</a>, så se venligst <a href="/kode/komponenter/overflowmenu/">dokumentationen for implementering for overflow menu</a>.

#### Aktivt og overstået trin i trinindikator

- Det aktive menupunkt skal have klassen `active` og `current`.
- For at indikere et overstået trin, kan der indsættes et ikon med klassen `sidenav-icon`. Dette ikon er sat til højre i trinet.

## Varianter

Nedenstående varianter implementeres i et grid på samme måde som <a href="/komponenter/venstremenu/">venstremenu</a>, således at komponenten vises i en kolonne til venstre for indholdet.

{:#klikbar}
### Alle trin synlige
{% include code/syntax.html component="tringuide-clickable" link=true copybutton=true %}

{:#responsiv}
### Responsiv
{% include code/syntax.html component="tringuide-responsive-overflowmenu" link=true copybutton=true %}

{:#laast}
### Låst
{% include code/syntax.html component="tringuide-locked" link=true copybutton=true %}

{:#ekstra-information}
### Ekstra information
{% include code/syntax.html component="tringuide-information" link=true copybutton=true %}

### Trinindikator med fejl

Tilføj klassen `sidenav-error` til de liste-elementer, der er fejl i og anvend ikonet `highlight-off` med en passende `aria-label`.

{% include code/syntax.html component="tringuide-error-responsive" link=true copybutton=true %}