---
permalink: /komponenter/modals/
layout: styleguide
type: component
title: Modalvinduer
category: Komponenter_category
subcategory: Komponenter
description: Modalvinduer anvendes til at tvinge brugerens fokus på et specifikt, afgrænset indhold, hvor den interaktive respons og forståelse er centralt for brugerens videre anvendelse af løsningen.
---

<p>Modalvinduer er separate vinduer, som popper-up, når du aktiverer dem. De indeholder typisk afgrænset viden og kommer i to former: Åben modal (aktiv) indeholder tekst og link, som brugeren kan handle på. Åben modal (passiv) indeholder kun tekst, som brugeren kan læse.</p>

{% include code/preview.html component="modal" %}
{% include code/accordion.html component="modal" %}
<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="false" aria-controls="modal-tech-docs">
    Implementering
  </button>
  <div id="modal-tech-docs" aria-hidden="true" class="accordion-content">
    <section>
        <p>Modal komponenten er implementeret med scriptet <a href="https://micromodal.now.sh" class="icon-link">Micromodal<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a>.</p>
        <p>En modal kan åbens ved at sætte følgende attribut på fx en knap: <code>data-micromodal-trigger="modal-id"</code>. Dette vil åbne modalen som har id'et 'modal-id'</p>
        <p>En modal kan lukkes ved at sætte følgende attribut på en knap inde i modalen: <code>data-micromodal-close</code>.</p>
        <p>Det er også muligt at åbne og lukke modalen programmatisk via javascript: <code>MicroModal.show('modal-id');</code> og <code>MicroModal.close('modal-id');</code></p>
        <p class="h5">Html struktur af en modal</p>
        <ul>
          <li>For at modalen kan åbne skal denne have et id: <code>&lt;div class="modal" id="modal-id" aria-hidden="false"&gt;</code></li>
          <li>Der sættes automatisk fokus på det første fokusbare element i modalen. Luk-knappen skal derfor HTML-mæssigt placeres til sidste i modalen.</li>
          <li>En modal er opdelt i tre dele: modal__header, modal__content og modal__footer</li>
        </ul>
    </section>
  </div>
</div>

<div class="accordion-bordered accordion-docs">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="modal-docs">
    Retningslinjer
  </button>
  <div id="modal-docs" class="accordion-content">
    <article>
      <section>
          <h2 class="h4">Tilgængelighed</h2>
          <ul>
              <li>Den anbefalede udvidelse, MicroModal, følger WAI-anbefalingerne for tilgængelighed.</li>
              <li>Du skal fortsat sikre, at der sættes focus på første element fx brødtekst i dit modalvindue, da indholdet ellers ikke læses op af skærmlæsere.</li>
          </ul>
      </section>
      <section>
        <h2 class="h4">Brugervenlighed</h2>
        <h3 class="h5">Anvendes til</h3>
        <ul>
            <li>Modalvinduer anvendes til at tvinge brugerens fokus på et specifikt, afgrænset indhold, hvor den interaktive respons og forståelse er centralt for brugerens videre anvendelse af løsningen. Det kunne fx være en godkendelse af en handling, behov for bekræftelse eller overførsel af rettigheder, som løsningen skal kunne udføre for at kunne fuldføre sin dialog med brugeren.</li>
            <li>Brug modalvinduer, når du vil være sikker på, at brugeren ser en bestemt dialog og forholder sig til dens indhold.</li>
        </ul>
        <h3 class="h5">Anvendes ikke til</h3>
        <ul>
            <li>Modalvinduer kan ikke erstatte individuelle sider i en selvbetjeningsløsning eller hjemmeside.</li>
            <li>Modalvinduer anvendes ikke til længere, sammenhængende indhold.</li>
            <li>Modalvinduer anvendes i begrænset omfang, da de kan øge løsningens kognitive load pga brugerens fokus flyttes.</li>
            <li>Undgå modalvinduer på mobile løsninger og visninger, da de ikke fungerer godt for brugeren.</li>
        </ul>
        <h3 class="h5">Vejledning</h3>                
        <ul>
            <li>Modalvinduet skal have en meningsfuld overskrift, der klart relaterer sig til konteksten.</li>
            <li>Knapper i modalvinduet skal være tydelige, meningsfulde og følge Det Fælles Designsystems øvrige anbefalinger for knapper.</li>
            <li>Vær sikker på at modalvinduet kun akkurat passer til sit indhold og ikke dækker baggrunden (selve løsningen) fuldstændigt. Det er nødvendigt, at brugeren forstår, at de ikke har skiftet kontekst.</li>
            <li>Brugeren skal selv aktivere modalvinduet. Det må ikke aktiveres per automatik, da det kan have en modsatrettet effekt, hvor brugeren lukker det i affekt.</li>
        </ul>
      </section>
    </article>
  </div>
</div>

