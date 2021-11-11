---
permalink: "/kode/komponenter/notifikation/"
parentlink: /kode/komponenter/
layout: styleguide
type: component
title: Notifikation (Toast)
category: Kode_category
subcategory: Kode
description: "Dokumentation på implementering af notifikation."
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

{% include code/preview-box.html component="notification-info" title="Eksempel på notifikation komponent" %}

## Eksempler og retningslinjer
<ul class="nobullet-list">
    <li><a href="/komponenter/notifikation/#retningslinjer">Retningslinjer</a></li>
    <li><a href="/komponenter/notifikation/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur

{% include code/syntax.html component="notification-info" %}

Kopiér ovenstående kode for at indsætte én notifikation.

Bemærk at ovenstående har class `show` som default. Der følger en animation med når en notifikation vises, som kommer ved at man ændrer klasserne  i følgende flow:
1. `hide`
2. `showing`
3. `show`

Ved at bruge nedenstående javascript vil dette komme ud af boksen. Men bemærk at en notifikation bør have class `hide` fra start.

#### Placering
Notifikationer placeres i en div med class `toast-container`. Denne div placeres som første element i `<main>`.

<a href="/eksempel/notification/" target="_blank">Se fungerende eksempel på implementering af notifikation i et nyt vindue</a>

### Javascript
Der medfølger Javascript til komponenten, som man kan vælge at bruge. 

#### Vis
Når en notifikation vises ændres class fra `hide` til `showing` og til sidst `show`.

{% highlight javascript %}
let toast = new DKFDS.Toast(document.getElementById('TOAST-ID'));
toast.show();
{% endhighlight %}

### Skjul
Når en notifikation skjules ændre `show` til `hide`.

{% highlight javascript %}
let toast = new DKFDS.Toast(document.getElementById('TOAST-ID'));
toast.hide();
{% endhighlight %}

## Varianter

{:#succes}
### Succes
{% include code/syntax.html component="notification-success" link="true" %}

{:#advarsel}
### Advarsel
{% include code/syntax.html component="notification-warning" link="true" %}

{:#fejl}
### Fejl
{% include code/syntax.html component="notification-error" link="true" %}

{:#information}
### Information
{% include code/syntax.html component="notification-info" link="true" %}
