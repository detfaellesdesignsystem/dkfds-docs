---
permalink: /kode/komponenter/detaljer/
redirect_from:
- /kode/komponenter/collapse/
parentlink: /kode/komponenter/
title: Detaljer
layout: styleguide
type: component
category: Kode_category
description: "Dokumentation på implementering af Detaljer komponenten."
tags:
subcategory: Kode
---

{% include code/preview-box.html component="details" title="Eksempel på detaljer komponent" %}

## Eksempler og retningslinjer
<ul class="nobullet-list">
    <li><a href="/komponenter/detaljer/#retningslinjer">Retningslinjer</a></li>
    <li><a href="/komponenter/detaljer/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur

{% include code/syntax.html component="details" %}

### Javascript
Detaljer komponenten kræver JavaScript for at fungere i alle browsers. Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:

{% highlight javascript %}
new DKFDS.Details(document.getElementById('DETAILS-ID'));
{% endhighlight %}

Attributterne `aria-expanded` og `aria-hidden` tilføjes automatisk i JavaScript i de browsers, hvor det er nødvendigt.
