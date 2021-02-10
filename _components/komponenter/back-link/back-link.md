---
permalink: /komponenter/tilbage-link/
layout: styleguide
type: element
title: Tilbage link
category: Komponenter_category
description: "Tilbage-linket gør brugeren i stand til at gå tilbage til forrige trin eller side i en selvbetjeningsløsning."
lead: "Tilbage-linket gør brugeren i stand til at gå tilbage til forrige trin eller side i en selvbetjeningsløsning."
subcategory: Komponenter
component: back-link
componentTitle: "Eksempel på tilbage link"
componentCode: "/kode/komponenter/tilbage-link/"
---

{:.h3 #retningslinjer}
## Anvendes til

Brug tilbage-link-komponenten i selvbetjeningsløsninger med flere trin, hvor brugeren skal kunne navigere tilbage.

Du kan også bruge tilbage-link-komponenten i løsninger med flere sammenhængende sider, hvis det giver mening at gøre det.

{:.h3}
## Anvendes ikke til

Brug aldrig tilbage-link-komponenten sammen med brødkrummer. Vælg enten tilbage-linket eller brødkrummen alt efter, hvad der fungerer bedst for brugeren i en given kontekst.

{:.h3}
## Vejledning

Placer tilbage-linket øverst til venstre umiddelbart under headeren (top-menuen) på trinnet/siden. Bruges tilbage-linket i selvbetjeningsløsninger, der har en synlig tringuide eller en venstremenu, placeres tilbage-linket øverst venstrestillet over indholdet.

Sørg for, at tilbage-linket fører brugerne til den forrige side, de var på, i den tilstand, de sidst så trinnet/siden.

Hvor det er muligt, skal du sikre dig, at tilbage-linket fungerer, selvom JavaScript er slået fra. Hvis dette ikke er muligt, skal du skjule tilbage-linket.

{% include dos-donts-box.html component="back-link-dos-donts" title="Tilbage-link do's and don'ts" %}

{:.h4}
### Referencer
Adam Silver: Form Design Patterns (2018)


{% include child-components.html parent='Backlink' %}
