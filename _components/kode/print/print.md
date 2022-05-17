---
permalink: /kode/print/
redirect_from:
- /design/print/
title: Print
layout: styleguide
type: component
category: Kode_category
subcategory: Kode
lead: Sider kan struktureres, så de også fungerer godt ved print.
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

<ul class="nobullet-list">
    <li><a href="/pages/eksempler/aktindsigt/aktindsigt-1/?r={{page.permalink}}%23knapper-eksempelloesninger" title="Aktindsigt, side 1">Aktindsigt, side 1</a></li>
    <li><a href="/pages/eksempler/AES-erstatningssag/aes-10/?r={{page.permalink}}%23knapper-eksempelloesninger" title="Erstatningssag, side 10">Erstatningssag, side 10</a></li>
    <li><a href="/pages/eksempler/digital-flytning/flytning-2/?r={{page.permalink}}%23knapper-eksempelloesninger" title="Digital flytning, side 2">Digital flytning, side 2</a></li>
</ul>

<h3 class="h4">Header</h3>

I headeren bør kun de højst nødvendige informationer vises. Menuen, links og knapper er ikke relevante, bliver derfor skjult.

Hvis du har kontaktinformationer stående både i headeren og footeren bør én af dem skjules, da det ikke er nødvendigt at bruge plads på den samme information flere steder.

{:.h5 #header-eksempelloesninger}
#### Eksempler

<ul class="nobullet-list">
    <li><a href="/eksempel/header-simple/?r={{page.permalink}}%23header-eksempelloesninger" title="Standard header">Standard header</a></li>
    <li><a href="/eksempel/header-medium/?r={{page.permalink}}%23header-eksempelloesninger" title="Standard header med topmenu">Standard header med topmenu</a></li>
    <li><a href="/eksempel/header-full/?r={{page.permalink}}%23header-eksempelloesninger" title="Kompleks header">Kompleks header</a></li>
    <li><a href="/pages/eksempler/aktindsigt/aktindsigt-1?r={{page.permalink}}%23header-eksempelloesninger" title="Aktindsigt, 1. side">Aktindsigt, side 1</a></li>
    <li><a href="/pages/eksempler/boernetilskud/boernetilskud-1/?r={{page.permalink}}%23header-eksempelloesninger" title="Aktindsigt, 1. side">Aktindsigt, side 1</a></li>
</ul>

<h3 class="h4">Footer</h3>

Nogle elementer i footeren kan være relevante ved print, så som kontaktoplysninger, men andre, så som privatlivspolitik eller andre links, er ikke relevante, da de ikke virker på print. Derfor anbefaler vi at man skjuler dem.

{:.h5 #footer-eksempelloesninger}
#### Eksempler

<ul class="nobullet-list">
    <li><a href="/eksempel/footer-simple/?r={{page.permalink}}%23footer-eksempelloesninger" title="Simpel footer eksempel">Simpel footer eksempel</a></li>
    <li><a href="/eksempel/footer-three-columns/?r={{page.permalink}}%23footer-eksempelloesninger" title="Footer med 3 kolonner">Footer med 3 kolonner</a></li>
    <li><a href="/eksempel/footer-four-columns/?r={{page.permalink}}%23footer-eksempelloesninger" title="Footer med 4 kolonner">Footer med 4 kolonner</a></li>
    <li><a href="/eksempel/footer-four-columns/?r={{page.permalink}}%23footer-eksempelloesninger" title="Kompleks footer">Kompleks footer</a></li>
    <li><a href="/eksempel/footer-logo/?r={{page.permalink}}%23footer-eksempelloesninger" title="Footer med logo">Footer med logo</a></li>
    <li><a href="/pages/eksempler/aktindsigt/aktindsigt-1/?r={{page.permalink}}%23footer-eksempelloesninger" title="Aktindsigt, 1. side">Aktindsigt, side 1</a></li>
</ul>

<h3 class="h4">Responsiv tabel</h3>

I nogle tilfælde, hvis man bruger en <a href="/komponenter/tables/#responsiv">responsiv tabel</a>, giver det mening at tabellen ikke er responsiv, når det kommer til print.

Hvis man ønsker at tabellen skal forblive normal ved print, kan man tilføje klassen `d-print-table` til `table` elementet.

{:.h5 #tabel-eksempelloesninger}
#### Eksempler

<ul class="nobullet-list">
    <li><a href="/pages/eksempler/aktindsigt/aktindsigt-3/?r={{page.permalink}}%23tabel-eksempelloesninger" title="Aktindsigt, side 1">Aktindsigt, side 3</a></li>
    <li><a href="/pages/eksempler/AES-erstatningssag/aes-6/?r={{page.permalink}}%23tabel-eksempelloesninger" title="Erstatningssag, side 9">Erstatningssag, side 6</a></li>
    <li><a href="/pages/eksempler/AES-erstatningssag/aes-9/?r={{page.permalink}}%23tabel-eksempelloesninger" title="Erstatningssag, side 9">Erstatningssag, side 9</a></li>
    <li><a href="/pages/eksempler/strategiske-virksomhedsalliancer/virksomhedsalliancer-5/?r={{page.permalink}}%23tabel-eksempelloesninger" title="Strategiske virksomhedsalliancer, side 5">Strategiske virksomhedsalliancer, side 5</a></li>
</ul>
