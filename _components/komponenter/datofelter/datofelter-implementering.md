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

{:#fejlmeddelelse}
## Fejlmeddelelse
<a href="/kode/komponenter/fejlmeddelelser/#datofelter">Læs mere om korrekt brug af fejlmeddelelser og deres formuleringer.</a>

Når der vises en fejlmeddelelse, vis da også <a href="/kode/komponenter/fejlopsummering/">fejlopsummering</a>.

