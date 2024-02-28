---
permalink: "/komponenter/badges/implementering/"
guidelinelink: "/komponenter/badges/guidelines/"
redirect_from:
- "/kode/komponenter/badges/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter 
title: Badges
lead: Badges er grafiske markører, som du kan bruge til at gøre opmærksom på nyt eller
  vigtigt indhold.
component: "badges"
componentTitle: "Eksempel på badges"
anchor: true
subnav:
- text: Statusbadges
  href: "#statusbadges"
description: "Dokumentation på implementering af badge."
tags:
---

## Installation

### HTML Struktur

{% include code/syntax.html component="badges" copybutton=true %}

Alle badges skal have en `badge` klasse på `<span>`-elementet. 

Hvis et badge anvendes til særlig fræmhævning af et ord i en kontekst, for eksempel når nyt indhold markeres på en side, anvend da et `<strong>`-element i stedet for `<span>`.


## Tilgængelighed

Interaktive badges bliver automatisk markeret, når brugere ved hjælp af tastaturet navigerer sig frem til dem.

Du skal anvende ARIA live regions til at gøre skærmlæsere opmærksomme på ændringerne, hvis du anvender badges dynamisk i løsningen til at gøre opmærksom på nyt indlæst indhold eller ændringer på siden.

## Varianter

### Stort badge
For et stort badge skal der tilføjes en `badge-large` class.

### Lille badge
For et lille badge skal der tilføjes en `badge-small` class.

{:#statusbadges}
### Statusbadges

Statusbadges har 4 forskellige farver og formål:

- <strong class="badge badge-small badge-success">Grøn</strong>, som er succesfarven og implementeres med klassen `badge-success`.
- <strong class="badge badge-small badge-info">Blå</strong>, som er informationsfarven og implementeres med klassen `badge-info`.
- <strong class="badge badge-small badge-warning">Gul</strong>, som er advarselsfarven og implementeres med klassen `badge-warning`.
- <strong class="badge badge-small badge-error">Rød</strong>, som er fejlfarven og implementeres med klassen `badge-error`.

Se eksempel på anvendelse af statusbadges i vores {% include links/internal-link.html linktext="release notes" %}.