---
permalink: "/design/datavisualisering-infografik/tilgaengelig-grafik/"
parentlink: "/design/datavisualisering-infografik/"
layout: styleguide
title: Tilgængelig grafik
category: Design_category
subcategory: Design
type: component
description: Grafik kommunikerer data visuelt frem for udelukkende med tekst og tal. Det er derfor særligt vigtigt at arbejde med tilgængelighed her, f.eks. for at tilgodese farveblinde brugere.
tags:
- data
- datavisualisering
- grafik
- diagrammer
- diagram
- graf
- infografik
lead: Grafik kommunikerer data visuelt frem for udelukkende med tekst og tal. Det er derfor særligt vigtigt at arbejde med tilgængelighed her, f.eks. for at tilgodese farveblinde brugere.
---
{:.h4}
## Forenkl kompleksisteten

Reducer mængden af unødvendige oplysninger, så de vigtige ting er klare. 

Målet er at nå ud til alle målgrupper ved at kommunikere med det klareste sprog og de enkleste teknikker. Fjern det unødvendige visuelle rod for at skabe en klar og enkel oplevelse. Og husk, nogle mennesker ser tingene fysisk anderledes eller slet ikke.

{:.h4}
## Brug farve med omhu
Datavisualiseringer og infografik bør kunne aflæses i sort/hvid for sikre at brugere med synshandicap som fx farveblindhed, også kan aflæse det.

<figure class="mb-6">
    <img src="/assets/img/design/datavisualisering/graph-figures.png" class="w-percent-70" alt="Eksempel på graf med forskellige figurer frem for farver" />
    <figcaption>
        <p>Grafen gør brug af både farver og figurer for at differentiere mellem værdierne, således at brugere med synshandicap som farveblindhed også kan læse grafen.</p>
        <p>Segment 1 vises med en stiplet linje med en rombe for hvert punkt. Segment 2 vises med en solid linje sammen med en stjerne for hvert punkt.</p>
    </figcaption>
</figure>

<div class="do-dont-container row" aria-label="Eksempel på korrekt søjlediagram">
    <div class="col-12 col-md-6">
        <h3 class="h4">Sådan (do)</h3>
        <div><img  src="{{ site.baseurl }}/assets/img/design/datavisualisering/barchart-do.png" alt="Eksempel på korrekt visning af søjlediagram med farver og mønstre" /></div>
        <div class="separator"><svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#check-circle"></use></svg><div></div></div>
        <p><strong>Sådan:</strong> Betydning bør ikke kommunikeres af farve alene. Brug også mønstre, teksturer, figurer, linjetyper og andet for fx at adskille de forskellige udsnit (søjler, linjer, dele, mv.).</p>
    </div>
    <div class="col-12 col-md-6">
        <h3 class="h4">Ikke sådan (don't)</h3>
        <div><img  src="{{ site.baseurl }}/assets/img/design/datavisualisering/barchart-dont.png" alt="Eksempel på ukorrekt visning af søjlediagram med manglende farver og mønstre" /></div>
        <div class="separator"><svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#highlight-off"></use></svg><div></div></div>
        <p><strong>Ikke sådan:</strong>Undgå farvekombinationerne grøn-rød, grøn-blå, grøn-brun, grøn-sort, grøn-grå, blå-grå, lys grøn-gul, blå-lilla.</p>
    </div>
</div>

Vær opmærksomhed på at farver der grænser op til hinanden skal overholde WCAG 2.1 ift farvekontrast. 

Tjek gerne datavisualiseringer og infografikker med et simulationsværktøj (fx <a href="https://chrome.google.com/webstore/detail/a11y-color-blindness-empa/idphhflanmeibmjgaciaadkmjebljhcc?hl=en" class="icon-link">A11Y Color Blind Empathy<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>) for at se, hvordan de forskellige farver syner overfor hinanden med et synshandikap som farveblindhed.
 
{:.h4}
## Sørg for alternativer til grafikken
Sæt infografik og datavisualiseringer i en kontekst, hvor sidens titel og evt. en introduktions tekst hjælper brugeren med at forstå indholdet. 

Giv gerne de enkelte udsnit (søjler, linjer, dele mv.) en etikette (beskrivende tekst) for at brugeren lettere kan afkode betydningen. 

Sørg for at etiketterne (de beskrivende tekster) til de forskellige elementer/segmenter er nemme af forstå og adskiller sig fra hinanden.

{:.h5}
### Mest cykling på ture under 5km (2014-17)
<figure class="mb-6">
    <img src="/assets/img/design/datavisualisering/graph-biking.png" class="w-percent-md-70" alt="Eksempel på graf der viser fordelingen af cykelture og cykelkm efter turens længde." />
    <figcaption>
        <p>Figuren viser fordelingen af cykelture og cykelkm efter turens længde. Det ses, at lige over halvdelen af alle cykelture er under 2km, men at disse ture kun udgør 23% af cykeltrafikarbejdet.</p>
        <p>Kilde: DTU</p>
    </figcaption>
</figure>


Sæt etiketten (beskrivende tekst) i en boks med hvid baggrund og sort kant på, hvis der er problemer med farvekontrast mellem tekstfarven på  etiketten og den baggrund de skal være på. 

Husk en sigende/forklarende alt-attribut på grafikken eller elementerne i datavisualiseringen så skærmlæseren kan læse op.

Giv brugeren en oversigt over data fra diagrammet eller en tekstbeskrivelse af diagrammet. Beskrivelsen kan evt fungere som opsummering og kan hjælpe brugeren med at drage en konklusion. 

{:.h5}
## Referencer

{:.nobullet-list}
- <a href="https://webaim.org/resources/contrastchecker/" class="icon-link">WebAIMs Contrast Checker<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>
- <a href="https://chrome.google.com/webstore/detail/a11y-color-blindness-empa/idphhflanmeibmjgaciaadkmjebljhcc?hl=en" class="icon-link">A11Y Color Blind Empathy - Chrome plugin<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>
- <a href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html" class="icon-link">WCAG 2.1 Success Criterion 1.4.11: Non-text Contrast<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>
- <a href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html" class="icon-link">WCAG 2.1 Success Criterion 1.4.3: Contrast (Minimum)<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>