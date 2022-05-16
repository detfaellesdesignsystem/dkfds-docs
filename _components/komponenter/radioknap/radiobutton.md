---
permalink: /komponenter/radioknap/
redirect_from:
- /komponenter/radiobutton/
layout: styleguide
type: component
title: Radioknap
category: Komponenter_category
subcategory: Komponenter
anchor: true
description: "Radioknapper giver brugeren mulighed for at vælge en enkelt værdi ud fra en synlig liste."
tags:
subnav:
- text: Hjælpetekst
  href: '#hjælpetekst'
- text: Fejlmeddelelse
  href: '#fejlmeddelelse'
- text: Lille radioknap
  href: '#lille-radioknap'
- text: Skjult indhold (Collapse)
  href: '#skjult-indhold-collapse'
component: radiobutton-large
componentTitle: Eksempel på radioknapper
componentCode: "/kode/komponenter/radioknap/"
---

{:.h3 #retningslinjer}
## Anvendes til

Radioknapper giver brugeren mulighed for at vælge en enkelt værdi ud fra en synlig liste.

Når brugeren skal have overblik over sine mulige valg.

Når listen over mulige valg kan være på en mobilvisning.

{:.h3}
## Anvendes ikke til

Når brugeren skal kunne vælge mere end én værdi ud fra en synlig liste. Her skal du i stedet bruge tjekbokse.

Du bør overveje at anvende en dropdown, hvis antallet af mulige værdier er for mange til en mobilvisning.

Når brugeren skal kunne undlade at vælge en værdi.

{:.h3}
## Vejledning

Brugeren skal kunne tappe eller klikke på radioknappen eller dens label for at vælge dens værdi. Den fravælges, når en anden radioknap vælges.

Du bør opstille lister med radioknapper i lodret linje af hensyn til brugerens læseretning.

Sørg for at der er tilstrækkelig luft omkring den enkelte radioknap, så den er brugbar på touchskærme.

Vær forsigtig med at angive et standard valg, da det kan have en modsatrettet effekt: Brugeren kan føle sig manipuleret eller foretager ikke et bevidst valg.

Der bør være en overordnet label for hele listen af radioknapper

{% include dos-donts-box.html component="radiobutton-dos-donts" title="Radioknapper do's and don'ts" %}

{:.nobullet-list}
### Referencer

{:.nobullet-list}
- ISO 9241-143: Forms (2012)
- <a href="https://www.nngroup.com/articles/radio-buttons-default-selection/" class="icon-link">Kara Pernice: Radio Buttons: Select One by Default or Leave All Unselected? (2014)<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>
- <a href="https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/" class="icon-link">Jakob Nielsen: Checkboxes vs. Radio Buttons (2004)<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>


{:.h3 #eksempelloesninger}
## Se komponenten i eksempelløsninger

{:.nobullet-list}
- <a href="/pages/eksempler/strategiske-virksomhedsalliancer/virksomhedsalliancer-4/?r={{page.permalink}}%23eksempelloesninger" title="Eksempelløsning Strategiske virksomhedsalliancer åbnes i nyt vindue">Strategiske virksomhedsalliancer</a>
- <a href="/pages/eksempler/AES-erstatningssag/aes-1/?r={{page.permalink}}%23eksempelloesninger" title="Eksempelløsning Erstatningssag åbnes i nyt vindue">Erstatningssag</a>

{% include child-components.html parent='Radiobutton' %}
