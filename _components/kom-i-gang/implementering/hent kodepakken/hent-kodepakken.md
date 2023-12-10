---
permalink: "/kom-i-gang/implementering-kode/hent-kodepakken/"
parentlink: "/kom-i-gang/implementering-kode/"
redirect_from:
- "/komigang/tiludviklere/"
- "/kode/implementering/"
- "/kode/"
layout: styleguide
category: Kom_i_gang_category
subcategory: Kom i gang
title: Hent kodepakken
lead: Kodepakken kan installeres ved brug af NPM-pakken eller via GitHub som zip-fil.
anchor: true
subnav:
- text: Hent via NPM
  href: "#npm"
- text: Hent via GitHub
  href: "#github"
- text: Temahåndtering
  href: "#temahaandtering"
- text: Vejledning til integration på borger.dk og Virk
  href: "#integration"
description: Sådan kommer du i gang med FDS i dit projekt. Værd at læse for alle udviklere.
tags: 
- installation
- implementering
---

{:#npm}
## Hent via NPM
Vi anbefaler som udgangspunkt at kodepakken hentes via NPM, hvor kodepakken går under navnet {% include links/external-link.html linktext="DKFDS" %}. 

Navigér til roden af dit projekt i en kommando prompt og installer DKFDS med følgende kommando:

{% highlight shell %}
npm install --save dkfds
{% endhighlight %}

Modulet 'dkfds' er nu installeret i 'node_modules' mappen.

{:#github}
## Hent via GitHub (zip)

Hent nyeste <a href="https://github.com/detfaellesdesignsystem/dkfds-components/releases" class="icon-link">version som zipfil på Github<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>, og pak indholdet ud i dit projekt.

### Inkludér  CSS

#### Virk tema

{% highlight html %}
<link type="text/css" rel="stylesheet" href="[sti til DKFDS mappen]/dist/css/dkfds-virkdk.css" />
{% endhighlight %}

#### Borger.dk tema

{% highlight html %}
<link type="text/css" rel="stylesheet" href="[sti til DKFDS mappen]/dist/css/dkfds-borgerdk.css" />
{% endhighlight %}

Har du brug for dit eget tema? Så læs sektionen om, <a href="#temahaandtering">hvordan du tilpasser DKFDS til dit eget tema</a>.

{:#javascript}
### Inkludér JavaScript

JavaScript kan inkluderes med et script tag eller importeres ind i en eksisterende js fil.

#### `<script>` tag
Indsæt følgende script tag før`</body>`

{% highlight html %}
<script src='[sti til DKFDS mappen]/dist/js/dkfds.js'></script>
{% endhighlight %}

#### Importer modulet i en .js fil

{% highlight javascript %}
import * as DKFDS from "dkfds";
{% endhighlight %}

#### Init

Når DKFDS er inkluderet kan du køre funktionen `DKFDS.init();` ved dom ready, eller hvornår det nu end passer i dit projekt.

`DKFDS.init();` aktiverer javascript for alle komponenter, men man kan også tilføje javascript specifikt for hver komponent. Information omkring javascript for hver komponent finder du i <a href="/kode/komponenter/">kode sektionen for den specifikke komponent</a>.

<p class="mb-2">Eksempel på init:</p>

{% highlight javascript %}
document.addEventListener("DOMContentLoaded", function(){
  DKFDS.init();
});
{% endhighlight %}

#### Initiér alle komponenter i et bestemt område
Det er muligt at bruge DKFDS.init() i bestemte områder af din side ved at medsende parameter.

I nedenstående eksempel vil vi gerne initiere alle komponenter i headeren. Det vil sige navigation, alle overflow menuer samt eventuelle modaler i headeren. Komponenter uden for headeren vil ikke blive berørt.

{% highlight javascript %}
let $header = document.getElementsByTagName('header')[0];
DKFDS.init({'scope': $header});
{% endhighlight %}

#### Initiér komponenter enkeltvis

Javascript for komponenter kan kaldes enkeltvis, hvis man foretrækker denne metode. Hvis man kun har få komponenter, hvor javascript er nødvendig eller hvis man har meget fokus på performance kan dette være værd at undersøge.

Javascript dokumentationen for hver komponent findes på de enkelte <a href="/kode/komponenter/">komponentsider under kodesektionen</a>.

{:#temahaandtering}
## Temahåndtering

Designsystemet er udviklet med 2 forskellige temaer. Standard temaet er det neutrale tema, hvor primærfarven er grå. Denne grå farve skal overskrives, da det neutrale tema blot er ment som en skabelon til ens eget tilpassede tema. De to andre temaer er målrettet borger.dk og virk.dk.

Temaerne er simple, det eneste som er forskelligt mellem standard temaet og de to andre temaer er primærfarven og nogle få variationer i headeren (fx logo). Alt andet er ens på tværs af temaer.

<p class="mb-2">Tema eksempel – borger.dk (scss):</p>

{% highlight scss %}
// These variables overwrite the default values
$theme-colors: (
    "virk": (
        100: #0059B3,
        200: #004993,
        300: #003972
    )
);

$theme-color-primary: 'virk-100';
$theme-color-primary-dark: 'virk-200';
$theme-color-primary-darker: 'virk-300';
$header-portal-logo: 'logo_virk.svg';
$header-portal-logo-height: 4.8rem;
$header-portal-logo-width: 7.8rem;
$header-portal-compact-logo-width: 3.8rem;

$font-path:         '/assets/fonts/IBMPlexSans/';
$image-path:        '/assets/img';
$icons-folder-path: '/assets/svg';
@import '~dkfds/src/stylesheets/dkfds';
{% endhighlight %}

{:#integration}
<h2>Vejledning til integration på borger.dk og Virk</h2>

Det Fælles Designsystem er som udgangspunkt udviklet til selvbetjeningsløsninger på borger.dk og Virk. For at integrere din løsning på borger.dk eller Virk, kan du her få vejledning til, hvordan du integrerer din løsning på platformene. Hvis du anvender designsystemet til andre løsninger, kan du se bort fra dette.

{% include links/external-link.html linktext="Vejledning til integration på borger.dk" %}

{% include links/external-link.html linktext="Vejledning til integration på Virk" %}

