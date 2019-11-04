---
type: component
title: Links
parent: typography
order: 600
---

<p class="font-lead">Links anvendes til at linke rundt i løsningen og til at linke ud af løsningen til eksterne sites.</p>
<p>Vær dog opmærksom på, at det kan virke forstyrrende for flowet og få brugeren ud af kontekst, hvis du linker for meget ud til eksterne websites.</p>
<p>Se også vores <a href="/komponenter/funktionslink/">funktionslink</a> og <a href="/komponenter/tilbage-link/">tilbage-link</a>.</p>

{% include code/preview.html component="links" %}
{% include code/accordion.html component="links" %}
<div class="accordion accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="typolinks-docs">
    Retningslinjer
  </button>
  <div id="typolinks-docs" aria-hidden="false" class="accordion-content">
      <section>
        <h3 class="h4">Tilgængelighed</h3>
          <ul>
              <li>Linkteksten skal give mening for brugeren og angive, hvad linket fører hen til.</li>
              <li>Links skal enten være understreget eller markeret på anden vis. Et link må ikke kun være angivet med en farve.</li>
              <li>Brugerne skal kunne tabulere imellem links og aktivere dem via enter-knappen på keyboardet.</li>
              <li>Links skal have en defineret <code>href</code> attribut i koden.</li>
              <li>Har linket en “hover” skal denne kunne aktiveres både med keyboard og mus.</li>
          </ul>
      </section>
      <section>
        <h3 class="h4">Anvendes til</h3>
        <ul>
            <li>Brug links til at lade brugeren navigere til andre sider i din løsning.</li>
            <li>Brug links til at linke til sider uden for din løsning. Husk at markere dette med et ikon som beskrevet under implementeringsafsnittet under <a href="#eksternt-link">eksternt link</a>.</li>
        </ul>
        <h3 class="h4">Brugervenlighed</h3>
        <p>Hvis et link fører væk fra den aktuelle side og brugeren kan miste data eller risikere at skulle udfylde samme del igen ved at følge linket, så advisér brugeren om dette i et modalvindue. Bed også brugeren om at be- eller afkræfte ønsket om at forlade siden.</p>
        <p>Brug links med omtanke i en selvbetjeningsløsning. Linker du for meget ud til eksterne websites, kan det virke forstyrrende for flowet og få brugeren ud af kontekst. Omvendt kan det give stor værdi for brugeren, hvis du linker ud til relevante informationer. Fx informationer, som understøtter brugerens vej gennem selvbetjeningsløsningen og/eller giver væsentlige input til, hvad brugeren skal indtaste i løsningen.</p>
        <p>Gør gerne brugeren opmærksom på, hvor det eksterne link fører hen, fx i en parentes som en del af linket, hvis det ikke fremgår af linkteksten.</p>
      </section>
  </div>
</div>
