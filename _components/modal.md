---
permalink: "/komponenter/modal/"
redirect_from:
- "/udvidelser/micromodal/"
- "/kode/plugins/micromodal/"
- "/kode/komponenter/modal/"
layout: styleguide
category: komponenter_menu
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
tabs: "Retningslinjer, kode, web component"
---

{% include tabs.html guidelines=true code=true web_component=true %}

{% include code/preview-box.html component="modal" title="Eksempel på modal" classes="intro-example" %}

{% include anchorlinks.html guidelines="Modal" code="Modal_Kode" webcomponent="Modal_Web_Component" %}

<!--split-->

## Sådan bruges komponenten {#{% include create-id.html heading="Sådan bruges komponenten" %}}

### Anvendes til {#{% include create-id.html heading="Anvendes til" %}}

Modaler anvendes til at tvinge brugerens fokus på et specifikt, afgrænset indhold, hvor den interaktive respons og forståelse er centralt for brugerens videre anvendelse af løsningen. Det kunne fx være en godkendelse af en handling, behov for bekræftelse eller overførsel af rettigheder, som løsningen skal kunne udføre for at kunne fuldføre sin dialog med brugeren.

Brug en modal, når du vil være sikker på, at brugeren ser en bestemt dialog og forholder sig til dens indhold.

### Anvendes ikke til {#{% include create-id.html heading="Anvendes ikke til" %}}

En modal kan ikke erstatte individuelle sider i en selvbetjeningsløsning eller hjemmeside.

Modaler anvendes ikke til længere, sammenhængende indhold.

Modaler anvendes i begrænset omfang, da de kan øge løsningens kognitive load pga brugerens fokus flyttes.

Undgå modaler på mobile løsninger og visninger, da de ikke fungerer godt for brugeren.

Undgå at have formularer inde i en modal. Særligt hvis det er en formular med mere end ét felt. I sådan et tilfælde bør man overveje at dele siden op, så indholdet strækker sig over flere sider.

### Vejledning {#{% include create-id.html heading="Vejledning" %}}

Undgå at have flere åbne modaler på siden - det giver en dårligere brugeroplevelse og kan resultere i at brugeren mister fornemmelsen af, hvor de er på siden.

Modalen skal have en meningsfuld overskrift, der klart relaterer sig til konteksten.

Knapper i modalen skal være tydelige og meningsfulde. Læs mere om {% include links/component-guideline-link.html linktext="knapper" %}.

Vær sikker på at modalen kun akkurat passer til sit indhold og ikke dækker baggrunden (selve løsningen) fuldstændigt. Det er nødvendigt, at brugeren forstår, at de ikke har skiftet kontekst.

Brugeren skal selv aktivere modalen. Den må ikke aktiveres per automatik, da det kan have en modsatrettet effekt, hvor brugeren lukker det i affekt. Den eneste undtagelse er pattern for {% include links/internal-link.html linktext="Session udløber" %}, hvor modalen åbner af sig selv for at advare om en anden ændring i brugergrænsefladen, som brugeren ikke selv har aktiveret - nemlig automatisk log af.

Hold teksten i modalen så kort og koncis som muligt. Det anbefales ikke, at indholdet i modalen bliver så langt, at der opstår scroll. Overvej at bruge en individuel side i stedet for et modal, hvis indholdet er meget langt.

## Varianter {#{% include create-id.html heading="Varianter" %}}

### Modal som kræver handling {#{% include create-id.html heading="Modal som kræver handling" %}}

Anvend modal som kræver handling, når brugeren ikke skal kunne lukke modalen uden at tage stilling til dets indhold.

{% include code/preview-box.html component="modal-forced-action" title="Eksempel på modal, som kræver handling" link=true code="/komponenter/modal/#modal-som-kraever-handling-kode" %}

## Se komponenten i eksempelløsninger {#{% include create-id.html heading="Se komponenten i eksempelløsninger" %}}

Se hvordan komponenten bruges i de forskellige {% include links/internal-link.html linktext="eksempler på selvbetjeningsløsninger" %} (tryk på <em>'Kontakt'</em> i eksemplernes header)

<!--split-->

## Installation {#{% include create-id.html heading="Installation" append="-kode" %}}

### HTML Struktur {#{% include create-id.html heading="HTML Struktur" append="-kode" %}}

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

### JavaScript {#{% include create-id.html heading="JavaScript" append="-kode" %}}

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

{% include code/syntax.html component="modal-forced-action" link=true copybutton=true guidelines="/komponenter/modal/#modal-som-kraever-handling" %}

Tilføj attributten `data-modal-forced-action` for at deaktivere luk funktioner som escape. Bemærk, at eksemplet også undlader luk knappen øverst i modalen. Man skal huske at tilføre luk funktionalitet i knapperne tilføjet i modalen.

<!--split-->

{% include web-component-shared-text/web-components-beta.html %}

{% include containers-for-code-and-examples/top-example-and-show-code-in-tabs.html example="fds-modal-default" subheading_tag="h2" collapsable=false %}

## Om denne komponent {#{% include create-id.html heading="Om denne komponent" append="-webcomponent" %}}

{% include web-component-shared-text/intro-light-dom.html %}

## Varianter {#{% include create-id.html heading="Varianter" append="-webcomponent" %}}

