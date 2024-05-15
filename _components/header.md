---
permalink: "/komponenter/header/"
redirect_from:
- "/komponenter/headers/"
- "/kode/komponenter/headers/"
- "/kode/komponenter/header/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Header
lead: Headeren identificerer portalen, den ansvarlige myndighed og brugeren, der er logget ind med NemLog-in. Den fungerer også til navigation og overordnet styring af selvbetjeningsløsningen.
description: "Tydelige headers er med til at skabe en let navigation for brugeren og hjælper dermed brugeren med at finde vej."
tags: 
tabs: "Retningslinjer, kode"
---

{% include tabs.html guidelines=true code=true %}

{% include code/preview-image.html component="header-with-navigation" title="Eksempel på header" classes="intro-example" %}

{% include anchorlinks.html guidelines="Header" code="Header_Kode" %}

<!--split-->

## Sådan bruges komponenten {#{% include create-id.html heading="Sådan bruges komponenten" %}}

### Anvendes til

Brug headeren til at give brugeren et “ankerpunkt”, der er ens på tværs af trin og undersider i selvbetjeningsløsningen.

Brug headeren til at kommunikere portal, NemLog-in-oplysninger, ansvarlig myndighed, evt. med kontaktoplysninger.

En eventuel overordnet navigation (topnavigation) skal også placeres i headeren, så brugeren altid kan navigere rundt i selvbetjeningsløsningen.

### Anvendes ikke til

Anvend ikke headeren andre steder i løsningen end i toppen af siden.

Brug ikke topnavigationen som faneblade, anvend da {% include links/component-guideline-link.html linktext="faneblade" %}. 

### Vejledning

Tag et kig på {% include links/internal-link.html linktext="eksemplerne på selvbetjeningsløsninger" %} for at se, hvordan komponenten passer ind i en komplet løsning.

En header består af et antal rækker med forskelligt indhold.

- Række 1 og række 2 er obligatoriske. Alle selvbetjeningsløsninger skal have portal-logo, login-info og løsningstitel som minimum.
- Række 3 kan anvendes hvis nødvendigt.

#### Headerens rækker forklaret

##### Række 1 (obligatorisk)

Portal-logo, NemLog-in-oplysninger og “Log af” knap.

##### Række 2 (obligatorisk)

Selvbetjeningens navn (løsningstitel), ansvarshavende myndighed og eventuel support/kontaktoplysninger.

##### Række 3 (frivillig)

Navigation (topnavigation) i løsningen og søgefelt.

## Varianter {#{% include create-id.html heading="Varianter" %}}

### Simpel header

{% include code/preview-image.html component="header-simple" %}

### Header med navigation og søgefelt

{% include code/preview-image.html component="header-with-navigation" %}

#### Menupunkter med dropdown

Menupunkter med dropdown-funktionalitet giver adgang til undermenupunkter, men er ikke et menupunkt i sig selv. Overvej om dropdown-menu er den rigtige løsning. Topnavigation kombineret med {% include links/component-guideline-link.html linktext="venstremenu" %} giver større fleksibilitet og mulighed for flere niveauer i navigationen.

#### Responsivitet og breakpoints

På små skærme foldes indhold vedr. log ind-information, ansvarlig myndighed og eventuelle menupunkter ind i en “mobil”-menu. Vi anbefaler, at løsningen kun anvender denne visning, når der ikke længere er plads til indholdet på sidens bredde.

Menupunkter der ikke er plads til i sidens bredde samles i en “Mere”-menu, der vises som overflow-menu.

### Header med sprogvælger

Hvis din selvbetjeningsløsning skal være tilgængelig på flere sprog, placeres sprogvælgeren både som overflow-menu øverst i række 1 og i sidens footer (se {% include links/component-guideline-link.html linktext="sprogvælger" %}). Nedenstående eksempel viser udelukkende sprogvælgerens header-variant.

{% include code/preview-image.html component="header-switch-language" %}

## Se komponenten i eksempelløsninger {#{% include create-id.html heading="Se komponenten i eksempelløsninger" %}}

Se komponenten i {% include links/internal-link.html linktext="eksemplerne på selvbetjeningsløsninger" %}.

<!--split-->

## Installation {#{% include create-id.html heading="Installation" append="-kode" %}}

### HTML Struktur {#{% include create-id.html heading="HTML Struktur" append="-kode" %}}

Nedenstående eksempel viser den overordnede struktur i `<header>`-elementet. De øvrige afsnit indeholder uddybende kodeeksempler.

