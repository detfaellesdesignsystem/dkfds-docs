---
permalink: "/kom-i-gang/implementering-kode/hjaelpeklasser/"
parentlink: "/kom-i-gang/implementering-kode/"
redirect_from:
- /design/utility/
- /komigang/tiludviklere/utilities/
- /kode/utilities/
layout: styleguide
type: component
category: Kom_i_gang_category
subcategory: Kom i gang
title: Hjælpeklasser
description: Du kan bruge hjælpeklasser til at skræddersy dit indhold i forhold til placering, afstande, farver, bredde og visning
tags:
- text-align
- center
- text-align:center
---

{% include anchorlinks.html headings="Hjaelpeklasser" %}

## Om hjælpeklasserne {#{% include create-id.html heading="Om hjælpeklasserne" %}}

Det Fælles Designsystem tilbyder en række hjælpeklasser, hvis formål er at gøre det nemt at ændre fx størrelse eller placering af et element hurtigt.

<h3 class="h5 mb-0">Breakpoint</h3>

Flere af hjælpeklasserne har responsive muligheder, så man kan justere et element forskelligt afhængigt af skærmstørrelse. Disse klasser vil i de følgende afsnit have værdien `{breakpoint}` nævnt i deres format. For at gøre en hjælpeklasse responsiv, skal du erstatte `{breakpoint}` med en af nedenstående værdier.

- Ekstra små skærme (<576px): `xs`
- Små skærme (≥576px): `sm`
- Mellem skærme (≥768px): `md`
- Store skærme (≥992px): `lg`
- Ekstra store skærme (≥1200px): `xl`

Eksempelvis vil hjælpeklassen `d-md-block` kun have effekt på skærmstørrelser over 768px. Se de følgende afsnit for flere detaljer om de forskellige formater.

## Tekstjustering {#{% include create-id.html heading="Tekstjustering" %}}

Disse hjælpeklasser bruges til at styre, om en tekst skal være venstrejusteret, centreret eller højrejusteret. Hjælpeklassen sætter CSS-egenskaben `text-align` på elementet.

Format: `align-text-{retning}` og `align-text-{breakpoint}-{retning}`

<h3 class="h5 mb-0">Retning</h3>

- Venstre: `left`
- Midten: `center`
- Højre: `right`

<h3 class="h5 mb-0">Eksempel</h3>

{% highlight html %}
<p class="align-text-right"> Højrejusteret tekst på alle skærme </p>
<p class="align-text-md-center"> Centreret tekst på skærme over 768px </p>
{% endhighlight %}

## Margin og padding {#{% include create-id.html heading="Margin og padding" %}}

Disse hjælpeklasser bruges til at styre padding og margin på et element (inspireret af {% include links/external-link.html linktext="Bootstraps Spacing Utilities" %}).

Format: `{egenskab}{retning}-{størrelse}` og `{egenskab}{retning}-{breakpoint}-{størrelse}`.

<h3 class="h5 mb-0">Egenskab</h3>

- <span class="bold">`m`</span> – for klasser som sætter margin
- <span class="bold">`p`</span> - for klasser som sætter padding

<h3 class="h5 mb-0">Retning</h3>

- <span class="bold">`t`</span> – for klasser som sætter `margin-top` eller `padding-top`
- <span class="bold">`b`</span> – for klasser som sætter `margin-bottom` eller `padding-bottom`
- <span class="bold">`l`</span> – for klasser som sætter `margin-left` eller `padding-left`
- <span class="bold">`r`</span> – for klasser som sætter `margin-right` eller `padding-right`
- <span class="bold">`x`</span> – for klasser som sætter både`*-left` og `*-right`
- <span class="bold">`y`</span> – for klasser som sætter både`*-top` og `*-bottom`

Undlades retning sættes margin eller padding på alle 4 sider af elementet.

<h3 class="h5 mb-0">Størrelse</h3>

