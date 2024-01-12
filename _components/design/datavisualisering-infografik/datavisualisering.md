---
permalink: "/design/datavisualisering-infografik/datavisualisering/"
parentlink: "/design/datavisualisering-infografik/"
layout: styleguide
category: Styleguide_category
subcategory: Styleguide
title: Datavisualisering
lead: Datavisualisering er en grafisk repræsentation af et datasæt som fx et diagram, en graf eller et kort. 
anchor: false
description: Datavisualisering er en grafisk repræsentation af et datasæt som fx et diagram, en graf eller et kort. 
tags:
- data
- datavisualisering
- grafik
- diagrammer
- diagram
- graf
- infografik
---

Vær opmærksom på {% include links/internal-link.html linktext="tilgængelighed i forbindelse med grafik og visualisering" %} og anvend designsystemets {% include links/internal-link.html linktext="datavisualiseringsfarver" %}.

## Cirkeldiagrammer (Kagediagram)
Et cirkeldiagram består af en cirkel, som opdeles i områder, der svarer til de enkelte datas størrelse. Det bruges typisk, hvis data er en del af en samlet mængde.

Det anbefales at benytte en kvalitativ farvepalette, hvor der ikke er en farverækkefølge eller en sammenhæng mellem farverne (modsat sekventiel).  Det er vigtigt at, værdien af farverne opleves som nogenlunde ens. Ved brug af mønstre sammen med farver, kan brugere med synshandikap som farveblindhed eller andre handikap nemmere adskille de forskellige farver fra hinanden.

For at gøre datavisualiseringen endnu mere tilgængelig, kan en tabel med data fra cirkeldiagrammet placeres under eller i forbindelse med diagrammet. 

{:.mb-6}
### Eksempel: Andelen af ture på cykel i Danmark
<figure class="w-percent-md-50 mb-6">
    <img src="/assets/img/design/datavisualisering/piechart-transport.svg" class="w-percent-100" alt="Eksempel på kagediagram, der viser procentfordeling af folks vurdering af oplevelsen" />
    <figcaption>
        <table class="table table--borderless table--compact mt-4" id="bicycle-trips-denmark-table">
            <thead>
                <tr>
                    <th>Ture fordelt på transportmiddel</th>
                    <th>Procent</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Bil</td>
                    <td>58%</td>
                </tr>
                <tr>
                    <td>Gang</td>
                    <td>20%</td>
                </tr>
                <tr>
                    <td>Cykel</td>
                    <td>15%</td>
                </tr>
                <tr>
                    <td>Kollektiv</td>
                    <td>6%</td>
                </tr>
                <tr>
                    <td>Andet</td>
                    <td>1%</td>
                </tr>
            </tbody>
        </table>
        <p class="figcaption">Kilde: Transportvaneundersøgelsen 2016-2019</p>
    </figcaption>
</figure>

## Søjlediagram (kolonnediagram)

Et søjlediagram består af søjler, som går op til højden af de forskellige data. Det kan både være stående og liggende. Det anbefales at bruge denne type diagram til sammenligninger, der består af 10 eller færre kategorier. 

Ved brug af mønstre sammen med farver, kan brugere med synshandikap som farveblindhed eller andre handikap nemmere adskille de forskellige farver fra hinanden. Diagrammet vil på den måde også fungere i sort/hvid.

For at gøre datavisualiseringen mere tilgængelig, kan beskrivende tekst med en opsummering eller konklusion placeres under eller i forbindelse med diagrammet. 

### Eksempel: Cyklede kilometer fordelt på alder
<figure>
    <img src="/assets/img/design/datavisualisering/bar-chart.svg" alt="Eksempel på søjlediagram, der viser cyklede kilometer pr. person pr. dag fordelt på alder" class="w-percent-md-70">
<figcaption><p>Unge mennesker fra 18-34 år cykler mest. Ældre mennesker fra 67-84 år og børn fra 6-9 cykler mindst.</p><p>Kilde: Transportvaneundersøgelsen 2016-2019</p></figcaption>
</figure>

## Kurvediagram (linjediagram)

Kurvediagrammer bruges ikke lige så tit som søjlediagram og cirkeldiagram, men er gode til at vise en udvikling over tid, samt håndtere lidt større datamængder.

Brug gerne figurer som linjemærker sammen med farver. På den måde kan brugere med synshandikap som farveblindhed og andre handikap nemmere adskille de forskellige data  fra hinanden. Men faktisk hjælper det alle brugere til en hurtigere og nemmere afkodning. Diagrammet vil på den måde også fungere i sort/hvid.

Der kan også benyttes forskellige typer af linjer, stiplet, hel, prikker - for at bruge andet end farver til at identificere de forskellige værdier i diagrammet.

Etiketter gør det også hurtigere at aflæse data i diagrammet. Det kan være statiske etiketter eller interaktive etiketter.

For at gøre datavisualiseringen mere tilgængelig, kan beskrivende tekst med en opsummering eller konklusion placeres under eller i forbindelse med diagrammet. 

### Eksempel: Mest cykling på ture under 5km (2014-17)
<figure class="mb-6">
    <img src="/assets/img/design/datavisualisering/graph-biking.svg" class="w-percent-md-70" alt="Eksempel på graf der viser fordelingen af cykelture og cykelkm efter turens længde." />
    <figcaption>
        <p>Figuren viser fordelingen af cykelture og cykelkm efter turens længde. Det ses, at lige over halvdelen af alle cykelture er under 2km, men at disse ture kun udgør 23% af cykeltrafikarbejdet.</p>
        <p>Kilde: DTU</p>
    </figcaption>
</figure>








