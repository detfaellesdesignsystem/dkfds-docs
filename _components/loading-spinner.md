---
permalink: "/komponenter/spinner/"
redirect_from:
- "/kode/komponenter/spinner/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Loading spinner
lead: "En spinner er et visuelt aktivt og synligt signal til brugeren om, at indlæsningen af en side eller delfunktion er undervejs."
description: "En spinner er et visuelt aktivt og synligt signal til brugeren om, at indlæsningen af en side eller delfunktion er undervejs."
tags:
tabs: "Retningslinjer, kode"
---

{% include tabs.html guidelines=true code=true %}

{% include code/preview-box.html component="spinner" title="Eksempel på spinner komponent" classes="intro-example" %}

{% include anchorlinks.html guidelines="LoadingSpinner" code="LoadingSpinner_Kode" %}

<!--split-->

## Sådan bruges komponenten {#{% include create-id.html heading="Sådan bruges komponenten" %}}

### Anvendes til

En loading spinner anvendes til at signalere en igangværende indlæsning af en side eller delfunktion ved at give brugeren en synlig respons. Loading spinneren placeres i direkte forbindelse med det element, der hentes eller interageres med. 

### Anvendes ikke til

Loading spinner skal ikke anvendes som en standardkomponent på alle løsninger, da det må forventes, at langt størstedelen vil kunne indlæses inden for 2 sekunder. 

Benyt ikke loading spinner til live-opdateringer eller automatisk genindlæsning af indhold.

### Vejledning

Anvend kun spinners i særdeles begrænset omfang og kun på løsninger, hvor der kan forventes ventetid på over 2 sekunder (Sherwin, 2014).

Anvend kun loading spinner når indhold indlæses for første gang eller som respons på en brugerhandling. 

En loading spinner skal ikke anvendes som kompensation for en permanent langsom performance. 

## Varianter {#{% include create-id.html heading="Varianter" %}}

### Stor spinner

Den store spinner anvendes til større sektioner på en side. Den placeres i midten af elementet og hvis der er indhold bag spinneren sættes opacity på indholdet til 25%.

### Lille spinner {#{% include create-id.html heading="Lille spinner" %}}

Den lille spinner anvendes hvor pladsen er trang, eksempelvis på knapper eller i enkelte celler i tabeller.

{% include code/preview-box.html component="spinner-button" title="Eksempel på knap med spinner" code="/komponenter/spinner/#lille-spinner-kode" %}

#### Interaktivt eksempel

Tryk på knappen i eksemplet nedenunder for at se, hvordan en knap med lille spinner skifter status. I eksemplet vil knappen vise loading spinneren i 3 sekunder, hvorefter der kan trykkes på knappen igen.

{% include code/preview.html component="spinner-button-interactive" %}

### Spinner med tekst {#{% include create-id.html heading="Spinner med tekst" %}}

I løsninger med meget lange svartider bør loading spinneren suppleres med en besked på siden, så brugeren ved, hvad der venter dem. Efter et passende tidsinterval bør der integreres en fejlbesked eller en fejlside i løsningen, så brugeren ikke bliver fanget med en loading spinner, der ikke forsvinder. 

Gør teksten så specifik som muligt, så brugeren forstår hvad der sker.

{% include code/preview-box.html component="spinner-with-text" title="Eksempel på knap med spinner og tekst" code="/komponenter/spinner/#spinner-med-tekst-kode" %}

## Referencer {#{% include create-id.html heading="Referencer" %}}

{% include links/external-link.html linktext="Katie Sherwin: Progress Indicators Makes a Slow System Less Insufferable (2014)" %}

<!--split-->

## Installation {#{% include create-id.html heading="Installation" append="-kode" %}}

### HTML Struktur

{% include code/syntax.html component="spinner" copybutton=true %}

### Javascript

Der medfølger ikke funktionalitet med denne komponent. Man skal derfor selv i løsningen implementere opdateringen af statusmeddelelsen som ventetiden forlænges.

## Lille spinner {#{% include create-id.html heading="Lille spinner" append="-kode" %}}

{% include code/syntax.html component="spinner-button" link=true copybutton=true guidelines="/komponenter/spinner/#lille-spinner" %}

## Spinner med tekst {#{% include create-id.html heading="Spinner med tekst" append="-kode" %}}

{% include code/syntax.html component="spinner-with-text" link=true copybutton=true guidelines="/komponenter/spinner/#spinner-med-tekst" %}

