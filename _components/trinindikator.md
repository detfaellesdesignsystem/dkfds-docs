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

{% include code/preview-box.html component="step-indicator" title="Eksempel på trinindikator" classes="intro-example" %}

{% include anchorlinks.html guidelines="Trinindikator" code="Trinindikator_Kode" %}

<!--split-->

## Sådan bruges komponenten {#{% include create-id.html heading="Sådan bruges komponenten" %}}

### Anvendes til

Trinindikator anvendes til struktureret at føre brugeren igennem en kendt sekvens af spørgsmål.

### Anvendes ikke til

Trinindikator skal ikke anvendes som primær eller sekundær navigationselement.

### Vejledning

I denne sektion finder du anbefalinger, der hjælper dig med at vælge og udforme en trinindikator. Trinindikatoren skal tydeligt afspejle brugerens aktuelle position og bidrage til en naturlig og overskuelig brugeroplevelse. Følg nedenstående vejledninger for at sikre, at dit indhold, struktur og antal trin passer til din løsning.

- Vælg den type trinindikator, der passer bedst til dine brugeres behov.
Vær opmærksom på, at trinindikatorer tit er unødvendige, bl.a. fordi de kan blive overset og tager meget plads på skærmen (GOV.UK). Overvej derfor, om din løsning fungerer bedre uden en decideret trinindikator, se fx eksempelløsningen {% include links/demo-link.html linktext="Formular til kontaktoplysninger" %}, eller med en <a href="#simpel-trinindikator">simpel trinindikator</a>.
- Opdel løsningens trin, så de virker naturlige og logiske for brugerne.
- Det sidste trin skal være “Opsummering” eller “Tjek dine svar”.
- Når indberetningen er foretaget skal brugeren have en kvittering, denne skal ikke vises i trinindikatoren.
- Ved mindre skærme (768px eller lavere) ændres trinindikatoren til et panel (bottom sheet), der glider op fra bunden af skærmen, når brugeren trykker på en trinindikator-knap øverst på deres skærm. Panelet viser et overblik over trinene.

{% include dos-donts-box.html component="tringuide-dos-donts" %}

## Varianter {#{% include create-id.html heading="Varianter" %}}

### Alle trin klikbare {#{% include create-id.html heading="Alle trin klikbare" %}}

Du kan benytte denne variant af trinindikatoren, hvor alle trin er klikbare for brugeren. Som udgangspunkt er kun gennemførte trin klikbare, men denne variant giver brugerne mulighed for frit at navigere mellem alle trin.

{% include code/preview-box.html component="step-indicator-clickable" title="Eksempel på trinindikator hvor alle trin er klikbare" code="/komponenter/trinindikator/#alle-trin-klikbare-kode" %}

### Ekstra information {#{% include create-id.html heading="Ekstra information" %}}

{% include code/preview-box.html component="step-indicator-helptext" title="Eksempel på trinindikator med information" code="/komponenter/trinindikator/#ekstra-information-kode" %}

### Trinindikator med fejl {#{% include create-id.html heading="Trinindikator med fejl" %}}

Ved brug af trinindikator kan der i nogle tilfælde være behov for at indikere overfor brugeren, at et eller flere trin mangler information og/eller har fejl, efter brugeren er gået videre til næste trin.

{% include code/preview-box.html component="step-indicator-error" title="Eksempel på trinindikator med fejl" code="/komponenter/trinindikator/#trinindikator-med-fejl-kode" %}

#### Anvendes til

Trinindikator med fejl anvendes til at gøre brugeren opmærksom på eventuelle fejl i de trin i formularen, der i øjeblikket ikke er valgt og hvor der efter validering er registreret en fejl, men som ikke blokerer brugeren i at gå videre til næste trin.

#### Vejledning

Fejl vises, hvis der er fejl i det indtastede data eller obligatoriske felter ikke er udfyldt.

Fejl angives med et fejl-ikon ud for trinnet med fejl samt med en baggrundsfarve. Ikonet kan fjernes igen ved indtastning af korrekt data i det pågældende trin.

