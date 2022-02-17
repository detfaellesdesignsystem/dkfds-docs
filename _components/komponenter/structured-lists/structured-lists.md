---
permalink: "/komponenter/strukturerede-lister/"
layout: styleguide
type: component
title: Strukturerede lister
category: Komponenter_category
subcategory: Komponenter
description: Strukturerede lister opstiller simple informationer på en letlæselig
  måde.
tags: 
lead: Strukturerede lister opstiller simple informationer på en letlæselig måde.
component: structured-list
componentTitle: Eksempel på struktureret liste
componentCode: "/kode/komponenter/strukturerede-lister/"
anchor: true
subnav:
- text: Med redigér
  href: "#med-rediger"

---
{: .h3 #retningslinjer}

## Anvendes til

Strukturede lister anvendes til at vise informationer, der er opstillet i et simpelt format med titler og dertilhørende information. Strukturerede lister anvendes blandt andet til opsummeringssider i formularer.

{: .h3}

## Anvendes ikke til

Anvend ikke strukturede lister til komplekse og sammenlignelige datasæt, der er opsat i flere kolonner med kolonneoverskrifter. Anvend da i stedet <a href="/komponenter/tables/">tabeller</a>.

{: .h3}

## Vejledning

* Definér bredden på de strukturerede lister inden for designsystemets <a href="/kode/grid/">grid</a>.
* Hvis der er flere lister på samme side, bør alle lister have samme bredde for at holde siden overskuelig.
* Begræns antallet af rækker i hver liste, så mængden af informationer ikke bliver uoverskuelig for brugeren. Hvis der er mange rækker med information, så overvej, om det giver mening at dele listen op i afsnit ved hjælp af overskrifter.
* På opsummeringssider i forbindelse med formularer i flere trin kan hver række i listen indeholde et redigeringslink, som viser tilbage til det relevante sted i formularen.

{:.h3 #eksempelloesninger}

## Se komponenten i eksempelløsninger

{:.nobullet-list}

* <a href="/pages/eksempler/aktindsigt/aktindsigt-2/?r={{page.permalink}}%23eksempelloesninger" title="Eksempelløsning Aktindsigt åbnes i nyt vindue">Aktindsigt</a>
* <a href="/pages/eksempler/AES-erstatningssag/aes-9/?r={{page.permalink}}%23eksempelloesninger" title="Eksempelløsning Erstatningssag åbnes i nyt vindue">Erstatningssag</a>
* <a href="/pages/eksempler/opgaveliste/?r={{page.permalink}}%23eksempelloesninger" title="Eksempelløsning Opgaveliste åbnes i nyt vindue">Opgaveliste</a>
* <a href="/pages/eksempler/aes/sagsoverblik/?r={{page.permalink}}%23eksempelloesninger" title="Eksempelløsning Sager hos AES: Sagsoverblik åbnes i nyt vindue">Sager hos AES: Sagsoverblik</a>
* <a href="/pages/eksempler/aes/sagsoverblik/afgoerelser/?r={{page.permalink}}%23eksempelloesninger" title="Eksempelløsning Sager hos AES: Afgørelser åbnes i nyt vindue">Sager hos AES: Afgørelser</a>

{:#med-rediger}

## Struktureret liste med link

{% include code/preview-box.html component="structured-list--edit" title="Eksempel på struktureret liste med redigérlink" %}