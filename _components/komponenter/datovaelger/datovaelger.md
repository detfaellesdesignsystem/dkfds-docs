---
permalink: "/komponenter/datovaelger/"
layout: styleguide
type: component
title: Datovælger
category: Komponenter_category
subcategory: Komponenter
description: Brug denne datovælger til at vælge en bestemt dato i nærmeste fortid eller fremtid
tags: 
lead: Ét felt med knap, hvor man kan vælge en dato
component: date-picker
componentTitle: Eksempel på datovælger
componentCode: "/kode/komponenter/datovaelger/"
---

{:.h3 #retningslinjer}
## Anvendes til
Når der er specifikt udvalgte datoer at vælge i mellem som fx ved bookninger og planlægning med åbne og lukkede datoer, og hvor det gavner brugeren at se hvilke ugedage forskellige datoer rammer.

{:.h3}
## Anvendes ikke til

Datoangivelser som er givet for brugeren, som fx en fødselsdato. Brug da komponenten <a href="/komponenter/dato-felt/" title="">datoangivelse</a>


{% include child-components.html parent='Datepicker' %}
