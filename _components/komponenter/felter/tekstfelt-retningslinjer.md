---
title: Retningslinjer
parent: Text-field
order: 20
---

{:.h4}
### Tilgængelighed

Feltets bredde skal modsvare det, du forventer at brugeren  skal indtaste, så brugeren kan se alle tegn under indtastningen.

{:.h4}
### Brugervenlighed

{:.h5}
#### Anvendes til

- Bruger-input af information i form af bogstaver, tal og en kombination af begge.
- Brug primært formularelementer, når der er behov for, at brugeren kan tilføje information, som ikke kan vælges ud fra prædefinerede værdier, eller som løsningen ikke automatisk kan forudse ud fra brugerens andre indtastninger.
- Når det er nemmere for brugeren at skrive information end at vælge den gennem en kompliceret proces. Ofte kan et datofelt til indtastning være nemmere at anvende - og gøre tilgængeligt - end en date picker funktion.
- Når brugeren skal kunne copy/paste information ind i en formular.
- Feltbredden angiver det forventede omfang af tegn, så brugeren får en fornemmelse af, hvad der skal indtastes. Fx bør et felt, hvor man skal angive et dansk postnummer, kun være 4 tegn bredt, mens et felt til et gadenavn bør være på 27 tegn.
- Brug ikke feltbredde til at validere brugerens input. Angiv i stedet krav til inputvalidering i en vejledning.

{:.h5}
#### Anvendes ikke til

Når brugeren skal vælge ud fra et prædefineret sæt af værdier, og der er behov for datakonsistens.

{:.h5}
#### Vejledning

- Vis kun fejlbeskeder, når brugeren har indtastet en ugyldig værdi.
- Fejlbeskeder skal være meningsfulde og hjælpsomme. 
- Placér fejlbeskeder mellem label og feltet, som bliver markeret med rødt.
- Felter er ikke perfekte til mobile løsninger. Overvej om de er nødvendige eller om du kan tilbyde brugeren en anden form for interaktion.
- Brug feltbredden til at begrænse antallet af tegn i et felt.
