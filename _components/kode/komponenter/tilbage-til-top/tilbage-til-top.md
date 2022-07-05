---
permalink: /kode/komponenter/tilbage-til-top/
parentlink: /kode/komponenter/
title: Tilbage-til-top
layout: styleguide
type: component
category: Kode_category
subcategory: Kode
---
{% include code/preview-box.html component="back-to-top" title="Eksempel på tilbage-til-top-knap" %}

## Eksempler og retningslinjer
<ul class="nobullet-list">
    <li><a href="/komponenter/tilbage-til-top/#retningslinjer">Retningslinjer</a></li>
    <li><a href="/komponenter/tilbage-til-top/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur

{% include code/syntax.html component="back-to-top" %}

Husk at have et id i toppen af siden, f.eks. `id="top"`, som tilbage-til-top-knappen kan linke til. Hvis siden indeholder et <a href="/komponenter/skip-link/">Skip-link</a>, bør id'et ligge umiddelbart før dette.

Tilbage-til-top-knappen bør altid være det sidste element på en side, så det først får fokus lige inden footeren, hvis en bruger navigerer med tastaturet.

### Javascript
Tilbage-til-top-knappen kræver JavaScript for at fungere. Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:

{% highlight javascript %}
new DKFDS.BackToTop(document.getElementById('BACK-TO-TOP-ID')).init();
{% endhighlight %}

#### Events

{:.table}
| Event key               | Element                | Beskrivelse                                                                                          |
|-------------------------|------------------------|------------------------------------------------------------------------------------------------------|
| fds.backtotop.hidden    | `a.back-to-top-button` | Når en tilbage-til-top-knap bliver skjult, bliver eventet `fds.backtotop.hidden` udløst på knappen   |
| fds.backtotop.displayed | `a.back-to-top-button` | Når en tilbage-til-top-knap bliver vist, bliver eventet `fds.backtotop.displayed` udløst på knappen  |