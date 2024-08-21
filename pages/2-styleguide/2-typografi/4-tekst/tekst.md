---
permalink: "/styleguide/typografi/tekst/"
parentlink: "/styleguide/typografi/"
redirect_from:
- "/kode/typografi/tekst/"
- "/design/typografi/tekst/"
layout: styleguide
category: Styleguide_category
subcategory: Styleguide
title: Tekst
description: Se hvordan tekster anvendes i designsystemet.
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
tabs: "Retningslinjer, kode"
---

{% include tabs.html guidelines=true code=true %}

{% include anchorlinks.html guidelines="Tekst" code="Tekst_Kode" %}

<!--split-->

## Manchet {#{% include create-id.html heading="Manchet" %}}

Du kan bruge en manchet til at introducere et trin eller en sides indhold. Typisk kan du bruge den når og hvor, det giver mening i kontekst for brugerne.

### Designværdier

<div class="table--responsive-scroll">
  <table class="table table--borderless">
    <thead>
      <tr>
        <td></td>
        <th scope="col">Skriftstørrelse</th>
        <th scope="col">Linjehøjde</th>
        <th scope="col">Teksttykkelse</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"><span class="font-lead">Manchet</span></th>
        <td>20px</td>
        <td>32px</td>
        <td>Regular (400)</td>
      </tr>
    </tbody>
  </table>
</div>

