---
permalink: "/komponenter/venstremenu/"
redirect_from:
- "/komponenter/sidenav/"
layout: styleguide
type: component
title: Venstremenu
category: Komponenter_category
subcategory: Komponenter
description: Venstremenu giver brugerne overblik over struktur og indhold, så de kan
  finde vej til det indhold, de leder efter.
tags: 
lead: Venstremenu giver brugerne overblik over struktur og indhold, så de kan finde
  vej til det indhold, de leder efter.
anchor: true
subnav:
- text: 2 niveauer
  href: "#2-niveauer"
- text: 3 niveauer
  href: "#3-niveauer"
- text: Aktivt link med anchor links
  href: "#aktivt-link-med-anchor-links"
- text: Ekstra information
  href: "#ekstra-information"
---

{% include code/preview-box.html component="sidenav-normal-level1" title="Eksempel på venstremenu med ét niveau" link=true code="/kode/komponenter/venstremenu/" %}

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

{:#aktivt-link-med-anchor-links}
### Aktivt link med anchor links

{% include code/preview-box.html component="sidenav-anchor" title="Eksempel på venstremenu med anchor links" %}

{:#ekstra-information}
### Ekstra information

{% include code/preview-box.html component="sidenav-information-level1" title="Eksempel på venstremenu med hjælpetekst på ét niveau" %}