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
  href: '#fast-vaerdi'
- text: Datoformat
  href: '#datoformat'
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

{:#sprog}
#### Sprog
Hvis du ønsker at anvende et andet sprog end dansk i JavaScript-koden for datovælgeren, skal du selv give din oversættelse med inden komponenten initialiseres. Husk at opdatere værdien i attributten "lang" i din sides html-tag. Indholdet i krøllede parenteser `{...}` nedenunder skal ikke oversættes eller ændres. Bemærk, at ændring af sproget påvirker alle datovælgere på siden.

{% highlight javascript %}
DKFDS.datePicker.setLanguage({
  "open_calendar": "Åbn kalender",
  "choose_a_date": "Vælg en dato",
  "choose_a_date_between": "Vælg en dato mellem {minDay}. {minMonthStr} {minYear} og {maxDay}. {maxMonthStr} {maxYear}",
  "choose_a_date_before": "Vælg en dato. Der kan vælges indtil {maxDay}. {maxMonthStr} {maxYear}.",
  "choose_a_date_after": "Vælg en dato. Der kan vælges fra {minDay}. {minMonthStr} {minYear} og fremad.",
  "aria_label_date": "{dayStr} den {day}. {monthStr} {year}",
  "current_month_displayed": "Viser {monthLabel} {focusedYear}",
  "first_possible_date": "Første valgbare dato",
  "last_possible_date": "Sidste valgbare dato",
  "previous_year": "Navigér ét år tilbage",
  "previous_month": "Navigér én måned tilbage",
  "next_month": "Navigér én måned frem",
  "next_year": "Navigér ét år frem",
  "select_month": "Vælg måned",
  "select_year": "Vælg år",
  "previous_years": "Navigér {years} år tilbage",
  "next_years": "Navigér {years} år frem",
  "guide": "Navigerer du med tastatur, kan du skifte dag med højre og venstre piletaster, uger med op og ned piletaster, måneder med page up og page down-tasterne og år med shift-tasten plus page up eller page down. Home og end-tasten navigerer til start eller slutning af en uge.",
  "months_displayed": "Vælg en måned",
  "years_displayed": "Viser år {start} til {end}. Vælg et år.",
  "january": "januar",
  "february": "februar",
  "march": "marts",
  "april": "april",
  "may": "maj",
  "june": "juni",
  "july": "juli",
  "august": "august",
  "september": "september",
  "october": "oktober",
  "november": "november",
  "december": "december",
  "monday": "mandag",
  "tuesday": "tirsdag",
  "wednesday": "onsdag",
  "thursday": "torsdag",
  "friday": "fredag",
  "saturday": "lørdag",
  "sunday": "søndag"
  });
DKFDS.datePicker.on(document.body);
{% endhighlight %}

#### Funktioner

<div class="table--responsive-scroll">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Funktion</th>
        <th scope="col">Element</th>
        <th scope="col">Beskrivelse</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>DKFDS.datePicker.getDatePickerContext(ELEMENT)</code></td>
        <td>Vilkårligt HTML element i datovælgeren</td>
        <td>Få fat i datovælger json objekt inklusiv alle HTML elementer i komponenten.</td>
      </tr>
      <tr>
        <td><code>DKFDS.datePicker.validateDateInput(ELEMENT)</code></td>
        <td>Vilkårligt HTML element i datovælgeren</td>
        <td>Valider værdien i feltet, således at det er et korrekt datoformat og datoen eksisterer. Brug checkValidity() på input elementet efterfølgende.</td>
      </tr>
      <tr>
        <td><code>DKFDS.datePicker.disable(ELEMENT)</code></td>
        <td>Vilkårligt HTML element i datovælgeren</td>
        <td>Deaktiver felt og knap i datovælgeren.</td>
      </tr>
      <tr>
        <td><code>DKFDS.datePicker.enable(ELEMENT)</code></td>
        <td>Vilkårligt HTML element i datovælgeren</td>
        <td>Aktiver felt og knap i datovælgeren.</td>
      </tr>
    </tbody>
  </table>
</div>

## Varianter

{:#interval}
### Begræns mulige datoer
{% include code/syntax.html component="date-picker-interval" link="true" %}

{:#fast-vaerdi}
### Fast værdi
{% include code/syntax.html component="date-picker-default-date" link="true" %}

{:#datoformat}
### Datoformat
Anvend attributten `data-dateformat`. Mulige værdier er:
- `"DD/MM/YYYY"` (default, hvis der ikke er nogen attribut)
- `"DD-MM-YYYY"`
- `"DD.MM.YYYY"`
- `"DD MM YYYY"`
- `"DD/MM-YYYY"`

Bemærk at valg af datoformat udelukkende påvirker, hvordan datoer vises i inputfeltet, efter brugeren har trykket på en dato i datovælgeren. Alle ovenstående datoformater er gyldige, hvis brugeren selv vælger at skrive datoen ind i feltet.

{% include code/syntax.html component="date-picker-format" link="true" %}

{:#fejlmeddelelse}
## Fejlmeddelelse
<a href="/kode/komponenter/fejlmeddelelser/#datovaelger">Læs mere om korrekt brug af fejlmeddelelser og deres formuleringer.</a>

Når der vises en fejlmeddelelse, vis da også <a href="/kode/komponenter/fejlopsummering/">fejlopsummering</a>.