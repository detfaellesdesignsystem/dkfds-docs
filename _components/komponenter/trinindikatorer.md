---
permalink: /komponenter/trinindikatorer/
layout: styleguide
type: component
title: Trinindikatorer
category: Komponenter_category
subcategory: Komponenter
description: Tringuides anvendes til struktureret at føre brugeren igennem en kendt sekvens af spørgsmål.
lead: Trinindikatorer markerer trin i guides til brugerne om, hvordan de fx skal tilgå en løsning eller som fører dem igennem en kendt sekvens af spørgsmål.
---

{% include code/preview.html component="tringuide" %}
{% include code/accordion.html component="tringuide" %}
<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
    aria-expanded="false" aria-controls="trin-code-documentation">
    Implementering
  </button>
  <div id="trin-code-documentation" class="accordion-content">
    <section>
        <ul class="content-list">
          <li>For en klikbar trinindikator bruges <code>.sidenav-list</code> klassen på ul elementet.</li>
          <li>For en tvunget trinindikator bruges <code>.sidenav-list-locked</code> klassen på ul elementet.</li>
        </ul>
        <h2 class="h5">Aktivt og overstået trin i trinindikator</h2>
        <ul class="content-list">
          <li>Teksten i det aktive menupunkt bliver styret af primærfarven, som sættes med variablen <code>$color-primary</code></li>
          <li>Det aktive menupunkt skal have klassen <code>.active</code>.</li>
          <li>For at indikere et overstået trin, kan der indsættes et ikon med klassen <code>.sidenav-icon</code>. Dette ikon er sat til højre i trinet.</li>
        </ul>
        <h2 class="h5">Tilføj information i tringuide</h2>
        <ul class="content-list">
          <li>For at tilføje information til et trin bruges klassen <code>.sidenav-information</code>.</li>
        </ul>
        <h2 class="h5">Trinindikatoren kan indlejres i en dropdown. Der er her to valgmuligheder:</h2>
        <ul>
          <li>På alle skærmstørrelser er trinindikatoren indlejret i dropdownen. Dette kræver blot at trinindikatoren er placeret inde i <code>.overflow-menu-inner</code> containeren. Dette er vist i eksemplet "Trinindikator i overflow-menu".</li>
          <li>Hvis man ønsker at få vist trinindikatoren på større skærme, men at den bliver vist i en dropdown på mindre skærme, skal <code>.overflow-menu </code> have klassen <code>.overflow-menu--md-no-responsive</code>. Dette er vist i eksemplet "Trinindikator - responsivt i overflow-menu".</li>
        </ul>
    </section>
  </div>
</div>
<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="trin-documentation">
    Retningslinjer
  </button>
  <div id="trin-documentation" aria-hidden="false" class="accordion-content">
     <article>
        <section>
            <h2 class="h4">Tilgængelighed</h2>
            <p>Tringuides skal kunne aktiveres og håndteres fra tastatur og brugeren skal kunne anvende tab-tasten til navigation.</p>
            <p>Tringuides kan have et højt kognitivt niveau. Før du vælger at anvende en tringuide, bør du teste en prototype med en alternativ løsning for at se, om det overhovedet er nødvendigt med en tringuide. </p>    
        </section>
        <section>
            <h2 class="h4">Brugervenlighed</h2>
            <h3 class="h5">Anvendes til</h3>
            <p>Tringuides anvendes til struktureret at føre brugeren igennem en kendt sekvens af spørgsmål.</p>
            <h3 class="h5">Anvendes ikke til</h3>
            <p>Tringuides skal ikke anvendes som primær eller sekundær navigationselement.</p>
            <h3 class="h5">Vejledning</h3>                
            <ul>
                <li>Forsøg med ændret opsætning af dit indhold, type og antallet af spørgsmål før du vælger en tringuide til din løsning.</li>
                <li>Vælg den tringuide-model, der passer til dine brugeres behov.</li>
                <li>Undgå at lave en horisontal tringuide.</li>
                <li>Anvend trin der virker naturlige og logiske for brugerne</li>
                <li>Gør det synligt hvilket trin brugeren er kommet til.</li>
                <li>Giv hvert trin et nummer</li>
                <li>Det sidste trin bør være "kvittering"</li>
                <li>Tilstræb så få trin som muligt</li>
            </ul>
        </section>
    </article>
  </div>
</div>
