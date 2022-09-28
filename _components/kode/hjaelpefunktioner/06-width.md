---
title: Bredde i procent
parent: Hjælpefunktioner
order: 06
---

Der er opsat en hjælpefunktion som automatisk genererer klasser som styrer bredde i procent. De responsive klasser er baseret på de definerede breakpoints i `$grid-breakpoints`.

Format: `w-percent-{bredde}` og `w-percent-{breakpoint}-{bredde}`

<h3 class="h5 mb-0">Bredde</h3>

- 10: `10%`
- 20: `20%`
- 30: `30%`
- 40: `40%`
- 50: `50%`
- 60: `60%`
- 70: `70%`
- 80: `80%`
- 90: `90%`
- 100: `100%`

<h3 class="h5">Eksempel:</h3>

{% highlight html %}
<h1 class="w-percent-100"> Dette element har en bredde på 100% </h1>
<h1 class="w-percent-md-30"> Dette element har en bredde på 30% på skærme over 768px </h1>
{% endhighlight %}