Vis kun fejl i trinindikatoren, når det er muligt for brugeren at fortsætte til næste trin på trods af fejl.

Hvis det ikke er muligt at fortsætte til næste trin grundet fejl, skal brugeren tydeligt informeres på selve trinnet om, hvilke fejl der skal rettes, før man kan komme videre, ved hjælp af en {% include links/component-guideline-link.html linktext="Fejlopsummering" %} og {% include links/component-guideline-link.html linktext="Fejlmeddelelser" %}.

#### Opsummeringsside 

Eventuelle fejl vises på opsummeringssiden i form af {% include links/component-guideline-link.html linktext="fejlopsummering" %} med henvisning til de specifikke trin som link i fejlopsummeringen.

{% include links/internal-link.html linktext="Se et eksempel på opsummeringssiden med fejl i trinindikatoren." %}

### Simpel trinindikator {#{% include create-id.html heading="Simpel trinindikator" %}}

En simpel trinindikator viser blot brugerens aktuelle position i formularen som en subheading lige over trinindikatorens H1, eksempelvis "Trin 2 af 3". Denne variant anvendes typisk i korte eller enkle formularer, hvor det ikke er nødvendigt eller ønskeligt at lade brugeren navigere frit mellem trinene. Den simple variant er velegnet til korte flows, hvor fokus er på hurtig og enkel gennemførelse. Link til eksempelløsning.

{% include code/preview-box.html component="step-indicator-simple" title="Eksempel på simpel trinindikator" code="/komponenter/trinindikator/#simpel-trinindikator-kode" %}

## Se komponenten i eksempelløsninger {#{% include create-id.html heading="Se komponenten i eksempelløsninger" %}}

{:.nobullet-list}
- {% include links/demo-link.html linktext="Trinformular til registrering: Vælg personer" %}
- {% include links/demo-link.html linktext="Trinformular til ansøgning: Oplysninger om ansøger" %}

## Referencer {#{% include create-id.html heading="Referencer" %}}

{:.nobullet-list}
- Caroline Jarrett & Gerry Gaffney: Forms that Work: Designing Web Forms for Usability (2009)
- Adam Silver: Form Design Patterns (2018)
- {% include links/external-link.html linktext="GOV.UK: Question Pages - Using Progress Indicators" %}
- Jessica Enders: Designing UX: Forms (2016)
- {% include links/external-link.html linktext="Caroline Jarrett: Design patterns in government (2016)" %}

<!--split-->

## Installation {#{% include create-id.html heading="Installation" append="-kode" %}}

### HTML Struktur

{% include code/syntax.html component="step-indicator" copybutton=true %}

Anvend klassen `modal-step-indicator` til den modal, der indeholder trinindikatoren.

Parent-element til `step-indicator-button` kan afhænge af konteksten på siden og vil derfor ikke altid være `<div>`.

## Alle trin klikbare {#{% include create-id.html heading="Alle trin klikbare" append="-kode" %}}

{% include code/syntax.html component="step-indicator-clickable" link=true copybutton=true guidelines="/komponenter/trinindikator/#alle-trin-klikbare" %}

## Ekstra information {#{% include create-id.html heading="Ekstra information" append="-kode" %}}

{% include code/syntax.html component="step-indicator-helptext" link=true copybutton=true guidelines="/komponenter/trinindikator/#ekstra-information" %}

## Trinindikator med fejl {#{% include create-id.html heading="Trinindikator med fejl" append="-kode" %}}

Tilføj klassen `sidenav-error` til de liste-elementer, der er fejl i og anvend ikonet `error` med en passende `aria-label`.

{% include code/syntax.html component="step-indicator-error" link=true copybutton=true guidelines="/komponenter/trinindikator/#trinindikator-med-fejl" %}

## Simpel trinindikator {#{% include create-id.html heading="Simpel trinindikator" append="-kode" %}}

{% include code/syntax.html component="step-indicator-simple" link=true copybutton=true guidelines="/komponenter/trinindikator/#simpel-trinindikator" %}