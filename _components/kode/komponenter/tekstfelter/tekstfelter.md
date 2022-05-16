---
permalink: /kode/komponenter/tekstfelter/
parentlink: /kode/komponenter/
redirect_from:
- /kode/komponenter/felter/
title: Tekstfelter
layout: styleguide
type: component
category: Kode_category
tags:
subcategory: Kode
description: "Dokumentation på implementering af tekstfelter."
anchor: true
subnav:
- text: Felt med fejlmeddelelse
  href: "#felt-med-fejlmeddelelse"
- text: Felt med frivillig indtastning
  href: "#felt-med-frivillig-indtastning"
- text: Felt med hjælpetekst
  href: "#felt-med-hjaelpetekst"
- text: Deaktiveret felt
  href: "#deaktiveret-felt"
- text: Read-only felt
  href: "#read-only-felt"
- text: Prefix og suffix
  href: "#prefix-og-suffix"
- text: Feltbredde
  href: "#feltbredde"
---

{% include code/preview-box.html component="text-input" title="Eksempel på tekstfelt" %}

## Eksempler og retningslinjer
<ul class="nobullet-list">
    <li><a href="/komponenter/tekstfelter/#retningslinjer">Retningslinjer</a></li>
    <li><a href="/komponenter/tekstfelter/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur

{% include code/syntax.html component="text-input" %}

## Varianter

{:#felt-med-fejlmeddelelse}
### Felt med fejlmeddelelse

{% include code/syntax.html component="text-input-error" link="true" %}

Sørg for at rette i de nødvendige attributter, så værdierne er unikke og refererer til de rette elementer:

- `for`
- `id`
- `name`
- `aria-labelledby`
- `aria-describedby`

{:#felt-med-frivillig-indtastning}
### Felt med frivillig indtastning

{% include code/syntax.html component="text-input-optional" link="true" %}

De fleste felter i en selvbetjeningsløsning er påkrævet, så for at undgå mange af de standard røde stjerner ved hvert felt har vi i stedet valgt at skrive (frivilligt) ved de felter, som ikke er påkrævede.

{:#felt-med-hjaelpetekst}
### Felt med hjælpetekst

{% include code/syntax.html component="text-input-helptext" link="true" %}

{:#deaktiveret-felt}
### Deaktiveret felt

{% include code/syntax.html component="text-input-disabled" link="true" %}

{:#read-only-felt}
### Read-only felt

{% include code/syntax.html component="text-input-readonly" link="true" %}

{:#prefix-og-suffix}
### Prefix og suffix

{% include code/syntax.html component="text-input-prefix-suffix" link="true" %}


{:#feltbredde}
### Feltbredde
   
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
