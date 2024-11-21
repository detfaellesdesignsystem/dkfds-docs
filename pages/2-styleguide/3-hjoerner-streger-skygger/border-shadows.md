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

{% include code/preview-box.html component="borders" link=false %}

<h3>Designværdier</h3>
<table class="table table--borderless table--responsive-headers">
  <thead>
    <tr>
      <th>Navn</th>
      <th>Farve</th>
      <th>Tykkelse</th>
      <th>Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Fokusstreg</td>
      <td>#707070</td>
      <td>4px</td>
      <td>solid</td>
    </tr>
    <tr>
      <td>Ydre streger</td>
      <td>#707070</td>
      <td>1px</td>
      <td>solid</td>
    </tr>
    <tr>
      <td>Indre streger</td>
      <td>#BFBFBF</td>
      <td>1px</td>
      <td>solid</td>
    </tr>
    <tr>
      <td>Indre-indre streger</td>
      <td>#DCDCDC</td>
      <td>1px</td>
      <td>solid</td>
    </tr>
    <tr>
      <td>Knap kant streger</td>
      <td>#3C5C22 (Borger.dk)<br>#004993 (Virk)</td>
      <td>2px</td>
      <td>solid</td>
    </tr>
    <tr>
      <td>Horisontal ruler</td>
      <td>#BFBFBF</td>
      <td>1px</td>
      <td>solid</td>
    </tr>
    <tr>
      <td>Fejl ved felt</td>
      <td>#CC0000</td>
      <td>4px</td>
      <td>solid</td>
    </tr>
    <tr>
      <td>Streg ved åben detalje-komponent</td>
      <td>#BFBFBF</td>
      <td>4px</td>
      <td>solid</td>
    </tr>
    <tr>
      <td>Streg ved aktivt menupunkt i venstremenu</td>
      <td>#44831E (Borger.dk)<br>#0059B3 (Virk)</td>
      <td>4px</td>
      <td>solid</td>
    </tr>
    <tr>
      <td>Streg ved aktivt menupunkt i venstremenu</td>
      <td>#44831E (Borger.dk)<br>#0059B3 (Virk)</td>
      <td>7px</td>
      <td>solid</td>
    </tr>
    <tr>
      <td>Facitstreg</td>
      <td>#707070</td>
      <td>4px</td>
      <td>double</td>
    </tr>
  </tbody>
</table>

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
