---
permalink: /komponenter/sidenav/
layout: styleguide
type: component
title: Sidenavigation
category: Komponenter_category
subcategory: Komponenter
description: Sidenavigation anvendes til at afspejle et navigations-hierarki i op til tre niveauer i venstre side af siden.
anchor: true
subnav:
- text: Normal sidenavigation
  href: '#normal-sidenavigation'
- text: Sidenavigation med information
  href: '#sidenavigation-med-information'
---
<p>Sidenavigation giver brugerne overblik over struktur og indhold, så de kan finde vej til det indhold, de leder efter. Navigationen kan være med eller uden information: </p>
<ul>
    <li>Normal sidenavigation indeholder kun en beskrivelse i overskrift af hvert niveau i hierarkiet.</li>
    <li>Sidenavigation med information uddyber i en kort tekst, hvilket indhold brugerne kan finde på det enkelte niveau.</li>
</ul>

<h2 class="h3">Retningslinjer</h2>

<section>
  <h3 class="h4">Tilgængelighed</h3>
  <p>Sidenavigationen skal kunne aktiveres og håndteres fra tastatur og brugeren skal kunne anvende tab-tasten til navigation.</p>
</section>
<section>
  <h3 class="h4">Brugervenlighed</h3>
  <h4 class="h5">Anvendes til</h4>
  <ul>
      <li>Sidenavigation anvendes til at afspejle et navigations-hierarki i op til tre niveauer.</li>
      <li>Sidenavigation anvendes til den sekundære navigation/undermenu på en side i en større løsning.</li>
  </ul>
  <h4 class="h5">Anvendes ikke til</h4>
  <ul>
      <li>Sidenavigation bør ikke anvendes på mindre løsninger (mindre end 5 sider).</li>
      <li>Hvis din løsning allerede har topmenu og evt. tilknyttet dropdown menu, bør du overveje at forenkle din navigation før du vælger en sidenavigation.</li>
  </ul>
  <h4 class="h5">Vejledning</h4>
  <ul>
      <li>Marker det aktive punkt (”der hvor brugeren er”) i sidenavigationen.</li>
      <li>Brug korte og præcise ord og begreber. De må eksempelvis gerne være kortere varianter af selve sidernes indholdstitler.</li>
      <li>Undgå at lave for mange punkter.</li>
      <li>Undgå at lave menuen for dyb – forsøg at undgå mere end 1-2 niveauer.</li>
  </ul>
</section>
<div class="accordion-bordered mt-7">
  <button class="button-unstyled accordion-button" aria-expanded="false" aria-controls="sidenav-tech-docs">
    Implementering
  </button>
  <div id="sidenav-tech-docs" aria-hidden="true" class="accordion-content">
    <section>
        <h3 class="h5">Aktive menupunkter</h3>
        <ul>
          <li>Teksten i det aktive menupunkt bliver styret af primærfarven, som sættes med variablen <code>$color-primary</code></li>
          <li>Aktive menupunkter skal have <code>.current</code> klassen.</li>
          <li>Kun det sidste aktive menupunkt skal i stedet have <code>.active</code> klassen.</li>
        </ul>
        <h3 class="h5">Tilføj ikon og information i sidenavigation</h3>
        <ul>
          <li>For at tilføje et ikon til et punkt i sidenavigationen bruges klassen <code>.sidenav-icon-before</code>.</li>
          <li>For at tilføje information til et punkt i sidenavigationen bruges klassen <code>.sidenav-information</code>.</li>
          <li>Ikoner og informationer kan også sammensættes i én sidenavigation</li>
        </ul>
    </section>
  </div>
</div>
{% include child-sections.html parent='Sidenav' %}
