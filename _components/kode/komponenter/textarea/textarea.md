---
permalink: /kode/komponenter/tekstomraade/
redirect_from:
- /kode/komponenter/textarea/
parentlink: /kode/komponenter/
title: Tekstområde (Textarea)
layout: styleguide
type: component
category: Kode_category
description: "Dokumentation på implementering af tekstområde."
tags:
- tekstområde
- tekstomraade
- textarea
- karakterbegrænsning
- karakterbegraensning
subcategory: Kode
---

{% include code/preview-box.html component="text-area" title="Eksempel på tekstområde" %}

## Eksempler og retningslinjer
<ul class="nobullet-list">
    <li><a href="/komponenter/tekstomraade/#retningslinjer">Retningslinjer</a></li>
    <li><a href="/komponenter/tekstomraade/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur

{% include code/syntax.html component="text-area" %}
  
Sørg for at rette værdierne i følgende attributter, så de svarer til din løsning:

- `for`
- `id`
- `name`
- `rows`


Sæt højden på et tekstområde ved brug af `rows` attributten. Sæt højden, så det svarer til den mængde tekst, der forventes indtastet.

{:#fejlmeddelelse}
## Fejlmeddelelse
<a href="/kode/komponenter/fejlmeddelelser/#tekstomraade">Læs mere om korrekt brug af fejlmeddelelser og deres formuleringer.</a>

Når der vises en fejlmeddelelse, vis da også <a href="/kode/komponenter/fejlopsummering/">fejlopsummering</a>.

{:#karakterbegraensning}
## Karakterbegrænsning

{% include code/syntax.html component="text-area-character-limit" link="true" %}

Husk at medtage de to beskeder skjult med klassen `sr-only`. Disse anvendes af skærmlæsere til at give info og status på indtastningen til brugeren.

### Javascript
Karakterbegrænsning kræver JavaScript for at fungere. Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:

{% highlight javascript %}
new DKFDS.CharacterLimit(document.getElementById('FORM-LIMIT-ID')).init();
{% endhighlight %}

#### Sprog
Hvis du ønsker at anvende et andet sprog end dansk i JavaScript-koden til karakterbegrænsning, skal du selv give din oversættelse med og derefter initiere komponenten manuelt. Husk at opdatere værdien i attributten "lang" i din sides html-tag. Indholdet i krøllede parenteser `{...}` nedenunder skal ikke oversættes eller ændres.

{% highlight javascript %}
new DKFDS.CharacterLimit(document.getElementById('FORM-LIMIT-ID'), {
  "character_remaining": "Du har {value} tegn tilbage",
  "characters_remaining": "Du har {value} tegn tilbage",
  "character_too_many": "Du har {value} tegn for meget",
  "characters_too_many": "Du har {value} tegn for meget"
}).init();
{% endhighlight %}