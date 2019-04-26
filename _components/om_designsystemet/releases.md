---
permalink: /omdesignsystemet/releases/
layout: styleguide
title: Release notes
category: Om_designsystemet_category
subcategory: Om designsystemet
description: Release notes for dkfds
subnav:
- text: Version 4.1.0
  href: '#version-410'
- text: Version 4.0.1
  href: '#version-401'
- text: Version 4.0.0
  href: '#version-400'
- text: Version 3.0.3
  href: '#version-303'
- text: Version 3.0.2
  href: '#version-302'
- text: Version 3.0.1
  href: '#version-301'
- text: Version 3.0.0
  href: '#version-300'
- text: Version 2.1.2
  href: '#version-212'
---
<p class="font-lead">Nedenfor vises release notes — en opsummering af bug fixes, nye features og andre opdateringer.</p>
<p>Har du et nyt forslag til en feature eller et bug fix? <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues" class="icon-link">Så må du meget gerne oprette et issue på github<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></p>
<h2 class="h3">Versionering</h2>
<p>Designsystemets måde at versionere på er inspireret af <a href="https://semver.org/" class="icon-link">semantisk versionering<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a>. Versionsnummeret indikerer, hvilken type rettelse, der er tale om.</p>
<p>Versionsnummeret skrives altid x.y.z (fx 2.1.3) og skal læses MAJOR (x), MINOR (y), PATCH (z)</p>
<ul>
    <li>MAJOR: Ændringer i kode og/eller design, der ikke er bagud-kompatible - som fx erstatning eller sletning af komponenter eller ændringer i kode og/eller design, der medfører bagudrettede tilpasninger ved opdatering til den pågældende version.</li>
    <li>MINOR: Tilføjelser, ændringer og ny funktionalitet, der er bagud-kompatible.</li>
    <li>PATCH: bagud-kompatible fejlrettelser (bug fixes).</li>
</ul>
<h3 class="h4">Release proces</h3>
<p>Designsystemet er "levende" og skal holdes á jour, hvorfor langt de fleste bagud-kompatible ændringer og tilføjelser vil ske løbende. Fejlrettelser vil ske hurtigst muligt. Ikke bagud-kompatible ændringer vil samles op og blive releaset med lavere frekvens. </p>

<!--<h3 class="h4">Udvikling og test </h3>
<p>Vi udvikler og tester på en tro kopi af FDS kaldet DKFDSdevelop. Her kan vi rive og flå i kode og design og sikre os at det virker, inden vi opdaterer til en ny version på FDS. Det er også her vi tjekker at komponenterne virker i alle tilstande, er tilgængelige og performer ordentligt.</p>-->

<h2 class="mb-0" id="version-410">Version 4.1.0</h2>
<p class="small-text mt-0">26-04-2019</p>
<ul>
    <li><label class="color-info badge badge-small mr-3">Change</label>Fjernet fast højde på tekstområde (textarea) - man kan/bør nu sætte højden med rows attributten</li>
    <li>Fjernet tekstmarkøren på et read only felt i Internet Explorer</li>
    <li>Tilføjet eksempler på advarsel, når man forlader siden i eksempelløsningerne</li>
    <li>Tilføjet afstand af tags, når de fylder flere linjer</li>
    <li>Fjernet primærfarve på teksten i fanebladmenu ved hover</li>
    <li>Fikset fokusramme på faneblad</li>
    <li>Fikset fejl i modalvindue, hvor overskriften blev overlappet af luk knappen</li>
    <li><label class="color-info badge badge-small mr-3">Change</label>Log ud skal nu hedde Log af</li>
</ul>

<h2 class="mb-0" id="version-401">Version 4.0.1</h2>
<p class="small-text mt-0">08-04-2019</p>
<ul>
    <li>Opdateret skip link udseende</li>
    <li>Ændret styling, så a-element i solution-header nu kan være et h1-element</li>
    <li>Fikset readonly fejl i Internet Explorer</li>
    <li>Tilpasset footer margin og padding</li>
    <li>Tilføjet print display css klasser (Fx d-print-none)</li>
    <li>Tilføjet logo definition</li>
    <li>Tooltip skriftstørrelse ændret fra 13 til 16px</li>
    <li>Fikset hover farve på icon knap (button-unstyled)</li>
