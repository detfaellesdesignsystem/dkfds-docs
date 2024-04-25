---
permalink: "/komponenter/toastbesked/"
redirect_from:
- "/komponenter/notifikation/"
- "/kode/komponenter/notifikation/"
- "/eksempel/notification/"
- "/eksempel/notification-success/"
- "/eksempel/notification-warning/"
- "/eksempel/notification-error/"
- "/eksempel/notification-info/"
- "/kode/komponenter/toastbesked/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Toastbesked
lead: Toastbeskeder viser aktuel information og dukker op på skærmen i det øjeblik, de bliver relevante. Toastbeskeder vises typisk som reaktion på brugerinteraktion.
description: 
tags:
- toast
- toastbesked
- notifikation
- besked
tabs: "Retningslinjer, kode"
---

{% include tabs.html guidelines=true code=true %}

{% include code/preview-box.html component="toastbesked" title="Eksempel på toastbesked" classes="intro-example" %}

{% include anchorlinks.html guidelines="Toastbesked" code="Toastbesked_Kode" %}

<!--split-->

## Sådan bruges komponenten {#{% include create-id.html heading="Sådan bruges komponenten" %}}

### Anvendes til

At gøre brugeren opmærksom på vigtige oplysninger, ofte relateret til brugerens aktuelle aktivitet.

### Anvendes ikke til

Brug {% include links/component-guideline-link.html linktext="Beskeder (alerts)" %}, hvis en besked skal placeres som en del af indholdet på siden.

Brug ikke toastbeskeder til at markere fejlindtastning i et specifikt felt. Brug da {% include links/component-guideline-link.html linktext="fejlmeddelelser" %} i stedet.

Brug modal dialog – ikke toastbeskeder – til at give brugerne information om en potentielt kritisk handling. Dermed risikerer brugeren ikke at overse eller misforstå beskeden.

Kritiske beskeder eller lange beskeder, hvis toastbeskeden er tidsindstillet og forsvinder automatisk. Det gør det vanskeligt for brugere, som fx gør brug af hjælpeteknologier, at læse meddelelsen før den forsvinder.

### Vejledning

Til forskel fra {% include links/component-guideline-link.html linktext="Beskeder (alerts)" %} som er placeret som en del af sideindholdet, placeres toastbeskeder ovenpå selve siden.

Vær opmærksom på at toastbeskeder hurtigt kan gå fra at opfattes som nyttige til at opfattes som anmassende og påtrængende, så overvej nøje om det er denne komponent, der er det rigtige valg.

Gør informationen i toastbeskeden aktiv og handlingsanvisende, så brugeren forstår, hvad der er behov for eller hvad den aktuelle status er.

Brug ord og begreber, som brugeren kan genkende fra løsningen.

Skriv kort og præcist og undgå tekniske beskeder, der kan forvirre brugeren.

Brug beskeder til at øge brugerens forståelse for løsningen.

Tilføj ikke interaktivt indhold som links ol. på toastbeskeden, da der kan opstå udfordringer i forbindelse med tilgængelighed.

Når toastbeskeden vises, kan man lade den forsvinde igen, men vær opmærksom på at efterleve succeskriteriet 2.2.1 ({% include links/external-link.html linktext="W3C (WCAG 2.1): Understanding SC 2.2.1: Timing Adjustable (Level A)" %}).

Vis den nyeste toastbesked øverst. Hvis der kan være flere toastbeskeder vist ad gangen og rækkefølgen er vigtig, så tilføj et tidsstempel til toastbeskeden.

## Varianter {#{% include create-id.html heading="Varianter" %}}

{:#succes}
### Succes

{% include code/preview-box.html component="toastbesked-success" title="Eksempel på notifikation med success farver" %}

{:#advarsel}
### Advarsel

{% include code/preview-box.html component="toastbesked-warning" title="Eksempel på notifikation med advarselsfarver" %}

{:#fejl}
### Fejl

{% include code/preview-box.html component="toastbesked-error" title="Eksempel på notifikation med fejlfarver" %}

{:#information}
### Information

{% include code/preview-box.html component="toastbesked-info" title="Eksempel på notifikation med infofarver" %}

{:#uden-broedtekst}
### Uden brødtekst

{% include code/preview-box.html component="toastbesked-onlyheading" title="Eksempel på notifikation uden brødtekst" %}

<!--split-->

## Installation {#{% include create-id.html heading="Installation" append="-kode" %}}

### HTML Struktur

{% include code/syntax.html component="toastbesked-info" copybutton=true %}

Kopiér ovenstående kode for at indsætte én toastbesked.

Bemærk at ovenstående har class `show` som default. Der følger en animation med når en toastbesked vises, som kommer ved at man ændrer klasserne  i følgende flow:
1. `hide`
2. `showing`
3. `show`

Ved at bruge nedenstående javascript vil dette komme ud af boksen. Men bemærk at en toastbesked bør have class `hide` fra start.

#### Placering
Toastbeskeder placeres i en div med class `toast-container` og attributter `aria-live="assertive"`, `aria-atomic="false"` og `aria-relevant="additions"`. Denne div placeres som første element i `<main>`.

{% highlight html %}
<main id="main-content">
    <div class="toast-container" aria-live="assertive" aria-atomic="false" aria-relevant="additions">
        <!-- Placer toastbeskeder her -->
    </div>
    ...
</main>
{% endhighlight %}

{% include links/example-link.html linktext="Se fungerende eksempel på implementering af toastbesked" %}

### Javascript
Der medfølger Javascript til komponenten, som man kan vælge at bruge. 

#### Vis
Når en toastbesked vises, ændres class fra `hide` til `showing` og til sidst `show`.

{% highlight javascript %}
let toast = new DKFDS.Toast(document.getElementById('TOAST-ID'));
toast.show();
{% endhighlight %}

#### Skjul
Når en toastbesked skjules, ændres class fra `show` til `hide`.

{% highlight javascript %}
let toast = new DKFDS.Toast(document.getElementById('TOAST-ID'));
toast.hide();
{% endhighlight %}

## Succes {#{% include create-id.html heading="Succes" append="-kode" %}}

{% include code/syntax.html component="toastbesked-success" link=true copybutton=true %}

## Advarsel {#{% include create-id.html heading="Advarsel" append="-kode" %}}

{% include code/syntax.html component="toastbesked-warning" link=true copybutton=true %}

## Fejl {#{% include create-id.html heading="Fejl" append="-kode" %}}

{% include code/syntax.html component="toastbesked-error" link=true copybutton=true %}

## Information {#{% include create-id.html heading="Information" append="-kode" %}}

{% include code/syntax.html component="toastbesked-info" link=true copybutton=true %}
