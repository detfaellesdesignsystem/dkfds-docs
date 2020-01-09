---
permalink: /omdesignsystemet/releases/
layout: styleguide
title: Release notes
category: Om_designsystemet_category
subcategory: Om designsystemet
description: Release notes for DKFDS
anchor: true
subnav:
- text: Version 5.3.0
  href: '#version-530'
- text: Version 5.2.0
  href: '#version-520'
- text: Version 5.1.0
  href: '#version-510'
- text: Version 5.0.0
  href: '#version-500'
- text: Version 4.4.0
  href: '#version-440'
- text: Version 4.3.0
  href: '#version-430'
- text: Version 4.2.0
  href: '#version-420'
- text: Version 4.1.1
  href: '#version-411'
- text: Version 4.1.0
  href: '#version-410'
- text: Version 4.0.1
  href: '#version-401'
- text: Tidligere versioner
  href: '#tidligere-versioner'
lead: Nedenfor vises release notes — en opsummering af bug fixes, nye features og andre opdateringer.
---
Har du et nyt forslag til en feature eller et bug fix? <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues" class="icon-link">Så må du meget gerne oprette et issue på Github<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>

<h2 class="h3">Versionering</h2>

Designsystemets måde at versionere på er inspireret af <a href="https://semver.org/" class="icon-link">semantisk versionering<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>. Versionsnummeret indikerer, hvilken type rettelse, der er tale om.

Versionsnummeret skrives altid x.y.z (fx 2.1.3) og skal læses MAJOR (x), MINOR (y), PATCH (z)

- MAJOR: Ændringer i kode og/eller design, der ikke er bagud-kompatible - som fx erstatning eller sletning af komponenter eller ændringer i kode og/eller design, der medfører bagudrettede tilpasninger ved opdatering til den pågældende version.
- MINOR: Tilføjelser, ændringer og ny funktionalitet, der er bagud-kompatible.
- PATCH: bagud-kompatible fejlrettelser (bug fixes).

<h3 class="h4">Release proces</h3>

Designsystemet er "levende" og skal holdes á jour, hvorfor langt de fleste bagud-kompatible ændringer og tilføjelser vil ske løbende. Fejlrettelser vil ske hurtigst muligt. Ikke bagud-kompatible ændringer vil samles op og blive releaset med lavere frekvens.

<h2 class="mb-0" id="version-530">Version 5.3.0</h2>
<p class="small-text mt-0">16-12-2019</p>

- <a href="/komponenter/tilbage-link/">Tilbage link</a> har fået større linje højde.
- Mere padding i toppen af <a href="/komponenter/headers/#header-medium">navbar indeholdende funktionslink og overflow menu i header</a>.
- Ændret udseende af <a href="/komponenter/cookiemeddelelse/">cookiemeddelelse komponenten</a>.
- <a href="/design/typography/#lister">Lister</a> har fået nyt udtryk.
- Ændret farve og tykkelse på aktivt menupunkt i <a href="/komponenter/headers/">header</a> samt <a href="/komponenter/sidenav/">sidenavigationen</a>.
- Tilføjet mulighed for <a href="/komponenter/form-controls/#radioknap">hjælpetekst på radioknap</a>.
- Tilpasset fokusramme om <a href="/komponenter/funktionslink/">funktions link</a>.
- Tilpasset retningslinjer for <a href="/komponenter/collapse/#radioknap-skjul-og-vis-indhold">Skjul/vis med radiobuttons</a>.
- Opdateret <a href="/komigang/tildesignere/">SVG filer</a>, samt tilføjet link til <a href="/komigang/tildesignere/">Figma komponent bibliotek</a>.

<h2 class="mb-0" id="version-520">Version 5.2.0</h2>
<p class="small-text mt-0">27-11-2019</p>

