---
permalink: "/komponenter/tags/"
redirect_from:
- "/kode/komponenter/tags/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Tags
lead: Et tag er en mindre knap, som du kan bruge til at angive metainformation om
  indhold, der kan kategoriseres, filtreres eller på anden vis beskrives med nøgleord.
  Tags forekommer med og uden ikon.
description: Et tag er en sekundær funktionalitet, der typisk anvendes til meta-information
  om indhold, der kan kategoriseres, filtreres eller på anden vis beskrives med nøgleord.
tags: 
tabs: "Retningslinjer, kode"
---

{% include tabs.html guidelines=true code=true %}

{% include code/preview-box.html component="tags" title="Eksempel på tags" classes="intro-example" %}

{% include anchorlinks.html guidelines="Tags" code="Tags_Kode" classes="hide-code" %}

<!--split-->

## Sådan bruges komponenten {#{% include create-id.html heading="Sådan bruges komponenten" %}}

### Anvendes til

Et tag er en sekundær funktionalitet, der typisk anvendes til meta-information om indhold, der kan kategoriseres, filtreres eller på anden vis beskrives med nøgleord.

### Anvendes ikke til

Primær funktionalitet som fx ”Gem”, hvor der i stedet bør anvendes en knap.

Hvis tags anvendes i tæt forbindelse med knapper, kan det forvirre brugeren. Overvej nøje placering og anvendelse og udfør brugertest.

### Vejledning

Generelt skal du bruge tags til at give brugeren yderligere, sekundær information og nøgleord i relation til  indholdet. 

Brug så mange tags, der giver mening, men så få som muligt.

Brug ord og begreber, der kan genkendes fra løsningens kontekst og ikke ukendte. 

Skriv kort og præcist.

Brug stort forbogstav og små bogstaver for resten.

Undgå at blande funktioner og husk at tags er noget, der må kunne overses uden at løsningens anvendelse forringes. 

{% include dos-donts-box.html component="tags-dos-donts" title="Tags do's and don'ts" %}

## Varianter {#{% include create-id.html heading="Varianter" %}}

{:#tags-med-luk-ikon}
### Tags med luk-ikon

{% include code/preview-box.html component="tags-icon" title="Eksempel på tags med luk-ikon" %}

<!--split-->

## Installation {#{% include create-id.html heading="Installation" append="-kode" %}}

### HTML Struktur

{% include code/syntax.html component="tags" copybutton=true %}

## Tags med luk-ikon {#{% include create-id.html heading="Tags med luk-ikon" append="-kode" %}}

{% include code/syntax.html component="tags-icon" link=true copybutton=true %}
