---
permalink: /komponenter/tjekboks/
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Tjekboks (Checkbox)
component: "checkbox-large"
componentTitle: "Eksempel på tjekbokse"
componentLink: true
componentCode: "/kode/komponenter/tjekboks/"
anchor: true
subnav:
- text: Lille tjekboks
  href: '#lille-tjekboks'
- text: Skjult indhold (Collapse)
  href: '#skjult-indhold-collapse'
description: "Tjekbokse giver brugeren mulighed for at vælge en eller flere værdier ud fra en synlig liste."
tags:
---

{:#retningslinjer}
## Retningslinjer

### Anvendes til

Tjekbokse giver brugeren mulighed for at vælge en eller flere værdier ud fra en synlig liste.

Når brugeren skal have overblik over sine mulige valg.

Når brugeren skal be- eller afkræfte et valg, fx ”Ja/Nej” (i det tilfælde en enkelt tjekboks), eller slå noget til eller fra (toggle).

Når listen over mulige valg kan være på en mobilvisning.

### Anvendes ikke til

Når der er for mange valg til at give mening på en mobilvisning.

Når brugeren kun kan vælge én værdi. Her skal du i stedet anvende radioknapper.

### Vejledning

Brugeren skal kunne tappe eller klikke på tjekboksen eller dens label for at vælge eller fravælge dens værdi.

Du bør opstille lister med tjekbokse i lodret linje af hensyn til brugerens læseretning.

Anvend et positivt sprog til værdierne. I stedet for fx ”Jeg vil ikke modtage bekræftelse på email” bør du skrive ”Jeg vil gerne modtage bekræftelse på email”.

Sørg for at der er tilstrækkelig luft omkring den enkelte tjekboks, så den er brugbar på touchskærme.

Hvis du giver brugeren en liste med tjekbokse, så gør det tydeligt gennem enten label eller hjælpetekst, hvor mange tjekbokse det forventes, at de vælger.

{% include dos-donts-box.html component="checkbox-dos-donts" title="Tjekboks do's and don'ts" %}

#### Fejlmeddelelse

<a href="/komponenter/fejlmeddelelser/">Læs mere om korrekt brug af fejlmeddelelser og deres formuleringer.</a>

Når der vises en fejlmeddelelse, vis da også <a href="/komponenter/fejlopsummering/">fejlopsummering</a>.

{% include code/preview-box.html component="error-message-checkbox" title="Eksempel på tjekbokse med fejlmeddelelse" %}

{:#eksempelloesninger}
#### Se komponenten i eksempelløsninger

{:.nobullet-list}
- <a href="/pages/eksempler/trinformular-til-registrering/registrering-1/?r={{page.permalink}}%23eksempelloesninger" title="Vis eksempel 'Trinformular til registrering: Vælg personer'">Trinformular til registrering: Vælg personer</a>
- <a href="/pages/eksempler/trinformular-til-registrering/registrering-2/?r={{page.permalink}}%23eksempelloesninger" title="Vis eksempel 'Trinformular til registrering: Vælg noget mere'">Trinformular til registrering: Vælg noget mere</a>

#### Referencer

{:.nobullet-list}
- ISO 9241-143: Forms (2012)
- <a href="https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/" class="icon-link">Jakob Nielsen: Checkboxes vs. Radio Buttons (2004)<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>

## Varianter

{:#skjult-indhold-collapse}
### Skjult indhold (Collapse)

{% include code/preview-box.html component="checkbox-collapse" title="Eksempel på tjekboks med skjult indhold" %}