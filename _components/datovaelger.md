---
permalink: "/komponenter/datovaelger/"
redirect_from:
- "/kode/komponenter/datovaelger/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Datovælger
lead: Ét felt med knap, hvor man kan vælge en dato.
description: Brug datovælger til at vælge en bestemt dato i nærmeste fortid eller fremtid
tags:
tabs: "Retningslinjer, kode"
---

{% include tabs.html guidelines=true code=true %}

{% include code/preview-box.html component="date-picker" title="Eksempel på datovælger" classes="intro-example" %}

{% include anchorlinks.html guidelines="Datovaelger" code="Datovaelger_Kode" %}

<!--split-->

## Sådan bruges komponenten {#{% include create-id.html heading="Sådan bruges komponenten" %}}

### Anvendes til

Når der er specifikt udvalgte datoer at vælge imellem som fx ved bookninger og planlægning med åbne og lukkede datoer, og hvor det gavner brugeren at se hvilke ugedage forskellige datoer rammer.

### Anvendes ikke til

Datoangivelser som er givet for brugeren, som fx en fødselsdato. Brug da komponenten {% include links/component-guideline-link.html linktext="datofelter" %}.

### Vejledning

{% include dos-donts-box.html component="datepicker-dos-donts" %}

## Varianter {#{% include create-id.html heading="Varianter" %}}

### Begræns mulige datoer {#{% include create-id.html heading="Begræns mulige datoer" %}}

Definér datoer det er muligt for brugeren at vælge fra.

I eksemplet kan brugeren kun vælge datoer mellem 4. december til og med 24. december 2020. Man kan kun vælge datoer inden for dette interval. En anden mulighed kunne også være dags dato og 1 år frem, således at man kun kan vælge en dag i fremtiden.

{% include code/preview-box.html component="date-picker-interval" title="Eksempel på datovælger med begrænsning" code="/komponenter/datovaelger/#begraens-mulige-datoer-kode" %}

### Fast værdi {#{% include create-id.html heading="Fast værdi" %}}

Definér en dato som udgangspunkt. Hvis datoen ikke defineres vil udgangspunktet være dags dato.

I eksemplet er der valgt at man ved aktivering af datovælgeren starter fokus d. 1 december 2020. Datoen er ikke valgt, man tager blot udgangspunkt i den dag i kalenderen. Hvis man ikke vælger en fast værdi, vil datoen i stedet være dags dato.

{% include code/preview-box.html component="date-picker-default-date" title="Eksempel på datovælger med fast værdi" code="/komponenter/datovaelger/#fast-vaerdi-kode" %}

### Datoformat {#{% include create-id.html heading="Datoformat" %}}

Som standard vises en dato i formatet DD/MM/ÅÅÅÅ, efter en bruger har valgt en dato i datovælgeren. Der findes dog også {% include links/component-code-link.html linktext="andre datoformater" %}, der kan anvendes i stedet. Bemærk, at brugeren altid kan anvende alle datoformater, hvis de selv indtaster datoen i feltet.

{% include code/preview-box.html component="date-picker-format" title="Eksempel på datovælger med andet datoformat" code="/komponenter/datovaelger/#datoformat-kode" %}

<!--split-->

## Installation {#{% include create-id.html heading="Installation" append="-kode" %}}

### HTML Struktur

{% include code/syntax.html component="date-picker" copybutton=true %}

### Javascript

Datovælger-komponenten kræver JavaScript for at fungere. Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:

{% highlight javascript %}
DKFDS.datePicker.on(document.body);
{% endhighlight %}

Bemærk: I visse frameworks kan ovenstående initialisering give problemer med at åbne kalenderen. Hvis du oplever dette problem, prøv da at anvende `DKFDS.datePicker.init(document.body)` i stedet for.

#### Sprog {#{% include create-id.html heading="Sprog" append="-kode" %}}

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

## Begræns mulige datoer {#{% include create-id.html heading="Begræns mulige datoer" append="-kode" %}}

{% include code/syntax.html component="date-picker-interval" link=true copybutton=true guidelines="/komponenter/datovaelger/#begraens-mulige-datoer" %}

## Fast værdi {#{% include create-id.html heading="Fast værdi" append="-kode" %}}

{% include code/syntax.html component="date-picker-default-date" link=true copybutton=true guidelines="/komponenter/datovaelger/#fast-vaerdi" %}

## Datoformat {#{% include create-id.html heading="Datoformat" append="-kode" %}}

Anvend attributten `data-dateformat`. Mulige værdier er:
- `"DD/MM/YYYY"` (default, hvis der ikke er nogen attribut)
- `"DD-MM-YYYY"`
- `"DD.MM.YYYY"`
- `"DD MM YYYY"`
- `"DD/MM-YYYY"`

Bemærk at valg af datoformat udelukkende påvirker, hvordan datoer vises i inputfeltet, efter brugeren har trykket på en dato i datovælgeren. Alle ovenstående datoformater er gyldige, hvis brugeren selv vælger at skrive datoen ind i feltet.

{% include code/syntax.html component="date-picker-format" link=true copybutton=true guidelines="/komponenter/datovaelger/#datoformat" %}

## Fejlmeddelelse {#{% include create-id.html heading="Fejlmeddelelse" append="-kode" %}}

Læs mere om korrekt brug af {% include links/component-guideline-link.html linktext="fejlmeddelelser" %} og {% include links/component-code-link.html linktext="fejlmeddelelser's implementering med datovælgeren." %}

Når der vises en fejlmeddelelse, vis da også {% include links/component-code-link.html linktext="en fejlopsummering" %}.