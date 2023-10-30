---
permalink: "/kom-i-gang/implementering-kode/eksempler-implementering/"
parentlink: "/kom-i-gang/implementering-kode/"
redirect_from:
- "/komigang/tiludviklere/eksempler-implementering/"
- "/kode/eksempler-implementering/"
layout: styleguide
category: Kom_i_gang_category
subcategory: Kom i gang
alerts:
- type: warning
  content: Eksemplerne på implementering af DKFDS på denne side er indsendt af brugere af Det Fælles designsystem. Det Fælles Designsystem supporterer ikke disse eksempler.
title: Eksempler på implementering
anchor: false
description: Eksempler på implementering af DKFDS i forskellige typer af projekter
tags:
---

Nedenstående eksempler på implementering er indsendt af løsninger, som har implementeret FDS i deres framework. Vi gør opmærksom på, at FDS-teamet kan ikke tilbyde support af nedenstående frameworks.

## Mangler der et framework?

FDS er bygget efter et vanilla-princip, som betyder at koden i FDS er så simpel og standard som overhovedet muligt. Det betyder yderligere at FDS ikke stiller krav til løsningers framework og giver derved kodefrihed. Mangler der et eksempel på implementering af dit framework betyder det derfor blot, at vi ikke har modtaget et eksempel på implementering af FDS i lige det framework. Vi efterspørger hele tiden eksempler på implementering så vi kan få udvidet listen over eksempler og derved hjælpe nye løsninger hurtigere igang.

Nye eksempler på implementering af FDS i andre frameworks kan sendes til FDS-teamet ved at <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/new/choose" class="icon-link">oprette et issue på Github<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a> eller <a href="mailto:fds@erst.dk">via mail til FDS@erst.dk</a>

## Har du ændringer?

Har du tilføjelser eller ændringer til eksisterende eksempler på implementering er du mere end velkommen til at kontakte os ved at <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/new/choose" class="icon-link">oprette et issue på Github<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a> eller <a href="mailto:fds@erst.dk">sende en mail til FDS@erst.dk</a>

## Angular

For at bruge DKFDS med Angular CLI gøres følgende:

I package.json tilføjes DKFDS.

{% highlight json %}
"dependencies": {
    "dkfds": "^5.0.0"
{% endhighlight %}

### Implementer CSS

I angular.json udpeges styling alt efter, hvilket tema der skal benyttes.

{% highlight json %}
"styles": [
    "node_modules/dkfds/dist/css/dkfds-­virkdk.css"
{% endhighlight %}

### Implementer JavaScript

Javascript kan implementeres på mange måder, og meget afhænger af projektets opbygning, og hvor komponenterne er placeret.

Man kan vælge at initiere alle typer af komponenter på én gang med `DKFDS.init()`, eller man kan vælge at initiere en komponent enkeltvis fx `new DKFDS.Accordion(document.getElementByID('ACCORDION-ID'));`.

Eksempel på implementering i AppComponent:

{% highlight typescript %}
import {Component, OnInit} from '@angular/core';
import * as DKFDS from 'dkfds'
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    title = 'Tour of Heroes';
    
    constructor() { }
    
    ngOnInit() {
        DKFDS.init();
    }
}
{% endhighlight %}

Samme implementering kan bruges i underliggende components. Men bemærk at den kun vil dække komponenter, som eksisterer på det tidspunkt. Det vil sige, at hvis andre components bliver loaded efterfølgende, vil disse ikke være dækket, og man skal derfor håndtere dette efterfølgende.

I performance sammenhæng kan det også give mening, hvis man ikke gør brug af så mange javascript afhængige komponenter, at man initierer hver komponent enkeltvis fx `new DKFDS.Accordion(document.getElementByID('ACCORDION-ID'));` - fremfor brug af `DKFS.init()`
