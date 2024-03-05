---
permalink: "/komponenter/tooltip/guidelines/"
redirect_from:
- "/komponenter/tooltip/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: "Tooltip"
lead: Tooltips giver brugeren kort, forklarende information om specifikke elementer på siden. Tooltip vises ved klik på et hjælpeikon.
component: "tooltip-helpicon"
componentTitle: "Eksempel på ikon med tooltip"
componentLink: true
anchor: true
subnav:
- text: Sådan bruges komponenten
  href: "#retningslinjer"
- text: Varianter
  href: "#varianter"
- text: Se komponenten i eksempelløsninger
  href: "#eksempelloesninger"
- text: Referencer
  href: "#ref"
description: "Tooltips giver brugeren kort, forklarende information om specifikke elementer på siden. Tooltip vises ved klik på et hjælpeikon."
tags: 
---

{:#retningslinjer}
## Sådan bruges komponenten

### Anvendes til

Brug tooltips til præcisering af specifikke elementer i brugergrænsefladen. 

### Anvendes ikke til

Tooltips anvendes ikke til informationer, der er essentielle for at brugeren kan gennemføre løsningen. Hvis indholdet er vigtigt for brugerens succes, så placer indholdet på siden som brød- eller hjælpetekst i stedet for.

### Vejledning

Gør indholdet i tooltips så kort og koncist som muligt, da længere tekster er sværere at skimme og blokerer andet indhold på skærmen i højere grad. 

Gør det let at se, hvilket element tooltippet tilhører ved at placere hjælpeikonet tæt ved det element, der beskrives.

Tooltips skal aldrig gentage tekst, som allerede er at finde på siden.

Brug kun hjælpeikonet til tooltips. Hvis der er behov for at knytte en beskrivende tekst til et andet ikon (fx gem, slet, plus), anvend da varianten ikoner med hover-tooltip.

{% include dos-donts-box.html component="tooltip-dos-donts" title="Tooltip do's and don'ts" %}

### Placering af tooltips

Placering af tooltips er vigtigt, så de ikke skygger for det indhold på siden som de relaterer til. Placeres de forkert, kan brugeren blive nødt til at lukke og åbne tooltippet igen for at forstå sammenhængen.

Et tooltip kan anvendes sammen med en række forskellige komponenter og placeres over eller under hjælpeikonet, alt efter hvor det skygger mindst for det øvrige indhold. Nedenfor ses de typer af placeringer, som kan anvendes. 

{% include code/preview-box.html component="tooltip-position" title="Eksempel på placering af tooltip" %}

#### Radioknap med tooltip

{% include code/preview-box.html component="tooltip-radiobuttons" title="Eksempel på tooltip for radioknapper" %}

#### Tjekboks med tooltip

{% include code/preview-box.html component="tooltip-checkbox" title="Eksempel på tooltip for tjekboks" %}

#### Inputfelt med tooltip

{% include code/preview-box.html component="tooltip-textinput" title="Eksempel på tooltip for inputfelt" %}

{:#varianter}
## Varianter

### Hover-tooltip

Tooltips og hover-tooltips minder meget om hinanden. Hvor tooltip vises ved klik på et dedikeret hjælpeikon, vises hover-tooltips ved hover eller fokus direkte på det element, de beskriver, såsom en tekst eller et ikon. På mobil vises hover-tooltip ved tap. 

Hover-tooltips vises med en ganske kort forsinkelse på 0,3 sekunder. Dette er for at sikre, at tooltippet kun vises, når brugeren bevidst er stoppet ved elementet og ikke blot tilfældigt har bevæget musen over det (Harley, 2015).

#### Klikbart ikon med hover-tooltip

Det anbefales altid at bruge ikoner sammen med en tekst. Ikoner anvendes kun uden tekst, hvis der er tale om meget gængse ikoner, og når der af pladshensyn ikke kan være en tekst direkte ved ikonet. Anvend i de tilfælde altid hover-tooltips som ekstra beskrivelse.

{% include code/preview-box.html component="tooltip-iconbutton" title="Eksempel på tooltip på et klikbart ikon" %}

#### Knap med hover-tooltip

Vær varsom med at anvende hover-tooltips på interaktive elementer såsom knapper. På mobil vises disse kun ved “long press”, eftersom knappens funktion udføres ved almindeligt tap. “Long press” er en mindre intuitiv interaktion end hover på desktop, hvormed nogle brugere ikke vil se tooltippet.

{% include code/preview-box.html component="tooltip-hover-button" title="Eksempel på tooltip på en knap" %}

{:#eksempelloesninger}
## Se komponenten i eksempelløsninger

{% include links/demo-link.html linktext="Trinformular til registrering: Vælg personer" returnID="eksempelloesninger" %}

{:#ref}
## Referencer

{:.nobullet-list}
- {% include links/external-link.html linktext="Aurora Harley (2015): Timing Guidelines for Exposing Hidden Content" %}
- Luke Wroblewski: Web Form Design: Filling in the Blanks (2008)
- {% include links/external-link.html linktext="Alita Joyce: Tooltip Guidelines (2019)" %}
- {% include links/external-link.html linktext="Tilgængelige tooltips" %}
- {% include links/external-link.html linktext="Tooltip guidelines" %}