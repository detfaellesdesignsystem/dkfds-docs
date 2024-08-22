---
permalink: "/komponenter/inputfelter/"
redirect_from:
- "/komponenter/felter/"
- "/komponenter/tekstfelter/"
- "/kode/komponenter/felter/"
- "/kode/komponenter/tekstfelter/"
- "/kode/komponenter/inputfelter/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Inputfelter
lead: Inputfelter lader brugeren indtaste kort information.
description: Inputfelter til indtastning af information i form af bogstaver, tal og en kombination af begge.
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
tabs: "Retningslinjer, kode"
---

{% include tabs.html guidelines=true code=true %}

{% include code/preview-box.html component="text-input" title="Eksempel på inputfelt" classes="intro-example" %}

{% include anchorlinks.html guidelines="Inputfelter" code="Inputfelter_Kode" %}

<!--split-->

## Sådan bruges komponenten {#{% include create-id.html heading="Sådan bruges komponenten" %}}

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

{% include dos-donts-box.html component="text-input-dos-donts" %}

{% include dos-donts-box.html component="text-input-labels-dos-donts" %}

{:#fejlmeddelelse}
#### Fejlmeddelelse

Læs mere om korrekt brug af {% include links/component-guideline-link.html linktext="fejlmeddelelser" %} og deres formuleringer.

Når der vises en fejlmeddelelse, vis da også {% include links/component-guideline-link.html linktext="fejlopsummering" %}.

{% include code/preview-box.html component="error-message-name" title="Eksempel på tekstfelt med fejlmeddelelse" %}

## Varianter {#{% include create-id.html heading="Varianter" %}}

### Hjælpetekst {#{% include create-id.html heading="Hjælpetekst" %}}

{% include code/preview-box.html component="text-input-helptext" title="Eksempel på inputfelt med hjælpetekst" code="/komponenter/inputfelter/#hjaelpetekst-kode" %}

{% include dos-donts-box.html component="text-input-helptext-dos-donts" %}

### Obligatoriske og frivillige inputfelter {#{% include create-id.html heading="Obligatoriske og frivillige inputfelter" %}}

Undgå frivillige inputfelter så vidt muligt. Hvis et felt er frivilligt, så overvej altid, om det er nødvendigt at have med i formularen. 

Hvis en formular indeholder frivillige inputfelter, som vil have en betydelig positiv effekt for brugeren, kan dette forklares i en hjælpetekst. Det kan f.eks. være tilfældet med inputfelter, der forkorter tiden for en sagsbehandling betragteligt, hvis de bliver udfyldt. 

#### Når der er flest obligatoriske inputfelter

I de fleste tilfælde bør der være flere obligatoriske end frivillige inputfelter. Marker da de frivillige felter i formularen.

{% include code/preview-box.html component="text-input-mandatory" title="Eksempel på formular med flest obligatoriske inputfelter" %}

#### Når der er flest frivillige inputfelter

Hvis en formular indeholder flere frivillige end obligatoriske inputfelter, fremhæves de obligatoriske felter i stedet for de frivillige. 

{% include code/preview-box.html component="text-input-optional" title="Eksempel på formular med flest frivillige inputfelter" code="/komponenter/inputfelter/#obligatoriske-og-frivillige-inputfelter-kode" %}

### Read-only {#{% include create-id.html heading="Read-only" %}}

{% include code/preview-box.html component="text-input-readonly" title="Eksempel på readonly inputfelt" code="/komponenter/inputfelter/#read-only-kode" %}

### Deaktiveret {#{% include create-id.html heading="Deaktiveret" %}}

{% include code/preview-box.html component="text-input-disabled" title="Eksempel på deaktiveret inputfelt" code="/komponenter/inputfelter/#deaktiveret-kode" %}

Bemærk, at deaktiverede elementer er usynlige for hjælpeteknologier som fx skærmlæsere, og derved vil brugere af disse værktøjer ikke få oplyst om elementernes tilstedeværelse. Det anbefales derfor, at man i stedet undlader feltet eller gør brug af {% include links/component-guideline-link.html linktext="read-only" %}.

### Prefix og suffix {#{% include create-id.html heading="Prefix og suffix" %}}

Prefix og suffix kan bruges til at tydeliggøre, hvordan brugeren skal angive bestemte data såsom beløb, antal m.m.

Et suffix må aldrig være den eneste indikator for, hvordan et felt skal udfyldes, eftersom det ikke læses højt af skærmlæsere. Feltets label eller en hjælpetekst kan bruges til også at indikere dette.

{% include code/preview-box.html component="text-input-prefix-suffix" title="Eksempel på felter med prefix og suffix" code="/komponenter/inputfelter/#prefix-og-suffix-kode" %}

### Karakterbegrænsning {#{% include create-id.html heading="Karakterbegrænsning" %}}

Karakterbegrænsning sætter et maksimalt antal af tegn, som brugeren kan indtaste i et felt. Karakterbegrænsning indikerer løbende overfor brugeren, hvor mange tegn der er tilbage, og hvor mange tegn de evt. har overskredet med.

Vis altid antallet af tegn, der er til rådighed i inputfeltet, inden brugeren begynder at skrive.

Stop ikke indtastningen, når brugeren overskrider antallet af tegn. Vis i stedet løbende med rød tekst under feltet, hvor mange tegn der er overskredet med.

{% include code/preview-box.html component="text-input-character-limit" title="Eksempel på felt med karakterbegrænsning" code="/komponenter/inputfelter/#karakterbegraensning-kode" %}

### Feltbredde {#{% include create-id.html heading="Feltbredde" %}}

{% include code/preview-box.html component="text-input-width" title="Eksempel på felter med forskellig bredde" code="/komponenter/inputfelter/#feltbredde-kode" %}

{% include dos-donts-box.html component="text-input-width-dos-donts" %}

## Se komponenten i eksempelløsninger {#{% include create-id.html heading="Se komponenten i eksempelløsninger" %}}

{:.nobullet-list}
- {% include links/demo-link.html linktext="Formular til kontaktoplysninger: Oplysninger om dig" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Trinformular til registrering: Kontaktoplysninger" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Trinformular til ansøgning: Kontaktoplysninger" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Trinformular til ansøgning: Tilføj dokumentation" returnID="eksempelloesninger" %}

## Referencer {#{% include create-id.html heading="Referencer" %}}

{:.nobullet-list}
- ISO 9241-143: Forms (2012)
- Adam Silver: Form Design Patterns (2018)
- {% include links/external-link.html linktext="Marieke McCloskey: Form Design Quick Fix: Group Form Elements Effectively Using White Space (2013)" %}
- {% include links/external-link.html linktext="Katie Sherwin: Placeholders in Form Fields Are Harmful (2014-2018)" %}
- Jeff Johnson: Designing with the Mind in Mind, Second Edition (2014)
- Luke Wroblewski: Web Form Design: Filling in the Blanks (2008)
- Caroline Jarrett & Gerry Gaffney: Forms that Work: Designing Web Forms for Usability (2009)
- {% include links/external-link.html linktext="Caroline Jarrett: Designing usable forms: the three-layer model of the form (2000)" %}
- {% include links/external-link.html linktext="Caroline Jarrett: Don’t Put Labels Inside Text Boxes (Unless You’re Luke W) (2013)" %}
- {% include links/external-link.html linktext="Don Norman: Don Normans Principles of Design (2013)" %}

<!--split-->

## Installation {#{% include create-id.html heading="Installation" append="-kode" %}}

### HTML Struktur

{% include code/syntax.html component="text-input" copybutton=true %}

### Brug attributten “autocomplete”

Brug `autocomplete` på inputfelter for at gøre det hurtigere for brugeren at udfylde formularen samt for at overholde reglerne for tilgængelighed ({% include links/external-link.html linktext="W3C (WCAG 2.1): Understanding SC 1.3.5: Identify Input Purpose (Level AA)" %}).

Brug `autocomplete` på inputfelter til fx navn (`autocomplete='name'`), postnummer (`autocomplete='postal-code'`), telefonnummer (`autocomplete='tel'`) og e-mailadresse (`autocomplete='email'`), hvis en bruger skal indtaste disse oplysninger om sig selv i din formular. 

{% include code/syntax.html component="text-input-autocomplete" link=true copybutton=true %}

## Hjælpetekst {#{% include create-id.html heading="Hjælpetekst" append="-kode" %}}

{% include code/syntax.html component="text-input-helptext" link=true copybutton=true guidelines="/komponenter/inputfelter/#hjaelpetekst" %}

## Obligatoriske og frivillige inputfelter {#{% include create-id.html heading="Obligatoriske og frivillige inputfelter" append="-kode" %}}

{% include code/syntax.html component="text-input-optional" link=true copybutton=true guidelines="/komponenter/inputfelter/#obligatoriske-og-frivillige-inputfelter" %}

Hvis de fleste felter i en selvbetjeningsløsning er påkrævede, noterer man "(frivilligt)" ved de få felter, der ikke er påkrævede. Hvis de fleste felter er frivillige i en løsning, noterer man "(*skal udfyldes)" ved de få felter, der er påkrævede.

## Read-only {#{% include create-id.html heading="Read-only" append="-kode" %}}

{% include code/syntax.html component="text-input-readonly" link=true copybutton=true guidelines="/komponenter/inputfelter/#read-only" %}

## Deaktiveret {#{% include create-id.html heading="Deaktiveret" append="-kode" %}}

{% include code/syntax.html component="text-input-disabled" link=true copybutton=true guidelines="/komponenter/inputfelter/#deaktiveret" %}

## Prefix og suffix {#{% include create-id.html heading="Prefix og suffix" append="-kode" %}}

{% include code/syntax.html component="text-input-prefix-suffix" link=true copybutton=true guidelines="/komponenter/inputfelter/#prefix-og-suffix" %}

## Karakterbegrænsning {#{% include create-id.html heading="Karakterbegrænsning" append="-kode" %}}

{% include code/syntax.html component="text-input-character-limit" link=true copybutton=true guidelines="/komponenter/inputfelter/#karakterbegraensning" %}

Husk at medtage de to beskeder skjult med klassen `sr-only`. Disse anvendes af skærmlæsere til at give info og status på indtastningen til brugeren.

### JavaScript

Karakterbegrænsning kræver JavaScript for at fungere. Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med `init()`.

#### Funktioner

<div class="table--responsive-scroll">
  <table class="table table--responsive-headers">
    <thead>
      <tr>
        <th scope="col">Funktion</th>
        <th scope="col">Beskrivelse</th>
      </tr>
    </thead>
    <tbody>
    <tr>
        <td>init()</td>
        <td>Sørger for at beskederne med antal tegn tilbage opdateres.</td>
      </tr>
      <tr>
        <td>charactersLeft()</td>
        <td>Returnerer det antal tegn, der lige nu kan indtastes i inputfeltet. Tallet er negativt, hvis antallet af tegn er overskredet.</td>
      </tr>
      <tr>
        <td>updateMessages()</td>
        <td>Fremtvinger en opdatering af beskederne med antal tegn tilbage. Dette kan være nyttigt, hvis eksempelvis værdien i inputfeltet ændres programmatisk.</td>
      </tr>
    </tbody>
  </table>
</div>

Eksempel på anvendelse:

{% highlight javascript %}
const form_limit = new DKFDS.CharacterLimit(document.getElementsByClassName('form-limit')[0]);
form_limit.init();
form_limit.charactersLeft();
{% endhighlight %}

#### Sprog

Hvis du ønsker at anvende et andet sprog end dansk i JavaScript-koden til karakterbegrænsning, skal du selv give din oversættelse med og derefter initiere komponenten manuelt. Husk at opdatere værdien i attributten "lang" i din sides html-tag. Indholdet i krøllede parenteser `{...}` nedenunder skal ikke oversættes eller ændres.

{% highlight javascript %}
new DKFDS.CharacterLimit(document.getElementById('FORM-LIMIT-ID'), {
  "character_remaining": "Du har {value} tegn tilbage",
  "characters_remaining": "Du har {value} tegn tilbage",
  "character_too_many": "Du har {value} tegn for meget",
  "characters_too_many": "Du har {value} tegn for meget"
}).init();
{% endhighlight %}

## Feltbredde {#{% include create-id.html heading="Feltbredde" append="-kode" %}}
   
Inputfelter har en standard bredde på 32rem. For at ændre bredden bruges nedenstående klasser:

- `input-width-xxs` har en bredde på 8rem
- `input-width-xs` har en bredde på 16rem
- `input-width-s` har en bredde på 24rem
- `input-width-m` har en bredde på 32rem
- `input-width-l` har en bredde på 40rem
- `input-width-xl` har en bredde på 48rem

### Bredde med tegn

For at styre bredden på inputfelter efter tegn, skal der i stedet bruges nedenstående klasser:

- `input-char-4` har en bredde der passer til 4 tegn
- `input-char-8` har en bredde der passer til 8 tegn
- `input-char-11` har en bredde der passer til 11 tegn
- `input-char-27` har en bredde der passer til 27 tegn

For at tilføje flere inputbredder, der er styret af tegn, skal der tilføjes klassen `input-char-X`, hvor det nye tal skal erstattes med X.
