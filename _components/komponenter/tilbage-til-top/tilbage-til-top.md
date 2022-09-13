---
permalink: /komponenter/tilbage-til-top/
title: Tilbage til toppen
layout: styleguide
type: component
category: Komponenter_category
subcategory: Komponenter
lead: Tilbage til toppen-knappen hjælper brugeren med at navigere til toppen af en lang side på en let måde uden at miste overblikket. 
description: Lad brugeren navigere tilbage til toppen.
tags:
- back-to-top
- top-link
- top-knap
- til toppen
- til-top
---

{% include code/preview-box.html component="back-to-top" title="Eksempel på tilbage til toppen" link=true code="/kode/komponenter/tilbage-til-top/" %}

{:.h3 #retningslinjer}
## Anvendes til

Bruges i forbindelse med lange sider, hvor brugeren kan befinde sig langt fra de øvrige knapper og interaktioner på siden.

{:.h3}
## Anvendes ikke til

Anvendes ikke som navigationsknap eller på anden vis til andet end at sende brugeren til toppen af siden. 

{:.h3}
## Vejledning

Tilbage til toppen-knappen placeres nederst til højre på siden. Knappen vises først, når sidste element i venstre side (<a href="/komponenter/trinindikator/">trinindikatoren</a> eller <a href="/komponenter/venstremenu/">venstremenuen</a>) er ude af syne for brugeren. Knappen er "sticky", således at den altid er placeret det samme sted.

På sider, der ikke har trinindikator eller venstremenu, vises tilbage til toppen-knappen efter brugeren har scrollet 2 skærmsiders længde. Ligeledes vil knappen forsvinde igen, når brugeren scroller op og der er mindre end 2 skærmsiders længde til toppen af siden. 

Bemærk at placeringen af knappen i højre side afviger fra den generelle anbefaling om venstrestilling af indholdet i én kolonne (se <a href="/design/layout/">Layout</a>). Denne beslutning er baseret på etableret best practice vedrørende "til toppen"-knapper (Loranger, 2017). Dette gør yderligere risikoen for at overlappe andet indhold på siden mindre.

Det anbefales at lave en scroll-animation til toppen, når der klikkes på knappen, da det understøtter brugerens fornemmelse af, hvor de er på siden.

{:.h3}
## Komponenten på mobil

På mobil anvendes knappen uden tekst for at spare plads på skærmen. 

{:.h3}
## Referencer

{:.nobullet-list}
- <a href="https://www.nngroup.com/articles/back-to-top/" target="_blank" class="icon-link">Hoa Loranger: Back-to-Top Button Design Guidelines (2017)<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>

{:.h3 #eksempelloesninger}
## Se komponenten i eksempelløsninger

{:.nobullet-list}
- <a href="/pages/eksempler/trinformular-til-registrering/registrering-6/?r={{page.permalink}}%23eksempelloesninger" title="Vis eksempel 'Trinformular til registrering: Opsummering'">Trinformular til registrering: Opsummering</a>
- <a href="/pages/eksempler/sagsoversigt/find-sag/sagsnr-123456789/afgoerelser//?r={{page.permalink}}%23eksempelloesninger" title="Vis eksempel 'Sagsoversigt: Afgørelser'">Sagsoversigt: Afgørelser</a>