---
permalink: /kode/komponenter/beskeder/
parentlink: /kode/komponenter/
layout: styleguide
type: component
title: Beskeder (Alerts)
category: Kode_category
subcategory: Kode
description: "Dokumentation på implementering af besked."
tags:
anchor: true
subnav:
- text: Farver
  href: '#farver'
- text: Beskeder med ikon
  href: '#beskeder-med-ikon'
- text: Paragrafbredde
  href: '#paragrafbredde'
- text: Luk knap
  href: '#luk-knap'
---

{% include code/preview-box.html component="alert" title="Eksempel på besked komponent" %}


## Eksempler og retningslinjer
<ul class="nobullet-list">
    <li><a href="/komponenter/beskeder/#retningslinjer">Retningslinjer</a></li>
    <li><a href="/komponenter/beskeder/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur
{% include code/syntax.html component="alert" %}

Anvend `role="alert"` til beskeder, der skal læses højt af en skærmlæser med det samme, hvis indholdet ændrer sig. Dette kan for eksempel være en besked, der bliver synlig efter at have været skjult eller hvor indholdet ændrer sig. Advarsler og fejlbeskeder bør altid være markeret med `role="alert"`.

Hvis beskeden indeholder en `alert-heading`, sørg da for at benytte et html-element, der passer ind i beskedens kontekst. Dette vil som regel være en overskrift, for eksempel `<h3>`, eller et `<strong>`-element.

### Javascript
Man kan bruge nedenstående JavaScript for at sætte events på luk-knappen i beskederne. Det er kun nødvendigt, hvis man gør brug af luk-knappen.
Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:

{% highlight javascript %}
new DKFDS.Alert(document.getElementById('ALERT-ID')).init();
{% endhighlight %}

#### Events

{:.table}
| Event key           | Element                   | Beskrivelse                                                                                                                                         |
|---------------------|---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| fds.alert.show      | `div.alert`               | Når en besked bliver vist med `DKFDS.Alert(document.getElementById('ALERT-ID')).show();` bliver `fds.alert.show` udløst på beskedelementet                            |
| fds.alert.hide      | `div.alert`               | Når en besked bliver skjult med `DKFDS.Alert(document.getElementById('ALERT-ID')).hide();` eller der trykkes på luk bliver `fds.alert.hide` udløst på beskedelementet |

## Varianter

{:#farver}
### Farver

#### Informativ
Informativ er blå, og defineres med klassen `alert-info`.

{% include code/syntax.html component="alert" link="true" %}

#### Succes
Succesbesked er grøn, og defineres med klassen `alert-success`.

{% include code/syntax.html component="alert-success" link="true" %}

#### Advarsel
Besked med advarsel er gul, og defineres med klassen `alert-warning`.

{% include code/syntax.html component="alert-warning" link="true" %}

#### Fejl
Besked med fejl er rød, og defineres med klassen `alert-error`.

{% include code/syntax.html component="alert-error" link="true" %}

{:#beskeder-med-ikon}
### Ikon
Defineres med klassen `alert--show-icon`.

{% include code/syntax.html component="alerts-icons" link="true"%}

{:#paragrafbredde}
### Paragrafbredde
Defineres med klassen `alert--paragraph`.

{% include code/syntax.html component="alert-paragraph" link="true" %}

{:#luk-knap}
### Luk knap
{% include code/syntax.html component="alert-close" link="true" %}
