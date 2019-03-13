---
permalink: /omdesignsystemet/gennemgang/
layout: styleguide
title: Gennemgang af designsystemet
category: Om_designsystemet_category
description: Gennemgang af designsystemet for bedre forståelse af brugen og opbygningen af projektet. 
subnav:
- text: Frontend arkitektur
  href: '#frontend-arkitektur'
- text: Tilgængelighed
  href: '#tilgaengelighed'
- text: Layout
  href: '#layout'
- text: Font
  href: '#font'
- text: Udvidelser
  href: '#udvidelser'
- text: Performance
  href: '#performance'
- text: Koden
  href: '#koden'
- text: Versioner og releases
  href: '#versioner'
---

<article>
    <section>
        <h2 id="frontend-arkitektur">Frontend arkitektur</h2>
        <p>Det Fælles Designsystem er en simpel samling af grundlæggende funktioner og design, der skaber et solidt grundlag for udviklingen af selvbetjeningsløsninger på borger.dk og Virk.</p>
        <p>Designsystemets arkitektur af brugergrænseflade bygger på princippet om en minimal, modulær og skalerbar opbygning, som kan forgrene sig yderligere i takt med øget behov.</p>
        <p>I takt med at US Web Design System og Gov.uk bliver udvidet og forbedret, vil disse ændringer af hensyn til integriteten af designsystemet blive gennemgået og vurderet af en teknisk redaktion, før de bliver implementeret.</p>
        <figure>
            <img src="{{ site.baseurl }}/img/descriptionimages/faa.png" width="60%" title="Det Fælles Designsystems frontend arkitektur" alt="Grafik der viser Det Fælles Designsystems frontend arkitektur">
            <figcaption>Det Fælles Designsystems frontend arkitektur</figcaption>
        </figure>
        <h3>Komponenterne i Det Fælles Designsystem</h3>
        <div class="table--responsive-scroll">
            <table class="table table--zebra">
                <thead>
                    <tr>
                        <th>Kerne</th>
                        <th>DKFDS</th>
                        <th>Integreret komponent eller udvidelse</th>
                        <th>Udgangspunkt fra USWDS</th>
                        <th>Udgangspunkt fra GOV.UK</th>
                        <th>Andet udgangspunkt for integreret udvidelse</th>
                        <th>Anbefalet udvidelse</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Ja</td>
                        <td><a href="/dkfds-docs/design/utility/">Hjælpeklasser (utilities)</a></td>
                        <td></td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                    </tr>
                    <tr>
                        <td>Ja</td>
                        <td><a href="/dkfds-docs/design/typography/">Typografi</a></td>
                        <td></td>
                        <td><a href="https://designsystem.digital.gov/components/typography/" class="icon-link">Typography<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                    </tr>
                    <tr>
                        <td>Ja</td>
                        <td><a href="/dkfds-docs/design/farver/">Farver</a></td>
                        <td>Ja</td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                    </tr>
                    <tr>
                        <td>Ja</td>
                        <td><a href="/dkfds-docs/design/ikoner/">Ikoner</a></td>
                        <td>Ja</td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                        <td><a href="https://materialdesignicons.com/" class="icon-link">Material Design Icons<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></td>
                        <td><a href=""></a></td>
                    </tr>
                    <tr>
                        <td>Ja</td>
                        <td><a href="/dkfds-docs/design/kanter/">Hjørner, streger og skygger</a></td>
                        <td></td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                    </tr>
                    <tr>
                        <td>Ja</td>
                        <td><a href="/dkfds-docs/design/grid/">Grid</a></td>
                        <td></td>
                        <td><a href="https://v2.designsystem.digital.gov/utilities/layout-grid/" class="icon-link">Layout Grid<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                    </tr>
                    <tr>
                        <td>Ja</td>
                        <td><a href="/dkfds-docs/komponenter/buttons/">Knapper</a></td>
                        <td></td>
                        <td><a href="https://designsystem.digital.gov/components/buttons/" class="icon-link">Buttons<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                    </tr>
                    <tr>
                        <td>Ja</td>
                        <td><a href="/dkfds-docs/komponenter/tags/">Tags</a></td>
                        <td>Ja</td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                        <td>Ukendt</td>
                        <td><a href=""></a></td>
                    </tr>
                    <tr>
                        <td>Ja</td>
                        <td><a href="/dkfds-docs/komponenter/accordions/">Accordions</a></td>
                        <td></td>
                        <td><a href="https://designsystem.digital.gov/components/accordions/" class="icon-link">Accordions<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                    </tr>
                    <tr>
                        <td>Ja</td>
                        <td><a href="/dkfds-docs/komponenter/beskeder/">Beskeder</a></td>
                        <td></td>
                        <td><a href="https://designsystem.digital.gov/components/alerts/" class="icon-link">Alerts<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                    </tr>
                    <tr>
                        <td>Ja</td>
                        <td><a href="/dkfds-docs/komponenter/cards/">Cards</a></td>
                        <td></td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                        <td><a href="https://www.lightningdesignsystem.com/components/cards/" class="icon-link">Lightning Design System<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></td>
                    </tr>
                    <tr>
                        <td>Ja</td>
                        <td><a href="/dkfds-docs/komponenter/form-controls/">Formular elementer</a></td>
                        <td></td>
                        <td><a href="https://designsystem.digital.gov/components/form-controls/" class="icon-link">Form controls<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></td>
                        <td><a href="https://design-system.service.gov.uk/components/radios/" class="icon-link">Radio<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a><br>
                            <a href="https://design-system.service.gov.uk/components/checkboxes/" class="icon-link">Checkbox<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a><br>
                            <a href="https://design-system.service.gov.uk/components/date-input/" class="icon-link">Date input<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a><br>
                            <a href="https://design-system.service.gov.uk/components/file-upload/" class="icon-link">File upload<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a><br>
                        </td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                    </tr>
                    <tr>
                        <td>Nej</td>
                        <td><a href="/dkfds-docs/udvidelser/selectwoo-multiselect/">Multiselect dropdown</a></td>
                        <td></td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                        <td><a href="https://github.com/woocommerce/selectWoo" class="icon-link">SelectWoo<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></td>
                    </tr>
                    <tr>
                        <td>Ja</td>
                        <td><a href="/dkfds-docs/komponenter/search/">Søgefelt</a></td>
                        <td></td>
                        <td><a href="https://designsystem.digital.gov/components/search-bar/" class="icon-link">Search bar<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                    </tr>
                    <tr>
                        <td>Ja</td>
                        <td><a href="/dkfds-docs/komponenter/badges/">Badges</a></td>
                        <td></td>
                        <td><a href="https://designsystem.digital.gov/components/labels/" class="icon-link">Labels<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></td>
                        <td><a href="https://design-system.service.gov.uk/components/tag/" class="icon-link">Tags<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a><br>
                            <a href="https://design-system.service.gov.uk/components/phase-banner/" class="icon-link">Phase banner<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a>
                        </td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                    </tr>
                    <tr>
                        <td>Ja</td>
                        <td><a href="/dkfds-docs/komponenter/tables/">Tabeller</a></td>
                        <td></td>
                        <td><a href="https://designsystem.digital.gov/components/tables/" class="icon-link">Tables<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                    </tr>
                    <tr>
                        <td>Nej</td>
                        <td><a href="/dkfds-docs/udvidelser/datatables/">Avancerede tabeller</a></td>
                        <td></td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                        <td><a href="https://datatables.net/" class="icon-link">Data Tables<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></td>
                    </tr>
                    <tr>
                        <td>Ja</td>
                        <td><a href="/dkfds-docs/komponenter/trinindikatorer/">Trinindikatorer</a></td>
                        <td>Ja</td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                    </tr>
                    <tr>
                        <td>Ja</td>
                        <td><a href="/dkfds-docs/komponenter/sidenav/">Sidenavigation</a></td>
                        <td></td>
                        <td><a href="https://designsystem.digital.gov/components/sidenav/" class="icon-link">Sidenavigation<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                    </tr>
                    <tr>
                        <td>Ja</td>
                        <td><a href="/dkfds-docs/komponenter/tabnav/">Faneblade</a></td>
                        <td></td>
                        <td><a href="https://designsystem.digital.gov/components/headers/" class="icon-link">Headers<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                    </tr>
                    <tr>
                        <td>Ja</td>
                        <td><a href="/dkfds-docs/komponenter/spinner/">Spinner</a></td>
                        <td>Ja</td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                        <td><a href="https://projects.lukehaas.me/css-loaders/" class="icon-link">CSS Loaders<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></td>
                    </tr>
                    <tr>
                        <td>Ja</td>
                        <td><a href="/dkfds-docs/komponenter/overflowmenu/">Overflow menu</a></td>
                        <td>Ja</td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                        <td><a href="http://www.carbondesignsystem.com/components/overflow-menu/code" class="icon-link">Carbon Design System<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></td>
                    </tr>
                    <tr>
                        <td>Nej</td>
                        <td><a href="/dkfds-docs/komponenter/modals/">Modalvinduer</a></td>
                        <td></td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                        <td><a href="https://micromodal.now.sh/" class="icon-link">MicroModal<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></td>
                    </tr>
                    <tr>
                        <td>Nej</td>
                        <td><a href="/dkfds-docs/komponenter/tooltip/">Tooltip og popover</a></td>
                        <td></td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                        <td><a href="https://atomiks.github.io/tippyjs/" class="icon-link">Tippy.js<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></td>
                    </tr>
                    <tr>
                        <td>Ja</td>
                        <td><a href="/dkfds-docs/komponenter/collapse/">Skjul og vis (Collapse)</a></td>
                        <td></td>
                        <td><a href=""></a></td>
                        <td><a href="https://design-system.service.gov.uk/components/radios/" class="icon-link">Radios<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                    </tr>
                    <tr>
                        <td>Ja</td>
                        <td><a href="/dkfds-docs/komponenter/headers/">Headers</a></td>
                        <td></td>
                        <td></td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                    </tr>
                    <tr>
                        <td>Ja</td>
                        <td><a href="/dkfds-docs/komponenter/footers/">Footers</a></td>
                        <td>Ja</td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3>Hvad mener vi med minimal?</h3>
        <p>Med minimal mener vi, at designsystemets kompleksitet og funktioner er holdt på et minimum.</p>
        <p>En sides kompleksitet og komponentvalg afgør hvilke ressourcer, der er behov for.</p>
        <h3>Hvad mener vi med modulær?</h3>
        <p>Med modulær mener vi, at opbygningen af designsystemet består af en kerne (dkfds_core.css), der danner det grundlæggende fundament for brugergrænsefladen. Kernen udtaler sig udelukkende om layout, typografi, farver og grundlæggende funktioner. </p>
        <p>Kernen indlæses på alle hjemmesider, der anvender designsystemet – uanset om løsningen er udviklet til borger.dk eller Virk.</p>
        <p>Udover kernen kan der tilføjes fx myndighedsspecifik styling og diverse funktionsudvidelser. </p>
        <h3>Hvad mener vi med skalerbar?</h3>
        <p>Med skalerbar mener vi, at designsystemet løbende kan skaleres i takt med nye udvidelser.</p>
        <p>Designsystemet er således konstrueret omkring det modulære princip, der gennem af- og tilkobling af udvidelser muliggør en løbende skalering af de tilbudte funktioner.</p>
        <p>Selvbetjeningsløsninger kan fx have et interaktionsbehov (behov for interaktion med brugerne), der ikke bliver understøttet af designsystemet. De kan i stedet blive udviklet som udvidelser, som du kan til- eller afkoble efter behov. </p>
        <h3>Borger og Virk.dk</h3>
        <p>For at opnå den ønskede myndighedsbranding fra borger.dk eller Virk på dokumentationssitet skal du sørge for at indlæse enten dkfds_borger.css eller dkfds_virk.css parallelt med dkfds_core.css.</p>
        <p>Hver af de to CSS-filer tilføjer myndighedens brand-styling, dvs. logo og styling, der skaber myndighedens genkendelighed.</p>
    </section>
    <section>
        <h2 id="tilgaengelighed">Tilgængelighed</h2>
        <p>Selvbetjeningsløsninger og alle andre offentlige hjemmesider skal overholde den danske lovgivning omkring tilgængelighed på WCAG 2.1 (2019) niveau AA. Du skal derfor teste alle selvbetjeningsløsninger og deres funktioner op imod disse krav, som ikke blot øger tilgængeligheden for brugere med særlige behov, men for alle brugere.</p>
        <p>Designsystemet lever op til lovkravene om at understøtte WCAG 2.1 (2019) på AA niveau.</p>
        <h3 class="h5">Læs mere om webtilgængelighed</h3>
        <ul class="nobullet-list">
            <li>
                <a href="https://digst.dk/digital-service/webtilgaengelighed/" class="icon-link">Webtilgængelighed<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a>
            </li>
            <li>
                <a href="https://www.w3.org/TR/WCAG21/" class="icon-link">Web Content Accessibility Guidelines (WCAG) 2.1<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a>
            </li>
            <li>
                <a href="https://www.w3.org/WAI/WCAG21/quickref/" class="icon-link">How to Meet WCAG 2 (Quick Reference)<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a>
            </li>
        </ul>
    </section>
    <section>
        <h2 id="layout">Layout</h2>
        <p>Det Fælles Designsystem ønsker at hjælpe dig med at skabe  en god oplevelse for dine brugere: Når de bruger din selvbetjeningsløsning skal de opleve et visuelt og funktionelt design og layout, der er neutralt, simpelt og fleksibelt.</p>
        <h3>12 kolonner (horisontalt)</h3>
        <p>Det Fælles Designsystem baserer sit responsive layout på en opdeling af siden i 12 lige bredde kolonner med 24 px afstand mellem hver kolonne. Det giver ro, overskuelighed og forudsigelighed, når man placerer sidens komponenter indenfor et grid og får en side og dens søskendesider til at fremtræde sammenhængende. Det har positiv betydning for billedstørrelser og andre elementer.</p>
        <p>I tablet- og mobilvisninger folder layoutet sammen til respektivt 8- og 4-grid. På den måde følges proportionerne ad fra størst til mindst.</p> 
        <h3>Responsivt med break points</h3>
        <p>Det Fælles Designsystem er responsivt og tilpasser sig således automatisk det tilgængelige vinduesareal.</p>
        <p>Sidens break points – de værdier, hvorefter siden automatisk tilpasser sig arealet – er:</p>
        <ul>
            <li>Desktop/stor skærm: 1200px</li>
            <li>Desktop/middel skærm: 992px</li>
            <li>Tablet: 768px</li>
            <li>Mobil: 480px</li>
        </ul>
        <figure>
            <img src="{{ site.baseurl }}/img/descriptionimages/dfd-grid.png" width="100%" alt="Grafik der viser Det Fælles Designsystems grid-layout" title="Det Fælles Designsystems grid-layout">
            <figcaption>Det Fælles Designsystems grid-layout fra mobil til desktop</figcaption>
        </figure>
        <h3>Typiske grid-layouts</h3>
        <p>Du kan kombinere de 12 kolonner og flette dem sammen, så du ender med layout varianter, der fx består af 3/9, 4/8, 4/4/4 osv. Alle sider bygger på den måde på det samme fundament, som bidrager til at skabe ro og overblik.</p>
        <figure>
            <img src="{{ site.baseurl }}/img/descriptionimages/grid-inddelinger.jpg" width="25%" alt="Grafik der viser Det Fælles Designsystems grid-inddelinger" title="">
            <img src="{{ site.baseurl }}/img/descriptionimages/grid-inddelinger-artikel.jpg" width="25%" alt="Grafik der viser Det Fælles Designsystems grid-inddelinger" title="">
            <img src="{{ site.baseurl }}/img/descriptionimages/grid-inddelinger-nav1.jpg" width="25%" alt="Grafik der viser Det Fælles Designsystems grid-inddelinger" title="">
            <img src="{{ site.baseurl }}/img/descriptionimages/grid-inddelinger-nav2.jpg" width="25%" alt="Grafik der viser Det Fælles Designsystems grid-inddelinger" title="">
            <img src="{{ site.baseurl }}/img/descriptionimages/grid-inddelinger-search.jpg" width="25%" alt="Grafik der viser Det Fælles Designsystems grid-inddelinger" title="">
            <figcaption>Ovenstående er eksempler på mulige kombinationer af kolonner inden for Det Fælles Designsystems 12-grid layout.</figcaption>
        </figure>
        <h3>Baseline grid (8px vertikalt)</h3>
        <p>I designsystemet går alle vertikale dimensioner og afstande op med en faktor 8. Gennem gentagelsen af værdier opstår der en ro og balance på tværs af det visuelle layout og mellem sidens lodrette elementer.</p>
        <h4 class="h5">Læs mere om 8pt grid</h4>
        <ul class="nobullet-list">
            <li><a href="https://builttoadapt.io/8-point-grid-vertical-rhythm-90d05ad95032" class="icon-link">8-Point Grid: Vertical Rhythm<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
        </ul>
    </section>
    <section>
        <h2 id="font">Font</h2>
        <p>Det Fælles Designsystem anvender en typografi baseret på skrifttypen IBM Plex Sans (som er en webfont), en farveskala og specificeringer til blandt andet hjørner, streger og skygger.</p>
        <p>IBM Plex Sans er valgt som font, da det er en æstetisk og læsbar open source font, der kan anvendes gratis under <a href="https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL_web" class="icon-link">SIL Open Font License<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a>.</p>
        <p>IBM Plex Sans er en alsidig sans serif font, der egner sig godt til brugergrænseflader. Fonten har de karakteristika, som designsystemet promoverer. Den er simpel og neutral i sit udtryk og yderst skalerbar grundet de mange variationer (typer, vægte, sprog, m.m.), som fonten understøtter.</p>
        <h3 class="h5">Læs mere om fonten</h3>
        <ul class="nobullet-list">
            <li><a href="https://www.ibm.com/plex/" class="icon-link">IBM Plex Sans<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
        </ul>
    </section>
    <section id="koden">
        <h2>Koden</h2>
        <p>Det Fælles designsystem er kodet i HTML5/CSS3 og det er tilstræbt, at al kode lever op til standarden.</p>
        <ul class="nobullet-list">
            <li><a href="https://whatwg.org/" class="icon-link">Whatwg HTML5 specifikationer<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="https://www.w3.org/Style/CSS/specs.en.html" class="icon-link">W3C CSS specifikationer<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="http://html5doctor.com/" class="icon-link">HTML5 Doctor<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" class="icon-link">A Guide to flexbox<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
        </ul>
        <h3>Vanilla JS</h3>
        <p>For at øge ydeevnen gennem færre forespørgsler, der skal behandles, overhead og - ikke mindst - mindske afhængigheden til tredjepartsleverandører og deres potentielle tekniske gæld, er det besluttet, at designsystemet anvender Vanilla JS (Plain JS). Det vil sige, at designsystemet og de integrerede udvidelser ikke anvender framework som fx jQuery eller andet.</p>
        <h4 class="h5">Læs mere om Vanilla JS her</h4>
            <ul class="nobullet-list">
            <li><a href="https://google.github.io/styleguide/jsguide.html" class="icon-link">Google JavaScript Style Guide<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="https://www.w3schools.com/js/js_conventions.asp" class="icon-link">JavaScript Style Guide<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="https://plainjs.com/" class="icon-link">Plain JS<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
        </ul>
        <h3>Styling og temaer</h3>
        <h4 class="h5">Læs mere om styling her</h4>
            <ul class="nobullet-list">
            <li><a href="https://designsystem.digital.gov/documentation/developers/#customization-and-theming" class="icon-link">Customization and theming<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
        </ul>
        <h3>CSS og JS arkitektur</h3>
        <p>Det Fælles Designsystem har en tilsvarende opbygning som US Web Design Standards.</p>    
        <h4 class="h5">Læs mere om CSS og JS arkitektur her</h4>
            <ul class="nobullet-list">
            <li><a href="https://designsystem.digital.gov/documentation/developers/#css-architecture" class="icon-link">CSS architecture<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
        </ul>
        <h3>Det Fælles Designsystem giver framework-frihed</h3>
        <p>Det Fælles Designsystem er en UX reference med en simpel, valgfri kodeløsning og ikke et endegyldigt teknologivalg. Designsystemet er en række anbefalinger, der understøtter en mere ensartet brugeroplevelse af offentlige selvbetjeningsløsninger.</p>
        <p>De enkelte anbefalinger er suppleret af en løsningsmodel i kode, som er rettet imod den bredest mulige anvendelse. Den er altså ikke cutting-edge eller nyeste framework. Til gengæld bestræber designsystemet sig på at være minimalt, modulært og skalerbart og dermed enkelt og nemt at anvende.</p>
        <p>I praksis kan du altså anvende designsystemet direkte - uden yderligere kode.</p>
        <p>Komponenterne i designsystemet vil løbende blive opdateret. Men ønsker du her og nu at anvende en anden kodeløsning som fx en dedikeret React-løsning eller en Single Page Application (SPA), Progressive Web Application (PWA), Web Component eller lignende, så kan du det.</p>
        <p>Designsystemet anbefaler nemlig ikke en specifik model eller framework: Det centrale er, at brugeroplevelsen er ensartet - ikke at koden er det.</p>
    </section>
    <section id="udvidelser">
        <h2>Udvidelser</h2>
        <p>Brugeren af en typisk selvbetjeningsløsning har ofte behov for yderligere interaktion end blot layout og typografi. Derfor har vi tilføjet en række funktioner i form af udvidelser til dkfds_core.css samt et anbefalet udvidelseskatalog med ekstra funktionalitet.</p>
        <p>En udvidelse kan være alt lige fra en spinner, der viser at en løsning er under indlæsning til et avanceret tabel-system som Data Tables.</p>
        <p>Visse funktionsudvidelser er meget generelle og derfor placeret i dkfds_core.css. Udvidelser, der på denne måde bliver del af kernen, vil altid være bygget af teamet bag designsystemet. Det drejer sig om:</p>
        <ul>
            <li>Overflow-menu</li>
            <li>Spinner</li>
            <li>Tags</li>
            <li>Trinindikatorer </li>
            <li><a href="https://micromodal.now.sh/" class="icon-link">Modalvinduer<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="https://atomiks.github.io/tippyjs/" class="icon-link">Tooltip<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
        </ul>
        <p>Andre udvidelser er valgfrie, og det er derfor op til udvikleren i samarbejde med sin forretning at vurdere, hvad der er nødvendigt for den enkelte løsning.</p>
        <p>Det Fælles Designsystem anbefaler følgende udvidelser:</p>
        <ul class="nobullet-list">
            <li><a href="https://datatables.net/" class="icon-link">Avancerede tabeller<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="https://github.com/woocommerce/selectWoo" class="icon-link">Multiselect<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="https://pikaday.com/" class="icon-link">Pikaday<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
        </ul>   
        <h3>Ikoner</h3>
        <p>Ikoner betragtes ikke som en reel udvidelse, selvom de bliver hentet udefra. Vi har udvalgt ikoner fra Material Design i .svg (Scalable Vector Graphic) format. De ligger som en samlet “pakke” af <code>symbol</code> efter <code>body</code>. På denne måde sparer vi et større antal forespørgsler for den enkelte side. Koden for ikoner fylder ganske lidt.</p>
        <p>Ikonerne er angivet som <code>symbol</code> med tilføjet <code>title</code> og <code>desc</code> og de kaldes i html koden vha <code>use</code>, fordi det er den mest effektive anvendelse af svg-ikoner, hvor man via shadow DOM dynamisk opretter kopier af det oprindelige <code>symbol</code>.</p>
        <h4>Læs mere om ikoner her</h4>
            <ul class="nobullet-list">
            <li><a href="https://materialdesignicons.com/" class="icon-link">Material Design Icons<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="https://tympanus.net/codrops/2015/07/16/styling-svg-use-content-css/" class="icon-link">Styling SVG <code>use</code> Content with CSS<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
        </ul>  
        <h3>Det Fælles Designsystem stiller krav til udvidelser</h3>
        <p>For at sikre sammenhæng og ensartethed i designsystemet har vi opstillet en række minimumskrav til udvidelser af systemet:</p>
        <h4>Dokumenteret behov</h4>
        <p>Hvis du har forslag til udvidelser, skal du dokumentere dem ud fra et påviseligt brugerbehov, som ikke på forhånd kan løses af de allerede inkluderede udvidelser. Det er den person, som stiller forslaget, der skal dokumentere behovet.</p>
        <h4>Dokumenteret test</h4>
        <p>Udvidelser skal være gennemtestede, før de kan blive en del af udvidelseskataloget. Du skal således have gennemført og dokumenteret succesfulde test af både kode, funktionalitet og brugervenlighed, såfremt du ønsker at få en udvidelse optaget som mulig tilkobling til designsystemet.</p>
        <h4>Gradueret indfasning</h4>
        <p>Der er tre niveauer for udvidelser til designsystemet af hensyn til både stabilitet og drift:</p>
        <ul>
            <li>Sandbox</li>
            <li>Anbefalet udvidelse</li>
            <li>Integreret udvidelse</li>
        </ul>
        <h5>Sandbox</h5>
        <ul>
            <li>Har ufuldstændig dokumentation</li>
            <li>Er ikke fuldt kompatibel (kræver ændringer i løsningen udover tilføjelsen)</li>
            <li>Unik løsning</li>
            <li>Ikke del af komponentoversigten på dokumentationssiden</li>
            <li>Ikke del af designsystemets releases</li>
        </ul>
        <h6 class="h5">Definition af "sandbox" udvidelse</h6>
        <ul>
            <li>En udvidelse, der opfylder et eller flere krav til brugeroplevelse eller tekniske krav, men ikke er nævnt på dokumentationssiden, og som heller ikke er en del af designsystemets offentliggørelser. </li>
            <li>En udvidelse, hvis anvendelse i en løsning designsystemets team er opmærksom på, og som teamet kan vælge at placere i ”Sandbox” af orienteringshensyn.</li>
        </ul>
        <h5>Anbefalet udvidelse</h5>
        <ul>
            <li>Anvendt af en eller flere løsninger</li>
            <li>Opfylder alle UX-krav og tekniske krav</li>
            <li>Fuldstændig dokumentation</li>
            <li>Godkendt test</li>
            <li>Opdateret</li>
            <li>Del af komponentoversigten</li>
            <li>Theming er del af designsystemets releases</li>   
        </ul>
        <h6 class="h5">Definition af "anbefalet" udvidelse</h6>
        <ul>
            <li>En udvidelse, der er anvendt på en eller flere løsninger og er gennemtestet for sin integritet.</li>
            <li>Udvidelsen optræder i komponentoversigten på dokumentationssiden, men er markeret med et ”Anbefalet udvidelse” badge samt en Alert, der forklarer overstående princip. </li>
            <li>Eventuelle betragtninger om brugeroplevelser og anbefalinger omkring anvendelse af udvidelsen står på dokumentationssiden.</li>
        </ul>
        <p>Det Fælles Designsystem tilbyder styling (theme), eksempelløsning som reference og en package.json med reference til den anbefalede version hos tredjepartsleverandøren, hvor udvikleren selv skal hente koden. Alle supporthenvendelser omkring udvidelsen skal rettes direkte til tredjepartsleverandøren.</p>
        <h5>Integreret udvidelse</h5>
        <ul>
            <li>”Home grown”</li>
            <li>HTML5, CSS, Vanilla JS</li>
            <li>Opfylder alle UX krav og fremstår som en ”naturlig” del af designsystemet</li>
            <li>Ingen binding til tredjeparts-leverandør</li>
            <li>Fuldstændig dokumentation</li>
            <li>Godkendt test</li>
            <li>Optræder i komponentoversigten på dokumentationssiden</li>
            <li>Koden er del af designsystemets releases </li>   
        </ul>
        <h6 class="h5">Definition af "integreret" udvidelse</h6>
        <ul>
            <li>”Home grown” udvidelse, der ligger som del af designsystemets kerne.</li>
            <li>En integreret udvidelse kan tage udgangspunkt i en ”anbefalet udvidelse”. På grund af udbredelse på tværs af løsninger, har vi valgt at lave vores egen tilsvarende komponent og gøre den til en kernefunktionalitet i designsystemet.</li>
        </ul>
    </section>
    <section id="performance">
        <h2>Performance</h2>
        <h3>Browsere</h3>
        <p>Designsystemet udtaler sig ikke om bestemt browser-understøttelse, som derimod bør være afhængig af brugernes behov, krav og forventninger til selvbetjeningsløsningen.</p>
        <p>Dog skal du altid sikre bredest mulig understøttelse. Fravalg eller manglende understøttelse skal du skrive som del af dokumentationen for løsningen.</p>
        <h3>Asynkron indlæsning af ressourcer</h3>
        <p>Preload indlæser en ressource asynkront, så browseren ikke skal vente på, at CSS eksempelvis skal indlæses, før den kan rendere siden.</p>
        <p>Det Fælles Designsystem anvender preconnect og preload i head-delen til preload af CSS og til fonte.</p>
        <p>Når browseren først åbner forbindelse til en given server, og derefter laver en tidlig indlæsning af en ressource, kan den senere hurtigt beregne eksempelvis layout. Bemærk, at browseren ikke anvender ressourcerne på dette tidspunkt, men kun gør dem klar. Det kaldes også ”lazy load”.</p>
        <h4 class="h5">Læs mere om preload her</h4>
            <ul class="nobullet-list">
            <li><a href="https://www.w3.org/TR/preload/" class="icon-link">Preload<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/" class="icon-link">Preload - what is it good for?<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
        </ul>
        <h3>Fonte</h3>
        <p>Indlæsning og beregning af web-fonte kontra system-fonte kan potentielt være omkostningstungt for både leverandør og bruger. Ved at anvende preconnect, preload samt <code>font-display:swap</code> understøtter designsystemet brugerens behov for hurtig adgang til løsningens indhold.</p>
        <p>IBMPlexSans-Regular er en del af den primære Font Stack, der anvendes i designsystemet. Den Fallback Font Stack, der indlæses, hvis den primære er utilgængelig, er "System". ”System” refererer til fonte fra de respektive styresystemer og anvendes af browseren indtil den primære Font Stack er indlæst.</p>
        <p>Deklarationen <code>font-display:swap</code> får browseren til at anvende en system-font -  hvis den ikke får fat i IBM Plex Sans indenfor 1/100 sekund - svarende til, at IBM Plex Sans ligger i brugerens cache. Når IBM Plex Sans er indlæst, skifter browseren sin fallback-font ud med den korrekte.</p>
        <p>Det tager maksimalt ~3 sekunder for browseren at loade IBM Plex Sans og genberegne siden. Browserens brug af <code>font-display:swap</code> og fallback font kan dog afføde et lille blink (også kaldet FOUT), når den første side genberegnes med IBMPlexSans – derefter ligger fonten i browserens cache. Dette vurderes at være et mindre problem. Det er forventeligt, at mange brugere allerede har IBM Plex Sans liggende i deres cache, da fonten hurtigt bliver udbredt på grund af dens anvendelse på tværs af mange offentlige selvbetjeningsløsninger.</p>
        <h4>Bemærk</h4>
        <p>Font-display er endnu ikke implementeret i IE/Edge. Løsningen er ikke desto mindre valgt, da den generelt set tilbyder det bedste alternativ.</p>
        <h5>Læs mere om font-stack her</h5>
            <ul class="nobullet-list">
            <li><a href="https://css-tricks.com/snippets/css/system-font-stack/" class="icon-link">System font-stack<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
        </ul>
        <h3>Favicon</h3>
        <p>Et favicon er en lille grafik, der vises i browserens fane – eksempelvis som desktop-ikon, bogmærke eller lignende. Der skal være et favicon til stede på serveren af hensyn til et default browser-forespørgsel, som ellers vil få indlæsningen til at føles langsom og generere en 404-fejl i loggen.</p>
        <p>Det er nødvendigt at generere en lang række varianter af favicons af hensyn til de mange platforme, brugere i dag benytter sig af.</p>
        <p> I Det Fælles Designsystem har vi valgt at anvende <a href="https://realfavicongenerator.net/" class="icon-link">Real Favicon Generator<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a>  og  favicon-filerne er placeret i en undermappe. </p>
        <h4>Bemærk</h4>
        <p>Det har tidligere været et problem for iframes, at deres indhold også skulle have et favicon for ikke at generere en 404. Det har ikke været muligt at teste og bekræfte denne opførsel i moderne browsere.</p>
        <h4 class="h5">Læs mere om favicon her</h4>
            <ul class="nobullet-list">
            <li><a href="https://realfavicongenerator.net/" class="icon-link">Real Favicon Generator<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
        </ul>
    </section>
    <section id="versioner">
        <h2>Versioner og releases via Github og NPM</h2>
        <p>Det Fælles Designsystems kode distribueres via Github. </p>
        <p>GitHub er et online versionsstyringssystem og en samling af koder (kode-repositorie), hvor organisationer, firmaer og enkeltpersoner opbevarer og udstiller deres kode. Andre kan herefter anvende den som den er, eller oprette en kopi (fork), som de bygger videre på selv og senere udstiller til potentiel inklusion i ophavet.</p>
        <p>Alle interesserede i designsystemet kan dermed få adgang til at anvende koden ved at hente den på GitHub.</p>
    </section>
</article>