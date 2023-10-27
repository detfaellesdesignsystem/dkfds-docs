---
permalink: "/komponenter/venstremenu/implementering/"
guidelinelink: "/komponenter/venstremenu/guidelines/"
redirect_from:
- "/kode/komponenter/sidenav/"
- "/kode/komponenter/venstremenu/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Venstremenu
lead: Venstremenu giver brugerne overblik over struktur og indhold, så de kan finde
  vej til det indhold, de leder efter.
component: "sidenav-normal-level2"
componentTitle: "Eksempel på søgefelt"
anchor: false
description: "Dokumentation på implementering af venstremenu."
tags:
---

## Eksempler og retningslinjer
<ul class="nobullet-list">
    <li><a href="/komponenter/venstremenu/#retningslinjer">Retningslinjer</a></li>
    <li><a href="/komponenter/venstremenu/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur

{% include code/syntax.html component="sidenav-normal-level2" copybutton=true %}

#### Aktive menupunkter

- Aktive menupunkter skal have klassen `current`.
- Kun det sidste aktive menupunkt skal have klassen `active`.
- Hvis der kun er ét aktivt niveau sættes begge klasser.

#### Tilføj ikon og information i venstremenu

- For at tilføje et ikon til et punkt i venstremenuen bruges klassen `sidenav-icon-before`.
- For at tilføje information til et punkt i venstremenuen bruges klassen `sidenav-information`.
- Ikoner og informationer kan også sammensættes i én venstremenu.
