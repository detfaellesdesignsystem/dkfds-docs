---
permalink: /kode/komponenter/skip-link/
parentlink: /kode/komponenter/
title: Skip-link
layout: styleguide
type: component
description: "Dokumentation på implementering af skip-link."
tags: 
category: Kode_category
subcategory: Kode
---

{% include code/preview-box.html component="skiplink" title="Eksempel på skiplink" %}

## Eksempler og retningslinjer

{:.nobullet-list}
- <a href="/komponenter/skip-link/#retningslinjer">Retningslinjer</a>
- <a href="/komponenter/skip-link/">Eksempler</a>

## Installation

### HTML Struktur

{% include code/syntax.html component="skiplink" %}

Skip link `<a>` elementet indsættes som første element i `<header>`. Elementet skal være det første element, der kommer i fokus på siden ved brug af tastaturet.

Skip link gør brug af anchor link `#main-content`, man skal derfor huske at sætte `id="main-content"` på det element, der omkranser indholdet på siden.
