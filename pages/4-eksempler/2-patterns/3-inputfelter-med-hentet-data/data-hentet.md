---
permalink: /eksempler/patterns/hentet-data/
parentlink: "/eksempler/patterns/"
layout: styleguide
title: Inputfelter med hentet data
lead: En formular kan i visse situationer indeholde felter, der er udfyldt på forhånd med automatisk hentet data. Denne data skal nogen gange kunne ændres.
componentdetails: "kontaktoplysninger-hentet"
componentdetailsTitle: "Eksempel på inputfelt med hentet data"
componentdetailsLink: false
componentdetailsLabel: "for eksempel på inputfelt med hentet data"
category: Eksempler_category
subcategory: Eksempler
description: En formular med automatisk hentet data.
headings: Inputfelter_med_hentet_data
anchorlinks: true
---

{% assign headings = site.data.headings[page.headings] %}

[---- Sådan bruges inputfelter med hentet data -------------------------------------]: # 
<h2 id="{{ headings[0].id }}">{{ headings[0].h2 }}</h2>

### Anvendes til

Dette pattern anvendes til visning af data, som er hentet automatisk ind i en formular. Det kan fx være data fra CVR- eller CPR-registret, som derved er forudfyldt. Dette letter udfyldelsen for brugeren, samtidig med at det giver brugeren mulighed for at redigere den hentede data, hvis dette er nødvendigt.

### Anvendes ikke til

Anvendes ikke til visning af data, som brugeren selv har tastet ind. Anvend da i stedet almindelige inputfelter eller strukturerede lister, hvis der er tale om en opsummeringsside. 

### Vejledning

Den hentede data vises i et read-only felt med en hjælpetekst, som gør opmærksom på, at der er tale om automatisk indhentet data. 

Hvis brugeren har mulighed for at rette i data, placeres et funktionslink til redigering ved siden af feltet. Ved klik på funktionslinket bliver inputfeltet aktivt, og hjælpeteksten fjernes. Den hentede data forbliver i feltet, så brugeren kan rette i teksten. Bemærk, at man i koden selv står for at implementere denne funktionalitet.

Det har ingen indflydelse på en formulars flow, om brugeren vælger at redigere feltet eller ej. Feltets indhold gemmes og valideres som ethvert andet felt i formularen.

[---- Eksempel på anvendelse af pattern -------------------------------------]: # 
<h2 id="{{ headings[1].id }}">{{ headings[1].h2 }}</h2>

{% include code/preview-box-details.html component="virksomhedsoplysninger" title="Eksempel på formular med hentet data" link=false detaillabel="for eksempel på formular med hentet data" %}

[---- Referencer -------------------------------------]: # 
<h2 id="{{ headings[2].id }}">{{ headings[2].h2 }}</h2>

{:.nobullet-list}
- {% include links/external-link.html linktext="Inputfelter - Uber’s Base designsystem" %}
- {% include links/external-link.html linktext="Read-only pattern - Carbon designsystem" %}
- {% include links/external-link.html linktext="Inline edit - PatternFly" %}
- {% include links/external-link.html linktext="Inputfelter - Zendesk’s Garden designsystem" %}

<script>
let editButton = document.getElementById("hentetdata-rediger");

editButton.addEventListener('click', function (e) {
    let textfield = document.getElementById("hentetdata-redigerbar");
    let hinttext = document.getElementById("hentetdata-redigerbar-hint");
    this.setAttribute('hidden', '');
    hinttext.setAttribute('hidden', '');
    textfield.removeAttribute('readonly');
    textfield.removeAttribute("aria-describedby");
    textfield.setAttribute('required', '');
    textfield.setAttribute('autocomplete', 'name');
    textfield.classList.remove('mr-3');
    textfield.focus();
});

let editButtonExample = document.getElementById("adresse-rediger");

editButtonExample.addEventListener('click', function (e) {
    let textfield = document.getElementById("adresse");
    let hinttext = document.getElementById("adresse-hint");
    this.setAttribute('hidden', '');
    hinttext.setAttribute('hidden', '');
    textfield.removeAttribute('readonly');
    textfield.removeAttribute("aria-describedby");
    textfield.setAttribute('required', '');
    textfield.setAttribute('autocomplete', 'street-address');
    textfield.classList.remove('mr-3');
    textfield.focus();
});
</script>