---
permalink: "/komponenter/venstremenu/"
redirect_from:
- "/komponenter/sidenav/"
- "/kode/komponenter/sidenav/"
- "/kode/komponenter/venstremenu/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Venstremenu
lead: Venstremenuen strukturerer et navigationshierarki med op til tre niveauer i en vertikal liste.
description: Venstremenu giver brugerne overblik over struktur og indhold, så de kan
  finde vej til det indhold, de leder efter.
tags: 
tabs: "Retningslinjer, kode"
---

{% include tabs.html guidelines=true code=true %}

{% include code/preview-box.html component="sidenav-normal-level1" title="Eksempel på venstremenu med ét niveau" classes="intro-example" %}

{% include anchorlinks.html guidelines="Venstremenu" code="Venstremenu_Kode" %}

<!--split-->

## Sådan bruges komponenten {#{% include create-id.html heading="Sådan bruges komponenten" %}}

### Anvendes til

Venstremenu anvendes til at afspejle et navigationshierarki i op til tre niveauer.

Venstremenu anvendes til den sekundære navigation/undermenu på en side i en større løsning.

### Anvendes ikke til

Venstremenu bør ikke anvendes på mindre løsninger (mindre end 5 sider).

Hvis din løsning allerede har topmenu og evt. tilknyttet dropdown, bør du overveje at forenkle din navigation før du vælger en venstremenu.

### Vejledning

Markér det aktive punkt (”der hvor brugeren er”) i venstremenuen.

Brug korte og præcise ord og begreber. Titlerne i venstremenuen skal stemme overens med overskriften på de sider, de linker til.

Undgå at lave for mange punkter.

Undgå at lave menuen for dyb – forsøg at undgå mere end 1-2 niveauer.

## Varianter {#{% include create-id.html heading="Varianter" %}}

{:#to-niveauer}
### 2 niveauer

{% include code/preview-box.html component="sidenav-normal-level2" title="Eksempel på venstremenu med to niveauer" code="/komponenter/venstremenu/#to-niveauer-kode" %}

{:#tre-niveauer}
### 3 niveauer

{% include code/preview-box.html component="sidenav-normal-level3" title="Eksempel på venstremenu med tre niveauer" code="/komponenter/venstremenu/#tre-niveauer-kode" %}

{:#ekstra-information}
### Ekstra information

{% include code/preview-box.html component="sidenav-information-level1" title="Eksempel på venstremenu med hjælpetekst på ét niveau" code="/komponenter/venstremenu/#ekstra-information-kode" %}

### Anchorlinks {#{% include create-id.html heading="Anchorlinks-komponent" %}}

Fra {% include links/internal-link.html linktext="version 10.0.0" %} vises anchorlinks ikke længere i venstremenuen. Se {% include links/component-guideline-link.html linktext="anchorlinks-komponenten" %} for nye retningslinjer.

## Referencer {#{% include create-id.html heading="Referencer" %}}

{% include links/external-link.html linktext="Derek Powazek: Where Am I? (2006)" %}

<!--split-->

## Installation {#{% include create-id.html heading="Installation" append="-kode" %}}

### HTML Struktur

{% include code/syntax.html component="sidenav-normal-level1" copybutton=true %}

#### Aktive menupunkter

- Klassen `active` sættes på de `li`-elementer, som enten er valgt eller aktivt viser undermenuer (disse elementer får en farvet streg i venstre side).
- Klassen `current` sættes på det `li`-element, der viser den nuværende side (dette element vises med fed tekst og grå baggrund).

#### Tilføj ikon og information i venstremenu

- For at tilføje et ikon til et punkt i venstremenuen bruges klassen `sidenav-icon-before`.
- For at tilføje information til et punkt i venstremenuen bruges klassen `sidenav-information`.
- Ikoner og informationer kan også sammensættes i én venstremenu.

## 2 niveauer {#{% include create-id.html heading="2 niveauer" append="-kode" %}}

{% include code/syntax.html component="sidenav-normal-level2" link=true copybutton=true guidelines="/komponenter/venstremenu/#to-niveauer" %}

## 3 niveauer {#{% include create-id.html heading="3 niveauer" append="-kode" %}}

{% include code/syntax.html component="sidenav-normal-level3" link=true copybutton=true guidelines="/komponenter/venstremenu/#tre-niveauer" %}

## Ekstra information {#{% include create-id.html heading="Ekstra information" append="-kode" %}}

{% include code/syntax.html component="sidenav-information-level1" link=true copybutton=true guidelines="/komponenter/venstremenu/#ekstra-information" %}