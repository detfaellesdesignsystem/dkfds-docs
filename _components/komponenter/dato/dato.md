---
permalink: "/komponenter/dato-felt/"
layout: styleguide
type: component
title: Datoangivelse
category: Komponenter_category
subcategory: Komponenter
description: Brug dette datofelt til datoangivelse i en formular.
tags: 
lead: Tre separate felter for dato, måned og år er den nemmeste måde for brugeren at indskrive en dato.
anchor: true
subnav:
- text: Fejlmeddelelse
  href: "#fejlmeddelelse"
component: date-input
componentTitle: Eksempel på datoangivelse
componentCode: "/kode/komponenter/dato-felt/"
---

{:.h3 #retningslinjer}
## Anvendes til
Sætter brugeren i stand til at tilføje struktureret datoinformation.

{:.h3}
## Anvendes ikke til

Når der er specifikt udvalgte datoer at vælge i mellem som fx ved bookninger og planlægning med specifikke åbne og lukkede datoer.

{:.h3}
## Vejledning

Placér felterne i den rækkefølge for datoform, der anvendes i Danmark, dvs. dag, måned og år. Felternes labels skal også afspejle det.

Tilføj hjælpetekst, der viser formatet af datoen man efterspørger.

Ofte kan et datofelter til indtastning være nemmere at anvende - og gøre tilgængeligt - end en datovælger (date picker) funktion.

{% include dos-donts-box.html component="date-dos-donts" title="Dato do's and don'ts" %}

{:.h4}
### Referencer

{:.nobullet-list}
- Adam Silver: Form Design Patterns (2018)
- <a href="https://uxpro.cc/publications/date-picker-design-best-practices/" class="icon-link">Nick Babich: Date Picker Design Best Practices (2019)<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>
- Jessica Enders: Designing UX: Forms (2016)
- <a href="https://www.nngroup.com/articles/date-input/" class="icon-link">Angie Li: Date-Input Form Fields: UX Design Guidelines (2017)<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>
- <a href="https://design-system.service.gov.uk/components/date-input/" class="icon-link">GovUKs anbefalinger til datovælgeren, samt for fejlmeddelelser til datoer<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>
- <a href="https://design-system.service.gov.uk/patterns/dates/" class="icon-link">GovUK om at spørge brugeren om datoer<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>
- <a href="https://v2.designsystem.digital.gov/components/form-controls/#date-input" class="icon-link">USWDS om datovælgeren<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>
- <a href="https://design-system.service.gov.uk/components/error-message/" class="icon-link">GovUK om fejlmeddelelser generelt<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>


{:.h3}
## Se komponenten i eksempelløsninger

{:.nobullet-list}
- <a href="/pages/eksempler/boernetilskud/boernetilskud-2/" target="_blank" title="Eksempelløsning Børnetilskud åbnes i nyt vindue">Børnetilskud</a>
- <a href="/pages/eksempler/AES-erstatningssag/aes-5/" target="_blank" title="Eksempelløsning Erstatningssag åbnes i nyt vindue">Erstatningssag</a>
- <a href="/pages/eksempler/digital-flytning/flytning-3/" target="_blank" title="Eksempelløsning Digital flytning åbnes i nyt vindue">Digital flytning</a>

{% include child-components.html parent='Date' %}
