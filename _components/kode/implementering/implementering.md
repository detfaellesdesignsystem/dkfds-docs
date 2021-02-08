---
permalink: /kode/implementering/
redirect_from:
- /komigang/tiludviklere/
layout: styleguide
title: Implementering af DKFDS
tags: 
- "installation"
- "implementering"
category: Kode_category
subcategory: Kode
description: "Sådan kommer du i gang med FDS i dit projekt. Værd at læse for alle udviklere."
---

DKFDS kan installeres ved brug af <a href="https://www.npmjs.com/package/dkfds" class="icon-link">npm pakken<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a> eller du kan <a href="https://github.com/detfaellesdesignsystem/dkfds-components/releases" class="icon-link">download seneste version via Github<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>.

## Hent DKFDS (NPM)

Navigér til roden af dit projekt i en kommando prompt.

Installer DKFDS med følgende kommando:

{% highlight shell %}
npm install --save dkfds
{% endhighlight %}

Modulet 'dkfds' er nu installeret i 'node_modules' mappen.

## Hent DKFDS (zip)

Hent nyeste <a href="https://github.com/detfaellesdesignsystem/dkfds-components/releases" class="icon-link">version som zipfil på Github<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>, og pak indholdet ud i dit projekt.

## Inkludér  CSS

### Virk tema

{% highlight html %}
<link type="text/css" rel="stylesheet" href="[sti til DKFDS mappen]/dist/css/dkfds-virkdk.css" />
{% endhighlight %}

### Borger.dk tema

{% highlight html %}
<link type="text/css" rel="stylesheet" href="[sti til DKFDS mappen]/dist/css/dkfds-borgerdk.css" />
{% endhighlight %}

Har du brug for dit eget tema? Så læs sektionen om, <a href="#temahaandtering">hvordan du tilpasser DKFDS til dit eget tema</a>.

## Inkludér JavaScript

JavaScript kan inkluderes med et script tag eller importeres ind i en eksisterende js fil.

## `<script>` tag
Indsæt følgende script tag før`</body>`

{% highlight html %}
<script src='[sti til DKFDS mappen]/dist/js/dkfds.js'></script>
{% endhighlight %}

### Importer modulet i en .js fil

{% highlight javascript %}
import * as DKFDS from "dkfds";
{% endhighlight %}

### Init

Når DKFDS er inkluderet kan du køre funktionen `DKFDS.init();` ved dom ready, eller hvornår det nu end passer i dit projekt.

`DKFDS.init();` aktiverer javascript for alle komponenter, men man kan også tilføje javascript specifikt for hver komponent. Information omkring javascript for hver komponent finder du i <a href="/kode/komponenter/">kode sektionen for den specifikke komponent</a>.

<p class="mb-2">Eksempel på init:</p>

{% highlight javascript %}
document.addEventListener("DOMContentLoaded", function(){
  // Handler when the DOM is fully loaded
  DKFDS.init();
});
{% endhighlight %}

{:#temahaandtering}
## Temahåndtering

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

## Browserspecifik styling tilføjes i projektet
### Webpack

Bemærk, at scss filen kun indeholder basic CSS. Den indeholder således ikke browser specifik CSS.

For at tilføje dette bør SCSS filen køres igennem <a href="https://www.npmjs.com/package/autoprefixer" class="icon-link">autoprefixer<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>, hvor den relevante styling vil blive tilføjet til output CSS filen. 

### Gulp

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

### Fix for bug i Microsoft Edge og Internet Explorer

En bug i Edge og Internet Explorer gør at list-style-type:none bliver ignoreret, hvis den bliver sat mens en liste er skjult. Du kan undgå dette ved at tilføje css direkte i `head` sektionen.

{% highlight html %}
  <style>
    /* Fixes Edge bug, where list-style-type:none is ignored if it's set after li has been hidden. */   
    ul {
      list-style-type: none;
    }
  </style>
{% endhighlight %}
