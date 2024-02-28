---
permalink: "/komponenter/fejlmeddelelser/guidelines/"
redirect_from:
- "/komponenter/fejlmeddelelser/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Fejlmeddelelser
lead: Fejlmeddelelser hjælper brugeren til at udfylde enkelte formularelementer korrekt.
component: "error-message"
componentTitle: "Eksempel på fejlmeddelelse"
componentLink: true
anchor: true
subnav:
- text: Sådan bruges komponenten
  href: "#retningslinjer"
- text: Varianter
  href: "#varianter"
- text: Se komponenten i eksempelløsninger
  href: "#eksempelloesninger"
- text: Referencer
  href: "#ref"
description:
tags:
- fejlbesked
- fejlmeddelelse
- meddelelser
- fejl
- fejlmeddelelser
- fejlbeskeder
- fejlnotifikationer
- medelelser
- meddellelser
- medellelser
- fejlmedelelser
- fejlmeddellelser
- fejlmedellelser
---

{:#retningslinjer}
## Sådan bruges komponenten

### Anvendes til

Brug fejlmeddelelser til at hjælpe brugeren korrekt igennem selvbetjeningsløsningen. Fortæl brugeren, hvad der skal til for at rette problemet og komme videre i et simpelt og venligt sprog.

Brug også fejlmeddelelser til at vise, hvor fejlen eller manglen er, så brugeren ikke skal lede, ved at sætte fejlmeddelelsen umiddelbart over det, der skal rettes eller mangler.

### Anvendes ikke til

Brug ikke fejlmeddelelser til at fortælle brugerne, at de ikke er berettigede eller ikke har tilladelse til at gøre noget. I stedet for vis dem en side, der fortæller dem, at de ikke er berettigede, og giver dem nyttige oplysninger om, hvad de skal gøre som det næste.

Brug ikke fejlmeddelelser til at give brugeren beskeder om fejl, der ikke har med brugerens indtastninger og input at gøre, som fx systemfejl. Brug da en {% include links/component-guideline-link.html linktext="besked" %}.

### Vejledning

Fejlmeddelelsen skal også vises som et link til fejlen i {% include links/component-guideline-link.html linktext="fejlopsummeringen" %}. Derfor skal fejlmeddelelsen give mening for brugeren, når den læses for sig selv i fejlopsummeringen.

Vis fejlmeddelelsen i rød umiddelbart over, der hvor fejlen er.

Vis en rød streg i venstre side af området, ud for fejlen for at fremhæve fejlen.

Marker også selve feltet der er fejl i med rødt.

For at hjælpe skærmlæsere tilføjes en skjult tekst med ordet "Fejl:" foran fejlmeddelelsen. Brugere af skærmlæser vil da fx høre "Fejl: Dette er ikke en gyldig mailadresse."

#### Skriv klart og præcist

Beskriv for brugeren, hvad der er sket og hvordan det kan rettes.

Meddelelsen skal være skrevet i lægmandssprog, være imødekommende og så kortfattet som muligt.

Kom ikke med et eksempel i fejlmeddelelsen, hvis der allerede er et eksempel som hjælpetekst. Hvis du fx beder om et cpr-nummer og der allerede under labelen står "ddmmåååå-nnnn" eller "22091908-1856" som hjælpetekst, så skal det ikke også stå i fejlmeddelelsen.

#### Vær konsistent

Brug den samme fejlmeddelelse ved feltet og i fejlopsummeringen så de ser ens ud, lyder ens, og betyder det samme, og så de giver mening ude af kontekst.

Gør det nemt for brugeren at forstå, hvad der er sket og hvad der skal til for at komme videre. Brug således den label (spørgsmålet), der er knyttet til feltet, til at gøre fejlmeddelelsen forståelig. Fx, hvis et felt har en label, hvor der står "Hvor mange timer arbejder du om ugen?", så kan fejlmeddelelsen være "Indtast hvor mange timer du arbejder om ugen".

#### Vær præcis

Generelle fejlmeddelelser er ikke hjælpsomme og de giver ikke mening uden for kontekst. Undgå derfor fejlmeddelelser som:

* "En fejl opstod"
* "Svar på spørgsmålet"
* "Vælg et svar fra listen"
* "Udfyld feltet"
* "Dette felt er påkrævet"

Undgå også fejlmeddelelser, der taler ned til eller skælder brugeren ud som fx:

* "Skriv adressen korrekt"
* "Du har lavet en fejl"
* "Ikke godkendt"

Forskellige fejl har brug for forskellige fejlmeddelelser.

Fx kan der opstå forskellige fejl på inputfelter, felter kan være: tomme, for lange, for korte, indeholde ugyldige tegn, være i et forkert format, m.fl.

En fejlmeddelelse, der forklarer den specifikke situation er mere hjælpsom end den generiske fejlmeddelelse.

Den gode fejlmeddelelse vil fortælle brugeren, hvad der er sket og hvordan det kan løses.

#### Brug instruktioner og beskrivelser

Visse fejlmeddelelser fungerer bedst som instrukser og andre som beskrivelser. Fx:

* "Indtast dit fornavn" er tydeligere og mere direkte end "Fornavn skal være udfyldt"
* "Indtast et fornavn, der indeholder 35 bogstaver eller færre" bruger flere ord og er  mindre direkte og naturligt end "Fornavnet må højst være på 35 bogstaver".
* "Indtast en dato efter den 31. august 2020, der viser hvornår du startede på det pågældende kursus" bruger flere ord og er mindre direkte og naturligt end "Startdatoen for det valgte kursus skal være efter den 31. august 2020".

Brug både instrukser og beskrivelser, men brug dem konsekvent. Fx brug en instruktion til tomme felter som "Indtast dit navn" men brug en beskrivelse som "Navnet bør højst være 35 bogstaver" til felter som er for lange.

{% include dos-donts-box.html component="error-message-dos-donts" title="Fejlmeddelelser do's and don'ts" %}

{:#varianter}
## Varianter

{:#accordions}
### Accordions

{% include code/preview-box.html component="error-message-accordion" title="Eksempel på accordion med fejl" link="true" code="/kode/komponenter/fejlmeddelelser/#accordions" %}

{:#datofelter}
### Datofelter

{% include code/preview-box.html component="error-message-date" title="Eksempel på datofelter med fejlmeddelelse" %}

{:#datovaelger}
### Datovælger

{% include code/preview-box.html component="date-picker-error" title="Eksempel på datovælger med fejlmeddelelse" %}

{:#dropdown}
### Dropdown

{% include code/preview-box.html component="select-error" title="Eksempel på dropdown med fejlmeddelelse" %}

{:#inputfelt}
### Inputfelt

{% include code/preview-box.html component="error-message-name" title="Eksempel på tekstfelt med fejlmeddelelse" %}

#### Inputfelt med suffix

{% include code/preview-box.html component="text-input-suffix-error" title="Eksempel på inputfejl med suffix og fejlmeddelelse" %}

#### Inputfelt med karakterbegrænsning

{% include code/preview-box.html component="text-input-character-limit-error" title="Eksempel på inputfelt med karakterbegrænsning med fejlmeddelelse" %}

{:#radioknapper}
### Radioknapper

{% include code/preview-box.html component="error-message-radio" title="Eksempel på radioknapper med fejlmeddelelse" %}

{:#tekstomraade}
### Tekstområde

{% include code/preview-box.html component="text-area-error" title="Eksempel på tekstområde med fejlmeddelelse" %}

#### Tekstområde med karakterbegrænsning

{% include code/preview-box.html component="text-area-character-limit-error" title="Eksempel på tekstområde med karakterbegrænsning med fejlmeddelelse" %}

{:#tjekboks}
### Tjekboks

{% include code/preview-box.html component="error-message-checkbox" title="Eksempel på tjekbokse med fejlmeddelelse" %}

{:#vedhaeft-fil}
### Vedhæft fil

{% include code/preview-box.html component="error-message-file-input" title="Eksempel på felt til vedhæftning af fil med fejlmeddelelse" %}

#### Ingen fil er valgt

Skriv "Vælg en [dokumenttype]".<br />
Fx "Vælg en lægeerklæring".

#### Den valgte fil er forkert filtype

Skriv "Den valgte fil skal være af typen [liste af filtyper]".<br />
Fx "Den valgte fil skal være af typen CSV eller ODS" eller "Den valgte fil skal være af typen JPG, BMP, PNG, TIF eller PDF".

#### Filen er for stor

Skriv "Filens størrelse skal være under [største filstørrelse]".<br />
Fx "Filens størrelse skal være under 2MB".

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

Skriv "Den valgte fil skal gøre brug af skabelonen".

{:#eksempelloesninger}
## Se komponenten i eksempelløsninger

{:.nobullet-list}
- {% include links/demo-link.html linktext="Fejl i vedhæftede filer" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Formular med fejl" returnID="eksempelloesninger" %}

{:#ref}
## Referencer

{:.nobullet-list}
- Luke Wroblewski: Web Form Design: Filling in the Blanks (2008)
- Jeff Johnson: Designing with the Mind in Mind, Second Edition (2014)
- {% include links/external-link.html linktext="Understanding Success Criterion 3.3.1: Error Identification" %}
- {% include links/external-link.html linktext="Understanding Success Criterion 3.3.3: Error Suggestion" %}