---
permalink: /komponenter/search/
layout: styleguide
type: component
title: Søgefelt
category: Komponenter_category
subcategory: Komponenter
lead: Et søgefelt udstiller brugerne muligheden for brugerne for at søge efter bestemt indhold på siden eller i løsningen.
---

{% include code/preview.html component="search" classes="preview-search-bar" %}
{% include code/accordion.html component="search" %}
<div class="accordion accordion-bordered">
  <button class="button-unstyled accordion-button"
    aria-expanded="false" aria-controls="search-code-documentation">
    Implementering
  </button>
  <div id="search-code-documentation" class="accordion-content">
    <section>
        <h2 class="h4">Søgefelt</h2>
        <p>Du kan styre søgefeltets bredde via input-width- og input-char- se mere under punktet formular elementer og input bredde og validering.</p>
        <p>Du bør som oftest implementere auto-suggest på søgefelter, så brugeren foreslås relevante søge ord/sætninger</p>
    </section>
  </div>
</div>

<div class="accordion accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="search-bar-docs">
    Retningslinjer
  </button>
  <div id="search-bar-docs" aria-hidden="false" class="accordion-content">
        <section>
            <h2 class="h4">Tilgængelighed</h2>
            <ul>
                <li>Søgefeltet skal overholde samme krav til tilgængelighed som andre formularelementer. </li>
                <li>Ordet ”Søg” skal altid fremgå af søgeknappen. Hvis der anvendes et lup-ikon, skal ”søg” eller "search" fremgå i koden, så skærmlæsere kan se funktionen.</li>
                <li>Formularens felt skal have et skjult label af hensyn til skærmlæsere.</li>
            </ul>
        </section>
        <section>
            <h2 class="h4">Brugervenlighed</h2>
            <h3 class="h5">Anvendes til</h3>
            <ul>
                <li>Søgefeltet er en samlet komponent (søgefelt og -knap), der giver brugeren mulighed for at søge efter specifikt indhold, hvis de kender søgeordene eller ikke kan finde indholdet gennem menuer eller anden navigation.</li>
                <li>Søgefeltet giver et alternativ til brugere, der af den ene eller anden årsag ikke kan anvende løsningens navigation.</li>
            </ul>
            <h3 class="h5">Anvendes ikke til</h3>
            <p>På meget små løsninger eller løsninger, der kun består af en enkelt side, bør det ikke være nødvendigt med et søgefelt.</p>
            <h3 class="h5">Vejledning</h3>
            <ul>
                <li>Det er vigtigt for brugerne, at kunne se de indtastede søgeord. En god tommelfingerregel er at søgefeltet er 27 karakterer (27ch) langt som minimum.</li>
                <li>Sørg for at søgefeltet ligner et søgefelt. </li>
                <li>Hvis der anvendes et lup-ikon, skal ”Søg” fremgå i koden, så skærmlæsere kan se funktionen.</li>
                <li>Søgefeltet vises i sin helhed på løsningens hjemmeside og ikke kun som et link.</li>
                <li>Vis fortsat søgefeltet – også på søgeresultatet, der viser søgeordene.</li>
                <li>Brug kun avanceret søgning som valgmulighed. Den primære søgning skal være en standardsøgning for at undgå forvirring omkring dens anvendelse.</li>
                <li>Søgeknappen skal være en submit-knap.</li>
            </ul>
            <h3 class="h5">Links</h3>
            <ul class="nobullet-list">
                <li><a href="https://www.smashingmagazine.com/2009/09/10-useful-usability-findings-and-guidelines/#6-the-ideal-search-box-is-27-characters-wide" class="icon-link">The ideal search box is 27 characters wide<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a></li>
                <li><a href="https://uxplanet.org/design-a-perfect-search-box-b6baaf9599c" class="icon-link">Design a perfect search box<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a></li>
                <li><a href="https://uxplanet.org/best-practices-for-search-results-1bbed9d7a311" class="icon-link">Best practises for search results<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a></li>
                <li><a href="https://www.nngroup.com/articles/magnifying-glass-icon/" class="icon-link">The Magnifying-Glass Icon in Search Design: Pros and Cons<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a></li>
            </ul>
        </section>
  </div>
</div>
