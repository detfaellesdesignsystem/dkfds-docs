---
title: Margin og padding
parent: Hjælpefunktioner
order: 03
---

<p>Der er opsat hjælpefunktioner som genererer klasser til margin og padding. Disse hjælpefunktioner er inspireret af <a href="https://getbootstrap.com/docs/4.1/utilities/spacing/" class="icon-link">Bootstraps Spacing Utilities<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>.</p>
Format: <code>{css-egenskab}{retning}-{størrelse}</code> og <code>{css-egenskab}{retning}-{breakpoint}-{størrelse}</code>.

<h3 class="h5 mb-0">CSS egenskab:</h3>
<ul>
    <li><span class="bold">m</span> – for klasser som sætter <code>margin</code></li>
    <li><span class="bold">p</span> - for klasser som sætter <code>padding</code></li>
</ul>

<h3 class="h5 mb-0">Retning:</h3>
<ul>
    <li><span class="bold">t</span> – for klasser som sætter <code>margin-top</code> eller <code>padding-top</code></li>
    <li><span class="bold">b</span> – for klasser som sætter <code>margin-bottom</code> eller <code>padding-bottom</code></li>
    <li><span class="bold">l</span> – for klasser som sætter <code>margin-left</code> eller <code>padding-left</code></li>
    <li><span class="bold">r</span> – for klasser som sætter <code>margin-right</code> eller <code>padding-right</code></li>
    <li><span class="bold">x</span> – for klasser som sætter både<code>*-left</code> og <code>*-right</code></li>
    <li><span class="bold">y</span> – for klasser som sætter både<code>*-top</code> og <code>*-bottom</code></li>
    <li><i>blank</i> – for klasser som sætter margin eller padding på alle 4 sider af elementet.</li>
</ul>

<h3 class="h5 mb-0">Størrelse:</h3>
<ul>
    <li><span class="bold">0</span> – for klasser som fjerner alt <code>margin</code> eller <code>padding</code></li>
    <li><span class="bold">1</span> – for klasser som sætter <code>margin</code> eller <code>padding</code> til <code>$spacer * 0.25</code></li>
    <li><span class="bold">2</span> – for klasser som sætter <code>margin</code> eller <code>padding</code> til <code>$spacer * 0.5</code></li>
    <li><span class="bold">3</span> – for klasser som sætter <code>margin</code> eller <code>padding</code> til <code>$spacer</code></li>
    <li><span class="bold">305</span> – for klasser som sætter <code>margin</code> eller <code>padding</code> til <code>$spacer * 1.5</code></li>
    <li><span class="bold">4</span> – for klasser som sætter <code>margin</code> eller <code>padding</code> til <code>$spacer * 2</code></li>
    <li><span class="bold">405</span> – for klasser som sætter <code>margin</code> eller <code>padding</code> til <code>$spacer * 2.5</code></li>
    <li><span class="bold">5</span> – for klasser som sætter <code>margin</code> eller <code>padding</code> til <code>$spacer * 3</code></li>
    <li><span class="bold">505</span> – for klasser som sætter <code>margin</code> eller <code>padding</code> til <code>$spacer * 3.5</code></li>
    <li><span class="bold">6</span> – for klasser som sætter <code>margin</code> eller <code>padding</code> til <code>$spacer * 4</code></li>
    <li><span class="bold">605</span> – for klasser som sætter <code>margin</code> eller <code>padding</code> til <code>$spacer * 4.5</code></li>
    <li><span class="bold">7</span> – for klasser som sætter <code>margin</code> eller <code>padding</code> til <code>$spacer * 5</code></li>
    <li><span class="bold">705</span> – for klasser som sætter <code>margin</code> eller <code>padding</code> til <code>$spacer * 5.5</code></li>
    <li><span class="bold">8</span> – for klasser som sætter <code>margin</code> eller <code>padding</code> til <code>$spacer * 6</code></li>
    <li><span class="bold">805</span> – for klasser som sætter <code>margin</code> eller <code>padding</code> til <code>$spacer * 6.5</code></li>
    <li><span class="bold">9</span> – for klasser som sætter <code>margin</code> eller <code>padding</code> til <code>$spacer * 7</code></li>
    <li><span class="bold">905</span> – for klasser som sætter <code>margin</code> eller <code>padding</code> til <code>$spacer * 7.5</code></li>
</ul>
<code>$spacer</code> er sat til <code>8px.</code><br>
Du kan selv tilføje flere muligheder ved at tilføje dem til <code>$spacers</code> variablen.

<h3 class="h5 mb-0">Breakpoint:</h3>
<ul>
    <li><i>blank</i> - for klasser som sætter <code>margin</code> eller <code>padding</code> for alle browserstørrelser.</li>
    <li><span class="bold">sm</span> - for klasser som sætter <code>margin</code> eller <code>padding</code> for browserstørrelser over 576px;</li>
    <li><span class="bold">md</span> - for klasser som sætter <code>margin</code> eller <code>padding</code> for browserstørrelser over 768px;</li>
    <li><span class="bold">lg</span> - for klasser som sætter <code>margin</code> eller <code>padding</code> for browserstørrelser over 992px;</li>
    <li><span class="bold">xl</span> - for klasser som sætter <code>margin</code> eller <code>padding</code> for browserstørrelser over 1200px;</li>
</ul>
