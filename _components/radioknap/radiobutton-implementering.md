---
permalink: "/komponenter/radioknap/implementering/"
guidelinelink: "/komponenter/radioknap/guidelines/"
redirect_from:
- "/kode/komponenter/radioknap/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Radioknap (Radio button)
lead: Radioknapper lader brugeren vælge én blandt flere muligheder.
component: "radiobutton"
componentTitle: "Eksempel på radioknap"
anchor: true
subnav:
- text: Installation
  href: '#installation'
- text: Hjælpetekst
  href: '#hjaelpetekst'
- text: Skjult indhold (Collapse)
  href: '#skjult-indhold'
description: "Dokumentation på implementering af radioknapper."
tags:
---

{:#installation}
## Installation

### HTML Struktur

{% include code/syntax.html component="radiobutton" copybutton=true %}

Indsæt altid to eller flere radioknapper i et fieldset inklusive legend.

Giv hver radioknap sit eget id og angiv samme værdi til det tilhørende label.

`name` attributten bør have samme værdi for alle radioknapper i en liste.

Radioknappernes design er ændret i forhold til standardvisningen for at gøre dem tydeligere og øge deres visuelle respons til brugerens interaktion.

### JavaScript

Radioknapper med skjult indhold kræver JavaScript for at fungere. Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:

{% highlight javascript %}
new DKFDS.RadioToggleGroup(document.getElementById('DIV-CONTAINER-ID')).init();
{% endhighlight %}

#### Events

{:.table .table--responsive-headers}
| Event key           | Element                           | Beskrivelse                                                                                               |
|---------------------|-----------------------------------|-----------------------------------------------------------------------------------------------------------|
| fds.collapse.expanded  | `input.js-radio-toggle-group` | Når en skjul/vis komponent bliver foldet ud, bliver eventet fds.collapse.open udløst på input elementet.       |
| fds.collapse.collapsed | `input.js-radio-toggle-group` | Når en skjul/vis komponent bliver foldet ind, bliver eventet fds.collapse.close udløst på input elementet.     |

{:#hjaelpetekst}
## Hjælpetekst

{% include code/syntax.html component="radiobutton-helptext" link=true copybutton=true %}

{:#skjult-indhold}
## Skjult indhold (Collapse)

{% include code/syntax.html component="radio-collapse" link=true copybutton=true %}

For at initialisere collapse funktionaliteten på en radioknap skal `input[type=radio]` have følgende:

- Klassen `'js-radio-toggle-content'`. Denne klasse gør at funktionaliteten bliver initialiseret. 
- Attributten `data-controls="id-of-target-to-collapse"`: denne attribute skal have id'et på det element som skal vises på radioknappen er aktiveret. 
- Hvis man ønsker at radioknappen skal være valgt fra starten af, skal den have attributten `checked` samt `data-expanded="true"`. Indholdselementet bør have attributten `aria-hidden="false"`

Det element som skal collapses/expandes skal have følgende:

- `id="id-of-target-to-collapse"`
- `aria-hidden="false"` hvis indholdet vises og `aria-hidden="true"` hvis indholdet skjules

