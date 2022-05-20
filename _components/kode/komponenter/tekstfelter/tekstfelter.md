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
- text: Hjælpetekst
  href: "#hjaelpetekst"
- text: Obligatoriske og frivillige felter
  href: "#obligatoriske-og-frivillige-felter"
- text: Read-only
  href: "#read-only"
- text: Deaktiveret
  href: "#deaktiveret"
- text: Prefix og suffix
  href: "#prefix-og-suffix"
- text: Feltbredde
  href: "#feltbredde"
---

{% include code/preview-box.html component="text-input" title="Eksempel på tekstfelt" %}

## Eksempler og retningslinjer
<ul class="nobullet-list">
    <li><a href="/komponenter/tekstfelter/tekstfelt/#retningslinjer">Retningslinjer</a></li>
    <li><a href="/komponenter/tekstfelter/tekstfelt/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur

{% include code/syntax.html component="text-input" %}

## Varianter


{:#hjaelpetekst}
### Hjælpetekst

{% include code/syntax.html component="text-input-helptext" link="true" %}

{:#obligatoriske-og-frivillige-felter}
### Obligatoriske og frivillige felter

{% include code/syntax.html component="text-input-optional" link="true" %}

Hvis de fleste felter i en selvbetjeningsløsning er påkrævede, noterer man "(frivilligt)" ved de få felter, der ikke er påkrævede. Hvis de fleste felter er frivillige i en løsning, noterer man "(*skal udfyldes)" ved de få felter, der er påkrævede. <a href="/komponenter/tekstfelter/tekstfelt/#obligatoriske-og-frivillige-felter">Se eksempler på frivillige og obligatoriske felter</a>.


{:#read-only}
### Read-only

{% include code/syntax.html component="text-input-readonly" link="true" %}

{:#deaktiveret}
### Deaktiveret

{% include code/syntax.html component="text-input-disabled" link="true" %}

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
