---
permalink: "/faellesskab/releases/"
redirect_from:
- "/omdesignsystemet/releases/"
layout: styleguide
title: Release notes
category: Faellesskab_category
subcategory: Fællesskab
description: Release notes for Det Fælles Designsystem
tags:
- 2.1.2
- 3
- 3.0
- 3.0.0
- 3.0.1
- 3.0.2
- 3.0.3
- 4.0.0
- 4.0
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
- 5.0
- 5
- 5.1.0
- 5.1
- 5.2.0
- 5.2
- 5.3.0
- 5.3
- 6.0.0
- 6.0
- 6
- 6.0.1
- 6.1.0
- 6.1
- 6.1.1
- 7.0.0
- 7.0
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
anchor: true
subnav:
- text: Version 8.0.0
  href: "#version-8-0-0"
- text: Version 7.5.0
  href: "#version-7-5-0"
- text: Version 7.4.0
  href: "#version-7-4-0"
- text: Version 7.3.0
  href: "#version-7-3-0"
- text: Version 7.2.0
  href: "#version-7-2-0"
- text: Version 7.1.1
  href: "#version-7-1-1"
- text: Version 7.1.0
  href: "#version-7-1-0"
- text: Version 7.0.0
  href: "#version-7-0-0"
- text: Version 6.1.1
  href: "#version-6-1-1"
- text: Version 6.1.0
  href: "#version-6-1-0"
- text: Tidligere versioner
  href: "#version-6-0-1"
lead: Nedenfor vises release notes — en opsummering af bug fixes, nye features og
  andre opdateringer.
redirect_from: []
---
Har du et nyt forslag til en feature eller et bug fix? <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues" class="icon-link">Så må du meget gerne oprette et issue på Github<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>

{:.h3}
## Versionering
Designsystemets måde at versionere på er inspireret af <a href="https://semver.org/" class="icon-link">semantisk versionering<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>. Versionsnummeret indikerer, hvilken type rettelse, der er tale om.

Versionsnummeret skrives altid x.y.z (fx 2.1.3) og skal læses MAJOR (x), MINOR (y), PATCH (z)

- MAJOR: Ændringer i kode og/eller design, der ikke er bagud-kompatible - som fx erstatning eller sletning af komponenter eller ændringer i kode og/eller design, der medfører bagudrettede tilpasninger ved opdatering til den pågældende version.
- MINOR: Tilføjelser, ændringer og ny funktionalitet, der er bagud-kompatible.
- PATCH: bagud-kompatible fejlrettelser (bug fixes).

{:.h4}
### Release proces

Designsystemet er "levende" og skal holdes á jour, hvorfor langt de fleste bagud-kompatible ændringer og tilføjelser vil ske løbende. Fejlrettelser vil ske hurtigst muligt. Ikke bagud-kompatible ændringer vil samles op og blive releaset med lavere frekvens.

{:.h3}
## Tidligere versioner af dokumentationen

Har du brug for at se en version af dokumentationen på designsystem.dk, som stemmer overens med en tidligere release, <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues" class="icon-link">så er du velkommen til at oprette en sag på Github<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a> eller skrive til FDS teamet på <a href="mailto:fds@erst.dk">FDS@erst.dk</a>.

