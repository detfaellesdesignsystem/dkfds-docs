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
lead: Venstremenuen strukturerer et navigationshierarki med op til tre niveauer i en vertikal liste.
component: "sidenav-normal-level1"
componentTitle: "Eksempel på søgefelt"
anchor: false
description: "Dokumentation på implementering af venstremenu."
tags:
---

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
