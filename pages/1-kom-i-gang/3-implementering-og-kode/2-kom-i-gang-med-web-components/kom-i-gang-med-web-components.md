---
permalink: "/kom-i-gang/implementering-kode/kom-i-gang-med-web-components/"
parentlink: "/kom-i-gang/implementering-kode/"
redirect_from:
layout: styleguide
category: kom_i_gang_menu
subcategory: Kom i gang
title: Kom i gang med Web Components
description: "Kom hurtigt i gang med Web Components."
lead: "Følg guiden herunder, og kom hurtigt i gang med Web Components"
tags:
- JavaScript
- custom
- web
- component
- components
---

{% include anchorlinks.html headings="Kom_i_gang_med_Web_Components" %}

## Sådan anvender du komponenterne {#{% include create-id.html heading="Sådan anvender du komponenterne" %}}

### Hent kodepakken fra npm {#{% include create-id.html heading="Hent kodepakken fra npm" %}}

Koden til Web Components ligger i samme `@dkfds/components`-pakke som de tidligere komponenter og kan derfor hentes på lignende vis:

{% include containers-for-code-and-examples/top-example-and-show-code-in-box.html example="web-component-installation" only_code=true %}

`dist`-mappen har fået en ny undermappe kaldet `web-components`, hvor både de byggede stylesheets og JavaScript-filer ligger. Derudover er der i `package.json` oprettet en ny eksportmulighed.

### Indlæsning af Web Components {#{% include create-id.html heading="Indlæsning af Web Components" %}}

Web Components kan indlæses på to måder beskrevet i nedenstående afsnit. Bemærk, at der udover nedenstående metoder kan være framework-specifikke behov for konfiguration, fx `compilerOptions.isCustomElement` i frameworket Vue. Konsultér dokumentationen for dit framework for at se mere om anvendelse af Web Components.

#### Almindeligt script tag

{% include containers-for-code-and-examples/top-example-and-show-code-in-box.html example="web-component-script" only_code=true %}

Når scriptet indlæses, registreres alle Web Components automatisk. Der kræves ikke yderligere kode, for at komponenterne virker. Nye Web Components skal ikke initialiseres, når de tilføjes, da dette klares automatisk af komponenten selv.

Hvis du ønsker at køre eksporterede funktioner ved brug af almindeligt script, skal du anvende variablen `DKFDSWebComponents`, eksempelvis `DKFDSWebComponents.registerCustomElements()`.

#### Bundler

{% include containers-for-code-and-examples/top-example-and-show-code-in-box.html example="web-component-import" only_code=true %}

Brug `import`, hvis dit projekt bruger en bundler til at samle din JavaScript-kode (fx Vite eller Webpack). Bemærk, at importen i sig selv ofte vil være nok til at registrere alle komponenter. Hvis du på trods af dette stadig ønsker at registrere komponenterne manuelt, kan du benytte `import { registerCustomElements } from 'dkfds/dkfds-web-components';` og køre funktionen `registerCustomElements()`. Det er ikke muligt at bruge native `<script type="module">` med en direkte import i browseren uden en bundler.

### CSS {#{% include create-id.html heading="CSS" %}}

Indlæs altid både det tidligere stylesheet og det nye til Web Components. Disse er endnu ikke fuldt uafhængige af hinanden.

### Eksempel på simpel HTML-side {#{% include create-id.html heading="Eksempel på simpel HTML-side" %}}

Følgende eksempel indsætter en toggle switch, sætter dens label med en attribut og aktiverer den visuelt for brugeren med en funktion tilhørende komponenten. Du kan se mulige attributter, funktioner og events under dokumentationen af hver komponent.

{% include containers-for-code-and-examples/top-example-and-show-code-in-box.html example="web-component-example" only_code=true %}

### Eksporterede funktioner {#{% include create-id.html heading="Eksporterede funktioner" %}}

Modulet `dkfds/dkfds-web-components` eksporterer, udover selve auto-registreringen, også en separat funktion for hver komponent (f.eks. registerToggleSwitch, registerAlert, osv.), hvis man ønsker at kalde dem direkte. Det er sikkert at kalde disse funktioner flere gange, selvom dette bør være unødvendigt.

### Kendte begrænsninger i beta-versionen {#{% include create-id.html heading="Kendte begrænsninger i beta-versionen" %}}

- Ingen understøttelse af server-side rendering (SSR)
- Ingen TypeScript-typedeklarationer

Følgende kan tilføjes i en .d.ts-fil for at undgå TypeScript-advarsler (uden at give egentlig typeunderstøttelse):

{% include containers-for-code-and-examples/top-example-and-show-code-in-box.html example="web-component-typescript" only_code=true %}

Hvis begrænsningerne giver dig udfordringer med at anvende koden, vil vi meget gerne have denne feedback.

## Baggrund for opbygning af Web Components {#{% include create-id.html heading="Baggrund for opbygning af Web Components" %}}

Da designsystemet bruges forskelligt fra projekt til projekt, har vi lagt vægt på, at komponenterne skal være fleksible at arbejde med. Derfor er de fleste af vores Web Components i første beta-version bygget uden Shadow DOM. Shadow DOM er en teknik, der isolerer en komponents interne HTML og styling fra resten af siden og beskytter den mod at blive påvirket af for eksempel scripts eller frameworks' opdateringer af siden. Dog giver det også mindre fleksibilitet for udviklere, fordi det ikke er muligt at få kontrol over al HTML. Det står i modsætning til Light DOM, hvor komponentens HTML indgår direkte i sidens almindelige DOM-struktur.

Brugen af Shadow DOM eller Light DOM i FDS er blevet vurderet fra komponent til komponent, og valget fremgår af hver komponents dokumentation. Denne vurdering kan ændre sig, i takt med at vi bliver klogere på behov og udfordringer. Vi er samtidig opmærksomme på, at Shadow DOM i visse situationer kan give tilgængelighedsudfordringer, hvorfor vi er forsigtige med, hvor og hvordan vi anvender det. Omvendt kan Shadow DOM gøre en komponent mere robust at bruge i frameworks. Både fleksibilitet, tilgængelighed og robusthed spiller derfor ind, når vi vurderer, hvilken tilgang der giver mest mening for den enkelte komponent.

Læs mere om {% include links/external-link.html linktext="Shadow DOM og tilgængelighed" %}.

## Vi har brug for din feedback {#{% include create-id.html heading="Vi har brug for din feedback" %}}

Overgangen vil lykkes bedst, hvis den er testet af de teams, der rent faktisk bruger designsystemet i hverdagen. Derfor vil vi meget gerne høre fra dig, hvis du:
- støder på fejl eller uventet adfærd i en eller flere af komponenterne
- oplever udfordringer med at integrere komponenterne i jeres framework
- har ønsker til valget mellem Light DOM og Shadow DOM for den enkelte komponent, fx om afvejningen mellem fleksibilitet og stabilitet i jeres framework fungerer godt for jer
- generelt har erfaringer, positive som negative, som I har lyst til at dele

Du kan {% include links/external-link.html linktext='dele din feedback via GitHub' %} eller {% include links/internal-link.html linktext="sende en e-mail" %}.