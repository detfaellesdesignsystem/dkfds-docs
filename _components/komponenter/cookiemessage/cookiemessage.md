---
permalink: /komponenter/cookiemeddelelse/
layout: styleguide
type: component
title: Cookiemeddelelse
category: Komponenter_category
subcategory: Komponenter
lead: Cookiemeddelelsen vises i bunden af siden, og følger med, når man scroller på siden.
---

{% include code/preview-iframe.html component="cookie-message" %}
{% include code/accordion.html component="cookie-message" %}

## Implementering

Koden indsættes under body og før header. Gør man brug af <a href="/design/typography/#skip-link">skip link</a>, skal koden indsættes herefter.

Bemærk at DKFDS på nuværende tidspunkt kun leverer HTML og CSS til denne komponent. Funktionaliteten skal man derfor selv håndtere.
