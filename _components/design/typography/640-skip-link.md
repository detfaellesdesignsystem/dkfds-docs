---
type: component
title: Skip link
parent: typography
order: 640
lead: Skip links anvendes til at give brugere, der navigerer med tastatur en bedre oplevelse.
component: skiplink
componentTitle: "Eksempel på Skip link"
---

Et skip link er et skjult link, der kun vises, når en bruger anvender tastaturets tabulator-tast til at navigere ind på siden. Når brugeren trykker på linket (med tastatur eller mus) sættes fokus på første indholdselement på den aktuelle side. Det vil sige at brugere, der anvender tastaturet til at navigere siden med, kan undgå at få læst alle menupunkter op før de får adgang til selve indholdet. 

### Implementering

Skip link `a` elementet indsættes umiddelbart lige efter `<body>`. Elementet skal være det første element, der kommer i fokus på siden ved brug af tabulator.

Skip link gør brug af anchor link `#main-content`, man skal derfor huske at sætte `id="main-content"` på det element, der omkranser indholdet på siden.
