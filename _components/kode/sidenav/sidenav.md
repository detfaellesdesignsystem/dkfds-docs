---
permalink: /kode/sidenav/
title: Sidenavigation
layout: styleguide
type: component
category: Kode_category
subcategory: Kode
---

{% include code/preview-box.html component="sidenav-normal-level2" title="Eksempel på søgefelt" %}

## Eksempler og dokumentation
<ul class="nobullet-list">
    <li><a href="/komponenter/sidenav/#retningslinjer">Dokumentation</a></li>
    <li><a href="/komponenter/sidenav/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur

{% include code/syntax.html component="sidenav-normal-level2" %}

#### Aktive menupunkter

- Aktive menupunkter skal have klassen `current`.
- Kun det sidste aktive menupunkt skal have klassen `active`.
- Hvis der kun er ét aktivt niveau sættes begge klasser.

#### Anchor links
Hvis en undermenu består af links til områder på den aktuelle side tilføjes klassen `has-anchor-links` på `<ul>` elementet.

{% include code/syntax.html component="sidenav-anchor" link="true" %}

#### Tilføj ikon og information i sidenavigation

- For at tilføje et ikon til et punkt i sidenavigationen bruges klassen `sidenav-icon-before`.
- For at tilføje information til et punkt i sidenavigationen bruges klassen `sidenav-information`.
- Ikoner og informationer kan også sammensættes i én sidenavigation.
