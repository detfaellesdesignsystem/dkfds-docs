---
permalink: "/komponenter/beskeder/"
redirect_from:
- "/kode/komponenter/beskeder/"
layout: styleguide
category: komponenter_menu
subcategory: Komponenter
title: Beskeder
title_en: Alerts
lead: Beskeder anvendes til at fremhæve aktuel information, som er vigtig for brugeren.
description: Beskeder (Alerts) er farvede bokse, du kan bruge til at give brugeren vigtig og aktuel information om fx status, fejl, opdateringer, o.l.
tags:
- fejlbesked
tabs: "Retningslinjer, kode, web component"
---

{% include tabs.html guidelines=true code=true web_component=true %}

{% include code/preview-box.html component="alerts" title="Eksempel på beskeder" classes="intro-example" %}

{% include anchorlinks.html guidelines="Beskeder" code="Beskeder_Kode" webcomponent="Beskeder_Web_Component" %}

<!--split-->

## Sådan bruges komponenten {#{% include create-id.html heading="Sådan bruges komponenten" %}}

### Anvendes til {#{% include create-id.html heading="Anvendes til" %}}

Beskeder (Alerts) anvendes til at give brugeren vigtig og aktuel information om fx status, generelle fejl, til {% include links/component-guideline-link.html linktext="fejlopsummeringer" %}, samt til at gøre opmærksom på ting brugeren skal vide, fx automatiske ændringer i brugerens data o.l.

Anvend succes- og advarselsbeskeder til at bekræfte en handling eller give besked om behov for handling.

### Anvendes ikke til {#{% include create-id.html heading="Anvendes ikke til" %}}

Brug ikke beskeder til at markere fejlindtastning i et specifikt felt. Anvend i stedet {% include links/component-guideline-link.html linktext="fejlmeddelelser" %}.

Brug modal dialog – ikke beskeder – til at give brugerne information om en potentielt kritisk handling. Dermed risikerer brugeren ikke at overse eller misforstå beskeden.

Brug ikke beskeder som farvelade for at “peppe” løsningen op, når informationen er neutral og statisk. Anvend da i stedet almindelig brødtekst.

### Vejledning {#{% include create-id.html heading="Vejledning" %}}

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

## Varianter {#{% include create-id.html heading="Varianter" %}}

### Teksteksempler {#{% include create-id.html heading="Teksteksempler" %}}

{% include code/preview-box.html component="alerts-texts" title="Eksempel på besked i forskellige formater" %}

### Besked med luk knap {#{% include create-id.html heading="Besked med luk knap" %}}

{% include code/preview-box.html component="alert-close" title="Eksempel på besked med luk-knap" code="/komponenter/beskeder/#luk-knap-kode" %}

## Se komponenten i eksempelløsninger {#{% include create-id.html heading="Se komponenten i eksempelløsninger" %}}

{:.nobullet-list}
- {% include links/demo-link.html linktext="Formular til kontaktoplysninger: Kvittering" %}
- {% include links/demo-link.html linktext="Trinformular til registrering: Kvittering" %}
- {% include links/demo-link.html linktext="Trinformular til ansøgning: Kvittering" %}
- {% include links/demo-link.html linktext="Sagsoversigt: Afgørelser" %}

## Referencer {#{% include create-id.html heading="Referencer" %}}

{:.nobullet-list}
- Linda Newman Lior: Writing for Interaction (2013)
- Luke Wroblewski: Web Form Design: Filling in the Blanks (2008)
- Adam Silver: Form Design Patterns (2018)

<!--split-->

## Installation {#{% include create-id.html heading="Installation" append="-kode" %}}

### HTML Struktur {#{% include create-id.html heading="HTML Struktur" append="-kode" %}}

{% include code/syntax.html component="alerts" copybutton=true %}

Anvend `role="alert"` til beskeder, der skal læses højt af en skærmlæser med det samme, hvis indholdet ændrer sig. Dette kan for eksempel være en besked, der bliver synlig efter at have været skjult eller hvor indholdet ændrer sig. Advarsler og fejlbeskeder bør altid være markeret med `role="alert"`.

Hvis beskeden indeholder en `alert-heading`, sørg da for at benytte et html-element, der passer ind i konteksten på siden. Dette vil som regel være en overskrift, for eksempel `<h3>`, eller et `<strong>`-element.

### Javascript {#{% include create-id.html heading="Javascript" append="-kode" %}}

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

