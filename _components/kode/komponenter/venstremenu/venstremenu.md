---
permalink: /kode/komponenter/venstremenu/
parentlink: /kode/komponenter/
redirect_from:
- /kode/komponenter/sidenav/
title: Venstremenu
layout: styleguide
type: component
description: "Dokumentation på implementering af venstremenu."
tags:
category: Kode_category
subcategory: Kode
---

{% include code/preview-box.html component="sidenav-normal-level2" title="Eksempel på søgefelt" %}

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

#### Anchor links
Hvis en undermenu består af links til områder på den aktuelle side tilføjes klassen `has-anchor-links` på `<ul>` elementet.

{% include code/syntax.html component="sidenav-anchor" link=true copybutton=true %}

#### Tilføj ikon og information i venstremenu

- For at tilføje et ikon til et punkt i venstremenuen bruges klassen `sidenav-icon-before`.
- For at tilføje information til et punkt i venstremenuen bruges klassen `sidenav-information`.
- Ikoner og informationer kan også sammensættes i én venstremenu.