### Modal som kræver handling {#{% include create-id.html heading="Modal som kræver handling" append="-webcomponent" %}}

Modaler, som kræver handling, kan ikke lukkes med Escape-tasten eller ved klik på baggrunden. Undlad at sætte en luk-knap i øverste højre hjørne og brug kun `fds-modal-closer` på de knapper, som kan bruges til at foretage et valg.

{% include containers-for-code-and-examples/top-example-and-show-code-in-tabs.html example="fds-modal-forced-action" heading_tag="h4" subheading_tag="h5" %}

Bemærk: Attributten `dismissible` sætter både attributten `closedby` og en event listener for `cancel` grundet forskellig browsersupport og -opførsel (HTML Living Standard).

## Konfiguration {#{% include create-id.html heading="Konfiguration" append="-webcomponent" %}}

Bemærk, at modalkomponenten som standard altid kræver et `<dialog>`-element direkte efterfulgt af `<div class="scrollable-area">`, der indeholder en tom `<div class="modal-top"></div>` samt modalens øvrige indhold. Komponenten genererer ikke denne struktur selv, da strukturen afviger afhængigt af variant-attributten.

### fds-modal {#{% include create-id.html heading="fds-modal" append="-webcomponent" %}}

#### Attributter

{:.table .table--responsive-headers}
| Attribut    | Beskrivelse                                                                                                                                                               |
|-------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ready       | Sæt til `"false"` for at udskyde initialisering af komponenten. Udelad attributten, eller sæt den til andet end `"false"`, for at initialisere komponenten med det samme. |
| heading     | Sæt modalens overskrift. Hvis overskriften ikke allerede findes i markup'en, genereres den automatisk.                                                                    |
| heading-id  | Sæt ID for overskriftselementet. Bruges til at knytte overskriften til dialogen via `aria-labelledby`. Standardværdien er tilfældigt genereret.                           |
| dismissible | Sæt til `false` for at forhindre, at modalen lukkes ved klik på baggrunden, med tilbage-knappen på mobiler eller med Escape. Default er `true`.                           |
| variant     | Sæt modalens visningstype. Gyldige værdier er `default`, `bottom-sheet` og `drawer`. Default er `default`.                                                                |
| close-text  | Sæt teksten på luk-knappen, når den genereres automatisk. Default er `Luk`.                                                                                               |

`bottom-sheet` er dokumenteret under {% include links/component-guideline-link.html linktext="trinindikator" %}, og `drawer` er dokumenteret under {% include links/component-guideline-link.html linktext="header" %}.

#### Funktioner

{:.table .table--responsive-headers}
| Funktion           | Beskrivelse                                                                                      |
|--------------------|---------------------------------------------------------------------------------------------------|
| open()             | Åbn modalen.                                                                                      |
| close(returnValue) | Luk modalen. `returnValue` er valgfri og sættes som dialogens `returnValue`.                    |

Bemærk, at der altid kun bør være én åben modal ad gangen. Har man brug for at åbne to modaler efter hinanden, skal forrige modal lukkes, før den nye åbnes.

#### Events

{:.table .table--responsive-headers}
| Event           | Beskrivelse                                                                             |
|-----------------|-----------------------------------------------------------------------------------------|
| fds-modal-open  | Udløses når modalen åbnes.                                                              |
| fds-modal-close | Udløses når modalen lukkes. `event.detail.returnValue` indeholder dialogens returværdi. |

### fds-modal-opener {#{% include create-id.html heading="fds-modal-opener" append="-webcomponent" %}}

#### Attributter

{:.table .table--responsive-headers}
| Attribut | Beskrivelse                                                                                                                                                               |
|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| modal-id | Sæt ID'et på den `fds-modal`, der skal åbnes.                                                                                                                             |
| ready    | Sæt til `"false"` for at udskyde initialisering af komponenten. Udelad attributten, eller sæt den til andet end `"false"`, for at initialisere komponenten med det samme. |

#### Events

{:.table .table--responsive-headers}
| Event                  | Beskrivelse                                                                                                                 |
|------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| fds-modal-opener-click | Udløses når der klikkes på elementet i `fds-modal-opener`. `event.detail.modalId` indeholder ID'et på den modal, der åbnes. |

### fds-modal-closer {#{% include create-id.html heading="fds-modal-closer" append="-webcomponent" %}}

#### Attributter

{:.table .table--responsive-headers}
| Attribut     | Beskrivelse                                                                                                                                                                 |
|--------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| return-value | Sæt den returværdi, dialogen skal have, når den lukkes via dette element.                                                                                                  |
| ready        | Sæt til `"false"` for at udskyde initialisering af komponenten. Udelad attributten, eller sæt den til andet end `"false"`, for at initialisere komponenten med det samme. |

#### Events

{:.table .table--responsive-headers}
| Event                  | Beskrivelse                                                                                                              |
|------------------------|--------------------------------------------------------------------------------------------------------------------------|
| fds-modal-closer-click | Udløses når der klikkes på elementet i `fds-modal-closer`. `event.detail.returnValue` indeholder den angivne returværdi. |

## Referencer {#{% include create-id.html heading="Referencer" append="-webcomponent" %}}

{% include links/external-link.html linktext="HTML Living Standard, 6.10.3 The CloseWatcher interface, cancel-eksempel" %}