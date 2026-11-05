---
permalink: "/komponenter/faneblade/"
redirect_from:
- "/komponenter/faneblad/"
- "/kode/komponenter/faneblad/"
- "/kode/komponenter/faneblade/"
layout: styleguide
category: komponenter_menu
subcategory: Komponenter
title: Faneblade
title_en: Tabs
lead: Faneblade gør det muligt for brugerne at bladre imellem relaterede sektioner
  af indhold og kun få vist en sektion af gangen. Vær opmærksom på om dine brugere
  ser de skjulte sektioner, når du anvender faneblade.
description: Faneblade gør det muligt for brugerne at bladre imellem relaterede sektioner
  af indhold og kun få vist en sektion af gangen.
tags:
tabs: "Retningslinjer, kode, web component"
---

{% include tabs.html guidelines=true code=true web_component=true %}

{% include code/preview-box.html component="tabs" title="Eksempel på faneblade" classes="intro-example" %}

{% include anchorlinks.html guidelines="Faneblade" code="Faneblade_Kode" webcomponent="Faneblade_Web_Component" %}

<!--split-->

## Sådan bruges komponenten {#{% include create-id.html heading="Sådan bruges komponenten" %}}

### Anvendes til {#{% include create-id.html heading="Anvendes til" %}}

Faneblade anvendes til at skifte mellem forskellige visninger af indhold inden for samme kontekst.

Faneblade egner sig bedst som en avanceret funktionalitet for afgrænsede målgrupper.

### Anvendes ikke til {#{% include create-id.html heading="Anvendes ikke til" %}}

Faneblade kan ikke erstatte individuelle sider i en selvbetjeningsløsning eller hjemmeside.

Faneblade anvendes ikke til at opdele et logisk flow eller en sekvens af handlinger.

### Vejledning {#{% include create-id.html heading="Vejledning" %}}

Faneblade anvendes i afgrænsede sektioner. Indholdet vises indrammet, så brugeren ikke er i tvivl om, hvor det starter og slutter. Det er muligt at anvende flere fanebladskomponenter på en side. 

Overvej om faneblade er den rette løsning. Vær opmærksom på, at brugeren kun kan se indholdet fra én fane ad gangen. Alternativer til faneblade kan være {% include links/component-guideline-link.html linktext="accordions" %} eller {% include links/component-guideline-link.html linktext="detaljekomponenten" %}, hvis du ønsker at indhold først bliver synligt, når brugeren aktivt vælger det.

Faneblade kan ikke være i “disabled” tilstand. Alle faner er synlige og aktive.

Opdeling af indholdet på flere sider kan også være et alternativ. Faneblade bør kun anvendes, hvis indholdet i de forskellige faneblade deler overordnet kontekst.

Hvis du ønsker at anvende faner, bør det testes på din målgruppe, før din løsning går i produktion.

{% include dos-donts-box.html component="faneblad-dos-donts" %}

## Varianter {#{% include create-id.html heading="Varianter" %}}

### Faneblade til navigation {#{% include create-id.html heading="Faneblade til navigation" %}}

Fanebladskomponenten kan anvendes til navigation mellem flere undersider. Hver fane vil kunne afspejles i sidens URL, og det skal være muligt at linke direkte til, og åbne, et faneblad. Ved denne brug skal sidens indhold fra fanebladskomponenten og ned til footeren være knyttet til det åbne faneblad.

Vær særligt opmærksom på følgende:
- Der må kun anvendes én fanebladskomponent af denne type per side.
- Faneblade skal ikke anvendes i stedet for en undermenu. Indholdet i fanebladene skal stadig være relateret til hinanden.
- Faneblade til navigation skal placeres i toppen af siden umiddelbart efter overskriften og evt. manchet.
- Det anbefales at tilføje kode til komponenten, som gør, at siden ikke hopper til toppen ved tryk på en ny fane. Designsystemets komponentsider kan anvendes som inspiration.

{% include code/preview-image.html component="tabs-navigation" title="Eksempel på faneblade til navigation" code="/komponenter/faneblade/#faneblade-til-navigation-kode" %}

### Faneblade med ikoner {#{% include create-id.html heading="Faneblade med ikoner" %}}

Faneblade kan vises med ikoner, hvis disse understøtter de angivne sektioner visuelt. Vi anbefaler at være forsigtig med denne løsning, da et ikon der læses forkert eller misforståes kan forvirre brugeren mere end det hjælper. Så benyt kun ikoner hvis de er klare i budskabet og hjælper med at kommunikere det underliggende indhold.
Ikoner skal altid understøttes af en label med fanebladets navn.

{% include code/preview-box.html component="tabs-icons" title="Eksempel på faneblade med ikoner" code="/komponenter/faneblade/#faneblade-med-ikoner-kode" %} 

{% include dos-donts-box.html component="faneblad-ikoner-dos-donts" %}

## Referencer {#{% include create-id.html heading="Referencer" %}}

{:.nobullet-list}
- {% include links/external-link.html linktext="Jacob Gube: Module Tabs in Web Design: Best Practices and Solutions (2009)" %}
- {% include links/external-link.html linktext="Jakob Nielsen: Tabs, Used Right (2016)" %}

<!--split-->

## Installation {#{% include create-id.html heading="Installation" append="-kode" %}}

### HTML Struktur {#{% include create-id.html heading="HTML Struktur" append="-kode" %}}

{% include code/syntax.html component="tabs" copybutton=true %}

### Tilgængelighed {#{% include create-id.html heading="Tilgængelighed" append="-kode" %}}

Husk at bruge rollerne `tablist`, `tab` og `tabpanel` for henholdsvis fanebladsbeholder, faneblad og fanebladindhold. Benyt `aria-selected`-attributten til at angive, hvilket faneblad er aktivt og `hidden` til de paneler, som skal være skjult.

