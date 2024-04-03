---
permalink: "/komponenter/badges/guidelines/"
redirect_from:
- "/komponenter/badges/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Badges
lead: Badges er grafiske markører, som du kan bruge til at gøre opmærksom på nyt eller
  vigtigt indhold.
component: "badges"
componentTitle: "Eksempel på badges"
componentLink: true
headings: Badges
anchorlinks: true
description: Badges er grafiske markører, som du kan bruge til at gøre opmærksom på
  nyt eller vigtigt indhold.
tags: 
---

{% assign headings = site.data.headings[page.headings] %}

[---- Sådan bruges komponenten -------------------------------------]: # 
<h2 id="{{ headings[0].id }}">{{ headings[0].h2 }}</h2>

### Anvendes til

Brug badges til at gøre opmærksom på ændringer, nyt eller vigtigt indhold.

### Anvendes ikke til

Brug ikke badge, hvis placeringen af det får brugeren til at tro, det er en knap. Test altid for dette, når du vil anvende badges.

Brug ikke badges på sider, hvor indholdet bliver udskiftet dynamisk. Fx på nyhedssider, hvor brugeren nemt kan se, hvad der er det nyeste indhold, når det blot står øverst.

### Vejledning

Brug ord og begreber, som brugeren kan genkendes fra løsningen.

Brug ikke hover, focus eller active styling til et badge, som ikke er interaktivt (fx link).

Bland aldrig interaktive og statiske badges i samme løsning. Brugerne forventer ensartet opførsel af komponenterne inden for løsningen.

Vær varsom med at markere for meget indhold med badges – brug dem kun, hvor det virkelig er meningsfuldt.

[---- Varianter -------------------------------------]: # 
<h2 id="{{ headings[1].id }}">{{ headings[1].h2 }}</h2>

{:#statusbadges}
### Statusbadges

{% include code/preview-box.html component="badges-status" title="Eksempel på statusbadges" %}

[---- Se komponenten i eksempelløsninger -------------------------------------]: # 
<h2 id="{{ headings[2].id }}">{{ headings[2].h2 }}</h2>

{:.nobullet-list}
- {% include links/demo-link.html linktext="Sagsoversigt: Find sag" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Sagsoversigt: Sagsnr. 123456789" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Sagsoversigt: Afgørelser" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Opgaveliste" returnID="eksempelloesninger" %}

[---- Referencer -------------------------------------]: # 
<h2 id="{{ headings[3].id }}">{{ headings[3].h2 }}</h2>

{% include links/external-link.html linktext="Natasha Postolovski: What Is The Most Underrated Word In Web Design? (2014)" %}