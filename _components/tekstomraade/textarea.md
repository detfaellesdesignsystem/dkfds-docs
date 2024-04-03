---
permalink: "/komponenter/tekstomraade/guidelines/"
redirect_from:
- "/komponenter/textarea/"
- "/komponenter/tekstomraade/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Tekstområde (Textarea)
lead: Tekstområder lader brugeren indtaste en længere tekst på flere linjer.
component: "text-area"
componentTitle: "Eksempel på tekstområde"
componentLink: true
headings: Tekstomraade
anchorlinks: true
description: "Felt til indtastning af information på flere linjer i form af bogstaver, tal og en kombination af begge."
tags:
- tekstområde
- tekstomraade
- textarea
- karakterbegrænsning
- karakterbegraensning
---

{% assign headings = site.data.headings[page.headings] %}

[---- Sådan bruges komponenten -------------------------------------]: # 
<h2 id="{{ headings[0].id }}">{{ headings[0].h2 }}</h2>

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

Læs mere om korrekt brug af {% include links/component-guideline-link.html linktext="fejlmeddelelser" %} og deres formuleringer.

Når der vises en fejlmeddelelse, vis da også {% include links/component-guideline-link.html linktext="fejlopsummering" %}.

{% include code/preview-box.html component="text-area-error" title="Eksempel på tekstområde med fejlmeddelelse" %}

[---- Varianter -------------------------------------]: # 
<h2 id="{{ headings[1].id }}">{{ headings[1].h2 }}</h2>

{:#karakterbegraensning}
### Karakterbegrænsning

Karakterbegrænsning sætter et maksimalt antal af tegn, som brugeren kan indtaste i et tekstområde. Karakterbegrænsning indikerer løbende overfor brugeren, hvor mange tegn der er tilbage, og hvor mange tegn de evt. har overskredet med.

Vis altid antallet af tegn, der er til rådighed i tekstområdet, inden brugeren begynder at skrive.

Stop ikke indtastningen, når brugeren overskrider antallet af tegn. Vis i stedet løbende med rød tekst under feltet, hvor mange tegn der er overskredet med.

{% include code/preview-box.html component="text-area-character-limit" link=false title="Eksempel på tekstområde med karakterbegrænsning" code="/komponenter/tekstomraade/implementering/" %}

[---- Se komponenten i eksempelløsninger -------------------------------------]: # 
<h2 id="{{ headings[2].id }}">{{ headings[2].h2 }}</h2>

{% include links/demo-link.html linktext="Trinformular til ansøgning: Ansøgningens type" returnID="eksempelloesninger" %}

[---- Referencer -------------------------------------]: # 
<h2 id="{{ headings[3].id }}">{{ headings[3].h2 }}</h2>

ISO 9241-143: Forms (2012)