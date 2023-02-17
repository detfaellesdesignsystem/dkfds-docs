---
permalink: "/komponenter/datovaelger/"
layout: styleguide
type: component
title: Datovælger
category: Komponenter_category
subcategory: Komponenter
description: Brug datovælger til at vælge en bestemt dato i nærmeste fortid eller fremtid
tags: 
lead: Ét felt med knap, hvor man kan vælge en dato.
---

{% include code/preview-box.html component="date-picker" title="Eksempel på datovælger" link=true code="/kode/komponenter/datovaelger/" %}

{:.h3 #retningslinjer}
## Anvendes til
Når der er specifikt udvalgte datoer at vælge imellem som fx ved bookninger og planlægning med åbne og lukkede datoer, og hvor det gavner brugeren at se hvilke ugedage forskellige datoer rammer.

{:.h3}
## Anvendes ikke til

Datoangivelser som er givet for brugeren, som fx en fødselsdato. Brug da komponenten <a href="/komponenter/datofelter/">datofelter</a>.

{:.h3}
## Vejledning

{% include dos-donts-box.html component="datepicker-dos-donts" title="Datovælger do's and don'ts" %}

## Begræns mulige datoer
Definér datoer det er muligt for brugeren at vælge fra.

I eksemplet kan brugeren kun vælge datoer mellem 4. december til og med 24. december 2020. Man kan kun vælge datoer inden for dette interval. En anden mulighed kunne også være dags dato og 1 år frem, således at man kun kan vælge en dag i fremtiden.

{% include code/preview-box.html component="date-picker-interval" title="Eksempel på datovælger med begrænsning"%}

## Fast værdi
Definér en dato som udgangspunkt. Hvis datoen ikke defineres vil udgangspunktet være dags dato.

I eksemplet er der valgt at man ved aktivering af datovælgeren starter fokus d. 1 december 2020. Datoen er ikke valgt, man tager blot udgangspunkt i den dag i kalenderen. Hvis man ikke vælger en fast værdi, vil datoen i stedet være dags dato.

{% include code/preview-box.html component="date-picker-default-date" title="Eksempel på datovælger med fast værdi"%}

## Datoformat
Som standard vises en dato i formatet DD/MM/ÅÅÅÅ, efter en bruger har valgt en dato i datovælgeren. Der findes dog også <a href="/kode/komponenter/datovaelger/#datoformat">andre datoformater</a>, der kan anvendes i stedet. Bemærk, at brugeren altid kan anvende alle datoformater, hvis de selv indtaster datoen i feltet.

{% include code/preview-box.html component="date-picker-format" title="Eksempel på datovælger med andet datoformat"%}