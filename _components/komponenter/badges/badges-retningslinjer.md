---
title: Retningslinjer
parent: Badges
order: 20
headingClass: h3
---

{:.h4}
### Tilgængelighed

- Interaktive badges bliver automatisk markeret , når brugere ved hjælp af tabulatortasten navigerer sig frem til dem.
- Du skal anvende ARIA live regions til at gøre skærmlæsere på opmærksomme på ændringerne, hvis du anvender badges dynamisk i løsningen til at gøre opmærksom på nyt indlæst indhold eller ændringer på siden.

{:.h4}
### Brugervenlighed

{:.h5}
#### Anvendes til

- Brug badges til at gøre opmærksom på ændringer, nyt eller vigtigt indhold.

{:.h5}
#### Anvendes ikke til

- Brug ikke badge, hvis placeringen af det får brugeren til at tro, det er en knap. Test altid for dette, når du vil anvende badges.
- Overvej at markere ændringer på siden ved at markere selve det ændrede fx med en baggrundsfarve eller en typografisk markering som fx fed tekst.
- Brug ikke badge på sider, hvor indholdet bliver udskiftet dynamisk. Fx på nyhedssider, hvor brugeren nemt kan se, hvad der er det nyeste indhold, når det blot står øverst.

{:.h5}
#### Vejledning          

- Brug ord og begreber, som brugeren kan genkendes fra løsningen.  
- Skriv badges med store bogstaver.
- Brug ikke hover, focus eller active styling til et badge, som ikke er interaktivt (fx link).
- Bland aldrig interaktive og statiske badges i samme løsning. Brugerne forventer ensartet opførsel af komponenterne inden for løsningen.
- Vær varsom med at markere for meget indhold med badges – brug dem kun, hvor det virkelig er meningsfuldt.
