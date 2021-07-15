---
permalink: /komponenter/sidenav/
layout: styleguide
type: component
title: Sidenavigation
category: Komponenter_category
subcategory: Komponenter
description: "Sidenavigation giver brugerne overblik over struktur og indhold, så de kan finde vej til det indhold, de leder efter."
tags:
lead: "Sidenavigation giver brugerne overblik over struktur og indhold, så de kan finde vej til det indhold, de leder efter."
anchor: true
subnav:
- text: 2 niveauer
  href: '#2-niveauer'
- text: 3 niveauer
  href: '#3-niveauer'
- text: Aktivt link med anchor links
  href: '#aktivt-link-med-anchor-links'
- text: Ekstra information
  href: '#ekstra-information'
component: sidenav-normal-level1
componentTitle: Eksempel på sidenavigation med ét niveau
componentCode: "/kode/komponenter/sidenav/"
---

{:.h3 #retningslinjer}
## Anvendes til

Sidenavigation anvendes til at afspejle et navigations-hierarki i op til tre niveauer.

Sidenavigation anvendes til den sekundære navigation/undermenu på en side i en større løsning.

{:.h3}
## Anvendes ikke til

Sidenavigation bør ikke anvendes på mindre løsninger (mindre end 5 sider).

Hvis din løsning allerede har topmenu og evt. tilknyttet dropdown menu, bør du overveje at forenkle din navigation før du vælger en sidenavigation.

{:.h3}
## Vejledning

Marker det aktive punkt (”der hvor brugeren er”) i sidenavigationen.

Brug korte og præcise ord og begreber. De må eksempelvis gerne være kortere varianter af selve sidernes indholdstitler.

Undgå at lave for mange punkter.

Undgå at lave menuen for dyb – forsøg at undgå mere end 1-2 niveauer.

{% include dos-donts-box.html component="sidenav-dos-donts" title="Sidenavigation do's and don'ts" %}

{:.h4}
### Referencer

<a href="http://www.alistapart.com/articles/whereami" class="icon-link">Derek Powazek: Where Am I? (2006)<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>


{:.h3}
## Eksempler på brug i løsning

{:.nobullet-list}
- <a href="/pages/eksempler/strategiske-virksomhedsalliancer/virksomhedsalliancer-1/" target="_blank" title="Eksempelløsning Strategiske virksomhedsalliancer åbnes i nyt vindue">Strategiske virksomhedsalliancer</a>

{% include child-components.html parent='Sidenav' %}
