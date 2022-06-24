---
permalink: "/komponenter/datoangivelse/datofelter/"
redirect_from:
- /komponenter/dato-felt/
parentlink: /komponenter/datoangivelse/
layout: styleguide
type: component
title: Datofelter
category: Komponenter_category
subcategory: Komponenter
description: Brug datofelter for datoer, der er velkendte for brugeren (fx fødselsdato).
tags: 
lead: Tre separate felter for dato, måned og år er den nemmeste måde for brugeren at indskrive en dato.
subnav:
- text: Fejlmeddelelse
  href: '#fejlmeddelelse'
---

{% include code/preview-box.html component="date-input" title="Eksempel på datofelter" link=true code="/kode/komponenter/datofelter/" %}

{:.h3 #retningslinjer}
## Anvendes til
Sætter brugeren i stand til at tilføje struktureret datoinformation.

{:.h3}
## Anvendes ikke til

Når der er specifikt udvalgte datoer at vælge imellem som fx ved bookninger og planlægning med specifikke åbne og lukkede datoer.

{:.h3}
## Vejledning

Placér felterne i den rækkefølge for datoform, der anvendes i Danmark, det vil sige dag, måned og år.

Tilføj hjælpetekst, der viser formatet af datoen man efterspørger.

Ofte kan datofelter til indtastning være nemmere at anvende - og gøre tilgængeligt - end en datovælger (date picker) funktion.

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


{:.h3 #eksempelloesninger}
## Se komponenten i eksempelløsninger

{:.nobullet-list}
- <a href="/pages/eksempler/boernetilskud/boernetilskud-2/?r={{page.permalink}}%23eksempelloesninger" title="Eksempelløsning Børnetilskud åbnes i nyt vindue">Børnetilskud</a>
- <a href="/pages/eksempler/AES-erstatningssag/aes-5/?r={{page.permalink}}%23eksempelloesninger" title="Eksempelløsning Erstatningssag åbnes i nyt vindue">Erstatningssag</a>
- <a href="/pages/eksempler/digital-flytning/flytning-3/?r={{page.permalink}}%23eksempelloesninger" title="Eksempelløsning Digital flytning åbnes i nyt vindue">Digital flytning</a>

{:#fejlmeddelelse}
## Fejlmeddelelse
<a href="/komponenter/fejlangivelse/fejlmeddelelser/">Læs mere om korrekt brug af fejlmeddelelser og deres formuleringer.</a>

Når der vises en fejlmeddelelse, vis da også <a href="/komponenter/fejlangivelse/fejlopsummering/">fejlopsummering</a>.
