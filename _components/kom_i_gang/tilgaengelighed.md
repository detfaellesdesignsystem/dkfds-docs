---
permalink: /komigang/tilgaengelighed/
layout: styleguide
title: Tilgængelighed
category: Kom_i_gang_category
subcategory: Kom i gang
---
 <section>
        <ul>
            <li>Overhold <a href="https://digst.dk/digital-service/webtilgaengelighed" class="icon-link">den danske lovgivning<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a> og krav til tilgængelighed af løsninger for alle brugere.</li>
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
        <p class="mt-6"><a href="https://www.socialdigital.dk/wp-content/uploads/Tilg%C3%A6ngeligt-digitalt-design-Social-Digital.pdf" class="icon-link">Tjek også denne do's & don'ts liste ud (åbner som pdf)<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></p>
        <p>Har du andre tilgængelighedsressourcer du synes vi bør dele i fællesskabet så skriv til os via github eller på mail.</p>        
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