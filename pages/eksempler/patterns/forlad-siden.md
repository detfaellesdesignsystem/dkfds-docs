---
permalink: /eksempler/patterns/forlad-siden/
parentlink: "/eksempler/patterns/"
layout: styleguide
title: Er du sikker på, du vil forlade siden?
category: Eksempler_category
subcategory: Eksempler
description: Visning af advarsel før man forlader siden
lead: Denne dialog advarer brugeren, før de forlader en side, hvor de har foretaget ændringer, der kan gå tabt. 
---

{% include code/preview-box-details.html component="forlad-siden" title="Eksempel på advarsel før man forlader siden" link=false detaillabel="for eksempel på advarsel før man forlader siden" %}

{:.h3}
## Anvendes til
Dialogen anvendes, når brugeren er ved at forlade en side, hvor de har foretaget ændringer, der ikke er gemt. Således hjælper dialogen til at undgå, at data går tabt uønsket. Det kan fx være, hvis de er ved at logge af, eller hvis de klikker på en anden side i navigationen.

{:.h3}
## Anvendes ikke til
Denne dialog skal ikke anvendes, når der ikke er konsekvenser for brugeren ved at forlade siden. 

{:.h3}
## Vejledning
- Til dette mønster anvendes komponenten <a href="/komponenter/modal/#kraever-handling">Modalvindue, som kræver handling</a>.   
- Brug altid teksten til at gøre opmærksom på, at ændringer vil gå tabt. 
- Hvis brugeren vælger at lukke vinduet helt, er det ikke muligt at vise denne dialog. Tilføj i stedet en browseradvarsel om, at data kan gå tabt, hvis brugeren forlader siden. 

## Ved log af
{% include code/preview-box-details.html component="log-af" title="Eksempel på advarsel ved log af" link=false detaillabel="for eksempel på advarsel ved log af" %}
