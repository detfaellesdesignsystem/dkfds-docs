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

Anvend kun dropdown menuer, når det er absolut nødvendigt og kun i tilfælde, hvor brugeren skal vælge mellem 7 og 15 værdier på en begrænset plads.

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

{% include child-components.html parent='Drop-down' %}
