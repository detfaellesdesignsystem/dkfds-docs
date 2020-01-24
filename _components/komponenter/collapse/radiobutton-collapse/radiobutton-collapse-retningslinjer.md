---
title: Retningslinjer
parent: Collapse-Radio
order: 10
---

### Brugervenlighed

#### Anvendes til

- at vise et ekstra felt relevant for brugerens valg, fx kan du vise et email-felt, når brugeren vælger at ville kontaktes pr. email.

#### Anvendes ikke til

- at vise ekstra beskrivende/oplysende tekst, da skærmlæsere ikke kan læse det.

#### Vejledning                

Hold det enkelt. Hvis du har behov for at eksponere større mængder af ekstra funktionalitet, bør du overveje, at fordele det ud over flere sider i stedet.

## Implementering

- Radioknapperne skal kunne aktiveres og håndteres fra tastatur.
- Skjul ikke meningsbærende indhold som fx beskrivelser/labels med denne funktionalitet.
- Vis kun de ekstra muligheder, når brugeren har foretaget et valg.
- Da der er nogle begrænsninger, vil det være en god idé at teste med en skærmlæser (Fx NVDA) om alt indhold kan navigeres til med tastatur samt læses op.


For at initialisere collapse funktionaliteten på en radioknap skal `input[type=radio]` have følgende:

- Attributten `name`: alle radioknapper I en gruppe skal have samme værdi i `name` attributten. Derved kan kun én af radioknapperne være valgt af gangen.
- Attributten `data-js-target="id-of-target-to-collapse"`: denne attribute skal have id'et på det element som skal vises når radioknappen er aktiveret. 
- Hvis man ønsker at radioknappen skal være valgt fra starten af, skal den have attributten `'checked'`.
- `aria-controls="id-of-target-to-collapse"`

Alle radioknapperne i en gruppe skal placeres i en container som har klassen `js-radio-toggle-group`.

Det element som skal collapses/expandes skal have følgende:

- `id=”id-of-target-to-collapse”`
- `aria-hidden="true/false"`

<h2 class="h5">JavaScript</h2>

Hvis en komponent først bliver tilføjet på siden efter pageload, så vil der være stor sandsynlighed for at komponenten ikke virker optimalt, da events ikke er blevet sat.

Hvis man står i denne situation kan man definere denne komponent i JavaScript således:

```
new DKFDS.RadioToggleGroup(document.getElementByID('DIV-CONTAINER-ID'));
```

Sæt et `id` på det element, som har klassen `js-radio-toggle-group`.

Bemærk, at dette kun gælder fra version 5.0.0.

<h3 class="h5">Events</h3>

Når en skjul/vis komponent bliver foldet ud, bliver eventet `fds.collapse.open` udløst på `input` elementet, som man kan koble sig på med en eventlistener.

Når en skjul/vis komponent bliver foldet ind, bliver eventet `fds.collapse.close` udløst på `input` elementet, som man kan koble sig på med en eventlistener.
