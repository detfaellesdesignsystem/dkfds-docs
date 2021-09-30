---
permalink: /komponenter/headers/
layout: styleguide
title: Headers
category: Komponenter_category
subcategory: Komponenter
description: "Tydelige headers er med til at skabe en let navigation for brugeren og hjælper dermed brugeren med at finde vej."
tags: 
lead: Headeren identificerer portalen, den ansvarlig myndighed og brugeren, der er logget ind med NemLog-in. Den fungerer også til navigation og overordnet styring af selvbetjeningsløsningen.
anchor: true
subnav:
- text: Standard header
  href: '#standard-header'
- text: Standard header med navigation
  href: '#standard-header-med-navigation'
- text: Kompleks header med alle rækker
  href: '#kompleks-header-med-alle-rækker'
- text: Header med større logo og brugeroplysninger
  href: '#header-med-større-logo-og-brugeroplysninger'
---

{% include code/preview-image.html component="header-simple" code="/kode/komponenter/headers/" %}

{:.h3 #retningslinjer}
## Anvendes til

Brug headeren til at give brugen et “ankerpunkt”, der er ens på tværs af trin og undersider i selvbetjeningsløsningen. 

Brug headeren til at kommunikere portal, NemLog-in-oplysninger, ansvarlig myndighed, evt. med kontaktoplysninger.

En eventuel overordnet navigation (topnavigation) skal også placeres i headeren, så brugeren altid kan navigere rundt i selvbetjeningsløsningen.

{:.h3}
## Anvendes ikke til

Anvend ikke headeren andre steder i løsningen end i toppen af siden. 

Brug ikke topnavigationen som faneblad, anvend da <a href="/komponenter/faneblad/">fanebladskomponenten</a>. 

{:.h3}
## Vejledning

Tag et kig på <a href="/eksempler/selvbetjeningsloesninger/">eksempelløsningerne</a>, for at se hvordan komponenten passer ind i en komplet løsning.

En header består af et antal rækker med forskelligt indhold. Jo flere rækker jo mere kompleks en header. Designsystemet giver mulighed for op til 5 rækker og minimum 2 rækker.

- Række 1 og 2 er obligatoriske
- Række 3 til 5 er valgfri

Når du laver en header, bør du følge disse principper:

- Jo enklere navigationen er, desto bedre for brugeren.
- Brug kun række 3, 4, 5, med knapper, links og ekstra navigation, når det er absolut nødvendigt.
- Hold altid rækkefølgen, uanset kombinationen

<div><img src="{{ site.baseurl }}/assets/img/headers/header-row-example.svg" class="w-percent-100 inner-border-box p-4" alt="Viser alle rækker i en header" /></div>


{:.h3 #eksempelloesninger}
## Se komponenten i eksempelløsninger

<a href="/eksempler/selvbetjeningsloesninger/">Se komponenten i forskellige eksempelløsninger</a>

{:.h3}
## Headerens rækker forklaret

{:.h4}
### Række 1 (obligatorisk)

Portal-logo, NemLog-in-oplysninger og ”Log af” knap.

{:.h4}
### Række 2 (obligatorisk)

Selvbetjeningens navn (løsningstitel), ansvarshavende myndighed og eventuelt support/kontakt oplysninger.

{:.h4}
### Række 3 (frivillig)

Sidenavigation (topnavigation) i løsningen, eventuelt knapper, eventuelt ekstramenu.

{:.h4}
### Række 4 (frivillig)

Flere sorteringsmuligheder, eventuelt ekstramenu, eventuelt knapper.

{:.h4}
### Række 5 (frivillig)

Funktionslinks (igangsætter system- eller OS-funktionalitet, fx gem, print osv.)

En header med fem rækker er meget tilpasningsvenlig og gør det muligt at servicere både simple og komplekse løsninger. Den er også kompleks at anvende for brugerne. Du bør derfor udgangspunkt anvende færre end fem rækker i din header.

{:.h3}
## Links
<a href="https://www.w3.org/WAI/tutorials/page-structure/headings/#main-heading-after-navigation" class="icon-link">Web Accessibility Tutorials: Headers<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>

{% include child-components.html parent='Headers' %}
