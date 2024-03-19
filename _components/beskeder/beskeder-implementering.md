---
permalink: "/komponenter/beskeder/implementering/"
guidelinelink: "/komponenter/beskeder/guidelines/"
redirect_from:
- "/kode/komponenter/beskeder/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Beskeder (Alerts)
lead: Beskeder anvendes til at fremhæve aktuel information, som er vigtig for brugeren.
component: "alerts"
componentTitle: "Eksempel på besked komponent"
anchor: true
subnav:
- text: Installation
  href: '#installation'
- text: Farver
  href: '#farver'
- text: Ikon
  href: '#beskeder-med-ikon'
- text: Paragrafbredde
  href: '#paragrafbredde'
- text: Luk knap
  href: '#luk-knap'
description: "Dokumentation på implementering af besked."
tags:
---

{:#installation}
## Installation

### HTML Struktur

{% include code/syntax.html component="alerts" copybutton=true %}

Anvend `role="alert"` til beskeder, der skal læses højt af en skærmlæser med det samme, hvis indholdet ændrer sig. Dette kan for eksempel være en besked, der bliver synlig efter at have været skjult eller hvor indholdet ændrer sig. Advarsler og fejlbeskeder bør altid være markeret med `role="alert"`.

Hvis beskeden indeholder en `alert-heading`, sørg da for at benytte et html-element, der passer ind i konteksten på siden. Dette vil som regel være en overskrift, for eksempel `<h3>`, eller et `<strong>`-element.

### Javascript

Man kan bruge nedenstående JavaScript for at sætte events på luk-knappen i beskederne. Det er kun nødvendigt, hvis man gør brug af luk-knappen.
Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:

{% highlight javascript %}
new DKFDS.Alert(document.getElementById('ALERT-ID')).init();
{% endhighlight %}

#### Events

<div class="table--responsive-scroll">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Event key</th>
        <th scope="col">Element</th>
        <th scope="col">Beskrivelse</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>fds.alert.show</td>
        <td><code>div.alert</code></td>
        <td>Når en besked bliver vist med <code>DKFDS.Alert(document.getElementById('ALERT-ID')).show();</code> bliver <code>fds.alert.show</code> udløst på beskedelementet</td>
      </tr>
      <tr>
        <td>fds.alert.hide</td>
        <td><code>div.alert</code></td>
        <td>Når en besked bliver skjult med <code>DKFDS.Alert(document.getElementById('ALERT-ID')).hide();</code> eller der trykkes på luk bliver <code>fds.alert.hide</code> udløst på beskedelementet</td>
      </tr>
    </tbody>
  </table>
</div>

{:#farver}
## Farver

### Informativ
Informativ er blå, og defineres med klassen `alert-info`.

{% include code/syntax.html component="alert-info" link=true copybutton=true %}

### Succes
Succesbesked er grøn, og defineres med klassen `alert-success`.

{% include code/syntax.html component="alert-success" link=true copybutton=true %}

### Advarsel
Besked med advarsel er gul, og defineres med klassen `alert-warning`.

{% include code/syntax.html component="alert-warning" link=true copybutton=true %}

### Fejl
Besked med fejl er rød, og defineres med klassen `alert-error`.

{% include code/syntax.html component="alert-error" link=true copybutton=true %}

{:#beskeder-med-ikon}
## Ikon

Defineres med klassen `alert--show-icon`.

{% include code/syntax.html component="alerts-icons" link=true copybutton=true %}

{:#paragrafbredde}
## Paragrafbredde

Defineres med klassen `alert--paragraph`.

{% include code/syntax.html component="alert-paragraph" link=true copybutton=true %}

{:#luk-knap}
## Luk knap

{% include code/syntax.html component="alert-close" link=true copybutton=true %}
