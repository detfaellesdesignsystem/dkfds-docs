---
permalink: "/komponenter/accordions/implementering/"
guidelinelink: "/komponenter/accordions/guidelines/"
redirect_from:
- "/kode/komponenter/accordions/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Accordions
lead: En accordion er et grafisk element, som du kan bruge til at skjule og vise indhold
  med. Vær opmærksom på, at skjult indhold risikerer at blive set i mindre grad af
  brugerne, end det som er umiddelbart synligt på siden.
component: "accordion-simple"
componentTitle: "Eksempel på accordion komponent"
anchor: true
subnav:
- text: Åbn/luk alle
  href: "#aabn-luk-alle"
- text: Med fejl
  href: "#med-fejl"
- text: Med succesbeskeder
  href: "#med-succesbeskeder"
description: Dokumentation på implementering af accordions.
tags: 
---

## Installation

### HTML Struktur

{% include code/syntax.html component="accordion-simple" copybutton=true %}

Kopiér ovenstående kode for at indsætte én accordion. Ønsker du flere kan du duplikere `<li>` elementet.

Husk at tilpasse koden, således at ikke kun indholdet passer, men også attributterne. Herunder er særligt `aria-controls` og `id` vigtige, da disse skal være unikke. 

Overskriften på en accordion skal angives som en heading. Sørg for at anvende det korrekte heading-niveau, som passer semantisk ind i konteksten på siden.

### Javascript
Accordion komponenten kræver JavaScript for at fungere. Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:

{% highlight javascript %}
new DKFDS.Accordion(document.getElementById('ACCORDION-UL-GROUP-ID')).init();
{% endhighlight %}

Attributten `aria-hidden` tilføjes automatisk i JavaScript, hvis man har undladt at tilføje attributten.

#### Sprog
Hvis du ønsker at anvende et andet sprog end dansk i JavaScript-koden for accordions med åbn/luk alle-funktionen, skal du selv give din oversættelse med og derefter initiere komponenten manuelt. Husk at opdatere værdien i attributten "lang" i din sides html-tag.

{% highlight javascript %}
new DKFDS.Accordion(document.getElementById('ACCORDION-UL-GROUP-ID'), {
  "open_all": "Åbn alle", 
  "close_all": "Luk alle" 
}).init();
{% endhighlight %}

#### Events

{:.table .table--responsive-headers}
| Event key           | Element                   | Beskrivelse                                                                                          |
|---------------------|---------------------------|------------------------------------------------------------------------------------------------------|
| fds.accordion.open  | `button.accordion-button` | Når en accordion bliver foldet ud, bliver eventet `fds.accordion.open` udløst på accordion knappen   |
| fds.accordion.close | `button.accordion-button` | Når en accordion bliver foldet ind, bliver eventet `fds.accordion.close` udløst på accordion knappen |

## Varianter

{:#aabn-luk-alle}
### Åbn/luk alle
{% include code/syntax.html component="accordion-bulk-open" link=true copybutton=true %}

{:#med-fejl}
### Med fejl
{% include code/syntax.html component="accordion-error" link=true copybutton=true %}

{:#med-succesbeskeder}
### Med succesbeskeder
{% include code/syntax.html component="accordion-success" link=true copybutton=true %}