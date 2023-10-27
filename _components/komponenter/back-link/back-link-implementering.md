---
permalink: "/komponenter/tilbage-link/implementering/"
guidelinelink: "/komponenter/tilbage-link/guidelines/"
redirect_from:
- "/kode/komponenter/tilbage-link/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Tilbage-link
lead: "Tilbage-linket gør brugeren i stand til at gå tilbage til forrige trin eller side i en selvbetjeningsløsning."
component: "back-link"
componentTitle: "Eksempel på tilbage-link komponent"
anchor: false
description: "Dokumentation på implementering af tilbage-link."
tags:
---

## Eksempler og retningslinjer

{:.nobullet-list}
- <a href="/komponenter/tilbage-link/#retningslinjer">Retningslinjer</a>
- <a href="/komponenter/tilbage-link/">Eksempler</a>

## Installation

{:#html-struktur}
### HTML Struktur

{% include code/syntax.html component="back-link" copybutton=true %}

Linket placeres så vidt muligt i headeren, se eksempel på implementering i vores eksempelløsning: <a href="/pages/eksempler/vedhaeft-fil/fil-1/?r={{page.permalink}}%23html-struktur">Vedhæft filer</a>

Bemærk, at tilbage-linket stadig skal være synligt ved mobilvisning.

Selve funktionaliteten står man selv for i ens løsning.
