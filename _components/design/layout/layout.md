---
permalink: "/design/layout/"
redirect_from:
- "/design/sideopbygning/"
- "/komigang/tildesignere/sideopbygning/"
- "/komigang/regler-principper-layout/"
layout: styleguide
category: Styleguide_category
subcategory: Styleguide
title: Layout
lead: Et godt layout er harmonisk, ensartet, logisk opbygget og understøtter brugerens handlinger. Det er således både behageligt for øjet og let for brugeren at anvende.
anchor: false
description: Gennemgang af sideopbygningen i en selvbetjeningsløsning ved brug af FDS - set fra et UX perspektiv.
tags:
- Header
---

## Grundlæggende struktur

En selvbetjeningsløsning er delt op i tre overordnede områder.

- Header
- Indhold
- Footer

{:#struktur-header}
### Header

<img src="{{ site.baseurl }}/assets/img/descriptionimages/Header_eksempel.svg" class="bg-darkgrey p-5" alt="Viser opbygningen af en side i designsystemet" />

### Indhold

<img src="{{ site.baseurl }}/assets/img/descriptionimages/Indhold_eksempel.svg" class="bg-darkgrey p-5" alt="Viser opbygningen af en side i designsystemet" />

### Footer

<img src="{{ site.baseurl }}/assets/img/descriptionimages/Footer_eksempel.svg" class="bg-darkgrey p-5" alt="Viser opbygningen af en side i designsystemet" />

## Header

Headeren identificerer portal, ansvarlig myndighed og den bruger, der er logget ind med NemLog-in. Headeren fungerer også til navigation og overordnet styring af selvbetjeningsløsningen.

Headeren er ens på tværs af trin og undersider i en given selvbetjeningsløsning. Den er således et “ankerpunkt”, som brugeren altid kan vende tilbage til og orientere sig ved.

{% include links/component-guideline-link.html linktext="Se header-komponenten" %}

En header består af et antal rækker, som vist nedenfor.

- Række 1 og 2 er obligatoriske
- Række 3 til 5 er valgfri

Når du laver en header, bør du følge disse principper:

- Brug kun de nødvendige rækker
- Hold altid rækkefølgen, uanset kombinationen

OBS: Jo enklere navigationen er, desto bedre for brugeren.
Brug derfor kun række 3 til 5, knapper, links og ekstra navigation, når det er absolut nødvendigt.

Brug kun rækker 3,4,5, samt knapper, links og ekstra navigation, når det er nødvendigt.

<div><img src="{{ site.baseurl }}/assets/img/descriptionimages/header-opbygning.png" alt="Viser opbygningen af designsystemets header" /></div>

<h3 class="h5">Række 1 (obligatorisk)</h3>

Portal-logo, NemLog-in-oplysninger og ”Log af” knap.

<h3 class="h5">Række 2 (obligatorisk)</h3>

Selvbetjeningens navn (løsningstitel), ansvarshavende myndighed og eventuelt support/kontakt oplysninger.

<h3 class="h5">Række 3 (frivillig)</h3>

Navigation (topnavigation) i løsningen, eventuelt knapper, eventuelt ekstramenu.

<h3 class="h5">Række 4 (frivillig)</h3>

Flere sorteringsmuligheder, eventuelt ekstramenu, eventuelt knapper.

<h3 class="h5">Række 5 (frivillig)</h3>

Funktionslinks (igangsætter system- eller OS-funktionalitet, fx gem, print osv.)

En header med fem rækker er meget tilpasningsvenlig og gør det muligt at servicere både simple og komplekse løsninger. Den er også kompleks at anvende for brugerne. Du bør derfor udgangspunkt anvende færre end fem rækker i din header.

{:.h5}
### Links

{% include links/external-link.html linktext="Tilgængelighed: sidestruktur og header" %}

## Indhold

Det specifikke indhold i selvbetjeningsløsningerne kan variere. De konkrete retningslinjer for layout er derfor erstattet af nogle principper, som du skal betragte som anbefalinger, da de ikke stiller krav om, hvordan en given selvbetjeningsløsning specifikt skal se ud. Principperne retter sig særligt mod selvbetjeningsløsninger til lavfrekvente og ikke-professionelle brugere. De er følgende:

<div class="row">
    <div class="col-12 col-lg-5 bg-alternative">
        <h3 class="h5">Gør det let at skimme indholdet</h3>
        <p>Lad fx overskrifter, labels, brødtekst, inputfelter og primærknap flugte til venstre ned ad siden, så øjets flugt primært foregår i en bevægelse op og ned ad siden (i én kolonne). Placer så vidt som muligt det vigtigste indhold øverst.</p>
    </div>
    <div class="col-12 col-lg-7 bg-darkgrey text-align-center">
        <img src="{{ site.baseurl }}/assets/img/descriptionimages/Skimme.svg" class="my-5 mx-2" alt="Grafisk visning af en side som er let at skimme" />
    </div>
</div>

<div class="row mt-5">
    <div class="col-12 col-lg-5 bg-alternative">
        <h3 class="h5">Gør løsningen let og luftigt</h3>
        <p>Dvs. gør god brug af “luft” (white space). Det gør sidens indhold lettere at overskue og forstå.</p>
    </div>
    <div class="col-12 col-lg-7 bg-darkgrey align-text-center">
        <img src="{{ site.baseurl }}/assets/img/descriptionimages/Let_og_luftig.svg" class="my-5 mx-2" alt="Luft omkring elementer" />
    </div>
</div>
<div class="row mt-5">
    <div class="col-12 col-lg-5 bg-alternative">
        <h3 class="h5">Vis hvad der hænger sammen med hvad</h3>
        <p>Skab fx klare gestalter: Placer elementer, der hører sammen, tættere på hinanden, og adskil/fjern elementer, der ikke hører sammen, fra hinanden.</p>
    </div>
    <div class="col-12 col-lg-7 bg-darkgrey align-text-center">
        <img src="{{ site.baseurl }}/assets/img/descriptionimages/Sammenhaenge.svg" class="my-5 mx-2" alt="Billedet viser gruppering af elementer" />
    </div>
</div>
<div class="row mt-5">
    <div class="col-12 col-lg-5 bg-alternative">
        <h3 class="h5">Del indholdet op i små bidder</h3>
        <p>Gør layoutet overskueligt ved at dele løsningen eller siden op i mindre bidder. Fx et spørgsmål pr. side i en trinbaseret løsning. Brug overskrifter, underoverskrifter og lister til at skabe overskuelighed på teksttunge sider.</p>
    </div>
    <div class="col-12 col-lg-7 bg-darkgrey align-text-center">
        <img src="{{ site.baseurl }}/assets/img/descriptionimages/Del_op_i_trin.svg" class="my-5 mx-2" alt="Gruppering af indhold i små bidder" />
    </div>
</div>
<div class="row mt-5">
    <div class="col-12 col-lg-5 bg-alternative">
       <h3 class="h5">Brug et responsivt grid</h3>
       <p>Brug et grid-system til fx til at styre dit layout. Grid skaber struktur i informationer. Responsivt grid tilpasser sig desuden skærmformatet.</p>
       <p>{% include links/internal-link.html linktext="Grid’et i designsystemet" %}</p>
       <p>{% include links/internal-link.html linktext="Eksempler på selvbetjeningsløsninger" %}</p>
    </div>
    <div class="col-12 col-lg-7 bg-darkgrey align-text-center">
        <img src="{{ site.baseurl }}/assets/img/descriptionimages/Brug_et_grid.svg" class="my-5 mx-2" alt="Side med gridsystem" />
    </div>
</div>

## Footer

Footeren fungerer som sidens afslutning. Her får du mulighed for endnu en gang at angive informationer om løsningen: Hvilken myndighed, der er ansvarlig for selvbetjeningsløsningen, og hvordan brugeren får support og kommer i kontakt med dig som myndighed.

I footeren har du også mulighed for at sende brugere videre ved at linke ud af selvbetjeningsløsningen. Fx kan du angive ikke-løsningsspecifikke informationer i form af telefontider og lignende.

Vi anbefaler, at du afslutter din selvbetjeningsløsning med en footer.

Designsystemet giver mulighed for forskellige typer {% include links/component-guideline-link.html linktext="footer" %}, som dækker forskellige behov. En footer kan være placeret i en række eller i 4 blokke af 3 kolonner.

<h3 class="h4">Footer på en række</h3>

<div><img src="{{ site.baseurl }}/assets/img/descriptionimages/footer-paa-en-linje.png" alt="Footer på linie" /></div>

<h3 class="h4">Footer i 4 blokke af 3 kolonner</h3>

<div><img src="{{ site.baseurl }}/assets/img/descriptionimages/footer-i-4-blokke-af-3-kolonner.png" alt="Footer i 4 kolonner"></div>

Linjen skærer hele skærmens bredde og er af typen "ydre streg". Footeren placerer sig enten i bunden af browservinduet eller 64px fra sidste element på siden ned til linjen.

Under linjen er der 24 px til overskrifter og tekst. Overskrifter og tekst er 16px med linjehøjde 24px. Herunder er der endnu 24px, inden siden slutter.

Footeren indeholder altid ansvarlig myndighed, tilgængelighedserklæring og cookieoplysning. Det er op til den enkelte myndighed at vælge en footer, som passer til den mængde indhold, der er rigtig for den konkrete selvbetjeningsløsning.

{% include links/component-guideline-link.html linktext="Se footer komponenten" %}
