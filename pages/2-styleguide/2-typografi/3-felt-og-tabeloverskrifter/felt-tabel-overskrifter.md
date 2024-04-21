---
permalink: "/design/typografi/felt-tabel-overskrifter/"
parentlink: "/design/typografi/"
layout: styleguide
category: Styleguide_category
subcategory: Styleguide
title: Felt- og tabeloverskrifter
description:
tags:
---

{% include anchorlinks.html headings="Felt_og_tabeloverskrifter" %}

## Feltoverskrifter {#{% include create-id.html heading="Feltoverskrifter" %}}

{% include code/preview.html component="labels" %}

{:.nobullet-list}
- Se dokumentationen om {% include links/component-code-link.html linktext="implementeringen af inputfelter" %}.

### Designværdier

{:.table .table--borderless .table--responsive-headers}
| Skrifttype    | Skriftstørrelse | Tekst tykkelse (font-weight) | Tekstfarve |
|---------------|-----------------|------------------------------|------------|
| IBM Plex Sans | 16px            | 600                          | #1a1a1a    |

{:#label-retningslinjer}
### Retningslinjer

Du kan betragte formularer som en dialog med brugerne, hvor feltoverskriften er dit spørgsmål til brugeren og feltet, som brugerne kan skrive i, er svaret de giver dig.              

- Feltoverskrifter er dine spørgsmål til brugeren.  
- Sørg for at brugeren kan forstå, hvad du beder om svar på.
- Undgå lange og komplekse feltoverskrifter.
- Stil kun ét spørgsmål i en feltoverskrift.
- Feltoverskrifter placeres altid over feltet, som anvist under formularelementer.
- Alle felter skal have en feltoverskrift.

Se dokumentationen om {% include links/component-guideline-link.html linktext="inputfelter" %}.

## Tabeloverskrifter {#{% include create-id.html heading="Tabeloverskrifter" %}}

{% include code/preview.html component="labels-table" %}

{:.nobullet-list}
- Se dokumentationen om {% include links/component-code-link.html linktext="implementeringen af tabeller" %}.

### Designværdier

{:.table .table--borderless .table--responsive-headers}
| Skrifttype    | Skriftstørrelse | Tekst tykkelse (font-weight) | Tekstfarve |
|---------------|-----------------|------------------------------|------------|
| IBM Plex Sans | 16px            | 600                          | #1a1a1a    |

{:#tabeloverskrift-retningslinjer}
### Retningslinjer

Tabeloverskrifter er visuelt ens med feltoverskrifter. Du kan bruge dem til at skabe overblik over rækker eller kolonner af data i tabeller og lister.

Tabeloverskrifter beskriver, hvad indholdet i en række eller kolonne angiver.

Se dokumentationen om {% include links/component-guideline-link.html linktext="tabeller" %}.
