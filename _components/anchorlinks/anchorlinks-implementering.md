---
permalink: "/komponenter/anchorlinks/implementering/"
guidelinelink: "/komponenter/anchorlinks/guidelines/"
redirect_from:
- "/kode/komponenter/anchorlinks/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Anchorlinks
lead: Anchorlinks linker til bestemte steder på samme side. De vises på den enkelte side under overskrift og eventuel manchet.
anchor: false
description: Dokumentation på implementering af anchorlinks.
tags:
- anchorlinks
- anchor
- ankerlinks
- anker
- subnav
---

## Installation

### HTML Struktur

{% include code/syntax.html component="anchorlinks" copybutton=true %}

### Javascript

Der medfølger ikke funktionalitet med denne komponent. Hvis tryk på et link skal lave en scroll-animation ned til afsnittet, skal man selv stå for implementeringen af denne animation.