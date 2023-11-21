---
permalink: "/komponenter/faneblade/implementering/"
guidelinelink: "/komponenter/faneblade/guidelines/"
redirect_from:
- "/kode/komponenter/faneblad/"
- "/kode/komponenter/faneblade/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Faneblade
lead: Faneblade gør det muligt for brugerne at bladre imellem relaterede sektioner
  af indhold og kun få vist en sektion af gangen. Vær opmærksom på om dine brugere
  ser de skjulte sektioner, når du anvender faneblade.
component: "tabs-buttons"
componentTitle: "Eksempel på faneblade"
anchor: true
subnav:
- text: Faneblad med URL-skifte
  href: '#faneblad-URL-skift'
- text: Faneblad med ikoner
  href: '#faneblad-med-ikoner'
description: "Dokumentation på implementering af faneblad."
tags:
---

## Installation

### HTML Struktur

{% include code/syntax.html component="tabs-buttons" copybutton=true %}

Kopier det ovenstående kode for at indsætte en faneblads komponent. Hvis du ønsker et andet antal faneblade kan disse fjernes/tilføjes ved at slette/indsætte et `<li>` element som indkapsler et `<button>` tag samt at slette/indsætte det tilhørende `<li>` element som har et `<section>` tag.

Husk at tilpasse koden så attributterne passer. Bemærk her især at `aria-controls` attributten for fanebladet skal matche panel `id'et` og at disse skal være unikke.

## Tilgængelighed
Husk at bruge rollerne `tablist`, `tab` og `tab-panel` til at informere om hvad der er henholdsvis fanebladsbeholder, faneblad og faneblad indhold. Her er det vigtigt at benytte `aria-selected` attributten til at indikere hvilket faneblad er aktivt. Med `hidden` attributten skjules panelet visuelt, mens det også gemmes for hjælpeteknologier.  

{:#faneblad-URL-skift}
### Faneblad med URL-skifte

{% include code/syntax.html component="tabs-urls" copybutton=true %}

Læg mærke til at der ved URL-skift faneblade istedet er anvendt `aria-current=page` for at indikere det aktive faneblad. Her skal man sikre sig at kun ét faneblad har denne attribut sat. 

{:#faneblad-med-ikoner}
### Faneblad med ikoner

{% include code/syntax.html component="tabs-buttons-icons" copybutton=true %}

### JavaScript

Fanebladskomponenten kræver JavaScript for at fungere. Man kan enten gøre brug af `DKFDS.init()` eller manuelt initialisere komponenten således:

{% highlight js %}
new DKFDS.Tabs(document.getElementById('TABNAV-ID')).init();
{% endhighlight %}

Hvis en komponent først bliver tilføjet på siden efter pageload, så vil der være stor sandsynlighed for at komponenten ikke virker optimalt, da events ikke er blevet sat. Hvis man står i denne situation skal man initialisere komponenten manuelt.

Bemærk, at dette kun gælder fra version 5.0.0.

#### Events

Når man vælger et nyt faneblad, bliver eventet `fds.tab.changed` udløst på `.tab-container` elementet, som man kan koble sig på med en eventlistener.

Når et faneblad åbnes, bliver eventet `fds.tab.open` udløst på det tilhørende `.tab-item` faneblad element, som man kan koble sig på med en eventlistener.

Når et faneblad lukkes, bliver eventet `fds.tab.close` udløst på det tilhørende `.tab-item` faneblad element, som man kan koble sig på med en eventlistener.
