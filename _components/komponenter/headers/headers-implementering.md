---
title: Implementering
parent: Headers
order: 20
headingClass: h3
---
De nedenstående eksempler viser tre forskellige versioner af headeren. Med lidt, mellem og meget indhold.

Alt indhold i `<nav>` tagget vil på små skærme bliver vist i en skjult menu, som vises ved tryk på menu-knappen. Som standard vises denne menu, når skærmen er mindre end 992px bred. Man kan indstille hvornår, der skal bruges denne menu via variablen `$nav-responsive-breakpoint`.

Hvis man laver en header med lidt indhold, er det anbefalet at man indstiller `$nav-responsive-breakpoint` til at have en lavere værdi, fx. 768px.

Bemærk, at `a` elementet i `solution-heading` kan erstattes med en `&lt;h1&gt;`.

Sørg for at advare brugeren om, når denne forsøger at forlade selvbetjeningsløsningen, at de kan risikere at miste det data de har indtastet og få brugeren til at bekræfte, at det er den handling, der ønskes.

Advarselsteksten bør så vidt muligt være beskrivende til den situation, som brugeren står i.
