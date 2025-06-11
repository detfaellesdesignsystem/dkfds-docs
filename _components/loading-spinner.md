---
permalink: "/komponenter/spinner/"
redirect_from:
- "/kode/komponenter/spinner/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Loading spinner
lead: "En spinner er et visuelt aktivt og synligt signal til brugeren om, at indlæsningen af et element er undervejs."
description: "En spinner er et visuelt aktivt og synligt signal til brugeren om, at indlæsningen af et element er undervejs."
tags:
tabs: "Retningslinjer, kode"
---

{% include tabs.html guidelines=true code=true %}

{% include code/preview-box.html component="spinner" title="Eksempel på loading spinner" classes="intro-example" %}

{% include anchorlinks.html guidelines="LoadingSpinner" code="LoadingSpinner_Kode" %}

<!--split-->

## Sådan bruges komponenten {#{% include create-id.html heading="Sådan bruges komponenten" %}}

### Anvendes til

En loading spinner anvendes til at signalere en igangværende indlæsning af et element ved at give brugeren en synlig respons. Loading spinneren placeres i direkte forbindelse med det element, der hentes eller interageres med. 

### Anvendes ikke til

Spinner skal ikke anvendes som en standardkomponent på alle løsninger, da det må forventes, at langt størstedelen vil kunne indlæses inden for 2 sekunder.

Benyt ikke loading spinner til live-opdateringer eller automatisk genindlæsning af indhold.

### Vejledning

Anvend kun spinners i særdeles begrænset omfang og kun på løsninger, hvor der kan forventes ventetid på over 2 sekunder (Sherwin, 2014).

Anvend kun loading spinner når indhold indlæses for første gang eller som respons på en brugerhandling. 

Loading spinneren findes i en lys og mørk variant, der skal anvendes afhængigt af baggrundsfarven på det element, den vises på.

En spinner skal ikke anvendes som kompensation for en permanent langsom performance. 

## Varianter {#{% include create-id.html heading="Varianter" %}}

### Stor spinner

Den store spinner anvendes til større sektioner på en side. Hvis der er indhold bag spinneren, sættes opacity på indholdet til 25%, og spinneren placeres i dette tilfælde med en ramme omkring for at sikre tilgængelighed.

Placér spinneren horisontalt centreret i toppen af sektionen, der hentes, så den er synlig også på små skærme, uden at brugeren er nødt til at scrolle først. Se eksemplet {% include links/demo-link.html linktext="Side med data, der hentes" %}.

{% include dos-donts-box.html component="loading-spinner-dos-donts" %}

### Lille spinner {#{% include create-id.html heading="Lille spinner" %}}

Den lille spinner anvendes hvor pladsen er trang, eksempelvis på knapper eller i enkelte celler i tabeller.

{% include code/preview-box.html component="spinner-small" title="Eksempel på lille spinner" code="/komponenter/spinner/#lille-spinner-kode" %}

#### Eksempel: Knap med spinner {#{% include create-id.html heading="Eksempel Knap med spinner" %}}

Tryk på knappen i eksemplet nedenunder for at se, hvordan en knap med lille spinner skifter status. I eksemplet vil knappen vise loading spinneren i 3 sekunder, hvorefter der kan trykkes på knappen igen.

{% include code/preview-box.html component="spinner-button-interactive" title="Eksempel på knap med spinner" code="/komponenter/spinner/#eksempel-knap-med-spinner-kode" %}

### Spinner med tekst {#{% include create-id.html heading="Spinner med tekst" %}}

I løsninger med meget lange svartider bør spinneren suppleres med en besked på siden, så brugeren ved, hvad der venter dem. Efter et passende tidsinterval bør der integreres en fejlbesked eller en fejlside i løsningen, så brugeren ikke bliver fanget med en spinner, der ikke forsvinder.

Gør teksten så specifik som muligt, så brugeren forstår, hvad der sker. 

{% include code/preview-box.html component="spinner-with-text" title="Eksempel på knap med spinner og tekst" code="/komponenter/spinner/#spinner-med-tekst-kode" %}

## Referencer {#{% include create-id.html heading="Referencer" %}}

{% include links/external-link.html linktext="Katie Sherwin: Progress Indicators Makes a Slow System Less Insufferable (2014)" %}

<!--split-->

