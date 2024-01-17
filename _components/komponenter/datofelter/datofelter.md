---
permalink: "/komponenter/datofelter/guidelines/"
redirect_from:
- "/komponenter/dato-felt/"
- "/komponenter/datofelter/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Datofelter
lead: Tre separate felter for dato, måned og år er den nemmeste måde for brugeren at indskrive en dato.
component: "date-input"
componentTitle: "Eksempel på datofelter"
componentLink: true
anchor: true
subnav:
- text: Sådan bruges komponenten
  href: "#retningslinjer"
- text: Se komponenten i eksempelløsninger
  href: "#eksempelloesninger"
- text: Referencer
  href: "#ref"
description: Brug datofelter for datoer, der er velkendte for brugeren (fx fødselsdato).
tags: 
---

{:#retningslinjer}
## Sådan bruges komponenten

### Anvendes til

Sætter brugeren i stand til at tilføje struktureret datoinformation.

### Anvendes ikke til

Når der er specifikt udvalgte datoer at vælge imellem som fx ved bookninger og planlægning med specifikke åbne og lukkede datoer.

### Vejledning

Placér felterne i den rækkefølge for datoform, der anvendes i Danmark, det vil sige dag, måned og år.

Tilføj hjælpetekst, der viser formatet af datoen man efterspørger.

Ofte kan datofelter til indtastning være nemmere at anvende - og gøre tilgængeligt - end en {% include links/component-guideline-link.html linktext="datovælger" %} (date picker) funktion.

{% include dos-donts-box.html component="date-dos-donts" title="Datofelter do's and don'ts" %}

{:#fejlmeddelelse}
#### Fejlmeddelelse

{% include links/component-guideline-link.html linktext="Læs mere om korrekt brug af fejlmeddelelser og deres formuleringer." %}

Når der vises en fejlmeddelelse, vis da også {% include links/component-guideline-link.html linktext="fejlopsummering" %}.

{% include code/preview-box.html component="error-message-date" title="Eksempel på datofelter med fejlmeddelelse" %}

{:#eksempelloesninger}
## Se komponenten i eksempelløsninger

{% include links/demo-link.html linktext="Trinformular til registrering: Tidligere registrering (vælg 'Ja')" returnID="eksempelloesninger" %}

{:#ref}
## Referencer

{:.nobullet-list}
- Adam Silver: Form Design Patterns (2018)
- {% include links/external-link.html linktext="Nick Babich: Date Picker Design Best Practices (2019)" %}
- Jessica Enders: Designing UX: Forms (2016)
- {% include links/external-link.html linktext="Angie Li: Date-Input Form Fields: UX Design Guidelines (2017)" %}
- {% include links/external-link.html linktext="GovUKs anbefalinger til datovælgeren, samt for fejlmeddelelser til datoer" %}
- {% include links/external-link.html linktext="GovUK om at spørge brugeren om datoer" %}
- {% include links/external-link.html linktext="USWDS om datovælgeren" %}
- {% include links/external-link.html linktext="GovUK om fejlmeddelelser generelt" %}

