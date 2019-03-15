---
permalink: /komponenter/form-controls/
redirect_from:
- /form-controls/
layout: styleguide
type: component
title: Formular-elementer
category: Komponenter_category
subcategory: Komponenter
lead: Du kan bruge formularelementerne til at opbygge blanketter til din selvbetjeningsløsning. 
subnav:
- text: Felter
  href: '#felter'
- text: Feltbredde
  href: '#feltbredde'
- text: Tekstområde
  href: '#textarea'
- text: Dropdown-menu
  href: '#dropdown-menu'
- text: Tjekboks
  href: '#tjekboks'
- text: Radioknap
  href: '#radioknap'
- text: Datovælger
  href: '#datovælger'
- text: Vedhæft fil
  href: '#vedhæft-fil'
---

<h2 class="h4">Generelt om tilgængelighed af formularelementer</h2>
<ul>
    <li>Formularelementer bliver automatisk fremhævet, når brugeren navigerer sig hen til dem ved hjælp af tabulator-tasten.</li>
    <li>Skærmlæsere følger rækkefølgen af formularelementerne, som de er angivet i koden.</li>
    <li>Overhold derfor sammenhængen mellem den viste rækkefølge af formularelementer på skærmen og deres rækkefølge i koden og brug ikke CSS til at ændre på rækkefølgen af formularelementerne.</li>
    <li>Sørg for at alle elementer står i register, dvs. at de står på linje og i et naturligt lodret læse-flow fra top til bund.</li>
    <li>Gruppér sammenhængende formularelementer vha. fieldset og brug et enkelt legend for hvert fieldset.</li>
    <li>Tilføj label til alle formularelementer udover fieldset.</li>
    <li>Sørg for at labels til formularelementer er meningsfulde og præcise.</li>
    <li>Undgå placeholder-tekst. Browserne kan ikke garantere tilstrækkeligt kontrastniveau og teksten kan desuden forvirre brugerne. Placeholder-tekst forsvinder, når brugeren klikker i feltet, og dermed forsvinder information, som kunne gavne brugeren.</li>
    <li>Tillad copy/paste i formularelementer, hvor brugeren selv skal indtaste oplysninger.</li>
</ul>

{% include child-sections.html parent='Form controls' %}
