---
permalink: "/komponenter/accordions/"
redirect_from:
- "/kode/komponenter/accordions/"
layout: styleguide
category: komponenter_menu
subcategory: Komponenter
title: Accordions
lead: En accordion er et grafisk element, som du kan bruge til at skjule og vise indhold
  med. Vær opmærksom på, at skjult indhold risikerer at blive set i mindre grad af
  brugerne, end det som er umiddelbart synligt på siden.
description: Accordions er interaktive overskrifter, der anvendes til at skjule og
  vise det relaterede indhold.
tags:
- accordion
- accordions
tabs: "Retningslinjer, kode, web component"
---

{% include tabs.html guidelines=true code=true web_component=true %}

{% include code/preview-box.html component="accordion" title="Eksempel på accordion" classes="intro-example" %}

{% include anchorlinks.html guidelines="Accordions" code="Accordions_Kode" webcomponent="Accordions_Web_Component" %}

<!--split-->

## Sådan bruges komponenten {#{% include create-id.html heading="Sådan bruges komponenten" %}}

### Anvendes til {#{% include create-id.html heading="Anvendes til" %}}

Accordions er interaktive overskrifter, der anvendes til at skjule og vise det relaterede indhold.

### Anvendes ikke til {#{% include create-id.html heading="Anvendes ikke til" %}}

Accordions erstatter ikke individuelle trin i en selvbetjeningsløsning eller sider på en hjemmeside.

Brug ikke accordions til små mængder indhold, der i stedet kunne stå synligt på siden.

Brug ikke accordions til at kollapse indhold i fx søgeresultater eller andre længere oversigter.

Brug ikke accordions til at opdele et logisk flow eller en sekvens af handlinger. Der bør du eventuelt i stedet anvende en trinindikator.

Brug ikke accordions inde i andre accordions. Hvis du har brug for at gruppere accordions, anvend da almindelige overskrifter.

### Vejledning {#{% include create-id.html heading="Vejledning" %}}

Accordions bliver fremvist i lodret rækkefølge med synlig overskrift. Ved at klikke på accordion folder beskrivelsen af indholdet sig ud. Klikker du igen, folder beskrivelsen sammen igen.

Overvej at lade den accordion, som har det vigtigste indhold, være foldet ud, når brugerne kommer ind på siden. Så er du sikker på, at dine brugere læser den.

Generelt er det ikke en god løsning at skjule indhold for at gøre siden mere spiselig. Overvej om det er nødvendigt at kollapse indhold og hvorfor, det er det. Hvis indholdet er unødigt langt eller uoverskueligt, bør du i stedet omformulere teksten og eventuelt fordele den på flere sider.

#### Fejlmeddelelse {#{% include create-id.html heading="Fejlmeddelelse" %}}

Læs mere om korrekt brug af {% include links/component-guideline-link.html linktext="fejlmeddelelser" %} og deres formuleringer.

Når der vises en fejlmeddelelse, vis da også {% include links/component-guideline-link.html linktext="fejlopsummering" %}.

{% include code/preview-box.html component="accordion-error" title="Eksempel på accordion med fejl" code="/komponenter/accordions/#med-fejl-kode" %}

## Varianter {#{% include create-id.html heading="Varianter" %}}

### Åbn/luk alle {#{% include create-id.html heading="Åbn/luk alle" %}}

{% include code/preview-box.html component="accordion-bulk-open" title="Eksempel på accordions med åbn alle funktion" code="/komponenter/accordions/#aabn-luk-alle-kode" %}

### Med succesbeskeder {#{% include create-id.html heading="Med succesbeskeder" %}}

{% include code/preview-box.html component="accordion-success" title="Eksempel på accordion med succesbesked" code="/komponenter/accordions/#med-succesbeskeder-kode" %}

## Referencer {#{% include create-id.html heading="Referencer" %}}

{:.nobullet-list}
- {% include links/external-link.html linktext="Anthony Thomas (2006): Where to Place Your Accordion Menu items" %}
- {% include links/external-link.html linktext="Hoa Loranger (2014): Accordions Are Not Always the Answer for Complex Content on Desktops" %}

<!--split-->

## Installation {#{% include create-id.html heading="Installation" append="-kode" %}}

