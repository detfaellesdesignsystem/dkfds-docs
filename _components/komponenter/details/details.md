---
permalink: "/komponenter/detaljer/"
redirect_from:
- "/komponenter/collapse/"
layout: styleguide
type: component
title: Detaljer
category: Komponenter_category
subcategory: Komponenter
description: Skjul og vis yderligere information eller en ekstra funktion relevant
  for brugerens valg.
lead: Du kan bruge Detalje komponenten til at holde indhold skjult, indtil brugeren
  vælger at aktivere det. Når brugeren klikker på komponenten, folder indholdet sig
  ud, eller brugeren får fx mulighed for at læse teksten.
tags: 
component: details
componentTitle: Eksempel på skjul og vis af indhold
componentCode: "/kode/komponenter/detaljer/"

---
Se også skjul og vis komponenterne med <a href="/komponenter/radiobutton/#skjult-indhold-collapse">radioknap</a> og <a href="/komponenter/tjekboks/#skjult-indhold-collapse">tjekboks</a>.

{:.h3 #retningslinjer}

## Anvendes til

Anvendes til at gøre siden lettere for brugeren at skimme ved at skjule information, som de fleste brugere ikke vil have brug for, og som derfor ikke bør dominere brugergrænsefladen. 

{:.h3}

## Anvendes ikke til

Anvendes ikke som erstatning for accordions.

Anvendes ikke til indhold, som de fleste brugere behøver at læse såsom sidens brødtekst.

{:.h3}

## Vejledning

Hold det enkelt. Hvis du har behov for at eksponere større mængder af ekstra funktionalitet eller indhold, bør du overveje at fordele det ud over flere sider i stedet.

Skjult indhold skal fortsat overholde dokumentets outline (overskriftshierarki) og tilgængelighedskrav.

Placér aldrig detaljer inden i et andet detaljeelement, da dette kan forvirre brugeren. Undgå generelt for mange niveauer i navigationen.

{:.h3 #eksempelloesninger}

## Se komponenten i eksempelløsninger

{:.nobullet-list}

* <a href="/pages/eksempler/aes/oversigt/?r={{page.permalink}}%23eksempelloesninger" title="Eksempelløsning Sager os AES åbnes i nyt vindue">Sager hos AES</a>

{% include child-components.html parent='Detaljer' %}