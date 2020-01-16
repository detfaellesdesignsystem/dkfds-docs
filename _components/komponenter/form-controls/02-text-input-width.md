---
title: Feltbredde
parent: Formcontrols
order: 02
component: text-input-width
componentTitle: Eksempel på feltbredder
---

### Implementering

#### Inputfelt: Bredde med rem
   
Inputfelter har en standard bredde på 32rem, for at ændre bredden på inputfelter bruges nedenstående klasser:

- `.input-width-xxs` har en bredde på 8rem
- `.input-width-xs` har en bredde på 16rem
- `.input-width-s` har en bredde på 24rem
- `.input-width-m` har en bredde på 32rem
- `.input-width-l` har en bredde på 40rem
- `.input-width-xl` har en bredde på 48rem

#### Inputfelt: Bredde med tegn

For at styre bredden på inputfelter efter tegn, skal der i stedet bruges nedenstående klasser:

- `.input-char-4` har en bredde der passer til 4 tegn
- `.input-char-8` har en bredde der passer til 8 tegn
- `.input-char-11` har en bredde der passer til 11 tegn
- `.input-char-27` har en bredde der passer til 27 tegn

For at tilføje flere input bredder, der er styret af tegn, skal der tilføjes en ny klasse, hvor det nye tal skal erstattes med X.

- `.input-char-X { max-width: calc(2px + 16px + 16px + Xch); }`

#### Validering

Vi anbefaler at der laves validering på inputfelter. Nedenfor ses et eksempel på validering af en e-mail, samt validering af et felt der kun må indeholde tal.

##### Felt med email validering

- `&lt;input type="email" pattern="/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/"&gt;`

##### Felt med kun tal validering

- `&lt;input type="number" pattern="[0-9]"&gt;`

### Retningslinjer

#### Tilgængelighed

Feltets bredde skal modsvare det, du forventer at brugeren  skal indtaste, så brugeren kan se alle tegn under indtastningen.

#### Brugervenlighed

##### Anvendes til

Feltbredden angiver det forventede omfang af tegn, så brugeren får en fornemmelse af, hvad der skal indtastes. Fx bør et felt, hvor man skal angive et dansk postnummer, kun være 4 tegn bredt, mens et felt til et gadenavn bør være på 27 tegn.

Brug feltbredden til at begrænse antallet af tegn i et felt.

##### Anvendes ikke til

Brug ikke feltbredde til at validere brugerens input. Angiv i stedet krav til inputvalidering i en vejledning.

##### Vejledning

Sæt bredden på feltet, så det svarer til den mængde information, du forventer, at brugeren indtaster. På den måde får brugeren overblik over sin indtastning.
