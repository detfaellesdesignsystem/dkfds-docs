---
permalink: "/komponenter/radioknap/"
redirect_from:
- "/komponenter/radiobutton/"
- "/kode/komponenter/radioknap/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Radioknap (Radio button)
lead: Radioknapper lader brugeren vælge én blandt flere muligheder.
description: "Radioknapper giver brugeren mulighed for at vælge en enkelt værdi ud fra en synlig liste."
tags:
tabs: "Retningslinjer, kode"
---

{% include tabs.html guidelines=true code=true %}

{% include code/preview-box.html component="radiobutton" title="Eksempel på radioknapper" classes="intro-example" %}

{% include anchorlinks.html guidelines="Radioknap" code="Radioknap_Kode" %}

<!--split-->

## Sådan bruges komponenten {#{% include create-id.html heading="Sådan bruges komponenten" %}}

### Anvendes til

Radioknapper giver brugeren mulighed for at vælge en enkelt værdi ud fra en synlig liste.

Når brugeren skal have overblik over sine mulige valg.

Når listen over mulige valg kan være på en mobilvisning.

### Anvendes ikke til

Når brugeren skal kunne vælge mere end én værdi ud fra en synlig liste. Her skal du i stedet bruge tjekbokse.

Du bør overveje at anvende en dropdown, hvis antallet af mulige værdier er for mange til en mobilvisning.

Når brugeren skal kunne undlade at vælge en værdi.

### Vejledning

Brugeren skal kunne tappe eller klikke på radioknappen eller dens label for at vælge dens værdi. Den fravælges, når en anden radioknap vælges.

Du bør opstille lister med radioknapper i lodret linje af hensyn til brugerens læseretning.

Sørg for at der er tilstrækkelig luft omkring den enkelte radioknap, så den er brugbar på touchskærme.

Vær forsigtig med at angive et standard valg, da det kan have en modsatrettet effekt: Brugeren kan føle sig manipuleret eller foretager ikke et bevidst valg.

Der bør være en overordnet label for hele listen af radioknapper.

Radioknapper bør altid kræve, at brugeren foretager et valg. I stedet for at lade brugeren skippe radioknapperne, så giv dem en neutral valgmulighed, der eventuelt er valgt som standard.

{% include dos-donts-box.html component="radiobutton-dos-donts" title="Radioknapper do's and don'ts" %}

