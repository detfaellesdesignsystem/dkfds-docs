---
permalink: "/komponenter/accordions/guidelines/"
redirect_from:
- "/komponenter/accordions/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Accordions
lead: En accordion er et grafisk element, som du kan bruge til at skjule og vise indhold
  med. Vær opmærksom på, at skjult indhold risikerer at blive set i mindre grad af
  brugerne, end det som er umiddelbart synligt på siden.
component: "accordion"
componentTitle: "Eksempel på accordion"
componentLink: true
anchor: true
subnav:
- text: Sådan bruges komponenten
  href: "#retningslinjer"
- text: Varianter
  href: "#varianter"
- text: Referencer
  href: "#ref"
description: Accordions er interaktive overskrifter, der anvendes til at skjule og
  vise det relaterede indhold.
tags:
- accordion
- accordions
---

{:#retningslinjer}
## Sådan bruges komponenten

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

{:#med-fejl}
#### Fejlmeddelelse

{% include links/component-guideline-link.html linktext="Læs mere om korrekt brug af fejlmeddelelser og deres formuleringer." %}

Når der vises en fejlmeddelelse, vis da også {% include links/component-guideline-link.html linktext="fejlopsummering" %}.

{% include code/preview-box.html component="accordion-error" title="Eksempel på accordion med fejl" %}

{:#varianter}
## Varianter

{:#aabn-luk-alle}
### Åbn/luk alle

{% include code/preview-box.html component="accordion-bulk-open" title="Eksempel på accordions med åbn alle funktion" %}

{:#med-succesbeskeder}
### Med succesbeskeder

{% include code/preview-box.html component="accordion-success" title="Eksempel på accordion med succesbesked" %}

{:#ref}
## Referencer

{:.nobullet-list}
- {% include links/external-link.html linktext="Anthony Thomas (2006): Where to Place Your Accordion Menu items" %}
- {% include links/external-link.html linktext="Hoa Loranger (2014): Accordions Are Not Always the Answer for Complex Content on Desktops" %}