---
title: Retningslinjer
parent: Cards
order: 10
headingClass: h3
---

<h3 class="h4">Tilgængelighed</h3>

Cards skal overholde html outline, så browser og eventuelle skærmlæsere kan afkode det korrekt. Dvs. overskriften på dit cards skal være en heading 4, hvis det foregående afsnit er en heading 3.

<h3 class="h4">Brugervenlighed</h3>
<h4 class="h5">Anvendes til</h4>

Du kan bruge cards til at gruppere funktionalitet, der adskiller sig fra sidens øvrige indhold. Det kan fx være en afledt, men ikke direkte koblet ekstra funktion ift. sidens sammenhæng.

<h4 class="h5">Anvendes ikke til</h4>

- Brug ikke cards til det primære indhold på en løsning, men derimod til indhold, der kan stå og forstås alene og fortsat være del af den samlede løsning.
- Brug ikke cards udelukkende af visuelle hensyn, som placeholders for ornamental grafik eller indhold uden interaktion.
- Cards er ikke en statusbesked.

<h4 class="h5">Vejledning</h4>

- Cards skal tilbyde en enkel og fokuseret funktion. 
- Cards er velegnede til interaktion med brugeren, men brug dem kun, når der tilbydes en ekstra funktionalitet af grupperet indhold.
- Cards er velegnede til responsive løsninger.
- Du kan godt indsætte flere cards på en side, men sørg for at de fremtræder roligt i sidens layout og ikke bryder brugerens naturlige aflæsning af siden.
- Undgå lange tekster i cards.
- Skriv kort og præcist i hvert card.

## Implementering

Alle cards har en <code>card</code> class.

Sæt card til fuld højde ved at tilføje klassen `card-align-height`.
        
Cards kan bestå af en header, et tekstområde, et indholdsområde og et aktionsområde. Du kan frit sammensætte rækkefølge og størrelser af alle områder efter dit eget behov, men der er regler for, hvad du kan placere i de forskellige områder.

Hvert område er beskrevet nedenfor. 

<h3 class="h4">Header</h3>

Headeren har en <code>.card-header</code> class, og indeholder en titel og en understøttende tekst, som alle er p-tags med hver deres class.

- `.header-titel`
- `.subheader`

<h3 class="h4">Tekstområde</h3>

Tekstområdet har en <code>.card-text</code> class, og indeholder brødtekst, som har en class.

- `.text`

<h3 class="h4">Indholdsområde</h3>

Indholdsområdet har en <code>card-content</code> class, og kan indeholde brødtekst og andet, såsom displaytekst og grafer, der har hver deres div med hver deres class. .card-content har en stribet baggrundsfarve. Denne baggrundsfarve er midlertidig og bliver kun vist for at indikere indholdsområdet. Du kan se, hvilke andre baggrundsfarver der kan bruges, under "Baggrundsfarver" og "Hjælpefunktioner" i sidenavigationen. Det er også muligt at tilføje andre farver.
 
- `.content-text`
- `.content`

<h3 class="h4">Aktionsområde</h3>

Aktionsområdet har en <code>card-action</code> class og kan indeholde brødtekst, knapper, links og funktionelle link, som alle har hver deres div med hver deres class.

- `.action-content`
- `.action-buttons`
- `.action-links`
