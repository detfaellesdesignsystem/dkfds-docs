---
permalink: "/kode/komponenter/cookiemeddelelse/"
parentlink: "/kode/komponenter/"
layout: styleguide
category: Kode_category
subcategory: Kode
title: Cookiemeddelelse
previewimage: "cookie-message"
previewimageTitle: "Eksempel på cookiemeddelelse"
anchor: false
description: Dokumentation på implementering af cookiemeddelelse.
tags:
---

## Installation

### HTML Struktur

{% include code/syntax.html component="cookie-message" copybutton=true %}

Koden indsættes under body og før header. Gør man brug af <a href="/komponenter/skip-link/">skip-link</a>, skal skip-link indsættes efter cookiemeddelelsen.

Bemærk at DKFDS på nuværende tidspunkt kun leverer HTML og CSS til denne komponent. Funktionaliteten skal man derfor selv håndtere.

Cookies brugt til statistik må ikke sættes, før man aktivt har accepteret dette.