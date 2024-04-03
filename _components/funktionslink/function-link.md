---
permalink: "/komponenter/funktionslink/guidelines/"
redirect_from:
- "/komponenter/funktionslink/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Funktionslink
lead: Funktionslink lader brugeren udføre forskellige systemfunktionaliteter.
component: "function-link-print"
componentTitle: "Eksempel på funktionslink"
componentLink: true
headings: Funktionslink
anchorlinks: true
description: Et link, der udfører en handling på siden - så som print. Der er gerne
  tilføjet et ikon, som underbygger handlingen.
tags:
---

{% assign headings = site.data.headings[page.headings] %}

[---- Sådan bruges komponenten -------------------------------------]: # 
<h2 id="{{ headings[0].id }}">{{ headings[0].h2 }}</h2>

### Anvendes til

Brug funktionsikoner til at tilbyde brugeren systemfunktionalitet, som fx: print, pdf, indstillinger, etc. Funktionalitet, der ikke er essentiel for brugerens umiddelbare gennemførsel af løsningen.

### Anvendes ikke til

Brug ikke funktionsikoner til generel navigation mellem sider eller til næste trin. Brug da standard links og primærknap i stedet. Anvend ikke funktionslinks til navigation til forrige side, anvend da tilbage-linket.

Brug {% include links/component-guideline-link.html linktext="sprogvælgeren" %} til valg af sprog.

### Vejledning

Systemfunktionalitet er fx:

- at aktivere browserens printfunktionalitet
- at vælge en dato i en popover kalender
- at generere en pdf
- at ændre indstillinger i løsningen
- at åbne operativsystemets mailklient
- at gemme en kladde i løsningen
- m.fl...

Funktionsikoner bør akkompagneres af et ord, der beskriver funktionaliteten. For næsten alle ikoner gælder det, at betydningen af disse ikke er entydigt givet og skal du vælge imellem kun et ikon eller kun et ord, vil ordet altid være det bedste og sikreste valg.

Enkelte ikoner kan stå alene, hvis der fx skal spares på pladsen i en tabel. Det drejer sig fx om: slet, rediger, print, pdf og gem, der er relativt konventionelle ikoner.

Har man brug for at fremhæve en funktionalitet, fordi brugeren ikke bør gennemføre løsningen uden brug af funktionaliteten, bør man vælge at lave en tertiærknap med et ikon i, i stedet for et funktionslink.

{% include dos-donts-box.html component="function-link-dos-donts" title="Funktionslink do's and don'ts" %}

[---- Se komponenten i eksempelløsninger -------------------------------------]: # 
<h2 id="{{ headings[1].id }}">{{ headings[1].h2 }}</h2>

{% include links/demo-link.html linktext="Trinformular til registrering: Vælg personer" returnID="eksempelloesninger" %}

[---- Referencer -------------------------------------]: # 
<h2 id="{{ headings[2].id }}">{{ headings[2].h2 }}</h2>

{:.nobullet-list}
- {% include links/external-link.html linktext="Farhad Manjoo: You Won’t Finish This Article (2013)" %}
- {% include links/external-link.html linktext="Susan Farrell: Utility Navigation: What It Is and How to Design It (2015)" %}

