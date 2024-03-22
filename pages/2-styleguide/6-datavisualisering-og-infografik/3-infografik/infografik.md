---
permalink: "/design/datavisualisering-infografik/infografik/"
parentlink: "/design/datavisualisering-infografik/"
layout: styleguide
category: Styleguide_category
subcategory: Styleguide
title: Infografik
lead: Infografik kan indeholde datavisualiseringer, men kan også være en illustration af et fysisk objekt eller en proces.
description: Infografik kan indeholde datavisualiseringer, men kan også være en illustration af et fysisk objekt eller en proces. 
headings: Infografik
anchorlinks: true
tags:
- grafik
- billeder
- infografik
---

{% assign headings = site.data.headings[page.headings] %}

[---- Farver -------------------------------------]: # 
<h2 id="{{ headings[0].id }}">{{ headings[0].h2 }}</h2>

Ved infografik vil en sekventiel farvepalette, palette der går fra lys til mørk i samme farve, godt kunne vælges. Farver kan bruges til at understøtte budskabet, men betydning bør ikke kommunikeres af farve alene. 

Vær opmærksomhed på at farver der grænser op til hinanden normalt skal overholde WCAG 2.1 ift farvekontrast. Dette gælder dog ikke elementer der udelukkende fungerer som dekoration.

[---- Alternativ til grafik -------------------------------------]: # 
<h2 id="{{ headings[1].id }}">{{ headings[1].h2 }}</h2>

Giv brugeren en oversigt over data fra diagrammet eller en tekstbeskrivelse af diagrammet. Beskrivelsen kan eventuelt fungere som opsummering og kan hjælpe brugeren med at drage en konklusion.  

Se flere generelle anbefalinger for {% include links/internal-link.html linktext="tilgængelighed i forbindelse med grafik og visualisering" %}.

[---- Responsiv infografik -------------------------------------]: # 
<h2 id="{{ headings[2].id }}">{{ headings[2].h2 }}</h2>

At nedskalere infografik til tablet og mobil er ikke altid optimalt. Der kan med fordel arbejdes på at lave en responsiv infografik, der tilpasser sig de forskellige skærmstørrelser.

### Eksempel på responsiv infografik

{% include links/example-link.html linktext="Se eksemplet på en ny side" %}

<h4 class="mt-7">Desktop fuld bredde</h4>

{% include code/components/when-bike-desktop.html %}

#### Tablet

{% include code/components/when-bike-tablet.html %}

#### Mobil

{% include code/components/when-bike-phone.html %}