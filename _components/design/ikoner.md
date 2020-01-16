---
permalink: /design/ikoner/
layout: styleguide
title: Ikoner
category: Design_category
subcategory: Design
lead: Ikoner benyttes til visuelt at understrege en handling eller en information. Ikoner kan underbygge et budskab eller gøre det lettere at afkode en side. Ikoner kan dog sjældent erstatte tekst.
order: 25
---

Nedenfor vises de ikoner som er inkluderet i designsystemet. Ikonerne er reserveret til deres specifikke formål og skal anvendes som sådan. Hvis du har brug for yderligere ikoner henviser vi til <a href="https://material.io/tools/icons/?style=outline" class="icon-link">Material Design<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>, <a href="https://materialdesignicons.com" class="icon-link">Material Design Icons<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a> eller lignende.

<div class="alert alert-info alert--paragraph">
  <div class="alert-body">
    <p class="alert-text">Bruges eller skabes andre ikoner end de viste skal de <a class="icon-link" href="https://material.io/design/iconography/system-icons.html#grid-keyline-shapes">passe ind visuelt<svg class="icon-svg " focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a> og de må ikke ligne eller kunne forvirres med designsystemets andre ikoner.</p>
  </div>
</div>

{% include code/preview.html component="icons--svg" %}
{% include code/accordion.html component="icons--svg" %}

## Implementering

Ikonerne kan indsættes på to måder, enten via klasser eller som inline svg.

<h3 class="h5">Ikoner indsat med inline svg (Anbefalet)</h3>

I toppen af `<body>` er alle svg-ikoner indsat i et område som er skjult. Følgende kode linker til et af disse svg ikoner og indsætter det via dets `id`: `<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#alert-outline"></use></svg>`.

Ved brug af `svg use` metoden, refererer du til et ikon, som er defineret et andet sted i htmlkoden. Du bør derfor huske at tilføje ikonerne som svg i koden, så referencen virker. Du kan dog nøjes med at tilføje de ikoner, du rent faktisk har brug for. Se eksemplet herunder.
```
<div class="hide-base-svg">
    <!--?xml version="1.0" encoding="UTF-8"?-->
    <svg xmlns="http://www.w3.org/2000/svg">
        <symbol id="add" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
        </symbol>
        <symbol id="alert-outline" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 2L1 21h22M12 6l7.53 13H4.47M11 10v4h2v-4m-2 6v2h2v-2"></path>
        </symbol>
        <symbol id="open-in-new" viewBox="0 0 24 24">
            <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7z"></path>
        </symbol>
        <symbol id="success" viewBox="0 0 24 24">
            <path d="M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10A10 10 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8 8 8 0 0 0-8-8m-1 12.5L6.5 12l1.41-1.41L11 13.67l5.59-5.58L18 9.5l-7 7z"></path>
        </symbol>
        <symbol id="warning" viewBox="0 0 24 24">
            <path d="M12 2L1 21h22M12 6l7.53 13H4.47M11 10v4h2v-4m-2 6v2h2v-2"></path>
        </symbol>
    </svg>
</div>
```
<h3 class="h5">Ikoner indsat med klasser</h3>

Ikoner der indsættes inline med i-tagget får på den måde samme skriftstørrelse. Følgende kode indsætter et 'alert'-ikon: `<i class="icon icon-alert-outline"></i>`
        
<h3 class="h5">Ikoner i tekst</h3>

Tilføj klassen `inline-svg` på ikoner, som skal fremgå i en tekst. Ikonet vil da tilpasse sig linjehøjden. Se eksemplet herunder:

Lorem ipsum <svg class="icon-svg inline-svg" focusable="false" aria-hidden="true"><use xlink:href="#language"></use></svg> dolor sit amet.
 
<h3 class="h5">Tilgængelighed</h3>

Ikoner bør tilføjes en `alt` tekst til elementet, der beskriver ikonet, så skærmlæsere kan læse ikonet op.

I tilfælde, hvor ikonet ikke skal læses op, tilføj da attributten `aria-hidden="true"`. Denne attribut vil gøre ikonet usynligt for skærmlæsere.

Dekorative ikoner bør undgås, men hvis de bruges skal de ikke beskrives eller have “alt” tekst, da de ikke bærer nogen betydning eller er vigtige for brugeren.

Da Internet Explorer sætter fokus på svg elementer bør `focusable="false"` tilføjes, således at der ikke længeres sættes fokus på ikonet med tab-tasten.<br/>Bemærk, at `tabindex="-1"` på nuværende tidspunkt ikke understøttes på SVG elementer i Internet Explorer, hvorfor `focusable="false"` bruges i stedet.

## Retningslinjer

Ikoner kan understøtte din kommunikation visuelt. Ikoner kan enten skabe klarhed eller tilføre forvirring. Tilføj kun ikoner, hvis det understøtter kommunikationen, er du i tvivl så vælg tekst alene. Hvorvidt du skal anvende et ikon eller ej afhænger i høj grad af konteksten.

<h3 class="h5">Anbefalinger</h3>

- Brug kun ikoner, hvor de understøtter brugerens forståelse af det som kommunikeres.
- Følg gængse konventioner for brug af ikoner, hvis de findes. Fx Hus-ikonet anvendes til “hjem”, som går til en forside. Lup-ikonet, bruges til at indikere en søgemulighed, osv.
- Undgå dekorative ikoner, de bliver let til visuel støj og øger dermed den kognitive belastning.
- Illustrative ikoner skal bruges med omtanke, hvis brugeren ikke forstår ikonet umiddelbart er det oftest bedre at bruge tekst uden ikon.

<h3 class="h5">Illustrative ikoner</h3>

Illustrative ikoner er unikke for en given selvbetjeningsløsning, der giver mening i den givne kontekst, men ikke nødvendigvis i andre sammenhænge.

Ikoner der anvendes illustrativt må ikke ligne eller være de samme som anvendes til navigation, feedback og funktionalitet.

Vi bruger Material Design ikoner som udgangspunkt, men illustrative ikoner kan også tegnes specifikt til en løsning. Gøres dette, anbefaler vi at følge <a href="https://material.io/design/iconography/system-icons.html#" class="icon-link">Material Designs anvisninger for design af ikoner<svg class="icon-svg " focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>.

<h3 class="h5">Links</h3>

<ul class="nobullet-list">
  <li><a href="https://www.nngroup.com/articles/classifying-icons/" class="icon-link">https://www.nngroup.com/articles/classifying-icons/<svg class="icon-svg " focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a></li>
  <li><a href="https://www.nngroup.com/articles/icon-usability/" class="icon-link">https://www.nngroup.com/articles/icon-usability/<svg class="icon-svg " focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a></li>
  <li><a href="https://www.nngroup.com/articles/icon-testing/" class="icon-link">https://www.nngroup.com/articles/icon-testing/<svg class="icon-svg " focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a></li>
</ul>
