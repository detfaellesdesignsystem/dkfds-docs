---
title: Versionering
parent: Releases
order: 10
headingClass: h3
---

Designsystemets måde at versionere på er inspireret af <a href="https://semver.org/" class="icon-link">semantisk versionering<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>. Versionsnummeret indikerer, hvilken type rettelse, der er tale om.

Versionsnummeret skrives altid x.y.z (fx 2.1.3) og skal læses MAJOR (x), MINOR (y), PATCH (z)

- MAJOR: Ændringer i kode og/eller design, der ikke er bagud-kompatible - som fx erstatning eller sletning af komponenter eller ændringer i kode og/eller design, der medfører bagudrettede tilpasninger ved opdatering til den pågældende version.
- MINOR: Tilføjelser, ændringer og ny funktionalitet, der er bagud-kompatible.
- PATCH: bagud-kompatible fejlrettelser (bug fixes).

<h3 class="h4">Release proces</h3>

Designsystemet er "levende" og skal holdes á jour, hvorfor langt de fleste bagud-kompatible ændringer og tilføjelser vil ske løbende. Fejlrettelser vil ske hurtigst muligt. Ikke bagud-kompatible ændringer vil samles op og blive releaset med lavere frekvens.
