---
permalink: /omdesignsystemet/releases/
layout: styleguide
title: Release notes
category: Om_designsystemet_category
description: Release notes for dkfds
subnav:
- text: Version 3.0.1
  href: '#version-301'
- text: Version 3.0.0
  href: '#version-300'
- text: Version 2.1.2
  href: '#version-212'
---
<p class="font-lead">Nedenfor vises release notes — en opsummering af bug fixes, nye features og andre opdateringer.</p>
<p>Har du et nyt forslag til en feature eller et bug fix? <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues" class="icon-link">Så må du meget gerne oprette et issue på github<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></p>


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
      <b>Refaktoreret fra 'dkwds' til 'dkfds'</b>
      <p class="m-0">Alt kode er blevet refaktoreret så den nu benytter forkortelsen <a href="https://www.npmjs.com/package/dkfds">'dkfds'</a> i steden for 'dkwds'. </p>
    </li>
    <li class="mt-4">
      <b>Bourbon er fjernet</b>
      <p class="m-0">Biblioteket 'Bourbon' er ikke længere en del af designsystemet. Det vil derfor ikke længere være muligt at benytte sig af deres hjælpeklasser og funktioner. </p>
    </li>
    <li class="mt-4">
      <b>Nyt gridsystem</b>
      <p class="m-0"> USDW's gamle float-grid (NEAT) og Bootstraps grid er fjernet. I steden for er USWD's nye grid inkluderet. Der er lavet tilpasninger af dette grid så det køre på de samme variable og klassenavne som i den forrige version af FDS. Der skal derfor ikke laves nogen tilpasninger for at få dette grid inkluderet.</p>
    </li>
    <li class="mt-4">
      <b>Plugins project</b>
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
