---
permalink: /omdesignsystemet/tiludviklere/
layout: styleguide
title: Til udviklere
category: Om_designsystemet_category
description: Til udviklere, der skal gøre brug af Det Fælles Designsystem.
subnav:
---

<p>FDS er opdelt i to projekter:</p>
<ul class="nobullet-list">
    <li><a href="https://github.com/detfaellesdesignsystem/dkfds-components" target="_blank" class="icon-link">DKFDS Components (kernen som indeholder komponenterne)<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
    <li><a href="https://github.com/detfaellesdesignsystem/dkfds-plugins" target="_blank" class="icon-link">DKFDS Plugins<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
</ul>

<h2>DKFDS Components</h2>
<p>Projektet er på npm og kan installeres ved at skrive følgende i en kommando-prompt:</p>
```shell
npm install --save dkfds
```
<p>Modulet 'dkfds' er nu installeret i 'node_modules' mappen.<br>
Du kan enten benytte source-filerne i 'src/'-mappen eller de kompilerede filer i 'dist/'-mappen.</p>

<h3>Inkluder DKFDS Components i dit projekt</h3>
<p>Den hurtigste måde at få inkluderet FDS' css i dit projekt er at tilføje følgende link-tag:</p>
```shell
  <link type='text/css' rel='stylesheet' href='[path to dkfds folder]/dist/css/dkfds.css'>
```
<p>For at inkludere JavaScript skal du tilføje følgende tag i slutningen af body-tagget:</p>
```shell
  <script src='[path to dkfds folder]/dist/js/dkfds.js'></script>
```

<h4>Note til Webpack</h4>
<p>For at inkludere stylingen skal du tilpasse disse variabler:</p>

```shell
  $font-path:         '~dkfds/src/fonts/IBMPlexSans/';
  $image-path:        '~dkfds/src/img';
  $site-image-path:   '~dkfds/src/img';
  $icons-folder-path: '~dkfds/src/img/svg-icons';
  @import '../node_modules/dkfds/dist/scss/dkfds';
```
<p><strong>Browserspecifik styling tilføjes i projektet</strong></p>
<p>Bemærk, at scss filen kun indeholder basic CSS. Den indeholder således ikke browser specifik CSS.</p>
<p>For at tilføje dette bør SCSS filen køres igennem <a href="https://www.npmjs.com/package/autoprefixer" class="icon-link">autoprefixer<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a>, hvor den relevante styling vil blive tilføjet til output CSS filen.</p> 

<p>For at inkludere JavaScript via webpack skal du tilføje følgende linje i din main.js fil:</p>

```shell
  import "dkfds";
```


<h4>Note til gulp</h4>
<p><strong>Browserspecifik styling tilføjes i projektet</strong></p>
<p>Bemærk, at scss filen kun indeholder basic CSS. Den indeholder således ikke browser specifik CSS.</p>
<p>For at tilføje dette bør SCSS filen køres igennem <a href="https://www.npmjs.com/package/gulp-autoprefixer" class="icon-link">autoprefixer<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a>, hvor den relevante styling vil blive tilføjet til output CSS filen.</p>
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
<p>En bug i Edge og Internet Explorer gør at list-style-type:none bliver ignoreret, hvis den bliver sat mens en liste er skjult. Du kan undgå dette ved at tilføje stylingen direkte i <code>head</code> sektionen.</p>
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
    <li><a href="https://datatables.net/" class="icon-link" target="_blank">Datatables<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
    <li><a href="https://github.com/woocommerce/selectWoo" target="_blank" class="icon-link">SelectWoo<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
    <li><a href="https://github.com/Pikaday/Pikaday" target="_blank" class="icon-link">Pikaday<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
</ul>

<p>dkfds-plugins projektet er tilgængeligt via npm og du kan installere det ved at skrive følgende i en kommando-prompt:</p>

```shell
npm install dkfds-plugins --save
```

<p>Modulet 'dkfds-plugins' er nu installeret i 'node_modules' mappen.<br>
<p>Inkluder derefter temaerne enten som css direkte:</p>

<pre>
&lt;link rel="stylesheet" href="[path-to-plugins-project]/dist/css/dkfds-datatables-theme.standalone.min.css"&gt;
</pre>

<p>Eller inkluder temaerne i SCSS (Bemærk, at du først skal importere dkfds):</p>

<pre>
@import "~dkfds-plugins/dist/scss/dkfds-datatables-theme";
</pre>
