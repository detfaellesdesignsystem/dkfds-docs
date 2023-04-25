---
permalink: /kode/komponenter/tjekboks/
title: Tjekboks (Checkbox)
parentlink: /kode/komponenter/
layout: styleguide
type: component
category: Kode_category
subcategory: Kode
description: "Dokumentation på implementering af tjekbokse."
tags:
anchor: true
subnav:
- text: Lille tjekboks
  href: '#lille-tjekboks'
- text: Skjult indhold (Collapse)
  href: '#skjult-indhold-collapse'
---

{% include code/preview-box.html component="checkbox-large" title="Eksempel på tjekboks" %}

## Eksempler og retningslinjer
<ul class="nobullet-list">
    <li><a href="/komponenter/tjekboks/#retningslinjer">Retningslinjer</a></li>
    <li><a href="/komponenter/tjekboks/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur

{% include code/syntax.html component="checkbox-large" copybutton=true %}

- Indsæt altid to eller flere tjekbokse i et fieldset inklusive legend. En enkelt tjekboks skal ikke sidde i et fieldset.
- Giv hver tjekboks sit eget id og angiv samme værdi til det tilhørende label.
- Tjekboksenes design er ændret ift. standardvisningen for at gøre dem tydeligere og øge deres visuelle respons til brugerens interaktion.
- Tjekboksene er gjort tilgængelige for skærmlæsere på trods af deres visuelle design, ved at selve tagget for tjekboksen er placeret uden for det synlige skærmområde.

### JavaScript
Tjekboks med skjult indhold kræver JavaScript for at fungere. Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:

{% highlight javascript %}
new DKFDS.CheckboxToggleContent(document.getElementById('CHECKBOX-INPUT-ID')).init();
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
        <td>fds.collapse.expanded</td>
        <td><code>input.js-checkbox-toggle-content</code></td>
        <td>Når en skjul/vis komponent bliver foldet ud, bliver eventet fds.collapse.open udløst på input elementet</td>
      </tr>
      <tr>
        <td>fds.collapse.collapsed</td>
        <td><code>input.js-checkbox-toggle-content</code></td>
        <td>Når en skjul/vis komponent bliver foldet ind, bliver eventet fds.collapse.close udløst på input elementet</td>
      </tr>
    </tbody>
  </table>
</div>

## Varianter

{:#lille-tjekboks}
### Lille tjekboks

{% include code/syntax.html component="checkbox-small" link=true copybutton=true %}

Vær opmærksom på, at vi anbefaler, at man bruger den store tjekboks.

{:#skjult-indhold-collapse}
### Skjult indhold (Collapse)

{% include code/syntax.html component="checkbox-collapse" link=true copybutton=true %}

<a href="/komponenter/tjekboks/#retningslinjer">Retningslinjer</a>

For at initialisere collapse funktionaliteten på en checkbox skal `input[type=checkbox]` have følgende:

- Klassen `'js-checkbox-toggle-content'`. Denne klasse gør at funktionaliteten bliver initialiseret. 
- Attributten `data-js-target="id-of-target-to-collapse"`: denne attribute skal have samme værdi som i id attributten på det element som skal vises på tjekboksen er aktiveret. 
- Hvis man ønsker at tjekboksen skal være valgt fra starten af, skal den have attributten `'checked'`.
- `aria-controls="id-of-target-to-collapse" `

Det element som skal collapses/expandes skal have følgende:

- `id="id-of-target-to-collapse"`
- `aria-hidden="true/false"`

