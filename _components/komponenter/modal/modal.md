---
permalink: "/komponenter/modal/"
redirect_from:
- "/udvidelser/micromodal/"
- "/kode/plugins/micromodal/"
layout: styleguide
type: element
title: Modalvindue
category: Komponenter_category
subcategory: Komponenter
description: Modalvinduer er separate vinduer, som popper-up på siden, når du aktiverer
  dem.
component: modal
componentTitle: Eksempel på modal
componentCode: "/kode/komponenter/modal/"

---
{:.h3 #retningslinjer}
## Anvendes til

Modalvinduer anvendes til at tvinge brugerens fokus på et specifikt, afgrænset indhold, hvor den interaktive respons og forståelse er centralt for brugerens videre anvendelse af løsningen. Det kunne fx være en godkendelse af en handling, behov for bekræftelse eller overførsel af rettigheder, som løsningen skal kunne udføre for at kunne fuldføre sin dialog med brugeren.

Brug modalvinduer, når du vil være sikker på, at brugeren ser en bestemt dialog og forholder sig til dens indhold.

{:.h3}
## Anvendes ikke til

Modalvinduer kan ikke erstatte individuelle sider i en selvbetjeningsløsning eller hjemmeside.

Modalvinduer anvendes ikke til længere, sammenhængende indhold.

Modalvinduer anvendes i begrænset omfang, da de kan øge løsningens kognitive load pga brugerens fokus flyttes.

Undgå modalvinduer på mobile løsninger og visninger, da de ikke fungerer godt for brugeren.

Undgå at have formularer inde i en modal. Særligt hvis det er en formular med mere end ét felt. I sådan et tilfælde bør man overveje at dele siden op, så indholdet strækker sig over flere sider.

{:.h3}
## Vejledning

Undgå at have flere åbne modaler på siden - det giver en dårligere brugeroplevelse og kan resultere i at brugeren mister fornemmelsen af, hvor de er på siden.

Modalvinduet skal have en meningsfuld overskrift, der klart relaterer sig til konteksten.

Knapper i modalvinduet skal være tydelige, meningsfulde og følge Det Fælles Designsystems øvrige anbefalinger for knapper.

Vær sikker på at modalvinduet kun akkurat passer til sit indhold og ikke dækker baggrunden (selve løsningen) fuldstændigt. Det er nødvendigt, at brugeren forstår, at de ikke har skiftet kontekst.

Brugeren skal selv aktivere modalvinduet. Det må ikke aktiveres per automatik, da det kan have en modsatrettet effekt, hvor brugeren lukker det i affekt.

{:.h3}
## Se komponenten i eksempelløsninger

{:.nobullet-list}
- <a href="/pages/eksempler/AES-erstatningssag/aes-5/" target="_blank" title="Eksempelløsning Erstatningssag åbnes i nyt vindue">Erstatningssag</a>