{:#fejlmeddelelse}
#### Fejlmeddelelse

Læs mere om korrekt brug af {% include links/component-guideline-link.html linktext="fejlmeddelelser" %} og deres formuleringer.

Når der vises en fejlmeddelelse, vis da også {% include links/component-guideline-link.html linktext="fejlopsummering" %}.

{% include code/preview-box.html component="error-message-radio" title="Eksempel på radioknapper med fejlmeddelelse" %}

## Varianter {#{% include create-id.html heading="Varianter" %}}

### Hjælpetekst {#{% include create-id.html heading="Hjælpetekst" %}}

{% include code/preview-box.html component="radiobutton-helptext" title="Eksempel på radioknapper med hjælpetekst" code="/komponenter/radioknap/#hjaelpetekst-kode" %}

### Skjult indhold (Collapse) {#{% include create-id.html heading="Skjult indhold (Collapse)" %}}

{% include code/preview-box.html component="radio-collapse" title="Eksempel på radioknapper med skjult indhold" code="/komponenter/radioknap/#skjult-indhold-collapse-kode" %}

{:#collapse-retningslinjer}
#### Anvendes til

Anvendes til at vise et ekstra felt relevant for brugerens valg, fx kan du vise et e-mailfelt, når brugeren vælger at ville kontaktes pr. e-mail.

#### Anvendes ikke til

Anvendes ikke til at vise ekstra beskrivende/oplysende tekst, da skærmlæsere ikke kan læse det.

#### Vejledning

Hold det enkelt. Hvis du har behov for at eksponere større mængder af ekstra funktionalitet, bør du overveje, at fordele det ud over flere sider i stedet.

{% include dos-donts-box.html component="details-dos-donts" title="Radioknap med skjul/vis do's and don'ts" %}

## Se komponenten i eksempelløsninger {#{% include create-id.html heading="Se komponenten i eksempelløsninger" %}}

{:.nobullet-list}
- {% include links/demo-link.html linktext="Formular til kontaktoplysninger: Oplysninger om dig" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Trinformular til registrering: Tidligere registrering" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Trinformular til ansøgning: Oplysninger om ansøger" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Trinformular til ansøgning: Ansøgningens type" returnID="eksempelloesninger" %}

## Referencer {#{% include create-id.html heading="Referencer" %}}

{:.nobullet-list}
- ISO 9241-143: Forms (2012)
- {% include links/external-link.html linktext="Kara Pernice: Radio Buttons: Select One by Default or Leave All Unselected? (2014)" %}
- {% include links/external-link.html linktext="Jakob Nielsen: Checkboxes vs. Radio Buttons (2004)" %}
- {% include links/external-link.html linktext="Raluca Budiu: Interaction Cost (2013)" %}

<!--split-->

## Installation {#{% include create-id.html heading="Installation" append="-kode" %}}

### HTML Struktur

{% include code/syntax.html component="radiobutton" copybutton=true %}

Indsæt altid to eller flere radioknapper i et fieldset inklusive legend.

Giv hver radioknap sit eget id og angiv samme værdi til det tilhørende label.

`name` attributten bør have samme værdi for alle radioknapper i en liste.

Radioknappernes design er ændret i forhold til standardvisningen for at gøre dem tydeligere og øge deres visuelle respons til brugerens interaktion.

### JavaScript

Radioknapper med skjult indhold kræver JavaScript for at fungere. Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:

{% highlight javascript %}
new DKFDS.RadioToggleGroup(document.getElementById('DIV-CONTAINER-ID')).init();
{% endhighlight %}

#### Events

{:.table .table--responsive-headers}
| Event key           | Element                           | Beskrivelse                                                                                               |
|---------------------|-----------------------------------|-----------------------------------------------------------------------------------------------------------|
| fds.collapse.expanded  | `input.js-radio-toggle-group` | Når en skjul/vis komponent bliver foldet ud, bliver eventet fds.collapse.open udløst på input elementet.       |
| fds.collapse.collapsed | `input.js-radio-toggle-group` | Når en skjul/vis komponent bliver foldet ind, bliver eventet fds.collapse.close udløst på input elementet.     |

## Hjælpetekst {#{% include create-id.html heading="Hjælpetekst" append="-kode" %}}

{% include code/syntax.html component="radiobutton-helptext" link=true copybutton=true guidelines="/komponenter/radioknap/#hjaelpetekst" %}

## Skjult indhold (Collapse) {#{% include create-id.html heading="Skjult indhold (Collapse)" append="-kode" %}}

{% include code/syntax.html component="radio-collapse" link=true copybutton=true guidelines="/komponenter/radioknap/#skjult-indhold-collapse" %}

For at initialisere collapse funktionaliteten på en radioknap skal `input[type=radio]` have følgende:

- Klassen `'js-radio-toggle-content'`. Denne klasse gør at funktionaliteten bliver initialiseret. 
- Attributten `data-controls="id-of-target-to-collapse"`: denne attribute skal have id'et på det element som skal vises på radioknappen er aktiveret. 
- Hvis man ønsker at radioknappen skal være valgt fra starten af, skal den have attributten `checked` samt `data-expanded="true"`. Indholdselementet bør have attributten `aria-hidden="false"`

Det element som skal collapses/expandes skal have følgende:

- `id="id-of-target-to-collapse"`
- `aria-hidden="false"` hvis indholdet vises og `aria-hidden="true"` hvis indholdet skjules
