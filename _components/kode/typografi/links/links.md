---
permalink: /kode/typografi/links/
title: Links
parentlink: /kode/typografi/
category: Kode_category
subcategory: Kode
type: component
layout: styleguide
anchor: true
subnav:
- text: Eksternt link
  href: "#eksternt-link"
- text: Sekundære links
  href: "#sekundaere-links"
- text: Billeder som links
  href: "#billeder-som-links"
description: ""
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

Eksternt link gør brug af ikoner. <a href="/kode/ikoner/">Se dokumentationen for implementering af ikoner</a>.

{:#sekundaere-links}
## Sekundære links

{% include code/preview-box.html component="secondary-links" title="Eksempel på sekundære links" %}

### HTML Struktur

{% include code/syntax.html component="secondary-links" copybutton=true %}

{:#billeder-som-links}
## Billeder som links

Brug en <a href="/kode/utilities/#display">hjælpeklasse</a> til at vælge en anden display-værdi end `inline`.

Tilføj yderligere klassen `full-width-image`, hvis billedets bredde ikke skal begrænses.

Nedenstående kode viser et eksempel på, hvordan klasserne kan anvendes:
{% highlight html %}
<a href="#" class="d-block full-width-image">
  <img src="..." alt="...">
</a>
{% endhighlight %}