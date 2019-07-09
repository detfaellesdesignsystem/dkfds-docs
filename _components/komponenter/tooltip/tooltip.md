---
permalink: /komponenter/tooltip/
layout: styleguide
type: element
title: Tooltip og popover
category: Komponenter_category
subcategory: Komponenter
description: Tooltip bruges til at forklare en tekst yderligere eller give mere information, som ikke umiddelbart er nødvendig.
lead: Tooltip og popover er komponenter, som brugerne enten kan aktiverer eller fører musen hen over for at få en kort forklaring på indhold, ord eller begreber.  
---
<article>
    <section>
        <h2 class="h3">Retningslinjer</h2>
        <h3 class="h4">Tilgængelighed</h3>
        <ul>
            <li>Tooltip og popovers skal kunne lukkes med escape knappen på keyboardet.</li>
            <li>Fokus skal blive på det element, der afstedkom tooltippen eller popoveren.</li>
            <li>Brug aria-describedby på elementet der udløser tooltippen eller popoveren.</li>
            <li>Tooltips skal både vises, ved markering med mus og keyboard.</li>
        </ul>
        <h3 class="h4">Brugervenlighed</h3>
        <h4 class="h5">Anvendes til</h4>
        <ul>
            <li>Brug tooltip til præcisering af specifikke elementer i brugergrænsefladen.</li>
            <li>Brug popover til at knytte relaterede informationer, der uddyber/forklarer et element eller en funktion i brugergrænsefladen.</li>
        </ul>
        <h4 class="h5">Anvendes ikke til</h4>
        <p>Informationer der er essentielle for at brugeren kan gennemføre løsningen, hvis indholdet er vigtigt for brugerens succes, så placer indholdet på siden som brød- eller hjælpetekst.</p>
        <h4 class="h5">Vejledning</h4>
        <ul>
            <li>Gør indholdet i tooltips og popovers så kort og koncist som muligt.</li>
            <li>Vær konsistent i brugen af tooltips og popovers, så brugeren ikke skal gætte sig til om der er tooltips/popovers eller ej.</li>
            <li>Gør det let at se, hvilket element tooltippen/popoveren hører til.</li>
            <li>Brug altid tooltips til funktionsikoner (klikbare ikoner) uden label.</li>
            <li>Sørg for at tooltips og popovers er tydelige at se og læse.</li>
            <li>Placer tooltips og popovers så de ikke skygger for det indhold på siden som de relaterer til. Placeres de forkert kan brugeren blive nødt til at lukke og åbne tooltip/popover igen for at forstå sammenhængen.</li>
            <li>Sættes der tooltip/popover på et ord i en tekst, markeres ordet med en stiplet linje under. Brug det i begrænset omfang, da det let virker forstyrrende.</li>
        </ul>
        <h3 class="h5">Links</h3>
        <ul class="nobullet-list">
            <li><a href="https://w3c.github.io/aria-practices/#tooltip" class="icon-link">Tilgængelige tooltips<svg class="icon-svg" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="https://www.nngroup.com/articles/tooltip-guidelines/" class="icon-link">Tooltip guidelines<svg class="icon-svg" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a></li>
        </ul>
    </section>
</article>

<div class="accordion-bordered mt-7">
  <button class="button-unstyled accordion-button" aria-expanded="false" aria-controls="tooltip-code-doc">
    Implementering
  </button>
  <div id="tooltip-code-doc" class="accordion-content">
     <section>
       <p>Tooltips og popovers bygger på <a href="https://atomiks.github.io/tippyjs/" class="icon-link">tippy.js<svg class="icon-svg" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>.</p>
       <p>For at initialisere et tooltip eller en popover skal et HTML-element have klassen <code>'.js-tooltip'</code> og en <code>'title'</code>-attribut:</p>
       <div class="code-highlight">
         <code>
           &lt;button class="button button-primary js-tooltip" title="Dette er et tooltip"&gt;Knap med tooltip&lt;/button&gt;	
         </code> 
       </div>
       <p>Vi definerer et tooltip som en hjælpetekst som vises ved mouseover, og en popover som hjælpetekst der vises ved et klik. For at lave et tooltip om til en popover skal der tilføjes følgende attribut: <code>data-tippy-trigger="click"</code></p>
       <p>Tippy.js har mange konfigurationsmuligheder, og den fulde liste kan ses på <a href="https://atomiks.github.io/tippyjs/" class="icon-link">deres hjemmeside<svg class="icon-svg" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>.</p>
       <p>I følgende eksempel er tooltippet konfigureret til at vises til venstre: </p>
       <div class="code-highlight">
         <code>
           &lt;button class="button button-primary js-tooltip" data-tippy-placement="left" title="Tooltip til venstre"&gt;Knap med tooltip til venstre&lt;/button&gt;
         </code>
       </div>
     </section>
  </div>
</div>

{% include child-sections.html parent='Tooltip' %}