### Informativ {#{% include create-id.html heading="Informativ" append="-kode" %}}

Informativ er blå, og defineres med klassen `alert-info`.

{% include code/syntax.html component="alert-info" link=true copybutton=true %}

### Succes {#{% include create-id.html heading="Succes" append="-kode" %}}

Succesbesked er grøn, og defineres med klassen `alert-success`.

{% include code/syntax.html component="alert-success" link=true copybutton=true %}

### Advarsel {#{% include create-id.html heading="Advarsel" append="-kode" %}}

Besked med advarsel er gul, og defineres med klassen `alert-warning`.

{% include code/syntax.html component="alert-warning" link=true copybutton=true %}

### Fejl {#{% include create-id.html heading="Fejl" append="-kode" %}}

Besked med fejl er rød, og defineres med klassen `alert-error`.

{% include code/syntax.html component="alert-error" link=true copybutton=true %}

## Paragrafbredde {#{% include create-id.html heading="Paragrafbredde" append="-kode" %}}

Defineres med klassen `alert--paragraph`.

{% include code/syntax.html component="alert-paragraph" link=true copybutton=true %}

## Luk knap {#{% include create-id.html heading="Luk knap" append="-kode" %}}

{% include code/syntax.html component="alert-close" link=true copybutton=true guidelines="/komponenter/beskeder/#besked-med-luk-knap" %}

<!--split-->

{% include web-component-shared-text/web-components-beta.html %}

{% include containers-for-code-and-examples/top-example-and-show-code-in-box.html example="fds-alert-variants" subheading_tag="h2" collapsable=false %}

## Om denne komponent {#{% include create-id.html heading="Om denne komponent" append="-webcomponent" %}}

{% include web-component-shared-text/intro-shadow-dom.html %}

## Varianter {#{% include create-id.html heading="Varianter" append="-webcomponent" %}}

### Teksteksempler {#{% include create-id.html heading="Teksteksempler" append="-webcomponent" %}}

{% include containers-for-code-and-examples/top-example-and-show-code-in-box.html example="fds-alert-text-variants" heading_tag="h4" subheading_tag="h5" %}

### Besked med luk-knap {#{% include create-id.html heading="Besked med luk-knap" append="-webcomponent" %}}

{% include containers-for-code-and-examples/top-example-and-show-code-in-box.html example="fds-alert-close" heading_tag="h4" subheading_tag="h5" %}

## Konfiguration {#{% include create-id.html heading="Konfiguration" append="-webcomponent" %}}

### fds-alert {#{% include create-id.html heading="fds-alert" append="-webcomponent" %}}

#### Attributter

{:.table .table--responsive-headers}
| Attribut    | Beskrivelse                                                                                                                                                             |
|-------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| variant     | Sæt beskedens type. Gyldige værdier er `info`, `success`, `warning` og `error`. Default er `info`.                                                                      |
| icon-label  | Skift skærmlæserlabel for ikonet. Default afhænger af `variant` (f.eks. `Information` for `info`, `Fejl` for `error`).                                                  |
| closable    | Sæt til `true` for at tilføje en luk-knap, der skjuler beskeden ved klik. Default er `false`.                                                                           |
| close-label | Sæt teksten på luk-knappen, når den vises. Default er `Luk`.                                                                                                            |

#### Slots

{:.table .table--responsive-headers}
| Slot    | Beskrivelse                                                                                                        |
|---------|--------------------------------------------------------------------------------------------------------------------|
| icon    | Tilføj et brugerdefineret ikon. Hvis slottet ikke anvendes, genereres der automatisk et ikon baseret på `variant`. |
| heading | Tilføj en overskrift til beskeden.                                                                                 |
| content | Tilføj beskedens indhold.                                                                                          |

Bemærk: Når der anvendes et eget ikon, har attributten `icon-label` ingen effekt. Sæt i stedet `aria-label` direkte på ikonet.

#### Funktioner

{:.table .table--responsive-headers}
| Funktion | Beskrivelse        |
|----------|---------------------|
| show()   | Vis beskeden.       |
| hide()   | Skjul beskeden.     |

#### Events

{:.table .table--responsive-headers}
| Event            | Beskrivelse                   |
|------------------|--------------------------------|
| fds-alert-shown  | Udløses når beskeden vises.   |
| fds-alert-hidden | Udløses når beskeden skjules. |
