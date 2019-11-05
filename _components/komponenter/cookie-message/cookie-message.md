---
permalink: /komponenter/cookiemeddelelse/
layout: styleguide
type: component
title: Cookiemeddelelse
category: Komponenter_category
subcategory: Komponenter
lead: Cookiemeddelelsen vises i bunden af siden, og følger med, når man scroller på siden.
---
<div class="alert alert-info alert--paragraph" role="alert">
    <div class="alert-body">
        <p class="alert-text">
            Bemærk at DKFDS på nuværende tidspunkt kun leverer HTML og CSS til denne komponent. Funktionaliteten skal man derfor selv håndtere.
        </p>
    </div>
</div>
{% include code/preview.html component="cookie-message" %}
{% include code/accordion.html component="cookie-message" %}
<div class="accordion accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="false" aria-controls="code-cookiemessage-docs">
    Implementering
  </button>
  <div id="code-cookiemessage-docs" aria-hidden="true" class="accordion-content">
    <p>Koden indsættes under body og før header. Gør man brug af <a href="/design/typography/#skip-link">skip link</a>, skal koden indsættes herefter.</p>
  </div>
</div>
