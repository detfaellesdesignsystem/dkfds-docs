---
permalink: "/komponenter/footer/guidelines/"
redirect_from:
- "/komponenter/footers/"
- "/komponenter/footer/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Footer
lead: Footeren markerer enden på siden og indeholder informationer, som guider brugeren videre.
previewimage: "footer-simple"
previewimageTitle: "Eksempel på footer"
headings: Footer
anchorlinks: true
description: "Du kan bruge en footer til at guide brugere, som når til sidens bund, videre."
tags:
---

{% assign headings = site.data.headings[page.headings] %}

[---- Sådan bruges komponenten -------------------------------------]: # 
<h2 id="{{ headings[0].id }}">{{ headings[0].h2 }}</h2>

### Vejledning

Footeren fungerer som sidens afslutning og indeholder altid ansvarlig myndighed, herunder support- og kontaktinformationer, samt tilgængelighedserklæring og cookieoplysninger. Footeren kan også anvendes til at sende brugere videre ved at linke ud af selvbetjeningsløsningen.

{% include dos-donts-box.html component="footer-dos-donts" title="Footers do's and don'ts" %}

[---- Varianter -------------------------------------]: # 
<h2 id="{{ headings[1].id }}">{{ headings[1].h2 }}</h2>

{:#tre-kolonner}
### Tre kolonner

{% include code/preview-image.html component="footer-three-columns" %}

{:#fire-kolonner}
### Fire kolonner

{% include code/preview-image.html component="footer-four-columns" %}

{:#kompleks}
### Kompleks

{% include code/preview-image.html component="footer-complex" %}

{:#logo}
### Logo

{% include code/preview-image.html component="footer-logo" %}

[---- Se komponenten i eksempelløsninger -------------------------------------]: # 
<h2 id="{{ headings[2].id }}">{{ headings[2].h2 }}</h2>

Se hvordan komponenten bruges i de forskellige {% include links/internal-link.html linktext="eksempler på selvbetjeningsløsninger" %}.

[---- Referencer -------------------------------------]: # 
<h2 id="{{ headings[3].id }}">{{ headings[3].h2 }}</h2>

{:.nobullet-list}
- {% include links/external-link.html linktext="Therese Fessenden: Footers 101: Design Patterns and When to Use Each (2019)" %}
- {% include links/external-link.html linktext="Priscilla Esser: How to Implement Sitemap Footers to Keep Users Going (2018)" %}
