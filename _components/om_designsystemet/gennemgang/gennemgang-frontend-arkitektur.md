---
title: Frontend arkitektur
parent: Gennemgang
order: 20
---

Det Fælles Designsystem er en simpel samling af grundlæggende funktioner og design, der skaber et solidt grundlag for udviklingen af selvbetjeningsløsninger på borger.dk og Virk.

Designsystemets arkitektur af brugergrænseflade bygger på princippet om en minimal, modulær og skalerbar opbygning, som kan forgrene sig yderligere i takt med øget behov.

I takt med at US Web Design System og Gov.uk bliver udvidet og forbedret, vil disse ændringer af hensyn til integriteten af designsystemet blive gennemgået og vurderet af en teknisk redaktion, før de bliver implementeret.

<figure>
    <img src="{{ site.baseurl }}/assets/img/descriptionimages/faa.png" class="w-percent-60" title="Det Fælles Designsystems frontend arkitektur" alt="Grafik der viser Det Fælles Designsystems frontend arkitektur">
    <figcaption>Det Fælles Designsystems frontend arkitektur</figcaption>
</figure>

### Hvad mener vi med minimal?

Med minimal mener vi, at designsystemets kompleksitet og funktioner er holdt på et minimum.

En sides kompleksitet og komponentvalg afgør hvilke ressourcer, der er behov for.

### Hvad mener vi med modulær?

Med modulær mener vi, at opbygningen af designsystemet består af en kerne (dkfds_core.css), der danner det grundlæggende fundament for brugergrænsefladen. Kernen udtaler sig udelukkende om layout, typografi, farver og grundlæggende funktioner.

Kernen indlæses på alle hjemmesider, der anvender designsystemet – uanset om løsningen er udviklet til borger.dk eller Virk.

Udover kernen kan der tilføjes fx myndighedsspecifik styling og diverse funktionsudvidelser.

### Hvad mener vi med skalerbar?

Med skalerbar mener vi, at designsystemet løbende kan skaleres i takt med nye plugins.

Designsystemet er således konstrueret omkring det modulære princip, der gennem af- og tilkobling af plugins muliggør en løbende skalering af de tilbudte funktioner.

Selvbetjeningsløsninger kan fx have et interaktionsbehov (behov for interaktion med brugerne), der ikke bliver understøttet af designsystemet. De kan i stedet blive udviklet som plugins, som du kan til- eller afkoble efter behov.

### Borger og Virk.dk

For at opnå den ønskede myndighedsbranding fra borger.dk eller Virk på dokumentationssitet skal du sørge for at indlæse enten dkfds_borger.css eller dkfds_virk.css parallelt med dkfds_core.css.

Hver af de to CSS-filer tilføjer myndighedens brand-styling, dvs. logo og styling, der skaber myndighedens genkendelighed.
