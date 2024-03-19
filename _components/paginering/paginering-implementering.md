---
permalink: "/komponenter/paginering/implementering/"
guidelinelink: "/komponenter/paginering/guidelines/"
redirect_from:
- "/kode/komponenter/paginering/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Paginering
lead: Paginering bruges til at lade brugeren navigere mellem indhold, der er opdelt på flere sider. Brugeren navigerer ved at gå fra side til side, eller til første eller sidste side på listen.
component: "pagination"
componentTitle: "Eksempel på paginering"
anchor: false
description: "Dokumentation på implementering af paginering."
tags:
- paginering
- pagination
- sidevælger
---

## Installation

### HTML Struktur

{% include code/syntax.html component="pagination" copybutton=true %}

Brug `class="hidden"` på Forrige-, Næste-, Første- og Sidste-knapperne, når de ikke skal vises.

### Tilgængelighed

Lad knappen med tallet til sidste side indeholde en aria-label, der oplyser dette. Husk at lade den aktuelle side være markeret med `aria-current="page"`.

Sørg for at alle Forrige-, Næste-, Første- og Sidste-knapper på mindre skærme har en skjult, tilknyttet tekst, så ikonerne kan læses højt af en skærmlæser.


### JavaScript
Bemærk at DKFDS på nuværende tidspunkt kun leverer HTML og CSS til denne komponent. Funktionaliteten skal man derfor selv håndtere.
