---
permalink: /kode/komponenter/fil-upload/
parentlink: /kode/komponenter/
title: Vedhæft fil
layout: styleguide
type: component
category: Kode_category
subcategory: Kode
description: "Dokumentation på implementering af fil upload felt."
tags:
---

{% include code/preview-box.html component="file-input" title="Eksempel på fil upload" %}

## Eksempler og retningslinjer
<ul class="nobullet-list">
    <li><a href="/komponenter/fil-upload/#retningslinjer">Retningslinjer</a></li>
    <li><a href="/komponenter/fil-upload/">Eksempler</a></li>
</ul>

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
