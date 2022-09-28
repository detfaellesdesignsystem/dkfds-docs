---
permalink: /kode/komponenter/datovaelger/
parentlink: /kode/komponenter/
title: Datovælger
layout: styleguide
type: component
category: Kode_category
subcategory: Kode
anchor: true
description: "Dokumentation på implementering af datovælger."
subnav:
- text: Begræns mulige datoer
  href: '#interval'
- text: Fast værdi
  href: '#fast-værdi'
- text: Fejlmeddelelse
  href: '#fejlmeddelelse'
---

{% include code/preview-box.html component="date-picker" title="Eksempel på datovælger" %}

## Eksempler og retningslinjer
<ul class="nobullet-list">
    <li><a href="/komponenter/datovaelger/#retningslinjer">Retningslinjer</a></li>
    <li><a href="/komponenter/datovaelger/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur

{% include code/syntax.html component="date-picker" %}

### Javascript
Datovælger-komponenten kræver JavaScript for at fungere. Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:

{% highlight javascript %}
DKFDS.datePicker.on(document.body);
{% endhighlight %}

#### Funktioner

{:.table}
| Funktion                                        | Element                                 | Beskrivelse                                                                                          |
|-------------------------------------------------|-----------------------------------------|------------------------------------------------------------------------------------------------------|
| <code>DKFDS.datePicker.getDatePickerContext(ELEMENT)</code>  | Vilkårligt HTML element i datovælgeren  | Få fat i datovælger json objekt inklusiv alle HTML elementer i komponenten.             |
| <code>DKFDS.datePicker.validateDateInput(ELEMENT)</code>     | Vilkårligt HTML element i datovælgeren  | Valider værdien i feltet, således at det er et korrekt datoformat og datoen eksisterer. Brug checkValidity() på input elementet efterfølgende. |
| <code>DKFDS.datePicker.disable(ELEMENT)</code>               | Vilkårligt HTML element i datovælgeren  | Deaktiver felt og knap i datovælgeren.                                                                |
| <code>DKFDS.datePicker.enable(ELEMENT)</code>                | Vilkårligt HTML element i datovælgeren  | Aktiver felt og knap i datovælgeren.                                                                  |

## Varianter

{:#interval}
### Begræns mulige datoer
{% include code/syntax.html component="date-picker-interval" link="true" %}

{:#fast-værdi}
### Fast værdi
{% include code/syntax.html component="date-picker-default-date" link="true" %}

{:#fejlmeddelelse}
## Fejlmeddelelse
<a href="/kode/komponenter/fejlmeddelelser/#datovaelger">Læs mere om korrekt brug af fejlmeddelelser og deres formuleringer.</a>

Når der vises en fejlmeddelelse, vis da også <a href="/kode/komponenter/fejlopsummering/">fejlopsummering</a>.