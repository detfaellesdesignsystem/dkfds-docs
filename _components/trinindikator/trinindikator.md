---
permalink: "/komponenter/trinindikator/"
redirect_from:
- "/komponenter/trinindikatorer/"
- "/kode/komponenter/trinindikatorer/"
- "/kode/komponenter/trinindikator/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Trinindikator
lead: "Trinindikator fører brugeren igennem en kendt sekvens af trin i en løsning."
description: "Trinindikator anvendes til struktureret at føre brugeren igennem en kendt sekvens af spørgsmål."
tags:
tabs: "Retningslinjer, kode"
---

{% include tabs.html guidelines=true code=true %}

{% include code/preview-box.html component="tringuide-overflowmenu" title="Eksempel på trinindikator i overflow menu" classes="intro-example" %}

{% include anchorlinks.html guidelines="Trinindikator" code="Trinindikator_Kode" appendCode="-kode" %}

<!--split-->

## Sådan bruges komponenten {#{% include create-id.html heading="Sådan bruges komponenten" %}}

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

## Varianter {#{% include create-id.html heading="Varianter" %}}

### Alle trin synlige {#{% include create-id.html heading="Alle trin synlige" %}}

{% include code/preview-box.html component="tringuide-clickable" title="Eksempel på synlig trinindikator" code="/komponenter/trinindikator/#alle-trin-synlige-kode" %}

### Responsiv {#{% include create-id.html heading="Responsiv" %}}

Denne komponent er responsiv, og vil derfor ændre udseende, når man ændrer skærmstørrelse.

{% include code/preview-box.html component="tringuide-responsive-overflowmenu" title="Eksempel på responsiv trinindikator" code="/komponenter/trinindikator/#responsiv-kode" %}

### Låst {#{% include create-id.html heading="Låst" %}}

{% include code/preview-box.html component="tringuide-locked" title="Eksempel på trinindikator med låste trin" code="/komponenter/trinindikator/#laast-kode" %}

### Ekstra information {#{% include create-id.html heading="Ekstra information" %}}

{% include code/preview-box.html component="tringuide-information" title="Eksempel på trinindikator med information" code="/komponenter/trinindikator/#ekstra-information-kode" %}

### Trinindikator med fejl {#{% include create-id.html heading="Trinindikator med fejl" %}}

Ved brug af trinindikator kan der i nogle tilfælde være behov for at indikere overfor brugeren, at et eller flere trin mangler information og/eller har fejl, efter brugeren er gået videre til næste trin.

{% include code/preview-box.html component="tringuide-error-responsive" title="Eksempel på trinindikator med fejl" code="/komponenter/trinindikator/#trinindikator-med-fejl-kode" %}

#### Anvendes til

Trinindikator med fejl anvendes til at gøre brugeren opmærksom på eventuelle fejl i de trin i formularen, der i øjeblikket ikke er valgt og hvor der efter validering er registreret en fejl, men som ikke blokerer brugeren i at gå videre til næste trin.

#### Vejledning

Fejl vises, hvis der er fejl i det indtastede data eller obligatoriske felter ikke er udfyldt. 

Fejl angives med et fejl-ikon ud for trinnet med fejl samt med en baggrundsfarve. Ikonet kan fjernes igen ved indtastning af korrekt data i det pågældende trin.

Vis kun fejl i trinindikatoren, når det er muligt for brugeren at fortsætte til næste trin på trods af fejl.

#### Opsummeringsside 

Eventuelle fejl vises på opsummeringssiden i form af {% include links/component-guideline-link.html linktext="fejlopsummering" %} med henvisning til de specifikke trin som link i fejlopsummeringen. 

{% include links/internal-link.html linktext="Se et eksempel på opsummeringssiden med fejl i trinindikatoren." %}

## Se komponenten i eksempelløsninger {#{% include create-id.html heading="Se komponenten i eksempelløsninger" %}}

{:.nobullet-list}
- {% include links/demo-link.html linktext="Trinformular til registrering: Vælg personer" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Trinformular til ansøgning: Oplysninger om ansøger" returnID="eksempelloesninger" %}

## Referencer {#{% include create-id.html heading="Referencer" %}}

{:.nobullet-list}
- Caroline Jarrett & Gerry Gaffney: Forms that Work: Designing Web Forms for Usability (2009)
- Adam Silver: Form Design Patterns (2018)
- Jessica Enders: Designing UX: Forms (2016)
- {% include links/external-link.html linktext="Caroline Jarrett: Design patterns in government (2016)" %}

<!--split-->

## Installation {#{% include create-id.html heading="Installation" append="-kode" %}}

### HTML Struktur

{% include code/syntax.html component="tringuide-overflowmenu" copybutton=true %}

Hvis man gør brug af en trinindikator i forbindelse med en {% include links/component-guideline-link.html linktext="overflow menu" %}, så se dokumentationen for {% include links/component-code-link.html linktext="implementering for overflow menu" %}.

#### Aktivt og overstået trin i trinindikator

- Det aktive menupunkt skal have klassen `active` og `current`.
- For at indikere et overstået trin, kan der indsættes et ikon med klassen `sidenav-icon`. Dette ikon er sat til højre i trinet.

Nedenstående varianter implementeres i et grid på samme måde som {% include links/component-guideline-link.html linktext="venstremenu" %}, således at komponenten vises i en kolonne til venstre for indholdet.

## Alle trin synlige {#{% include create-id.html heading="Alle trin synlige" append="-kode" %}}

{% include code/syntax.html component="tringuide-clickable" link=true copybutton=true guidelines="/komponenter/trinindikator/#alle-trin-synlige" %}

## Responsiv {#{% include create-id.html heading="Responsiv" append="-kode" %}}

{% include code/syntax.html component="tringuide-responsive-overflowmenu" link=true copybutton=true guidelines="/komponenter/trinindikator/#responsiv" %}

## Låst {#{% include create-id.html heading="Låst" append="-kode" %}}

{% include code/syntax.html component="tringuide-locked" link=true copybutton=true guidelines="/komponenter/trinindikator/#laast" %}

## Ekstra information {#{% include create-id.html heading="Ekstra information" append="-kode" %}}

{% include code/syntax.html component="tringuide-information" link=true copybutton=true guidelines="/komponenter/trinindikator/#ekstra-information" %}

## Trinindikator med fejl {#{% include create-id.html heading="Trinindikator med fejl" append="-kode" %}}

Tilføj klassen `sidenav-error` til de liste-elementer, der er fejl i og anvend ikonet `highlight-off` med en passende `aria-label`.

{% include code/syntax.html component="tringuide-error-responsive" link=true copybutton=true guidelines="/komponenter/trinindikator/#trinindikator-med-fejl" %}
