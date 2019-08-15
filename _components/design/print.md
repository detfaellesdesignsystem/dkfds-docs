---
permalink: /design/print/
layout: styleguide
title: Print
category: Design_category
lead: Sider kan struktureres, så de også fungerer godt ved print 
subcategory: Design
order: 25
---

<p>DKFDS giver nogle værktøjer, så man nemt kan tilpasse sider til print. Ved at tilføje visse klasser kan du vise, skjule eller ændre udseende på elementer ved print.</p>
<p>Derved kan du skjule eller vise visse elementer på siden, som enten ikke er relevante, eller kun relevante ved print. I browseren vil man dog ikke kunne se ændringen.</p>
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
<p>Nogle elementer er ikke relevant ved print, derfor anbefaler vi at skjule dem ved print. Dette gøres ved at tilføje klassen <code>d-print-none</code> på elementet.</p>
<p>Man sparer både plads og blæk, når man skjuler elementer, der ikke er relevate. Derudover giver det også et bedre overblik, når kun de nødvendige informationer vises.</p>
<p>Vi har udvalgt nogle eksempelløsninger, hvor du kan se eksempler på dette.</p>
<h3 class="h4">Knapper</h3>
<p>Knapper har ingen funktion på print, hvorfor vi anbefaler at man skjuler knappen.</p>
<h4 class="h5">Eksempler</h4>
<ul class="nobullet-list">
    <li><a href="/pages/eksempler/aktindsigt/aktindsigt-1" title="Aktindsigt, side 1">Aktindsigt, side 1</a></li>
    <li><a href="/pages/eksempler/aktindsigt/aktindsigt-4/" title="Aktindsigt, side 4">Aktindsigt, side 4</a></li>
    <li><a href="/pages/eksempler/AES-erstatningssag/aes-10/" title="Erstatningssag, side 10">Erstatningssag, side 10</a></li>
    <li><a href="/pages/eksempler/digital-flytning/flytning-2/" title="Digital flytning, side 2">Digital flytning, side 2</a></li>
</ul>
<h3 class="h4">Header</h3>
<p>I headeren bør kun de højst nødvendige informationer vises. Menuen, links og knapper er ikke relevante, bliver derfor skjult.</p>
<p>Hvis du har kontaktinformationer stående både i headeren og footeren bør én af dem skjules, da det ikke er nødvendigt at bruge plads på den samme information flere steder.</p>
<h4 class="h5">Eksempler</h4>
<ul class="nobullet-list">
    <li><a href="/components/headers/simple/" title="Standard header">Standard header</a></li>
    <li><a href="/components/headers/medium/" title="Standard header med topmenu">Standard header med topmenu</a></li>
    <li><a href="//components/headers/full/" title="Kompleks header">Kompleks header</a></li>
    <li><a href="/pages/eksempler/aktindsigt/aktindsigt-1" title="Aktindsigt, 1. side">Aktindsigt, side 1</a></li>
    <li><a href="/pages/eksempler/boernetilskud/boernetilskud-1/" title="Aktindsigt, 1. side">Aktindsigt, side 1</a></li>
</ul>
<h3 class="h4">Footer</h3>
<p>Nogle elementer i footeren kan være relevante ved print, så som kontaktoplysninger, men andre, så som privatlivspolitik eller andre links, er ikke relevante, da de ikke virker på print. Derfor anbefaler vi at man skjuler dem.</p>
<h4 class="h5">Eksempler</h4>
<ul class="nobullet-list">
    <li><a href="/components/footers/footer-simple/" title="Simpel footer eksempel">Simpel footer eksempel</a></li>
    <li><a href="/components/footers/footer-three-columns/" title="Footer med 3 kolonner">Footer med 3 kolonner</a></li>
    <li><a href="/components/footers/footer-four-columns/" title="Footer med 4 kolonner">Footer med 4 kolonner</a></li>
    <li><a href="/components/footers/footer-four-columns/" title="Kompleks footer">Kompleks footer</a></li>
    <li><a href="/components/footers/footer-logo/" title="Footer med logo">Footer med logo</a></li>
    <li><a href="/pages/eksempler/aktindsigt/aktindsigt-1" title="Aktindsigt, 1. side">Aktindsigt, side 1</a></li>
</ul>
<h3 class="h4">Responsiv tabel</h3>
<p>I nogle tilfælde, hvis man bruger en <a href="/komponenter/tables/#responsiv">responsiv tabel</a>, giver det mening at tabellen ikke er responsiv, når det kommer til print.</p>
<p>Hvis man ønsker at tabellen skal forblive normal ved print, kan man tilføje klassen <code>d-print-table</code> til <code>table</code> elementet.</p>
<h4 class="h5">Eksempler</h4>
<ul class="nobullet-list">
    <li><a href="/pages/eksempler/aktindsigt/aktindsigt-3/" title="Aktindsigt, side 1">Aktindsigt, side 3</a></li>
    <li><a href="/pages/eksempler/AES-erstatningssag/aes-6/" title="Erstatningssag, side 9">Erstatningssag, side 6</a></li>
    <li><a href="/pages/eksempler/AES-erstatningssag/aes-9/" title="Erstatningssag, side 9">Erstatningssag, side 9</a></li>
    <li><a href="/pages/eksempler/strategiske-virksomhedsalliancer/virksomhedsalliancer-5/" title="Strategiske virksomhedsalliancer, side 5">Strategiske virksomhedsalliancer, side 5</a></li>
</ul>