### HTML Struktur {#{% include create-id.html heading="HTML Struktur" append="-kode" %}}

{% include code/syntax.html component="accordion" copybutton=true %}

Kopiér ovenstående kode for at indsætte én accordion. Ønsker du flere kan du duplikere `<li>` elementet.

Husk at tilpasse koden, således at ikke kun indholdet passer, men også attributterne. Herunder er særligt `aria-controls` og `id` vigtige, da disse skal være unikke. 

Overskriften på en accordion skal angives som en heading. Sørg for at anvende det korrekte heading-niveau, som passer semantisk ind i konteksten på siden.

### Javascript {#{% include create-id.html heading="Javascript" append="-kode" %}}

Accordion komponenten kræver JavaScript for at fungere. Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:

{% highlight javascript %}
new DKFDS.Accordion(document.getElementById('ACCORDION-UL-GROUP-ID')).init();
{% endhighlight %}

Attributten `aria-hidden` tilføjes automatisk i JavaScript, hvis man har undladt at tilføje attributten.

#### Sprog

Hvis du ønsker at anvende et andet sprog end dansk i JavaScript-koden for accordions med åbn/luk alle-funktionen, skal du selv give din oversættelse med og derefter initiere komponenten manuelt. Husk at opdatere værdien i attributten "lang" i din sides html-tag.

{% highlight javascript %}
new DKFDS.Accordion(document.getElementById('ACCORDION-UL-GROUP-ID'), {
  "open_all": "Åbn alle", 
  "close_all": "Luk alle" 
}).init();
{% endhighlight %}

#### Events

{:.table .table--responsive-headers}
| Event key           | Element                   | Beskrivelse                                                                                          |
|---------------------|---------------------------|------------------------------------------------------------------------------------------------------|
| fds.accordion.open  | `button.accordion-button` | Når en accordion bliver foldet ud, bliver eventet `fds.accordion.open` udløst på accordion knappen   |
| fds.accordion.close | `button.accordion-button` | Når en accordion bliver foldet ind, bliver eventet `fds.accordion.close` udløst på accordion knappen |

## Åbn/luk alle {#{% include create-id.html heading="Åbn/luk alle" append="-kode" %}}

{% include code/syntax.html component="accordion-bulk-open" link=true copybutton=true guidelines="/komponenter/accordions/#aabn-luk-alle" %}

## Med fejl {#{% include create-id.html heading="Med fejl" append="-kode" %}}

{% include code/syntax.html component="accordion-error" link=true copybutton=true guidelines="/komponenter/accordions/#fejlmeddelelse" %}

## Med succesbeskeder {#{% include create-id.html heading="Med succesbeskeder" append="-kode" %}}

{% include code/syntax.html component="accordion-success" link=true copybutton=true guidelines="/komponenter/accordions/#med-succesbeskeder" %}

<!--split-->

{% include web-component-shared-text/web-components-beta.html %}

{% include containers-for-code-and-examples/top-example-and-show-code-in-tabs.html example="fds-accordion-default" subheading_tag="h2" collapsable=false %}

## Om denne komponent {#{% include create-id.html heading="Om denne komponent" append="-webcomponent" %}}

{% include web-component-shared-text/intro-light-dom.html %}

## Varianter {#{% include create-id.html heading="Varianter" append="-webcomponent" %}}

### Åbn/luk alle {#{% include create-id.html heading="Åbn/luk alle" append="-webcomponent" %}}

{% include containers-for-code-and-examples/top-example-and-show-code-in-tabs.html example="fds-accordion-group-example" heading_tag="h4" subheading_tag="h5" %}

### Med succesbeskeder {#{% include create-id.html heading="Med succesbeskeder" append="-webcomponent" %}}

{% include containers-for-code-and-examples/top-example-and-show-code-in-tabs.html example="fds-accordion-success" heading_tag="h4" subheading_tag="h5" %}

### Med fejl {#{% include create-id.html heading="Med fejl" append="-webcomponent" %}}

{% include containers-for-code-and-examples/top-example-and-show-code-in-tabs.html example="fds-accordion-error" heading_tag="h4" subheading_tag="h5" %}

## Konfiguration {#{% include create-id.html heading="Konfiguration" append="-webcomponent" %}}

