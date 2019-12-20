---
title: Retningslinjer
parent: Tringuide
order: 10
headingClass: h3
---

- For en klikbar trinindikator bruges `.sidenav-list` klassen på ul elementet.
- For en tvunget trinindikator bruges `.sidenav-list-locked` klassen på ul elementet.

<h2 class="h5">Aktivt og overstået trin i trinindikator</h2>

- Teksten i det aktive menupunkt bliver styret af primærfarven, som sættes med variablen `$color-primary`
- Det aktive menupunkt skal have klassen `.active`.
- For at indikere et overstået trin, kan der indsættes et ikon med klassen `.sidenav-icon`. Dette ikon er sat til højre i trinet.

<h2 class="h5">Tilføj information i tringuide</h2>

- For at tilføje information til et trin bruges klassen `.sidenav-information`.

<h2 class="h5">Trinindikatoren kan indlejres i en dropdown. Der er her to valgmuligheder:</h2>

- På alle skærmstørrelser er trinindikatoren indlejret i <a href="/komponenter/overflowmenu/">overflow menuen</a>. Dette kræver blot at trinindikatoren er placeret inde i `.overflow-menu-inner` containeren. Dette er vist i eksemplet "Trinindikator i overflow-menu".
- Hvis man ønsker at få vist trinindikatoren på større skærme, men at den bliver vist i en dropdown på mindre skærme, skal `.overflow-menu ` have klassen `.overflow-menu--md-no-responsive`. Dette er vist i eksemplet "Trinindikator - responsivt i overflow-menu".
