---
permalink: "/kode/komponenter/fejlmeddelelser/"
parentlink: "/kode/komponenter/"
layout: styleguide
type: component
title: Fejlmeddelelser
category: Kode_category
description: Dokumentation på implementering af fejlmeddelelser.
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

{% include code/preview-box.html component="error-message-name" title="Eksempel på fejlmeddelelser" %}

## Eksempler og retningslinjer

{:.nobullet-list}
- <a href="/komponenter/fejlmeddelelser/#retningslinjer">Retningslinjer</a>
- <a href="/komponenter/fejlmeddelelser/">Eksempler</a>

## Installation

### HTML Struktur

{% include code/syntax.html component="error-message" %}

For at hjælpe skærmlæsere tilføjes en skjult tekst “Fejl:” foran fejlmeddelelsen. Brugere af skærmlæser vil da høre “Fejl: Datoen for udløb af dit pas bør være i fortiden.”
Teksten er skjult i et `<span>` element med klassen `sr-only`.

Fejlmeddelelsen vises også i <a href="/kode/komponenter/fejlopsummering/">fejlopsummeringen</a> øverst på siden.

## Varianter

{:#tjekboks}
### Tjekboks

{% include code/syntax.html component="error-message-checkbox" link="true" %}

{:#radioknap}
### Radioknap

{% include code/syntax.html component="error-message-radio" link="true" %}

{:#datoangivelse}
### Datoangivelse

{% include code/syntax.html component="error-message-date" link="true" %}