- <span class="bold">`0`</span> – 0px
- <span class="bold">`1`</span> – `$spacer * 0.25`, hvilket som standard er 2px
- <span class="bold">`2`</span> – `$spacer * 0.5`, hvilket som standard er 4px
- <span class="bold">`3`</span> – `$spacer`, hvilket som standard er 8px
- <span class="bold">`305`</span> – `$spacer * 1.5`, hvilket som standard er 12px
- <span class="bold">`4`</span> – `$spacer * 2`, hvilket som standard er 16px
- <span class="bold">`405`</span> – `$spacer * 2.5`, hvilket som standard er 20px
- <span class="bold">`5`</span> – `$spacer * 3`, hvilket som standard er 24px
- <span class="bold">`505`</span> – `$spacer * 3.5`, hvilket som standard er 28px
- <span class="bold">`6`</span> – `$spacer * 4`, hvilket som standard er 32px
- <span class="bold">`605`</span> – `$spacer * 4.5`, hvilket som standard er 36px
- <span class="bold">`7`</span> – `$spacer * 5`, hvilket som standard er 40px
- <span class="bold">`705`</span> – `$spacer * 5.5`, hvilket som standard er 44px
- <span class="bold">`8`</span> – `$spacer * 6`, hvilket som standard er 48px
- <span class="bold">`805`</span> – `$spacer * 6.5`, hvilket som standard er 52px
- <span class="bold">`9`</span> – `$spacer * 7`, hvilket som standard er 56px
- <span class="bold">`905`</span> – `$spacer * 7.5`, hvilket som standard er 60px

Sass-variablen `$spacer` er som standard sat til 8px.

<h3 class="h5 mb-0">Eksempel</h3>

{% highlight html %}
<p class="mt-8"> Tekst med margin på 48px over elementet </p>
<p class="p-0"> Padding på alle fire sider sat til 0px på elementet </p>
<p class="my-xl-1"> Tekst med margin på 2px over og under elementet på skærme over 1200px </p>
{% endhighlight %}

## Display {#{% include create-id.html heading="Display" %}}

Disse hjælpeklasser bruges til at styre CSS-egenskaben `display` på et element (inspireret af {% include links/external-link.html linktext="Bootstraps Display Utility" %}).

Format: `d-{display}` og `d-{breakpoint}-{display}`

<h3 class="h5 mb-0">Display</h3>

- `none`
- `inline`
- `inline-block`
- `block`
- `flex`
- `inline-flex`
- `print-none`
- `print-inline`
- `print-inline-block`
- `print-block`
- `print-table`
- `print-table-row`
- `print-table-cell`
- `print-flex`
- `print-inline-flex`

`print`-værdierne sætter udelukkende `display`-egenskaben i printformat.

<h3 class="h5 mb-0">Eksempel</h3>

{% highlight html %}
<p class="d-none"> Elementet er skjult </p>
<p class="d-block d-print-none"> Elementet er synligt på skærme, men skjult hvis siden printes </p>
<p class="d-block d-md-inline"> Elementet har display-værdien 'block' på små skærme og værdien 'inline' på skærme over 768px </p>
{% endhighlight %}

## Flexbox {#{% include create-id.html heading="Flexbox" %}}

Disse hjælpeklasser bruges til at sætte de CSS-egenskaber, som er relevante, når `display: flex` er sat på et element (inspireret af {% include links/external-link.html linktext="Bootstraps Flex Utility" %}). 

Du kan fx sætte `display: flex` på et element med Det Fælles Designsystems hjælpeklasse `d-flex`.

### Retning {#{% include create-id.html heading="Retning" %}}

Format: `flex-{retning}` og `flex-{breakpoint}-{retning}`

<h4 class="h5 mb-0">Retning</h4>

- `row`
- `column`
- `row-reverse`
- `column-reverse`

<h3 class="h5 mb-0">Eksempel</h3>

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

<h3 class="h5 mb-0">Eksempel</h3>

