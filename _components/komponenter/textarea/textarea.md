---
permalink: /komponenter/textarea/
layout: styleguide
type: component
title: Tekstområde
category: Komponenter_category
subcategory: Komponenter
description: "Felt til indtastning af information på flere linjer i form af bogstaver, tal og en kombination af begge."
tags:
component: text-area
componentTitle: Eksempel på tekstområde
componentCode: "/kode/komponenter/textarea/"
---

{:.h3 #retningslinjer}
## Anvendes til

Brug tekstområder til sammenhængende (mere end 2 linjer) men ustruktureret tekst og sætninger, der har karakter af prosa. Fx en baggrundsfortælling.

Anvendes når der er behov for yderligere sammenhængende information, hvis karakter brugeren ikke kan vælge ud fra et prædefineret sæt værdier.

Anvendes når løsningen stiller et spørgsmål, der ikke kan besvares i et felt.

{:.h3}
## Anvendes ikke til

Brug ikke tekstområder til struktureret information, hvor datakonsistens har betydning.

{:.h3}
## Vejledning

Angiv tekstområdets højde, så det modsvarer den tekstmængde, du forventer, at brugeren skal indtaste.

Overvej at begrænse antallet af tegn, hvis det giver mening.

Vis kun fejlmeddelelser, når brugeren har indtastet en ugyldig værdi.

Fejlmeddelelser skal være meningsfulde og hjælpsomme.

Placér fejlmeddelelser mellem label og felt, og markér feltet med rødt.

{% include dos-donts-box.html component="textarea-dos-donts" title="Tekstområde do's and don'ts" %}

{:.h4}
### Referencer

ISO 9241-143: Forms (2012)


{:.h3}
## Se komponenten i eksempelløsninger

{:.nobullet-list}
- <a href="/pages/eksempler/strategiske-virksomhedsalliancer/virksomhedsalliancer-4/" target="_blank" title="Eksempelløsning Strategiske virksomhedsalliancer åbnes i nyt vindue">Strategiske virksomhedsalliancer</a>

{% include child-components.html parent='Textarea' %}
