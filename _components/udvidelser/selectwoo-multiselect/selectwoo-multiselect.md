---
permalink: /udvidelser/selectwoo-multiselect/
layout: styleguide
type: component
title: Multiselect dropdown
category: Udvidelser_category
select2: true
subcategory: Udvidelser
lead: Gør det muligt for brugeren at vælge flere elementer fra en liste.
alerts:
- type: warning
  header: Denne komponent er ikke en del af kernen af Det Fælles Designsystem
  content: SelectWoo er ikke inkluderet i kernen af Det Fælles Designsystem. For at inkludere SelectWoo skal der inkluderes et eksternt bibliotek, se implementeringsafsnittet nedenfor.<br><br>Det Fælles Designsystem har implementeret et tema til SelectWoo, som findes i <a href="https://github.com/detfaellesdesignsystem/dkfds-plugins" class="icon-link">Plugins projektet<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>.
anchor: true
subnav:
- text: Standard
  href: '#standard'
- text: Ajax data
  href: '#ajax-data'
- text: Gruppering
  href: '#gruppering'
---
<h2 class="h4">Tilgængelighed</h2>

- Bemærk: Multiselect dropdown-funktionen (SelectWoo) er gennemtestet af Det Fælles Designsystem og opfylder ikke alle krav til en anbefalet udvidelse. Det er dog den bedste, vi har kunnet finde indtil videre. Du skal bruger- og performanceteste prototyper med SelectWoo med entydigt positive resultat i forhold til din målgruppe, hvis du ønsker at anvende den. Det anbefales generelt, at du overvejer en anden løsning end en multiselect i din løsning.
- Multiselect dropdown anvender bl.a. ARIA til at øge den umiddelbare tilgængelighed. Du skal imidlertid være opmærksom på, at en lang valgliste øger den kognitive belastning og dermed sænker den reelle tilgængelighed.

<h2 class="h4">Brugervenlighed</h2>
<h3 class="h5">Anvendes til</h3>

Multiselect dropdown anvendes til at give brugeren mulighed for at fortage mere end ét valg fra en prædefineret liste.

<h3 class="h5">Anvendes ikke til</h3>

- Multiselect dropdown egner sig ikke til valg i lister med længere værdier.
- Multiselect dropdown egner sig ikke til mobile løsninger.

<h3 class="h5">Vejledning</h3>

- En multiselect dropdown er en avanceret funktion, der bør anvendes i meget begrænset omfang.
- Overvej om du kan tilbyde en bedre og mere overskuelig løsning fx tjekbokse.
- På trods af de udvidede muligheder i Select2-udvidelsen bør implementeringen holdes så enkel som muligt.
- Var varsom med at ændre indholdet af næste multiselect i forhold til det forrige valg.
- Begræns antallet af valgmuligheder i listen, så brugeren ikke mister overblik over sit valg.
- SelectWoo er afhængig af jQuery og dermed kræver den et ekstra request og ekstra kode i indlæsningen – dette kan nedsætte funktionens performance.
- <a href="https://medium.com/@kollinz/dropdown-alternatives-for-better-mobile-forms-53e40d641b53" class="icon-link">Du kan læse mere om alternativer til multiselects her<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>

### Implementering

Multiselect funktionaliteten bygger på biblioteket <a href="https://github.com/woocommerce/selectWoo" class="icon-link">SelectWoo<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>, som er en tilgængelig implementering af det populære bibliotek <a href="https://select2.org/" class="icon-link">Select2<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>.

Det må antages at det er et begrænset antal selvbetjeningsløsninger som har brug for denne funktionalitet, derfor er dette bibliotek ikke inkluderet i standard javascript filen `dkfds.js`. En udvikler skal derfor selv inkludere de nødvendige filer for at få SelectWoo til at virke. Select2's <a href="https://select2.org/getting-started/installation" class="icon-link">guide<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a> kan bruges til opsætningen, dog skal SelectWoos javascript filer bruges i stedet for. Det er vigtigt at både javascript filer, og styling filer bliver inkluderet.

På dette designsystem.dk er multiselect funktionaliteten en del af javascript filen `dkfds-selectwoo-example.js`, denne fil har kun til formål at vise funktionaliteten på dette designsystem.dk, og skal ikke inkluderes i selve selvbetjeningsløsningen.

Eksemplet på denne side er implementeret her: <a href="https://github.com/detfaellesdesignsystem/dkfds-docs/blob/master/examples/plugins/selectwoo/js/dkfds-selectwoo-example.js" class="icon-link">https://github.com/detfaellesdesignsystem/dkfds-docs/blob/master/examples/plugins/selectwoo/js/dkfds-selectwoo-example.js<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>.

{% include child-sections.html parent='selectwoo-multiselect' %}
