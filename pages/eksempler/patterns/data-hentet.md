---
permalink: /eksempler/patterns/hentet-data/
parentlink: "/eksempler/patterns/"
layout: styleguide
title: Inputfelter med hentet data
category: Eksempler_category
subcategory: Eksempler
description: En formular med automatisk hentet data, hvor felterne kan redigeres.
lead: En formular kan i visse situationer indeholde felter, der er udfyldt på forhånd med automatisk hentet data. Denne data skal nogen gange kunne ændres i.
---

{% include code/preview-box-details.html component="kontaktoplysninger-hentet" title="Eksempel på inputfelt med hentet data" link=false detaillabel="for eksempel på inputfelt med hentet data" %}

## Anvendes til

Dette pattern anvendes til visning af data, som er hentet automatisk ind i en formular. Det kan fx være data fra CVR- eller CPR-registreret data som derved er for udfyldt og letter udfyldelsen for brugeren, samtidig med at det giver brugeren mulighed for at rediger i den hentet data, hvis dette ønskes.

## Anvendes ikke til

Anvendes ikke til visning af data, som brugeren selv har tastet ind. Anvend da i stedet almindelige inputfelter eller strukturerede lister, hvis der er tale om en opsummeringsside. 

## Vejledning

Den hentede data vises i et read-only felt med en hjælpetekst, som gør opmærksom på, at der er tale om automatisk indhentet data. 

Hvis brugeren har mulighed for at rette i data, placeres et funktionslink til redigering ved siden af feltet. Ved klik på funktionslinket bliver inputfeltet aktivt, og hjælpeteksten fjernes. Den hentede data forbliver i feltet, så brugeren kan slette og ændre i teksten. Bemærk, at man i koden selv står for at implementere denne funktionalitet.

Det har ingen indflydelse på en formulars flow, om brugeren vælger at redigere feltet eller ej. Feltets indhold gemmes som ethvert andet felt i formularen og hvordan det er specificeret i den validering, der ligger til grund for den selvbetjening, hvor det anvendes.

## Eksempel på anvendelse af pattern

{% include code/preview-box-details.html component="virksomhedsoplysninger" title="Eksempel på formular med hentet data" link=false detaillabel="for eksempel på formular med hentet data" %}

## Referencer

<a href="https://baseweb.design/components/input/">https://baseweb.design/components/input/</a>
<a href="https://carbondesignsystem.com/patterns/read-only-states-pattern/">https://carbondesignsystem.com/patterns/read-only-states-pattern/</a>
<a href="https://www.patternfly.org/components/inline-edit/design-guidelines/">https://www.patternfly.org/components/inline-edit/design-guidelines/</a>
<a href="https://garden.zendesk.com/components/input">https://garden.zendesk.com/components/input</a>

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
    textfield.classList.remove('mr-3');
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
    textfield.classList.remove('mr-3');
});
</script>