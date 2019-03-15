---
permalink: /komponenter/badges/
layout: styleguide
type: element
title: Badges
category: Komponenter_category
subcategory: Komponenter
lead: Badges er grafiske markører, som du kan bruge til at gøre opmærksom på nyt eller vigtigt indhold. 
---

{% include code/preview.html component="badges" %}
{% include code/accordion.html component="badges" %}
<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
    aria-expanded="false" aria-controls="code-documentation">
    Implementering
  </button>
  <div id="code-documentation" class="accordion-content">
    <section>
        <p>Alle badges skal have en <code>.badge</code> class på <code>&lt;label&gt;&lt;/label&gt;</code> elementet.</p>
        <p>Badges findes i to størrelser, store og små:</p>
        <ul>
          <li><p>For et stort badge skal der tilføjes en <code>.badge-large</code> class. </p></li>
          <li><p>For et lille badge skal der tilføjes en <code>.badge-small</code> class. </p></li>
        </ul>
        <p>Et stort badge vil se følgende ud:</p>
        <ul>
          <li><code>&lt;label class="badge badge-large"My badge&lt;/label&gt;</code></li>
        </ul>
        <p>Et lille badge vil se følgende ud:</p>
        <ul>
          <li><code>&lt;label class="badge badge-small"My badge&lt;/label&gt;</code></li>
        </ul>
    </section>
  </div>
</div>

<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="label-docs">
    Retningslinjer
  </button>
  <div id="label-docs" aria-hidden="false" class="accordion-content">
    <article>
      <section>
          <h2 class="h4">Tilgængelighed</h2>
          <ul>
              <li>Interaktive badges bliver automatisk markeret , når brugere ved hjælp af tabulatortasten navigerer sig frem til dem.</li>
              <li>Du skal anvende ARIA live regions til at gøre skærmlæsere på opmærksomme på ændringerne, hvis du anvender badges dynamisk i løsningen til at gøre opmærksom på nyt indlæst indhold eller ændringer på siden.</li>
          </ul>
      </section>
      <section>
          <h2 class="h4">Brugervenlighed</h2>
          <h3 class="h5">Anvendes til</h3>
          <ul>
            <li>Brug badges til at gøre opmærksom på ændringer, nyt eller vigtigt indhold.</li>
          </ul>
          <h3 class="h5">Anvendes ikke til</h3>
          <ul>
              <li>Brug ikke badge, hvis placeringen af det får brugeren til at tro, det er en knap. Test altid for dette, når du vil anvende badges.</li>
              <li>Overvej at markere ændringer på siden ved at markere selve det ændrede fx med en baggrundsfarve eller en typografisk markering som fx fed tekst.</li>
              <li>Brug ikke badge på sider, hvor indholdet bliver udskiftet dynamisk. Fx på nyhedssider, hvor brugeren nemt kan se, hvad der er det nyeste indhold, når det blot står øverst.</li>
          </ul>
          <h3 class="h5">Vejledning</h3>                
          <ul>
              <li>Brug ord og begreber, som brugeren kan genkendes fra løsningen.</li>  
              <li>Skriv badges med store bogstaver.</li>
              <li>Brug ikke hover, focus eller active styling til et badge, som ikke er interaktivt (fx link).</li>
              <li>Bland aldrig interaktive og statiske badges i samme løsning. Brugerne forventer ensartet opførsel af komponenterne inden for løsningen.</li>
              <li>Vær varsom med at markere for meget indhold med badges – brug dem kun, hvor det virkelig er meningsfuldt.</li>
          </ul>
      </section>
    </article>
  </div>
</div>
