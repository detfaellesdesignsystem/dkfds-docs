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
headings: Sprogvaelger
anchorlinks: true
description: ''
tags: 
---

{% assign headings = site.data.headings[page.headings] %}

[---- Sådan bruges komponenten -------------------------------------]: # 
<h2 id="{{ headings[0].id }}">{{ headings[0].h2 }}</h2>

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

[---- Varianter -------------------------------------]: # 
<h2 id="{{ headings[1].id }}">{{ headings[1].h2 }}</h2>

{:#sprogvaelger-med-tooltip}
### Sprogvælger med tooltip

{% include code/preview-image.html component="language-switcher-tooltip" alt="sprogvælger med tooltip" title="Sprogvælger med tooltip" %}

[---- Se komponenten i eksempelløsninger -------------------------------------]: # 
<h2 id="{{ headings[2].id }}">{{ headings[2].h2 }}</h2>

{:.nobullet-list}
- {% include links/demo-link.html linktext="Trinformular til registrering: Vælg personer" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Sagsoversigt: Find sag" returnID="eksempelloesninger" %}

[---- Referencer -------------------------------------]: # 
<h2 id="{{ headings[3].id }}">{{ headings[3].h2 }}</h2>

{:.nobullet-list}
- {% include links/external-link.html linktext="Top 10 Best Practices for Multilingual Websites" %}
- {% include links/external-link.html linktext="My take on language selectors" %}
- {% include links/external-link.html linktext="Designing a language switch: Examples and best practices" %}