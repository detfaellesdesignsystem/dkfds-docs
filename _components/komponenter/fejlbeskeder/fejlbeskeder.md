---
permalink: "/komponenter/fejlbeskeder/"
layout: styleguide
type: component
title: Fejlbeskeder
category: Komponenter_category
subcategory: Komponenter
description:
tags: 
lead:
anchor: true
subnav:
- text: Tjekboks
  href: "#tjekboks"
- text: Radioknap
  href: "#radioknap"
- text: Datoangivelse
  href: "#datoangivelse"
---

{% include code/preview-box.html component="error-message" title="Eksempel på fejlbesked" link="true" code="/kode/komponenter/fejlbeskeder/" %}

{:.h3 #retningslinjer}
## Anvendes til

Vis en fejlbesked ved feltet der er fejl i samt i <a href="/komponenter/fejlopsummering/">fejlopsummeringen</a>, når der valideringsfejl.

{:.h3}
## Anvendes ikke til

Brug ikke fejlbeskeder til at fortælle brugerne, at de ikke er berettigede eller ikke har tilladelse til at gøre noget. I stedet for vis dem en side, der fortæller dem, at de ikke er berettigede, og giver dem nyttige oplysninger om, hvad de skal gøre som det næste.

{:.h3}
## Vejledning

- Vis fejlbeskeden i rød efter spørgsmålet og hjælpeteksten.
- Vis en rød streg i venstre side af området til felt der er fejl i - dette er for at vise der er sammenhæng.
- Vis en rød streg om de felter der er fejl i.
- For at hjælpe skærmlæsere tilføjes en skjult tekst "Fejl:" foran fejlbeskeden. Brugere af skærmlæser vil da høre "Fejl: Datoen for udløb af dit pas bør være i fortiden."

{:.h4}
### Vær konsekvent
Brug den samme fejlbesked ved feltet og i fejlopsummeringen så de:
- ser ud, lyder og betyder det samme
- giver meningen ud af kontekst
- reducer den kognitive indsats, der er nødvendig for at forstå, hvad der er sket
Brug spørgsmålet til feltet til at give kontekst. For eksempel, hvis man har et felt med label 'Hvor mange timer arbejder du en uge?', så kan fejlbeskeden fx være "Indtast hvor mange timer du arbejder en uge".

{:.h4}
### Vær præcis
Generelle fejl er ikke hjælpsomme. De giver ikke mening ud af kontekst, så ungå fejl som:

- "En fejl opstod"
- "Svar på spørgsmålet"
- "Vælg et et svar fra listen"
- "Udfyld feltet"
- "Dette felt er påkrævet"

Forskellige fejl har brug for forskellige fejlbeskeder. Fx kan tekstfelter have fejl som:

- Tomt felt
- For langt
- For kort
- Ugyldige tegn
- Forkert format

En fejl, der forklarer den specifikke situation er mere hjælpsom. Det vil fortælle brugeren, hvad der er sket og hvordan de løser det.

{:.h4}
### Brug instruktioner og beskrivelser
Visse fejlbeskeder fungerer bedre end andre som instruktioner og andre som beskrivelser. Fx:

- "Indtast dit fornavn" er tydeligere og mere direkte end "Fornavn bør være udfyldt"
- "Indtast et fornavn der er 35 karakterer eller færre" er mere komplekst og mindre direkte end "Fornavn være være 35 karakterer eller færre".

Brug både instruktioner og beskrivelser, men brug dem konsekvent. Fx brug en instruktion til tomme felter som "Indtast dit navn" men brug en beskrivelse som "Navnet bør være 35 karaktere eller færre" til felter som er for lange.

{% include child-components.html parent='Fejlbeskeder' %}
