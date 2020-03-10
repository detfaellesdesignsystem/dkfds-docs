---
title: Text-align
parent: Hjælpefunktioner
order: 02
---

Der er opsat en hjælpefunktion som automatisk genererer klasser til `text-align` baseret på de definerede breakpoints i $grid-breakpoints.

Format: `align-text-{retning}` og `align-text-{breakpoint}-{retning}`

<h3 class="h5 mb-0">Retning:</h3>

- Venstre: `text-align: left`
- Midten: `text-align: center`
- Højre: `text-align: right`

<h3 class="h5 mb-0">Eksempel:</h3>
{% highlight html %}
<h1 class="align-text-right">Tekst til højre</h1>
<h1 class="align-text-md-left">Tekst til højre på skærme over 768px</h1>;
{% endhighlight %}
