---
permalink: "/komponenter/search/guidelines/"
redirect_from:
- "/komponenter/search/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Søgefelt
lead: Søgefeltet lader brugeren søge efter bestemt indhold på siden eller i løsningen.
component: "search"
componentTitle: "Eksempel på søgefelt"
componentLink: true
anchor: true
subnav:
- text: Sådan bruges komponenten
  href: "#retningslinjer"
- text: Se komponenten i eksempelløsninger
  href: "#eksempelloesninger"
- text: Referencer
  href: "#ref"
description: "Et søgefelt udstiller brugeren muligheden for at søge efter bestemt indhold på siden eller i løsningen."
tags:
---

{:#retningslinjer}
## Sådan bruges komponenten

### Anvendes til

Søgefeltet er en samlet komponent (søgefelt og -knap), der giver brugeren mulighed for at søge efter specifikt indhold, hvis de kender søgeordene eller ikke kan finde indholdet gennem menuer eller anden navigation.

Søgefeltet giver et alternativ til brugere, der af den ene eller anden årsag ikke kan anvende løsningens navigation.

### Anvendes ikke til

På meget små løsninger eller løsninger, der kun består af en enkelt side, bør det ikke være nødvendigt med et søgefelt.

### Vejledning

Det er vigtigt for brugerne, at kunne se de indtastede søgeord. En god tommelfingerregel er at søgefeltet er 27 karakterer (27ch) langt som minimum.

Sørg for at søgefeltet ligner et søgefelt.

Hvis der anvendes et lup-ikon, skal ”Søg” fremgå i koden, så skærmlæsere kan se funktionen.

Søgefeltet vises i sin helhed på løsningens hjemmeside og ikke kun som et link.

Vis fortsat søgefeltet – også på søgeresultatet, der viser søgeordene.

Brug kun avanceret søgning som valgmulighed. Den primære søgning skal være en standardsøgning for at undgå forvirring omkring dens anvendelse.

Søgeknappen skal være en submit-knap.

{% include dos-donts-box.html component="search-dos-donts" title="Søgefelt do's and don'ts" %}

{:#eksempelloesninger}
## Se komponenten i eksempelløsninger

{% include links/demo-link.html linktext="Sagsoversigt: Find sag" returnID="eksempelloesninger" %}

{:#ref}
## Referencer

{:.nobullet-list}
- {% include links/external-link.html linktext="Jakob Nielsen: Top 10 Guidelines for Homepage Usability (2002)" %}
- {% include links/external-link.html linktext="Jakob Nielsen: Search: Visible and Simple (2001)" %}
- Adam Silver: Form Design Patterns (2018)
- {% include links/external-link.html linktext="Tammy Guy: Usability Tip: Don’t Make Me Search for Search (2014)" %}
- {% include links/external-link.html linktext="The ideal search box is 27 characters wide" %}
- {% include links/external-link.html linktext="Design a perfect search box" %}
- {% include links/external-link.html linktext="Best practises for search results" %}
- {% include links/external-link.html linktext="The Magnifying-Glass Icon in Search Design: Pros and Cons" %}
