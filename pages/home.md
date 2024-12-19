---
permalink: "/"
layout: landing
title: Forside
description: Vær med til at bygge simple og effektive selvbetjeningsløsninger fra
  et solidt grundlag, der lader dig fokusere på brugervenlighed og brugerinddragelse
  frem for at diskutere nyt design igen og igen.
---

<div class="bg-alternative py-9">
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-7">
                <h1 class="hyphens-manual">Design brugervenlige selvbetjenings&shy;løsninger</h1>
                <p class="font-lead">
                    Vær med til at lave simple og effektive selvbetjeningsløsninger til borger.dk og Virk. Lad os om det trivielle og sæt fokus på at inddrage dine brugere.
                </p>
                <ul class="nobullet-list d-flex flex-wrap">
                    <li>{% include links/internal-link.html linktext="Kom i gang som udvikler" classes="button button-secondary mr-4" icon="arrow-forward" %}</li>
                    <li>{% include links/internal-link.html linktext="Kom i gang som designer" classes="button button-secondary mr-4" icon="arrow-forward" %}</li>
                </ul>
            </div>
            <div class="col-12 col-lg-5 align-text-center">
                <img id="designsystem-illustration" src="{{ site.baseurl }}/assets/img/descriptionimages/Forside_illu_virk.svg" alt="" class="d-none d-lg-inline-block">
            </div>
        </div>
    </div>
</div>

<div class="container mt-905">
    <h2 class="pt-3">Designsystemet</h2>
    <ul class="row card-row">
        <li class="col-12 col-sm-6 col-md-4">
            {% include navcard-short.html img=true style="style='aspect-ratio: 368 / 150; background-color: #F5F5F5;'" headingLevel="h3" 
            href="/styleguide/"
            id="card-styleguide"  
            heading="Styleguide" 
            content="Disse grundlæggende beslutninger udgør det visuelle fundament for designsystemets komponenter og retningslinjer." 
            %}
        </li>
        <li class="col-12 col-sm-6 col-md-4">
            {% include navcard-short.html img=true style="style='aspect-ratio: 368 / 150; background-color: #F5F5F5;'" headingLevel="h3" 
            href="/komponenter/"
            id="card-komponenter"  
            heading="Komponenter" 
            content="Komponenterne er byggeklodserne, som du kan bruge til at bygge den løsning, dine brugere har behov for." 
            %}
        </li>
        <li class="col-12 col-sm-6 col-md-4">
            {% include navcard-short.html img=true style="style='aspect-ratio: 368 / 150; background-color: #F5F5F5;'" headingLevel="h3" 
            href="/eksempler/"
            id="card-eksempler"  
            heading="Eksempler" 
            content="Få inspiration til, hvordan designsystemet kan anvendes til at bygge selvbetjenings­-løsninger." 
            %}
        </li>
    </ul>
</div>

<div class="container mt-6">
    <h2>Følg med</h2>
    <div class="row card-row">
        <div class="col-12 col-sm-6">
            <section class="new-card">
                <div class="new-card-content">
                    <h3>Seneste release</h3>
                    <p>Version 10.0.0</p>
                    <p class="mt-0">13-06-2024</p>
                    <p>Det Fælles Designsystem bliver løbende opdateret og vedligeholdt. Læs release notes for at følge med i udviklingen, og tilmeld nyhedsbrevet for at få besked, når der kommer nye versioner af designsystemet.</p>
                </div>
                <div class="card-actions">
                    <ul class="nobullet-list">
                        <li><a href="/faellesskab/releases/">Release notes</a></li>
                        <li><a href="/faellesskab/nyhedsmail/">Tilmeld nyhedsbrevet</a></li>
                    </ul>
                </div>
            </section>
        </div>
        <div class="col-12 col-sm-6">
            <section class="new-card">
                <div class="new-card-content">
                    <h3>Samarbejde og hjælp</h3>
                    <p>For at sikre transparens er systemet åbent for alle. Alle myndigheder med en interesse i at præge udviklingen og få indflydelse på designsystemets indhold er velkomne til at dele deres erfaringer med teamet bag designsystemet. </p>
                </div>
                <div class="card-actions">
                    <ul class="nobullet-list">
                        <li><a href="/faellesskab/samarbejdsforum/">Deltag i samarbejdsforum</a></li>
                        <li><a href="/kom-i-gang/faq/">Ofte stillede spørgsmål</a></li>
                        <li><a href="/faellesskab/kontakt-support/">Kontakt os</a></li>
                    </ul>
                </div>
            </section>
        </div>
    </div>
</div>
