---
permalink: "/design/grid/"
redirect_from:
- "/grid/"
- "/design/layout/grid/"
- "/kode/grid/"
layout: styleguide
category: Styleguide_category
subcategory: Styleguide
title: Grid og baseline grid
lead: Brug et grid til at placere komponenterne i dit layout horisontalt, og brug baseline grid til at skabe en vertikal rytme på siden.
description: Det Fælles Designsystem baserer sit responsive layout på en opdeling
  af siden i 12 lige brede kolonner.
tags:
- grid
- grids
- kolonner
- opdeling
- spalter
tabs: "Retningslinjer, kode"
---

{% include tabs.html guidelines=true code=true %}

{% include anchorlinks.html guidelines="Grid_og_baseline_grid" code="Grid_og_baseline_grid_Kode" %}

<!--split-->

## 12 kolonner (horisontalt) {#{% include create-id.html heading="12 kolonner (horisontalt)" %}}

Det giver ro, overskuelighed og forudsigelighed, når man placerer sidens komponenter indenfor et grid. Det får alle løsningens sider til at fremtræde sammenhængende.

Det Fælles Designsystem baserer sit responsive layout på en opdeling af siden i 12 lige brede kolonner med 32px afstand mellem hver kolonne (16 px på hver side af en kolonne). I tablet- og mobilvisninger folder layoutet sammen til 8- og 4-grid. På den måde følges proportionerne ad fra størst til mindst. 

Du er velkommen til at anvende et andet responsivt grid med det antal kolonner, der skal til i dit design. Det vigtige er, at det er responsivt, så din selvbetjeningsløsning tilpasser sig brugerens skærmstørrelse.

De fleste selvbetjeningsløsninger kan med fordel nøjes med at venstrestille alt indhold og dermed kun anvende cirka halvdelen af en desktopsides bredde. I sådanne tilfælde bruges det horisontale grid primært til at definere enkelte komponenters bredde. 

## Breakpoints {#{% include create-id.html heading="Breakpoints" %}}

Det Fælles Designsystem er responsivt og tilpasser sig således automatisk det tilgængelige vinduesareal.

Sidens breakpoints er de værdier, hvorefter siden automatisk tilpasser sig arealet. Du kan anvende nedenstående eller definere dine egne. Det Fælles Designsystem bruger følgende breakpoints:

- Desktop/stor skærm: 1200px
- Desktop/middel skærm: 992px
- Tablet: 768px
- Mobil: 576px

## Eksempler på grid layout {#{% include create-id.html heading="Eksempler på grid layout" %}}

Du kan kombinere de 12 kolonner og flette dem sammen, så du ender med layout varianter, der fx består af 3/9, 4/8, 4/4/4 osv. Alle sider bygger på den måde på det samme fundament, som bidrager til at skabe ro og overblik.

<figure>
    <img src="{{ site.baseurl }}/assets/img/descriptionimages/grid-inddelinger.jpg" class="w-percent-30" alt="Grafik der viser Det Fælles Designsystems grid-inddelinger" title="">
    <img src="{{ site.baseurl }}/assets/img/descriptionimages/grid-inddelinger-artikel.jpg" class="w-percent-30" alt="Grafik der viser Det Fælles Designsystems grid-inddelinger" title="">
    <img src="{{ site.baseurl }}/assets/img/descriptionimages/grid-inddelinger-nav1.jpg" class="w-percent-30" alt="Grafik der viser Det Fælles Designsystems grid-inddelinger" title="">
    <img src="{{ site.baseurl }}/assets/img/descriptionimages/grid-inddelinger-nav2.jpg" class="mt-4 w-percent-30" alt="Grafik der viser Det Fælles Designsystems grid-inddelinger" title="">
    <img src="{{ site.baseurl }}/assets/img/descriptionimages/grid-inddelinger-search.jpg" class="mt-4 w-percent-30" alt="Grafik der viser Det Fælles Designsystems grid-inddelinger" title="">
    <figcaption>Ovenstående er eksempler på mulige kombinationer af kolonner inden for Det Fælles Designsystems 12-grid layout.</figcaption>
</figure>

<figure>
    <img src="{{ site.baseurl }}/assets/img/descriptionimages/grid-layout-cards.jpg" class="mt-4 w-percent-30" alt="Grafik der viser Det Fælles Designsystems grid-inddelinger ved brug af cards" title="">
    <figcaption>I ovenstående eksempel vises hvordan cards aligner på siden ved brug af grid.</figcaption>
</figure>

## Baseline grid (8px vertikalt) {#{% include create-id.html heading="Baseline grid (8px vertikalt)" %}}

