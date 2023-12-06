---
permalink: "/komponenter/beskeder/guidelines/"
redirect_from:
- "/komponenter/beskeder/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Beskeder (Alerts)
lead: Beskeder anvendes til at fremhæve aktuel information, som er vigtig for brugeren.
component: "alerts"
componentTitle: "Eksempel på beskeder"
componentLink: true
anchor: true
subnav:
- text: Sådan bruges komponenten
  href: "#retningslinjer"
- text: Varianter
  href: "#varianter"
- text: Se komponenten i eksempelløsninger
  href: "#eksempelloesninger"
- text: Referencer
  href: "#ref"
description: Beskeder (Alerts) er farvede bokse, eventuelt tilknyttet et ikon, du kan
  bruge til at give brugeren vigtig og aktuel information om fx status, fejl, opdateringer,
  o.l.
tags:
- fejlbesked
---

{:#retningslinjer}
## Sådan bruges komponenten

### Anvendes til

Beskeder (Alerts) anvendes til at give brugeren vigtig og aktuel information om fx status, generelle fejl, til {% include links/component-links.html linktext="fejlopsummeringer" %}, samt til at gøre opmærksom på ting brugeren skal vide, fx automatiske ændringer i brugerens data o.l.

Anvend succes- og advarselsbeskeder til at bekræfte en handling eller give besked om behov for handling.

### Anvendes ikke til

Brug ikke beskeder til at markere fejlindtastning i et specifikt felt. Anvend i stedet {% include links/component-links.html linktext="fejlmeddelelser" %}.

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

{% include dos-donts-box.html component="alerts-dos-donts" title="Beskeder do's and don'ts" %}

{% include dos-donts-box.html component="alerts-success-dos-donts" title="Successbeskeder do's and don'ts" %}

{:#varianter}
## Varianter

{:#beskeder-med-ikon}
### Beskeder med ikon

{% include code/preview-box.html component="alerts-icons" title="Eksempel på besked med ikon" %}

{:#teksteksempler}
### Teksteksempler

{% include code/preview-box.html component="alerts-texts" title="Eksempel på besked i forskellige formater" %}

{:#besked-med-luk-knap}
### Besked med luk knap

{% include code/preview-box.html component="alert-close" title="Eksempel på besked med luk-knap" %}

{:#eksempelloesninger}
## Se komponenten i eksempelløsninger

{:.nobullet-list}
- <a href="/pages/eksempler/formular-til-kontaktoplysninger/formular-3/?r={{page.permalink}}%23eksempelloesninger" title="Vis eksempel 'Formular til kontaktoplysninger: Kvittering'">Formular til kontaktoplysninger: Kvittering</a>
- <a href="/pages/eksempler/trinformular-til-registrering/registrering-7/?r={{page.permalink}}%23eksempelloesninger" title="Vis eksempel 'Trinformular til registrering: Kvittering'">Trinformular til registrering: Kvittering</a>
- <a href="/pages/eksempler/trinformular-til-ansoegning/ansoegning-6/?r={{page.permalink}}%23eksempelloesninger" title="Vis eksempel 'Trinformular til ansøgning: Kvittering'">Trinformular til ansøgning: Kvittering</a>
- <a href="/pages/eksempler/sagsoversigt/find-sag/sagsnr-123456789/afgoerelser/?r={{page.permalink}}%23eksempelloesninger" title="Vis eksempel 'Sagsoversigt: Afgørelser'">Sagsoversigt: Afgørelser</a>

{:#ref}
## Referencer

{:.nobullet-list}
- Linda Newman Lior: Writing for Interaction (2013)
- Luke Wroblewski: Web Form Design: Filling in the Blanks (2008)
- Adam Silver: Form Design Patterns (2018)