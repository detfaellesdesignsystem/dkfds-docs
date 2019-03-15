---
title: Felter
parent: Form controls
order: 01
lead: 
---

{% include code/preview.html component="text-input" %}
{% include code/accordion.html component="text-input" %}
<div class="accordion-bordered accordion-docs">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="text-input-docs">
    Retningslinjer
  </button>
  <div id="text-input-docs" aria-hidden="false" class="accordion-content">
    <article>
      <section>
          <h3 class="h4">Tilgængelighed</h3>
          <p>Undgå at opdele felter fx til telefonnumre, da det enkelte felt ikke kan tilføjes et meningsfuldt label.</p>
          <p>Felter skal have et kontrastforhold på minimum 3:1 i forhold til baggrundsfarven. Tjek kontraster hos <a href="https://webaim.org/resources/contrastchecker/" class="icon-link">WebAIM+ <svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></p>
      </section>
      <section>
        <h3 class="h4">Brugervenlighed</h3>
        <h4 class="h5">Anvendes til</h4>
        <ul>
            <li>Bruger-input af information i form af bogstaver, tal og en kombination af begge.</li>
            <li>Brug primært formularelementer, når der er behov for, at brugeren kan tilføje information, som ikke kan vælges ud fra prædefinerede værdier, eller som løsningen ikke automatisk kan forudse ud fra brugerens andre indtastninger.</li>
            <li>Når det er nemmere for brugeren at skrive information end at vælge den gennem en kompliceret proces. Ofte kan et datofelt til indtastning være nemmere at anvende - og gøre tilgængeligt - end en date picker funktion.</li>
            <li>Når brugeren skal kunne copy/paste information ind i en formular.</li>
        </ul>
        <h4 class="h5">Anvendes ikke til</h4>
        <p>Når brugeren skal vælge ud fra et prædefineret sæt af værdier, og der er behov for datakonsistens.</p>
        <h4 class="h5">Vejledning</h4>
        <ul>
            <li>Vis kun fejlbeskeder, når brugeren har indtastet en ugyldig værdi.</li>
            <li>Fejlbeskeder skal være meningsfulde og hjælpsomme. </li>
            <li>Placér fejlbeskeder imellem label og feltet, som bliver markeret med rødt.</li>
            <li>Felter er ikke perfekte til mobile løsninger. Overvej om de er nødvendige eller om du kan tilbyde brugeren en anden form for interaktion.</li>
        </ul>
      </section>
    </article>
  </div>
</div>
