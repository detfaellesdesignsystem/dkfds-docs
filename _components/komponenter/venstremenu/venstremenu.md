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
component: sidenav-normal-level1
componentTitle: Eksempel på venstremenu med ét niveau
componentCode: "/kode/komponenter/venstremenu/"

---
{:.h3 #retningslinjer}

## Anvendes til

Venstremenu anvendes til at afspejle et navigations-hierarki i op til tre niveauer.

Venstremenu anvendes til den sekundære navigation/undermenu på en side i en større løsning.

{:.h3}

## Anvendes ikke til

Venstremenu bør ikke anvendes på mindre løsninger (mindre end 5 sider).

Hvis din løsning allerede har topmenu og evt. tilknyttet dropdown, bør du overveje at forenkle din navigation før du vælger en venstremenu.

{:.h3}

## Vejledning

Markér det aktive punkt (”der hvor brugeren er”) i venstremenuen.

Brug korte og præcise ord og begreber. De må eksempelvis gerne være kortere varianter af selve sidernes indholdstitler.

Undgå at lave for mange punkter.

Undgå at lave menuen for dyb – forsøg at undgå mere end 1-2 niveauer.

{% include dos-donts-box.html component="sidenav-dos-donts" title="Venstremenu do's and don'ts" %}

{:.h4}

### Referencer

<a href="http://www.alistapart.com/articles/whereami" class="icon-link">Derek Powazek: Where Am I? (2006)<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>

{% include child-components.html parent='Sidenav' %}