{:#manchet-retningslinjer}
### Retningslinjer

Hold manchetten kort og præcis, gerne max tre linjer.

Manchet er kun til korte introduktionstekster og ikke til lange informationstekster. Brug brødtekst og lister til yderligere informationstekster.

Brug kun manchet, når og hvor det er nødvendigt. Brug fx ikke manchet, hvis brugeren selv kan afkode siden og begynde at indtaste med det samme.

Typisk starter indtastningsflowet eller en sektion lige under manchet. Hvis det understøtter brugerens gennemførelse af løsningen, kan du godt indsætte brødtekst, lister, links, o.l. efter manchet.

## Brødtekst {#{% include create-id.html heading="Brødtekst" %}}

### Designværdier

<div class="table--responsive-scroll">
  <table class="table table--borderless">
    <thead>
      <tr>
        <td></td>
        <th scope="col">Skriftstørrelse</th>
        <th scope="col">Linjehøjde</th>
        <th scope="col">Teksttykkelse</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"><span class="mt-0 mb-0">Brødtekst</span></th>
        <td>16px</td>
        <td>24px</td>
        <td>Regular (400)</td>
      </tr>
      <tr>
        <th scope="row"><span class="small-text">Lille brødtekst</span></th>
        <td>14px</td>
        <td>20px</td>
        <td>Regular (400)</td>
      </tr>
      <tr>
        <th scope="row"><span class="bold">Fed brødtekst</span></th>
        <td>16px</td>
        <td>24px</td>
        <td>Bold (700)</td>
      </tr>
    </tbody>
  </table>
</div>

{:#broedtekst-retningslinjer}
### Retningslinjer

Undgå "mure af tekst" i din selvbetjeningsløsning: Bruge white space / mellemrum til at skabe luft mellem tekster og øge læsbarheden.

Brug kun fed tekst i meget begrænset omfang: Fx inde i sætninger til at fremhæve særligt centrale tal eller pointer.

Brug ikke fed tekst som overskrift.

Brug ikke understreget tekst, da det ligner links.

Brug ikke kursiv tekst, da det nedsætter læsbarheden.

## Hjælpetekst {#{% include create-id.html heading="Hjælpetekst" %}}

<div class="table--responsive-scroll">
  <table class="table table--borderless">
    <thead>
      <tr>
        <td></td>
        <th scope="col">Skriftstørrelse</th>
        <th scope="col">Linjehøjde</th>
        <th scope="col">Teksttykkelse</th>
        <th scope="col">Tekstfarve</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"><span class="form-hint">Hjælpetekst</span></th>
        <td>16px</td>
        <td>24px</td>
        <td>Regular (400)</td>
        <td>#747474</td>
      </tr>
    </tbody>
  </table>
</div>

{:#hjaelpetekst-retningslinjer}
### Retningslinjer

Nogle gange er det nødvendigt at forklare eller eksemplificere en feltoverskrift. Her kan du anvende hjælpetekst. Du kan også bruge hjælpetekst til at forklare, hvorfor du efterspørger særligt følsomme oplysninger. Fx hvis det kan være en barriere for at få et svar fra brugeren.

Brug hjælpetekst til at give uddybende forklaring (fx til at understøtte feltoverskrifter).

Se eksempel på brug af {% include links/component-guideline-link.html linktext="hjælpetekst" %}

## Fejlmeddelelser {#{% include create-id.html heading="Fejlmeddelelser" %}}

<div class="table--responsive-scroll">
  <table class="table table--borderless">
    <thead>
      <tr>
        <td></td>
        <th scope="col">Skriftstørrelse</th>
        <th scope="col">Linjehøjde</th>
        <th scope="col">Teksttykkelse</th>
        <th scope="col">Tekstfarve</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"><span class="form-error-message">Fejlmeddelelse</span></th>
        <td>16px</td>
        <td>24px</td>
        <td>Semi-bold (600)</td>
        <td>#CC0000</td>
      </tr>
    </tbody>
  </table>
</div>

{:#fejlmeddelelser-retningslinjer}
### Retningslinjer

Det er vigtigt for brugerne, at de får feedback på deres handling. Det gælder særligt, når noget fejler og fejltekst er et helt centralt element for formularer. Sørg derfor for, at de er knivskarpe og præcist kommunikerer, hvad fejlen består i, og hvad brugeren skal gøre for at komme videre. Skriv så vidt muligt fejlmeddelelse og vejledning i én og samme sætning.

- Skriv klar og præcis fejltekst i et sprog, som brugeren forstår.
- Vær høflig (“Indtast venligst din adresse”) og vær ikke anklagende (“Du mangler at indtaste din adresse”). Hjælp brugeren med at løse fejlen.
- Skriv ikke tekniske eller fagligt tunge fejltekster og brug ikke “jargon”.
- Placer fejlteksten dér, hvor fejlen forekommer.
- Fejltekst er som udgangspunkt rød. I formularer skal du indikere fejltekst med en rød streg. Andre steder end i formularer skal du indikere fejltekst med et fejlikon.

{:.nobullet-list}
- Se retningslinjer for {% include links/component-guideline-link.html linktext="fejlmeddelelser" %}
- {% include links/external-link.html linktext="Ti gode råd vedrørende fejlmeddelelser i formularer" %}

## Billedtekst {#{% include create-id.html heading="Billedtekst" %}}

Forklarende eller beskrivende tekst tilhørende et billede.

### Designværdier

<div class="table--responsive-scroll">
  <table class="table table--borderless">
    <thead>
      <tr>
        <td></td>
        <th scope="col">Skriftstørrelse</th>
        <th scope="col">Linjehøjde</th>
        <th scope="col">Teksttykkelse</th>
        <th scope="col">Letter-spacing</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"><span class="figcaption">Billedtekst</span></th>
        <td>14px</td>
        <td>24px</td>
        <td>Regular (400)</td>
        <td>0.4px</td>
      </tr>
    </tbody>
  </table>
</div>

{:#billedtekst-retningslinjer}
### Retningslinjer

Billedtekst vises under et billede, således at det synligt bemærkes at teksten og billedet hører sammen, samt at teksten ikke nødvendigvis er en del af den øvrige brødtekst.

## Stor tekst {#{% include create-id.html heading="Stor tekst" %}}

Stor tekst kan fx bruges til at fremhæve positive eller negative resultater og dermed fremhæve særlige tal eller ord.

### Designværdier

<div class="table--responsive-scroll">
  <table class="table table--borderless">
    <thead>
      <tr>
        <td></td>
        <th scope="col">Skriftstørrelse</th>
        <th scope="col">Linjehøjde</th>
        <th scope="col">Teksttykkelse</th>
        <th scope="col">Tekstfarve</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"><span class="displayheading-1">Stor tekst nr. 1</span></th>
        <td>24px</td>
        <td>36px</td>
        <td>Medium (500)</td>
        <td>#1A1A1A</td>
      </tr>
      <tr>
        <th scope="row"><span class="displayheading-2">Stor tekst nr. 2</span></th>
        <td>21px</td>
        <td>32px</td>
        <td>Medium (500)</td>
        <td>#1A1A1A</td>
      </tr>
      <tr>
        <th scope="row"><span class="displayheading-1 text-positive">Stor positiv tekst</span></th>
        <td>24px</td>
        <td>36px</td>
        <td>Medium (500)</td>
        <td>#358000</td>
      </tr>
      <tr>
        <th scope="row"><span class="displayheading-1 text-negative">Stor negativ tekst</span></th>
        <td>24px</td>
        <td>36px</td>
        <td>Medium (500)</td>
        <td>#CC0000</td>
      </tr>
    </tbody>
  </table>
</div>

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

## Linjelængde {#{% include create-id.html heading="Linjelængde" %}}

For at sikre optimal læsbarhed er der indsat en maksimal bredde på linjelængden for brød- og manchet i koden til designsystemet.

{% include code/preview-box.html component="line_length" link=false %}

## Linjeafstand {#{% include create-id.html heading="Linjeafstand" %}}

Linjeafstanden er baseret på teksttypernes linjehøjde.

{% include code/preview-box.html component="line_spacing" link=false %}

<!--split-->

## Manchet {#{% include create-id.html heading="Manchet" append="-kode" %}}

{% include code/preview-box.html component="lead_paragraph" link=false title="Eksempel på manchet" %}

{% include links/internal-link.html linktext="Læs retningslinjerne for manchet" %}

### HTML Struktur

{% include code/syntax.html component="lead_paragraph" copybutton=true %}

## Brødtekst {#{% include create-id.html heading="Brødtekst" append="-kode" %}}

{% include code/preview-box.html component="inlinetext" link=false title="Eksempel på brødtekst" %}

{% include links/internal-link.html linktext="Læs retningslinjerne for brødtekst" %}

### HTML Struktur

{% include code/syntax.html component="inlinetext" copybutton=true %}

## Hjælpetekst {#{% include create-id.html heading="Hjælpetekst" append="-kode" %}}

{% include code/preview-box.html component="helptext" link=false title="Eksempel på hjælpetekst" %}

{% include links/internal-link.html linktext="Læs retningslinjer for hjælpetekst" %}

## Fejlmeddelelser {#{% include create-id.html heading="Fejlmeddelelser" append="-kode" %}}

{% include code/preview-box.html component="error-message-definition" link=false title="Eksempel på fejlmeddelelse" %}

{% include links/internal-link.html linktext="Læs retningslinjer for fejlmeddelelser" %}

### HTML Struktur

{% include code/syntax.html component="helptext" copybutton=true %}

## Billedtekst {#{% include create-id.html heading="Billedtekst" append="-kode" %}}

{% include code/preview-box.html component="caption" link=false title="Eksempel på billedtekst" %}

{% include links/internal-link.html linktext="Læs retningslinjer for billedtekst" %}

### HTML Struktur

{% include code/syntax.html component="caption" copybutton=true %}

## Stor tekst {#{% include create-id.html heading="Stor tekst" append="-kode" %}}

{% include code/preview-box.html component="displaytext" link=false title="Eksempel på stor tekst" %}

{% include links/internal-link.html linktext="Læs retningslinjerne for stor tekst" %}

### HTML Struktur

{% include code/syntax.html component="displaytext" copybutton=true %}
