---
permalink: "/komponenter/tooltip/"
layout: styleguide
type: element
title: "Tooltip"
category: Komponenter_category
subcategory: Komponenter
tippy: true
description: "Et tooltip kommer frem, når musen er over det element tooltippet henviser til, fx et ikon, og forsvinder igen, når musen fjernes."
lead: Et tooltip kommer frem, når musen er over det element tooltippet henviser til, fx et ikon, og forsvinder igen, når musen fjernes.
tags: 
anchor: true
subnav:
- text: Klikbart ikon med tooltip
  href: "#klikbart-ikon-med-tooltip"
- text: Tekst med tooltip
  href: "#tekst-med-tooltip"
- text: Knap med tooltip
  href: "#knap-med-tooltip"
- text: Placering af tooltip
  href: "#placering-af-tooltip"
---

{% include code/preview-box.html component="tooltip-icon" title="Eksempel på ikon med tooltip" link=true code="/kode/komponenter/tooltip/" %}

{:#retningslinjer}
## Retningslinjer

### Anvendes til

Brug tooltip til præcisering af specifikke elementer i brugergrænsefladen. Tooltips kan enten vises ved hover over deciderede hjælpeikoner eller ved andre elementer såsom ikoner, billeder, enkelte ord i tekststykker eller til tekst, som er forkortet i brugergrænsefladen. Tooltips bør altid bruges ved ikoner, som fremstår uden tekst.

### Anvendes ikke til

Tooltips anvendes ikke til informationer, der er essentielle for at brugeren kan gennemføre løsningen. Hvis indholdet er vigtigt for brugerens succes, så placer indholdet på siden som brød- eller hjælpetekst i stedet for.

### Vejledning

Gør indholdet i tooltips så kort og koncist som muligt, da længere tekster er sværere at skimme og blokerer andet indhold på skærmen i højere grad.

Vær konsistent i brugen af tooltips, så brugeren ikke skal gætte sig til, om der er tooltips eller ej.

Gør det let at se, hvilket element tooltippet hører til.

Brug altid tooltips til <a href="/komponenter/knapper/#klikbart-ikon">klikbare ikoner</a> uden label.

Sørg for at tooltips er tydelige at se og læse.

Placer tooltips så de ikke skygger for det indhold på siden som de relaterer til. Placeres de forkert kan brugeren blive nødt til at lukke og åbne tooltip igen for at forstå sammenhængen.

Sættes der tooltip på et ord i en tekst, markeres ordet med en stiplet linje under. Brug det i begrænset omfang, da det let virker forstyrrende.

Tooltips skal aldrig gentage tekst, som allerede er at finde på siden.

Vær opmærksom på, at tooltips på klikbare elementer med anden funktion ved klik ikke bliver vist på mobile løsninger. Tooltips på andre elementer, fx deciderede hjælpeikoner eller markerede ord i tekststykker, vises på mobil ved klik.

Tooltips vises på hover med en ganske kort forsinkelse på 0,3 sekunder. Dette er for at sikre, at tooltippet kun vises, når brugeren bevidst er stoppet ved elementet og ikke blot tilfældigt har bevæget musen over det (Harley, 2015).

{% include dos-donts-box.html component="tooltip-dos-donts" title="Datovælger do's and don'ts" %}

{:#eksempelloesninger}
#### Se komponenten i eksempelløsninger

{:.nobullet-list}
- <a href="/pages/eksempler/trinformular-til-registrering/registrering-1/?r={{page.permalink}}%23eksempelloesninger" title="Vis eksempel 'Trinformular til registrering: Vælg personer'">Trinformular til registrering: Vælg personer</a>

#### Referencer

{:.nobullet-list}
- <a href="https://www.nngroup.com/articles/timing-exposing-content/" class="icon-link">Aurora Harley (2015): Timing Guidelines for Exposing Hidden Content<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>
- Luke Wroblewski: Web Form Design: Filling in the Blanks (2008)
- <a href="https://www.nngroup.com/articles/tooltip-guidelines/" class="icon-link">Alita Joyce: Tooltip Guidelines (2019)<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>
- <a href="https://w3c.github.io/aria-practices/#tooltip" class="icon-link">Tilgængelige tooltips<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>
- <a href="https://www.nngroup.com/articles/tooltip-guidelines/" class="icon-link">Tooltip guidelines<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>

## Varianter

{:#klikbart-ikon-med-tooltip}
### Klikbart ikon med tooltip

{% include code/preview-box.html component="tooltip-delete" title="Eksempel på klikbart ikon med tooltip" %}

{:#tekst-med-tooltip}
### Tekst med tooltip

{% include code/preview-box.html component="tooltip-text" title="Eksempel på tekst med tooltip" %}

{:#knap-med-tooltip}
### Knap med tooltip

{% include code/preview-box.html component="tooltip-button" title="Eksempel på primærknap med tooltip" %}

{:#placering-af-tooltip}
### Placering af tooltip

{% include code/preview-box.html component="tooltip-position" title="Eksempel på placering af tooltip" %}