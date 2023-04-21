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
- tekstområde
- tekstomraade
- textarea
- karakterbegrænsning
- karakterbegraensning
anchor: true
subnav:
- text: Karakterbegrænsning
  href: "#karakterbegraensning"
---

{% include code/preview-box.html component="text-area" title="Eksempel på tekstområde" link=true code="/kode/komponenter/tekstomraade/" %}

{:#retningslinjer}
## Retningslinjer

### Anvendes til

Brug tekstområder til sammenhængende (mere end 2 linjer) men ustruktureret tekst og sætninger, der har karakter af prosa. Fx en baggrundsfortælling.

Anvendes når der er behov for yderligere sammenhængende information, hvis karakter brugeren ikke kan vælge ud fra et prædefineret sæt værdier.

Anvendes når løsningen stiller et spørgsmål, der ikke kan besvares i et felt.

### Anvendes ikke til

Brug ikke tekstområder til struktureret information, hvor datakonsistens har betydning.

### Vejledning

Angiv tekstområdets højde, så det modsvarer den tekstmængde, du forventer, at brugeren skal indtaste.

Overvej at begrænse antallet af tegn, hvis det giver mening.

Vis kun fejlmeddelelser, når brugeren har indtastet en ugyldig værdi.

Fejlmeddelelser skal være meningsfulde og hjælpsomme.

Placér fejlmeddelelser mellem label og felt, og markér feltet med rødt.

{% include dos-donts-box.html component="textarea-dos-donts" title="Tekstområde do's and don'ts" %}

#### Fejlmeddelelse

<a href="/komponenter/fejlmeddelelser/">Læs mere om korrekt brug af fejlmeddelelser og deres formuleringer.</a>

Når der vises en fejlmeddelelse, vis da også <a href="/komponenter/fejlopsummering/">fejlopsummering</a>.

{% include code/preview-box.html component="text-area-error" title="Eksempel på tekstområde med fejlmeddelelse" %}

{:#eksempelloesninger}
#### Se komponenten i eksempelløsninger

{:.nobullet-list}
- <a href="/pages/eksempler/trinformular-til-ansoegning/ansoegning-3/?r={{page.permalink}}%23eksempelloesninger" title="Vis eksempel 'Trinformular til ansøgning: Ansøgningens type'">Trinformular til ansøgning: Ansøgningens type</a>

#### Referencer

ISO 9241-143: Forms (2012)

## Varianter

{:#karakterbegraensning}
### Karakterbegrænsning

Karakterbegrænsning sætter et maksimalt antal af tegn, som brugeren kan indtaste i et tekstområde. Karakterbegrænsning indikerer løbende overfor brugeren, hvor mange tegn der er tilbage, og hvor mange tegn de evt. har overskredet med.

Vis altid antallet af tegn, der er til rådighed i tekstområdet, inden brugeren begynder at skrive.

Stop ikke indtastningen, når brugeren overskrider antallet af tegn. Vis i stedet løbende med rød tekst under feltet, hvor mange tegn der er overskredet med.

{% include code/preview-box.html component="text-area-character-limit" link=false title="Eksempel på tekstområde med karakterbegrænsning" code="/kode/komponenter/tekstomraade/" %}