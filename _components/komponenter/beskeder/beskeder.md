---
permalink: "/komponenter/beskeder/"
layout: styleguide
type: component
title: Beskeder (Alerts)
category: Komponenter_category
subcategory: Komponenter
description: Beskeder (Alerts) er farvede bokse, eventuelt tilknytte et ikon, du kan
  bruge til at give brugeren vigtig og aktuel information om fx status, fejl, opdateringer,
  o.l.
anchor: true
subnav:
- text: Beskeder med ikon
  href: "#beskeder-med-ikon"
- text: Teksteksempler
  href: "#teksteksempler"
- text: Luk knap
  href: "#besked-med-luk-knap"
component: alerts
componentTitle: Eksempel på beskeder
componentCode: "/kode/komponenter/beskeder/"
tags:
- fejlbesked

---
{:.h3 #retningslinjer}
## Anvendes til

Beskeder (Alerts) anvendes til at give brugeren vigtig og aktuel information om fx status, generelle fejl, til <a href="/komponenter/fejlangivelse/fejlopsummering/">fejlopsummeringer</a>, samt til at gøre opmærksom på ting brugeren skal vide, fx automatiske ændringer i brugerens data o.l.

Anvend succes- og advarselsbeskeder til at bekræfte en handling eller give besked om behov for handling.

{:.h3}
## Anvendes ikke til

Brug ikke beskeder til at markere fejlindtastning i et specifikt felt. Anvend i stedet <a href="/komponenter/fejlangivelse/fejlmeddelelser/">fejlmeddelelser</a>.

Brug modal dialog – ikke beskeder – til at give brugerne information om en potentielt kritisk handling. Dermed risikerer brugeren ikke at overse eller misforstå beskeden.

Brug ikke beskeder som farvelade for at “peppe” løsningen op, når informationen er neutral og statisk. Anvend da i stedet almindelig brødtekst.

{:.h3}
## Vejledning

Brug kun beskeder, når det er nødvendigt og hjælper brugeren med at forstå hvad denne skal, hvad der sker eller hvorfor. 

Brug ord og begreber, som brugeren kan genkende fra løsningen.

Skriv kort og præcist og undgå tekniske beskeder, der kan forvirre brugeren.

Brug beskeder til at øge brugerens forståelse for løsningen.

{:.h4}
### Informativ besked
Anvend informative beskeder til at gøre brugeren opmærksom på, at der er sket noget i brugergrænsefladen, som kan have betydning for deres handlinger. Det kan fx være hvis visse felter er blevet automatisk udfyldt med data andetstedsfra, som brugeren bør kontrollere.
 
{:.h4} 
### Succesmeddelelse
Anvend succesmeddelelser til at gøre brugeren opmærksom på, at en bestemt handling er gået korrekt igennem. Det kan fx være når en formular er blevet sendt af sted, eller hvis brugerens ændringer i en løsning er blevet gemt. 
 
{:.h4} 
### Advarsel
Brug advarsler til information, som ikke er udtryk for fejl, men som med høj sandsynlighed kan lede til fejl eller problemer, hvis ikke brugeren er opmærksom på det. Det kan fx være for at gøre opmærksom på planlagt nedetid for en løsning, eller hvis behandlingstiden pga. aktuelle omstændigheder er forlænget i en sådan grad, at det kan have særlige konsekvenser for brugeren. 
 
{:.h4} 
### Fejlbesked
Brug kun fejlbeskeder til deciderede fejl. Det kan både være som opsummering af fejl i brugerens egne indtastninger, eller hvis en handling ikke kunne gennemføres grundet tekniske fejl. 

{% include dos-donts-box.html component="alerts-dos-donts" title="Beskeder do's and don'ts" %}

{:.h4}
### Referencer
Linda Newman Lior: Writing for Interaction (2013)

{:.h3 #eksempelloesninger}
## Se komponenten i eksempelløsninger

{:.nobullet-list}
- <a href="/pages/eksempler/trinformular-til-registrering/registrering-7/?r={{page.permalink}}%23eksempelloesninger" title="Vis eksempel 'Trinformular til registrering, side 7'">Trinformular til registrering, side 7</a>
- <a href="/pages/eksempler/trinformular-til-ansoegning/ansoegning-6/?r={{page.permalink}}%23eksempelloesninger" title="Vis eksempel 'Trinformular til ansøgning, side 6'">Trinformular til ansøgning, side 6</a>
- <a href="/pages/eksempler/sagsoversigt/sagsoversigt-3/?r={{page.permalink}}%23eksempelloesninger" title="Vis eksempel 'Sagsoversigt, side 3'">Sagsoversigt, side 3</a>


{% include child-components.html parent='Beskeder' %}