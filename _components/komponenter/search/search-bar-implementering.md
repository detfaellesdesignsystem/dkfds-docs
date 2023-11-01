---
permalink: "/komponenter/search/implementering/"
guidelinelink: "/komponenter/search/guidelines/"
redirect_from:
- "/kode/komponenter/search/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Søgefelt
lead: Et søgefelt udstiller brugerne muligheden at søge efter bestemt indhold på siden eller i løsningen.
component: "search"
componentTitle: "Eksempel på søgefelt"
anchor: false
description: "Dokumentation på implementering af søgefelt."
tags:
---

## Installation

### HTML Struktur

{% include code/syntax.html component="search" copybutton=true %}

Du kan styre søgefeltets bredde via `input-width-` og `input-char-` se mere under punktet formular elementer og input bredde og validering.

Du bør som oftest implementere auto-suggest på søgefelter, så brugeren foreslås relevante søge ord/sætninger.

Ordet ”Søg” skal altid fremgå af søgeknappen. Hvis der anvendes et lup-ikon, skal ”søg” fremgå i en aria-label, så skærmlæsere kan se funktionen.

Formularens felt skal have et skjult label af hensyn til skærmlæsere.
