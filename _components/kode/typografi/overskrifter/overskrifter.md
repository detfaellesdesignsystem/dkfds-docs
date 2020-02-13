---
permalink: /kode/typografi/overskrifter/
title: Overskrifter
parentlink: /kode/typografi/
category: Kode_category
subcategory: Kode
type: component
layout: styleguide
---

{% include code/preview-box.html component="headings" title="Eksempel på overskrifter" %}

<a href="/design/typografi/overskrifter/#retningslinjer">Læs retningslinjerne for overskrifter</a>

{:.h4}
## HTML Struktur

{% include code/syntax.html component="headings" %}

Hold en stram overskriftsstruktur i koden. En `<h3>` altid er under en `<h2>`, en `<h4>` under en `<h3>` osv. `<h1>` er altid øverst i hierarkiet.  

Lad være med at springe overskriftsled over. Hvis du visuelt vil have et andet udtryk, så brug en klasse til at style overskriften til at ligne et andet niveau.

{:.h4}
## Eksempel på en overskrift, der ligner et andet niveau

{% include code/syntax.html component="heading" link="true" %}
