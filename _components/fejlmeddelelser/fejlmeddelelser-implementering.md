---
permalink: "/komponenter/fejlmeddelelser/implementering/"
guidelinelink: "/komponenter/fejlmeddelelser/guidelines/"
redirect_from:
- "/kode/komponenter/fejlmeddelelser/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Fejlmeddelelser
lead: Fejlmeddelelser hjælper brugeren til at udfylde enkelte formularelementer korrekt.
component: "error-message"
componentTitle: "Eksempel på fejlmeddelelse"
anchor: true
subnav:
- text: Accordions
  href: "#accordions"
- text: Datofelter
  href: "#datofelter"
- text: Datovælger
  href: "#datovaelger"
- text: Dropdown
  href: "#dropdown"
- text: Inputfelt
  href: "#tekstfelt"
- text: Radioknapper
  href: "#radioknapper"
- text: Tekstområde
  href: "#tekstomraade"
- text: Tjekboks
  href: "#tjekboks"
- text: Vedhæft fil
  href: "#vedhaeft-fil"
description: Dokumentation på implementering af fejlmeddelelser.
tags:
---

## Installation

### HTML Struktur

{% include code/syntax.html component="error-message" copybutton=true %}

For at hjælpe skærmlæsere tilføjes en skjult tekst “Fejl:” foran fejlmeddelelsen. Brugere af skærmlæser vil da høre “Fejl: Datoen for udløb af dit pas bør være i fortiden.”
Teksten er skjult i et `<span>` element med klassen `sr-only`.

Fejlmeddelelsen vises også i {% include links/component-code-link.html linktext="fejlopsummeringen" %} øverst på siden.

## Varianter

{:#accordions}
### Accordions

{% include code/syntax.html component="error-message-accordion" link=true copybutton=true %}
 
{:#datofelter}
### Datofelter

{% include code/syntax.html component="error-message-date" link=true copybutton=true %}

{:#datovaelger}
### Datovælger

{% include code/syntax.html component="date-picker-error" link=true copybutton=true %}

{:#dropdown}
### Dropdown

{% include code/syntax.html component="select-error" link=true copybutton=true %}

{:#tekstfelt}
### Inputfelt

{% include code/syntax.html component="error-message-name" link=true copybutton=true %}

{:#tekstfeltsuffix}
#### Inputfelt med suffix

{% include code/syntax.html component="text-input-suffix-error" link=true copybutton=true %}

{:#radioknapper}
### Radioknapper

{% include code/syntax.html component="error-message-radio" link=true copybutton=true %}

{:#tekstomraade}
### Tekstområde

{% include code/syntax.html component="text-area-error" link=true copybutton=true %}

Sørg for at rette værdierne i følgende attributter, så de svarer til din løsning:

- `for`
- `id`
- `name`
- `aria-describedby`


{:#tjekboks}
### Tjekboks

{% include code/syntax.html component="error-message-checkbox" link=true copybutton=true %}

{:#vedhaeft-fil}
### Vedhæft fil

{% include code/syntax.html component="error-message-file-input" link=true copybutton=true %}