## Installation {#{% include create-id.html heading="Installation" append="-kode" %}}

### HTML Struktur

{% include code/syntax.html component="spinner" copybutton=true %}

Loading spinneren er skrevet i ren CSS og anvendes ved at sætte klassen `spinner` på et `span`- eller `div`-element. Korrekt placering af spinner-elementet skal man selv sørge for.

Anvend klassen `spinner-light` sammen med `spinner`-klassen for den lyse variant af spinneren. Anvend altid den spinner-variant, som giver den største kontrast med baggrundsfarven.

Sørg altid for at oplysninger relateret til spinneren også gives til skærmlæsere. Hvordan dette gøres bedst afhænger af konteksten, som spinneren bruges i og man er derfor nødt til at implementere og teste dette selv. Se eventuelt eksemplet {% include links/demo-link.html linktext="Side med data, der hentes" %} eller eksemplet <a href="#eksempel-knap-med-spinner-kode">Knap med spinner</a> for inspiration.

### Javascript

Der medfølger ikke funktionalitet med denne komponent. Man skal derfor selv i løsningen implementere, hvordan spinneren og dens informationer opdateres.

## Stor spinner {#{% include create-id.html heading="Stor spinner" append="-kode" %}}

`spinner`-klassen giver altid den store variant af spinneren.

Brug klassen `loading-dimmed` på indhold, der skal have opacity på 25% under indlæsning.

Brug klassen `spinner-box` på et parent-element til spinneren for at sætte spinneren i en kasse, når den skal placeres oven på indhold. Igen skal man selv sørge for korrekt placering af spinneren.

{% include code/syntax.html component="spinner-box" link=true copybutton=true %}

## Lille spinner {#{% include create-id.html heading="Lille spinner" append="-kode" %}}

Brug klassen `spinner-small` sammen med `spinner` for en lille version af spinneren.

{% include code/syntax.html component="spinner-small" link=true copybutton=true guidelines="/komponenter/spinner/#lille-spinner" %}

### Eksempel: Knap med spinner {#{% include create-id.html heading="Eksempel Knap med spinner" append="-kode" %}}

Hvis spinneren anvendes på en knap, skal knappens tekst ikke være synlig, mens spinneren er aktiv. Sørg for at give information til skærmlæsere både når spinneren sættes på knappen og når den er færdig.

Ikke alle skærmlæsere kan registrere ændringer i en knaps label eller tekst automatisk. Ligeledes er det ikke alle skærmlæsere, som kan registrere ændringer i et element med `aria-live`, hvis elementet ligger inde i en knap eller indeholder knapper. Hav derfor altid et dedikeret element til udelukkende skærmlæserbeskeder og placér det i HTML'en, hvor beskeden giver mest mening i konteksten. 

Brug `aria-disabled` på knapper med loading spinner, da denne attribut ved afprøvning viser sig at være bedre understøttet end `aria-busy`.

Hvis knappen efter endt ventetid fjernes eller flyttes som følge af indlæsning af nyt indhold, skal der i JavaScript'en laves et tjek på, om brugerens fokus er på knappen. Flyt da fokus til et passende element, fx knappens skjulte skærmlæserbesked eller første element i det indlæste indhold.

Eksempel på en loading-knaps kode, før der klikkes:

{% highlight html %}
<div class="d-flex justify-content-center">
    <button id="button-spinner-interactive" class="button button-primary">
        <span>Gem</span>
    </button>
    <span id="button-spinner-interactive-message" aria-live="polite" class="sr-only"></span>
</div>
{% endhighlight %}

Eksempel på en loading-knaps kode, mens loading spinneren er vist:

{% highlight html %}
<div class="d-flex justify-content-center">
    <button id="button-spinner-interactive" class="button button-primary spinner-active" aria-disabled="true">
        <span class="spinner spinner-small spinner-light"></span>
        <span class="text-hidden">Gem</span>
    </button>
    <span id="button-spinner-interactive-message" aria-live="polite" class="sr-only">Gemmer</span>
</div>
{% endhighlight %}

## Spinner med tekst {#{% include create-id.html heading="Spinner med tekst" append="-kode" %}}

{% include code/syntax.html component="spinner-with-text" link=true copybutton=true guidelines="/komponenter/spinner/#spinner-med-tekst" %}

