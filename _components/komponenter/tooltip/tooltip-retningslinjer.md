---
title: Retningslinjer
parent: Tooltip
order: 3
headingClass: h3
---

<h3 class="h4">Tilgængelighed</h3>

- Tooltip og popovers skal kunne lukkes med escape tasten på tastaturet.
- Fokus skal blive på det element, der aktiverede tooltip eller popover.
- Brug aria-describedby på elementet der udløser tooltip eller popover.
- Tooltips skal både vises, ved markering med mus og keyboard.

<h3 class="h4">Brugervenlighed</h3>
<h4 class="h5">Anvendes til</h4>

- Brug tooltip til præcisering af specifikke elementer i brugergrænsefladen.
- Brug popover til at knytte relaterede informationer, der uddyber/forklarer et element eller en funktion i brugergrænsefladen.

<h4 class="h5">Anvendes ikke til</h4>

- Informationer der er essentielle for at brugeren kan gennemføre løsningen, hvis indholdet er vigtigt for brugerens succes, så placer indholdet på siden som brød- eller hjælpetekst.

<h4 class="h5">Vejledning</h4>

- Gør indholdet i tooltips og popovers så kort og koncist som muligt.
- Vær konsistent i brugen af tooltips og popovers, så brugeren ikke skal gætte sig til om der er tooltips/popovers eller ej.
- Gør det let at se, hvilket element tooltip/popover hører til.
- Brug altid tooltips til funktionsikoner (klikbare ikoner) uden label.
- Sørg for at tooltips og popovers er tydelige at se og læse.
- Placer tooltips og popovers så de ikke skygger for det indhold på siden som de relaterer til. Placeres de forkert kan brugeren blive nødt til at lukke og åbne tooltip/popover igen for at forstå sammenhængen.
- Sættes der tooltip/popover på et ord i en tekst, markeres ordet med en stiplet linje under. Brug det i begrænset omfang, da det let virker forstyrrende.

<h3 class="h5">Links</h3>
<ul class="nobullet-list">
    <li><a href="https://w3c.github.io/aria-practices/#tooltip" class="icon-link">Tilgængelige tooltips<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a></li>
    <li><a href="https://www.nngroup.com/articles/tooltip-guidelines/" class="icon-link">Tooltip guidelines<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a></li>
</ul>
