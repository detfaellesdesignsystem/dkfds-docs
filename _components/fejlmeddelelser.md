---
permalink: "/komponenter/fejlmeddelelser/"
redirect_from:
- "/kode/komponenter/fejlmeddelelser/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Fejlmeddelelser
lead: Fejlmeddelelser hjælper brugeren til at udfylde enkelte formularelementer korrekt.
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
tabs: "Retningslinjer, kode"
---

{% include tabs.html guidelines=true code=true %}

{% include code/preview-box.html component="error-message" title="Eksempel på fejlmeddelelse" classes="intro-example" %}

{% include anchorlinks.html guidelines="Fejlmeddelelser" code="Fejlmeddelelser_Kode" %}

<!--split-->

## Sådan bruges komponenten {#{% include create-id.html heading="Sådan bruges komponenten" %}}

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

## Varianter {#{% include create-id.html heading="Varianter" %}}

### Accordions {#{% include create-id.html heading="Accordions" %}}

{% include code/preview-box.html component="error-message-accordion" title="Eksempel på accordion med fejl" link="true" code="/komponenter/fejlmeddelelser/#accordions-kode" %}

### Datofelter {#{% include create-id.html heading="Datofelter" %}}

{% include code/preview-box.html component="error-message-date" title="Eksempel på datofelter med fejlmeddelelse" code="/komponenter/fejlmeddelelser/#datofelter-kode" %}

### Datovælger {#{% include create-id.html heading="Datovælger" %}}

{% include code/preview-box.html component="date-picker-error" title="Eksempel på datovælger med fejlmeddelelse" code="/komponenter/fejlmeddelelser/#datovaelger-kode" %}

### Dropdown {#{% include create-id.html heading="Dropdown" %}}

{% include code/preview-box.html component="select-error" title="Eksempel på dropdown med fejlmeddelelse" code="/komponenter/fejlmeddelelser/#dropdown-kode" %}

### Inputfelt {#{% include create-id.html heading="Inputfelt" %}}

{% include code/preview-box.html component="error-message-name" title="Eksempel på tekstfelt med fejlmeddelelse" code="/komponenter/fejlmeddelelser/#inputfelt-kode" %}

#### Inputfelt med suffix {#{% include create-id.html heading="Inputfelt med suffix" %}}

{% include code/preview-box.html component="text-input-suffix-error" title="Eksempel på inputfejl med suffix og fejlmeddelelse" code="/komponenter/fejlmeddelelser/#inputfelt-med-suffix-kode" %}

#### Inputfelt med karakterbegrænsning {#{% include create-id.html heading="Inputfelt med karakterbegrænsning" %}}

{% include code/preview-box.html component="text-input-character-limit-error" title="Eksempel på inputfelt med karakterbegrænsning med fejlmeddelelse" code="/komponenter/fejlmeddelelser/#inputfelt-med-karakterbegraensning-kode" %}

### Radioknapper {#{% include create-id.html heading="Radioknapper" %}}

{% include code/preview-box.html component="error-message-radio" title="Eksempel på radioknapper med fejlmeddelelse" code="/komponenter/fejlmeddelelser/#radioknapper-kode" %}

### Tekstområde {#{% include create-id.html heading="Tekstområde" %}}

{% include code/preview-box.html component="text-area-error" title="Eksempel på tekstområde med fejlmeddelelse" code="/komponenter/fejlmeddelelser/#tekstomraade-kode" %}

#### Tekstområde med karakterbegrænsning {#{% include create-id.html heading="Tekstområde med karakterbegrænsning" %}}

{% include code/preview-box.html component="text-area-character-limit-error" title="Eksempel på tekstområde med karakterbegrænsning med fejlmeddelelse" code="/komponenter/fejlmeddelelser/#tekstomraade-med-karakterbegraensning-kode" %}

### Tjekboks {#{% include create-id.html heading="Tjekboks" %}}

{% include code/preview-box.html component="error-message-checkbox" title="Eksempel på tjekbokse med fejlmeddelelse" code="/komponenter/fejlmeddelelser/#tjekboks-kode" %}

### Vedhæft fil {#{% include create-id.html heading="Vedhæft fil" %}}

{% include code/preview-box.html component="error-message-file-input" title="Eksempel på felt til vedhæftning af fil med fejlmeddelelse" code="/komponenter/fejlmeddelelser/#vedhaeft-fil-kode" %}

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

## Se komponenten i eksempelløsninger {#{% include create-id.html heading="Se komponenten i eksempelløsninger" %}}

