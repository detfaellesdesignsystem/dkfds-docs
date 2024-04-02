---
permalink: "/design/typografi/fonte/implementering/"
guidelinelink: "/design/typografi/fonte/guidelines/"
parentlink: "/design/typografi/"
redirect_from:
- "/kode/typografi/"
layout: styleguide
category: Styleguide_category
subcategory: Styleguide
title: Fonte
anchor: false
description:
tags:
---

Som beskrevet under {% include links/internal-link.html linktext="retningslinjer for fonte" %} gør vi brug af fonten IBM Plex Sans i Det Fælles Designsystem. Da det er en ekstern font, skal den loades i hver løsning. Fonten leveres samlet med DKFDS pakken.

## Preload

Man kan vælge at gøre brug af preload, således at fonten loades tidligere og giver derfor en bedre oplevelse af løsningen.

Nedenstående kode opdateres, så stien matcher løsningen, og koden indsættes i `<head>`-sektionen.

{% include code/syntax.html component="font-preload" copybutton=true %}