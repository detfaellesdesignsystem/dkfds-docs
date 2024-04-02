---
permalink: "/design/typografi/tekst/guidelines/"
parentlink: "/design/typografi/"
redirect_from:
- "/design/typografi/tekst/"
layout: styleguide
category: Styleguide_category
subcategory: Styleguide
title: Tekst
description: Se hvordan tekster anvendes i designsystemet.
headings: Tekst
anchorlinks: true
tags:
- stor tekst
- manchet
- manchet tekst
- brødtekst
- hjælpetekst
- fejlbesked
- fejlmeddelelse
- Linje
- længde
- Linjelængde
- Linjeafstand
- afstand
- linjehøjde
---

{% assign headings = site.data.headings[page.headings] %}

[---- Manchet -------------------------------------]: # 
<h2 id="{{ headings[0].id }}">{{ headings[0].h2 }}</h2>

Du kan bruge en manchet til at introducere et trin eller en sides indhold. Typisk kan du bruge den når og hvor, det giver mening i kontekst for brugerne.

{% include code/preview-box.html component="lead_paragraph" link=false code="/design/typografi/tekst/implementering/#manchet" %}

### Designværdier

{:.table .table--borderless .table--responsive-headers}
| Skrifttype    | Skriftstørrelse | Tekst tykkelse (font-weight) | Tekstfarve |
|---------------|-----------------|------------------------------|------------|
| IBM Plex Sans | 20px            | 400                          | #1a1a1a    |