### fds-accordion {#{% include create-id.html heading="fds-accordion" append="-webcomponent" %}}

#### Attributter

<div class="table--responsive-scroll" tabindex="0">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Attribut</th>
        <th scope="col">Beskrivelse</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>heading</td>
        <td>Overskriften i accordionen.</td>
      </tr>
      <tr>
        <td>heading-level</td>
        <td>Overskriftsniveauet i accordionen (overskrives, når heading-level i <code>fds-accordion-group</code> er sat). Standardværdi er <code>"h3"</code>.</td>
      </tr>
      <tr>
        <td>expanded</td>
        <td>Sæt til <code>"true"</code>, hvis accordionen skal være åben, når siden indlæses. Standardværdi er <code>"false"</code>.</td>
      </tr>
      <tr>
        <td>content-id</td>
        <td>Sæt ID for content-elementet i accordionen. Standardværdien er tilfældigt genereret.</td>
      </tr>
      <tr>
        <td>has-error</td>
        <td>Sæt til <code>"true"</code> for at give accordionen en rød kant. Sørg for altid at give en passende fejlbesked, når denne attribut bruges.</td>
      </tr>
      <tr>
        <td>variant-text<br>variant-icon</td>
        <td>Sæt en tilhørende besked og ikon på accordionen. Sørg altid for at anvende begge attributter samtidigt. Anbefalinger til kombinationer:<br>
        <ul>
          <li><code>variant-text="Information"</code> og <code>variant-icon="info"</code></li>
          <li><code>variant-text="Succes"</code> og <code>variant-icon="success"</code></li>
          <li><code>variant-text="Advarsel"</code> og <code>variant-icon="warning"</code></li>
          <li><code>variant-text="Fejl"</code> og <code>variant-icon="error"</code> og <code>has-error="true"</code></li>
        </ul>
        </td>
      </tr>
      <tr>
        <td>ready</td>
        <td>Sæt til <code>"false"</code> for at udskyde initialisering af komponenten. Udelad attributten, eller sæt den til andet end <code>"false"</code>, for at initialisere komponenten med det samme.</td>
      </tr>
    </tbody>
  </table>
</div>

#### Funktioner

{:.table .table--responsive-headers}
| Funktion            | Beskrivelse                                                                                |
|---------------------|--------------------------------------------------------------------------------------------|
| expandAccordion()   | Fold en accordion ud.                                                                      |
| collapseAccordion() | Fold en accordion sammen.                                                                  |
| toggleAccordion()   | Hvis en accordion er foldet ud, så foldes den sammen. Er den foldet sammen, foldes den ud. |
| isExpanded()        | Returnerer `true`, hvis accordionen er foldet ud, og `false`, hvis den er foldet sammen.   |

#### Events

{:.table .table--responsive-headers}
| Event                   | Beskrivelse                            |
|-------------------------|----------------------------------------|
| fds-accordion-expanded  | Udløses når accordionen foldes ud.     |
| fds-accordion-collapsed | Udløses når accordionen foldes sammen. |

### fds-accordion-group {#{% include create-id.html heading="fds-accordion-group" append="-webcomponent" %}}

#### Attributter

{:.table .table--responsive-headers}
| Attribut        | Beskrivelse                                                                                               |
|-----------------|-------------------------------------------------------------------------------------------------------------|
| heading-level   | Sæt overskriftsniveau for alle accordions i gruppen.                                                       |
| has-bulk-button | Sæt til `true` for at tilføje en knap til gruppen, der åbner/lukker alle accordions.                       |
| open-all-text   | Erstat teksten på åbn/luk-knappen, når ikke alle accordions er foldet ud. Standardværdi er `"Åbn alle"`.   |
| close-all-text  | Erstat teksten på åbn/luk-knappen, når alle accordions er foldet ud. Standardværdi er `"Luk alle"`.        |

#### Funktioner

{:.table .table--responsive-headers}
| Funktion              | Beskrivelse                                                                                                     |
|-----------------------|-----------------------------------------------------------------------------------------------------------------|
| toggleAllAccordions() | Hvis alle accordions er foldet ud, foldes de sammen. Hvis mindst én accordion er foldet sammen, foldes alle ud. |
