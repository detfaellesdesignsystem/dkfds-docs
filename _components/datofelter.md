---
permalink: "/komponenter/datofelter/"
redirect_from:
- "/komponenter/dato-felt/"
- "/kode/komponenter/dato-felt/"
- "/kode/komponenter/datofelter/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Datofelter
lead: Tre separate felter for dato, måned og år er den nemmeste måde for brugeren at indskrive en dato.
description: Brug datofelter for datoer, der er velkendte for brugeren (fx fødselsdato).
tags: 
tabs: "Retningslinjer, kode"
---

{% include tabs.html guidelines=true code=true %}

{% include code/preview-box.html component="date-input" title="Eksempel på datofelter" classes="intro-example" %}

{% include anchorlinks.html guidelines="Datofelter" code="Datofelter_Kode" %}

<!--split-->

## Sådan bruges komponenten {#{% include create-id.html heading="Sådan bruges komponenten" %}}

### Anvendes til

Sætter brugeren i stand til at tilføje struktureret datoinformation.

### Anvendes ikke til

Når der er specifikt udvalgte datoer at vælge imellem som fx ved bookninger og planlægning med specifikke åbne og lukkede datoer.

### Vejledning

Placér felterne i den rækkefølge for datoform, der anvendes i Danmark, det vil sige dag, måned og år.

Tilføj hjælpetekst, der viser formatet af datoen man efterspørger.

Ofte kan datofelter til indtastning være nemmere at anvende - og gøre tilgængeligt - end en {% include links/component-guideline-link.html linktext="datovælger" %} (date picker) funktion.

{% include dos-donts-box.html component="date-dos-donts" %}

#### Fejlmeddelelse {#{% include create-id.html heading="Fejlmeddelelse" %}}

Læs mere om korrekt brug af {% include links/component-guideline-link.html linktext="fejlmeddelelser" %} og deres formuleringer.

Når der vises en fejlmeddelelse, vis da også {% include links/component-guideline-link.html linktext="fejlopsummering" %}.

{% include code/preview-box.html component="error-message-date" title="Eksempel på datofelter med fejlmeddelelse" %}

## Se komponenten i eksempelløsninger {#{% include create-id.html heading="Se komponenten i eksempelløsninger" %}}

{% include links/demo-link.html linktext="Trinformular til registrering: Tidligere registrering (vælg 'Ja')" returnID="eksempelloesninger" %}

## Referencer {#{% include create-id.html heading="Referencer" %}}

{:.nobullet-list}
- Adam Silver: Form Design Patterns (2018)
- {% include links/external-link.html linktext="Nick Babich: Date Picker Design Best Practices (2019)" %}
- Jessica Enders: Designing UX: Forms (2016)
- {% include links/external-link.html linktext="Angie Li: Date-Input Form Fields: UX Design Guidelines (2017)" %}
- {% include links/external-link.html linktext="GovUKs anbefalinger til datovælgeren, samt for fejlmeddelelser til datoer" %}
- {% include links/external-link.html linktext="GovUK om at spørge brugeren om datoer" %}
- {% include links/external-link.html linktext="USWDS om datovælgeren" %}
- {% include links/external-link.html linktext="GovUK om fejlmeddelelser generelt" %}

<!--split-->

## Installation {#{% include create-id.html heading="Installation" append="-kode" %}}

### HTML Struktur

{% include code/syntax.html component="date-input" copybutton=true %}

- Anvend ikke JavaScript til automatisk at flytte fokus fra felt til felt, da det gør det svært for tastatur-brugere at navigere i formularen.
- Datofelter-komponenten består af 3 inputfelter.

## Fejlmeddelelse {#{% include create-id.html heading="Fejlmeddelelse" append="-kode" %}}

Læs mere om korrekt brug af {% include links/component-guideline-link.html linktext="fejlmeddelelser" %} og {% include links/component-code-link.html linktext="fejlmeddelelser's implementering med datofelter." %}

Når der vises en fejlmeddelelse, vis da også {% include links/component-code-link.html linktext="en fejlopsummering" %}.