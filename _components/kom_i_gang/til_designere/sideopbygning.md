---
permalink: /komigang/tildesignere/sideopbygning/
redirect_from:
- /design/sideopbygning/
layout: styleguide
title: Sideopbygning (layout)
category: Kom_i_gang_category
subcategory: Kom i gang
parentlink: /komigang/tildesignere/
lead: Dette afsnit beskriver regler og principper for struktur og placering af komponenter i en selvbetjeningsløsning. Et godt layout er harmonisk, ensartet, logisk opbygget, og understøtter brugerens handlinger. Det er således både behageligt for øjet og let for brugeren at anvende.
anchor: true
subnav:
- text: Grid (12 kolonner)
  href: '#grid'
- text: Baseline grid
  href: '#baselinegrid'
- text: Grundlæggende struktur
  href: '#struktur'
- text: Header
  href: '#header'
- text: Indhold
  href: '#indhold'
- text: Footer
  href: '#footer'
---
<hr class="my-6" />
<h2 id="grid">Grid (12 kolonner)</h2>
<p>Det Fælles Designsystem baserer sit responsive layout på en opdeling af siden i 12 lige bredde kolonner med 32px (16px på hver side af en kolonne) afstand mellem hver kolonne. Det giver ro, overskuelighed og forudsigelighed, når man placerer sidens komponenter indenfor et grid og får en side og dens søskendesider til at fremtræde sammenhængende. Det har positiv betydning for billedstørrelser og andre elementer.</p> 
<h3>Responsivt med break points</h3>
<p>Det Fælles Designsystem er responsivt og tilpasser sig således automatisk det tilgængelige vinduesareal.</p>
<p>Sidens break points – de værdier, hvorefter siden automatisk tilpasser sig arealet – er:</p>
<ul>
    <li>Desktop/stor skærm: 1200px</li>
    <li>Desktop/middel skærm: 992px</li>
    <li>Tablet: 768px</li>
    <li>Mobil: 576px</li>
</ul>

<h2 id="baselinegrid">Baseline grid (8 point)</h2>
<p>I Det Fælles Designsystem går alle lodrette dimensioner, højder på komponenter og afstande i højderetningen op med en faktor 8. Dvs. 8px, 16px, 24px, 32px, 40px, 48px, 56px, etc.  Det er designsystemets baseline grid.</p>
<p>Gentagelsen af værdier skaber ro og balance på tværs af det visuelle layout og mellem sidens lodrette elementer. For tekst er det ikke tekstens størrelse, men linjehøjden, der skal gå op i en faktor 8.</p>
<p>Du kan læse mere om baseline grid i artiklen <a href="https://builttoadapt.io/8-point-grid-vertical-rhythm-90d05ad95032" class="icon-link">8-Point Grid: Vertical Rhythm<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>.</p>

<hr class="my-6" />
<h2 id="struktur">Grundlæggende struktur</h2>
<p>En selvbetjeningsløsning er delt op i tre overordnede områder.</p>
<ul>
    <li>Header</li>
    <li>Indhold</li>
    <li>Footer</li>
</ul>

<p><strong>Header</strong></p>
<div><img src="{{ site.baseurl }}/img/descriptionimages/Header_eksempel.svg" class="bg-darkgrey p-5" alt="Viser opbygningen af en side i designsystemet"></div>

<p><strong>Indhold</strong></p>
<div><img src="{{ site.baseurl }}/img/descriptionimages/Indhold_eksempel.svg" class="bg-darkgrey p-5" alt="Viser opbygningen af en side i designsystemet"></div>

<p><strong>Footer</strong></p>
<div><img src="{{ site.baseurl }}/img/descriptionimages/Footer_eksempel.svg" class="bg-darkgrey p-5" alt="Viser opbygningen af en side i designsystemet"></div>

