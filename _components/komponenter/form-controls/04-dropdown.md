---
title: Dropdown-menu
parent: Formcontrols
order: 04
component: select
componentTitle: Eksempel på dropdown-menu
---

### Retningslinjer

#### Tilgængelighed

Dropdown menu skal have et label tilknyttet.

Anvend ikke JavaScript til automatisk at sende den valgte værdi, da en skærmlæser vælger hver option i takt med, at de læser dem op.

Brug dropdown menu i begrænset omfang. Værdierne i en dropdown menu er ikke umiddelbart synlige for brugerne, og det øger sidens kompleksitet for dem.

#### Brugervenlighed

##### Anvendes til

Anvend kun dropdown menuer, når det er absolut nødvendigt og kun i tilfælde, hvor brugeren skal vælge mellem 7 og 15 værdier på en begrænset plads.

##### Anvendes ikke til

- Lister med færre værdier end 7.
- Lister med flere værdier end 15. I så tilfælde bør du tilbyde brugeren et felt med auto-forslag, når brugeren begynder at indtaste.
- Brug tjekbokse fremfor dropdown menu, hvis brugeren skal vælge mere end 1 værdi.
- Brug ikke dropdown-menu til navigation, som den ikke er velegnet til.

##### Vejledning

- Dropdown menuer kræver ekstra aftestning på målgruppen pga. de kognitive udfordringer, de kan afføde.
- Undgå at lade brugerens valg i én dropdown menu påvirke indholdet i en anden. Det forvirrer mange brugere.
- Hvis du ved, at mange brugere vil vælge den samme værdi i en dropdown menu, så marker den med `<option selected="selected">Default</option>`. Dermed slipper brugerne for at bruge tid på at gennemsøge listen.
- Anvend ikke JavaScript til automatisk at sende den valgte værdi, men sørg for at der er en submit-knap til at sende formularen med.
