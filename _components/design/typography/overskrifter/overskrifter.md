---
permalink: "/design/typografi/overskrifter/guidelines/"
parentlink: "/design/typografi/"
redirect_from:
- "/design/typografi/overskrifter/"
layout: styleguide
category: Styleguide_category
subcategory: Styleguide
title: Overskrifter
lead: Overskrifter strukturerer siden, giver overblik og hjælper brugeren og skærmlæseren
  til at kunne overskue sidens logik og opbygning.
component: "headings"
componentTitle: "Oversigt over overskriftshierarki"
anchor: true
subnav:
- text: Designværdier
  href: "#designvaerdier"
- text: Sådan bruges overskrifter
  href: "#retningslinjer"
- text: Overskrift som link
  href: "#overskrift-som-link"
- text: Overskrift i søgeresultat
  href: "#overskrift-i-soegeresultat"
- text: Løsningstitel i header
  href: "#loesnings-titel"
- text: Subheading
  href: "#subheading"
description: Overskrifter strukturerer siden, giver overblik og hjælper brugeren og
  skærmlæseren til at kunne overskue sidens logik og opbygning.
tags:
- h1
- h2
- h3
- h4
- h5
- h6
---

Overskriftstyperne har to formål:

- De er sidens indholdsfortegnelse for skærmlæsere.
- De skaber et visuelt hierarki og gør siden overskuelig ved at inddele den i afsnit og underafsnit.

{:#designvaerdier}
## Designværdier

{:.table .table--borderless .table--responsive-headers}
| Tekst        | Skrifttype    | Skriftstørrelse | Linjehøjde | Teksttykkelse   | Tekstfarve | 
|--------------|---------------|-----------------|------------|-----------------|------------|
| Overskrift 1 | IBM Plex Sans | 48px            | 1.17       | 700             | #1a1a1a    |
| Overskrift 2 | IBM Plex Sans | 32px            | 1.25       | 600             | #1a1a1a    |
| Overskrift 3 | IBM Plex Sans | 24px            | 1.33       | 600             | #1a1a1a    |
| Overskrift 4 | IBM Plex Sans | 20px            | 1.4        | 600             | #1a1a1a    |
| Overskrift 5 | IBM Plex Sans | 16px            | 1.5        | 600             | #1a1a1a    |
| Overskrift 6 | IBM Plex Sans | 12px            | 1.67       | 500             | #1a1a1a    |

{:#retningslinjer}
## Sådan bruges overskrifter

Overskrifter er både et visuelt virkemiddel og en struktur i koden, som har betydning for brugere, der anvender skærmlæser. Det er muligt at følge en stringent struktur i overskrifter for skærmlæsere og samtidig tilpasse overskrifternes visuelle udtryk til brugere, der orienterer sig visuelt.

### Hvornår skal du bruge overskrifter?

Du skal bruge overskrifter til at skabe struktur på din side og gruppere dit indhold i logiske og overskuelige bidder, både for skærmlæsere og visuelt orienterede brugere.

### Hvornår skal du overveje anden formatering end overskrifter?

Du skal bruge anden formatering end overskrifter, hvis du vil fremhæve eller ændre styling af tekst, som ikke har betydning for strukturen på siden. Brug fx {% include links/component-guideline-link.html linktext="beskeder" %} til information, brug {% include links/internal-link.html linktext="lister" %} til at fremhæve særlige punkter med punktopstilling eller anvend {% include links/internal-link.html linktext="stor tekst" %} til at markere udvalgte dele af teksten.

### Hvis du vil vide mere

{:.nobullet-list}
- {% include links/external-link.html linktext="H42: Using h1-h6 to identify headings" %}
- {% include links/external-link.html linktext="Page-structure - headings" %}

{:#overskrift-som-link}
## Overskrift som link

{% include code/preview.html component="heading-link" %}

### Anvendes til

Overblikslinks kan anvendes på overblikssider, hvor brugeren kan navigere til forskellige indberetninger i samme selvbetjeningsløsning. Overblikslinks kan også anvendes til at navigere til forskellige sektioner i en løsning.

### Anvendes ikke til

Må ikke bruges til at fremhæve links eller som erstatning for {% include links/internal-link.html linktext="standard links" %} i selvbetjeningsløsninger.

### Vejledning

Et godt eksempel på brugen af overblikslinks er fx {% include links/external-link.html linktext="forsiden af gov.uk" %}, hvor de anvendes sammen med tekst til at give brugeren en generel ide om omfanget af indholdet i løsningen.


{:#overskrift-i-soegeresultat}
## Overskrift i søgeresultat

{% include code/preview.html component="search-link" %}

### Anvendes til

Søgeresultatlinks bruges til at skabe en overskuelig struktur i søgeresultater. 

### Anvendes ikke til

Må ikke anvendes til at fremhæve links i tekst eller som erstatning for {% include links/internal-link.html linktext="standard links" %}.

### Vejledning

Et godt eksempel på brugen af søgeresultatlinks er googles søgeresultatside.


{:#loesnings-titel}
## Løsningstitel i header

{% include code/preview.html component="solutionheading" %}

### Anvendes til

Anvendes i header som titel på hele løsningen. Titlen bør derved være den samme på hver side.

### Anvendes ikke til
Anvendes ikke andre steder end i headeren.

{:#subheading}
## Subheading

{% include code/preview.html component="subheading" %}

### Anvendes til

Anvendes til at tilføje sekundær tekst til en overskrift.

### Anvendes ikke til

Må ikke anvendes som en enkeltstående overskrift.
