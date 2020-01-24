---
permalink: /kode/tjekboks/
title: Tjekboks
layout: styleguide
type: component
category: Kode_category
subcategory: Kode
anchor: true
subnav:
- text: Tjekboks med skjult indhold
  href: "#tjekboks-skjult-indhold"
---

{% include code/preview-box.html component="checkbox-large" title="Eksempel på tjekboks" %}

## Eksempler og dokumentation
<ul class="nobullet-list">
    <li><a href="/komponenter/tjekboks/#retningslinjer">Dokumentation</a></li>
    <li><a href="/komponenter/tjekboks/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur

{% include code/syntax.html component="checkbox-large" %}

- Indsæt altid to eller flere tjekbokse i et fieldset inklusive legend. En enkelt tjekboks skal ikke sidde i et fieldset.
- Giv hver tjekboks sit eget id og angiv samme værdi til det tilhørende label.
- Tjekboksenes design er ændret ift. standardvisningen for at gøre dem tydeligere og øge deres visuelle respons til brugerens interaktion.
- Tjekboksene er gjort tilgængelige for skærmlæsere på trods af deres visuelle design, ved at selve tagget for tjekboksen er placeret uden for det synlige skærmområde.

## Varianter

### Lille tjekboks

{% include code/syntax.html component="checkbox-small" link="true" %}

Vær opmærksom på, at vi anbefaler, at man bruger den store tjekbox.

### Tjekboks med fejl
{% include code/syntax.html component="checkbox-error" link="true" %}

{:#tjekboks-skjult-indhold}
## Tjekboks med skjult indhold
{% include code/preview-box.html component="checkbox-collapse" title="Eksempel på tjekboks med skjult indhold" %}

### Eksempler og dokumentation
<ul class="nobullet-list">
    <li><a href="/komponenter/tjekboks/#retningslinjer">Dokumentation</a></li>
    <li><a href="/komponenter/tjekboks/">Eksempler</a></li>
</ul>

### Installation

#### HTML Struktur
{% include code/syntax.html component="checkbox-collapse" %}

For at initialisere collapse funktionaliteten på en checkbox skal `input[type=checkbox]` have følgende:

- Klassen `'js-checkbox-toggle-content'`. Denne klasse gør at funktionaliteten bliver initialiseret. 
- Attributten `data-js-target="id-of-target-to-collapse"`: denne attribute skal have id'et på det element som skal vises på tjekboksen er aktiveret. 
- Hvis man ønsker at tjekboksen skal være valgt fra starten af, skal den have attributten `'checked'`.
- `aria-controls="id-of-target-to-collapse" `

Det element som skal collapses/expandes skal have følgende:

- `id=”id-of-target-to-collapse”`
- `aria-hidden="true/false"`

#### JavaScript
Tjekboks med skjult indhold kræver JavaScript for at fungere. Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:

{% highlight javascript %}
new DKFDS.CheckboxToggleContent(document.getElementByID('CHECKBOX-INPUT-ID'));
{% endhighlight %}

##### Events

{:.table}
| Event key           | Element                           | Beskrivelse                                                                                               |
|---------------------|-----------------------------------|-----------------------------------------------------------------------------------------------------------|
| fds.collapse.open  | `input.js-checkbox-toggle-content` | Når en skjul/vis komponent bliver foldet ud, bliver eventet fds.collapse.open udløst på input elementet   |
| fds.collapse.close | `input.js-checkbox-toggle-content` | Når en skjul/vis komponent bliver foldet ind, bliver eventet fds.collapse.close udløst på input elementet |

### Varianter
#### Liste
{% include code/syntax.html component="checkbox-collapse-multiple" link="true" %}
