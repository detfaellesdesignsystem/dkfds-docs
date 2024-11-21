---
permalink: "/styleguide/borders/"
redirect_from:
- "/design/kanter/"
- "/design/borders/"
layout: styleguide
category: Styleguide_category
subcategory: Styleguide
title: Hjørner, streger, skygger
description: Hjørner, streger og skygger hjælper med at danne ramme om indhold på siden.
tags:
- hjørner
- streger
- kanter
- border-radius
- border
- kanter
- rammer
---

{% include anchorlinks.html headings="Hjoerner_streger_skygger" %}

## Hjørner {#{% include create-id.html heading="Hjørner" %}}

Designsystemets hjørner er med til at skabe visuel genkendelse samt til at lede brugerens opmærksomhed.

{% include code/preview-box.html component="border-radius" link=false %}

## Streger {#{% include create-id.html heading="Streger" %}}

<h3 class="h5 bold">Fokusstreg</h3>

<div class="focus-border-example"></div>

<p class="mt-3 mb-3">Farve: #454545</p>

<p class="mt-3">Tykkelse: 3px</p>

Denne streg gør det tydeligt, hvilket interaktivt element, der har fokus. En tydelig fokusstreg med tilstrækkelig farvekontrast er afgørende for brugere, der navigerer med tastatur.

<h3 class="h5 bold">Meningsbærende streger (kontrast over 1:3)</h3>

<div class="high-contrast-border-example"></div>

<p class="mt-3">Farve: #8E8E8E</p>

Brug denne streg, når stregens visuelle afgrænsning er afgørende for, at brugeren kan se og forstå komponenten. Eksempelvis skal interaktive elementer såsom inputfelter have tilstrækkelig kontrast, før alle seende brugere kan se og forstå, at der er tale om et inputfelt.

Horizontal ruler `<hr>` anvender denne stregfarve.

<h3 class="h5 bold">Dekorative streger (kontrast under 1:3)</h3>

<div class="low-contrast-border-example"><span class="sr-only">Dekorativ streg mulighed 1</span></div>

<p class="mt-3">Farve: #BFBFBF</p>

<div class="very-low-contrast-border-example"><span class="sr-only">Dekorativ streg mulighed 2</span></div>

<p class="mt-3">Farve: #DCDCDC</p>

Dekorative streger har lav kontrastværdi. Brug kun disse streger, når brugeren kan se og forstå komponenten helt uden stregen, dvs. kraft af generelt layout og afstande/luft om komponenten. Eksempelvis kan tabeller forstås uden streger, eftersom den grafiske opsætning i sig selv er nok til, at brugerne kan læse og forstå tabellen.

Inden du anvender dekorative streger, så overvej, om dit design kan holdes mere enkelt fx ved i stedet at nøjes med mere afstand mellem dine komponenter. 

## Skygger {#{% include create-id.html heading="Skygger" %}}

Det Fælles Designsystem anvender skygger til at visualisere dybde på skærmen. Skygger anvendes kun til elementer, der lægger sig oven på andre elementer i brugergrænsefladen. Helt grundlæggende ligger elementer med den store skygge øverst, derefter kommer den lille skygge, og nederst resten af brugergrænsefladen uden skygge. 

Vær opmærksom på, at skyggen er relativ til konteksten. Fx vil en tooltip, der åbnes inde i en modal med stor skygge, fortsat have den lille skygge. 

{% include code/preview-box.html component="shadows" link=false %}

<div class="table--responsive-scroll" tabindex="0">
  <table class="table table--borderless">
    <thead>
      <tr>
        <td></td>
        <th scope="col">Position</th>
        <th scope="col">Farve</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Stor skygge</th>
        <td>0px 8px 24px 0px</td>
        <td>rgba(0, 0, 0, 0.20)</td>
      </tr>
      <tr>
        <th scope="row">Lille skygge</th>
        <td>0px 4px 12px 0px</td>
        <td>rgba(0, 0, 0, 0.20)</td>
      </tr>
    </tbody>
  </table>
</div>

## Referencer

<ul class="nobullet-list">
  <li>{% include links/external-link.html linktext="W3C (WCAG 2.1): Understanding SC 1.4.11: Non-text Contrast (Level AA)" %}</li>
</ul>