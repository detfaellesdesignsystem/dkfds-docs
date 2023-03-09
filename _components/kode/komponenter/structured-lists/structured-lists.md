---
permalink: "/kode/komponenter/strukturerede-lister/"
parentlink: /kode/komponenter/
layout: styleguide
type: component
title: Strukturerede lister
category: Kode_category
subcategory: Kode
description: "Dokumentation på implementering af strukturerede lister."
---

{% include code/preview-box.html component="structured-list" alt="Billedet viser en struktueret liste" title="Eksempel på struktueret liste" %}

## Eksempler og retningslinjer
<ul class="nobullet-list">
    <li><a href="/komponenter/strukturerede-lister/#retningslinjer">Retningslinjer</a></li>
    <li><a href="/komponenter/strukturerede-lister/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur

{% include code/syntax.html component="structured-list" %}

Strukturerede lister kan bruges i forbindelse med <a href="/eksempler/templates/#opsummering">opsummering</a> eller <a href="/eksempler/templates/#kvittering">kvitteringssider</a> som en alternativ tabel, hvis der ikke er nogen vandrette headers. 

Listerne skal altid indeholde præcis 2 eller 3 kolonner. Første kolonne anvendes til headers, anden kolonne til indhold og tredje kolonne til redigering af rækkens indhold. Husk at markere `scope="row"` for hver tabelheader.

Listen kan gøres <a href="/kode/komponenter/tables/#responsiv">responsiv</a> ved at tilføje klassen med det ønskede breakpoint. 

## Varianter

{:#med-rediger}
### Struktureret liste med redigér

{% include code/syntax.html component="structured-list--edit" link="true" %}