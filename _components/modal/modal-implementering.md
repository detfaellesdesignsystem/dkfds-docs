---
permalink: "/komponenter/modal/implementering/"
guidelinelink: "/komponenter/modal/guidelines/"
redirect_from:
- "/kode/komponenter/modal/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Modal
lead: Modaler tvinger brugeren til at fokusere på og tage stilling til afgørende indhold, mens den øvrige side er deaktiveret.
anchor: true
subnav:
- text: Installation
  href: "#installation"
- text: Modal som kræver handling
  href: "#kraever-handling"
description: Dokumentation på implementering af modal.
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

{:#installation}
## Installation

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

{:#kraever-handling}
## Modal som kræver handling

{% include code/syntax.html component="modal-forced-action" link=true copybutton=true %}

Tilføj attributten `data-modal-forced-action` for at deaktivere luk funktioner som escape. Bemærk, at eksemplet også undlader luk knappen øverst i modalen. Man skal huske at tilføre luk funktionalitet i knapperne tilføjet i modalen.