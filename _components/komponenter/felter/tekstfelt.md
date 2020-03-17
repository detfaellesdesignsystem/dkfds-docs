---
permalink: "/komponenter/felter/"
layout: styleguide
type: component
title: Felter
tags:
- tekstfelt
- input
- fejlbesked
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
- text: Fejlbesked
  href: "#fejlbesked"
- text: Frivilligt felt
  href: "#frivilligt-felt"
- text: Hjælpetekst
  href: "#hjælpetekst"
- text: Feltbredde
  href: "#feltbredde"
- text: Deaktiveret
  href: "#deaktiveret"
- text: Readonly
  href: "#readonly"
component: text-input
componentTitle: Eksempel på tekst felter
componentCode: "/kode/komponenter/felter/"

---
{:.h3 #retningslinjer}
## Anvendes til

- Bruger-input af information i form af bogstaver, tal og en kombination af begge.
- Når det er nemmere for brugeren at skrive information end at vælge den gennem en kompliceret proces. Ofte kan et datofelt til indtastning være nemmere at anvende - og gøre tilgængeligt - end en date picker funktion.
- Når brugeren skal kunne copy/paste information ind i en formular.

Feltbredden angiver det forventede omfang af tegn, så brugeren får en fornemmelse af, hvad der skal indtastes. Fx bør et felt, hvor man skal angive et dansk postnummer, kun være 4 tegn bredt, mens et felt til et gadenavn bør være på 27 tegn.

Brug ikke feltbredde til at validere brugerens input. Angiv i stedet krav til inputvalidering i en vejledning.

{:.h3}
## Anvendes ikke til

Når brugeren skal vælge ud fra et prædefineret sæt af værdier, og der er behov for datakonsistens.

{:.h3}
## Vejledning

Brug primært formularelementer, når der er behov for, at brugeren kan tilføje information, som ikke kan vælges ud fra prædefinerede værdier, eller som løsningen ikke automatisk kan forudse ud fra brugerens andre indtastninger.

Vis kun fejlbeskeder, når brugeren har indtastet en ugyldig værdi.

Fejlbeskeder skal være meningsfulde og hjælpsomme. 

Placér fejlbeskeder mellem label og feltet, som bliver markeret med rødt.

Felter er ikke perfekte til mobile løsninger. Overvej om de er nødvendige eller om du kan tilbyde brugeren en anden form for interaktion.

Brug feltbredden til at begrænse antallet af tegn i et felt.

Feltets bredde skal modsvare det, du forventer at brugeren  skal indtaste, så brugeren kan se alle tegn under indtastningen.

{% include child-components.html parent='Text-field' %}