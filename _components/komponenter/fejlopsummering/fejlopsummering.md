---
permalink: "/komponenter/fejlopsummering/"
layout: styleguide
type: component
title: Fejlopsummering
category: Komponenter_category
subcategory: Komponenter
description: 
tags: 
lead: 

---
{:.font-lead}

Brug komponenten til at opsummere eventuelle fejl, som brugeren skal rette inden denne kan komme videre, øverst på siden.

{:.p}

Når en bruger laver en fejl eller mangler at udfylde noget, skal du vise både en fejlopsummering øverst på siden, der opsummerer de <a href="/komponenter/fejlbesked/">fejlmeddelelser</a>, de måtte være på siden.

{% include code/preview-box.html component="error-summary" title="Eksempel på fejlopsummering" link="true" code="/kode/komponenter/fejlopsummering/" %}

{:.h3 #retningslinjer}

## Anvendes til

Vis altid fejlopsummering, når der er en valideringsfejl - også hvis der kun er én.

{:.h3}

## Vejledning

Du skal linke fejlene i filopsummeringen til det svar, de vedrører.

For svar, hvor der blot kræves svar i et enkelt felt linkes direkte til feltet.own, tekstområde, teksttfelt link direkte til feltet.

Når en bruger skal indtaste deres svar i flere felter, fx dag-, måned- og årsfelterne i <a href="/komponenter/dato-felt/">datoangivelse</a>, skal du linke til det første felt, der indeholder en fejl.

Hvis du ikke ved, hvilket felt der indeholder en fejl, skal du linke til det første felt.

For spørgsmål, der kræver, at en bruger skal vælge en eller flere ting på en liste ved hjælp af radioknap eller tjekboks, skal du linke til den første radio eller tjekboks i listen.