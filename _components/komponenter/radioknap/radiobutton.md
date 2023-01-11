---
permalink: /komponenter/radioknap/
redirect_from:
- /komponenter/radiobutton/
layout: styleguide
type: component
title: Radioknap (Radio button)
category: Komponenter_category
subcategory: Komponenter
anchor: true
description: "Radioknapper giver brugeren mulighed for at vælge en enkelt værdi ud fra en synlig liste."
tags:
subnav:
- text: Hjælpetekst
  href: '#hjaelpetekst'
- text: Fejlmeddelelse
  href: '#fejlmeddelelse'
- text: Lille radioknap
  href: '#lille-radioknap'
- text: Skjult indhold (Collapse)
  href: '#skjult-indhold-collapse'
---
{% include code/preview-box.html component="radiobutton" title="Eksempel på radioknapper" link=true code="/kode/komponenter/radioknap/" %}

{:.h3 #retningslinjer}
## Anvendes til

Radioknapper giver brugeren mulighed for at vælge en enkelt værdi ud fra en synlig liste.

Når brugeren skal have overblik over sine mulige valg.

Når listen over mulige valg kan være på en mobilvisning.

{:.h3}
## Anvendes ikke til

Når brugeren skal kunne vælge mere end én værdi ud fra en synlig liste. Her skal du i stedet bruge tjekbokse.

Du bør overveje at anvende en dropdown, hvis antallet af mulige værdier er for mange til en mobilvisning.

Når brugeren skal kunne undlade at vælge en værdi.

{:.h3}
## Vejledning

Brugeren skal kunne tappe eller klikke på radioknappen eller dens label for at vælge dens værdi. Den fravælges, når en anden radioknap vælges.

Du bør opstille lister med radioknapper i lodret linje af hensyn til brugerens læseretning.

Sørg for at der er tilstrækkelig luft omkring den enkelte radioknap, så den er brugbar på touchskærme.

Vær forsigtig med at angive et standard valg, da det kan have en modsatrettet effekt: Brugeren kan føle sig manipuleret eller foretager ikke et bevidst valg.

Der bør være en overordnet label for hele listen af radioknapper

{% include dos-donts-box.html component="radiobutton-dos-donts" title="Radioknapper do's and don'ts" %}

{:.nobullet-list}
### Referencer

{:.nobullet-list}
- ISO 9241-143: Forms (2012)
- <a href="https://www.nngroup.com/articles/radio-buttons-default-selection/" class="icon-link">Kara Pernice: Radio Buttons: Select One by Default or Leave All Unselected? (2014)<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>
- <a href="https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/" class="icon-link">Jakob Nielsen: Checkboxes vs. Radio Buttons (2004)<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>


{:.h3 #eksempelloesninger}
## Se komponenten i eksempelløsninger

{:.nobullet-list}
- <a href="/pages/eksempler/formular-til-kontaktoplysninger/formular-1/?r={{page.permalink}}%23eksempelloesninger" title="Vis eksempel 'Formular til kontaktoplysninger: Oplysninger om dig'">Formular til kontaktoplysninger: Oplysninger om dig</a>
- <a href="/pages/eksempler/trinformular-til-registrering/registrering-4/?r={{page.permalink}}%23eksempelloesninger" title="Vis eksempel 'Trinformular til registrering: Tidligere registrering'">Trinformular til registrering: Tidligere registrering</a>
- <a href="/pages/eksempler/trinformular-til-ansoegning/ansoegning-1/?r={{page.permalink}}%23eksempelloesninger" title="Vis eksempel 'Trinformular til ansøgning: Oplysninger om ansøger'">Trinformular til ansøgning: Oplysninger om ansøger</a>
- <a href="/pages/eksempler/trinformular-til-ansoegning/ansoegning-3/?r={{page.permalink}}%23eksempelloesninger" title="Vis eksempel 'Trinformular til ansøgning: Ansøgningens type'">Trinformular til ansøgning: Ansøgningens type</a>

{:#hjaelpetekst}
## Hjælpetekst
{% include code/preview-box.html component="radiobutton-helptext" title="Eksempel på radioknapper med hjælpetekst" %}

{:#fejlmeddelelse}
## Fejlmeddelelse
<a href="/komponenter/fejlmeddelelser/">Læs mere om korrekt brug af fejlmeddelelser og deres formuleringer.</a>

Når der vises en fejlmeddelelse, vis da også <a href="/komponenter/fejlopsummering/">fejlopsummering</a>.

{% include code/preview-box.html component="error-message-radio" title="Eksempel på radioknapper med fejlmeddelelse" %}

{:#lille-radioknap}
## Lille radioknap
{% include code/preview-box.html component="radiobutton-small" title="Eksempel på små radioknapper" %}

{:#skjult-indhold-collapse}
## Skjult indhold (Collapse)
{% include code/preview-box.html component="radio-collapse" title="Eksempel på radioknapper med skjult indhold" %}

{:#collapse-retningslinjer}
### Anvendes til
Anvendes til at vise et ekstra felt relevant for brugerens valg, fx kan du vise et e-mailfelt, når brugeren vælger at ville kontaktes pr. e-mail.

### Anvendes ikke til
Anvendes ikke til at vise ekstra beskrivende/oplysende tekst, da skærmlæsere ikke kan læse det.

### Vejledning                
Hold det enkelt. Hvis du har behov for at eksponere større mængder af ekstra funktionalitet, bør du overveje, at fordele det ud over flere sider i stedet.

{% include dos-donts-box.html component="details-dos-donts" title="Radioknap med skjul/vis do's and don'ts" %}

#### Referencer
<a href="https://www.nngroup.com/articles/interaction-cost-definition/" class="icon-link">Raluca Budiu: Interaction Cost (2013)<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>