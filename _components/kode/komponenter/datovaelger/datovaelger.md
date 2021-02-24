---
permalink: /kode/komponenter/datovaelger/
parentlink: /kode/komponenter/
title: Datovælger
layout: styleguide
type: component
category: Kode_category
subcategory: Kode
anchor: true
description: "Dokumentation på implementering af datofelt."
subnav:
- text: Interval
  href: '#interval'
---

{% include code/preview-box.html component="date-picker" title="Eksempel på dato felt" %}

## Eksempler og retningslinjer
<ul class="nobullet-list">
    <li><a href="/komponenter/datovaelger/#retningslinjer">Retningslinjer</a></li>
    <li><a href="/komponenter/datovaelger/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur

{% include code/syntax.html component="date-picker" %}

### Javascript
Accordion komponenten kræver JavaScript for at fungere. Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:

{% highlight javascript %}
DKFDS.datePicker.on(document.body);
{% endhighlight %}

## Varianter

{:#interval}
### Interval
{% include code/syntax.html component="date-picker-interval" link="true" %}

{:#fast-værdi}
### Fast værdi
{% include code/syntax.html component="date-picker-default-date" link="true" %}
