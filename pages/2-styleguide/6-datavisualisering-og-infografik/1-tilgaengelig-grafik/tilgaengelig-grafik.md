---
permalink: "/styleguide/datavisualisering-infografik/tilgaengelig-grafik/"
parentlink: "/styleguide/datavisualisering-infografik/"
redirect_from:
- "/design/datavisualisering-infografik/tilgaengelig-grafik/"
layout: styleguide
category: Styleguide_category
subcategory: Styleguide
title: Tilgængelig grafik
lead: Grafik kommunikerer data visuelt frem for udelukkende med tekst og tal. Det
  er derfor særligt vigtigt at arbejde med tilgængelighed her, f.eks. for at tilgodese
  farveblinde brugere.
description: Grafik kommunikerer data visuelt frem for udelukkende med tekst og tal.
  Det er derfor særligt vigtigt at arbejde med tilgængelighed her, f.eks. for at tilgodese
  farveblinde brugere.
tags:
- data
- datavisualisering
- grafik
- diagrammer
- diagram
- graf
- infografik
---

{% include anchorlinks.html headings="Tilgaengelig_grafik" %}

## Reducér kompleksiteten {#{% include create-id.html heading="Reducér kompleksiteten" %}}

Reducer mængden af unødvendige oplysninger, så de vigtige ting er klare.

Målet er at nå ud til alle målgrupper ved at kommunikere med det klareste sprog og de enkleste teknikker. Fjern det unødvendige visuelle rod for at skabe en klar og enkel oplevelse. Og husk, nogle mennesker ser tingene fysisk anderledes eller slet ikke.

## Brug farve med omhu {#{% include create-id.html heading="Brug farve med omhu" %}}

Datavisualiseringer og infografik bør kunne aflæses i sort/hvid for sikre at brugere med synshandicap som fx farveblindhed, også kan aflæse det.

<figure class="mb-6">
<img src="/assets/img/design/datavisualisering/graph-figures.svg" class="w-percent-70" alt="Eksempel på graf med forskellige figurer frem for farver" />
<figcaption>
<p>Grafen gør brug af både farver og figurer for at differentiere mellem værdierne, således at brugere med synshandicap som farveblindhed også kan læse grafen.</p>
<p>Segment 1 vises med en stiplet linje med en rombe for hvert punkt. Segment 2 vises med en solid linje sammen med en stjerne for hvert punkt.</p>
</figcaption>
</figure>

<section class="do-dont-container row" aria-label="Eksempel på korrekt søjlediagram">
  <div class="col-12 col-md-6">
    <h3>Sådan (do)</h3>
    <div><img  src="{{ site.baseurl }}/assets/img/design/datavisualisering/barchart-do.svg" alt="Eksempel på korrekt visning af søjlediagram med farver og mønstre" /></div>
    <div class="separator"><svg class="icon-svg" focusable="false" aria-hidden="true"><use href="#check-circle"></use></svg><div></div></div>
    <p><strong>Sådan:</strong> Betydning bør ikke kommunikeres af farve alene. Brug også mønstre, teksturer, figurer, linjetyper og andet for fx at adskille de forskellige udsnit (søjler, linjer, dele, mv.).</p>
    </div>
    <div class="col-12 col-md-6">
    <h3>Ikke sådan (don't)</h3>
    <div><img  src="{{ site.baseurl }}/assets/img/design/datavisualisering/barchart-dont.svg" alt="Eksempel på ukorrekt visning af søjlediagram med manglende farver og mønstre" /></div>
    <div class="separator"><svg class="icon-svg" focusable="false" aria-hidden="true"><use href="#highlight-off"></use></svg><div></div></div>
    <p><strong>Ikke sådan:</strong> Undgå farvekombinationerne grøn-rød, grøn-blå, grøn-brun, grøn-sort, grøn-grå, blå-grå, lys grøn-gul og blå-lilla.</p>
  </div>
</section>

Vær opmærksomhed på at farver der grænser op til hinanden skal overholde WCAG 2.1 ift farvekontrast.

Tjek gerne datavisualiseringer og infografikker med et simulationsværktøj (læs mere om {% include links/internal-link.html linktext="evalueringsværktøjer" %}) for at se, hvordan de forskellige farver syner overfor hinanden med et synshandikap som farveblindhed.

## Sørg for alternativer til grafikken {#{% include create-id.html heading="Sørg for alternativer til grafikken" %}}

Sæt infografik og datavisualiseringer i en kontekst, hvor sidens titel og evt. en introduktionstekst hjælper brugeren med at forstå indholdet.

Giv gerne de enkelte udsnit (søjler, linjer, dele mv.) en etikette (beskrivende tekst) for at brugeren lettere kan afkode betydningen.

Sørg for at etiketterne (de beskrivende tekster) til de forskellige elementer/segmenter er nemme af forstå og adskiller sig fra hinanden.

<figure class="mb-6">
  <img src="/assets/img/design/datavisualisering/graph-biking.svg" class="w-percent-md-70" alt="Eksempel på graf der viser fordelingen af cykelture og cykelkm efter turens længde." />
  <figcaption>
    <p>Figuren viser fordelingen af cykelture og cykelkm efter turens længde. Det ses, at lige over halvdelen af alle cykelture er under 2km, men at disse ture kun udgør 23% af cykeltrafikarbejdet.</p>
    <p>Kilde: DTU</p>
  </figcaption>
</figure>

Sæt etiketten (beskrivende tekst) i en boks med hvid baggrund og sort kant på, hvis der er problemer med farvekontrast mellem tekstfarven på  etiketten og den baggrund de skal være på.

Husk en sigende/forklarende alt-attribut på grafikken eller elementerne i datavisualiseringen så skærmlæseren kan læse op.

Giv brugeren en oversigt over data fra diagrammet eller en tekstbeskrivelse af diagrammet. Beskrivelsen kan evt fungere som opsummering og kan hjælpe brugeren med at drage en konklusion.

## Referencer {#{% include create-id.html heading="Referencer" %}}

{:.nobullet-list}

* {% include links/external-link.html linktext="W3C (WCAG 2.1): Understanding SC 1.4.11: Non-text Contrast (Level AA)" %}
* {% include links/external-link.html linktext="W3C (WCAG 2.1): Understanding SC 1.4.3: Contrast (Minimum) (Level AA)" %}