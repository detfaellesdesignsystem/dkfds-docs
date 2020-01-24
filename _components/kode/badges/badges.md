---
permalink: /kode/badges/
layout: styleguide
type: component
title: Badges
category: Kode_category
subcategory: Kode 
---

{% include code/preview-box.html component="badge" title="Eksempel på badge komponent" %}

## Eksempler og dokumentation
<ul class="nobullet-list">
    <li><a href="/komponenter/beskeder/#retningslinjer">Retningslinjer</a></li>
    <li><a href="/komponenter/beskeder/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur

{% include code/syntax.html component="badge" %}

Alle badges skal have en `badge` class på `<label></label>` elementet.

## Varianter

### Stort badge
For et stort badge skal der tilføjes en `badge-large` class.

### Lille badge
For et lille badge skal der tilføjes en `badge-small` class.

### Status badges

Statusbadges har 4 forskellige farver og formål:

- <label class="badge badge-small badge-success">Grøn</label>, som er succesfarven og implementeres med klassen `badge-success`.
- <label class="badge badge-small badge-info">Blå</label>, som er informationsfarven og implementeres med klassen `badge-info`.
- <label class="badge badge-small badge-warning">Gul</label>, som er advarselsfarven og implementeres med klassen `badge-warning`.
- <label class="badge badge-small badge-error">Rød</label>, som er fejlfarven og implementeres med klassen `badge-error`.

Se eksempel på anvendelse af statusbadges i vores <a href="/omdesignsystemet/releases/">release notes</a>.