<h2 id="header">Header</h2>
<p>Headeren identificerer portal, ansvarlig myndighed og den bruger, der er logget ind med NemLog-in. Headeren fungerer også til navigation og overordnet styring af selvbetjeningsløsningen.</p>
<p>Headeren er ens på tværs af trin og undersider i en given selvbetjeningsløsning. Den er således et “ankerpunkt”, som brugeren altid kan vende tilbage til og orientere sig ved. </p>
<p>En header består af et antal rækker, som vist nedenfor.</p>
<ul>
    <li>Række 1 og 2 er obligatoriske</li>
    <li>Række 3 til 5 er valgfri</li>
</ul>
<p>Når du laver en header, bør du følge disse principper:</p>
<ul>
    <li>Brug kun de nødvendige rækker</li>
    <li>Hold altid rækkefølgen, uanset kombinationen</li>
</ul>
<p>OBS: Jo enklere navigationen er, desto bedre for brugeren.<br/>
   Brug derfor kun række 3 til 5, knapper, links og ekstra navigation, når det er absolut nødvendigt.</p>
<p>Brug kun rækker 3,4,5, samt knapper, links og ekstra navigation, når det er nødvendigt.</p>
<figure><img src="{{ site.baseurl }}/img/descriptionimages/header-opbygning.png" alt="Viser opbygningen af designsystemets header"></figure>
<h3 class="h5">Række 1 (obligatorisk)</h3>
<p>Portal-logo, NemLog-in-oplysninger og ”Log af” knap.</p>
<h3 class="h5">Række 2 (obligatorisk)</h3>
<p>Selvbetjeningens navn (løsningstitel), ansvarshavende myndighed og eventuelt support/kontakt oplysninger.</p>
<h3 class="h5">Række 3 (frivillig)</h3>
<p>Sidenavigation (topnavigation) i løsningen, eventuelt knapper, eventuelt ekstramenu.</p>
<h3 class="h5">Række 4 (frivillig)</h3>
<p>Flere sorteringsmuligheder, eventuelt ekstramenu, eventuelt knapper.</p>
<h3 class="h5">Række 5 (frivillig)</h3>
<p>Funktionslinks (igangsætter system- eller OS-funktionalitet, fx gem, print osv.)</p>
<p>En header med fem rækker er meget tilpasningsvenlig og gør det muligt at servicere både simple og komplekse løsninger. Den er også kompleks at anvende for brugerne. Du bør derfor udgangspunkt anvende færre end fem rækker i din header.</p>
<p><a href="/komponenter/headers/">Se header-komponenten</a></p>

<h2 id="indhold">Indhold</h2>
<p>Det specifikke indhold i selvbetjeningsløsningerne kan variere. De konkrete retningslinjer for layout er derfor erstattet af nogle principper, som du skal betragte som anbefalinger, da de ikke stiller krav om, hvordan en given selvbetjeningsløsning specifikt skal se ud. Principperne retter sig særligt mod selvbetjeningsløsninger til lavfrekvente og ikke-professionelle brugere. De er følgende:</p>
<div class="row">
    <div class="col-12 col-lg-5 bg-alternative">
        <h3 class="h5">Gør det let at skimme indholdet</h3>
        <p>Lad fx overskrifter, labels, brødtekst, inputfelter og primærknap flugte til venstre ned ad siden, så øjets flugt primært foregår i en bevægelse op og ned ad siden (i én kolonne).</p>
    </div>
    <div class="col-12 col-lg-7 bg-darkgrey text-align-center">
        <img src="{{ site.baseurl }}/img/descriptionimages/Skimme.svg" class="my-5 mx-2" alt="Grafisk visning af en side som er let at skimme" />
    </div>
</div>

<div class="row mt-5">
    <div class="col-12 col-lg-5 bg-alternative">
        <h3 class="h5">Gør løsningen let og luftigt</h3>
        <p>Dvs. gør god brug af “luft” (white space). Det gør sidens indhold lettere at overskue og forstå.</p>
    </div>
    <div class="col-12 col-lg-7 bg-darkgrey align-text-center">
        <img src="{{ site.baseurl }}/img/descriptionimages/Let_og_luftig.svg" class="my-5 mx-2" alt="Luft omkring elementer" />
    </div>
