---
permalink: /komponenter/tilbage-til-top/
title: Tilbage-til-top
layout: styleguide
type: component
category: Komponenter_category
subcategory: Komponenter
lead: Kan hjælpe brugeren til at navigere til toppen af en lang side på en let måde uden at miste overblikket over, hvordan man kommer dertil.
description: Lad brugeren navigere tilbage til toppen, hej Kristina.
tags:
- back-to-top
- top-link
- top-knap
---

{% include code/preview-box.html component="back-to-top" title="Eksempel på tilbage-til-top" link=true code="/kode/komponenter/tilbage-til-top/" %}

{:.h3 #retningslinjer}
## Anvendes til

Bruges i forbindelse med lange sider hvor brugeren kan befinde sig langt fra de øvrige knapper og interaktioner på siden.

{:.h3}
## Anvendes ikke til

Anvendes ikke som navigationsknap eller på anden vis til andet end at sende brugeren til toppen af siden.

{:.h3}
## Vejledning

Bruges ved placering i højre side nederst på siden. Vil først komme til syne når sidste element i venstre side (trinindikatoren) er ude af syne for brugeren. Knappen vil have en “stickyness” til siden og uanfægtet hvor lang siden er efter trinindikatoren er ude af syne, vil tilbage-til-toppen-knappen være placeret det samme sted. 

Ved sider, hvor der ikke er en trinindikator eller andet i venstre side som kan bruges som markør for hvornår knappen skal blive synlig for brugeren, anvendes 4 skærmsider som længden hvor knappen “Til toppen” vil komme til syne. Ligeledes vil knappen forsvinde igen, når brugeren scroller op og siden er “kortere” end 4 skærmsider. 

Placering af knappen i højre side er anderledes end hvad FDS ellers foreskriver omkring generel venstrestilling. Dog så er den generelle ‘best practice’ omkring “til toppen”-knapper at de placeres i højre side nederst tæt ved scollbaren. Dette gør muligheden for at overlappe andet indhold på siden væsentligt mindre, samtidigt med at det følger kendte konventioner for placering, så brugeren vil være bekendt med at skulle se efter knappen i denne placering.

Ved brug på mobil anvendes knappen uden tekst for at spare plads på skærmen. 

{:.h3}
## Tilbage-til-toppen når der er en trinindikator

Knappen kommer til syne efter sidste trin i trinindikatoren er blevet scrollet forbi. Knappen er “sticky” og vil forblive på sin plads uanset den resterende længde på siden. 

Scrolles der op til trinindikatoren igen, vil knappen ligeledes komme til syne, da behovet for at komme til top nu er ophørt.