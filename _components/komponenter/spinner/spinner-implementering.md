---
permalink: "/komponenter/spinner/implementering/"
guidelinelink: "/komponenter/spinner/guidelines/"
redirect_from:
- "/kode/komponenter/spinner/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Loading spinner
lead: "En spinner er et visuelt aktivt og synligt signal til brugeren om, at indlæsningen af en side eller delfunktion er forsinket."
component: "spinner"
componentTitle: "Eksempel på spinner"
anchor: false
description: "Dokumentation på implementering af spinner."
tags:
---

## Installation

### HTML Struktur

{% include code/syntax.html component="spinner" copybutton=true %}

For at ændre spinnerens størrelse kan `font-size` gøres større eller mindre.


Hvis dele af siden ændres, når spinneren er færdig, tilføj da de korrekte attributter til området, så brugere af hjælpeteknologier får besked om ændringen. Undersøg de korrekte værdier, der passer til løsningen for attributterne `aria-live` og `aria-atomic`. 

Anvend ARIA attributten `aria-busy="true"` på elementet, der er igang med at blive opdateret til at markere for skærmlæsere, at der er en live region i gang med indlæsning og sæt værdien til `false`, når den er indlæst.

### Javascript
Der medfølger ikke funktionalitet med denne komponent. Man skal derfor selv i løsningen implementere opdateringen af statusmeddelelsen som ventetiden forlænges.
