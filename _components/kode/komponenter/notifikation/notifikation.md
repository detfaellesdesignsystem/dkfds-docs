---
permalink: "/kode/komponenter/toastbesked/"
redirect_from:
- /kode/komponenter/notifikation/
- /eksempel/toastbesked/
- /eksempel/notification-success/
- /eksempel/notification-warning/
- /eksempel/notification-error/
- /eksempel/notification-info/
parentlink: /kode/komponenter/
layout: styleguide
type: component
title: Toastbesked
category: Kode_category
subcategory: Kode
description: "Dokumentation på implementering af toastbesked."
tags: 
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
---

{% include code/preview-box.html component="toastbesked-info" title="Eksempel på toastbesked komponent" %}

## Eksempler og retningslinjer
<ul class="nobullet-list">
    <li><a href="/komponenter/toastbesked/#retningslinjer">Retningslinjer</a></li>
    <li><a href="/komponenter/toastbesked/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur

{% include code/syntax.html component="notification-info" %}

Kopiér ovenstående kode for at indsætte én toastbesked.

Bemærk at ovenstående har class `show` som default. Der følger en animation med når en toastbesked vises, som kommer ved at man ændrer klasserne  i følgende flow:
1. `hide`
2. `showing`
3. `show`

Ved at bruge nedenstående javascript vil dette komme ud af boksen. Men bemærk at en toastbesked bør have class `hide` fra start.

#### Placering
Toastbeskeder placeres i en div med class `toast-container`. Denne div placeres som første element i `<main>`.

<a href="/eksempel/toastbesked/" target="_blank">Se fungerende eksempel på implementering af toastbesked i et nyt vindue</a>

### Javascript
Der medfølger Javascript til komponenten, som man kan vælge at bruge. 

#### Vis
Når en toastbesked vises ændres class fra `hide` til `showing` og til sidst `show`.

{% highlight javascript %}
let toast = new DKFDS.Toast(document.getElementById('TOAST-ID'));
toast.show();
{% endhighlight %}

### Skjul
Når en toastbesked skjules ændre `show` til `hide`.

{% highlight javascript %}
let toast = new DKFDS.Toast(document.getElementById('TOAST-ID'));
toast.hide();
{% endhighlight %}

## Varianter

{:#succes}
### Succes
{% include code/syntax.html component="toastbesked-success" link="true" %}

{:#advarsel}
### Advarsel
{% include code/syntax.html component="toastbesked-warning" link="true" %}

{:#fejl}
### Fejl
{% include code/syntax.html component="toastbesked-error" link="true" %}

{:#information}
### Information
{% include code/syntax.html component="toastbesked-info" link="true" %}
