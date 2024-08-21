---
permalink: "/komponenter/accordions/"
redirect_from:
- "/kode/komponenter/accordions/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Accordions
lead: En accordion er et grafisk element, som du kan bruge til at skjule og vise indhold
  med. Vær opmærksom på, at skjult indhold risikerer at blive set i mindre grad af
  brugerne, end det som er umiddelbart synligt på siden.
description: Accordions er interaktive overskrifter, der anvendes til at skjule og
  vise det relaterede indhold.
tags:
- accordion
- accordions
tabs: "Retningslinjer, kode"
---

{% include tabs.html guidelines=true code=true %}

{% include code/preview-box.html component="accordion" title="Eksempel på accordion" classes="intro-example" %}

{% include anchorlinks.html guidelines="Accordions" code="Accordions_Kode" %}

<!--split-->

## Sådan bruges komponenten {#{% include create-id.html heading="Sådan bruges komponenten" %}}

### Anvendes til  

Accordions er interaktive overskrifter, der anvendes til at skjule og vise det relaterede indhold.

### Anvendes ikke til  

Accordions erstatter ikke individuelle trin i en selvbetjeningsløsning eller sider på en hjemmeside.

Brug ikke accordions til små mængder indhold, der i stedet kunne stå synligt på siden.

Brug ikke accordions til at kollapse indhold i fx søgeresultater eller andre længere oversigter.

Brug ikke accordions til at opdele et logisk flow eller en sekvens af handlinger. Der bør du eventuelt i stedet anvende en trinindikator.

### Vejledning  

Accordions bliver fremvist i lodret rækkefølge med synlig overskrift. Ved at klikke på accordion folder beskrivelsen af indholdet sig ud. Klikker du igen, folder beskrivelsen sammen igen.

Overvej at lade den accordion, som har det vigtigste indhold, være foldet ud, når brugerne kommer ind på siden. Så er du sikker på, at dine brugere læser den.

Generelt er det ikke en god løsning at skjule indhold for at gøre siden mere spiselig. Overvej om det er nødvendigt at kollapse indhold og hvorfor, det er det. Hvis indholdet er unødigt langt eller uoverskueligt, bør du i stedet omformulere teksten og eventuelt fordele den på flere sider.

#### Fejlmeddelelse {#{% include create-id.html heading="Fejlmeddelelse" %}}

Læs mere om korrekt brug af {% include links/component-guideline-link.html linktext="fejlmeddelelser" %} og deres formuleringer.

Når der vises en fejlmeddelelse, vis da også {% include links/component-guideline-link.html linktext="fejlopsummering" %}.

{% include code/preview-box.html component="accordion-error" title="Eksempel på accordion med fejl" code="/komponenter/accordions/#med-fejl-kode" %}

## Varianter {#{% include create-id.html heading="Varianter" %}}

### Åbn/luk alle {#{% include create-id.html heading="Åbn/luk alle" %}}

{% include code/preview-box.html component="accordion-bulk-open" title="Eksempel på accordions med åbn alle funktion" code="/komponenter/accordions/#aabn-luk-alle-kode" %}

### Med succesbeskeder {#{% include create-id.html heading="Med succesbeskeder" %}}

{% include code/preview-box.html component="accordion-success" title="Eksempel på accordion med succesbesked" code="/komponenter/accordions/#med-succesbeskeder-kode" %}

## Referencer {#{% include create-id.html heading="Referencer" %}}

{:.nobullet-list}
- {% include links/external-link.html linktext="Anthony Thomas (2006): Where to Place Your Accordion Menu items" %}
- {% include links/external-link.html linktext="Hoa Loranger (2014): Accordions Are Not Always the Answer for Complex Content on Desktops" %}

<!--split-->

## Installation {#{% include create-id.html heading="Installation" append="-kode" %}}

### HTML Struktur

{% include code/syntax.html component="accordion" copybutton=true %}

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

## Åbn/luk alle {#{% include create-id.html heading="Åbn/luk alle" append="-kode" %}}

{% include code/syntax.html component="accordion-bulk-open" link=true copybutton=true guidelines="/komponenter/accordions/#aabn-luk-alle" %}

## Med fejl {#{% include create-id.html heading="Med fejl" append="-kode" %}}

{% include code/syntax.html component="accordion-error" link=true copybutton=true guidelines="/komponenter/accordions/#fejlmeddelelse" %}

## Med succesbeskeder {#{% include create-id.html heading="Med succesbeskeder" append="-kode" %}}

{% include code/syntax.html component="accordion-success" link=true copybutton=true guidelines="/komponenter/accordions/#med-succesbeskeder" %}