</ul>

<h2 class="mb-0" id="version-400">Version 4.0.0</h2>
<p class="small-text mt-0">01-04-2019</p>
<ul>
    <li><label class="color-warning badge badge-small mr-3">Breaking change</label>Fjernet højde på cards</li>
    <li>Tilføjet klassen card-align-height, så cards kan have ens højde på samme række.</li>
    <li>Fikset fokus border på faneblad</li>
</ul>

<div class="alert alert-info" role="alert"
    aria-label="Der vises fremhævet information">
    <div class="alert-body">
        <p class="alert-heading">Semantisk versionering</p>
        <p class="alert-text">Fra denne release 4.0.0 og fremover vil FDS gøre brug af semantisk versionering.</p>
    </div>
</div>

<h2 class="mb-0" id="version-303">Version 3.0.3</h2>
<p class="small-text mt-0">27-03-2019</p>
<ul>
    <li>Fjernet eksempler fra projekt</li>
    <li><label class="color-warning badge badge-small mr-3">Breaking change</label>Ændret macros, så de er mere dynamiske, så flere projekter kan gøre brug af dem</li>
    <li>Fikset fejl med fokus på overflow menu i Firefox</li>
    <li>Fikset fejl med ol liste i flere niveauer</li>
    <li>Fjernet gammel JavaScript, som var årsag til fejl ved loading af javascript filen</li>
    <li>Ændret HR kant farve</li>
    <li>Ændret kant farve på tertiær knap</li>
    <li>Tilføjet afstand på tags og knapper på lille skærm</li>
    <li>Opdateret footers</li>
    <li>Tilføjet JavaScript der håndterer lukning af overflow menuer, når man åbner en ny</li>
</ul>

<h2 class="mb-0" id="version-302">Version 3.0.2</h2>
<p class="small-text mt-0">19-02-2019</p>
<ul>
    <li>Tilføjet info om fiks af Microsoft Edge bug i navigation, hvor bullets blev vist trods styling</li>
    <li><label class="color-warning badge badge-small mr-3">Breaking change</label>Defineret tilbage-knap</li>
    <li>Tilføjet readonly eksempel i input felter</li>
    <li>Ændret Skjul/Vis eksempel ved brug af radio knap for at løse tilgængelighedsproblemer</li>
    <li>Fikset fejl på dropdown-menu i Internet Explorer, hvor pilen blev vist to gange</li>
    <li>Nederste border i header ændret til $outer-border</li>
    <li>Tilføjet klassen .nobullet-list, som kan bruges ved liste af links</li>
    <li><label class="color-warning badge badge-small mr-3">Breaking change</label>Flyttet Pikaday datovælger plugin til Plugins-projektet</li>
    <li>Tilføjet .break-word klasse til brug i tabeller, hvor man bruger lange filnavne i kolonnerne</li>
    <li>Ændret disabled link farve</li>
    <li><label class="color-warning badge badge-small mr-3">Breaking change</label>Fjernet $color-link-active farven, da den ikke længere bliver brugt</li>
    <li>Opdateret styling og definition af eksterne links</li>
    <li>Ændret skrifttype tykkelse på søgefelts knappen</li>
