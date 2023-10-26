---
permalink: /komponenter/fil-upload/
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Vedhæft fil
component: "file-input"
componentTitle: "Eksempel på vedhæft fil"
componentLink: true
componentCode: "/kode/komponenter/fil-upload/"
anchor: false
description: "Brug fil upload til at lade brugeren vælge en fil fra sin egen computer, tablet eller mobil."
tags:
---

{:#retningslinjer}
## Retningslinjer

### Anvendes til

Brug komponenten til at lade brugeren vælge og overføre en fil fra sin egen computer, tablet eller mobil.

Du bør kun bruge vedhæftet fil, hvis det er strengt nødvendigt for din løsning.

### Vejledning

Sørg for at brugeren får en positiv respons, når filen er overført.

Gør tydeligt brugeren opmærksom på, hvilke formater og størrelser, der vil blive accepteret.

Tjek filformatet før overførslen går i gang, så brugeren ikke spilder tid.

#### Fejlmeddelelse

{% include links/component-links.html linktext="Læs mere om korrekt brug af fejlmeddelelser og deres formuleringer." %}

Når der vises en fejlmeddelelse, vis da også {% include links/component-links.html linktext="fejlopsummering" %}.

{% include code/preview-box.html component="error-message-file-input" title="Eksempel på felt til vedhæftning af fil med fejlmeddelelse" %}

{:#eksempelloesninger}
#### Se komponenten i eksempelløsninger

{:.nobullet-list}
- <a href="/pages/eksempler/trinformular-til-registrering/registrering-3/?r={{page.permalink}}%23eksempelloesninger" title="Vis eksempel 'Trinformular til registrering: Vedhæft dokumenter'">Trinformular til registrering: Vedhæft dokumenter</a>
- <a href="/pages/eksempler/trinformular-til-ansoegning/ansoegning-4/?r={{page.permalink}}%23eksempelloesninger" title="Vis eksempel 'Trinformular til ansøgning: Tilføj dokumentation'">Trinformular til ansøgning: Tilføj dokumentation</a>
- <a href="/pages/eksempler/vedhaeft-fil/fil-1/?r={{page.permalink}}%23eksempelloesninger" title="Vis eksempel 'Vedhæft fil'">Vedhæft fil</a>