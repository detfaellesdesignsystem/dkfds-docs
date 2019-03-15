---
title: Tjekboks
parent: Form controls
order: 05
lead:
---


{% include code/preview.html component="checkbox" %}
{% include code/accordion.html component="checkbox" %}
<div class="accordion-bordered accordion-docs">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="checkbox-docs">
    Retningslinjer
  </button>
  <div id="checkbox-docs" aria-hidden="false" class="accordion-content">
    <article>
      <section>
          <h3 class="h4">Tilgængelighed</h3>
          <ul>
              <li>Indsæt altid to eller flere tjekbokse i et fieldset inklusive legend. En enkelt tjekboks skal ikke sidde i et fieldset.</li>
              <li>Tilknyt label til hver tjekboks. Erstat eventuelt label med title-attributten.</li>
              <li>Giv hver tjekboks sit eget id og angiv samme værdi til det tilhørende label.</li>
              <li>Tjekboksenes design er ændret ift. standardvisningen for at gøre dem tydeligere og øge deres visuelle respons til brugerens interaktion.</li>
              <li>Tjekboksene er gjort tilgængelige for skærmlæsere på trods af deres visuelle design, ved at selve tagget for tjekboksen er placeret uden for det synlige skærmområde.</li>
          </ul>
      </section>
      <section>
          <h3 class="h4">Brugervenlighed</h3>
          <h4 class="h5">Anvendes til</h4>
          <ul>
              <li>Tjekbokse giver brugeren mulighed for at vælge en eller flere værdier ud fra en synlig liste.</li>
              <li>Når brugeren skal have overblik over sine mulige valg.</li>
              <li>Når brugeren skal be- eller afkræfte et valg, fx ”Ja/Nej” (i det tilfælde en enkelt tjekboks), eller slå noget til eller fra (toggle).</li>
              <li>Når listen over mulige valg kan være på en mobilvisning.</li>
          </ul>
          <h4 class="h5">Anvendes ikke til</h4>
          <ul>
              <li>Når der er for mange valg til at give mening på en mobilvisning.</li>
              <li>Når brugeren kun kan vælge én værdi. Her skal du i stedet anvende radioknapper.</li>
          </ul>
          <h4 class="h5">Vejledning</h4>
          <ul>
              <li>Brugeren skal kunne tappe eller klikke på tjekboksen eller dens label for at vælge eller fravælge dens værdi.</li>
              <li>Du bør opstille lister med tjekbokse i lodret linje af hensyn til brugerens læseretning.</li>
              <li>Anvend et positivt sprog til værdierne. I stedet for fx ”Jeg vil ikke modtage bekræftelse på email” bør du skrive ”Jeg vil gerne modtage bekræftelse på email”.</li>
              <li>Sørg for at der er tilstrækkelig luft omkring den enkelte tjekboks, så den er brugbar på touchskærme.</li>
          </ul>
      </section>
    </article>
  </div>
</div>
