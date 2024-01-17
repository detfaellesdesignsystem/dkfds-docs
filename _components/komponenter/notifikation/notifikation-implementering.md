---
permalink: "/komponenter/toastbesked/implementering/"
guidelinelink: "/komponenter/toastbesked/guidelines/"
redirect_from:
- "/kode/komponenter/notifikation/"
- "/eksempel/notification/"
- "/eksempel/notification-success/"
- "/eksempel/notification-warning/"
- "/eksempel/notification-error/"
- "/eksempel/notification-info/"
- "/kode/komponenter/toastbesked/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Toastbesked
lead: Toastbeskeder viser aktuel information og dukker op på skærmen i det øjeblik, de bliver relevante. Toastbeskeder vises typisk som reaktion på brugerinteraktion.
component: "toastbesked"
componentTitle: "Eksempel på toastbesked"
anchor: true
subnav:
- text: Succes
  href: "#succes"
- text: Advarsel
  href: "#advarsel"
- text: Fejl
  href: "#fejl"
- text: Information
  href: "#information"
description: "Dokumentation på implementering af toastbesked."
tags:
- toast
- toastbesked
- notifikation
- besked
---

## Installation

### HTML Struktur

{% include code/syntax.html component="toastbesked-info" copybutton=true %}

Kopiér ovenstående kode for at indsætte én toastbesked.

Bemærk at ovenstående har class `show` som default. Der følger en animation med når en toastbesked vises, som kommer ved at man ændrer klasserne  i følgende flow:
1. `hide`
2. `showing`
3. `show`

Ved at bruge nedenstående javascript vil dette komme ud af boksen. Men bemærk at en toastbesked bør have class `hide` fra start.

#### Placering
Toastbeskeder placeres i en div med class `toast-container` og attributter `aria-live="assertive"`, `aria-atomic="false"` og `aria-relevant="additions"`. Denne div placeres som første element i `<main>`.

{% highlight html %}
<main id="main-content">
    <div class="toast-container" aria-live="assertive" aria-atomic="false" aria-relevant="additions">
        <!-- Placer toastbeskeder her -->
    </div>
    ...
</main>
{% endhighlight %}

{% include links/example-link.html linktext="Se fungerende eksempel på implementering af toastbesked" %}

### Javascript
Der medfølger Javascript til komponenten, som man kan vælge at bruge. 

#### Vis
Når en toastbesked vises, ændres class fra `hide` til `showing` og til sidst `show`.

{% highlight javascript %}
let toast = new DKFDS.Toast(document.getElementById('TOAST-ID'));
toast.show();
{% endhighlight %}

#### Skjul
Når en toastbesked skjules, ændres class fra `show` til `hide`.

{% highlight javascript %}
let toast = new DKFDS.Toast(document.getElementById('TOAST-ID'));
toast.hide();
{% endhighlight %}

## Varianter

{:#succes}
### Succes
{% include code/syntax.html component="toastbesked-success" link=true copybutton=true %}

{:#advarsel}
### Advarsel
{% include code/syntax.html component="toastbesked-warning" link=true copybutton=true %}

{:#fejl}
### Fejl
{% include code/syntax.html component="toastbesked-error" link=true copybutton=true %}

{:#information}
### Information
{% include code/syntax.html component="toastbesked-info" link=true copybutton=true %}
