---
permalink: "/komponenter/sprogvaegler/"
layout: styleguide
type: component
title: Sprogvælger
category: Komponenter_category
subcategory: Komponenter
description: ''
tags: 
lead: En sprogvælger bruges hvis løsningen udbydes på mere end et sprog. Den giver
  brugeren mulighed for at vælge et andet sprog end løsningens standardsprog.
anchor: true
subnav:
- text: Tooltip
  href: "#sprogvælger-med-tooltip"

---
{% include code/preview-image.html component="language-switcher" alt="Eksempel på sprogvælger" code="/kode/komponenter/sprogvaegler/" %}

<p class="mt-6"><a href="/eksempler/selvbetjeningsloesninger/#solution-7">Se en eksempelløsning med sprogvælger</a></p>

{:.h3 #retningslinjer}
## Anvendes til

Brug en sprogvælger når du gerne vil vise en løsning i flere sprog.

Placeres nederst i footeren.

{:.h3}
## Anvendes ikke til

Brug ikke sprogvælger, hvis løsningen kun findes i ét sprog.

{:.h3}
## Vejledning

Sprogvælgeren placeres altid nederst i footeren. Denne placering giver fleksibilitet og understøtter brugen af alle headertyper. 

Sprogvælgeren indeholder en liste af sprog skrevet på original sproget. Sprogvælgeren fungerer således, at det valgte sprog bliver markeret med fed tekst og står altid som det første sprog i listen.

Når brugeren vælger et andet sprog, vil det blive markeret som fed i stedet. Det valgte sprog skifter placering til at være det første sprog i listen.

Husk at skrive sproget ud på det sprog det har. Eksempelvis "English" for engelsk og "Kalaallisut" for Grønlandsk. På denne måde, kan brugerne stadig finde frem til deres fortrukne sprog, trods resten af indholdet vises i et sprog de ikke forstår.

Bemærk, at der er ekstra tekst gemt i koden som skal oversættes for hvert sprog, således at brugere, der gør brug af hjælpeteknologier (fx skærmlæser) kan forstå komponenten på det valgte sprog.

{:.h5}
### Sprogvælger i en simpel footer

<a href="/eksempel/footer-simple-language/" class="screenshot d-block px-4 outer-border" title="Eksempel på sprogvælger i en simpel footer" target="_blank"></a>

{:.h5}
### Sprogvælger i en kompleks footer

<a href="/eksempel/footer-four-columns-language/" class="screenshot d-block px-4 outer-border" title="Eksempel på sprogvælger i en kompleks footer" target="_blank"></a>

{:.h3}
## Links

{:.nobullet-list}
- <a href="https://digital.gov/resources/top-10-best-practices-for-multilingual-websites/" class="icon-link">Top 10 Best Practices for Multilingual Websites<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>
- <a href="https://uxdesign.cc/my-take-on-language-selectors-945caceb58f7" class="icon-link">My take on language selectors<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>
- <a href="https://usersnap.com/blog/design-language-switch/" class="icon-link">Designing a language switch: Examples and best practices<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>

{% include child-components.html parent='sprogvaegler' %}