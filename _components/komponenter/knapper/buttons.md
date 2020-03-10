---
permalink: /komponenter/knapper/
redirect_from:
- /komponenter/buttons/
layout: styleguide
type: element
title: Knapper
category: Komponenter_category
subcategory: Komponenter
description: "Knapper er grafiske elementer, som brugerne kan trykke eller klikke på og dermed udløse en funktion eller handling."
tags: 
- "primærknap"
- "sekundærknap"
- "tertiærknap"
anchor: true
subnav:
- text: Primærknap
  href: '#primærknap'
- text: Sekundærknapper
  href: '#sekundærknapper'
- text: Tertiærknapper
  href: '#tertiærknapper'
- text: Tilbage-knap
  href: '#tilbage-knap'
- text: Knap med ikon
  href: '#knap-med-ikon'
- text: Ikon som knap
  href: '#ikon-som-knap'
component: button-primary
componentTitle: "Eksempel på primærknap"
componentCode: "/kode/komponenter/knapper/"
---

{:.h3 #retningslinjer}
## Anvendes til

Du kan bruge knapper til at anvise centrale funktioner til brugerne som fx ”Gem”, ”Hent”, ”Log ind” og ”Log af”.

{:.h3}
## Anvendes ikke til

Brug ikke knapper til at navigere mellem sidevisninger. Der skal du i stedet anvende link.

{:.h3}
## Vejledning

Generelt skal du anvende primære knapper til handlinger, der bringer brugeren videre i sit forløb og sekundære knapper til handlinger, der foregår indenfor den aktuelle sidevisning.

Der er kun en primærknap pr. side.

Undgå for mange knapbaserede funktioner på samme side.

Brug stort forbogstav og små bogstaver for resten af teksten på knappen.

Skriv kort og præcist.

Skriv i aktiv form: I stedet for at skrive ”Fejlindmelding” bør du skrive ”Indmeld en fejl”.

I nogle tilfælde kan det være meningsunderstøttende at indlejre et svg-ikon i knappen for at signalere bestemte handlinger som fx ”Gem”.

Funktioner af mindre vigtighed bør du style som link.

{% include child-components.html parent='Buttons' %}
