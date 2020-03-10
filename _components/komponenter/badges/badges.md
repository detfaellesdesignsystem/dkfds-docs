---
permalink: /komponenter/badges/
layout: styleguide
type: component
title: Badges
category: Komponenter_category
subcategory: Komponenter
description: "Badges er grafiske markører, som du kan bruge til at gøre opmærksom på nyt eller vigtigt indhold."
tags:
lead: Badges er grafiske markører, som du kan bruge til at gøre opmærksom på nyt eller vigtigt indhold.
anchor: true
subnav:
- text: Statusbadges
  href: "#statusbadges"
component: badges
componentTitle: "Eksempel på badges"
componentCode: "/kode/komponenter/badges/"
---

{:.h3 #retningslinjer}
## Anvendes til

Brug badges til at gøre opmærksom på ændringer, nyt eller vigtigt indhold.

{:.h3}
## Anvendes ikke til

Brug ikke badge, hvis placeringen af det får brugeren til at tro, det er en knap. Test altid for dette, når du vil anvende badges.

Overvej at markere ændringer på siden ved at markere selve det ændrede fx med en baggrundsfarve eller en typografisk markering som fx fed tekst.

Brug ikke badge på sider, hvor indholdet bliver udskiftet dynamisk. Fx på nyhedssider, hvor brugeren nemt kan se, hvad der er det nyeste indhold, når det blot står øverst.

{:.h3}
## Vejledning          


Brug ord og begreber, som brugeren kan genkendes fra løsningen.  

Skriv badges med store bogstaver.

Brug ikke hover, focus eller active styling til et badge, som ikke er interaktivt (fx link).

Bland aldrig interaktive og statiske badges i samme løsning. Brugerne forventer ensartet opførsel af komponenterne inden for løsningen.

Vær varsom med at markere for meget indhold med badges – brug dem kun, hvor det virkelig er meningsfuldt.

{% include child-components.html parent='Badges' %}
