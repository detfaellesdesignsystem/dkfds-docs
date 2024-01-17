---
permalink: "/design/datavisualisering-infografik/"
layout: styleguide
category: Styleguide_category
subcategory: Styleguide
title: Datavisualisering og infografik
lead: Datavisualiseringer og infografikker kan formidle data eller informationer på en hurtig, klar og virkningsfuld måde og ofte vise hvordan data eller informationer fordeler sig.
anchor: false
description: Vi skelner mellem datavisualisering og infografik. Infografik formidler en historie. Datavisualisering er nøgtern visning af data til fx sammenligning og overblik. 
tags:
- data
- datavisualisering
- grafik
- diagrammer
- diagram
- graf
- infografik
---

Vi skelner mellem datavisualisering og infografik. Infografik formidler en historie. Datavisualisering er nøgtern visning af data til fx sammenligning og overblik. 

Vær meget opmærksom på {% include links/internal-link.html linktext="tilgængelighed i forbindelse med grafik og visualisering" %}.

## Datavisualisering

Datavisualisering er en grafisk repræsentation af et datasæt som fx et diagram eller en graf. 

{% include links/internal-link.html linktext="Læs mere om datavisualisering" %}

<figure>
    <img src="/assets/img/design/datavisualisering/piechart.svg" class="w-percent-50" alt="Eksempel på kagediagram, der viser procentfordeling af folks vurdering af oplevelsen" />
    <figcaption>
        <p>46% melder at de har haft en meget god oplevelse og 18% melder at de har haft en god oplevelse. 15% en dårlig oplevelse, 17% meget dårlig og 4% ved ikke.</p>
    </figcaption>
</figure>

## Infografik

Infografik kan indeholde datavisualiseringer, men er ofte illustrationer af personer, ting, processer, mm. sat sammen så det formidler et budskab. 

{% include links/internal-link.html linktext="Læs mere om infografik" %}

<figure>
    <img src="/assets/img/design/infografik/when-bike-tablet.svg" alt="Hvornår bruger vi cyklen? 32% fritid, 26% ærinde, 25% arbejde, 14% uddannelse, 2% erhverv" />
    <figcaption>
        <p>40% af cykelturene er ture til og fra arbejde og uddannelse. 26% er ærindeture, 32% af turene er fritidsture og blot 2% er erhvervsture.</p>
        <p>Kilde: Transportvaneundersøgelsen 2016-2019</p>
    </figcaption>
</figure>

{:#retningslinjer}
## Anvendes til  

Datavisualisering og infografik anvendes til at sammenfatte og formidle data og information grafisk på en måde, der øger brugerens forståelse af indholdet.

## Anvendes ikke til  

Brug ikke infografik og datavisualiseringer som dekoration eller for at pifte løsningen op.

Brug ikke infografik og datavisualisering, hvis det bliver uoverskueligt eller på anden vis hæmmer brugernes forståelse af indholdet.

## Vejledning  

Overvej hvorvidt data eller information er for kompleks til en visuel præsentation. Det er vigtigt at datavisualiseringer og infografikker forbedrer formidlingen og ikke skaber mere forvirring.

Overvej grundigt, hvordan infografikken og datavisualiseringen bygges, da der skal tages højde for brugere af hjælpeteknologier som skærmlæsere. Infografik og datavisualisering i HTML/CSS er at foretrække, da det gør grafikken tilgængelig for brugere med skærmlæsere og for navigation med keyboard. Det giver ydermere mulighed for bedre skalering på tværs af forskellige skærmstørrelser. Vær opmærksom på at bygge HTML/CSS, så det er læseligt for en skærmlæser. Det er ikke altid muligt at oprette infografik og datavisualisering som HTML/CSS og man vil i stedet benytte en flad raster grafikfil (SVG, PNG, JPG, GIF). I sådanne tilfælde er et godt gennemtænkt tekstalternativ (se nedenfor) yderst vigtigt. 

{% include links/external-link.html linktext="Inkludér altid tekstalternativer" %} fx en beskrivende tekst, som placeres under infografik/datavisualisering. I nogle tilfælde kan en numerisk tabel sammen med grafikken, der også gengiver dataene, give yderligere tilgængelighed. Dette er især godt, når forskellen er marginal og præcise tal ikke kan passe ind i mindre dele af datavisualiseringen – når “kagestykkerne” fx bliver for små i et “kagediagram”.


