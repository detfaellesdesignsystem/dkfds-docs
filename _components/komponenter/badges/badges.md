---
permalink: "/komponenter/badges/"
layout: styleguide
type: component
title: Badges
category: Komponenter_category
subcategory: Komponenter
description: Badges er grafiske markører, som du kan bruge til at gøre opmærksom på
  nyt eller vigtigt indhold.
tags: 
lead: Badges er grafiske markører, som du kan bruge til at gøre opmærksom på nyt eller
  vigtigt indhold.
anchor: true
subnav:
- text: Statusbadges
  href: "#statusbadges"
component: badges
componentTitle: Eksempel på badges
componentCode: "/kode/komponenter/badges/"

---
{:.h3 #retningslinjer}
## Anvendes til

Brug badges til at gøre opmærksom på ændringer, nyt eller vigtigt indhold.

{:.h3}
## Anvendes ikke til

Brug ikke badge, hvis placeringen af det får brugeren til at tro, det er en knap. Test altid for dette, når du vil anvende badges.

Brug ikke badges på sider, hvor indholdet bliver udskiftet dynamisk. Fx på nyhedssider, hvor brugeren nemt kan se, hvad der er det nyeste indhold, når det blot står øverst.

{:.h3}
## Vejledning

Brug ord og begreber, som brugeren kan genkendes fra løsningen.

Brug ikke hover, focus eller active styling til et badge, som ikke er interaktivt (fx link).

Bland aldrig interaktive og statiske badges i samme løsning. Brugerne forventer ensartet opførsel af komponenterne inden for løsningen.

Vær varsom med at markere for meget indhold med badges – brug dem kun, hvor det virkelig er meningsfuldt.


{% include dos-donts-box.html component="badges-dos-donts" title="Badges do's and don'ts" %}

{:.h4}
### Referencer

<a href="https://www.smashingmagazine.com/2014/06/affordance-most-underrated-word-in-web-design/" class="icon-link">Natasha Postolovski: What Is The Most Underrated Word In Web Design? (2014)<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>

{:.h3 #eksempelloesninger}
## Se komponenten i eksempelløsninger

{:.nobullet-list}
- <a href="/pages/eksempler/opgaveliste/?r={{page.permalink}}%23eksempelloesninger" title="Vis eksempel 'Opgaveliste'">Opgaveliste</a>
- <a href="/pages/eksempler/sagsoversigt/sagsoversigt-1/?r={{page.permalink}}%23eksempelloesninger" title="Vis eksempel 'Sagsoversigt, side 1'">Sagsoversigt, side 1</a>
- <a href="/pages/eksempler/sagsoversigt/sagsoversigt-2/?r={{page.permalink}}%23eksempelloesninger" title="Vis eksempel 'Sagsoversigt, side 2'">Sagsoversigt, side 2</a>
- <a href="/pages/eksempler/sagsoversigt/sagsoversigt-3/?r={{page.permalink}}%23eksempelloesninger" title="Vis eksempel 'Sagsoversigt, side 3'">Sagsoversigt, side 3</a>

{% include child-components.html parent='Badges' %}