---
type: component
title: Brødtekst (body copy)
parent: typography
order: 05
---

<p class="font-lead">Brødtekst er standardformateringen for tekst i designsystemet og bliver i særdeleshed brugt til afsnit af tekst.</p>

{% include code/preview.html component="inlinetext" %}
{% include code/accordion.html component="inlinetext" %}

<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="false" aria-controls="bodycopy-docs-tech">
    Implementering
  </button>
  <div id="bodycopy-docs-tech" aria-hidden="true" class="accordion-content">
    <p>Fontstørrelsen for brødtekst er som udgangspunkt <strong>16px</strong>, og har en linjehøjde som svarer til 24px.</p>
    <p>Alle fontstørrelser er angivet i rem-værdier og forholder sig derfor til fontstørrelsen, som den er angivet i <code>&lt;html&gt;</code>-tagget.</p>
    <p>HTML-taggets fontstørrelse er angivet i procent. Dvs. fontstørrelsen er relativ til browserens brugervalgte fontstørrelse. De fleste brugere har en standardindstilling på 16px, 62.5% af dette er 10px og en fontstørrelse på 1.6 rem giver derfor en fontstørrelse på 16px. Hvis brugeren vælger at indstille sin fontstørrelse til en standard, som er større end 16px, vil hele sitet afspejle brugerens ønske.</p>
    <div class="code-highlight">
        <code>        
            html { font-size: 62.5%; } <br>
            p &nbsp;&nbsp;&nbsp;{ font-size: 1.6rem; } /* =16px */ <br>
        </code>
    </div>
  </div>
</div>

<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="typobody-docs">
    Retningslinjer
  </button>
  <div id="typobody-docs" aria-hidden="false" class="accordion-content">
    <article>
      <section>   
          <ul>
            <li>Undgå "mure af tekst" i din selvbetjeningsløsning: Bruge white space / mellemrum til at skabe luft mellem tekster og øge læsbarheden.</li>
            <li>Brug kun fed tekst i meget begrænset omfang: Fx inde i sætninger til at fremhæve særligt centrale tal eller pointer.</li>
            <li>Brug ikke fed tekst som overskrift.</li>
            <li>Brug ikke understreget tekst, da det ligner links.</li>
            <li>Brug ikke kursiv tekst, da det nedsætter læsbarheden.</li>
          </ul>
      </section>
    </article>
  </div>
</div>