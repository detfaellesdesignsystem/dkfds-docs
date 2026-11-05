---
permalink: "/komponenter/datofelter/"
redirect_from:
- "/komponenter/dato-felt/"
- "/kode/komponenter/dato-felt/"
- "/kode/komponenter/datofelter/"
layout: styleguide
category: komponenter_menu
subcategory: Komponenter
title: Datofelter
lead: Tre separate felter for dato, måned og år er den nemmeste måde for brugeren at indskrive en dato.
description: Brug datofelter for datoer, der er velkendte for brugeren (fx fødselsdato).
tags: 
tabs: "Retningslinjer, kode, web component"
---

{% include tabs.html guidelines=true code=true web_component=true %}

{% include code/preview-box.html component="date-input" title="Eksempel på datofelter" classes="intro-example" %}

{% include anchorlinks.html guidelines="Datofelter" code="Datofelter_Kode" webcomponent="Datofelter_Web_Component" %}

<!--split-->

## Sådan bruges komponenten {#{% include create-id.html heading="Sådan bruges komponenten" %}}

### Anvendes til {#{% include create-id.html heading="Anvendes til" %}}

Sætter brugeren i stand til at tilføje struktureret datoinformation.

### Anvendes ikke til {#{% include create-id.html heading="Anvendes ikke til" %}}

Når der er specifikt udvalgte datoer at vælge imellem som fx ved bookninger og planlægning med specifikke åbne og lukkede datoer.

### Vejledning {#{% include create-id.html heading="Vejledning" %}}

Placér felterne i den rækkefølge for datoform, der anvendes i Danmark, det vil sige dag, måned og år.

Tilføj hjælpetekst, der viser formatet af datoen man efterspørger.

Ofte kan datofelter til indtastning være nemmere at anvende - og gøre tilgængeligt - end en {% include links/component-guideline-link.html linktext="datovælger" %} (date picker) funktion.

{% include dos-donts-box.html component="date-dos-donts" %}

#### Fejlmeddelelse {#{% include create-id.html heading="Fejlmeddelelse" %}}

Læs mere om korrekt brug af {% include links/component-guideline-link.html linktext="fejlmeddelelser" %} og deres formuleringer.

Når der vises en fejlmeddelelse, vis da også {% include links/component-guideline-link.html linktext="fejlopsummering" %}.

{% include code/preview-box.html component="error-message-date" title="Eksempel på datofelter med fejlmeddelelse" %}

## Se komponenten i eksempelløsninger {#{% include create-id.html heading="Se komponenten i eksempelløsninger" %}}

{% include links/demo-link.html linktext="Trinformular til registrering: Tidligere registrering (vælg 'Ja')" %}

## Referencer {#{% include create-id.html heading="Referencer" %}}

{:.nobullet-list}
- Adam Silver: Form Design Patterns (2018)
- {% include links/external-link.html linktext="Nick Babich: Date Picker Design Best Practices (2019)" %}
- Jessica Enders: Designing UX: Forms (2016)
- {% include links/external-link.html linktext="Angie Li: Date-Input Form Fields: UX Design Guidelines (2017)" %}
- {% include links/external-link.html linktext="GovUKs anbefalinger til datovælgeren, samt for fejlmeddelelser til datoer" %}
- {% include links/external-link.html linktext="GovUK om at spørge brugeren om datoer" %}
- {% include links/external-link.html linktext="GovUK om fejlmeddelelser generelt" %}

<!--split-->

## Installation {#{% include create-id.html heading="Installation" append="-kode" %}}

### HTML Struktur {#{% include create-id.html heading="HTML Struktur" append="-kode" %}}

{% include code/syntax.html component="date-input" copybutton=true %}

- Anvend ikke JavaScript til automatisk at flytte fokus fra felt til felt, da det gør det svært for tastatur-brugere at navigere i formularen.
- Datofelter-komponenten består af 3 inputfelter.

## Fejlmeddelelse {#{% include create-id.html heading="Fejlmeddelelse" append="-kode" %}}

Læs mere om korrekt brug af {% include links/component-guideline-link.html linktext="fejlmeddelelser" %} og {% include links/component-code-link.html linktext="fejlmeddelelser's implementering med datofelter." %}

Når der vises en fejlmeddelelse, vis da også {% include links/component-code-link.html linktext="en fejlopsummering" %}.

<!--split-->

{% include web-component-shared-text/web-components-beta.html %}

{% include containers-for-code-and-examples/top-example-and-show-code-in-tabs.html example="fds-date-input" subheading_tag="h2" collapsable=false %}

## Om denne komponent {#{% include create-id.html heading="Om denne komponent" append="-webcomponent" %}}

{% include web-component-shared-text/intro-light-dom.html %}

## Varianter {#{% include create-id.html heading="Varianter" append="-webcomponent" %}}

### Fejl {#{% include create-id.html heading="Fejl" append="-webcomponent" %}}

{% include containers-for-code-and-examples/top-example-and-show-code-in-tabs.html example="fds-date-input-error" heading_tag="h4" subheading_tag="h5" %}

### Hjælpetekst {#{% include create-id.html heading="Hjælpetekst" append="-webcomponent" %}}

{% include containers-for-code-and-examples/top-example-and-show-code-in-tabs.html example="fds-date-input-help" heading_tag="h4" subheading_tag="h5" %}

### Obligatoriske og frivillige inputfelter {#{% include create-id.html heading="Obligatoriske og frivillige inputfelter" append="-webcomponent" %}}

{% include containers-for-code-and-examples/top-example-and-show-code-in-tabs.html example="fds-date-input-required" heading_tag="h4" subheading_tag="h5" %}

### Deaktiveret {#{% include create-id.html heading="Deaktiveret" append="-webcomponent" %}}

{% include containers-for-code-and-examples/top-example-and-show-code-in-tabs.html example="fds-date-input-disabled" heading_tag="h4" subheading_tag="h5" %}

## Konfiguration {#{% include create-id.html heading="Konfiguration" append="-webcomponent" %}}

### fds-date-input {#{% include create-id.html heading="fds-date-input" append="-webcomponent" %}}

#### Attributter

{:.table .table--responsive-headers}
| Attribut             | Beskrivelse                                                                                                                |
|----------------------|------------------------------------------------------------------------------------------------------------------------------|
| show-required-status | Viser om datofelterne er obligatoriske eller frivillige baseret på `required`-attributten. Indsæt en tekst i attributten for at overskrive default-teksten. |
| legend               | Overskriv teksten i `fieldset`-elementets `legend`. Default er `Indtast dato`.                                            |
| input-id             | Tilføj et fælles ID-suffiks til datofelterne. Hvert felt får ID'et `dag-/måned-/år-` efterfulgt af den angivne værdi.      |
| input-readonly       | Sæt til `true` for at gøre alle datofelter read-only.                                                                     |
| input-required       | Sæt til `true` for at gøre alle datofelter obligatoriske.                                                                 |

### fds-help-text {#{% include create-id.html heading="fds-help-text" append="-webcomponent" %}}

{% include web-component-shared-text/fds-help-text.html %}

### fds-error-message {#{% include create-id.html heading="fds-error-message" append="-webcomponent" %}}

{% include web-component-shared-text/fds-error.html %}
