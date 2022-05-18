---
permalink: /komponenter/spinner/
layout: styleguide
type: element
title: Loading spinner
category: Komponenter_category
subcategory: Komponenter
description: "En spinner er et visuelt aktivt og synligt signal til brugeren om, at indlæsningen af en side eller delfunktion er forsinket."
tags:
lead: "En spinner er et visuelt aktivt og synligt signal til brugeren om, at indlæsningen af en side eller delfunktion er forsinket."
component: spinner
componentTitle: "Eksempel på spinner komponent"
componentCode: "/kode/komponenter/spinner/"
---

{:.h3 #retningslinjer}
## Anvendes til

En spinner anvendes til at signalere en forsinket indlæsning af en side eller del-funktion ved at give brugeren en synlig respons.

{:.h3}
## Anvendes ikke til

Spinner skal ikke anvendes som en standard komponent på alle løsninger, da det må forventes at langt størstedelen vil kunne indlæse inden for 3 sekunder.

{:.h3}
## Vejledning

Anvend kun spinners i særdeles begrænset omfang og kun på løsninger, hvor der kan forventes ventetid.

En spinner skal ikke anvendes til kompensation for en permanent langsom performance.

### Eksempler på beskeder

Nedenstående tider og beskeder er vejledende og kan tilpasses så det passer bedre til løsningen. Det samme gælder time-out, der skal sættes så den afspejler løsningen.

{:.h5}
#### Beskeder på spinner med kort svartid
- 0 sekunder: "Arbejder"
- 5 sekunder: "Arbejder stadig"
- 11 sekunder: "Det tager længere end forventet, beklager"
- 18 sekunder: "Vi er stadig i gang, undskyld ventetiden"
- Efter 25 sekunder bør løsningen time-out og sende brugeren videre til en undskyldende fejlside

{:.h5}
### Beskeder på spinner med forventet lang svartid
Er der tale om en service, hvor man fra start af ved at det tager flere minutter skal den første besked afspejle det, her illustreret ved en løsning der tager 3-5 minutter:

- 0 sekunder: "Det tager 3-5 minutter, hav tålmodighed"
- 5 minutter: "Nu burde der ikke gå meget længere"
- 5:30 minutter: "Det tager længere end forventet, beklager" 
- 6 minutter: "Vi er stadig i gang, undskyld ventetiden"
- 6:30 minutter: time-out og send til undskyldende fejlside