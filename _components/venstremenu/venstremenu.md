---
permalink: "/komponenter/venstremenu/guidelines/"
redirect_from:
- "/komponenter/sidenav/"
- "/komponenter/venstremenu/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Venstremenu
lead: Venstremenuen strukturerer et navigationshierarki med op til tre niveauer i en vertikal liste.
component: "sidenav-normal-level1"
componentTitle: "Eksempel på venstremenu med ét niveau"
componentLink: true
headings: Venstremenu
anchorlinks: true
description: Venstremenu giver brugerne overblik over struktur og indhold, så de kan
  finde vej til det indhold, de leder efter.
tags: 
---

{% assign headings = site.data.headings[page.headings] %}

[---- Sådan bruges komponenten -------------------------------------]: # 
<h2 id="{{ headings[0].id }}">{{ headings[0].h2 }}</h2>

### Anvendes til

Venstremenu anvendes til at afspejle et navigationshierarki i op til tre niveauer.

Venstremenu anvendes til den sekundære navigation/undermenu på en side i en større løsning.

### Anvendes ikke til

Venstremenu bør ikke anvendes på mindre løsninger (mindre end 5 sider).

Hvis din løsning allerede har topmenu og evt. tilknyttet dropdown, bør du overveje at forenkle din navigation før du vælger en venstremenu.

### Vejledning

Markér det aktive punkt (”der hvor brugeren er”) i venstremenuen.

Brug korte og præcise ord og begreber. De må eksempelvis gerne være kortere varianter af selve sidernes indholdstitler.

Undgå at lave for mange punkter.

Undgå at lave menuen for dyb – forsøg at undgå mere end 1-2 niveauer.

[---- Varianter -------------------------------------]: # 
<h2 id="{{ headings[1].id }}">{{ headings[1].h2 }}</h2>

{:#to-niveauer}
### 2 niveauer

{% include code/preview-box.html component="sidenav-normal-level2" title="Eksempel på venstremenu med to niveauer" %}

{:#tre-niveauer}
### 3 niveauer

{% include code/preview-box.html component="sidenav-normal-level3" title="Eksempel på venstremenu med tre niveauer" %}

{:#ekstra-information}
### Ekstra information

{% include code/preview-box.html component="sidenav-information-level1" title="Eksempel på venstremenu med hjælpetekst på ét niveau" %}

{:#anchorlinks}
### Anchorlinks

Fra {% include links/internal-link.html linktext="version 10.0.0" %} vises anchorlinks ikke længere i venstremenuen. Se {% include links/component-guideline-link.html linktext="anchorlinks-komponenten" %} for nye retningslinjer.

[---- Referencer -------------------------------------]: # 
<h2 id="{{ headings[2].id }}">{{ headings[2].h2 }}</h2>

{% include links/external-link.html linktext="Derek Powazek: Where Am I? (2006)" %}