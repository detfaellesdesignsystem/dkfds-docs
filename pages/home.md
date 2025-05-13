---
permalink: "/"
layout: landing
title: Forside
description: Brug Det Fælles Designsystem til at lave simple og effektive selvbetjeningsløsninger til borger.dk og Virk. Lad os om det grundlæggende, og sæt fokus på at inddrage dine brugere. Det er gratis (open source).
---

<div class="frontpage-banner">
    <div class="container">
        <div class="row">
            <div class="col-12 align-text-center d-flex align-items-center d-lg-none bg-alternative justify-content-center tablet-row">
                <img class="designsystem-illustration" src="{{ site.baseurl }}/assets/img/descriptionimages/hero-virk.png" alt="">
            </div>
            <div class="col-12 col-lg-6 mt-8 mt-lg-0 py-lg-9">
                <h1 class="hyphens-manual">Lav brugervenlige og tilgængelige selvbetjenings&shy;løsninger</h1>
                <p class="font-lead">
                    Brug Det Fælles Designsystem til at lave simple og effektive selvbetjeningsløsninger til borger.dk og Virk. Lad os om det grundlæggende, og sæt fokus på at inddrage dine brugere. Det er gratis (open source).
                </p>
                <ul class="nobullet-list d-flex flex-wrap">
                    <li>{% include links/internal-link.html linktext="Kom i gang: Udvikling" classes="button button-secondary mr-4" icon="arrow-forward" %}</li>
                    <li>{% include links/internal-link.html linktext="Kom i gang: Design" classes="button button-secondary mr-4" icon="arrow-forward" %}</li>
                </ul>
            </div>
            <div class="col-6 justify-content-center align-items-center d-none d-lg-flex desktop-row">
                <img class="designsystem-illustration" src="{{ site.baseurl }}/assets/img/descriptionimages/hero-virk.png" alt="">
            </div>
        </div>
    </div>
</div>

<div class="container mt-6 mt-lg-905">
    <h2 class="pt-3">Designsystemet</h2>
    <ul class="row card-row">
        <li class="col-12 col-sm-6 col-md-4">
            {% include cards/navcard-frontpage.html 
            href="/styleguide/"
            id="card-styleguide"  
            heading="Styleguide" 
            content="Disse grundlæggende beslutninger udgør det visuelle fundament for designsystemets komponenter og retningslinjer." 
            %}
        </li>
        <li class="col-12 col-sm-6 col-md-4">
            {% include cards/navcard-frontpage.html
            href="/komponenter/"
            id="card-komponenter"  
            heading="Komponenter" 
            content="Komponenterne er byggeklodserne, som du kan bruge til at bygge den løsning, dine brugere har behov for." 
            %}
        </li>
        <li class="col-12 col-sm-6 col-md-4">
            {% include cards/navcard-frontpage.html 
            href="/eksempler/"
            id="card-eksempler"  
            heading="Eksempler" 
            content="Få inspiration til, hvordan designsystemet kan anvendes til at bygge selvbetjenings­-løsninger." 
            %}
        </li>
    </ul>
</div>

<div class="container mt-6">
    <h2 class="mb-0">Følg med</h2>
    <div class="row">
        <div class="col-12 col-sm-6">
            <h3>Seneste release</h3>
            <p class="mb-0">Version 11.0.0</p>
            <p class="small-text mt-0">??-??-2025</p>
            <p>Det Fælles Designsystem bliver løbende opdateret og vedligeholdt. Læs release notes for at følge med i udviklingen, og tilmeld nyhedsbrevet for at få besked, når der kommer nye versioner af designsystemet.</p>
            <ul class="nobullet-list">
                <li>{% include links/internal-link.html linktext="Release notes" %}</li>
                <li>{% include links/internal-link.html linktext="Tilmeld nyhedsbrevet" %}</li>
            </ul>
        </div>
        <div class="col-12 col-sm-6">
            <h3>Samarbejde og hjælp</h3>
            <p>For at sikre transparens er systemet åbent for alle. Alle myndigheder med en interesse i at præge udviklingen og få indflydelse på designsystemets indhold er velkomne til at dele deres erfaringer med teamet bag designsystemet.</p>
            <ul class="nobullet-list">
                <li>{% include links/internal-link.html linktext="Deltag i samarbejdsforum" %}</li>
                <li>{% include links/internal-link.html linktext="Ofte stillede spørgsmål" %}</li>
                <li>{% include links/internal-link.html linktext="Kontakt os" %}</li>
            </ul>
        </div>
    </div>
</div>
