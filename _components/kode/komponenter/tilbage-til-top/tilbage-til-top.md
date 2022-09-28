---
permalink: /kode/komponenter/tilbage-til-top/
parentlink: /kode/komponenter/
title: Tilbage til toppen
layout: styleguide
type: component
category: Kode_category
subcategory: Kode
---
{% include code/preview-box.html component="back-to-top" title="Eksempel på tilbage til toppen-knap" %}

## Eksempler og retningslinjer
<ul class="nobullet-list">
    <li><a href="/komponenter/tilbage-til-top/#retningslinjer">Retningslinjer</a></li>
    <li><a href="/komponenter/tilbage-til-top/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur

{% include code/syntax.html component="back-to-top" %}

Husk at have et id i toppen af siden, f.eks. `id="top"`, som tilbage til toppen-knappen kan linke til. Hvis siden indeholder et <a href="/komponenter/skip-link/">skip-link</a>, bør id'et ligge umiddelbart før dette.

Tilbage til toppen-knappen bør altid være det første element i en sides footer.

### Javascript
Tilbage til toppen-knappen kræver JavaScript for at fungere. Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:

{% highlight javascript %}
new DKFDS.BackToTop(document.getElementById('BACK-TO-TOP-ID')).init();
{% endhighlight %}

Bemærk, at JavaScripten udelukkende kontrollerer, hvornår knappen skal vises eller skjules. Hvis tryk på knappen skal lave en scroll-animation til toppen, skal man selv stå for implementeringen af denne animation.

Knappen vises og skjules forskelligt, hvis der er en <a href="/komponenter/venstremenu/">venstremenu</a> eller <a href="/komponenter/trinindikator/">trinindikator</a> til stede på siden. Det er derfor vigtigt, at HTML for disse komponenter er anvendt som beskrevet.
