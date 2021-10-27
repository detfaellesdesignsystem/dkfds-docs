---
permalink: /komponenter/fil-upload/
layout: styleguide
type: component
title: Vedhæft fil (Upload)
category: Komponenter_category
subcategory: Komponenter
description: "Brug fil upload til at lade brugeren vælge en fil fra sin egen computer, tablet eller mobil."
tags:
component: file-input
componentTitle: Eksempel på vedhæft fil
componentCode: "/kode/komponenter/fil-upload/"
---

{:.h3 #retningslinjer}
## Anvendes til

Brug det til at lade brugeren vælge og overføre en fil fra sin egen computer, tablet eller mobil.

Du bør kun bruge vedhæftet fil, hvis det er strengt nødvendigt for din løsning.

{:.h3}
## Vejledning

Sørg for at brugeren får en positiv respons, når filen er overført.

Gør tydeligt brugeren opmærksom på, hvilke formater og størrelser, der vil blive accepteret.

Tjek filformatet før overførslen går i gang, så brugeren ikke spilder tid.

### Fejlbeskeder

#### Ingen fil er valgt
Skriv "Vælg en [dokumenttype]".<br />
Fx "Vælg en lægeerklæring".

#### Den valgte fil er forkert filtype
Skriv "Den valgte fil bør være af typen [liste af filtyper]".<br />
Fx "Den valgte fil bør være af typen CSV or ODS" eller "Den valgte fil bør være af typen JPG, BMP, PNG, TIF eller PDF".

#### Filen er for stor
Skriv "Den valgte fil bør være mindre end [største filstørrelse]".<br />
Fx "Den valgte fil bør være mindre end 2MB".

#### Filen er tom
Skriv "Den valgte fil er tom".

#### Filen indeholder en virus
Skriv "Den valgte fil indeholder en virus".

#### Filen er beskyttet af en adgangskode
Skriv "Den valgte fil er beskyttet af en adgangskode".

#### Der var en fejl, og filen ikke kunne uploades
Skriv "Den valgte fil kunne ikke uploades - prøv venligst igen".

#### Der er en begrænsning på antal filer brugeren kan vælge
Skriv "Du kan kun vælge op til [højeste antal filer] filer på samme tid".<br />
Fx "Du kan kun vælge op til 10 filer på samme tid".

#### Der ikke er brugt den korrekte skabelon
Skriv "Den valgte fil bør gøre brug af skabelonen".

{:.h3 #eksempelloesninger}
## Se komponenten i eksempelløsninger

{:.nobullet-list}
- <a href="/pages/eksempler/vedhaeft-fil/fil-1/?r={{page.permalink}}%23eksempelloesninger" title="Eksempelløsning Vedhæft filer åbnes i nyt vindue">Vedhæft filer</a>

## Fejlbesked
{% include code/preview-box.html component="error-message-file-input" title="Eksempel på felt til vedhæftning af fil med fejlmeddelelse" %}