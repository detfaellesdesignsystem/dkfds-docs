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
anchor: true
subnav:
- text: Installation
  href: "#installation"
- text: 2 niveauer
  href: "#to-niveauer"
- text: 3 niveauer
  href: "#tre-niveauer"
- text: Ekstra information
  href: "#ekstra-information"
description: "Dokumentation på implementering af venstremenu."
tags:
---

{:#installation}
## Installation

### HTML Struktur

{% include code/syntax.html component="sidenav-normal-level1" copybutton=true %}

#### Aktive menupunkter

- Aktive menupunkter skal have klassen `current`.
- Kun det sidste aktive menupunkt skal have klassen `active`.
- Hvis der kun er ét aktivt niveau sættes begge klasser.

#### Tilføj ikon og information i venstremenu

- For at tilføje et ikon til et punkt i venstremenuen bruges klassen `sidenav-icon-before`.
- For at tilføje information til et punkt i venstremenuen bruges klassen `sidenav-information`.
- Ikoner og informationer kan også sammensættes i én venstremenu.

{:#to-niveauer}
## 2 niveauer

{% include code/syntax.html component="sidenav-normal-level2" link=true copybutton=true %}

{:#tre-niveauer}
## 3 niveauer

{% include code/syntax.html component="sidenav-normal-level3" link=true copybutton=true %}

{:#ekstra-information}
## Ekstra information

{% include code/syntax.html component="sidenav-information-level1" link=true copybutton=true %}