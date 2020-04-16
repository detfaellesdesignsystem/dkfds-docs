---
permalink: "/kode/komponenter/fejlbeskeder/"
parentlink: "/kode/komponenter/"
layout: styleguide
type: component
title: Fejlbeskeder
category: Kode_category
description: Dokumentation på implementering af fejlbeskeder.
subcategory: Kode
anchor: true
subnav:
- text: Tjekboks
  href: "#tjekboks"
- text: Radioknap
  href: "#radioknap"
- text: Datoangivelse
  href: "#datoangivelse"
---

{% include code/preview-box.html component="error-message" title="Eksempel på fejlbesked" %}

## Eksempler og retningslinjer

{:.nobullet-list}
- <a href="/komponenter/fejlbeskeder/#retningslinjer">Retningslinjer</a>
- <a href="/komponenter/fejlbeskeder/">Eksempler</a>

## Installation

### HTML Struktur

{% include code/syntax.html component="error-message" %}

For at hjælpe skærmlæsere tilføjes en skjult tekst “Fejl:” foran fejlbeskeden. Brugere af skærmlæser vil da høre “Fejl: Datoen for udløb af dit pas bør være i fortiden.”
Teksten er skjult i et `<span>` element med klassen `sr-only`.

Fejbeskeden vises også i <a href="kode/komponenter/fejlopsummering/">fejlopsummeringen</a> øverst på siden.

## Varianter

{:#tjekboks}
### Tjekboks
{% include code/syntax.html component="checkbox-error" link="true" %}

{:#radioknap}
### Radioknap
{% include code/syntax.html component="radiobutton-error" link="true" %}

{:#datoangivelse}
### Datoangivelse

{% include code/syntax.html component="date-input-error" link="true" %}
