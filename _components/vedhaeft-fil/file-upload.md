---
permalink: "/komponenter/fil-upload/guidelines/"
redirect_from:
- "/komponenter/fil-upload/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Vedhæft fil
lead: Komponenten lader brugeren tilføje og indsende en fil.
component: "file-input"
componentTitle: "Eksempel på vedhæft fil"
componentLink: true
anchor: true
subnav:
- text: Sådan bruges komponenten
  href: "#retningslinjer"
- text: Se komponenten i eksempelløsninger
  href: "#eksempelloesninger"
description: "Brug fil upload til at lade brugeren vælge en fil fra sin egen computer, tablet eller mobil."
tags:
---

{:#retningslinjer}
## Sådan bruges komponenten

### Anvendes til

Brug komponenten til at lade brugeren vælge og overføre en fil fra sin egen computer, tablet eller mobil.

Du bør kun bruge vedhæftet fil, hvis det er strengt nødvendigt for din løsning.

### Vejledning

Sørg for at brugeren får en positiv respons, når filen er overført.

Gør tydeligt brugeren opmærksom på, hvilke formater og størrelser, der vil blive accepteret.

Tjek filformatet før overførslen går i gang, så brugeren ikke spilder tid.

#### Fejlmeddelelse

{% include links/component-guideline-link.html linktext="Læs mere om korrekt brug af fejlmeddelelser og deres formuleringer." %}

Når der vises en fejlmeddelelse, vis da også {% include links/component-guideline-link.html linktext="fejlopsummering" %}.

{% include code/preview-box.html component="error-message-file-input" title="Eksempel på felt til vedhæftning af fil med fejlmeddelelse" %}

{:#eksempelloesninger}
## Se komponenten i eksempelløsninger

{:.nobullet-list}
- {% include links/demo-link.html linktext="Trinformular til registrering: Vedhæft dokumenter" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Trinformular til ansøgning: Tilføj dokumentation" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Vedhæft fil" returnID="eksempelloesninger" %}