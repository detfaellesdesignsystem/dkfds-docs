---
permalink: /komigang/tiludviklere/eksempler-implementering/
parentlink: /komigang/tiludviklere/
layout: styleguide
title: Eksempler på implementering
category: Kom_i_gang_category
description: Eksempler på implementering af DKFDS i forskellige typer af projekter
subcategory: Kom i gang
alerts:
- type: warning
  content: Eksemplerne på implementering af dkfds og dkfds-plugins på denne side er indsendt af brugere af Det Fælles designsystem. Det Fælles Designsystem supporterer ikke disse eksempler.
lead: "Vi tager gerne i mod rettelser og tilføjelser til beskrivelserne på denne side, da brugerne gerne selv er "
---
<section>
    <h2>Angular</h2>
    <p>For at bruge DKFDS med Angular CLI gøres følgende:</p>
    <p>I package.json tiløjes DKFDS og evt. også DKFDS­-plugins ind under dependencies.</p>
<pre>
"dependencies": {
    "dkfds": "^5.0.0",
    "dkfds-plugins": "^5.0.0"
</pre>
    <p>Bemærk, at dkfds-plugins ikke er en nødvendighed, med mindre man vil gøre brug af <a href="/udvidelser/">udvidelserne</a>.</p>
    <h3>Implementer CSS</h3>
    <p>I angular.json udpeges styling alt efter hvilket tema der skal benyttes, og hvilke udvidelser man gør brug af:</p>
<pre>
"styles": [
    "node_modules/dkfds/dist/css/dkfds-­virkdk.css",
    "node_modules/dkfds-­plugins/dist/css/dkfds­-datatables­-theme.min.css"
</pre>
    <h3>Implementer JavaScript</h3>
    <p>Javascript kan implementeres på mange måder, og meget afhænger af projektets opbygning, og hvor komponenterne er placeret.</p>
    <p>Man kan vælge at initiere alle typer af komponenter på én gang med <code>DKFDS.init()</code>, eller man kan vælge at initere en komponent enkeltvis fx <code>new DKFDS.Accordion(document.getElementByID('ACCORDION-ID'));</code></p>
    <p>Eksempel på implementering i AppComponent:</p>
<pre>
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
</pre>
    <p>Samme implementering kan bruges i underliggende components. Men bemærk at den kun vil dække komponenter, som eksisterer på det tidspunkt. Det vil sige, at hvis andre components bliver loaded efterfølgende, vil disse ikke være dækket, og man skal derfor håndtere dette efterfølgende.</p>
    <p>I performance sammenhæng kan det også give mening, hvis man ikke gør brug af så mange javascript afhængige komponenter, at man initierer hver komponent enkeltvis fx <code>new DKFDS.Accordion(document.getElementByID('ACCORDION-ID'));</code> - fremfor brug af <code>DKFS.init()</code></p>
</section>
