---
permalink: "/design/grid/guidelines/"
redirect_from:
- "/grid/"
- "/design/grid/"
- "/design/layout/grid/"
layout: styleguide
category: Styleguide_category
subcategory: Styleguide
title: Grid og baseline grid
lead: Brug et grid til at placere komponenterne i dit layout horisontalt, og brug baseline grid til at skabe en vertikal rytme på siden.
anchor: false
description: Det Fælles Designsystem baserer sit responsive layout på en opdeling
  af siden i 12 lige brede kolonner.
tags:
- grid
- grids
- kolonner
- opdeling
- spalter
---

De fleste selvbetjeningsløsninger kan med fordel nøjes med at venstrestille alt indhold og dermed kun anvende cirka halvdelen af en desktop sides bredde. I sådanne tilfælde bruges til horisontale grid primært til at definere enkelte komponenters bredde.

Det Fælles Designsystem anviser et 12-kolonne responsivt grid, men du er velkommen til at anvende responsivt grid i det antal kolonner, der skal til i dit design.

Det vigtige er at du anvender responsivt grid.

Når du anvender et responsivt grid sørger du for at din selvbetjeningsløsning tilpasser sig den skærmstørrelse som din selvbetjeningsløsning tilgås via. - uanset om det er en mindre mobilskærm eller en større stationær skærm.

## 12 kolonner (horisontalt)

Det Fælles Designsystem baserer sit responsive layout på en opdeling af siden i 12 lige brede kolonner med 32px afstand mellem hver kolonne (16 px på hver side af en kolonne). Det giver ro, overskuelighed og forudsigelighed, når man placerer sidens komponenter indenfor et grid og får en side og dens søskendesider til at fremtræde sammenhængende. Det har positiv betydning for billedstørrelser og andre elementer.

I tablet- og mobilvisninger folder layoutet sammen til 8- og 4-grid. På den måde følges proportionerne ad fra størst til mindst. 

## Breakpoints

Det Fælles Designsystem er responsivt og tilpasser sig således automatisk det tilgængelige vinduesareal.

Sidens breakpoints er de værdier, hvorefter siden automatisk tilpasser sig arealet. Du kan anvende nedenstående eller definere dine egne. Det Fælles Designsystem bruger følgende breakpoints:

- Desktop/stor skærm: 1200px
- Desktop/middel skærm: 992px
- Tablet: 768px
- Mobil: 576px

## Eksempler på grid layout

Du kan kombinere de 12 kolonner og flette dem sammen, så du ender med layout varianter, der fx består af 3/9, 4/8, 4/4/4 osv. Alle sider bygger på den måde på det samme fundament, som bidrager til at skabe ro og overblik.

<figure>
    <img src="{{ site.baseurl }}/assets/img/descriptionimages/grid-inddelinger.jpg" class="w-percent-30" alt="Grafik der viser Det Fælles Designsystems grid-inddelinger" title="">
    <img src="{{ site.baseurl }}/assets/img/descriptionimages/grid-inddelinger-artikel.jpg" class="w-percent-30" alt="Grafik der viser Det Fælles Designsystems grid-inddelinger" title="">
    <img src="{{ site.baseurl }}/assets/img/descriptionimages/grid-inddelinger-nav1.jpg" class="w-percent-30" alt="Grafik der viser Det Fælles Designsystems grid-inddelinger" title="">
    <img src="{{ site.baseurl }}/assets/img/descriptionimages/grid-inddelinger-nav2.jpg" class="mt-4 w-percent-30" alt="Grafik der viser Det Fælles Designsystems grid-inddelinger" title="">
    <img src="{{ site.baseurl }}/assets/img/descriptionimages/grid-inddelinger-search.jpg" class="mt-4 w-percent-30" alt="Grafik der viser Det Fælles Designsystems grid-inddelinger" title="">
    <figcaption>Ovenstående er eksempler på mulige kombinationer af kolonner inden for Det Fælles Designsystems 12-grid layout.</figcaption>
</figure>

<figure>
    <img src="{{ site.baseurl }}/assets/img/descriptionimages/grid-layout-cards.jpg" class="mt-4 w-percent-30" alt="Grafik der viser Det Fælles Designsystems grid-inddelinger ved brug af cards" title="">
    <figcaption>I ovenstående eksempel vises hvordan cards aligner på siden ved brug af grid.</figcaption>
</figure>

## Baseline grid (8px vertikalt)

### 8 point
I Det Fælles Designsystem går alle lodrette dimensioner, højder på komponenter og afstande i højderetningen op med en faktor 8. Dvs. 8px, 16px, 24px, 32px, 40px, 48px, 56px, etc.  Det er designsystemets baseline grid.

Gentagelsen af værdier skaber ro og balance på tværs af det visuelle layout og mellem sidens lodrette elementer. For tekst er det ikke tekstens størrelse, men linjehøjden, der skal gå op i en faktor 8.

Du kan læse mere om baseline grid i artiklen <a href="https://builttoadapt.io/8-point-grid-vertical-rhythm-90d05ad95032" class="icon-link">8-Point Grid: Vertical Rhythm<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>.

### 4 point
Ikoner, typografi og nogle elementer i komponenter kan justeres til et 4px grid.

Se Material Designs forklaring af baseline grid i artiklen <a href="https://material.io/design/layout/spacing-methods.html#baseline" class="icon-link">Spacing Methods - Baseline<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>.