- <label class="color-info badge badge-small mr-3">Change</label>Ændret accordion aria-multiselectable så man i stedet kan bruge klassen accordion-multiselectable
<span class="form-hint mt-0">Ændringen er fortsat bagudkompatibel, men den tidligere implementering anbefales ikke, da det ikke var valid HTML.</span>
- Teksten i <a href="/komponenter/cards/#cards-med-samme-højde">cards med samme højde</a> placeres nu korrekt
- Tilføjet mere afstand mellem links i footer
- Overskriftstørrelser på mobil er blevet opdateret
- Tilpasset farve på informationstekst på komponenterne <a href="/komponenter/sidenav/#sidenavigation-med-information">sidenavigation</a> og <a href="/komponenter/trinindikatorer/#trinindikator-med-information">trinindikator</a>
- Tilføjet eksempel på <a href="/udvidelser/datatables/#expandable-table">tabel i Datatable</a>
<span class="form-hint mt-0">Efterspurgt i <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/55" class="icon-link">Github issue #55<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a></span>
- Opdateret <a href="/komigang/tiludviklere/eksempler-implementering/">Eksempel på implementering i Angular</a>

<h2 class="mb-0" id="version-510">Version 5.1.0</h2>
<p class="small-text mt-0">12-11-2019</p>

- <a href="/komponenter/cookiemeddelelse/">Cookiemeddelelse komponent</a> er tilføjet i kernen.
- <a href="/komponenter/tilbage-link/">Tilbage link</a> er tilføjet i kernen.
<span class="form-hint mt-0">Bemærk, at <a href="/komponenter/tilbage-link/">Tilbage link</a> anbefales frem for <a href="/komponenter/buttons/#tilbage-knap">Tilbage knap</a>.</span>
- Fokuskant tilføjet på #main-content ved fokus fra <a href="/design/typography/#skip-link">Skip link</a>.
- <a href="/komponenter/badges/#statusbadges">Statusbadges</a> er tilføjet i kernen.
- Fejl i overflow menu brugt i header fikset.
<span class="form-hint mt-0">Se mere om fejlen på <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/75" class="icon-link">Github issue #75<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>.</span>
- Fikset print af modal fra iPhone.
<span class="form-hint mt-0">Se mere om fejlen på <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/67" class="icon-link">Github issue #67<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>.</span>
- Opdateret beskrivelse af implementering af DKFDS under <a href="/komigang/tiludviklere/">Til udviklere</a>.
<span class="form-hint mt-0">Bemærk, at neutralt tema kun bør benyttes som skabelon til et nyt tema, og ikke som et enkeltstående tema. Læs mere om <a href="/komigang/tiludviklere/#temahaandtering">temahåndtering</a>.</span>

<h2 class="mb-0" id="version-500">Version 5.0.0</h2>
<p class="small-text mt-0">22-10-2019</p>

