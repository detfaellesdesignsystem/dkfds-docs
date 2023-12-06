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
anchor: false
description: "FDS giver nogle værktøjer til at strukturere dine sider, så de også fungerer godt ved print."
tags:
---

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

<h2 class="h3">Eksempler på skjul af elementer</h2>

Nogle elementer er ikke relevant ved print, derfor anbefaler vi at skjule dem ved print. Dette gøres ved at tilføje klassen `d-print-none` på elementet.

Man sparer både plads og blæk, når man skjuler elementer, der ikke er relevate. Derudover giver det også et bedre overblik, når kun de nødvendige informationer vises.

Vi har udvalgt nogle eksempelløsninger, hvor du kan se eksempler på dette.

<h3 class="h4">Knapper</h3>

Knapper har ingen funktion på print, hvorfor vi anbefaler at man skjuler knappen.

{:.h5 #knapper-eksempelloesninger}
#### Eksempler

{:.nobullet-list}
- <a href="/pages/eksempler/formular-til-kontaktoplysninger/formular-3/?r={{page.permalink}}%23knapper-eksempelloesninger" title="Vis eksempel 'Formular til kontaktoplysninger: Kvittering'">Formular til kontaktoplysninger: Kvittering</a>
- <a href="/pages/eksempler/trinformular-til-ansoegning/ansoegning-6/?r={{page.permalink}}%23knapper-eksempelloesninger" title="Vis eksempel 'Trinformular til ansøgning: Kvittering'">Trinformular til ansøgning: Kvittering</a>
- <a href="/pages/eksempler/sagsoversigt/find-sag/sagsnr-123456789/?r={{page.permalink}}%23knapper-eksempelloesninger" title="Vis eksempel 'Sagsoversigt: Sagsnr. 123456789'">Sagsoversigt: Sagsnr. 123456789</a>

<h3 class="h4">Header</h3>

I headeren bør kun de højst nødvendige informationer vises. Menuen, links og knapper er ikke relevante, bliver derfor skjult.

Hvis du har kontaktinformationer stående både i headeren og footeren bør én af dem skjules, da det ikke er nødvendigt at bruge plads på den samme information flere steder.

{:.h5 #header-eksempelloesninger}
#### Eksempler

{:.nobullet-list}
- <a href="/eksempel/header-all-rows/?r={{page.permalink}}%23header-eksempelloesninger" title="Standard header">Standard header</a>
- <a href="/pages/eksempler/formular-til-kontaktoplysninger/formular-1/?r={{page.permalink}}%23header-eksempelloesninger" title="Vis eksempel 'Formular til kontaktoplysninger: Oplysninger om dig'">Formular til kontaktoplysninger: Oplysninger om dig</a>
- <a href="/pages/eksempler/trinformular-til-registrering/registrering-1/?r={{page.permalink}}%23header-eksempelloesninger" title="Vis eksempel 'Trinformular til registrering: Vælg personer'">Trinformular til registrering: Vælg personer</a>

<h3 class="h4">Footer</h3>

Nogle elementer i footeren kan være relevante ved print, så som kontaktoplysninger, men andre, så som privatlivspolitik eller andre links, er ikke relevante, da de ikke virker på print. Derfor anbefaler vi at man skjuler dem.

{:.h5 #footer-eksempelloesninger}
#### Eksempler

{:.nobullet-list}
- <a href="/eksempel/footer-simple/?r={{page.permalink}}%23footer-eksempelloesninger" title="Simpel footer eksempel">Simpel footer eksempel</a>
- <a href="/eksempel/footer-three-columns/?r={{page.permalink}}%23footer-eksempelloesninger" title="Footer med 3 kolonner">Footer med 3 kolonner</a>
- <a href="/eksempel/footer-four-columns/?r={{page.permalink}}%23footer-eksempelloesninger" title="Footer med 4 kolonner">Footer med 4 kolonner</a>
- <a href="/eksempel/footer-four-columns/?r={{page.permalink}}%23footer-eksempelloesninger" title="Kompleks footer">Kompleks footer</a>
- <a href="/eksempel/footer-logo/?r={{page.permalink}}%23footer-eksempelloesninger" title="Footer med logo">Footer med logo</a>
- <a href="/pages/eksempler/formular-til-kontaktoplysninger/formular-1/?r={{page.permalink}}%23footer-eksempelloesninger" title="Vis eksempel 'Formular til kontaktoplysninger: Oplysninger om dig'">Formular til kontaktoplysninger: Oplysninger om dig</a>

<h3 class="h4">Responsiv tabel</h3>

I nogle tilfælde, hvis man bruger {% include links/component-links.html linktext="en responsiv tabel" %}, giver det mening at tabellen ikke er responsiv, når det kommer til print.

Hvis man ønsker at tabellen skal forblive normal ved print, kan man tilføje klassen `d-print-table` til `table` elementet.

{:.h5 #tabel-eksempelloesninger}
#### Eksempler

{:.nobullet-list}
- <a href="/pages/eksempler/trinformular-til-registrering/registrering-2/?r={{page.permalink}}%23tabel-eksempelloesninger" title="Vis eksempel 'Trinformular til registrering: Vælg noget mere'">Trinformular til registrering: Vælg noget mere</a>
- <a href="/pages/eksempler/trinformular-til-registrering/registrering-6/?r={{page.permalink}}%23tabel-eksempelloesninger" title="Vis eksempel 'Trinformular til registrering: Opsummering'">Trinformular til registrering: Opsummering</a>
- <a href="/pages/eksempler/trinformular-til-ansoegning/ansoegning-4/?r={{page.permalink}}%23tabel-eksempelloesninger" title="Vis eksempel 'Trinformular til ansøgning: Tilføj dokumentation'">Trinformular til ansøgning: Tilføj dokumentation</a>
