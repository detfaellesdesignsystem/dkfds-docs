---
permalink: /komponenter/cards/
layout: styleguide
type: component
title: Cards
category: Komponenter_category
subcategory: Komponenter
---
{% include code/preview.html component="cards" %}
{% include code/accordion.html component="cards" %}
<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
    aria-expanded="false" aria-controls="code-documentation">
    Implementering
  </button>
  <div id="code-documentation" class="accordion-content">
    <section>
        <p>Alle cards har en <code>card</code> class. Cards kan bestå af en header, et tekstområde, et indholdsområde og et aktionsområde. Du kan frit sammensætte rækkefølge og størrelser af alle områder efter dit eget behov, men der er regler for, hvad du kan placere i de forskellige områder. </p>
        <p>Hvert område er beskrevet nedenfor.</p> 
        <h2 class="h4">Header</h2>
        <p>Headeren har en <code>.card-header</code> class, og indeholder en titel og en understøttende tekst, som alle er p-tags med hver deres class.</p>
        <ul>
          <li><code>.header-titel</code></li>
          <li><code>.subheader</code></li>
        </ul>
        <h2 class="h4">Tekstområde</h2>
        <p>Tekstområdet har en <code>.card-text</code> class, og indeholder brødtekst, som har en class.</p>
        <ul>
          <li><code>.text</code></li>
        </ul>
        <h2 class="h4">Indholdsområde</h2>
        <p>Indholdsområdet har en <code>card-content</code> class, og kan indeholde brødtekst og andet, såsom displaytekst og grafer, der har hver deres div med hver deres class. .card-content har en stribet baggrundsfarve. Denne baggrundsfarve er midlertidig og bliver kun vist for at indikere indholdsområdet. Du kan se, hvilke andre baggrundsfarver der kan bruges, under "Baggrundsfarver" og "Hjælpefunktioner" i sidenavigationen. Det er også muligt at tilføje andre farver.</p> 
        <ul>
          <li><code>.content-text</code></li>
          <li><code>.content</code></li>
        </ul>
        <h2 class="h4">Aktionsområde</h2>
        <p>Aktionsområdet har en <code>card-action</code> class og kan indeholde brødtekst, knapper, links og funktionelle link, som alle har hver deres div med hver deres class.</p>
        <ul>
          <li><code>.action-content</code></li>
          <li><code>.action-buttons</code></li>
          <li><code>.action-links</code></li>
        </ul>
    </section>
  </div>
</div>

<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="alert-docs">
    Retningslinjer
  </button>
  <div id="alert-docs" aria-hidden="false" class="accordion-content">
     <article>
        <section>
            <h2 class="h4">Tilgængelighed</h2>
            <p>Cards skal overholde html outline, så browser og eventuelle skærmlæsere kan afkode det korrekt. Dvs. overskriften på dit cards skal være en heading 4, hvis det foregående afsnit er en heading 3.</p>
        </section>
        <section>
            <h2 class="h4">Brugervenlighed</h2>
            <h3 class="h4">Anvendes til</h3>
            <p>Du kan bruge cards til at gruppere funktionalitet, der adskiller sig fra sidens øvrige indhold. Det kan fx være en afledt, men ikke direkte koblet ekstra funktion ift. sidens sammenhæng.</p>
            <h3 class="h4">Anvendes ikke til</h3>
            <ul>
                <li>Brug ikke cards til det primære indhold på en løsning, men derimod til indhold, der kan stå og forstås alene og fortsat være del af den samlede løsning.</li>
                <li>Brug ikke cards udelukkende af visuelle hensyn, som placeholders for ornamental grafik eller indhold uden interaktion.</li>
                <li>Cards er ikke en statusbesked.</li>
            </ul>
            <h3 class="h4">Vejledning</h3>
            <ul>
                <li>Cards skal tilbyde en enkel og fokuseret funktion. </li>
                <li>Cards er velegnede til interaktion med brugeren, men brug dem kun, når der tilbydes en ekstra funktionalitet af grupperet indhold.</li>
                <li>Cards er velegnede til responsive løsninger.</li>
                <li>Du kan godt indsætte flere cards på en side, men sørg for at de fremtræder roligt i sidens layout og ikke bryder brugerens naturlige aflæsning af siden.</li>
                <li>Undgå lange tekster i cards.</li>
                <li>Skriv kort og præcist i hvert card.</li>
            </ul>
        </section>
    </article>
  </div>
</div>