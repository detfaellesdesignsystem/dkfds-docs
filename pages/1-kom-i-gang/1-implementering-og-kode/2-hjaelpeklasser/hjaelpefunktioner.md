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
anchor: true 
subnav:
- text: Responsive hjælpeklasser
  href: '#responsive-hjaelpeklasser'
- text: Text align
  href: '#text-align'
- text: Margin og padding
  href: '#margin-og-padding'
- text: Display
  href: '#display'
- text: Flexbox
  href: '#flexbox'
- text: Bredde i procent
  href: '#bredde-i-procent'
- text: Baggrundsfarver
  href: '#baggrundsfarver'
- text: Tilgængelighed
  href: '#tilgaengelighed'
---

{:#responsive-hjaelpeklasser}
## Responsive hjælpeklasser

Alle de klasser, som bliver genereret af hjælpefunktionerne, findes både i en version som virker i alle browserstørrelser og i responsive versioner som genereres på baggrund af de breakpoints, som er defineret i scss-variablen `$grid-breakpoints`:

{% highlight scss %}
$grid-breakpoints: ( 
    xs: 0,
    sm: 576px,
    md: 768px,
    lg: 992px,
    xl: 1200px
) !default;
{% endhighlight %}

{:#text-align}
## Text align

Der er opsat en hjælpefunktion, som automatisk genererer klasser til `text-align` baseret på de definerede breakpoints i $grid-breakpoints.

Format: `align-text-{retning}` og `align-text-{breakpoint}-{retning}`

<h3 class="h5 mb-0">Retning:</h3>

- Venstre: `text-align: left`
- Midten: `text-align: center`
- Højre: `text-align: right`

<h3 class="h5 mb-0">Eksempel:</h3>
{% highlight html %}
<h1 class="align-text-right">Tekst til højre</h1>
<h1 class="align-text-md-left">Tekst til højre på skærme over 768px</h1>;
{% endhighlight %}

{:#margin-og-padding}
## Margin og padding

Der er opsat hjælpefunktioner, som genererer klasser til margin og padding. Disse hjælpefunktioner er inspireret af {% include links/external-link.html linktext="Bootstraps Spacing Utilities" %}.

Format: `{css-egenskab}{retning}-{størrelse}` og `{css-egenskab}{retning}-{breakpoint}-{størrelse}`.

<h3 class="h5 mb-0">CSS egenskab:</h3>

- <span class="bold">m</span> – for klasser som sætter `margin`
- <span class="bold">p</span> - for klasser som sætter `padding`

<h3 class="h5 mb-0">Retning:</h3>

- <span class="bold">t</span> – for klasser som sætter `margin-top` eller `padding-top`
- <span class="bold">b</span> – for klasser som sætter `margin-bottom` eller `padding-bottom`
- <span class="bold">l</span> – for klasser som sætter `margin-left` eller `padding-left`
- <span class="bold">r</span> – for klasser som sætter `margin-right` eller `padding-right`
- <span class="bold">x</span> – for klasser som sætter både`*-left` og `*-right`
- <span class="bold">y</span> – for klasser som sætter både`*-top` og `*-bottom`
- blank – for klasser som sætter margin eller padding på alle 4 sider af elementet.

<h3 class="h5 mb-0">Størrelse:</h3>

- <span class="bold">0</span> – for klasser som fjerner alt `margin` eller `padding`
- <span class="bold">1</span> – for klasser som sætter `margin` eller `padding` til `$spacer * 0.25`
- <span class="bold">2</span> – for klasser som sætter `margin` eller `padding` til `$spacer * 0.5`
- <span class="bold">3</span> – for klasser som sætter `margin` eller `padding` til `$spacer`
- <span class="bold">305</span> – for klasser som sætter `margin` eller `padding` til `$spacer * 1.5`
- <span class="bold">4</span> – for klasser som sætter `margin` eller `padding` til `$spacer * 2`
- <span class="bold">405</span> – for klasser som sætter `margin` eller `padding` til `$spacer * 2.5`
- <span class="bold">5</span> – for klasser som sætter `margin` eller `padding` til `$spacer * 3`
- <span class="bold">505</span> – for klasser som sætter `margin` eller `padding` til `$spacer * 3.5`
- <span class="bold">6</span> – for klasser som sætter `margin` eller `padding` til `$spacer * 4`
- <span class="bold">605</span> – for klasser som sætter `margin` eller `padding` til `$spacer * 4.5`
- <span class="bold">7</span> – for klasser som sætter `margin` eller `padding` til `$spacer * 5`
- <span class="bold">705</span> – for klasser som sætter `margin` eller `padding` til `$spacer * 5.5`
- <span class="bold">8</span> – for klasser som sætter `margin` eller `padding` til `$spacer * 6`
- <span class="bold">805</span> – for klasser som sætter `margin` eller `padding` til `$spacer * 6.5`
- <span class="bold">9</span> – for klasser som sætter `margin` eller `padding` til `$spacer * 7`
- <span class="bold">905</span> – for klasser som sætter `margin` eller `padding` til `$spacer * 7.5`

`$spacer` er sat til `8px.`

Du kan selv tilføje flere muligheder ved at tilføje dem til `$spacers` variablen.

<h3 class="h5 mb-0">Breakpoint:</h3>

- blank - for klasser som sætter `margin` eller `padding` for alle browserstørrelser.
- <span class="bold">sm</span> - for klasser som sætter `margin` eller `padding` for browserstørrelser over 576px;
- <span class="bold">md</span> - for klasser som sætter `margin` eller `padding` for browserstørrelser over 768px;
- <span class="bold">lg</span> - for klasser som sætter `margin` eller `padding` for browserstørrelser over 992px;
- <span class="bold">xl</span> - for klasser som sætter `margin` eller `padding` for browserstørrelser over 1200px;

{:#display}
## Display

Der er opsat en hjælpefunktion som automatisk genererer klasser til display-egenskaben baseret på de definerede breakpoints i `$grid-breakpoints`. Disse hjælpeklasser er inspireret af {% include links/external-link.html linktext="Bootstraps Display Utility" %}.

Format: `d-{display}` og `d-{breakpoint}-{display}`

<h3 class="h5 mb-0">Display</h3>

- `none`
- `inline`
- `inline-block`
- `block`
- `flex`
- `inline-flex`

<h3 class="h5 mb-0">Print display</h3>

- `print-none`
- `print-inline`
- `print-inline-block`
- `print-block`
- `print-table`
- `print-table-row`
- `print-table-cell`
- `print-flex`
- `print-inline-flex`

<h3 class="h5 mb-0">Eksempel med grid breakpoints</h3>

<table class="table">
  <thead>
    <tr>
      <th class="w-percent-50">Browserstørrelse</th>
      <th>Klasse</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Skjul på alle</td>
      <td>`d-none`</td>
    </tr>
    <tr>
      <td>Skjul kun på xs</td>
      <td>`d-none d-sm-block`</td>
    </tr>
    <tr>
      <td>Skjul kun på sm</td>
      <td>`d-sm-none d-md-block`</td>
    </tr>
    <tr>
      <td>Skjul kun på md</td>
      <td>`d-md-none d-lg-block`</td>
    </tr>
    <tr>
      <td>Skjul kun på lg</td>
      <td>`d-lg-none d-xl-block`</td>
    </tr>
    <tr>
      <td>Skjul kun på xl</td>
      <td>`d-xl-none`</td>
    </tr>
    <tr>
      <td>Synlig på alle</td>
      <td>`d-block`</td>
    </tr>
    <tr>
      <td>Synlig kun på xs</td>
      <td>`d-block d-sm-none`</td>
    </tr>
    <tr>
      <td>Synlig kun på sm</td>
      <td>`d-none d-sm-block d-md-none`</td>
    </tr>
    <tr>
      <td>Synlig kun på md</td>
      <td>`d-none d-md-block d-lg-none`</td>
    </tr>
    <tr>
      <td>Synlig kun på lg</td>
      <td>`d-none d-lg-block d-xl-none`</td>
    </tr>
    <tr>
      <td>Synlig kun på xl</td>
      <td>`d-none d-xl-block`</td>
    </tr>
  </tbody>
</table>

<h3 class="h5 mb-0">Eksempel på klasser med print</h3>

<table class="table">
  <thead>
    <tr>
      <th class="w-percent-50">Beskrivelse</th>
      <th>Klasse</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Skjul ved print</td>
      <td>`d-print-none`</td>
    </tr>
    <tr>
      <td>Vis element med inline display ved print</td>
      <td>`d-print-inline`</td>
    </tr>
    <tr>
      <td>Vis element med inline-block display ved print</td>
      <td>`d-print-inline-block`</td>
    </tr>
    <tr>
      <td>Vis element med block display ved print</td>
      <td>`d-print-block`</td>
    </tr>
    <tr>
      <td>Vis element som tabel display ved print</td>
      <td>`d-print-table`</td>
    </tr>
    <tr>
      <td>Vis element som en tabel række display ved print</td>
      <td>`d-print-table-row`</td>
    </tr>
    <tr>
      <td>Vis element med tabel celle display ved print</td>
      <td>`d-print-table-cell`</td>
    </tr>
    <tr>
      <td>Vis element med flex display ved print</td>
      <td>`d-print-flex`</td>
    </tr>
    <tr>
      <td>Vis element med inline-flex display ved print</td>
      <td>`d-print-inline-flex`</td>
    </tr>
  </tbody>
</table>

{:#flexbox}
## Flexbox

Der er opsat en hjælpefunktion, som automatisk genererer klasser til flexbox baseret på de definerede breakpoints i `$grid-breakpoints`. Disse hjælpeklasser er inspireret af {% include links/external-link.html linktext="Bootstraps Flex Utility" %}. Bemærk at disse hjælpeklasser kun kan anvendes, når `display` er sat til `flexbox`. Afsnittene om vandret og lodret justering tager udgangspunkt i at retningen er sat til `row`.

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

{:#bredde-i-procent}
## Bredde i procent

Der er opsat en hjælpefunktion som automatisk genererer klasser som styrer bredde i procent. De responsive klasser er baseret på de definerede breakpoints i `$grid-breakpoints`.

Format: `w-percent-{bredde}` og `w-percent-{breakpoint}-{bredde}`

<h3 class="h5 mb-0">Bredde</h3>

- 10: `10%`
- 20: `20%`
- 30: `30%`
- 40: `40%`
- 50: `50%`
- 60: `60%`
- 70: `70%`
- 80: `80%`
- 90: `90%`
- 100: `100%`

<h3 class="h5">Eksempel:</h3>

{% highlight html %}
<h1 class="w-percent-100"> Dette element har en bredde på 100% </h1>
<h1 class="w-percent-md-30"> Dette element har en bredde på 30% på skærme over 768px </h1>
{% endhighlight %}

{:#baggrundsfarver}
## Baggrundsfarver

Der er opsat en hjælpefunktion som automatisk genererer klasser som styrer baggrundsfarver.

Format: `bg-{baggrund}`

<h3 class="h5 mb-0">Baggrundsfarver</h3>

- Normal: `normal`
- Alternativ: `alternative`
- Modal: `modal`

<h3 class="h5">Eksempel:</h3>

{% highlight html %}
<div class="bg-normal"> Dette element har hvid baggrund </div> <br>
<div class="bg-alternative"> Dette element har lysegrå baggrund </div><br>
<div class="bg-modal"> Dette element har en sort baggrund med opacity på 0.4 </div>
{% endhighlight %}

{:#tilgaengelighed}
## Tilgængelighed

Nedenfor vises hvordan du gør dine elementer tilgængelige for skærmlæsere.

- `aria-hidden="true"` og `aria-hidden="false"` bruges til at skjule og vise elementer for skærmlæsere.
- `.sr-only` klassen og mixin `@mixin sr-only()` bruges når elementer kun skal vises for skærmlæsere.
- `aria-expanded="true"` og `aria-expanded="false"` bruges til elementer som toggler mellem at være åbne og lukket.
- `aria-label=""` skal beskrive hvad funktionen af et element gør.
