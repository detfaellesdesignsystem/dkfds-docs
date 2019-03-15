---
permalink: /komponenter/beskeder/
layout: styleguide
type: component
title: Beskeder (Alerts)
category: Komponenter_category
subcategory: Komponenter
description: Beskeder (Alerts) er farvede bokse, eventuelt tilknytte et ikon, du kan bruge til at give brugeren vigtig og aktuel information om fx status, fejl, opdateringer, o.l. 
---

{% include code/preview.html component="alerts" %}
{% include code/accordion.html component="alerts" %}
<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="alert-docs">
    Retningslinjer
  </button>
  <div id="alert-docs" aria-hidden="false" class="accordion-content">
    <article>
        <section>
            <h2 class="h4">Tilgængelighed</h2>
            <ul>
                <li>Anvend ARIA <code>role=alert</code> til at øge tilgængeligheden ved at markere beskeden som en ikke-interaktiv del af sidens indhold. Mærk beskeden med <code>role=alertdialog</code>, hvis den indeholder interaktivitet for brugeren.</li>
                <li>Undgå at skjule beskeder på siden ved hjælp af fx <code>display:none</code> eller <code>visibility: hidden;</code>. De risikerer at blive læst op af en skærmlæser.</li>
            </ul>
        </section>
        <section>
            <h2 class="h4">Brugervenlighed</h2>
            <h3 class="h5">Anvendes til</h3>
            <ul>
                <li>Beskeder (Alerts) anvendes til at give brugeren vigtig og aktuel information om fx status, fejl og opmærksomhedspunkter fx om opdateringer, o.l.</li>
                <li>Anvend beskeder til at bekræfte en handling eller give besked om behov for handling.</li>
            </ul>
            <h3 class="h5">Anvendes ikke til</h3>
                <ul>
                    <li>Brug ikke beskeder til at markere fejlindtastning i et specifikt felt.</li>
                    <li>Brug modaldialog – ikke beskeder – til at give brugerne information om en potentielt kritisk handling. Dermed risikerer brugeren ikke at overse eller misforstå beskeden.</li>
                </ul>
            <h3 class="h5">Vejledning</h3>
            <ul>
                <li>Brug kun beskeder, når det er reelt nødvendigt og meningsfuldt.</li>
                <li>Gør informationen aktiv og handlingsanvisende, så brugeren forstår, hvad der er behov for eller hvad den aktuelle status er. </li>
                <li>Brug ord og begreber, som brugeren kan genkende fra løsningen.</li>
                <li>Skriv kort og præcist og undgå tekniske beskeder, der kan forvirre brugeren.</li>
                <li>Brug beskeder til at øge brugerens forståelse for løsningen. </li>
            </ul>
        </section>
    </article>
  </div>
</div>
