---
title: Retningslinjer
parent: Text-field
order: 10
---

### Brugervenlighed

#### Anvendes til

- Bruger-input af information i form af bogstaver, tal og en kombination af begge.
- Brug primært formularelementer, når der er behov for, at brugeren kan tilføje information, som ikke kan vælges ud fra prædefinerede værdier, eller som løsningen ikke automatisk kan forudse ud fra brugerens andre indtastninger.
- Når det er nemmere for brugeren at skrive information end at vælge den gennem en kompliceret proces. Ofte kan et datofelt til indtastning være nemmere at anvende - og gøre tilgængeligt - end en date picker funktion.
- Når brugeren skal kunne copy/paste information ind i en formular.

#### Anvendes ikke til

Når brugeren skal vælge ud fra et prædefineret sæt af værdier, og der er behov for datakonsistens.

### Vejledning

- Vis kun fejlbeskeder, når brugeren har indtastet en ugyldig værdi.
- Fejlbeskeder skal være meningsfulde og hjælpsomme. 
- Placér fejlbeskeder mellem label og feltet, som bliver markeret med rødt.
- Felter er ikke perfekte til mobile løsninger. Overvej om de er nødvendige eller om du kan tilbyde brugeren en anden form for interaktion.

## Implementering

Undgå at opdele felter fx til telefonnumre, da det enkelte felt ikke kan tilføjes et meningsfuldt label.

Felter skal have et kontrastforhold på minimum 3:1 i forhold til baggrundsfarven. Tjek kontraster hos <a href="https://webaim.org/resources/contrastchecker/" class="icon-link">WebAIM+ <svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>
