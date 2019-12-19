---
title: Retningslinjer
parent: Buttons
order: 10
headingClass: h3
---
<h2 class="h4">Tilgængelighed</h2>

- Knapper markeres tydeligt med en fokus tilstand, når brugere ved hjælp af tab-tasten navigerer sig frem til dem.
- Undgå at anvende <code>div</code> eller <code>img</code> tags til at konstruere en knap, da skærmlæsere i givet fald ikke automatisk kan afkode knappens funktionalitet.
- Styler du et link, så det ligner en knap, skal du være opmærksom på, at skærmlæsere håndterer et link og en knap forskelligt:
    - Et link aktiveres ved at trykke ”Enter”.
    - En knap aktiveres ved at trykke ”Space”.

<h2 class="h4">Brugervenlighed</h2>
<h3 class="h5">Anvendes til</h3>

Du kan bruge knapper til at anvise centrale funktioner til brugerne som fx ”Gem”, ”Hent”, ”Log ind” og ”Log af”.

<h3 class="h5">Anvendes ikke til</h3>

Brug ikke knapper til at navigere mellem sidevisninger. Der skal du i stedet anvende link.

<h3 class="h5">Vejledning</h3>

- Generelt skal du anvende primære knapper til handlinger, der bringer brugeren videre i sit forløb og sekundære knapper til handlinger, der foregår indenfor den aktuelle sidevisning.
- Der er kun en primærknap pr side.
- Undgå for mange knapbaserede funktioner på samme side.
- Brug stort forbogstav og små bogstaver for resten af teksten på knappen.
- Skriv kort og præcist.
- Skriv i aktiv form: I stedet for at skrive ”Fejlindmelding” bør du skrive ”Indmeld en fejl”.
- I nogle tilfælde kan det være meningsunderstøttende at indlejre et svg-ikon i knappen for at signalere bestemte handlinger som fx ”Gem”.
- Funktioner af mindre vigtighed bør du style som link.

<h2 class="h4">Retningslinjer for vedhæft fil</h2>
Vedhæft fil er et `input` felt. For mere information se under <a href="/komponenter/form-controls/#vedhæft-fil">Formular-elementer</a>.

### Implementering
Knap styling kan både sættes på `<button>` og `<a>` tags ved at tilføje følgende klasser:
- `button button-primary`
- `button button-secondary`
- `button button-tertiary`
- `button button-quaternary`
- `button button-unstyled`
