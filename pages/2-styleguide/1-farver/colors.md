---
permalink: "/styleguide/farver/"
redirect_from:
- "/farver/"
- "/design/farver/"
layout: styleguide
category: Styleguide_category
subcategory: Styleguide
title: Farver
lead: Da designsystemet er fælles for både borger.dk og Virk er der farver til hver
  portal og samtidig en generel palette, der anvendes uanset, hvilken portal din selvbetjeningsløsning
  skal på.
description: 'Overbliksside over alle farver i FDS: Portalfarver, Gråtoner, Besked-farver,
  Link-farver, Fokusfarve, Baggrundsfarver, Positiv og negativ farver, Datavisualiseringsfarver'
tags:
- color
- Portalfarver
- Gråtoner
- Besked-farver
- Link-farver
- Fokusfarve
- Baggrundsfarver
- Positiv og negativ farver
- Datavisualiseringsfarver
- farve
- farver
- Grå
- Sort
- grøn
- blå
- rød
- gul
- lyseblå
- link-blå
- virk-farve
- borger.dk-farve
---

{% include anchorlinks.html headings="Farver" %}

## Portalfarver (tema) {#{% include create-id.html heading="Portalfarver (tema)" %}}

Din selvbetjeningsløsning skal, alt efter hvilken portal løsningen skal på, gøre brug af den givne portals primærfarve.

<h3>Primærfarver for borger.dk</h3>

Du kan bruge borger.dk primærfarven på få centrale elementer, såsom på primærknappen og i menuer i designsystemet for at skabe sammenhæng til borger.dk

