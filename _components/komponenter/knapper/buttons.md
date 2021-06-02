---
permalink: "/komponenter/knapper/"
redirect_from:
- "/komponenter/buttons/"
layout: styleguide
type: element
title: Knapper
category: Komponenter_category
subcategory: Komponenter
description: Knapper er grafiske elementer, som brugerne kan trykke eller klikke på
  og dermed udløse en funktion eller handling.
tags:
- primærknap
- sekundærknap
- tertiærknap
anchor: true
subnav:
- text: Primærknap
  href: "#primærknap"
- text: Sekundærknapper
  href: "#sekundærknapper"
- text: Tertiærknapper
  href: "#tertiærknapper"
- text: Tilbage-knap
  href: "#tilbage-knap"
- text: Knap med ikon
  href: "#knap-med-ikon"
- text: Klikbart ikon
  href: "#klikbart-ikon"
component: button-primary
componentTitle: Eksempel på primærknap
componentCode: "/kode/komponenter/knapper/"

---
{:.h3 #retningslinjer}
## Anvendes til

Du kan bruge de forskellige typer af knapper til at kommunikere centrale og vigtige funktioner til brugerne, såsom "næste" trin i en selvbetjeningsløsning, eller ”Gem”, ”Rediger”, ”Log ind”, ”Log af” m.fl.

{:.h3}
## Anvendes ikke til

Brug ikke knapper til at navigere mellem sidevisninger. Der skal du i stedet anvende link.

{:.h3}
## Vejledning

Der er kun én primærknap pr. side.

Generelt skal du anvende primære knapper til handlinger, der bringer brugeren videre i sin udfyldelse/indberetning i selvbetjeningsløsningen. Sekundære og tertiære knapper bruges til handlinger, der foregår på det aktuelle trin.

Brug også sekundære og tertiære knapper til at vægte vigtigheden af andre tilbudte funktioner.

Undgå for mange knapbaserede funktioner på samme side.

Funktioner af mindre vigtighed bør du style som et <a href="/komponenter/funktionslink/">funktionslink</a>.

Brug stort forbogstav og små bogstaver for resten af teksten på knappen.

Skriv kort og præcist.

Skriv i aktiv form: I stedet for at skrive ”Fejlindmelding” bør du skrive ”Indmeld en fejl”.

I nogle tilfælde kan det være meningsunderstøttende at indlejre et svg-ikon i knappen for at signalere bestemte handlinger.

{% include dos-donts-box.html component="buttons-dos-donts" title="Knapper do's and don'ts" %}

{:.h4}
### Referencer

{:.nobullet-list}
- Luke Wroblewski: Web Form Design: Filling in the Blanks (2008)
- Jeff Johnson: Designing with the Mind in Mind, Second Edition (2014)

{:.h4}
### Disabled tilstand

Brug helst ikke "disabled" state på knapper eller i det hele taget, da ikke alle brugere forstår, at det som er "disabled" ikke kan anvendes.

Brug ikke "disabled" tilstand på "næste" knapper (knapper der bringer brugeren videre i løsningen), da brugeren ved tryk på sådanne knapper skal have at vide, hvor i formularen, der mangler udfyldelse og dermed hjælpes til gennemførelse af selvbetjeningsløsningen.

Der kan være tilfælde, hvor det giver mening for brugeren at du anvender "disabled" tilstanden, men så skal det være en aktiv del af en umiddelbar og kontekstuel kommunikation på siden; fx ved at en knap først bliver aktiv, når brugeren har godkendt nogle betingelser ved fx at sætte et flueben. I sådanne tilfælde er det vigtigt at knap og betingelse, står i umiddelbar nærhed, så brugerene bliver opmærksomme på forskellen, og så brugere der anvender zoom også kan se ændringen ske inden for deres zoom.

{:.h3}
## Links

<a href="https://uxmovement.com/buttons/when-to-use-a-button-or-link/" class="icon-link">Hvornår skal du bruge en knap eller et link<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>


{% include child-components.html parent='Buttons' %}
