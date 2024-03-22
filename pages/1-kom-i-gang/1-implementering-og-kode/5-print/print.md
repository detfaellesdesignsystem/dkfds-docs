---
permalink: "/kom-i-gang/implementering-kode/print/"
parentlink: "/kom-i-gang/implementering-kode/"
redirect_from:
- "/design/print/"
- "/kode/print/"
layout: styleguide
category: Kom_i_gang_category
subcategory: Kom i gang
title: Print
lead: Sider kan struktureres, så de også fungerer godt ved print.
description: "FDS giver nogle værktøjer til at strukturere dine sider, så de også fungerer godt ved print."
headings: Print
anchorlinks: true
tags:
---

{% assign headings = site.data.headings[page.headings] %}

[---- CSS-klasser -------------------------------------]: # 
<h2 id="{{ headings[0].id }}">{{ headings[0].h2 }}</h2>

DKFDS giver nogle værktøjer, så man nemt kan tilpasse sider til print. Ved at tilføje visse klasser kan du vise, skjule eller ændre udseende på elementer ved print.

Derved kan du skjule eller vise visse elementer på siden, som enten ikke er relevante, eller kun relevante ved print. I browseren vil man dog ikke kunne se ændringen.

<div class="table--responsive-scroll">
    <table class="table">
        <thead>
            <tr>
                <th>CSS klasse</th>
                <th>Beskrivelse</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>d-print-none</td>
                <td>Skjuler element ved print</td>
            </tr>
            <tr>
                <td>d-print-inline</td>
                <td>Tilføjer <code>display: inline;</code> ved print</td>
            </tr>
            <tr>
                <td>d-print-inline-block</td>
                <td>Tilføjer <code>display: inline-block;</code> ved print</td>
            </tr>
            <tr>
                <td>d-print-block</td>
                <td>Tilføjer <code>display: block;</code> ved print</td>
            </tr>
            <tr>
                <td>d-print-table</td>
                <td>Tilføjer <code>display: table;</code> ved print</td>
            </tr>
            <tr>
                <td>d-print-table-row</td>
                <td>Tilføjer <code>display: table-row;</code> ved print</td>
            </tr>
            <tr>
                <td>d-print-table-cell</td>
                <td>Tilføjer <code>display: table-cell;</code> ved print</td>
            </tr>
            <tr>
                <td>d-print-flex</td>
                <td>Tilføjer <code>display: flex;</code> ved print</td>
            </tr>
            <tr>
                <td>d-print-inline-flex</td>
                <td>Tilføjer <code>display: inline-flex;</code> ved print</td>
            </tr>
        </tbody>
    </table>
</div>

[---- Eksempler på skjul af elementer -------------------------------------]: # 
<h2 id="{{ headings[1].id }}">{{ headings[1].h2 }}</h2>

Nogle elementer er ikke relevant ved print, derfor anbefaler vi at skjule dem ved print. Dette gøres ved at tilføje klassen `d-print-none` på elementet.

Man sparer både plads og blæk, når man skjuler elementer, der ikke er relevate. Derudover giver det også et bedre overblik, når kun de nødvendige informationer vises.

Vi har udvalgt nogle eksempelløsninger, hvor du kan se eksempler på dette.

### Knapper

Knapper har ingen funktion på print, hvorfor vi anbefaler at man skjuler knappen.

{:.h5 #knapper-eksempelloesninger}
#### Eksempler

{:.nobullet-list}
- {% include links/demo-link.html linktext="Formular til kontaktoplysninger: Kvittering" returnID="knapper-eksempelloesninger" %}
- {% include links/demo-link.html linktext="Trinformular til ansøgning: Kvittering" returnID="knapper-eksempelloesninger" %}
- {% include links/demo-link.html linktext="Sagsoversigt: Sagsnr. 123456789" returnID="knapper-eksempelloesninger" %}

### Header

I headeren bør kun de højst nødvendige informationer vises. Menuen, links og knapper er ikke relevante, bliver derfor skjult.

Hvis du har kontaktinformationer stående både i headeren og footeren bør én af dem skjules, da det ikke er nødvendigt at bruge plads på den samme information flere steder.

{:.h5 #header-eksempelloesninger}
#### Eksempler

{:.nobullet-list}
- {% include links/example-link.html linktext="Header med navigation og søgefelt" %}
- {% include links/demo-link.html linktext="Formular til kontaktoplysninger: Oplysninger om dig" returnID="header-eksempelloesninger" %}
- {% include links/demo-link.html linktext="Trinformular til registrering: Vælg personer" returnID="header-eksempelloesninger" %}

### Footer

Nogle elementer i footeren kan være relevante ved print, så som kontaktoplysninger, men andre, så som privatlivspolitik eller andre links, er ikke relevante, da de ikke virker på print. Derfor anbefaler vi at man skjuler dem.

{:.h5 #footer-eksempelloesninger}
#### Eksempler

{:.nobullet-list}
- {% include links/example-link.html linktext="Simpel footer" %}
- {% include links/example-link.html linktext="Footer med tre kolonner" %}
- {% include links/example-link.html linktext="Footer med fire kolonner" %}
- {% include links/example-link.html linktext="Kompleks footer" %}
- {% include links/example-link.html linktext="Footer med logo" %}
- {% include links/demo-link.html linktext="Formular til kontaktoplysninger: Oplysninger om dig" returnID="footer-eksempelloesninger" %}

### Responsiv tabel

I nogle tilfælde, hvis man bruger {% include links/component-guideline-link.html linktext="en responsiv tabel" %}, giver det mening at tabellen ikke er responsiv, når det kommer til print.

Hvis man ønsker at tabellen skal forblive normal ved print, kan man tilføje klassen `d-print-table` til `table` elementet.

{:.h5 #tabel-eksempelloesninger}
#### Eksempler

{:.nobullet-list}
- {% include links/demo-link.html linktext="Trinformular til registrering: Vælg noget mere" returnID="tabel-eksempelloesninger" %}
- {% include links/demo-link.html linktext="Trinformular til registrering: Opsummering" returnID="tabel-eksempelloesninger" %}
- {% include links/demo-link.html linktext="Trinformular til ansøgning: Tilføj dokumentation" returnID="tabel-eksempelloesninger" %}
