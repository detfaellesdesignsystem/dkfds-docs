---
permalink: "/design/grid/implementering/"
guidelinelink: "/design/grid/guidelines/"
redirect_from:
- "/kode/grid/"
layout: styleguide
category: Styleguide_category
subcategory: Styleguide
title: Grid og baseline grid
lead: Brug et grid til at placere komponenterne i dit layout horisontalt, og brug baseline grid til at skabe en vertikal rytme på siden.
anchor: true
subnav:
- text: Indstillinger
  href: '#indstillinger'
- text: Responsive klasser
  href: '#responsive-klasser'
- text: Auto og Fill kolonner
  href: '#auto-og-fill-kolonner'
- text: Rækkefølge
  href: '#raekkefoelge'
- text: Ingen afstand mellem kolonner (ingen gutter)
  href: '#ingen-afstand-mellem-kolonner-ingen-gutter'
- text: Hjælpeklasser
  href: '#hjaelpeklasser'
- text: SASS variabler
  href: '#sass-variabler-i-designsystemet'
description: Sådan bruger du grid med FDS.
tags: 
---

Det fælles designsystem benytter et simpelt mobile-first flexbox grid til opbygning af sider. Grid-systemet er et standard 12-kolonne system med fem responsive breakpoints.

Grid-systemet bruger containere, rækker og kolonner til at opbygge sider. Grid-systemet bruger {% include links/external-link.html linktext="flexbox" %} og er responsivt. Nedenfor kan du se eksempler på brugen af grid-systemet.

## Installation

### HTML Struktur
{% include code/preview-box-details.html component="grid-simple" title="Eksempel af grid" link=false detaillabel="for eksempel af grid " %}

