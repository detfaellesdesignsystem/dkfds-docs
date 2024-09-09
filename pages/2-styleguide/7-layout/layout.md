---
permalink: "/styleguide/layout/"
redirect_from:
- "/design/layout/"
- "/design/sideopbygning/"
- "/komigang/tildesignere/sideopbygning/"
- "/komigang/regler-principper-layout/"
layout: styleguide
category: Styleguide_category
subcategory: Styleguide
title: Layout
lead: Et godt layout er harmonisk, ensartet, logisk opbygget og understøtter brugerens handlinger. Det er således både behageligt for øjet og let for brugeren at anvende.
description: Gennemgang af sideopbygningen i en selvbetjeningsløsning ved brug af FDS - set fra et UX perspektiv.
tags:
- Header
---

{% include anchorlinks.html headings="Layout" %}

## Grundlæggende struktur {#{% include create-id.html heading="Grundlæggende struktur" %}}

En selvbetjeningsløsning er delt op i tre overordnede områder:

- Header
- Indhold
- Footer

### Header {#{% include create-id.html heading="Header" %}}

<img src="{{ site.baseurl }}/assets/img/descriptionimages/virk-header-layout.png" class="screenshot bg-darkgrey p-5" alt="Eksempel på en header i designsystemet" />

Headeren identificerer portal, ansvarlig myndighed og den bruger, der er logget ind med NemLog-in. Headeren fungerer også til navigation og overordnet styring af selvbetjeningsløsningen. Se {% include links/component-guideline-link.html linktext="header-komponenten" %}.

### Indhold

<img src="{{ site.baseurl }}/assets/img/descriptionimages/virk-indhold-layout.png" class="screenshot bg-darkgrey p-5" alt="Eksempel på en sides hovedindhold i designsystemet" />

Det specifikke indhold i selvbetjeningsløsningerne kan variere. Følg designsystemets {% include links/internal-link.html linktext="layoutprincipper" %}, når du designer din sides indhold.

### Footer

<img src="{{ site.baseurl }}/assets/img/descriptionimages/Footer_eksempel.svg" class="bg-darkgrey p-5" alt="Eksempel på en footer i designsystemet" />

Footeren fungerer som sidens afslutning og indeholder altid ansvarlig myndighed, tilgængelighedserklæring og cookieoplysning. Det er op til den enkelte myndighed at vælge en footer, som passer til den mængde indhold, der er rigtig for den konkrete selvbetjeningsløsning. Se {% include links/component-guideline-link.html linktext="footer-komponenten" %}.

## Layoutprincipper {#{% include create-id.html heading="Layoutprincipper" %}}

Designsystemets layoutprincipper er udarbejdet med henblik på at gøre den enkelte sides opbygning overskuelig for brugeren. Principperne retter sig særligt mod selvbetjeningsløsninger til lavfrekvente og ikke-professionelle brugere.

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
        <img src="{{ site.baseurl }}/assets/img/descriptionimages/Let_og_luftig.svg" class="my-5 mx-2" alt="Grafisk visning af en side med luft mellem indholdet" />
    </div>
</div>
<div class="row mt-5">
    <div class="col-12 col-lg-5 bg-alternative">
        <h3 class="h5">Vis hvad der hænger sammen med hvad</h3>
        <p>Skab fx klare gestalter: Placer elementer, der hører sammen, tættere på hinanden, og adskil/fjern elementer, der ikke hører sammen, fra hinanden.</p>
    </div>
    <div class="col-12 col-lg-7 bg-darkgrey align-text-center">
        <img src="{{ site.baseurl }}/assets/img/descriptionimages/Sammenhaenge.svg" class="my-5 mx-2" alt="Grafisk visning af en side med tydelig gruppering af indholdet" />
    </div>
</div>
<div class="row mt-5">
    <div class="col-12 col-lg-5 bg-alternative">
        <h3 class="h5">Del indholdet op i små bidder</h3>
        <p>Gør layoutet overskueligt ved at dele løsningen eller siden op i mindre bidder. Fx et spørgsmål pr. side i en trinbaseret løsning. Brug overskrifter, underoverskrifter og lister til at skabe overskuelighed på teksttunge sider.</p>
    </div>
    <div class="col-12 col-lg-7 bg-darkgrey align-text-center">
        <img src="{{ site.baseurl }}/assets/img/descriptionimages/Del_op_i_trin.svg" class="my-5 mx-2" alt="Grafisk visning af en løsning opdelt i flere trin" />
    </div>
</div>
<div class="row mt-5 mb-8">
    <div class="col-12 col-lg-5 bg-alternative">
       <h3 class="h5">Brug et responsivt grid</h3>
       <p>Brug et grid-system til fx til at styre dit layout. Grid skaber struktur i informationer. Responsivt grid tilpasser sig desuden skærmformatet.</p>
       <p>{% include links/internal-link.html linktext="Grid’et i designsystemet" %}</p>
       <p>{% include links/internal-link.html linktext="Eksempler på selvbetjeningsløsninger" %}</p>
       <p>{% include links/internal-link.html linktext="Eksempler på templates" %}</p>
    </div>
    <div class="col-12 col-lg-7 bg-darkgrey align-text-center">
        <img src="{{ site.baseurl }}/assets/img/descriptionimages/Brug_et_grid.svg" class="my-5 mx-2" alt="Grafisk visning af en side opbygget efter et gridsystem" />
    </div>
</div>