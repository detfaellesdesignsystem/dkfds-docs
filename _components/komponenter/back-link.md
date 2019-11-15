---
permalink: /komponenter/tilbage-link/
layout: styleguide
type: element
title: Tilbage link
category: Komponenter_category
lead: Tilbage link bruges til at linke tilbage til forrige side i en løsning.
subcategory: Komponenter
---
{% include code/preview.html component="back-link" %}
{% include code/accordion.html component="back-link" %}
<div class="accordion accordion-bordered">
  <button class="button-unstyled accordion-button"
    aria-expanded="false" aria-controls="documentation-backlink">
    Implementering
  </button>
  <div id="documentation-backlink" class="accordion-content">
    <p>Linket placeres øverst på siden, over <code>h1</code>.</p>
    <p>Se eksempel på implementering på vores eksempelløsning: <a href="/pages/eksempler/vedhaeft-fil/fil-1/">Dokumenter til sagen</a></p>   
  </div>
</div>