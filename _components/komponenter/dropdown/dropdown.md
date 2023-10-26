---
permalink: "/komponenter/dropdown/guidelines/"
redirect_from:
- "/komponenter/drop-down/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Dropdown
component: "select"
componentTitle: "Eksempel på dropdown"
componentLink: true
anchor: false
description: Dropdown kan bruges i tilfælde, hvor brugeren skal vælge mellem 7 og 15 værdier på en begrænset plads.
tags:
---

{:#retningslinjer}
## Retningslinjer

### Anvendes til

Anvend kun dropdown, når det er absolut nødvendigt og kun i tilfælde, hvor brugeren skal vælge mellem 7 til 15 værdier på en begrænset plads.

### Anvendes ikke til

Lister med færre værdier end 7.

Lister med flere værdier end 15. I så tilfælde bør du tilbyde brugeren et felt med auto-forslag, når brugeren begynder at indtaste.

Brug tjekbokse fremfor dropdown, hvis brugeren skal vælge mere end 1 værdi.

Brug ikke dropdown til navigering mellem sider, som den ikke er velegnet til.

### Vejledning

Dropdown kræver ekstra aftestning på målgruppen pga. de kognitive udfordringer, de kan afføde.

Undgå at lade brugerens valg i én dropdown påvirke indholdet i en anden. Det forvirrer mange brugere.

Hvis du ved, at mange brugere vil vælge den samme værdi i en dropdown, så marker den med `<option selected="selected">Default</option>`. Dermed slipper brugerne for at bruge tid på at gennemsøge listen.

Undlad at løsningen reagerer på brugerens direkte valg i dropdownen, så brugeren altid let kan vælge en anden mulighed. Tilføj i stedet en knap, så løsningen først anvender brugerens valg ved klik på knappen.

{% include dos-donts-box.html component="dropdown-dos-donts" title="Dropdown do's and don'ts" %}

#### Fejlmeddelelse
{% include links/component-links.html linktext="Læs mere om korrekt brug af fejlmeddelelser og deres formuleringer." %}

Når der vises en fejlmeddelelse, vis da også {% include links/component-links.html linktext="fejlopsummering" %}.

{% include code/preview-box.html component="select-error" title="Eksempel på dropdown med fejlmeddelelse" %}

{:#eksempelloesninger}
#### Se komponenten i eksempelløsninger

<a href="/pages/eksempler/trinformular-til-ansoegning/ansoegning-4/?r={{page.permalink}}%23eksempelloesninger" title="Vis eksempel 'Trinformular til ansøgning: Tilføj dokumentation'">Trinformular til ansøgning: Tilføj dokumentation</a>

#### Referencer

{:.nobullet-list}
- ISO 9241-143: Forms (2012)
- <a href="https://www.lukew.com/ff/entry.asp?1950" class="icon-link">Luke Wroblewski: Dropdowns Should be the UI of Last Resort (2015)<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>




