---
permalink: "/faellesskab/releases/"
layout: styleguide
category: Faellesskab_category
subcategory: Fællesskab
title: Release notes
lead: Nedenfor vises release notes — en opsummering af bug fixes, nye features og andre opdateringer.
description: Release notes for Det Fælles Designsystem
tags:
- changelog
- releases
- udgivelse
- version
- versioner
- roadmap
- 2.1.2
- 3
- 3.0.0
- 3.0.1
- 3.0.2
- 3.0.3
- 4.0.0
- 4
- 4.0.1
- 4.1.1
- 4.1
- 4.2.0
- 4.2
- 4.3.0
- 4.3
- 4.4.0
- 4.4
- 5.0.0
- 5
- 5.1.0
- 5.1
- 5.2.0
- 5.2
- 5.3.0
- 5.3
- 6.0.0
- 6
- 6.0.1
- 6.1.0
- 6.1
- 6.1.1
- 7.0.0
- 7
- 7.1.0
- 7.1
- 7.1.1
- 7.2.0
- 7.2
- 7.3.0
- 7.3
- 7.4.0
- 7.4
- 7.5.0
- 7.5
- 7.5.1
- 7.5.2
- 7.5.3
- 8
- 8.0
- 8.0.0
- 8.0.1
- 8.1.0
- 8.2.0
- 8.2.1
- 9
- 9.0.0
- 9.0.1
- 9.0.2
- 9.1.0
- 10
- 10.0.0
- 10.0.1
- 10.0.2
- 10.1.0
- 10.2.0
- 10.2.1
---

{% include anchorlinks.html headings="Releases" %}

## Versionering og release-proces {#{% include create-id.html heading="Versionering og release-proces" %}}

Designsystemets måde at versionere på er inspireret af {% include links/external-link.html linktext="semantisk versionering" %}. Versionsnummeret indikerer, hvilken type rettelse, der er tale om.

Versionsnummeret skrives altid x.y.z (fx 2.1.3) og skal læses MAJOR (x), MINOR (y), PATCH (z)

- MAJOR: Ændringer i kode og/eller design, der ikke er bagud-kompatible - som fx erstatning eller sletning af komponenter eller ændringer i kode og/eller design, der medfører bagudrettede tilpasninger ved opdatering til den pågældende version.
- MINOR: Tilføjelser, ændringer og ny funktionalitet, der er bagud-kompatible.
- PATCH: Bagud-kompatible fejlrettelser (bug fixes).

### Release-proces

Designsystemet er "levende" og skal holdes ajour, hvorfor langt de fleste bagud-kompatible ændringer og tilføjelser vil ske løbende. Fejlrettelser vil ske hurtigst muligt. Ikke bagud-kompatible ændringer vil samles op og blive releaset med lavere frekvens.

Har du et nyt forslag til en feature eller et bug fix? Så må du meget gerne {% include links/external-link.html linktext="oprette et issue på GitHub" %}

### Tidligere versioner af dokumentationen

Har du brug for at se en version af dokumentationen på designsystem.dk, som stemmer overens med en tidligere release, så er du velkommen til at {% include links/internal-link.html linktext="kontakte os" %}.



## Version 10.2.1 {#{% include create-id.html heading="Version 10.2.1" %}}
{:.mb-0}

<div><span class="small-text mt-0 d-block">13-02-2025</span></div>

<div class="d-flex align-items-center mt-5 mb-4">
  <h3 class="h4 mt-0 mb-0 mr-3">Fejlrettelser</h3>
</div>
- Rettet fejl, hvor menuknappen ikke altid fik fokus, når man brugte Escape-tasten til at lukke {% include links/component-code-link.html linktext="mobilmenuen" %}.
- Rettet fejl, hvor {% include links/component-guideline-link.html linktext="headernavigationen" %} ikke altid blev opdateret efter `DKFDS.Navigation().init()` (fejlrettelse accepteret fra pull request på GitHub).
{% include links/github-link.html number="260" afternumber=" på GitHub" %}
- Rettet fejl, hvor styling og JavaScript for tjekbokse i {% include links/component-guideline-link.html linktext="tabeller med valgbare rækker" %} også påvirkede tjekbokse og radioknapper i andre kolonner. Bemærk dog, at det anbefales ikke at placere interaktive komponenter i tabeller, hvis det kan undgås.
{% include links/github-link.html number="266" afternumber=" på GitHub" %}

<div class="d-flex align-items-center mt-5 mb-4">
  <h3 class="h4 mt-0 mb-0 mr-3">Ændringer på designsystem.dk</h3>
</div>
- Fjernet kravværktøjet og i stedet tilføjet siderne {% include links/internal-link.html linktext="Om Det Fælles Designsystem" %} og {% include links/internal-link.html linktext="Brugerinddragelse" %}.
- Fjernet roadmap. Anvend i stedet {% include links/external-link.html linktext="GitHub Discussions" %} for information om, hvilke større opgaver FDS-teamet arbejder på til kommende releases.



## Version 10.2.0 {#{% include create-id.html heading="Version 10.2.0" %}}
{:.mb-0}

<div><span class="small-text mt-0 d-block">13-01-2025</span></div>

Se {% include links/external-link.html linktext="beslutningslog for version 10.2.0" %}.

<div class="d-flex align-items-center mt-5 mb-4">
  <h3 class="h4 mt-0 mb-0 mr-3">{% include links/component-guideline-link.html linktext="Tooltips" %}</h3>
</div>
- <strong class="badge badge-success badge-small mr-2">New</strong> Tilføjet {% include links/component-code-link.html linktext="tooltip-attributten" %} `data-force-visible`. Attributten kan bruges, når tooltippet placeres i et afgrænset element (fx modal eller tabel), som ellers ville afskære tooltippet.
{% include links/github-link.html number="225" afternumber=" på GitHub" %}
- <strong class="badge badge-success badge-small mr-2">New</strong> Tilføjet {% include links/component-code-link.html linktext="funktioner til tooltip" %}.
- Tooltips kan ikke længere ses ved print pga. problemer med korrekt positionering. Vejledningen er opdateret.
- Rettet fejl, hvor brug af Escape-tasten til at lukke tooltips i modaler også lukkede modalen.
- Rettet fejl, hvor flere tooltips kunne åbnes på samme tid på touchskærme.
- Ændret aktivering af {% include links/component-guideline-link.html linktext="hover-tooltip" %} ved "long press", så tooltippet nu først vises, når fingeren løftes fra skærmen. For mere info, se {% include links/external-link.html linktext="W3C (WCAG 2.1): Understanding SC 2.5.2: Pointer Cancellation (Level A)" classes="d-inline" %}.
- Det er ikke længere muligt at markere tekst på knapper med hover-tooltips, når man trykker ned på knappen, da mobilers "tekstmenu" kunne dække tooltippet.

<div class="d-flex align-items-center mt-5 mb-4">
  <h3 class="h4 mt-0 mb-0 mr-3">Øvrige</h3>
</div>
- Fjernet `user-select: text` fra knapper og pagineringsknapper.
- Rettet fejl, hvor indhold i {% include links/component-guideline-link.html linktext="modaler" %} ikke altid kunne ses ved print.
- Tilføjet flere tekstmuligheder til {% include links/external-link.html linktext="macroerne" %} for anchorlinks og trinindikator.
- Rettet fejl, hvor teksten i {% include links/component-guideline-link.html linktext="dropdowns" %} kunne gå bag pilen, når stylingen for fejlmeddelelse blev anvendt.
{% include links/github-link.html number="255" afternumber=" på GitHub" %} 
- Rettet fejl, hvor padding og margin kunne mangle for nogle elementer i {% include links/component-guideline-link.html linktext="faneblade" %}.
{% include links/github-link.html number="259" afternumber=" på GitHub" %} 



## Version 10.1.0 {#{% include create-id.html heading="Version 10.1.0" %}}
{:.mb-0}

<div><span class="small-text mt-0 d-block">17-10-2024</span></div>

Som noget nyt introducerer vi en beslutningslog, der fremover skal supplere den aktuelle release. Her vil der være detaljer og baggrund om de valg, der er truffet.

Se {% include links/external-link.html linktext="beslutningslog for version 10.1.0" %}.

<div class="d-flex align-items-center mt-5 mb-4">
  <h3 class="h4 mt-0 mb-0 mr-3">{% include links/component-guideline-link.html linktext="Paginering" %}</h3>
</div>
- <strong class="badge badge-success badge-small mr-2">New</strong> Tilføjet {% include links/component-guideline-link.html linktext="paginering til tabeller" %}.
- <strong class="badge badge-info badge-small mr-2">Change</strong> Fjernet `role="presentation"` fra "..."-elementerne.
- <strong class="badge badge-info badge-small mr-2">Change</strong> Tilføjet en skærmlæserbesked til "..."-elementerne.
- Visuelt løft af pagineringsknapperne.
- Fjernet klassen `pagination__dropdown`, der ikke blev anvendt.

<div class="d-flex align-items-center mt-5 mb-4">
  <h3 class="h4 mt-0 mb-0 mr-3">{% include links/component-guideline-link.html linktext="Tabeller" %}</h3>
