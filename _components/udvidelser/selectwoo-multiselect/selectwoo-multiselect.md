---
permalink: /udvidelser/selectwoo-multiselect/
layout: styleguide
type: component
title: Multiselect dropdown
category: Udvidelser_category
subcategory: Udvidelser
lead: Gør det muligt for brugeren at vælge flere elementer fra en liste.
alerts:
- type: warning
  header: Denne komponent er ikke en del af kernen af Det Fælles Designsystem
  content: SelectWoo er ikke inkluderet i kernen af Det Fælles Designsystem. For at inkludere SelectWoo skal der inkluderes et eksternt bibliotek, se implementeringsafsnittet nedenfor.<br><br>Det Fælles Designsystem har implementeret et tema til SelectWoo, som findes i <a href="https://github.com/detfaellesdesignsystem/dkfds-plugins" class="icon-link">Plugins projektet<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a>.
subnav:
- text: Standard
  href: '#standard'
- text: Ajax data
  href: '#ajax-data'
- text: Gruppering
  href: '#gruppering'
---

<div class="alert alert-error" role="alert">
  <div class="alert-body">
    <h2 class="alert-heading h3">Ikon mangler - Vi afventer fix fra SelectWoo</h2>
  </div>
</div>

<h2 class="h4">Tilgængelighed</h2>
<ul>
    <li>Bemærk: Multiselect dropdown-funktionen (SelectWoo) er gennemtestet af Det Fælles Designsystem og opfylder ikke alle krav til en anbefalet udvidelse. Det er dog den bedste, vi har kunnet finde indtil videre. Du skal bruger- og performanceteste prototyper med SelectWoo med entydigt positive resultat i forhold til din målgruppe, hvis du ønsker at anvende den. Det anbefales generelt, at du overvejer en anden løsning end en multiselect i din løsning.</li>
    <li>Multiselect dropdown anvender bl.a. ARIA til at øge den umiddelbare tilgængelighed. Du skal imidlertid være opmærksom på, at en lang valgliste øger den kognitive belastning og dermed sænker den reelle tilgængelighed.</li>
</ul>
<h2 class="h4">Brugervenlighed</h2>
<h3 class="h5">Anvendes til</h3>
<p>Multiselect dropdown anvendes til at give brugeren mulighed for at fortage mere end ét valg fra en prædefineret liste.</p>
<h3 class="h5">Anvendes ikke til</h3>
<ul>
    <li>Multiselect dropdown egner sig ikke til valg i lister med længere værdier.</li>
    <li>Multiselect dropdown egner sig ikke til mobile løsninger.</li>
</ul>
<h3 class="h5">Vejledning</h3>                
<ul>
    <li>En multiselect dropdown er en avanceret funktion, der bør anvendes i meget begrænset omfang.</li>
    <li>Overvej om du kan tilbyde en bedre og mere overskuelig løsning fx tjekbokse.</li>
    <li>På trods af de udvidede muligheder i Select2-udvidelsen bør implementationen holdes så enkel som muligt. </li>
    <li>Var varsom med at ændre indholdet af næste multiselect i forhold til det forrige valg.</li>
    <li>Begræns antallet af valgmuligheder i listen, så brugeren ikke mister overblik over sit valg.</li>
    <li>SelectWoo er afhængig af jQuery og dermed kræver den et ekstra request og ekstra kode i indlæsningen – dette kan nedsætte funktionens performance.</li>
    <li><a href="https://medium.com/@kollinz/dropdown-alternatives-for-better-mobile-forms-53e40d641b53" class="icon-link">Du kan læse mere om alternativer til multiselects her<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
</ul>

<div class="accordion-bordered mt-7">
  <button class="button-unstyled accordion-button" aria-expanded="false" aria-controls="code-documentation">
    Implementering
  </button>
  <div id="code-documentation" class="accordion-content">
    <section>
       <p>Multiselect funktionaliteten bygger på biblioteket <a href="https://github.com/woocommerce/selectWoo" class="icon-link">SelectWoo<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a>, som er en tilgængelig implementering af det populære bibliotek <a href="https://select2.org/" class="icon-link">Select2<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a>.</p>
       <p>Det må antages at det er et begrænset antal selvbetjeningsløsninger som har brug for denne funktionalitet, derfor er dette bibliotek ikke inkluderet i standard javascript filen <code>dkfds.js</code>. En udvikler skal derfor selv inkludere de nødvendige filer for at få SelectWoo til at virke. Select2's <a href="https://select2.org/getting-started/installation" class="icon-link">guide<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a> kan bruges til opsætningen, dog skal SelectWoo's javascript filer bruges i steden for. Det er vigtigt at både javascript filer, og styling filer bliver inkluderet.</p>
       <p>På dette dokumentationssite er multiselect funktionaliteten en del af javascript filen <code>selectwoo-examples.js</code>, denne fil har kun til formål at vise funktionaliteten på dette dokumentationsite, og skal ikke inkluderes i selve selvbetjeningsløsningen.</p>
       <p>Eksemplet på denne side er implementeret her: <code>https://github.com/detfaellesdesignsystem/dkfds-plugins/tree/master/src/components/selectwoo/example/js/dkfds-selectwoo-example.js</code></p>
    </section>
  </div>
</div>

{% include child-sections.html parent='selectwoo-multiselect' %}
