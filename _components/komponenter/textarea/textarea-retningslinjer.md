---
title: Textarea
parent: Textarea
order: 10
---
### Implementering
  
Sæt højden på et textarea ved brug af `rows` attributten.

### Retningslinjer

#### Tilgængelighed

Tekstområdet bliver automatisk fremhævet, når brugeren navigerer sig hen til det ved hjælp af tabulator-tasten.

#### Brugervenlighed

##### Anvendes til

- Brug tekstområder til sammenhængende (mere end 2 linjer) men ustruktureret tekst og sætninger, der har karakter af prosa. Fx en baggrundsfortælling.
- Når der er behov for yderligere sammenhængende information, hvis karakter brugeren ikke kan vælge ud fra et prædefineret sæt værdier.
- Når løsningen stiller et spørgsmål, der ikke kan besvares i et felt.

##### Anvendes ikke til

Brug ikke tekstområder til struktureret information, hvor datakonsistens har betydning.

##### Vejledning

- Angiv tekstområdets højde, så det modsvarer den tekstmængde, du forventer, at brugeren skal indtaste.
- Overvej at begrænse antallet af tegn, hvis det giver mening.
- Vis kun fejlbeskeder, når brugeren har indtastet en ugyldig værdi.
- Fejlbeskeder skal være meningsfulde og hjælpsomme. 
- Placér fejlbeskeder mellem label og felt, og markér feltet med rødt.
