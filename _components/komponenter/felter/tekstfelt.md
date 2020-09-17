---
permalink: "/komponenter/felter/"
layout: styleguide
type: component
title: Felter
tags:
- tekstfelt
- input
- fejlbesked
- fejlmeddelelse
- fejl på felt
- hjælpetekst
- hjælp på felt
- felt
- felter
- længde på felter
- deaktiveret felt
- read-only
- feltbredde
- låst felt
category: Komponenter_category
description: Felt til indtastning af information i form af bogstaver, tal og en kombination
  af begge.
subcategory: Komponenter
anchor: true
subnav:
- text: Felt med fejlmeddelelse
  href: "#felt-med-fejlmeddelelse"
- text: Felt med frivillig indtastning
  href: "#felt-med-frivillig-indtastning"
- text: Felt med hjælpetekst
  href: "#felt-med-hjælpetekst"
- text: Deaktiveret felt
  href: "#deaktiveret-felt"
- text: Read-only felt
  href: "#read-only-felt"
- text: Feltbredde
  href: "#feltbredde"
component: text-input
componentTitle: Eksempel på tekst felter
componentCode: "/kode/komponenter/felter/"

---
{:.h3 #retningslinjer}
## Anvendes til

Brug til input af information i form af bogstaver og tal eller en kombination af begge.

Brug felter når det er nemmere for brugeren at skrive information end at vælge den på anden vis. 

Brug når brugeren skal kunne copy paste information ind i en formular.

{:.h3}
## Anvendes ikke til

Når brugeren skal vælge ud fra et prædefineret sæt af værdier (fx nogle få bestemte datoer) eller hvis der er strenge krav til datakonsistens, oftest i en løsning uden klientside validering (hvis brugerens input-format kan skabe fejl på serversiden).

{:.h3}
## Vejledning

Brug primært formularelementer, når der er behov for, at brugeren kan tilføje information, som ikke kan vælges ud fra prædefinerede værdier, eller som løsningen ikke automatisk kan forudse ud fra brugerens andre indtastninger.

Vis kun fejlmeddelelser, når brugeren har indtastet en ugyldig værdi.

Fejlmeddelelser skal være meningsfulde og hjælpsomme.

Placér fejlmeddelelser mellem label og feltet, som bliver markeret med rødt.

Felter er ikke perfekte til mobile løsninger. Overvej om de er nødvendige eller om du kan tilbyde brugeren en anden form for interaktion.

Brug feltbredden til at begrænse antallet af tegn i et felt. Feltbredden angiver det forventede omfang af tegn, så brugeren får en fornemmelse af, hvad der skal indtastes. Fx bør et felt, hvor man skal angive et dansk postnummer, kun være 4 tegn bredt, mens et felt til et gadenavn bør være på minimum 27 tegn.

Brug ikke feltbredde til at validere brugerens input. Angiv i stedet krav til inputvalidering i en vejledning.

Feltets bredde skal modsvare det, du forventer at brugeren  skal indtaste, så brugeren kan se alle tegn under indtastningen.

{% include child-components.html parent='Text-field' %}
