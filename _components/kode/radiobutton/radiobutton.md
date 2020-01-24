---
permalink: /kode/radiobutton/
title: Radioknap
layout: styleguide
type: component
category: Kode_category
subcategory: Kode
anchor: true
subnav:
- text: Radioknap med skjult indhold
  href: "#radioknap-skjult-indhold"
---

{% include code/preview-box.html component="radiobutton" title="Eksempel på radioknap" %}

## Eksempler og dokumentation
<ul class="nobullet-list">
    <li><a href="/komponenter/radiobutton/#retningslinjer">Dokumentation</a></li>
    <li><a href="/komponenter/radiobutton/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur

{% include code/syntax.html component="radiobutton" %}

- Indsæt altid to eller flere radioknapper i et fieldset inklusive legend.
- Giv hver radioknap sit eget id og angiv samme værdi til det tilhørende label.
- Radioknappernes design er ændret i forhold til standardvisningen for at gøre dem tydeligere og øge deres visuelle respons til brugerens interaktion.

## Varianter

### Lille radioknap

{% include code/syntax.html component="radiobutton-small" link="true" %}

### Radioknap med hjælpetekst
{% include code/syntax.html component="radiobutton-helptext" link="true" %}

### Radioknap med fejl
{% include code/syntax.html component="radiobutton-error" link="true" %}

{:#radioknap-skjult-indhold}
## Radioknap med skjult indhold

{% include code/preview-box.html component="radio-collapse" title="Eksempel på radioknapper med skjult indhold" %}

### Eksempler og dokumentation
<ul class="nobullet-list">
    <li><a href="/komponenter/radiobutton/#retningslinjer">Dokumentation</a></li>
    <li><a href="/komponenter/radiobutton/">Eksempler</a></li>
</ul>

### Installation

#### HTML Struktur
{% include code/syntax.html component="radio-collapse" %}

For at initialisere collapse funktionaliteten på en checkbox skal `input[type=checkbox]` have følgende:

- Klassen `'js-checkbox-toggle-content'`. Denne klasse gør at funktionaliteten bliver initialiseret. 
- Attributten `data-js-target="id-of-target-to-collapse"`: denne attribute skal have id'et på det element som skal vises på tjekboksen er aktiveret. 
- Hvis man ønsker at tjekboksen skal være valgt fra starten af, skal den have attributten `'checked'`.
- `aria-controls="id-of-target-to-collapse" `

Det element som skal collapses/expandes skal have følgende:

- `id=”id-of-target-to-collapse”`
- `aria-hidden="true/false"`

#### JavaScript
Radioknapper med skjult indhold kræver JavaScript for at fungere. Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:

{% highlight javascript %}
new DKFDS.RadioToggleGroup(document.getElementByID('DIV-CONTAINER-ID'));
{% endhighlight %}

##### Events

{:.table}
| Event key           | Element                           | Beskrivelse                                                                                               |
|---------------------|-----------------------------------|-----------------------------------------------------------------------------------------------------------|
| fds.collapse.open  | `input.js-radio-toggle-group` | Når en skjul/vis komponent bliver foldet ud, bliver eventet fds.collapse.open udløst på input elementet.       |
| fds.collapse.close | `input.js-radio-toggle-group` | Når en skjul/vis komponent bliver foldet ind, bliver eventet fds.collapse.close udløst på input elementet.     |
