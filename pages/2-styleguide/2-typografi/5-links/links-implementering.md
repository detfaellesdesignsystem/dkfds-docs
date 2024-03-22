---
permalink: "/design/typografi/links/implementering/"
guidelinelink: "/design/typografi/links/guidelines/"
parentlink: "/design/typografi/"
redirect_from:
- "/kode/typografi/links/"
layout: styleguide
category: Styleguide_category
subcategory: Styleguide
title: Links
description:
headings: Links_Kode
anchorlinks: true
tags:
- "ekstern"
- "ekstern link"
- "footer link"
- "footerlink"
---

{% assign headings = site.data.headings[page.headings] %}

[---- Eksternt link -------------------------------------]: # 
<h2 id="{{ headings[0].id }}">{{ headings[0].h2 }}</h2>

{% include code/preview-box.html component="external-link" title="Eksempel på eksternt link" %}

### HTML Struktur

{% include code/syntax.html component="external-link" copybutton=true %}

Eksternt link gør brug af ikoner. Se dokumentationen for {% include links/internal-link.html linktext="implementering af ikoner" %}.

[---- Sekundære links -------------------------------------]: # 
<h2 id="{{ headings[1].id }}">{{ headings[1].h2 }}</h2>

{% include code/preview-box.html component="secondary-links" title="Eksempel på sekundære links" %}

### HTML Struktur

{% include code/syntax.html component="secondary-links" copybutton=true %}

[---- Billeder som links -------------------------------------]: # 
<h2 id="{{ headings[2].id }}">{{ headings[2].h2 }}</h2>

Brug en {% include links/internal-link.html linktext="hjælpeklasse for display" %} til at vælge en anden værdi end `inline`.

Tilføj yderligere klassen `full-width-image`, hvis billedets bredde ikke skal begrænses.

Nedenstående kode viser et eksempel på, hvordan klasserne kan anvendes:
{% highlight html %}
<a href="#" class="d-block full-width-image">
  <img src="..." alt="...">
</a>
{% endhighlight %}