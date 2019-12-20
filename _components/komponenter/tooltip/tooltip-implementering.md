---
title: Implementering
parent: Tooltip
order: 5
headingClass: h3
---

Du bør opdatere følgende attributter til din løsning ved almindeligt tooltip:

- `data-tooltip`: Din tooltip-tekst

Yderligere indstillinger:
- `data-tooltip-position`: Du kan enten vælge top (`top`) eller bund (`bottom`).

Ved brug at popover skal du yderligere tilføje følgende:

- `data-tooltip-trigger`: Hvis dit tooltip skal reagere kun ved klik, så skal denne sættes til `click`
- `aria-label`: For at forklare, at brugeren skal aktivere knappen, for at få teksten
