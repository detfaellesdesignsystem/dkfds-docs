---
permalink: "/kom-i-gang/implementering-kode/justering/"
parentlink: "/kom-i-gang/implementering-kode/"
layout: styleguide
category: Kom_i_gang_category
subcategory: Kom i gang
title: Justering af tema og stylesheets
description: Sådan tilpasser du koden til dit projekt.
tags: 
- CSS
- SCSS
- SASS
- JS
- JavaScript
---

## Justering af stylesheets

Når du downloader Det Fælles Designsystem (FDS) vil du altid få en færdiggenereret CSS-fil, som er klar til brug. Der kan dog være tilfælde, hvor der er behov for at foretage ændringer i CSS-filen, fx hvis dine logoer ligger i en anden mappe end `img` eller hvis du skal anvende en anden {% include links/internal-link.html linktext="portalfarve" %} end Virk eller borger.dk.

Det anbefales altid at foretage justeringer ved at bruge de medfølgende SCSS-filer og herefter generere en ny CSS-fil. Skriv aldrig direkte i CSS-filerne.

### Juster stylesheets med Sass

#### Eksempel på skift af portalfarve

<ol>
<li>Download FDS fra enten npm eller GitHub.</li>
<li>Sørg for at du har downloadet og installeret {% include links/external-link.html linktext="Sass fra npm" %}.</li>
<li>Opret en ny fil i mappen <code>scss</code>, fx <code>mystylesheet.scss</code>.</li>
<li>Indsæt nedenstående kode i filen (benyt dine egne farveværdier):
{% highlight scss %}
@use 'variables/variables/theme-colors' with (
    $theme-color-primary:        #AA0000,
    $theme-color-primary-dark:   #990000,
    $theme-color-primary-darker: #880000
);
@use 'dkfds-base';
{% endhighlight %}
</li>
<li>Byg den nye CSS-fil med Sass, fx ved at køre kommandoen <code>sass --style=compressed scss/mystylesheet.scss mystyle.css</code>. Dette genererer filen <code>mystyle.css</code>, som kan anvendes i stedet for FDS' medfølgende CSS-filer.</li>
</ol>

Forsøg aldrig at bygge en ny CSS-fil ud fra de to eksisterende temaer til Virk og borger.dk. Hvis du skal bruge nogle af disse temaers værdier, så kopier dem fra `scss/themes/borgerdk` og `scss/themes/virkdk`.