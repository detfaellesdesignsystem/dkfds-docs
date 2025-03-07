---
permalink: /eksempler/templates/
redirect_from:
- /eksempler/kvittering/
- /eksempler/opsummeringsside/
layout: styleguide
category: Eksempler_category
subcategory: Eksempler
title: Templates
lead: Templates er best practice designløsninger til specifikke sidetyper.
description: Visning af sidetyper, der går igen på tværs af løsninger
tags:
---

{% include anchorlinks.html headings="Templates" %}

## Dashboard {#{% include create-id.html heading="Dashboard" %}}

<ul class="row card-row">
    {% include navcard-thumbnails.html 
        href="/pages/eksempler/dashboard/dashboard-1/"
        id="card-dashboard-1"
        heading="Dashboard"
    %}
</ul>

## Opgaveliste {#{% include create-id.html heading="Opgaveliste" %}}

<ul class="row card-row">
    {% include navcard-thumbnails.html 
        href="/pages/eksempler/opgaveliste/"
        id="card-opgaveliste"
        heading="Opgaveliste"
    %}
</ul>

## Vedhæft filer {#{% include create-id.html heading="Vedhæft filer" %}}

<ul class="row card-row">
    {% include navcard-thumbnails.html 
        href="/pages/eksempler/vedhaeft-fil/fil-1/"
        id="card-fil-1"
        heading="Vedhæft fil"
    %}
    {% include navcard-thumbnails.html 
        href="/pages/eksempler/vedhaeft-fil/fil-2/"
        id="card-fil-2"
        heading="Liste af vedhæftede filer"
    %}
    {% include navcard-thumbnails.html 
        href="/pages/eksempler/vedhaeft-fil/fil-3/"
        id="card-fil-3"
        heading="Fejl i vedhæftede filer"
    %}
</ul>

## Opsummering {#{% include create-id.html heading="Opsummering" %}}

<ul class="row card-row">
    {% include navcard-thumbnails.html 
        href="/pages/eksempler/opsummering/opsummering-1/"
        id="card-opsummering-1"
        heading="Opsummering med venstrestillet trinindikator"
    %}
    {% include navcard-thumbnails.html 
        href="/pages/eksempler/opsummering/opsummering-2/"
        id="card-opsummering-2"
        heading="Opsummering med trinindikator i overflowmenu"
    %}
</ul>

## Kvittering {#{% include create-id.html heading="Kvittering" %}}

<ul class="row card-row">
    {% include navcard-thumbnails.html 
        href="/pages/eksempler/kvittering/kvittering-1/"
        id="card-kvittering-1"
        heading="Kvittering med opsummering"
    %}
    {% include navcard-thumbnails.html 
        href="/pages/eksempler/kvittering/kvittering-2/"
        id="card-kvittering-2"
        heading="Kvittering med betalingsoplysninger"
    %}
</ul>

## Fejl {#{% include create-id.html heading="Fejl" %}}

<ul class="row card-row">
    {% include navcard-thumbnails.html 
        href="/pages/eksempler/formular-med-fejl/formular-med-fejl-1/"
        id="card-formular-med-fejl-1"
        heading="Formular med fejl"
    %}
    {% include navcard-thumbnails.html 
        href="/pages/eksempler/trinindikator-med-fejl/trinindikator-med-fejl-1/"
        id="card-trinindikator-med-fejl-1"
        heading="Fejl i tidligere trin"
    %}
</ul>

## Siden kunne ikke findes (404-side) {#{% include create-id.html heading="Siden kunne ikke findes (404-side)" %}}

<ul class="row card-row">
    {% include navcard-thumbnails.html 
        href="/pages/eksempler/siden-kunne-ikke-findes-1/"
        id="card-siden-kunne-ikke-findes-1"
        heading="404-side"
    %}
    {% include navcard-thumbnails.html 
        href="/pages/eksempler/siden-kunne-ikke-findes-2/"
        id="card-siden-kunne-ikke-findes-2"
        heading="404-side med søgefelt"
    %}
</ul>
