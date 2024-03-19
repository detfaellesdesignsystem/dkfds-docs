---
permalink: "/komponenter/cards/implementering/"
guidelinelink: "/komponenter/cards/guidelines/"
redirect_from:
- "/kode/komponenter/cards/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Cards
lead: Cards anvendes som en visuel afgrænsning af indhold eller interaktionselementer, der omhandler samme emne.
component: "cards-full-width"
componentTitle: "Eksempel på card"
componentLink: true
anchor: true
subnav:
- text: Installation
  href: '#installation'
- text: Card med tredjedel bredde
  href: '#card-med-tredjedel-bredde'
- text: Card med halv bredde
  href: '#card-med-halv-bredde'
- text: Cards med samme højde
  href: '#samme-hoejde'
description: "Dokumentation på implementering af cards."
tags:
---

{:#installation}
## Installation

### HTML Struktur

{% include code/syntax.html component="card" copybutton=true %}

Cards kan bestå af en header, et tekstområde, et indholdsområde og et aktionsområde, som i øvrigt kan ligge i en footer. Du kan frit sammensætte cards efter dit eget behov, men der er regler for, hvad du kan placere i de forskellige områder.

Sæt card til fuld højde ved at tilføje klassen `card-align-height` til elementet med klassen `card`.

### Områder

#### Header

Headeren defineres med klassen `card-header`, og indeholder en titel og en understøttende tekst.

Husk, at cards er en del af sidestrukturen, hvorfor overskrifter fortsat skal være semantisk korrekt. Hvis overskriften før cards er en h2, så bør `header-title` være h3.

- `header-titel` defineres som en semantisk korrekt overskrift.
- `subheader`

#### Tekstområde

Tekstområdet defineres med klassen `card-text`, og indeholder brødtekst, som er defineret som et `<p>` element.

#### Indholdsområde

Indholdsområdet er defineret med klassen `card-content`, og kan indeholde både brødtekst og illustrationer, som har hver deres `<div>` med hver deres class. 
- `content-text` indeholder brødtekst.
- `content` kan indeholde lige det du ønsker - fx illustrationer som billeder eller SVG.

#### Aktionsområde

Aktionsområdet er defineret med klassen `card-action` og kan indeholde knapper og links som har hver deres `<div>` med hver deres klasse.

- `action-buttons` kan indeholde knapper, og vil vise knapperne sidestillet.
- `action-links` kan indeholde en liste af links.

#### Footer
Footer bruges gerne i forbindelse med flere cards, som skal have samme højde, og hvor man har knapper eller links, der gerne skal flugte på tværs af cards.

Footer defineres med klassen `card-footer`.

{:#card-med-tredjedel-bredde}
## Card med tredjedel bredde

{% include code/syntax.html component="cards-third-width" link=true copybutton=true %}

{:#card-med-halv-bredde}
## Card med halv bredde

{% include code/syntax.html component="cards-half-width" link=true copybutton=true %}

{:#samme-hoejde}
## Cards med samme højde

{% include code/syntax.html component="cards-same-height" link=true copybutton=true %}