</div>
<div class="row mt-5">
    <div class="col-12 col-lg-5 bg-alternative">
        <h3 class="h5">Vis hvad der hænger sammen med hvad</h3>
        <p>Skab fx klare gestalter: Placer elementer, der hører sammen, tættere på hinanden, og adskil/fjern elementer, der ikke hører sammen, fra hinanden.</p>
    </div>
    <div class="col-12 col-lg-7 bg-darkgrey align-text-center">
        <img src="{{ site.baseurl }}/img/descriptionimages/Sammenhaenge.svg" class="my-5 mx-2" alt="Billedet viser gruppering af elementer" />
    </div>
</div>
<div class="row mt-5">
    <div class="col-12 col-lg-5 bg-alternative">
        <h3 class="h5">Del indholdet op i små bidder</h3>
        <p>Gør layoutet overskueligt ved at dele løsningen eller siden op i mindre bidder. Fx et spørgsmål pr. side i en trinbaseret løsning. Brug overskrifter, underoverskrifter og lister til at skabe overskuelighed på teksttunge sider.</p>
    </div>
    <div class="col-12 col-lg-7 bg-darkgrey align-text-center">
        <img src="{{ site.baseurl }}/img/descriptionimages/Del_op_i_trin.svg" class="my-5 mx-2" alt="Gruppering af indhold i små bidder" />
    </div>
</div>
<div class="row mt-5">
    <div class="col-12 col-lg-5 bg-alternative">
       <h3 class="h5">Brug et responsivt grid</h3>
       <p>Brug et grid-system til fx til at styre dit layout. Grid skaber struktur i informationer. Responsivt grid tilpasser sig desuden skærmformatet.</p>
       <p><a href="/design/grid/">Grid’et i designsystemet</a></p>
       <p><a href="/eksempler/">Eksempler på selvbetjeningsløsninger</a></p>
    </div>
    <div class="col-12 col-lg-7 bg-darkgrey align-text-center">
        <img src="{{ site.baseurl }}/img/descriptionimages/Brug_et_grid.svg" class="my-5 mx-2" alt="Side med gridsystem" />
    </div>
</div>

<h2 id="footer">Footer</h2>
<p>Footeren fungerer som sidens afslutning. Her får du mulighed for endnu en gang at angive informationer om løsningen: Hvilken myndighed, der er ansvarlig for selvbetjeningsløsningen, og hvordan brugeren får support og kommer i kontakt med dig som myndighed. </p>
<p>I footeren har du også mulighed for at sende brugere videre ved at linke ud af selvbetjeningsløsningen. Fx kan du angive ikke-løsningsspecifikke informationer i form af telefontider og lignende.</p>
<p>Vi anbefaler, at du afslutter din selvbetjeningsløsning med en footer.</p>
<p>Designsystemet giver mulighed for forskellige typer footere, som dækker forskellige behov. En footer kan være placeret i en række eller i 4 blokke af 3 kolonner.</p>

<h3 class="h4">Footer på en række</h3>
<figure><img src="{{ site.baseurl }}/img/descriptionimages/footer-paa-en-linje.png" alt="Footer på linie"></figure>

<h3 class="h4">Footer i 4 blokke af 3 kolonner</h3>
<figure><img src="{{ site.baseurl }}/img/descriptionimages/footer-i-4-blokke-af-3-kolonner.png" alt="Footer i 4 kolonner"></figure>

<p>Linjen skærer hele skærmens bredde og er af typen "ydre streg". Footeren placerer sig enten i bunden af browservinduet eller 64px fra sidste element på siden ned til linjen.</p>

<p>Under linjen er der 24 px til overskrifter og tekst. Overskrifter og tekst er 16px med linjehøjde 24px. Herunder er der endnu 24px, inden siden slutter.</p>

<p>Footeren indeholder altid ansvarlig myndighed, tilgængelighedserklæring og cookieoplysning. Det er op til den enkelte myndighed at vælge en footer, som passer til den mængde indhold, der er rigtig for den konkrete selvbetjeningsløsning.</p>

<p><a href="/komponenter/footers/">Se footer-komponenten</a></p>

