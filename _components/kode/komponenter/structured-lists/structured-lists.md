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

Tilføj klasserne `no-gutters` or `row-bordered` til row-elementet. Kan bruges i forbindelse med <a href="/eksempler/templates/#opsummering">opsummering</a> eller <a href="/eksempler/templates/#kvittering">kvitteringssider</a> som alternativ til en tabel, hvis der ingen headers er.

Gør brug af <a href="/kode/utilities/#margin-og-padding">hjælpeklasser for at sætte padding</a> i rækkerne.

Strukturerede lister gør brug af designsystemets grid, for mere vejledning om implementering se derfor under <a href="/kode/grid/">grid</a>

## Varianter

{:#med-rediger}
### Struktureret liste med redigér

{% include code/syntax.html component="structured-list--edit" link="true" %}