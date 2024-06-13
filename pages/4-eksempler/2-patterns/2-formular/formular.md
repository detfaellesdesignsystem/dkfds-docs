---
permalink: /eksempler/patterns/formular/
parentlink: "/eksempler/patterns/"
redirect_from:
- /komponenter/form-controls/
- /komponenter/formular/
- /kode/komponenter/formular/
layout: styleguide
category: Eksempler_category
subcategory: Eksempler
title: Formular
description: "Se eksempler på opsætning af en formular med forskellige felttyper."
tags: 
---

{% include code/preview-box-details.html component="fieldset" title="Eksempel på formularstruktur" link=false detaillabel="for eksempel på formularstruktur" %}

{% include anchorlinks.html headings="Formular" %}

## Vejledning {#{% include create-id.html heading="Vejledning" %}}

Gør brug af `<div class="form-group">`, fieldset og overskrifter til at strukturere din formular.

Skærmlæsere følger rækkefølgen af formularelementerne, som de er angivet i koden.

Overhold derfor sammenhængen mellem den viste rækkefølge af formularelementer på skærmen og deres rækkefølge i koden og brug ikke CSS til at ændre på rækkefølgen af formularelementerne.

Gruppér sammenhængende formularelementer ved hjælp af fieldset og brug et enkelt legend for hvert fieldset, hvor det giver mening.

Tilføj label med korrekt `for` attribut, hvor værdien er ens med værdien i id attributten på formularelementet det tilhører.

Sørg for at labels til formularelementer er meningsfulde og præcise.

Undgå placeholder-tekst. Browserne kan ikke garantere tilstrækkeligt kontrastniveau og teksten kan desuden forvirre brugerne. Placeholder-tekst forsvinder, når brugeren klikker i feltet, og dermed forsvinder information, som kunne gavne brugeren.

Tillad copy/paste i formularelementer, hvor brugeren selv skal indtaste oplysninger.

Formularelementer skal automatisk fremhæves, når brugeren navigerer til dem ved hjælp af tastaturet.

Sørg for at alle elementer står i register, dvs. at de står på linje og i et naturligt lodret læse-flow fra top til bund.

{% include dos-donts-box.html component="formular-dos-donts" title="Formular do's and don'ts" %}

{% include dos-donts-box.html component="overskrifter-dos-donts" title="Overskrifter do's and don'ts" %}

## Kompleks formular {#{% include create-id.html heading="Kompleks formular" %}}

{% include code/preview-box-details.html component="fieldset-complex" title="Eksempel på kompleks formularstruktur" link=false detaillabel="for eksempel på kompleks formularstruktur" %}

## Se eksempelløsninger {#{% include create-id.html heading="Se eksempelløsninger" %}}

{:.nobullet-list}
- {% include links/demo-link.html linktext="Formular til kontaktoplysninger: Oplysninger om dig" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Trinformular til registrering: Kontaktoplysninger" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Trinformular til ansøgning: Ansøgningens type" returnID="eksempelloesninger" %}

## Referencer {#{% include create-id.html heading="Referencer" %}}

{:.nobullet-list}
- Adam Silver: Form Design Patterns (2018)
- {% include links/external-link.html linktext="Tim Paul: One thing per page (2015)" %}
- Jeff Johnson & Kate Finn: Designing User Interfaces for an Aging Population (2017)
- {% include links/external-link.html linktext="Ally Long: Field-tested interfaces for the next billion (2017)" %}
- Caroline Jarrett & Gerry Gaffney: Forms that Work: Designing Web Forms for Usability (2009)
- Luke Wroblewski: Web Form Design: Filling in the Blanks (2008)
- Luke Wroblewski: Visible Narratives: Understanding Visual Organization (2003)
- Louise Downe: Good services are verbs, bad services are nouns (2015)
- Linda Newman Lior: Writing for Interaction (2013)
