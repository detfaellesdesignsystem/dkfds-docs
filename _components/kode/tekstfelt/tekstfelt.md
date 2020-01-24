---
permalink: /kode/tekstfelt/
title: Tekstfelt
layout: styleguide
type: component
category: Kode_category
subcategory: Kode
---

{% include code/preview-box.html component="text-input" title="Eksempel på tekstfelt" %}

## Eksempler og dokumentation
<ul class="nobullet-list">
    <li><a href="/komponenter/tekstfelt/#retningslinjer">Dokumentation</a></li>
    <li><a href="/komponenter/tekstfelt/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur

{% include code/syntax.html component="text-input" %}

## Varianter

### Frivilligt felt

{% include code/syntax.html component="text-input-optional" link="true" %}

De fleste felter i en selvbetjeningsløsning er påkrævet, så for at undgå mange af de standard røde stjerner ved hvert felt har vi i stedet valgt at skrive (frivilligt) ved de felter, som ikke er påkrævede.

### Fejl

{% include code/syntax.html component="text-input-error" link="true" %}

Sørg for at rette i de nødvendige attributter, så værdierne er unikke og refererer til de rette elementer:

- `for`
- `id`
- `name`
- `aria-labelledby`
- `aria-describedby`

### Frivilligt felt

{% include code/syntax.html component="text-input-optional" link="true" %}

De fleste felter i en selvbetjeningsløsning er påkrævet, så for at undgå mange af de standard røde stjerner ved hvert felt har vi i stedet valgt at skrive (frivilligt) ved de felter, som ikke er påkrævede.

### Bredde
   
Inputfelter har en standard bredde på 32rem, for at ændre bredden på inputfelter bruges nedenstående klasser:

- `input-width-xxs` har en bredde på 8rem
- `input-width-xs` har en bredde på 16rem
- `input-width-s` har en bredde på 24rem
- `input-width-m` har en bredde på 32rem
- `input-width-l` har en bredde på 40rem
- `input-width-xl` har en bredde på 48rem

#### Bredde med tegn

For at styre bredden på inputfelter efter tegn, skal der i stedet bruges nedenstående klasser:

- `input-char-4` har en bredde der passer til 4 tegn
- `input-char-8` har en bredde der passer til 8 tegn
- `input-char-11` har en bredde der passer til 11 tegn
- `input-char-27` har en bredde der passer til 27 tegn

For at tilføje flere input bredder, der er styret af tegn, skal der tilføjes klassen `input-char-X`, hvor det nye tal skal erstattes med X.
