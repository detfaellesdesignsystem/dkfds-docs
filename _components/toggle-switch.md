---
permalink: "/komponenter/toggle/"
redirect_from:
- "/kode/komponenter/toggle/"
layout: styleguide
category: komponenter_menu
subcategory: Komponenter
title: Toggle switch
lead: "En toggle switch er en digital tænd/sluk-knap. Til forskel fra en radioknap eller tjekboks træder valget i kraft i det øjeblik brugerne interagerer med komponenten."
description:
tags:
- "switch"
tabs: "Retningslinjer, kode, web component"
---

{% include tabs.html guidelines=true code=true web_component=true %}

{% include code/preview-box.html component="toggle" title="Eksempel på toggle" classes="intro-example" %}

{% include anchorlinks.html guidelines="ToggleSwitch" code="ToggleSwitch_Kode" webcomponent="ToggleSwitch_Web_Component" classes="hide-guidelines hide-code" %}

<!--split-->

## Sådan bruges komponenten {#{% include create-id.html heading="Sådan bruges komponenten" %}}

### Anvendes til {#{% include create-id.html heading="Anvendes til" %}}

En toggle switch bruges til at slå en enkelt mulighed til eller fra med det samme. Brugerens valg træder altid i kraft, så snart der trykkes på switchen.

### Anvendes ikke til {#{% include create-id.html heading="Anvendes ikke til" %}}

En toggle switch anvendes ikke, hvis valget først træder i kraft efter klik på fx en gem-knap. Vælg i stedet radioknapper eller tjekbokse i de tilfælde.

### Vejledning {#{% include create-id.html heading="Vejledning" %}}

Sørg for at brugen af toggle switch implementeres konsekvent i en løsning.

Giv switchen en kort og præcis label, som placeres til venstre for toggle switchen. Afstanden mellem label og knap vurderes i den enkelte løsning afhængigt af kontekst, enhed og længden på teksten. Hvis samme side har mere end én toggle switch, placeres toggle switchene dog altid lige under hinanden, så knapperne visuelt står i en lige linje.

<!--split-->

## Installation {#{% include create-id.html heading="Installation" append="-kode" %}}

### HTML Struktur {#{% include create-id.html heading="HTML Struktur" append="-kode" %}}

{% include code/syntax.html component="toggle" copybutton=true %}

Bredden på toggle switches skal tilpasses til ens løsning fx med {% include links/internal-link.html linktext="hjælpeklasser (utilities)" %}. 

Brug `role="group"` for grupper af toggle switches og angiv en passende `aria-labelledby` (APG, Switch Pattern).

### Javascript {#{% include create-id.html heading="Javascript" append="-kode" %}}

Der medfølger ikke funktionalitet med denne komponent. Når der trykkes på switchen, skal man derfor selv - udover at implementere den ønskede funktionalitet - sørge for at skifte værdien i attributten `aria-checked` til `true`/`false`.

## Referencer {#{% include create-id.html heading="Referencer" append="-kode" %}}

{% include links/external-link.html linktext="ARIA Authoring Practices Guide (APG): Switch Pattern" %}

<!--split-->

{% include web-component-shared-text/web-components-beta.html %}

{% include containers-for-code-and-examples/top-example-and-show-code-in-tabs.html example="fds-toggle-switch" subheading_tag="h2" collapsable=false %}

## Om denne komponent {#{% include create-id.html heading="Om denne komponent" append="-webcomponent" %}}

{% include web-component-shared-text/intro-light-dom.html %}

## Konfiguration {#{% include create-id.html heading="Konfiguration" append="-webcomponent" %}}

### Attributter {#{% include create-id.html heading="Attributter" append="-webcomponent" %}}

{:.table .table--responsive-headers}
| Attribut        | Beskrivelse                                                                                         |
|-----------------|-----------------------------------------------------------------------------------------------------|
| state           | Afgør om toggle switch er slået til eller fra. Gyldige værdier er `on` og `off`. Default er `off`.  |
| label           | Label for toggle switch.                                                                            |
| disabled-switch | Gør komponentens knap inaktiv (sætter `disabled` på knappen).                                       |

### Funktioner {#{% include create-id.html heading="Funktioner" append="-webcomponent" %}}

{:.table .table--responsive-headers}
| Funktion | Beskrivelse                                      |
|----------|--------------------------------------------------|
| on()     | Slå toggle switch til.                           |
| off()    | Slå toggle switch fra.                           |
| toggle() | Skift mellem at slå toggle switch til eller fra. |

### Events {#{% include create-id.html heading="Events" append="-webcomponent" %}}

{:.table .table--responsive-headers}
| Event          | Beskrivelse                         |
|----------------|-------------------------------------|
| fds-toggle-on  | Udløses når toggle switch slås til. |
| fds-toggle-off | Udløses når toggle switch slås fra. |