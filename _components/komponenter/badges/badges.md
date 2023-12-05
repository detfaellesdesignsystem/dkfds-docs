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
anchor: true
subnav:
- text: Sådan bruges komponenten
  href: "#retningslinjer"
- text: Varianter
  href: "#varianter"
- text: Se komponenten i eksempelløsninger
  href: "#eksempelloesninger"
- text: Referencer
  href: "#ref"
description: Badges er grafiske markører, som du kan bruge til at gøre opmærksom på
  nyt eller vigtigt indhold.
tags: 
---

{:#retningslinjer}
## Sådan bruges komponenten

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

{% include dos-donts-box.html component="badges-dos-donts" title="Badges do's and don'ts" %}

{:#varianter}
## Varianter

{:#statusbadges}
### Statusbadges

{% include code/preview-box.html component="badges-status" title="Eksempel på statusbadges" %}

{:#eksempelloesninger}
## Se komponenten i eksempelløsninger

{:.nobullet-list}
- <a href="/pages/eksempler/sagsoversigt/find-sag/?r={{page.permalink}}%23eksempelloesninger" title="Vis eksempel 'Sagsoversigt: Find sag'">Sagsoversigt: Find sag</a>
- <a href="/pages/eksempler/sagsoversigt/find-sag/sagsnr-123456789/?r={{page.permalink}}%23eksempelloesninger" title="Vis eksempel 'Sagsoversigt: Sagsnr. 123456789'">Sagsoversigt: Sagsnr. 123456789</a>
- <a href="/pages/eksempler/sagsoversigt/find-sag/sagsnr-123456789/afgoerelser/?r={{page.permalink}}%23eksempelloesninger" title="Vis eksempel 'Sagsoversigt: Afgørelser'">Sagsoversigt: Afgørelser</a>
- <a href="/pages/eksempler/opgaveliste/?r={{page.permalink}}%23eksempelloesninger" title="Vis eksempel 'Opgaveliste'">Opgaveliste</a>

{:#ref}
## Referencer

<a href="https://www.smashingmagazine.com/2014/06/affordance-most-underrated-word-in-web-design/" class="icon-link">Natasha Postolovski: What Is The Most Underrated Word In Web Design? (2014)<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>