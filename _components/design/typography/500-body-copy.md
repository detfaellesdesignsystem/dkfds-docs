---
type: component
title: Brødtekst (body copy)
parent: typography
order: 500
lead: Brødtekst er standardformateringen for tekst i designsystemet og bliver i særdeleshed brugt til afsnit af tekst.
---

{% include code/preview.html component="inlinetext" %}
{% include code/accordion.html component="inlinetext" %}

### Implementering

Fontstørrelsen for brødtekst er som udgangspunkt <strong>16px</strong>, og har en linjehøjde som svarer til 24px.

Alle fontstørrelser er angivet i rem-værdier og forholder sig derfor til fontstørrelsen, som den er angivet i `<html>`-tagget.

HTML-taggets fontstørrelse er angivet i procent. Dvs. fontstørrelsen er relativ til browserens brugervalgte fontstørrelse. De fleste brugere har en standardindstilling på 16px, 62.5% af dette er 10px og en fontstørrelse på 1.6 rem giver derfor en fontstørrelse på 16px. Hvis brugeren vælger at indstille sin fontstørrelse til en standard, som er større end 16px, vil hele sitet afspejle brugerens ønske.

{% highlight scss %}
html { font-size: 62.5%; }
p { font-size: 1.6rem; } /* =16px */
{% endhighlight %}

### Retningslinjer

- Undgå "mure af tekst" i din selvbetjeningsløsning: Bruge white space / mellemrum til at skabe luft mellem tekster og øge læsbarheden.
- Brug kun fed tekst i meget begrænset omfang: Fx inde i sætninger til at fremhæve særligt centrale tal eller pointer.
- Brug ikke fed tekst som overskrift.
- Brug ikke understreget tekst, da det ligner links.
- Brug ikke kursiv tekst, da det nedsætter læsbarheden.
