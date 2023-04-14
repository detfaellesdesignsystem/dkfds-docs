---
permalink: /kode/komponenter/dropdown/
parentlink: /kode/komponenter/
redirect_from:
- /kode/komponenter/drop-down/
layout: styleguide
type: component
title: Dropdown
category: Kode_category
description: "Dokumentation på implementering af dropdown."
tags:
subcategory: Kode
---

{% include code/preview-box.html component="select" title="Eksempel på dropdown" %}

## Eksempler og retningslinjer

{:.nobullet-list}
- <a href="/komponenter/dropdown/#retningslinjer">Retningslinjer</a>
- <a href="/komponenter/dropdown/">Eksempler</a>

## Installation

### HTML Struktur

{% include code/syntax.html component="select" %}

Dropdown skal have et label tilknyttet.

Anvend ikke JavaScript til automatisk at udføre en handling, når brugeren vælger en værdi i dropdownen. Tilføj i stedet en knap ved dropdownen.

Brug dropdown i begrænset omfang. Værdierne i en dropdown er ikke umiddelbart synlige for brugerne, og det øger sidens kompleksitet for dem.
