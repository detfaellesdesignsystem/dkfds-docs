---
permalink: /komigang/tiludviklere/
redirect_from:
- /omdesignsystemet/tiludviklere/
layout: styleguide
title: Til udviklere
category: Kom_i_gang_category
subcategory: Kom i gang
description: Til udviklere, der skal gøre brug af Det Fælles Designsystem.
---

<p>FDS er opdelt i to projekter:</p>
<ul class="nobullet-list">
    <li><a href="https://github.com/detfaellesdesignsystem/dkfds-components" class="icon-link">DKFDS Components (kernen som indeholder komponenterne)<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a></li>
    <li><a href="https://github.com/detfaellesdesignsystem/dkfds-plugins" class="icon-link">DKFDS Plugins<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a></li>
</ul>

<h2>Installation</h2>
<p>DKFDS kan installeres ved brug af <a href="https://www.npmjs.com/package/dkfds" class="icon-link">npm pakken<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a> eller du kan <a href="https://github.com/detfaellesdesignsystem/dkfds-components/releases" class="icon-link">download seneste version via Github<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>.</p>
<h3 class="h4">Hent DKFDS (NPM)</h3>
<p>Navigér til roden af dit projekt i en kommando prompt.</p>
<p>Installer DKFDS med følgende kommando:</p>
<pre>npm install --save dkfds</pre>
<p>Modulet 'dkfds' er nu installeret i 'node_modules' mappen.</p>
<h3 class="h4">Hent DKFDS (zip)</h3>
<p>Hent nyeste <a href="https://github.com/detfaellesdesignsystem/dkfds-components/releases" class="icon-link">version som zipfil på Github<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>, og pak indholdet ud i dit projekt.</p>
<h3 class="h4">Inkludér tema</h3>
<h4 class="h5">Virk tema:</h4>
<pre>&lt;link type="text/css" rel="stylesheet" href="[sti til DKFDS mappen]/dist/css/dkfds-virkdk.css" /&gt;</pre>
<h4 class="h5">Borger.dk tema:</h4>
<pre>&lt;link type="text/css" rel="stylesheet" href="[sti til DKFDS mappen]/dist/css/dkfds-borgerdk.css" /&gt;</pre>
<p>Har du brug for dit eget tema? Så læs sektionen om, <a href="#temahaandtering">hvordan du tilpasser DKFDS til dit eget tema</a>.</p>
<h4 class="h5">Inkludér JavaScript</h4>
<p>JavaScript kan inkluderes med et script tag eller importeres ind i en eksisterende js fil.</p>
<h5 class="h6">Script tag</h5>
<pre>&lt;script src='[sti til DKFDS mappen]/dist/js/dkfds.js'&gt;&lt;/script&gt;</pre>
<h5 class="h6">Importer modulet i en .js fil</h5>
<pre>import * as DKFDS from "dkfds";</pre>
<h5 class="h6">Init</h5>
<p>Når DKFDS er inkluderet skal du køre funktionen <code>DKFDS.init();</code> ved dom ready, eller hvornår det nu end passer i dit projekt.</p>
<p class="mb-2">Eksempel:</p>
<pre>
document.addEventListener("DOMContentLoaded", function(){
  // Handler when the DOM is fully loaded
  DKFDS.init();
});</pre>
<p>For yderligere JavaScript funktioner, se under hver <a href="/komponenter/">komponent</a>.</p>


<h4 id="temahaandtering">Temahåndtering</h4>
<p>Designsystemet er udviklet med 2 forskellige temaer. Standard temaet er det neutrale tema, hvor primærfarven er grå. Denne grå farve skal overskrives, da det neutrale tema blot er ment som en skabelon til ens eget tilpassede tema. De to andre temaer er målrettet borger.dk og virk.dk.</p>
<p>Temaerne er simple, det eneste som er forskelligt mellem standard temaet og de to andre temaer er primærfarven og nogle få variationer i headeren (fx logo). Alt andet er ens på tværs af temaer.</p>
<p class="mb-2">Tema eksempel – borger.dk (scss):</p>
<pre>
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
</pre>

<h5>Browserspecifik styling tilføjes i projektet</h5>
<h6>Webpack</h6>
<p>Bemærk, at scss filen kun indeholder basic CSS. Den indeholder således ikke browser specifik CSS.</p>
<p>For at tilføje dette bør SCSS filen køres igennem <a href="https://www.npmjs.com/package/autoprefixer" class="icon-link">autoprefixer<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>, hvor den relevante styling vil blive tilføjet til output CSS filen.</p> 
<h6>Gulp</h6>
<p>Bemærk, at scss filen kun indeholder basic CSS. Den indeholder således ikke browser specifik CSS.</p>
<p>For at tilføje dette bør SCSS filen køres igennem <a href="https://www.npmjs.com/package/gulp-autoprefixer" class="icon-link">autoprefixer<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>, hvor den relevante styling vil blive tilføjet til output CSS filen.</p>
<p>Disse browsers bør defineres i autoprefixer:</p>
<pre>
[
  '> 1%',
  'Last 2 versions',
  'IE 11',
  'IE 10',
  'IE 9',
]
</pre> 


<h4>Fix for bug i Microsoft Edge og Internet Explorer</h4>
<p>En bug i Edge og Internet Explorer gør at list-style-type:none bliver ignoreret, hvis den bliver sat mens en liste er skjult. Du kan undgå dette ved at tilføje css direkte i <code>head</code> sektionen.</p>
```shell
  <style>
    /* Fixes Edge bug, where list-style-type:none is ignored if it's set after li has been hidden. */   
    ul {
      list-style-type: none;
    }
  </style>
```

<h2>DKFDS Plugins</h2>
<p>Du skal kun inkludere styling (CSS eller SCSS) fra dkfds-plugins projektet.</p>
<p>Der er i øjeblikket lavet temaer til følgende:</p>
<ul class="nobullet-list">
    <li><a href="https://datatables.net/" class="icon-link">Datatables<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a></li>
    <li><a href="https://github.com/woocommerce/selectWoo" class="icon-link">SelectWoo<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a></li>
    <li><a href="https://github.com/Pikaday/Pikaday" class="icon-link">Pikaday<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a></li>
    <li><a href="https://micromodal.now.sh/" class="icon-link">Micromodal.js<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a></li>
    <li><a href="https://atomiks.github.io/tippyjs/" class="icon-link">Tippy.js<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a></li>
</ul>

<p>dkfds-plugins projektet er tilgængeligt via npm og du kan installere det ved at skrive følgende i en kommando-prompt:</p>

```shell
npm install dkfds-plugins --save
```

<p>Modulet 'dkfds-plugins' er nu installeret i 'node_modules' mappen.</p>
<p>Inkluder derefter temaerne enten som css direkte:</p>

<pre>
&lt;link rel="stylesheet" href="[path-to-plugins-project]/dist/css/dkfds-datatables-theme.standalone.min.css"&gt;
</pre>

<p>Eller inkluder temaerne i SCSS (Bemærk, at du først skal importere DKFDS):</p>

<pre>
@import "~dkfds-plugins/dist/scss/dkfds-datatables-theme";
</pre>
