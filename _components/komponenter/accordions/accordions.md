---
permalink: "/komponenter/accordions/"
layout: styleguide
type: component
title: Accordions
category: Komponenter_category
subcategory: Komponenter
description: Accordions er interaktive overskrifter, der anvendes til at skjule og
  vise det relaterede indhold.
tags: 
lead: En accordion er et grafisk element, som du kan bruge til at skjule og vise indhold
  med. Vær opmærksom på, at skjult indhold risikerer at blive set i mindre grad af
  brugerne, end det som er umiddelbart synligt på siden.
anchor: true
subnav:
- text: Åbn/luk alle
  href: "#aabn-luk-alle"
- text: Med fejl
  href: "#med-fejl"
- text: Med succesbeskeder
  href: "#med-succesbeskeder"
---
{% include code/preview-box.html component="accordion" title="Eksempel på accordion" link=true code="/kode/komponenter/accordions/" %}

## Anvendes til  
{: .h3 #retningslinjer}

Accordions er interaktive overskrifter, der anvendes til at skjule og vise det relaterede indhold.

## Anvendes ikke til  
{: .h3}

Accordions erstatter ikke individuelle trin i en selvbetjeningsløsning eller sider på en hjemmeside.

Brug ikke accordions til små mængder indhold, der i stedet kunne stå synligt på siden.

Brug ikke accordions til at kollapse indhold i fx søgeresultater eller andre længere oversigter.

Brug ikke accordions til at opdele et logisk flow eller en sekvens af handlinger. Der bør du eventuelt i stedet anvende en trinindikator.

## Vejledning  
{: .h3}

Accordions bliver fremvist i lodret rækkefølge med synlig overskrift. Ved at klikke på accordion folder beskrivelsen af indholdet sig ud. Klikker du igen, folder beskrivelsen sammen igen.

Overvej at lade den accordion, som har det vigtigste indhold, være foldet ud, når brugerne kommer ind på siden. Så er du sikker på, at dine brugere læser den.

Generelt er det ikke en god løsning at skjule indhold for at gøre siden mere spiselig. Overvej om det er nødvendigt at kollapse indhold og hvorfor, det er det. Hvis indholdet er unødigt langt eller uoverskueligt, bør du i stedet omformulere teksten og eventuelt fordele den på flere sider.

{% include dos-donts-box.html component="accordion-dos-donts" title="Accordion do's and don'ts" %}

{:.h4}
### Referencer

{:.nobullet-list}
- <a href="http://uxmovement.com/navigation/where-to-place-your-accordion-menu-icons/" class="icon-link">Anthony Thomas (2006): Where to Place Your Accordion Menu items<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>
- <a href="https://www.nngroup.com/articles/accordions-complex-content/" class="icon-link">Hoa Loranger (2014): Accordions Are Not Always the Answer for Complex Content on Desktops<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>

{:#aabn-luk-alle}
## Åbn/luk alle

{% include code/preview-box.html component="accordion-bulk-open" title="Eksempel på accordions med åbn alle funktion" %}

{:#med-fejl}
## Med fejl

<a href="/komponenter/fejlmeddelelser/">Læs mere om korrekt brug af fejlmeddelelser og deres formuleringer.</a>

Når der vises en fejlmeddelelse, vis da også <a href="/komponenter/fejlopsummering/">fejlopsummering</a>.

{% include code/preview-box.html component="accordion-error" title="Eksempel på accordion med fejl" %}

{:#med-succesbeskeder}
## Med succesbeskeder

{% include code/preview-box.html component="accordion-success" title="Eksempel på accordion med succesbesked" %}