---
permalink: "/komponenter/knapper/"
redirect_from:
- "/komponenter/buttons/"
- "/kode/komponenter/knapper/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Knapper (Buttons)
lead: Knapper lader brugeren udføre centrale funktioner.
description: Knapper er grafiske elementer, som brugerne kan trykke eller klikke på
  og dermed udløse en funktion eller handling.
tags:
- primærknap
- sekundærknap
- tertiærknap
tabs: "Retningslinjer, kode"
---

{% include tabs.html guidelines=true code=true %}

{% include code/preview-box.html component="buttons" title="Eksempel på knapper" classes="intro-example" %}

{% include anchorlinks.html guidelines="Knapper" code="Knapper_Kode" %}

<!--split-->

## Sådan bruges komponenten {#{% include create-id.html heading="Sådan bruges komponenten" %}}

### Anvendes til

Du kan bruge de forskellige typer af knapper til at kommunikere centrale og vigtige funktioner til brugerne, såsom “Næste” trin i en selvbetjeningsløsning, eller ”Gem”, ”Rediger”, ”Log ud” m.fl.

### Anvendes ikke til

Brug ikke knapper til at navigere til andre sider. Der skal du i stedet anvende {% include links/internal-link.html linktext="links" %}.

### Vejledning

Hierarkisk er der tre typer af knapper, Primær, Sekundær og Tertiær, der bruges til at fremhæve udvalgte handlinger.

#### Primærknap

Primærknapper anvendes til den centrale handling i brugergrænsefladen. Det kan eksempelvis være “Tilmeld” eller “Indsend”. Der må kun anvendes én primærknap pr. side.

#### Sekundærknap

Sekundærknapper anvendes til handlinger der ikke er centrale i brugergrænsefladen. Der kan være flere sekundærknapper på en side.

#### Tertiærknap

Tertiærknapper anvendes til nedtonede handlinger, der ikke er centrale i brugergrænsefladen.

#### Disabled tilstand

Alle knapper har en “disabled” tilstand, men vi anbefaler ikke at benytte denne, da ikke alle brugere forstår, at det som er “disabled” ikke kan anvendes. Derudover er disabled knapper svære at se og læse grundet lav farvekontrast. Disabled knapper får ikke fokus, hvormed brugere, der navigerer med tastatur og bruger skærmlæser, ikke vil opdage knappen.

{% include dos-donts-box.html component="buttons-dos-donts" %}

## Varianter {#{% include create-id.html heading="Varianter" %}}

### Primærknap i fuld bredde på små skærme {#{% include create-id.html heading="fuld bredde" %}}

På små skærme med kun én central handling kan primærknapper indsættes på siden med fuld bredde. Benyt kun denne variant til primærknapper og kun til små skærmstørrelser (breakpoint mobil).

{% include code/preview-box.html component="buttons-full-width" title="Eksempel på knap med fuld bredde på små skærme" code="/komponenter/knapper/#fuld-bredde-kode" %}

### Knap med ikon {#{% include create-id.html heading="Knap med ikon" %}}

Du kan supplere knappens tekst med et ikon, hvis dette klart og tydeligt angiver knappens funktion.

{% include code/preview-box.html component="buttons-with-icon" title="Eksempel på knap med ikon" code="/komponenter/knapper/#knap-med-ikon-kode" %}

### Knapgruppe {#{% include create-id.html heading="Knapgruppe" %}}

For funktioner, der er sammenhængende, kan knapper grupperes og placeres ved siden af hinanden.

{% include code/preview-box.html component="buttons-group" title="Eksempel på knapgruppe" code="/komponenter/knapper/#knapgruppe-kode" %}

### Advarselsknapper {#{% include create-id.html heading="Advarselsknapper" %}}

Bør kun anvendes til funktioner hvor brugeren skal forstå, at de er ved at foretage en handling, der ikke efterfølgende kan omgøres, og som kan have store konsekvenser. Eksempelvis “Er du sikker på, du ønsker at slette det indtastede?” 

Vær opmærksom på, at den røde farve ikke må være det eneste, der kommunikerer handlingens alvor. Konteksten og knapteksten skal også kommunikere dette, da ikke alle brugere kan se og forstå farven og dens betydning (GOV.UK, WCAG).

{% include code/preview-box.html component="buttons-warning" title="Eksempel på advarselsknap" code="/komponenter/knapper/#advarselsknapper-kode" %}

### Klikbart ikon {#{% include create-id.html heading="Klikbart ikon" %}}

