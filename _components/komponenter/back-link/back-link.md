---
permalink: "/komponenter/tilbage-link/guidelines/"
redirect_from:
- "/komponenter/tilbage-link/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Tilbage-link
lead: "Tilbage-linket gør brugeren i stand til at gå tilbage til forrige trin eller side i en selvbetjeningsløsning."
component: "back-link"
componentTitle: "Eksempel på tilbage-link"
componentLink: true
anchor: true
subnav:
- text: Sådan bruges komponenten
  href: "#retningslinjer"
- text: Se komponenten i eksempelløsninger
  href: "#eksempelloesninger"
- text: Referencer
  href: "#ref"
description: "Tilbage-linket gør brugeren i stand til at gå tilbage til forrige trin eller side i en selvbetjeningsløsning."
tags:
---

{:#retningslinjer}
## Sådan bruges komponenten

### Anvendes til

Brug tilbage-link-komponenten i selvbetjeningsløsninger med flere trin, hvor brugeren skal kunne navigere tilbage.

Du kan også bruge tilbage-link-komponenten i løsninger med flere sammenhængende sider, hvis det giver mening at gøre det.

### Anvendes ikke til

Brug aldrig tilbage-link-komponenten sammen med brødkrummer. Vælg enten tilbage-linket eller brødkrummen alt efter, hvad der fungerer bedst for brugeren i en given kontekst.

### Vejledning

Placer tilbage-linket øverst til venstre umiddelbart under headeren (top-menuen) på trinnet/siden. Bruges tilbage-linket i selvbetjeningsløsninger, der har en synlig trinindikator eller en venstremenu, placeres tilbage-linket øverst venstrestillet over indholdet.

Sørg for, at tilbage-linket fører brugerne til den forrige side, de var på, i den tilstand, de sidst så trinnet/siden.

Hvor det er muligt, skal du sikre dig, at tilbage-linket fungerer, selvom JavaScript er slået fra. Hvis dette ikke er muligt, skal du skjule tilbage-linket.

{% include dos-donts-box.html component="back-link-dos-donts" title="Tilbage-link do's and don'ts" %}

{:#eksempelloesninger}
## Se komponenten i eksempelløsninger

{:.nobullet-list}
- {% include links/demo-link.html linktext="Formular til kontaktoplysninger: Bekræft oplysninger" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Trinformular til registrering: Vælg noget mere" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Trinformular til ansøgning: Kontaktoplysninger" returnID="eksempelloesninger" %}

{:#ref}
## Referencer
Adam Silver: Form Design Patterns (2018)

