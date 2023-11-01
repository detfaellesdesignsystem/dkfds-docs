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
previewimage: "header-with-navigation"
previewimageTitle: "Eksempel på header komponent"
anchor: false
description: "Dokumentation på implementering af header."
tags:
---

## Installation

### HTML Struktur

Nedenstående eksempel viser den overordnede struktur i `header`-elementet. De øvrige afsnit indeholder uddybende kodeeksempler.

{:#html-struktur}
{% include code/syntax.html component="header-overview" copybutton=true %}

Placer `header`-elementet i din HTML-sides `body`-element. Du kan læse mere om {% include links/component-links.html linktext="tilbage til toppen-knappen" %} og {% include links/component-links.html linktext="skip-link" %} på disse komponenters sider.

#### Overlay og mobilmenu

Som standard ændres headeren til kun at vise løsningstitel, evt. søgefelt og en menuknap, når skærmen er mindre end 992px bred. Headeren skal derfor altid indeholde nedenstående kode, som bruges på mindre skærme, for eksempel mobiltelefoner. Når menuen er åben, vises et overlay under menuen.

{% include code/syntax.html component="header-menu-top" copybutton=true %}

Det er muligt at ændre, hvornår headeren skal vise menuknappen, ved at bruge Sass-variablen `$nav-responsive-breakpoint` og derefter bygge CSS'en selv.

#### Række 1

Række 1 indeholder portal-logo, NemLog-in-oplysninger og “Log af” knap. Headeren skal altid indeholde denne række.

Der er to dele, som skal indsættes i `<header>`-elementet. Første del skal indsættes øverst efter skip-link og indeholder koden, der vises på større skærme.

{% include code/syntax.html component="header-portal" copybutton=true %}

Anden del skal indsættes nederst i mobilmenuen og indeholder koden, der vises på mindre skærme.

{% include code/syntax.html component="header-portal-mobile" copybutton=true %}



Se eventuelt {% include links/component-links.html linktext="eksemplet med den overordnede struktur i headeren" %} for nærmere detaljer om placering.

#### Række 2

Række 2 indeholder selvbetjeningens navn (løsningstitel), ansvarhavendes myndighed og eventuel support/kontaktoplysninger. Headeren skal altid indeholde denne række.

Der er to dele, som skal indsættes i `<header>`-elementet. Første del skal indsættes <em>efter</em> række 1 og indeholder koden, der vises på større skærme.

{% include code/syntax.html component="header-solution" copybutton=true %}

Anden del skal indsættes i mobilmenuen <em>før</em> række 1 og indeholder koden, der vises på mindre skærme.

{% include code/syntax.html component="header-solution-mobile" copybutton=true %}

Se eventuelt {% include links/component-links.html linktext="eksemplet med den overordnede struktur i headeren" %} for nærmere detaljer om placering.

#### Række 3

Række 3 indeholder topnavigation i løsningen og søgefelt. Det er valgfrit, om headeren skal indeholde denne række.

Der er to dele, som skal indsættes i `<header>`-elementet. Første del skal indsættes <em>efter</em> række 2 og indeholder koden, der vises på større skærme. 

{% include code/syntax.html component="header-navigation" copybutton=true %}

Bemærk, at hvis løsningen anvender et søgefelt, skal dette udelukkende indsættes i første kodedel som vist ovenover. Anden del skal indsættes i mobilmenuen <em>før</em> række 2 og indeholder koden, der vises på mindre skærme.

{% include code/syntax.html component="header-navigation-mobile" copybutton=true %}

Se eventuelt <a href="/kode/komponenter/header/#html-struktur">eksemplet med den overordnede struktur i headeren</a> for nærmere detaljer om placering.

#### Topnavigation og venstremenu

Hvis løsningen anvender både en topnavigation og en venstremenu til at vise links til undersider, så skal venstremenuen skjules på mindre skærme og mobilmenuen skal indeholde alle links fra begge menuer. Her er man selv ansvarlig for at sikre, at venstremenuen vises og skjules på de rette tidspunkter, for eksempel ved at anvende <a href="/kode/utilities/#display">hjælpeklasser for display</a>, samt at mobilmenuen indeholder de korrekte links.

### JavaScript

Mobil menuen kræver JavaScript for at fungere. Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:

{% highlight js %}
new DKFDS.Navigation().init();
{% endhighlight %}