{:.nobullet-list}
- {% include links/demo-link.html linktext="Fejl i vedhæftede filer" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Formular med fejl" returnID="eksempelloesninger" %}

## Referencer {#{% include create-id.html heading="Referencer" %}}

{:.nobullet-list}
- Luke Wroblewski: Web Form Design: Filling in the Blanks (2008)
- Jeff Johnson: Designing with the Mind in Mind, Second Edition (2014)
- {% include links/external-link.html linktext="Understanding Success Criterion 3.3.1: Error Identification" %}
- {% include links/external-link.html linktext="Understanding Success Criterion 3.3.3: Error Suggestion" %}

<!--split-->

## Installation {#{% include create-id.html heading="Installation" append="-kode" %}}

### HTML Struktur

{% include code/syntax.html component="error-message" copybutton=true %}

For at hjælpe skærmlæsere tilføjes en skjult tekst “Fejl:” foran fejlmeddelelsen. Brugere af skærmlæser vil da høre “Fejl: Datoen for udløb af dit pas bør være i fortiden.” Teksten er skjult i et `<span>` element med klassen `sr-only`. Attributten `aria-describedby` anvendes i stedet for `aria-errormessage` grundet bedre support for førstnævnte (se referencer).

Fejlmeddelelsen vises også i {% include links/component-code-link.html linktext="fejlopsummeringen" %} øverst på siden.

## Accordions {#{% include create-id.html heading="Accordions" append="-kode" %}}

{% include code/syntax.html component="error-message-accordion" link=true copybutton=true guidelines="/komponenter/fejlmeddelelser/#accordions" %}

## Datofelter {#{% include create-id.html heading="Datofelter" append="-kode" %}}

{% include code/syntax.html component="error-message-date" link=true copybutton=true guidelines="/komponenter/fejlmeddelelser/#datofelter" %}

## Datovælger {#{% include create-id.html heading="Datovælger" append="-kode" %}}

{% include code/syntax.html component="date-picker-error" link=true copybutton=true guidelines="/komponenter/fejlmeddelelser/#datovaelger" %}

## Dropdown {#{% include create-id.html heading="Dropdown" append="-kode" %}}

{% include code/syntax.html component="select-error" link=true copybutton=true guidelines="/komponenter/fejlmeddelelser/#dropdown" %}

## Inputfelt {#{% include create-id.html heading="Inputfelt" append="-kode" %}}

{% include code/syntax.html component="error-message-name" link=true copybutton=true guidelines="/komponenter/fejlmeddelelser/#inputfelt" %}

### Inputfelt med suffix {#{% include create-id.html heading="Inputfelt med suffix" append="-kode" %}}

{% include code/syntax.html component="text-input-suffix-error" link=true copybutton=true guidelines="/komponenter/fejlmeddelelser/#inputfelt-med-suffix" %}

### Inputfelt med karakterbegrænsning {#{% include create-id.html heading="Inputfelt med karakterbegrænsning" append="-kode" %}}

{% include code/syntax.html component="text-input-character-limit-error" link=true copybutton=true guidelines="/komponenter/fejlmeddelelser/#inputfelt-med-karakterbegraensning" %}

## Radioknapper {#{% include create-id.html heading="Radioknapper" append="-kode" %}}

{% include code/syntax.html component="error-message-radio" link=true copybutton=true guidelines="/komponenter/fejlmeddelelser/#radioknapper" %}

## Tekstområde {#{% include create-id.html heading="Tekstområde" append="-kode" %}}

{% include code/syntax.html component="text-area-error" link=true copybutton=true guidelines="/komponenter/fejlmeddelelser/#tekstomraade" %}

Sørg for at rette værdierne i følgende attributter, så de svarer til din løsning:

- `for`
- `id`
- `name`
- `aria-describedby`

#### Tekstområde med karakterbegrænsning {#{% include create-id.html heading="Tekstområde med karakterbegrænsning" append="-kode" %}}

{% include code/syntax.html component="text-area-character-limit-error" link=true copybutton=true guidelines="/komponenter/fejlmeddelelser/#tekstomraade-med-karakterbegraensning" %}

## Tjekboks {#{% include create-id.html heading="Tjekboks" append="-kode" %}}

{% include code/syntax.html component="error-message-checkbox" link=true copybutton=true guidelines="/komponenter/fejlmeddelelser/#tjekboks" %}

## Vedhæft fil {#{% include create-id.html heading="Vedhæft fil" append="-kode" %}}

{% include code/syntax.html component="error-message-file-input" link=true copybutton=true guidelines="/komponenter/fejlmeddelelser/#vedhaeft-fil" %}

## Referencer {#{% include create-id.html heading="Referencer" append="-kode" %}}

{:.nobullet-list}
- {% include links/external-link.html linktext="aria-errormessage attribute (aria) - Accessibility Support" %}
- {% include links/external-link.html linktext="aria-describedby attribute (aria) - Accessibility Support" %}