</div>
- <strong class="badge badge-info badge-small mr-2">Change</strong> Flyttet knapperne i {% include links/component-guideline-link.html linktext="tabeller med valgbare rækker og funktionsknapper" %} ned under tabellen i HTML'en, så de ikke scroller horisontalt, hvis tabellen har mange kolonner.
- <strong class="badge badge-info badge-small mr-2">Change</strong> Tilføjet `tabindex` og synligt fokus til tabeller, så det er muligt at navigere til og scrolle brede tabeller med tastaturet.
- <strong class="badge badge-info badge-small mr-2">Change</strong> Ændret beskeden "Vælg en eller flere rækker" til "Ingen rækker valgt" og tilføjet den til alle tabeller med valgbare rækker.
- Tilføjet padding i {% include links/component-guideline-link.html linktext="tabeller uden ramme" %} og {% include links/component-guideline-link.html linktext="strukturerede lister" %}, så de har samme padding som de øvrige tabeltyper.
- Tilføjet kant til bunden af tabelrækkerne på store skærme, når varianterne {% include links/component-guideline-link.html linktext="tabeller uden ramme" %} og {% include links/component-guideline-link.html linktext="tabeller med zebralinjer" %} kombineres.
- Klassen `table--borderless` kan nu også anvendes sammen med klassen `table-actions` (og den nye tabelpaginering), hvis man anvender {% include links/component-guideline-link.html linktext="tabeller uden ramme" %} sammen med funktionsknapper.
- Rettet fejl, hvor tjekboksen i headeren for {% include links/component-guideline-link.html linktext="tabeller med valgbare rækker" %} ikke fik den korrekte status i JavaScripten.

<div class="d-flex align-items-center mt-5 mb-4">
  <h3 class="h4 mt-0 mb-0 mr-3">Øvrige</h3>
</div>
- <strong class="badge badge-info badge-small mr-2">Change</strong> Rettet en stylingfejl, som opstod, når man anvendte inputfelter med {% include links/component-guideline-link.html linktext="prefix eller suffix" %}, som samtidigt var read-only eller disabled. Tilføj klassen `disabled` eller `readonly` til `form-input-wrapper` for at få den korrekte styling.
- <strong class="badge badge-info badge-small mr-2">Change</strong> Fjernet klassen `search-link`, der satte en alternativ styling tiltænkt overskrifter på søgeresultatsider. Der er nu ikke længere forskel på {% include links/internal-link.html linktext="linkoverskifter" %}, uanset om de anvendes i søgeresultateter eller ej. Hvis man anvender klassen i sin løsning, kan man blot fjerne den, da den ikke længere har nogen effekt.
- Opdateret pakkerne i package.json til nyere versioner. Dette har medført en tilretning i flere sass-filer, så der ikke er {% include links/external-link.html linktext="deklarationer blandet med indlejrede regler" %} eller anvendelse af {% include links/external-link.html linktext="globale built-in Sass-funktioner" %}. Rækkefølgen af visse deklarationer i CSS-filerne er derfor ændret, men dette har ikke nogen funktionel betydning.
- Opdateret siderne for {% include links/component-guideline-link.html linktext="radioknapper" %} og {% include links/component-guideline-link.html linktext="tjekbokse" %} med flere eksempler og retningslinjer.
- Rettet eksemplerne for {% include links/component-guideline-link.html linktext="dropdown" %}, så de alle indeholder en "vælg"-mulighed.
- Ændret opførsel for {% include links/component-guideline-link.html linktext="overflowmenu" %}, så komponenten lukker, når fokus forsvinder fra menuen. Dette kan for eksempel ske, ved at brugeren navigerer videre med Tab-tasten.



## Version 10.0.2 {#{% include create-id.html heading="Version 10.0.2" %}}
{:.mb-0}

<div><span class="small-text mt-0 d-block">04-09-2024</span></div>

- Fjernet visse browseres modificeringer af {% include links/component-guideline-link.html linktext="søgefeltet" %}, der kunne indsætte knapper til sletning af søgning, søgehistorik eller ekstra padding.
{% include links/github-link.html number="237" afternumber=" på GitHub" %}
- Tilføjet {% include links/internal-link.html linktext="ikonerne" %} `chevron-double-left`, `chevron-double-right` og `file-upload` til filen 'all-svg-icons.svg'.
{% include links/github-link.html number="243" afternumber=" på GitHub" %}
- Rettet fejl i {% include links/component-guideline-link.html linktext="headeren" %}, hvor variablerne `$header-portal-logo-width` og `$header-portal-logo-height` ikke blev anvendt.
{% include links/github-link.html number="245" afternumber=" på GitHub" %}
- Rettet fejl, hvor pilen i {% include links/component-guideline-link.html linktext="detaljekomponenten" %} kun var delvist synlig ved tekstforstørrelse.
- Rettet fejl, hvor prikkerne i {% include links/internal-link.html linktext="lister" %} med punktopstilling kom for tæt på teksten ved tekstforstørrelse.



## Version 10.0.1 {#{% include create-id.html heading="Version 10.0.1" %}}
{:.mb-0}

<div><span class="small-text mt-0 d-block">21-08-2024</span></div>

- Ændret baggrundsfarven på fokuserede {% include links/component-guideline-link.html linktext="accordions" %} fra gennemsigtig til grå.
- Rettet fejl, hvor teksten i {% include links/component-guideline-link.html linktext="sprogvælger med tooltip" %} stod skævt.
- Rettet fejl, hvor {% include links/component-guideline-link.html linktext="readonly-inputfelter" %} ikke blev vist korrekt, hvis de havde en anden type end `text`.
- Tilføjet eksempler for '{% include links/internal-link.html linktext="siden kunne ikke findes" %}' (fejl 404).
- Tilføjet manglende teksttykkelse (`font-weight`) på billedtekst og subheadings.
- Opdateret flere af dokumentationsidens eksempler og retningslinjer, så de er mere retvisende og anvendelige.



## Version 10.0.0 {#{% include create-id.html heading="Version 10.0.0" %}}
{:.mb-0}

<div><span class="small-text mt-0 d-block">13-06-2024</span></div>

Hvis du skal opgradere fra version 9 til version 10, så læs vores {% include links/external-link.html linktext="migreringsguide for v10.0.0" classes="d-inline" %} på GitHub først. Version 10 indeholder mange breaking changes, man som designer og udvikler skal forholde sig til, da der både er ændringer i grundlæggende komponenter som header og mobilmenu, samt omstrukturering af designsystemets kodefiler.

<div class="d-flex align-items-center mt-5 mb-4">
  <h3 class="h4 mt-0 mb-0 mr-3">{% include links/component-guideline-link.html linktext="Header" %}</h3>
</div>
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Headerens række 4 og række 5 er fjernet, mens de øvrige rækker i headeren har fået opdateret design og forbedret tilgængelighed. Se flere detaljer på headerkomponentens side.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Mobilmenuens design er opdateret.
- <strong class="badge badge-success badge-small mr-2">New</strong> Tilføjet mulighed for at placere sprogvælgeren i headeren og mobilmenuen udover footeren.
- <strong class="badge badge-success badge-small mr-2">New</strong> Hvis der ikke er plads til alle menupunkter, vil de overskydende menupunkter automatisk ryge ind i en 'Mere'-menu.
- <strong class="badge badge-success badge-small mr-2">New</strong> Tilføjet eksempel på søgefelt i header.
- Løsningstitlen behøver ikke længere være et link.

<div class="d-flex align-items-center mt-5 mb-4">
  <h3 class="h4 mt-0 mb-0 mr-3">{% include links/component-guideline-link.html linktext="Faneblade" %}</h3>
</div>
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Ny fanebladskomponent. Den tidligere fanebladskomponent understøttes ikke længere.
- <strong class="badge badge-success badge-small mr-2">New</strong> Faneblade kan nu også anvendes til sidenavigation.
- <strong class="badge badge-success badge-small mr-2">New</strong> Tilføjet mulighed for at indsætte ikoner i faneblade.

<div class="d-flex align-items-center mt-5 mb-4">
  <h3 class="h4 mt-0 mb-0 mr-3">{% include links/component-guideline-link.html linktext="Tooltips" %}</h3>
</div>
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Tooltips er ændret grundlæggende i opførsel, design, anvendelse og implementering.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Rettet fejl, hvor tooltips kunne sætte sig forkert, hvis brugeren zoomede eller ændrede browservinduets størrelse.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Rettet fejl, hvor tooltips ikke kunne tilgås med tastatur samt visse skærmlæsere.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Ændret måden tooltips anvendes til forklaring af ord i tekstparagraffer grundet tilgængelighedsproblemer.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> {% include links/component-guideline-link.html linktext="Tooltips på sprogvælgeren" %} er opdateret som følge af tooltipkomponentens ændringer.

<div class="d-flex align-items-center mt-5 mb-4">
  <h3 class="h4 mt-0 mb-0 mr-3">{% include links/component-guideline-link.html linktext="Venstremenu" %} og {% include links/component-guideline-link.html linktext="trinindikator" %}</h3>
</div>
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> {% include links/component-guideline-link.html linktext="Anchorlinks" %} er fjernet fra venstremenuen.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> HTML og styling er opdateret i både trinindikator og venstremenu som følge af ændringerne i header og anchorlinks.
- <strong class="badge badge-info badge-small mr-2">Change</strong> Opdateret eksempler for trinindikator og venstremenu med `aria-label` for `nav`-elementet.
- <strong class="badge badge-info badge-small mr-2">Change</strong> Tilpasset roller, opmærkning og aria-attributter.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Rettet fejl, hvor tekst eller ikon kunne ryge ud over komponentens kanter.
- Tilføjet understregning til klikbare trin for at adskille dem fra låste trin.
{% include links/github-link.html number="204" afternumber=" på GitHub" %}

<div class="d-flex align-items-center mt-5 mb-4">
  <h3 class="h4 mt-0 mb-0 mr-3">{% include links/component-guideline-link.html linktext="Radioknapper" %} og {% include links/component-guideline-link.html linktext="tjekbokse" %}</h3>
</div>
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Fjernet muligheden for at vælge mellem store (32 pixels) og små (20 pixels) radioknapper og tjekbokse. Den nye standardstørrelse er 24 pixels. Bemærk at HTML'en for {% include links/component-guideline-link.html linktext="tabeller med valgbare rækker" %} og tjekbokse skal opdateres.
- Rettet fejl, hvor udseendet af inaktive radioknapper og tjekbokse kunne variere.
- Rettet fejl, hvor skjult indhold i enten radioknapper eller tjekbokse kunne få forkert styling ved fejlbeskeder. 

