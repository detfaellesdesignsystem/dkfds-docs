---
permalink: "/styleguide/typografi/overskrifter/"
parentlink: "/styleguide/typografi/"
redirect_from:
- "/kode/typografi/overskrifter/"
- "/design/typografi/overskrifter/"
layout: styleguide
category: Styleguide_category
subcategory: Styleguide
title: Overskrifter
lead: Overskrifter strukturerer siden, giver overblik og hjælper brugeren og skærmlæseren
  til at kunne overskue sidens logik og opbygning.
description: Overskrifter strukturerer siden, giver overblik og hjælper brugeren og
  skærmlæseren til at kunne overskue sidens logik og opbygning.
tags:
- h1
- h2
- h3
- h4
- h5
- h6
tabs: "Retningslinjer, kode"
---

{% include tabs.html guidelines=true code=true %}

{% include anchorlinks.html guidelines="Overskrifter" code="Overskrifter_Kode" %}

<!--split-->

## Sådan bruges overskrifter {#{% include create-id.html heading="Sådan bruges overskrifter" %}}

Overskriftstyperne har to formål:

- De skaber et visuelt hierarki på siden.
- De fungerer som sidens indholdsfortegnelse for skærmlæsere.

En god struktur i sidens overskrifter er altafgørende for, at brugere af skærmlæser kan forstå og navigere i indholdet på siden. Det er muligt at følge en stringent struktur i overskrifter for skærmlæsere og samtidig tilpasse overskrifternes visuelle udtryk til brugere, der orienterer sig visuelt.

### Hvornår skal du bruge overskrifter?

Du skal bruge overskrifter til at skabe struktur på din side og gruppere dit indhold i logiske og overskuelige bidder, både for skærmlæsere og visuelt orienterede brugere.

### Hvornår skal du overveje anden formatering end overskrifter?

Du skal bruge anden formatering end overskrifter, hvis du vil fremhæve eller ændre styling af tekst, som ikke har betydning for strukturen på siden. Brug fx {% include links/component-guideline-link.html linktext="beskeder" %} til information, brug {% include links/internal-link.html linktext="lister" %} til at fremhæve særlige punkter med punktopstilling eller anvend {% include links/internal-link.html linktext="stor tekst" %} til at markere udvalgte dele af teksten.

### Hvis du vil vide mere

{:.nobullet-list}
- {% include links/external-link.html linktext="H42: Using h1-h6 to identify headings" %}
- {% include links/external-link.html linktext="Page-structure - headings" %}

## Designværdier {#{% include create-id.html heading="Designværdier" %}}

Designværdierne nedenfor er angivet i px for læsbarhedens skyld. Vær opmærksom på, at det anbefales i ens stylesheet at bruge relative værdier til skriftstørrelse og en “unitless” talværdi for linjehøjden. I designsystemets stylesheet er overskrifternes skriftstørrelse defineret med “rem”.

<div class="table--responsive-scroll" tabindex="0">
  <table class="table table--borderless">
    <thead>
      <tr>
        <td></td>
        <th scope="col">Skriftstørrelse</th>
        <th scope="col">Linjehøjde</th>
        <th scope="col">Teksttykkelse</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"><span class="h1">Overskrift 1</span></th>
        <td>
          <ul class="nobullet-list mt-0 mb-0">
            <li class="mt-0 mb-0">48px (desktop)</li>
            <li>40px (tablet)</li>
            <li>32px (mobil)</li>
          </ul>
        </td>
        <td>
          <ul class="nobullet-list mt-0 mb-0">
            <li class="mt-0 mb-0">56px (desktop)</li>
            <li>48px (tablet)</li>
            <li>40px (mobil)</li>
          </ul>
        </td>
        <td>Bold (700)</td>
      </tr>
      <tr>
        <th scope="row"><span class="h2">Overskrift 2</span></th>
        <td>
          <ul class="nobullet-list mt-0 mb-0">
            <li class="mt-0 mb-0">32px (desktop)</li>
            <li>28px (tablet)</li>
            <li>24px (mobil)</li>
          </ul>
        </td>
        <td>
          <ul class="nobullet-list mt-0 mb-0">
            <li class="mt-0 mb-0">40px (desktop)</li>
            <li>36px (tablet)</li>
            <li>32px (mobil)</li>
          </ul>
        </td>
        <td>Semi-bold (600)</td>
      </tr>
      <tr>
        <th scope="row"><span class="h3">Overskrift 3</span></th>
        <td>
          <ul class="nobullet-list mt-0 mb-0">
            <li class="mt-0 mb-0">24px (desktop)</li>
            <li>24px (tablet)</li>
            <li>22px (mobil)</li>
          </ul>
        </td>
        <td>
          <ul class="nobullet-list mt-0 mb-0">
            <li class="mt-0 mb-0">32px (desktop)</li>
            <li>32px (tablet)</li>
            <li>28px (mobil)</li>
          </ul>
        </td>
        <td>Semi-bold (600)</td>
      </tr>
      <tr>
        <th scope="row"><span class="h4">Overskrift 4</span></th>
        <td>
          <ul class="nobullet-list mt-0 mb-0">
            <li class="mt-0 mb-0">20px (desktop)</li>
            <li>20px (tablet)</li>
            <li>18px (mobil)</li>
          </ul>
        </td>
        <td>
          <ul class="nobullet-list mt-0 mb-0">
            <li class="mt-0 mb-0">28px (desktop)</li>
            <li>28px (tablet)</li>
            <li>24px (mobil)</li>
          </ul>
        </td>
        <td>Semi-bold (600)</td>
      </tr>
      <tr>
        <th scope="row"><span class="h5">Overskrift 5</span></th>
        <td>16px</td>
        <td>24px</td>
        <td>Semi-bold (600)</td>
      </tr>
      <tr>
        <th scope="row"><span class="h6">Overskrift 6</span></th>
        <td>14px</td>
        <td>20px</td>
        <td>Medium (500)</td>
      </tr>
    </tbody>
  </table>