{:#html-struktur}
{% include code/syntax.html component="header-overview" copybutton=true %}

Placer `<header>`-elementet i din HTML-sides `<body>`-element efter {% include links/component-guideline-link.html linktext="Gå til sidens indhold" %}-komponenten.

#### Overlay og mobilmenu

Som standard ændres headeren til udelukkende at vise løsningstitel, evt. søgefelt og en menuknap, når skærmen er mindre end 992px bred. Headeren skal derfor altid indeholde nedenstående kode, som bruges på mindre skærme, for eksempel mobiltelefoner. Når menuen er åben, vises et mørkt overlay oven på det øvrige sideindhold.

{% include code/syntax.html component="header-menu-top" copybutton=true %}

Det er muligt at ændre, hvornår headeren skal vise menuknappen, ved at bruge Sass-variablen `$nav-responsive-breakpoint` og derefter bygge CSS'en selv.

#### Række 1

Række 1 indeholder portal-logo, NemLog-in-oplysninger og “Log af” knap. Headeren skal altid indeholde denne række.

Der er to dele, som skal indsættes i `<header>`-elementet. 

Første del skal indsættes øverst efter skip-link og indeholder koden, der vises på større skærme:

{% include code/syntax.html component="header-portal" copybutton=true %}

Anden del skal indsættes nederst i mobilmenuen og indeholder koden, der vises på mindre skærme:

{% include code/syntax.html component="header-portal-mobile" copybutton=true %}

Se eventuelt {% include links/component-code-link.html linktext="eksemplet med den overordnede struktur i headeren" %} for nærmere detaljer om placering.

#### Række 2

Række 2 indeholder selvbetjeningens navn (løsningstitel), ansvarshavende myndighed og eventuel support/kontaktoplysninger. Headeren skal altid indeholde denne række.

Der er to dele, som skal indsættes i `<header>`-elementet. 

Første del skal indsættes <em>efter</em> række 1 og indeholder koden, der vises på større skærme:

{% include code/syntax.html component="header-solution" copybutton=true %}

Anden del skal indsættes i mobilmenuen <em>før</em> række 1 og indeholder koden, der vises på mindre skærme:

{% include code/syntax.html component="header-solution-mobile" copybutton=true %}

Se eventuelt {% include links/component-code-link.html linktext="eksemplet med den overordnede struktur i headeren" %} for nærmere detaljer om placering.

#### Række 3

Række 3 indeholder topnavigation i løsningen og søgefelt. Det er valgfrit, om headeren skal indeholde denne række.

Der er to dele, som skal indsættes i `<header>`-elementet. 

Første del skal indsættes <em>efter</em> række 2 og indeholder koden, der vises på større skærme:

{% include code/syntax.html component="header-navigation" copybutton=true %}

Hvis række 3 indeholder menupunkter med undermenuer, husk at anvende korrekt opmærkning med `aria-expanded` og `aria-controls` (APG, Disclosure Pattern). Hvis løsningen anvender et søgefelt, skal dette indsættes i første kodedel som vist ovenover, men udelades fra koden til mobilmenuen. 

Anden del skal indsættes i mobilmenuen <em>før</em> række 2 og indeholder koden, der vises på mindre skærme:

{% include code/syntax.html component="header-navigation-mobile" copybutton=true %}

Se eventuelt {% include links/component-code-link.html linktext="eksemplet med den overordnede struktur i headeren" %} for nærmere detaljer om placering.

#### Topnavigation og venstremenu

Hvis løsningen anvender både en topnavigation og en venstremenu til at vise links til undersider, så skal venstremenuen skjules på mindre skærme og mobilmenuen skal indeholde alle links fra begge menuer. Her er man selv ansvarlig for at sikre, at venstremenuen vises og skjules på de rette tidspunkter, for eksempel ved at anvende {% include links/internal-link.html linktext="hjælpeklasser for display" %}, samt at mobilmenuen indeholder de korrekte links.

#### Sprogvælger

Hvis man anvender en sprogvælger i headeren, er der to dele, som skal indsættes i `<header>`-elementet.

Første del skal indsættes <em>før</em> række 1 (portalinfo) og indeholder koden, der vises på større skærme:

{% include code/syntax.html component="switch-language" copybutton=true %}

Anden del skal indsættes i mobilmenuen, igen <em>før</em> række 1 (portalinfo) og indeholder koden, der vises på mindre skærme:

{% include code/syntax.html component="switch-language-mobile" copybutton=true %}

### JavaScript

Headeren kræver JavaScript for at fungere. Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:

{% highlight js %}
new DKFDS.Navigation().init();
{% endhighlight %}

Bemærk, at man selv er ansvarlig for JavaScript og funktionalitet til sprogvælgeren.

## Referencer {#{% include create-id.html heading="Referencer" append="-kode" %}}

{:.nobullet-list}
- {% include links/external-link.html linktext="ARIA Authoring Practices Guide (APG): Disclosure (Show/Hide) Pattern" %}