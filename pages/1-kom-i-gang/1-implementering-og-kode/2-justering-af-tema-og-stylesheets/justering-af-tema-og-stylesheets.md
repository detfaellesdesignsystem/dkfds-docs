---
permalink: "/kom-i-gang/implementering-kode/justering/"
parentlink: "/kom-i-gang/implementering-kode/"
layout: styleguide
category: Kom_i_gang_category
subcategory: Kom i gang
title: Justering af tema og stylesheets
description: Sådan tilpasser du stylesheets til dit projekt.
tags: 
- CSS
- SCSS
- SASS
- JS
- JavaScript
---

{% include anchorlinks.html headings="Justering_af_tema_og_stylesheets" %}

## Før du tilpasser koden {#{% include create-id.html heading="Før du tilpasser koden" %}}

Når du downloader Det Fælles Designsystem (FDS) vil du altid få en færdiggenereret CSS-fil, som er klar til brug. Der kan dog være tilfælde, hvor der er behov for at foretage ændringer i CSS-filen, for eksempel hvis dine logoer og ikoner ligger i en anden mappe end `img` eller hvis du skal anvende en anden {% include links/internal-link.html linktext="portalfarve" %} end Virk eller borger.dk.

Det anbefales altid at foretage justeringer ved at bruge de medfølgende SCSS-filer og herefter generere en ny CSS-fil. Skriv aldrig direkte i CSS-filerne.

## Juster stylesheets med Sass {#{% include create-id.html heading="Juster stylesheets med Sass" %}}

Justering af stylesheets kræver, at man har hentet FDS' {% include links/internal-link.html linktext="kodepakke" %} samt {% include links/external-link.html linktext="installeret Sass" %} eller anvender et lignende værktøj til at kompilere SCSS-filer til CSS-filer. 

Nedenstående eksempler tager udgangspunkt i at {% include links/external-link.html linktext="kompilere Sass-filer med kommandoer" %} og at FDS-koden er {% include links/internal-link.html linktext="hentet via NPM" %}.

### Eksempel: Lav CSS-fil med neutralt tema

Filen `dist/css/dkfds.css` indeholder det "neutrale" tema uden portalfarver eller andre tilpasninger. Følgende eksempel viser, hvordan man selv kan bygge en CSS-fil med det neutrale tema (dette eksempel udbygges i de øvrige afsnit).

Opret en ny SCSS-fil (i eksemplet kaldet `mystyles.scss`) og indsæt koden:

{% highlight scss %}
@use 'dist/scss/dkfds';
{% endhighlight %}

Anvend derefter kommandoen:

{% highlight shell %}
sass mystyles.scss:mycss.css
{% endhighlight %}

Dette genererer en ny fil kaldet `mycss.css`, som svarer til `dist/css/dkfds.css`. Afhængigt af din version af Sass og eventuel processering, kan der dog være enkelte forskelle, for eksempel brug af blanktegn. For en minified version af CSS-filen kan du i stedet køre kommandoen `sass --style=compressed mystyles.scss:mycss.css`.

### Eksempel: Tilføj styling

Følgende eksempel viser, hvordan man kan tilføje sin egen styling til den endelige CSS-fil. I eksemplet tilføjes en klasse til det neutrale tema, der kan bruges til at farve en tekst blå.

Opret en ny SCSS-fil (i eksemplet kaldet `mystyles.scss`) og indsæt koden:

{% highlight scss %}
@use 'dist/scss/dkfds';
.blue-text {
    color: #0000FF;
}
{% endhighlight %}

Ovenstående eksempel anvender dog ikke en af designsystemets {% include links/internal-link.html linktext="farver" %}. Dette kan løses ved at ændre koden til:

{% highlight scss %}
@use 'dist/scss/dkfds';
@use 'dist/scss/functions' as func;
.blue-text {
    color: func.color('data-blue-700');
}
{% endhighlight %}

Byg herefter CSS-filen med Sass.

### Eksempel: Skift sti til font, ikoner og billeder

Følgende eksempel genererer et stylesheet baseret på borger.dk-temaet, hvor værdier som `url("../img/svg-icons/[ikon].svg")` får en ny sti.

Opret en ny SCSS-fil (i eksemplet kaldet `mystyles.scss`) og indsæt koden:

{% highlight scss %}
@use 'dist/scss/variables/paths' with (
    $font-path:         'dist/fonts/IBMPlexSans/',
    $image-path:        'dist/img/',
    $icons-folder-path: 'dist/img/svg-icons/'
);
@use 'dist/scss/dkfds-borgerdk';
{% endhighlight %}

Byg herefter CSS-filen med Sass.

### Eksempel: Ny primærfarve

Følgende eksempel genererer et stylesheet, hvor farven rød anvendes som primærfarve i stedet for en af de to {% include links/internal-link.html linktext="portalfarver" %}. 

Opret en ny SCSS-fil (i eksemplet kaldet `mystyles.scss`) og indsæt koden:

{% highlight scss %}
@use 'dist/scss/variables/theme-colors' with (
    $theme-color-primary:        #AA0000,
    $theme-color-primary-dark:   #990000,
    $theme-color-primary-darker: #880000
);
@use 'dist/scss/dkfds';
{% endhighlight %}

Byg herefter CSS-filen med Sass.

Når du ønsker at anvende en anden primærfarve, er det vigtigt, at du udelukkende tager udgangspunkt i det neutrale tema `dkfds` og ikke forsøger at anvende et af de to medfølgende temaer `dkfds-borgerdk` eller `dkfds-virkdk`, da disse i forvejen overskriver den primære farve. Du kan se, hvilke værdier der overskrives i de to temaer i filerne `dist\scss\themes\borgerdk\_borgerdk.scss` og `dist\scss\themes\virkdk\_virkdk.scss`.

## Juster stylesheets med npm scripts {#{% include create-id.html heading="Juster stylesheets med npm scripts" %}}

Hvis du ønsker fuld kontrol over samtlige filer i Det Fælles Designsystem, kan du {% include links/external-link.html linktext="hente koden fra GitHub" %} og benytte designsystemets egen bygproces. Bemærk, at dette kræver, at du har installeret {% include links/external-link.html linktext="Node.js" %}.

Efter du har hentet filerne, kør da kommandoen `npm install` i mappen med filen `package.json`. Når processen er færdig, kan du foretage dine ændringer i mappen `src` og herefter køre kommandoen `npm run build` for at overskrive alt i mappen `dist` med nye filer.

Bemærk, at denne metode gør det vanskeligere at tage nye versioner af designsystemet og den bør derfor kun benyttes, når det er absolut nødvendigt.