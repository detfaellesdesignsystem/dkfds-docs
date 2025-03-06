---
permalink: "/komponenter/badges/"
redirect_from:
- "/kode/komponenter/badges/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Badges
lead: Badges er grafiske markører, som du kan bruge til at gøre opmærksom på nyt eller
  vigtigt indhold.
description: Badges er grafiske markører, som du kan bruge til at gøre opmærksom på
  nyt eller vigtigt indhold.
tags: 
tabs: "Retningslinjer, kode"
---

{% include tabs.html guidelines=true code=true %}

{% include code/preview-box.html component="badges" title="Eksempel på badges" classes="intro-example" %}

{% include anchorlinks.html guidelines="Badges" code="Badges_Kode" %}

<!--split-->

## Sådan bruges komponenten {#{% include create-id.html heading="Sådan bruges komponenten" %}}

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

## Varianter {#{% include create-id.html heading="Varianter" %}}

### Statusbadges {#{% include create-id.html heading="Statusbadges" %}}

{% include code/preview-box.html component="badges-status" title="Eksempel på statusbadges" code="/komponenter/badges/#statusbadges-kode" %}

## Se komponenten i eksempelløsninger {#{% include create-id.html heading="Se komponenten i eksempelløsninger" %}}

{:.nobullet-list}
- {% include links/demo-link.html linktext="Sagsoversigt: Find sag" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Sagsoversigt: Sagsnr. 123456789" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Sagsoversigt: Afgørelser" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Opgaveliste" returnID="eksempelloesninger" %}

## Referencer {#{% include create-id.html heading="Referencer" %}}

{% include links/external-link.html linktext="Natasha Postolovski: What Is The Most Underrated Word In Web Design? (2014)" %}

<!--split-->

## Installation {#{% include create-id.html heading="Installation" append="-kode" %}}

### HTML Struktur

{% include code/syntax.html component="badges" copybutton=true %}

Både `<span>` og `<strong>` kan anvendes til badges. Hvis et badge anvendes til særlig fræmhævning af et ord i en kontekst, brug da `<strong>`.

## Statusbadges {#{% include create-id.html heading="Statusbadges" append="-kode" %}}

Statusbadges har 4 forskellige farver og formål:

- <strong class="badge badge-small badge-success">Grøn</strong>, som er succesfarven og implementeres med klassen `badge-success`.
- <strong class="badge badge-small badge-info">Blå</strong>, som er informationsfarven og implementeres med klassen `badge-info`.
- <strong class="badge badge-small badge-warning">Gul</strong>, som er advarselsfarven og implementeres med klassen `badge-warning`.
- <strong class="badge badge-small badge-error">Rød</strong>, som er fejlfarven og implementeres med klassen `badge-error`.

Se eksempel på anvendelse af statusbadges i vores {% include links/internal-link.html linktext="release notes" %}.
