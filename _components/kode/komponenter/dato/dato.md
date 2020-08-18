---
permalink: /kode/komponenter/dato-felt/
parentlink: /kode/komponenter/
title: Datoangivelse
layout: styleguide
type: component
category: Kode_category
subcategory: Kode
anchor: true
description: "Dokumentation på implementering af datofelt."
subnav:
- text: Fejlmeddelelse
  href: '#fejlmeddelelse'
---

{% include code/preview-box.html component="date-input" title="Eksempel på dato felt" %}

## Eksempler og retningslinjer
<ul class="nobullet-list">
    <li><a href="/komponenter/dato-felt/#retningslinjer">Retningslinjer</a></li>
    <li><a href="/komponenter/dato-felt/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur

{% include code/syntax.html component="date-input" %}

- Anvend ikke JavaScript til automatisk at flytte fokus fra felt til felt, da det gør det svært for tastatur-brugere at navigere i formularen.
- Dato-komponenten består af 2 dele: 3 input-felter og en datepicker.
- Attributten `data-input-regex` håndteres af JavaScript via dkfds.js filen, som derfor bør importeres i projektet.
Attributten forhindrer at brugeren kan indskrive tegn som ikke er tal, samt mere end 2 tal for dag og måned, og 4 tal i år-inputtet derudover  Eksempel for dag og måned: ` data-input-regex="^[0-9]{0,2}$"`
- For at initialisere dato-komponenten skal `.date-group`-elementet have klassen `.js-calendar-group`. Derudover skal de tre inputfelter have følgende klasser:
    - Dag input: `.js-calendar-day-input`
    - Måned input: `.js-calendar-month-input`
    - År input: `.js-calendar-year-input`
- Ved fejl, tilføj da en hjælpsom fejlmeddelelse over felterne i elementet `<span class="form-error-message" id="form-error-message-input-error" role="alert">`. 
- Tilføj klassen `form-error` på `form-group` `div` elementet, når der vises en fejlmeddelelse.

## Varianter

{:#fejlmeddelelse}
### Fejlmeddelelse
{% include code/syntax.html component="date-input-error" link="true" %}
