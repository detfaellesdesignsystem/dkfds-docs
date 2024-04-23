---
permalink: "/styleguide/typografi/overskrifter/"
parentlink: "/styleguide/typografi/"
redirect_from:
- "/kode/typografi/overskrifter/"
- "/design/typografi/overskrifter/"
layout: styleguide
category: Styleguide_category
subcategory: Styleguide
title: Overskrifter
lead: Overskrifter strukturerer siden, giver overblik og hjælper brugeren og skærmlæseren
  til at kunne overskue sidens logik og opbygning.
description: Overskrifter strukturerer siden, giver overblik og hjælper brugeren og
  skærmlæseren til at kunne overskue sidens logik og opbygning.
tags:
- h1
- h2
- h3
- h4
- h5
- h6
tabs: "Retningslinjer, kode"
---

{% include tabs.html guidelines=true code=true %}

{% include code/preview-box.html component="headings" title="Oversigt over overskriftshierarki" classes="intro-example" %}

{% include anchorlinks.html guidelines="Overskrifter" code="Overskrifter_Kode" %}

<!--split-->

## Sådan bruges overskrifter {#{% include create-id.html heading="Sådan bruges overskrifter" %}}

Overskriftstyperne har to formål:

- De skaber et visuelt hierarki på siden.
- De fungerer som sidens indholdsfortegnelse for skærmlæsere.

En god struktur i sidens overskrifter er altafgørende for, at brugere af skærmlæser kan forstå og navigere i indholdet på siden. Det er muligt at følge en stringent struktur i overskrifter for skærmlæsere og samtidig tilpasse overskrifternes visuelle udtryk til brugere, der orienterer sig visuelt.

### Hvornår skal du bruge overskrifter?

Du skal bruge overskrifter til at skabe struktur på din side og gruppere dit indhold i logiske og overskuelige bidder, både for skærmlæsere og visuelt orienterede brugere.

### Hvornår skal du overveje anden formatering end overskrifter?

Du skal bruge anden formatering end overskrifter, hvis du vil fremhæve eller ændre styling af tekst, som ikke har betydning for strukturen på siden. Brug fx {% include links/component-guideline-link.html linktext="beskeder" %} til information, brug {% include links/internal-link.html linktext="lister" %} til at fremhæve særlige punkter med punktopstilling eller anvend {% include links/internal-link.html linktext="stor tekst" %} til at markere udvalgte dele af teksten.

### Hvis du vil vide mere

{:.nobullet-list}
- {% include links/external-link.html linktext="H42: Using h1-h6 to identify headings" %}
- {% include links/external-link.html linktext="Page-structure - headings" %}

## Designværdier {#{% include create-id.html heading="Designværdier" %}}

Designværdierne nedenfor er angivet i px for læsbarhedens skyld. Vær opmærksom på, at det anbefales i ens stylesheet at bruge relative værdier til skriftstørrelse og en “unitless” talværdi for linjehøjden. I designsystemets stylesheet er overskrifternes skriftstørrelse defineret med “rem”.

{:.table .table--borderless .table--responsive-headers}
| Tekst        | Skrifttype    | Skriftstørrelse | Linjehøjde | Teksttykkelse   | Tekstfarve | 
|--------------|---------------|-----------------|------------|-----------------|------------|
| Overskrift 1 | IBM Plex Sans | 48px            | 60px       | Bold (700)      | #1a1a1a    |
| Overskrift 2 | IBM Plex Sans | 32px            | 40px       | Semi-bold (600) | #1a1a1a    |
| Overskrift 3 | IBM Plex Sans | 24px            | 32px       | Semi-bold (600) | #1a1a1a    |
| Overskrift 4 | IBM Plex Sans | 20px            | 28px       | Semi-bold (600) | #1a1a1a    |
| Overskrift 5 | IBM Plex Sans | 16px            | 24px       | Semi-bold (600) | #1a1a1a    |
| Overskrift 6 | IBM Plex Sans | 14px            | 20px       | Medium (500)    | #1a1a1a    |

## Overskrift som link {#{% include create-id.html heading="Overskrift som link" %}}

{% include code/preview.html component="heading-link" %}

### Anvendes til

Overblikslinks kan anvendes på overblikssider, hvor brugeren kan navigere til forskellige indberetninger i samme selvbetjeningsløsning. Overblikslinks kan også anvendes til at navigere til forskellige sektioner i en løsning.

### Anvendes ikke til

Må ikke bruges til at fremhæve links eller som erstatning for {% include links/internal-link.html linktext="standard links" %} i selvbetjeningsløsninger.

### Vejledning

Et godt eksempel på brugen af overblikslinks er fx {% include links/external-link.html linktext="forsiden af gov.uk" %}, hvor de anvendes sammen med tekst til at give brugeren en generel ide om omfanget af indholdet i løsningen.

## Overskrift i søgeresultat {#{% include create-id.html heading="Overskrift i søgeresultat" %}}

{% include code/preview.html component="search-link" %}

### Anvendes til

Søgeresultatlinks bruges til at skabe en overskuelig struktur i søgeresultater. 

### Anvendes ikke til

Må ikke anvendes til at fremhæve links i tekst eller som erstatning for {% include links/internal-link.html linktext="standard links" %}.

### Vejledning

Et godt eksempel på brugen af søgeresultatlinks er googles søgeresultatside.

## Løsningstitel i header {#{% include create-id.html heading="Løsningstitel i header" %}}

{% include code/preview.html component="solutionheading" %}

### Anvendes til

Anvendes i header som titel på hele løsningen. Titlen bør derved være den samme på hver side.

### Anvendes ikke til

Anvendes ikke andre steder end i headeren.

## Subheading {#{% include create-id.html heading="Subheading" %}}

{% include code/preview.html component="subheading" %}

### Anvendes til

Anvendes til at tilføje sekundær tekst til en overskrift.

### Anvendes ikke til

Må ikke anvendes som en enkeltstående overskrift.

<!--split-->

## HTML Struktur {#{% include create-id.html heading="HTML Struktur" append="-kode" %}}

{% include code/syntax.html component="headings" copybutton=true %}

Hold en stram overskriftsstruktur i koden. En `<h3>` altid er under en `<h2>`, en `<h4>` under en `<h3>` osv. `<h1>` er altid øverst i hierarkiet.  

Lad være med at springe overskriftsled over. Hvis du visuelt vil have et andet udtryk, så brug en klasse til at style overskriften.

### Eksempel på en overskrift, der ligner et andet niveau

{% include code/syntax.html component="heading" link=true copybutton=true %}

## Subheading {#{% include create-id.html heading="Subheading" append="-kode" %}}

{% include code/preview-box.html component="subheading" link=false title="Eksempel på subheading" %}

Læs retningslinjer for {% include links/internal-link.html linktext="subheadings" %}.

### HTML Struktur

{% include code/syntax.html component="subheading" copybutton=true %}
