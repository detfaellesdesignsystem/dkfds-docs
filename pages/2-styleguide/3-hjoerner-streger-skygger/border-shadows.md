---
permalink: "/design/borders/"
redirect_from:
- "/design/kanter/"
layout: styleguide
category: Styleguide_category
subcategory: Styleguide
title: Hjørner, streger, skygger
description: Hjørner, streger og skygger hjælper med at danne ramme om indhold på siden.
headings: Hjoerner_streger_skygger
anchorlinks: true
tags:
- hjørner
- streger
- kanter
- border-radius
- border
- kanter
- rammer
---

{% assign headings = site.data.headings[page.headings] %}

[---- Hjørner -------------------------------------]: # 
<h2 id="{{ headings[0].id }}">{{ headings[0].h2 }}</h2>

{% include code/preview-box.html component="border-radius" link=false %}

<h3>Designværdier</h3>
<table class="table table--borderless table--responsive-headers">
  <thead>
    <tr>
      <th>Navn</th>
      <th>Border radius</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Statiske hjørner</td>
      <td>0px</td>
    </tr>
    <tr>
      <td>Interaktive hjørner</td>
      <td>4px</td>
    </tr>
  </tbody>
</table>

[---- Streger -------------------------------------]: # 
<h2 id="{{ headings[1].id }}">{{ headings[1].h2 }}</h2>

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
      <td>Ydre streger</td>
      <td>#747474</td>
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
      <td>#747474</td>
      <td>4px</td>
      <td>double</td>
    </tr>
  </tbody>
</table>

[---- Skygger -------------------------------------]: # 
<h2 id="{{ headings[2].id }}">{{ headings[2].h2 }}</h2>

{% include code/preview-box.html component="shadows" link=false %}

<h3>Designværdier</h3>
<table class="table table--borderless table--responsive-headers">
  <thead>
    <tr>
      <th>Navn</th>
      <th>Skygge</th>
      <th>Skyggefarve</th>
      <th>Gennemsigtighed</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Modal</td>
      <td>0 8px 16px 0</td>
      <td>#000000</td>
      <td>30%</td>
    </tr>
    <tr>
      <td>Overflow menu</td>
      <td>0 4px 8px 0</td>
      <td>#000000</td>
      <td>30%</td>
    </tr>
    <tr>
      <td>Cards</td>
      <td>0 2px 4px 0</td>
      <td>#000000</td>
      <td>30%</td>
    </tr>
  </tbody>
</table>