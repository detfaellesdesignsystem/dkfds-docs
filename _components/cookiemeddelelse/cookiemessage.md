---
permalink: "/komponenter/cookiemeddelelse/guidelines/"
redirect_from:
- "/komponenter/cookiemeddelelse/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Cookiemeddelelse
lead: Anvender din selvbetjeningsløsning cookies til andet end teknisk nødvendige
  formål, skal brugeren vises en cookiemeddelelse.
previewimage: "cookie-message"
previewimageTitle: "Eksempel på cookiemeddelelse"
headings: Cookiemeddelelse
anchorlinks: true
description: Cookiemeddelelsen vises midt på siden, og blokerer indhold indtil man
  har taget stilling til brug af cookies.
tags:
---

{% assign headings = site.data.headings[page.headings] %}

[---- Sådan bruges komponenten -------------------------------------]: # 
<h2 id="{{ headings[0].id }}">{{ headings[0].h2 }}</h2>

### Anvendes til

Brug cookiemeddelelsen til at få brugerens accept af de cookies du sætter i din løsning ud over de funktionelt nødvendige.

### Anvendes ikke til

Du behøver ikke vise en cookiemeddelelse, hvis din løsning kun sætter funktionelt nødvendige cookies.

### Vejledning

Det Fælles Designsystem anviser kun styling for cookiemeddelelsen, ikke den tekniske implementering af cookiemeddelelsen.

Du skal selv tilpasse indholdet i meddelelsen, så den overholder gældende lovgivning og stemmer overens med din løsnings specifikke anvendelse af cookies.

{% include dos-donts-box.html component="cookie-message-dos-donts" title="Cookiemeddelelser do's and don'ts" %}

[---- Referencer -------------------------------------]: # 
<h2 id="{{ headings[1].id }}">{{ headings[1].h2 }}</h2>

{:.nobullet-list}
- {% include links/external-link.html linktext="Vitaly Friedman: Privacy UX: Better Cookie Consent Experiences (2019)" %}
- {% include links/external-link.html linktext="Therese Fessenden: Modal & Nonmodal Dialogs: When (& When Not) to Use Them (2017)" %}
- {% include links/external-link.html linktext="Læs om cookies på Digitaliseringsstyrelsens hjemmeside" %}
- {% include links/external-link.html linktext="Cookiebekendtgørelsen" %}
