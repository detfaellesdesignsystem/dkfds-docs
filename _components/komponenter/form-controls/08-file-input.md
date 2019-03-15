---
title: Vedhæft fil
parent: Form controls
order: 07
lead: Lader brugeren vælge en fil.
---

{% include code/preview.html component="file-input" %}
{% include code/accordion.html component="file-input" %}
<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="file-input-tech">
    Implementering
  </button>
  <div id="file-input-tech" aria-hidden="false" class="accordion-content">
    <section>
        <p>Vi anbefaler at bruge det indbyggede input felt til filer <code>type="file"</code> frem for en skræddersyet løsning.</p>
        <p>Årsagen til dette er:</p>
          <ul class="content-list">
          <li>at feltet får fokus, når man tabulerer gennem siden</li>
          <li>at feltet fungerer ved brug af tastatur</li>
          <li>at feltet fungerer ved brug af hjælpemidler</li>
          <li>at feltet fungerer, selv når JavaScript er utilgængeligt.</li>
        </ul>
        <p>Du bør anvende ovenstående kriterier til en skræddersyet løsning for denne type felt.</p>
    </section>
  </div>
</div>

<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="file-input-docs">
    Retningslinjer
  </button>
  <div id="file-input-docs" aria-hidden="false" class="accordion-content">
    <article>
      <section>
          <h3 class="h4">Tilgængelighed</h3>
          <p>Du bør kun bruge vedhæftet fil, hvis det er strengt nødvendigt for din løsning.</p>
      </section>
      <section>
          <h3 class="h4">Brugervenlighed</h3>
          <h4 class="h5">Anvendes til</h4>
          <p>Brug det til at lade brugeren vælge og overføre en fil fra sin egen computer, tablet eller mobil.</p>
          <h4 class="h5">Vejledning</h4>
          <ul>
              <li>Sørg for at brugeren får en positiv respons, når filen er overført.</li>
              <li>Gør tydeligt brugeren opmærksom på, hvilke formater og størrelser, der vil blive accepteret.</li>
              <li>Tjek filformatet før overførslen går i gang, så brugeren ikke spilder tid.</li>
          </ul>
      </section>
  </article>
</div>
