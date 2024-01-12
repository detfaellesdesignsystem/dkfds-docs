---
permalink: "/komponenter/sprogvaelger/guidelines/"
redirect_from:
- "/komponenter/sprogvaegler/"
- "/komponenter/sprogvaelger/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Sprogvælger
lead: En sprogvælger bruges hvis løsningen udbydes på mere end et sprog. Den giver
  brugeren mulighed for at vælge et andet sprog end løsningens standardsprog.
previewimage: "language-switcher"
previewimageTitle: "Eksempel på sprogvælger"
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
description: ''
tags: 
---

{:#retningslinjer}
## Sådan bruges komponenten

### Anvendes til

Brug en sprogvælger når du gerne vil vise en løsning i flere sprog.

Placeres nederst i footeren.

### Anvendes ikke til

Brug ikke sprogvælger, hvis løsningen kun findes i ét sprog.

### Vejledning

Sprogvælgeren placeres altid nederst i footeren. Denne placering giver fleksibilitet og understøtter brugen af alle headertyper.

Sprogvælgeren indeholder en liste af sprog skrevet på originalsproget. Sprogvælgeren fungerer således, at det valgte sprog bliver markeret med fed tekst og står altid som det første sprog i listen.

Når brugeren vælger et andet sprog, vil det blive markeret som fed i stedet. Det valgte sprog skifter placering til at være det første sprog i listen.

Husk at skrive sproget ud på det sprog det har. Eksempelvis "English" for engelsk og "Kalaallisut" for Grønlandsk. På denne måde, kan brugerne stadig finde frem til deres foretrukne sprog, trods resten af indholdet vises i et sprog de ikke forstår.

Bemærk, at der er ekstra tekst gemt i koden som skal oversættes for hvert sprog, således at brugere, der gør brug af hjælpeteknologier (fx skærmlæser) kan forstå komponenten på det valgte sprog.

#### Eksempel på sprogvælger i en simpel footer

{% include links/internal-link.html linktext="footer-simple-language" %}

#### Eksempel på sprogvælger i en kompleks footer

{% include links/internal-link.html linktext="footer-four-columns-language" %}

{:#varianter}
## Varianter

{:#sprogvaelger-med-tooltip}
### Sprogvælger med tooltip

{% include code/preview-image.html component="language-switcher-tooltip" alt="sprogvælger med tooltip" title="Sprogvælger med tooltip" %}

{:#eksempelloesninger}
## Se komponenten i eksempelløsninger

{:.nobullet-list}
- {% include links/demo-link.html linktext="Trinformular til registrering: Vælg personer" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Sagsoversigt: Find sag" returnID="eksempelloesninger" %}

{:#ref}
## Referencer

{:.nobullet-list}
- {% include links/external-link.html linktext="Top 10 Best Practices for Multilingual Websites" %}
- {% include links/external-link.html linktext="My take on language selectors" %}
- {% include links/external-link.html linktext="Designing a language switch: Examples and best practices" %}