---
type: component
title: Lister
parent: typography
order: 07
---

<p class="font-lead">Lister bruges til at organisere information, så det giver brugeren overblik.</p>

{% include code/preview.html component="lists" classes="preview-lists" %}
{% include code/accordion.html component="lists" %}

<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="false" aria-controls="lists-docs-tech">
    Implementering
  </button>
  <div id="lists-docs-tech" aria-hidden="true" class="accordion-content">
    <p>For at lave en liste uden styling kan du enten benytte klassen <code>unstyled-list</code> eller et mixin <code>@include unstyled-list;</code>.</p>
    <p>For at lave en liste uden bullets, hvor man bibeholder afstanden, kan du enten benytte klassen <code>nobullet-list</code> eller et mixin <code>@include nobullet-list;</code>.</p>
  </div>
</div>

<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="typolists-docs">
    Retningslinjer
  </button>
  <div id="typolists-docs" aria-hidden="false" class="accordion-content">
    <article>
      <section>   
        <h1 class="h4">Anvendes til</h1>
        <ul>
            <li>Brug lister, når du skal liste ord eller sætninger op.</li>
            <li>Brug lister til at give brugeren et hurtigt overblik.</li>
        </ul>
        <h1 class="h4">Anvendes ikke til</h1>
        <ul>
            <li>Lister af lange afsnit med forklarende tekst. Brug mellemrum i stedet.</li>
        </ul>
        <h1 class="h4">Vejledning</h1>
        <ul>
            <li>Hold listerne så korte og faktuelle som muligt.</li>
            <li>Brug tal i listerne, når der er et hierarki i det, du præsenterer.</li>
            <li>Ved brug af tal, hold da listen til så få niveauer som muligt - og hvis muligt under 3 niveauer.</li>
            <li>Brug punkter, når der ikke er et hierarki i informationerne.</li>
        </ul>
      </section>
    </article>
  </div>
</div>