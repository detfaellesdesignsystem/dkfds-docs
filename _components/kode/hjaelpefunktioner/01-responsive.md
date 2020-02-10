---
title: Responsive hjælpeklasser
parent: Hjælpefunktioner
order: 01
---

Alle de klasser som bliver genereret af hjælpefunktionerne findes både i en version som virker i alle browserstørrelser og i responsive versioner som genereres på baggrund af de breakpoints som er defineret i scss-variablen `$grid-breakpoints`:

{% highlight scss %}
$grid-breakpoints: ( 
    xs: 0,
    sm: 576px,
    md: 768px,
    lg: 992px,
    xl: 1200px
) !default;
{% endhighlight %}
