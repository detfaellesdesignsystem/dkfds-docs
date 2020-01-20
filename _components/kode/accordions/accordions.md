---
permalink: "/kode/accordions/"
layout: styleguide
type: component
title: Accordions
category: Kode_category
subcategory: Kode
---

## Komponent
{% include code/components/accordion-simple.html %}

<ul class="nobullet-list mt-7">
    <li><a href="/komponenter/accordions/#retningslinjer">Retningslinjer</a></li>
    <li><a href="/komponenter/accordions/">Eksempler</a></li>
</ul>

## Implementering

{% include code/syntax.html component="accordion-simple" %}

Kopiér ovenstående kode for at indsætte én accordion. Ønsker du flere kan du duplikere `<li>` elementet.

Husk at tilpasse koden, således at ikke kun indholdet passer, men også attributerne. Herunder er særligt `aria-controls` og `id` vigtige, da disse skal være unikke. 

## Varianter

### Accordion med ramme

Tilføj klassen `accordion-bordered` til elementet med klassen `accordion` for at tilføje en synlig ramme.

### Tillad flere åbne accordions

For at tillade at flere accordions kan være åbne på samme tid, kan man tilføje klassen `accordion-multiselectable` til elementet med klassen `accordion`.

## Javascript
Accordion komponenten kræver JavaScript for at fungere. Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:


{% highlight javascript %}
new DKFDS.Accordion(document.getElementByID('ACCORDION-ID'));
{% endhighlight %}

Attributten `aria-hidden` tilføjes automatisk i JavaScript, hvis man har undladt at tilføje attributten.

### Events

{:.table}
| Event key           | Element                   | Beskrivelse                                                                                          |
|---------------------|---------------------------|------------------------------------------------------------------------------------------------------|
| fds.accordion.open  | `button.accordion-button` | Når en accordion bliver foldet ud, bliver eventet `fds.accordion.open` udløst på accordion knappen   |
| fds.accordion.close | `button.accordion-button` | Når en accordion bliver foldet ind, bliver eventet `fds.accordion.close` udløst på accordion knappen |
