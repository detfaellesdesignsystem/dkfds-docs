---
permalink: "/komponenter/venstremenu/guidelines/"
redirect_from:
- "/komponenter/sidenav/"
- "/komponenter/venstremenu/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Venstremenu
lead: Venstremenu giver brugerne overblik over struktur og indhold, så de kan finde
  vej til det indhold, de leder efter.
component: "sidenav-normal-level1"
componentTitle: "Eksempel på venstremenu med ét niveau"
componentLink: true
anchor: true
subnav:
- text: 2 niveauer
  href: "#2-niveauer"
- text: 3 niveauer
  href: "#3-niveauer"
- text: Ekstra information
  href: "#ekstra-information"
- text: Anchorlinks
  href: "#anchorlinks"
description: Venstremenu giver brugerne overblik over struktur og indhold, så de kan
  finde vej til det indhold, de leder efter.
tags: 
---

{:#retningslinjer}
## Retningslinjer

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

{% include dos-donts-box.html component="sidenav-dos-donts" title="Venstremenu do's and don'ts" %}

#### Referencer

<a href="http://www.alistapart.com/articles/whereami" class="icon-link">Derek Powazek: Where Am I? (2006)<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>

## Varianter

{:#2-niveauer}
### 2 niveauer

{% include code/preview-box.html component="sidenav-normal-level2" title="Eksempel på venstremenu med to niveauer" %}

{:#3-niveauer}
### 3 niveauer

{% include code/preview-box.html component="sidenav-normal-level3" title="Eksempel på venstremenu med tre niveauer" %}

{:#ekstra-information}
### Ekstra information

{% include code/preview-box.html component="sidenav-information-level1" title="Eksempel på venstremenu med hjælpetekst på ét niveau" %}

{:#anchorlinks}
### Anchorlinks

Fra <a href="/faellesskab/releases/#version-10-0-0">version 10.0.0</a> vises anchorlinks ikke længere i venstremenuen. Se {% include links/component-links.html linktext="anchorlinks-komponenten" %} for nye retningslinjer.