{:#indstillinger}
## Indstillinger

Grid systemet har følgende standardindstillinger:

<table class="table">
    <thead>
        <tr>
            <th></th>
            <th>Ekstra lille<br /><small>&lt;576px</small></th>
            <th>Lille<br /><small>&ge;576px</small></th>
            <th>Mellem<br /><small>&ge;768px</small></th>
            <th>Stor<br /><small>&ge;992px</small></th>
            <th>Ekstra stor<br /><small>&ge;1200px</small></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Max. container bredde</th>
            <td>None (auto)</td>
            <td>None (auto)</td>
            <td>None (auto)</td>
            <td>None (auto)</td>
            <td>1200px</td>
        </tr>
        <tr>
            <th>Klasser</th>
            <td><code>col-</code></td>
            <td><code>col-sm-</code></td>
            <td><code>col-md-</code></td>
            <td><code>col-lg-</code></td>
            <td><code>col-xl-</code></td>
        </tr>
        <tr>
            <th>Antal kolonner</th>
            <td colspan="5">12</td>
        </tr>
        <tr>
            <th>Afstand mellem kolonner (Gutter)</th>
            <td colspan="5">32px (16px på hver side af en kolonne)</td>
        </tr>
        <tr>
            <th>Kan indlejres</th>
            <td colspan="5">Ja - man kan godt have rækker inde i en kolonne</td>
        </tr>
        <tr>
            <th>Ændre kolonners rækkefølge</th>
            <td colspan="5">Ja</td>
        </tr>
    </tbody>
</table>

{:#responsive-klasser}
## Responsive klasser

Som udgangspunkt findes der 5 breakpoints: extra small, small, medium, large, or extra large.

### Klasser som rammer alle breakpoints

Brug klassen `col` eller `col-*` uden responsivt prefix (fx md).

{% include code/preview-box-details.html component="grid--all-breakpoints" title="Eksempel af grid med alle breakpoints" link=false detaillabel="for eksempel af grid med alle breakpoints" %}

### Fra stablede kolonner til kolonner på række

Ved at bruge fx `col-md-*` klassen vil kolonnerne til at begynde med være placeret lodret over hinanden på mobile enheder. Fra medium-skærme vil de være vist vandret på en række.

{% include code/preview-box-details.html component="grid--stacked-horizontal" title="Eksempel af grid med stablede kolonner til kolonner på række" link=false detaillabel="for eksempel af grid med stablede kolonner til kolonner på række" %}

### Brug af forskellige kolonne-klasser

Du kan mikse forskellige kolonne-klasser.

{% include code/preview-box-details.html component="grid--mix-match" title="Eksempel af grid med forskellige kolonne-klasser" link=false detaillabel="for eksempel af grid med forskellige kolonne-klasser" %}

### Kolonneombrydning

Hvis der er mere end 12 kolonner på en række, vil ekstra kolonner blive vist på en ny linje under de første 12.

{% include code/preview-box-details.html component="grid--column-wrapping" title="Eksempel af grid med kolonneombrydning" link=false detaillabel="for eksempel af grid med kolonneombrydning" %}

### Indlejre

Du kan indlejre flere rækker med tilhørende kolonner i hinanden.

{% include code/preview-box-details.html component="grid--nesting" title="Eksempel af grid med indlejring af rækker med kolonner" link=false detaillabel="for eksempel af grid med indlejring af rækker med kolonner" %}

{:#auto-og-fill-kolonner}
## Auto og Fill kolonner

Du kan specificere bredden på en kolonne uden at angive en eksplicit nummer-klasse som fx `col-sm-6`.

### Specifik bredde på kun én kolonne

Du kan tildele alle kolonner samme bredde ved kun at give én kolonne en eksplicit bredde (col-6). De øvrige kolonner tilpasser sig automatisk samme bredde.

{% include code/preview-box-details.html component="grid--one-column-width" title="Eksempel af grid med fast bredde på én kolonne" link=false detaillabel="for eksempel af grid med fast bredde på én kolonne" %}

### Individuel kolonnebredde efter indhold

Ved at brug `col-{breakpoint}-auto` kan du skabe individuel kolonnebredde: Kolonnerne tilpasser sig til deres indhold.

{% include code/preview-box-details.html component="grid--one-column-width" title="Eksempel af grid med indholdsbestemt bredde på kolonner" link=false detaillabel="for eksempel af grid med indholdsbestemt bredde på kolonner" %}

{:#raekkefoelge}
## Rækkefølge

### Klasser (classes)

Brug klasserne `.order-` til at bestemme den visuelle rækkefølge af kolonnerne. Disse klasser findes også i responsive udgaver fx `.order-1.order-md-2`).

{% include code/preview-box-details.html component="grid--ordering-visual" title="Eksempel af grid med ændring af rækkefølgen på kolonner" link=false detaillabel="for eksempel af grid med ændring af rækkefølgen på kolonner" %}

### Forskyd kolonner

Brug klasserne `.offset-` til at forskyde kolonner, fx forskyder `.offset-md-4` 4 kolonner til højre.

{% include code/preview-box-details.html component="grid--offsets" title="Eksempel af grid med forskydning af kolonner" link=false detaillabel="for eksempel af grid med forskydning af kolonner" %}

Du kan nulstille forskydning ved fx at bruge klassen `offset-md-0`.

{% include code/preview-box-details.html component="grid--offsets-reset" title="Eksempel af grid med nulstilling af forskydning af kolonne" link=false detaillabel="for eksempel af grid med nulstilling af forskydning af kolonne" %}

{:#ingen-afstand-mellem-kolonner-ingen-gutter}
## Ingen afstand mellem kolonner (ingen gutter)

Du kan fjerne mellemrum mellem kolonnerne ved at tilføje klassen `no-gutters` til rækken.

{% include code/preview-box-details.html component="grid--no-gutters" title="Eksempel af grid uden afstand mellem kolonner" link=false detaillabel="for eksempel af grid uden afstand mellem kolonner" %}

{:#hjaelpeklasser}
## Hjælpeklasser

Designsystemet kommer med forskellige hjælpeklasser, fx flex, margin og bredde. Du kan kombinere disse hjælpeklasser med grid-systemet.

### Hjælpeklasser: Flexbox

Brug designsystemets flexbox hjælpeklasser til at ændre på placeringen af kolonnerne og placeringen af indholdet i kolonnerne.

#### Vertikal alignment

{% include code/preview-box-details.html component="grid--util-flex-vertical-align-01" title="Eksempel af grid med vertikal alignment af kolonner" link=false detaillabel="for eksempel af grid med vertikal alignment af kolonner" %}
<br />
{% include code/preview-box-details.html component="grid--util-flex-vertical-align-02" title="Eksempel af grid med vertikal alignment af kolonner på samme række" link=false detaillabel="for eksempel af grid med vertikal alignment af kolonner på samme række" %}

#### Horisontal alignment

{% include code/preview-box-details.html component="grid--util-flex-horizontal-align" title="Eksempel af grid med horisontal alignment af kolonner" link=false detaillabel="for eksempel af grid med horisontal alignment af kolonner" %}

### Hjælpeklasser: Margin

Du kan bruge margin-hjælpeklasserne til at skabe indryk. Fx `mr-auto`.

{% include code/preview-box-details.html component="grid--util-margin" title="Eksempel af grid med indryk af kolonner" link=false detaillabel="for eksempel af grid med indryk af kolonner" %}

### Hjælpeklasser: Bredde

Vil du have rækker og kolonner som går fra kant til kant, skal du undlade `container` eller tilføje klassen `w-percent-100`.

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