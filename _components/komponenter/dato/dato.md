---
permalink: /komponenter/dato-felt/
layout: styleguide
type: component
title: Datoangivelse
category: Komponenter_category
subcategory: Komponenter
description: "Brug dette datofelt til datoangivelse i en formular."
tags:
lead: Tre separate felter for dato, måned og år er den nemmeste måde for brugeren at indskrive en dato.
anchor: true
subnav:
- text: Fejlmeddelelse
  href: '#fejlmeddelelse'
- text: Datovælger
  href: '#datovælger'
component: date-input
componentTitle: Eksempel på datoangivelse
componentCode: "/kode/komponenter/dato-felt/"
---

{:.h3 #retningslinjer}
## Anvendes til

Sætter brugeren i stand til at tilføje struktureret datoinformation.

{:.h3}
## Anvendes ikke til

Når der er specifikt udvalgte datoer at vælge i mellem som fx ved bookninger og planlægning med åbne og lukkede datoer.

{:.h3}
## Vejledning

Placér felterne i den rækkefølge for datoform, der anvendes i Danmark, dvs. dag, måned og år. Felternes labels skal også afspejle det.

Tilføj hjælpetekst, der viser formatet af datoen man efterspørger.

{:.h3}
## Links

{:.nobullet-list}
- <a href="https://design-system.service.gov.uk/components/date-input/" class="icon-link">GovUKs anbefalinger til datovælgeren, samt for fejlmeddelelser til datoer<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>
- <a href="https://design-system.service.gov.uk/patterns/dates/" class="icon-link">GovUK om at spørge brugeren om datoer<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>
- <a href="https://v2.designsystem.digital.gov/components/form-controls/#date-input" class="icon-link">USWDS om datovælgeren<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>
- <a href="https://design-system.service.gov.uk/components/error-message/" class="icon-link">GovUK om fejlmeddelelser generelt<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>

{% include child-components.html parent='Date' %}
