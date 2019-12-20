---
title: Trinindikator - responsivt i overflow-menu
parent: Tringuide
order: 40
component: tringuide-responsive-overflowmenu
componentTitle: "Eksempel på responsiv trinindikator"
lead: Denne komponent er responsiv, og vil derfor ændre udseende, når man ændrer skærmstørrelse.
---
<h3 class="h4">Implementering</h3>

Responsiv tringuide gør brug af `dkfds.js` til at håndtere ændring af `aria-hidden`, således at værdien ændrer sig alt efter om knappen er synlig eller ej.

Dette sikrer at `aria-hidden` har den rette værdi så skærmlæsere kan læse teksten baseret på om guiden er synlig eller ej.

Erstat `overflow-menu--md-no-responsive` med klassen `overflow-menu--lg-no-responsive` for at ændre, hvornår det responsive breakpoint skal være.
