---
permalink: /eksempler/patterns/session-udloeber/
parentlink: "/eksempler/patterns/"
layout: styleguide
category: Eksempler_category
subcategory: Eksempler
title: Session udløber
lead: Session udløber vises, inden brugeren automatisk logges af en løsning. Dialogen giver brugeren mulighed for at tage stilling til, om de vil logge af eller forblive i løsningen. 
anchor: false
description: Visning af session udløb
tags:
---

{% include code/preview-box-details.html component="session-udloeber" title="Eksempel på session udløb" link=false detaillabel="for eksempel på udløb af session" %}

## Anvendes til

Dialogen anvendes, når en bruger er ved at blive logget af en løsning automatisk, dvs. når deres session udløber.

## Anvendes ikke til

Dialogen anvendes ikke, når en bruger selv har trykket på en log af-knap. Hvis brugeren er ved at logge af en løsning, hvor der er foretaget ændringer, som ikke er gemt, så anvend i stedet dialogen Er du sikker på, du vil forlade siden?

## Vejledning

Til dette mønster anvendes komponenten {% include links/component-guideline-link.html linktext="Modalvindue, som kræver handling" %}.

Dialogen vises ca. 5 minutter før, brugeren automatisk bliver logget af. Således kan brugeren nå at handle på informationen og fx vælge at forblive logget ind. En kortere tid for dialogen kan vælges af sikkerhedsmæssige årsager, dog må brugeren aldrig få mindre end 20 sekunders varsel af hensyn til tilgængelighed (Timing Adjustable: Understanding SC 2.2.1).

En nedtælling i dialogen kan hjælpe brugeren med at forstå, hvor lang tid de har til at reagere. Hvis dialogen “Session udløber” fx vises 5 minutter før, brugeren automatisk logges af, så tælles der ned fra 5 minutter. 

Hvis sessionens udløb vil resultere i, at ændringer, som brugere har foretaget, vil gå tabt, bør dialogen gøre opmærksom på dette. Det kan fx være, hvis brugeren er i gang med at udfylde en formular. 

Hvis brugeren har foretaget ændringer, og disse er gemt automatisk, bør dialogen gøre opmærksom på dette.

Når brugeren logges af automatisk, tages de til en dedikeret log af-side, som kan være myndighedens egen log af-side. {% include links/internal-link.html linktext="Se eksempel på, hvordan en 'log af'-side kan se ud med FDS" %}. Den kan ydermere informere brugeren om ekstra sikkerhed.

Tiden der går, før brugeren logges af en løsning automatisk, defineres i forhold til login-systemet og sikkerhedsmæssige forhold.

### Ændringer er ikke gemt

{% include code/preview-box-details.html component="session-udloeber-aendringer-ikke-gemt" title="Eksempel på session udløb med ændringer der ikke er gemt" link=false detaillabel="for eksempel på udløb af session med ændringer, der ikke er gemt" %}

### Ændringer er gemt

{% include code/preview-box-details.html component="session-udloeber-aendringer-gemt" title="Eksempel på session udløb med gemte ændringer" link=false detaillabel="for eksempel på udløb af session med gemte ændringer" %}

### Referencer

{:.nobullet-list}
- {% include links/external-link.html linktext="Timing Adjustable: Understanding SC 2.2.1" %}
- {% include links/external-link.html linktext="Tekniske krav til tilslutning af it-system i NemLog-in" %}

