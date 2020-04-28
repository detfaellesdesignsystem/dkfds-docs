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

Brug ikke beskeder til at markere fejlindtastning i et specifikt felt.Brug da <a href="/komponenter/fejlmeddelelser/">fejlmeddelelser</a> i stedet.

Brug modal dialog – ikke beskeder – til at give brugerne information om en potentielt kritisk handling. Dermed risikerer brugeren ikke at overse eller misforstå beskeden.

{:.h3}

## Vejledning

Brug kun beskeder, når det er nødvendigt og hjælper brugeren med at forstå hvad denne skal, hvad der sker eller hvorfor. Brug ikke beskeder som farvelade for at "peppe" løsningen op.

Gør informationen i beskederne aktiv og handlingsanvisende, så brugeren forstår, hvad der er behov for eller hvad den aktuelle status er.

Brug ord og begreber, som brugeren kan genkende fra løsningen.

Skriv kort og præcist og undgå tekniske beskeder, der kan forvirre brugeren.

Brug beskeder til at øge brugerens forståelse for løsningen.

{% include child-components.html parent='Beskeder' %}