<div class="d-flex align-items-center mt-5 mb-4">
  <h3 class="h4 mt-0 mb-0 mr-3">{% include links/component-guideline-link.html linktext="Accordions" %}</h3>
</div>
- Ændret accordions `border-radius` (hjørner) fra 3px til 4px.
- <strong class="badge badge-info badge-small mr-2">Change</strong> Rettet fejl, hvor tekst ikke altid blev ombrudt korrekt i accordions.
- Fjernet forældet JavaScript fra accordions.

<div class="d-flex align-items-center mt-5 mb-4">
  <h3 class="h4 mt-0 mb-0 mr-3">{% include links/component-guideline-link.html linktext="Overflowmenu" %} og {% include links/component-guideline-link.html linktext="Sortering" %}</h3>
</div>
- Rettet fejl, hvor fokusmarkeringen kunne mangle delvist i overflowmenuen.
- Rettet fejl, hvor links i overflowmenuen kunne sidde i den forkerte side.
- Indsat en tynd streg mellem de forskellige elementer i overflowmenuen.
- <strong class="badge badge-info badge-small mr-2">Change</strong> Opdateret HTML for overflowmenu og sortering som følge af header-ændringerne.
- Opdateret JavaScript for sortering, så kravene til HTML'en er mindre rigide. Fx er det nu tilladt at have et `span`-element inde i `button`-elementet.

<div class="d-flex align-items-center mt-5 mb-4">
  <h3 class="h4 mt-0 mb-0 mr-3">Vedligehold</h3>
</div>
Nedenstående ændringer har primært betydning, hvis man selv bygger kodefiler ud fra designsystemets filer, hvis man har ændret i de oprindelige filer eller anvender designsystemet på en anden måde end specificeret på dokumentationssiden.
- Designsystemet anvender nu webpack i stedet for gulp til at bygge filer.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Ændret `devDependencies` og `scripts` i {% include links/external-link.html linktext="package.json" %}.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Fjernet flere polyfills til ikke-supporterede browsere. Hvis man i sit projekt har et krav om at supportere ældre browsere, skal man derfor selv sikre, at man anvender den nødvendige transpiling og polyfills. Se eventuelt {% include links/internal-link.html linktext="browserunderstøttelse" %}.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Erstattet {% include links/external-link.html linktext="@import" %} i alle SASS-filer med {% include links/external-link.html linktext="@use" %} og {% include links/external-link.html linktext="@forward" %}. Dette har medført en generel restruktur i alle SASS-filer og tilhørende mapper, hvor flere funktioner og mixins er blevet slettet eller flyttet.
{% include links/github-link.html number="199" afternumber=" på GitHub" %}
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Flere SASS-variable er blevet slettet, flyttet eller erstattet, da de gjorde det muligt at tilpasse styling, det ikke var tiltænkt, man skulle ændre.
- Erstattet 'normalize.css' med styling i '_base.scss'.
- Flere {% include links/external-link.html linktext="macroer" %} har fået mindre rettelser og tilføjelser, så der blandt andet kan sættes klasser og attributter.
- Mindre koderettelser som følge af et linter-tjek.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Fjernet forældede klasser, heriblandt `icon-svg-large`, `collapse-transition-collapse`, `collapse-transition-expand`, `button-small`, `sidebar-col` og flere ubrugte klasser for accordion's åbn/luk alle-knap.
- Opdateret README-fil.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Ensrettet stistrukturen til hhv. fonte, ikoner og billeder.
- Rettet fejl, hvor klassen `sr-only` risikerede at blive unødvendigt gentaget flere gange i ens stylesheet, hvis man anvendte SCSS-filerne.

<div class="d-flex align-items-center mt-5 mb-4">
  <h3 class="h4 mt-0 mb-0 mr-3">Ændringer på designsystem.dk</h3>
</div>
- Dokumentationssiden har fået en større omstrukturering, hvor flere sider er flyttet rundt.
- Flere sider er blevet opdelt i to faner kaldet 'Retningslinjer' og 'Kode'. Man skal derfor ikke længere ind på to forskellige hovedmenupunkter for at finde hhv. kode og design.
- Nyt hovedmenupunkt “{% include links/internal-link.html linktext="Kom i gang" %}”, som indeholder overordnet information om bl.a. krav, tilgængelighed og ressourcer for kode og design. 
- 'Design' er omdøbt til '{% include links/internal-link.html linktext="Styleguide" %}'.
- Det er ikke længere muligt at hente designsystemets komponenter som svg-filer. Se {% include links/internal-link.html linktext="designressourcer" %} for øvrige muligheder.
- Ny side om {% include links/internal-link.html linktext="justering af tema og stylesheets" %}.

<div class="d-flex align-items-center mt-5 mb-4">
  <h3 class="h4 mt-0 mb-0 mr-3">Øvrige</h3>
</div>
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Fjernet klasser, der visuelt kunne få {% include links/internal-link.html linktext="links" %} til at fremstå inaktive.
- <strong class="badge badge-success badge-small mr-2">New</strong> {% include links/component-guideline-link.html linktext="Anchorlinks" %} har fået sin egen komponent.
- Rettet ikonet `file-upload`, der kunne smide en fejl i konsollen, når man anvendte visse browser extensions.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Fjernet ikonet 'Log af (åben hængelås)' (`lock-open`). Ikonet `lock` skal i stedet bruges til 'log af'.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Fjernet JavaScript fra {% include links/component-guideline-link.html linktext="datofelter" %} og ændret inputtypen fra `tel` til `number`. Man skal derfor sikre sig, at ens løsning har en passende validering af de indtastede værdier.
- <strong class="badge badge-info badge-small mr-2">Change</strong> Ændret fontstørrelse og linjehøjde for {% include links/internal-link.html linktext="typografi" %} inklusiv overskrifter, billedtekst, subheading og manchet - vær opmærksom på, at disse tekster kan fylde mere end tidligere.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> {% include links/component-guideline-link.html linktext="Toggle switch" %} har fået ny HTML, ny styling og opdaterede retningslinjer med det formål at øge tilgængeligheden, samt gøre det muligt at anvende komponenten på andre sprog end dansk.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Rettet fejl, hvor fokus kunne ryge ud af {% include links/component-guideline-link.html linktext="modaler" %} til indholdet bagved. Rettelsen kræver, at alle modaler lægges i et container-element. Se {% include links/component-code-link.html linktext="kode for modaler" %} for mere info.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> For {% include links/component-guideline-link.html linktext="tabeller med sortering" %} er hele headeren gjort klikbar.
- <strong class="badge badge-info badge-small mr-2">Change</strong> {% include links/component-guideline-link.html linktext="Fejlopsummering" %} anvender nu en `nav` som udgangspunkt.
- Ændret font-smoothing for flere elementer.
- Rettet fejl, hvor {% include links/component-guideline-link.html linktext="tilbage til toppen" %}-knappen nogle gange var vist, selvom den skulle være skjult.
- Tilføjet klassen `no-max-width`, der forhindrer `max-width` på en paragraf eller liste.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Fjernet varianten af {% include links/component-guideline-link.html linktext="beskeder" %} uden ikon. Klassen `alert--show-icon` bruges ikke længere og ikonet skal indsættes manuelt.
- Rettet fejl, hvor responsive tabeller med sortering indeholdt sorteringsknappernes tekst på mindre skærme.
{% include links/github-link.html number="229" afternumber=" på GitHub" %}
- <strong class="badge badge-info badge-small mr-2">Change</strong> Justeret ikonets placering i {% include links/component-guideline-link.html linktext="funktionslink" %} og {% include links/internal-link.html linktext="eksterne links" %} samt `line-height` på knapper for bedre centrering.



## Version 9.1.0 {#{% include create-id.html heading="Version 9.1.0" %}}
{:.mb-0}

<div><span class="small-text mt-0 d-block">24-11-2023</span></div>

- <strong class="badge badge-info badge-small mr-2">Change</strong> Ændret design på {% include links/component-guideline-link.html linktext="readonly-inputfelter" %} og {% include links/component-guideline-link.html linktext="deaktiverede inputfelter" %}. Bemærk at deaktiverede inputfelter kræver en mindre opdatering af HTML'ens klasser.
- Tilføjet styling til `placeholder`-attributten for {% include links/component-guideline-link.html linktext="inputfelter" %}, så placeholder-tekst afviger i udseende fra indtastet tekst. Vær dog opmærksom på, at {% include links/component-guideline-link.html linktext="hjælpetekster" %} fortsat er måden at give brugere hjælp til indtastning på.
- Opdateret {% include links/component-guideline-link.html linktext="funktionslinks" %}, så teksten er venstrestillet, når de i HTML'en er angivet med `<button>`.
- Rettet fejl, hvor visse typer af `id` kunne få {% include links/component-guideline-link.html linktext="overflowmenuen" %} til at fejle.
{% include links/github-link.html number="220" afternumber=" på Github" %}
- Tilføjet `inline` til {% include links/internal-link.html linktext="hjælpeklasser for display" %}.
- Tilføjet `autocomplete`-attributter til flere eksempler, tilføjet afsnit om `autocomplete` til inputfelter og gjort det muligt at sætte autocomplete i {% include links/external-link.html linktext="date-input-macroen" %}.
- <strong class="badge badge-success badge-small mr-2">New</strong> Tilføjet pattern for {% include links/internal-link.html linktext="inputfelter med hentet data" %}.
- Tilføjet ny side til dokumentationen kaldet {% include links/internal-link.html linktext="Ofte stillede spørgsmål" %}, samt opdateret siderne {% include links/internal-link.html linktext="Designressourcer" %}, {% include links/internal-link.html linktext="Tjekliste" %} og {% include links/internal-link.html linktext="Komponenter" %}.



