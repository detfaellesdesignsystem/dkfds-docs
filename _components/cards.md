---
permalink: "/komponenter/cards/"
redirect_from:
- "/kode/komponenter/cards/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Cards
lead: Cards anvendes som en visuel afgrænsning af indhold eller interaktionselementer, der omhandler samme emne.
description: "Brug cards til at gruppere funktionalitet, der adskiller sig fra sidens øvrige indhold"
tags:
tabs: "Retningslinjer, kode"
---

{% include tabs.html guidelines=true code=true %}

{% include code/preview-box.html component="cards-full-width" title="Eksempel på card" classes="intro-example" %}

{% include anchorlinks.html guidelines="Cards" code="Cards_Kode" %}

<!--split-->

## Sådan bruges komponenten {#{% include create-id.html heading="Sådan bruges komponenten" %}}

### Anvendes til

Du kan bruge cards til at gruppere funktionalitet, der adskiller sig fra sidens øvrige indhold. Det kan fx være en afledt, men ikke direkte koblet ekstra funktion ift. sidens sammenhæng.

### Anvendes ikke til

Brug ikke cards til det primære indhold på en løsning, men derimod til indhold, der kan stå og forstås alene og fortsat være del af den samlede løsning.

Brug ikke cards udelukkende af visuelle hensyn, som placeholders for ornamental grafik eller indhold uden interaktion.

Cards er ikke en statusbesked.

### Vejledning

Cards skal tilbyde en enkel og fokuseret funktion. 

Cards er velegnede til interaktion med brugeren, men brug dem kun, når der tilbydes en ekstra funktionalitet af grupperet indhold.

Cards er velegnede til responsive løsninger.

Du kan godt indsætte flere cards på en side, men sørg for at de fremtræder roligt i sidens layout og ikke bryder brugerens naturlige aflæsning af siden.

Undgå lange tekster i cards.

Skriv kort og præcist i hvert card.

{% include dos-donts-box.html component="cards-dos-donts" title="Cards do's and don'ts" %}

## Varianter {#{% include create-id.html heading="Varianter" %}}

### Card med tredjedel bredde {#{% include create-id.html heading="Card med tredjedel bredde" %}}

{% include code/preview-box.html component="cards-third-width" title="Eksempel på cards i tre kolonner" %}

### Card med halv bredde {#{% include create-id.html heading="Card med halv bredde" %}}

{% include code/preview-box.html component="cards-half-width" title="Eksempel på cards i to kolonner" %}

### Cards med samme højde {#{% include create-id.html heading="Cards med samme højde" %}}

{% include code/preview-box.html component="cards-same-height" title="Eksempel på cards med samme højde" %}

## Se komponenten i eksempelløsninger {#{% include create-id.html heading="Se komponenten i eksempelløsninger" %}}

{:.nobullet-list}
- {% include links/demo-link.html linktext="Sagsoversigt: Find sag" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Dashboard" returnID="eksempelloesninger" %}

## Referencer {#{% include create-id.html heading="Referencer" %}}

{:.nobullet-list}
- {% include links/external-link.html linktext="Page Laubheimer: Cards: UI-Component Definition (2016)" %}
- {% include links/external-link.html linktext="Muneo Kitajima, Marilyn H Blackmon & Peter G Polson: A Comprehension-based Model of Web Navigation and Its Application to Web Usability Analysis (2000)" %}

<!--split-->

## Installation {#{% include create-id.html heading="Installation" append="-kode" %}}

### HTML Struktur

{% include code/syntax.html component="card" copybutton=true %}

Cards kan bestå af en header, et tekstområde, et indholdsområde og et aktionsområde, som i øvrigt kan ligge i en footer. Du kan frit sammensætte cards efter dit eget behov, men der er regler for, hvad du kan placere i de forskellige områder.

Sæt card til fuld højde ved at tilføje klassen `card-align-height` til elementet med klassen `card`.

### Områder

#### Header

Headeren defineres med klassen `card-header`, og indeholder en titel og en understøttende tekst.

Husk, at cards er en del af sidestrukturen, hvorfor overskrifter fortsat skal være semantisk korrekt. Hvis overskriften før cards er en h2, så bør `header-title` være h3.

- `header-titel` defineres som en semantisk korrekt overskrift.
- `subheader`

#### Tekstområde

Tekstområdet defineres med klassen `card-text`, og indeholder brødtekst, som er defineret som et `<p>` element.

#### Indholdsområde

Indholdsområdet er defineret med klassen `card-content`, og kan indeholde både brødtekst og illustrationer, som har hver deres `<div>` med hver deres class. 
- `content-text` indeholder brødtekst.
- `content` kan indeholde lige det du ønsker - fx illustrationer som billeder eller SVG.

#### Aktionsområde

Aktionsområdet er defineret med klassen `card-action` og kan indeholde knapper og links som har hver deres `<div>` med hver deres klasse.

- `action-buttons` kan indeholde knapper, og vil vise knapperne sidestillet.
- `action-links` kan indeholde en liste af links.

#### Footer

Footer bruges gerne i forbindelse med flere cards, som skal have samme højde, og hvor man har knapper eller links, der gerne skal flugte på tværs af cards.

Footer defineres med klassen `card-footer`.

## Card med tredjedel bredde {#{% include create-id.html heading="Card med tredjedel bredde" append="-kode" %}}

{% include code/syntax.html component="cards-third-width" link=true copybutton=true %}

## Card med halv bredde {#{% include create-id.html heading="Card med halv bredde" append="-kode" %}}

{% include code/syntax.html component="cards-half-width" link=true copybutton=true %}

## Cards med samme højde {#{% include create-id.html heading="Cards med samme højde" append="-kode" %}}

{% include code/syntax.html component="cards-same-height" link=true copybutton=true %}