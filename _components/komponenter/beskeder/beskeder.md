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

Beskeder (Alerts) anvendes til at give brugeren vigtig og aktuel information om fx status, generelle fejl, til <a href="/komponenter/fejlopsummering/">fejlopsummeringer</a>, samt til at gøre opmærksom på ting brugeren skal vide, fx automatiske ændringer i brugerens data o.l.

Anvend succes- og advarselsbeskeder til at bekræfte en handling eller give besked om behov for handling.

{:.h3}
## Anvendes ikke til

Brug ikke beskeder til at markere fejlindtastning i et specifikt felt. Brug da <a href="/komponenter/fejlmeddelelser/">fejlmeddelelser</a> i stedet.

Brug modal dialog – ikke beskeder – til at give brugerne information om en potentielt kritisk handling. Dermed risikerer brugeren ikke at overse eller misforstå beskeden.

{:.h3}
## Vejledning

Brug kun beskeder, når det er nødvendigt og hjælper brugeren med at forstå hvad denne skal, hvad der sker eller hvorfor. Brug ikke beskeder som farvelade for at "peppe" løsningen op.

Brug ord og begreber, som brugeren kan genkende fra løsningen.

Skriv kort og præcist og undgå tekniske beskeder, der kan forvirre brugeren.

Brug beskeder til at øge brugerens forståelse for løsningen.

{% include dos-donts-box.html component="alerts-dos-donts" title="Beskeder do's and don'ts" %}

{:.h4}
### Referencer
Linda Newman Lior: Writing for Interaction (2013)

{:.h3 #eksempelloesninger}
## Se komponenten i eksempelløsninger

{:.nobullet-list}
- <a href="/pages/eksempler/aktindsigt/aktindsigt-3/?r={{page.permalink}}%23eksempelloesninger" title="Eksempelløsning Aktindsigt åbnes i nyt vindue">Aktindsigt</a>
- <a href="/pages/eksempler/boernetilskud/boernetilskud-2/?r={{page.permalink}}%23eksempelloesninger" title="Eksempelløsning Børnetilskud åbnes i nyt vindue">Børnetilskud</a>
- <a href="/pages/eksempler/AES-erstatningssag/aes-10/?r={{page.permalink}}%23eksempelloesninger" title="Eksempelløsning Erstatningssag åbnes i nyt vindue">Erstatningssag</a>
- <a href="/pages/eksempler/vedhaeft-fil/fil-3/?r={{page.permalink}}%23eksempelloesninger" title="Eksempelløsning Vedhæft filer åbnes i nyt vindue">Vedhæft filer</a>

{% include child-components.html parent='Beskeder' %}
