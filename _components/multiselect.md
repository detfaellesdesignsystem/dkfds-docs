---
permalink: "/komponenter/multiselect/"
layout: styleguide
category: komponenter_menu
subcategory: Komponenter
title: Multiselect
lead: "Multiselect gør det muligt for brugeren at vælge flere elementer i samme dropdown."
description: "Multiselect gør det muligt for brugeren at vælge flere elementer i samme dropdown."
tags:
- "multiselect"
tabs: "Retningslinjer, web component"
web_compponent_warning: true
---

{% include tabs.html guidelines=true web_component=true %}

{% include code/preview-box.html component="multiselect" title="Eksempel på multiselect" classes="intro-example" %}

{% include anchorlinks.html guidelines="Multiselect" webcomponent="Multiselect_Web_Component" %}

<!--split-->

## Sådan bruges komponenten {#{% include create-id.html heading="Sådan bruges komponenten" %}}

### Anvendes til {#{% include create-id.html heading="Anvendes til" %}}

Multiselect anvendes til løsninger, hvor brugeren kan vælge mere end én mulighed blandt syv eller flere muligheder.

### Anvendes ikke til {#{% include create-id.html heading="Anvendes ikke til" %}}

Anvend ikke multiselect til løsninger, hvis brugeren har under syv muligheder at vælge imellem. Anvend da i stedet {% include links/component-guideline-link.html linktext="tjekbokse" %}.

Anvend ikke multiselect, hvis brugeren kun kan vælge én mulighed. Anvend da i stedet {% include links/component-guideline-link.html linktext="dropdown" %} eller {% include links/component-guideline-link.html linktext="radioknapper" %}.

### Vejledning {#{% include create-id.html heading="Vejledning" %}}

En multiselect dropdown er en avanceret funktion, der bør anvendes i meget begrænset omfang. Overvej om du kan tilbyde en bedre og mere overskuelig løsning såsom tjekbokse.

Formulér valgmulighederne så kort og præcist som muligt. Lange valgmuligheder vil gå i flere linjer, hvilket er mindre overskueligt for brugerne. 

Sortér valgmulighederne på en måde, der giver mening for brugerne for netop den type data. Hvis brugerne leder efter en bestemt mulighed, de kender på forhånd i en lang liste, vil alfabetisk sortering som regel være den bedste løsning. I andre tilfælde og i kortere lister kan det være bedre at sortere efter andre parametre såsom indholdmæssige grupperinger, hyppighed eller størrelse. En brugertest vil afgøre, om den valgte sortering understøtter brugeroplevelsen.

Sæt teksten “Vælg en eller flere” i feltet, når der ikke er foretaget et valg. Hvis der er krav om at vælge mere end én, skriv da “Vælg flere” og supplér feltet med en hjælpetekst, der angiver, hvor mange valg brugeren skal træffe.

### Fejlmeddelelse {#{% include create-id.html heading="Fejlmeddelelse" %}}

Læs mere om korrekt brug af {% include links/component-guideline-link.html linktext="fejlmeddelelser" %} og deres formuleringer.

Når der vises en fejlmeddelelse, vis da også {% include links/component-guideline-link.html linktext="fejlopsummering" %}.

{% include code/preview-box.html component="multiselect-error" title="Eksempel på multiselect med fejlmeddelelse" %}

## Varianter {#{% include create-id.html heading="Varianter" %}}

### Multiselect med "vælg alle" {#{% include create-id.html heading="Multiselect med vælg alle" %}}

Tilbyd funktionen “vælg alle”, når det er sandsynligt, at mange brugere vil vælge alle eller størstedelen af mulighederne i listen. De fleste multiselect vil ikke behøve denne funktion.

{% include code/preview-box.html component="multiselect-select-all" title="Eksempel på multiselect med vælg alle" %}

## Referencer {#{% include create-id.html heading="Referencer" %}}

{:.nobullet-list}
- {% include links/external-link.html linktext="US Web Design System (USWDS): Dropdown" %}
- {% include links/external-link.html linktext="Vitaly Friedman: Combobox vs. Multiselect vs. Listbox: How To Choose The Right One (2026)" %}

<!--split-->

{% include web-component-shared-text/web-components-beta.html %}

{% include containers-for-code-and-examples/top-example-and-show-code-in-box.html example="fds-multiselect" subheading_tag="h2" collapsable=false %}

## Om denne komponent {#{% include create-id.html heading="Om denne komponent" append="-webcomponent" %}}

{% include web-component-shared-text/intro-shadow-dom.html %}

## Varianter {#{% include create-id.html heading="Varianter" append="-webcomponent" %}}

### Multiselect med "vælg alle" {#{% include create-id.html heading="Multiselect med vælg alle" append="-webcomponent" %}}

{% include containers-for-code-and-examples/top-example-and-show-code-in-box.html example="fds-multiselect-select-all" heading_tag="h4" subheading_tag="h5" %}

### Fejlmeddelelse {#{% include create-id.html heading="Fejlmeddelelse" append="-webcomponent" %}}

