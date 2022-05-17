---
permalink: /kode/komponenter/header/
redirect_from:
- /kode/komponenter/headers/
parentlink: /kode/komponenter/
title: Headers
layout: styleguide
type: component
category: Kode_category
description: "Dokumentation på implementering af header."
subcategory: Kode
anchor: true
subnav:
- text: Navigation
  href: '#navigation'
- text: Ekstra rækker
  href: '#ekstra-raekker'
---
{% include code/preview-image.html component="header-full" alt="Billedet viser header komponent" title="Eksempel på header komponent" %}

## Installation

### HTML Struktur

{% include code/syntax.html component="header-wrapper" %}

Nedenstående dele indsættes i et `header` element under `body`.

#### Portal (Obligatorisk)

Portal header indeholder portalens logo samt info om hvem, der er logget ind.

Denne del bør altid indgå i en header.

{% include code/syntax.html component="header-portal" %}

Hvis man har en header uden navigation skal man stadig <a href="#navigation-mobil">tilføje en mobilmenu</a>, da den viser data fra headeren, som normalt skjules i mobilvisning.

#### Løsning (Obligatorisk)

Løsningsheaderen indeholder løsningens titel samt info om, hvilken myndighed, der står bag løsningen.

Denne del bør altid indgå i en header.

{% include code/syntax.html component="header-solution" %}

{:#navigation}
#### Navigation (Obligatorisk)

Navigationsområdet kan indeholde flere rækker med forskellige former for navigation.

Alt indhold i `<nav>` elementet vil på små skærme bliver vist i en skjult menu, som vises ved tryk på menu-knappen. Som standard vises denne menu, når skærmen er mindre end 992px bred. Man kan indstille hvornår, der skal bruges denne menu via variablen `$nav-responsive-breakpoint`.

{:#navigation-mobil}
##### Navigation kun til mobil
Hvis man har en header uden navigation skal nedenstående stadig tilføjes, da det er en menu der kan åbnes på mobil som viser information fra headeren som ellers bliver skjult.

{% include code/syntax.html component="header-navigation-mobil" %}

Hvis man har en navigation i headeren skal man bruge en af de andre herunder.

##### Hovednavigation
{% include code/syntax.html component="header-navigation" %}

##### Hovednavigation med ekstra navigationsrækker
Ekstra navigationsrækker kan indeholde alt lige fra <a href="/komponenter/knapper/">knapper</a>, links til <a href="/komponenter/modal/">modalvinduer</a>, <a href="/komponenter/overflowmenu/">overflow menuer</a> og sidst <a href="/komponenter/funktionslink/">funktionslink</a>.

Hvis man laver en header med lidt indhold, er det anbefalet at man indstiller `$nav-responsive-breakpoint` til at have en lavere værdi, fx. 768px.

{% include code/syntax.html component="header-navigation-complex" %}

### JavaScript
Mobil menuen kræver JavaScript for at fungere. Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:

{% highlight js %}
new DKFDS.Navigation().init();
{% endhighlight %}