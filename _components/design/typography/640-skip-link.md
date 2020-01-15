---
type: component
title: Skip link
parent: typography
order: 640
lead: Et "skip link" er et skjult link, lavet til brugere, der anvender keyboard til at navigere med. Skip linket gør det muligt, at springe menuer over og hoppe direkte til indholdet på siden.
component: skiplink
componentTitle: "Eksempel på Skip link"
---

### Implementering

Skip link `a` elementet indsættes umiddelbart lige efter `<body>`. Elementet skal være det første element, der kommer i fokus på siden ved brug af tabulator.

Skip link gør brug af anchor link `#main-content`, man skal derfor huske at sætte `id="main-content"` på det element, der omkranser indholdet på siden.
