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
headings: Tooltip
anchorlinks: true
description: "Tooltips giver brugeren kort, forklarende information om specifikke elementer på siden. Tooltip vises ved klik på et hjælpeikon."
tags: 
---

{% assign headings = site.data.headings[page.headings] %}

[---- Sådan bruges komponenten -------------------------------------]: # 
<h2 id="{{ headings[0].id }}">{{ headings[0].h2 }}</h2>

### Anvendes til

Brug tooltips til præcisering af specifikke elementer i brugergrænsefladen. 

### Anvendes ikke til

Tooltips anvendes ikke til informationer, der er essentielle for at brugeren kan gennemføre løsningen. Hvis indholdet er vigtigt for brugerens succes, så placer indholdet på siden som brød- eller hjælpetekst i stedet for.

Placér ikke interaktive elementer såsom knapper og links inde i tooltips.

### Vejledning

Gør indholdet i tooltips så kort og koncist som muligt, da længere tekster er sværere at skimme og blokerer andet indhold på skærmen i højere grad. 

Gør det let at se, hvilket element tooltippet tilhører ved at placere hjælpeikonet tæt ved det element, der beskrives.

Tooltips skal aldrig gentage tekst, som allerede er at finde på siden.

Brug kun hjælpeikonet til tooltips. Hvis der er behov for at knytte en beskrivende tekst til et andet ikon (fx gem, slet, plus), anvend da varianten {% include links/component-guideline-link.html linktext="ikoner med hover-tooltip" %}.

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

#### Brødtekst med tooltip

Tooltips kan anvendes til at forklare enkelte ord inde i en brødtekst. Fremhæv de forklarede ord i teksten med fed. Brug denne form for tooltips i begrænset omfang, da det let virker forstyrrende.

{% include code/preview-box.html component="tooltip-text" title="Eksempel på tooltip i brødtekst" %}

[---- Varianter -------------------------------------]: # 
<h2 id="{{ headings[1].id }}">{{ headings[1].h2 }}</h2>

### Hover-tooltip

Hvor tooltip vises ved klik på et dedikeret hjælpeikon, vises hover-tooltips ved hover eller fokus direkte på det element, de beskriver, såsom et ikon. Vær varsom med at anvende hover-tooltips. På mobil vises de kun ved “long press”, eftersom elementets funktion udføres ved almindeligt tap. “Long press” er en mindre intuitiv interaktion end hover på desktop, hvormed nogle brugere ikke vil se tooltippet.

Hover-tooltips vises med en ganske kort forsinkelse på 0,3 sekunder. Dette er for at sikre, at tooltippet kun vises, når brugeren bevidst er stoppet ved elementet og ikke blot tilfældigt har bevæget musen over det (Harley, 2015).

{:#ikoner-med-hover-tooltip}
#### Ikoner med hover-tooltip

Det anbefales altid at bruge ikoner sammen med en synlig tekstlabel. Ikoner anvendes kun uden tekst, hvis der er tale om meget gængse ikoner, og når der af pladshensyn ikke kan være en tekst direkte ved ikonet. Anvend i de tilfælde altid hover-tooltips som ekstra beskrivelse

Vær opmærksom på, at tooltipteksten skal være så kort og præcis, som hvis den var en synlig tekstlabel til ikonet. Skriv fx bare “Slet” og <strong>ikke</strong> “Tryk på ikonet for at slette”. Sådan sikres den bedste brugeroplevelse, også for skærmlæserbrugere.

{% include code/preview-box.html component="tooltip-iconbutton" title="Eksempel på tooltip på et klikbart ikon" %}

#### Knap med hover-tooltip

Vær varsom med at anvende hover-tooltips på interaktive elementer såsom knapper. På mobil vises disse kun ved “long press”, eftersom knappens funktion udføres ved almindeligt tap. “Long press” er en mindre intuitiv interaktion end hover på desktop, hvormed nogle brugere ikke vil se tooltippet.

{% include code/preview-box.html component="tooltip-hover-button" title="Eksempel på tooltip på en knap" %}

[---- Se komponenten i eksempelløsninger -------------------------------------]: # 
<h2 id="{{ headings[2].id }}">{{ headings[2].h2 }}</h2>

{% include links/demo-link.html linktext="Trinformular til registrering: Vælg personer" returnID="eksempelloesninger" %}

[---- Referencer -------------------------------------]: # 
<h2 id="{{ headings[3].id }}">{{ headings[3].h2 }}</h2>

{:.nobullet-list}
- {% include links/external-link.html linktext="Aurora Harley (2015): Timing Guidelines for Exposing Hidden Content" %}
- Luke Wroblewski: Web Form Design: Filling in the Blanks (2008)
- {% include links/external-link.html linktext="Alita Joyce: Tooltip Guidelines (2019)" %}
- {% include links/external-link.html linktext="Tilgængelige tooltips" %}