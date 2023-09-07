---
permalink: /komponenter/header/
redirect_from:
- /komponenter/headers/
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Header
lead: Headeren identificerer portalen, den ansvarlige myndighed og brugeren, der er logget ind med NemLog-in. Den fungerer også til navigation og overordnet styring af selvbetjeningsløsningen.
previewimage: "header-all-rows-dropdown"
previewimageTitle: "Eksempel på header"
previewimageCode: "/kode/komponenter/header/"
anchor: false
description: "Tydelige headers er med til at skabe en let navigation for brugeren og hjælper dermed brugeren med at finde vej."
tags: 
---

{:#retningslinjer}
## Retningslinjer

### Anvendes til

Brug headeren til at give brugeren et “ankerpunkt”, der er ens på tværs af trin og undersider i selvbetjeningsløsningen. 

Brug headeren til at kommunikere portal, NemLog-in-oplysninger, ansvarlig myndighed og evt. med kontaktoplysninger.

En eventuel overordnet navigation (menurække) skal også placeres i headeren, så brugeren altid kan navigere rundt i selvbetjeningsløsningen.

### Anvendes ikke til

Anvend ikke headeren andre steder i løsningen end i toppen af siden. 

Brug ikke menurækken som faneblade, anvend da <a href="/komponenter/faneblade/">faneblade</a>. 

### Vejledning

Tag et kig på <a href="/eksempler/selvbetjeningsloesninger/">eksempelløsningerne</a>, for at se hvordan komponenten passer ind i en komplet løsning.

En header består af et antal rækker med forskelligt indhold.

- Række 1 (portalrækken) med portal-logo, NemLog-in-oplysninger og ”Log af” knap.
- Række 2 (løsningsrækken) med slvbetjeningens navn (løsningstitel), ansvarshavende myndighed og eventuelt support/kontaktoplysninger.
- Række 3 (menurække) med links til løsningens forskellige sider. Denne række kan undlades i simple løsninger.

#### Referencer

<a href="https://www.w3.org/WAI/tutorials/page-structure/headings/#main-heading-after-navigation" class="icon-link">Web Accessibility Tutorials: Headers<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>

### Eksempler

## Varianter

{% include code/preview-image.html component="header-portal-only" %}

{% include code/preview-image.html component="header-solution-only" %}

{% include code/preview-image.html component="header-navigation-only" %}

{% include code/preview-image.html component="header-portal-and-solution" %}

{% include code/preview-image.html component="header-solution-and-navigation" %}

{% include code/preview-image.html component="header-all-rows" %}

{% include code/preview-image.html component="header-all-rows-dropdown" %}