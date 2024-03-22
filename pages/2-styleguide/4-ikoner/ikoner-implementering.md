---
permalink: "/design/ikoner/implementering/"
guidelinelink: "/design/ikoner/guidelines/"
redirect_from:
- "/kode/ikoner/"
layout: styleguide
category: Styleguide_category
subcategory: Styleguide
title: Ikoner
lead: Ikoner benyttes til visuelt at understrege en handling eller en information. Ikoner kan underbygge et budskab eller gøre det lettere at afkode en side. Ikoner kan dog sjældent erstatte tekst.
description: Sådan bruger du ikoner med FDS.
headings: Ikoner_Kode
anchorlinks: true
preview: ikoner
previewcomponent: "icons--svg"
tags:
- icon
- svg
- svg use
- inline svg
---

{% assign headings = site.data.headings[page.headings] %}

[---- Ikoner indsat som svg med ikonsamling (anbefalet) -------------------------------------]: # 
<h2 id="{{ headings[0].id }}">{{ headings[0].h2 }}</h2>

Ikonsamlingen gør, at du kan indsætte ikoner med `<svg>`. Før dette virker, er du nødt til at implementere ikonsamlingen, der skal indsættes på hver side i løsningen.

### Implementering

Placér ikonsamlingen i toppen af `<body>` i et område, der er skjult:

{% highlight html %}
<body>
    <div class="hide-base-svg">
        <svg xmlns="http://www.w3.org/2000/svg">
            <!-- Ikonsamling -->
        </svg>
    </div>
    ...
</body>
{% endhighlight %}

Ikonerne i ikonsamlingen er defineret ved hjælp af `<symbol>`, der hver har et unikt `id`. Eksempelvis er ikonet for "sortér tabel (faldende)" defineret ved:

{% highlight html %}
<symbol id="sort-table-descending" viewBox="0 0 24 24"><path d="M6.1,13.5l5.9,5.9l5.9-5.9H6.1z"/></symbol>
{% endhighlight %}

Det anbefales at indsætte alle ikoner i samlingen på hver side, men du kan også vælge kun at medtage de ikoner, der er relevante for den enkelte side. Du kan se den fulde ikonsamling ved at åbne nedenstående eksempel i et nyt vindue.

{% include code/syntax.html component="simple-base-svg" link=true url="ikon-samling" %}

### Anvendelse

For at anvende et ikon skal du indsætte det ved hjælp af `<svg>` og referere til det korrekte `id` i ikonsamlingen. For eksempel skal ikonet for "print (udskriv)" indsættes med:

{% include code/syntax.html component="icon" link=true %}

#### Tilpasning af ikonet til teksten

Tilføj klassen `inline-svg` på ikoner, som skal fremgå i en tekst. Ikonet vil da tilpasse sig linjehøjden. Se eksemplet herunder:

Der er et ikon <svg class="icon-svg inline-svg" focusable="false" aria-hidden="true"><use xlink:href="#language"></use></svg> midt i denne sætning.

[---- Ikoner indsat med klasser -------------------------------------]: # 
<h2 id="{{ headings[1].id }}">{{ headings[1].h2 }}</h2>

Ikoner kan indsættes ved hjælp af klasser på følgende måde:

{% include code/syntax.html component="icon-class" link=true %}

Denne metode har nogle begrænsninger, hvorfor vi anbefaler, at man benytter ikonsamlingen i stedet for.

[---- Tilgængelighed -------------------------------------]: # 
<h2 id="{{ headings[2].id }}">{{ headings[2].h2 }}</h2>

Ikoner bør tilføjes en `aria-label` tekst til elementet, der beskriver ikonet, så skærmlæsere kan læse ikonet op, såfremt ikonet har betydning for forståelsen.

Dekorative ikoner bør undgås, men hvis de bruges, skal de ikke beskrives af skærmlæsere eller have beskrivende attributter, da de ikke bærer nogen betydning eller er vigtige for brugeren. Hvis ikonet ikke skal læses op, tilføj da attributten `aria-hidden="true"`. Denne attribut vil gøre ikonet usynligt for skærmlæsere.

Da Internet Explorer sætter fokus på svg-elementer, bør `focusable="false"` tilføjes, således at der ikke længeres sættes fokus på ikonet med tastaturet.

