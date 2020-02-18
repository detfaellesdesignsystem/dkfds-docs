---
permalink: "/kode/typografi/"
title: Typografi
layout: styleguide
type: component
category: Kode_category
subcategory: Kode
lead: 
description: ''
tags: 

---
Som beskrevet i <a href="/design/typografi/">Typografi afsnittet under design</a> gør vi brug af fonten IBM Plex Sans i Det Fælles Designsystem. Da det er en ekstern font, skal den loades i hver løsning. Fonten leveres samlet med DKFDS pakken.

## Preload

Man kan vælge at gøre brug af preload, således at fonten loades tidligere og giver derfor en bedre oplevelse af løsningen.

{% highlight html %}
<!-- Preload fonts -->
<link rel="preload" href="/assets/fonts/IBMPlexSans-Medium.woff" as="font" crossorigin="">
<link rel="preload" href="/assets/fonts/IBMPlexSans-Bold.woff" as="font" crossorigin="">
<link rel="preload" href="/assets/fonts/IBMPlexSans-Regular.woff" as="font" crossorigin="">
<link rel="preload" href="/assets/fonts/IBMPlexSans-SemiBold.woff" as="font" crossorigin="">
{% endhighlight %}