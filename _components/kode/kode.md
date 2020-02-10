---
permalink: /kode/
redirect_from:
- /komigang/tiludviklere/
layout: styleguide
title: Kode
category: Kode_category
description:
---

FDS er opdelt i to projekter:

<ul class="nobullet-list">
    <li><a href="https://github.com/detfaellesdesignsystem/dkfds-components" class="icon-link">DKFDS Components (kernen som indeholder komponenterne)<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a></li>
    <li><a href="https://github.com/detfaellesdesignsystem/dkfds-plugins" class="icon-link">DKFDS Plugins<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a></li>
</ul>

## Installation

DKFDS kan installeres ved brug af <a href="https://www.npmjs.com/package/dkfds" class="icon-link">npm pakken<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a> eller du kan <a href="https://github.com/detfaellesdesignsystem/dkfds-components/releases" class="icon-link">download seneste version via Github<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>.

<h3 class="h4">Hent DKFDS (NPM)</h3>

Navigér til roden af dit projekt i en kommando prompt.

Installer DKFDS med følgende kommando:


{% highlight shell %}
npm install --save dkfds
{% endhighlight %}

Modulet 'dkfds' er nu installeret i 'node_modules' mappen.

<h3 class="h4">Hent DKFDS (zip)</h3>

Hent nyeste <a href="https://github.com/detfaellesdesignsystem/dkfds-components/releases" class="icon-link">version som zipfil på Github<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>, og pak indholdet ud i dit projekt.
<h3 class="h4">Inkludér tema</h3>
<h4 class="h5">Virk tema:</h4>

{% highlight html %}
<link type="text/css" rel="stylesheet" href="[sti til DKFDS mappen]/dist/css/dkfds-virkdk.css" />
{% endhighlight %}

<h4 class="h5">Borger.dk tema:</h4>

{% highlight html %}
<link type="text/css" rel="stylesheet" href="[sti til DKFDS mappen]/dist/css/dkfds-borgerdk.css" />
{% endhighlight %}


Har du brug for dit eget tema? Så læs sektionen om, <a href="#temahaandtering">hvordan du tilpasser DKFDS til dit eget tema</a>.

<h4 class="h5">Inkludér JavaScript</h4>

JavaScript kan inkluderes med et script tag eller importeres ind i en eksisterende js fil.

<h5 class="h6">Script tag</h5>

{% highlight html %}
<script src='[sti til DKFDS mappen]/dist/js/dkfds.js'></script>
{% endhighlight %}

<h5 class="h6">Importer modulet i en .js fil</h5>

{% highlight javascript %}
import * as DKFDS from "dkfds";
{% endhighlight %}

<h5 class="h6">Init</h5>

Når DKFDS er inkluderet skal du køre funktionen `DKFDS.init();` ved dom ready, eller hvornår det nu end passer i dit projekt.

<p class="mb-2">Eksempel:</p>

{% highlight javascript %}
document.addEventListener("DOMContentLoaded", function(){
  // Handler when the DOM is fully loaded
  DKFDS.init();
});
{% endhighlight %}

For yderligere JavaScript funktioner, se under hver <a href="/komponenter/">komponent</a>.

<h4 id="temahaandtering">Temahåndtering</h4>

Designsystemet er udviklet med 2 forskellige temaer. Standard temaet er det neutrale tema, hvor primærfarven er grå. Denne grå farve skal overskrives, da det neutrale tema blot er ment som en skabelon til ens eget tilpassede tema. De to andre temaer er målrettet borger.dk og virk.dk.

Temaerne er simple, det eneste som er forskelligt mellem standard temaet og de to andre temaer er primærfarven og nogle få variationer i headeren (fx logo). Alt andet er ens på tværs af temaer.

<p class="mb-2">Tema eksempel – borger.dk (scss):</p>

{% highlight scss %}
// These variables overwrite the default values, giving the style the borger.dk theme
$color-primary:               #44831E;
$color-primary-medium:        #3C5C22;
$color-primary-dark:          #233614;

.header {
    .portal-header{
        background-color: #f1f1f1;
        .logo{
            background-image: url($image-path + '/logo-borgerdk.svg');
            height: 4.8rem;
        }
    }
}

$font-path:         '~dkfds/src/fonts/IBMPlexSans/';
$image-path:        '~dkfds/src/img';
$site-image-path:   '~dkfds/src/img';
$icons-folder-path: '~dkfds/src/img/svg-icons';
@import '~dkfds/src/stylesheets/dkfds';
{% endhighlight %}

##### Browserspecifik styling tilføjes i projektet
###### Webpack

Bemærk, at scss filen kun indeholder basic CSS. Den indeholder således ikke browser specifik CSS.

For at tilføje dette bør SCSS filen køres igennem <a href="https://www.npmjs.com/package/autoprefixer" class="icon-link">autoprefixer<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>, hvor den relevante styling vil blive tilføjet til output CSS filen. 

###### Gulp

Bemærk, at scss filen kun indeholder basic CSS. Den indeholder således ikke browser specifik CSS.

For at tilføje dette bør SCSS filen køres igennem <a href="https://www.npmjs.com/package/gulp-autoprefixer" class="icon-link">autoprefixer<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>, hvor den relevante styling vil blive tilføjet til output CSS filen.

Disse browsers bør defineres i autoprefixer:

{% highlight json %}
[
  '> 1%',
  'Last 2 versions',
  'IE 11',
  'IE 10',
  'IE 9',
]
{% endhighlight %} 

#### Fix for bug i Microsoft Edge og Internet Explorer

En bug i Edge og Internet Explorer gør at list-style-type:none bliver ignoreret, hvis den bliver sat mens en liste er skjult. Du kan undgå dette ved at tilføje css direkte i `head` sektionen.

{% highlight html %}
  <style>
    /* Fixes Edge bug, where list-style-type:none is ignored if it's set after li has been hidden. */   
    ul {
      list-style-type: none;
    }
  </style>
{% endhighlight %}

## DKFDS Plugins

Du skal kun inkludere styling (CSS eller SCSS) fra dkfds-plugins projektet.

Der er i øjeblikket lavet temaer til følgende:

<ul class="nobullet-list">
    <li><a href="https://datatables.net/" class="icon-link">Datatables<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a></li>
    <li><a href="https://github.com/woocommerce/selectWoo" class="icon-link">SelectWoo<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a></li>
    <li><a href="https://github.com/Pikaday/Pikaday" class="icon-link">Pikaday<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a></li>
    <li><a href="https://micromodal.now.sh/" class="icon-link">Micromodal.js<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a></li>
    <li><a href="https://atomiks.github.io/tippyjs/" class="icon-link">Tippy.js<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a></li>
</ul>

dkfds-plugins projektet er tilgængeligt via npm og du kan installere det ved at skrive følgende i en kommando-prompt:

{% highlight console %}
npm install dkfds-plugins --save
{% endhighlight %}

Modulet 'dkfds-plugins' er nu installeret i 'node_modules' mappen.

Inkluder derefter temaerne enten som css direkte:

{% highlight html %}
<link rel="stylesheet" href="[path-to-plugins-project]/dist/css/dkfds-datatables-theme.standalone.min.css">
{% endhighlight %}

Eller inkluder temaerne i SCSS (Bemærk, at du først skal importere DKFDS):

{% highlight js %}
@import "~dkfds-plugins/dist/scss/dkfds-datatables-theme";
{% endhighlight %}
