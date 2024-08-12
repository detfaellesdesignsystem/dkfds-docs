---
permalink: "/komponenter/tables/"
redirect_from:
- "/tables/"
- "/komponenter/strukturerede-lister/"
- "/kode/komponenter/strukturerede-lister/"
- "/kode/komponenter/tables/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Tabeller
lead: Tabeller er en systematisk opstilling af data i kolonner og rækker.
description: "Tabeller er en systematisk opstilling af data i kolonner og rækker."
tags: 
tabs: "Retningslinjer, kode"
---

{% include tabs.html guidelines=true code=true %}

{% include code/preview-box.html component="table" title="Eksempel på tabel" classes="intro-example" %}

{% include anchorlinks.html guidelines="Tabeller" code="Tabeller_Kode" %}

<!--split-->

## Sådan bruges komponenten {#{% include create-id.html heading="Sådan bruges komponenten" %}}

### Anvendes til

Tabeller anvendes til at præsentere brugeren for data som fx statistik opstillet i rækker og kolonner.

### Anvendes ikke til

Anvend ikke tabeller til at opsætte en sides eller en komponents indhold udover data.

Anvend ikke tabeller til visning af simple informationer uden kolonneoverskrifter, da tabeller ifølge WCAG altid bør have kolonneoverskrifter (W3C, WCAG 2.1, SC 1.3.1).

### Vejledning

Tabeller er en kompleks størrelse og når du bruger tabeller, skal du sikre dig, at din opmærkning overholder tilgængelighedskravene.  

Vær meget opmærksom på typen af data, din tabel skal præsentere brugeren for.

Såfremt der er tale om meget avancerede tabeller, kan der bruges en tredjepartsløsning.

Tal i tabeller bør højrestilles og have samme antal decimaler, når der er tale om en numerisk størrelse som f.eks. antal eller pengebeløb. Dette gør det lettere for brugeren at skimme og sammenligne numerisk data (Rutter, 2017). Tal, der ikke angiver en numerisk størrelse og dermed ikke indebærer et behov for sammenligning, skal ikke højrestilles. Det kan f.eks. være et ID-nummer.

{% include dos-donts-box.html component="table-dos-donts" title="Tabeller do's and don'ts" %}

## Varianter {#{% include create-id.html heading="Varianter" %}}

