---
permalink: /komponenter/tjekboks/
layout: styleguide
type: component
title: Tjekboks
category: Komponenter_category
subcategory: Komponenter
description: "Tjekbokse giver brugeren mulighed for at vælge en eller flere værdier ud fra en synlig liste."
tags:
anchor: true
subnav:
- text: Fejlbesked
  href: '#fejlbesked'
- text: Lille tjekboks
  href: '#lille-tjekboks'
- text: Skjult indhold (Collapse)
  href: '#skjult-indhold-collapse'
component: checkbox-large
componentTitle: Eksempel på tjekbokse
componentCode: "/kode/komponenter/tjekboks/"
---

{:.h3 #retningslinjer}
## Anvendes til

Tjekbokse giver brugeren mulighed for at vælge en eller flere værdier ud fra en synlig liste.

Når brugeren skal have overblik over sine mulige valg.

Når brugeren skal be- eller afkræfte et valg, fx ”Ja/Nej” (i det tilfælde en enkelt tjekboks), eller slå noget til eller fra (toggle).

Når listen over mulige valg kan være på en mobilvisning.

{:.h3}
## Anvendes ikke til

Når der er for mange valg til at give mening på en mobilvisning.

Når brugeren kun kan vælge én værdi. Her skal du i stedet anvende radioknapper.

{:.h3}
## Vejledning

Brugeren skal kunne tappe eller klikke på tjekboksen eller dens label for at vælge eller fravælge dens værdi.

Du bør opstille lister med tjekbokse i lodret linje af hensyn til brugerens læseretning.

Anvend et positivt sprog til værdierne. I stedet for fx ”Jeg vil ikke modtage bekræftelse på email” bør du skrive ”Jeg vil gerne modtage bekræftelse på email”.

Sørg for at der er tilstrækkelig luft omkring den enkelte tjekboks, så den er brugbar på touchskærme.

{% include child-components.html parent='Checkbox' %}
