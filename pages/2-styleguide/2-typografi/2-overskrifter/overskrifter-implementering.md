---
permalink: "/design/typografi/overskrifter/implementering/"
guidelinelink: "/design/typografi/overskrifter/guidelines/"
parentlink: "/design/typografi/"
redirect_from:
- "/kode/typografi/overskrifter/"
layout: styleguide
category: Styleguide_category
subcategory: Styleguide
title: Overskrifter
lead: Overskrifter strukturerer siden, giver overblik og hjælper brugeren og skærmlæseren
  til at kunne overskue sidens logik og opbygning.
description:
tags:
- "h1"
- "h2"
- "h3"
- "h4"
- "h5"
- "h6"
---

{% include anchorlinks.html code="Overskrifter_Kode" %}

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
