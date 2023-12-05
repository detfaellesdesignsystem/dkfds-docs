---
permalink: "/faellesskab/releases/"
layout: styleguide
category: Faellesskab_category
subcategory: Fællesskab
title: Release notes
lead: Nedenfor vises release notes — en opsummering af bug fixes, nye features og
  andre opdateringer.
anchor: true
subnav:
- text: Version 10.0.0
  href: "#version-10-0-0"
- text: Version 9.0.2
  href: "#version-9-0-2"
- text: Version 9.0.1
  href: "#version-9-0-1"
- text: Version 9.0.0
  href: "#version-9-0-0"
- text: Version 8.2.1
  href: "#version-8-2-1"
- text: Version 8.2.0
  href: "#version-8-2-0"
- text: Version 8.1.0
  href: "#version-8-1-0"
- text: Version 8.0.1
  href: "#version-8-0-1"
- text: Version 8.0.0
  href: "#version-8-0-0"
- text: Version 7.5.3
  href: "#version-7-5-3"
- text: Tidligere versioner
  href: "#version-7-5-2"
description: Release notes for Det Fælles Designsystem
tags:
- changelog
- releases
- udgivelse
- version
- versioner
- 2.1.2
- 3
- 3.0.0
- 3.0.1
- 3.0.2
- 3.0.3
- 4.0.0
- 4
- 4.0.1
- 4.1.1
- 4.1
- 4.2.0
- 4.2
- 4.3.0
- 4.3
- 4.4.0
- 4.4
- 5.0.0
- 5
- 5.1.0
- 5.1
- 5.2.0
- 5.2
- 5.3.0
- 5.3
- 6.0.0
- 6
- 6.0.1
- 6.1.0
- 6.1
- 6.1.1
- 7.0.0
- 7
- 7.1.0
- 7.1
- 7.1.1
- 7.2.0
- 7.2
- 7.3.0
- 7.3
- 7.4.0
- 7.4
- 7.5.0
- 7.5
- 7.5.1
- 7.5.2
- 7.5.3
- 8
- 8.0
- 8.0.0
- 8.0.1
- 8.1.0
- 8.2.0
- 8.2.1
- 9
- 9.0.0
- 9.0.1
- 9.0.2
- 9.1.0
- 10
- 10.0.0
anchor: true
subnav:
- text: Version 10.0.0
  href: "#version-10-0-0"
- text: Version 9.1.0
  href: "#version-9-1-0"
- text: Version 9.0.2
  href: "#version-9-0-2"
- text: Version 9.0.1
  href: "#version-9-0-1"
- text: Version 9.0.0
  href: "#version-9-0-0"
- text: Version 8.2.1
  href: "#version-8-2-1"
- text: Version 8.2.0
  href: "#version-8-2-0"
- text: Version 8.1.0
  href: "#version-8-1-0"
- text: Version 8.0.1
  href: "#version-8-0-1"
- text: Version 8.0.0
  href: "#version-8-0-0"
- text: Tidligere versioner
  href: "#version-7-5-3"
lead: Nedenfor vises release notes — en opsummering af bug fixes, nye features og
  andre opdateringer.
---

Har du et nyt forslag til en feature eller et bug fix? <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues" class="icon-link" target="_blank">Så må du meget gerne oprette et issue på Github<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>

## Versionering

Designsystemets måde at versionere på er inspireret af <a href="https://semver.org/" class="icon-link" target="_blank">semantisk versionering<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>. Versionsnummeret indikerer, hvilken type rettelse, der er tale om.

Versionsnummeret skrives altid x.y.z (fx 2.1.3) og skal læses MAJOR (x), MINOR (y), PATCH (z)

- MAJOR: Ændringer i kode og/eller design, der ikke er bagud-kompatible - som fx erstatning eller sletning af komponenter eller ændringer i kode og/eller design, der medfører bagudrettede tilpasninger ved opdatering til den pågældende version.
- MINOR: Tilføjelser, ændringer og ny funktionalitet, der er bagud-kompatible.
- PATCH: Bagud-kompatible fejlrettelser (bug fixes).

### Release-proces

Designsystemet er "levende" og skal holdes ajour, hvorfor langt de fleste bagud-kompatible ændringer og tilføjelser vil ske løbende. Fejlrettelser vil ske hurtigst muligt. Ikke bagud-kompatible ændringer vil samles op og blive releaset med lavere frekvens.

### Tidligere versioner af dokumentationen

Har du brug for at se en version af dokumentationen på designsystem.dk, som stemmer overens med en tidligere release, <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues" class="icon-link" target="_blank">så er du velkommen til at oprette en sag på Github<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a> eller skrive til FDS teamet på <a href="mailto:fds@erst.dk">FDS@erst.dk</a>.

