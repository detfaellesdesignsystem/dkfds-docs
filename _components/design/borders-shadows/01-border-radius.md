---
type: component
title: Hjørner
parent: borders-shadows
order: 01
component: border-radius
componentHideCode: true
---

### Implementering

#### Statiske hjørner

- Statiske hjørner er lige og har en `border-radius: 0px;`
- For at få lige hjørner skal du bruge variablen `$static-border-radius`

##### Eksempel:

```
border-radius: $static-border-radius;
```
#### Interaktive hjørner

- Interaktive hjørner er runde og har en `border-radius: 4px;`
- For at få runde hjørner skal du bruge variablen `$interactive-border-radius`
- Interaktive hjørner bør kun bruges til håndtering af interaktive elementer, da det er meningen at differentiere indhold fra aktion.

##### Eksempel:

```
border-radius: $interactive-border-radius;
```
