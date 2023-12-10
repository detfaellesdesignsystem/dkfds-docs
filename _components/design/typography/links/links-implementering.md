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
anchor: true
subnav:
- text: Eksternt link
  href: "#eksternt-link"
- text: Sekundære links
  href: "#sekundaere-links"
- text: Billeder som links
  href: "#billeder-som-links"
description:
tags:
- "ekstern"
- "ekstern link"
- "footer link"
- "footerlink"
---

{:#eksternt-link}
## Eksternt link

{% include code/preview-box.html component="external-link" title="Eksempel på eksternt link" %}

### HTML Struktur

{% include code/syntax.html component="external-link" copybutton=true %}

Eksternt link gør brug af ikoner. {% include links/internal-link.html linktext="Se dokumentationen for implementering af ikoner" %}.

{:#sekundaere-links}
## Sekundære links

{% include code/preview-box.html component="secondary-links" title="Eksempel på sekundære links" %}

### HTML Struktur

{% include code/syntax.html component="secondary-links" copybutton=true %}

{:#billeder-som-links}
## Billeder som links

Brug en {% include links/internal-link.html linktext="hjælpeklasse" %} til at vælge en anden display-værdi end `inline`.

Tilføj yderligere klassen `full-width-image`, hvis billedets bredde ikke skal begrænses.

Nedenstående kode viser et eksempel på, hvordan klasserne kan anvendes:
{% highlight html %}
<a href="#" class="d-block full-width-image">
  <img src="..." alt="...">
</a>
{% endhighlight %}