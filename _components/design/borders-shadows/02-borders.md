---
type: component
title: Streger
parent: borders-shadows
order: 02
component: shadows
componentHideCode: borders
---

### Implementering
#### Ydre streger

- Ydre streger er 1px bredde og er mørkegrå. Brug variablen $outer-border for at opsætte ydre kanter.
- Bruges som ydre streger på komponenter, til at adskille dem fra hinanden.

##### Eksempel:

{% highlight scss %}
border: $outer-border;
{% endhighlight %}

#### Indre streger

- Indre streger er 1px bredde og er lysegrå. For at bruge indre borders bruges variablen `$inner-border`
- Anvendes som indvendige streger i komponenter, der kræver separering af elementer.

##### Eksempel:

{% highlight scss %}
border: $inner-border;
{% endhighlight %}

#### Knap borders
- Borders på knapper er 2px bredde og farven afhænger af elementet. For at bruge borders til knapper bruges variablen `$button-border`
- Har ekstra border bredde, som bruges på knapper

##### Eksempel:

{% highlight scss %}
border: $button-border;
{% endhighlight %}
