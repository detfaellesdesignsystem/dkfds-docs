---
permalink: "/komponenter/cards/guidelines/"
redirect_from:
- "/komponenter/cards/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Cards
lead: Cards anvendes som en visuel afgrænsning af indhold eller interaktionselementer, der omhandler samme emne.
component: "cards-full-width"
componentTitle: "Eksempel på card"
componentLink: true
headings: Cards
anchorlinks: true
description: "Brug cards til at gruppere funktionalitet, der adskiller sig fra sidens øvrige indhold"
tags:
---

{% assign headings = site.data.headings[page.headings] %}

[---- Sådan bruges komponenten -------------------------------------]: # 
<h2 id="{{ headings[0].id }}">{{ headings[0].h2 }}</h2>

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

[---- Varianter -------------------------------------]: # 
<h2 id="{{ headings[1].id }}">{{ headings[1].h2 }}</h2>

{:#card-med-tredjedel-bredde}
### Card med tredjedel bredde

{% include code/preview-box.html component="cards-third-width" title="Eksempel på cards i tre kolonner" %}

{:#card-med-halv-bredde}
### Card med halv bredde

{% include code/preview-box.html component="cards-half-width" title="Eksempel på cards i to kolonner" %}

{:#samme-hoejde}
### Cards med samme højde

{% include code/preview-box.html component="cards-same-height" title="Eksempel på cards med samme højde" %}

[---- Se komponenten i eksempelløsninger -------------------------------------]: # 
<h2 id="{{ headings[2].id }}">{{ headings[2].h2 }}</h2>

{:.nobullet-list}
- {% include links/demo-link.html linktext="Sagsoversigt: Find sag" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Dashboard" returnID="eksempelloesninger" %}

[---- Referencer -------------------------------------]: # 
<h2 id="{{ headings[3].id }}">{{ headings[3].h2 }}</h2>

{:.nobullet-list}
- {% include links/external-link.html linktext="Page Laubheimer: Cards: UI-Component Definition (2016)" %}
- {% include links/external-link.html linktext="Muneo Kitajima, Marilyn H Blackmon & Peter G Polson: A Comprehension-based Model of Web Navigation and Its Application to Web Usability Analysis (2000)" %}
