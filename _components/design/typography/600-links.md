---
type: component
title: Links
parent: typography
order: 600
lead: Links anvendes til at linke rundt i løsningen og til at linke ud af løsningen til eksterne sites.
---

Vær dog opmærksom på, at det kan virke forstyrrende for flowet og få brugeren ud af kontekst, hvis du linker for meget ud til eksterne websites.

Se også vores <a href="/komponenter/funktionslink/">Funktionslink</a> og <a href="/komponenter/tilbage-link/">Tilbage link</a>.

{% include code/preview.html component="links" %}
{% include code/accordion.html component="links" %}

### Retningslinjer

#### Tilgængelighed

- Linkteksten skal give mening for brugeren og angive, hvad linket fører hen til.
- Links skal enten være understreget eller markeret på anden vis. Et link må ikke kun være angivet med en farve.
- Brugerne skal kunne tabulere mellem links og aktivere dem via enter på tastaturet.
- Links skal have en defineret `href` attribut i koden.
- Har linket en “hover” skal denne kunne aktiveres både med tastatur og mus.

#### Anvendes til

- Brug links til at lade brugeren navigere til andre sider i din løsning.
- Brug links til at linke til sider uden for din løsning. Husk at markere dette med et ikon som beskrevet under implementeringsafsnittet under <a href="#eksternt-link">eksternt link</a>.

#### Brugervenlighed

Hvis et link fører væk fra den aktuelle side og brugeren kan miste data eller risikere at skulle udfylde samme del igen ved at følge linket, så advisér brugeren om dette i et modalvindue. Bed også brugeren om at be- eller afkræfte ønsket om at forlade siden.

Brug links med omtanke i en selvbetjeningsløsning. Linker du for meget ud til eksterne websites, kan det virke forstyrrende for flowet og få brugeren ud af kontekst. Omvendt kan det give stor værdi for brugeren, hvis du linker ud til relevante informationer. Fx informationer, som understøtter brugerens vej gennem selvbetjeningsløsningen og/eller giver væsentlige input til, hvad brugeren skal indtaste i løsningen.

Gør gerne brugeren opmærksom på, hvor det eksterne link fører hen, fx i en parentes som en del af linket, hvis det ikke fremgår af linkteksten.
