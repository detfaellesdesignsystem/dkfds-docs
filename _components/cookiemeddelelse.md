---
permalink: "/komponenter/cookiemeddelelse/"
redirect_from:
- "/kode/komponenter/cookiemeddelelse/"
layout: styleguide
category: komponenter_menu
subcategory: Komponenter
title: Cookiemeddelelse
lead: Anvender din selvbetjeningsløsning cookies til andet end teknisk nødvendige
  formål, skal brugeren vises en cookiemeddelelse.
description: Cookiemeddelelsen vises midt på siden, og blokerer indhold indtil man
  har taget stilling til brug af cookies.
tags:
tabs: "Retningslinjer, kode, web component"
difference_warning: true
---

{% include tabs.html guidelines=true code=true web_component=true %}

{% include code/preview-image.html component="cookie-message" title="Eksempel på cookiemeddelelse" classes="intro-example" %}

{% include anchorlinks.html guidelines="Cookiemeddelelse" code="Cookiemeddelelse_Kode" classes="hide-code" webcomponent="Cookiemeddelelse_Web_Component" %}

<!--split-->

## Sådan bruges komponenten {#{% include create-id.html heading="Sådan bruges komponenten" %}}

### Anvendes til {#{% include create-id.html heading="Anvendes til" %}}

Brug cookiemeddelelsen til at få brugerens accept af de cookies du sætter i din løsning ud over de funktionelt nødvendige.

### Anvendes ikke til {#{% include create-id.html heading="Anvendes ikke til" %}}

Du behøver ikke vise en cookiemeddelelse, hvis din løsning kun sætter funktionelt nødvendige cookies.

### Vejledning {#{% include create-id.html heading="Vejledning" %}}

Det Fælles Designsystem anviser kun styling for cookiemeddelelsen, ikke den tekniske implementering af cookiemeddelelsen.

Du skal selv tilpasse indholdet i meddelelsen, så den overholder gældende lovgivning og stemmer overens med din løsnings specifikke anvendelse af cookies.

{% include dos-donts-box.html component="cookie-message-dos-donts" %}

## Referencer {#{% include create-id.html heading="Referencer" %}}

{:.nobullet-list}
- {% include links/external-link.html linktext="Vitaly Friedman: Privacy UX: Better Cookie Consent Experiences (2019)" %}
- {% include links/external-link.html linktext="Therese Fessenden: Modal & Nonmodal Dialogs: When (& When Not) to Use Them (2017)" %}
- {% include links/external-link.html linktext="Læs om cookies på Digitaliseringsstyrelsens hjemmeside" %}
- {% include links/external-link.html linktext="Cookiebekendtgørelsen" %}

<!--split-->

## Installation {#{% include create-id.html heading="Installation" append="-kode" %}}

### HTML Struktur {#{% include create-id.html heading="HTML Struktur" append="-kode" %}}

{% include code/syntax.html component="cookie-message" copybutton=true %}

Koden indsættes under body og før header. Gør man brug af {% include links/component-guideline-link.html linktext="Gå til sidens indhold" %}, skal denne indsættes efter cookiemeddelelsen.

Bemærk at DKFDS på nuværende tidspunkt kun leverer HTML og CSS til denne komponent. Funktionaliteten skal man derfor selv håndtere.

Cookies brugt til statistik må ikke sættes, før man aktivt har accepteret dette.

<!--split-->

{% include web-component-shared-text/web-components-beta.html %}

{% include containers-for-code-and-examples/top-example-and-show-code-in-tabs.html example="cookie-default" subheading_tag="h2" collapsable=false %}

## Om denne komponent {#{% include create-id.html heading="Om denne komponent" append="-webcomponent" %}}

Cookiemeddelelsen anvender `fds-modal`, men er ikke selv en Web Component.

## Varianter {#{% include create-id.html heading="Varianter" append="-webcomponent" %}}

### Flere end to typer cookies {#{% include create-id.html heading="Flere end to typer cookies" append="-webcomponent" %}}

{% include containers-for-code-and-examples/top-example-and-show-code-in-tabs.html example="cookie-many-options" heading_tag="h4" subheading_tag="h5" %}

## Konfiguration {#{% include create-id.html heading="Konfiguration" append="-webcomponent" %}}

Se dokumentationen for {% include links/component-guideline-link.html linktext="modaler" %} for konfiguration. 

Bemærk, at cookiemeddelelser bruger `dismissible="false"` for at tvinge brugeren til at træffe et valg. `<dialog>` skal indeholde `<div class="scrollable-area has-fade">` samt `<div class="fixed-area">` for at holde knapperne synlige.

Hvis cookiemeddelelsen indeholder et logo, er det op til løsningen selv at sætte en passende højde og bredde for dette. Giv logoet en passende alt-tekst, så det også er muligt for skærmlæserbrugere at vide, hvem der står bag selvbetjeningsløsningen.

Husk at teste din cookiemeddelelse, så du sikrer dig, at din styling ikke skjuler elementer eller fokusstreger under de fikserede knapper.