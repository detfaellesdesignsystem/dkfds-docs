---
permalink: "/komponenter/paginering/guidelines/"
redirect_from:
- "/komponenter/paginering/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Paginering
lead: Paginering bruges til at lade brugeren navigere mellem indhold, der er opdelt på flere sider. Brugeren navigerer ved at gå fra side til side, eller til første eller sidste side på listen.
component: "pagination"
componentTitle: "Eksempel på paginering"
componentLink: true
headings: Paginering
anchorlinks: true
description: Lad brugeren navigere mellem indhold der er opdelt på flere sider.
tags:
- paginering
- pagination
- sidevælger
---

{% assign headings = site.data.headings[page.headings] %}

[---- Sådan bruges komponenten -------------------------------------]: # 
<h2 id="{{ headings[0].id }}">{{ headings[0].h2 }}</h2>

### Anvendes til

Paginering kan anvendes ved søgeresultater og lignende lister, hvor brugerens overblik lettes
ved at opdele indholdet over flere sider.

### Anvendes ikke til

Anvendes ikke til at føre brugeren igennem flere dele af en formular. Anvend da i stedet {% include links/component-guideline-link.html linktext="trinindikator" %}.

### Vejledning

Vis altid både den første og den sidste side i det paginerede indhold, så brugeren kan få et overblik over
den samlede mængde.

#### 7 eller færre sider

Vis alle sider hvis der er 7 eller færre.

#### 8 eller flere sider
Vis "..." hvis der er 8 eller flere sider. "..." indsættes før den sidste side, og/eller efter første side hvis
nødvendigt.

#### Markering
Vis altid hvilken side brugeren befinder sig på.

Vis første, forrige, næste og sidste side. Brugeren skal kunne navigere til disse sider uanset hvor de befinder sig.

#### Forrige og næste link

Benyt Forrige og Næste links hhv. før første side og efter sidste side.

Hvis brugeren står på første side vises "Forrige" ikke. Hvis brugeren står på sidste side vises "Næste" ikke.

#### Responsiv
Hold paginering på en enkelt linje.

På små skærme benyttes Forrige-, Næste-, Første- og Sidste-links. Den aktuelle side og det samlede sideantal vises i midten.

[---- Varianter -------------------------------------]: # 
<h2 id="{{ headings[1].id }}">{{ headings[1].h2 }}</h2>

### 7 eller færre sider

{% include code/preview-box.html component="pagination-short" title="Eksempel på paginering med 7 sider" link=true %}

### 8 eller flere sider

{% include code/preview-box.html component="pagination-long" title="Eksempel på paginering med 12 sider" link=true %}

[---- Referencer -------------------------------------]: # 
<h2 id="{{ headings[2].id }}">{{ headings[2].h2 }}</h2>

{% include links/external-link.html linktext="USWDS om paginering" %}