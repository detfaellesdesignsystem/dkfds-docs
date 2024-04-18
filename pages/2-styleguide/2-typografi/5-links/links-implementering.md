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
tags:
- "ekstern"
- "ekstern link"
- "footer link"
- "footerlink"
---

{% include anchorlinks.html code="Links_Kode" %}

## Eksternt link {#{% include create-id.html heading="Eksternt link" append="-kode" %}}

{% include code/preview-box.html component="external-link" title="Eksempel på eksternt link" %}

### HTML Struktur

{% include code/syntax.html component="external-link" copybutton=true %}

Eksternt link gør brug af ikoner. Se dokumentationen for {% include links/internal-link.html linktext="implementering af ikoner" %}.

## Sekundære links {#{% include create-id.html heading="Sekundære links" append="-kode" %}}

{% include code/preview-box.html component="secondary-links" title="Eksempel på sekundære links" %}

### HTML Struktur

{% include code/syntax.html component="secondary-links" copybutton=true %}

## Billeder som links {#{% include create-id.html heading="Billeder som links" append="-kode" %}}

Brug en {% include links/internal-link.html linktext="hjælpeklasse for display" %} til at vælge en anden værdi end `inline`.

Tilføj yderligere klassen `full-width-image`, hvis billedets bredde ikke skal begrænses.

Nedenstående kode viser et eksempel på, hvordan klasserne kan anvendes:
{% highlight html %}
<a href="#" class="d-block full-width-image">
  <img src="..." alt="...">
</a>
{% endhighlight %}