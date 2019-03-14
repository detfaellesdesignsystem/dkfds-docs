---
type: component
title: Manchettekst (lead paragraph)
parent: typography
order: 04
---
<p class="font-lead">Du kan bruge manchettekst til at introducere et trin eller en sides indhold. Typisk kan du bruge den når og hvor, det giver mening i kontekst for brugerne.</p>

<p>Du kan give teksten extra fokus ved at give den klassen <code>.font-lead</code>.</p>

{% include code/preview.html component="lead_paragraph" %}
{% include code/accordion.html component="lead_paragraph" %}


<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="typolead-docs">
    Retningslinjer
  </button>
  <div id="typolead-docs" aria-hidden="false" class="accordion-content">
    <article>
      <section>   
          <ul>
            <li>Hold manchetteksten kort og præcis, gerne max tre linjer.</li>  
            <li>Manchetteksten er kun til korte introduktionstekster og ikke til lange informationstekster. Brug brødtekst og lister til yderligere informationstekster.</li>
            <li>Brug kun manchettekst, når og hvor det er nødvendigt. Brug fx ikke manchettekst, hvis brugeren selv kan afkode siden og begynde at indtaste med det samme.</li>
            <li>Typisk starter indtastningsflowet eller en sektion lige under manchetteksten. Hvis det understøtter brugerens gennemførelse af løsningen, kan du godt indsætte brødtekst, lister, links, o.l. efter manchetteksten.</li>
          </ul>
      </section>
    </article>
  </div>
</div>