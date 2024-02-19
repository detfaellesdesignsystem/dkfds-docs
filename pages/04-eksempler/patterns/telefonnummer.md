---
permalink: /eksempler/patterns/angivelse-af-telefonnummer/
parentlink: "/eksempler/patterns/"
layout: styleguide
category: Eksempler_category
subcategory: Eksempler
title: Angivelse af telefonnummer
lead: Måden at håndtere angivelsen af telefonnummer på bør afhænge af selvbetjeningsløsningens målgruppe.
anchor: false
description: Visning af felt for angivelse af telefonnummer
tags:
---

## Vejledning

Accepter altid internationale telefonnumre, når dette er teknisk muligt.

Danske numre skal kunne angives både med eller uden landekode.

Accepter altid enhver gængs formatering af telefonnumre såsom med eller uden mellemrum, bindestreger eller parenteser samt landekoder skrevet med enten + eller 00 (fx +45 eller 0045).

Hvis der kun kan angives et mobilnummer, fx hvis der skal sendes sms-beskeder til det angivne nummer, brug da “Mobilnummer” som feltets label.

Anvend autocomplete-attributten i inputfeltet, hvis det er brugerens eget telefonnummer, der skal indtastes ({% include links/external-link.html linktext="WCAG 2.1 Success Criterion 1.3.5 Identify Input Purpose" %}).

## Når målgruppen hovedsageligt har danske telefonnumre

{% include code/preview-box-details.html component="telefonnummer" title="Eksempel på angivelse af telefonnummer" link=false detaillabel="for eksempel på angivelse af telefonnummer" %}

Når langt de fleste brugere forventes at have danske telefonnumre, vises et almindeligt telefonnummerfelt. Feltet skal være langt nok til, at eventuelle brugere med internationale telefonnumre kan angive disse med landekode. 

Hvis et udenlandsk nummer er skrevet uden landekode, eller hvis formatet ikke svarer til et dansk nummer, vises en fejlmeddelelse.

{% include code/preview-box-details.html component="telefonnummer-fejl-uden-landekode" title="Eksempel på angivelse af telefonnummer med udenlandsk nummer uden landekode" link=false detaillabel="for eksempel på angivelse af telefonnummer med udenlandsk nummer uden landekode" %}

## Når målgruppen hovedsageligt har udenlandske telefonnumre

{% include code/preview-box-details.html component="telefonnummer-udenlandsk" title="Eksempel på angivelse af udenlandsk telefonnummer" link=false detaillabel="for eksempel på angivelse af udenlandsk telefonnummer" %}

Når mange brugere forventes at have internationale telefonnumre vises en hjælpetekst.

Hvis et udenlandsk nummer skrives uden landekode, eller hvis formatet ikke svarer til et dansk nummer, vises en fejlmeddelelse.

{% include code/preview-box-details.html component="telefonnummer-udenlandsk-ugyldigt" title="Eksempel på angivelse af ugyldigt telefonnummer" link=false detaillabel="for eksempel på angivelse af gyldigt telefonnummer" %}

## Hvis der kun kan angives danske telefonnumre (ikke anbefalet)

Accepter altid udenlandske telefonnumre, når det er muligt. Hvis det teknisk ikke kan lade sig gøre at acceptere udenlandske numre, vis da en fejlmeddelelse, når det indtastede nummer ikke har et almindeligt dansk format såsom 12345678, 12 123 123, +45 12345678 eller 0045 12 34 56 78.

{% include code/preview-box-details.html component="telefonnummer-dansk" title="Eksempel på angivelse af dansk telefonnummer" link=false detaillabel="for eksempel på angivelse af dansk telefonnummer" detailsClass="mb-6" %}


{% include code/preview-box-details.html component="telefonnummer-dansk-fejl" title="Eksempel på angivelse af dansk telefonnummer med fejlbesked" link=false detaillabel="for eksempel på angivelse af dansk telefonnummer med fejlbesked" %}
