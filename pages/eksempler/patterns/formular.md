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
componentdetails: "fieldset"
componentdetailsTitle: "Eksempel på formularstruktur"
componentdetailsLink: false
componentdetailsLabel: "for eksempel på formularstruktur"
anchor: true
subnav:
- text: Kompleks formular
  href: '#kompleks'
description: "Se eksempler på opsætning af en formular med forskellige felttyper."
tags: 
---

## Vejledning

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

{:#eksempelloesninger}
### Se eksempelløsninger

{:.nobullet-list}
- <a href="/pages/eksempler/formular-til-kontaktoplysninger/formular-1/?r={{page.permalink}}%23eksempelloesninger" title="Vis eksempel 'Formular til kontaktoplysninger: Oplysninger om dig'">Formular til kontaktoplysninger: Oplysninger om dig</a>
- <a href="/pages/eksempler/trinformular-til-registrering/registrering-5/?r={{page.permalink}}%23eksempelloesninger" title="Vis eksempel 'Trinformular til registrering: Kontaktoplysninger'">Trinformular til registrering: Kontaktoplysninger</a>
- <a href="/pages/eksempler/trinformular-til-ansoegning/ansoegning-3/?r={{page.permalink}}%23eksempelloesninger" title="Vis eksempel 'Trinformular til ansøgning: Ansøgningens type'">Trinformular til ansøgning: Ansøgningens type</a>

### Referencer

{:.nobullet-list}
- Adam Silver: Form Design Patterns (2018)
- <a href="https://designnotes.blog.gov.uk/2015/07/03/one-thing-per-page/" class="icon-link">Tim Paul: One thing per page (2015)<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>
- Jeff Johnson & Kate Finn: Designing User Interfaces for an Aging Population (2017)
- <a href="https://youtu.be/IjjHTa0YEg4" class="icon-link">Ally Long: Field-tested interfaces for the next billion (2017)<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>
- Caroline Jarrett & Gerry Gaffney: Forms that Work: Designing Web Forms for Usability (2009)
- Luke Wroblewski: Web Form Design: Filling in the Blanks (2008)
- Luke Wroblewski: Visible Narratives: Understanding Visual Organization (2003)
- Louise Downe: Good services are verbs, bad services are nouns (2015)
- Linda Newman Lior: Writing for Interaction (2013)

{:#kompleks}
## Kompleks formular
{% include code/preview-box-details.html component="fieldset-complex" title="Eksempel på kompleks formularstruktur" link=false detaillabel="for eksempel på kompleks formularstruktur" %}