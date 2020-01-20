---
permalink: /kode/collapse/
layout: styleguide
type: component
title: Skjul og vis (Collapse)
category: Kode_category
subcategory: Kode
---

## Komponent
<div>
{% include code/components/basic-collapse.html %}
</div>

<ul class="nobullet-list mt-7">
    <li><a href="/komponenter/buttons/#retningslinjer">Retningslinjer</a></li>
    <li><a href="/komponenter/buttons/">Eksempler</a></li>
</ul>

## Implementering

{% include code/syntax.html component="basic-collapse" %}

Kopiér ovenstående kode, og ret id-attributtens værdi, så det matcher din løsning. Sørg for at rette alle referencer til elementet.

## JavaScript

Collapse komponenten kræver JavaScript for at fungere. Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:

{% highlight javascript %}
new DKFDS.Collapse(document.getElementByID('COLLAPSE-BUTTON-ID'));
{% endhighlight %}

### Events

{:.table}
| Event key          | Element              | Beskrivelse                                                                                         |
|--------------------|----------------------|-----------------------------------------------------------------------------------------------------|
| fds.collapse.open  | `button.js-collapse` | Når en skjul/vis komponent bliver foldet ud, bliver eventet `fds.collapse.open` udløst på knappen   |
| fds.collapse.close | `button.js-collapse` | Når en skjul/vis komponent bliver foldet ind, bliver eventet `fds.collapse.close` udløst på knappen |
