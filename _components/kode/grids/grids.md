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
- text: Ingen afstand mellem kolonner
  href: '#ingen-afstand-mellem-kolonner-ingen-gutter'
- text: Rækker med border
  href: '#rækker-med-border'
- text: Hjælpeklasser
  href: '#hjælpeklasser'
- text: SASS variabler
  href: '#sass-variabler-i-designsystemet'
---

Grid-systemet bruger containere, rækker og kolonner til at opbygge sider. Grid-systemet bruger <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes" class="icon-link">flexbox<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a> og er responsivt. Nedenfor kan du se eksempler på brugen af grid-systemet.

## Installation

### HTML Struktur
{% include code/preview-box-details.html component="grid-simple" title="Eksempel af grid" link=false detaillabel="for eksempel af grid " %}

{% include child-components.html parent='Grid' %}

<h2 id="sass-variabler-i-designsystemet" tabindex="-1">Sass variabler i designsystemet</h2>

{% highlight scss %}
$grid-sm: 576px;
$grid-md: 768px;
$grid-lg: 992px;
$grid-xl: 1200px;

$grid-breakpoints: (
  xs: $grid-xs,
  sm: $grid-sm,
  md: $grid-md,
  lg: $grid-lg,
  xl: $grid-xl
) ;

// Define the maximum width of `.container` for different screen sizes.
$container-max-widths: (
  sm: 100%,
  md: 100%,
  lg: 100%,
  xl: 1200px
) !default;

$grid-columns:                  12 !default;
$grid-gutter-width:             32px !default; //16px on each side of the columns
{% endhighlight %}