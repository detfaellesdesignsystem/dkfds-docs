---
permalink: "/kode/komponenter/modal/"
parentlink: /kode/komponenter/
layout: styleguide
type: component
title: Modalvindue
category: Kode_category
subcategory: Kode
description: "Dokumentation på implementering af modal."
tags: 
---

{% include code/preview-box.html component="modal" title="Eksempel på modal komponent" %}

## Eksempler og retningslinjer
<ul class="nobullet-list">
    <li><a href="/komponenter/modal/#retningslinjer">Retningslinjer</a></li>
    <li><a href="/komponenter/modal/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur

{% include code/syntax.html component="modal" %}

### Javascript
Modal komponenten kræver JavaScript for at fungere. Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:

{% highlight javascript %}
new DKFDS.Modal(document.getElementByID('MODAL-ID'));
{% endhighlight %}

#### Events

{:.table}
| Event key           | Element                   | Beskrivelse                                                                                          |
|---------------------|---------------------------|------------------------------------------------------------------------------------------------------|
| fds.accordion.open  | `button.accordion-button` | Når en accordion bliver foldet ud, bliver eventet `fds.accordion.open` udløst på accordion knappen   |
| fds.accordion.close | `button.accordion-button` | Når en accordion bliver foldet ind, bliver eventet `fds.accordion.close` udløst på accordion knappen |
