---
permalink: "/komponenter/fil-upload/implementering/"
guidelinelink: "/komponenter/fil-upload/guidelines/"
redirect_from:
- "/kode/komponenter/fil-upload/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Vedhæft fil
component: "file-input"
componentTitle: "Eksempel på fil upload"
anchor: false
description: "Dokumentation på implementering af fil upload felt."
tags:
---

## Installation

### HTML Struktur

{% include code/syntax.html component="file-input" copybutton=true %}

Vi anbefaler at bruge det indbyggede input felt til filer `type="file"` frem for en skræddersyet løsning.

Årsagen til dette er:

- at feltet får fokus, når man navigerer ved brug af tastaturet
- at feltet fungerer ved brug af tastatur
- at feltet fungerer ved brug af hjælpemidler
- at feltet fungerer, selv når JavaScript er utilgængeligt.

Du bør anvende ovenstående kriterier til en skræddersyet løsning for denne type felt.
