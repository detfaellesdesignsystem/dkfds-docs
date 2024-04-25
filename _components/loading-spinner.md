---
permalink: "/komponenter/spinner/"
redirect_from:
- "/kode/komponenter/spinner/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Loading spinner
lead: "En spinner er et visuelt aktivt og synligt signal til brugeren om, at indlæsningen af en side eller delfunktion er forsinket."
description: "En spinner er et visuelt aktivt og synligt signal til brugeren om, at indlæsningen af en side eller delfunktion er forsinket."
tags:
tabs: "Retningslinjer, kode"
---

{% include tabs.html guidelines=true code=true %}

{% include code/preview-box.html component="spinner" title="Eksempel på spinner komponent" classes="intro-example" %}

<!--split-->

## Sådan bruges komponenten {#{% include create-id.html heading="Sådan bruges komponenten" %}}

### Anvendes til

En spinner anvendes til at signalere en forsinket indlæsning af en side eller del-funktion ved at give brugeren en synlig respons.

### Anvendes ikke til

Spinner skal ikke anvendes som en standard komponent på alle løsninger, da det må forventes at langt størstedelen vil kunne indlæse inden for 3 sekunder.

### Vejledning

Anvend kun spinners i særdeles begrænset omfang og kun på løsninger, hvor der kan forventes ventetid.

En spinner skal ikke anvendes til kompensation for en permanent langsom performance.

#### Eksempler på beskeder

Nedenstående tider og beskeder er vejledende og kan tilpasses så det passer bedre til løsningen. Det samme gælder time-out, der skal sættes så den afspejler løsningen.

##### Beskeder på spinner med kort svartid
- 0 sekunder: "Arbejder"
- 5 sekunder: "Arbejder stadig"
- 11 sekunder: "Det tager længere end forventet, beklager"
- 18 sekunder: "Vi er stadig i gang, undskyld ventetiden"
- Efter 25 sekunder bør løsningen time-out og sende brugeren videre til en undskyldende fejlside

##### Beskeder på spinner med forventet lang svartid
Er der tale om en service, hvor man fra start af ved at det tager flere minutter skal den første besked afspejle det, her illustreret ved en løsning der tager 3-5 minutter:

- 0 sekunder: "Det tager 3-5 minutter, hav tålmodighed"
- 5 minutter: "Nu burde der ikke gå meget længere"
- 5:30 minutter: "Det tager længere end forventet, beklager" 
- 6 minutter: "Vi er stadig i gang, undskyld ventetiden"
- 6:30 minutter: time-out og send til undskyldende fejlside

<!--split-->

## Installation {#{% include create-id.html heading="Installation" append="-kode" %}}

### HTML Struktur

{% include code/syntax.html component="spinner" copybutton=true %}

For at ændre spinnerens størrelse kan `font-size` gøres større eller mindre.


Hvis dele af siden ændres, når spinneren er færdig, tilføj da de korrekte attributter til området, så brugere af hjælpeteknologier får besked om ændringen. Undersøg de korrekte værdier, der passer til løsningen for attributterne `aria-live` og `aria-atomic`. 

Anvend ARIA attributten `aria-busy="true"` på elementet, der er igang med at blive opdateret til at markere for skærmlæsere, at der er en live region i gang med indlæsning og sæt værdien til `false`, når den er indlæst.

### Javascript
Der medfølger ikke funktionalitet med denne komponent. Man skal derfor selv i løsningen implementere opdateringen af statusmeddelelsen som ventetiden forlænges.
