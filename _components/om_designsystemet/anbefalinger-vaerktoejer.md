---
permalink: /omdesignsystemet/anbefalinger-vaerktoejer/
redirect_from:
- /omdesignsystemet/anbefalingerudvikling/
layout: styleguide
title: Anbefalinger og værktøjer
category: Om_designsystemet_category
description: Anbefalinger for kode og kvalitet, performance, tilgængelighed og yderligere anvisninger til dig, der skal udvikle til eller i Det Fælles Designsystem
subnav:
- text: Anbefalinger til kode og kodekvalitet
  href: '#anbefalinger-kode'
- text: Frontend koden
  href: '#koden'
- text: Anbefalinger til frontend performance
  href: '#anbefalinger-performance'
- text: Optimering
  href: '#optimering'
- text: Anbefalering omkring tilgængelighed
  href: '#tilgaengelighed'
---

<article>
    <section>
        <p>Det Fælles Designsystem (designsystemet) er en enkel samling af grundlæggende funktioner og design, der udgør et solidt fundament for udvikling af selvbetjeningsløsninger til borger.dk og Virk.</p>
        <p>Arkitekturen bag systemet består i en minimal, modulær og skalerbar struktur, der efter behov kan forgrene sig yderligere. Brug derfor anbefalingerne nedenfor, når du udvikler efter designsystemet, så får du det bedste resultat.</p>
        <p>Anbefalingerne er inddelt efter disse emner:</p>
        <ul>
            <li>Kode og kvalitet</li>
            <li>Performance</li>
            <li>Optimering for udviklere</li>
            <li>Tilgængelighed</li>
        </ul>
    </section>
    <section>
        <h2 id="anbefalinger-kode">Anbefalinger om kode og kodekvalitet</h2>
        <p>Ved at bruge disse enkle principper for kode skaber du det bedste resultat for brugerne af en selvbetjeningsløsning. Følg derfor disse anvisninger i din kodning:</p>
        <ul>
            <li>Kode skal være enkel, korrekt, forståelig, gennemtestet og dokumenteret, så andre udviklere kan gennemskue, genanvende og vedligeholde den i deres projekter.</li>
            <li>Tænk modulært, dvs. lav en struktur af de elementer, du har brug for, og brug kun dem.</li>
            <li>Gennemgå altid koden med en kollega for at sikre, at din kode er brugbar.</li>
            <li>Brug formaliserede testmetoder, så du tester koden metodisk og i samme omfang hver gang.</li>
            <li>Anvend WhatWG til HTML reference og W3C til CSS reference og til at sikre kodens validitet gennem <a href="https://checker.html5.org/" class="icon-link">Nu Html Checker<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a> og <a href="https://jigsaw.w3.org/css-validator/" class="icon-link">CSS Validation Service<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a>.</li>
            <li>Undgå unødigt kompliceret funktionalitet.</li>
            <li>Indlæs kun biblioteker (fx jQuery), hvis du skal bruge dem.</li>
            <li>Anvend eksempelkoden i designsystemet som reference for den aktuelle løsning.</li>
            <li>Anvend konsekvent og gennemskuelig navngivning af CSS-klasser og gerne med løsningsspecifikt præfix, fx ”fds-”.</li>
            <li>Test i alle browsere, der ifølge forretningens aktuelle krav til ydeevne skal understøtte løsningen.</li>
        </ul>
    </section>
    <section>
        <h2 id="koden">Frontend koden</h2>
        <h3>HTML og CSS</h3>
        <p>Du skal altid kode selvbetjeningsløsningens brugergrænseflade i valid HTML5, som det er defineret i <a href="https://whatwg.org/" class="icon-link">WhatWG<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a>.</p>
        <p>Du skal huske på, at HTML5 er et format i udvikling, og at browseren ikke har ensartet understøttelse. Det er vigtigt, at du tjekker løsningens integritet og browserunderstøttelse i forhold til din målgruppe. Du kan fx anvende <a href="https://caniuse.com/" class="icon-link">Can I use<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a> til at kontrollere understøttelsen af det enkelte tag.</p>
        <h4>Læs mere om HTML og CSS</h4>
        <ul class="nobullet-list">
            <li><a href=" https://whatwg.org/" class="icon-link">WhatWG<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="https://caniuse.com/" class="icon-link">Can I Use<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="http://html5doctor.com/" class="icon-link">HTML5 Doctor<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" class="icon-link">A Guide to flexbox<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="https://www.keycdn.com/blog/oocss" class="icon-link">OOCSS<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="http://getbem.com/" class="icon-link">BEM<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
        </ul>
        <h3>Javascript</h3>
        <p>Det Fælles Designsystem anvender ”Vanilla JavaScript” (”Vanilla JS” eller ”Plain JS”) og ikke et JavaScript bibliotek som fx jQuery, der skaber afhængighed til tredjeparts leverandører. På den måde anvender designsystemet optimerede løsninger og undgår afhængighed af tredjepartsleverandører og deres eventuelle tekniske gæld.</p>
        <p>Du kan altså godt anvende en tredjeparts løsning (se listen over anbefalede udvidelser). Men ønsker du at udvikle en funktionskomponent, og at den skal kunne inkluderes i designsystemets kerne, så skal du udvikle den i Vanilla JS. </p>
        <h4>Læs mere om Javascript</h4>
        <ul class="nobullet-list">
            <li><a href="https://google.github.io/styleguide/jsguide.html" class="icon-link">Google JavaScript Style Guide<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="https://www.w3schools.com/js/js_conventions.asp" class="icon-link">JavaScript Style Guide<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="https://plainjs.com/" class="icon-link">Plain JS<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="https://snipcart.com/blog/learn-vanilla-javascript-before-using-js-frameworks" class="icon-link">Learn vanilla JavaScript<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a> </li>
            <li><a href="https://medium.com/@trombino.marco/you-might-not-need-jquery-a-2018-performance-case-study-aa6531d0b0c3" class="icon-link">You might not need jQuery<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a> </li>
        </ul>
        <h3>Kodekvalitet og validering</h3>
        <p>Koden skal være enkel, korrekt, forståelig, gennemtestet og dokumenteret, så andre udviklere kan gennemskue, genanvende og vedligeholde den i deres projekter. Det er til fordel for både udvikling, brugere og forretning og kan forhindre opbygningen af teknisk gæld.</p>
        <p>Det er vigtigt, at du danner dig et overblik over den samlede kodes aktuelle tilstand gennem systematisk testning.</p>
        <p>Vi anbefaler derfor, at du som minimum får andre personer end de, der har kodet, til at gennemgå koden på alle udviklingsprojekter. Du bør også sætte en tydelig målestok for, hvad I definerer som god kode, så I sikrer en gennemgående kvalitet.</p>
        <p>Alle løsninger skal altid bestå formaliserede funktions-, regressions- og accepttest, inden de går i produktion.</p>
        <h4>Læs mere om kodekvalitet og validering</h4>
        <ul class="nobullet-list">
            <li><a href="https://validator.w3.org/" class="icon-link">W3 HTML validator<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="https://jigsaw.w3.org/css-validator/" class="icon-link">JW3 CSS validator<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="https://dzone.com/articles/what-does-code-quality-actually-mean" class="icon-link">What does code quality actually mean?<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="https://dzone.com/articles/an-introduction-to-code-coverage" class="icon-link">An introduction to code coverage<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a> </li>
            <li><a href="https://designsystem.digital.gov/documentation/code-guidelines/" class="icon-link">US Web Design System - Code Guidelines<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a> </li>
        </ul>
    </section>
    <section>
        <h2 id="anbefalinger-performance">Anbefalinger omkring frontend performance</h2>
        <p>Performance er primært afhængig af balancen mellem din kodekvalitet og browserens mulighed for at beregne koden. Det er derfor vigtigt, at din kode understøtter måden, browseren arbejder på.</p>
        <p>Følg derfor som minimum disse anvisninger, når du skal optimere ydeevnen i din brugergrænseflade:</p>
        <ul>
            <li>Formulér de minimumskrav og performance-KPI’er, som løsningen skal leve op til.</li>
            <li>Forkort den kritiske vej for browseren, når den skal indlæse en løsning.</li>
            <li>Sørg for, at der er så få forespørgsler fra browseren til serveren, som muligt.</li>
            <li>Minimér antallet af kritiske ressourcer og indlæs kun en udvidelse på de sider, den vedrører.</li>
            <li>Anvend asynkron og prioriteret indlæsning af ressourcer og forbered browserens indlæsning, hvor det er muligt, fx ved hjælp af preconnect og preload.</li>
            <li>Indlæs data/kode i baggrunden, hvis det kan forudses, hvilken side brugeren skal besøge ved næste klik.</li>
            <li>Pak al kode, så det fylder minimalt på alle niveauer af løsningen. </li>
            <li>Minimér brugen af CSS og JS, så browsere kun indlæser det, der er absolut nødvendigt.</li>
            <li>Sørg for, at browseren skal udføre så få genberegninger som muligt.</li>
            <li>Overvej at anvende et Content Delivery Network (CDN) for at optimere indlæsningshastigheden.</li>
            <li>Test fx i Lighthouse/Audit (Chrome DevTools) og test meget gerne hos virkelige brugere med virkelige platformsvarianter.</li>
        </ul>
        <p>Sørg også for at være løbende i dialog med repræsentanter for din eller din forretnings driftsorganisation om at finde den bedste løsning.</p>
        <h3>
            Frontend performance-optimering
        </h3>
        <p>
            <quote>
                “Don't write JavaScript that forces the browser to recalculate layout. Separate read and write functions, and perform reads first.<br>
                Don't over-complicate your CSS. Use less CSS and keep your CSS selectors simple.<br>
                Avoid layout as much as possible. Choose CSS that doesn't trigger layout at all.<br>
                Painting can take up more time than any other rendering activity. Watch out for paint bottlenecks.”<br>
                -	Google
            </quote>
        </p>
        <p>En offentlig selvbetjeningsløsning skal være en troværdig, stabil og sikker oplevelse for brugeren:</p>
        <ul>
            <li>Brugervenlighed (UX) og kvalitet skal være i fokus og følge anbefalingerne i designsystemet.</li>
            <li>Siden skal præstere højt på indlæsningshastighed, stabilitet og robusthed (kvantitative krav).</li>
        </ul>
        <p>Når du skal vurdere muligheden for at optimere løsningens præstation (performance-optimere) er det vigtigt, at du holder investeringen i forbedringerne op imod målet med dem:</p>
        <p>Målet bør altid være at præsentere brugeren for den hurtigst mulige og stabile løsning uden at forringe funktion og design. </p>
        <p>En selvbetjeningsløsning bør have sine egne performance-KPI’er, som matcher brugernes behov og forventninger. Du bør justere KPI’erne i takt med udviklingen af løsningen og brugernes forventninger, og du bør måle på både kvalitet og kvantitet.</p>
        <h3>Layout har indflydelse på performance</h3>
        <p>Valg af layout har betydning for, hvor hurtigt brugeren kan skifte side eller foretage opslag. Sider af stor betydning for brugeren bør særligt anvende så simpelt layout som muligt med færrest mulige ændringer og genberegninger i brugssituationen.</p>
        <p>En layout-ændring er i princippet enhver handling, der kræver at browseren dynamisk genberegner layoutet. Genberegningen af sidens layout er omkostningstung for browseren og kan i visse tilfælde forringe brugeroplevelsen. Du bør derfor begrænse antallet af dynamiske elementer på siden.</p>
        <p>Har løsningen fx accordions indlejret i en side, bør siden ideelt set ikke have yderligere elementer, der foretager ændringer i layoutet: Du risikerer i givet fald, at siden præsterer dårligt.</p>
        <h3>Ressourcer</h3>
        <p>Jo flere ressourcer en selvbetjeningsløsning skal hente, før brugeren kan anvende den, desto længere tid vil der gå for brugeren (den kritiske sti øges). Det øger risikoen for dårlige brugeroplevelser og frustrerede brugere.</p>
        <p>Det er derfor et centralt princip i forhold til sidens præstation at hente så få og så små ressourcer som muligt. </p>
        <p>Det skal på den anden side vejes op i mod de krav og forventninger brugerne har til en given løsning.</p>
        <p>Det Fælles Designsystem bestræber sig på at understøtte dette ved at alle udvidelser til designsystemets funktioner er tilvalg, som udvikleren skal foretage sig. Det giver dig mulighed for at vurdere den optimale sammenhæng mellem brugernes ønsker og krav, brug af ressourcer og sidens måde at præstere på.</p>
        <h3>Baseline for indlæsningshastighed</h3>
        <p>Krav til indlæsningshastighed (tiden, der går, til brugeren har en funktionel grænseflade på skærmen) er relativ: Det er baseret på en løsnings forretningskritikalitet for både brugere og forretning sammenholdt med, hvor mange brugere, der forventes at skulle anvende løsningen i et givent tidsrum. Forretningskritikaliteten angiver, hvor kritisk noget er, for at forretningens behov bliver opfyldt. Den måles fx i point.</p>
        <p>Når du formulerer baseline for en løsning, dvs. udgangspunkt for det succeskriterium, der skal måles op imod, er det vigtigt at overveje, definere og løbende teste og revurdere de udpegede målepunkter. Du bør typisk gøre det i forbindelse med større idriftsættelser af nye versioner.</p>
        <p>Brugerne forventer hurtig respons, når de besøger en selvbetjeningsløsning: De venter maksimalt 3 sekunder på, at en side bliver indlæst, og de opfatter ofte bare ét sekund som ”lang” tid. Det er derfor væsentligt, at de inden for dette korte tidsrum er præsenteret for et forventeligt og brugbart indhold af løsningen. </p>
        <p>Browseren kan fortsat indlæse yderligere funktionalitet i baggrunden, men det synlige indhold skal være til rådighed for brugeren indenfor maksimalt 1-3 sekunder.</p>
        <p>Du kan med fordel anvende nedenstående skala for brugeres ”fokus-vindue”, når du skal definere brugerhensyn i forhold til omfanget af layout-ændringer, og hvor hurtigt din side skal indlæse. Skalaen blev formuleret af Nielsen Norman Group helt tilbage i 1993-1997 og genbekræftet i 2010. Den er stadig den anvendte skala for vurdering af brugeres ”fokusvindue”:</p>
        <ul>
            <li>0-100 ms — Instant feel, constant flow</li>
            <li>100-300 ms — Slight perceptible delay</li>
            <li>300-1000 ms — Loss of task focus, perceptible delay</li>
            <li>1s+ - — Mental context switch</li>
            <li>10s+ — User leaves</li>
        </ul>
        <h4>Du kan læse mere om performance her:</h4>
        <ul class="nobullet-list">
            <li><a href="https://designsystem.digital.gov/performance/" class="icon-link">US Web Design Standards - performance<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="https://www.machmetrics.com/speed-blog/average-page-load-times-websites-2018/" class="icon-link">2018 average load times<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="https://www.nngroup.com/articles/website-response-times/" class="icon-link">Website response times<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="https://speakerdeck.com/csswizardry/its-my-third-party-and-ill-cry-if-i-want-to" class="icon-link">It's my third party and I'll cry if I want to (slides)<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
        </ul>
        <h3>Performance-test</h3>
        <p>Test af selvbetjeningsløsningers præstation eller performance er en videnskab i sig selv: Den består i at teste og justere en lang række parametre for at afdække løsningens måde at præstere på.</p>
        <p>Vigtige parametre, du kan afprøve sidens ydeevne på, er fx:</p>
        <ul>
            <li>Performance</li>
            <li>Tilgængelighed</li>
            <li>Søgbarhed</li>
            <li>Opsætning.</li>
        </ul>
        <h4>Udviklerværktøjer</h4>
        <p>Google Chrome, Internet Explorer/Edge, Mozilla og Safari stiller en lang række værktøjer til rådighed for test og fejlsøgning i en løsning. Ved at trykke på F12, når du står i Chrome, åbner Developer Tools alt lige fra kodevisning til måling af ydeevne. Hver for sig er disse værktøjer uundværlige for aftestning og fejlsøgning.</p>
        <h5>Læs mere om udviklerværktøjer</h5>
        <ul class="nobullet-list">
            <li><a href="https://developers.google.com/web/tools/chrome-devtools/" class="icon-link">Chrome Developer Tools<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="https://docs.microsoft.com/da-dk/microsoft-edge/devtools-guide" class="icon-link">Microsoft Edge Devtools<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="https://developer.mozilla.org/en-US/docs/Tools" class="icon-link">Mozilla Developer Tools<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="https://developer.apple.com/safari/tools/" class="icon-link">Safari Developer Tools<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
        </ul>
        <h4>Lighthouse</h4>
        <p>Ved at anvende Chrome Developer Tools får du adgang til applikationen ”Lighthouse” (tryk F12, når du står i Google Chrome, og vælg fanen "Audit"), der giver en analyse og scoring (fra 0-100) af en sides ydeevne fordelt på disse fem parametre:</p>
        <ul>
            <li>Performance</li>
            <li>Progressive Web App</li>
            <li>Accessibility</li>
            <li>Best practices</li>
            <li>SEO.</li>
        </ul>
        <p>Lighthouse er som standard sat op til at vurdere parametre, som Google har fokus på, fx Progressive Web App (PWA). Du kan dog også selv angive, hvilke parametre du ønsker siden vurderet ud fra. Du skal naturligvis kun teste for Progressive Web App , hvis du rent faktisk har udviklet en. Ellers skal du bare fjerne fluebenet ud for det parameter.</p>
        <p>Lighthouse giver som en konsekvens af sin vurdering gode råd til, hvor du kan eller bør sætte ind for at forbedre løsningens ydeevne. </p>
        <h5>Læs mere om Lighthouse</h5>
        <ul class="nobullet-list">
            <li><a href="https://developers.google.com/web/tools/lighthouse/" class="icon-link">Lighthouse<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
        </ul>
        <h4>PageSpeed Insights</h4>
        <p>Page Speed Insights er et Google værktøj, der måler indlæsningshastigheden for en løsning på henholdsvis mobil og desktop og kommer med forslag til mulige forbedringer.</p>
        <h5>Læs mere om PageSpeed Insights</h5>
        <ul class="nobullet-list">
            <li><a href="https://developers.google.com/speed/pagespeed/insights/" class="icon-link">PageSpeed Insights<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
        </ul>
    </section>
    <section>       
        <h2 id="optimering">Optimering for udviklere</h2>
        <p>Som udvikler bør du være opmærksom på de følgende muligheder for yderligere optimering af brugergrænsefladen. Gør du det, så skaber du grundlag for en løsning med høj ydeevne for brugerne.</p>
        <h3>Minimer spild i filerne</h3>
        <p>Du kan med fordel anvende et værktøj som fx Minifier til at minimere "spild" i JS og CSS filer, så de fylder mindst muligt. Du kan typisk finde lignende funktioner som udvidelse til værktøjer til redigering af kode. </p>
        <h4 class="h5">Læs mere om Minifier</h4>
        <ul class="nobullet-list">
            <li><a href="https://www.keycdn.com/support/how-to-minify-css-js-and-html" class="icon-link">How to minify<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="https://www.minifier.org/" class="icon-link">Minifier<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
        </ul>
        <h3>Kritiske vej (Critical path)</h3>
        <p>Den kritiske vej (Critical Path) er den samlede sekvens af processer i tid fra en bruger aktiverer et link til den funktionelle selvbetjeningsløsning eller side er tilgængelig.</p>
        <p>For at optimere præstationen af siden mest muligt, er det derfor vigtigt, at du gør den kritiske vej så kort som det er praktisk muligt, og som brugere og forretning forventer det.</p>
        <p>Du kan blandt andet arbejde med disse ting:</p>
        <p>
            <strong>Sørg for, at ressourcerne bliver indlæst i en rækkefølge med de væsentlige processer først.</strong><br/>
            Begræns omfanget af CSS og JS, da de forhindrer browseren i at indlæse de næste trin af sidens kode (“render blocking”). Browseren skal læse og udføre (layoute) den komplette CSS og JS, før den kan frigøre ressourcer til at begynde at beregne selve siden. Alle andre processer står derfor stille, indtil browseren har udført CSS og JS.
        </p>
        <p>
            <strong>Design siden, så det vigtigste indhold for brugeren bliver fremvist øverst.</strong><br/>
            Designet af siden har stor betydning. Det skal sikre, at det vigtigste indhold for brugerens videre færd bliver fremvist øverst på siden. Du bør derfor så vidt muligt placere alt andet, end det vigtigste indhold ”under folden”, så det bliver indlæst senere. Fx ved asynkron eller lazy indlæsning.
        </p>
        <p>
            <strong>Serveren og browserens kommunikation:</strong><br/>
            En server sender ~14kb data (10 TCP pakker) ved første forespørgsel fra og skal derefter vente på brugeren, før den sender mere. Kan du holde det vigtigste indhold – det som bekræfter brugerens første valg – på omkring 14kb, forbedrer du altså brugeroplevelsen markant. Det er ikke sikkert, det kan lade sig gøre i praksis at holde første visning nede på 14kb. (Den mindste udgave af designsystemet fylder mere end 100 kb). Men har du en selvbetjeningsløsning med høj forretningskritikalitet, periodevis højt pres, mange samtidige eller et højt antal daglige brugere, kan det give mening at superoptimere den kritiske vej.
        </p>
        <p>
            <strong>Det kan du gøre:</strong>
        </p>
        <ul>
            <li>Du kan fx placere den vigtigste CSS inline i head og de mindre vigtige deklarationer som linket ressource sammen med JS før /body. Vigtige grafikker ”over folden” kan være base64 og andre inline .svg. </li>
        </ul>
        <p>I Det Fælles Designsystem har vi udvalgt ikoner fra Material Design i .svg (Scalable Vector Graphic) format. De ligger som en samlet “pakke” af symbolefter body. På denne måde sparer vi et større antal forespørgsler for den enkelte side. Koden for ikoner fylder dermed ganske lidt.</p>
        <p>Da inline CSS ikke caches af browseren, er det en balanceakt at placere tilstrækkeligt CSS inline til, at det gør en forskel og samtidig ikke så meget, at brugeren skal hente den samme store pakke på hver eneste side.</p>
        <p>Især i SPA (Single Page Applications) løsninger giver dette koncept dog mening, da brugeren kun skal hente den ene side – med mindre det er en løsning, hvor brugeren ofte skal vende tilbage gentagne gange.</p>
        <h4 class="h5">Læs mere om Critical Path CSS</h4>
        <ul class="nobullet-list">
            <li><a href="https://medium.freecodecamp.org/an-introduction-to-web-performance-and-the-critical-rendering-path-ce1fb5029494" class="icon-link">An introduction to web performance and the critical rendering path<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="https://medium.com/@luisvieira_gmr/understanding-the-critical-rendering-path-rendering-pages-in-1-second-735c6e45b47a" class="icon-link">Understanding the critical rendering path<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="https://varvy.com/pagespeed/critical-render-path.html" class="icon-link">Critical render path<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="https://developers.google.com/web/fundamentals/performance/critical-rendering-path/page-speed-rules-and-recommendations" class="icon-link">Page speed rules and recommendations<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="https://www.sitepoint.com/how-and-why-you-should-inline-your-critical-css/" class="icon-link">How and why you should inline your critical css<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
        </ul>
        <h3>Preload af ressourcer</h3>
        <p>Du kan forberede browseren på at indlæse og beregne din selvbetjeningsløsning ved at anvende preconnect og preload i <code>head</code>.</p>
        <p>Når browseren først åbner forbindelse til en given server og derefter laver en tidlig indlæsning af en ressource, kan den senere hurtigt beregne eksempelvis layout. Bemærk, at browseren ikke anvender ressourcerne, når den åbner dem, men kun gør dem klar. Det kaldes også ”lazy load”.</p>
        <p>Lazy load egner sig i særdeleshed til CSS og JS-filer, men du kan også det til andre ressourcer, fx en grafik, der er vigtig for anvendelsen af løsningen. Lazy load fungerer således:</p>
        <ul>
            <li><strong>Preconnect</strong> kontakter den server, der forventes at skulle levere en given ressource. Det kunne være en CDN (Content Delivery Network). Dermed er forbindelsen åben.</li>
            <li><strong>Preload</strong> beder browseren indlæse en ressource asynkront (lazy loading), så den er klar til brug, men uden at anvende den, før det er påkrævet.</li>
        </ul>
        <h4 class="h5">Læs mere om preload her</h4>
        <ul>
            <li><a href="https://www.w3.org/TR/preload/" class="icon-link">Preload - W3C Candidate Recommendation 26 October 2017<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/" class="icon-link">Preload - What is it good for?<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
        </ul>
    </section>
    <section>
        <h2 id="tilgaengelighed">Anbefalinger omkring tilgængelighed</h2>
        <ul>
            <li>Overhold <a href="https://digst.dk/digital-service/webtilgaengelighed" class="icon-link">den danske lovgivning<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg> og krav til tilgængelighed af løsninger for alle brugere.</a></li>
            <li>Følg anvisningerne i WCAG 2.1 (2019),  brug evt. <a href="https://webaim.org/" class="icon-link">WebAIM<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a> som reference og test med <a href="http://wave.webaim.org/" class="icon-link">Wave (Web Accessibilty Evalution Tool)<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a> </li>
            <li>Stræb efter at lave en tydelig og korrekt kode</li>
            <li>Sørg for at brugeren kan navigere på siden inklusive eventuelle modalvinduer via tab-tasten.</li>
            <li>Brug <a href="https://www.w3.org/WAI/standards-guidelines/aria/" class="icon-link">ARIA<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a>, hvor det giver mening og øget tilgængelighed.</li>
            <li>Designsystemets farvekombinationer sikrer, at kontrastforholdet efterlever WCAG 2.1 (2019). Dobbelttjek andre farver med WebAIM’s <a href="https://webaim.org/resources/contrastchecker/" class="icon-link">contrast checker<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a>.</li>
            <li>Anvend skip-links på elementer, der gentages fra side til side (header, topmenu, footer).</li>
            <li>Angiv meningsgivende overskrifter, labels, alternativ tekst, summary, title og description på alle elementer, der har det som mulighed.</li>
            <li>Anmod om dokumentation for behovet for en foreslået kompleks løsning, og tilbyd altid brugeren et alternativ til indhold, du ikke umiddelbart kan gøre tilgængeligt.</li>
            <li>En selvbetjeningsløsning er ikke tilgængelig bare fordi den er responsiv og mobile-first. Løsningen skal også fungere ensartet og tilbyde samme indhold på tværs af platforme.</li>
        </ul>
        <h3>Hvorfor tilgængelighed?</h3>
        <p>Selvbetjeningsløsninger og alle andre offentlige hjemmesider skal overholde den danske lovgivning omkring tilgængelighed på WCAG 2.1 (2019) niveau AA. Du skal teste alle løsninger og deres funktioner op imod disse krav, som ikke blot øger tilgængeligheden for brugere med særlige behov, men for alle brugere.</p>
        <p>Alt det, du udvikler i og til Det Fælles Designsystem, skal således leve op til lovkravene om at understøtte WCAG 2.1 (2019) på AA niveau.</p>
        <p>Du bør derfor altid overveje følgende spørgsmål, før du udvikler nye funktioner:</p>
        <ul>
            <li>Er denne helt specielle og unikke løsning nødvendig?</li>
            <li>Tilfører den merværdi for brugeren?</li>
            <li>Kan vi gøre den tilgængelig uden funktionstab for brugerne?</li>
            <li>Kan vi løse behovet med en mere simpel og gennemprøvet model?</li>
        </ul>
        <h3>Sådan tester du din løsnings tilgængelighed</h3>
        <p>Første skridt på vejen til en tilgængelig løsning er at sikre, at koden i din løsnings brugergrænseflade er valid og følger anbefalingerne fra WHATWG og W3C.</p>
        <p>Vær opmærksom på, at tilgængelighed som udgangspunkt er slået fra i Safari. Husk derfor at slå den til under ”Avancerede indstillinger”, før du tester.</p>
        <p>Når du skal teste for tilgængelighed, anbefaler Det Fælles Designsystem, at du som minimum anvender analyseværktøjer, som fx:</p>
        <h4>WebAIM</h4>
        <p>WebAIM er en hjemmeside, der er udviklet og drevet af Utah State University. Siden indeholder en række funktioner, der hjælper dig til at udvikle og teste for tilgængelighed. Deres anbefalinger er synkroniseret med krav og anbefalinger fra W3C.</p>
        <p>WebAIM stiller funktionen Wave gratis til rådighed. Wave giver med det samme en analyse og rapport på din løsnings tilgængelighed og udfordringer.</p>
        <h5>Læs mere om WebAIM</h5>
            <ul class="nobullet-list">
            <li><a href="https://webaim.org/resources/" class="icon-link">WebAIM<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
        </ul>   
        <h4>Oplæsning</h4>
        <p>En af de store udfordringer i tilgængeligt design er at teste oplæsningen af sidens indhold, og der findes ikke en automatiseret måde at gøre det på. Browserproducenterne og de forskellige platforme har desuden meget forskellige tilgange til oplæsning. Alle har større eller mindre udfordringer - især med matematiske og fysiske særtegn. </p>
        <p>Brug derfor disse tommelfingerregler i forhold til oplæsning: </p>
        <ul>
            <li>Er din kode valid HTML, og opfylder du kravene fra WCAG 2.1 (2019), forhindrer din løsning ikke oplæsning af indholdet.</li>
            <li>Følg vejledningen fra WebAIM omkring aftestning med Voice Over (Mac) og Oplæser på Windows 10.</li>
        </ul>
        <h5>Læs mere om oplæsning</h5>
            <ul class="nobullet-list">
            <li><a href="https://webaim.org/articles/voiceover/" class="icon-link">Voice over<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="https://support.microsoft.com/da-dk/help/17173/windows-10-hear-text-read-aloud" class="icon-link">Windows 10 hear text<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="https://youtu.be/o_mvO6EQ0tM" class="icon-link">Introduction to Screen Readers<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
        </ul>   
        <h4>Chrome Developer Tools</h4>
        <p>Google Chrome stiller en lang række værktøjer til rådighed for test og fejlsøgning i en løsning. Ved at trykke på F12, når du står i Chrome, åbner Developer Tools alt lige fra kodevisning til performance-måling. Du kan se en farves tilgængelighedsniveau ved at klikke på farven i ”Elements” visning. Her kan du også justere den. Du kan se resultatet direkte i den aktuelle sidevisning på samme måde som ved redigering af øvrige parametre i Chrome Developer Tools.</p>
    </section>
</article>
