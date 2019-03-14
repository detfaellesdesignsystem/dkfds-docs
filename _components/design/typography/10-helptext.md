---
type: component
title: Hjælpetekst og fejlbeskeder
parent: typography
order: 10
---

<p class="font-lead">Kommunikér med og giv feedback til brugeren via hjælpetekster og fejlbeskeder.</p>

{% include code/preview.html component="helptext" %}
{% include code/accordion.html component="helptext" %}
<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="false" aria-controls="helptext-docs-tech">
    Retningslinjer
  </button>
  <div id="helptext-docs-tech" aria-hidden="true" class="accordion-content">
    <p>Hjælpetekst og fejltekst knytter sig i udpræget grad til formularer. Du kan også anvende dem, hvor der er behov for at hjælpe brugeren med forklaring af et element eller at give feedback på et element.</p>
    <h2 class="h4">Hjælpetekst</h2>
    <p>Nogle gange er det nødvendigt at forklare eller eksemplificere en feltoverskrift. Her kan du anvende hjælpetekst. Du kan også bruge hjælpetekst til at forklare, hvorfor du efterspørger særligt følsomme oplysninger. Fx hvis det kan være en barriere for at få et svar fra brugeren.</p>
    <ul><li>Brug hjælpetekst til at give uddybende forklaring (fx til at understøtte feltoverskrifter).</li></ul>
    <h2 class="h4">Fejlbesked</h2>
    <p>Det er vigtigt for brugerne, at de får feedback på deres handling. Det gælder særligt, når noget fejler og fejltekst er et helt centralt element for formularer. Sørg derfor for, at de er knivskarpe og præcist kommunikerer, hvad fejlen består i, og hvad brugeren skal gøre for at komme videre. Skriv så vidt muligt fejlbesked og vejledning i én og samme sætning.</p>
    <ul>
        <li>Skriv klar og præcis fejltekst i et sprog, som brugeren forstår.</li>
        <li>Vær høflig (“Indtast venligst din adresse”) og vær ikke anklagende (“Du mangler at indtaste din adresse”). Hjælp brugeren med at løse fejlen.</li>
        <li>Skriv ikke tekniske eller fagligt tunge fejltekster og brug ikke “jargon”.</li>
        <li>Placer fejlteksten dér, hvor fejlen forekommer.</li>
        <li>Fejltekst er som udgangspunkt rød. I formulerer skal du indikere fejltekst med en rød streg. Andre steder end i formularer skal du indikere fejltekst med et fejlikon.</li>
    </ul>
  </div>
</div>