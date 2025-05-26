---
permalink: "/komponenter/tilbage-link/"
redirect_from:
- "/kode/komponenter/tilbage-link/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Tilbage-link
lead: "Tilbage-linket gør brugeren i stand til at gå tilbage til forrige trin eller side i en selvbetjeningsløsning."
description: "Tilbage-linket gør brugeren i stand til at gå tilbage til forrige trin eller side i en selvbetjeningsløsning."
tags:
tabs: "Retningslinjer, kode"
---

{% include tabs.html guidelines=true code=true %}

{% include code/preview-box.html component="back-link" title="Eksempel på tilbage-link" classes="intro-example" %}

{% include anchorlinks.html guidelines="TilbageLink" code="TilbageLink_Kode" classes="hide-code" %}

<!--split-->

## Sådan bruges komponenten {#{% include create-id.html heading="Sådan bruges komponenten" %}}

### Anvendes til

Brug tilbage-link-komponenten i selvbetjeningsløsninger med flere trin, hvor brugeren skal kunne navigere tilbage.

Du kan også bruge tilbage-link-komponenten i løsninger med flere sammenhængende sider, hvis det giver mening at gøre det.

### Anvendes ikke til

Brug aldrig tilbage-link-komponenten sammen med brødkrummer. Vælg enten tilbage-linket eller brødkrummen alt efter, hvad der fungerer bedst for brugeren i en given kontekst.

### Vejledning

Placer tilbage-linket øverst til venstre umiddelbart under headeren (top-menuen) på trinnet/siden. Bruges tilbage-linket i selvbetjeningsløsninger, der har en synlig trinindikator eller en venstremenu, placeres tilbage-linket øverst venstrestillet over indholdet.

Sørg for, at tilbage-linket fører brugerne til den forrige side, de var på, i den tilstand, de sidst så trinnet/siden.

Hvor det er muligt, skal du sikre dig, at tilbage-linket fungerer, selvom JavaScript er slået fra. Hvis dette ikke er muligt, skal du skjule tilbage-linket.

{% include dos-donts-box.html component="back-link-dos-donts" %}

## Se komponenten i eksempelløsninger {#{% include create-id.html heading="Se komponenten i eksempelløsninger" %}}

{:.nobullet-list}
- {% include links/demo-link.html linktext="Formular til kontaktoplysninger: Bekræft oplysninger" %}
- {% include links/demo-link.html linktext="Trinformular til registrering: Vælg noget mere" %}
- {% include links/demo-link.html linktext="Trinformular til ansøgning: Kontaktoplysninger" %}

## Referencer {#{% include create-id.html heading="Referencer" %}}

Adam Silver: Form Design Patterns (2018)

<!--split-->

## Installation {#{% include create-id.html heading="Installation" append="-kode" %}}

{:#html-struktur}
### HTML Struktur

{% include code/syntax.html component="back-link" copybutton=true %}

Linket placeres så vidt muligt under headeren, se eksempel på implementering i vores eksempelløsning: {% include links/demo-link.html linktext="Vedhæft fil" %}

Bemærk, at tilbage-linket stadig skal være synligt ved mobilvisning.

Selve funktionaliteten står man selv for i ens løsning.
