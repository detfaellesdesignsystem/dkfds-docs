---
permalink: /komponenter/drop-down/
layout: styleguide
type: component
title: Dropdown-menu
category: Komponenter_category
subcategory: Komponenter
description: Dropdown-menuer kan bruges i tilfælde, hvor brugeren skal vælge mellem 7 og 15 værdier på en begrænset plads.
tags:
select2: true
component: select
componentTitle: Eksempel på dropdown-menu
componentCode: "/kode/komponenter/drop-down/"
---

{:.h3 #retningslinjer}
## Anvendes til

Anvend kun dropdown menuer, når det er absolut nødvendigt og kun i tilfælde, hvor brugeren skal vælge mellem 7 til 15 værdier på en begrænset plads.

{:.h3}
## Anvendes ikke til

- Lister med færre værdier end 7.
- Lister med flere værdier end 15. I så tilfælde bør du tilbyde brugeren et felt med auto-forslag, når brugeren begynder at indtaste.

Brug tjekbokse fremfor dropdown menu, hvis brugeren skal vælge mere end 1 værdi.

Brug ikke dropdown-menu til navigation, som den ikke er velegnet til.

{:.h3}
## Vejledning

Dropdown menuer kræver ekstra aftestning på målgruppen pga. de kognitive udfordringer, de kan afføde.

Undgå at lade brugerens valg i én dropdown menu påvirke indholdet i en anden. Det forvirrer mange brugere.

Hvis du ved, at mange brugere vil vælge den samme værdi i en dropdown menu, så marker den med `<option selected="selected">Default</option>`. Dermed slipper brugerne for at bruge tid på at gennemsøge listen.

Anvend ikke JavaScript til automatisk at sende den valgte værdi, men sørg for at der er en submit-knap til at sende formularen med.

{% include dos-donts-box.html component="dropdown-dos-donts" title="Dropdown-menu do's and don'ts" %}

{:.h4}
### Referencer

{:.nobullet-list}
- ISO 9241-143: Forms (2012)
- <a href="https://www.lukew.com/ff/entry.asp?1950" class="icon-link">Luke Wroblewski: Dropdowns Should be the UI of Last Resort (2015)<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>


{:.h3}
## Eksempler på brug i løsning

{:.nobullet-list}
- <a href="/pages/eksempler/vedhaeft-fil/fil-1/" target="_blank" title="Eksempelløsning Dokumenter til sagen åbnes i nyt vindue">Dokumenter til sagen</a>

{% include child-components.html parent='Drop-down' %}