{:#version-10-0-0 .mb-0}
## Version 10.0.0

<div><span class="small-text mt-0 d-block">xx-xx-2024</span></div>

<div class="d-flex align-items-center mt-5 mb-4">
  <h3 class="h4 mt-0 mb-0 mr-3">{% include links/component-links.html linktext="Faneblade" %}</h3>
</div>

- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Det gamle faneblad er blevet erstattet med en ny fanebladskomponent.
- <strong class="badge badge-success badge-small mr-2">New</strong> Tilføjet mulighed for at anvende faneblade med URL-skifte.
- <strong class="badge badge-success badge-small mr-2">New</strong> Tilføjet mulighed for at indsætte ikoner i fanebladene.

<div class="d-flex align-items-center mt-5 mb-4">
  <h3 class="h4 mt-0 mb-0 mr-3">Ændringer på designsystem.dk</h3>
</div>

- Dokumentationssiden har fået lavet en større omstrukturering hvor en stor del af dokumentationen er blevet inddelt i faneblade.
- Ved omstruktureringen er kodeafsnit flyttet fra den separate menu ”Kode” og ind på hver komponent-/designside i fanen ”Kode”. Retningslinjerne for komponenterne er ligeledes flyttet ind i fanen ”Retningslinjer”.
- Flere sider i dokumentationen under menupunkterne ”Design”, ”Kode”, ”Krav” og ”Fællesskab” er blevet flyttet ind i et nyt menupunkt ved navn ”Kom i gang”. Menupunktet ”Kode” og ”Krav” er blevet fjernet som følge af disse ændringer. Derudover er ”Design” menupunktet omdøbt til ”Styleguide”.

- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Fjernet muligheden for at vælge mellem store (32 pixels) og små (20 pixels) {% include links/component-links.html linktext="radioknapper" %} og {% include links/component-links.html linktext="tjekbokse" %}. Den nye standardstørrelse er 24 pixels. Bemærk at HTML'en for {% include links/component-links.html linktext="tabeller med valgbare rækker" %} og tjekbokse skal opdateres.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Ændret `devDependencies` og `scripts` i {% include links/external-links.html linktext="package.json" %}.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Der tages ikke længere forbehold i koden for browsere, som ikke er understøttet af FDS. Hvis man i sit projekt har et krav om at supportere ældre browsere, skal man derfor selv anvende den nødvendige <a href="https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Tips" class="icon-link" target="_blank">transpiling<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a> og <a href="https://developer.mozilla.org/en-US/docs/Glossary/Polyfill" class="icon-link" target="_blank">polyfills<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>. Nyere versioner af Chrome, Edge, Safari og Firefox er fortsat understøttet (se eventuelt {% include links/internal-links.html linktext="browserunderstøttelse" %}).
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> {% include links/component-links.html linktext="Anchorlinks" %} er fjernet fra {% include links/component-links.html linktext="venstremenuen" %} og har i stedet fået sin egen komponent.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Headerens række 4 og række 5 er fjernet, mens de øvrige rækker i headeren har fået opdateret design og forbedret tilgængelighed. Se flere detaljer på {% include links/component-links.html linktext="headerkomponentens side" %}.
- <strong class="badge badge-info badge-small mr-2">Change</strong> Opdateret eksempler for trinindikator og venstremenu, så de viser `aria-label` for `nav`-elementet.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Erstattet {% include links/external-links.html linktext="@import" %} i alle SASS-filer med {% include links/external-links.html linktext="@use" %} og {% include links/external-links.html linktext="@forward" %}. Dette har medført en generel restruktur i alle SASS-filer og tilhørende mapper, hvor flere funktioner og mixins er blevet slettet eller flyttet. Anvender man udelukkende de færdiggenererede CSS-filer, kan man se bort fra dette punkt.
<span class="form-hint mt-0">For mere info, se <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/199" class="icon-link" target="_blank">issue #199 på Github<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>.</span>
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Tidligere har flere SASS-variable gjort det simpelt at ændre grundlæggende dele af designsystemets design og layout. Dette gjaldt også dele, det ikke var tiltænkt, at man skulle ændre. Flere SASS-variable er derfor blevet slettet, flyttet eller erstattet. De variable, som stadig anvendes, kan findes i mappen <a href="https://github.com/detfaellesdesignsystem/dkfds-components/tree/master/src/stylesheets">variables</a>. Anvender man udelukkende de færdiggenererede CSS-filer, kan man se bort fra dette punkt. Bemærk, at der i kommende major releases kan blive fjernet yderligere variable.
- Ændret accordions `border-radius` (hjørner) fra 3px til 4px.
- Rettet ikonet "file-upload", der kunne smide en fejl i konsollen, når man anvendte visse browser extensions.
- <strong class="badge badge-info badge-small mr-2">Change</strong> Rettet fejl, hvor tekst ikke altid blev ombrudt korrekt i accordions.
- Rettet fejl, hvor fokusmarkeringen kunne mangle delvist i overflowmenuer.
- <strong class="badge badge-success badge-small mr-2">New</strong> Tilføjet muligheden for at placere sprogvælgeren i headeren og mobilmenuen udover footeren.
- Rettet fejl, hvor overflowmenuen kunne gå ud over skærmens kanter, når den åbnede.
- <strong class="badge badge-info badge-small mr-2">Change</strong> Fjernet JavaScript fra datofelter og ændret inputtypen fra `tel` til `number`. Man skal derfor sikre sig, at ens løsning har en passende validering af de indtastede værdier.
- Erstattet normalize.css med styling i _base.scss.
- <strong class="badge badge-info badge-small mr-2">Change</strong> Ændret fontstørrelse og linjehøjde på overskrifter, billedtekst, subheading og manchettekst - vær opmærksom på, at disse tekster kan fylde mere end tidligere.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Fjernet klassen `icon-svg-large`.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Toggle switch har fået ny HTML, ny styling og opdaterede retningslinjer med det formål at øge tilgængeligheden, samt gøre det muligt at anvende komponenten på andre sprog end dansk.

{:#version-9-1-0 .mb-0}
## Version 9.1.0

<div><span class="small-text mt-0 d-block">24-11-2023</span></div>

- <strong class="badge badge-info badge-small mr-2">Change</strong> Ændret design på {% include links/component-links.html linktext="readonly-inputfelter" %} og {% include links/component-links.html linktext="deaktiverede inputfelter" %}. Bemærk at deaktiverede inputfelter kræver en mindre opdatering af HTML'ens klasser.
- Tilføjet styling til `placeholder`-attributten for {% include links/component-links.html linktext="inputfelter" %}, så placeholder-tekst afviger i udseende fra indtastet tekst. Vær dog opmærksom på, at {% include links/component-links.html linktext="hjælpetekster" %} fortsat er måden at give brugere hjælp til indtastning på.
- Opdateret {% include links/component-links.html linktext="funktionslinks" %}, så teksten er venstrestillet, når de i HTML'en er angivet med `<button>`.
- Rettet fejl, hvor visse typer af `id` kunne få {% include links/component-links.html linktext="overflowmenuen" %} til at fejle.
<span class="form-hint mt-0">For mere info, se <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/220" class="icon-link" target="_blank">issue #220 på Github<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>.</span>
- Tilføjet `inline` til {% include links/internal-links.html linktext="hjælpeklasser for display" %}.
- Tilføjet `autocomplete`-attributter til flere eksempler, tilføjet afsnit om `autocomplete` til {% include links/component-links.html linktext="implementeringen af inputfelter" %} og gjort det muligt at sætte autocomplete i <a href="https://github.com/detfaellesdesignsystem/dkfds-components/blob/master/src/components/form/controls/date-input.njk" class="icon-link" target="_blank">date-input-macroen<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>.
- <strong class="badge badge-success badge-small mr-2">New</strong> Tilføjet pattern for <a href="/eksempler/patterns/hentet-data/">inputfelter med hentet data</a>.
- Tilføjet ny side til dokumentationen kaldet {% include links/internal-links.html linktext="Ofte stillede spørgsmål" %}, samt opdateret siderne {% include links/internal-links.html linktext="Designressourcer" %}, {% include links/internal-links.html linktext="Tjekliste" %} og {% include links/component-links.html linktext="Komponenter" %}.

{:#version-9-0-2 .mb-0}
## Version 9.0.2

<div><span class="small-text mt-0 d-block">30-08-2023</span></div>

- Rettet fejl, hvor musemarkøren ikke blev vist korrekt på {% include links/component-links.html linktext="deaktiverede felter" %}, når de var angivet som andet end `type="text"`.
- Rettet fejl, hvor {% include links/component-links.html linktext="knapper" %} ikke altid stod på linje, når de lå i samme række.
<span class="form-hint mt-0">For mere info, se <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/215" class="icon-link" target="_blank">issue #215 på Github<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>.</span>

{:#version-9-0-1 .mb-0}
## Version 9.0.1

<div><span class="small-text mt-0 d-block">20-06-2023</span></div>

- Rettet fejl, hvor teksten på {% include links/component-links.html linktext="knapper" %} røg ud over kanten, hvis teksten fyldte flere linjer.
- Rettet fejl, hvor {% include links/component-links.html linktext="cookiemeddelelsen" %} ikke kunne læses, når der var zoomet kraftigt ind i browseren.
- Tilføjet tjek i JavaScript-koden for {% include links/component-links.html linktext="modaler" %}, så man ikke længere får en fejlbesked i browserens konsol, hvis man programmatisk forsøger at lukke en allerede lukket modal.
<span class="form-hint mt-0">For mere info, se <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/210" class="icon-link" target="_blank">issue #210 på Github<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>.</span>
- Rettet fejl i dokumentationen, hvor nogle {% include links/internal-links.html linktext="farver" %} stod angivet forkert.

{:#version-9-0-0 .mb-0}
## Version 9.0.0

<div><span class="small-text mt-0 d-block">14-04-2023</span></div>

<div class="d-flex align-items-center mt-5 mb-4">
  <h3 class="h4 mt-0 mb-0 mr-3">{% include links/component-links.html linktext="Datovælger" %}</h3>
</div>
- Rettet fejl, hvor datoer fik en forkert dag læst højt af skærmlæsere.
<span class="form-hint mt-0">For mere info, se <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/201" class="icon-link" target="_blank">issue #201 på Github<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>.</span>
- Rettet fejl, hvor navigationen i datovælgeren ikke fungerede sammen med visse skærmlæsere.
- Rettet fejl, hvor markøren skiftede udseende på navigationsknapperne, selvom disse knapper ikke var synlige.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Fjernet, tilføjet og ændret flere skærmlæserbeskeder. Anvender du dine egne {% include links/component-links.html linktext="sprogoversættelser" %}, skal disse derfor opdateres.
- Ændret `aria-selected` til `aria-current` på valgte datoer, måneder og år.
- <strong class="badge badge-success badge-small mr-2">New</strong> Tilføjet muligheden for at tilpasse {% include links/component-links.html linktext="datoformatet" %}.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Opdateret inputfeltet, så datovælgeren accepterer flere måder at indtaste en dato på (uafhængigt af det valgte datoformat).

<div class="d-flex align-items-center mt-5 mb-4">
  <h3 class="h4 mt-0 mb-0 mr-3">{% include links/component-links.html linktext="Venstremenu" %} og {% include links/component-links.html linktext="trinindikator" %}</h3>
</div>
- <strong class="badge badge-info badge-small mr-2">Change</strong> Rettet fejl vedrørende trinindikatorens gennemført-ikon, hvor skærmlæsere ikke annoncerede, når et trin var markeret som gennemført.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Rettet fejl, hvor lange tekster blev ombrudt forkert (ændringen påvirker både venstremenu og trinindikator).
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Rettet fejl, hvor trinindikatoren kunne blive for lille, medmindre den var responsiv.
- <strong class="badge badge-success badge-small mr-2">New</strong> Tilføjet muligheden for at vise, når der er {% include links/component-links.html linktext="fejl i et trin" %} i trinindikatoren.
<span class="form-hint mt-0">For mere info, se <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/142" class="icon-link" target="_blank">issue #142 på Github<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>.</span>

<div class="d-flex align-items-center mt-5 mb-4">
  <h3 class="h4 mt-0 mb-0 mr-3">{% include links/component-links.html linktext="Tabeller" %} og {% include links/component-links.html linktext="strukturerede lister" %}</h3>
</div>
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Fjernet klassen `table--lines`, der var en forældet {% include links/component-links.html linktext="variant" %}.
- Rettet fejl relateret til margin og padding for tabeller.
- <strong class="badge badge-info badge-small mr-2">Change</strong> Opdateret teksten på søgeknappen ved {% include links/component-links.html linktext="søgning i tabeller" %}.
- <strong class="badge badge-info badge-small mr-2">Change</strong> Skærmlæserbeskederne til tjekboksene i {% include links/component-links.html linktext="tabeller med valgbare rækker" %} er ændret til kun at være "vælg række". Da JavaScripten ikke længere ændrer i skærmlæserbeskederne, skal eventuelle oversættelser skrives direkte i HTML'en fremadrettet.
- <strong class="badge badge-info badge-small mr-2">Change</strong> Fjernet `aria-label` fra `label`-elementet for tjekbokse i {% include links/component-links.html linktext="tabeller med valgbare rækker" %}.
- <strong class="badge badge-info badge-small mr-2">Change</strong> Opdateret <a href="/eksempler/templates/#opsummering">opsummeringssiderne</a> i selvbetjeningseksemplerne, hvor tidligere tomme headers har fået en skærmlæserbesked.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Opdateret `DKFDS.init()`, så kun tabeller markeret med {% include links/component-links.html linktext="responsive klasser" %} får indsat attributten `data-title`.
- <strong class="badge badge-info badge-small mr-2">Change</strong> <strong>{% include links/component-links.html linktext="Strukturerede lister" %} er flyttet ind under tabeller</strong> og er ændret til en tabelstruktur.

<div class="d-flex align-items-center mt-5 mb-4">
  <h3 class="h4 mt-0 mb-0 mr-3">{% include links/component-links.html linktext="Header" %}</h3>
</div>
- <strong class="badge badge-info badge-small mr-2">Change</strong> Opdateret myndighedsnavnet i række 2, så det er kodet med `<strong>`.
- Rettet fejl, hvor portalnavnet ikke blev vist korrekt ved print.
- <strong class="badge badge-info badge-small mr-2">Change</strong> Opdateret Log af-knappen, så den altid er kodet som en `button` uanset skærmstørrelse.
- <strong class="badge badge-info badge-small mr-2">Change</strong> `title` er fjernet fra mobilmenuens knapper og erstattet af `aria-label`.
- <strong class="badge badge-info badge-small mr-2">Change</strong> Rettet fejl, hvor den aktive side i række 3 ikke blev fremhævet for skærmlæsere eller fremgik af mobilmenuen.

<div class="d-flex align-items-center mt-5 mb-4">
  <h3 class="h4 mt-0 mb-0 mr-3"><a href="https://github.com/detfaellesdesignsystem/dkfds-components/blob/master/package.json" class="icon-link" target="_blank">package.json<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a></h3>
</div>
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Fjernet linjen `"jsnext:main": "src/js/start.js"`.<br><span class="form-hint mt-0">For mere info, se <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/194" class="icon-link" target="_blank">issue #194 på Github<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>.</span>
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Fjernet `release` fra `scripts`.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Fjernet `app-root-path`, `array-filter`, `gulp4-run-sequence` og `zip-folder` fra `devDependencies`.

<h3 class="h4">Øvrige</h3>
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Større opdatering og omskrivning af flere <a href="https://github.com/detfaellesdesignsystem/dkfds-components/tree/master/src/components" class="icon-link" target="_blank">macroer<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>. Se macroernes tilhørende YAML-filer for den komplette dokumentation. Såfremt man <em>ikke</em> anvender macroer, men blot har anvendt HTML-koden vist i dokumentationssidens eksempler, kan man se bort fra dette punkt i release notes.
- <strong class="badge badge-info badge-small mr-2">Change</strong> Flere afvigelser i dokumentationens kodeeksempler og beskrivelser er rettet. Nogle eksempler kan derfor se anderledes ud end tidligere.
- Fjernet flere billeder fra dokumentationen, der viste eksempler på avancerede komponenter uden tilhørende kode.
- <strong class="badge badge-info badge-small mr-2">Change</strong> Opdateret HTML'en for følgende komponenter, så titler og fremhævet tekst er angivet med enten et heading-element eller `<strong>`-element: {% include links/component-links.html linktext="Badges" %}, <a href="/kode/komponenter/beskeder/">beskeder</a>, {% include links/component-links.html linktext="cookiemeddelelser" %}, {% include links/component-links.html linktext="footerne" %} og {% include links/component-links.html linktext="toastbeskeder" %}.
- <strong class="badge badge-info badge-small mr-2">Change</strong> {% include links/component-links.html linktext="Toastbeskeders" %} aria-attributter og skærmlæserbeskeder er opdateret. Skærmlæsere annoncerer nu også beskedens variant og derudover titlen ved fokus på luk-knappen.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Opdateret {% include links/component-links.html linktext="accordions" %}, så de altid kan åbnes og lukkes uafhængigt af de øvrige accordions i gruppen (mobilversionen af faneblade er dog undtaget).<br><span class="form-hint mt-0">For mere info, se <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/207" class="icon-link" target="_blank">issue #207 på Github<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>.</span>
- <strong class="badge badge-info badge-small mr-2">Change</strong> Opdateret {% include links/component-links.html linktext="fejlbeskeder i accordions" %}, så skærmlæsere kun læser fejlbeskeden højt og ikke hele accordionens indhold.
- <strong class="badge badge-info badge-small mr-2">Change</strong> Rettet fejl, hvor den lille version af {% include links/component-links.html linktext="tilbage til toppen" %}-knappen ikke blev læst korrekt op af skærmlæsere.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Attributten `aria-selected` på {% include links/component-links.html linktext="sortering" %} er ændret til `aria-current` og flyttet fra `li`-elementet til `button`-elementet.
- Rettet fejl, hvor {% include links/component-links.html linktext="søgefelter" %} blev grå i stedet for hvide på iPhones.
- <strong class="badge badge-info badge-small mr-2">Change</strong> {% include links/component-links.html linktext="Radioknapper" %} og 
{% include links/component-links.html linktext="tjekbokse" %} er omskrevet, så de ikke længere indeholder listeelementerne `li` og `ul`.
- Mindsket afstanden mellem label og hjælpetekst ved {% include links/component-links.html linktext="store radioknapper" %} og {% include links/component-links.html linktext="store tjekbokse" %}.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Rettet fejl, hvor sprogoversættelser for {% include links/component-links.html linktext="karakterbegrænsning" %} og {% include links/component-links.html linktext="Accordions" %} påvirkede sproget i disse komponenter generelt i stedet for kun i de initialiserede komponenter. Denne opførsel kan dog ikke undgås for {% include links/component-links.html linktext="Datovælgeren" %}, hvor dokumentationen er præciseret.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Tidligere public funktioner og variable er gjort private i koden for {% include links/component-links.html linktext="karakterbegrænsning" %}. Funktionen `init` samt sprogskifte er uændrede.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Fjernet {% include links/internal-links.html linktext="ikonet" %} `delete`. Brug i stedet ikonet `trash-can`.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> {% include links/component-links.html linktext="Klikbare ikoner" %} med klassen `button-unstyled` fylder ikke længere hele skærmbredden på mindre skærme og HTML'en er opdateret for alle eksempler.
- Rettet fejl, hvor deaktiverede {% include links/component-links.html linktext="tertiærknapper" %} skiftede farve på hover.
- <strong class="badge badge-info badge-small mr-2">Change</strong> Fjernet <a href="/eksempler/patterns/">pattern</a> for visning af modal, når en side forlades. I stedet kan browseradvarsler anvendes. 
- Rettet fejl i {% include links/component-links.html linktext="overflow menuer" %}, hvor indholdet kunne ryge ud over skærmkanten på små skærme.
- <strong class="badge badge-info badge-small mr-2">Change</strong> Tilføjet `aria-haspopup` til knapper, der åbner modaler. {% include links/component-links.html linktext="Modalkomponenten" %}, <a href="/eksempler/selvbetjeningsloesninger/">selvbetjeningseksemplerne</a> og pattern for <a href="/eksempler/patterns/session-udloeber/">session udløber</a> er opdateret.

{:#version-8-2-1 .mb-0}
## Version 8.2.1

<div><span class="small-text mt-0 d-block">03-01-2023</span></div>

- Tilføjet klassen `full-width-image`, der kan bruges til {% include links/internal-links.html linktext="billeder anvendt som links" %}. 
- Rettet fejl i {% include links/component-links.html linktext="modaler" %}, hvor baggrunden kunne blive dækket helt af modalen på især mindre skærme.
- Opdateret licensinformation og tilføjet licensfilen til <a href="https://github.com/detfaellesdesignsystem/dkfds-components/releases" class="icon-link" target="_blank">zip-filen i GitHub<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>.

{:#version-8-2-0 .mb-0}
## Version 8.2.0

<div><span class="small-text mt-0 d-block">17-10-2022</span></div>

- <strong class="badge badge-success badge-small mr-2">New</strong> Tilføjet mulighed for at ændre sprog i komponenterne {% include links/component-links.html linktext="Accordions" %}, {% include links/component-links.html linktext="Tabeller med valgbare rækker" %}, {% include links/component-links.html linktext="karakterbegrænsning" %} og {% include links/component-links.html linktext="Datovælgeren" %}.
- <strong class="badge badge-info badge-small mr-2">Change</strong> Ændret aria-attributter for {% include links/component-links.html linktext="toastbeskeder" %}, da beskederne ikke blev læst højt af skærmlæsere. De nye aria-attributter skal sættes på henholdsvis toast-containeren og toastbeskederne.
- <strong class="badge badge-info badge-small mr-2">Change</strong> Ændret placeringen af {% include links/component-links.html linktext="toastbeskederne" %}, så de nu vises øverst på både store og små skærme. Hvis der vises flere beskeder ad gangen, anbefales det at lade den nyeste stå øverst.
- Tilføjet `cursor:pointer` til {% include links/component-links.html linktext="toastbeskeders" %} luk-knap.
- Opdateret {% include links/component-links.html linktext="dropdown" %}-komponentens background-image, så det sættes ved hjælp af ikonet `expand-more`.
- Ændret stylingen på {% include links/component-links.html linktext="responsive trinindikatorers" %} top- og bund-kanter, så de ikke længere forsvinder på mindre skærme.
- Rettet en mindre fejl, hvor {% include links/component-links.html linktext="tooltip" %}-pilen kunne pege væk fra elementet.

{:#version-8-1-0 .mb-0}
## Version 8.1.0

<div><span class="small-text mt-0 d-block">28-09-2022</span></div>

- <strong class="badge badge-success badge-small mr-2">New</strong> Ny komponent: {% include links/component-links.html linktext="Tilbage til toppen" %}
- <strong class="badge badge-success badge-small mr-2">New</strong> Ny variant: {% include links/component-links.html linktext="Karakterbegræsning er tilføjet til inputfelter" %} og {% include links/component-links.html linktext="tekstområder" %}
- Tilføjet manglende padding i venstre side af overflow-menupunkter i {% include links/component-links.html linktext="headerens" %} række 3
- Rettet fejl hvor {% include links/component-links.html linktext="skip-links" %} ikke blev vist, når der var zoomet ca. 400% ind i browseren
- Fjernet text-transform:uppercase på {% include links/internal-links.html linktext="subheading" %}, der ved en fejl var blevet genintroduceret efter version 7.5.3
- <strong class="badge badge-info badge-small mr-2">Change</strong> Negativ letter-spacing er fjernet fra al tekst - vær opmærksom på, at brødtekster og titler kan fylde mere end tidligere
- <strong class="badge badge-info badge-small mr-2">Change</strong> Begge knapper i {% include links/component-links.html linktext="cookiemeddelelse" %} har nu typen {% include links/component-links.html linktext="sekundærknapper" %}
- Flere <a href="https://github.com/detfaellesdesignsystem/dkfds-components/tree/master/src/components" class="icon-link" target="_blank">macroer<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a> har fået mindre ændringer, for eksempel fejlrettelser (dropdowns og tekstområder) eller tilføjelse af (valgfri) properties
- <strong class="badge badge-info badge-small mr-2">Change</strong> Dokumentationens eksempler på <a href="/eksempler/selvbetjeningsloesninger/">selvbetjeningsløsninger</a> og <a href="/eksempler/templates/">templates</a> er opdateret og gjort generiske. Derudover er der foretaget flere mindre rettelser, heriblandt er <a href="/eksempler/patterns/formular/">formularer</a> flyttet ind under <a href="/eksempler/patterns/">patterns</a>, 'sidenavigation' er omdøbt til '{% include links/component-links.html linktext="venstremenu" %}', 'felter' er omdøbt til '{% include links/component-links.html linktext="inputfelter" %}', 'notifikation' er omdøbt til '{% include links/component-links.html linktext="toastbesked" %}', 'skip-link' er omdøbt til '{% include links/component-links.html linktext="gå til sidens indhold" %}' og 'spinner' er omdøbt til '{% include links/component-links.html linktext="loading spinner" %}'. De nye navne har udelukkende betydning for, hvor på sitet der kan findes dokumentation og koden er derfor uændret.

{:#version-8-0-1 .mb-0}
## Version 8.0.1

<div><span class="small-text mt-0 d-block">16-06-2022</span></div>

- Rettet aria-labels i {% include links/component-links.html linktext="datovælgerens" %} tilbage/frem-knapper.
<span class="form-hint mt-0">For mere info, se <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/180" class="icon-link" target="_blank">issue #180 på Github<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>.</span>
- Tilføjet `chevron-double-left` og `chevron-double-right` til {% include links/internal-links.html linktext="ikoner" %}, der manglede efter version 8.0.0.
<span class="form-hint mt-0">For mere info, se <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/177" class="icon-link" target="_blank">issue #177 på Github<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>.</span>
- Opdateret ikonet `arrow-left`, der viste det forkerte ikon, når man indsatte det ved hjælp af klassen.
- Opdateret ikonerne `sort-default` og `sort-table-none`, så de også kan bruges som klasse.
- Opdateret ikonerne `sort-ascending`, `sort-default`, `sort-descending`, `sort-table-ascending`, `sort-table-descending` og `sort-table-none`, så det er muligt at ændre farve på disse, når man anvender {% include links/internal-links.html linktext="ikonsamlingen" %}.

{:#version-8-0-0 .mb-0}
## Version 8.0.0

<div><span class="small-text mt-0 d-block">17-05-2022</span></div>

- Ny komponent: {% include links/component-links.html linktext="Paginering" %}
- Ny komponent: {% include links/component-links.html linktext="Strukturerede lister" %}
- Taget højde for alignment af lange trinnavne i {% include links/component-links.html linktext="trinindikator" %}
- Tilpasset afstande ved {% include links/component-links.html linktext="tjekboks" %} og {% include links/component-links.html linktext="radioknap med skjult indhold" %}
- <strong class="badge badge-info badge-small mr-2">Change</strong> Javascript tilføjet til {% include links/component-links.html linktext="fejlopsummeringskomponenten" %} så links sætter korrekt fokus i felter i Safari.
- {% include links/internal-links.html linktext="`DKFDS.init()` udvidet med scope json parameter, så man kan køre `DKFDS.init()` mere målrettet på siden" %}.
- <strong class="badge badge-info badge-small mr-2">Change</strong> Ændret {% include links/internal-links.html linktext="slet ikonet" %}, da det gamle ikon ikke fungerede i brugertest.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Indført nye {% include links/internal-links.html linktext="datavisualiseringsfarver" %}.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Omdøbt FDS {% include links/internal-links.html linktext="farver" %}
- Erstattet brug af / ved division i scss med math.div
<span class="form-hint mt-0">For mere info, se <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/157" class="icon-link">issue #157 på Github<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>.</span>
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Fjernet javascript på {% include links/component-links.html linktext="detaljekomponenten" %}, da FDS ikke længere understøtter Internet Explorer
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Opdateret javascript kald for komponenter, således at man for visse komponenter skal køre init(). <a href="/kode/komponenter/">Se mere under hver komponent i kodesektionen</a>
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Ændret attributter for {% include links/component-links.html linktext="radioknap med skjult indhold" %}
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Fjernet gamle {% include links/internal-links.html linktext="ikoner" %}
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Tilføjet {% include links/component-links.html linktext="JavaScript til luk knap i beskeder" %}
- Tilføjet {% include links/component-links.html linktext="Modal" %} som kræver handling, så brugeren ikke kan lukke modalen uden at tage stilling til dets indhold. 
- <strong class="badge badge-info badge-small mr-2">Change</strong> Ved luk af {% include links/component-links.html linktext="modal" %} sættes fokus på element, som åbnede modalen
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Luk modal, hvis en ny {% include links/component-links.html linktext="modal" %} åbnes.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Forbedret {% include links/component-links.html linktext="headeren" %} på mobil.
- Vis {% include links/component-links.html linktext="tjekbokse" %} og {% include links/component-links.html linktext="radioknapper" %} ved print.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Større opdatering af <a href="https://github.com/detfaellesdesignsystem/dkfds-components/tree/master/src/components" class="icon-link">macroer<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a> for nemmere vedligehold og brug.
- Vis dage for forrige og næste måned, når de deler uge med aktuelle måned i {% include links/component-links.html linktext="datovælgeren" %}.
- Opdateret breakpoints i {% include links/component-links.html linktext="knapper" %}, så knapperne ikke er helt så brede på mindre skærme.
- Fjernet accordion uden ramme.
- Tilpasset afstande i {% include links/component-links.html linktext="modal" %} på mindre skærme
- Opdateret normalize.css til v8.0.1


- Fjernet styling på {% include links/component-links.html linktext="badges" %}, som gør teksten til store bogstaver. Store bogstaver gav udfordringer med korrekt oplæsning af teksten med skærmlæser.
- Grå baggrundsfarve på {% include links/component-links.html linktext="dropdown" %} i Firefox er ændret til hvid.
- {% include links/component-links.html linktext="Header komponent" %}: Log ud og Log ind knapper i mobilnavigationen er sat til fuld bredde, så knapper præsenteres ens i menuen.
- Lille fejl i border på {% include links/component-links.html linktext="tabeller" %} er fikset.
- Bredde på {% include links/component-links.html linktext="overflow menu" %} ændret til at fylde hele skærmens bredde på små skærme.
- Ændringer i opførelse af {% include links/component-links.html linktext="tooltip" %}, for at sikre teksten kan markeres.
<span class="form-hint mt-0">For mere info, se <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/163" class="icon-link">issue #163 på Github<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>.</span>
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Tilføjet og ændret SASS variabler for bedre vedligehold og tematisering.
- Opdateret højden på knapper med ikoner, så de nu har samme højde som knapper uden ikoner.

{:#version-7-5-3 .mb-0}
## Version 7.5.3

<div><span class="small-text mt-0 d-block">03-12-2021</span></div>

- Fjernet text-transform:uppercase på {% include links/internal-links.html linktext="subheading" %}, så skærmlæsere læser teksten frem for at stave

{:#version-7-5-2 .mb-0}
## Version 7.5.2

<div><span class="small-text mt-0 d-block">25-11-2021</span></div>

- Gjort det muligt at markere tekst i {% include links/component-links.html linktext="knapper" %} for support af hjælpeværktøjer som Adgang for alle.

{:#version-7-5-1 .mb-0}
## Version 7.5.1

<div><span class="small-text mt-0 d-block">18-11-2021</span></div>

- Fikset fejl med placering af årstal i {% include links/component-links.html linktext="datovælger" %} i mobilvisning.
- Rettet fejl i {% include links/component-links.html linktext="datovælgeren" %} der gjorde, at den første dag i måneden ikke blev vist, når den var en søndag.
- Tillader nu dato i {% include links/component-links.html linktext="datovælgeren" %} fra start.

{:#version-7-5-0 .mb-0}
## Version 7.5.0

<div><span class="small-text mt-0 d-block">29-09-2021</span></div>

- {% include links/component-links.html linktext="Valgbare rækker i tabel" %}
- {% include links/component-links.html linktext="Prefix og suffix på felter" %}
- Småtilpasninger i designet på {% include links/component-links.html linktext="modaler" %}
- Opdateret design på {% include links/component-links.html linktext="datovælger" %}
- Tilføjet 72px i bunden af {% include links/component-links.html linktext="footer" %}
- Tilføjet styling og retningslinjer for {% include links/component-links.html linktext="sortering i tabeller" %}
- Tilføjet eksempel og retningslinjer på {% include links/component-links.html linktext="søgning i tabeller" %}
- Tilføjet en tykkere border i bunden af {% include links/component-links.html linktext="knapper" %}
- Opdateret {% include links/component-links.html linktext="retningslinjer for obligatoriske og frivillige felter" %}
- Tilføjet {% include links/internal-links.html linktext="ikoner til sortering i tabel" %}
- Tilføjet variant til {% include links/component-links.html linktext="overflow menu til brug ved sortering" %}
- Ændret ikon i {% include links/component-links.html linktext="detalje komponent" %}

{:#version-7-4-0 .mb-0}
## Version 7.4.0

<div><span class="small-text mt-0 d-block">02-06-2021</span></div>

- Ændringer i {% include links/component-links.html linktext="tooltip komponenten" %} - der er tilføjet delay og pil på tooltip
- Links får nu automatisk sort farve i {% include links/component-links.html linktext="beskeder" %}
- Ny komponent: {% include links/component-links.html linktext="Toggle switch komponent" %}
- Tilføjet status tekst i forbindelse med {% include links/component-links.html linktext="spinner komponenten" %}

{:#version-7-3-0 .mb-0}
## Version 7.3.0

<div><span class="small-text mt-0 d-block">23-04-2021</span></div>

- {% include links/internal-links.html linktext="Ikontaksonomi" %}
- Ny komponent: {% include links/component-links.html linktext="Notifikation (Toast) komponent" %}
- Fjernet unødvendige kald til fontfiler
- Timing issue på datovælger - sæt ikke knappen, hvis den allerede eksisterer
- Generel oprydning i dependencies
<span class="form-hint mt-0">For mere info, se <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/130" class="icon-link">issue #130 på Github<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>.</span>
- Håndtering af situation: Escape funktion på {% include links/component-links.html linktext="overflow menu" %} og {% include links/component-links.html linktext="modaler" %} kolliderer og lukker begge, når en overflow er inde i en modal
<span class="form-hint mt-0">For mere info, se <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/125" class="icon-link">issue #125 på Github<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>.</span>
- {% include links/internal-links.html linktext="Facit streger" %}
- Udvidelse af breakpoint for {% include links/component-links.html linktext="responsiv tabel" %}
<span class="form-hint mt-0">For mere info, se <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/45" class="icon-link">issue #45 på Github<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>.</span>

{:#version-7-2-0 .mb-0}
## Version 7.2.0

<div><span class="small-text mt-0 d-block">11-02-2021</span></div>

- Ændret font i drop down for at fikse bug i Firefox
<span class="form-hint mt-0">For mere info, se <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/102" class="icon-link">issue #102 på Github<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>.</span>
- {% include links/component-links.html linktext="Ny komponent: Datovælger" %}
- Fiks fejl, hvor ol liste bliver vist med bullets i {% include links/component-links.html linktext="accordions" %}
<span class="form-hint mt-0">For mere info, se <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/120" class="icon-link">issue #120 på Github<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>.</span>
- Tilføjet brugervenlige JS fejl, når en komponent ikke er tilføjet korrekt
- Opdateret {% include links/internal-links.html linktext="typografi" %}
- Tilføjet styling af {% include links/internal-links.html linktext="billedtekst (figcaption)" %}
- {% include links/component-links.html linktext="Åbn/luk alle accordions function" %}
- {% include links/component-links.html linktext="Accordion" %} knapper kan nu være i en overskrift
<span class="form-hint mt-0">For mere info, se <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/88" class="icon-link">issue #88 på Github<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>.</span>
- Padding fikset på extracompact tabeller
<span class="form-hint mt-0">For mere info, se <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/113" class="icon-link">issue #113 på Github<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>.</span>

{:#version-7-1-1 .mb-0}
## Version 7.1.1

<div><span class="small-text mt-0 d-block">28-10-2020</span></div>

- Fikset fejl, hvor border ved aktivt menupunkt i {% include links/component-links.html linktext="header" %} hopper ved hover.
<span class="form-hint mt-0">For mere info, se <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/118" class="icon-link">issue #118 på Github<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>.</span>
- Fikset fejl i Internet Explorer, hvor {% include links/component-links.html linktext="feltbredde i tekstfelter" %} er defineret ved antal karakterer bliver ignoreret.
- Luk {% include links/component-links.html linktext="overflow menu" %} i {% include links/component-links.html linktext="header" %} ved klik uden for menuen.
- Tilføjet ARIA attributter i {% include links/component-links.html linktext="trinindikator" %} for bedre tilgængelighed

{:#version-7-1-0 .mb-0}
## Version 7.1.0

- Ny komponent: {% include links/component-links.html linktext="Sprogvælger" %}

{:#version-7-0-0 .mb-0}
## Version 7.0.0

<div><span class="small-text mt-0 d-block">18-08-2020</span></div>

- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Opdateret fonten IBM Plex Sans til version 5.0.0
<span class="form-hint mt-0">Hvis man preloader fonten - hvilket anbefales - så bør man tjekke om stien til fonten skal ændres, da mappestrukturen under fonts er ændret i dkfds</span>
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Ændret attributter på {% include links/component-links.html linktext="tjekboks med collapse funktion" %}, så HTML nu er valid.
- Tilføjet ny {% include links/component-links.html linktext="modal komponent" %}
- Fikset fejl med fokus i header i Firefox
- Tilføjet maks. bredde på tooltip
- Fjernet dokumentation for brug af dkfds-plugins, da det fremover ikke vil blive vedligeholdt
<span class="form-hint mt-0">Se mere under {% include links/internal-links.html linktext="Plugins i Kode sektionen" %}</span>
- Fikset fejl, hvor valgt radioknap ikke blev vist ved print i Internet Explorer og Edge
<span class="form-hint mt-0">For mere info, se <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/112" class="icon-link">issue #112 på Github<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>.</span>

{:#version-6-1-1 .mb-0}
## Version 6.1.1

<div><span class="small-text mt-0 d-block">19-05-2020</span></div>

- Ændret lille knap til normal knap i standard header grundet usability issues i mobilvisning

{:#version-6-1-0 .mb-0}
## Version 6.1.0

<div><span class="small-text mt-0 d-block">14-05-2020</span></div>

- Ny komponent: {% include links/component-links.html linktext="Brødkrumme" %}
- Mulighed for en mere kompakt {% include links/component-links.html linktext="header" %} med brug af en {% include links/component-links.html linktext="lille knap" %}
- Linjehøjden for {% include links/internal-links.html linktext="lille brødtekst" %} er ændret til 20px
- Tilføjet dokumentation og eksempler på {% include links/component-links.html linktext="fejlmeddelelser" %} og {% include links/component-links.html linktext="fejlopsummeringer" %}.
- {% include links/component-links.html linktext="Tilpasset alignment på venstremenu" %}

{:#version-6-0-1 .mb-0}
## Version 6.0.1

<div><span class="small-text mt-0 d-block">19-03-2020</span></div>

- Fjernet inkludering af IBM Plex Sans definitionen i dkfds-tippy-theme.standalone.css.
<span class="form-hint mt-0">For mere info, se <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/104" class="icon-link">issue #104 på Github<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>.</span>
- Understøttelse af Tippy.js v6.1.0
<span class="form-hint mt-0">For mere info, se <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/105" class="icon-link">issue #105 på Github<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>.</span>
- Tilpasset CSS til faneblade, så der ikke længere kommer fejl ved import af dkfds scss i angular.

{:#version-6-0-0 .mb-0}
## Version 6.0.0

<div><span class="small-text mt-0 d-block">10-03-2020</span></div>

- {% include links/component-links.html linktext="Detalje komponent" %} tilføjet.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Skjul/vis indhold med knap er fjernet.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> {% include links/component-links.html linktext="cookiemeddelelse" %} opdateret i udseende og HTML.
- Rettet fejl med border i tabel.
<span class="form-hint mt-0">For mere info, se <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/96" class="icon-link">issue #96 på Github<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>.</span>
- Tilføjet mulighed for styling af {% include links/internal-links.html linktext="links i overskrifter" %}.
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> <a href="/komponenter/faneblade/" title="Læs mere om faneblade">Faneblade</a> er ændret i HTML og JavaScript.
- Ændret aktive farve på undermenupunkt i {% include links/component-links.html linktext="venstremenu" %}
- Tilføjet retningslinjer for {% include links/component-links.html linktext="funktionslink" %}, {% include links/component-links.html linktext="tilbage-link" %} og {% include links/component-links.html linktext="cookiemeddelelse" %}.
- <strong class="badge badge-info badge-small mr-2">Change</strong> Tilføjet korrekte ARIA attributer på <a href="/kode/komponenter/venstremenu/" title="Se koden til venstremenuen">venstremenuen</a>, <a href="/kode/komponenter/header/" title="Se koden til mobilmenu og headermenu">mobilmenu og headermenuen</a>.
- Fikset fejl på {% include links/component-links.html linktext="responsiv trinindikator" %}.
<span class="form-hint mt-0">For mere info, se <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/94" class="icon-link">issue #94 på Github<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>.</span>

{:#version-5-3-0 .mb-0}
## Version 5.3.0

<div><span class="small-text mt-0 d-block">16-12-2019</span></div>

- {% include links/component-links.html linktext="Tilbage link" %} har fået større linje højde.
- Mere padding i toppen af {% include links/component-links.html linktext="navbar indeholdende funktionslink og overflow menu i header" %}.
- Ændret udseende af {% include links/component-links.html linktext="cookiemeddelelse komponenten" %}.
- {% include links/internal-links.html linktext="Lister" %} har fået nyt udtryk.
- Ændret farve og tykkelse på aktivt menupunkt i {% include links/component-links.html linktext="header" %} samt {% include links/component-links.html linktext="venstremenuen" %}.
- Tilføjet mulighed for {% include links/component-links.html linktext="hjælpetekst på radioknap" %}.
- Tilpasset fokusramme om {% include links/component-links.html linktext="funktions link" %}.
- Tilpasset retningslinjer for {% include links/component-links.html linktext="Skjul/vis med radioknapper" %}.
- Opdateret {% include links/internal-links.html linktext="SVG filer" %}, samt tilføjet link til {% include links/internal-links.html linktext="SVG filer" %}.

{:#version-5-2-0 .mb-0}
## Version 5.2.0

<div><span class="small-text mt-0 d-block">27-11-2019</span></div>

- <strong class="badge badge-info badge-small mr-2">Change</strong> Ændret accordion aria-multiselectable så man i stedet kan bruge klassen accordion-multiselectable
<span class="form-hint mt-0">Ændringen er fortsat bagudkompatibel, men den tidligere implementering anbefales ikke, da det ikke var valid HTML.</span>
- Teksten i {% include links/component-links.html linktext="cards med samme højde" %} placeres nu korrekt
- Tilføjet mere afstand mellem links i footer
- Overskriftstørrelser på mobil er blevet opdateret
- Tilpasset farve på informationstekst på komponenterne {% include links/component-links.html linktext="venstremenu med ekstra information" %} og {% include links/component-links.html linktext="trinindikator med ekstra information" %}
- Tilføjet eksempel på tabel i Datatable
<span class="form-hint mt-0">Efterspurgt i <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/55" class="icon-link">Github issue #55<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a></span>
- Opdateret {% include links/internal-links.html linktext="Eksempel på implementering i Angular" %}

{:#version-5-1-0 .mb-0}
## Version 5.1.0

<div><span class="small-text mt-0 d-block">12-11-2019</span></div>

- {% include links/component-links.html linktext="Cookiemeddelelse komponent" %} er tilføjet i kernen.
- {% include links/component-links.html linktext="Tilbage link" %} er tilføjet i kernen.
<span class="form-hint mt-0">Bemærk, at {% include links/component-links.html linktext="Tilbage link" %} anbefales frem for {% include links/component-links.html linktext="Tilbage knap" %}.</span>
- Fokuskant tilføjet på #main-content ved fokus fra {% include links/component-links.html linktext="Skip link" %}.
- {% include links/component-links.html linktext="Statusbadges" %} er tilføjet i kernen.
- Fejl i overflow menu brugt i header fikset.
<span class="form-hint mt-0">Se mere om fejlen på <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/75" class="icon-link">Github issue #75<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>.</span>
- Fikset print af modal fra iPhone.
<span class="form-hint mt-0">Se mere om fejlen på <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/67" class="icon-link">Github issue #67<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>.</span>
- Opdateret beskrivelse af implementering af DKFDS under {% include links/internal-links.html linktext="Til udviklere" %}.
<span class="form-hint mt-0">Bemærk, at neutralt tema kun bør benyttes som skabelon til et nyt tema, og ikke som et enkeltstående tema. Læs mere om {% include links/internal-links.html linktext="temahåndtering" %}.</span>

{:#version-5-0-0 .mb-0}
## Version 5.0.0

<div><span class="small-text mt-0 d-block">22-10-2019</span></div>

- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> JavaScript i kernen er skrevet om. Man skal initiere javascript med funktionen `DKFDS.init()` på hver side.
<span class="form-hint mt-0">For mere info, se <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/74" class="icon-link">issue #74 på Github<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a> eller vores afsnit om {% include links/internal-links.html linktext="implementering af DKFDS til udviklere" %}.</span>
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> JavaScript i DKFDS kernen bliver nu udstillet til brug i projekter.
<span class="form-hint mt-0">For mere info, se <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/74" class="icon-link">issue #74 på Github<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>.</span>
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> {% include links/component-links.html linktext="Venstremenuen" %} har fået nyt design.
<span class="form-hint mt-0">HTML er ændret - se korrekt struktur under {% include links/component-links.html linktext="venstremenu-komponenten" %}.</span>
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> {% include links/component-links.html linktext="Faneblade" %} er blevet redefineret.
<span class="form-hint mt-0">Hele komponenten er blevet redefineret - se den nye komponent under {% include links/component-links.html linktext="faneblade" %}.</span>
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Den gamle tooltip (tippy) komponent er blevet flyttet til plugins.
<span class="form-hint mt-0">Bemærk, at komponenten ikke længere er en del af kernen, men at der er kommet en erstatning i kernen.</span>
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Modal-komponenten er blevet flyttet til plugins.
<span class="form-hint mt-0">Bemærk, at komponenten ikke længere er en del af kernen.</span>
- Ny og simpel {% include links/component-links.html linktext="tooltip komponenten" %} er tilføjet til kernen - Komponenten er ikke længere baseret på tredjeparts bibliotek.
- Der er tilføjet events til komponenter. Man sætte eventlisteners på bestemte events - Fx når en accordion åbner og lukker. For mere info, se implementeringsafsnittet under hver <a href="/komponenter/">komponent</a>. 
- Information om {% include links/internal-links.html linktext="krav til selvbetjeningsløsninger" %} er nu tilføjet til designsystem.dk. 
- Tabellerne følger nu {% include links/internal-links.html linktext="8point grid" %}

{:#version-4-4-0 .mb-0}
## Version 4.4.0

<div><span class="small-text mt-0 d-block">20-08-2019</span></div>

- <strong class="badge badge-info badge-small mr-2">Change</strong> Tilpasset CSS til print
- Farven på valgt menupunkt i venstremenu er ændret til #1A1A1A
- Ændret udseende på tjekboks og radioknap ved print
- Fikset fejl med border på den sidste række i en tabel
- Fikset fejl med modal ved print
- Tilpasset retningslinjer for ikoner i forhold til tilgængelighed

{:#version-4-3-0 .mb-0}
## Version 4.3.0

<div><span class="small-text mt-0 d-block">04-07-2019</span></div>

- Fjernet farve på small-text mixin.
- Tilpasset positionering af ikon på knapper.
- Fikset fejl i input felter, hvor specialtegn (Å, Ö, Ä etc.) ikke blev vist korrekt.
- Tilføjet eksempel på luk knap i {% include links/component-links.html linktext="Beskeder" %}.
- <strong class="badge badge-info badge-small mr-2">Change</strong> Tilføjet mulighed for at {% include links/component-links.html linktext="positionere action knapper i cards" %} i bunden.
- Fikset fejl ved print af eksempelløsninger i Firefox - tilføjet yderligere print CSS.

{:#version-4-2-0 .mb-0}
## Version 4.2.0

<div><span class="small-text mt-0 d-block">20-06-2019</span></div>

- Fjernet margin-top på h1.
- <strong class="badge badge-info badge-small mr-2">Change</strong> Fjernet form-group div fra li i radioknap og tjekboks liste (Løser udfordringen med at JAWS skærmlæseren læser skrivebeskyttet ved hver tjekboks eller radioknap).
- Fikset styling i niveau 4 i sidemenuen på mobil.
- Fikset tilgængelighed på responsiv trinindikator - aria-hidden opdateres nu automatisk alt efter status på komponenten.
- Responsiv tabel er  nu sat til display:block på små skærme således at skærmlæsere ikke tror det er en tom tabel.

{:#version-4-1-1 .mb-0}
## Version 4.1.1

<div><span class="small-text mt-0 d-block">24-05-2019</span></div>

- Fjernet primærfarven på tekst i aktivt menupunkt i header.
- Tilføjet klassen `inline-svg`, som kan bruges på ikoner, der skal fremgå i tekst, således at de matcher teksthøjden.
- Ændret afstand fra label til read-only felt.
- Ændret JavaScript, der håndterer regex maske på dato felt, således at man nu kan bruge copy/paste igen.
    - Fejlhåndtering omkring ikke gyldige karakterer indsat i feltet med copy/paste bør håndteres i projektet selv.
- Tilføjet sektion omkring <a href="/eksempler/patterns/formular/">formularstruktur</a>.

{:#version-4-1-0 .mb-0}
## Version 4.1.0

<div><span class="small-text mt-0 d-block">26-04-2019</span></div>

- <strong class="badge badge-info badge-small mr-2">Change</strong> Fjernet fast højde på tekstområde (textarea) - man kan/bør nu sætte højden med rows attributten.
- Fjernet tekstmarkøren på et read only felt i Internet Explorer.
- Tilføjet eksempler på advarsel, når man forlader siden i eksempelløsningerne.
- Tilføjet afstand af tags, når de fylder flere linjer.
- Fjernet primærfarve på teksten i faneblade ved hover.
- Fikset fokusramme på faneblade.
- Fikset fejl i modal, hvor overskriften blev overlappet af luk knappen.
- <strong class="badge badge-info badge-small mr-2">Change</strong> Log ud skal nu hedde Log af.

{:#version-4-0-1 .mb-0}
## Version 4.0.1

<div><span class="small-text mt-0 d-block">08-04-2019</span></div>

- Opdateret skip link udseende
- Ændret styling, så a-element i solution-header nu kan være et h1-element
- Fikset readonly fejl i Internet Explorer
- Tilpasset footer margin og padding
- Tilføjet print display css klasser (Fx d-print-none)
- Tilføjet logo definition
- Tooltip skriftstørrelse ændret fra 13 til 16px
- Fikset hover farve på icon knap (button-unstyled)

{:#version-4-0-0 .mb-0}
## Version 4.0.0

<div><span class="small-text mt-0 d-block">01-04-2019</span></div>

- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Fjernet højde på cards
- Tilføjet klassen card-align-height, så cards kan have ens højde på samme række.
- Fikset fokus border på faneblade

<div class="alert alert-info" role="alert">
    <div class="alert-body">
        <strong class="alert-heading">Semantisk versionering</strong>
        <p class="alert-text">Fra denne release 4.0.0 og fremover vil FDS gøre brug af semantisk versionering.</p>
    </div>
</div>


{:#version-3-0-3 .mb-0}
## Version 3.0.3

<div><span class="small-text mt-0 d-block">27-03-2019</span></div>

- Fjernet eksempler fra projekt
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Ændret macros, så de er mere dynamiske, så flere projekter kan gøre brug af dem
- Fikset fejl med fokus på overflow menu i Firefox
- Fikset fejl med ol liste i flere niveauer
- Fjernet gammel JavaScript, som var årsag til fejl ved loading af javascript filen
- Ændret HR kant farve
- Ændret kant farve på tertiær knap
- Tilføjet afstand på tags og knapper på lille skærm
- Opdateret footers
- Tilføjet JavaScript der håndterer lukning af overflow menuer, når man åbner en ny

{:#version-3-0-2 .mb-0}
## Version 3.0.2

<div><span class="small-text mt-0 d-block">19-02-2019</span></div>

- Tilføjet info om fiks af Microsoft Edge bug i navigation, hvor bullets blev vist trods styling
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Defineret tilbage-knap
- Tilføjet readonly eksempel i input felter
- Ændret Skjul/Vis eksempel ved brug af radio knap for at løse tilgængelighedsproblemer
- Fikset fejl på dropdown i Internet Explorer, hvor pilen blev vist to gange
- Nederste border i header ændret til `$outer-border`
- Tilføjet klassen .nobullet-list, som kan bruges ved liste af links
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Flyttet Pikaday datovælger plugin til Plugins-projektet
- Tilføjet .break-word klasse til brug i tabeller, hvor man bruger lange filnavne i kolonnerne
- Ændret disabled link farve
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Fjernet $color-link-active farven, da den ikke længere bliver brugt
- Opdateret styling og definition af eksterne links
- Ændret skrifttype tykkelse på søgefelts knappen

{:#version-3-0-1 .mb-0}
## Version 3.0.1

<div><span class="small-text mt-0 d-block">18-01-2019</span></div>
<h3 class="h4">Smårettelser til CSS og ikoner</h3>

- `small-text` og `small-tag` klasserne fik ændret font-size fra 13px til 14px
- Ændrede level 2 og 3 i venstremenu på mobil
- Rettede ikonerne help og `close-circle`

<h3 class="h4">Smårettelser til eksempler</h3>

- Typesetting blev delt i to: Linjeafstand og Linjelængde.
- Fejl i Popover-eksemplet blev rettet.
- Neutralt logo til header-eksempler blev opdateret.

{:#version-3-0-0 .mb-0}
## Version 3.0.0

<div><span class="small-text mt-0 d-block">14-01-2019</span></div>

- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Refaktoreret fra 'dkwds' til 'dkfds'
<span class="form-hint mt-0">Alt kode er blevet refaktoreret så den nu benytter forkortelsen <a href="https://www.npmjs.com/package/dkfds">'dkfds'</a> i stedet for 'dkwds'. </span>
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Bourbon er fjernet
<span class="form-hint mt-0">Biblioteket 'Bourbon' er ikke længere en del af designsystemet. Det vil derfor ikke længere være muligt at benytte sig af deres hjælpeklasser og funktioner. </span>
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Nyt gridsystem
<span class="form-hint mt-0"> USWDS' gamle float-grid (NEAT) og Bootstraps grid er fjernet. I stedet for er USWDS' nye grid inkluderet. Der er lavet tilpasninger af dette grid så det køre på de samme variable og klassenavne som i den forrige version af FDS. Der skal derfor ikke laves nogen tilpasninger for at få dette grid inkluderet.</span>
- <strong class="badge badge-warning badge-small mr-2">Breaking change</strong> Plugins project
<span class="form-hint mt-0">Datatables og SelectWoo er ikke længere en del af komponent-biblioteket. Der er derimod oprettet et nyt projekt (dkfds-plugins) hvor disse nu lever.</span>
- Nye klasser
<span class="form-hint mt-0"> De følgende klasser er blev omdøbt:</span>
    - `input-success` er omdøbt til `form-success`
    - `input-error-message` er omdøbt til  `form-error-message`
- Accordion
<span class="form-hint mt-0">Accordions plus og minus ikon er flyttet til starten af accordion-knappen</span>
- Fokus farve
<span class="form-hint mt-0">Fokus farven er ændret fra den gule farve (#febb30) til en grå farve (#747474). Farven er blevet ændret fordi den gule farve ikke overholder WCAG 2.1. Hvis man ønsker en anden fokus farve kan variablen `$color-focus` overskrives.</span>
- Radioknapper og checkbokse
    - Styling af radio knapper kræver nu denne klasse på selve `input[type=radio]`: "form-radio".
    - Styling af tjekbokse kræver nu denne klasse på selve `input[type=checkbox]`: "form-check".

{:#version-2-1-2 .mb-0}
## Version 2.1.2

<div><span class="small-text mt-0 d-block">16-10-2018</span></div>
<ul>
<li>
  Nye skriftstørrelser til H1-H6
  <ul class="form-hint">
    <li>H1 går fra 36px til 40px.</li>
    <li>H2 går fra 27px til 30px.</li>
    <li>H3 er stadig 24px.</li>
    <li>H4 går fra 22px til 20px;</li>
    <li>H5 går fra 20px til 16px;</li>
    <li>H6 går fra 16px til 13px;</li>
    <li>Display-1 går fra 120px til 80px</li>
    <li>Display-2 går fra 60px til 32px;</li>
  </ul>
  <p class="form-hint mt-0">Hvis du ønsker at beholde det samme visuelle udtryk skal man gå fra h5 til h4.</p>
</li>
<li class="mt-4">
  Ny max-width styling
  <p class="form-hint mt-0">Klassen '.content' er fjernet. Max-width style er nu kodet direkte til p, font-lead etc.</p>
</li>
<li class="mt-4">
  Navigation i bunden af eksempelsiderne:
  <p class="form-hint mt-0">"Breadcrumb" er omdøbt til "page-navigation". HTML ser nu således ud:</p>
  <div class="code-highlight">
    <code>
      &lt;nav class="page-navigation"&gt; <br>
      &nbsp;&nbsp; &lt;a href="#" class="button button-primary"&gt;Næste&lt;/a&gt;<br>
      &nbsp;&nbsp; &lt;a href="#" class="button button-ghost"&gt;Tilbage&lt;/a&gt;<br>
      &lt;/nav&gt;
    </code>
  </div>
</li>
</ul>