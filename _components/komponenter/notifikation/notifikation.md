---
permalink: "/komponenter/notifikation/"
layout: styleguide
type: element
title: Notifikation
category: Komponenter_category
subcategory: Komponenter
description: 
component: modal
lead: Notifkationer bruges til at give brugeren vigtig og aktuel information om fx status, generelle fejl, fejlopsummeringer, samt til at gøre opmærksom på ting brugeren skal vide, fx automatiske ændringer i brugerens data o.l. 
componentTitle: Eksempel på notifikation
componentCode: "/kode/komponenter/notifikation/"
---

Til forskel fra <a href="/komponenter/beskeder/">Beskeder (alerts)</a> som er placeret som en del af sideindholdet, placeres notifikationer ovenpå selve siden.
Vær opmærksom på at notifikationer hurtigt kan gå fra at opfattes som nyttige til at opfattes som anmassende og påtrængende, så overvej nøje om det er denne komponent, der er det rigtige valg.

{:.h3 #retningslinjer}
## Anvendes til
At gøre brugeren opmærksom på vigtige oplysninger, ofte relateret til brugerens aktuelle aktivitet.

{:.h3}
## Anvendes ikke til
Kritiske beskeder eller lange beskeder, hvis notifikationen er tidsindstillet og forsvinder automatisk. Det gør det vanskeligt for mennesker med forskellige handicap at nå at læse meddelelsen.

Brug <a href="/komponenter/beskeder/">Beskeder (alerts)</a>, hvis en besked skal placeres, som en del af indholdet på siden.

Brug ikke notifikationer til at markere fejlindtastning i et specifikt felt. Brug da <a href="/komponenter/fejlmeddelelser/">fejlmeddelelser</a> i stedet.

Brug modal dialog – ikke notifikationer – til at give brugerne information om en potentielt kritisk handling. Dermed risikerer brugeren ikke at overse eller misforstå beskeden.

{:.h3}
## Vejledning
Gør informationen i notifikationen aktiv og handlingsanvisende, så brugeren forstår, hvad der er behov for eller hvad den aktuelle status er.

Brug ord og begreber, som brugeren kan genkende fra løsningen.

Skriv kort og præcist og undgå tekniske beskeder, der kan forvirre brugeren.

Brug beskeder til at øge brugerens forståelse for løsningen.

Tilføj ikke interaktivt indhold som links ol. på notifikationer, da der kan opstå udfordringer i forbindelse med tilgængelighed.