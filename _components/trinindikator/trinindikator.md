---
permalink: "/komponenter/trinindikator/guidelines/"
redirect_from:
- "/komponenter/trinindikatorer/"
- "/komponenter/trinindikator/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Trinindikator
lead: "Trinindikator fører brugeren igennem en kendt sekvens af trin i en løsning."
component: "tringuide-overflowmenu"
componentTitle: "Eksempel på trinindikator i overflow menu"
componentLink: true
headings: Trinindikator
anchorlinks: true
description: "Trinindikator anvendes til struktureret at føre brugeren igennem en kendt sekvens af spørgsmål."
tags:
---

{% assign headings = site.data.headings[page.headings] %}

[---- Sådan bruges komponenten -------------------------------------]: # 
<h2 id="{{ headings[0].id }}">{{ headings[0].h2 }}</h2>

### Anvendes til

Trinindikator anvendes til struktureret at føre brugeren igennem en kendt sekvens af spørgsmål.

### Anvendes ikke til

Trinindikator skal ikke anvendes som primær eller sekundær navigationselement.

### Vejledning

Forsøg med ændret opsætning af dit indhold, type og antallet af spørgsmål før du vælger en trinindikator til din løsning.

Vælg den trinindikator variant, der passer til dine brugeres behov.

Undgå at lave en horisontal trinindikator.

Anvend trin der virker naturlige og logiske for brugerne.

Gør det synligt hvilket trin brugeren er kommet til.

Det sidste trin skal være "Opsummering" eller "Tjek dine svar".

Tilstræb så få trin som muligt.

Når indberetningen er foretaget skal brugeren have en kvittering, denne skal ikke vises i trinindikatoren.

{% include dos-donts-box.html component="tringuide-dos-donts" title="Trinindikator do's and don'ts" %}

[---- Varianter -------------------------------------]: # 
<h2 id="{{ headings[1].id }}">{{ headings[1].h2 }}</h2>

{:#klikbar}
### Alle trin synlige

{% include code/preview-box.html component="tringuide-clickable" title="Eksempel på synlig trinindikator" code="/komponenter/trinindikator/implementering/#klikbar" %}

{:#responsiv}
### Responsiv

Denne komponent er responsiv, og vil derfor ændre udseende, når man ændrer skærmstørrelse.

{% include code/preview-box.html component="tringuide-responsive-overflowmenu" title="Eksempel på responsiv trinindikator" code="/komponenter/trinindikator/implementering/#responsiv" %}

{:#laast}
### Låst

{% include code/preview-box.html component="tringuide-locked" title="Eksempel på trinindikator med låste trin" code="/komponenter/trinindikator/implementering/#laast" %}

{:#ekstra-information}
### Ekstra information

{% include code/preview-box.html component="tringuide-information" title="Eksempel på trinindikator med information" code="/komponenter/trinindikator/implementering/#ekstra-information" %}

{:#med-fejl}
### Trinindikator med fejl

Ved brug af trinindikator kan der i nogle tilfælde være behov for at indikere overfor brugeren, at et eller flere trin mangler information og/eller har fejl, efter brugeren er gået videre til næste trin.

{% include code/preview-box.html component="tringuide-error-responsive" title="Eksempel på trinindikator med fejl" code="/komponenter/trinindikator/implementering/#med-fejl" %}

#### Anvendes til

Trinindikator med fejl anvendes til at gøre brugeren opmærksom på eventuelle fejl i de trin i formularen, der i øjeblikket ikke er valgt og hvor der efter validering er registreret en fejl, men som ikke blokerer brugeren i at gå videre til næste trin.

#### Vejledning

Fejl vises, hvis der er fejl i det indtastede data eller obligatoriske felter ikke er udfyldt. 

Fejl angives med et fejl-ikon ud for trinnet med fejl samt med en baggrundsfarve. Ikonet kan fjernes igen ved indtastning af korrekt data i det pågældende trin.

Vis kun fejl i trinindikatoren, når det er muligt for brugeren at fortsætte til næste trin på trods af fejl.

#### Opsummeringsside 

Eventuelle fejl vises på opsummeringssiden i form af {% include links/component-guideline-link.html linktext="fejlopsummering" %} med henvisning til de specifikke trin som link i fejlopsummeringen. 

{% include links/internal-link.html linktext="Se et eksempel på opsummeringssiden med fejl i trinindikatoren." %}

[---- Se komponenten i eksempelløsninger -------------------------------------]: # 
<h2 id="{{ headings[2].id }}">{{ headings[2].h2 }}</h2>

{:.nobullet-list}
- {% include links/demo-link.html linktext="Trinformular til registrering: Vælg personer" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Trinformular til ansøgning: Oplysninger om ansøger" returnID="eksempelloesninger" %}

[---- Referencer -------------------------------------]: # 
<h2 id="{{ headings[3].id }}">{{ headings[3].h2 }}</h2>

{:.nobullet-list}
- Caroline Jarrett & Gerry Gaffney: Forms that Work: Designing Web Forms for Usability (2009)
- Adam Silver: Form Design Patterns (2018)
- Jessica Enders: Designing UX: Forms (2016)
- {% include links/external-link.html linktext="Caroline Jarrett: Design patterns in government (2016)" %}