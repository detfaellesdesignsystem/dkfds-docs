---
permalink: "/styleguide/typografi/lister/"
parentlink: "/styleguide/typografi/"
redirect_from:
- "/kode/typografi/lister/"
- "/design/typografi/lister/"
layout: styleguide
category: styleguide_menu
subcategory: Styleguide
title: Lister
lead: Lister bruges til at organisere information, så det giver brugeren overblik.
description: Lister bruges til at organisere information, så det giver brugeren overblik.
tags:
tabs: "Retningslinjer, kode"
---

{% include tabs.html guidelines=true code=true %}

<div id="kode" hidden></div>

{% include code/preview-box.html component="lists" title="Eksempel på lister" classes="intro-example" %}

<!--split-->

## Sådan bruges lister {#{% include create-id.html heading="Sådan bruges lister" %}}

### Anvendes til {#{% include create-id.html heading="Anvendes til" %}}

Brug lister, når du skal liste ord eller sætninger op.

Brug lister til at give brugeren et hurtigt overblik.

### Anvendes ikke til {#{% include create-id.html heading="Anvendes ikke til" %}}

Lister af lange afsnit med forklarende tekst. Brug mellemrum i stedet.

### Vejledning {#{% include create-id.html heading="Vejledning" %}}

Hold listerne så korte og faktuelle som muligt.

Brug tal i listerne, når der er et hierarki i det, du præsenterer.

Ved brug af tal, hold da listen til så få niveauer som muligt - og hvis muligt under 3 niveauer.

Brug punkter, når der ikke er et hierarki i informationerne.

<!--split-->

## Punktopstilling {#{% include create-id.html heading="Punktopstilling" append="-kode" %}}

### HTML Struktur {#{% include create-id.html heading="HTML Struktur" append="-kode" %}}

{% include code/syntax.html component="lists-unordered" copybutton=true %}

## Tegnopstilling {#{% include create-id.html heading="Tegnopstilling" append="-kode" %}}

### HTML Struktur {#{% include create-id.html heading="HTML Struktur tegn" append="-kode" %}}

{% include code/syntax.html component="lists-ordered" copybutton=true %}