</div>

## Overskrift som link {#{% include create-id.html heading="Overskrift som link" %}}

<div class="table--responsive-scroll" tabindex="0">
  <table class="table table--borderless">
    <thead>
      <tr>
        <td></td>
        <th scope="col">Tekstdekoration</th>
        <th scope="col">Tekstfarve</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"><span class="h3"><a href="javascript:void(0);">Overskrift, som er et link</a></span></th>
        <td>Understreget</td>
        <td>
          <ul class="nobullet-list mt-0 mb-0">
            <li class="mt-0 mb-0">#004D99</li>
            <li>#000040 (hover)</li>
            <li>#800080 (besøgt)</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Anvendes til

Overskrift som links kan anvendes på sider, hvor brugeren kan navigere til andre sider i samme selvbetjeningsløsning. Overskrift som links anvendes også til overskrifter på søgeresultatsider.

### Anvendes ikke til

Må ikke bruges til at fremhæve links eller som erstatning for {% include links/internal-link.html linktext="standard links" %} i selvbetjeningsløsninger.

## Løsningstitel i header {#{% include create-id.html heading="Løsningstitel i header" %}}

{% include code/preview.html component="solutionheading" %}

### Anvendes til

Anvendes i header som titel på hele løsningen. Titlen bør derved være den samme på hver side.

### Anvendes ikke til

Anvendes ikke andre steder end i headeren.

## Subheading {#{% include create-id.html heading="Subheading" %}}

<div class="table--responsive-scroll" tabindex="0">
  <table class="table table--borderless">
    <thead>
      <tr>
        <td></td>
        <th scope="col">Skriftstørrelse</th>
        <th scope="col">Linjehøjde</th>
        <th scope="col">Teksttykkelse</th>
        <th scope="col">Farve</th>
        <th scope="col">Letter-spacing</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"><span class="subheading">Subheading</span></th>
        <td>14px</td>
        <td>16px</td>
        <td>Regular (400)</td>
        <td>#747474</td>
        <td>1px</td>
      </tr>
    </tbody>
  </table>
</div>

### Anvendes til

Anvendes til at tilføje sekundær tekst til en overskrift.

### Anvendes ikke til

Må ikke anvendes som en enkeltstående overskrift.

<!--split-->

## HTML Struktur {#{% include create-id.html heading="HTML Struktur" append="-kode" %}}

{% include code/syntax.html component="headings" copybutton=true %}

Hold en stram overskriftsstruktur i koden. En `<h3>` altid er under en `<h2>`, en `<h4>` under en `<h3>` osv. `<h1>` er altid øverst i hierarkiet.  

Lad være med at springe overskriftsled over. Hvis du visuelt vil have et andet udtryk, så brug en klasse til at style overskriften.

### Eksempel på en overskrift, der ligner et andet niveau

{% include code/syntax.html component="heading" link=true copybutton=true %}

## Subheading {#{% include create-id.html heading="Subheading" append="-kode" %}}

{% include code/preview-box.html component="subheading" link=false title="Eksempel på subheading" %}

Læs retningslinjer for {% include links/internal-link.html linktext="subheadings" %}.

### HTML Struktur

{% include code/syntax.html component="subheading" copybutton=true %}
