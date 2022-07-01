---
title: Flexbox
parent: Hjælpefunktioner
order: 05
---

Der er opsat en hjælpefunktion som automatisk genererer klasser til flexbox baseret på de definerede breakpoints i `$grid-breakpoints`. Disse hjælpeklasser er inspireret af <a href="https://getbootstrap.com/docs/4.1/utilities/flex/" class="icon-link">Bootstraps Flex Utility<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>. Bemærk at disse hjælpeklasser kun kan anvendes, når display er sat til flexbox. Afsnittene om vandret og lodret justering tager udgangspunkt i at retningen er sat til `row`.

### Retning

Format: `flex-{retning}` og `flex-{breakpoint}-{retning}`

<h4 class="h5 mb-0">Retning</h4>

- `row`
- `column`
- `row-reverse`
- `column-reverse`

{% highlight html %}
<div class="d-flex flex-row"> Flex-containerens elementer står vandret </div>
<div class="d-flex flex-md-column"> Flex-containerens elementer står lodret på skærme over 768px </div>
{% endhighlight %}

### Ombrydning

Format: `flex-{ombrydning}` og `flex-{breakpoint}-{ombrydning}`

<h4 class="h5 mb-0">Ombrydning</h4>

- `wrap`
- `nowrap`
- `wrap-reverse`

{% highlight html %}
<div class="d-flex flex-nowrap"> Flex-containerens elementer står altid i én række </div>
<div class="d-flex flex-md-wrap"> Flex-containerens elementer kan ombrydes på skærme over 768px </div>
{% endhighlight %}

### Vandret justering

Format: `justify-content-{justering}` og `justify-content-{breakpoint}-{justering}`

<h4 class="h5 mb-0">Justering</h4>

- `start`
- `end`
- `center`
- `between`
- `around`

{% highlight html %}
<div class="d-flex justify-content-start"> Flex-containerens elementer står til venstre </div>
<div class="d-flex justify-content-md-center"> Flex-containerens elementer står i midten på skærme over 768px </div>
{% endhighlight %}

### Lodret justering af elementer

Format: `align-items-{justering}` og `align-items-{breakpoint}-{justering}`

<h4 class="h5 mb-0">Justering</h4>

- `start`
- `end`
- `center`
- `baseline`
- `stretch`

{% highlight html %}
<div class="d-flex align-items-start"> Flex-containerens elementer står øverst </div>
<div class="d-flex align-items-md-end"> Flex-containerens elementer står nederst på skærme over 768px </div>
{% endhighlight %}

### Lodret justering af et enkelt element

Format: `align-self-{justering}` og `align-self-{breakpoint}-{justering}`

<h4 class="h5 mb-0">Justering</h4>

- `auto`
- `start`
- `end`
- `center`
- `baseline`
- `stretch`

{% highlight html %}
<div class="d-flex"><div class="align-self-start"> Flex-containerens element står øverst </div></div>
<div class="d-flex"><div class="align-self-md-end"> Flex-containerens element står nederst på skærme over 768px </div></div>
{% endhighlight %}

### Lodret justering af rækker af elementer

Format: `align-content-{justering}` og `align-content-{breakpoint}-{justering}`

<h4 class="h5 mb-0">Justering</h4>

- `start`
- `end`
- `center`
- `between`
- `around`
- `stretch`

{% highlight html %}
<div class="d-flex flex-wrap align-content-start"> Flex-containerens elementer står samlet øverst </div>
<div class="d-flex flex-wrap align-content-md-end"> Flex-containerens elementer står samlet nederst på skærme over 768px </div>
{% endhighlight %}