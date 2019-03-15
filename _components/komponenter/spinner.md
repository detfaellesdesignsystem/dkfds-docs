---
permalink: /komponenter/spinner/
layout: styleguide
type: element
title: Spinner
category: Komponenter_category
subcategory: Komponenter
lead: "En spinner er et visuelt aktivt og synligt signal til brugeren om, at indlæsningen af en side eller delfunktion er forsinket."
---

{% include code/preview.html component="spinner" %}
{% include code/accordion.html component="spinner" %}
<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="code-spinner-docs">
    Implementering
  </button>
  <div id="code-spinner-docs" aria-hidden="false" class="accordion-content">
    <section>
        <p>For at implementere en spinner tilføjes en <code>.spinner</code> class på en lukket div.</p>
        <p>Eksempel: <code>&lt;div class="spinner"&gt;&lt;/div&gt;</code></p>
        <p>For at ændre spinnerens størrelse kan <code>font-size</code> gøres større eller mindre.</p>
    </section>
  </div>
</div>

<div class="accordion-bordered accordion-docs">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="spinner-docs">
    Retningslinjer
  </button>
  <div id="spinner-docs" class="accordion-content">
     <article>
        <section>
            <h2 class="h4">Tilgængelighed</h2>
            <p>Anvend ARIA attributten <code>aria-busy="true"</code> på elementet, der er igang med at blive opdateret til at markere for skærmlæsere, at der er en live region i gang med indlæsning og sæt værdien til <code>false</code>, når den er indlæst.</p>
        </section>
        <section>
            <h2 class="h4">Brugervenlighed</h2>
            <h3 class="h4">Anvendes til</h3>
            <p>En spinner anvendes til at signalere en forsinket indlæsning af en side eller del-funktion ved at give brugeren en synlig respons.</p>
            <h3 class="h4">Anvendes ikke til</h3>
            <p>Spinner skal ikke anvendes som en standard komponent på alle løsninger, da det må forventes at langt størstedelen vil kunne indlæse inden for 3 sekunder.</p>
            <h3 class="h4">Vejledning</h3>                
            <ul>
                <li>Anvend kun spinners i særdeles begrænset omfang og kun på løsninger, hvor der kan forventes ventetid.</li>
                <li>En spinner skal ikke anvendes til kompensation for en permanent langsom performance.</li>
                <li>En spinner bør ikke køre mere end 5-10 sekunder før brugeren gøres opmærksom på, at der må forventes lidt ventetid. </li>
            </ul>
        </section>
      </article>
  </div>
</div>