---
permalink: "/komponenter/inputfelter/guidelines/"
redirect_from:
- "/komponenter/felter/"
- "/komponenter/tekstfelter/"
- "/komponenter/inputfelter/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Inputfelter
lead: Inputfelter lader brugeren indtaste kort information.
component: "text-input"
componentTitle: "Eksempel på inputfelt"
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
description: Inputfelter til indtastning af information i form af bogstaver, tal og en kombination
  af begge.
tags:
- tekstfelt
- input
- frivilligt
- påkrævet
- påkrævede
- required
- fejlbesked
- fejlmeddelelse
- fejl på felt
- hjælpetekst
- hjælp på felt
- felt
- felter
- længde på felter
- deaktiveret felt
- read-only
- feltbredde
- låst felt
- karakterbegrænsning
- karakterbegraensning
- prefix
- præfix
- prefiks
- præfiks
- suffix
- suffiks
- sufix
- sufiks
---

{:#retningslinjer}
## Sådan bruges komponenten

### Anvendes til

Brug til input af information i form af bogstaver og tal eller en kombination af begge.

Brug inputfelter når det er nemmere for brugeren at skrive information end at vælge den på anden vis. 

Brug når brugeren skal kunne copy paste information ind i en formular.

### Anvendes ikke til

Når brugeren skal vælge ud fra et prædefineret sæt af værdier (fx nogle få bestemte datoer) eller hvis der er strenge krav til datakonsistens, oftest i en løsning uden klientside validering (hvis brugerens input-format kan skabe fejl på serversiden).

### Vejledning

Brug primært formularelementer, når der er behov for, at brugeren kan tilføje information, som ikke kan vælges ud fra prædefinerede værdier, eller som løsningen ikke automatisk kan forudse ud fra brugerens andre indtastninger.

Vis kun fejlmeddelelser, når brugeren har indtastet en ugyldig værdi.

Fejlmeddelelser skal være meningsfulde og hjælpsomme.

Placér fejlmeddelelser mellem label og feltet, som bliver markeret med rødt.

Inputfelter er ikke perfekte til mobile løsninger. Overvej om de er nødvendige eller om du kan tilbyde brugeren en anden form for interaktion.

Brug feltbredden til at begrænse antallet af tegn i et felt. Feltbredden angiver det forventede omfang af tegn, så brugeren får en fornemmelse af, hvad der skal indtastes. Fx bør et felt, hvor man skal angive et dansk postnummer, kun være 4 tegn bredt, mens et felt til et gadenavn bør være på minimum 27 tegn.

Brug ikke feltbredde til at validere brugerens input. Angiv i stedet krav til inputvalidering i en vejledning.

Feltets bredde skal modsvare det, du forventer at brugeren  skal indtaste, så brugeren kan se alle tegn under indtastningen.

{% include dos-donts-box.html component="text-input-dos-donts" title="Felter do's and don'ts" %}

{% include dos-donts-box.html component="text-input-labels-dos-donts" title="Felt labels do's and don'ts" %}

{:#fejlmeddelelse}
#### Fejlmeddelelse

{% include links/component-links.html linktext="Læs mere om korrekt brug af fejlmeddelelser og deres formuleringer." %}

Når der vises en fejlmeddelelse, vis da også {% include links/component-links.html linktext="fejlopsummering" %}.

{% include code/preview-box.html component="error-message-name" title="Eksempel på tekstfelt med fejlmeddelelse" %}

{:#varianter}
## Varianter

{:#hjaelpetekst}
### Hjælpetekst

{% include code/preview-box.html component="text-input-helptext" link=false title="Eksempel på inputfelt med hjælpetekst" code="/komponenter/inputfelter/implementering/#hjaelpetekst" %}

{% include dos-donts-box.html component="text-input-helptext-dos-donts" title="Felt med hjælpetekst do's and don'ts" %}

{:#obligatoriske-og-frivillige-felter}
### Obligatoriske og frivillige inputfelter

Undgå frivillige inputfelter så vidt muligt. Hvis et felt er frivilligt, så overvej altid, om det er nødvendigt at have med i formularen. 

Hvis en formular indeholder frivillige inputfelter, som vil have en betydelig positiv effekt for brugeren, kan dette forklares i en hjælpetekst. Det kan f.eks. være tilfældet med inputfelter, der forkorter tiden for en sagsbehandling betragteligt, hvis de bliver udfyldt. 

#### Når der er flest obligatoriske inputfelter

I de fleste tilfælde bør der være flere obligatoriske end frivillige inputfelter. Marker da de frivillige felter i formularen.

{% include code/preview-box.html component="text-input-mandatory" title="Eksempel på formular med flest obligatoriske inputfelter" %}

#### Når der er flest frivillige inputfelter

Hvis en formular indeholder flere frivillige end obligatoriske inputfelter, fremhæves de obligatoriske felter i stedet for de frivillige. 

{% include code/preview-box.html component="text-input-optional" title="Eksempel på formular med flest frivillige inputfelter" %}

{:#read-only}
### Read-only

{% include code/preview-box.html component="text-input-readonly" link=false title="Eksempel på readonly inputfelt" code="/komponenter/inputfelter/implementering/#read-only" %}

{:#deaktiveret}
### Deaktiveret

{% include code/preview-box.html component="text-input-disabled" link=false title="Eksempel på deaktiveret inputfelt" code="/komponenter/inputfelter/implementering/#deaktiveret" %}

Bemærk, at deaktiverede elementer er usynlige for hjælpeteknologier som fx skærmlæsere, og derved vil brugere af disse værktøjer ikke få oplyst om elementernes tilstedeværelse. Det anbefales derfor, at man i stedet undlader feltet eller gør brug af <a href="#read-only">read-only</a>.

{:#prefix-og-suffix}
### Prefix og suffix

Prefix og suffix kan bruges til at tydeliggøre, hvordan brugeren skal angive bestemte data såsom beløb, antal m.m.

Et suffix må aldrig være den eneste indikator for, hvordan et felt skal udfyldes, eftersom det ikke læses højt af skærmlæsere. Feltets label eller en hjælpetekst kan bruges til også at indikere dette.

{% include code/preview-box.html component="text-input-prefix-suffix" link=false title="Eksempel på felter med prefix og suffix" code="/komponenter/inputfelter/implementering/#prefix-og-suffix" %}

{:#karakterbegraensning}
### Karakterbegrænsning

Karakterbegrænsning sætter et maksimalt antal af tegn, som brugeren kan indtaste i et felt. Karakterbegrænsning indikerer løbende overfor brugeren, hvor mange tegn der er tilbage, og hvor mange tegn de evt. har overskredet med.

Vis altid antallet af tegn, der er til rådighed i inputfeltet, inden brugeren begynder at skrive.

Stop ikke indtastningen, når brugeren overskrider antallet af tegn. Vis i stedet løbende med rød tekst under feltet, hvor mange tegn der er overskredet med.

{% include code/preview-box.html component="text-input-character-limit" link=false title="Eksempel på felt med karakterbegrænsning" code="/komponenter/inputfelter/implementering/#karakterbegraensning" %}

{:#feltbredde}
### Feltbredde

{% include code/preview-box.html component="text-input-width" link=false title="Eksempel på felter med forskellig bredde" code="/komponenter/inputfelter/implementering/#feltbredde" %}

{% include dos-donts-box.html component="text-input-width-dos-donts" title="Feltbredde do's and don'ts" %}

{:#eksempelloesninger}
## Se komponenten i eksempelløsninger

{:.nobullet-list}
- {% include links/demo-link.html linktext="Formular til kontaktoplysninger: Oplysninger om dig" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Trinformular til registrering: Kontaktoplysninger" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Trinformular til ansøgning: Kontaktoplysninger" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Trinformular til ansøgning: Tilføj dokumentation" returnID="eksempelloesninger" %}

{:#ref}
## Referencer

{:.nobullet-list}
- ISO 9241-143: Forms (2012)
- Adam Silver: Form Design Patterns (2018)
- <a href="https://www.nngroup.com/articles/form-design-white-space/" class="icon-link">Marieke McCloskey: Form Design Quick Fix: Group Form Elements Effectively Using White Space (2013)<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>
- <a href="https://www.nngroup.com/articles/form-design-placeholders/" class="icon-link">Katie Sherwin: Placeholders in Form Fields Are Harmful (2014-2018)<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>
- Jeff Johnson: Designing with the Mind in Mind, Second Edition (2014)
- Luke Wroblewski: Web Form Design: Filling in the Blanks (2008)
- Caroline Jarrett & Gerry Gaffney: Forms that Work: Designing Web Forms for Usability (2009)
- <a href="https://web.archive.org/web/20120120004811/http://www.formsthatwork.com/files/Articles/DesigningUsableForms.pdf" class="icon-link">Caroline Jarrett: Designing usable forms: the three-layer model of the form (2000)<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>
- <a href="https://www.uxmatters.com/mt/archives/2013/02/dont-put-labels-inside-text-boxes-unless-youre-luke-w.php" class="icon-link">Caroline Jarrett: Don’t Put Labels Inside Text Boxes (Unless You’re Luke W) (2013)<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>
- <a href="https://www.designprinciplesftw.com/collections/don-normans-principles-of-design" class="icon-link">Don Norman: Don Normans Principles of Design (2013)<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>