---
permalink: /krav/tilgaengelighed/
redirect_from:
- /komigang/tilgaengelighed/
layout: styleguide
title: Tilgængelighed (WCAG 2.1)
category: Krav_category
subcategory: Krav
description: "Hjælp og værktøjer til at efterleve tilgængelighedskrav WCAG 2.1 level AA."
tags:
---

- Overhold <a href="https://digst.dk/digital-service/webtilgaengelighed" class="icon-link">den danske lovgivning<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a> og krav til tilgængelighed af løsninger for alle brugere.
- Følg anvisningerne i <a href="https://www.w3.org/TR/WCAG21/" class="icon-link">WCAG 2.1<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>,  brug evt. <a href="https://webaim.org/" class="icon-link">WebAIM<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a> som reference og test med <a href="http://wave.webaim.org/" class="icon-link" lang="en">Wave (Web Accessibilty Evaluation Tool)<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>
- Stræb efter at lave en tydelig og semantisk korrekt kode.
- Sørg for at brugeren kan navigere på siden inklusive eventuelle modalvinduer via tastaturet.
- Brug <a href="https://www.w3.org/WAI/standards-guidelines/aria/" class="icon-link">ARIA<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>, hvor det giver mening og øget tilgængelighed.
- Designsystemets farvekombinationer sikrer, at kontrastforholdet efterlever <a href="https://www.w3.org/TR/WCAG21/" class="icon-link">WCAG 2.1<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>. Dobbelttjek andre farver med WebAIMs <a href="https://webaim.org/resources/contrastchecker/" class="icon-link">contrast checker<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>.
- Anvend skip-links på elementer, der gentages fra side til side (header, topmenu, footer).
- Angiv meningsgivende overskrifter, labels, alternativ tekst, summary, title og description på alle elementer, der har det som mulighed.
- Anmod om dokumentation for behovet for en foreslået kompleks løsning, og tilbyd altid brugeren et alternativ til indhold, du ikke umiddelbart kan gøre tilgængeligt.
- En selvbetjeningsløsning er ikke tilgængelig bare fordi den er responsiv og mobile-first. Løsningen skal også fungere ensartet og tilbyde samme indhold på tværs af platforme.

Har du andre tilgængelighedsværktøj man kan bruge ved udvikling, som du synes vi bør dele i fællesskabet så skriv til os via Github eller på mail.

### Hvorfor tilgængelighed?

Selvbetjeningsløsninger og alle andre offentlige hjemmesider skal overholde den danske lovgivning omkring tilgængelighed på <a href="https://www.w3.org/TR/WCAG21/" class="icon-link">WCAG 2.1<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a> niveau AA. Du skal teste alle løsninger og deres funktioner op imod disse krav, som ikke blot øger tilgængeligheden for brugere med særlige behov, men for alle brugere.

Alt det, du udvikler i og til Det Fælles Designsystem, skal således leve op til lovkravene om at understøtte <a href="https://www.w3.org/TR/WCAG21/" class="icon-link">WCAG 2.1<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a> på AA niveau.

Du bør derfor altid overveje følgende spørgsmål, før du udvikler nye funktioner:

- Er denne helt specielle og unikke løsning nødvendig?
- Tilfører den merværdi for brugeren?
- Kan vi gøre den tilgængelig uden funktionstab for brugerne?
- Kan vi løse behovet med en mere simpel og gennemprøvet model?

### Sådan tester du din løsnings tilgængelighed

Første skridt på vejen til en tilgængelig løsning er at sikre, at koden i din løsnings brugergrænseflade er valid og følger anbefalingerne fra WHATWG og W3C.

Vær opmærksom på, at tilgængelighed som udgangspunkt er slået fra i Safari. Husk derfor at slå den til under ”Avancerede indstillinger”, før du tester.

Når du skal teste for tilgængelighed, anbefaler Det Fælles Designsystem, at du som minimum anvender analyseværktøjer, som fx:

#### WebAIM

WebAIM er en hjemmeside, der er udviklet og drevet af Utah State University. Siden indeholder en række funktioner, der hjælper dig til at udvikle og teste for tilgængelighed. Deres anbefalinger er synkroniseret med krav og anbefalinger fra W3C.

WebAIM stiller funktionen Wave gratis til rådighed. Wave giver med det samme en analyse og rapport på din løsnings tilgængelighed og udfordringer.

##### Læs mere om WebAIM

<a href="https://webaim.org/resources/" class="icon-link">WebAIM<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>

#### Oplæsning

En af de store udfordringer i tilgængeligt design er at teste oplæsningen af sidens indhold, og der findes ikke en automatiseret måde at gøre det på. Browserproducenterne og de forskellige platforme har desuden meget forskellige tilgange til oplæsning. Alle har større eller mindre udfordringer - især med matematiske og fysiske særtegn.

Brug derfor disse tommelfingerregler i forhold til oplæsning:

- Er din kode valid HTML, og opfylder du kravene fra <a href="https://www.w3.org/TR/WCAG21/" class="icon-link">WCAG 2.1<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>, forhindrer din løsning ikke oplæsning af indholdet.
- Følg vejledningen fra WebAIM omkring aftestning med Voice Over (Mac) og Oplæser på Windows 10.

##### Læs mere om oplæsning

<ul class="nobullet-list">
<li><a href="https://webaim.org/articles/voiceover/" class="icon-link">Voice over<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a></li>
<li><a href="https://support.microsoft.com/da-dk/help/17173/windows-10-hear-text-read-aloud" class="icon-link">Windows 10 hear text<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a></li>
<li><a href="https://youtu.be/o_mvO6EQ0tM" class="icon-link">Introduction to Screen Readers<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a></li>
</ul>   

#### Chrome Developer Tools

Google Chrome stiller en lang række værktøjer til rådighed for test og fejlsøgning i en løsning. Ved at trykke på F12, når du står i Chrome, åbner Developer Tools alt lige fra kodevisning til performance-måling. Du kan se en farves tilgængelighedsniveau ved at klikke på farven i ”Elements” visning. Her kan du også justere den. Du kan se resultatet direkte i den aktuelle sidevisning på samme måde som ved redigering af øvrige parametre i Chrome Developer Tools.