- <label class="color-warning badge badge-small mr-3">Breaking change</label>JavaScript i kernen er skrevet om. Man skal initiere javascript med funktionen <code>DKFDS.init()</code> på hver side.
<span class="form-hint mt-0">For mere info, se <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/74" class="icon-link">issue #74 på Github<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a> eller vores afsnit om <a href="/komigang/tiludviklere/">implementering af DKFDS til udviklere</a>.</span>
- <label class="color-warning badge badge-small mr-3">Breaking change</label>JavaScript i DKFDS kernen bliver nu udstillet til brug i projekter.
<span class="form-hint mt-0">For mere info, se <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/74" class="icon-link">issue #74 på Github<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>.</span>
- <label class="color-warning badge badge-small mr-3">Breaking change</label><a href="/komponenter/sidenav/">Sidenavigationen</a> har fået nyt design.
<span class="form-hint mt-0">HTML er ændret - se korrekt struktur under <a href="/komponenter/sidenav/">komponenten</a>.</span>
- <label class="color-warning badge badge-small mr-3">Breaking change</label><a href="/komponenter/tabnav/">Faneblads-komponenten</a> er blevet redefineret.
<span class="form-hint mt-0">Hele komponenten er blevet redefineret - se den nye komponent under <a href="/komponenter/tabnav/">komponenten</a>.</span>
- <label class="color-warning badge badge-small mr-3">Breaking change</label><a href="/udvidelser/tippy/">Den gamle tooltip (tippy) komponent</a> er blevet flyttet til udvidelser.
<span class="form-hint mt-0">Bemærk, at komponenten ikke længere er en del af kernen, men at der er kommet en erstatning i kernen.</span>
- <label class="color-warning badge badge-small mr-3">Breaking change</label><a href="/udvidelser/micromodal/">Modalvinduer-komponenten</a> er blevet flyttet til udvidelser.
<span class="form-hint mt-0">Bemærk, at komponenten ikke længere er en del af kernen.</span>
- Ny og simpel <a href="/komponenter/tooltip/">tooltip komponent</a> er tilføjet til kernen - Komponenten er ikke længere baseret på tredjeparts bibliotek.
- Der er tilføjet events til komponenter. Man sætte eventlisteners på bestemte events - Fx når en accordion åbner og lukker. For mere info, se implementeringsafsnittet under hver <a href="/komponenter/">komponent</a>. 
- Information om <a href="/komigang/krav/">krav til selvbetjeningsløsninger</a> er nu tilføjet til designsystem.dk. 
- Tabellerne følger nu <a href="/komigang/tildesignere/sideopbygning/#baselinegrid">8point grid</a>

<h2 class="mb-0" id="version-440">Version 4.4.0</h2>
<p class="small-text mt-0">20-08-2019</p>

- <label class="color-info badge badge-small mr-3">Change</label>Tilpasset CSS til print
- Farven på valgt menupunkt i sidenavigationen er ændret til #1A1A1A
- Ændret udseende på tjekboks og radioknap ved print
- Fikset fejl med border på den sidste række i en tabel
- Fikset fejl med modal ved print
- Tilpasset retningslinjer for ikoner i forhold til tilgængelighed

<h2 class="mb-0" id="version-430">Version 4.3.0</h2>
<p class="small-text mt-0">04-07-2019</p>

- Fjernet farve på small-text mixin.
- Tilpasset positionering af ikon på knapper.
- Fikset fejl i input felter, hvor specialtegn (Å, Ö, Ä etc.) ikke blev vist korrekt.
- Tilføjet eksempel på luk knap i <a href="/komponenter/beskeder/#beskeder-med-luk-knap">Beskeder</a>.
- <label class="color-info badge badge-small mr-3">Change</label>Tilføjet mulighed for at <a href="/komponenter/cards/#cards-med-samme-højde">positionere action knapper i cards</a> i bunden.
- Fikset fejl ved print af eksempelløsninger i Firefox - tilføjet yderligere print CSS.

<h2 class="mb-0" id="version-420">Version 4.2.0</h2>
<p class="small-text mt-0">20-06-2019</p>

- Fjernet margin-top på h1.
- <label class="color-info badge badge-small mr-3">Change</label>Fjernet form-group div fra li i radioknap og tjekboks liste (Løser udfordringen med at JAWS skærmlæseren læser skrivebeskyttet ved hver tjekboks eller radioknap).
- Fikset styling i niveau 4 i sidemenuen på mobil.
- Fikset tilgængelighed på responsiv tringuide - aria-hidden opdateres nu automatisk alt efter status på komponenten.
- Responsiv tabel er  nu sat til display:block på små skærme således at skærmlæsere ikke tror det er en tom tabel.

<h2 class="mb-0" id="version-411">Version 4.1.1</h2>
<p class="small-text mt-0">24-05-2019</p>

