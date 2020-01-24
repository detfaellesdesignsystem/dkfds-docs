---
title: Retningslinjer
parent: Checkbox
order: 10
---


### Brugervenlighed

#### Anvendes til

- Tjekbokse giver brugeren mulighed for at vælge en eller flere værdier ud fra en synlig liste.
- Når brugeren skal have overblik over sine mulige valg.
- Når brugeren skal be- eller afkræfte et valg, fx ”Ja/Nej” (i det tilfælde en enkelt tjekboks), eller slå noget til eller fra (toggle).
- Når listen over mulige valg kan være på en mobilvisning.

#### Anvendes ikke til

- Når der er for mange valg til at give mening på en mobilvisning.
- Når brugeren kun kan vælge én værdi. Her skal du i stedet anvende radioknapper.

### Vejledning

- Brugeren skal kunne tappe eller klikke på tjekboksen eller dens label for at vælge eller fravælge dens værdi.
- Du bør opstille lister med tjekbokse i lodret linje af hensyn til brugerens læseretning.
- Anvend et positivt sprog til værdierne. I stedet for fx ”Jeg vil ikke modtage bekræftelse på email” bør du skrive ”Jeg vil gerne modtage bekræftelse på email”.
- Sørg for at der er tilstrækkelig luft omkring den enkelte tjekboks, så den er brugbar på touchskærme.

## Implementering

- Indsæt altid to eller flere tjekbokse i et fieldset inklusive legend. En enkelt tjekboks skal ikke sidde i et fieldset.
- Giv hver tjekboks sit eget id og angiv samme værdi til det tilhørende label.
- Tjekboksenes design er ændret ift. standardvisningen for at gøre dem tydeligere og øge deres visuelle respons til brugerens interaktion.
- Tjekboksene er gjort tilgængelige for skærmlæsere på trods af deres visuelle design, ved at selve tagget for tjekboksen er placeret uden for det synlige skærmområde.
