---
permalink: "/komponenter/faneblade/"
redirect_from:
- "/komponenter/faneblad/"
- "/kode/komponenter/faneblad/"
- "/kode/komponenter/faneblade/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Faneblade (Tabs)
lead: Faneblade gør det muligt for brugerne at bladre imellem relaterede sektioner
  af indhold og kun få vist en sektion af gangen. Vær opmærksom på om dine brugere
  ser de skjulte sektioner, når du anvender faneblade.
description: Faneblade gør det muligt for brugerne at bladre imellem relaterede sektioner
  af indhold og kun få vist en sektion af gangen.
tags:
tabs: "Retningslinjer, kode"
---

{% include tabs.html guidelines=true code=true %}

{% include code/preview-box.html component="tabs-buttons" title="Eksempel på faneblade" classes="intro-example" %}

{% include anchorlinks.html guidelines="Faneblade" code="Faneblade_Kode" %}

<!--split-->

## Sådan bruges komponenten {#{% include create-id.html heading="Sådan bruges komponenten" %}}

### Anvendes til

Faneblade anvendes til at skifte mellem forskellige visninger af indhold indenfor samme kontekst.

Faneblade egner sig bedst som en avanceret funktionalitet for afgrænsede målgrupper.

### Anvendes ikke til

Faneblade kan ikke erstatte individuelle sider i en selvbetjeningsløsning eller hjemmeside.

Faneblade anvendes ikke til at opdele et logisk flow eller en sekvens af handlinger.

### Vejledning

Faneblade anvendes i afgrænsede sektioner. Indholdet vises indrammet, så brugeren ikke er i tvivl om hvor det starter og slutter. Det er muligt at anvende flere fanebladskomponenter på en side. 

Overvej om faneblade er den rette løsning. Vær opmærksom på, at brugeren kun kan se indholdet fra én fane ad gangen. Alternativer til faneblade kan være {% include links/component-guideline-link.html linktext="accordions" %} eller {% include links/component-guideline-link.html linktext="detaljekomponenten" %}, hvis du ønsker at indhold først bliver synligt når brugeren aktivt vælger det.
Opdeling af indholdet på flere sider kan også være et alternativ. Faneblade bør kun anvendes hvis indholdet i de forskellige faneblade deler overordnet kontekst.

Hvis du ønsker at anvende faner, bør det testes på din målgruppe før din løsning går i produktion.

{% include dos-donts-box.html component="faneblad-dos-donts" title="Faneblade do's and don'ts" %}

### Faneblade med URL-skifte

Fanebladskomponenten kan anvendes til opdeling af en side i flere underafsnit. Hvert skifte vil kunne afspejles i sidens URL, og det vil være muligt at linke direkte til, og åbne, et faneblad.
Ved denne brug bør sidens indhold, fra fanebladskomponenten og ned være knyttet til det åbne faneblad. I dette tilfælde må der kun anvendes én fanebladskomponent af denne type på hver side.
Vær opmærksom på, af faneblade ikke skal anvendes i stedet for en undermenu. Indhold i faneblade skal stadig være relateret til hinanden.

{% include code/preview-image.html component="tabs-urls" title="Eksempel på faneblade med URL-skifte" code="/komponenter/faneblade/#faneblad-URL-skift" %}

### Faneblade med ikoner

Faneblade kan vises med ikoner hvis disse understøtter de angivne sektioner visuelt. Vi anbefaler at være forsigtig med denne løsning, da et ikon der læses forkert eller misforståes kan forvirre brugeren mere end det hjælper. Så benyt kun ikoner hvis de er klare i budskabet og hjælper med at kommunikere det underliggende indhold.
Ikoner skal altid understøttes af en label med fanebladets navn.

{% include code/preview-box.html component="tabs-buttons-icons" title="Eksempel på faneblade med ikoner" code="/komponenter/faneblade/#faneblad-med-ikoner"%} 

{% include dos-donts-box.html component="faneblad-ikoner-dos-donts" title="Faneblade med ikoner do's and don'ts" %}

## Referencer {#{% include create-id.html heading="Referencer" %}}

{:.nobullet-list}
- {% include links/external-link.html linktext="Jacob Gube: Module Tabs in Web Design: Best Practices and Solutions (2009)" %}
- {% include links/external-link.html linktext="Jakob Nielsen: Tabs, Used Right (2016)" %}

<!--split-->

## Installation {#{% include create-id.html heading="Installation" append="-kode" %}}

### HTML Struktur

{% include code/syntax.html component="tabs-buttons" copybutton=true %}

Kopier det ovenstående kode for at indsætte en faneblads komponent. Hvis du ønsker et andet antal faneblade kan disse fjernes/tilføjes ved at slette/indsætte et `<li>` element som indkapsler et `<button>` tag samt at slette/indsætte det tilhørende `<li>` element som har et `<section>` tag.

Husk at tilpasse koden så attributterne passer. Bemærk her især at `aria-controls` attributten for fanebladet skal matche panel `id'et` og at disse skal være unikke.

### Tilgængelighed
Husk at bruge rollerne `tablist`, `tab` og `tab-panel` til at informere om hvad der er henholdsvis fanebladsbeholder, faneblad og faneblad indhold. Her er det vigtigt at benytte `aria-selected` attributten til at indikere hvilket faneblad er aktivt. Med `hidden` attributten skjules panelet visuelt, mens det også gemmes for hjælpeteknologier.  

### JavaScript

Fanebladskomponenten kræver JavaScript for at fungere. Man kan enten gøre brug af `DKFDS.init()` eller manuelt initialisere komponenten således:

{% highlight js %}
new DKFDS.Tabs(document.getElementById('TAB-ID')).init();
{% endhighlight %}

Hvis en komponent først bliver tilføjet på siden efter pageload, så vil der være stor sandsynlighed for at komponenten ikke virker optimalt, da events ikke er blevet sat. Hvis man står i denne situation skal man initialisere komponenten manuelt.

Bemærk, at dette kun gælder fra version 5.0.0.

#### Events

Når man vælger et nyt faneblad, bliver eventet `fds.tab.changed` udløst på `.tab-container` elementet, som man kan koble sig på med en eventlistener.

Når et faneblad åbnes, bliver eventet `fds.tab.open` udløst på det tilhørende `.tab-button` faneblad element, som man kan koble sig på med en eventlistener.

Når et faneblad lukkes, bliver eventet `fds.tab.close` udløst på det tilhørende `.tab-button` faneblad element, som man kan koble sig på med en eventlistener.

## Faneblad med URL-skifte {#{% include create-id.html heading="Faneblad med URL-skifte" append="-kode" %}}

{% include code/syntax.html component="tabs-urls" link=true copybutton=true %}

Læg mærke til at der ved URL-skift faneblade istedet er anvendt `aria-current=page` for at indikere det aktive faneblad. Her skal man sikre sig at kun ét faneblad har denne attribut sat. 

## Faneblad med ikoner {#{% include create-id.html heading="Faneblad med ikoner" append="-kode" %}}

{% include code/syntax.html component="tabs-buttons-icons" link=true copybutton=true %}
