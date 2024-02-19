---
permalink: "/komponenter/radioknap/guidelines/"
redirect_from:
- "/komponenter/radiobutton/"
- "/komponenter/radioknap/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Radioknap (Radio button)
lead: Radioknapper lader brugeren vælge én blandt flere muligheder.
component: "radiobutton"
componentTitle: "Eksempel på radioknapper"
componentLink: true
anchor: true
subnav:
- text: Sådan bruges komponenten
  href: "#retningslinjer"
- text: Varianter
  href: "#varianter"
- text: Se komponenten i eksempelløsninger
  href: "#eksempelloesninger"
- text: Referencer
  href: "#ref"
description: "Radioknapper giver brugeren mulighed for at vælge en enkelt værdi ud fra en synlig liste."
tags:
---

{:#retningslinjer}
## Sådan bruges komponenten

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

{% include links/component-guideline-link.html linktext="Læs mere om korrekt brug af fejlmeddelelser og deres formuleringer." %}

Når der vises en fejlmeddelelse, vis da også {% include links/component-guideline-link.html linktext="fejlopsummering" %}.

{% include code/preview-box.html component="error-message-radio" title="Eksempel på radioknapper med fejlmeddelelse" %}

{:#varianter}
## Varianter

{:#hjaelpetekst}
### Hjælpetekst

{% include code/preview-box.html component="radiobutton-helptext" title="Eksempel på radioknapper med hjælpetekst" %}

{:#skjult-indhold-collapse}
### Skjult indhold (Collapse)

{% include code/preview-box.html component="radio-collapse" title="Eksempel på radioknapper med skjult indhold" %}

{:#collapse-retningslinjer}
#### Anvendes til

Anvendes til at vise et ekstra felt relevant for brugerens valg, fx kan du vise et e-mailfelt, når brugeren vælger at ville kontaktes pr. e-mail.

#### Anvendes ikke til

Anvendes ikke til at vise ekstra beskrivende/oplysende tekst, da skærmlæsere ikke kan læse det.

#### Vejledning

Hold det enkelt. Hvis du har behov for at eksponere større mængder af ekstra funktionalitet, bør du overveje, at fordele det ud over flere sider i stedet.

{% include dos-donts-box.html component="details-dos-donts" title="Radioknap med skjul/vis do's and don'ts" %}

{:#eksempelloesninger}
## Se komponenten i eksempelløsninger

{:.nobullet-list}
- {% include links/demo-link.html linktext="Formular til kontaktoplysninger: Oplysninger om dig" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Trinformular til registrering: Tidligere registrering" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Trinformular til ansøgning: Oplysninger om ansøger" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Trinformular til ansøgning: Ansøgningens type" returnID="eksempelloesninger" %}

{:#ref}
## Referencer

{:.nobullet-list}
- ISO 9241-143: Forms (2012)
- {% include links/external-link.html linktext="Kara Pernice: Radio Buttons: Select One by Default or Leave All Unselected? (2014)" %}
- {% include links/external-link.html linktext="Jakob Nielsen: Checkboxes vs. Radio Buttons (2004)" %}
- {% include links/external-link.html linktext="Raluca Budiu: Interaction Cost (2013)" %}