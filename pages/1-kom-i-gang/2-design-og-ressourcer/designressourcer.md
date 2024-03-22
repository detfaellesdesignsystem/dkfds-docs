---
permalink: "/kom-i-gang/designressourcer/"
redirect_from:
- "/komigang/tildesignere/"
- "/komigang/designfiler/"
- "/komigang/tildesignere/design-selvbetjeningsloesninger/"
- "/design/designressourcer/"
layout: styleguide
category: Kom_i_gang_category
subcategory: Kom i gang
title: Design og ressourcer
lead: Ved at følge designsystemet er du med til at skabe sammenhæng i og mellem de mange offentlige selvbetjeningsløsninger du ikke selv designer, til gavn for alle brugere.
description: Information om Det Fælles Designsystem, der retter sig mod designere
headings: Design_og_ressourcer
anchorlinks: true
tags:
- figma
- prototype
- svg
---

{% assign headings = site.data.headings[page.headings] %}

[---- Grundprincipper -------------------------------------]: # 
<h2 id="{{ headings[0].id }}">{{ headings[0].h2 }}</h2>

Dit fokus som designer af en selvbetjeningsløsning bør være på brugervenlighed og brugernes effektivitet igennem selvbetjeningsløsningen, ikke på personligt at “shine” ved brug af “krom” og tidens trends. Designsystemet følger nogle grundprincipper, som du bør kende.

Principperne skal sikre, at designsystemets komponenter kan anvendes hver for sig og sammen i uendelige kombinationer i de mange forskellige selvbetjeningsløsninger, som kan tilgås fra borger.dk og Virk. Designet sikrer en brugervenlighed og ensretning på tværs af løsninger samtidig med, at det tager højde for både borger.dk og Virk med hver deres visuelle brand.

Designet er:

- Neutralt
- Simpelt
- Målrettet til selvbetjeningsløsninger

[---- Dit ansvar som designer -------------------------------------]: # 
<h2 id="{{ headings[1].id }}">{{ headings[1].h2 }}</h2>

Følg allerede etablerede standarder og konventioner for placering og gruppering af komponenter og reproducer gængse interaktionsmønstre. 

Hav forståelse for dit ansvar for sammenhængen i mellem og på tværs af de mange tusinde selvbetjeningsløsninger, der kan tilgås fra borger.dk og Virk. Ved at tage ansvar, er du med til at gøre brugerne mere effektive, så de ikke skal genlære alle offentlige brugergrænseflader forfra hver gang.

Overvej følgende spørgsmål, før du designer nye funktioner til din løsning:

- Er funktionen nødvendig?
- Tilfører funktionen merværdi for brugeren?
- Kan vi gøre funktionen tilgængelig?
- Kan vi løse behovet med en mere simpel og gennemprøvet funktion?

[---- Designressourcer -------------------------------------]: # 
<h2 id="{{ headings[2].id }}">{{ headings[2].h2 }}</h2>

Vi stiller nedenstående filer til rådighed for, at I kan komme hurtigt i gang med at designe jeres selvbetjeningsløsninger og lave interaktive prototyper til brugertest. Vær dog opmærkesom på, at “source of truth” er dokumentationssiden www.designsystem.dk og ikke designfilerne.

<h3 class="h4">Figma</h3>

Designbiblioteket i Figma vedligeholdes løbende.

{% include links/external-link.html linktext="Se komponentbiblioteket i Figma" %}

<h3 class="h4">SVG</h3>

Svg-filerne kan importeres i de fleste design-/prototypeprogrammer og arbejdes videre med ved at markere elementerne og opdele grupperne (ungroup).

{% include links/internal-link.html linktext="Download svg-filer (version 7.0.0)" %}

<h3 class="h4">Hjælp os med at blive bedre</h3>

Hvis du anvender vores designressourcer og finder fejl eller har idéer til forbedringer, så tøv ikke med at {% include links/internal-link.html linktext="kontakte os" %}.