{:#manchet-retningslinjer}
### Retningslinjer

Hold manchetten kort og præcis, gerne max tre linjer.

Manchet er kun til korte introduktionstekster og ikke til lange informationstekster. Brug brødtekst og lister til yderligere informationstekster.

Brug kun manchet, når og hvor det er nødvendigt. Brug fx ikke manchet, hvis brugeren selv kan afkode siden og begynde at indtaste med det samme.

Typisk starter indtastningsflowet eller en sektion lige under manchet. Hvis det understøtter brugerens gennemførelse af løsningen, kan du godt indsætte brødtekst, lister, links, o.l. efter manchet.

[---- Brødtekst -------------------------------------]: # 
<h2 id="{{ headings[1].id }}">{{ headings[1].h2 }}</h2>

{% include code/preview-box.html component="inlinetext" link=false code="/design/typografi/tekst/implementering/#broedtekst" %}

### Designværdier

{:.table .table--borderless .table--responsive-headers}
| Tekst           | Skrifttype    | Skriftstørrelse | Tekst tykkelse (font-weight) | Tekstfarve |
|-----------------|---------------|-----------------|------------------------------|------------|
| Brødtekst       | IBM Plex Sans | 16px            | 400                          | #1a1a1a    |
| Lille brødtekst | IBM Plex Sans | 14px            | 400                          | #1a1a1a    |
| Fed brødtekst   | IBM Plex Sans | 16px            | 700                          | #1a1a1a    |

{:#broedtekst-retningslinjer}
### Retningslinjer

Undgå "mure af tekst" i din selvbetjeningsløsning: Bruge white space / mellemrum til at skabe luft mellem tekster og øge læsbarheden.

Brug kun fed tekst i meget begrænset omfang: Fx inde i sætninger til at fremhæve særligt centrale tal eller pointer.

Brug ikke fed tekst som overskrift.

Brug ikke understreget tekst, da det ligner links.

Brug ikke kursiv tekst, da det nedsætter læsbarheden.

[---- Hjælpetekst og fejlmeddelelser -------------------------------------]: # 
<h2 id="{{ headings[2].id }}">{{ headings[2].h2 }}</h2>

Kommunikér med og giv feedback til brugeren via hjælpetekster og fejlmeddelelser.

{% include code/preview-box.html component="helptext" link=false code="/design/typografi/tekst/implementering/#hjaelpetekst-og-fejlmeddelelser" %}

### Designværdier

{:.table .table--borderless .table--responsive-headers}
| Tekst                | Skrifttype    | Skriftstørrelse | Tekst tykkelse (font-weight) | Tekstfarve |
|----------------------|---------------|-----------------|------------------------------|------------|
| Hjælpetekst          | IBM Plex Sans | 16px            | 400                          | #747474    |
| Fejlmeddelelse       | IBM Plex Sans | 16px            | 600                          | #CC0000    |

{:#hjaelpetekst-retningslinjer}
### Retningslinjer

Hjælpetekst og fejltekst knytter sig i udpræget grad til formularer. Du kan også anvende dem, hvor der er behov for at hjælpe brugeren med forklaring af et element eller at give feedback på et element.

#### Hjælpetekst
Nogle gange er det nødvendigt at forklare eller eksemplificere en feltoverskrift. Her kan du anvende hjælpetekst. Du kan også bruge hjælpetekst til at forklare, hvorfor du efterspørger særligt følsomme oplysninger. Fx hvis det kan være en barriere for at få et svar fra brugeren.

Brug hjælpetekst til at give uddybende forklaring (fx til at understøtte feltoverskrifter).

Se eksempel på brug af {% include links/component-guideline-link.html linktext="hjælpetekst" %}

#### Fejlmeddelelse

Det er vigtigt for brugerne, at de får feedback på deres handling. Det gælder særligt, når noget fejler og fejltekst er et helt centralt element for formularer. Sørg derfor for, at de er knivskarpe og præcist kommunikerer, hvad fejlen består i, og hvad brugeren skal gøre for at komme videre. Skriv så vidt muligt fejlmeddelelse og vejledning i én og samme sætning.

- Skriv klar og præcis fejltekst i et sprog, som brugeren forstår.
- Vær høflig (“Indtast venligst din adresse”) og vær ikke anklagende (“Du mangler at indtaste din adresse”). Hjælp brugeren med at løse fejlen.
- Skriv ikke tekniske eller fagligt tunge fejltekster og brug ikke “jargon”.
- Placer fejlteksten dér, hvor fejlen forekommer.
- Fejltekst er som udgangspunkt rød. I formularer skal du indikere fejltekst med en rød streg. Andre steder end i formularer skal du indikere fejltekst med et fejlikon.

{:.nobullet-list}
- Se retningslinjer for {% include links/component-guideline-link.html linktext="fejlmeddelelser" %}
- {% include links/external-link.html linktext="Ti gode råd vedrørende fejlmeddelelser i formularer" %}

[---- Billedtekst -------------------------------------]: # 
<h2 id="{{ headings[3].id }}">{{ headings[3].h2 }}</h2>

Forklarende eller beskrivende tekst tilhørende et billede.

{% include code/preview-box.html component="caption" link=false code="/design/typografi/tekst/implementering/#billedtekst" %}

### Designværdier

{:.table .table--borderless .table--responsive-headers}
| Skrifttype    | Skriftstørrelse | Tekst tykkelse (font-weight) | Tekstfarve | Afstand mellem bogstaver |
|---------------|-----------------|------------------------------|------------|--------------------------|
| IBM Plex Sans | 14px            | 400                          | #1A1A1A    | 0.4 px                   |

{:#billedtekst-retningslinjer}
### Retningslinjer

Billedtekst vises under et billede, således at det synligt bemærkes at teksten og billedet hører sammen, samt at teksten ikke nødvendigvis er en del af den øvrige brødtekst.

[---- Stor tekst -------------------------------------]: # 
<h2 id="{{ headings[4].id }}">{{ headings[4].h2 }}</h2>

Stor tekst kan fx bruges til at fremhæve positive eller negative resultater og dermed fremhæve særlige tal eller ord.

{% include code/preview-box.html component="displaytext" link=false code="/design/typografi/tekst/implementering/#stor-tekst" %}

### Designværdier

{:.table .table--borderless .table--responsive-headers}
| Tekst                  | Skrifttype    | Skriftstørrelse | Tekst tykkelse (font-weight) | Tekstfarve |
|------------------------|---------------|-----------------|------------------------------|------------|
| Stor tekst nr. 1       | IBM Plex Sans | 25px            | 500                          | #1a1a1a    |
| Stor tekst nr. 2       | IBM Plex Sans | 21px            | 500                          | #1a1a1a    |
| Stor positiv tekst     | IBM Plex Sans | 21px            | 500                          | #358000    |
| Stor negativ tekst     | IBM Plex Sans | 21px            | 500                          | #CC0000    |

{:#display-retningslinjer}
### Retningslinjer

#### Anvendes til

At fremhæve tal eller ord i særlig grad.

#### Anvendes ikke til

Afsnit af tekst.

Alle tal i en beregning.

Overskrifter.

#### Vejledning

Brug kun stor tekst i meget begrænset omfang og til nøje udvalgte kommunikative formål.

[---- Linjelængde -------------------------------------]: # 
<h2 id="{{ headings[5].id }}">{{ headings[5].h2 }}</h2>

For at sikre optimal læsbarhed er der indsat en maksimal bredde på linjelængden for brød- og manchet i koden til designsystemet.

{% include code/preview-box.html component="line_length" link=false %}

[---- Linjeafstand -------------------------------------]: # 
<h2 id="{{ headings[6].id }}">{{ headings[6].h2 }}</h2>

Linjeafstanden er baseret på teksttypernes linjehøjde.

{% include code/preview-box.html component="line_spacing" link=false %}