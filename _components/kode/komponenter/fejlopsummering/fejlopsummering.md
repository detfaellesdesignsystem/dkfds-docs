---
permalink: "/kode/komponenter/fejlopsummering/"
parentlink: "/kode/komponenter/"
layout: styleguide
category: Kode_category
subcategory: Kode
title: Fejlopsummering
component: "error-summary"
componentTitle: "Eksempel på fejlopssumering"
anchor: true
subnav:
- text: Placering
  href: '#placering'
description: Dokumentation på implementering af fejlopsummering.
tags:
---

## Eksempler og retningslinjer

{:.nobullet-list}
- <a href="/komponenter/fejlopsummering/#retningslinjer">Retningslinjer</a>
- <a href="/komponenter/fejlopsummering/">Eksempler</a>

## Installation

### HTML Struktur

{% include code/syntax.html component="error-summary" copybutton=true %}

Indsættes over formularen, men under `h1` overskriften.

Hver fejl tilføjes til `<ul>` listen med et anchor link til feltet der er omtalt således at fokus flyttes til pågældende felt.

{:#placering}
#### Placering

{% include code/syntax.html component="error-summary-page" link=true copybutton=true %}


### Javascript
Fejlopsummering kræver JavaScript samt attributten `data-module="error-summary"` for at fungere korrekt. Dermed vil et klik på et link i opsummeringen betyde, at brugeren scroller ned til feltet med fejl uden at scrolle forbi feltets label. Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:

{% highlight javascript %}
new DKFDS.ErrorSummary(document.getElementById('ALERT-ID')).init();
{% endhighlight %}