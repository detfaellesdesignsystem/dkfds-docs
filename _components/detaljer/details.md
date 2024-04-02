---
permalink: "/komponenter/detaljer/guidelines/"
redirect_from:
- "/komponenter/collapse/"
- "/komponenter/detaljer/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Detaljer
lead:  Detaljekomponenten holder indhold skjult, indtil brugeren selv vælge at folde det ud.
component: "details"
componentTitle: "Eksempel på skjul og vis af indhold"
componentLink: true
anchor: true
subnav:
- text: Sådan bruges komponenten
  href: "#retningslinjer"
- text: Se komponenten i eksempelløsninger
  href: "#eksempelloesninger"
description: Skjul og vis yderligere information eller en ekstra funktion relevant
  for brugerens valg.
tags: 
---

{:#retningslinjer}
## Sådan bruges komponenten

### Anvendes til

Anvendes til at gøre siden lettere for brugeren at skimme ved at skjule information, som de fleste brugere ikke vil have brug for, og som derfor ikke bør dominere brugergrænsefladen.

### Anvendes ikke til

Anvendes ikke som erstatning for accordions.

Anvendes ikke til indhold, som de fleste brugere behøver at læse såsom sidens brødtekst.

Anvendes ikke til at skjule navigationselementer såsom accordions, faneblade eller flere detaljer.

Anvendes ikke til at vise indhold, som er afhængigt af brugerinput. Se i stedet {% include links/component-guideline-link.html linktext="radioknap med skjult indhold" %} og {% include links/component-guideline-link.html linktext="tjekbokse med skjult indhold" %}.

### Vejledning

Hold det enkelt. Hvis du har behov for at eksponere større mængder af ekstra funktionalitet eller indhold, bør du overveje at fordele det ud over flere sider i stedet.

Skjult indhold skal fortsat overholde dokumentets outline (overskriftshierarki) og tilgængelighedskrav.

Placér aldrig detaljer inden i et andet detaljeelement, da dette kan forvirre brugeren. Undgå generelt for mange interaktionsniveauer.

{:#eksempelloesninger}
## Se komponenten i eksempelløsninger

{:.nobullet-list}
- {% include links/demo-link.html linktext="Sagsoversigt: Find sag" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Sagsoversigt: Afgørelser" returnID="eksempelloesninger" %}