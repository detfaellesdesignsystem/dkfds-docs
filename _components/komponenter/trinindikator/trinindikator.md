---
permalink: "/komponenter/trinindikator/"
redirect_from:
- /komponenter/trinindikatorer/
layout: styleguide
type: component
title: Trinindikator
category: Komponenter_category
subcategory: Komponenter
description: "Trinindikator anvendes til struktureret at føre brugeren igennem en kendt sekvens af spørgsmål."
tags:
lead: "Trinindikator fører brugeren igennem en kendt sekvens af trin i en løsning."
anchor: true
subnav:
- text: Responsiv
  href: "#responsiv"
- text: Låst
  href: "#laast"
- text: Ekstra information
  href: "#ekstra-information"
---
{% include code/preview-box.html component="tringuide-overflowmenu" title="Eksempel på trinindikator i overflow menu" link=true code="/kode/komponenter/trinindikator/" %}

{:.h3 #retningslinjer}
## Anvendes til

Trinindikator anvendes til struktureret at føre brugeren igennem en kendt sekvens af spørgsmål.

{:.h3}
## Anvendes ikke til

Trinindikator skal ikke anvendes som primær eller sekundær navigationselement.

{:.h3}
## Vejledning

Forsøg med ændret opsætning af dit indhold, type og antallet af spørgsmål før du vælger en trinindikator til din løsning.

Vælg den trinindikator variant, der passer til dine brugeres behov.

Undgå at lave en horisontal trinindikator.

Anvend trin der virker naturlige og logiske for brugerne.

Gør det synligt hvilket trin brugeren er kommet til.

Det sidste trin skal være "Opsummering" eller "Tjek dine svar".

Tilstræb så få trin som muligt.

Når indberetningen er foretaget skal brugeren have en kvittering, denne skal ikke vises i trinindikatoren.

{% include dos-donts-box.html component="tringuide-dos-donts" title="Trinindikator do's and don'ts" %}

{:.h4}
### Referencer

{:.nobullet-list}
- Caroline Jarrett & Gerry Gaffney: Forms that Work: Designing Web Forms for Usability (2009)
- Adam Silver: Form Design Patterns (2018)
- Jessica Enders: Designing UX: Forms (2016)
- <a href="https://www.effortmark.co.uk/design-patterns-government-2016/" class="icon-link">Caroline Jarrett: Design patterns in government (2016)<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>

{:.h3 #eksempelloesninger}
## Se komponenten i eksempelløsninger

{:.nobullet-list}
- <a href="/pages/eksempler/trinformular-til-registrering/registrering-1/?r={{page.permalink}}%23eksempelloesninger" title="Vis eksempel 'Trinformular til registrering'">Trinformular til registrering</a>
- <a href="/pages/eksempler/trinformular-til-ansoegning/ansoegning-1/?r={{page.permalink}}%23eksempelloesninger" title="Vis eksempel 'Trinformular til ansøgning'">Trinformular til ansøgning</a>

{:#responsiv}
## Responsiv
Denne komponent er responsiv, og vil derfor ændre udseende, når man ændrer skærmstørrelse.

{% include code/preview-box.html component="tringuide-responsive-overflowmenu" title="Eksempel på responsiv trinindikator" %}

{:#laast}
## Låst

{% include code/preview-box.html component="tringuide-locked" title="Eksempel på trinindikator med låste trin" %}

{:#ekstra-information}
## Ekstra information

{% include code/preview-box.html component="tringuide-information" title="Eksempel på trinindikator med information" %}
