---
title: Textarea
parent: Form controls
order: 03
lead: 
---

{% include code/preview.html component="text-area" %}
{% include code/accordion.html component="text-area" %}
<div class="accordion-bordered accordion-docs">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="text-area-docs">
    Retningslinjer
  </button>
  <div id="text-area-docs" aria-hidden="false" class="accordion-content">
    <article>
      <section>
          <h3 class="h4">Tilgængelighed</h3>
          <p>Tekstområdet bliver automatisk fremhævet, når brugeren navigerer sig hen til det ved hjælp af tabulator-tasten.</p>
      </section>
      <section>
          <h3 class="h4">Brugervenlighed</h3>
          <h4 class="h5">Anvendes til</h4>
          <ul>
              <li>Brug tekstområder til sammenhængende (mere end 2 linjer) men ustruktureret tekst og sætninger, der har karakter af prosa. Fx en baggrundsfortælling.</li>
              <li>Når der er behov for yderligere sammenhængende information, hvis karakter brugeren ikke kan vælge ud fra et prædefineret sæt værdier.</li>
              <li>Når løsningen stiller et spørgsmål, der ikke kan besvares i et felt.</li>
          </ul>
          <h4 class="h5">Anvendes ikke til</h4>
          <p>Brug ikke tekstområder til struktureret information, hvor datakonsistens har betydning.</p>
          <h4 class="h5">Vejledning</h4>
          <ul>
              <li>Angiv tekstområdets højde, så det modsvarer den tekstmængde, du forventer, at brugeren skal indtaste.</li>
              <li>Overvej at begrænse antallet af tegn, hvis det giver mening.</li>
              <li>Vis kun fejlbeskeder, når brugeren har indtastet en ugyldig værdi.</li>
              <li>Fejlbeskeder skal være meningsfulde og hjælpsomme. </li>
              <li>Placér fejlbeskeder imellem label og felt, og markeér feltet med rødt.</li>
          </ul>
      </section>
    </article>
  </div>
</div>
