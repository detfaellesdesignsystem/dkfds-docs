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
description: Sådan kommer du i gang med FDS i dit projekt. Værd at læse for alle udviklere.
headings: Hent_kodepakken
anchorlinks: true
tags: 
- installation
- implementering
---

{% assign headings = site.data.headings[page.headings] %}

[---- Hent via NPM -------------------------------------]: # 
<h2 id="{{ headings[0].id }}">{{ headings[0].h2 }}</h2>

Vi anbefaler som udgangspunkt, at kodepakken hentes via NPM, hvor kodepakken går under navnet {% include links/external-link.html linktext="DKFDS" %}. 

Navigér til roden af dit projekt i en kommandoprompt og installer DKFDS med følgende kommando:

{% highlight shell %}
npm install --save dkfds
{% endhighlight %}

Modulet 'dkfds' er nu installeret i 'node_modules' mappen.

[---- Hent via GitHub (zip) -------------------------------------]: # 
<h2 id="{{ headings[1].id }}">{{ headings[1].h2 }}</h2>

Hent nyeste version som {% include links/external-link.html linktext="zipfil på GitHub" %}, og pak indholdet ud i dit projekt.

### Inkludér  CSS

#### Virk tema

{% highlight html %}
<link type="text/css" rel="stylesheet" href="[sti til DKFDS mappen]/dist/css/dkfds-virkdk.css" />
{% endhighlight %}

#### Borger.dk tema

{% highlight html %}
<link type="text/css" rel="stylesheet" href="[sti til DKFDS mappen]/dist/css/dkfds-borgerdk.css" />
{% endhighlight %}

Har du brug for dit eget tema? Så læs, hvordan du tilpasser koden til dit eget tema i afsnittet {% include links/internal-link.html linktext="temahåndtering" %}.

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

`DKFDS.init();` aktiverer javascript for alle komponenter, men man kan også tilføje javascript specifikt for hver komponent, hvis man foretrækker denne metode. Hvis man kun har få komponenter, hvor javascript er nødvendig eller hvis man har meget fokus på performance, kan dette være værd at undersøge. Information omkring javascript for hver komponent finder du i kodesektionen for den specifikke {% include links/internal-link.html linktext="komponent" %}.

<p class="mb-2">Eksempel på init:</p>

{% highlight javascript %}
document.addEventListener("DOMContentLoaded", function(){
  DKFDS.init();
});
{% endhighlight %}

##### Initiér alle komponenter i et bestemt område
Det er muligt at bruge DKFDS.init() i bestemte områder af din side ved at medsende parameter.

I nedenstående eksempel vil vi gerne initiere alle komponenter i headeren. Det vil sige navigation, alle overflow menuer samt eventuelle modaler i headeren. Komponenter uden for headeren vil ikke blive berørt.

{% highlight javascript %}
let $header = document.getElementsByTagName('header')[0];
DKFDS.init({'scope': $header});
{% endhighlight %}

[---- Temahåndtering -------------------------------------]: # 
<h2 id="{{ headings[2].id }}">{{ headings[2].h2 }}</h2>

Designsystemet er udviklet med 2 forskellige temaer og et standardtema. Standardtemaet er det neutrale tema, hvor primærfarven er grå. Denne grå farve skal overskrives, da det neutrale tema blot er ment som en skabelon til ens eget tilpassede tema. De to andre temaer er målrettet borger.dk og virk.dk.

Det eneste som er forskelligt mellem standardtemaet og de to andre temaer er primærfarven og nogle få variationer i headeren (fx logo). Alt andet er ens på tværs af temaerne.

Nedenstående eksempel viser, hvordan en scss-fil i mappen `src/stylesheets` skulle se ud, hvis man selv ville generere temaet for borger.dk. 

{% highlight scss %}
@use 'variables/variables/theme-colors' with (
    $theme-color-primary:               #44831E,
    $theme-color-primary-dark:          #3C5C22,
    $theme-color-primary-darker:        #233614
);
@use 'variables/variables/components' with (
    $header-portal-background-color:    #f1f1f1,
    $header-portal-logo:                'logo-borgerdk.svg',
    $header-portal-logo-height:         4.8rem,
    $header-portal-compact-logo-width:  10rem
);
@use 'dkfds-base';
{% endhighlight %}

[---- Vejledning til integration på borger.dk og Virk -------------------------------------]: # 
<h2 id="{{ headings[3].id }}">{{ headings[3].h2 }}</h2>

Det Fælles Designsystem er som udgangspunkt udviklet til selvbetjeningsløsninger på borger.dk og Virk. For at integrere din løsning på borger.dk eller Virk, kan du her få vejledning til, hvordan du integrerer din løsning på platformene. Hvis du anvender designsystemet til andre løsninger, kan du se bort fra dette.

{% include links/external-link.html linktext="Vejledning til integration på borger.dk" %}

{% include links/external-link.html linktext="Vejledning til integration på Virk" %}
