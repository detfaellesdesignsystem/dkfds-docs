---
permalink: "/styleguide/typografi/fonte/"
parentlink: "/styleguide/typografi/"
redirect_from:
- "/kode/typografi/"
- "/design/typografi/fonte/"
layout: styleguide
category: Styleguide_category
subcategory: Styleguide
title: Fonte
description:
tags:
- IBM Plex Sans
- IBM
- plex
- sans
- font
- skrifttype
- system
- typography
- font
- fonte
tabs: "Retningslinjer, kode"
---

{% include tabs.html guidelines=true code=true %}

<!--split-->

Hvis din selvbetjeningsløsning skal integreres på borger.dk og Virk, skal du benytte fonten “IBM Plex Sans”. Fonten er valgt, fordi alle browsere præsenterer den flot og den er nem at arbejde med. Samtidig bygger den visuelt bro mellem de fonte, der for tiden bliver anvendt på borger.dk og Virk.

## IBM Plex Sans {#{% include create-id.html heading="IBM Plex Sans" %}}

Det Fælles Designsystem benytter fonten "IBM Plex Sans" til al tekst. Fonten er “open source” og kan derfor frit benyttes af alle løsninger under {% include links/external-link.html linktext='"Open Font License" betingelser' %}.

IBM Plex Sans er valgt som font, da det er en æstetisk og læsbar open source font, der kan anvendes gratis under SIL Open Font License. Det er en alsidig sans serif font, der egner sig godt til brugergrænseflader. Fonten har de karakteristika, som designsystemet promoverer. Den er simpel og neutral i sit udtryk og yderst skalerbar grundet de mange variationer (typer, vægte, sprog, m.m.), som fonten understøtter.

## Fallback font "system" {#{% include create-id.html heading="Fallback font system" %}}

En fallback font, er den font som vises, når browseren ikke kan indlæse den angivne font.

Det Fælles Designsystem gør brug af "system", hvilket vil sige at fallback fonten er op til styresystemet på den enhed der benyttes. Dette gør ydeevnen (performance) bedre, da browseren ikke skal hente andre fonte, men i stedet bruger en den har i forvejen.

<!--split-->

Som beskrevet under {% include links/internal-link.html linktext="retningslinjer for fonte" %} gør vi brug af fonten IBM Plex Sans i Det Fælles Designsystem. Da det er en ekstern font, skal den loades i hver løsning. Fonten leveres samlet med DKFDS pakken.

## Preload {#{% include create-id.html heading="Preload" append="-kode" %}}

Man kan vælge at gøre brug af preload, således at fonten loades tidligere og giver derfor en bedre oplevelse af løsningen.

Nedenstående kode opdateres, så stien matcher løsningen, og koden indsættes i `<head>`-sektionen.

{% include code/syntax.html component="font-preload" copybutton=true %}
