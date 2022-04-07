---
permalink: /kode/komponenter/paginering/
parentlink: /kode/komponenter/
title: Paginering
layout: styleguide
type: component
category: Kode_category
subcategory: Kode
description: "Dokumentation på implementering af paginering."
tags:
- paginering
- pagination
- sidevælger
---

{% include code/preview-box.html component="pagination" title="Eksempel på paginering" %}

## Eksempler og retningslinjer
<ul class="nobullet-list">
    <li><a href="/komponenter/paginering/#retningslinjer">Retningslinjer</a></li>
    <li><a href="/komponenter/paginering/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur

{% include code/syntax.html component="pagination" %}

Husk at inkludere både en `<select>` og `<ul>` der håndterer pagineringen for hhv. små og store skærmstørrelser. Anvend klasserne `class="pagination__dropdown"` og `class="pagination__items"` for automatisk at få vist den rigtige version af komponenten.

Brug `class="hidden"` på Forrige- og Næste-knapperne, når de ikke skal vises.

### JavaScript
Bemærk at DKFDS på nuværende tidspunkt kun leverer HTML og CSS til denne komponent. Funktionaliteten skal man derfor selv håndtere.
