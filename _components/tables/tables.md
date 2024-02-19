---
permalink: "/komponenter/tables/guidelines/"
redirect_from:
- "/tables/"
- "/komponenter/strukturerede-lister/"
- "/komponenter/tables/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Tabeller
lead: Tabeller er en systematisk opstilling af data i kolonner og rækker.
component: "table"
componentTitle: "Eksempel på tabel"
componentLink: true
anchor: true
subnav:
- text: Sådan bruges komponenten
  href: "#retningslinjer"
- text: Varianter
  href: "#varianter"
- text: Se komponenten i eksempelløsninger
  href: "#eksempelloesninger"
- text: Referencer
  href: "#ref"
description: "Tabeller er en systematisk opstilling af data i kolonner og rækker."
tags: 
---

{:#retningslinjer}
## Sådan bruges komponenten

### Anvendes til

Tabeller anvendes til at præsentere brugeren for data som fx statistik opstillet i rækker og kolonner.

### Anvendes ikke til

Anvend ikke tabeller til at opsætte en sides eller en komponents indhold udover data.

Anvend ikke tabeller til visning af simple informationer uden kolonneoverskrifter, da {% include links/external-link.html linktext="tabeller ifølge WCAG altid bør have kolonneoverskrifter" %}.

### Vejledning

Tabeller er en kompleks størrelse og når du bruger tabeller, skal du sikre dig, at din opmærkning overholder tilgængelighedskravene.  

Vær meget opmærksom på typen af data, din tabel skal præsentere brugeren for.

Såfremt der er tale om meget avancerede tabeller, kan der bruges en tredjepartsløsning.

Tal i tabeller bør højrestilles og have samme antal decimaler, når der er tale om en numerisk størrelse som f.eks. antal eller pengebeløb. Dette gør det lettere for brugeren at skimme og sammenligne numerisk data (Rutter, 2017). Tal, der ikke angiver en numerisk størrelse og dermed ikke indebærer et behov for sammenligning, skal ikke højrestilles. Det kan f.eks. være et ID-nummer.

{% include dos-donts-box.html component="table-dos-donts" title="Tabeller do's and don'ts" %}

{:#varianter}
## Varianter

{:#uden-ramme}
### Uden ramme

{% include code/preview-box.html component="table--borderless" title="Eksempel på tabel uden ramme" code="/komponenter/tables/implementering/#uden-ramme" %}

{:#zebralinjer}
### Zebralinjer

Zebralinjer anbefales kun til længere tabeller med mange rækker og kolonner, da brugeren kan tillægge få mørke rækker betydning, som om de var særligt markeret (Rost, 2019).

{% include code/preview-box.html component="table--bordered-zebra" title="Eksempel på tabel med zebra striber" code="/komponenter/tables/implementering/#zebralinjer" %}

{:#responsiv}
### Responsiv

Bemærk, at det i nogle tilfælde kan være en bedre løsning at lade lange tabeller scrolle horisontalt på mobil frem for at anvende en responsiv tabel (Schade, 2017). Det kan fx være i tilfælde, hvor sammenligning af data fra forskellige rækker er vigtig. Udfør brugertests for at vurdere den bedste mobile tabelvisning for den enkelte løsning.

{% include code/preview-box.html component="table--responsive" title="Eksempel på responsiv tabel" code="/komponenter/tables/implementering/#responsiv" %}

{:#linjehoejde}
### Linjehøjde

{% include code/preview-box.html component="table--lineheight" title="Eksempler på tabeller med forskellig afstand mellem rækkerne" code="/komponenter/tables/implementering/#linjehoejde" %}

{:#sortering-i-tabeller}
### Sortering i tabeller

Store tabeller med mange rækker bør kunne sorteres. Kolonner sorteres ved at klikke på kolonnens sorteringsikon. 

Når sortering vælges, sorteres per default stigende. Klikkes der på et aktivt sorteringsikon, bliver der togglet mellem stigende (A-Å eller 0-9) og faldende (Å-A eller 9-0) sortering.

Tabeller med sortering skal altid have en aktiv sortering; sorteringen kan ikke deaktiveres. Standardsortering vælges ud fra, hvilken kolonne brugerne som regel vil forvente er sorteret. Dette vil ofte være den første kolonne eller en dato.

Hvis kun få kolonner i en tabel kan sorteres, kan komponenten {% include links/component-guideline-link.html linktext="Sortering med overflow menu" %} anvendes i stedet.

Ved sortering af responsive tabeller på mobil anvendes i stedet komponenten {% include links/component-guideline-link.html linktext="Sortering med overflow menu" %}.

{% include code/preview-box.html component="table-sort" title="Eksempel på sortering i tabel" code="/komponenter/tables/implementering/#sortering-i-tabel" %}

{:#soegning-i-tabeller}
### Søgning i tabeller

Søgefelt til tabeller kan anvendes til store tabeller, der har mange rækker og kolonner. Brug kun søgning i tabeller, hvis det hjælper brugeren med at navigere i tabellen. Søgning i tabeller bør ikke anvendes, hvis en simpel sortering er tilstrækkelig for, at brugerne kan navigere effektivt i tabellen.

Tabeller kan søges med et søgefelt placeret over tabellen. Feltet søger som udgangspunkt alt data i tabellen. Tabellen opdateres ved klik på knappen “Søg” eller ved tasten “Enter”.

{% include code/preview-box.html component="table-search" title="Eksempel på søgning i tabel" code="/komponenter/tables/implementering/#soegning-i-tabeller" %}

{:#valgbare-raekker}
### Valgbare rækker

{% include code/preview-box.html component="table-selectable" title="Eksempel på valgbare rækker i en tabel" code="/komponenter/tables/implementering/#valgbare-raekker" %}

#### Valgbare rækker med funktionsknapper

Hvis der kan udføres særlige funktioner for de valgte rækker, placeres funktionsknapper under tabellen. Brug ikke disabled knapper, når der ikke er nogen valgte rækker, da disabled knapper er svære at læse og forstå for nogle brugere. Vis i stedet en hjælpetekst ved knapperne, hvis de bliver klikket, før der er valgt en eller flere rækker.

{% include code/preview-box.html component="table-selectable-functions" title="Eksempel på valgbare rækker i en tabel med funktionsknapper" code="/komponenter/tables/implementering/#valgbare-raekker-knapper" %}

{:#strukturerede-lister}
### Strukturerede lister

Strukturerede lister opstiller simple informationer på en letlæselig måde.

{% include code/preview-box.html component="structured-list" title="Eksempel på struktureret liste" code="/komponenter/tables/implementering/#strukturerede-lister" %}

#### Anvendes til

Strukturerede lister anvendes til at vise informationer, der er opstillet i et simpelt format med titler og dertilhørende information. Strukturerede lister anvendes blandt andet til opsummeringssider i formularer.

#### Anvendes ikke til

Anvend ikke strukturerede lister til komplekse og sammenlignelige datasæt, der er opsat i flere kolonner med kolonneoverskrifter. 

#### Vejledning

* Hvis der er flere lister på samme side, bør alle lister have samme bredde for at holde siden overskuelig.
* Begræns antallet af rækker i hver liste, så mængden af informationer ikke bliver uoverskuelig for brugeren. Hvis der er mange rækker med information, så overvej, om det giver mening at dele listen op i afsnit ved hjælp af overskrifter.
* På opsummeringssider i forbindelse med formularer i flere trin kan hver række i listen indeholde et redigeringslink, som viser tilbage til det relevante sted i formularen.

{:#med-link}
##### Eksempel på struktureret liste med link

{% include code/preview-box.html component="structured-list--edit" title="Eksempel på struktureret liste med redigérlink" code="/komponenter/tables/implementering/#strukturerede-lister-edit" %}

{:#eksempelloesninger}
## Se komponenten i eksempelløsninger

{:.nobullet-list}
- {% include links/demo-link.html linktext="Trinformular til registrering: Vælg noget mere" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Trinformular til registrering: Opsummering" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Trinformular til ansøgning: Tilføj dokumentation" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Sagsoversigt: Find sag" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Formular til kontaktoplysninger: Bekræft oplysninger" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Trinformular til registrering: Kvittering" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Sagsoversigt: Sagsnr. 123456789" returnID="eksempelloesninger" %}

{:#ref}
## Referencer

{:.nobullet-liat}
- {% include links/external-link.html linktext="Lisa Charlotte Rost: What to consider when creating tables (2019)" %}
- {% include links/external-link.html linktext="Richard Rutter: Web Typography: Designing Tables to be Read, Not Looked At (2017)" %}
- {% include links/external-link.html linktext="Amy Schade: Mobile Tables: Comparisons and Other Data Tables (2017)" %}
- {% include links/external-link.html linktext="W3C: F91: Failure of Success Criterion 1.3.1 for not correctly marking up table headers (2016)" %}