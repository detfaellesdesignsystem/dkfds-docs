---
permalink: /design/typografi/overskrifter/
title: Overskrifter
parentlink: /design/typografi/
description: "Overskrifter strukturerer siden, giver overblik og hjælper brugeren og skærmlæseren til at kunne overskue sidens logik og opbygning."
lead: "Overskrifter strukturerer siden, giver overblik og hjælper brugeren og skærmlæseren til at kunne overskue sidens logik og opbygning."
tags:
- h1
- h2
- h3
- h4
- h5
- h6
category: Design_category
type: component
subcategory: Design
layout: styleguide
anchor: true
subnav:
- text: Felt- og tabeloverskrifter
  href: "#felt--og-tabeloverskrifter-label-og-th"
---

Overskriftstyperne har to formål:

- De er sidens indholdsfortegnelse for skærmlæsere.
- De skaber et visuelt hierarki og gør siden overskuelig ved at inddele den i afsnit og underafsnit.

{% include code/preview-iframe.html component="headings" %}

<a href="/kode/typografi/overskrifter/"><svg class="icon-svg inline-svg mr-2" focusable="false" aria-hidden="true"><use xlink:href="#code-tags"></use></svg>Se dokumentationen til udviklere</a>

{:.h3}
## Design

{:.table .table--borderless .table--responsive-headers}
| Tekst        | Skriftype     | Skriftstørrelse | Tekst tykkelse (font-weight) | Tekstfarve |
|--------------|---------------|-----------------|------------------------------|------------|
| Overskrift 1 | IBM Plex Sans | 40px            | 700                          | #1a1a1a    |
| Overskrift 2 | IBM Plex Sans | 30px            | 600                          | #1a1a1a    |
| Overskrift 3 | IBM Plex Sans | 24px            | 600                          | #1a1a1a    |
| Overskrift 4 | IBM Plex Sans | 20px            | 600                          | #1a1a1a    |
| Overskrift 5 | IBM Plex Sans | 16px            | 600                          | #1a1a1a    |
| Overskrift 6 | IBM Plex Sans | 13px            | 500                          | #1a1a1a    |

{:#felt--og-tabeloverskrifter-label-og-th}
## Retningslinjer

Overskrifter er både et visuelt virkemiddel og en struktur i koden, som har betydning for brugere, der anvender skærmlæser. Det er muligt at følge en stringent struktur i overskrifter for skærmlæsere og samtidig tilpasse overskrifternes visuelle udtryk til brugere, der orienterer sig visuelt.

{:.h4}
### Hvornår skal du bruge overskrifter?

Du skal bruge overskrifter til at skabe struktur på din side og gruppere dit indhold i logiske og overskuelige bidder, både for skærmlæsere og visuelt orienterede brugere.

{:.h4}
### Hvornår skal du overveje anden formatering end overskrifter?

Du skal bruge anden formatering end overskrifter, hvis du vil fremhæve eller ændre styling af tekst, som ikke har betydning for strukturen på siden. Brug fx <a href="/komponenter/beskeder/">beskeder til information</a>, <a href="/design/typografi/lister/">fremhæv særlige punkter med punktopstilling</a> eller anvend <a href="/design/typografi/tekst/#stor-tekst">stor tekst</a> til at markere udvalgte dele af teksten.

{:.h4}
### Hvis du vil vide mere

<ul class="nobullet-list">
    <li><a href="https://www.w3.org/TR/WCAG20-TECHS/H42.html" class="icon-link">H42: Using h1-h6 to identify headings<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a></li>
    <li><a href="https://www.w3.org/WAI/tutorials/page-structure/headings/" class="icon-link">Page-structure - headings<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a></li>
</ul>

{:.h3 #retningslinjer}
## Felt- og tabeloverskrifter (label og th)

{:.font-lead}
I eksemplet nedenfor viser vi, hvordan overskrifter til felter og overskrifter i tabeller ser ud. Overskrifter til felter og tabeller er ens, men der er forskel i koden.

{% include code/preview.html component="labels" %}

{:.nobullet-list}
- <a href="/komponenter/felter/"><svg class="icon-svg inline-svg mr-2" focusable="false" aria-hidden="true"><use xlink:href="#code-tags"></use></svg>Se dokumentationen om felter til udviklere</a>
- <a href="/komponenter/tables/"><svg class="icon-svg inline-svg mr-2" focusable="false" aria-hidden="true"><use xlink:href="#code-tags"></use></svg>Se dokumentationen om tabeller til udviklere</a>

{:.h4}
### Design

{:.table .table--borderless .table--responsive-headers}
| Tekst                  | Skriftype     | Skriftstørrelse | Tekst tykkelse (font-weight) | Tekstfarve |
|------------------------|---------------|-----------------|------------------------------|------------|
| Feltoverskrift (label) | IBM Plex Sans | 16px            | 600                          | #1a1a1a    |
| Kolonneoverskrift (th) | IBM Plex Sans | 16px            | 600                          | #1a1a1a    |

{:#label-retningslinjer}
### Retningslinjer

#### Feltoverskrift (label)

Du kan betragte formularer som en dialog med brugerne, hvor feltoverskriften er dit spørgsmål til brugeren og feltet, som brugerne kan skrive i, er svaret de giver dig.              

- Feltoverskrifter er dine spørgsmål til brugeren.  
- Sørg for at brugeren kan forstå, hvad du beder om svar på.
- Undgå lange og komplekse feltoverskrifter.
- Stil kun ét spørgsmål i en feltoverskrift.
- Feltoverskrifter placeres altid over feltet, som anvist under formularelementer.
- Alle felter skal have en feltoverskrift.

<a href="/komponenter/felter/">Se eksempel på brug af feltoverskrift (label)</a>

#### Tabeloverskrift (th)

Tabeloverskrifter er visuelt ens med feltoverskrifter. Du kan bruge dem til at skabe overblik over rækker eller kolonner af data i tabeller og lister.

Tabeloverskrifter beskriver, hvad indholdet i en række eller kolonne angiver.

<a href="/komponenter/tables/">Se eksempel på brug af tabeloverskrift (th)</a>