### JavaScript {#{% include create-id.html heading="JavaScript" append="-kode" %}}

Fanebladskomponenten kræver JavaScript for at fungere. Man kan enten gøre brug af `DKFDS.init()` eller manuelt initialisere komponenten således:

{% highlight js %}
new DKFDS.Tabs(document.getElementById('TAB-ID')).init();
{% endhighlight %}

#### Events

Når man vælger et nyt faneblad, bliver eventet `fds.tab.changed` udløst på `.tab-container` elementet, som man kan koble sig på med en eventlistener.

Når et faneblad vælges, bliver eventet `fds.tab.selected` udløst på det tilhørende `.tab-button` faneblad, som man kan koble sig på med en eventlistener.

Når et faneblad ikke længere er valgt, bliver eventet `fds.tab.hidden` udløst på det tilhørende `.tab-button` faneblad, som man kan koble sig på med en eventlistener.

## Faneblade til navigation {#{% include create-id.html heading="Faneblade til navigation" append="-kode" %}}

{% include code/syntax.html component="tabs-navigation" link=true copybutton=true guidelines="/komponenter/faneblade/#faneblade-til-navigation" %}

Ved faneblade til navigation angives det aktive faneblad med `aria-current="true"`, alternativt `aria-current="page"` hvis siderne har forskellige URL'er. Her skal man sikre sig at kun ét faneblad har denne attribut sat.

Bemærk, at der ikke medfølger JavaScript til faneblade til navigation. Hvis man ønsker, at fanebladene forbliver samme sted på siden, når der vælges et faneblad, skal man selv stå for denne funktionalitet. Fanebladene på designsystem.dk er lavet med `hashchange` events.

## Faneblade med ikoner {#{% include create-id.html heading="Faneblade med ikoner" append="-kode" %}}

{% include code/syntax.html component="tabs-icons" link=true copybutton=true guidelines="/komponenter/faneblade/#faneblade-med-ikoner" %}

<!--split-->

{% include web-component-shared-text/web-components-beta.html %}

{% include containers-for-code-and-examples/top-example-and-show-code-in-box.html example="fds-tabs-default" subheading_tag="h2" collapsable=false %}

## Om denne komponent {#{% include create-id.html heading="Om denne komponent" append="-webcomponent" %}}

{% include web-component-shared-text/intro-shadow-dom.html %}

## Varianter {#{% include create-id.html heading="Varianter" append="-webcomponent" %}}

### Med ikoner {#{% include create-id.html heading="Med ikoner" append="-webcomponent" %}}

Hvis du vil anvende et ikon i fanebladet, tilføjes dette som et `svg`-element med `class="icon-svg"` i `fds-tab`. Når der anvendes et ikon, skal fanebladets tekst sættes i et `span`-element.

{% include containers-for-code-and-examples/top-example-and-show-code-in-box.html example="fds-tabs-icons" heading_tag="h4" subheading_tag="h5" %}

## Konfiguration {#{% include create-id.html heading="Konfiguration" append="-webcomponent" %}}

### fds-tabs {#{% include create-id.html heading="fds-tabs" append="-webcomponent" %}}

#### Attributter

{:.table .table--responsive-headers}
| Attribut    | Beskrivelse                                                                                                                                                                                                        |
|-------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| breakpoint  | Sæt breakpoint for, hvornår alle faneblade skal tilpasse udseendet til mindre skærme. Gyldige værdier er 'xs', 'sm', 'md', 'lg' og 'xl'. Default er 'md'.                                                          |
| default-tab | Angiv `tab-key` for det faneblad, der skal være valgt, når komponenten initialiseres. Hvis værdien ikke matcher et gyldigt `tab-key`, vælges det første faneblad. Ændringer efter initialisering har ingen effekt. |

#### Slots

{:.table .table--responsive-headers}
| Slot       | Beskrivelse                                                       |
|------------|-------------------------------------------------------------------|
| Unavngivet | `fds-tab`- og `fds-tab-panel`-elementer uden specifikt slot-navn. |

#### Funktioner

{:.table .table--responsive-headers}
| Funktion | Beskrivelse                                                       |
|----------|-------------------------------------------------------------------|
| selectTab(tabKey) | Skift til fanebladet med attributten `tab-key="tabKey"`. |

#### Events

{:.table .table--responsive-headers}
| Event           | Beskrivelse                                                                                                                                                                                      |
|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| fds-tab-changed | Udløses når der skiftes faneblad. `event.detail.selectedTab` indeholder `tab-key` for det valgte faneblad, og `event.detail.previousTab` indeholder `tab-key` for det tidligere valgte faneblad. |

### fds-tab {#{% include create-id.html heading="fds-tab" append="-webcomponent" %}}

#### Attributter

{:.table .table--responsive-headers}
| Attribut    | Beskrivelse                                                        |
|-------------|--------------------------------------------------------------------|
| tab-key     | Knyt et faneblad til et panel ved at angive samme værdi i tab-key. |

#### Slots

{:.table .table--responsive-headers}
| Slot       | Beskrivelse                             |
|------------|-----------------------------------------|
| Unavngivet | Tekst for fanebladet og eventuelt ikon. |

### fds-tab-panel {#{% include create-id.html heading="fds-tab-panel" append="-webcomponent" %}}

#### Attributter

{:.table .table--responsive-headers}
| Attribut    | Beskrivelse                                                    |
|-------------|----------------------------------------------------------------|
| tab-key | Knyt et faneblad til et panel ved at angive samme værdi i tab-key. |

#### Slots

{:.table .table--responsive-headers}
| Slot       | Beskrivelse                                    |
|------------|------------------------------------------------|
| Unavngivet | Indhold der skal vises, når fanebladet vælges. |
