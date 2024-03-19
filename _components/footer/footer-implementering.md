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
lead: Footeren markerer enden på siden og indeholder informationer, som guider brugeren videre.
previewimage: "footer-simple"
previewimageTitle: "Eksempel på footer komponent"
anchor: true
subnav:
- text: Installation
  href: '#installation'
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

{:#installation}
## Installation

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

{:#tre-kolonner}
## Tre kolonner

{% include code/syntax.html component="footer-three-columns" link=true copybutton=true %}

{:#fire-kolonner}
## Fire kolonner
{% include code/syntax.html component="footer-four-columns" link=true copybutton=true %}

{:#kompleks}
## Kompleks
{% include code/syntax.html component="footer-complex" link=true copybutton=true %}

{:#logo}
## Logo
{% include code/syntax.html component="footer-logo" link=true copybutton=true %}
