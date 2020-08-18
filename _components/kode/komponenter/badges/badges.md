---
permalink: /kode/komponenter/badges/
parentlink: /kode/komponenter/
layout: styleguide
type: component
title: Badges
category: Kode_category
subcategory: Kode 
description: "Dokumentation på implementering af badge."
tags:
anchor: true
subnav:
- text: Statusbadges
  href: "#statusbadges"
---

{% include code/preview-box.html component="badge" title="Eksempel på badge komponent" %}

## Eksempler og retningslinjer
<ul class="nobullet-list">
    <li><a href="/komponenter/badges/#retningslinjer">Retningslinjer</a></li>
    <li><a href="/komponenter/badges/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur

{% include code/syntax.html component="badge" %}

Alle badges skal have en `badge` class på `<label></label>` elementet.


## Tilgængelighed

Interaktive badges bliver automatisk markeret , når brugere ved hjælp af tastaturet navigerer sig frem til dem.

Du skal anvende ARIA live regions til at gøre skærmlæsere opmærksomme på ændringerne, hvis du anvender badges dynamisk i løsningen til at gøre opmærksom på nyt indlæst indhold eller ændringer på siden.

## Varianter

### Stort badge
For et stort badge skal der tilføjes en `badge-large` class.

### Lille badge
For et lille badge skal der tilføjes en `badge-small` class.

{:#statusbadges}
### Statusbadges

Statusbadges har 4 forskellige farver og formål:

- <label class="badge badge-small badge-success">Grøn</label>, som er succesfarven og implementeres med klassen `badge-success`.
- <label class="badge badge-small badge-info">Blå</label>, som er informationsfarven og implementeres med klassen `badge-info`.
- <label class="badge badge-small badge-warning">Gul</label>, som er advarselsfarven og implementeres med klassen `badge-warning`.
- <label class="badge badge-small badge-error">Rød</label>, som er fejlfarven og implementeres med klassen `badge-error`.

Se eksempel på anvendelse af statusbadges i vores <a href="/omdesignsystemet/releases/">release notes</a>.
