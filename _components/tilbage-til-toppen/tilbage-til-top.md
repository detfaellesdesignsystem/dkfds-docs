---
permalink: "/komponenter/tilbage-til-top/"
redirect_from:
- "/kode/komponenter/tilbage-til-top/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Tilbage til toppen
lead: Tilbage til toppen-knappen hjælper brugeren med at navigere til toppen af en lang side på en let måde uden at miste overblikket. 
description: Lad brugeren navigere tilbage til toppen.
tags:
- back-to-top
- top-link
- top-knap
- til toppen
- til-top
tabs: "Retningslinjer, kode"
---

{% include tabs.html guidelines=true code=true %}

{% include code/preview-box.html component="back-to-top" title="Eksempel på tilbage til toppen" classes="intro-example" %}

{% include anchorlinks.html guidelines="TilbageTilToppen" code="TilbageTilToppen_Kode" classes="hide-code" %}

<!--split-->

## Sådan bruges komponenten {#{% include create-id.html heading="Sådan bruges komponenten" %}}

### Anvendes til

Bruges i forbindelse med lange sider, hvor brugeren kan befinde sig langt fra de øvrige knapper og interaktioner på siden.

### Anvendes ikke til

Anvendes ikke som navigationsknap eller på anden vis til andet end at sende brugeren til toppen af siden. 

### Vejledning

Tilbage til toppen-knappen placeres nederst til højre på siden. Knappen er "sticky", således at den altid er placeret det samme sted.

På sider, der ikke har {% include links/component-guideline-link.html linktext="trinindikator" %} eller {% include links/component-guideline-link.html linktext="venstremenu" %}, vises tilbage til toppen-knappen efter brugeren har scrollet 2 skærmsiders længde. Ligeledes vil knappen forsvinde igen, når brugeren scroller op og der er mindre end 2 skærmsiders længde til toppen af siden. 

På sider med trinindikator eller venstremenu vises knappen, når sidste element i venstre side (af trinindikatoren eller venstremenuen) er ude af syne for brugeren eller hvis brugeren har scrollet 2 skærmsiders længde.

Bemærk at placeringen af knappen i højre side afviger fra den generelle anbefaling om venstrestilling af indholdet i én kolonne (se {% include links/internal-link.html linktext="Layout" %}). Denne beslutning er baseret på etableret best practice vedrørende "til toppen"-knapper (Loranger, 2017). Dette gør yderligere risikoen for at overlappe andet indhold på siden mindre.

Det anbefales at lave en scroll-animation til toppen, når der klikkes på knappen, da det understøtter brugerens fornemmelse af, hvor de er på siden.

#### Komponenten på mobil

På mobil anvendes knappen uden tekst for at spare plads på skærmen. 

{% include code/preview-image.html component="back-to-top" alt="Eksempel på tilbage til toppen på mobil" code="/komponenter/tilbage-til-top/implementering/" %}

## Se komponenten i eksempelløsninger {#{% include create-id.html heading="Se komponenten i eksempelløsninger" %}}

{:.nobullet-list}
- {% include links/demo-link.html linktext="Trinformular til registrering: Opsummering" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Sagsoversigt: Afgørelser" returnID="eksempelloesninger" %}

## Referencer {#{% include create-id.html heading="Referencer" %}}

{% include links/external-link.html linktext="Hoa Loranger: Back-to-Top Button Design Guidelines (2017)" %}

<!--split-->

## Installation {#{% include create-id.html heading="Installation" append="-kode" %}}

### HTML Struktur

{% include code/syntax.html component="back-to-top" copybutton=true %}

Husk at have et id i toppen af siden, f.eks. `id="top"`, som tilbage til toppen-knappen kan linke til. Dette id skal ligge lige før komponenten {% include links/component-guideline-link.html linktext="Gå til sidens indhold" %}.

Tilbage til toppen-knappen bør altid være det første element i en sides footer.

### Javascript

Tilbage til toppen-knappen kræver JavaScript for at fungere. Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:

{% highlight javascript %}
new DKFDS.BackToTop(document.getElementById('BACK-TO-TOP-ID')).init();
{% endhighlight %}

Bemærk, at JavaScripten udelukkende kontrollerer, hvornår knappen skal vises eller skjules. Hvis tryk på knappen skal lave en scroll-animation til toppen, skal man selv stå for implementeringen af denne animation.

Knappen vises og skjules forskelligt, hvis der er en {% include links/component-guideline-link.html linktext="venstremenu" %} eller {% include links/component-guideline-link.html linktext="trinindikator" %} til stede på siden. Det er derfor vigtigt, at HTML for disse komponenter er anvendt som beskrevet.