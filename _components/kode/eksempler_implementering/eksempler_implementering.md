---
permalink: /kode/eksempler-implementering/
parentlink: /komigang/tiludviklere/
redirect_from:
- /komigang/tiludviklere/eksempler-implementering/
layout: styleguide
title: Eksempler på implementering
category: Kode_category
description: Eksempler på implementering af DKFDS i forskellige typer af projekter
subcategory: Kode
alerts:
- type: warning
  content: Eksemplerne på implementering af DKFDS og dkfds-plugins på denne side er indsendt af brugere af Det Fælles designsystem. Det Fælles Designsystem supporterer ikke disse eksempler.
lead: "Vi tager gerne i mod rettelser og tilføjelser til beskrivelserne på denne side, da brugerne gerne selv er "
---

## Angular

For at bruge DKFDS med Angular CLI gøres følgende:

I package.json tiløjes DKFDS og evt. også DKFDS­-plugins ind under dependencies.

```
"dependencies": {
    "dkfds": "^5.0.0",
    "dkfds-plugins": "^5.0.0"
```

Bemærk, at dkfds-plugins ikke er en nødvendighed, med mindre man vil gøre brug af <a href="/udvidelser/">udvidelserne</a>.

### Implementer CSS

I angular.json udpeges styling alt efter hvilket tema der skal benyttes, og hvilke udvidelser man gør brug af:

```
"styles": [
    "node_modules/dkfds/dist/css/dkfds-­virkdk.css",
    "node_modules/dkfds-­plugins/dist/css/dkfds­-datatables­-theme.min.css"
```

### Implementer JavaScript

Javascript kan implementeres på mange måder, og meget afhænger af projektets opbygning, og hvor komponenterne er placeret.

Man kan vælge at initiere alle typer af komponenter på én gang med `DKFDS.init()`, eller man kan vælge at initiere en komponent enkeltvis fx `new DKFDS.Accordion(document.getElementByID('ACCORDION-ID'));`.

Eksempel på implementering i AppComponent:

```
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
```

Samme implementering kan bruges i underliggende components. Men bemærk at den kun vil dække komponenter, som eksisterer på det tidspunkt. Det vil sige, at hvis andre components bliver loaded efterfølgende, vil disse ikke være dækket, og man skal derfor håndtere dette efterfølgende.

I performance sammenhæng kan det også give mening, hvis man ikke gør brug af så mange javascript afhængige komponenter, at man initierer hver komponent enkeltvis fx `new DKFDS.Accordion(document.getElementByID('ACCORDION-ID'));` - fremfor brug af `DKFS.init()`
