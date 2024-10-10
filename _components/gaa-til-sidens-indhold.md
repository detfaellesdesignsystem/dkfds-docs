---
permalink: "/komponenter/skip-link/"
redirect_from:
- "/kode/komponenter/skip-link/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Gå til sidens indhold (Skip-link)
lead: "Skip-links anvendes til at give brugere, der navigerer med tastatur, en bedre oplevelse. Brugerens første tryk på tab-tasten vil få et skjult link til at komme frem, der lader brugeren skippe menuen og gå direkte til sidens indhold."
description: "Skip-links anvendes til at give brugere, der navigerer med tastatur, en bedre oplevelse."
tags: 
tabs: "Retningslinjer, kode"
---

{% include tabs.html guidelines=true code=true %}

<div id="kode" hidden></div>

{% include code/preview-image.html component="skip-link-eksempel" title="Eksempel på skip-link" image="skiplink" classes="intro-example" %}

<!--split-->

## Sådan bruges komponenten {#{% include create-id.html heading="Sådan bruges komponenten" %}}

### Anvendes til

Skip-link skal anvendes på alle sider.

Skip-linket gør det muligt for brugere, der anvender tasturet til navigation, at navigere direkte til sidens indhold.

### Anvendes ikke til

Andre former for navigation.

### Vejledning

Et skip-link er et skjult link, der kun vises, når en bruger navigerer på siden ved at bruge tastaturet.

Når brugeren trykker på linket (med tastatur eller mus) sættes fokus på første indholdselement på den aktuelle side.

Det vil sige at brugere, der anvender tastaturet til at navigere siden med, kan undgå at få læst alle menupunkter op, før de får adgang til selve indholdet.

<!--split-->

## Installation {#{% include create-id.html heading="Installation" append="-kode" %}}

### HTML Struktur

{% include code/syntax.html component="skiplink" copybutton=true %}

'Gå til sidens indhold' skal være det første element, der kommer i fokus på siden ved brug af tastaturet bortset fra en eventuel {% include links/component-guideline-link.html linktext="cookiemeddelelse" %} (GOV.UK, Skip link). Sørg derfor for, at det er det første klikbare element i `<body>`.

'Gå til sidens indhold' gør brug af anchorlink `#main-content`, man skal derfor huske at sætte `id="main-content"` på det element, der omkranser indholdet på siden.

## Referencer {#{% include create-id.html heading="Referencer" append="-kode" %}}

{:.nobullet-list}
- {% include links/external-link.html linktext="GOV.UK Design System - Skip link" %}
