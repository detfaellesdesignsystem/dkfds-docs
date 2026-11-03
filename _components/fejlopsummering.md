---
permalink: "/komponenter/fejlopsummering/"
redirect_from:
- "/kode/komponenter/fejlopsummering/"
layout: styleguide
category: komponenter_menu
subcategory: Komponenter
title: Fejlopsummering
lead: Fejlopsummeringer bruges til at give overblik over fejl eller mangler, der skal rettes på en side eller et trin, før brugeren kan komme videre.
description: 
tags: 
tabs: "Retningslinjer, kode, web component"
---

{% include tabs.html guidelines=true code=true web_component=true %}

{% include code/preview-box.html component="error-summary" title="Eksempel på fejlopsummering" classes="intro-example" %}

{% include anchorlinks.html guidelines="Fejlopsummering" code="Fejlopsummering_Kode" webcomponent="Fejlopsummering_Web_Component" classes="hide-code" %}

<!--split-->

## Sådan bruges komponenten {#{% include create-id.html heading="Sådan bruges komponenten" %}}

### Anvendes til {#{% include create-id.html heading="Anvendes til" %}}

Vis en fejlopsummering når der er fejl i noget af det brugeren har indtastet, også hvis der kun er én fejl på siden.

### Vejledning {#{% include create-id.html heading="Vejledning" %}}

Opsummeringen vises øverst på siden/trinnet under headeren, men over sidens/trinnets øverste overskrift. Fejlopsummeringen indeholder alle de {% include links/component-guideline-link.html linktext="fejlmeddelelser" %}, der måtte være på siden/trinnet, således at brugeren kan navigere direkte til de fejl og mangler, der skal rettes.

Der skal være links i fejlopsummeringen til de steder på siden, hvor fejlene er. Når der trykkes på et link i opsummeringen, skal fokus flyttes til det felt fejlmeddelelsen knytter sig til.

Sørg for at linkene i fejlopsummeringen er identiske med fejlmeddelelsen de linker til.

For fejl i et enkeltstående felt, skal du linke direkte til feltet.

Når en bruger skal indtaste svar i flere felter, fx dag-, måned- og årsfelterne i {% include links/component-guideline-link.html linktext="datofelter" %}, skal du linke til det første felt, der indeholder en fejl.

Hvis du ikke ved, hvilket felt der indeholder en fejl, skal du linke til det første felt i gruppen af felter.

For fejl, der kræver, at en bruger skal vælge en eller flere ting på en liste ved hjælp af en radioknap eller en tjekboks, skal du linke til den første radioknap eller tjekboks på listen.

#### Placering {#{% include create-id.html heading="Placering" %}}

Sæt fejlopsummeringen øverst på siden. Hvis din side indeholder en brødkrumme eller et tilbage-link, skal du placere den under disse, men over titlen (den øverste overskrift) på siden.

{% include code/preview-image.html component="error-summary-page" code="/komponenter/fejlopsummering/#placering-kode" %}

{% include dos-donts-box.html component="error-message-dos-donts" %}

## Se komponenten i eksempelløsninger {#{% include create-id.html heading="Se komponenten i eksempelløsninger" %}}

{:.nobullet-list}
- {% include links/demo-link.html linktext="Fejl i vedhæftede filer" %}
- {% include links/demo-link.html linktext="Formular med fejl" %}

## Referencer {#{% include create-id.html heading="Referencer" %}}

{:.nobullet-list}
- Luke Wroblewski: Web Form Design: Filling in the Blanks (2008)
- Jeff Johnson: Designing with the Mind in Mind, Second Edition (2014)

<!--split-->

## Installation {#{% include create-id.html heading="Installation" append="-kode" %}}

### HTML Struktur {#{% include create-id.html heading="HTML Struktur" append="-kode" %}}

{% include code/syntax.html component="error-summary" copybutton=true %}

Indsættes over formularen, men under `h1` overskriften.

Hver fejl tilføjes til `<ul>` listen med et anchor link til feltet der er omtalt således at fokus flyttes til pågældende felt.

#### Placering {#{% include create-id.html heading="Placering" append="-kode" %}}

{% include code/syntax.html component="error-summary-page" link=true copybutton=true guidelines="/komponenter/fejlopsummering/#placering" %}

### Javascript {#{% include create-id.html heading="Javascript" append="-kode" %}}

Fejlopsummering kræver JavaScript samt attributten `data-module="error-summary"` for at fungere korrekt. Dermed vil et klik på et link i opsummeringen betyde, at brugeren scroller ned til feltet med fejl uden at scrolle forbi feltets label. Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:

{% highlight javascript %}
new DKFDS.ErrorSummary(document.getElementById('ALERT-ID')).init();
{% endhighlight %}

<!--split-->

{% include web-component-shared-text/web-components-beta.html %}

{% include containers-for-code-and-examples/top-example-and-show-code-in-tabs.html example="fds-error-summary" subheading_tag="h2" collapsable=false %}

## Om denne komponent {#{% include create-id.html heading="Om denne komponent" append="-webcomponent" %}}

{% include web-component-shared-text/intro-light-dom.html %}

## Konfiguration {#{% include create-id.html heading="Konfiguration" append="-webcomponent" %}}

### fds-error-summary {#{% include create-id.html heading="fds-error-summary" append="-webcomponent" %}}

Man er som udvikler selv ansvarlig for at give komponenten en liste med links til de elementer, der er fejlet. Komponentens JavaScript sørger for, at det fejlede elements label kan ses, efter en bruger har trykket på et link.

#### Attributter

{:.table .table--responsive-headers}
| Attribut      | Beskrivelse                                                                                                                                                                                       |
|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ready      | Sæt til `"false"` for at udskyde initialisering af komponenten. Udelad attributten, eller sæt den til andet end `"false"`, for at initialisere komponenten med det samme. |
