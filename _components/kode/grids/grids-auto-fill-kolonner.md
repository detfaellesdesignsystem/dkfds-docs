---
type: component
title: "'Auto' og 'Fill' kolonner"
parent: Grid
order: 40
---

Du kan specificere bredden på en kolonne uden at angive en eksplicit nummer-klasse som fx `col-sm-6`.

### Specifik bredde på kun én kolonne

Du kan tildele alle kolonner samme bredde ved kun at give én kolonne en eksplicit bredde (col-6). De øvrige kolonner tilpasser sig automatisk samme bredde.

{% include code/preview-code-tab.html component="grid--one-column-width" %}

### Individuel kolonnebredde efter indhold

Ved at brug `col-{breakpoint}-auto` kan du skabe individuel kolonnebredde: Kolonnerne tilpasser sig til deres indhold.

{% include code/preview-code-tab.html component="grid--variable-width-content" %}
