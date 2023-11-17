---
permalink: "/komponenter/faneblade/guidelines/"
redirect_from:
- "/komponenter/tabnav/"
- "/komponenter/faneblad/"
- "/komponenter/faneblade/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Faneblade
lead: Faneblade gør det muligt for brugerne at bladre imellem relaterede sektioner
  af indhold og kun få vist en sektion af gangen. Vær opmærksom på om dine brugere
  ser de skjulte sektioner, når du anvender faneblade.
component: "tabs-buttons"
componentTitle: "Eksempel på faneblade"
componentLink: true
anchor: false
description: Faneblade gør det muligt for brugerne at bladre imellem relaterede sektioner
  af indhold og kun få vist en sektion af gangen.
tags:
---

<div class="alert alert-warning" role="alert">
    <div class="alert-body">
        <h2 class="alert-heading">Eksperimentel</h2>
        <p>Denne komponent er for nuværende eksperimentel, da der afventes yderligere undersøgelser.</p>
        <p>Komponenten lægger sig op af <a href="https://design-system.service.gov.uk/components/tabs/" class="icon-link">GOV.UK Design Systems tab komponent<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a> og <a href="https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-2/tabs.html" class="icon-link">W3s practice eksempler<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>, hvor der afventes yderligere info.</p>
        <p>Brugerundersøgelser er efterspurgt for at bekræfte:</p>
        <ul>
            <li>at denne tilgang til faneblade er den bedste løsning for skærmlæsere og brugere af tastatur</li>
            <li>hvordan denne komponent skal opføre sig på små skærme</li>
        </ul>
    </div>
</div>

{:#retningslinjer}
## Retningslinjer

### Anvendes til

Faneblade anvendes til at skifte mellem forskellige visninger af indhold indenfor samme kontekst.

Faneblade egner sig bedst som en avanceret funktionalitet for afgrænsede målgrupper.

### Anvendes ikke til

Faneblade kan ikke erstatte individuelle sider i en selvbetjeningsløsning eller hjemmeside.

Faneblade anvendes ikke til at opdele et logisk flow eller en sekvens af handlinger.

### Vejledning

Faneblade anvendes i afgrænsede sektioner. Indholdet vises indrammet, så brugeren ikke er i tvivl om hvor det starter og slutter. Det er muligt at anvende flere fanebladskomponenter på en side. 

Overvej om faneblade er den rette løsning. Vær opmærksom på, at brugeren kun kan se indholdet fra én fane ad gangen. Alternativer til faneblade kan være accordions eller detaljekomponenten, hvis du ønsker at indhold først bliver synligt når brugeren aktivt vælger det.
Opdeling af indholdet på flere sider kan også være et alternativ. Faneblade bør kun anvendes hvis indholdet i de forskellige faneblade deler overordnet kontekst.

Hvis du ønsker at anvende faner, bør det testes på din målgruppe før din løsning går i produktion.

{% include dos-donts-box.html component="faneblad-dos-donts" title="Faneblade do's and don'ts" %}

### Faneblade med URL-skifte

Fanebladskomponenten kan anvendes til opdeling af en side i flere underafsnit. Hvert skifte vil kunne afspejles i sidens URL, og det vil være muligt at linke direkte til, og åbne, et faneblad.
Ved denne brug bør sidens indhold, fra fanebladskomponenten og ned være knyttet til det åbne faneblad. I dette tilfælde må der kun anvendes én fanebladskomponent af denne type på hver side.
Vær opmærksom på, af faneblade ikke skal anvendes i stedet for en undermenu. Indhold i faneblade skal stadig være relateret til hinanden.

{% include code/preview-image.html component="tabs-urls" title="Eksempel på faneblade med URL-skifte" %}

### Faneblade med ikoner

Faneblade kan vises med ikoner hvis disse understøtter de angivne sektioner visuelt. Vi anbefaler at være forsigtig med denne løsning, da et ikon der læses forkert eller misforståes kan forvirre brugeren mere end det hjælper. Så benyt kun ikoner hvis de er klare i budskabet og hjælper med at kommunikere det underliggende indhold.
Ikoner skal altid understøttes af en label med fanebladets navn.

{% include code/preview-box.html component="tabs-buttons-icons" title="Eksempel på faneblade med ikoner"%} 

#### Referencer

{:.nobullet-list}
- <a href="https://www.smashingmagazine.com/2009/06/module-tabs-in-web-design-best-practices-and-solutions/" class="icon-link">Jacob Gube: Module Tabs in Web Design: Best Practices and Solutions (2009)<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>
- <a href="https://www.nngroup.com/articles/tabs-used-right/" class="icon-link">Jakob Nielsen: Tabs, Used Right (2016)<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>