Klikbare ikoner bør kun anvendes i tilfælde, hvor ikonet er bredt kendt, og hvor der ikke er plads til supplerende tekstlabel i brugergrænsefladen. Det kan f.eks. være tilfældet med sorteringsikoner i {% include links/component-guideline-link.html linktext="tabeller" %} eller skraldespandsikoner på mobil, hvor pladsen er begrænset.

Ikoner fungerer altid bedst i kombination med tekst. Anvend derfor altid {% include links/component-guideline-link.html linktext="funktionslink" %} i stedet for klikbare ikoner, når det er muligt.

{% include code/preview-box.html component="buttons-only-icon" title="Eksempel på knap som ikon" code="/komponenter/knapper/#klikbart-ikon-kode" %}

## Se komponenten i eksempelløsninger {#{% include create-id.html heading="Se komponenten i eksempelløsninger" %}}

{:.nobullet-list}
- {% include links/demo-link.html linktext="Formular til kontaktoplysninger: Kvittering" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Trinformular til registrering: Vælg personer" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Trinformular til ansøgning: Oplysninger om ansøger" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Trinformular til ansøgning: Tilføj dokumentation" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Trinformular til ansøgning: Kvittering" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Sagsoversigt: Sagsnr. 123456789" returnID="eksempelloesninger" %}

## Referencer {#{% include create-id.html heading="Referencer" %}}

{:.nobullet-list}
- {% include links/external-link.html linktext="The Problem with Disabled Buttons and What To Do Instead" %}
- {% include links/external-link.html linktext="When to Use a Button or Link" %}
- {% include links/external-link.html linktext="Usability Pitfalls of Disabled Buttons, and How To Avoid Them" %}
- {% include links/external-link.html linktext="W3C (WCAG 2.1): Understanding SC 1.4.1: Use of Color (Level A)" %}
- {% include links/external-link.html linktext="GOV.UK Design System - Button" %}

<!--split-->

## Installation {#{% include create-id.html heading="Installation" append="-kode" %}}

### HTML Struktur

{% include code/syntax.html component="buttons" copybutton=true %}

Undgå at anvende `div` eller `img` tags til at konstruere en knap, da skærmlæsere i givet fald ikke automatisk kan afkode knappens funktionalitet.

Alle knapper skal altid have klassen `button`, der sætter en grundlæggende styling.

Hvis man har knapper med lang tekst, kan der i enkelte tilfælde være ombrydningsproblemer på mindre skærme. Hvis det ikke er muligt at give knappen et kortere navn, kan man placere knappens tekst i et `<span>`-element for at ombryde teksten over flere linjer.

{% include code/syntax.html component="buttons-long-text" link=false copybutton=true %}

## Primær {#{% include create-id.html heading="Primær" append="-kode" %}}

Tilføj klassen `button-primary` til knappen.

Bemærk særlige {% include links/component-guideline-link.html linktext="retningslinjer for primærknap" %}.

## Sekundær {#{% include create-id.html heading="Sekundær" append="-kode" %}}

Tilføj klassen `button-secondary` til knappen.

## Tertiær {#{% include create-id.html heading="Tertiær" append="-kode" %}}

Tilføj klassen `button-tertiary` til knappen.

## Primærknap i fuld bredde på små skærme {#{% include create-id.html heading="fuld bredde" append="-kode" %}}

{% include code/syntax.html component="buttons-full-width" link=true copybutton=true guidelines="/komponenter/knapper/#fuld-bredde" %}

## Knap med ikon {#{% include create-id.html heading="Knap med ikon" append="-kode" %}}

{% include code/syntax.html component="buttons-with-icon" link=true copybutton=true guidelines="/komponenter/knapper/#knap-med-ikon" %}

## Knapgruppe {#{% include create-id.html heading="Knapgruppe" append="-kode" %}}

{% include code/syntax.html component="buttons-group" link=true copybutton=true guidelines="/komponenter/knapper/#knapgruppe" %}

## Advarselsknapper {#{% include create-id.html heading="Advarselsknapper" append="-kode" %}}

{% include code/syntax.html component="buttons-warning" link=true copybutton=true guidelines="/komponenter/knapper/#advarselsknapper" %}

## Klikbart ikon {#{% include create-id.html heading="Klikbart ikon" append="-kode" %}}

{% include code/syntax.html component="buttons-only-icon" link=true copybutton=true guidelines="/komponenter/knapper/#klikbart-ikon" %}
