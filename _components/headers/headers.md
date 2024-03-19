---
permalink: "/komponenter/header/guidelines/"
redirect_from:
- "/komponenter/headers/"
- "/komponenter/header/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Header
lead: Headeren identificerer portalen, den ansvarlige myndighed og brugeren, der er logget ind med NemLog-in. Den fungerer også til navigation og overordnet styring af selvbetjeningsløsningen.
previewimage: "header-with-navigation"
previewimageTitle: "Eksempel på header"
anchor: true
subnav:
- text: Sådan bruges komponenten
  href: "#retningslinjer"
- text: Varianter
  href: "#varianter"
- text: Referencer
  href: "#ref"
description: "Tydelige headers er med til at skabe en let navigation for brugeren og hjælper dermed brugeren med at finde vej."
tags: 
---

{:#retningslinjer}
## Sådan bruges komponenten

### Anvendes til

Brug headeren til at give brugeren et “ankerpunkt”, der er ens på tværs af trin og undersider i selvbetjeningsløsningen. 

Brug headeren til at kommunikere portal, NemLog-in-oplysninger, ansvarlig myndighed og evt. med kontaktoplysninger.

En eventuel overordnet navigation (topnavigation) skal også placeres i headeren, så brugeren altid kan navigere rundt i selvbetjeningsløsningen.

### Anvendes ikke til

Anvend ikke headeren andre steder i løsningen end i toppen af siden. 

Brug ikke topnavigationen som faneblade, anvend da {% include links/component-guideline-link.html linktext="faneblade" %}. 

### Vejledning

Tag et kig på {% include links/internal-link.html linktext="eksemplerne på selvbetjeningsløsninger" %} for at se, hvordan komponenten passer ind i en komplet løsning.

En header består af et antal rækker med forskelligt indhold.

- Række 1 og række 2 er obligatoriske. Alle selvbetjeningsløsninger skal have portal-logo, login-info og løsningstitel som minimum.
- Række 3 (topnavigation) kan anvendes hvis nødvendigt.

#### Headerens rækker forklaret

##### Række 1 (obligatorisk)
Portal-logo, NemLog-in-oplysninger og “Log af” knap.

##### Række 2 (obligatorisk)
Selvbetjeningens navn (løsningstitel), ansvarhavendes myndighed og eventuel support/kontaktoplysninger.

##### Række 3 (frivillig)
Navigation (topnavigation) i løsningen og søgefelt.

### Eksempler

#### Simpel header

{% include code/preview-image.html component="header-simple" %}

#### Header med navigation og søgefelt

{% include code/preview-image.html component="header-with-navigation" %}

### Menupunkter med dropdown

Menupunkter med dropdown-funktionalitet giver adgang til undermenupunkter, men er ikke et menupunkt i sig selv. Overvej om dropdown-menu er den rigtige løsning. Topnavigation kombineret med venstremenu giver større fleksibilitet og mulighed for flere niveauer i navigationen.

### Responsivitet og breakpoints

På små skærme foldes indhold vedr. log ind-information, ansvarlig myndighed og eventuelle menupunkter ind i en “mobil”-menu. Vi anbefaler, at løsningen kun anvender denne visning, når der ikke længere er plads til indholdet på sidens bredde.

Menupunkter, der ikke kan vises i sidens bredde, samles i en “mere”-menu, der ved klik vises på samme måde som mobilmenuen.

{:#varianter}
## Varianter

Hvis din selvbetjeningsløsning skal være tilgængelig på flere sprog, placeres sprogvælgeren både som overflowmenu øverst i række 1 og i sidens footer, hvor alle sprogvarianter skal være synlige. Se {% include links/component-guideline-link.html linktext="sprogvælger" %}-komponenten. Nedenstående eksempel viser udelukkende sprogvælgerens header-variant.

{% include code/preview-image.html component="header-switch-language" %}

{:#ref}
## Referencer

{% include links/external-link.html linktext="Web Accessibility Tutorials: Headers" %}