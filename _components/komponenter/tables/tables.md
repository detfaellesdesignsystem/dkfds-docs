---
permalink: /komponenter/tables/
redirect_from:
- /tables/
layout: styleguide
type: component
title: Tabeller
category: Komponenter_category
subcategory: Komponenter
description: "Tabeller er en systematisk opstilling af data. Data vises i kolonner og rækker."
tags: 
lead: Tabeller er en systematisk opstilling af data og viser data i kolonner og rækker.
anchor: true
subnav:
- text: Uden ramme
  href: '#uden-ramme'
- text: Zebralinjer
  href: '#zebralinjer'
- text: Responsiv
  href: '#responsiv'
- text: Linjehøjde
  href: '#forskellig-linjehøjde'
- text: Sortering i tabeller
  href: '#sortering-i-tabeller'
- text: Søgning i tabeller
  href: '#søgning-i-tabeller'
- text: Valgbare rækker
  href: '#valgbare-rækker'
- text: Avancerede tabeller
  href: '#avancerede-tabeller'
component: table
componentTitle: "Eksempel på tabel"
componentCode: "/kode/komponenter/tables/"
---

{:.h3 #retningslinjer}
## Anvendes til

Tabeller anvendes til at præsentere brugeren for data som fx statistik opstillet i rækker og kolonner.

{:.h3}
## Anvendes ikke til

Anvend ikke tabeller til at opsætte en sides eller en komponents indhold udover data.

Anvend ikke tabeller til visning af simple informationer uden kolonneoverskrifter, da <a href="https://www.w3.org/TR/WCAG20-TECHS/F91.html" class="icon-link">tabeller ifølge WCAG altid bør have kolonneoverskrifter<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>. Anvend da i stedet <a href="/komponenter/strukturerede-lister/">strukturerede lister</a>.

{:.h3}
## Vejledning

Tabeller er en kompleks størrelse og når du bruger tabeller, skal du sikre dig, at din opmærkning overholder tilgængelighedskravene.  

Vær meget opmærksom på typen af data, din tabel skal præsentere brugeren for.

Såfremt der er tale om meget <a href="/komponenter/tables/#avancerede-tabeller">avancerede tabeller</a>, kan der bruges en tredjepartsløsning.

Tal i tabeller bør højrestilles og have samme antal decimaler, når der er tale om en numerisk størrelse som f.eks. antal eller pengebeløb. Dette gør det lettere for brugeren at skimme og sammenligne numerisk data (Rutter, 2017). Tal, der ikke angiver en numerisk størrelse og dermed ikke indebærer et behov for sammenligning, skal ikke højrestilles. Det kan f.eks. være et ID-nummer.

{% include dos-donts-box.html component="table-dos-donts" title="Tabeller do's and don'ts" %}

{:.h4}
### Referencer

{:.nobullet-liat}
- <a href="https://blog.datawrapper.de/guide-what-to-consider-when-creating-tables/" class="icon-link">Lisa Charlotte Rost: What to consider when creating tables (2019)<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>
- <a href="https://alistapart.com/article/web-typography-tables/" class="icon-link">Richard Rutter: Web Typography: Designing Tables to be Read, Not Looked At (2017)<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>
- <a href="https://www.nngroup.com/articles/mobile-tables/" class="icon-link">Amy Schade: Mobile Tables: Comparisons and Other Data Tables (2017)<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>
- <a href="https://www.w3.org/TR/WCAG20-TECHS/F91.html" class="icon-link">W3C: F91: Failure of Success Criterion 1.3.1 for not correctly marking up table headers (2016)<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>



{:.h3 #eksempelloesninger}
## Se komponenten i eksempelløsninger

{:.nobullet-list}
- <a href="/pages/eksempler/trinformular-til-registrering/registrering-2/?r={{page.permalink}}%23eksempelloesninger" title="Vis eksempel 'Trinformular til registrering: Vælg noget mere'">Trinformular til registrering: Vælg noget mere</a>
- <a href="/pages/eksempler/trinformular-til-registrering/registrering-6/?r={{page.permalink}}%23eksempelloesninger" title="Vis eksempel 'Trinformular til registrering: Opsummering'">Trinformular til registrering: Opsummering</a>
- <a href="/pages/eksempler/trinformular-til-ansoegning/ansoegning-4/?r={{page.permalink}}%23eksempelloesninger" title="Vis eksempel 'Trinformular til ansøgning: Tilføj dokumentation'">Trinformular til ansøgning: Tilføj dokumentation</a>
- <a href="/pages/eksempler/sagsoversigt/find-sag/?r={{page.permalink}}%23eksempelloesninger" title="Vis eksempel 'Sagsoversigt: Find sag'">Sagsoversigt: Find sag</a>

{% include child-components.html parent='Tables' %}
