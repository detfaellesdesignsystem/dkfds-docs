---
title: Responsiv
parent: Tables
order: 04
lead: 
---

{% include code/preview.html component="table--responsive" %}
{% include code/accordion.html component="table--responsive" %}
<div class="accordion accordion-bordered">
  <button class="button-unstyled accordion-button"
    aria-expanded="false" aria-controls="tech-responsive-docs">
    Implementering
  </button>
  <div id="tech-responsive-docs" aria-hidden="true" class="accordion-content">
      <section>
        <h3 class="h4">Responsive headers</h3>
         <p><code>data-title</code> attribut bør tilføjes til hver <code>td</code>, således at en label bliver tilføjet for hver celle på mindre skærme.</p>
         <p>Bemærk, at <code>data-title</code> automatisk bliver tilføjet til hver <code>td</code>, hvis man har dkfds javascript filen inkluderet i sit projekt.</p>
         <h4 class="h5">Eksempel</h4>
         <pre>
&lt;tr&gt;
    &lt;td data-title="Affaldstype"&gt;Dagrenovation</td&gt;
    &lt;td data-title="Farvekode"&gt;Grøn</td&gt;
    &lt;td data-title="Beskrivelse"&gt;Madaffald, samt papir, pap eller plastik der ikke kan genanvendes, fordi der er madrester eller andet snask på.</td&gt;
    &lt;td data-title="Hvor ender det?"&gt;Alt det affald, du smider ud i din primære skraldespand, som er dagrenovationen, bliver hentet og kørt på forbrændingen. </td&gt;
&lt;/tr&gt;
         </pre>
      </section>
  </div>
</div>
