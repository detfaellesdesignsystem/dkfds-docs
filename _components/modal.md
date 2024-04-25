---
permalink: "/komponenter/modal/"
redirect_from:
- "/udvidelser/micromodal/"
- "/kode/plugins/micromodal/"
- "/kode/komponenter/modal/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Modal
lead: Modaler tvinger brugeren til at fokusere på og tage stilling til afgørende indhold, mens den øvrige side er deaktiveret.
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
tabs: "Retningslinjer, kode"
---

{% include tabs.html guidelines=true code=true %}

{% include code/preview-box.html component="modal" title="Eksempel på modal" classes="intro-example" %}

{% include anchorlinks.html guidelines="Modal" code="Modal_Kode" %}

<!--split-->

## Sådan bruges komponenten {#{% include create-id.html heading="Sådan bruges komponenten" %}}

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

Knapper i modalen skal være tydelige og meningsfulde. Læs mere om {% include links/component-guideline-link.html linktext="knapper" %}.

Vær sikker på at modalen kun akkurat passer til sit indhold og ikke dækker baggrunden (selve løsningen) fuldstændigt. Det er nødvendigt, at brugeren forstår, at de ikke har skiftet kontekst.

Brugeren skal selv aktivere modalen. Den må ikke aktiveres per automatik, da det kan have en modsatrettet effekt, hvor brugeren lukker det i affekt. Den eneste undtagelse er pattern for {% include links/internal-link.html linktext="Session udløber" %}, hvor modalen åbner af sig selv for at advare om en anden ændring i brugergrænsefladen, som brugeren ikke selv har aktiveret - nemlig automatisk log af.

Hold teksten i modalen så kort og koncis som muligt. Det anbefales ikke, at indholdet i modalen bliver så langt, at der opstår scroll. Overvej at bruge en individuel side i stedet for et modal, hvis indholdet er meget langt.

## Varianter {#{% include create-id.html heading="Varianter" %}}

{:#kraever-handling}
### Modal som kræver handling

Anvend modal som kræver handling, når brugeren ikke skal kunne lukke modalen uden at tage stilling til dets indhold.

{% include code/preview-box.html component="modal-forced-action" title="Eksempel på modal, som kræver handling" link=true %}

## Se komponenten i eksempelløsninger {#{% include create-id.html heading="Se komponenten i eksempelløsninger" %}}

Se hvordan komponenten bruges i de forskellige {% include links/internal-link.html linktext="eksempler på selvbetjeningsløsninger" %} (tryk på <em>'Kontakt'</em> i eksemplernes header)

<!--split-->

## Installation {#{% include create-id.html heading="Installation" append="-kode" %}}

### HTML Struktur

{% include code/syntax.html component="modal" copybutton=true %}

Modalen skal altid ligge i en `div` med klassen `fds-modal-container`, som skal ligge under `body`-elementet. Nedenstående boks viser et eksempel på strukturen:

{% highlight html %}
<body>
    <div class="fds-modal-container">
        <div class="fds-modal" aria-hidden="true" role="dialog" aria-modal="true" ...>
          ...
        </div>
    </div>
</body>
{% endhighlight %}

### JavaScript

Modal komponenten kræver JavaScript for at fungere. Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:

{% highlight javascript %}
let modal = new DKFDS.Modal(document.getElementById('MODAL-ID'));
modal.init();
{% endhighlight %}

Når en modal aktiveres, vil JavaScripten sætte `inert`-attributten på alle elementer under `body` bortset fra modalens container-element. Dette sikrer, at fokus bliver inde i modalen, når brugeren navigerer med et keyboard. Når modalen lukkes, fjernes attributten igen.

#### Funktioner

{:.table .table--responsive-headers}
| Funktion     | Beskrivelse      |
|--------------|------------------|
| modal.show() | Viser en modal   |
| modal.hide() | Skjuler en modal |

#### Events

{:.table .table--responsive-headers}
| Event key           | Element       | Beskrivelse                                                                       |
|---------------------|---------------|-----------------------------------------------------------------------------------|
| fds.modal.hidden    | Modal element | Når en modal skjules, bliver eventet `fds.modal.hidden` udløst på modal elementet |
| fds.modal.shown     | Modal element | Når en modal vises, bliver eventet `fds.modal.shown` udløst på modal elementet    |

## Modal som kræver handling {#{% include create-id.html heading="Modal som kræver handling" append="-kode" %}}

{% include code/syntax.html component="modal-forced-action" link=true copybutton=true %}

Tilføj attributten `data-modal-forced-action` for at deaktivere luk funktioner som escape. Bemærk, at eksemplet også undlader luk knappen øverst i modalen. Man skal huske at tilføre luk funktionalitet i knapperne tilføjet i modalen.