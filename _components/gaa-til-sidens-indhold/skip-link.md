---
permalink: "/komponenter/skip-link/guidelines/"
redirect_from:
- "/komponenter/skip-link/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Gå til sidens indhold (Skip-link)
lead: "Skip-links anvendes til at give brugere, der navigerer med tastatur, en bedre oplevelse. Brugerens første tryk på tab-tasten vil få et skjult link til at komme frem, der lader brugeren skippe menuen og gå direkte til sidens indhold."
previewimage: "skip-link-eksempel"
previewimageTitle: "Eksempel på skip-link"
previewimageImage: "skiplink"
headings: Skiplink
anchorlinks: false
description: "Skip-links anvendes til at give brugere, der navigerer med tastatur, en bedre oplevelse."
tags: 
---

{% assign headings = site.data.headings[page.headings] %}

[---- Sådan bruges komponenten -------------------------------------]: # 
<h2 id="{{ headings[0].id }}">{{ headings[0].h2 }}</h2>

### Anvendes til

Skip-link skal anvendes på alle sider.

Skip-linket gør det muligt for brugere, der anvender tasturet til navigation, at navigere direkte til sidens indhold.

### Anvendes ikke til

Andre former for navigation.

### Vejledning

Et skip-link er et skjult link, der kun vises, når en bruger navigerer på siden ved at bruge tastaturet.

Når brugeren trykker på linket (med tastatur eller mus) sættes fokus på første indholdselement på den aktuelle side.

Det vil sige at brugere, der anvender tastaturet til at navigere siden med, kan undgå at få læst alle menupunkter op, før de får adgang til selve indholdet.