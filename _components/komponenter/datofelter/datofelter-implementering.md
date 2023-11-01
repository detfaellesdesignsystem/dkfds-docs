---
permalink: "/komponenter/datofelter/implementering/"
guidelinelink: "/komponenter/datofelter/guidelines/"
redirect_from:
- "/kode/komponenter/dato-felt/"
- "/kode/komponenter/datofelter/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Datofelter
lead: Tre separate felter for dato, måned og år er den nemmeste måde for brugeren at indskrive en dato.
component: "date-input"
componentTitle: "Eksempel på datofelter"
anchor: false
description: "Dokumentation på implementering af datofelter."
tags:
---

## Installation

### HTML Struktur

{% include code/syntax.html component="date-input" copybutton=true %}

- Anvend ikke JavaScript til automatisk at flytte fokus fra felt til felt, da det gør det svært for tastatur-brugere at navigere i formularen.
- Datofelter-komponenten består af 3 inputfelter.
- Attributten `data-input-regex` håndteres af JavaScript via dkfds.js filen, som derfor bør importeres i projektet.
Attributten forhindrer at brugeren kan indskrive tegn som ikke er tal, samt mere end 2 tal for dag og måned, og 4 tal i år-inputtet derudover  Eksempel for dag og måned: ` data-input-regex="^[0-9]{0,2}$"`
- For at initialisere dato-komponenten skal `.date-group`-elementet have klassen `.js-calendar-group`. Derudover skal de tre inputfelter have følgende klasser:
    - Dag input: `.js-calendar-day-input`
    - Måned input: `.js-calendar-month-input`
    - År input: `.js-calendar-year-input`


### Javascript
Datofelterne kræver JavaScript for at maskerne virker. Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:

{% highlight javascript %}
new InputRegexMask(document.getElementById('DAY-INPUT-ID'));
new InputRegexMask(document.getElementById('MONTH-INPUT-ID'));
new InputRegexMask(document.getElementById('YEAR-INPUT-ID'));
{% endhighlight %}

{:#fejlmeddelelse}
## Fejlmeddelelse
<a href="/kode/komponenter/fejlmeddelelser/#datofelter">Læs mere om korrekt brug af fejlmeddelelser og deres formuleringer.</a>

Når der vises en fejlmeddelelse, vis da også <a href="/kode/komponenter/fejlopsummering/">fejlopsummering</a>.

