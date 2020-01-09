---
title: Display
parent: Hjælpefunktioner
order: 04
---

Der er opsat en hjælpefunktion som automatisk genererer klasser til display-egenskaben baseret på de definerede breakpoints i `$grid-breakpoints`. Disse hjælpeklasser er inspireret af <a href="https://getbootstrap.com/docs/4.1/utilities/display/" class="icon-link">Bootstraps Display Utility<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>.</p>

Format: `d-{display}` og `d-{breakpoint}-{display}`

<h3 class="h5 mb-0">Display</h3>

- `none`
- `inline-block`
- `block`
- `flex`
- `inline-flex`

<h3 class="h5 mb-0">Print display</h3>

- `print-none`
- `print-inline`
- `print-inline-block`
- `print-block`
- `print-table`
- `print-table-row`
- `print-table-cell`
- `print-flex`
- `print-inline-flex`

<h3 class="h5 mb-0">Eksempel med grid breakpoints</h3>

<table class="table">
  <thead>
    <tr>
      <th class="w-percent-50">Browserstørrelse</th>
      <th>Klasse</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Skjul på alle</td>
      <td>`d-none`</td>
    </tr>
    <tr>
      <td>Skjul kun på xs</td>
      <td>`d-none d-sm-block`</td>
    </tr>
    <tr>
      <td>Skjul kun på sm</td>
      <td>`d-sm-none d-md-block`</td>
    </tr>
    <tr>
      <td>Skjul kun på md</td>
      <td>`d-md-none d-lg-block`</td>
    </tr>
    <tr>
      <td>Skjul kun på lg</td>
      <td>`d-lg-none d-xl-block`</td>
    </tr>
    <tr>
      <td>Skjul kun på xl</td>
      <td>`d-xl-none`</td>
    </tr>
    <tr>
      <td>Synlig på alle</td>
      <td>`d-block`</td>
    </tr>
    <tr>
      <td>Synlig kun på xs</td>
      <td>`d-block d-sm-none`</td>
    </tr>
    <tr>
      <td>Synlig kun på sm</td>
      <td>`d-none d-sm-block d-md-none`</td>
    </tr>
    <tr>
      <td>Synlig kun på md</td>
      <td>`d-none d-md-block d-lg-none`</td>
    </tr>
    <tr>
      <td>Synlig kun på lg</td>
      <td>`d-none d-lg-block d-xl-none`</td>
    </tr>
    <tr>
      <td>Synlig kun på xl</td>
      <td>`d-none d-xl-block`</td>
    </tr>
  </tbody>
</table>

<h3 class="h5 mb-0">Eksempel på klasser med print</h3>

<table class="table">
  <thead>
    <tr>
      <th class="w-percent-50">Beskrivelse</th>
      <th>Klasse</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Skjul ved print</td>
      <td>`d-print-none`</td>
    </tr>
    <tr>
      <td>Vis element med inline display ved print</td>
      <td>`d-print-inline`</td>
    </tr>
    <tr>
      <td>Vis element med inline-block display ved print</td>
      <td>`d-print-inline-block`</td>
    </tr>
    <tr>
      <td>Vis element med block display ved print</td>
      <td>`d-print-block`</td>
    </tr>
    <tr>
      <td>Vis element som tabel display ved print</td>
      <td>`d-print-table`</td>
    </tr>
    <tr>
      <td>Vis element som en tabel række display ved print</td>
      <td>`d-print-table-row`</td>
    </tr>
    <tr>
      <td>Vis element med tabel celle display ved print</td>
      <td>`d-print-table-cell`</td>
    </tr>
    <tr>
      <td>Vis element med flex display ved print</td>
      <td>`d-print-flex`</td>
    </tr>
    <tr>
      <td>Vis element med inline-flex display ved print</td>
      <td>`d-print-inline-flex`</td>
    </tr>
  </tbody>
</table>
