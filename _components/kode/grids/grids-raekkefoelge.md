---
type: component
title: Rækkefølge
parent: Grid
order: 50
---
### Klasser (classes)

Brug klasserne `.order-` til at bestemme den visuelle rækkefølge af kolonnerne. Disse klasser findes også i responsive udgaver fx `.order-1.order-md-2`).

{% include code/preview.html component="grid--ordering-visual" classes="px-4" %}

### Forskyd kolonner

Brug klasserne `.offset-` til at forskyde kolonner, fx forskyder `.offset-md-4` 4 kolonner til højre.

{% include code/preview.html component="grid--offsets" classes="px-4" %}

Du kan nulstille forskydning ved fx at bruge klassen `offset-md-0`.

{% include code/preview-iframe.html component="grid--offsets-reset" %}
