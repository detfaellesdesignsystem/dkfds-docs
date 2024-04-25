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

{% include code/preview-box.html component="button-primary" title="Eksempel på primærknap" classes="intro-example" %}

{% include anchorlinks.html guidelines="Knapper" code="Knapper_Kode" %}

<!--split-->

## Sådan bruges komponenten {#{% include create-id.html heading="Sådan bruges komponenten" %}}

### Anvendes til

Du kan bruge de forskellige typer af knapper til at kommunikere centrale og vigtige funktioner til brugerne, såsom "næste" trin i en selvbetjeningsløsning, eller ”Gem”, ”Rediger”, ”Log ind”, ”Log af” m.fl.

### Anvendes ikke til

Brug ikke knapper til at navigere mellem sidevisninger. Der skal du i stedet anvende link.

### Vejledning

Der er kun én primærknap pr. side.

Generelt skal du anvende primære knapper til handlinger, der bringer brugeren videre i sin udfyldelse/indberetning i selvbetjeningsløsningen. Sekundære og tertiære knapper bruges til handlinger, der foregår på det aktuelle trin.

Brug også sekundære og tertiære knapper til at vægte vigtigheden af andre tilbudte funktioner.

Undgå for mange knapbaserede funktioner på samme side.

Funktioner af mindre vigtighed bør du style som et {% include links/component-guideline-link.html linktext="funktionslink" %}.

Brug stort forbogstav og små bogstaver for resten af teksten på knappen.

Skriv kort og præcist.

Skriv i aktiv form: I stedet for at skrive ”Fejlindmelding” bør du skrive ”Indmeld en fejl”.

I nogle tilfælde kan det være meningsunderstøttende at indlejre et svg-ikon i knappen for at signalere bestemte handlinger.

#### Disabled tilstand

Brug helst ikke "disabled" state på knapper eller i det hele taget, da ikke alle brugere forstår, at det som er "disabled" ikke kan anvendes.

Brug ikke "disabled" tilstand på "næste" knapper (knapper der bringer brugeren videre i løsningen), da brugeren ved tryk på sådanne knapper skal have at vide, hvor i formularen, der mangler udfyldelse og dermed hjælpes til gennemførelse af selvbetjeningsløsningen.

Der kan være tilfælde, hvor det giver mening for brugeren at du anvender "disabled" tilstanden, men så skal det være en aktiv del af en umiddelbar og kontekstuel kommunikation på siden; fx ved at en knap først bliver aktiv, når brugeren har godkendt nogle betingelser ved fx at sætte et flueben. I sådanne tilfælde er det vigtigt at knap og betingelse, står i umiddelbar nærhed, så brugerne bliver opmærksomme på forskellen, og så brugere der anvender zoom også kan se ændringen ske inden for deres zoom.

{% include dos-donts-box.html component="buttons-dos-donts" title="Knapper do's and don'ts" %}

## Varianter {#{% include create-id.html heading="Varianter" %}}

{:#primaerknap}
### Primærknap

{% include code/preview-box.html component="buttons-primary" title="Eksempel på primærknap" %}

{:#sekundaerknapper}
### Sekundærknapper

{% include code/preview-box.html component="buttons-secondary" title="Eksempel på sekundærknap" %}

{:#tertiaerknapper}
### Tertiærknapper

{% include code/preview-box.html component="buttons-tertiary" title="Eksempel på tertiær knap" %}

{:#tilbage-knap}
### Tilbage-knap

{% include code/preview-box.html component="buttons-back" title="Eksempel på tilbageknap" %}

{:#knap-med-ikon}
### Knap med ikon

{% include code/preview-box.html component="buttons-with-icon" title="Eksempel på knap med ikon" %}

{:#klikbart-ikon}
### Klikbart ikon

Klikbare ikoner bør kun anvendes i tilfælde, hvor ikonet er bredt kendt, og hvor der ikke er plads til supplerende tekstlabel i brugergrænsefladen. Det kan f.eks. være tilfældet med sorteringsikoner i {% include links/component-guideline-link.html linktext="tabeller" %} eller skraldespandsikoner på mobil, hvor pladsen er begrænset.
 
Ikoner fungerer altid bedst i kombination med tekst. Anvend derfor altid {% include links/component-guideline-link.html linktext="funktionslink" %} i stedet for klikbare ikoner, når det er muligt.

{% include code/preview-box.html component="buttons-only-icon" title="Eksempel på knap som ikon" %}

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
- Luke Wroblewski: Web Form Design: Filling in the Blanks (2008)
- Jeff Johnson: Designing with the Mind in Mind, Second Edition (2014)
- {% include links/external-link.html linktext="Hvornår skal du bruge en knap eller et link" %}

<!--split-->

## Installation {#{% include create-id.html heading="Installation" append="-kode" %}}

### HTML Struktur

{% include code/syntax.html component="button-primary" copybutton=true %}

Undgå at anvende `div` eller `img` tags til at konstruere en knap, da skærmlæsere i givet fald ikke automatisk kan afkode knappens funktionalitet.

## Primær {#{% include create-id.html heading="Primær" append="-kode" %}}

Defineres med klassen `button-primary`.

Bemærk særlige {% include links/component-guideline-link.html linktext="retningslinjer for primærknap" %}.

## Sekundær {#{% include create-id.html heading="Sekundær" append="-kode" %}}

Defineres med klassen `button-secondary`.

## Tertiær {#{% include create-id.html heading="Tertiær" append="-kode" %}}

Defineres med klassen `button-tertiary`.

## Tilbage-knap {#{% include create-id.html heading="Tilbage-knap" append="-kode" %}}

Defineres med klassen `button-quaternary`.

## Knap med ikon {#{% include create-id.html heading="Knap med ikon" append="-kode" %}}

{% include code/syntax.html component="buttons-with-icon" link=true copybutton=true %}

## Klikbart ikon {#{% include create-id.html heading="Klikbart ikon" append="-kode" %}}

{% include code/syntax.html component="buttons-only-icon" link=true copybutton=true %}

`button-unstyled` bruges i de tilfælde, hvor knappen kun indeholder et ikon. For at gøre knappen tilgængelig husk da at tilføje tekst til skærmlæsere. Fx `<span class="sr-only">Slet</span>`.