## Version 9.0.2 {#{% include create-id.html heading="Version 9.0.2" %}}
{:.mb-0}

<div><span class="small-text mt-0 d-block">30-08-2023</span></div>

- Rettet fejl, hvor musemarkøren ikke blev vist korrekt på {% include links/component-guideline-link.html linktext="deaktiverede felter" %}, når de var angivet som andet end `type="text"`.
- Rettet fejl, hvor {% include links/component-guideline-link.html linktext="knapper" %} ikke altid stod på linje, når de lå i samme række.
{% include links/github-link.html number="215" afternumber=" på Github" %}



## Version 9.0.1 {#{% include create-id.html heading="Version 9.0.1" %}}
{:.mb-0}

<div><span class="small-text mt-0 d-block">20-06-2023</span></div>

- Rettet fejl, hvor teksten på {% include links/component-guideline-link.html linktext="knapper" %} røg ud over kanten, hvis teksten fyldte flere linjer.
- Rettet fejl, hvor {% include links/component-guideline-link.html linktext="cookiemeddelelsen" %} ikke kunne læses, når der var zoomet kraftigt ind i browseren.
- Tilføjet tjek i JavaScript-koden for {% include links/component-guideline-link.html linktext="modaler" %}, så man ikke længere får en fejlbesked i browserens konsol, hvis man programmatisk forsøger at lukke en allerede lukket modal.
{% include links/github-link.html number="210" afternumber=" på Github" %}
- Rettet fejl i dokumentationen, hvor nogle {% include links/internal-link.html linktext="farver" %} stod angivet forkert.



## Version 9.0.0 {#{% include create-id.html heading="Version 9.0.0" %}}
{:.mb-0}

<div><span class="small-text mt-0 d-block">14-04-2023</span></div>

<div class="d-flex align-items-center mt-5 mb-4">
  <h3 class="h4 mt-0 mb-0 mr-3">{% include links/component-guideline-link.html linktext="Datovælger" %}</h3>
</div>
- Rettet fejl, hvor datoer fik en forkert dag læst højt af skærmlæsere.
{% include links/github-link.html number="201" afternumber=" på Github" %}
- Rettet fejl, hvor navigationen i datovælgeren ikke fungerede sammen med visse skærmlæsere.
- Rettet fejl, hvor markøren skiftede udseende på navigationsknapperne, selvom disse knapper ikke var synlige.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Fjernet, tilføjet og ændret flere skærmlæserbeskeder. Anvender du dine egne {% include links/component-code-link.html linktext="sprogoversættelser" %}, skal disse derfor opdateres.
- Ændret `aria-selected` til `aria-current` på valgte datoer, måneder og år.
- <strong class="badge badge-success badge-small mr-2">New</strong> Tilføjet muligheden for at tilpasse {% include links/component-guideline-link.html linktext="datoformatet" %}.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Opdateret inputfeltet, så datovælgeren accepterer flere måder at indtaste en dato på (uafhængigt af det valgte datoformat).

<div class="d-flex align-items-center mt-5 mb-4">
  <h3 class="h4 mt-0 mb-0 mr-3">{% include links/component-guideline-link.html linktext="Venstremenu" %} og {% include links/component-guideline-link.html linktext="trinindikator" %}</h3>
</div>
- <strong class="badge badge-info badge-small mr-2">Change</strong> Rettet fejl vedrørende trinindikatorens gennemført-ikon, hvor skærmlæsere ikke annoncerede, når et trin var markeret som gennemført.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Rettet fejl, hvor lange tekster blev ombrudt forkert (ændringen påvirker både venstremenu og trinindikator).
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Rettet fejl, hvor trinindikatoren kunne blive for lille, medmindre den var responsiv.
- <strong class="badge badge-success badge-small mr-2">New</strong> Tilføjet muligheden for at vise, når der er {% include links/component-guideline-link.html linktext="fejl i et trin" %} i trinindikatoren.
{% include links/github-link.html number="142" afternumber=" på Github" %}

<div class="d-flex align-items-center mt-5 mb-4">
  <h3 class="h4 mt-0 mb-0 mr-3">{% include links/component-guideline-link.html linktext="Tabeller" %} og {% include links/component-guideline-link.html linktext="strukturerede lister" %}</h3>
</div>
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Fjernet klassen `table--lines`, der var en forældet variant.
- Rettet fejl relateret til margin og padding for tabeller.
- <strong class="badge badge-info badge-small mr-2">Change</strong> Opdateret teksten på søgeknappen ved {% include links/component-guideline-link.html linktext="søgning i tabeller" %}.
- <strong class="badge badge-info badge-small mr-2">Change</strong> Skærmlæserbeskederne til tjekboksene i {% include links/component-guideline-link.html linktext="tabeller med valgbare rækker" %} er ændret til kun at være "vælg række". Da JavaScripten ikke længere ændrer i skærmlæserbeskederne, skal eventuelle oversættelser skrives direkte i HTML'en fremadrettet.
- <strong class="badge badge-info badge-small mr-2">Change</strong> Fjernet `aria-label` fra `label`-elementet for tjekbokse i {% include links/component-guideline-link.html linktext="tabeller med valgbare rækker" %}.
- <strong class="badge badge-info badge-small mr-2">Change</strong> Opdateret {% include links/internal-link.html linktext="opsummeringssiderne" %} i selvbetjeningseksemplerne, hvor tidligere tomme headers har fået en skærmlæserbesked.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Opdateret `DKFDS.init()`, så kun tabeller markeret med responsive klasser får indsat attributten `data-title`.
- <strong class="badge badge-info badge-small mr-2">Change</strong> <strong>{% include links/component-guideline-link.html linktext="Strukturerede lister" %} er flyttet ind under tabeller</strong> og er ændret til en tabelstruktur.

<div class="d-flex align-items-center mt-5 mb-4">
  <h3 class="h4 mt-0 mb-0 mr-3">{% include links/component-guideline-link.html linktext="Header" %}</h3>
</div>
- <strong class="badge badge-info badge-small mr-2">Change</strong> Opdateret myndighedsnavnet i række 2, så det er kodet med `<strong>`.
- Rettet fejl, hvor portalnavnet ikke blev vist korrekt ved print.
- <strong class="badge badge-info badge-small mr-2">Change</strong> Opdateret Log af-knappen, så den altid er kodet som en `button` uanset skærmstørrelse.
- <strong class="badge badge-info badge-small mr-2">Change</strong> `title` er fjernet fra mobilmenuens knapper og erstattet af `aria-label`.
- <strong class="badge badge-info badge-small mr-2">Change</strong> Rettet fejl, hvor den aktive side i række 3 ikke blev fremhævet for skærmlæsere eller fremgik af mobilmenuen.

<div class="d-flex align-items-center mt-5 mb-4">
  <h3 class="h4 mt-0 mb-0 mr-3">{% include links/external-link.html linktext="package.json" %}</h3>
</div>
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Fjernet linjen `"jsnext:main": "src/js/start.js"`.<br>{% include links/github-link.html number="194" afternumber=" på Github" %}
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Fjernet `release` fra `scripts`.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Fjernet `app-root-path`, `array-filter`, `gulp4-run-sequence` og `zip-folder` fra `devDependencies`.

<h3 class="h4">Øvrige</h3>
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Større opdatering og omskrivning af flere {% include links/external-link.html linktext="macroer" %}. Se macroernes tilhørende YAML-filer for den komplette dokumentation. Såfremt man <em>ikke</em> anvender macroer, men blot har anvendt HTML-koden vist i dokumentationssidens eksempler, kan man se bort fra dette punkt i release notes.
- <strong class="badge badge-info badge-small mr-2">Change</strong> Flere afvigelser i dokumentationens kodeeksempler og beskrivelser er rettet. Nogle eksempler kan derfor se anderledes ud end tidligere.
- Fjernet flere billeder fra dokumentationen, der viste eksempler på avancerede komponenter uden tilhørende kode.
- <strong class="badge badge-info badge-small mr-2">Change</strong> Opdateret HTML'en for følgende komponenter, så titler og fremhævet tekst er angivet med enten et heading-element eller `<strong>`-element: {% include links/component-code-link.html linktext="Badges" %}, {% include links/component-code-link.html linktext="beskeder" %}, {% include links/component-code-link.html linktext="cookiemeddelelser" %}, {% include links/component-code-link.html linktext="footer" %} og {% include links/component-code-link.html linktext="toastbeskeder" %}.
- <strong class="badge badge-info badge-small mr-2">Change</strong> {% include links/component-guideline-link.html linktext="Toastbeskeders" %} aria-attributter og skærmlæserbeskeder er opdateret. Skærmlæsere annoncerer nu også beskedens variant og derudover titlen ved fokus på luk-knappen.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Opdateret {% include links/component-guideline-link.html linktext="accordions" %}, så de altid kan åbnes og lukkes uafhængigt af de øvrige accordions i gruppen (mobilversionen af faneblade er dog undtaget).<br>{% include links/github-link.html number="207" afternumber=" på Github" %}
- <strong class="badge badge-info badge-small mr-2">Change</strong> Opdateret {% include links/component-guideline-link.html linktext="fejlbeskeder i accordions" %}, så skærmlæsere kun læser fejlbeskeden højt og ikke hele accordionens indhold.
- <strong class="badge badge-info badge-small mr-2">Change</strong> Rettet fejl, hvor den lille version af {% include links/component-guideline-link.html linktext="tilbage til toppen" %}-knappen ikke blev læst korrekt op af skærmlæsere.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Attributten `aria-selected` på {% include links/component-guideline-link.html linktext="sortering" %} er ændret til `aria-current` og flyttet fra `li`-elementet til `button`-elementet.
- Rettet fejl, hvor {% include links/component-guideline-link.html linktext="søgefelter" %} blev grå i stedet for hvide på iPhones.
- <strong class="badge badge-info badge-small mr-2">Change</strong> {% include links/component-guideline-link.html linktext="Radioknapper" %} og 
{% include links/component-guideline-link.html linktext="tjekbokse" %} er omskrevet, så de ikke længere indeholder listeelementerne `li` og `ul`.
- Mindsket afstanden mellem label og hjælpetekst ved store radioknapper og store tjekbokse.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Rettet fejl, hvor sprogoversættelser for {% include links/component-guideline-link.html linktext="karakterbegrænsning" %} og {% include links/component-code-link.html linktext="Accordions" %} påvirkede sproget i disse komponenter generelt i stedet for kun i de initialiserede komponenter. Denne opførsel kan dog ikke undgås for {% include links/component-code-link.html linktext="Datovælgeren" %}, hvor dokumentationen er præciseret.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Tidligere public funktioner og variable er gjort private i koden for {% include links/component-guideline-link.html linktext="karakterbegrænsning" %}. Funktionen `init` samt sprogskifte er uændrede.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Fjernet {% include links/internal-link.html linktext="ikonet" %} `delete`. Brug i stedet ikonet `trash-can`.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> {% include links/component-guideline-link.html linktext="Klikbare ikoner" %} med klassen `button-unstyled` fylder ikke længere hele skærmbredden på mindre skærme og HTML'en er opdateret for alle eksempler.
- Rettet fejl, hvor deaktiverede {% include links/component-guideline-link.html linktext="tertiærknapper" %} skiftede farve på hover.
- <strong class="badge badge-info badge-small mr-2">Change</strong> Fjernet {% include links/internal-link.html linktext="pattern" %} for visning af modal, når en side forlades. I stedet kan browseradvarsler anvendes. 
- Rettet fejl i {% include links/component-guideline-link.html linktext="overflow menuer" %}, hvor indholdet kunne ryge ud over skærmkanten på små skærme.
- <strong class="badge badge-info badge-small mr-2">Change</strong> Tilføjet `aria-haspopup` til knapper, der åbner modaler. {% include links/component-code-link.html linktext="Modalkomponenten" %}, selvbetjeningseksemplerne og pattern for {% include links/internal-link.html linktext="session udløber" %} er opdateret.



