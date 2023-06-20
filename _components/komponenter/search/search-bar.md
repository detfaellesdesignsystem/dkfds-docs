---
permalink: /komponenter/search/
layout: styleguide
type: component
title: Søgefelt
category: Komponenter_category
subcategory: Komponenter
description: "Et søgefelt udstiller brugeren muligheden for at søge efter bestemt indhold på siden eller i løsningen."
tags:
lead: Et søgefelt udstiller brugerne muligheden at søge efter bestemt indhold på siden eller i løsningen.
---

{% include code/preview-box.html component="search" title="Eksempel på søgefelt" link=true code="/kode/komponenter/search/" %}

{:#retningslinjer}
## Retningslinjer

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
#### Se komponenten i eksempelløsninger

{:.nobullet-list}
- <a href="/pages/eksempler/sagsoversigt/find-sag/?r={{page.permalink}}%23eksempelloesninger" title="Vis eksempel 'Sagsoversigt: Find sag'">Sagsoversigt: Find sag</a>

#### Referencer

{:.nobullet-list}
- <a href="https://www.nngroup.com/articles/top-ten-guidelines-for-homepage-usability/" class="icon-link">Jakob Nielsen: Top 10 Guidelines for Homepage Usability (2002)<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>
- <a href="https://www.nngroup.com/articles/search-visible-and-simple/" class="icon-link">Jakob Nielsen: Search: Visible and Simple (2001)<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>
- Adam Silver: Form Design Patterns (2018)
- <a href="https://uxmag.com/articles/usability-tip-dont-make-me-search-for-search" class="icon-link">Tammy Guy: Usability Tip: Don’t Make Me Search for Search (2014)<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>
- <a href="https://www.smashingmagazine.com/2009/09/10-useful-usability-findings-and-guidelines/#6-the-ideal-search-box-is-27-characters-wide" class="icon-link">The ideal search box is 27 characters wide<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>
- <a href="https://uxplanet.org/design-a-perfect-search-box-b6baaf9599c" class="icon-link">Design a perfect search box<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>
- <a href="https://uxplanet.org/best-practices-for-search-results-1bbed9d7a311" class="icon-link">Best practises for search results<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>
- <a href="https://www.nngroup.com/articles/magnifying-glass-icon/" class="icon-link">The Magnifying-Glass Icon in Search Design: Pros and Cons<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>
