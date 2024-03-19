---
permalink: "/komponenter/sprogvaelger/implementering/"
guidelinelink: "/komponenter/sprogvaelger/guidelines/"
redirect_from:
- "/kode/komponenter/sprogvaegler/"
- "/kode/komponenter/sprogvaelger/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Sprogvælger
lead: En sprogvælger bruges hvis løsningen udbydes på mere end et sprog. Den giver
  brugeren mulighed for at vælge et andet sprog end løsningens standardsprog.
previewimage: "language-switcher"
previewimageTitle: "Eksempel på sprogvælger"
anchor: true
subnav:
- text: Installation
  href: '#installation'
- text: Sprogvælger med tooltip
  href: '#sprogvaelger-med-tooltip'
description: "Dokumentation på implementering af sprogvælger."
tags: 
---

{:#installation}
## Installation

### HTML Struktur

{% include code/syntax.html component="language-switcher" copybutton=true %}

<div class="alert alert-warning" role="alert">
    <div class="alert-body">
        <p class="alert-text">Bemærk, at man i løsningen selv står for funktionaliteten i denne komponent.</p>
    </div>
</div>

Sprogvælgeren indsættes nederst i footeren. Se {% include links/internal-link.html linktext='eksempelløsningen "Sagsoversigt"' %} for placering i koden.

Hvert sprog tilføjes i listen på original sproget og med den tilsvarende landekode i `lang` attributten.

Bemærk aria-labels i koden, hvor der vil være tekst og formuleringer der skal tilpasses for hvert sprog man kan vælge.

{:#sprogvaelger-med-tooltip}
## Sprogvælger med tooltip

{% include code/syntax.html component="language-switcher-tooltip" link=true copybutton=true %}

For mere information se {% include links/component-code-link.html linktext="implementering af tooltip" %}.
