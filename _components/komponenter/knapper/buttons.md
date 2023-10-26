---
permalink: "/komponenter/knapper/guidelines/"
redirect_from:
- "/komponenter/buttons/"
- "/komponenter/knapper/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Knapper (Buttons)
component: "button-primary"
componentTitle: "Eksempel på primærknap"
componentLink: true
anchor: true
subnav:
- text: Primærknap
  href: "#primaerknap"
- text: Sekundærknapper
  href: "#sekundaerknapper"
- text: Tertiærknapper
  href: "#tertiaerknapper"
- text: Tilbage-knap
  href: "#tilbage-knap"
- text: Knap med ikon
  href: "#knap-med-ikon"
- text: Klikbart ikon
  href: "#klikbart-ikon"
description: Knapper er grafiske elementer, som brugerne kan trykke eller klikke på
  og dermed udløse en funktion eller handling.
tags:
- primærknap
- sekundærknap
- tertiærknap
---

{:#retningslinjer}
## Retningslinjer

### Anvendes til

Du kan bruge de forskellige typer af knapper til at kommunikere centrale og vigtige funktioner til brugerne, såsom "næste" trin i en selvbetjeningsløsning, eller ”Gem”, ”Rediger”, ”Log ind”, ”Log af” m.fl.

### Anvendes ikke til

Brug ikke knapper til at navigere mellem sidevisninger. Der skal du i stedet anvende link.

### Vejledning

Der er kun én primærknap pr. side.

Generelt skal du anvende primære knapper til handlinger, der bringer brugeren videre i sin udfyldelse/indberetning i selvbetjeningsløsningen. Sekundære og tertiære knapper bruges til handlinger, der foregår på det aktuelle trin.

Brug også sekundære og tertiære knapper til at vægte vigtigheden af andre tilbudte funktioner.

Undgå for mange knapbaserede funktioner på samme side.

Funktioner af mindre vigtighed bør du style som et {% include links/component-links.html linktext="funktionslink" %}.

Brug stort forbogstav og små bogstaver for resten af teksten på knappen.

Skriv kort og præcist.

Skriv i aktiv form: I stedet for at skrive ”Fejlindmelding” bør du skrive ”Indmeld en fejl”.

I nogle tilfælde kan det være meningsunderstøttende at indlejre et svg-ikon i knappen for at signalere bestemte handlinger.

#### Disabled tilstand

Brug helst ikke "disabled" state på knapper eller i det hele taget, da ikke alle brugere forstår, at det som er "disabled" ikke kan anvendes.

Brug ikke "disabled" tilstand på "næste" knapper (knapper der bringer brugeren videre i løsningen), da brugeren ved tryk på sådanne knapper skal have at vide, hvor i formularen, der mangler udfyldelse og dermed hjælpes til gennemførelse af selvbetjeningsløsningen.

Der kan være tilfælde, hvor det giver mening for brugeren at du anvender "disabled" tilstanden, men så skal det være en aktiv del af en umiddelbar og kontekstuel kommunikation på siden; fx ved at en knap først bliver aktiv, når brugeren har godkendt nogle betingelser ved fx at sætte et flueben. I sådanne tilfælde er det vigtigt at knap og betingelse, står i umiddelbar nærhed, så brugerne bliver opmærksomme på forskellen, og så brugere der anvender zoom også kan se ændringen ske inden for deres zoom.

{% include dos-donts-box.html component="buttons-dos-donts" title="Knapper do's and don'ts" %}

{:#eksempelloesninger}
#### Se komponenten i eksempelløsninger

{:.nobullet-list}
- <a href="/pages/eksempler/formular-til-kontaktoplysninger/formular-3/?r={{page.permalink}}%23eksempelloesninger" title="Vis eksempel 'Formular til kontaktoplysninger: Kvittering'">Formular til kontaktoplysninger: Kvittering</a>
- <a href="/pages/eksempler/trinformular-til-registrering/registrering-1/?r={{page.permalink}}%23eksempelloesninger" title="Vis eksempel 'Trinformular til registrering: Vælg personer'">Trinformular til registrering: Vælg personer</a>
- <a href="/pages/eksempler/trinformular-til-ansoegning/ansoegning-1/?r={{page.permalink}}%23eksempelloesninger" title="Vis eksempel 'Trinformular til ansøgning: Oplysninger om ansøger'">Trinformular til ansøgning: Oplysninger om ansøger</a>
- <a href="/pages/eksempler/trinformular-til-ansoegning/ansoegning-4/?r={{page.permalink}}%23eksempelloesninger" title="Vis eksempel 'Trinformular til ansøgning: Tilføj dokumentation'">Trinformular til ansøgning: Tilføj dokumentation</a>
- <a href="/pages/eksempler/trinformular-til-ansoegning/ansoegning-6/?r={{page.permalink}}%23eksempelloesninger" title="Vis eksempel 'Trinformular til ansøgning: Kvittering'">Trinformular til ansøgning: Kvittering</a>
- <a href="/pages/eksempler/sagsoversigt/find-sag/sagsnr-123456789/?r={{page.permalink}}%23eksempelloesninger" title="Vis eksempel 'Sagsoversigt: Sagsnr. 123456789'">Sagsoversigt: Sagsnr. 123456789</a>

#### Referencer

{:.nobullet-list}
- Luke Wroblewski: Web Form Design: Filling in the Blanks (2008)
- Jeff Johnson: Designing with the Mind in Mind, Second Edition (2014)
- <a href="https://uxmovement.com/buttons/when-to-use-a-button-or-link/" class="icon-link">Hvornår skal du bruge en knap eller et link<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>

## Varianter

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

Klikbare ikoner bør kun anvendes i tilfælde, hvor ikonet er bredt kendt, og hvor der ikke er plads til supplerende tekstlabel i brugergrænsefladen. Det kan f.eks. være tilfældet med [sorteringsikoner i tabeller](/komponenter/tables/) eller skraldespandsikoner på mobil, hvor pladsen er begrænset.
 
Ikoner fungerer altid bedst i kombination med tekst. Anvend derfor altid {% include links/component-links.html linktext="funktionslink" %} i stedet for klikbare ikoner, når det er muligt.

{% include code/preview-box.html component="buttons-only-icon" title="Eksempel på knap som ikon" %}