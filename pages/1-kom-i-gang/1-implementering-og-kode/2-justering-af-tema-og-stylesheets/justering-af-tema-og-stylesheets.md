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

Når du downloader Det Fælles Designsystem (FDS) vil du altid få en færdiggenereret CSS-fil, som er klar til brug. Der kan dog være tilfælde, hvor der er behov for at foretage ændringer i CSS-filen, for eksempel hvis dine logoer og ikoner ligger i en anden mappe end `img`.

Foretag altid justeringer ved at bruge de medfølgende SCSS-filer og generer en ny CSS-fil ud fra disse. Skriv aldrig direkte i CSS-filerne.

## Juster stylesheets med Sass {#{% include create-id.html heading="Juster stylesheets med Sass" %}}

Justering af stylesheets kræver, at man har hentet FDS' {% include links/internal-link.html linktext="kodepakke" %} samt {% include links/external-link.html linktext="installeret Sass" %} eller anvender et lignende værktøj til at kompilere SCSS-filer til CSS-filer. 

Nedenstående eksempler tager udgangspunkt i at {% include links/external-link.html linktext="kompilere Sass-filer med kommandoer" %} og at FDS-koden er {% include links/internal-link.html linktext="hentet via NPM" %}.

### Eksempel: Lav CSS-fil med neutralt tema

Filen `dist/css/dkfds.css` indeholder det "neutrale" tema uden portalfarver eller andre tilpasninger. Følgende eksempel viser, hvordan man selv kan bygge en CSS-fil med det neutrale tema (dette eksempel udbygges i de øvrige afsnit).

Opret en ny SCSS-fil (i eksemplet kaldet `main.scss`) og indsæt koden:

{% highlight scss %}
@use 'dist/scss/dkfds';
{% endhighlight %}

Anvend derefter kommandoen:

{% highlight shell %}
sass main.scss:style.css
{% endhighlight %}

Dette genererer en ny fil kaldet `style.css`, som svarer til `dist/css/dkfds.css`. Afhængigt af din version af Sass og eventuel processering, kan der dog være enkelte forskelle, fx brug af blanktegn. For en minified version af CSS-filen kan du i stedet køre kommandoen `sass --style=compressed main.scss:style.css`.

### Eksempel: Tilføj styling

Følgende eksempel viser, hvordan man kan tilføje sin egen styling til den endelige CSS-fil. I eksemplet tilføjes en klasse til det neutrale tema, der kan bruges til at farve en tekst blå.

Opret en ny SCSS-fil (i eksemplet kaldet `main.scss`) og indsæt koden:

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

### Eksempel: Anvend andre værdier

I mappen `dist\scss\variables` findes de variable, som kan tilpasses til dit projekt. I de følgende eksempler gennemgås nogle af de variable, som generelt forventes at blive overskrevet.

#### Opdater stier

Følgende eksempel genererer et stylesheet ud fra det neutrale tema, hvor værdier som `url("../img/svg-icons/[ikon].svg")` får en ny sti.

Opret en ny SCSS-fil (i eksemplet kaldet `main.scss`) og indsæt koden:

{% highlight scss %}
@use 'dist/scss/dkfds' with (
    $font-path:         'dist/fonts/IBMPlexSans/',
    $image-path:        'dist/img/',
    $icons-folder-path: 'dist/img/svg-icons/'
);
{% endhighlight %}

Byg herefter CSS-filen med Sass.

#### Opdater breakpoint

Følgende eksempel genererer et stylesheet ud fra borger.dk-temaet, hvor der ændres breakpoint for løsningen, hvilket blandt andet afgør, hvornår mobilmenuen vises.

Opret en ny SCSS-fil (i eksemplet kaldet `main.scss`) og indsæt koden:

{% highlight scss %}
@use 'dist/scss/dkfds-borgerdk' with (
    $nav-responsive-breakpoint: sm
);
{% endhighlight %}

Byg herefter CSS-filen med Sass.

#### Opret egne farver

Følgende eksempel genererer et stylesheet ud fra Virk-temaet, hvor der tilføjes egne farver, som herefter kan anvendes.

Opret en ny SCSS-fil (i eksemplet kaldet `main.scss`) og indsæt koden:

{% highlight scss %}
@use 'dist/scss/dkfds-virkdk' with (
    $custom-colors: (
        "my-green-color": #118844, 
        "my-purple-color": #991177
    )
);
@use 'partial';
{% endhighlight %}

Opret herefter endnu en SCSS-fil (i eksemplet kaldet `_partial.scss`) og indsæt koden:

{% highlight scss %}
@use 'dist/scss/functions' as func;
.my-green-text {
    color: func.color('my-green-color');
}
{% endhighlight %}

Byg herefter CSS-filen med Sass. Bemærk, at farvernes navne skal være unikke og må ikke i forvejen være anvendt i designsystemet.

#### Opret styling til forskellige skærmbredder

Følgende eksempel genererer et stylesheet udelukkende med ens egen kode. I eksemplet oprettes en klasse, som viser en tekst i forskellige farver ved forskellige skærmstørrelser.

Opret en ny SCSS-fil (i eksemplet kaldet `main.scss`) og indsæt koden:

{% highlight scss %}
@use 'dist/scss/variables' with (
    $custom-colors: (
        'my-green-color': #00ff00, 
        'my-red-color': #ff0000,
        'my-blue-color': #0000ff,
        'my-yellow-color': #ffff00
    )
);
@use 'dist/scss/functions' as func;
@use 'dist/scss/mixins' as mixins;

.rainbow-text {
    color: func.color('my-green-color');

    @include mixins.media-breakpoint-up(sm) {
        color: func.color('my-red-color');
    }

    @include mixins.media-breakpoint-up(md) {
        color: func.color('my-blue-color');
    }

    @include mixins.media-breakpoint-up(lg) {
        color: func.color('my-yellow-color');
    }
}
{% endhighlight %}

Byg herefter CSS-filen med Sass. Bemærk, at hvis du ikke anvender et af de tre eksisterende temaer, så skal konfigurationen af variable ske i `dist/scss/variables`.

## Juster stylesheets med npm scripts {#{% include create-id.html heading="Juster stylesheets med npm scripts" %}}

Hvis du ønsker fuld kontrol over samtlige filer i Det Fælles Designsystem, kan du {% include links/external-link.html linktext="hente koden fra GitHub" %} og benytte designsystemets egen bygproces. Bemærk, at dette kræver, at du har installeret {% include links/external-link.html linktext="Node.js" %}.

Efter du har hentet filerne, kør da kommandoen `npm install` i mappen med filen `package.json`. Når processen er færdig, kan du foretage dine ændringer i mappen `src` og herefter køre kommandoen `npm run build` for at overskrive alt i mappen `dist` med nye filer.

Bemærk, at denne metode gør det vanskeligere senere hen at opgradere til nye versioner af designsystemet. Den bør derfor kun benyttes, når det er absolut nødvendigt.