---
permalink: "/kode/komponenter/fejlopsummering/"
parentlink: "/kode/komponenter/"
layout: styleguide
type: component
title: Fejlopsummering
category: Kode_category
description: Dokumentation på implementering af fejlopsummering.
subcategory: Kode
anchor: true
subnav:
- text: Placering
  href: '#placering'
---

{% include code/preview-box.html component="error-summary" title="Eksempel på fejlopssumering" %}

## Eksempler og retningslinjer

{:.nobullet-list}
- <a href="/komponenter/fejlopsummering/#retningslinjer">Retningslinjer</a>
- <a href="/komponenter/fejlopsummering/">Eksempler</a>

## Installation

### HTML Struktur

{% include code/syntax.html component="error-summary" %}

Indsættes over formularen, men under `h1` overskriften.

Hver fejl tilføjes til `<ul>` listen med et anchor link til feltet der er omtalt således at fokus flyttes til pågældende felt.

{:#placering}
#### Placering

{% include code/syntax.html component="error-summary-page" link="true" %}


### Javascript
Fejlopssumering kræver JavaScript for at fungere korrekt i alle browsers. Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:

{% highlight javascript %}
new DKFDS.ErrorSummary(document.getElementById('ALERT-ID')).init();
{% endhighlight %}