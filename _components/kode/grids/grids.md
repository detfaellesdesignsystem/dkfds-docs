---
permalink: "/kode/grid/"
title: Grid
layout: styleguide
type: component
category: Kode_category
subcategory: Kode
description: "Sådan bruger du grid med FDS."
tags: 
lead: Det fælles designsystem benytter et simpelt mobile-first flexbox grid til opbygning af sider. Grid-systemet er et standard 12-kolonne system med fem responsive breakpoints.
anchor: true
subnav:
- text: Indstillinger
  href: '#indstillinger'
- text: Responsive klasser
  href: '#responsive-klasser'
- text: Auto og Fill kolonner
  href: '#auto-og-fill-kolonner'
- text: Rækkefølge
  href: '#rækkefølge'
- text: Hjælpeklasser
  href: '#hjælpeklasser'
- text: SASS variabler
  href: '#sass-variabler-i-designsystemet'
---
{% include code/preview-iframe.html component="grid-simple" classes="px-4" %}

Grid-systemet bruger containere, rækker og kolonner til at opbygge sider. Grid-systemet bruger <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes" class="icon-link">flexbox<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a> og er responsivt. Nedenfor kan du se eksempler på brugen af grid-systemet.

## Installation

### HTML Struktur

{% include code/syntax.html component="grid-simple" %}


{% include child-components.html parent='Grid' %}