</ul>

  <h2 class="mb-0" id="version-301">Version 3.0.1</h2>
  <p class="small-text mt-0">18-01-2019</p>
  <p><b>Smårettelser til CSS og ikoner</b></p>
  <ul>
    <li>.small-text og .small-tag klasserne fik ændret font-size fra 13px til 14px</li>
    <li>Ændrede level 2 og 3 i sidenavigation på mobil</li>
    <li>Rettede ikonerne help og close-circle</li>
  </ul>
  <p><b>Smårettelser til eksempler</b></p>
  <ul>
    <li>Typesetting blev delt i to: Linjeafstand og Linjelængde</li>
    <li>Fejl i Popover-eksemplet blev rettet</li>
    <li>Neutralt logo til header-eksempler blev opdateret</li>
  </ul>



  <h2 class="mb-0" id="version-300">Version 3.0.0</h2>
  <p class="small-text mt-0">14-01-2019</p>
  <ul>
    <li>
      <b><label class="color-warning badge badge-small mr-3">Breaking change</label>Refaktoreret fra 'dkwds' til 'dkfds'</b>
      <p class="m-0">Alt kode er blevet refaktoreret så den nu benytter forkortelsen <a href="https://www.npmjs.com/package/dkfds">'dkfds'</a> i steden for 'dkwds'. </p>
    </li>
    <li class="mt-4">
      <b><label class="color-warning badge badge-small mr-3">Breaking change</label>Bourbon er fjernet</b>
      <p class="m-0">Biblioteket 'Bourbon' er ikke længere en del af designsystemet. Det vil derfor ikke længere være muligt at benytte sig af deres hjælpeklasser og funktioner. </p>
    </li>
    <li class="mt-4">
      <b><label class="color-warning badge badge-small mr-3">Breaking change</label>Nyt gridsystem</b>
      <p class="m-0"> USDW's gamle float-grid (NEAT) og Bootstraps grid er fjernet. I steden for er USWD's nye grid inkluderet. Der er lavet tilpasninger af dette grid så det køre på de samme variable og klassenavne som i den forrige version af FDS. Der skal derfor ikke laves nogen tilpasninger for at få dette grid inkluderet.</p>
    </li>
    <li class="mt-4">
      <b><label class="color-warning badge badge-small mr-3">Breaking change</label>Plugins project</b>
      <p class="m-0"> Datatables og SelectWoo er ikke længere en del af komponent-biblioteket. Der er derimod oprettet et nyt projekt (dkfds-plugins) hvor disse nu lever.</p>
    </li>
    <li class="mt-4">
      <b>Nye klasser</b>
      <p class="m-0"> De følgende klasser er blev omdøbt:</p>
      <ul>
        <li>.input-success --> .form-success</li>
        <li>.input-error-message --> .form-error-message</li>
      </ul>
    </li>
    <li class="mt-4">
      <b>Accordion</b>
      <p class="m-0">Accordions plus og minus ikon er flyttet til starten af accordion-knappen</p>
    </li>
    <li class="mt-4">
      <b>Focus farve</b>
      <p class="m-0">Focus-farven er ændret fra den gule farve (#febb30) til en grå farve (#747474). Farven er blevet ændret fordi den gule farve ikke overholder WCAG 2.1. Hvis man ønsker en anden focus-farve kan variablen <code>$color-focus</code> overskrives.</p>
    </li>
    <li class="mt-4">
      <b>Radioknapper og checkbokse</b>
      <ul>
        <li>Styling af radiobuttons kræver nu denne klasse på selve input[type=radio]: "form-radio".</li>
        <li> Styling af checkboxe kræver nu denne klasse på selve input[type=checkbox]: "form-check".</li>
      </ul>
    </li>
  </ul>



  <h2 class="mb-0" id="version-212">Version 2.1.2</h2>
  <p class="small-text mt-0">16-10-2018</p>
  <ul>
    <li>
      <b>Nye skriftstørrelser til H1-H6</b>
      <ul>
        <li>H1 går fra 36px til 40px.</li>
        <li>H2 går fra 27px til 30px.</li>
        <li>H3 er stadig 24px.</li>
        <li>H4 går fra 22px til 20px;</li>
        <li>H5 går fra 20px til 16px;</li>
        <li>H6 går fra 16px til 13px;</li>
        <li>Display-1 går fra 120px til 80px</li>
        <li>Display-2 går fra 60px til 32px;</li>
      </ul>
      <p>Hvis du ønsker at beholde det samme visualle udtryk skal man gå fra h5 til h4.</p>
    </li>
    <li class="mt-4">
      <b>Ny max-width styling</b>
      <p class="m-0">Klassen '.content' er fjernet. Max-width stylingen er nu kodet direkte til p, font-lead etc.</p>
    </li>
    <li class="mt-4">
      <b>Sidenavigation i bunden af eksempelsiderne:</b>
      <p class="m-0">"Breadcrumb" er omdøbt til "page-navigation". 	Html'en er nu således ud:</p>
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