<div class="row color-scale color-scale-spacing">
  <div class="col col-12 col-md-6 mb-4 md-md-0">
    <div class="color background-borgerdk-100"></div>
    {% include color.html hex="#44831E" name="primary" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-borgerdk-200"></div>
    {% include color.html hex="#3C5C22" name="primary-dark" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-borgerdk-300"></div>
    {% include color.html hex="#233614" name="primary-darker" %}
  </div>
</div>

<h3>Primærfarver for Virk</h3>

Du kan bruge Virk primærfarven på få centrale elementer, såsom på primærknappen og i menuer i designsystemet for at skabe sammenhæng til Virk.

<div class="row color-scale color-scale-spacing">
  <div class="col col-12 col-md-6 mb-4 md-md-0">
    <div class="color background-virk-100"></div>
    {% include color.html hex="#0059B3" name="primary" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-virk-200"></div>
    {% include color.html hex="#004993" name="primary-dark" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-virk-300"></div>
    {% include color.html hex="#003972" name="primary-darker" %}
  </div>
</div>

## Gråtoner {#{% include create-id.html heading="Gråtoner" %}}

Designsystemets generelle palette består mest af gråtoner og nogle få dedikerede farver til kommunikation og feedback. Paletten understøtter de visuelle principper om et neutralt, simpelt og fleksibelt designsystem.

<div class="row color-scale no-gutters">
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-white"></div>
    {% include color.html hex="#FFFFFF" name="white" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-gray-100"></div>
    {% include color.html hex="#F5F5F5" name="gray-100" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-gray-200"></div>
    {% include color.html hex="#DCDCDC" name="gray-200" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-gray-300"></div>
    {% include color.html hex="#BFBFBF" name="gray-300" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-gray-400"></div>
    {% include color.html hex="#8E8E8E" name="gray-400" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-gray-500"></div>
    {% include color.html hex="#707070" name="gray-500" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-gray-600"></div>
    {% include color.html hex="#454545" name="gray-600" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-black"></div>
    {% include color.html hex="#1A1A1A" name="black" %}
  </div>
</div>

## Besked-farver (alerts) {#{% include create-id.html heading="Besked-farver (alerts)" %}}

### Succes

<div class="row color-scale color-scale-spacing">
  <div class="col col-12 col-md-3 mb-4 md-md-0">
    <div class="color background-success-light"></div>
    {% include color.html hex="#DDF7CE" name="success-light" %}
  </div>
  <div class="col col-12 col-md-3">
    <div class="color background-success"></div>
    {% include color.html hex="#358000" name="success" %}
  </div>
</div>

### Advarsel

<div class="row color-scale color-scale-spacing">
  <div class="col col-12 col-md-3 mb-4 md-md-0">
    <div class="color background-warning-light"></div>
    {% include color.html hex="#FFEECC" name="warning-light" %}
  </div>
  <div class="col col-12 col-md-3">
    <div class="color background-warning"></div>
    {% include color.html hex="#FEBB30" name="warning" %}
  </div>
</div>

### Fejl

<div class="row color-scale color-scale-spacing">
  <div class="col col-12 col-md-3 mb-4 md-md-0">
    <div class="color background-error-light"></div>
    {% include color.html hex="#FFE0E0" name="error-light" %}
  </div>
  <div class="col col-12 col-md-3">
    <div class="color background-error"></div>
    {% include color.html hex="#CC0000" name="error" %}
  </div>
</div>

### Info

<div class="row color-scale color-scale-spacing">
  <div class="col col-12 col-md-3 mb-4 md-md-0">
    <div class="color background-info-light"></div>
    {% include color.html hex="#E2F2FB" name="info-light" %}
  </div>
  <div class="col col-12 col-md-3">
    <div class="color background-info"></div>
    {% include color.html hex="#1B86C3" name="info" %}
  </div>
</div>

## Link-farver {#{% include create-id.html heading="Link-farver" %}}

<div class="row color-scale color-scale-spacing">
  <div class="col col-12 col-md-3 mb-4 md-md-0">
    <div class="color background-link"></div>
    {% include color.html hex="#004D99" name="link" %}
  </div>
  <div class="col col-12 col-md-3 mb-4 md-md-0">
    <div class="color background-link-hover"></div>
    {% include color.html hex="#1A1A1A" name="link-hover" %}
  </div>
  <div class="col col-12 col-md-3">
    <div class="color background-link-visited"></div>
    {% include color.html hex="#800080" name="link-visited" %}
  </div>
</div>

## Fokusfarve {#{% include create-id.html heading="Fokusfarve" %}}

<div class="row color-scale color-scale-spacing">
  <div class="col col-12 col-md-3">
    <div class="color background-focus"></div>
    {% include color.html hex="#707070" name="focus" %}
  </div>
</div>

## Baggrundsfarver {#{% include create-id.html heading="Baggrundsfarver" %}}

<div class="row color-scale color-scale-spacing">
  <div class="col col-12 col-md-3 mb-4 md-md-0">
    <div class="color bg-normal"></div>
    {% include color.html hex="#FFFFFF" name="white" %}
  </div>
  <div class="col col-12 col-md-3 mb-4 md-md-0">
    <div class="color bg-alternative"></div>
    {% include color.html hex="#F5F5F5" name="gray-100" %}
  </div>
  <div class="col col-12 col-md-3">
    <div class="color bg-modal"></div>
    {% include color.html hex="rgba(0, 0, 0, 0.4)" name="$modal-overlay-background-color" %}
  </div>
</div>

## Positiv og negativ farver {#{% include create-id.html heading="Positiv og negativ farver" %}}

<div class="row color-scale color-scale-spacing">
  <div class="col col-12 col-md-3 mb-4 md-md-0">
    <div class="color background-positive"></div>
    {% include color.html hex="#358000" name="text-positive" %}
  </div>
  <div class="col col-12 col-md-3">
    <div class="color background-negative"></div>
    {% include color.html hex="#CC0000" name="text-negative" %}
  </div>
</div>

## Datavisualiseringsfarver {#{% include create-id.html heading="Datavisualiseringsfarver" %}}

Du kan bruge datavisualiseringsfarver til grafer, diagrammer eller andre former for visuelle fremstillinger til kommunikative formål.

### Violet data palette

<div class="row color-scale no-gutters">
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-violet-100"></div>
    {% include color.html hex="#FCFBFD" name="data-violet-100" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-violet-200"></div>
    {% include color.html hex="#EFEDF5" name="data-violet-200" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-violet-300"></div>
    {% include color.html hex="#DADAEB" name="data-violet-300" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-violet-400"></div>
    {% include color.html hex="#BCBDDC" name="data-violet-400" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-violet-500"></div>
    {% include color.html hex="#9E9AC8" name="data-violet-500" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-violet-600"></div>
    {% include color.html hex="#807DBA" name="data-violet-600" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-violet-700"></div>
    {% include color.html hex="#6A51A3" name="data-violet-700" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-violet-800"></div>
    {% include color.html hex="#54278F" name="data-violet-800" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-violet-900"></div>
    {% include color.html hex="#3F007D" name="data-violet-900" %}
  </div>
</div>

### Pink Violet data palette

<div class="row color-scale no-gutters">
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-pink-violet-100"></div>
    {% include color.html hex="#FFF7F3" name="data-pink-violet-100" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-pink-violet-200"></div>
    {% include color.html hex="#FDE0DD" name="data-pink-violet-200" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-pink-violet-300"></div>
    {% include color.html hex="#FCC5C0" name="data-pink-violet-300" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-pink-violet-400"></div>
    {% include color.html hex="#FA9FB5" name="data-pink-violet-400" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-pink-violet-500"></div>
    {% include color.html hex="#F768A1" name="data-pink-violet-500" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-pink-violet-600"></div>
    {% include color.html hex="#DD3497" name="data-pink-violet-600" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-pink-violet-700"></div>
    {% include color.html hex="#AE017E" name="data-pink-violet-700" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-pink-violet-800"></div>
    {% include color.html hex="#7A0177" name="data-pink-violet-800" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-pink-violet-900"></div>
    {% include color.html hex="#49006A" name="data-pink-violet-900" %}
  </div>
</div>

### Orange data palette

<div class="row color-scale no-gutters">
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-orange-100"></div>
    {% include color.html hex="#FFF5EB" name="data-orange-100" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-orange-200"></div>
    {% include color.html hex="#FEE6CE" name="data-orange-200" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-orange-300"></div>
    {% include color.html hex="#FDD0A2" name="data-orange-300" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-orange-400"></div>
    {% include color.html hex="#FDAE6B" name="data-orange-400" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-orange-500"></div>
    {% include color.html hex="#FD8D3C" name="data-orange-500" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-orange-600"></div>
    {% include color.html hex="#F16913" name="data-orange-600" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-orange-700"></div>
    {% include color.html hex="#D94801" name="data-orange-700" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-orange-800"></div>
    {% include color.html hex="#A63603" name="data-orange-800" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-orange-900"></div>
    {% include color.html hex="#7F2704" name="data-orange-900" %}
  </div>
</div>

### Gul Rød data palette

<div class="row color-scale no-gutters">
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-yellow-red-100"></div>
    {% include color.html hex="#FFFFCC" name="data-yellow-red-100" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-yellow-red-200"></div>
    {% include color.html hex="#FFEDA0" name="data-yellow-red-200" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-yellow-red-300"></div>
    {% include color.html hex="#FED976" name="data-yellow-red-300" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-yellow-red-400"></div>
    {% include color.html hex="#FEB24C" name="data-yellow-red-400" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-yellow-red-500"></div>
    {% include color.html hex="#FD8D3C" name="data-yellow-red-500" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-yellow-red-600"></div>
    {% include color.html hex="#FC4E2A" name="data-yellow-red-600" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-yellow-red-700"></div>
    {% include color.html hex="#E31A1C" name="data-yellow-red-700" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-yellow-red-800"></div>
    {% include color.html hex="#BD0026" name="data-yellow-red-800" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-yellow-red-900"></div>
    {% include color.html hex="#800026" name="data-yellow-red-900" %}
  </div>
</div>

### Blå data palette

<div class="row color-scale no-gutters">
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-blue-100"></div>
    {% include color.html hex="#F7FBFF" name="data-blue-100" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-blue-200"></div>
    {% include color.html hex="#DEEBF7" name="data-blue-200" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-blue-300"></div>
    {% include color.html hex="#C6DBEF" name="data-blue-300" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-blue-400"></div>
    {% include color.html hex="#9ECAE1" name="data-blue-400" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-blue-500"></div>
    {% include color.html hex="#6BAED6" name="data-blue-500" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-blue-600"></div>
    {% include color.html hex="#4292C6" name="data-blue-600" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-blue-700"></div>
    {% include color.html hex="#2171B5" name="data-blue-700" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-blue-800"></div>
    {% include color.html hex="#08519C" name="data-blue-800" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-blue-900"></div>
    {% include color.html hex="#08306B" name="data-blue-900" %}
  </div>
</div>

### Grøn Blå data palette

<div class="row color-scale no-gutters">
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-green-blue-100"></div>
    {% include color.html hex="#F7FCF0" name="data-green-blue-100" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-green-blue-200"></div>
    {% include color.html hex="#E0F3DB" name="data-green-blue-200" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-green-blue-300"></div>
    {% include color.html hex="#CCEBC5" name="data-green-blue-300" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-green-blue-400"></div>
    {% include color.html hex="#A8DDB5" name="data-green-blue-400" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-green-blue-500"></div>
    {% include color.html hex="#7BCCC4" name="data-green-blue-500" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-green-blue-600"></div>
    {% include color.html hex="#4EB3D3" name="data-green-blue-600" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-green-blue-700"></div>
    {% include color.html hex="#2B8CBE" name="data-green-blue-700" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-green-blue-800"></div>
    {% include color.html hex="#0868AC" name="data-green-blue-800" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-green-blue-900"></div>
    {% include color.html hex="#084081" name="data-green-blue-900" %}
  </div>
</div>

### Grøn data palette

<div class="row color-scale no-gutters">
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-green-100"></div>
    {% include color.html hex="#F7FCF5" name="data-green-100" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-green-200"></div>
    {% include color.html hex="#E5F5E0" name="data-green-200" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-green-300"></div>
    {% include color.html hex="#C7E9C0" name="data-green-300" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-green-400"></div>
    {% include color.html hex="#A1D99B" name="data-green-400" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-green-500"></div>
    {% include color.html hex="#74C476" name="data-green-500" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-green-600"></div>
    {% include color.html hex="#41AB5D" name="data-green-600" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-green-700"></div>
    {% include color.html hex="#238B45" name="data-green-700" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-green-800"></div>
    {% include color.html hex="#006D2C" name="data-green-800" %}
  </div>
  <div class="col col-12 col-md mb-4 md-md-0">
    <div class="color background-data-green-900"></div>
    {% include color.html hex="#00441B" name="data-green-900" %}
  </div>
</div>

## Kontrastforhold {#{% include create-id.html heading="Kontrastforhold" %}}

Din tekst skal være læsbar for alle og efterleve gældende regler for kontrastforhold.

<ul class="nobullet-list">
  <li>{% include links/external-link.html linktext="Læs mere om kontrastforhold" %}</li>
  <li>{% include links/external-link.html linktext="W3C (WCAG 2.1): Understanding SC 1.4.3: Contrast (Minimum) (Level AA)" %}</li>
  <li>{% include links/external-link.html linktext="W3C (WCAG 2.1): Understanding SC 1.4.11: Non-text Contrast (Level AA)" %}</li>
</ul>
