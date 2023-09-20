---
permalink: /eksempler/patterns/hentet-data/
parentlink: "/eksempler/patterns/"
layout: styleguide
title: Inputfelter med hentet data - redigerbart
category: Eksempler_category
subcategory: Eksempler
description: En formular med automatisk hentet data, hvor felterne kan redigeres.
lead: En formular med automatisk hentet data, hvor felterne kan redigeres.
---

{% include code/preview-box-details.html component="kontaktoplysninger-hentet" title="Eksempel på inputfelt med hentet data" link=false detaillabel="for eksempel på inputfelt med hentet data" %}

## Anvendes til

Til visning af data som er hentet automatisk ind i en formular og som også kan redigeres. Kan anvendes til data som f.eks. CVR-nummer, adresse, navn mv. som kan hentes automatisk for eksempel via NemLog-in. 

## Vejledning

Efter hvert felt med hentet data som er redigerbart, placeres det viste ikon med funktionslink. Dette giver brugeren mulighed for nu at tilgå feltet som et almindeligt inputfelt, hvor teksten fra feltet før stadig optræder, men nu med mulighed for at slette og ændre i teksten. 

Vælger brugeren at redigere et felt med hentet data, kan denne handling ikke ændres, dvs. det er ikke muligt at gå tilbage og få feltet til tilstanden før klik på “rediger”-knappen. 
Det betyder dog ikke, at brugeren er nødsaget til at ændre i teksten. Hvis der ikke længere er et behov for at tilpasse teksten, kan feltet blot forblive urørt. 

Det har ingen indflydelse på en formulars flow, om brugeren vælger at redigere eller ej. 

I eksemplet ovenfor anvendes hjælpetekst til at hjælpe brugeren med at forstå, hvor den pågældende data kommer fra. Efter en bruger har redigeret dette felt, vil der ikke længere være et behov for at vise, hvor denne data stammer fra med brug af en hjælpetekst. Derfor anbefales det, at hvis man gør brug af en hjælpetekst til et lignende scenarie, så bør denne hjælpetekst forsvinde idet brugeren vælger at redigere feltet.

<script>
let editButton = document.getElementById("hentetdata-rediger");

editButton.addEventListener('click', function (e) {
    let textfield = document.getElementById("hentetdata-virksomhed");
    let hinttext = document.getElementById("hentetdata-virksomhed-hint");
    this.setAttribute('hidden', '');
    hinttext.setAttribute('hidden', '');
    textfield.removeAttribute('readonly');
    textfield.removeAttribute("aria-describedby");
    textfield.setAttribute('required', '');
    textfield.classList.remove('mr-3');
});
</script>