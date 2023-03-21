---
permalink: /komponenter/tables/
redirect_from:
- /tables/
- /komponenter/strukturerede-lister/
layout: styleguide
type: component
title: Tabeller
category: Komponenter_category
subcategory: Komponenter
description: "Tabeller er en systematisk opstilling af data i kolonner og rækker."
tags: 
lead: Tabeller er en systematisk opstilling af data i kolonner og rækker.
anchor: true
subnav:
- text: Uden ramme
  href: '#uden-ramme'
- text: Zebralinjer
  href: '#zebralinjer'
- text: Responsiv
  href: '#responsiv'
- text: Linjehøjde
  href: '#linjehoejde'
- text: Sortering i tabeller
  href: '#sortering-i-tabeller'
- text: Søgning i tabeller
  href: '#soegning-i-tabeller'
- text: Valgbare rækker
  href: '#valgbare-raekker'
- text: Strukturerede lister
  href: '#strukturerede-lister'
- text: Avancerede tabeller
  href: '#avancerede-tabeller'
---
{% include code/preview-box.html component="table" title="Eksempel på tabel" link=true code="/kode/komponenter/tables/" %}

{:.h3 #retningslinjer}
## Anvendes til

Tabeller anvendes til at præsentere brugeren for data som fx statistik opstillet i rækker og kolonner.

{:.h3}
## Anvendes ikke til

Anvend ikke tabeller til at opsætte en sides eller en komponents indhold udover data.

Anvend ikke tabeller til visning af simple informationer uden kolonneoverskrifter, da <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F91" class="icon-link">tabeller ifølge WCAG altid bør have kolonneoverskrifter<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>.

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

{:#uden-ramme}
## Uden ramme
{% include code/preview-box.html component="table--borderless" title="Eksempel på tabel uden ramme" code="/kode/komponenter/tables/#uden-ramme" %}

{:#zebralinjer}
## Zebralinjer
Zebralinjer anbefales kun til længere tabeller med mange rækker og kolonner, da brugeren kan tillægge få mørke rækker betydning, som om de var særligt markeret (Rost, 2019).

{% include code/preview-box.html component="table--bordered-zebra" title="Eksempel på tabel med zebra striber" code="/kode/komponenter/tables/#zebralinjer" %}

{:#responsiv}
## Responsiv
Bemærk, at det i nogle tilfælde kan være en bedre løsning at lade lange tabeller scrolle horisontalt på mobil frem for at anvende en responsiv tabel (Schade, 2017). Det kan fx være i tilfælde, hvor sammenligning af data fra forskellige rækker er vigtig. Udfør brugertests for at vurdere den bedste mobile tabelvisning for den enkelte løsning.

{% include code/preview-box.html component="table--responsive" title="Eksempel på responsiv tabel" code="/kode/komponenter/tables/#responsiv" %}

{:#linjehoejde}
## Linjehøjde
{% include code/preview-box.html component="table--lineheight" title="Eksempler på tabeller med forskellig afstand mellem rækkerne" code="/kode/komponenter/tables/#linjehoejde" %}

{:#sortering-i-tabeller}
## Sortering i tabeller
Store tabeller med mange rækker bør kunne sorteres. Kolonner sorteres ved at klikke på kolonnens sorteringsikon. 

Når sortering vælges, sorteres per default stigende. Klikkes der på et aktivt sorteringsikon, bliver der togglet mellem stigende (A-Å eller 0-9) og faldende (Å-A eller 9-0) sortering.

Tabeller med sortering skal altid have en aktiv sortering; sorteringen kan ikke deaktiveres. Standardsortering vælges ud fra, hvilken kolonne brugerne som regel vil forvente er sorteret. Dette vil ofte være den første kolonne eller en dato.

Hvis kun få kolonner i en tabel kan sorteres, kan komponenten <a href="/komponenter/overflowmenu/#sortering">Sortering med overflow menu</a> anvendes i stedet.

Ved sortering af responsive tabeller på mobil anvendes i stedet komponenten <a href="/komponenter/overflowmenu/#sortering">Sortering med overflow menu</a>.

{% include code/preview-box.html component="table-sort" title="Eksempel på sortering i tabel" code="/kode/komponenter/tables/#sortering-i-tabel" %}

{:#soegning-i-tabeller}
## Søgning i tabeller
Søgefelt til tabeller kan anvendes til store tabeller, der har mange rækker og kolonner. Brug kun søgning i tabeller, hvis det hjælper brugeren med at navigere i tabellen. Søgning i tabeller bør ikke anvendes, hvis en simpel sortering er tilstrækkelig for, at brugerne kan navigere effektivt i tabellen.

Tabeller kan søges med et søgefelt placeret over tabellen. Feltet søger som udgangspunkt alt data i tabellen. Tabellen opdateres ved klik på knappen “Søg” eller ved tasten “Enter”.

{% include code/preview-box.html component="table-search" title="Eksempel på søgning i tabel" code="/kode/komponenter/tables/#soegning-i-tabeller" %}

{:#valgbare-raekker}
## Valgbare rækker
{% include code/preview-box.html component="table-selectable" title="Eksempel på valgbare rækker i en tabel" code="/kode/komponenter/tables/#valgbare-raekker" %}

### Valgbare rækker med funktionsknapper
Hvis der kan udføres særlige funktioner for de valgte rækker, placeres funktionsknapper under tabellen. Brug ikke disabled knapper, når der ikke er nogen valgte rækker, da disabled knapper er svære at læse og forstå for nogle brugere. Vis i stedet en hjælpetekst ved knapperne, hvis de bliver klikket, før der er valgt en eller flere rækker.

{% include code/preview-box.html component="table-selectable-functions" title="Eksempel på valgbare rækker i en tabel med funktionsknapper" code="/kode/komponenter/tables/#valgbare-raekker-knapper" %}

{:#strukturerede-lister}
## Strukturerede lister
Strukturerede lister opstiller simple informationer på en letlæselig måde.

{% include code/preview-box.html component="structured-list" title="Eksempel på struktureret liste" code="/kode/komponenter/tables/#strukturerede-lister" %}

### Anvendes til

Strukturerede lister anvendes til at vise informationer, der er opstillet i et simpelt format med titler og dertilhørende information. Strukturerede lister anvendes blandt andet til opsummeringssider i formularer.

### Anvendes ikke til

Anvend ikke strukturerede lister til komplekse og sammenlignelige datasæt, der er opsat i flere kolonner med kolonneoverskrifter. 

{:.h3}
### Vejledning

* Hvis der er flere lister på samme side, bør alle lister have samme bredde for at holde siden overskuelig.
* Begræns antallet af rækker i hver liste, så mængden af informationer ikke bliver uoverskuelig for brugeren. Hvis der er mange rækker med information, så overvej, om det giver mening at dele listen op i afsnit ved hjælp af overskrifter.
* På opsummeringssider i forbindelse med formularer i flere trin kan hver række i listen indeholde et redigeringslink, som viser tilbage til det relevante sted i formularen.

{:.h3}
### Se komponenten i eksempelløsninger

{:.nobullet-list}
- <a href="/pages/eksempler/formular-til-kontaktoplysninger/formular-2/?r={{page.permalink}}%23eksempelloesninger" title="Vis eksempel 'Formular til kontaktoplysninger: Bekræft oplysninger'">Formular til kontaktoplysninger: Bekræft oplysninger</a>
- <a href="/pages/eksempler/trinformular-til-registrering/registrering-7/?r={{page.permalink}}%23eksempelloesninger" title="Vis eksempel 'Trinformular til registrering: Kvittering'">Trinformular til registrering: Kvittering</a>
- <a href="/pages/eksempler/sagsoversigt/find-sag/sagsnr-123456789/?r={{page.permalink}}%23eksempelloesninger" title="Vis eksempel 'Sagsoversigt: Sagsnr. 123456789'">Sagsoversigt: Sagsnr. 123456789</a>

{:#med-link}
### Struktureret liste med link

{% include code/preview-box.html component="structured-list--edit" title="Eksempel på struktureret liste med redigérlink" code="/kode/komponenter/tables/#strukturerede-lister-edit" %}

{:#avancerede-tabeller}
## Avancerede tabeller
Vi tilbyder på nuværende tidspunkt ikke avancerede tabeller, men hvis man finder eller laver en selv, kan det se ud som på billedet nedenfor.

{:.h4}
### Udfoldelig række
<div><img src="/assets/img/components/advanced-table-expandable-row.png" class="outer-border-box p-4" alt="Eksempel på, hvordan en avanceret tabel med udfoldelige rækker kan se ud" /></div>

{:.h4}
### Rediger og slet en række
<div><img src="/assets/img/components/advanced-table-edit-overflowmenu.png" class="outer-border-box p-4" alt="Eksempel på, hvordan en avanceret tabel med rediger og slet muligheder i en overflowmenu kan se ud" /></div>
