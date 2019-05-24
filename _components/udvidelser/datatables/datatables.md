---
permalink: /udvidelser/datatables/
redirect_from:
- /datatables/
layout: styleguide
type: component
title: Avancerede tabeller
category: Udvidelser_category
subcategory: Udvidelser
lead: Avancerede tabeller er et eksternt plugin, hvormed man kan udvide sin tabel med sortering, filtrering etc.
alerts:
- type: warning
  header: Denne komponent er ikke en del af kernen af Det Fælles Designsystem
  content: Datatables er et eksternt bibliotek (<a href="https://datatables.net/" class="icon-link">datatables.net<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a>), som ikke er inkluderet i Det Fælles Designsystem.<br>I <a href="https://github.com/detfaellesdesignsystem/dkfds-plugins" class="icon-link">DKFDS-plugins<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a> projektet kan man finde et tema til Datatables (dkfds-datatables-theme.css). <br>JavaScript i DKFDS-plugins projektet kan bruges som inspiration til, hvordan datatables kan inkluderes og bruges i et projekt.
subnav:
- text: Datatable
  href: '#datatables'
- text: Ajax data
  href: '#ajax-data'
- text: Expandable row
  href: '#expandable-table'
- text: Selectable row
  href: '#selectable-row'
- text: Edit and delete
  href: '#edit-and-delete-row'
---

<h2 class="h4">Tilgængelighed</h2>
<div class="alert alert-warning alert--show-icon" role="alert">
  <div class="alert-body">
      <h3 class="alert-heading">Paginering i Datatables</h3>
      <p class="alert-text">
        Projekter skal selv håndtere ekstra kode, for at gøre paginering i Datatables tilgængeligt.<br> Se under Implementering for mere info.
      </p>
  </div>
</div>
<ul>
    <li>Datatables anvender bl.a. ARIA til at øge tilgængeligheden. Du skal imidlertid være opmærksom på, at en kompliceret tabel med mange rækker, kolonner og muligheder øger det kognitive load og dermed sænker den reelle tilgængelighed.</li>
    <li>Du skal bruger- og performanceteste prototyper med Datatables med entydigt positive resultat ift din målgruppe, hvis du ønsker at anvende den.</li>
</ul>

<h2 class="h4">Brugervenlighed</h2>
<h3 class="h5">Anvendes til</h3>
<p>Avancerede tabeller med behov for at tilknytte udvidet interaktion som fx søgning og editering af felt-indhold.</p>
<h3 class="h5">Anvendes ikke til</h3>
<p>Simple søgeresultater eller oversigter.</p>
<h3 class="h5">Vejledning</h3>                
<ul>
    <li>Datatables er en stor og kompleks funktion, der kun bør anvendes til afgrænsede og klart definerede målgrupper og kun i begrænset omfang. </li>
    <li>Før du implementerer Datatables bør du overveje, om den ekstra funktionalitet er nødvendig eller blot en nice-to-have. </li>
    <li>Overvej om behovet kan løses ved enten en anden præsentation af data eller funktion.</li>
    <li>Datatables er afhængig af jQuery og dermed kræver den et ekstra request og ekstra kode i indlæsningen – dette kan nedsætte funktionens performance.</li>
</ul>

<h2 class="h4">Implementering</h2>
<p>Datatables fejler på tilgængelig, når det kommer til disabled pagineringsknapper. For at gøre paginering tilgængeligt skal der tilføjes attributten <code>aria-disabled="true"</code> på knapper, som er disabled.</p>
<p>Se evt. hvordan vi har gjort det i vores eksempler i JavaScript filen <code>dkfds-docs/assets/js/dkfds-datatables-example.js</code>.</p>

{% include child-sections.html parent='Datatables' %}
