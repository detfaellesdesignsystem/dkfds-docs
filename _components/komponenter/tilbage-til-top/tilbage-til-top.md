---
permalink: /komponenter/tilbage-til-top/
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Tilbage til toppen
lead: Tilbage til toppen-knappen hjælper brugeren med at navigere til toppen af en lang side på en let måde uden at miste overblikket. 
component: "back-to-top"
componentTitle: "Eksempel på tilbage til toppen"
componentLink: true
componentCode: "/kode/komponenter/tilbage-til-top/"
anchor: false
description: Lad brugeren navigere tilbage til toppen.
tags:
- back-to-top
- top-link
- top-knap
- til toppen
- til-top
---

{:#retningslinjer}
## Retningslinjer

### Anvendes til

Bruges i forbindelse med lange sider, hvor brugeren kan befinde sig langt fra de øvrige knapper og interaktioner på siden.

### Anvendes ikke til

Anvendes ikke som navigationsknap eller på anden vis til andet end at sende brugeren til toppen af siden. 

### Vejledning

Tilbage til toppen-knappen placeres nederst til højre på siden. Knappen er "sticky", således at den altid er placeret det samme sted.

På sider, der ikke har <a href="/komponenter/trinindikator/">trinindikator</a> eller <a href="/komponenter/venstremenu/">venstremenu</a>, vises tilbage til toppen-knappen efter brugeren har scrollet 2 skærmsiders længde. Ligeledes vil knappen forsvinde igen, når brugeren scroller op og der er mindre end 2 skærmsiders længde til toppen af siden. 

På sider med trinindikator eller venstremenu vises knappen, når sidste element i venstre side (af trinindikatoren eller venstremenuen) er ude af syne for brugeren eller hvis brugeren har scrollet 2 skærmsiders længde.

Bemærk at placeringen af knappen i højre side afviger fra den generelle anbefaling om venstrestilling af indholdet i én kolonne (se {% include links/internal-links.html linktext="Layout" %}). Denne beslutning er baseret på etableret best practice vedrørende "til toppen"-knapper (Loranger, 2017). Dette gør yderligere risikoen for at overlappe andet indhold på siden mindre.

Det anbefales at lave en scroll-animation til toppen, når der klikkes på knappen, da det understøtter brugerens fornemmelse af, hvor de er på siden.

#### Komponenten på mobil

På mobil anvendes knappen uden tekst for at spare plads på skærmen. 

{% include code/preview-image.html component="back-to-top" alt="Eksempel på tilbage til toppen på mobil" code="/kode/komponenter/tilbage-til-top/" %}

{:#eksempelloesninger}
#### Se komponenten i eksempelløsninger

{:.nobullet-list}
- <a href="/pages/eksempler/trinformular-til-registrering/registrering-6/?r={{page.permalink}}%23eksempelloesninger" title="Vis eksempel 'Trinformular til registrering: Opsummering'">Trinformular til registrering: Opsummering</a>
- <a href="/pages/eksempler/sagsoversigt/find-sag/sagsnr-123456789/afgoerelser//?r={{page.permalink}}%23eksempelloesninger" title="Vis eksempel 'Sagsoversigt: Afgørelser'">Sagsoversigt: Afgørelser</a>

#### Referencer

{:.nobullet-list}
- <a href="https://www.nngroup.com/articles/back-to-top/" target="_blank" class="icon-link">Hoa Loranger: Back-to-Top Button Design Guidelines (2017)<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>

