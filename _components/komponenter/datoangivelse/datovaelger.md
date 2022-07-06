---
permalink: "/komponenter/datoangivelse/datovaelger/"
redirect_from:
- /komponenter/datovaelger/
parentlink: /komponenter/datoangivelse/
layout: styleguide
type: component
title: Datovælger
category: Komponenter_category
subcategory: Komponenter
description: Brug datovælger til at vælge en bestemt dato i nærmeste fortid eller fremtid
tags: 
lead: Ét felt med knap, hvor man kan vælge en dato
---

{% include code/preview-box.html component="date-picker" title="Eksempel på datovælger" link=true code="/kode/komponenter/datovaelger/" %}

{:.h3 #retningslinjer}
## Anvendes til
Når der er specifikt udvalgte datoer at vælge imellem som fx ved bookninger og planlægning med åbne og lukkede datoer, og hvor det gavner brugeren at se hvilke ugedage forskellige datoer rammer.

{:.h3}
## Anvendes ikke til

Datoangivelser som er givet for brugeren, som fx en fødselsdato. Brug da komponenten <a href="/komponenter/datoangivelse/datofelter/" title="">datofelter</a>.

{:.h3}
## Vejledning

{% include dos-donts-box.html component="datepicker-dos-donts" title="Datovælger do's and don'ts" %}

## Interval
Definér et interval af datoer det er muligt at vælge fra.

I eksemplet er der valgt et interval fra d. 4 december til og med d. 24 december 2020. Man kan kun vælge dage indenfor dette interval. Et andet interval kunne også være dags dato og 1 år frem, således at man kun kan vælge en dag i fremtiden.

{% include code/preview-box.html component="date-picker-interval" title="Eksempel på datovælger med interval"%}

## Fast værdi
Definér en dato som udgangspunkt. Hvis datoen ikke defineres vil udgangspunktet være dags dato.

I eksemplet er der valgt at man ved aktivering af datovælgeren starter fokus d. 1 december 2020. Datoen er ikke valgt, man tager blot udgangspunkt i den dag i kalenderen. Hvis man ikke vælger en fast værdi, vil datoen i stedet være dags dato.

{% include code/preview-box.html component="date-picker-default-date" title="Eksempel på datovælger med fast værdi"%}

{:#fejlmeddelelse}
## Fejlmeddelelse
<a href="/komponenter/fejlangivelse/fejlmeddelelser/#datovaelger">Læs mere om korrekt brug af fejlmeddelelser og deres formuleringer.</a>

Når der vises en fejlmeddelelse, vis da også <a href="/komponenter/fejlangivelse/fejlopsummering/">fejlopsummering</a>.