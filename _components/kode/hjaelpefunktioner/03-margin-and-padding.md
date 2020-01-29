---
title: Margin og padding
parent: Hjælpefunktioner
order: 03
---

Der er opsat hjælpefunktioner som genererer klasser til margin og padding. Disse hjælpefunktioner er inspireret af <a href="https://getbootstrap.com/docs/4.1/utilities/spacing/" class="icon-link">Bootstraps Spacing Utilities<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>.

Format: `{css-egenskab}{retning}-{størrelse}` og `{css-egenskab}{retning}-{breakpoint}-{størrelse}`.

<h3 class="h5 mb-0">CSS egenskab:</h3>

- <span class="bold">m</span> – for klasser som sætter `margin`
- <span class="bold">p</span> - for klasser som sætter `padding`

<h3 class="h5 mb-0">Retning:</h3>

- <span class="bold">t</span> – for klasser som sætter `margin-top` eller `padding-top`
- <span class="bold">b</span> – for klasser som sætter `margin-bottom` eller `padding-bottom`
- <span class="bold">l</span> – for klasser som sætter `margin-left` eller `padding-left`
- <span class="bold">r</span> – for klasser som sætter `margin-right` eller `padding-right`
- <span class="bold">x</span> – for klasser som sætter både`*-left` og `*-right`
- <span class="bold">y</span> – for klasser som sætter både`*-top` og `*-bottom`
- blank – for klasser som sætter margin eller padding på alle 4 sider af elementet.

<h3 class="h5 mb-0">Størrelse:</h3>

- <span class="bold">0</span> – for klasser som fjerner alt `margin` eller `padding`
- <span class="bold">1</span> – for klasser som sætter `margin` eller `padding` til `$spacer * 0.25`
- <span class="bold">2</span> – for klasser som sætter `margin` eller `padding` til `$spacer * 0.5`
- <span class="bold">3</span> – for klasser som sætter `margin` eller `padding` til `$spacer`
- <span class="bold">305</span> – for klasser som sætter `margin` eller `padding` til `$spacer * 1.5`
- <span class="bold">4</span> – for klasser som sætter `margin` eller `padding` til `$spacer * 2`
- <span class="bold">405</span> – for klasser som sætter `margin` eller `padding` til `$spacer * 2.5`
- <span class="bold">5</span> – for klasser som sætter `margin` eller `padding` til `$spacer * 3`
- <span class="bold">505</span> – for klasser som sætter `margin` eller `padding` til `$spacer * 3.5`
- <span class="bold">6</span> – for klasser som sætter `margin` eller `padding` til `$spacer * 4`
- <span class="bold">605</span> – for klasser som sætter `margin` eller `padding` til `$spacer * 4.5`
- <span class="bold">7</span> – for klasser som sætter `margin` eller `padding` til `$spacer * 5`
- <span class="bold">705</span> – for klasser som sætter `margin` eller `padding` til `$spacer * 5.5`
- <span class="bold">8</span> – for klasser som sætter `margin` eller `padding` til `$spacer * 6`
- <span class="bold">805</span> – for klasser som sætter `margin` eller `padding` til `$spacer * 6.5`
- <span class="bold">9</span> – for klasser som sætter `margin` eller `padding` til `$spacer * 7`
- <span class="bold">905</span> – for klasser som sætter `margin` eller `padding` til `$spacer * 7.5`

`$spacer` er sat til `8px.`

Du kan selv tilføje flere muligheder ved at tilføje dem til `$spacers` variablen.

<h3 class="h5 mb-0">Breakpoint:</h3>

- blank - for klasser som sætter `margin` eller `padding` for alle browserstørrelser.
- <span class="bold">sm</span> - for klasser som sætter `margin` eller `padding` for browserstørrelser over 576px;
- <span class="bold">md</span> - for klasser som sætter `margin` eller `padding` for browserstørrelser over 768px;
- <span class="bold">lg</span> - for klasser som sætter `margin` eller `padding` for browserstørrelser over 992px;
- <span class="bold">xl</span> - for klasser som sætter `margin` eller `padding` for browserstørrelser over 1200px;
