---
type: component
title: Overskrifter
parent: typography
order: 200
lead: Overskrifter strukturerer siden, giver overblik og hjælper brugeren og skærmlæseren til at kunne overskue sidens logik og opbygning.
---

Overskriftstyperne h1-h6 har to formål:

- De er sidens indholdsfortegnelse for skærmlæsere.
- De skaber et visuelt hierarki og gør siden overskuelig ved at inddele den i afsnit og underafsnit.

<p class="bold">Brug den overskrift som ser bedst ud uden at ødelægge oplevelsen for brugere, der anvender skærmlæsere.</p>

Alle HTML-overskrifter h1 til h6 er stylet; dvs. de er tildelt en størrelse, farve og vægt. Du kan overskrive styles, så den bliver visuelt ændret, og samtidig holde en semantisk korrekt opbygning til skærmlæseren. Det kan fx være relevant, hvis det ser bedre ud, at en overskrift h3 ligner en overskrift h5. Du kan ændre styling på en heading ved at bruge denne struktur: `<h3 class="h5">`. Det vil fortsat være brugervenligt for brugere, der anvender skærmlæsere.

{% include code/preview-iframe.html component="headings" %}
{% include code/accordion.html component="headings" %}

### Implementering

Alle headings (h1-h6) er stylet med mixins, som styrer hver enkel headings `font-family`, `font-size`, `line-height`, `font-weight` og `color`.

{% highlight scss %}
@mixin h1{ 
    font-family: $font-name;
    font-size: $h1-font-size;
    line-height: $h1-line-height;
    font-weight: $font-weight-bold;
    color: $color-black;
}
{% endhighlight %}

{% highlight scss %}
  h1, .h1 
  @include h1;
  }
{% endhighlight %}

Hver heading har sin klasse, som arver styling fra heading mixins. Ønsker du en `h1` med styling fra `h2`, skal du blot indsætte klassen `h2` på `<h1 class="h2">`.

### Retningslinjer

Overskrifter er både et visuelt virkemiddel og en struktur i koden, som har betydning for brugere, der anvender skærmlæser. Det er muligt at følge en stringent struktur i overskrifter for skærmlæsere og samtidig tilpasse overskrifternes visuelle udtryk til brugere, der orienterer sig visuelt.

#### Tilgængelighed

Du kan bruge H-tagget i koden til at strukturere sidens logik for skærmlæsere: H-tags tegner indholdsfortegnelsen op som vist nedenfor.

```
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
```

Skærmlæseren læser dette op for brugere, der orienterer sig via skærmlæser. Det er derfor vigtigt, at du anvender strukturen, så brugere med skærmlæsere nemt kan hoppe mellem afsnit og underafsnit.

Det er muligt at følge en stringent struktur i overskrifter for skærmlæsere og samtidig ændre på overskrifternes visuelle udtryk til brugere, der orienterer sig visuelt.

##### Hvornår skal du bruge overskrifter?

Du skal bruge overskrifter til at skabe struktur på din side og gruppere dit indhold i logiske og overskuelige bidder, både for skærmlæsere og visuelt orienterede brugere.

##### Hvornår skal du overveje anden formatering end overskrifter?

Du skal bruge anden formatering end overskrifter, hvis du vil fremhæve eller ændre styling af tekst, som ikke har betydning for strukturen på siden. Brug fx beskedboksen til information, fremhæv særlige punkter med punktopstilling eller anvend stor tekst (display) til at markere udvalgte dele af teksten.

#### Vejledning                

- Hold en stram overskriftsstruktur i koden. En h3 altid er under en h2, en h4 under en h3 osv. h1 er altid øverst i hierarkiet.  
- Du bør ikke springe overskriftsled over og fx gå direkte fra en h2 til en h4.
- Hvis du visuelt vil have et andet udtryk, så brug en `class="hX"` til at style overskriften om. Dermed bryder du ikke logikken for skærmlæsere, men får et andet visuelt udtryk på dine overskrifter.

#### Hvis du vil vide mere

<ul class="nobullet-list">
    <li><a href="https://www.w3.org/TR/WCAG20-TECHS/H42.html" class="icon-link">H42: Using h1-h6 to identify headings<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a></li>
    <li><a href="https://www.w3.org/WAI/tutorials/page-structure/headings/" class="icon-link">Page-structure - headings<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a></li>
</ul>
