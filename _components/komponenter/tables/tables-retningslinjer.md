---
title: Retningslinjer
parent: Tables
order: 20
headingClass: h3
---
{:.h4}
### Tilgængelighed

Tabeller i Det Fælles Designsystem overholder HTML standarden, men du skal selv tilføje `scope=col` eller `scope=row` til hver header celle `th`

Hvis du konstruerer en såkaldt kompleks tabel – en tabel med flere header-niveauer -  skal hver header have tilføjet et unikt id (fx `id=header-eksempel`) og hver celle tilføjes en header-attribut med den relevante og tilknyttede tabel header’s `id` angivet (fx `header=header-eksempel`).

Når du tilføjer en titel til en tabel, skal du skrive den i `caption` indenfor table-elementet.

{:.h4}
### Brugervenlighed

{:.h5}
#### Anvendes til

- Tabeller anvendes til at præsentere brugeren for tabulær data som fx statistik opstillet i rækker og kolonner.

{:.h5}
#### Anvendes ikke til

- Tabeller anvendes ikke til at opsætte en sides eller en komponents indhold udover tabulær data.
- Overvej at anvende en liste (en unordered eller definition list), hvis det giver brugeren et bedre overblik.

{:.h5}
#### Vejledning

Tabeller er en kompleks størrelse og når du bruger tabeller, skal du sikre dig, at din opmærkning overholder tilgængelighedskravene.  

Vær meget opmærksom på typen af data, din tabel skal præsentere brugeren for.

Såfremt der er tale om meget <a href="/plugins/datatables/">avancerede tabeller</a>, kan der bruges et plugin
