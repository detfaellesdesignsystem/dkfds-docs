---
permalink: "/komponenter/tilbage-til-top/guidelines/"
redirect_from:
- "/komponenter/tilbage-til-top/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Tilbage til toppen
lead: Tilbage til toppen-knappen hjælper brugeren med at navigere til toppen af en lang side på en let måde uden at miste overblikket. 
component: "back-to-top"
componentTitle: "Eksempel på tilbage til toppen"
componentLink: true
anchor: true
subnav:
- text: Sådan bruges komponenten
  href: "#retningslinjer"
- text: Se komponenten i eksempelløsninger
  href: "#eksempelloesninger"
- text: Referencer
  href: "#ref"
description: Lad brugeren navigere tilbage til toppen.
tags:
- back-to-top
- top-link
- top-knap
- til toppen
- til-top
---

{:#retningslinjer}
## Sådan bruges komponenten

### Anvendes til

Bruges i forbindelse med lange sider, hvor brugeren kan befinde sig langt fra de øvrige knapper og interaktioner på siden.

### Anvendes ikke til

Anvendes ikke som navigationsknap eller på anden vis til andet end at sende brugeren til toppen af siden. 

### Vejledning

Tilbage til toppen-knappen placeres nederst til højre på siden. Knappen er "sticky", således at den altid er placeret det samme sted.

På sider, der ikke har {% include links/component-guideline-link.html linktext="trinindikator" %} eller {% include links/component-guideline-link.html linktext="venstremenu" %}, vises tilbage til toppen-knappen efter brugeren har scrollet 2 skærmsiders længde. Ligeledes vil knappen forsvinde igen, når brugeren scroller op og der er mindre end 2 skærmsiders længde til toppen af siden. 

På sider med trinindikator eller venstremenu vises knappen, når sidste element i venstre side (af trinindikatoren eller venstremenuen) er ude af syne for brugeren eller hvis brugeren har scrollet 2 skærmsiders længde.

Bemærk at placeringen af knappen i højre side afviger fra den generelle anbefaling om venstrestilling af indholdet i én kolonne (se {% include links/internal-link.html linktext="Layout" %}). Denne beslutning er baseret på etableret best practice vedrørende "til toppen"-knapper (Loranger, 2017). Dette gør yderligere risikoen for at overlappe andet indhold på siden mindre.

Det anbefales at lave en scroll-animation til toppen, når der klikkes på knappen, da det understøtter brugerens fornemmelse af, hvor de er på siden.

#### Komponenten på mobil

På mobil anvendes knappen uden tekst for at spare plads på skærmen. 

{% include code/preview-image.html component="back-to-top" alt="Eksempel på tilbage til toppen på mobil" code="/komponenter/tilbage-til-top/implementering/" %}

{:#eksempelloesninger}
## Se komponenten i eksempelløsninger

{:.nobullet-list}
- {% include links/demo-link.html linktext="Trinformular til registrering: Opsummering" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Sagsoversigt: Afgørelser" returnID="eksempelloesninger" %}

{:#ref}
## Referencer

{% include links/external-link.html linktext="Hoa Loranger: Back-to-Top Button Design Guidelines (2017)" %}
