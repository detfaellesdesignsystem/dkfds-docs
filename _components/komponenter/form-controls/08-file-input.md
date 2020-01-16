---
title: Vedhæft fil
parent: Formcontrols
order: 07
component: file-input
componentTitle: Eksempel på vedhæft fil
---
### Implementering

Vi anbefaler at bruge det indbyggede input felt til filer `type="file"` frem for en skræddersyet løsning.

Årsagen til dette er:

- at feltet får fokus, når man tabulerer gennem siden
- at feltet fungerer ved brug af tastatur
- at feltet fungerer ved brug af hjælpemidler
- at feltet fungerer, selv når JavaScript er utilgængeligt.

Du bør anvende ovenstående kriterier til en skræddersyet løsning for denne type felt.

### Retningslinjer

#### Tilgængelighed

Du bør kun bruge vedhæftet fil, hvis det er strengt nødvendigt for din løsning.

#### Brugervenlighed

##### Anvendes til

Brug det til at lade brugeren vælge og overføre en fil fra sin egen computer, tablet eller mobil.

##### Vejledning

- Sørg for at brugeren får en positiv respons, når filen er overført.
- Gør tydeligt brugeren opmærksom på, hvilke formater og størrelser, der vil blive accepteret.
- Tjek filformatet før overførslen går i gang, så brugeren ikke spilder tid.
