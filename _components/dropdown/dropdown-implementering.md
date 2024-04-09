---
permalink: "/komponenter/dropdown/implementering/"
guidelinelink: "/komponenter/dropdown/guidelines/"
redirect_from:
- "/kode/komponenter/drop-down/"
- "/kode/komponenter/dropdown/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Dropdown
lead: Dropdown lader brugeren vælge én blandt flere muligheder i en udfoldet liste.
anchor: false
description: "Dokumentation på implementering af dropdown."
tags:
---

## Installation

### HTML Struktur

{% include code/syntax.html component="select" copybutton=true %}

Dropdown skal have et label tilknyttet.

Anvend ikke JavaScript til automatisk at udføre en handling, når brugeren vælger en værdi i dropdownen. Tilføj i stedet en knap ved dropdownen.

Brug dropdown i begrænset omfang. Værdierne i en dropdown er ikke umiddelbart synlige for brugerne, og det øger sidens kompleksitet for dem.