- Fjernet primærfarven på tekst i aktivt menupunkt i header.</li>
- Tilføjet klassen <code>inline-svg</code>, som kan bruges på ikoner, der skal fremgå i tekst, således at de matcher teksthøjden.</li>
- Ændret afstand fra label til read-only felt.</li>
- Ændret JavaScript, der håndterer regex maske på dato felt, således at man nu kan bruge copy/paste igen.
    - Fejlhåndtering omkring ikke gyldige karakterer indsat i feltet med copy/paste bør håndteres i projektet selv.
- Tilføjet sektion omkring <a href="/komponenter/form-controls/#struktur-fieldset">formularstruktur</a>.</li>

<h2 class="mb-0" id="version-410">Version 4.1.0</h2>
<p class="small-text mt-0">26-04-2019</p>

- <label class="color-info badge badge-small mr-3">Change</label>Fjernet fast højde på tekstområde (textarea) - man kan/bør nu sætte højden med rows attributten.
- Fjernet tekstmarkøren på et read only felt i Internet Explorer.
- Tilføjet eksempler på advarsel, når man forlader siden i eksempelløsningerne.
- Tilføjet afstand af tags, når de fylder flere linjer.
- Fjernet primærfarve på teksten i faneblad ved hover.
- Fikset fokusramme på faneblad.
- Fikset fejl i modalvindue, hvor overskriften blev overlappet af luk knappen.
- <label class="color-info badge badge-small mr-3">Change</label>Log ud skal nu hedde Log af.

<h2 class="mb-0" id="version-401">Version 4.0.1</h2>
<p class="small-text mt-0">08-04-2019</p>

- Opdateret skip link udseende
- Ændret styling, så a-element i solution-header nu kan være et h1-element
- Fikset readonly fejl i Internet Explorer
- Tilpasset footer margin og padding
- Tilføjet print display css klasser (Fx d-print-none)
- Tilføjet logo definition
- Tooltip skriftstørrelse ændret fra 13 til 16px
- Fikset hover farve på icon knap (button-unstyled)

<h2 class="mb-0" id="tidligere-versioner">Version 4.0.0</h2>
<p class="small-text mt-0">01-04-2019</p>

- <label class="color-warning badge badge-small mr-3">Breaking change</label>Fjernet højde på cards
- Tilføjet klassen card-align-height, så cards kan have ens højde på samme række.
- Fikset fokus border på faneblad

<div class="alert alert-info" role="alert"
    aria-label="Der vises fremhævet information">
    <div class="alert-body">
        <p class="alert-heading">Semantisk versionering</p>
        <p class="alert-text">Fra denne release 4.0.0 og fremover vil FDS gøre brug af semantisk versionering.</p>
    </div>
</div>

<h2 class="mb-0" id="version-303">Version 3.0.3</h2>
<p class="small-text mt-0">27-03-2019</p>

- Fjernet eksempler fra projekt
- <label class="color-warning badge badge-small mr-3">Breaking change</label>Ændret macros, så de er mere dynamiske, så flere projekter kan gøre brug af dem
- Fikset fejl med fokus på overflow menu i Firefox
- Fikset fejl med ol liste i flere niveauer
- Fjernet gammel JavaScript, som var årsag til fejl ved loading af javascript filen
- Ændret HR kant farve
- Ændret kant farve på tertiær knap
- Tilføjet afstand på tags og knapper på lille skærm
- Opdateret footers
- Tilføjet JavaScript der håndterer lukning af overflow menuer, når man åbner en ny

<h2 class="mb-0" id="version-302">Version 3.0.2</h2>
<p class="small-text mt-0">19-02-2019</p>