{:#uden-ramme}
### Uden ramme

{% include code/preview-box.html component="table--borderless" title="Eksempel på tabel uden ramme" code="/komponenter/tables/#uden-ramme-kode" %}

{:#zebralinjer}
### Zebralinjer

Zebralinjer anbefales kun til længere tabeller med mange rækker og kolonner, da brugeren kan tillægge få mørke rækker betydning, som om de var særligt markeret (Rost, 2019).

{% include code/preview-box.html component="table--bordered-zebra" title="Eksempel på tabel med zebra striber" code="/komponenter/tables/#zebralinjer-kode" %}

### Responsiv {#{% include create-id.html heading="Responsiv" %}}

Bemærk, at det i nogle tilfælde kan være en bedre løsning at lade lange tabeller scrolle horisontalt på mobil frem for at anvende en responsiv tabel (Schade, 2017). Det kan fx være i tilfælde, hvor sammenligning af data fra forskellige rækker er vigtig. Udfør brugertests for at vurdere den bedste mobile tabelvisning for den enkelte løsning.

{% include code/preview-box.html component="table--responsive" title="Eksempel på responsiv tabel" code="/komponenter/tables/#responsiv-tabel-kode" %}

{:#linjehoejde}
### Linjehøjde

{% include code/preview-box.html component="table--lineheight" title="Eksempler på tabeller med forskellig afstand mellem rækkerne" code="/komponenter/tables/#linjehoejde-kode" %}

{:#sortering-i-tabeller}
### Sortering i tabeller

Store tabeller med mange rækker bør kunne sorteres. Kolonner sorteres ved at klikke på kolonnens sorteringsikon. 

Når sortering vælges, sorteres per default stigende. Klikkes der på et aktivt sorteringsikon, bliver der togglet mellem stigende (A-Å eller 0-9) og faldende (Å-A eller 9-0) sortering.

Tabeller med sortering skal altid have en aktiv sortering; sorteringen kan ikke deaktiveres. Standardsortering vælges ud fra, hvilken kolonne brugerne som regel vil forvente er sorteret. Dette vil ofte være den første kolonne eller en dato.

Hvis kun få kolonner i en tabel kan sorteres, kan komponenten {% include links/component-guideline-link.html linktext="Sortering med overflow menu" %} anvendes i stedet.

Ved sortering af responsive tabeller på mobil anvendes i stedet komponenten {% include links/component-guideline-link.html linktext="Sortering med overflow menu" %}.

{% include code/preview-box.html component="table-sort" title="Eksempel på sortering i tabel" code="/komponenter/tables/#sortering-i-tabeller-kode" %}

### Søgning i tabeller {#{% include create-id.html heading="Søgning i tabeller" %}}

Søgefelt til tabeller kan anvendes til store tabeller, der har mange rækker og kolonner. Brug kun søgning i tabeller, hvis det hjælper brugeren med at navigere i tabellen. Søgning i tabeller bør ikke anvendes, hvis en simpel sortering er tilstrækkelig for, at brugerne kan navigere effektivt i tabellen.

Tabeller kan søges med et søgefelt placeret over tabellen. Feltet søger som udgangspunkt alt data i tabellen. Tabellen opdateres ved klik på knappen “Søg” eller ved tasten “Enter”.

{% include code/preview-box.html component="table-search" title="Eksempel på søgning i tabel" code="/komponenter/tables/#soegning-i-tabeller-kode" %}

### Valgbare rækker {#{% include create-id.html heading="Valgbare rækker" %}}

{% include code/preview-box.html component="table-selectable" title="Eksempel på valgbare rækker i en tabel" code="/komponenter/tables/#valgbare-raekker-kode" %}

#### Valgbare rækker med funktionsknapper {#{% include create-id.html heading="Valgbare rækker med funktionsknapper" %}}

Hvis der kan udføres særlige funktioner for de valgte rækker, placeres funktionsknapper under tabellen. Brug ikke disabled knapper, når der ikke er nogen valgte rækker, da disabled knapper er svære at læse og forstå for nogle brugere. Vis i stedet en hjælpetekst ved knapperne, hvis de bliver klikket, før der er valgt en eller flere rækker.

{% include code/preview-box.html component="table-selectable-functions" title="Eksempel på valgbare rækker i en tabel med funktionsknapper" code="/komponenter/tables/#valgbare-raekker-med-funktionsknapper-kode" %}

{:#strukturerede-lister}
### Strukturerede lister

Strukturerede lister opstiller simple informationer på en letlæselig måde.

{% include code/preview-box.html component="structured-list" title="Eksempel på struktureret liste" code="/komponenter/tables/#strukturerede-lister-kode" %}

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

{% include code/preview-box.html component="structured-list--edit" title="Eksempel på struktureret liste med redigérlink" code="/komponenter/tables/#struktureret-liste-med-rediger-kode" %}

## Se komponenten i eksempelløsninger {#{% include create-id.html heading="Se komponenten i eksempelløsninger" %}}

{:.nobullet-list}
- {% include links/demo-link.html linktext="Trinformular til registrering: Vælg noget mere" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Trinformular til registrering: Opsummering" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Trinformular til ansøgning: Tilføj dokumentation" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Sagsoversigt: Find sag" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Formular til kontaktoplysninger: Bekræft oplysninger" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Trinformular til registrering: Kvittering" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Sagsoversigt: Sagsnr. 123456789" returnID="eksempelloesninger" %}

## Referencer {#{% include create-id.html heading="Referencer" %}}

{:.nobullet-liat}
- {% include links/external-link.html linktext="Lisa Charlotte Rost: What to consider when creating tables (2019)" %}
- {% include links/external-link.html linktext="Richard Rutter: Web Typography: Designing Tables to be Read, Not Looked At (2017)" %}
- {% include links/external-link.html linktext="Amy Schade: Mobile Tables: Comparisons and Other Data Tables (2017)" %}
- {% include links/external-link.html linktext="W3C (WCAG 2.1): Technique F91: Failure of Success Criterion 1.3.1 for not correctly marking up table headers" %}

<!--split-->

## Installation {#{% include create-id.html heading="Installation" append="-kode" %}}

### HTML Struktur

{% include code/syntax.html component="table" copybutton=true %}

Man kan gøre brug af hjælpeklassen for {% include links/internal-link.html linktext="bredde i procent" %} til at definere bredde på kolonner. 

Brug klassen `table-header-no-wrap` på `th`-elementet inde i `thead`, hvis du ikke ønsker, at en header skal kunne ombrydes til flere linjer.

Brug klasserne `vertical-align-top`, `vertical-align-middle` og `vertical-align-bottom` på enten `<th>` eller `<td>` til at ændre den vertikale placering af indholdet i en celle i toppen, midten eller bunden.

#### Horisontalt scroll {#{% include create-id.html heading="Horisontalt scroll" append="-kode" %}}

Tabeller er som udgangspunkt sat ind i en `<div>`, der har klassen `table--responsive-scroll`, hvilket gør at tabellen kan scrolles vandret, hvis den bliver for smal. Hvis man ikke ønsker, at dette skal være muligt, kan man undlade denne `<div>`.

## Uden ramme {#{% include create-id.html heading="Uden ramme" append="-kode" %}}

For at fjerne den yderste ramme tilføj klassen `table--borderless` til `<table>`.

## Zebralinjer {#{% include create-id.html heading="Zebralinjer" append="-kode" %}}

Man kan sætte zebralinjer på en tabel med klassen `table--zebra` på `<table>`.

## Responsiv tabel {#{% include create-id.html heading="Responsiv tabel" append="-kode" %}}

En tabel gøres responsiv ved at tilføje klassen `table--responsive-headers` til `<table>`. Responsive tabeller ændrer som standard udseende ved {% include links/internal-link.html linktext="breakpoint" %} `sm`, men hvis du har mange kolonner i din tabel, kan det give mening at anvende et andet breakpoint. 

Hvis din tabel indeholder værdier, der kræver mere end ca. 290 pixels i bredden for at blive vist, bør du undlade at gøre den responsiv og i stedet anvende {% include links/component-code-link.html linktext="horisontalt scroll" %} - tjek eventuelt om din responsive tabel kan vises pænt, når skærmstørrelsen er 320 pixels i bredden, uden at indholdet ryger ud over kanten.

Du kan anvende en af nedenstående klasser for at ændre, ved hvilket breakpoint tabellens udseende skal ændres:

- `table-sm-responsive-headers` (svarer til `table--responsive-headers`)
- `table-md-responsive-headers`
- `table-lg-responsive-headers`

Udover at tilføje en klasse, skal attributten `data-title` tilføjes til hver `<td>`, hvilket gør at en label bliver tilføjet for hver celle på mindre skærme.

{% highlight html %}
<tr>
    <td data-title="Affaldstype">Bioaffald og kompost</td>
    <td data-title="Farvekode">Beige</td>
    <td data-title="Beskrivelse">Alt madaffald uden fødevareemballage.</td>
    <td data-title="Hvor ender det?">Bioaffaldet kommes i bionedbrydelige poser, som bliver komposteret til muld.</td>
</tr>
{% endhighlight %}

Attributten kan sættes automatisk ved brug af {% include links/component-code-link.html linktext="JavaScript" %}.

Bemærk, at tabeller med sortering og tabeller med valgbare rækker ikke har en responsiv version.

### JavaScript for responsive tabeller {#{% include create-id.html heading="JavaScript for responsive tabeller" append="-kode" %}}

Anvendes til at sætte de korrekte attributter automatisk, hvis man ønsker en responsiv tabel. Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:

{% highlight javascript %}
new DKFDS.ResponsiveTable(document.getElementById('TABLE-ID'));
{% endhighlight %}

## Linjehøjde {#{% include create-id.html heading="Linjehøjde" append="-kode" %}}

### Kompakt
Tilføj klassen `table--compact` på `<table>`.

### Ekstra kompakt
Tilføj klassen `table--extracompact` på `<table>`.

## Sortering i tabeller {#{% include create-id.html heading="Sortering i tabeller" append="-kode" %}}

Se nedenstående eksempels HTML for, hvilke klasser, attributter og knapper, der skal sættes på hhv. `<th>` og `<tbody>`.

Der følger ikke JavaScript med til sortering i tabeller og man skal derfor selv håndtere funktionaliteten. Nedenstående eksempel er dog gjort funktionelt som demonstration. 

{% include code/syntax.html component="table-sort" link=true copybutton=true guidelines="/komponenter/tables/#sortering-i-tabeller" %}

## Søgning i tabeller {#{% include create-id.html heading="Søgning i tabeller" append="-kode" %}}

Anvend {% include links/component-code-link.html linktext="søgefeltkomponenten" %} sammen med din tabel og tilføj `aria-live="polite"` til `<table>`. 

Der følger ikke JavaScript med til søgning i tabeller og man skal derfor selv håndtere funktionaliteten. Nedenstående eksempel er dog gjort funktionelt som demonstration. 

{% include code/syntax.html component="table-search" link=true copybutton=true guidelines="/komponenter/tables/#soegning-i-tabeller" %}

## Valgbare rækker {#{% include create-id.html heading="Valgbare rækker" append="-kode" %}}

{% include code/syntax.html component="table-selectable" link=true copybutton=true guidelines="/komponenter/tables/#valgbare-raekker" %}

### Valgbare rækker med funktionsknapper {#{% include create-id.html heading="Valgbare rækker med funktionsknapper" append="-kode" %}}

{% include code/syntax.html component="table-selectable-functions" link=true copybutton=true guidelines="/komponenter/tables/#valgbare-raekker-med-funktionsknapper" %}

### JavaScript for tabeller med valgbare rækker
Tabel med valgbare rækker kræver JavaScript for at fungere. Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:

{% highlight javascript %}
new DKFDS.TableSelectableRows(document.getElementById('TABLE-ID')).init();
{% endhighlight %}

Bemærk, at for valgbare rækker med funktionsknapper skal man selv håndtere funktionaliteten for, hvilke meddelelser der vises under tabellen, for eksempel antal rækker valgt. Nedenstående eksempel er gjort funktionelt som demonstration.

#### Events

{:.table .table--responsive-headers}
| Event key                      | Element       | Beskrivelse                                                                                                              |
|--------------------------------|---------------|--------------------------------------------------------------------------------------------------------------------------|
| fds.table.selectable.updated   | `<table>`     | Når en tjekboks ændrer tilstand i tabellen vil eventet `fds.table.selectable.updated` blive udløst på `<table>`-elementet |

## Strukturerede lister {#{% include create-id.html heading="Strukturerede lister" append="-kode" %}}

{% include code/syntax.html component="structured-list" link=true copybutton=true guidelines="/komponenter/tables/#strukturerede-lister" %}

Strukturerede lister kan bruges i forbindelse med {% include links/internal-link.html linktext="opsummering" %} eller {% include links/internal-link.html linktext="kvitteringssider" %} som en alternativ tabel, hvor der ikke er nogen vandrette headers. 

Listerne skal altid indeholde præcis 2 eller 3 kolonner. Første kolonne anvendes til headers/titel, anden kolonne til indhold/information og tredje kolonne til eventuel redigering af rækkens indhold. Husk at markere `scope="row"` for hver tabelheader.

Listen kan gøres responsiv ved at tilføje klassen med det ønskede breakpoint. Se {% include links/component-code-link.html linktext="responsive klasser for tabeller" %}.

### Struktureret liste med redigér {#{% include create-id.html heading="Struktureret liste med redigér" append="-kode" %}}

{% include code/syntax.html component="structured-list--edit" link=true copybutton=true guidelines="/komponenter/tables/#med-link" %}
