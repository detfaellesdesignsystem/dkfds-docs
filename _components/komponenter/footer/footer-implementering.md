---
permalink: "/komponenter/footer/implementering/"
guidelinelink: "/komponenter/footer/guidelines/"
redirect_from:
- "/kode/komponenter/footers/"
- "/kode/komponenter/footer/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Footer
lead: Du kan bruge en footer til at guide brugere, som når til sidens bund, videre.
previewimage: "footer-simple"
previewimageTitle: "Eksempel på footer komponent"
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
description: "Dokumentation på implementering af footer."
tags:
---

## Eksempler og retningslinjer

{:.nobullet-list}
- <a href="/komponenter/footer/#retningslinjer">Retningslinjer</a>
- <a href="/komponenter/footer/">Eksempler</a>

## Installation

### HTML Struktur

{% include code/syntax.html component="footer-simple" copybutton=true %}

Ovenstående indsættes i bunden af siden, under `<main>`.

### Opsætning

#### Én række
Man kan indsætte en vandret liste, der er defineret med klasserne `unstyled-list inline-list`.

#### Kolonner

Man kan indsætte et <a href="/kode/grid/">grid</a> med 4 kolonner. Man behøver ikke indsætte indhold i alle kolonner.

<a href="/komponenter/footer/#tre-kolonner">Se eksempler på forskellige sammensætninger</a>.

### Links

Links i footer defineres med klassen `function-link` på `<a>`.

Hvis man ved tryk på et link i footeren forlader selvbetjeningsløsningen bør dette indikeres ved brug af et {% include links/internal-links.html linktext="eksternt link" %}.

Yderligere bør brugeren oplyses om, at de nu forlader løsningen, og at eventuelt indtastet data kan blive tabt. Evt. ved brug af en almindelig JavaScript alert.

## Varianter

{:#tre-kolonner}
### Tre kolonner

{% include code/syntax.html component="footer-three-columns" link=true copybutton=true %}

{:#fire-kolonner}
### Fire kolonner
{% include code/syntax.html component="footer-four-columns" link=true copybutton=true %}

{:#kompleks}
### Kompleks
{% include code/syntax.html component="footer-complex" link=true copybutton=true %}

{:#logo}
### Logo
{% include code/syntax.html component="footer-logo" link=true copybutton=true %}
