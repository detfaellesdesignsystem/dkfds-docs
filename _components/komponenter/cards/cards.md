---
permalink: /komponenter/cards/
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Cards
component: "cards-full-width"
componentTitle: "Eksempel på card"
componentLink: true
componentCode: "/kode/komponenter/cards/"
anchor: true
subnav:
- text: Card med tredjedel bredde
  href: '#card-med-tredjedel-bredde'
- text: Card med halv bredde
  href: '#card-med-halv-bredde'
- text: Samme højde
  href: '#samme-hoejde'
description: "Brug cards til at gruppere funktionalitet, der adskiller sig fra sidens øvrige indhold"
tags:
---

{:#retningslinjer}
## Retningslinjer

### Anvendes til

Du kan bruge cards til at gruppere funktionalitet, der adskiller sig fra sidens øvrige indhold. Det kan fx være en afledt, men ikke direkte koblet ekstra funktion ift. sidens sammenhæng.

### Anvendes ikke til

Brug ikke cards til det primære indhold på en løsning, men derimod til indhold, der kan stå og forstås alene og fortsat være del af den samlede løsning.

Brug ikke cards udelukkende af visuelle hensyn, som placeholders for ornamental grafik eller indhold uden interaktion.

Cards er ikke en statusbesked.

### Vejledning

Cards skal tilbyde en enkel og fokuseret funktion. 

Cards er velegnede til interaktion med brugeren, men brug dem kun, når der tilbydes en ekstra funktionalitet af grupperet indhold.

Cards er velegnede til responsive løsninger.

Du kan godt indsætte flere cards på en side, men sørg for at de fremtræder roligt i sidens layout og ikke bryder brugerens naturlige aflæsning af siden.

Undgå lange tekster i cards.

Skriv kort og præcist i hvert card.

{% include dos-donts-box.html component="cards-dos-donts" title="Cards do's and don'ts" %}

{:#eksempelloesninger}
#### Se komponenten i eksempelløsninger

{:.nobullet-list}
- <a href="/pages/eksempler/sagsoversigt/find-sag/?r={{page.permalink}}%23eksempelloesninger" title="Vis eksempel 'Sagsoversigt: Find sag'">Sagsoversigt: Find sag</a>
- <a href="/pages/eksempler/dashboard/dashboard-1/?r={{page.permalink}}%23eksempelloesninger" title="Vis eksempel 'Dashboard'">Dashboard</a>

#### Referencer

{:.nobullet-list}
- <a href="https://www.nngroup.com/articles/cards-component/" class="icon-link">Page Laubheimer: Cards: UI-Component Definition (2016)<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>
- <a href="https://www.researchgate.net/publication/229035313_A_Comprehension-based_Model_of_Web_Navigation_and_Its_Application_to_Web_Usability_Analysis" class="icon-link">Muneo Kitajima, Marilyn H Blackmon & Peter G Polson: A Comprehension-based Model of Web Navigation and Its Application to Web Usability Analysis (2000)<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>

## Varianter

{:#card-med-tredjedel-bredde}
### Card med tredjedel bredde

{% include code/preview-box.html component="cards-third-width" title="Eksempel på cards i tre kolonner" %}

{:#card-med-halv-bredde}
### Card med halv bredde

{% include code/preview-box.html component="cards-half-width" title="Eksempel på cards i to kolonner" %}

{:#samme-hoejde}
### Samme højde

{% include code/preview-box.html component="cards-same-height" title="Eksempel på cards med samme højde" %}
