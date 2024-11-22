---
permalink: "/komponenter/beskeder/"
redirect_from:
- "/kode/komponenter/beskeder/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Beskeder (Alerts)
lead: Beskeder anvendes til at fremhæve aktuel information, som er vigtig for brugeren.
description: Beskeder (Alerts) er farvede bokse, du kan bruge til at give brugeren vigtig og aktuel information om fx status, fejl, opdateringer, o.l.
tags:
- fejlbesked
tabs: "Retningslinjer, kode"
---

{% include tabs.html guidelines=true code=true %}

{% include code/preview-box.html component="alerts" title="Eksempel på beskeder" classes="intro-example" %}

{% include anchorlinks.html guidelines="Beskeder" code="Beskeder_Kode" %}

<!--split-->

## Sådan bruges komponenten {#{% include create-id.html heading="Sådan bruges komponenten" %}}

### Anvendes til

Beskeder (Alerts) anvendes til at give brugeren vigtig og aktuel information om fx status, generelle fejl, til {% include links/component-guideline-link.html linktext="fejlopsummeringer" %}, samt til at gøre opmærksom på ting brugeren skal vide, fx automatiske ændringer i brugerens data o.l.

Anvend succes- og advarselsbeskeder til at bekræfte en handling eller give besked om behov for handling.

### Anvendes ikke til

Brug ikke beskeder til at markere fejlindtastning i et specifikt felt. Anvend i stedet {% include links/component-guideline-link.html linktext="fejlmeddelelser" %}.

Brug modal dialog – ikke beskeder – til at give brugerne information om en potentielt kritisk handling. Dermed risikerer brugeren ikke at overse eller misforstå beskeden.

Brug ikke beskeder som farvelade for at “peppe” løsningen op, når informationen er neutral og statisk. Anvend da i stedet almindelig brødtekst.

### Vejledning

Brug kun beskeder, når det er nødvendigt og hjælper brugeren med at forstå hvad denne skal, hvad der sker eller hvorfor. 

Brug ord og begreber, som brugeren kan genkende fra løsningen.

Skriv kort og præcist og undgå tekniske beskeder, der kan forvirre brugeren.

Brug beskeder til at øge brugerens forståelse for løsningen.

#### Informativ besked

Anvend informative beskeder til at gøre brugeren opmærksom på, at der er sket noget i brugergrænsefladen, som kan have betydning for deres handlinger. Det kan fx være hvis visse felter er blevet automatisk udfyldt med data andetstedsfra, som brugeren bør kontrollere.
 
#### Succesmeddelelse

Anvend succesmeddelelser til at gøre brugeren opmærksom på, at en bestemt handling er gået korrekt igennem. Det kan fx være når en formular er blevet sendt af sted, eller hvis brugerens ændringer i en løsning er blevet gemt. 
 
#### Advarsel

Brug advarsler til information, som ikke er udtryk for fejl, men som med høj sandsynlighed kan lede til fejl eller problemer, hvis ikke brugeren er opmærksom på det. Det kan fx være for at gøre opmærksom på planlagt nedetid for en løsning, eller hvis behandlingstiden pga. aktuelle omstændigheder er forlænget i en sådan grad, at det kan have særlige konsekvenser for brugeren. 
 
#### Fejlbesked

Brug kun fejlbeskeder til deciderede fejl. Det kan både være som opsummering af fejl i brugerens egne indtastninger, eller hvis en handling ikke kunne gennemføres grundet tekniske fejl. 

{% include dos-donts-box.html component="alerts-dos-donts" %}

{% include dos-donts-box.html component="alerts-success-dos-donts" %}

## Varianter {#{% include create-id.html heading="Varianter" %}}

### Teksteksempler {#{% include create-id.html heading="Teksteksempler" %}}

{% include code/preview-box.html component="alerts-texts" title="Eksempel på besked i forskellige formater" %}

### Besked med luk knap {#{% include create-id.html heading="Besked med luk knap" %}}

