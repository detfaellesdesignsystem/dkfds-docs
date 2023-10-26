---
permalink: "/komponenter/faneblade/implementering/"
guidelinelink: "/komponenter/faneblade/guidelines/"
redirect_from:
- "/kode/komponenter/faneblad/"
- "/kode/komponenter/faneblade/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Faneblade (Tabs)
lead: Faneblade gør det muligt for brugerne at bladre imellem relaterede sektioner
  af indhold og kun få vist en sektion af gangen. Vær opmærksom på om dine brugere
  ser de skjulte sektioner, når du anvender faneblade.
component: "tabnav"
componentTitle: "Eksempel på faneblad"
anchor: false
description: "Dokumentation på implementering af faneblad."
tags:
---

## Eksempler og retningslinjer
<ul class="nobullet-list">
    <li><a href="/komponenter/faneblade/#retningslinjer">Retningslinjer</a></li>
    <li><a href="/komponenter/faneblade/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur

{% include code/syntax.html component="tabnav" copybutton=true %}

### JavaScript

Hvis en komponent først bliver tilføjet på siden efter pageload, så vil der være stor sandsynlighed for at komponenten ikke virker optimalt, da events ikke er blevet sat.

Hvis man står i denne situation kan man definere denne komponent i JavaScript således:

{% highlight js %}
new DKFDS.Tabnav(document.getElementById('TABNAV-ID')).init();
{% endhighlight %}

Bemærk, at dette kun gælder fra version 5.0.0.

#### Events

Når man vælger et nyt faneblad, bliver eventet `fds.tabnav.changed` udløst på `.tabnav` elementet, som man kan koble sig på med en eventlistener.

Når et faneblad åbnes, bliver eventet `fds.tabnav.open` udløst på det tilhørende `.tabnav-item` menu element, som man kan koble sig på med en eventlistener.

Når et faneblad lukkes, bliver eventet `fds.tabnav.close` udløst på det tilhørende `.tabnav-item` menu element, som man kan koble sig på med en eventlistener.
