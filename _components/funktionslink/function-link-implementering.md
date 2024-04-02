---
permalink: "/komponenter/funktionslink/implementering/"
guidelinelink: "/komponenter/funktionslink/guidelines/"
redirect_from:
- "/kode/komponenter/funktionslink/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Funktionslink
lead: Funktionslink lader brugeren udføre forskellige systemfunktionaliteter.
component: "function-link-print"
componentTitle: "Eksempel på funktionslink"
anchor: true
subnav:
- text: Installation
  href: '#installation'
- text: Gem kladde
  href: '#gem'
- text: Luk
  href: '#luk'
- text: Slet
  href: '#slet'
- text: Download
  href: '#download'
description: "Dokumentation på implementering af funktionslink."
tags:
---

{:#installation}
## Installation

### HTML Struktur

{% include code/syntax.html component="function-link-print" copybutton=true %}

Funktionslink kan teknisk defineres som `<a>` element eller `<button>` afhængigt af funktionen.

{:#gem}
## Gem kladde

{% include code/syntax.html component="function-link-gem" link=true copybutton=true %}

{:#luk}
## Luk

{% include code/syntax.html component="function-link-luk" link=true copybutton=true %}

{:#slet}
## Slet

{% include code/syntax.html component="function-link-slet" link=true copybutton=true %}

{:#download}
## Download

{% include code/syntax.html component="function-link-download" link=true copybutton=true %}