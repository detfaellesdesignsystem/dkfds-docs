---
title: Generelt om tilgængelighed af formularelementer
parent: formular
order: 10
headingClass: h4
---

<ul>
    <li>Formularelementer bliver automatisk fremhævet, når brugeren navigerer sig hen til dem ved hjælp af tabulator-tasten.</li>
    <li>Skærmlæsere følger rækkefølgen af formularelementerne, som de er angivet i koden.</li>
    <li>Overhold derfor sammenhængen mellem den viste rækkefølge af formularelementer på skærmen og deres rækkefølge i koden og brug ikke CSS til at ændre på rækkefølgen af formularelementerne.</li>
    <li>Sørg for at alle elementer står i register, dvs. at de står på linje og i et naturligt lodret læse-flow fra top til bund.</li>
    <li>Gruppér sammenhængende formularelementer ved hjælp af fieldset og brug et enkelt legend for hvert fieldset.</li>
    <li>Tilføj label til alle formularelementer udover fieldset.</li>
    <li>Sørg for at labels til formularelementer er meningsfulde og præcise.</li>
    <li>Undgå placeholder-tekst. Browserne kan ikke garantere tilstrækkeligt kontrastniveau og teksten kan desuden forvirre brugerne. Placeholder-tekst forsvinder, når brugeren klikker i feltet, og dermed forsvinder information, som kunne gavne brugeren.</li>
    <li>Tillad copy/paste i formularelementer, hvor brugeren selv skal indtaste oplysninger.</li>
</ul>


<h3 class="h4">Tilgængelighed</h3>

`fieldset` er vigtig for tilgængeligheden i en formular. Den hjælper skærmlæsere med at forstå sammenhængen og logikken i en formular.