{:#version-8-0-0 .mb-0}
## Version 8.0.0
<div><span class="small-text mt-0 d-block">xx-xx-2021</span></div>

- Taget højde for alignment af lange trinnavne i <a href="/komponenter/trinindikatorer/">trinindikator</a>
- Tilpasset afstande ved <a href="/komponenter/tjekboks/#skjult-indhold-collapse">tjekboks</a> og <a href="/komponenter/radioknap/#skjult-indhold-collapse">radioknap med skjult indhold</a>
- Javascript tilføjet til <a href="/komponenter/fejlopsummering/">fejlopsummeringskomponenten</a> så links sætter korrekt fokus i felter i Safari.
- <a href="/kode/implementering/#javascript">`DKFDS.init()` udvidet med scope json parameter, så man kan køre `DKFDS.init()` mere målrettet på siden</a>.
- Tilføjet mulighed for <a href="/kode/grid/#rækker-med-border">border på rækkerne i et grid</a> til brug som erstatning for tabel, når der ingen horisontal header er.
- Fikset fejl med placering af årstal i <a href="/komponenter/datovaelger/">datovælger</a> i mobilvisning.
- Rettet fejl i <a href="/komponenter/datovaelger/">datovælgeren</a> der gjorde, at den første dag i måneden ikke blev vist, når den var en søndag.
- Tillader nu dato i <a href="/komponenter/datovaelger/">datovælgeren</a> fra start.
- Ændret <a href="/design/ikoner/ikoner-og-deres-betydning/?s=slet">slet ikonet</a>, da det gamle ikon ikke fungerede i brugertest.
- Fikset fejl med placering af <a href="/komponenter/trinindikatorer/#ekstra-information">ekstra information i sidenavigation</a>.

{:#version-7-5-0 .mb-0}
## Version 7.5.0

<div><span class="small-text mt-0 d-block">28-09-2021</span></div>

- <a href="/komponenter/tables/#valgbare-rækker">Valgbare rækker i tabel</a>
- <a href="/komponenter/felter/#prefix-og-suffix">Prefix og suffix på felter</a>
- Småtilpasninger i designet på <a href="/komponenter/modal/">modalvinduer</a>
- Opdateret design på <a href="/komponenter/datovaelger/">datovælger</a>
- Tilføjet 72px i bunden af <a href="/komponenter/footers/">footer</a>
- Tilføjet styling og retningslinjer for <a href="/komponenter/tables/#sortering-i-tabeller">sortering i tabeller</a>
- Tilføjet eksempel og retningslinjer på <a href="/komponenter/tables/#søgning-i-tabeller">søgning i tabeller</a>
- Tilføjet en tykkere border i bunden af <a href="/komponenter/knapper/">knapper</a>
- Opdateret <a href="/komponenter/felter/#obligatoriske-og-frivillige-felter">retningslinjer for obligatoriske og frivillige felter</a>
- Tilføjet <a href="/design/ikoner/ikoner-og-deres-betydning/?s=sorter">ikoner til sortering i tabel</a>
- Tilføjet variant til <a href="/komponenter/overflowmenu/#sortering">overflow menu til brug ved sortering</a>
- Ændret ikon i <a href="/komponenter/detaljer/">detalje komponent</a>

{:#version-7-4-0 .mb-0}
## Version 7.4.0

<div><span class="small-text mt-0 d-block">02-06-2021</span></div>

- Ændringer i <a href="/komponenter/tooltip/">tooltip komponenten</a> - der er tilføjet delay og pil på tooltip
- Links får nu automatisk sort farve i <a href="/komponenter/beskeder/">beskeder</a>
- Ny komponent: <a href="/komponenter/toggle/">Toggle switch komponent</a>
- Tilføjet status tekst i forbindelse med <a href="/komponenter/spinner/">spinner komponenten</a>

{:#version-7-3-0 .mb-0}
## Version 7.3.0

<div><span class="small-text mt-0 d-block">23-04-2021</span></div>

- <a href="/design/ikoner/ikoner-og-deres-betydning/">Ikontaksonomi</a>
- Ny komponent: <a href="/komponenter/notifikation/">Notifikation (Toast) komponent</a>
- Fjernet unødvendige kald til fontfiler
- Timing issue på datovælger - sæt ikke knappen, hvis den allerede eksisterer
- Generel oprydning i dependencies
<span class="form-hint mt-0">For mere info, se <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/130" class="icon-link">issue #130 på Github<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>.</span>
- Håndtering af situation: Escape funktion på <a href="/komponenter/overflowmenu/">overflow menu</a> og <a href="/komponenter/modal/">modalvinduer</a> kolliderer og lukker begge, når en overflow er inde i en modal
<span class="form-hint mt-0">For mere info, se <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/125" class="icon-link">issue #125 på Github<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>.</span>
- <a href="/design/borders/#streger">Facit streger</a>
- Udvidelse af breakpoint for <a href="/kode/komponenter/tables/#responsiv">responsiv tabel</a>
<span class="form-hint mt-0">For mere info, se <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/45" class="icon-link">issue #45 på Github<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>.</span>

{:#version-7-2-0 .mb-0}
## Version 7.2.0

<div><span class="small-text mt-0 d-block">11-02-2021</span></div>

- Ændret font i drop down for at fikse bug i firefox
<span class="form-hint mt-0">For mere info, se <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/102" class="icon-link">issue #102 på Github<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>.</span>
- <a href="/komponenter/datovaelger/">Ny komponent: Datovælger</a>
- Fiks fejl, hvor ol liste bliver vist med bullets i <a href="/komponenter/accordions/">accordions</a>
<span class="form-hint mt-0">For mere info, se <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/120" class="icon-link">issue #120 på Github<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>.</span>
- Tilføjet brugervenlige JS fejl, når en komponent ikke er tilføjet korrekt
- Opdateret <a href="/design/typografi/">typografi</a>
- Tilføjet styling af <a href="/design/typografi/tekst/#billedtekst">billedtekst (figcaption)</a>
- <a href="/komponenter/accordions/#åbn-luk-alle">Åbn/luk alle accordions function</a>
- <a href="/komponenter/accordions/">Accordion</a> knapper kan nu være i en overskrift
<span class="form-hint mt-0">For mere info, se <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/88" class="icon-link">issue #88 på Github<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>.</span>
- Padding fikset på extracompact tabeller
<span class="form-hint mt-0">For mere info, se <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/113" class="icon-link">issue #113 på Github<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>.</span>

{:#version-7-1-1 .mb-0}
## Version 7.1.1

<div><span class="small-text mt-0 d-block">28-10-2020</span></div>

- Fikset fejl, hvor border ved aktivt menupunkt i <a href="/komponenter/headers/">header</a> hopper ved hover.
<span class="form-hint mt-0">For mere info, se <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/118" class="icon-link">issue #118 på Github<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>.</span>
- Fikset fejl i Internet Explorer, hvor <a href="/komponenter/felter/#feltbredde">feltbredde i tekstfelter</a> er defineret ved antal karakterer bliver ignoreret.
- Luk <a href="/komponenter/overflowmenu/">overflow menu</a> i <a href="/komponenter/headers/">header</a> ved klik uden for menuen.
- Tilføjet ARIA attributter i <a href="/komponenter/trinindikatorer/">trinindikator</a> for bedre tilgængelighed

{:#version-7-1-0 .mb-0}
## Version 7.1.0

- Ny komponent: <a href="/komponenter/sprogvaegler/">Sprogvælger</a>

{:#version-7-0-0 .mb-0}
## Version 7.0.0

<div><span class="small-text mt-0 d-block">18-08-2020</span></div>

- <label class="badge badge-warning badge-small mr-3">Breaking change</label>Opdateret fonten IBM Plex Sans til version 5.0.0
<span class="form-hint mt-0">Hvis man preloader fonten - hvilket anbefales - så bør man tjekke om stien til fonten skal ændres, da mappestrukturen under fonts er ændret i dkfds</span>
- <label class=" badge badge-small mr-3">Breaking change</label>Ændret attributter på <a href="/komponenter/tjekboks/#skjult-indhold-collapse">tjekboks med collapse funktion</a>, så HTML nu er valid.
- Tilføjet ny <a href="/komponenter/modal/">modal komponent</a>
- Fikset fejl med fokus i header i Firefox
- Tilføjet maks. bredde på tooltip
- Fjernet dokumentation for brug af dkfds-plugins, da det fremover ikke vil blive vedligeholdt
<span class="form-hint mt-0">Se mere under <a href="/kode/plugins/">Plugins i Kode sektionen</a></span>
- Fikset fejl, hvor valgt radioknap ikke blev vist ved print i Internet Explorer og Edge
<span class="form-hint mt-0">For mere info, se <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/112" class="icon-link">issue #112 på Github<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>.</span>

{:#version-6-1-1 .mb-0}
## Version 6.1.1

<div><span class="small-text mt-0 d-block">19-05-2020</span></div>

- Ændret lille knap til normal knap i standard header grundet usability issues i mobilvisning

{:#version-6-1-0 .mb-0}
## Version 6.1.0

<div><span class="small-text mt-0 d-block">14-05-2020</span></div>

- Ny komponent: <a href="/komponenter/broedkrumme/">Brødkrumme</a>
- Mulighed for en mere kompakt <a href="/komponenter/headers/">header</a> med brug af en <a href="/komponenter/knapper/#lille-knap">lille knap</a>
- Linjehøjden for <a href="/design/typografi/tekst/">lille brødtekst</a> er ændret til 20px
- Tilføjet dokumentation og eksempler på <a href="/komponenter/fejlmeddelelser/">fejlmeddelelser</a> og <a href="/komponenter/fejlopsummering/">fejlopsummeringer</a>.
- <a href="/komponenter/sidenav/">Tilpasset alignment på sidenavigation</a>

{:#version-6-0-1 .mb-0}
## Version 6.0.1

<div><span class="small-text mt-0 d-block">19-03-2020</span></div>

- Fjernet inkludering af IBM Plex Sans definitionen i dkfds-tippy-theme.standalone.css.
<span class="form-hint mt-0">For mere info, se <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/104" class="icon-link">issue #104 på Github<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>.</span>
- Understøttelse af Tippy.js v6.1.0
<span class="form-hint mt-0">For mere info, se <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/105" class="icon-link">issue #105 på Github<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>.</span>
- Tilpasset CSS til faneblad, så der ikke længere kommer fejl ved import af dkfds scss i angular.

{:#version-6-0-0 .mb-0}
## Version 6.0.0

<div><span class="small-text mt-0 d-block">10-03-2020</span></div>

- <a href="/komponenter/detaljer/">Detalje komponent</a> tilføjet.
- <label class="badge badge-warning badge-small mr-3">Breaking change</label>Skjul/vis indhold med knap er fjernet.
- <label class="badge badge-warning badge-small mr-3">Breaking change</label><a href="/komponenter/cookiemeddelelse/">Cookiemeddelelse</a> opdateret i udseende og HTML.
- Rettet fejl med border i tabel.
<span class="form-hint mt-0">For mere info, se <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/96" class="icon-link">issue #96 på Github<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>.</span>
- Tilføjet mulighed for styling af <a href="/design/typografi/overskrifter/#overskrift-som-link">links i overskrifter</a>.
- <label class="badge badge-warning badge-small mr-3">Breaking change</label><a href="/komponenter/faneblad/" title="Læs mere om faneblads-komponenten">Fanebladskomponenten</a> er ændret i HTML og JavaScript.
- Ændret aktive farve på undermenupunkt i <a href="/komponenter/sidenav/">sidenavigation</a>
- Tilføjet retningslinjer for <a href="/komponenter/funktionslink/">funktionslink</a>, <a href="/komponenter/tilbage-link/">tilbage-link</a> og <a href="/komponenter/cookiemeddelelse/">cookiemeddelelse</a>.
- <label class="badge badge-info badge-small mr-3">Change</label>Tilføjet korrekte ARIA attributer på <a href="/kode/komponenter/sidenav/" title="Se koden til sidenavigationen">sidenavigationen</a>, <a href="/kode/komponenter/headers/" title="Se koden til mobilmenu og headermenu">mobilmenu og headermenuen</a>.
- Fikset fejl på <a href="/komponenter/trinindikatorer/#responsiv">responsiv trinindikator</a>.
<span class="form-hint mt-0">For mere info, se <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/94" class="icon-link">issue #94 på Github<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>.</span>

{:#version-5-3-0 .mb-0}
## Version 5.3.0

<div><span class="small-text mt-0 d-block">16-12-2019</span></div>

- <a href="/komponenter/tilbage-link/">Tilbage link</a> har fået større linje højde.
- Mere padding i toppen af <a href="/komponenter/headers/#header-medium">navbar indeholdende funktionslink og overflow menu i header</a>.
- Ændret udseende af <a href="/komponenter/cookiemeddelelse/">cookiemeddelelse komponenten</a>.
- <a href="/design/typografi/lister/">Lister</a> har fået nyt udtryk.
- Ændret farve og tykkelse på aktivt menupunkt i <a href="/komponenter/headers/">header</a> samt <a href="/komponenter/sidenav/">sidenavigationen</a>.
- Tilføjet mulighed for <a href="/komponenter/form-controls/#radioknap">hjælpetekst på radioknap</a>.
- Tilpasset fokusramme om <a href="/komponenter/funktionslink/">funktions link</a>.
- Tilpasset retningslinjer for <a href="/komponenter/collapse/#radioknap-skjul-og-vis-indhold">Skjul/vis med radiobuttons</a>.
- Opdateret <a href="/komigang/tildesignere/">SVG filer</a>, samt tilføjet link til <a href="/komigang/tildesignere/">Figma komponent bibliotek</a>.

{:#version-5-2-0 .mb-0}
## Version 5.2.0

<div><span class="small-text mt-0 d-block">27-11-2019</span></div>

- <label class="badge badge-info badge-small mr-3">Change</label>Ændret accordion aria-multiselectable så man i stedet kan bruge klassen accordion-multiselectable
<span class="form-hint mt-0">Ændringen er fortsat bagudkompatibel, men den tidligere implementering anbefales ikke, da det ikke var valid HTML.</span>
- Teksten i <a href="/komponenter/cards/#cards-med-samme-højde">cards med samme højde</a> placeres nu korrekt
- Tilføjet mere afstand mellem links i footer
- Overskriftstørrelser på mobil er blevet opdateret
- Tilpasset farve på informationstekst på komponenterne <a href="/komponenter/sidenav/#ekstra-information">sidenavigation med ekstra information</a> og <a href="/komponenter/trinindikatorer/#ekstra-information">trinindikator med ekstra information</a>
- Tilføjet eksempel på tabel i Datatable
<span class="form-hint mt-0">Efterspurgt i <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/55" class="icon-link">Github issue #55<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a></span>
- Opdateret <a href="/kode/eksempler-implementering/">Eksempel på implementering i Angular</a>

{:#version-5-1-0 .mb-0}
## Version 5.1.0

<div><span class="small-text mt-0 d-block">12-11-2019</span></div>

- <a href="/komponenter/cookiemeddelelse/">Cookiemeddelelse komponent</a> er tilføjet i kernen.
- <a href="/komponenter/tilbage-link/">Tilbage link</a> er tilføjet i kernen.
<span class="form-hint mt-0">Bemærk, at <a href="/komponenter/tilbage-link/">Tilbage link</a> anbefales frem for <a href="/komponenter/buttons/#tilbage-knap">Tilbage knap</a>.</span>
- Fokuskant tilføjet på #main-content ved fokus fra <a href="/komponenter/skip-link/">Skip link</a>.
- <a href="/komponenter/badges/#statusbadges">Statusbadges</a> er tilføjet i kernen.
- Fejl i overflow menu brugt i header fikset.
<span class="form-hint mt-0">Se mere om fejlen på <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/75" class="icon-link">Github issue #75<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>.</span>
- Fikset print af modal fra iPhone.
<span class="form-hint mt-0">Se mere om fejlen på <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/67" class="icon-link">Github issue #67<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>.</span>
- Opdateret beskrivelse af implementering af DKFDS under <a href="/kode/implementering/">Til udviklere</a>.
<span class="form-hint mt-0">Bemærk, at neutralt tema kun bør benyttes som skabelon til et nyt tema, og ikke som et enkeltstående tema. Læs mere om <a href="/kode/implementering/#temahaandtering">temahåndtering</a>.</span>

{:#version-5-0-0 .mb-0}
## Version 5.0.0

<div><span class="small-text mt-0 d-block">22-10-2019</span></div>

- <label class="badge badge-warning badge-small mr-3">Breaking change</label>JavaScript i kernen er skrevet om. Man skal initiere javascript med funktionen `DKFDS.init()` på hver side.
<span class="form-hint mt-0">For mere info, se <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/74" class="icon-link">issue #74 på Github<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a> eller vores afsnit om <a href="/kode/implementering/">implementering af DKFDS til udviklere</a>.</span>
- <label class="badge badge-warning badge-small mr-3">Breaking change</label>JavaScript i DKFDS kernen bliver nu udstillet til brug i projekter.
<span class="form-hint mt-0">For mere info, se <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/74" class="icon-link">issue #74 på Github<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>.</span>
- <label class="badge badge-warning badge-small mr-3">Breaking change</label><a href="/komponenter/sidenav/">Sidenavigationen</a> har fået nyt design.
<span class="form-hint mt-0">HTML er ændret - se korrekt struktur under <a href="/komponenter/sidenav/">sidenavigations-komponenten</a>.</span>
- <label class="badge badge-warning badge-small mr-3">Breaking change</label><a href="/komponenter/tabnav/">Faneblads-komponenten</a> er blevet redefineret.
<span class="form-hint mt-0">Hele komponenten er blevet redefineret - se den nye komponent under <a href="/komponenter/tabnav/">faneblads-komponenten</a>.</span>
- <label class="badge badge-warning badge-small mr-3">Breaking change</label>Den gamle tooltip (tippy) komponent er blevet flyttet til plugins.
<span class="form-hint mt-0">Bemærk, at komponenten ikke længere er en del af kernen, men at der er kommet en erstatning i kernen.</span>
- <label class="badge badge-warning badge-small mr-3">Breaking change</label>Modalvinduer-komponenten er blevet flyttet til plugins.
<span class="form-hint mt-0">Bemærk, at komponenten ikke længere er en del af kernen.</span>
- Ny og simpel <a href="/komponenter/tooltip/">tooltip komponent</a> er tilføjet til kernen - Komponenten er ikke længere baseret på tredjeparts bibliotek.
- Der er tilføjet events til komponenter. Man sætte eventlisteners på bestemte events - Fx når en accordion åbner og lukker. For mere info, se implementeringsafsnittet under hver <a href="/komponenter/">komponent</a>. 
- Information om <a href="/krav/">krav til selvbetjeningsløsninger</a> er nu tilføjet til designsystem.dk. 
- Tabellerne følger nu <a href="/komigang/regler-principper-layout/#baseline-grid">8point grid</a>

{:#version-4-4-0 .mb-0}
## Version 4.4.0

<div><span class="small-text mt-0 d-block">20-08-2019</span></div>

- <label class="badge badge-info badge-small mr-3">Change</label>Tilpasset CSS til print
- Farven på valgt menupunkt i sidenavigationen er ændret til #1A1A1A
- Ændret udseende på tjekboks og radioknap ved print
- Fikset fejl med border på den sidste række i en tabel
- Fikset fejl med modal ved print
- Tilpasset retningslinjer for ikoner i forhold til tilgængelighed

{:#version-4-3-0 .mb-0}
## Version 4.3.0

<div><span class="small-text mt-0 d-block">04-07-2019</span></div>

- Fjernet farve på small-text mixin.
- Tilpasset positionering af ikon på knapper.
- Fikset fejl i input felter, hvor specialtegn (Å, Ö, Ä etc.) ikke blev vist korrekt.
- Tilføjet eksempel på luk knap i <a href="/komponenter/beskeder/#beskeder-med-luk-knap">Beskeder</a>.
- <label class="badge badge-info badge-small mr-3">Change</label>Tilføjet mulighed for at <a href="/komponenter/cards/#cards-med-samme-højde">positionere action knapper i cards</a> i bunden.
- Fikset fejl ved print af eksempelløsninger i Firefox - tilføjet yderligere print CSS.

{:#version-4-2-0 .mb-0}
## Version 4.2.0

<div><span class="small-text mt-0 d-block">20-06-2019</span></div>

- Fjernet margin-top på h1.
- <label class="badge badge-info badge-small mr-3">Change</label>Fjernet form-group div fra li i radioknap og tjekboks liste (Løser udfordringen med at JAWS skærmlæseren læser skrivebeskyttet ved hver tjekboks eller radioknap).
- Fikset styling i niveau 4 i sidemenuen på mobil.
- Fikset tilgængelighed på responsiv tringuide - aria-hidden opdateres nu automatisk alt efter status på komponenten.
- Responsiv tabel er  nu sat til display:block på små skærme således at skærmlæsere ikke tror det er en tom tabel.

{:#version-4-1-1 .mb-0}
## Version 4.1.1

<div><span class="small-text mt-0 d-block">24-05-2019</span></div>

- Fjernet primærfarven på tekst i aktivt menupunkt i header.
- Tilføjet klassen `inline-svg`, som kan bruges på ikoner, der skal fremgå i tekst, således at de matcher teksthøjden.
- Ændret afstand fra label til read-only felt.
- Ændret JavaScript, der håndterer regex maske på dato felt, således at man nu kan bruge copy/paste igen.
    - Fejlhåndtering omkring ikke gyldige karakterer indsat i feltet med copy/paste bør håndteres i projektet selv.
- Tilføjet sektion omkring <a href="/komponenter/form-controls/#struktur-fieldset">formularstruktur</a>.

{:#version-4-1-0 .mb-0}
## Version 4.1.0

<div><span class="small-text mt-0 d-block">26-04-2019</span></div>

- <span class="badge badge-info badge-small mr-3">Change</span>Fjernet fast højde på tekstområde (textarea) - man kan/bør nu sætte højden med rows attributten.
- Fjernet tekstmarkøren på et read only felt i Internet Explorer.
- Tilføjet eksempler på advarsel, når man forlader siden i eksempelløsningerne.
- Tilføjet afstand af tags, når de fylder flere linjer.
- Fjernet primærfarve på teksten i faneblad ved hover.
- Fikset fokusramme på faneblad.
- Fikset fejl i modalvindue, hvor overskriften blev overlappet af luk knappen.
- <span class="badge badge-info badge-small mr-3">Change</span>Log ud skal nu hedde Log af.

{:#version-4-0-1 .mb-0}
## Version 4.0.1

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
## Version 4.0.0

<div><span class="small-text mt-0 d-block">01-04-2019</span></div>

- <label class="badge badge-warning badge-small mr-3">Breaking change</label>Fjernet højde på cards
- Tilføjet klassen card-align-height, så cards kan have ens højde på samme række.
- Fikset fokus border på faneblad

<div class="alert alert-info" role="alert"
    aria-label="Der vises fremhævet information">
    <div class="alert-body">
        <p class="alert-heading">Semantisk versionering</p>
        <p class="alert-text">Fra denne release 4.0.0 og fremover vil FDS gøre brug af semantisk versionering.</p>
    </div>
</div>


{:#version-3-0-3 .mb-0}
## Version 3.0.3

<div><span class="small-text mt-0 d-block">27-03-2019</span></div>

- Fjernet eksempler fra projekt
- <label class="badge badge-warning badge-small mr-3">Breaking change</label>Ændret macros, så de er mere dynamiske, så flere projekter kan gøre brug af dem
- Fikset fejl med fokus på overflow menu i Firefox
- Fikset fejl med ol liste i flere niveauer
- Fjernet gammel JavaScript, som var årsag til fejl ved loading af javascript filen
- Ændret HR kant farve
- Ændret kant farve på tertiær knap
- Tilføjet afstand på tags og knapper på lille skærm
- Opdateret footers
- Tilføjet JavaScript der håndterer lukning af overflow menuer, når man åbner en ny

{:#version-3-0-2 .mb-0}
## Version 3.0.2

<div><span class="small-text mt-0 d-block">19-02-2019</span></div>

- Tilføjet info om fiks af Microsoft Edge bug i navigation, hvor bullets blev vist trods styling
- <label class="badge badge-warning badge-small mr-3">Breaking change</label>Defineret tilbage-knap
- Tilføjet readonly eksempel i input felter
- Ændret Skjul/Vis eksempel ved brug af radio knap for at løse tilgængelighedsproblemer
- Fikset fejl på dropdown-menu i Internet Explorer, hvor pilen blev vist to gange
- Nederste border i header ændret til `$outer-border`
- Tilføjet klassen .nobullet-list, som kan bruges ved liste af links
- <label class="badge badge-warning badge-small mr-3">Breaking change</label>Flyttet Pikaday datovælger plugin til Plugins-projektet
- Tilføjet .break-word klasse til brug i tabeller, hvor man bruger lange filnavne i kolonnerne
- Ændret disabled link farve
- <label class="badge badge-warning badge-small mr-3">Breaking change</label>Fjernet $color-link-active farven, da den ikke længere bliver brugt
- Opdateret styling og definition af eksterne links
- Ændret skrifttype tykkelse på søgefelts knappen

{:#version-3-0-1 .mb-0}
## Version 3.0.1

<div><span class="small-text mt-0 d-block">18-01-2019</span></div>
<h3 class="h4">Smårettelser til CSS og ikoner</h3>

- `small-text` og `small-tag` klasserne fik ændret font-size fra 13px til 14px
- Ændrede level 2 og 3 i sidenavigation på mobil
- Rettede ikonerne help og `close-circle`

<h3 class="h4">Smårettelser til eksempler</h3>

- Typesetting blev delt i to: Linjeafstand og Linjelængde.
- Fejl i Popover-eksemplet blev rettet.
- Neutralt logo til header-eksempler blev opdateret.

{:#version-3-0-0 .mb-0}
## Version 3.0.0

<div><span class="small-text mt-0 d-block">14-01-2019</span></div>

- <label class="badge badge-warning badge-small mr-3">Breaking change</label>Refaktoreret fra 'dkwds' til 'dkfds'
<span class="form-hint mt-0">Alt kode er blevet refaktoreret så den nu benytter forkortelsen <a href="https://www.npmjs.com/package/dkfds">'dkfds'</a> i stedet for 'dkwds'. </span>
- <label class="badge badge-warning badge-small mr-3">Breaking change</label>Bourbon er fjernet
<span class="form-hint mt-0">Biblioteket 'Bourbon' er ikke længere en del af designsystemet. Det vil derfor ikke længere være muligt at benytte sig af deres hjælpeklasser og funktioner. </span>
- <label class="badge badge-warning badge-small mr-3">Breaking change</label>Nyt gridsystem
<span class="form-hint mt-0"> USDW's gamle float-grid (NEAT) og Bootstraps grid er fjernet. I stedet for er USWDs nye grid inkluderet. Der er lavet tilpasninger af dette grid så det køre på de samme variable og klassenavne som i den forrige version af FDS. Der skal derfor ikke laves nogen tilpasninger for at få dette grid inkluderet.</span>
- <label class="badge badge-warning badge-small mr-3">Breaking change</label>Plugins project
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
## Version 2.1.2

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
  Sidenavigation i bunden af eksempelsiderne:
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





