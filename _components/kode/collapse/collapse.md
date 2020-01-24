---
permalink: /kode/collapse/
title: Skjul og vis (Collapse)
layout: styleguide
type: component
category: Kode_category
subcategory: Kode
---

{% include code/preview-box.html component="basic-collapse" title="Eksempel på Skjul og vis komponent" %}

## Eksempler og dokumentation
<ul class="nobullet-list">
    <li><a href="/komponenter/buttons/#retningslinjer">Dokumentation</a></li>
    <li><a href="/komponenter/buttons/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur

{% include code/syntax.html component="basic-collapse" %}

Kopiér ovenstående kode, og ret id-attributtens værdi, så det matcher din løsning. Sørg for at rette alle referencer til elementet.

### JavaScript

Collapse komponenten kræver JavaScript for at fungere. Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:

{% highlight javascript %}
new DKFDS.Collapse(document.getElementByID('COLLAPSE-BUTTON-ID'));
{% endhighlight %}

#### Events

{:.table}
| Event key          | Element              | Beskrivelse                                                                                         |
|--------------------|----------------------|-----------------------------------------------------------------------------------------------------|
| fds.collapse.open  | `button.js-collapse` | Når en skjul/vis komponent bliver foldet ud, bliver eventet `fds.collapse.open` udløst på knappen   |
| fds.collapse.close | `button.js-collapse` | Når en skjul/vis komponent bliver foldet ind, bliver eventet `fds.collapse.close` udløst på knappen |