{% include containers-for-code-and-examples/top-example-and-show-code-in-box.html example="fds-multiselect-error" heading_tag="h4" subheading_tag="h5" %}

## Konfiguration {#{% include create-id.html heading="Konfiguration" append="-webcomponent" %}}

### fds-multiselect {#{% include create-id.html heading="fds-multiselect" append="-webcomponent" %}}

#### Attributter

{:.table .table--responsive-headers}
| Attribut             | Beskrivelse                                                                                                                                              |
|----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| name                 | Navnet på feltet, som anvendes ved formularindsendelse.                                                                                                  |
| sr-tags-label        | Angiver en skærmlæser-specifik label for gruppen af valgte muligheder (tags). Hvis intet er angivet, bruges "Valgte muligheder for `label`".              |
| show-required-status | Viser om multiselect er obligatorisk eller frivillig baseret på `required`-attributten. Indsæt en tekst i attributten for at overskrive default-teksten. |
| required             | Gør feltet obligatorisk ved formularindsendelse.                                                                                                         |
| disabled             | Deaktiverer multiselect-komponenten.                                                                                                                     |

#### Slots
  
{:.table .table--responsive-headers}
| Slot       | Beskrivelse                                                                                                                           |
|------------|---------------------------------------------------------------------------------------------------------------------------------------|
| label      | Brug et `span`-element med `slot="label"`, som indeholder multiselect-komponentens label. Elementet får et `id` hvis det ikke har et. |
| Unavngivet | `fds-multiselect-opener`-, `fds-multiselect-dialog`-, `fds-help-text`- og `fds-error-message`-elementer.                              |

### fds-multiselect-opener {#{% include create-id.html heading="fds-multiselect-opener" append="-webcomponent" %}}

#### Attributter

{:.table .table--responsive-headers}
| Attribut    | Beskrivelse                                                                             |
|-------------|------------------------------------------------------------------------------------------|
| placeholder | Angiver den tekst, der vises, når ingen muligheder er valgt. Default er "Vælg en eller flere". |

#### Funktioner

{:.table .table--responsive-headers}
| Funktion | Beskrivelse                              |
|----------|-------------------------------------------|
| open()   | Åbner dialogen med valgmuligheder.         |
| close()  | Lukker dialogen med valgmuligheder.        |
| toggle() | Skifter mellem åben og lukket tilstand.    |

#### Events

{:.table .table--responsive-headers}
| Event                            | Beskrivelse                              |
|-----------------------------------|-------------------------------------------|
| fds-multiselect-opener-expanded  | Udløses når dialogen åbnes.               |
| fds-multiselect-opener-collapsed | Udløses når dialogen lukkes.              |

### fds-multiselect-dialog {#{% include create-id.html heading="fds-multiselect-dialog" append="-webcomponent" %}}

#### Attributter

{:.table .table--responsive-headers}
| Attribut   | Beskrivelse                                                                                               |
|------------|------------------------------------------------------------------------------------------------------------|
| sr-heading | Angiver en skærmlæser-specifik overskrift for dialogen. Default er "Vælg en eller flere muligheder".       |

#### Slots

{:.table .table--responsive-headers}
| Slot       | Beskrivelse                              |
|------------|--------------------------------------------|
| Unavngivet | `fds-multiselect-options`-elementet.        |

### fds-multiselect-options {#{% include create-id.html heading="fds-multiselect-options" append="-webcomponent" %}}

#### Slots

{:.table .table--responsive-headers}
| Slot       | Beskrivelse                                                                |
|------------|------------------------------------------------------------------------------|
| Unavngivet | `fds-multiselect-select-all`- og `fds-multiselect-option`-elementer.         |

### fds-multiselect-option {#{% include create-id.html heading="fds-multiselect-option" append="-webcomponent" %}}

#### Attributter

{:.table .table--responsive-headers}
| Attribut         | Beskrivelse                                                                                           |
|-------------------|--------------------------------------------------------------------------------------------------------|
| value            | Angiver værdien for valgmuligheden. Hvis ikke angivet, bruges tekstindholdet som værdi.                    |
| default-selected | Markerer valgmuligheden som valgt, når komponenten initialiseres, og ved nulstilling af formularen.        |

#### Slots

{:.table .table--responsive-headers}
| Slot       | Beskrivelse               |
|------------|-----------------------------|
| Unavngivet | Tekst for valgmuligheden.      |

### fds-multiselect-select-all {#{% include create-id.html heading="fds-multiselect-select-all" append="-webcomponent" %}}

#### Slots

{:.table .table--responsive-headers}
| Slot       | Beskrivelse        |
|------------|----------------------|
| Unavngivet | Tekst for "vælg alle"-muligheden. |

### fds-help-text {#{% include create-id.html heading="fds-help-text" append="-webcomponent" %}}

{% include web-component-shared-text/fds-help-text.html %}

### fds-error-message {#{% include create-id.html heading="fds-error-message" append="-webcomponent" %}}

{% include web-component-shared-text/fds-error.html %}