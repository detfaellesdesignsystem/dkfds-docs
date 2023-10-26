---
permalink: "/komponenter/modal/guidelines/"
redirect_from:
- "/udvidelser/micromodal/"
- "/kode/plugins/micromodal/"
- "/komponenter/modal/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Modal
component: "modal"
componentTitle: "Eksempel på modal"
componentLink: true
anchor: true
subnav:
- text: Modal som kræver handling
  href: "#kraever-handling"
description: Modal er separate vinduer, som popper-up på siden, når du aktiverer dem.
tags:
- besked
- dialog
- dialogue
- modal
- modaler
- modalvindue
- popup
- pop up
- vindue
---

{:#retningslinjer}
## Retningslinjer

### Anvendes til

Modaler anvendes til at tvinge brugerens fokus på et specifikt, afgrænset indhold, hvor den interaktive respons og forståelse er centralt for brugerens videre anvendelse af løsningen. Det kunne fx være en godkendelse af en handling, behov for bekræftelse eller overførsel af rettigheder, som løsningen skal kunne udføre for at kunne fuldføre sin dialog med brugeren.

Brug en modal, når du vil være sikker på, at brugeren ser en bestemt dialog og forholder sig til dens indhold.

### Anvendes ikke til

En modal kan ikke erstatte individuelle sider i en selvbetjeningsløsning eller hjemmeside.

Modaler anvendes ikke til længere, sammenhængende indhold.

Modaler anvendes i begrænset omfang, da de kan øge løsningens kognitive load pga brugerens fokus flyttes.

Undgå modaler på mobile løsninger og visninger, da de ikke fungerer godt for brugeren.

Undgå at have formularer inde i en modal. Særligt hvis det er en formular med mere end ét felt. I sådan et tilfælde bør man overveje at dele siden op, så indholdet strækker sig over flere sider.

### Vejledning

Undgå at have flere åbne modaler på siden - det giver en dårligere brugeroplevelse og kan resultere i at brugeren mister fornemmelsen af, hvor de er på siden.

Modalen skal have en meningsfuld overskrift, der klart relaterer sig til konteksten.

Knapper i modalen skal være tydelige, meningsfulde og følge Det Fælles Designsystems øvrige {% include links/component-links.html linktext="anbefalinger for knapper" %}.

Vær sikker på at modalen kun akkurat passer til sit indhold og ikke dækker baggrunden (selve løsningen) fuldstændigt. Det er nødvendigt, at brugeren forstår, at de ikke har skiftet kontekst.

Brugeren skal selv aktivere modalen. Den må ikke aktiveres per automatik, da det kan have en modsatrettet effekt, hvor brugeren lukker det i affekt. Den eneste undtagelse er pattern for <a href="/eksempler/patterns/session-udloeber/">Session udløber</a>, hvor modalen åbner af sig selv for at advare om en anden ændring i brugergrænsefladen, som brugeren ikke selv har aktiveret - nemlig automatisk log af.

Hold teksten i modalen så kort og koncis som muligt. Det anbefales ikke, at indholdet i modalen bliver så langt, at der opstår scroll. Overvej at bruge en individuel side i stedet for et modal, hvis indholdet er meget langt.

{:#eksempelloesninger}
#### Se komponenten i eksempelløsninger

<a href="/eksempler/selvbetjeningsloesninger/">Se komponenten i forskellige eksempelløsninger (tryk på <em>'Kontakt'</em> i eksemplernes header)</a>

## Varianter

{:#kraever-handling}
### Modal som kræver handling

Anvend modal som kræver handling, når brugeren ikke skal kunne lukke modalen uden at tage stilling til dets indhold.

{% include code/preview-box.html component="modal-forced-action" title="Eksempel på modal, som kræver handling" link=true %}