---
permalink: /kode/komponenter/header/
parentlink: /kode/komponenter/
redirect_from:
- /kode/komponenter/headers/
layout: styleguide
category: Kode_category
subcategory: Kode
title: Header
previewimage: "header-all-rows-dropdown"
previewimageTitle: "Eksempel på header komponent"
anchor: true
subnav:
- text: Navigation
  href: '#navigation'
- text: Ekstra rækker
  href: '#ekstra-raekker'
description: "Dokumentation på implementering af header."
tags:
---

## Installation

### HTML Struktur

En header består grundlæggende af tre dele, der alle er nødvendige at inkludere: Info om portalen, info om løsningen og navigation. Nedenstående eksempel viser de tre deles overordnede struktur i `header`-elementet. De øvrige afsnit indeholder uddybende kodeeksempler.

{% include code/syntax.html component="header-overview" copybutton=true %}

Placer `header`-elementet i din HTML-sides `body`-element.

#### Portal (desktop)

Portalrækken indeholder portalens logo samt info om, hvem der er logget ind.

{% include code/syntax.html component="header-portal" copybutton=true %}

#### Løsning (desktop)

Løsningsrækken indeholder løsningens titel samt info om, hvilken myndighed der står bag løsningen.

{% include code/syntax.html component="header-solution" copybutton=true %}

{:#navigation}
#### Navigation

Navigationen indeholder sidens hovedmenu og menu på små skærme.

På større skærme vil brugeren kunne se en menurække med links til de forskellige sider i løsningen. På mindre skærme skjules denne menurække og erstattes af en menuknap, der ved klik åbner en menu med disse links. Denne menu indeholder også portal- og løsningsinfo, der ellers ikke ville være plads til på små skærme.

Som standard ændres menurækken til en menuknap, når skærmen er mindre end 992px bred. Dette er dog muligt at ændre ved at bruge variablen `$nav-responsive-breakpoint`.

{% include code/syntax.html component="header-navigation" copybutton=true %}

{:#navigation-mobil}
##### Når der ikke anvendes menurække i løsningen

Hvis man har en header uden en menurække, skal man stadig tilføje navigationsdelen, da information om portal og løsning ellers bliver skjult på små skærme.

I stedet for klassen `navigation-header` skal man anvende `navigation-header-mobile` og `nav`-elementet udelades.

{% include code/syntax.html component="header-navigation-mobil" copybutton=true %}

##### Menurække og venstremenu

Hvis løsningen anvender både en menurække med links til hovedsider og en venstremenu til at vise links til undersider, så bør navigationen på mindre skærme indeholde alle links fra begge menuer. Dette gøres ved at anvende to navigationsdele: En til større skærme og en til mindre skærme. Her er man dog selv ansvarlig for at sikre, at alle menuer vises og skjules på de rette tidspunkter, for eksempel ved at anvende <a href="/kode/utilities/#display">hjælpeklasser for display</a>.

Eksemplet nedenunder viser den grundlæggende struktur for headeren, når løsningen indeholder både menurække og venstremenu:

{% include code/syntax.html component="header-navigation-sidemenu" copybutton=true %}

### JavaScript

Mobil menuen kræver JavaScript for at fungere. Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:

{% highlight js %}
new DKFDS.Navigation().init();
{% endhighlight %}