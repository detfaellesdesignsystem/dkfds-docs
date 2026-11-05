---
permalink: "/kom-i-gang/web-components-i-beta-version/"
parentlink: "/kom-i-gang/"
redirect_from:
layout: styleguide
category: kom_i_gang_menu
subcategory: Kom i gang
title: Web Components i beta-version
description: "Vi omskriver designsystemets kode til Web Components. Det gør komponenterne mere robuste, lettere at vedligeholde og nemmere at bruge på tværs af forskellige frameworks."
lead: "Vi er i gang med en større teknisk ændring af designsystemet: Vi opgraderer den underliggende kodebase fra en ældre arkitektur til Web Components, der er en mere moderne måde at skrive komponenter på i JavaScript. Læs mere i de følgende afsnit om, hvad ændringen betyder i praksis, og hvordan du kan hjælpe os med at gøre koden bedre."
tags:
- JavaScript
- custom
- web
- component
- components
---

{% include anchorlinks.html headings="Web_Components_i_beta_version" %}

## Hvorfor skifter vi til Web Components? {#{% include create-id.html heading="Hvorfor skifter vi til Web Components?" %}}

Designsystemet bliver i dag brugt på tværs af mange forskellige projekter og teams og dermed også på tværs af forskellige frontend-frameworks. Med den tidligere JavaScript-arkitektur har det krævet ekstra arbejde at integrere komponenterne korrekt i frameworks, uanset om det er Vue, Angular, React eller noget helt fjerde. Web Components er stadig ren Vanilla JS ligesom den tidligere kode, men bruger en mere moderne tilgang, hvor formålet er at gøre det lettere at bruge komponenterne as-is, også i frameworks, og lettere at opgradere til nye versioner, da mere af HTML'en ligger i selve elementet.

## Web Components som beta-version {#{% include create-id.html heading="Web Components som beta-version" %}}

Vi udgiver i første omgang en række udvalgte komponenter som Web Components. Det er bevidst et begrænset udvalg, fordi vi er i en betafase, hvor formålet er at teste tilgangen i praksis, samle erfaringer og rette eventuelle problemer, inden vi udruller det til resten af designsystemet. Betakomponenterne kan bruges side om side med den tidligere kode. Vær dog opmærksom på, at koden til Web Components ligger i nye stylesheets og scripts, som skal tilføjes særskilt. Se siden {% include links/internal-link.html linktext="Kom i gang med Web Components" %}.

For alle komponenter gælder, at:
- De udvalgte komponenter er testede, tilgængelige og opbygget så fleksibelt som muligt. Hvis vi undervejs får feedback der bliver implementeret, kan enkelte komponenter ændre sig. Vi vil informere om eventuelle ændringer i release notes.
- Dokumentationen bliver løbende opdateret i takt med, at vi lærer mere.
- Designsystemet udvides løbende med flere komponenter.

Vær også opmærksom på, om dit framework kræver særlig konfiguration eller andre ændringer, når du tager Web Components i brug.

<details class="details">
    <summary class="details-summary">Liste over komponenter med Web Component-kode</summary>
    <div class="details-text">
        <ul>
            <li>{% include links/component-web-component-link.html linktext="Accordions" %}</li>
            <li>{% include links/component-web-component-link.html linktext="Beskeder" %}</li>
            <li>{% include links/component-web-component-link.html linktext="Cookiemeddelelse" %}</li>
            <li>{% include links/component-web-component-link.html linktext="Datofelter" %}</li>
            <li>{% include links/component-web-component-link.html linktext="Datovælger" %}</li>
            <li>{% include links/component-web-component-link.html linktext="Dropdown" %}</li>
            <li>{% include links/component-web-component-link.html linktext="Faneblade" %}</li>
            <li>{% include links/component-web-component-link.html linktext="Fejlmeddelelser" %}</li>
            <li>{% include links/component-web-component-link.html linktext="Fejlopsummering" %}</li>
            <li>{% include links/component-web-component-link.html linktext="Header" %}</li>
            <li>{% include links/component-web-component-link.html linktext="Inputfelter" %}</li>
            <li>{% include links/component-web-component-link.html linktext="Modal" %}</li>
            <li>{% include links/component-web-component-link.html linktext="Multiselect" %}</li>
            <li>{% include links/component-web-component-link.html linktext="Overflow menu" %}</li>
            <li>{% include links/component-web-component-link.html linktext="Radioknap" %}</li>
            <li>{% include links/component-web-component-link.html linktext="Tekstområde" %}</li>
            <li>{% include links/component-web-component-link.html linktext="Tjekboks" %}</li>
            <li>{% include links/component-web-component-link.html linktext="Toggle switch" %}</li>
            <li>{% include links/component-web-component-link.html linktext="Tooltip" %}</li>
            <li>{% include links/component-web-component-link.html linktext="Trinindikator" %}</li>
        </ul>
    </div>
</details>

## Vi har brug for din feedback {#{% include create-id.html heading="Vi har brug for din feedback" %}}

Overgangen vil lykkes bedst, hvis den er testet af de teams, der rent faktisk bruger designsystemet i hverdagen. Derfor vil vi meget gerne høre fra dig, hvis du:
- støder på fejl eller uventet adfærd i en eller flere af komponenterne
- oplever udfordringer med at integrere komponenterne i jeres framework
- har ønsker til valget mellem Light DOM og Shadow DOM for den enkelte komponent, fx om afvejningen mellem fleksibilitet og stabilitet i jeres framework fungerer godt for jer
- generelt har erfaringer, positive som negative, som I har lyst til at dele

Du kan {% include links/external-link.html linktext='dele din feedback via GitHub' %} eller {% include links/internal-link.html linktext="sende en e-mail" %}.