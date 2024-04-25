---
permalink: "/komponenter/paginering/"
redirect_from:
- "/kode/komponenter/paginering/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Paginering
lead: Paginering bruges til at lade brugeren navigere mellem indhold, der er opdelt på flere sider. Brugeren navigerer ved at gå fra side til side, eller til første eller sidste side på listen.
description: Lad brugeren navigere mellem indhold der er opdelt på flere sider.
tags:
- paginering
- pagination
- sidevælger
tabs: "Retningslinjer, kode"
---

{% include tabs.html guidelines=true code=true %}

{% include code/preview-box.html component="pagination" title="Eksempel på brødkrumme" classes="intro-example" %}

{% include anchorlinks.html guidelines="Paginering" code="Paginering_Kode" classes="hide-code" %}

<!--split-->

## Sådan bruges komponenten {#{% include create-id.html heading="Sådan bruges komponenten" %}}

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

## Varianter {#{% include create-id.html heading="Varianter" %}}

### 7 eller færre sider

{% include code/preview-box.html component="pagination-short" title="Eksempel på paginering med 7 sider" link=true %}

### 8 eller flere sider

{% include code/preview-box.html component="pagination-long" title="Eksempel på paginering med 12 sider" link=true %}

## Referencer {#{% include create-id.html heading="Referencer" %}}

{% include links/external-link.html linktext="USWDS om paginering" %}

<!--split-->

## Installation {#{% include create-id.html heading="Installation" append="-kode" %}}

### HTML Struktur

{% include code/syntax.html component="pagination" copybutton=true %}

Brug `class="hidden"` på Forrige-, Næste-, Første- og Sidste-knapperne, når de ikke skal vises.

### Tilgængelighed

Lad knappen med tallet til sidste side indeholde en aria-label, der oplyser dette. Husk at lade den aktuelle side være markeret med `aria-current="page"`.

Sørg for at alle Forrige-, Næste-, Første- og Sidste-knapper på mindre skærme har en skjult, tilknyttet tekst, så ikonerne kan læses højt af en skærmlæser.

### JavaScript

Bemærk at DKFDS på nuværende tidspunkt kun leverer HTML og CSS til denne komponent. Funktionaliteten skal man derfor selv håndtere.
