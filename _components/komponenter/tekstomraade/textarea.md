---
permalink: /komponenter/tekstomraade/
redirect_from:
- /komponenter/textarea/
layout: styleguide
type: component
title: Tekstområde (Textarea)
category: Komponenter_category
subcategory: Komponenter
description: "Felt til indtastning af information på flere linjer i form af bogstaver, tal og en kombination af begge."
tags:
---

{% include code/preview-box.html component="text-area" title="Eksempel på tekstområde" link=true code="/kode/komponenter/tekstomraade/" %}

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

{:.h3 #eksempelloesninger}
## Se komponenten i eksempelløsninger

{:.nobullet-list}
- <a href="/pages/eksempler/strategiske-virksomhedsalliancer/virksomhedsalliancer-4/?r={{page.permalink}}%23eksempelloesninger" title="Eksempelløsning Strategiske virksomhedsalliancer åbnes i nyt vindue">Strategiske virksomhedsalliancer</a>

## Fejlmeddelelse
<a href="/komponenter/fejlangivelse/fejlmeddelelser/">Læs mere om korrekt brug af fejlmeddelelser og deres formuleringer.</a>

Når der vises en fejlmeddelelse, vis da også <a href="/komponenter/fejlangivelse/fejlopsummering/">fejlopsummering</a>.
