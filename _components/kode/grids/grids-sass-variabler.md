---
type: component
title: Sass variabler i designsystemet
parent: Grid
order: 70
---

{% highlight scss %}
$grid-columns:      12;
$grid-gutter-width: 30px;

$grid-breakpoints: (
    // Extra small screen / phone
    xs: 0,
    // Small screen / phone
    sm: 576px,
    // Medium screen / tablet
    md: 768px,
    // Large screen / desktop
    lg: 992px,
    // Extra large screen / wide desktop
    xl: 1200px
);

$container-max-widths: (
    sm: 100%,
    md: 100%,
    lg: 100%,
    xl: 1200px
);
{% endhighlight %}
