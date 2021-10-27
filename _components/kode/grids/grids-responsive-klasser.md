---
type: component
title: Responsive klasser
parent: Grid
order: 30
---

Som udgangspunkt findes der 5 breakpoints: extra small, small, medium, large, or extra large.

### Klasser som rammer alle breakpoints

Brug klassen `col` eller `col-*` uden responsivt prefix (fx md).

{% include code/preview-code-tab.html component="grid--all-breakpoints" %}

### Fra stablede kolonner til kolonner på række

Ved at bruge fx `col-md-*` klassen vil kolonnerne til at begynde med være placeret lodret over hinanden på mobile enheder. Fra medium-skærme vil de være vist vandret på en række.

{% include code/preview-code-tab.html component="grid--stacked-horizontal" %}

### Brug af forskellige kolonne-klasser

Du kan mikse forskellige kolonne-klasser.

{% include code/preview-code-tab.html component="grid--mix-match" %}

### Kolonneombrydning

Hvis der er mere end 12 kolonner på en række, vil ekstra kolonner blive vist på en ny linje under de første 12.

{% include code/preview-code-tab.html component="grid--column-wrapping" %}

### Indlejre

Du kan indlejre flere rækker med tilhørende kolonner i hinanden.

{% include code/preview-code-tab.html component="grid--nesting" %}
