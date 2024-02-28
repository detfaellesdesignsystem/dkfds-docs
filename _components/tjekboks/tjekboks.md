---
permalink: "/komponenter/tjekboks/guidelines/"
redirect_from:
- "/komponenter/tjekboks/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Tjekboks (Checkbox)
lead: Tjekbokse lader brugeren vælge en eller flere muligheder.
component: "checkbox-large"
componentTitle: "Eksempel på tjekbokse"
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
description: "Tjekbokse giver brugeren mulighed for at vælge en eller flere værdier ud fra en synlig liste."
tags:
---

{:#retningslinjer}
## Sådan bruges komponenten

### Anvendes til

Tjekbokse giver brugeren mulighed for at vælge en eller flere værdier ud fra en synlig liste.

Når brugeren skal have overblik over sine mulige valg.

Når brugeren skal be- eller afkræfte et valg, fx ”Ja/Nej” (i det tilfælde en enkelt tjekboks), eller slå noget til eller fra (toggle).

Når listen over mulige valg kan være på en mobilvisning.

### Anvendes ikke til

Når der er for mange valg til at give mening på en mobilvisning.

Når brugeren kun kan vælge én værdi. Her skal du i stedet anvende radioknapper.

### Vejledning

Brugeren skal kunne tappe eller klikke på tjekboksen eller dens label for at vælge eller fravælge dens værdi.

Du bør opstille lister med tjekbokse i lodret linje af hensyn til brugerens læseretning.

Anvend et positivt sprog til værdierne. I stedet for fx ”Jeg vil ikke modtage bekræftelse på email” bør du skrive ”Jeg vil gerne modtage bekræftelse på email”.

Sørg for at der er tilstrækkelig luft omkring den enkelte tjekboks, så den er brugbar på touchskærme.

Hvis du giver brugeren en liste med tjekbokse, så gør det tydeligt gennem enten label eller hjælpetekst, hvor mange tjekbokse det forventes, at de vælger.

{% include dos-donts-box.html component="checkbox-dos-donts" title="Tjekboks do's and don'ts" %}

#### Fejlmeddelelse

{% include links/component-guideline-link.html linktext="Læs mere om korrekt brug af fejlmeddelelser og deres formuleringer." %}

Når der vises en fejlmeddelelse, vis da også {% include links/component-guideline-link.html linktext="fejlopsummering" %}.

{% include code/preview-box.html component="error-message-checkbox" title="Eksempel på tjekbokse med fejlmeddelelse" %}

{:#varianter}
## Varianter

{:#skjult-indhold-collapse}
### Skjult indhold (Collapse)

{% include code/preview-box.html component="checkbox-collapse" title="Eksempel på tjekboks med skjult indhold" %}

{:#eksempelloesninger}
## Se komponenten i eksempelløsninger

{:.nobullet-list}
- {% include links/demo-link.html linktext="Trinformular til registrering: Vælg personer" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Trinformular til registrering: Vælg noget mere" returnID="eksempelloesninger" %}

{:#ref}
## Referencer

{:.nobullet-list}
- ISO 9241-143: Forms (2012)
- {% include links/external-link.html linktext="Jakob Nielsen: Checkboxes vs. Radio Buttons (2004)" %}