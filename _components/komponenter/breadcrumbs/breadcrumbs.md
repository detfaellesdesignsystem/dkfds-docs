---
permalink: /komponenter/broedkrumme/
layout: styleguide
type: element
title: Brødkrumme
category: Komponenter_category
description: ""
lead: "En brødkrumme bruges til at vise brugerne, hvor i løsningen de befinder sig, samtidig med at den gør det muligt for brugerne at navigere tilbage igennem løsningens niveauer."
subcategory: Komponenter
component: breadcrumbs
componentTitle: "Eksempel på brødkrumme"
componentCode: "/kode/komponenter/broedkrumme/"
---

{:.h3 #retningslinjer}
## Anvendes til

Brug en brødkrumme, når du har brug for at hjælpe brugerne med at forstå, hvor de er i en dybere hierarkisk struktur (IA) med flere sektioner og underafsnit (niveauer) og til at give brugeren mulighed for at navigere logisk tilbage igennem niveauerne.

{:.h3}
## Anvendes ikke til

Brug ikke brødkrummen til at vise trin i en selvbetjeningsløsning, brug da en trin-indikator (tringuide).

Brug ikke brødkrummen sammen med en <a href="/komponenter/trinindikatorer/">trinindikator</a>.

Brug ikke brødkrummen sammen med et <a href="/komponenter/tilbage-link/">tilbage-link</a>. Vælg tilbage-linket i trinbaserede løsninger og i løsninger med en flad struktur. 

{:.h3}
## Vejledning

Overvej nøje om du har brug for at anvende en brødkrumme, hvis du allerede bruger andre navigationskomponenter, der også indikerer, hvor i strukturen brugeren er, som fx sidenavigation (venstremenu).

Overvej nøje om du skal bruge brødkrummer, hvis der er færre end to niveauer.

Brødkrummer bør ikke erstatte top- eller sidenavigation.

Brødkrummer skal vise den aktuelle placering i stedets hierarkiske struktur, ikke brugerens (tilfældige) færden rundt på webstedet. Hvis der er flere veje igennem din løsning til samme side, skal brødkrummen kun vise en enkelt vej (sti).

Brødkrummen skal kun indeholde sider som brugeren kan navigere til, og ikke logiske kategorier i din hierarkiske struktur (IA).

Brødkrummestien bør som oftest starte med et link til forsiden. Alternativt (og mindre konventionelt) til den side i selvbetjeningsløsningen, hvorfra den dybere struktur starter. Dette kan fx være på en overbliksside, hvor man kan åbne nye sider med flere og flere detaljer.

Brødkrummestien skal omfatte brugerens aktuelle side, der skal være visuelt forskellig fra de andre links i brødkrummen.

På små skærme bør brødkrummen ikke ombrydes til flere linjer eller presses sammen og gøres mindre. Overvej i stedet kun at vise de sidste niveauer i brødkrummen.

{:.h3}
## Referencer 

{:.nobullet-list}
- <a href="https://design-system.service.gov.uk/components/breadcrumbs/" class="icon-link">GovUK Design System Breadcrumbs<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>
- <a href="https://www.nngroup.com/articles/breadcrumbs/" class="icon-link">Breadcrumbs: 11 Design Guidelines for Desktop and Mobile<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>
- <a href="https://www.smashingmagazine.com/2009/03/breadcrumbs-in-web-design-examples-and-best-practices/" class="icon-link">Breadcrumbs In Web Design: Examples And Best Practices<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>
- <a href="https://uxmovement.com/navigation/when-you-should-use-a-breadcrumb-navigation/" class="icon-link">When You Should Use a Breadcrumb Navigation<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>

{:.h3 #eksempelloesninger}
## Se komponenten i eksempelløsninger

{:.nobullet-list}
- <a href="/pages/eksempler/aes/sagsoverblik/?r={{page.permalink}}%23eksempelloesninger" title="Eksempelløsning Sager hos AES åbnes i nyt vindue">Sager hos AES</a>