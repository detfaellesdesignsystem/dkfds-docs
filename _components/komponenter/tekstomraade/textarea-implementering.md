---
permalink: "/komponenter/tekstomraade/implementering/"
guidelinelink: "/komponenter/tekstomraade/guidelines/"
redirect_from:
- "/kode/komponenter/textarea/"
- "/kode/komponenter/tekstomraade/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Tekstområde (Textarea)
lead: Tekstområder lader brugeren indtaste en længere tekst på flere linjer.
component: "text-area"
componentTitle: "Eksempel på tekstområde"
anchor: false
description: "Dokumentation på implementering af tekstområde."
tags:
- tekstområde
- tekstomraade
- textarea
- karakterbegrænsning
- karakterbegraensning
---

## Installation

### HTML Struktur

{% include code/syntax.html component="text-area" copybutton=true %}
  
Sørg for at rette værdierne i følgende attributter, så de svarer til din løsning:

- `for`
- `id`
- `name`
- `rows`


Sæt højden på et tekstområde ved brug af `rows` attributten. Sæt højden, så det svarer til den mængde tekst, der forventes indtastet.

{:#fejlmeddelelse}
## Fejlmeddelelse
{% include links/component-guideline-link.html linktext="Læs mere om korrekt brug af fejlmeddelelser" %} og {% include links/component-links.html linktext="fejlmeddelelser's implementering med tekstområde." %}

Når der vises en fejlmeddelelse, vis da også {% include links/component-code-link.html linktext="en fejlopsummering" %}.

{:#karakterbegraensning}
## Karakterbegrænsning

{% include code/syntax.html component="text-area-character-limit" link=true copybutton=true %}

Husk at medtage de to beskeder skjult med klassen `sr-only`. Disse anvendes af skærmlæsere til at give info og status på indtastningen til brugeren.

### Javascript
Karakterbegrænsning kræver JavaScript for at fungere. Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med `init()`.

#### Funktioner
<div class="table--responsive-scroll">
  <table class="table table--responsive-headers">
    <thead>
      <tr>
        <th scope="col">Funktion</th>
        <th scope="col">Beskrivelse</th>
      </tr>
    </thead>
    <tbody>
    <tr>
        <td>init()</td>
        <td>Sørger for at beskederne med antal tegn tilbage opdateres.</td>
      </tr>
      <tr>
        <td>charactersLeft()</td>
        <td>Returnerer det antal tegn, der lige nu kan indtastes i inputfeltet. Tallet er negativt, hvis antallet af tegn er overskredet.</td>
      </tr>
      <tr>
        <td>updateMessages()</td>
        <td>Fremtvinger en opdatering af beskederne med antal tegn tilbage. Dette kan være nyttigt, hvis eksempelvis værdien i inputfeltet ændres programmatisk.</td>
      </tr>
    </tbody>
  </table>
</div>

Eksempel på anvendelse:

{% highlight javascript %}
const form_limit = new DKFDS.CharacterLimit(document.getElementsByClassName('form-limit')[0]);
form_limit.init();
form_limit.charactersLeft();
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