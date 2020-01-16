---
title: Retningslinjer
parent: Tables
order: 10
headingClass: h3
---
<h3 class="h4">Tilgængelighed</h3>

Tabeller i Det Fælles Designsystem overholder HTML standarden, men du skal selv tilføje `scope=col` eller `scope=row` til hver header celle `th`

Hvis du konstruerer en såkaldt kompleks tabel – en tabel med flere header-niveauer -  skal hver header have tilføjet et unikt id (fx `id=header-eksempel`) og hver celle tilføjes en header-attribut med den relevante og tilknyttede tabel header’s `id` angivet (fx `header=header-eksempel`).

Når du tilføjer en titel til en tabel, skal du skrive den i `caption` indenfor table-elementet.

<h3 class="h4">Brugervenlighed</h3>
<h4 class="h5">Anvendes til</h4>

- Tabeller anvendes til at præsentere brugeren for tabulær data som fx statistik opstillet i rækker og kolonner.

<h4 class="h5">Anvendes ikke til</h4>

- Tabeller anvendes ikke til at opsætte en sides eller en komponents indhold udover tabulær data.
- Overvej at anvende en liste (en unordered eller definition list), hvis det giver brugeren et bedre overblik.

<h4 class="h5">Vejledning</h4>                

Tabeller er en kompleks størrelse og når du bruger tabeller, skal du sikre dig, at din opmærkning overholder tilgængelighedskravene.  

Vær meget opmærksom på typen af data, din tabel skal præsentere brugeren for.

Såfremt der er tale om meget <a href="/udvidelser/datatables/">avancerede tabeller</a>, kan der bruges en udvidelse
