---
permalink: "/design/typografi/tekst/implementering/"
guidelinelink: "/design/typografi/tekst/guidelines/"
parentlink: "/design/typografi/"
redirect_from:
- "/kode/typografi/tekst/"
layout: styleguide
category: Styleguide_category
subcategory: Styleguide
title: Tekst
description:
headings: Tekst_Kode
anchorlinks: true
tags:
- "stor tekst"
- "manchet"
- "manchet tekst"
- "brødtekst"
- "hjælpetekst"
- "fejlbesked"
- "fejlmeddelelser"
---

{% assign headings = site.data.headings[page.headings] %}

[---- Manchet -------------------------------------]: # 
<h2 id="{{ headings[0].id }}">{{ headings[0].h2 }}</h2>

{% include code/preview-box.html component="lead_paragraph" link=false title="Eksempel på manchet" %}

{% include links/internal-link.html linktext="Læs retningslinjerne for manchet" %}

### HTML Struktur

{% include code/syntax.html component="lead_paragraph" copybutton=true %}

[---- Brødtekst -------------------------------------]: # 
<h2 id="{{ headings[1].id }}">{{ headings[1].h2 }}</h2>

{% include code/preview-box.html component="inlinetext" link=false title="Eksempel på brødtekst" %}

{% include links/internal-link.html linktext="Læs retningslinjerne for brødtekst" %}

### HTML Struktur

{% include code/syntax.html component="inlinetext" copybutton=true %}

[---- Hjælpetekst og fejlmeddelelser -------------------------------------]: # 
<h2 id="{{ headings[2].id }}">{{ headings[2].h2 }}</h2>

{% include code/preview-box.html component="helptext" link=false title="Eksempel på hjælpetekst og fejlmeddelelse" %}

{% include links/internal-link.html linktext="Læs retningslinjer for hjælpetekst og fejlmeddelelser" %}

### HTML Struktur

{% include code/syntax.html component="helptext" copybutton=true %}

[---- Billedtekst -------------------------------------]: # 
<h2 id="{{ headings[3].id }}">{{ headings[3].h2 }}</h2>

{% include code/preview-box.html component="caption" link=false title="Eksempel på billedtekst" %}

{% include links/internal-link.html linktext="Læs retningslinjer for billedtekst" %}

### HTML Struktur

{% include code/syntax.html component="caption" copybutton=true %}

[---- Stor tekst -------------------------------------]: # 
<h2 id="{{ headings[4].id }}">{{ headings[4].h2 }}</h2>

{% include code/preview-box.html component="displaytext" link=false title="Eksempel på stor tekst" %}

{% include links/internal-link.html linktext="Læs retningslinjerne for stor tekst" %}

### HTML Struktur

{% include code/syntax.html component="displaytext" copybutton=true %}
