---
permalink: "/komponenter/tilbage-til-top/implementering/"
guidelinelink: "/komponenter/tilbage-til-top/guidelines/"
redirect_from:
- "/kode/komponenter/tilbage-til-top/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Tilbage til toppen
lead: Tilbage til toppen-knappen hjælper brugeren med at navigere til toppen af en lang side på en let måde uden at miste overblikket. 
component: "back-to-top"
componentTitle: "Eksempel på tilbage til toppen-knap"
anchor: false
description:
tags:
---

## Installation

### HTML Struktur

{% include code/syntax.html component="back-to-top" copybutton=true %}

Husk at have et id i toppen af siden, f.eks. `id="top"`, som tilbage til toppen-knappen kan linke til. Hvis siden indeholder et {% include links/component-links.html linktext="skip-link" %}, bør id'et ligge umiddelbart før dette.

Tilbage til toppen-knappen bør altid være det første element i en sides footer.

### Javascript
Tilbage til toppen-knappen kræver JavaScript for at fungere. Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:

{% highlight javascript %}
new DKFDS.BackToTop(document.getElementById('BACK-TO-TOP-ID')).init();
{% endhighlight %}

Bemærk, at JavaScripten udelukkende kontrollerer, hvornår knappen skal vises eller skjules. Hvis tryk på knappen skal lave en scroll-animation til toppen, skal man selv stå for implementeringen af denne animation.

Knappen vises og skjules forskelligt, hvis der er en {% include links/component-links.html linktext="venstremenu" %} eller {% include links/component-links.html linktext="trinindikator" %} til stede på siden. Det er derfor vigtigt, at HTML for disse komponenter er anvendt som beskrevet.