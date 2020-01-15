---
type: component
title: Felt- og tabeloverskrifter (label og th)
parent: typography
order: 300
lead: I eksemplet nedenfor viser vi, hvordan overskrifter til felter og overskrifter i tabeller ser ud. Overskrifter til felter og tabeller er ens, men der er forskel i koden.
---

{% include code/preview.html component="labels" %}
{% include code/accordion.html component="labels" %}

### Implementering

Du kan indsættes feltoverskrifter med et label-tag `<label></label>` og med label klassen `.form-label`.

Du kan bruge kolonneoverskrifter i tabeller ved at indsætte dem som `<th></th>` i en thead. Kolonneoverskrifter skal hverken have label-tag eller label-klasse.

### Retningslinjer

#### Feltoverskrift (label)

Du kan betragte formularer som en dialog med brugerne, hvor feltoverskriften er dit spørgsmål til brugeren og feltet, som brugerne kan skrive i, er svaret de giver dig.              

- Feltoverskrifter er dine spørgsmål til brugeren.  
- Sørg for at brugeren kan forstå, hvad du beder om svar på.
- Undgå lange og komplekse feltoverskrifter.
- Stil kun ét spørgsmål i en feltoverskrift.
- Feltoverskrifter placeres altid over feltet, som anvist under formularelementer.
- Alle felter eller sammenhængende gruppe af felter (fx datovalg) skal have en feltoverskrift.

#### Tabeloverskrift (th)

Tabeloverskrifter er visuelt ens med feltoverskrifter. Du kan bruge dem til at skabe overblik over rækker eller kolonner af data i tabeller og lister.

Tabeloverskrifter beskriver, hvad indholdet i en række eller kolonne angiver.
