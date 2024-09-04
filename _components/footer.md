---
permalink: "/komponenter/footer/"
redirect_from:
- "/komponenter/footers/"
- "/kode/komponenter/footers/"
- "/kode/komponenter/footer/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Footer
lead: Footeren markerer enden på siden og indeholder informationer, som guider brugeren videre.
description: "Du kan bruge en footer til at guide brugere, som når til sidens bund, videre."
tags:
tabs: "Retningslinjer, kode"
---

{% include tabs.html guidelines=true code=true %}

{% include code/preview-image.html component="footer-simple" title="Eksempel på footer" classes="intro-example" %}

{% include anchorlinks.html guidelines="Footer" code="Footer_Kode" %}

<!--split-->

## Sådan bruges komponenten {#{% include create-id.html heading="Sådan bruges komponenten" %}}

### Vejledning

Footeren fungerer som sidens afslutning og indeholder altid ansvarlig myndighed, herunder support- og kontaktinformationer, samt tilgængelighedserklæring og cookieoplysninger. Footeren kan også anvendes til at sende brugere videre ved at linke ud af selvbetjeningsløsningen.

{% include dos-donts-box.html component="footer-dos-donts" %}

## Varianter {#{% include create-id.html heading="Varianter" %}}

### Tre kolonner {#{% include create-id.html heading="Tre kolonner" %}}

{% include code/preview-image.html component="footer-three-columns" code="/komponenter/footer/#tre-kolonner-kode" %}

### Fire kolonner {#{% include create-id.html heading="Fire kolonner" %}}

{% include code/preview-image.html component="footer-four-columns" code="/komponenter/footer/#fire-kolonner-kode" %}

### Kompleks {#{% include create-id.html heading="Kompleks" %}}

{% include code/preview-image.html component="footer-complex" code="/komponenter/footer/#kompleks-kode" %}

### Logo {#{% include create-id.html heading="Logo" %}}

{% include code/preview-image.html component="footer-logo" code="/komponenter/footer/#logo-kode" %}

## Se komponenten i eksempelløsninger {#{% include create-id.html heading="Se komponenten i eksempelløsninger" %}}

Se hvordan komponenten bruges i de forskellige {% include links/internal-link.html linktext="eksempler på selvbetjeningsløsninger" %}.

## Referencer {#{% include create-id.html heading="Referencer" %}}

{:.nobullet-list}
- {% include links/external-link.html linktext="Therese Fessenden: Footers 101: Design Patterns and When to Use Each (2019)" %}
- {% include links/external-link.html linktext="Priscilla Esser: How to Implement Sitemap Footers to Keep Users Going (2018)" %}

<!--split-->

## Installation {#{% include create-id.html heading="Installation" append="-kode" %}}

### HTML Struktur

{% include code/syntax.html component="footer-simple" copybutton=true %}

Ovenstående indsættes i bunden af siden, under `<main>`.

### Opsætning

#### Én række

Man kan indsætte en vandret liste, der er defineret med klasserne `unstyled-list inline-list`.

#### Kolonner

Man kan indsætte et {% include links/internal-link.html linktext="grid" %} med 4 kolonner. Man behøver ikke indsætte indhold i alle kolonner.

{% include links/component-guideline-link.html linktext="Se eksempler på forskellige sammensætninger" %}.

### Links

Links i footer defineres med klassen `function-link` på `<a>`.

Hvis man ved tryk på et link i footeren forlader selvbetjeningsløsningen bør dette indikeres ved brug af et {% include links/internal-link.html linktext="eksternt link" %}.

Yderligere bør brugeren oplyses om, at de nu forlader løsningen, og at eventuelt indtastet data kan blive tabt. Evt. ved brug af en almindelig JavaScript alert.

## Tre kolonner {#{% include create-id.html heading="Tre kolonner" append="-kode" %}}

{% include code/syntax.html component="footer-three-columns" link=true copybutton=true guidelines="/komponenter/footer/#tre-kolonner" %}

## Fire kolonner {#{% include create-id.html heading="Fire kolonner" append="-kode" %}}

{% include code/syntax.html component="footer-four-columns" link=true copybutton=true guidelines="/komponenter/footer/#fire-kolonner" %}

## Kompleks {#{% include create-id.html heading="Kompleks" append="-kode" %}}

{% include code/syntax.html component="footer-complex" link=true copybutton=true guidelines="/komponenter/footer/#kompleks" %}

## Logo {#{% include create-id.html heading="Logo" append="-kode" %}}

{% include code/syntax.html component="footer-logo" link=true copybutton=true guidelines="/komponenter/footer/#logo" %}
