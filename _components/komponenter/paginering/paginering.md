---
permalink: /komponenter/paginering/
title: Paginering
layout: styleguide
type: component
category: Komponenter_category
subcategory: Komponenter
lead: Paginering bruges til at lade brugeren navigere mellem indhold, der er opdelt på flere sider. Brugeren navigerer ved at gå fra side til side, eller til første eller sidste side på listen.
description: Lad brugeren navigere mellem indhold der er opdelt på flere sider.
tags:
- paginering
- pagination
- sidevælger
subnav:
- text: Eksempler på paginering
  href: "#eksempler"
---
{% include code/preview-box.html component="pagination" title="Eksempel på paginering" link=true code="/kode/komponenter/paginering/" %}

{:.h3 #retningslinjer}
## Anvendes til
Paginering kan anvendes ved søgeresultater og lignende lister, hvor brugerens overblik lettes
ved at opdele indholdet over flere sider.

{:.h3}
## Anvendes ikke til
Anvendes ikke til at føre brugeren igennem flere dele af en formular. Anvend da i stedet <a href="/komponenter/trinindikator/">trinindikator</a>.

{:.h3}
## Vejledning
Vis altid både den første og den sidste side i det paginerede indhold, så brugeren kan få et overblik over
den samlede mængde.

{:.h4}
### 7 eller færre sider
Vis alle sider hvis der er 7 eller færre.

{:.h4}
### 8 eller flere sider
Vis "..." hvis der er 8 eller flere sider. "..." indsættes før den sidste side, og/eller efter første side hvis
nødvendigt.

{:.h4}
### Markering
Vis altid hvilken side brugeren befinder sig på.

Vis første, forrige, næste og sidste side. Brugeren skal kunne navigere til disse sider uanset hvor de befinder sig.

{:.h4}
### Forrige og næste link
Benyt Forrige og Næste links hhv. før første side og efter sidste side.

Hvis brugeren står på første side vises "Forrige" ikke. Hvis brugeren står på sidste side vises "Næste" ikke.

{:.h4}
### Responsiv
Hold paginering på en enkelt linje.

På små skærme benyttes Forrige-, Næste-, Første- og Sidste-links. Den aktuelle side og det samlede sideantal vises i midten.

{:.h4}
### Referencer

{:.nobullet-list}
- <a href="https://designsystem.digital.gov/components/pagination/" class="icon-link">USWDS om paginering<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>

{:#eksempler}
## Eksempler på paginering

{:.h4}
### 7 eller færre sider

{% include code/preview-box.html component="pagination-short" title="Eksempel på paginering med 7 sider" link="true" %}

{:.h4}
### 8 eller flere sider

{% include code/preview-box.html component="pagination-long" title="Eksempel på paginering med 12 sider" link="true" %}