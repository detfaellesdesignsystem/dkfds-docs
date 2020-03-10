---
title: Performance
parent: Gennemgang
order: 70
---
### Browsere

Designsystemet udtaler sig ikke om bestemt browser-understøttelse, som derimod bør være afhængig af brugernes behov, krav og forventninger til selvbetjeningsløsningen.

Dog skal du altid sikre bredest mulig understøttelse. Fravalg eller manglende understøttelse skal du skrive som del af dokumentationen for løsningen.

### Asynkron indlæsning af ressourcer

Preload indlæser en ressource asynkront, så browseren ikke skal vente på, at CSS eksempelvis skal indlæses, før den kan rendere siden.

Det Fælles Designsystem anvender `preconnect` og `preload` i head-delen til preload af CSS og til fonte.

Når browseren først åbner forbindelse til en given server, og derefter laver en tidlig indlæsning af en ressource, kan den senere hurtigt beregne eksempelvis layout. Bemærk, at browseren ikke anvender ressourcerne på dette tidspunkt, men kun gør dem klar. Det kaldes også ”lazy load”.

<h4 class="h5">Læs mere om preload her</h4>
<ul class="nobullet-list">
    <li><a href="https://www.w3.org/TR/preload/" class="icon-link">Preload<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a></li>
    <li><a href="https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/" class="icon-link">Preload - what is it good for?<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a></li>
</ul>

### Fonte

Indlæsning og beregning af web-fonte kontra system-fonte kan potentielt være omkostningstungt for både leverandør og bruger. Ved at anvende `preconnect`, `preload` samt `font-display:swap` understøtter designsystemet brugerens behov for hurtig adgang til løsningens indhold.

IBMPlexSans-Regular er en del af den primære Font Stack, der anvendes i designsystemet. Den Fallback Font Stack, der indlæses, hvis den primære er utilgængelig, er "System". ”System” refererer til fonte fra de respektive styresystemer og anvendes af browseren indtil den primære Font Stack er indlæst.

Deklarationen `font-display:swap` får browseren til at anvende en system-font -  hvis den ikke får fat i IBM Plex Sans indenfor 1/100 sekund - svarende til, at IBM Plex Sans ligger i brugerens cache. Når IBM Plex Sans er indlæst, skifter browseren sin fallback-font ud med den korrekte.

Det tager maksimalt ~3 sekunder for browseren at loade IBM Plex Sans og genberegne siden. Browserens brug af `font-display:swap` og fallback font kan dog afføde et lille blink (også kaldet FOUT), når den første side genberegnes med IBMPlexSans – derefter ligger fonten i browserens cache. Dette vurderes at være et mindre problem. Det er forventeligt, at mange brugere allerede har IBM Plex Sans liggende i deres cache, da fonten hurtigt bliver udbredt på grund af dens anvendelse på tværs af mange offentlige selvbetjeningsløsninger.

#### Bemærk

Font-display er endnu ikke implementeret i IE/Edge. Løsningen er ikke desto mindre valgt, da den generelt set tilbyder det bedste alternativ.

##### Læs mere om font-stack her
<ul class="nobullet-list">
    <li><a href="https://css-tricks.com/snippets/css/system-font-stack/" class="icon-link">System font-stack<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a></li>
</ul>

### Favicon

Et favicon er en lille grafik, der vises i browserens fane – eksempelvis som desktop-ikon, bogmærke eller lignende. Der skal være et favicon til stede på serveren af hensyn til et default browser-forespørgsel, som ellers vil få indlæsningen til at føles langsom og generere en 404-fejl i loggen.

Det er nødvendigt at generere en lang række varianter af favicons af hensyn til de mange platforme, brugere i dag benytter sig af.

I Det Fælles Designsystem har vi valgt at anvende <a href="https://realfavicongenerator.net/" class="icon-link">Real Favicon Generator<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>  og  favicon-filerne er placeret i en undermappe.

#### Bemærk

Det har tidligere været et problem for iframes, at deres indhold også skulle have et favicon for ikke at generere en 404. Det har ikke været muligt at teste og bekræfte denne opførsel i moderne browsere.

<h4 class="h5">Læs mere om favicon her</h4>
<ul class="nobullet-list">
    <li><a href="https://realfavicongenerator.net/" class="icon-link">Real Favicon Generator<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a></li>
</ul>
