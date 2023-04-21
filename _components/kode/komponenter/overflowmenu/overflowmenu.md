---
permalink: /kode/komponenter/overflowmenu/
parentlink: /kode/komponenter/
title: Overflow menu
layout: styleguide
type: component
category: Kode_category
description: "Dokumentation på implementering af overflow menu."
subcategory: Kode
anchor: true
subnav:
- text: Sortering
  href: '#sortering'
---

{% include code/preview-box.html component="overflow-menu" title="Eksempel på overflow menu komponent" %}

## Eksempler og retningslinjer
<ul class="nobullet-list">
    <li><a href="/komponenter/overflowmenu/#retningslinjer">Retningslinjer</a></li>
    <li><a href="/komponenter/overflowmenu/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur

{% include code/syntax.html component="overflow-menu" %}

#### Klasser

Følgende aria tags styrer hvorvidt menuen er foldet ud:

- Button: `aria-expanded="false"`
- Overflow menu: `aria-hidden="true"`

Følgende klasser styrer i hvilken retning menuen skal folde ud:

- Venstre: `.overflow-menu--open-left`
- Højre: `.overflow-menu--open-right`

Der er lavet et specifikt liste element til overflow-menuen (se `.overflow-list`) som kan indeholde links eller buttons. Det er dog ikke nødvendigt at benytte denne liste. Overflow-menuen er bare en container hvor man kan placere det indhold man nu har lyst til.

#### Skjul/vis

Initialiser collapse/expand javascript med at placere følgende på button elementet: `class="js-dropdown" data-js-target="#overflow1"`

Elementet som skal collapses/expandes skal have et matchende id `id="overflow1"` (placeres på `.overflow-menu-inner`)

### JavaScript

Collapse komponenten kræver JavaScript for at fungere. Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:

{% highlight javascript %}
new DKFDS.Dropdown(document.getElementById('OVERFLOW-BUTTON-ID')).init();
{% endhighlight %}

#### Events

{:.table .table--responsive-headers}
| Event key          | Element              | Beskrivelse                                                                                  |
|--------------------|----------------------|----------------------------------------------------------------------------------------------|
| fds.dropdown.open  | `button.js-dropdown` | Når en overflow menu bliver foldet ud, bliver eventet `fds.dropdown.open` udløst på knappen  |
| fds.dropdown.close | `button.js-dropdown` | Når en overflow menu bliver foldet ind, bliver eventet `fds.dropdown.close` udløst på knappe |

## Tilgængelighed

Overflow menu skal kunne aktiveres og håndteres fra tastatur.

Overflow menu skjuler indhold for brugeren og bør anvendes i begrænset omfang. 

Overflow menu skal kunne aktiveres og håndteres fra tastatur og brugeren skal kunne anvende tastaturet til navigation. 

## Varianter

{:#sortering}
### Sortering
{% include code/syntax.html component="sort" link="true" %}

#### JavaScript

Overflow menu med sorteringsfunktion kræver JavaScript for at fungere. Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:

{% highlight javascript %}
new DKFDS.DropdownSort(document.getElementById('OVERFLOW-MENU-CONTAINER')).init();
{% endhighlight %}

##### Events

{:.table .table--responsive-headers}
| Event key          | Element              | Beskrivelse                                                                                  |
|--------------------|----------------------|----------------------------------------------------------------------------------------------|
| fds.dropdown.open  | `button.js-dropdown` | Når en overflow menu bliver foldet ud, bliver eventet `fds.dropdown.open` udløst på knappen  |
| fds.dropdown.close | `button.js-dropdown` | Når en overflow menu bliver foldet ind, bliver eventet `fds.dropdown.close` udløst på knappe |
| fds.dropdown.selected | `button.js-dropdown` | Når en værdi bliver valgt |
