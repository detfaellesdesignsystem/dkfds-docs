---
permalink: "/komponenter/funktionslink/"
layout: styleguide
type: component
title: Funktionslink
category: Komponenter_category
subcategory: Komponenter
description: Et link, der udfører en handling på siden - så som print. Der er gerne
  tilføjet et ikon, som underbygger handlingen.
component: function-link-print
componentTitle: Eksempel på funktions link
componentCode: "/kode/komponenter/funktionslink/"

---
{:.h3 #retningslinjer}
## Anvendes til

Brug funktionsikoner til at tilbyde brugeren systemfunktionalitet, som fx: print, pdf, indstillinger, etc. Funktionalitet, der ikke er essentiel for brugerens umiddelbare gennemførsel af løsningen.

{:.h3}
## Anvendes ikke til

Brug ikke funktionsikoner til generel navigation mellem sider eller til næste trin. Brug da standard links og primærknap i stedet. Anvend ikke funktionslinks til navigation til forrige side, anvend da tilbage-linket.

Brug sprogvælgeren til valg af sprog.

{:.h3}
## Vejledning

Systemfunktionalitet er fx:

- at aktivere browserens printfunktionalitet
- at vælge en dato i en popover kalender
- at generere en pdf
- at ændre indstillinger i løsningen
- at åbne operativsystemets mailklient
- at gemme en kladde i løsningen
- m.fl...

Funktionsikoner bør akkompagneres af et ord, der beskriver funktionaliteten. For næsten alle ikoner gælder det, at betydningen af disse ikke er entydigt givet og skal du vælge imellem kun et ikon eller kun et ord, vil ordet altid være det bedste og sikreste valg.

Enkelte ikoner kan stå alene, hvis der fx skal spares på pladsen i en tabel. Det drejer sig fx om: slet, rediger, print, pdf og gem, der er relativt konventionelle ikoner.

Har man brug for at fremhæve en funktionalitet, fordi brugeren ikke bør gennemføre løsningen uden brug af funktionaliteten, bør man vælge at lave en tertiærknap med et ikon i, i stedet for et funktionslink.

{% include dos-donts-box.html component="function-link-dos-donts" title="Funktionslink do's and don'ts" %}

{:.h4}
### Referencer

{:.nobullet-list}
- <a href="https://slate.com/technology/2013/06/how-people-read-online-why-you-wont-finish-this-article.html" class="icon-link">Farhad Manjoo: You Won’t Finish This Article (2013)<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>
- <a href="https://www.nngroup.com/articles/utility-navigation/" class="icon-link">Susan Farrell: Utility Navigation: What It Is and How to Design It (2015)<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>

{:.h3 #eksempelloesninger}
## Se komponenten i eksempelløsninger

{:.nobullet-list}
- <a href="/pages/eksempler/trinformular-til-registrering/registrering-1/?r={{page.permalink}}%23eksempelloesninger" title="Vis eksempel 'Trinformular til registrering'">Trinformular til registrering</a>

{% include child-components.html parent='Funktionslink' %}
