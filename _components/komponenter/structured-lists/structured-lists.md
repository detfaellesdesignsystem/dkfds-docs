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
- text: Med link
  href: "#med-link"

---
{: .h3 #retningslinjer}
## Anvendes til

Strukturerede lister anvendes til at vise informationer, der er opstillet i et simpelt format med titler og dertilhørende information. Strukturerede lister anvendes blandt andet til opsummeringssider i formularer.

{: .h3}
## Anvendes ikke til

Anvend ikke strukturerede lister til komplekse og sammenlignelige datasæt, der er opsat i flere kolonner med kolonneoverskrifter. Anvend da i stedet <a href="/komponenter/tables/">tabeller</a>.

{: .h3}
## Vejledning

* Definér bredden på de strukturerede lister inden for designsystemets <a href="/kode/grid/">grid</a>.
* Hvis der er flere lister på samme side, bør alle lister have samme bredde for at holde siden overskuelig.
* Begræns antallet af rækker i hver liste, så mængden af informationer ikke bliver uoverskuelig for brugeren. Hvis der er mange rækker med information, så overvej, om det giver mening at dele listen op i afsnit ved hjælp af overskrifter.
* På opsummeringssider i forbindelse med formularer i flere trin kan hver række i listen indeholde et redigeringslink, som viser tilbage til det relevante sted i formularen.

{:.h3 #eksempelloesninger}
## Se komponenten i eksempelløsninger

{:.nobullet-list}
- <a href="/pages/eksempler/formular-til-kontaktoplysninger/formular-2/?r={{page.permalink}}%23eksempelloesninger" title="Vis eksempel 'Formular til kontaktoplysninger, side 2'">Formular til kontaktoplysninger, side 2</a>
- <a href="/pages/eksempler/trinformular-til-registrering/registrering-7/?r={{page.permalink}}%23eksempelloesninger" title="Vis eksempel 'Trinformular til registrering, side 7'">Trinformular til registrering, side 7</a>
- <a href="/pages/eksempler/sagsoversigt/sagsoversigt-2/?r={{page.permalink}}%23eksempelloesninger" title="Vis eksempel 'Sagsoversigt, side 2'">Sagsoversigt, side 2</a>

{:#med-link}
## Struktureret liste med link

{% include code/preview-box.html component="structured-list--edit" title="Eksempel på struktureret liste med redigérlink" %}