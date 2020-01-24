---
permalink: /kode/fil-upload/
title: Fil upload
layout: styleguide
type: component
category: Kode_category
subcategory: Kode
---

{% include code/preview-box.html component="file-input" title="Eksempel på fil upload" %}

## Eksempler og dokumentation
<ul class="nobullet-list">
    <li><a href="/komponenter/faneblad/#retningslinjer">Retningslinjer</a></li>
    <li><a href="/komponenter/faneblad/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur

{% include code/syntax.html component="file-input" %}

Vi anbefaler at bruge det indbyggede input felt til filer `type="file"` frem for en skræddersyet løsning.

Årsagen til dette er:

- at feltet får fokus, når man tabulerer gennem siden
- at feltet fungerer ved brug af tastatur
- at feltet fungerer ved brug af hjælpemidler
- at feltet fungerer, selv når JavaScript er utilgængeligt.

Du bør anvende ovenstående kriterier til en skræddersyet løsning for denne type felt.