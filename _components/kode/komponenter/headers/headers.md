---
permalink: /kode/komponenter/headers/
parentlink: /kode/komponenter/
title: Headers
layout: styleguide
type: component
category: Kode_category
subcategory: Kode
anchor: true
subnav:
- text: Navigation
  href: '#navigation'
- text: Ekstra rækker
  href: '#ekstra-rækker'
---
{% include code/preview-image.html component="header" alt="Billedet viser header komponent" title="Eksempel på header komponent" %}

## Installation

### HTML Struktur

{% include code/syntax.html component="header" %}

#### Portal header

Portal header indeholder portalens logo samt info om hvem, der er logget ind.

Denne del bør altid indgå i en header.

#### Løsningsheader

Løsningsheaderen indeholder løsningens titel samt info om, hvilken myndighed, der står bag løsningen.

Denne del bør altid indgå i en header.

{:#navigation}
#### Navigation

Navigationsområdet kan indeholde flere rækker med forskellige former for navigation.

Alt indhold i `<nav>` elementet vil på små skærme bliver vist i en skjult menu, som vises ved tryk på menu-knappen. Som standard vises denne menu, når skærmen er mindre end 992px bred. Man kan indstille hvornår, der skal bruges denne menu via variablen `$nav-responsive-breakpoint`.

##### Hovedmenu

Hovedmenuen indeholder selve løsningens navigation.

{:#ekstra-rækker}
##### Ekstra rækker

Ekstra navigationsrækker kan indeholde alt lige fra <a href="/komponenter/buttons/">knapper</a>, links til <a href="/udvidelser/micromodal/">modalvinduer</a>, <a href="/komponenter/overflowmenu/">overflow menuer</a> og sidst <a href="/komponenter/funktionslink/">funktionslink</a>.

Hvis man laver en header med lidt indhold, er det anbefalet at man indstiller `$nav-responsive-breakpoint` til at have en lavere værdi, fx. 768px.

### JavaScript
Mobil menuen kræver JavaScript for at fungere. Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:

{% highlight js %}
new DKFDS.Navigation();
{% endhighlight %}
