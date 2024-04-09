---
permalink: "/komponenter/inputfelter/implementering/"
guidelinelink: "/komponenter/inputfelter/guidelines/"
redirect_from:
- "/kode/komponenter/felter/"
- "/kode/komponenter/tekstfelter/"
- "/kode/komponenter/inputfelter/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Inputfelter
lead: Inputfelter lader brugeren indtaste kort information.
anchor: true
subnav:
- text: Installation
  href: "#installation"
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
- text: Karakterbegrænsning
  href: "#karakterbegraensning"
- text: Feltbredde
  href: "#feltbredde"
description: "Dokumentation på implementering af inputfelter."
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

{:#installation}
## Installation

### HTML Struktur

{% include code/syntax.html component="text-input" copybutton=true %}

### Brug attributten “autocomplete”

Brug `autocomplete` på inputfelter for at gøre det hurtigere for brugeren at udfylde formularen samt for at overholde reglerne for tilgængelighed ({% include links/external-link.html linktext="W3C (WCAG 2.1): Understanding SC 1.3.5: Identify Input Purpose (Level AA)" %}).

Brug `autocomplete` på inputfelter til fx navn (`autocomplete='name'`), postnummer (`autocomplete='postal-code'`), telefonnummer (`autocomplete='tel'`) og e-mailadresse (`autocomplete='email'`), hvis en bruger skal indtaste disse oplysninger om sig selv i din formular. 

{% include code/syntax.html component="text-input-autocomplete" link=true copybutton=true %}

{:#hjaelpetekst}
## Hjælpetekst

{% include code/syntax.html component="text-input-helptext" link=true copybutton=true %}

{:#obligatoriske-og-frivillige-felter}
## Obligatoriske og frivillige inputfelter

{% include code/syntax.html component="text-input-optional" link=true copybutton=true %}

Hvis de fleste felter i en selvbetjeningsløsning er påkrævede, noterer man "(frivilligt)" ved de få felter, der ikke er påkrævede. Hvis de fleste felter er frivillige i en løsning, noterer man "(*skal udfyldes)" ved de få felter, der er påkrævede.

{:#read-only}
## Read-only

{% include code/syntax.html component="text-input-readonly" link=true copybutton=true %}

{:#deaktiveret}
## Deaktiveret

{% include code/syntax.html component="text-input-disabled" link=true copybutton=true %}

{:#prefix-og-suffix}
## Prefix og suffix

{% include code/syntax.html component="text-input-prefix-suffix" link=true copybutton=true %}

{:#karakterbegraensning}
## Karakterbegrænsning

{% include code/syntax.html component="text-input-character-limit" link=true copybutton=true %}

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

{:#feltbredde}
## Feltbredde
   
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
