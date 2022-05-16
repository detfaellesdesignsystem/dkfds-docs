---
permalink: /kode/komponenter/footer/
redirect_from:
- /kode/komponenter/footers/
parentlink: /kode/komponenter/
title: Footer
layout: styleguide
type: component
category: Kode_category
description: "Dokumentation på implementering af footer."
tags:
subcategory: Kode
anchor: true
subnav:
- text: Tre kolonner
  href: '#tre-kolonner'
- text: Fire kolonner
  href: '#fire-kolonner'
- text: Kompleks
  href: '#kompleks'
- text: Logo
  href: '#logo'
---

{% include code/preview-image.html component="footer-simple" alt="Billedet viser en simpel footer komponent på én række" title="Eksempel på footer komponent" %}

## Eksempler og retningslinjer

<a href="/komponenter/footer/">Eksempler</a>

## Installation

### HTML Struktur

{% include code/syntax.html component="footer-simple" %}

Ovenstående indsættes i bunden af siden, under `<main>`.

### Opsætning

#### Én række
Man kan indsætte en vandret liste, der er defineret med klasserne `unstyled-list inline-list`.

#### Kolonner

Man kan indsætte et <a href="/kode/grid/">grid</a> med 4 kolonner. Man behøver ikke indsætte indhold i alle kolonner.

<a href="/komponenter/footer/#tre-kolonner">Se eksempler på forskellige sammensætninger</a>.

### Links

Links i footer defineres med klassen `function-link` på `<a>`.

Hvis man ved tryk på et link i footeren forlader selvbetjeningsløsningen bør dette indikeres ved brug af et <a href="/design/typografi/links/#eksternt-link">eksternt link</a>.

Yderligere bør brugeren oplyses om, at de nu forlader løsningen, og at eventuelt indtastet data kan blive tabt. Evt. ved brug af en almindelig JavaScript alert.

## Varianter

{:#tre-kolonner}
### Tre kolonner

{% include code/syntax.html component="footer-three-columns" link="true" %}

{:#fire-kolonner}
### Fire kolonner
{% include code/syntax.html component="footer-four-columns" link="true" %}

{:#kompleks}
### Kompleks
{% include code/syntax.html component="footer-complex" link="true" %}

{:#logo}
### Logo
{% include code/syntax.html component="footer-logo" link="true" %}
