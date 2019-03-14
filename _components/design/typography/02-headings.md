---
type: component
title: Overskrifter
parent: typography
order: 02
---

<p class="font-lead">Overskrifter strukturerer siden, giver overblik og hjælper brugeren og skærmlæseren til at kunne overskue sidens logik og opbygning.</p>
<p>Overskriftstyperne h1-h6 har to formål:</p>
<ul>
  <li>De er sidens indholdsfortegnelse for skærmlæsere.</li>
  <li>De skaber et visuelt hierarki og gør siden overskuelig ved at inddele den i afsnit og underafsnit.</li>
</ul>
<h3>Brug den overskrift som ser bedst ud uden at ødelægge oplevelsen for brugere, der anvender skærmlæsere</h3>
<p>Alle HTML-overskrifter h1 til h6 er stylet; dvs. de er tildelt en størrelse, farve og vægt. Du kan overskrive stylingen, så den bliver visuelt ændret, og samtidig holde en semantisk korrekt opbygning til skærmlæseren. Det kan fx være relevant, hvis det ser bedre ud, at en overskrift h3 ligner en overskrift h5. Du kan ændre styling på en heading ved at bruge denne struktur: <code>&lt;h3 class="h5"&gt;</code>. Det vil fortsat være brugervenligt for brugere, der anvender skærmlæsere.</p>

{% include code/preview.html component="headings" %}
{% include code/accordion.html component="headings" %}

<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="false" aria-controls="headings-docs-tech">
    Implementering
  </button>
  <div id="headings-docs-tech" aria-hidden="true" class="accordion-content">
    <p>Alle headings (h1-h6) er stylet med mixins, som styrer hver enkel headings <code>font-family</code>, <code>font-size</code>, <code>line-height</code>, <code>font-weight</code> og <code>color</code>.</p>
      <div class="code-highlight">
        <code>
          @mixin h1{ <br>
          &nbsp;&nbsp;&nbsp;font-family: $font-name; <br>
          &nbsp;&nbsp;&nbsp;font-size: $h1-font-size; <br>
          &nbsp;&nbsp;&nbsp;line-height: $h1-line-height; <br>
          &nbsp;&nbsp;&nbsp;font-weight: $font-weight-bold; <br>
          &nbsp;&nbsp;&nbsp;color: $color-black;<br>
        }
        </code>
      </div>
      <div class="code-highlight">
        <code>
          h1, .h1 {<br>
          &nbsp;&nbsp;&nbsp;@include h1;<br>
          }
        </code>
      </div>
      <p>Hver heading har sin klasse, som arver styling fra heading mixins. Ønsker du en <code>h1</code> med styling fra <code>h2</code>, skal du blot indsætte klassen <code>h2</code> på <code>&lt;h1 class="h2"&gt;</code>.</p>
  </div>
</div>


<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="typoheadings-docs">
    Retningslinjer
  </button>
  <div id="typoheadings-docs" aria-hidden="false" class="accordion-content">
    <article>
      <p>Overskrifter er både et visuelt virkemiddel og en struktur i koden, som har betydning for brugere, der anvender skærmlæser. Det er muligt at følge en stringent struktur i overskrifter for skærmlæsere og samtidig tilpasse overskrifternes visuelle udtryk til brugere, der orienterer sig visuelt.</p>
      <section>
          <h4>Tilgængelighed</h4>
          <p>Du kan bruge H-tagget i koden til at strukturere sidens logik for skærmlæsere: H-tags tegner indholdsfortegnelsen op som vist nedenfor.</p>
<pre>
  Sidetitel (h1)                1
    Afsnit (h2)                 1.1
      Underafsnit (h3)          1.1.1
    Afsnit (h2)                 1.2
      Underafsnit (h3)          1.2.1
    Afsnit (h2)                 1.3
      Underafsnit (h3)          1.3.1
        Under-underafsnit (h4)  1.3.1.1
        Under-underafsnit (h4)  1.3.1.2
    Afsnit (h2)                 1.4
    Afsnit (h2)                 1.5
</pre>
          <p>Skærmlæseren læser dette op for brugere, der orienterer sig via skærmlæser. Det er derfor vigtigt, at du anvender strukturen, så brugere med skærmlæsere nemt kan hoppe imellem afsnit og underafsnit. </p>
          <p>Det er muligt at følge en stringent struktur i overskrifter for skærmlæsere og samtidig ændre på overskrifternes visuelle udtryk til brugere, der orienterer sig visuelt.</p>
          <h5>Hvornår skal du bruge overskrifter?</h5>
          <ul>
            <li>Du skal bruge overskrifter til at skabe struktur på din side og gruppere dit indhold i logiske og overskuelige bidder, både for skærmlæsere og visuelt orienterede brugere.</li>
          </ul>
          <h5>Hvornår skal du overveje anden formatering end overskrifter?</h5>
          <ul>
            <li>Du skal bruge anden formatering end overskrifter, hvis du vil fremhæve eller ændre styling af tekst, som ikke har betydning for strukturen på siden. Brug fx beskedboksen til information, fremhæv særlige punkter med punktopstilling eller anvend stor tekst (display) til at markere udvalgte dele af teksten.</li>
          </ul>
          <h5>Vejledning</h5>                
          <ul>
              <li>Hold en stram overskriftsstruktur i koden. En h3 altid er under en h2, en h4 under en h3 osv. h1 er altid øverst i hierarkiet.</li>  
              <li>Du bør ikke springe overskriftsled over og fx gå direkte fra en h2 til en h4.</li>
              <li>Hvis du visuelt vil have et andet udtryk, så brug en <code>>class="hX"</code> til at style overskriften om. Dermed bryder du ikke logikken for skærmlæsere, men får et andet visuelt udtryk på dine overskrifter.</li>
          </ul>
          <h5>Hvis du vil vide mere</h5>
          <ul>
            <li><a href="https://www.w3.org/TR/WCAG20-TECHS/H42.html" class="icon-link">H42: Using h1-h6 to identify headings<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
          </ul>
      </section>
    </article>
  </div>
</div>