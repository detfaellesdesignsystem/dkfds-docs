---
permalink: "/komponenter/header/implementering/"
guidelinelink: "/komponenter/header/guidelines/"
redirect_from:
- "/kode/komponenter/headers/"
- "/kode/komponenter/header/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Header
lead: Headeren identificerer portalen, den ansvarlige myndighed og brugeren, der er logget ind med NemLog-in. Den fungerer også til navigation og overordnet styring af selvbetjeningsløsningen.
anchor: true
subnav:
- text: Installation
  href: "#installation"
- text: Referencer
  href: "#ref"
description: "Dokumentation på implementering af header."
tags:
---

{:#installation}
## Installation

### HTML Struktur

Nedenstående eksempel viser den overordnede struktur i `<header>`-elementet. De øvrige afsnit indeholder uddybende kodeeksempler.

{:#html-struktur}
{% include code/syntax.html component="header-overview" copybutton=true %}

Placer `<header>`-elementet i din HTML-sides `<body>`-element efter {% include links/component-guideline-link.html linktext="Gå til sidens indhold" %}-komponenten.

#### Overlay og mobilmenu

Som standard ændres headeren til udelukkende at vise løsningstitel, evt. søgefelt og en menuknap, når skærmen er mindre end 992px bred. Headeren skal derfor altid indeholde nedenstående kode, som bruges på mindre skærme, for eksempel mobiltelefoner. Når menuen er åben, vises et mørkt overlay oven på det øvrige sideindhold.

{% include code/syntax.html component="header-menu-top" copybutton=true %}

Det er muligt at ændre, hvornår headeren skal vise menuknappen, ved at bruge Sass-variablen `$nav-responsive-breakpoint` og derefter bygge CSS'en selv.

#### Række 1

Række 1 indeholder portal-logo, NemLog-in-oplysninger og “Log af” knap. Headeren skal altid indeholde denne række.

Der er to dele, som skal indsættes i `<header>`-elementet. 

Første del skal indsættes øverst efter skip-link og indeholder koden, der vises på større skærme:

{% include code/syntax.html component="header-portal" copybutton=true %}

Anden del skal indsættes nederst i mobilmenuen og indeholder koden, der vises på mindre skærme:

{% include code/syntax.html component="header-portal-mobile" copybutton=true %}

Se eventuelt {% include links/component-code-link.html linktext="eksemplet med den overordnede struktur i headeren" %} for nærmere detaljer om placering.

#### Række 2

Række 2 indeholder selvbetjeningens navn (løsningstitel), ansvarhavendes myndighed og eventuel support/kontaktoplysninger. Headeren skal altid indeholde denne række.

Der er to dele, som skal indsættes i `<header>`-elementet. 

Første del skal indsættes <em>efter</em> række 1 og indeholder koden, der vises på større skærme:

{% include code/syntax.html component="header-solution" copybutton=true %}

Anden del skal indsættes i mobilmenuen <em>før</em> række 1 og indeholder koden, der vises på mindre skærme:

{% include code/syntax.html component="header-solution-mobile" copybutton=true %}

Se eventuelt {% include links/component-code-link.html linktext="eksemplet med den overordnede struktur i headeren" %} for nærmere detaljer om placering.

#### Række 3

Række 3 indeholder topnavigation i løsningen og søgefelt. Det er valgfrit, om headeren skal indeholde denne række.

Der er to dele, som skal indsættes i `<header>`-elementet. 

Første del skal indsættes <em>efter</em> række 2 og indeholder koden, der vises på større skærme:

{% include code/syntax.html component="header-navigation" copybutton=true %}

Hvis række 3 indeholder menupunkter med undermenuer, husk at anvende korrekt opmærkning med `aria-expanded` og `aria-controls` (APG, Disclosure Pattern). Hvis løsningen anvender et søgefelt, skal dette indsættes i første kodedel som vist ovenover, men udelades fra koden til mobilmenuen. 

Anden del skal indsættes i mobilmenuen <em>før</em> række 2 og indeholder koden, der vises på mindre skærme:

{% include code/syntax.html component="header-navigation-mobile" copybutton=true %}

Se eventuelt {% include links/component-code-link.html linktext="eksemplet med den overordnede struktur i headeren" %} for nærmere detaljer om placering.

#### Topnavigation og venstremenu

Hvis løsningen anvender både en topnavigation og en venstremenu til at vise links til undersider, så skal venstremenuen skjules på mindre skærme og mobilmenuen skal indeholde alle links fra begge menuer. Her er man selv ansvarlig for at sikre, at venstremenuen vises og skjules på de rette tidspunkter, for eksempel ved at anvende {% include links/internal-link.html linktext="hjælpeklasser for display" %}, samt at mobilmenuen indeholder de korrekte links.

#### Sprogvælger

Hvis man anvender en sprogvælger i headeren, er der to dele, som skal indsættes i `<header>`-elementet.

Første del skal indsættes <em>før</em> række 1 (portalinfo) og indeholder koden, der vises på større skærme:

{% include code/syntax.html component="switch-language" copybutton=true %}

Anden del skal indsættes i mobilmenuen, igen <em>før</em> række 1 (portalinfo) og indeholder koden, der vises på mindre skærme:

{% include code/syntax.html component="switch-language-mobile" copybutton=true %}

### JavaScript

Headeren kræver JavaScript for at fungere. Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:

{% highlight js %}
new DKFDS.Navigation().init();
{% endhighlight %}

Bemærk, at man selv er ansvarlig for JavaScript og funktionalitet til sprogvælgeren.

{:#ref}
## Referencer

{:.nobullet-list}
- {% include links/external-link.html linktext="ARIA Authoring Practices Guide (APG): Disclosure (Show/Hide) Pattern" %}