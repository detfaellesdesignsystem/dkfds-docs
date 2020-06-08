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
datatables: true
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
- text: Med titel i venstre kolonne
  href: '#med-titel-i-venstre-kolonne'
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

Tabeller anvendes ikke til at opsætte en sides eller en komponents indhold udover data.

Overvej at anvende en liste (en unordered eller definition list), hvis det giver brugeren et bedre overblik.

{:.h3}
## Vejledning

Tabeller er en kompleks størrelse og når du bruger tabeller, skal du sikre dig, at din opmærkning overholder tilgængelighedskravene.  

Vær meget opmærksom på typen af data, din tabel skal præsentere brugeren for.

Såfremt der er tale om meget <a href="/kode/plugins/datatables/">avancerede tabeller</a>, kan der bruges et plugin

{% include child-components.html parent='Tables' %}
