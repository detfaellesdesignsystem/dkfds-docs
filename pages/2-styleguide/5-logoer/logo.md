---
permalink: "/design/logoer/"
layout: styleguide
category: Styleguide_category
subcategory: Styleguide
title: Logoer
lead: Din selvbetjeningsløsning er del af en større helhed på borger.dk og Virk, dette
  kommunikeres bl.a. via portalens logo i headeren.
description: Din selvbetjeningsløsning er del af en større helhed på borger.dk og
  Virk, dette kommunikeres bl.a. via portalens logo i headeren.
headings: Logoer
anchorlinks: true
tags:
- billede
- header
---

{% assign headings = site.data.headings[page.headings] %}

[---- SVG-filer til download -------------------------------------]: # 
<h2 id="{{ headings[0].id }}">{{ headings[0].h2 }}</h2>

<img src="{{ site.baseurl }}/assets/img/logo-borgerdk.svg" height="48" alt="Logo til borger.dk selvbetjeningsløsninger" />

Skal din løsning på borger.dk skal der være et borger.dk logo i headeren.

{% include links/internal-link.html linktext="Download borger.dk's logo (svg-fil)" %}

<img src="{{ site.baseurl }}/assets/img/logo_virk.svg" height="48" alt="Logo til Virk selvbetjeningsløsninger"/>

Skal din løsning på Virk skal der være et Virk logo i headeren.

{% include links/internal-link.html linktext="Download Virks logo (svg-fil)" %}

[---- Retningslinjer for portallogo i headeren -------------------------------------]: # 
<h2 id="{{ headings[1].id }}">{{ headings[1].h2 }}</h2>

### Begrænsninger

- Format: SVG
- Højde: max 4.8rem (48px)
- Bredde: max 4 kolonner

### Tilgængelighed

- Giv logoet en alt-tekst, der beskriver at brugeren går til forsiden af borger.dk eller Virk: “[Indsæt portal] forside”.

### Brugervenlighed

- Portal-logoet går til portalens forside
- Sørg for at advare brugeren om at denne forlader selvbetjeningsløsningen, hvis der klikkes på logoet, og få brugeren til at bekræfte, at det er den handling, der ønskes.
- Portalens logo er kun at finde i headeren
- Venstrestil altid logoet i headeren

### Links

<ul class="nobullet-list">
    <li>{% include links/external-link.html linktext="Why You Should Never Center or Right Align Your Logo" %}</li>
    <li>{% include links/external-link.html linktext="Centered Logos Hurt Website Navigation" %}</li>
    <li>{% include links/external-link.html linktext="Website Logo Placement for Maximum Brand Recall" %}</li>
    <li>{% include links/external-link.html linktext="Logo Placement Affects Web Navigation and Brand Recall" %}</li>
    <li>{% include links/external-link.html linktext="Homepage Links Remain a Necessity" %}</li>
</ul>

[---- Retningslinjer for myndighedslogo i footeren -------------------------------------]: # 
<h2 id="{{ headings[2].id }}">{{ headings[2].h2 }}</h2>

Gør kun brug af muligheden for at placere et myndighedslogo i footeren, hvis det understøtter brugerens gennemførelse af selvbetjeningsløsningen

### Størrelse

- Format: SVG
- Højde: max 3.2rem (32px)
- Bredde: max 4 kolonner

### Tilgængelighed

Giv logoet en alt-tekst, der beskriver at brugeren åbner myndighedens forside: “[Indsæt myndighed] forside”.

### Brugervenlighed

- Logoet i {% include links/component-guideline-link.html linktext="footeren" %} går til myndighedens forside
- Sørg for at advare brugeren om at denne forlader selvbetjeningsløsningen, hvis der klikkes på logoet, og få brugeren til at bekræfte, at det er den handling, der ønskes.
- Myndighedens logo er kun at finde i footeren og der er kun et logo
- Venstrestil altid logoet i footeren
