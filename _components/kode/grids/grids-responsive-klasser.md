---
type: component
title: Responsive klasser
parent: Grid
order: 30
---

Som udgangspunkt findes der 5 breakpoints: extra small, small, medium, large, or extra large.

### Klasser som rammer alle breakpoints

Brug klassen `col` eller `col-*` uden responsivt prefix (fx md).

{% include code/preview-box-details.html component="grid--all-breakpoints" title="Eksempel af grid med alle breakpoints" link=false detaillabel="for eksempel af grid med alle breakpoints" %}

### Fra stablede kolonner til kolonner på række

Ved at bruge fx `col-md-*` klassen vil kolonnerne til at begynde med være placeret lodret over hinanden på mobile enheder. Fra medium-skærme vil de være vist vandret på en række.

{% include code/preview-box-details.html component="grid--stacked-horizontal" title="Eksempel af grid med stablede kolonner til kolonner på række" link=false detaillabel="for eksempel af grid med stablede kolonner til kolonner på række" %}

### Brug af forskellige kolonne-klasser

Du kan mikse forskellige kolonne-klasser.

{% include code/preview-box-details.html component="grid--mix-match" title="Eksempel af grid med forskellige kolonne-klasser" link=false detaillabel="for eksempel af grid med forskellige kolonne-klasser" %}

### Kolonneombrydning

Hvis der er mere end 12 kolonner på en række, vil ekstra kolonner blive vist på en ny linje under de første 12.

{% include code/preview-box-details.html component="grid--column-wrapping" title="Eksempel af grid med kolonneombrydning" link=false detaillabel="for eksempel af grid med kolonneombrydning" %}

### Indlejre

Du kan indlejre flere rækker med tilhørende kolonner i hinanden.

{% include code/preview-box-details.html component="grid--nesting" title="Eksempel af grid med indlejring af rækker med kolonner" link=false detaillabel="for eksempel af grid med indlejring af rækker med kolonner" %}
