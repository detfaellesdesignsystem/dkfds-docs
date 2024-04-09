---
permalink: "/komponenter/cookiemeddelelse/implementering/"
guidelinelink: "/komponenter/cookiemeddelelse/guidelines/"
redirect_from:
- "/kode/komponenter/cookiemeddelelse/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Cookiemeddelelse
lead: Anvender din selvbetjeningsløsning cookies til andet end teknisk nødvendige
  formål, skal brugeren vises en cookiemeddelelse.
anchor: false
description: Dokumentation på implementering af cookiemeddelelse.
tags:
---

## Installation

### HTML Struktur

{% include code/syntax.html component="cookie-message" copybutton=true %}

Koden indsættes under body og før header. Gør man brug af {% include links/component-guideline-link.html linktext="Gå til sidens indhold" %}, skal denne indsættes efter cookiemeddelelsen.

Bemærk at DKFDS på nuværende tidspunkt kun leverer HTML og CSS til denne komponent. Funktionaliteten skal man derfor selv håndtere.

Cookies brugt til statistik må ikke sættes, før man aktivt har accepteret dette.