- Tilføjet info om fiks af Microsoft Edge bug i navigation, hvor bullets blev vist trods styling
- <label class="color-warning badge badge-small mr-3">Breaking change</label>Defineret tilbage-knap
- Tilføjet readonly eksempel i input felter
- Ændret Skjul/Vis eksempel ved brug af radio knap for at løse tilgængelighedsproblemer
- Fikset fejl på dropdown-menu i Internet Explorer, hvor pilen blev vist to gange
- Nederste border i header ændret til `$outer-border`
- Tilføjet klassen .nobullet-list, som kan bruges ved liste af links
- <label class="color-warning badge badge-small mr-3">Breaking change</label>Flyttet Pikaday datovælger plugin til Plugins-projektet
- Tilføjet .break-word klasse til brug i tabeller, hvor man bruger lange filnavne i kolonnerne
- Ændret disabled link farve
- <label class="color-warning badge badge-small mr-3">Breaking change</label>Fjernet $color-link-active farven, da den ikke længere bliver brugt
- Opdateret styling og definition af eksterne links
- Ændret skrifttype tykkelse på søgefelts knappen

<h2 class="mb-0" id="version-301">Version 3.0.1</h2>
<p class="small-text mt-0">18-01-2019</p>
<h3 class="h4">Smårettelser til CSS og ikoner</h3>

- `small-text` og `small-tag` klasserne fik ændret font-size fra 13px til 14px
- Ændrede level 2 og 3 i sidenavigation på mobil
- Rettede ikonerne help og `close-circle`

<h3 class="h4">Smårettelser til eksempler</h3>

- Typesetting blev delt i to: Linjeafstand og Linjelængde.
- Fejl i Popover-eksemplet blev rettet.
- Neutralt logo til header-eksempler blev opdateret.

<h2 class="mb-0" id="version-300">Version 3.0.0</h2>
<p class="small-text mt-0">14-01-2019</p>

- <label class="color-warning badge badge-small mr-3">Breaking change</label>Refaktoreret fra 'dkwds' til 'dkfds'
<span class="form-hint mt-0">Alt kode er blevet refaktoreret så den nu benytter forkortelsen <a href="https://www.npmjs.com/package/dkfds">'dkfds'</a> i stedet for 'dkwds'. </span>
- <label class="color-warning badge badge-small mr-3">Breaking change</label>Bourbon er fjernet
<span class="form-hint mt-0">Biblioteket 'Bourbon' er ikke længere en del af designsystemet. Det vil derfor ikke længere være muligt at benytte sig af deres hjælpeklasser og funktioner. </span>
- <label class="color-warning badge badge-small mr-3">Breaking change</label>Nyt gridsystem
<span class="form-hint mt-0"> USDW's gamle float-grid (NEAT) og Bootstraps grid er fjernet. I stedet for er USWDs nye grid inkluderet. Der er lavet tilpasninger af dette grid så det køre på de samme variable og klassenavne som i den forrige version af FDS. Der skal derfor ikke laves nogen tilpasninger for at få dette grid inkluderet.</span>
- <label class="color-warning badge badge-small mr-3">Breaking change</label>Plugins project
<span class="form-hint mt-0"> Datatables og SelectWoo er ikke længere en del af komponent-biblioteket. Der er derimod oprettet et nyt projekt (dkfds-plugins) hvor disse nu lever.</span>
- Nye klasser
<span class="form-hint mt-0"> De følgende klasser er blev omdøbt:</span>
    - `input-success` er omdøbt til `form-success`
    - `input-error-message` er omdøbt til  `form-error-message`
- Accordion
<span class="form-hint mt-0">Accordions plus og minus ikon er flyttet til starten af accordion-knappen</span>
- Fokus farve
<span class="form-hint mt-0">Fokus farven er ændret fra den gule farve (#febb30) til en grå farve (#747474). Farven er blevet ændret fordi den gule farve ikke overholder WCAG 2.1. Hvis man ønsker en anden fokus farve kan variablen <code>$color-focus</code> overskrives.</span>
- Radioknapper og checkbokse
    - Styling af radio knapper kræver nu denne klasse på selve `input[type=radio]`: "form-radio".
    - Styling af tjekbokse kræver nu denne klasse på selve `input[type=checkbox]`: "form-check".


<h2 class="mb-0" id="version-212">Version 2.1.2</h2>
<p class="small-text mt-0">16-10-2018</p>
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