## Tidligere versioner {#{% include create-id.html heading="Tidligere versioner" %}}
{:.mb-0}

{:#version-8-2-1 .mb-0}
### Version 8.2.1

<div><span class="small-text mt-0 d-block">03-01-2023</span></div>

- Tilføjet klassen `full-width-image`, der kan bruges til {% include links/internal-link.html linktext="billeder anvendt som links" %}. 
- Rettet fejl i {% include links/component-guideline-link.html linktext="modaler" %}, hvor baggrunden kunne blive dækket helt af modalen på især mindre skærme.
- Opdateret licensinformation og tilføjet licensfilen til {% include links/external-link.html linktext="zip-filen i GitHub" %}.

{:#version-8-2-0 .mb-0}
### Version 8.2.0

<div><span class="small-text mt-0 d-block">17-10-2022</span></div>

- <strong class="badge badge-success badge-small mr-2">New</strong> Tilføjet mulighed for at ændre sprog i komponenterne {% include links/component-code-link.html linktext="accordions" %}, {% include links/component-code-link.html linktext="tabeller med valgbare rækker" %}, {% include links/component-code-link.html linktext="karakterbegrænsning" %} og {% include links/component-code-link.html linktext="datovælgeren" %}.
- <strong class="badge badge-info badge-small mr-2">Change</strong> Ændret aria-attributter for {% include links/component-code-link.html linktext="toastbeskeder" %}, da beskederne ikke blev læst højt af skærmlæsere. De nye aria-attributter skal sættes på henholdsvis toast-containeren og toastbeskederne.
- <strong class="badge badge-info badge-small mr-2">Change</strong> Ændret placeringen af {% include links/component-guideline-link.html linktext="toastbeskeder" %}, så de nu vises øverst på både store og små skærme. Hvis der vises flere beskeder ad gangen, anbefales det at lade den nyeste stå øverst.
- Tilføjet `cursor:pointer` til {% include links/component-guideline-link.html linktext="toastbeskeders" %} luk-knap.
- Opdateret {% include links/component-guideline-link.html linktext="dropdown" %}-komponentens background-image, så det sættes ved hjælp af ikonet `expand-more`.
- Ændret stylingen på {% include links/component-guideline-link.html linktext="responsive trinindikatorers" %} top- og bund-kanter, så de ikke længere forsvinder på mindre skærme.
- Rettet en mindre fejl, hvor {% include links/component-guideline-link.html linktext="tooltip" %}-pilen kunne pege væk fra elementet.

{:#version-8-1-0 .mb-0}
### Version 8.1.0

<div><span class="small-text mt-0 d-block">28-09-2022</span></div>

- <strong class="badge badge-success badge-small mr-2">New</strong> Ny komponent: {% include links/component-guideline-link.html linktext="Tilbage til toppen" %}
- <strong class="badge badge-success badge-small mr-2">New</strong> Ny variant: Karakterbegræsning er tilføjet til inputfelter og tekstområder
- Tilføjet manglende padding i venstre side af overflow-menupunkter i {% include links/component-guideline-link.html linktext="headerens" %} række 3
- Rettet fejl hvor skip-links ikke blev vist, når der var zoomet ca. 400% ind i browseren
- Fjernet text-transform:uppercase på {% include links/internal-link.html linktext="subheading" %}, der ved en fejl var blevet genintroduceret efter version 7.5.3
- <strong class="badge badge-info badge-small mr-2">Change</strong> Negativ letter-spacing er fjernet fra al tekst - vær opmærksom på, at brødtekster og titler kan fylde mere end tidligere
- <strong class="badge badge-info badge-small mr-2">Change</strong> Begge knapper i {% include links/component-guideline-link.html linktext="cookiemeddelelse" %} har nu typen {% include links/component-guideline-link.html linktext="sekundærknapper" %}
- Flere {% include links/external-link.html linktext="macroer" %} har fået mindre ændringer, for eksempel fejlrettelser (dropdowns og tekstområder) eller tilføjelse af (valgfri) properties
- <strong class="badge badge-info badge-small mr-2">Change</strong> Dokumentationens eksempler på selvbetjeningsløsninger og {% include links/internal-link.html linktext="templates" %} er opdateret og gjort generiske. Derudover er der foretaget flere mindre rettelser, heriblandt er {% include links/internal-link.html linktext="formularer" %} flyttet ind under {% include links/internal-link.html linktext="patterns" %}, 'sidenavigation' er omdøbt til '{% include links/component-guideline-link.html linktext="venstremenu" %}', 'felter' er omdøbt til '{% include links/component-guideline-link.html linktext="inputfelter" %}', 'notifikation' er omdøbt til '{% include links/component-guideline-link.html linktext="toastbesked" %}', 'skip-link' er omdøbt til '{% include links/component-guideline-link.html linktext="gå til sidens indhold" %}' og 'spinner' er omdøbt til '{% include links/component-guideline-link.html linktext="loading spinner" %}'. De nye navne har udelukkende betydning for, hvor på sitet der kan findes dokumentation og koden er derfor uændret.

{:#version-8-0-1 .mb-0}
### Version 8.0.1

<div><span class="small-text mt-0 d-block">16-06-2022</span></div>

- Rettet aria-labels i {% include links/component-guideline-link.html linktext="datovælgerens" %} tilbage/frem-knapper.
{% include links/github-link.html number="180" afternumber=" på Github" %}
- Tilføjet `chevron-double-left` og `chevron-double-right` til {% include links/internal-link.html linktext="ikoner" %}, der manglede efter version 8.0.0.
{% include links/github-link.html number="177" afternumber=" på Github" %}
- Opdateret ikonet `arrow-left`, der viste det forkerte ikon, når man indsatte det ved hjælp af klassen.
- Opdateret ikonerne `sort-default` og `sort-table-none`, så de også kan bruges som klasse.
- Opdateret ikonerne `sort-ascending`, `sort-default`, `sort-descending`, `sort-table-ascending`, `sort-table-descending` og `sort-table-none`, så det er muligt at ændre farve på disse, når man anvender ikonsamlingen.

{:#version-8-0-0 .mb-0}
### Version 8.0.0

<div><span class="small-text mt-0 d-block">17-05-2022</span></div>

- Ny komponent: {% include links/component-guideline-link.html linktext="Paginering" %}
- Ny komponent: {% include links/component-guideline-link.html linktext="Strukturerede lister" %}
- Taget højde for alignment af lange trinnavne i {% include links/component-guideline-link.html linktext="trinindikator" %}
- Tilpasset afstande ved tjekboks og radioknap med skjult indhold
- <strong class="badge badge-info badge-small mr-2">Change</strong> Javascript tilføjet til {% include links/component-guideline-link.html linktext="fejlopsummeringskomponenten" %} så links sætter korrekt fokus i felter i Safari.
- `DKFDS.init()` udvidet med scope json parameter, så man kan køre `DKFDS.init()` mere målrettet på siden.
- <strong class="badge badge-info badge-small mr-2">Change</strong> Ændret {% include links/internal-link.html linktext="slet ikonet" %}, da det gamle ikon ikke fungerede i brugertest.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Indført nye {% include links/internal-link.html linktext="datavisualiseringsfarver" %}.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Omdøbt FDS {% include links/internal-link.html linktext="farver" %}
- Erstattet brug af / ved division i scss med math.div
{% include links/github-link.html number="157" afternumber=" på Github" %}
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Fjernet javascript på {% include links/component-guideline-link.html linktext="detaljekomponenten" %}, da FDS ikke længere understøtter Internet Explorer
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Opdateret javascript kald for komponenter, således at man for visse komponenter skal køre init(). Se mere under hver komponent i kodesektionen
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Ændret attributter for {% include links/component-guideline-link.html linktext="radioknap med skjult indhold" %}
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Fjernet gamle {% include links/internal-link.html linktext="ikoner" %}
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Tilføjet JavaScript til luk knap i {% include links/component-code-link.html linktext="beskeder" %}
- Tilføjet Modal som kræver handling, så brugeren ikke kan lukke modalen uden at tage stilling til dets indhold. 
- <strong class="badge badge-info badge-small mr-2">Change</strong> Ved luk af {% include links/component-guideline-link.html linktext="modal" %} sættes fokus på element, som åbnede modalen
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Luk modal, hvis en ny {% include links/component-guideline-link.html linktext="modal" %} åbnes.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Forbedret {% include links/component-guideline-link.html linktext="headeren" %} på mobil.
- Vis {% include links/component-guideline-link.html linktext="tjekbokse" %} og {% include links/component-guideline-link.html linktext="radioknapper" %} ved print.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Større opdatering af {% include links/external-link.html linktext="macroer" %} for nemmere vedligehold og brug.
- Vis dage for forrige og næste måned, når de deler uge med aktuelle måned i {% include links/component-guideline-link.html linktext="datovælgeren" %}.
- Opdateret breakpoints i {% include links/component-guideline-link.html linktext="knapper" %}, så knapperne ikke er helt så brede på mindre skærme.
- Fjernet accordion uden ramme.
- Tilpasset afstande i {% include links/component-guideline-link.html linktext="modal" %} på mindre skærme
- Opdateret normalize.css til v8.0.1
- Fjernet styling på {% include links/component-guideline-link.html linktext="badges" %}, som gør teksten til store bogstaver. Store bogstaver gav udfordringer med korrekt oplæsning af teksten med skærmlæser.
- Grå baggrundsfarve på {% include links/component-guideline-link.html linktext="dropdown" %} i Firefox er ændret til hvid.
- {% include links/component-guideline-link.html linktext="Header komponent" %}: Log ud og Log ind knapper i mobilnavigationen er sat til fuld bredde, så knapper præsenteres ens i menuen.
- Lille fejl i border på {% include links/component-guideline-link.html linktext="tabeller" %} er fikset.
- Bredde på {% include links/component-guideline-link.html linktext="overflow menu" %} ændret til at fylde hele skærmens bredde på små skærme.
- Ændringer i opførelse af {% include links/component-guideline-link.html linktext="tooltip" %}, for at sikre teksten kan markeres.
{% include links/github-link.html number="163" afternumber=" på Github" %}
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Tilføjet og ændret SASS variabler for bedre vedligehold og tematisering.
- Opdateret højden på knapper med ikoner, så de nu har samme højde som knapper uden ikoner.

{:#version-7-5-3 .mb-0}
### Version 7.5.3

<div><span class="small-text mt-0 d-block">03-12-2021</span></div>

- Fjernet text-transform:uppercase på {% include links/internal-link.html linktext="subheading" %}, så skærmlæsere læser teksten frem for at stave

{:#version-7-5-2 .mb-0}
### Version 7.5.2

<div><span class="small-text mt-0 d-block">25-11-2021</span></div>

- Gjort det muligt at markere tekst i {% include links/component-guideline-link.html linktext="knapper" %} for support af hjælpeværktøjer som Adgang for alle.

{:#version-7-5-1 .mb-0}
### Version 7.5.1

<div><span class="small-text mt-0 d-block">18-11-2021</span></div>

- Fikset fejl med placering af årstal i {% include links/component-guideline-link.html linktext="datovælger" %} i mobilvisning.
- Rettet fejl i {% include links/component-guideline-link.html linktext="datovælgeren" %} der gjorde, at den første dag i måneden ikke blev vist, når den var en søndag.
- Tillader nu dato i {% include links/component-guideline-link.html linktext="datovælgeren" %} fra start.

{:#version-7-5-0 .mb-0}
### Version 7.5.0

<div><span class="small-text mt-0 d-block">29-09-2021</span></div>

- {% include links/component-guideline-link.html linktext="Valgbare rækker i tabel" %}
- {% include links/component-guideline-link.html linktext="Prefix og suffix på felter" %}
- Småtilpasninger i designet på {% include links/component-guideline-link.html linktext="modaler" %}
- Opdateret design på {% include links/component-guideline-link.html linktext="datovælger" %}
- Tilføjet 72px i bunden af {% include links/component-guideline-link.html linktext="footer" %}
- Tilføjet styling og retningslinjer for {% include links/component-guideline-link.html linktext="sortering i tabeller" %}
- Tilføjet eksempel og retningslinjer på {% include links/component-guideline-link.html linktext="søgning i tabeller" %}
- Tilføjet en tykkere border i bunden af {% include links/component-guideline-link.html linktext="knapper" %}
- Opdateret {% include links/component-guideline-link.html linktext="retningslinjer for obligatoriske og frivillige felter" %}
- Tilføjet {% include links/internal-link.html linktext="ikoner til sortering i tabel" %}
- Tilføjet variant til overflow menu til brug ved sortering
- Ændret ikon i {% include links/component-guideline-link.html linktext="detalje komponent" %}

{:#version-7-4-0 .mb-0}
### Version 7.4.0

<div><span class="small-text mt-0 d-block">02-06-2021</span></div>

- Ændringer i {% include links/component-guideline-link.html linktext="tooltip komponenten" %} - der er tilføjet delay og pil på tooltip
- Links får nu automatisk sort farve i {% include links/component-guideline-link.html linktext="beskeder" %}
- Ny komponent: {% include links/component-guideline-link.html linktext="Toggle switch komponent" %}
- Tilføjet status tekst i forbindelse med {% include links/component-guideline-link.html linktext="spinner komponenten" %}

{:#version-7-3-0 .mb-0}
### Version 7.3.0

<div><span class="small-text mt-0 d-block">23-04-2021</span></div>

- Ikontaksonomi
- Ny komponent: Notifikation (Toast) komponent
- Fjernet unødvendige kald til fontfiler
- Timing issue på datovælger - sæt ikke knappen, hvis den allerede eksisterer
- Generel oprydning i dependencies
{% include links/github-link.html number="130" afternumber=" på Github" %}
- Håndtering af situation: Escape funktion på {% include links/component-guideline-link.html linktext="overflow menu" %} og {% include links/component-guideline-link.html linktext="modaler" %} kolliderer og lukker begge, når en overflow er inde i en modal
{% include links/github-link.html number="125" afternumber=" på Github" %}
- {% include links/internal-link.html linktext="Facit streger" %}
- Udvidelse af breakpoint for {% include links/component-code-link.html linktext="responsiv tabel" %}
{% include links/github-link.html number="45" afternumber=" på Github" %}

{:#version-7-2-0 .mb-0}
### Version 7.2.0

<div><span class="small-text mt-0 d-block">11-02-2021</span></div>

- Ændret font i drop down for at fikse bug i Firefox
{% include links/github-link.html number="102" afternumber=" på Github" %}
- Ny komponent: {% include links/component-guideline-link.html linktext="Datovælger" %}
- Fiks fejl, hvor ol liste bliver vist med bullets i {% include links/component-guideline-link.html linktext="accordions" %}
{% include links/github-link.html number="120" afternumber=" på Github" %}
- Tilføjet brugervenlige JS fejl, når en komponent ikke er tilføjet korrekt
- Opdateret {% include links/internal-link.html linktext="typografi" %}
- Tilføjet styling af {% include links/internal-link.html linktext="billedtekst (figcaption)" %}
- {% include links/component-guideline-link.html linktext="Åbn/luk alle accordions function" %}
- {% include links/component-guideline-link.html linktext="Accordion" %} knapper kan nu være i en overskrift
{% include links/github-link.html number="88" afternumber=" på Github" %}
- Padding fikset på extracompact tabeller
{% include links/github-link.html number="113" afternumber=" på Github" %}

{:#version-7-1-1 .mb-0}
### Version 7.1.1

<div><span class="small-text mt-0 d-block">28-10-2020</span></div>

- Fikset fejl, hvor border ved aktivt menupunkt i {% include links/component-guideline-link.html linktext="header" %} hopper ved hover.
{% include links/github-link.html number="118" afternumber=" på Github" %}
- Fikset fejl i Internet Explorer, hvor {% include links/component-guideline-link.html linktext="feltbredde i tekstfelter" %} er defineret ved antal karakterer bliver ignoreret.
- Luk {% include links/component-guideline-link.html linktext="overflow menu" %} i {% include links/component-guideline-link.html linktext="header" %} ved klik uden for menuen.
- Tilføjet ARIA attributter i {% include links/component-guideline-link.html linktext="trinindikator" %} for bedre tilgængelighed

{:#version-7-1-0 .mb-0}
### Version 7.1.0

- Ny komponent: {% include links/component-guideline-link.html linktext="Sprogvælger" %}

{:#version-7-0-0 .mb-0}
### Version 7.0.0

<div><span class="small-text mt-0 d-block">18-08-2020</span></div>

- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Opdateret fonten IBM Plex Sans til version 5.0.0
<span class="form-hint mt-0">Hvis man preloader fonten - hvilket anbefales - så bør man tjekke om stien til fonten skal ændres, da mappestrukturen under fonts er ændret i dkfds</span>
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Ændret attributter på tjekboks med collapse funktion, så HTML nu er valid.
- Tilføjet ny {% include links/component-guideline-link.html linktext="modal komponent" %}
- Fikset fejl med fokus i header i Firefox
- Tilføjet maks. bredde på tooltip
- Fjernet dokumentation for brug af dkfds-plugins, da det fremover ikke vil blive vedligeholdt
<span class="form-hint mt-0">Se mere under {% include links/internal-link.html linktext="Plugins" %} i Kode sektionen</span>
- Fikset fejl, hvor valgt radioknap ikke blev vist ved print i Internet Explorer og Edge
{% include links/github-link.html number="112" afternumber=" på Github" %}

{:#version-6-1-1 .mb-0}
### Version 6.1.1

<div><span class="small-text mt-0 d-block">19-05-2020</span></div>

- Ændret lille knap til normal knap i standard header grundet usability issues i mobilvisning

{:#version-6-1-0 .mb-0}
### Version 6.1.0

<div><span class="small-text mt-0 d-block">14-05-2020</span></div>

- Ny komponent: {% include links/component-guideline-link.html linktext="Brødkrumme" %}
- Mulighed for en mere kompakt {% include links/component-guideline-link.html linktext="header" %} med brug af en lille knap
- Linjehøjden for {% include links/internal-link.html linktext="lille brødtekst" %} er ændret til 20px
- Tilføjet dokumentation og eksempler på {% include links/component-guideline-link.html linktext="fejlmeddelelser" %} og {% include links/component-guideline-link.html linktext="fejlopsummeringer" %}.
- Tilpasset alignment på {% include links/component-guideline-link.html linktext="venstremenu" %}

{:#version-6-0-1 .mb-0}
### Version 6.0.1

<div><span class="small-text mt-0 d-block">19-03-2020</span></div>

- Fjernet inkludering af IBM Plex Sans definitionen i dkfds-tippy-theme.standalone.css.
{% include links/github-link.html number="104" afternumber=" på Github" %}
- Understøttelse af Tippy.js v6.1.0
{% include links/github-link.html number="105" afternumber=" på Github" %}
- Tilpasset CSS til faneblade, så der ikke længere kommer fejl ved import af dkfds scss i angular.

{:#version-6-0-0 .mb-0}
### Version 6.0.0

<div><span class="small-text mt-0 d-block">10-03-2020</span></div>

- {% include links/component-guideline-link.html linktext="Detalje komponent" %} tilføjet.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Skjul/vis indhold med knap er fjernet.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> {% include links/component-guideline-link.html linktext="Cookiemeddelelse" %} opdateret i udseende og HTML.
- Rettet fejl med border i tabel.
{% include links/github-link.html number="96" afternumber=" på Github" %}
- Tilføjet mulighed for styling af {% include links/internal-link.html linktext="links i overskrifter" %}.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> {% include links/component-guideline-link.html linktext="Faneblade" %} er ændret i HTML og JavaScript.
- Ændret aktive farve på undermenupunkt i {% include links/component-guideline-link.html linktext="venstremenu" %}
- Tilføjet retningslinjer for {% include links/component-guideline-link.html linktext="funktionslink" %}, {% include links/component-guideline-link.html linktext="tilbage-link" %} og {% include links/component-guideline-link.html linktext="cookiemeddelelse" %}.
- <strong class="badge badge-info badge-small mr-2">Change</strong> Tilføjet korrekte ARIA attributer på {% include links/component-code-link.html linktext="venstremenuen" %}, mobilmenu og {% include links/component-code-link.html linktext="headermenuen" %}.
- Fikset fejl på {% include links/component-guideline-link.html linktext="responsiv trinindikator" %}.
{% include links/github-link.html number="94" afternumber=" på Github" %}

{:#version-5-3-0 .mb-0}
### Version 5.3.0

<div><span class="small-text mt-0 d-block">16-12-2019</span></div>

- {% include links/component-guideline-link.html linktext="Tilbage link" %} har fået større linje højde.
- Mere padding i toppen af navbar indeholdende funktionslink og overflow menu i header.
- Ændret udseende af {% include links/component-guideline-link.html linktext="cookiemeddelelse komponenten" %}.
- {% include links/internal-link.html linktext="Lister" %} har fået nyt udtryk.
- Ændret farve og tykkelse på aktivt menupunkt i {% include links/component-guideline-link.html linktext="header" %} samt {% include links/component-guideline-link.html linktext="venstremenuen" %}.
- Tilføjet mulighed for {% include links/component-guideline-link.html linktext="hjælpetekst på radioknap" %}.
- Tilpasset fokusramme om {% include links/component-guideline-link.html linktext="funktions link" %}.
- Tilpasset retningslinjer for Skjul/vis med radioknapper.
- Opdateret SVG filer, samt tilføjet link til Figma komponent bibliotek.

{:#version-5-2-0 .mb-0}
### Version 5.2.0

<div><span class="small-text mt-0 d-block">27-11-2019</span></div>

- <strong class="badge badge-info badge-small mr-2">Change</strong> Ændret accordion aria-multiselectable så man i stedet kan bruge klassen accordion-multiselectable
<span class="form-hint mt-0">Ændringen er fortsat bagudkompatibel, men den tidligere implementering anbefales ikke, da det ikke var valid HTML.</span>
- Teksten i {% include links/component-guideline-link.html linktext="cards med samme højde" %} placeres nu korrekt
- Tilføjet mere afstand mellem links i footer
- Overskriftstørrelser på mobil er blevet opdateret
- Tilpasset farve på informationstekst på komponenterne {% include links/component-guideline-link.html linktext="venstremenu med ekstra information" %} og {% include links/component-guideline-link.html linktext="trinindikator med ekstra information" %}
- Tilføjet eksempel på tabel i Datatable
{% include links/github-link.html number="55" beforenumber="Github issue #" beforelink="Efterspurgt i " %}
- Opdateret Eksempel på implementering i Angular

{:#version-5-1-0 .mb-0}
### Version 5.1.0

<div><span class="small-text mt-0 d-block">12-11-2019</span></div>

- {% include links/component-guideline-link.html linktext="Cookiemeddelelse komponent" %} er tilføjet i kernen.
- {% include links/component-guideline-link.html linktext="Tilbage link" %} er tilføjet i kernen.
<span class="form-hint mt-0">Bemærk, at {% include links/component-guideline-link.html linktext="Tilbage link" %} anbefales frem for {% include links/component-guideline-link.html linktext="Tilbage knap" %}.</span>
- Fokuskant tilføjet på #main-content ved fokus fra Skip link.
- {% include links/component-guideline-link.html linktext="Statusbadges" %} er tilføjet i kernen.
- Fejl i overflow menu brugt i header fikset.
{% include links/github-link.html number="75" beforenumber="Github issue #" beforelink="Se mere om fejlen på " %}
- Fikset print af modal fra iPhone.
{% include links/github-link.html number="67" beforenumber="Github issue #" beforelink="Se mere om fejlen på " %}
- Opdateret beskrivelse af implementering af DKFDS under Til udviklere.
<span class="form-hint mt-0">Bemærk, at neutralt tema kun bør benyttes som skabelon til et nyt tema, og ikke som et enkeltstående tema. Læs mere om temahåndtering.</span>

{:#version-5-0-0 .mb-0}
### Version 5.0.0

<div><span class="small-text mt-0 d-block">22-10-2019</span></div>

- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> JavaScript i kernen er skrevet om. Man skal initiere javascript med funktionen `DKFDS.init()` på hver side.
<span class="form-hint mt-0">For mere info, se {% include links/external-link.html linktext="issue #74 på Github" %} eller vores afsnit om implementering af DKFDS til udviklere.</span>
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> JavaScript i DKFDS kernen bliver nu udstillet til brug i projekter.
{% include links/github-link.html number="74" afternumber=" på Github" %}
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> {% include links/component-guideline-link.html linktext="Venstremenuen" %} har fået nyt design.
<span class="form-hint mt-0">HTML er ændret - se korrekt struktur under {% include links/component-guideline-link.html linktext="venstremenu-komponenten" %}.</span>
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> {% include links/component-guideline-link.html linktext="Faneblade" %} er blevet redefineret.
<span class="form-hint mt-0">Hele komponenten er blevet redefineret - se den nye komponent under {% include links/component-guideline-link.html linktext="faneblade" %}.</span>
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Den gamle tooltip (tippy) komponent er blevet flyttet til plugins.
<span class="form-hint mt-0">Bemærk, at komponenten ikke længere er en del af kernen, men at der er kommet en erstatning i kernen.</span>
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Modal-komponenten er blevet flyttet til plugins.
<span class="form-hint mt-0">Bemærk, at komponenten ikke længere er en del af kernen.</span>
- Ny og simpel {% include links/component-guideline-link.html linktext="tooltip komponent" %} er tilføjet til kernen - Komponenten er ikke længere baseret på tredjeparts bibliotek.
- Der er tilføjet events til komponenter. Man sætte eventlisteners på bestemte events - Fx når en accordion åbner og lukker. For mere info, se implementeringsafsnittet under hver {% include links/internal-link.html linktext="komponent" %}. 
- Information om krav til selvbetjeningsløsninger er nu tilføjet til designsystem.dk. 
- Tabellerne følger nu 8point grid

{:#version-4-4-0 .mb-0}
### Version 4.4.0

<div><span class="small-text mt-0 d-block">20-08-2019</span></div>

- <strong class="badge badge-info badge-small mr-2">Change</strong> Tilpasset CSS til print
- Farven på valgt menupunkt i venstremenu er ændret til #1A1A1A
- Ændret udseende på tjekboks og radioknap ved print
- Fikset fejl med border på den sidste række i en tabel
- Fikset fejl med modal ved print
- Tilpasset retningslinjer for ikoner i forhold til tilgængelighed

{:#version-4-3-0 .mb-0}
### Version 4.3.0

<div><span class="small-text mt-0 d-block">04-07-2019</span></div>

- Fjernet farve på small-text mixin.
- Tilpasset positionering af ikon på knapper.
- Fikset fejl i input felter, hvor specialtegn (Å, Ö, Ä etc.) ikke blev vist korrekt.
- Tilføjet eksempel på luk knap i Beskeder.
- <strong class="badge badge-info badge-small mr-2">Change</strong> Tilføjet mulighed for at positionere action knapper i cards i bunden.
- Fikset fejl ved print af eksempelløsninger i Firefox - tilføjet yderligere print CSS.

{:#version-4-2-0 .mb-0}
### Version 4.2.0

<div><span class="small-text mt-0 d-block">20-06-2019</span></div>

- Fjernet margin-top på h1.
- <strong class="badge badge-info badge-small mr-2">Change</strong> Fjernet form-group div fra li i radioknap og tjekboks liste (Løser udfordringen med at JAWS skærmlæseren læser skrivebeskyttet ved hver tjekboks eller radioknap).
- Fikset styling i niveau 4 i sidemenuen på mobil.
- Fikset tilgængelighed på responsiv trinindikator - aria-hidden opdateres nu automatisk alt efter status på komponenten.
- Responsiv tabel er  nu sat til display:block på små skærme således at skærmlæsere ikke tror det er en tom tabel.

{:#version-4-1-1 .mb-0}
### Version 4.1.1

<div><span class="small-text mt-0 d-block">24-05-2019</span></div>

- Fjernet primærfarven på tekst i aktivt menupunkt i header.
- Tilføjet klassen `inline-svg`, som kan bruges på ikoner, der skal fremgå i tekst, således at de matcher teksthøjden.
- Ændret afstand fra label til read-only felt.
- Ændret JavaScript, der håndterer regex maske på dato felt, således at man nu kan bruge copy/paste igen.
    - Fejlhåndtering omkring ikke gyldige karakterer indsat i feltet med copy/paste bør håndteres i projektet selv.
- Tilføjet sektion omkring formularstruktur.

{:#version-4-1-0 .mb-0}
### Version 4.1.0

<div><span class="small-text mt-0 d-block">26-04-2019</span></div>

- <strong class="badge badge-info badge-small mr-2">Change</strong> Fjernet fast højde på tekstområde (textarea) - man kan/bør nu sætte højden med rows attributten.
- Fjernet tekstmarkøren på et read only felt i Internet Explorer.
- Tilføjet eksempler på advarsel, når man forlader siden i eksempelløsningerne.
- Tilføjet afstand af tags, når de fylder flere linjer.
- Fjernet primærfarve på teksten i faneblade ved hover.
- Fikset fokusramme på faneblade.
- Fikset fejl i modal, hvor overskriften blev overlappet af luk knappen.
- <strong class="badge badge-info badge-small mr-2">Change</strong> Log ud skal nu hedde Log af.

{:#version-4-0-1 .mb-0}
### Version 4.0.1

<div><span class="small-text mt-0 d-block">08-04-2019</span></div>

- Opdateret skip link udseende
- Ændret styling, så a-element i solution-header nu kan være et h1-element
- Fikset readonly fejl i Internet Explorer
- Tilpasset footer margin og padding
- Tilføjet print display css klasser (Fx d-print-none)
- Tilføjet logo definition
- Tooltip skriftstørrelse ændret fra 13 til 16px
- Fikset hover farve på icon knap (button-unstyled)

{:#version-4-0-0 .mb-0}
### Version 4.0.0

<div><span class="small-text mt-0 d-block">01-04-2019</span></div>

- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Fjernet højde på cards
- Tilføjet klassen card-align-height, så cards kan have ens højde på samme række.
- Fikset fokus border på faneblade

<div class="alert alert-info" role="alert">
    <div class="alert-body">
        <strong class="alert-heading">Semantisk versionering</strong>
        <p class="alert-text">Fra denne release 4.0.0 og fremover vil FDS gøre brug af semantisk versionering.</p>
    </div>
</div>


{:#version-3-0-3 .mb-0}
### Version 3.0.3

<div><span class="small-text mt-0 d-block">27-03-2019</span></div>

- Fjernet eksempler fra projekt
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Ændret macros, så de er mere dynamiske, så flere projekter kan gøre brug af dem
- Fikset fejl med fokus på overflow menu i Firefox
- Fikset fejl med ol liste i flere niveauer
- Fjernet gammel JavaScript, som var årsag til fejl ved loading af javascript filen
- Ændret HR kant farve
- Ændret kant farve på tertiær knap
- Tilføjet afstand på tags og knapper på lille skærm
- Opdateret footers
- Tilføjet JavaScript der håndterer lukning af overflow menuer, når man åbner en ny

{:#version-3-0-2 .mb-0}
### Version 3.0.2

<div><span class="small-text mt-0 d-block">19-02-2019</span></div>

- Tilføjet info om fiks af Microsoft Edge bug i navigation, hvor bullets blev vist trods styling
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Defineret tilbage-knap
- Tilføjet readonly eksempel i input felter
- Ændret Skjul/Vis eksempel ved brug af radio knap for at løse tilgængelighedsproblemer
- Fikset fejl på dropdown i Internet Explorer, hvor pilen blev vist to gange
- Nederste border i header ændret til `$outer-border`
- Tilføjet klassen .nobullet-list, som kan bruges ved liste af links
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Flyttet Pikaday datovælger plugin til Plugins-projektet
- Tilføjet .break-word klasse til brug i tabeller, hvor man bruger lange filnavne i kolonnerne
- Ændret disabled link farve
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Fjernet $color-link-active farven, da den ikke længere bliver brugt
- Opdateret styling og definition af eksterne links
- Ændret skrifttype tykkelse på søgefelts knappen

{:#version-3-0-1 .mb-0}
### Version 3.0.1

<div><span class="small-text mt-0 d-block">18-01-2019</span></div>
<h4>Smårettelser til CSS og ikoner</h4>

- `small-text` og `small-tag` klasserne fik ændret font-size fra 13px til 14px
- Ændrede level 2 og 3 i venstremenu på mobil
- Rettede ikonerne help og `close-circle`

<h4>Smårettelser til eksempler</h4>

- Typesetting blev delt i to: Linjeafstand og Linjelængde.
- Fejl i Popover-eksemplet blev rettet.
- Neutralt logo til header-eksempler blev opdateret.

{:#version-3-0-0 .mb-0}
### Version 3.0.0

<div><span class="small-text mt-0 d-block">14-01-2019</span></div>

- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Refaktoreret fra 'dkwds' til 'dkfds'
<span class="form-hint mt-0">Alt kode er blevet refaktoreret så den nu benytter forkortelsen {% include links/external-link.html linktext="'dkfds'" %} i stedet for 'dkwds'. </span>
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Bourbon er fjernet
<span class="form-hint mt-0">Biblioteket 'Bourbon' er ikke længere en del af designsystemet. Det vil derfor ikke længere være muligt at benytte sig af deres hjælpeklasser og funktioner. </span>
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Nyt gridsystem
<span class="form-hint mt-0"> USWDS' gamle float-grid (NEAT) og Bootstraps grid er fjernet. I stedet for er USWDS' nye grid inkluderet. Der er lavet tilpasninger af dette grid så det køre på de samme variable og klassenavne som i den forrige version af FDS. Der skal derfor ikke laves nogen tilpasninger for at få dette grid inkluderet.</span>
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Plugins project
<span class="form-hint mt-0">Datatables og SelectWoo er ikke længere en del af komponent-biblioteket. Der er derimod oprettet et nyt projekt (dkfds-plugins) hvor disse nu lever.</span>
- Nye klasser
<span class="form-hint mt-0"> De følgende klasser er blev omdøbt:</span>
    - `input-success` er omdøbt til `form-success`
    - `input-error-message` er omdøbt til  `form-error-message`
- Accordion
<span class="form-hint mt-0">Accordions plus og minus ikon er flyttet til starten af accordion-knappen</span>
- Fokus farve
<span class="form-hint mt-0">Fokus farven er ændret fra den gule farve (#febb30) til en grå farve (#747474). Farven er blevet ændret fordi den gule farve ikke overholder WCAG 2.1. Hvis man ønsker en anden fokus farve kan variablen `$color-focus` overskrives.</span>
- Radioknapper og checkbokse
    - Styling af radio knapper kræver nu denne klasse på selve `input[type=radio]`: "form-radio".
    - Styling af tjekbokse kræver nu denne klasse på selve `input[type=checkbox]`: "form-check".

{:#version-2-1-2 .mb-0}
### Version 2.1.2

<div><span class="small-text mt-0 d-block">16-10-2018</span></div>
<ul>
<li>
  Nye skriftstørrelser til H1-H6
  <ul class="form-hint">
    <li>H1 går fra 36px til 40px.</li>
    <li>H2 går fra 27px til 30px.</li>
    <li>H3 er stadig 24px.</li>
    <li>H4 går fra 22px til 20px;</li>
    <li>H5 går fra 20px til 16px;</li>
    <li>H6 går fra 16px til 13px;</li>
    <li>Display-1 går fra 120px til 80px</li>
    <li>Display-2 går fra 60px til 32px;</li>
  </ul>
  <p class="form-hint mt-0">Hvis du ønsker at beholde det samme visuelle udtryk skal man gå fra h5 til h4.</p>
</li>
<li class="mt-4">
  Ny max-width styling
  <p class="form-hint mt-0">Klassen '.content' er fjernet. Max-width style er nu kodet direkte til p, font-lead etc.</p>
</li>
<li class="mt-4">
  Navigation i bunden af eksempelsiderne:
  <p class="form-hint mt-0">"Breadcrumb" er omdøbt til "page-navigation". HTML ser nu således ud:</p>
  <div class="code-highlight">
    <code>
      &lt;nav class="page-navigation"&gt; <br>
      &nbsp;&nbsp; &lt;a href="#" class="button button-primary"&gt;Næste&lt;/a&gt;<br>
      &nbsp;&nbsp; &lt;a href="#" class="button button-ghost"&gt;Tilbage&lt;/a&gt;<br>
      &lt;/nav&gt;
    </code>
  </div>
</li>
</ul>