{% include code/preview-box.html component="alert-close" title="Eksempel på besked med luk-knap" code="/komponenter/beskeder/#luk-knap-kode" %}

## Se komponenten i eksempelløsninger {#{% include create-id.html heading="Se komponenten i eksempelløsninger" %}}

{:.nobullet-list}
- {% include links/demo-link.html linktext="Formular til kontaktoplysninger: Kvittering" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Trinformular til registrering: Kvittering" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Trinformular til ansøgning: Kvittering" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Sagsoversigt: Afgørelser" returnID="eksempelloesninger" %}

## Referencer {#{% include create-id.html heading="Referencer" %}}

{:.nobullet-list}
- Linda Newman Lior: Writing for Interaction (2013)
- Luke Wroblewski: Web Form Design: Filling in the Blanks (2008)
- Adam Silver: Form Design Patterns (2018)

<!--split-->

## Installation {#{% include create-id.html heading="Installation" append="-kode" %}}

### HTML Struktur

{% include code/syntax.html component="alerts" copybutton=true %}

Anvend `role="alert"` til beskeder, der skal læses højt af en skærmlæser med det samme, hvis indholdet ændrer sig. Dette kan for eksempel være en besked, der bliver synlig efter at have været skjult eller hvor indholdet ændrer sig. Advarsler og fejlbeskeder bør altid være markeret med `role="alert"`.

Hvis beskeden indeholder en `alert-heading`, sørg da for at benytte et html-element, der passer ind i konteksten på siden. Dette vil som regel være en overskrift, for eksempel `<h3>`, eller et `<strong>`-element.

### Javascript

Man kan bruge nedenstående JavaScript for at sætte events på luk-knappen i beskederne. Det er kun nødvendigt, hvis man gør brug af luk-knappen.
Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:

{% highlight javascript %}
new DKFDS.Alert(document.getElementById('ALERT-ID')).init();
{% endhighlight %}

#### Events

<div class="table--responsive-scroll" tabindex="0">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Event key</th>
        <th scope="col">Element</th>
        <th scope="col">Beskrivelse</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>fds.alert.show</td>
        <td><code>div.alert</code></td>
        <td>Når en besked bliver vist med <code>DKFDS.Alert(document.getElementById('ALERT-ID')).show();</code> bliver <code>fds.alert.show</code> udløst på beskedelementet</td>
      </tr>
      <tr>
        <td>fds.alert.hide</td>
        <td><code>div.alert</code></td>
        <td>Når en besked bliver skjult med <code>DKFDS.Alert(document.getElementById('ALERT-ID')).hide();</code> eller der trykkes på luk bliver <code>fds.alert.hide</code> udløst på beskedelementet</td>
      </tr>
    </tbody>
  </table>
</div>

## Farver {#{% include create-id.html heading="Farver" append="-kode" %}}

### Informativ

Informativ er blå, og defineres med klassen `alert-info`.

{% include code/syntax.html component="alert-info" link=true copybutton=true %}

### Succes

Succesbesked er grøn, og defineres med klassen `alert-success`.

{% include code/syntax.html component="alert-success" link=true copybutton=true %}

### Advarsel

Besked med advarsel er gul, og defineres med klassen `alert-warning`.

{% include code/syntax.html component="alert-warning" link=true copybutton=true %}

### Fejl

Besked med fejl er rød, og defineres med klassen `alert-error`.

{% include code/syntax.html component="alert-error" link=true copybutton=true %}

## Paragrafbredde {#{% include create-id.html heading="Paragrafbredde" append="-kode" %}}

Defineres med klassen `alert--paragraph`.

{% include code/syntax.html component="alert-paragraph" link=true copybutton=true %}

## Luk knap {#{% include create-id.html heading="Luk knap" append="-kode" %}}

{% include code/syntax.html component="alert-close" link=true copybutton=true guidelines="/komponenter/beskeder/#besked-med-luk-knap" %}
