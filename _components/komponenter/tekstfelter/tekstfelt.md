---
permalink: "/komponenter/tekstfelter/tekstfelt/"
redirect_from:
- /komponenter/felter/
parentlink: /komponenter/tekstfelter/
layout: styleguide
type: component
title: Tekstfelter
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
category: Komponenter_category
description: Tekstfelter til indtastning af information i form af bogstaver, tal og en kombination
  af begge.
subcategory: Komponenter
anchor: true
subnav:
- text: Fejlmeddelelse
  href: "#fejlmeddelelse"
- text: Hjælpetekst
  href: "#hjaelpetekst"
- text: Obligatoriske og frivillige felter
  href: "#obligatoriske-og-frivillige-felter"
- text: Read-only
  href: "#read-only"
- text: Deaktiveret
  href: "#deaktiveret"
- text: Prefix og suffix
  href: "#prefix-og-suffix"
- text: Feltbredde
  href: "#feltbredde"
component: text-input
componentTitle: Eksempel på tekstfelter
componentCode: "/kode/komponenter/tekstfelter/"

---
{:.h3 #retningslinjer}
## Anvendes til

Brug til input af information i form af bogstaver og tal eller en kombination af begge.

Brug tekstfelter når det er nemmere for brugeren at skrive information end at vælge den på anden vis. 

Brug når brugeren skal kunne copy paste information ind i en formular.

{:.h3}
## Anvendes ikke til

Når brugeren skal vælge ud fra et prædefineret sæt af værdier (fx nogle få bestemte datoer) eller hvis der er strenge krav til datakonsistens, oftest i en løsning uden klientside validering (hvis brugerens input-format kan skabe fejl på serversiden).

{:.h3}
## Vejledning

Brug primært formularelementer, når der er behov for, at brugeren kan tilføje information, som ikke kan vælges ud fra prædefinerede værdier, eller som løsningen ikke automatisk kan forudse ud fra brugerens andre indtastninger.

Vis kun fejlmeddelelser, når brugeren har indtastet en ugyldig værdi.

Fejlmeddelelser skal være meningsfulde og hjælpsomme.

Placér fejlmeddelelser mellem label og feltet, som bliver markeret med rødt.

Tekstfelter er ikke perfekte til mobile løsninger. Overvej om de er nødvendige eller om du kan tilbyde brugeren en anden form for interaktion.

Brug feltbredden til at begrænse antallet af tegn i et felt. Feltbredden angiver det forventede omfang af tegn, så brugeren får en fornemmelse af, hvad der skal indtastes. Fx bør et felt, hvor man skal angive et dansk postnummer, kun være 4 tegn bredt, mens et felt til et gadenavn bør være på minimum 27 tegn.

Brug ikke feltbredde til at validere brugerens input. Angiv i stedet krav til inputvalidering i en vejledning.

Feltets bredde skal modsvare det, du forventer at brugeren  skal indtaste, så brugeren kan se alle tegn under indtastningen.

{% include dos-donts-box.html component="text-input-dos-donts" title="Felter do's and don'ts" %}

{% include dos-donts-box.html component="text-input-labels-dos-donts" title="Felt labels do's and don'ts" %}

{:.h4}
### Referencer

{:.nobullet-list}
- ISO 9241-143: Forms (2012)
- Adam Silver: Form Design Patterns (2018)
- <a href="https://www.nngroup.com/articles/form-design-white-space/" class="icon-link">Marieke McCloskey: Form Design Quick Fix: Group Form Elements Effectively Using White Space (2013)<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>
- <a href="https://www.uxmatters.com/mt/archives/2013/02/dont-put-labels-inside-text-boxes-unless-youre-luke-w.php" class="icon-link">Caroline Jarrett: Don’t Put Labels Inside Text Boxes (Unless You’re Luke W) (2013)<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>
- <a href="https://www.nngroup.com/articles/form-design-placeholders/" class="icon-link">Katie Sherwin: Placeholders in Form Fields Are Harmful (2014-2018)<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>


{:.h3 #eksempelloesninger}
## Se komponenten i eksempelløsninger

{:.nobullet-list}
- <a href="/pages/eksempler/AES-erstatningssag/aes-5/?r={{page.permalink}}%23eksempelloesninger" title="Eksempelløsning Erstatningssag åbnes i nyt vindue">Erstatningssag</a>
- <a href="/pages/eksempler/aktindsigt/aktindsigt-1/?r={{page.permalink}}%23eksempelloesninger" title="Eksempelløsning Aktindsigt åbnes i nyt vindue">Aktindsigt</a>
- <a href="/pages/eksempler/strategiske-virksomhedsalliancer/virksomhedsalliancer-1/?r={{page.permalink}}%23eksempelloesninger" title="Eksempelløsning Strategiske virksomhedsalliancer åbnes i nyt vindue">Strategiske virksomhedsalliancer</a>

{:#fejlmeddelelse}
## Fejlmeddelelse

<a href="/komponenter/fejlangivelse/fejlmeddelelser/">Læs mere om korrekt brug af fejlmeddelelser og deres formuleringer.</a>

Når der vises en fejlmeddelelse, vis da også <a href="/komponenter/fejlangivelse/fejlopsummering/">fejlopsummering</a>.

{:#hjaelpetekst}
## Hjælpetekst

{% include code/preview-box.html component="text-input-helptext" link=false title="Eksempel på tekstfelt med hjælpetekst" code="/kode/komponenter/tekstfelter/#felt-med-hjaelpetekst" %}

{% include dos-donts-box.html component="text-input-helptext-dos-donts" title="Felt med hjælpetekst do's and don'ts" %}

{:.h4}
### Referencer

{:.nobullet-list}
- <a href="https://www.nngroup.com/articles/form-design-placeholders/" class="icon-link">Katie Sherwin: Placeholders in Form Fields Are Harmful (2014-2018)<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>
- Jeff Johnson: Designing with the Mind in Mind, Second Edition (2014)

{:#obligatoriske-og-frivillige-felter}
## Obligatoriske og frivillige tekstfelter

Undgå frivillige tekstfelter så vidt muligt. Hvis et felt er frivilligt, så overvej altid, om det er nødvendigt at have med i formularen. 

Hvis en formular indeholder frivillige tekstfelter, som vil have en betydelig positiv effekt for brugeren, kan dette forklares i en hjælpetekst. Det kan f.eks. være tilfældet med tekstfelter, der forkorter tiden for en sagsbehandling betragteligt, hvis de bliver udfyldt. 

{:h4}
### Når der er flest obligatoriske tekstfelter

I de fleste tilfælde bør der være flere obligatoriske end frivillige tekstfelter. Marker da de frivillige tekstfelter i formularen.

{% include code/preview-box.html component="text-input-mandatory" title="Eksempel på formular med flest obligatoriske tekstfelter" %}

{:h4}
### Når der er flest frivillige tekstfelter

Hvis en formular indeholder flere frivillige end obligatoriske tekstfelter, fremhæves de obligatoriske tekstfelter i stedet for de frivillige. 

{% include code/preview-box.html component="text-input-optional" title="Eksempel på formular med flest frivillige tekstfelter" %}

{:.h4}
### Referencer

{:.nobullet-list}
- Luke Wroblewski: Web Form Design: Filling in the Blanks (2008)
- Caroline Jarrett & Gerry Gaffney: Forms that Work: Designing Web Forms for Usability (2009)

{:#read-only}
## Read-only
{% include code/preview-box.html component="text-input-readonly" link=false title="Eksempel på readonly tekstfelt" code="/kode/komponenter/felter/#read-only-felt" %}

{:#deaktiveret}
## Deaktiveret
{% include code/preview-box.html component="text-input-disabled" link=false title="Eksempel på deaktiveret tekstfelt" code="/kode/komponenter/felter/#read-only-felt" %}

Bemærk, at deaktiverede elementer er usynlige for hjælpeteknologier som fx skærmlæsere, og derved vil brugere af disse værktøjer ikke få oplyst om elementernes tilstedeværelse. Det anbefales derfor, at man i stedet undlader feltet eller gør brug af <a href="#read-only">read-only</a>.

{:#prefix-og-suffix}
## Prefix og suffix
Prefix og suffix kan bruges til at tydeliggøre, hvordan brugeren skal angive bestemte data såsom beløb, antal m.m.

Et suffix må aldrig være den eneste indikator for, hvordan et felt skal udfyldes, eftersom det ikke læses højt af skærmlæsere. Feltets label eller en hjælpetekst kan bruges til også at indikere dette.

{% include code/preview-box.html component="text-input-prefix-suffix" link=false title="Eksempel på felter med prefix og suffix" code="/kode/komponenter/tekstfelter/#prefix-og-suffix" %}

{:#feltbredde}
## Feltbredde
{% include code/preview-box.html component="text-input-width" link=false title="Eksempel på felter med forskellig bredde" code="/kode/komponenter/felter/#feltbredde" %}

{% include dos-donts-box.html component="text-input-width-dos-donts" title="Feltbredde do's and don'ts" %}

{:.h4}
### Referencer

{:.nobullet-list}
- Adam Silver: Form Design Patterns (2018)
- <a href="https://web.archive.org/web/20120120004811/http://www.formsthatwork.com/files/Articles/DesigningUsableForms.pdf" class="icon-link">Caroline Jarrett: Designing usable forms: the three-layer model of the form (2000)<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>
- <a href="https://www.designprinciplesftw.com/collections/don-normans-principles-of-design" class="icon-link">Don Norman: Don Normans Principles of Design (2013)<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>
