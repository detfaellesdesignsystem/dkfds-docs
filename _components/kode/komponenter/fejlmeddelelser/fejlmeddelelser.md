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

{:.h3 #accordions}
## Accordions

{% include code/syntax.html component="error-message-accordion" title="Eksempel på accordion med fejl" link=true %}
 
{:.h3 #datofelter}
## Datofelter

{% include code/syntax.html component="error-message-date" title="Eksempel på datofelter med fejlmeddelelse" link=true %}

{:.h3 #datovaelger}
## Datovælger

{% include code/syntax.html component="date-picker-error" title="Eksempel på datovælger med fejlmeddelelse" link=true %}

{:.h3 #dropdown}
## Dropdown

{% include code/syntax.html component="select-error" title="Eksempel på dropdown med fejlmeddelelse" link=true %}

{:.h3 #tekstfelt}
## Inputfelt

{% include code/syntax.html component="error-message-name" title="Eksempel på inputfelt med fejlmeddelelse" link=true %}

{:.h4 #tekstfeltsuffix}
### Inputfelt med suffix

{% include code/syntax.html component="text-input-suffix-error" title="Eksempel på inputfejl med suffix og fejlmeddelelse" link=true %}

{:.h3 #radioknapper}
## Radioknapper

{% include code/syntax.html component="error-message-radio" title="Eksempel på radioknapper med fejlmeddelelse" link=true %}

{:.h3 #tekstomraade}
## Tekstområde

{% include code/syntax.html component="text-area-error" title="Eksempel på tekstområde med fejlmeddelelse" link=true %}

Sørg for at rette værdierne i følgende attributter, så de svarer til din løsning:

- `for`
- `id`
- `name`
- `aria-describedby`


{:.h3 #tjekboks}
## Tjekboks

{% include code/syntax.html component="error-message-checkbox" title="Eksempel på tjekbokse med fejlmeddelelse" link=true %}

{:.h3 #vedhaeft-fil}
## Vedhæft fil

{% include code/syntax.html component="error-message-file-input" title="Eksempel på felt til vedhæftning af fil med fejlmeddelelse" link=true %}
