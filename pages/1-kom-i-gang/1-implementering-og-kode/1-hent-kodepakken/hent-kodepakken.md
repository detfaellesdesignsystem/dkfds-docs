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
tags: 
- installation
- implementering
- DKFDS
- DKFDS.init
- DKFDS.init()
- init
- init()
- scope
---

{% include anchorlinks.html headings="Hent_kodepakken" %}

## Hent via NPM {#{% include create-id.html heading="Hent via NPM" %}}

Vi anbefaler som udgangspunkt, at kodepakken hentes via NPM, hvor kodepakken går under navnet {% include links/external-link.html linktext="DKFDS" %}. 

Navigér til roden af dit projekt i en kommandoprompt og installer DKFDS med følgende kommando:

{% highlight shell %}
npm install --save dkfds
{% endhighlight %}

Modulet 'dkfds' er nu installeret i 'node_modules' mappen.

## Hent via GitHub (zip) {#{% include create-id.html heading="Hent via GitHub (zip)" %}}

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

#### Eget tema

Har du brug for dit eget tema? Så læs, hvordan du tilpasser koden under {% include links/internal-link.html linktext="Justering af tema og stylesheets" %}.

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

`DKFDS.init();` aktiverer JavaScript for alle komponenter, men man kan også tilføje JavaScript specifikt for hver komponent, hvis man foretrækker denne metode. Hvis man kun har få komponenter, hvor JavaScript er nødvendig eller hvis man har meget fokus på performance, kan dette være værd at undersøge. Information omkring JavaScript for hver komponent finder du i kodesektionen for den specifikke {% include links/internal-link.html linktext="komponent" %}.

Bemærk, at du aldrig bør køre `DKFDS.init()` mere end én gang på en side eller køre en af init-funktionerne mere end én gang på en komponent. Hvis du efter kørsel af `DKFDS.init()` tilføjer nye komponenter til din side, anbefales det at køre komponentens egen init-funktion for at aktivere dens JavaScript.

<p class="mb-2">Eksempel på init:</p>

{% highlight javascript %}
document.addEventListener("DOMContentLoaded", function(){
  DKFDS.init();
});
{% endhighlight %}

##### Initiér alle komponenter i et bestemt område
Det er muligt at bruge `DKFDS.init()` i bestemte områder af din side ved at medsende parameter.

I nedenstående eksempel vil vi gerne initiere alle komponenter i headeren. Det vil sige navigation, alle overflow menuer samt eventuelle modaler i headeren. Komponenter uden for headeren vil ikke blive berørt.

{% highlight javascript %}
let $header = document.getElementsByTagName('header')[0];
DKFDS.init({'scope': $header});
{% endhighlight %}

## Vejledning til integration på borger.dk og Virk {#{% include create-id.html heading="Vejledning til integration på borger.dk og Virk" %}}

Det Fælles Designsystem er som udgangspunkt udviklet til selvbetjeningsløsninger på borger.dk og Virk. For at integrere din løsning på borger.dk eller Virk, kan du her få vejledning til, hvordan du integrerer din løsning på platformene. Hvis du anvender designsystemet til andre løsninger, kan du se bort fra dette.

{% include links/external-link.html linktext="Vejledning til integration på borger.dk" %}

{% include links/external-link.html linktext="Vejledning til integration på Virk" %}