### 8 point
I Det Fælles Designsystem går alle lodrette dimensioner, højder på komponenter og afstande i højderetningen op med en faktor 8. Dvs. 8px, 16px, 24px, 32px, 40px, 48px, 56px, etc.  Det er designsystemets baseline grid.

Gentagelsen af værdier skaber ro og balance på tværs af det visuelle layout og mellem sidens lodrette elementer. For tekst er det ikke tekstens størrelse, men linjehøjden, der skal gå op i en faktor 8.

Du kan læse mere om baseline grid i artiklen {% include links/external-link.html linktext="8-Point Grid: Vertical Rhythm" %}.

### 4 point
Ikoner, typografi og nogle elementer i komponenter kan justeres til et 4px grid.

Se Material Designs forklaring af baseline grid i artiklen {% include links/external-link.html linktext="Spacing Methods - Baseline" %}.

<!--split-->

## Generelt om designsystemets grid {#{% include create-id.html heading="Generelt om designsystemets grid" append="-kode" %}}

Det Fælles Designsystem benytter et simpelt mobile-first flexbox grid til opbygning af sider. Grid-systemet er et standard 12-kolonne system med fem responsive breakpoints.

Grid-systemet bruger containere, rækker og kolonner til at opbygge sider. Grid-systemet bruger {% include links/external-link.html linktext="flexbox" %} og er responsivt. Nedenfor kan du se eksempler på brugen af grid-systemet.

## Installation {#{% include create-id.html heading="Installation" append="-kode" %}}

### HTML Struktur
{% include code/preview-box-details.html component="grid-simple" title="Eksempel af grid" link=false detaillabel="for eksempel af grid " %}

## Indstillinger {#{% include create-id.html heading="Indstillinger" append="-kode" %}}

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

## Responsive klasser {#{% include create-id.html heading="Responsive klasser" append="-kode" %}}

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

## Auto og Fill kolonner {#{% include create-id.html heading="Auto og Fill kolonner" append="-kode" %}}

Du kan specificere bredden på en kolonne uden at angive en eksplicit nummer-klasse som fx `col-sm-6`.

### Specifik bredde på kun én kolonne

Du kan tildele alle kolonner samme bredde ved kun at give én kolonne en eksplicit bredde (col-6). De øvrige kolonner tilpasser sig automatisk samme bredde.

{% include code/preview-box-details.html component="grid--one-column-width" title="Eksempel af grid med fast bredde på én kolonne" link=false detaillabel="for eksempel af grid med fast bredde på én kolonne" %}

### Individuel kolonnebredde efter indhold

Ved at brug `col-{breakpoint}-auto` kan du skabe individuel kolonnebredde: Kolonnerne tilpasser sig til deres indhold.

{% include code/preview-box-details.html component="grid--one-column-width" title="Eksempel af grid med indholdsbestemt bredde på kolonner" link=false detaillabel="for eksempel af grid med indholdsbestemt bredde på kolonner" %}

## Rækkefølge {#{% include create-id.html heading="Rækkefølge" append="-kode" %}}

### Klasser (classes)

Brug klasserne `.order-` til at bestemme den visuelle rækkefølge af kolonnerne. Disse klasser findes også i responsive udgaver fx `.order-1.order-md-2`).

{% include code/preview-box-details.html component="grid--ordering-visual" title="Eksempel af grid med ændring af rækkefølgen på kolonner" link=false detaillabel="for eksempel af grid med ændring af rækkefølgen på kolonner" %}

### Forskyd kolonner

Brug klasserne `.offset-` til at forskyde kolonner, fx forskyder `.offset-md-4` 4 kolonner til højre.

{% include code/preview-box-details.html component="grid--offsets" title="Eksempel af grid med forskydning af kolonner" link=false detaillabel="for eksempel af grid med forskydning af kolonner" %}

Du kan nulstille forskydning ved fx at bruge klassen `offset-md-0`.

{% include code/preview-box-details.html component="grid--offsets-reset" title="Eksempel af grid med nulstilling af forskydning af kolonne" link=false detaillabel="for eksempel af grid med nulstilling af forskydning af kolonne" %}

## Ingen afstand mellem kolonner (ingen gutter) {#{% include create-id.html heading="Ingen afstand mellem kolonner (ingen gutter)" append="-kode" %}}

Du kan fjerne mellemrum mellem kolonnerne ved at tilføje klassen `no-gutters` til rækken.

{% include code/preview-box-details.html component="grid--no-gutters" title="Eksempel af grid uden afstand mellem kolonner" link=false detaillabel="for eksempel af grid uden afstand mellem kolonner" %}

## Hjælpeklasser {#{% include create-id.html heading="Hjælpeklasser" append="-kode" %}}

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

## Sass variabler i designsystemet {#{% include create-id.html heading="Sass variabler i designsystemet" append="-kode" %}}

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