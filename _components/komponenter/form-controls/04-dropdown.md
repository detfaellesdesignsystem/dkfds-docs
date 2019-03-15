---
title: Dropdown-menu
parent: Form controls
order: 04
lead:
---


{% include code/preview.html component="select" classes="preview-dropdown" %}
{% include code/accordion.html component="select" %}
<div class="accordion-bordered accordion-docs">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="dropdown-docs">
    Retningslinjer
  </button>
  <div id="dropdown-docs" aria-hidden="false" class="accordion-content">
    <article>
      <section>
          <h3 class="h4">Tilgængelighed</h3>
          <p>Dropdown menu skal have et label tilknyttet.</p>
          <p>Anvend ikke JavaScript til automatisk at sende den valgte værdi, da en skærmlæser vælger hver option i takt med, at de læser dem op.</p>
          <p>Brug dropdown menu i begrænset omfang. Værdierne i en dropdown menu er ikke umiddelbart synlige for brugerne, og det øger sidens kompleksitet for dem.</p>
      </section>
      <section>
          <h3 class="h4">Brugervenlighed</h3>
          <h4 class="h5">Anvendes til</h4>
          <p>Anvend kun dropdown menuer, når det er absolut nødvendigt og kun i tilfælde, hvor brugeren skal vælge mellem 7 og 15 værdier på en begrænset plads.</p>
          <h4 class="h5">Anvendes ikke til</h4>
          <ul>
              <li>Lister med færre værdier end 7.</li>
              <li>Lister med flere værdier end 15. I så tilfælde bør du tilbyde brugeren et felt med auto-forslag, når brugeren begynder at indtaste.</li>
              <li>Brug tjekbokse fremfor dropdown menu, hvis brugeren skal vælge mere end 1 værdi.</li>
              <li>Brug ikke dropdown-menu til navigation, som den ikke er velegnet til.</li>
          </ul>
          <h4 class="h5">Vejledning</h4>
          <ul>
              <li>Dropdown menuer kræver ekstra aftestning på målgruppen pga. de kognitive udfordringer, de kan afføde.</li>
              <li>Undgå at lade brugerens valg i én dropdown menu påvirke indholdet i en anden. Det forvirrer mange brugere.</li>
              <li>Hvis du ved, at mange brugere vil vælge den samme værdi i en dropdown menu, så marker den med <code>&lt;option selected="selected"&gt;Default&lt;/option&gt;</code>. Dermed slipper brugerne for at bruge tid på at gennemsøge listen.</li>
              <li>Anvend ikke JavaScript til automatisk at sende den valgte værdi, men sørg for at der er en submit-knap til at sende formularen med.</li>
          </ul>
      </section>
    </article>
  </div>
</div>