{% highlight html %}
<div class="d-flex flex-nowrap"> Flex-containerens elementer står altid i én række </div>
<div class="d-flex flex-md-wrap"> Flex-containerens elementer kan ombrydes på skærme over 768px </div>
{% endhighlight %}

### Vandret justering

<em>Bemærk: Eksemplerne tager udgangspunkt i, at <a href="#retning">retningen</a> er sat til `row`.</em>

Format: `justify-content-{justering}` og `justify-content-{breakpoint}-{justering}`

<h4 class="h5 mb-0">Justering</h4>

- `start`
- `end`
- `center`
- `between`
- `around`

<h3 class="h5 mb-0">Eksempel</h3>

{% highlight html %}
<div class="d-flex justify-content-start"> Flex-containerens elementer står til venstre </div>
<div class="d-flex justify-content-md-center"> Flex-containerens elementer står i midten på skærme over 768px </div>
{% endhighlight %}

### Lodret justering af elementer

<em>Bemærk: Eksemplerne tager udgangspunkt i, at <a href="#retning">retningen</a> er sat til `row`.</em>

Format: `align-items-{justering}` og `align-items-{breakpoint}-{justering}`

<h4 class="h5 mb-0">Justering</h4>

- `start`
- `end`
- `center`
- `baseline`
- `stretch`

<h3 class="h5 mb-0">Eksempel</h3>

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

<h3 class="h5 mb-0">Eksempel</h3>

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

<h3 class="h5 mb-0">Eksempel</h3>

{% highlight html %}
<div class="d-flex flex-wrap align-content-start"> Flex-containerens elementer står samlet øverst </div>
<div class="d-flex flex-wrap align-content-md-end"> Flex-containerens elementer står samlet nederst på skærme over 768px </div>
{% endhighlight %}

## Bredde i procent {#{% include create-id.html heading="Bredde i procent" %}}

Disse hjælpeklasser bruges til at styre bredden på et element.

Format: `w-percent-{bredde}` og `w-percent-{breakpoint}-{bredde}`

<h3 class="h5 mb-0">Bredde</h3>

- 10%: `10`
- 20%: `20`
- 30%: `30`
- 40%: `40`
- 50%: `50`
- 60%: `60`
- 70%: `70`
- 80%: `80`
- 90%: `90`
- 100%: `100`

<h3 class="h5">Eksempel</h3>

{% highlight html %}
<p class="w-percent-100"> Dette element har en bredde på 100% </p>
<p class="w-percent-md-30"> Dette element har en bredde på 30% på skærme over 768px </p>
{% endhighlight %}

## Baggrundsfarver {#{% include create-id.html heading="Baggrundsfarver" %}}

Disse hjælpeklasser bruges til at styre baggrundsfarven på et element.

Format: `bg-{baggrund}`

<h3 class="h5 mb-0">Baggrundsfarver</h3>

- `normal`
- `alternative`
- `modal`

<h3 class="h5">Eksempel</h3>

{% highlight html %}
<div class="bg-normal"> Dette element har hvid baggrund </div>
<div class="bg-alternative"> Dette element har lysegrå baggrund </div>
<div class="bg-modal"> Dette element har en sort baggrund med opacity på 0.4 </div>
{% endhighlight %}

## Position {#{% include create-id.html heading="Position" %}}

Disse hjælpeklasser bruges til at sætte CSS-egenskaben `position` på et element.

Format: `position-{position}`

<h3 class="h5 mb-0">Position</h3>

- `static`
- `relative`
- `absolute`
- `fixed`
- `sticky`

Derudover findes der følgende hjælpeklasser til specifikt at placere et element i toppen eller bunden.

- `fixed-top`
- `fixed-bottom`
- `sticky-top`

<h3 class="h5">Eksempel</h3>

{% highlight html %}
<div class="position-absolute"> Dette element har egenskaben 'position: absolute' </div>
<div class="fixed-top"> Dette element sidder i toppen af siden </div>
{% endhighlight %}