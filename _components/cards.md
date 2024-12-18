---
permalink: "/komponenter/cards/"
redirect_from:
- "/kode/komponenter/cards/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Cards
lead: Cards anvendes som en visuel afgrænsning af indhold eller interaktionselementer, der omhandler samme emne. De kan også anvendes til navigation.
description: "Cards anvendes som en visuel afgrænsning af indhold eller interaktionselementer, der omhandler samme emne. De kan også anvendes til navigation."
tags:
tabs: "Retningslinjer, kode"
---

{% include tabs.html guidelines=true code=true %}

{% include code/preview-box.html component="card-single" title="Eksempel på card" classes="intro-example" %}

{% include anchorlinks.html guidelines="Cards" code="Cards_Kode" %}

<!--split-->

## Sådan bruges komponenten {#{% include create-id.html heading="Sådan bruges komponenten" %}}

### Anvendes til

Brug cards til at gruppere indhold og funktionalitet, der adskiller sig fra sidens øvrige indhold.

### Anvendes ikke til

Brug ikke cards til det primære indhold på en løsning, men derimod til indhold, der kan stå og forstås alene og fortsat være del af den samlede løsning.

Brug ikke cards udelukkende for at opnå et bestemt visuelt udtryk. Cards skal bruges, når de kommunikerer indholdet bedst muligt. 

Brug ikke cards til at gruppere formularelementer. Brug i stedet blot {% include links/internal-link.html linktext="overskrifter" %} eller {% include links/component-guideline-link.html linktext="trinindikator" %}.

### Vejledning

Undgå lange tekster i cards - skriv kort og præcist.

Sørg for, at cards fremtræder roligt i sidens layout og ikke bryder brugerens naturlige aflæsning af siden. Brug designsystemets grid til at bestemme bredden på cards. Cards, der står ved siden af hinanden, bør have samme højde. 

Brug ikke horisontalt sidestillede cards til lange lister af indhold, som brugeren skal lede efter noget bestemt i (Laubheimer, 2016). Anvend i stedet et layout, hvor indholdet står vertikalt, fx vha. lange cards.

Undgå at blande navigationscards, hvor hele cardet er klikbart, med andre cards i samme liste. Brugeren kan blive forvirret over, hvad der kan klikkes på.

Cards skal altid have en titel og en brødtekst. De kan også indeholde andre komponenter, såsom:

- Subheading
- Links
- Knapper
- Illustration, fx infografik eller billede. Husk at tilføje en sigende alt-tekst til illustrationer, der har en betydning for sidens indhold. Rent dekorative billeder skal have et tomt alt tag, dvs. alt=””, da de således springes over af skærmlæsere.

{% include dos-donts-box.html component="cards-dos-donts" %}

## Varianter {#{% include create-id.html heading="Varianter" %}}

### Cardbredder {#{% include create-id.html heading="Cardbredder" %}}

Cards kan have forskellige bredder afhængigt at indholdet og sidens generelle opbygning. 

Anvend et responsivt grid til at definere bredden på cards. Således kan fx 2, 3 eller 4 cards stå ved siden af hinanden på større skærme, mens de skalerer og fx står under hinanden på mindre skærme. Brugen af grid er med til at skabe en visuel ro i, hvordan cards struktureres på siden.

### Card med billede {#{% include create-id.html heading="Card med billede" %}}

{% include code/preview-box.html component="cards-with-images" title="Eksempel på cards med billeder" code="/komponenter/cards/#card-med-billede-kode" %}

### Card uden billede {#{% include create-id.html heading="Card uden billede" %}}

{% include code/preview-box.html component="cards-without-images" title="Eksempel på cards uden billeder" code="/komponenter/cards/#card-uden-billede-kode" %}

### Navigationscard {#{% include create-id.html heading="Navigationscard" %}}

Navigationscard leder brugeren videre til en anden side. Hele cardet er klikbart og markeres med understreget titel og pileikon i nederste højre hjørne. 

Hvis navigationscardet linker til en ekstern side, der åbner i en ny fane, vises ekternt link-ikon nederst i højre hjørne i stedet for pilen.

Navigationscards kan både være med og uden billede.

{% include code/preview-box.html component="cards-navigation" title="Eksempel på cards til navigation" code="/komponenter/cards/#navigationscard-kode" %}

### Langt card {#{% include create-id.html heading="Langt card" %}}

I lange cards placeres evt. billede, tekst og pil-ikon i et horisontalt layout. Disse cards egner sig som hovedregel til cards med korte tekster og/eller cards, der på desktop har en bredde over seks kolonner (se grid) eller 500px.

Både almindelige cards og navigationscards kan være lange cards.

{% include code/preview-box.html component="cards-long" title="Eksempel på lange cards" code="/komponenter/cards/#langt-card-kode" %}

## Se komponenten i eksempelløsninger {#{% include create-id.html heading="Se komponenten i eksempelløsninger" %}}

{:.nobullet-list}
- {% include links/demo-link.html linktext="Sagsoversigt: Find sag" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Dashboard" returnID="eksempelloesninger" %}

## Referencer {#{% include create-id.html heading="Referencer" %}}

{:.nobullet-list}
- {% include links/external-link.html linktext="Andrew Coyle (2020): 8 rules to help you design a better card user interface" %}
- {% include links/external-link.html linktext="Page Laubheimer (2016): UI Component Definition" %}

<!--split-->

## Installation {#{% include create-id.html heading="Installation" append="-kode" %}}

### HTML Struktur

{% include code/syntax.html component="card-single" copybutton=true %}

TODO: Cards kan bestå af en header, et tekstområde, et indholdsområde og et aktionsområde, som i øvrigt kan ligge i en footer. Du kan frit sammensætte cards efter dit eget behov, men der er regler for, hvad du kan placere i de forskellige områder.

## Cardbredder {#{% include create-id.html heading="Cardbredder" append="-kode" %}}

TODO: Brug grid og/eller sæt bredden på cards

## Card med billede {#{% include create-id.html heading="Card med billede" append="-kode" %}}

{% include code/syntax.html component="cards-with-images" link=true copybutton=true guidelines="/komponenter/cards/#card-med-billede" %}

## Card uden billede {#{% include create-id.html heading="Card uden billede" append="-kode" %}}

{% include code/syntax.html component="cards-without-images" link=true copybutton=true guidelines="/komponenter/cards/#card-uden-billede" %}

## Navigationscard {#{% include create-id.html heading="Navigationscard" append="-kode" %}}

{% include code/syntax.html component="cards-navigation" link=true copybutton=true guidelines="/komponenter/cards/#navigationscard" %}

## Langt card {#{% include create-id.html heading="Langt card" append="-kode" %}}

{% include code/syntax.html component="cards-long" link=true copybutton=true guidelines="/komponenter/cards/#langt-card" %}