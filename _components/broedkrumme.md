---
permalink: "/komponenter/broedkrumme/"
redirect_from:
- "/kode/komponenter/broedkrumme/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Brødkrumme
lead: "En brødkrumme bruges til at vise brugerne, hvor i løsningen de befinder sig, samtidig med at den gør det muligt for brugerne at navigere tilbage igennem løsningens niveauer."
description:
tags:
tabs: "Retningslinjer, kode"
---

{% include tabs.html guidelines=true code=true %}

{% include code/preview-box.html component="breadcrumbs" title="Eksempel på brødkrumme" classes="intro-example" %}

{% include anchorlinks.html guidelines="Broedkrumme" code="Broedkrumme_Kode" classes="hide-code" %}

<!--split-->

## Sådan bruges komponenten {#{% include create-id.html heading="Sådan bruges komponenten" %}}

### Anvendes til

Brug en brødkrumme, når du har brug for at hjælpe brugerne med at forstå, hvor de er i en dybere hierarkisk struktur (IA) med flere sektioner og underafsnit (niveauer) og til at give brugeren mulighed for at navigere logisk tilbage igennem niveauerne.

### Anvendes ikke til

Brug ikke brødkrummen til at vise trin i en selvbetjeningsløsning, brug da en trin-indikator (trinindikator).

Brug ikke brødkrummen sammen med en {% include links/component-guideline-link.html linktext="trinindikator" %}.

Brug ikke brødkrummen sammen med et {% include links/component-guideline-link.html linktext="tilbage-link" %}. Vælg tilbage-linket i trinbaserede løsninger og i løsninger med en flad struktur.

### Vejledning

Overvej nøje om du har brug for at anvende en brødkrumme, hvis du allerede bruger andre navigationskomponenter, der også indikerer, hvor i strukturen brugeren er, som fx venstremenu.

Overvej nøje om du skal bruge brødkrummer, hvis der er færre end to niveauer.

Brødkrummer bør ikke erstatte top- eller venstremenu.

Brødkrummer skal vise den aktuelle placering i stedets hierarkiske struktur, ikke brugerens (tilfældige) færden rundt på webstedet. Hvis der er flere veje igennem din løsning til samme side, skal brødkrummen kun vise en enkelt vej (sti).

Brødkrummen skal kun indeholde sider som brugeren kan navigere til, og ikke logiske kategorier i din hierarkiske struktur (IA).

Brødkrummestien bør som oftest starte med et link til forsiden. Alternativt (og mindre konventionelt) til den side i selvbetjeningsløsningen, hvorfra den dybere struktur starter. Dette kan fx være på en overbliksside, hvor man kan åbne nye sider med flere og flere detaljer.

Brødkrummestien skal omfatte brugerens aktuelle side, der skal være visuelt forskellig fra de andre links i brødkrummen.

På små skærme bør brødkrummen ikke ombrydes til flere linjer eller presses sammen og gøres mindre. Overvej i stedet kun at vise de sidste niveauer i brødkrummen.

## Se komponenten i eksempelløsninger {#{% include create-id.html heading="Se komponenten i eksempelløsninger" %}}

{:.nobullet-list}
- {% include links/demo-link.html linktext="Sagsoversigt: Sagsnr. 123456789" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Sagsoversigt: Afgørelser" returnID="eksempelloesninger" %}

## Referencer {#{% include create-id.html heading="Referencer" %}}

{:.nobullet-list}
- {% include links/external-link.html linktext="GovUK Design System Breadcrumbs" %}
- {% include links/external-link.html linktext="Breadcrumbs: 11 Design Guidelines for Desktop and Mobile" %}
- {% include links/external-link.html linktext="Breadcrumbs In Web Design: Examples And Best Practices" %}
- {% include links/external-link.html linktext="When You Should Use a Breadcrumb Navigation" %}

<!--split-->

## Installation {#{% include create-id.html heading="Installation" append="-kode" %}}

### HTML Struktur

{% include code/syntax.html component="breadcrumbs" copybutton=true %}

Se {% include links/internal-link.html linktext='eksempelløsningen "Sagsoversigt"' %} for placering i koden. Bemærk at brødkrummen placeres to forskellige steder, så den vises korrekt i alle skærmstørrelser.