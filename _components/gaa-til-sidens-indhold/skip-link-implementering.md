---
permalink: "/komponenter/skip-link/implementering/"
guidelinelink: "/komponenter/skip-link/guidelines/"
redirect_from:
- "/kode/komponenter/skip-link/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Gå til sidens indhold (Skip-link)
lead: "Skip-links anvendes til at give brugere, der navigerer med tastatur, en bedre oplevelse. Brugerens første tryk på tab-tasten vil få et skjult link til at komme frem, der lader brugeren skippe menuen og gå direkte til sidens indhold."
previewimage: "skip-link-eksempel"
previewimageTitle: "Eksempel på skip-link"
previewimageImage: "skiplink"
anchor: false
description: "Dokumentation på implementering af skip-link."
tags: 
---

<div id="skiplink-guidelines-section">
    <h2 id="retningslinjer">Sådan bruges komponenten</h2>
    <h3>Anvendes til</h3>
    <p>Skip-link skal anvendes på alle sider.</p>
    <p>Skip-linket gør det muligt for brugere, der anvender tasturet til navigation, at navigere direkte til sidens indhold.</p>
    <h3>Anvendes ikke til</h3>
    <p>Andre former for navigation.</p>
    <h3>Vejledning</h3>
    <p>Et skip-link er et skjult link, der kun vises, når en bruger navigerer på siden ved at bruge tastaturet.</p>
    <p>Når brugeren trykker på linket (med tastatur eller mus) sættes fokus på første indholdselement på den aktuelle side.</p>
    <p>Det vil sige at brugere, der anvender tastaturet til at navigere siden med, kan undgå at få læst alle menupunkter op, før de får adgang til selve indholdet.</p>
</div>

<div id="skiplink-code-section">
    <h2>Installation</h2>
    <h3>HTML Struktur</h3>
    {% include code/syntax.html component="skiplink" copybutton=true %}
    <p>Skip-link <code>&lt;a&gt;</code> elementet indsættes som første, klikbare element i <code>&lt;body&gt;</code>. Elementet skal være det første element, der kommer i fokus på siden ved brug af tastaturet bortset fra en eventuel {% include links/component-guideline-link.html linktext="cookiemeddelelse" %} (GOV.UK, Skip link).</p>
    <p>Skip-link gør brug af anchorlink <code>#main-content</code>, man skal derfor huske at sætte <code>id="main-content"</code> på det element, der omkranser indholdet på siden.</p>
    <h2 id="ref">Referencer</h2>
    <ul class="nobullet-list">
        <li>{% include links/external-link.html linktext="GOV.UK Design System - Skip link" %}</li>
    </ul>
</div>

<script>
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("skiplink-guidelines-section").classList.add('d-none');
        let tabs = document.querySelectorAll('.tab-button');
        tabs[0].addEventListener("click", function(e) {
            e.preventDefault();
            document.getElementById("skiplink-guidelines-section").classList.remove('d-none');
            document.getElementById("skiplink-code-section").classList.add('d-none');
            tabs[1].removeAttribute('aria-current');
            tabs[0].setAttribute('aria-current', 'page');
            document.querySelector('.component-preview-skip-link-eksempel').classList.remove('d-none');
            history.replaceState(null, null, window.location.origin + '/komponenter/skip-link/guidelines/');
        });
        tabs[1].addEventListener("click", function(e) {
            e.preventDefault();
            document.getElementById("skiplink-guidelines-section").classList.add('d-none');
            document.getElementById("skiplink-code-section").classList.remove('d-none');
            tabs[0].removeAttribute('aria-current');
            tabs[1].setAttribute('aria-current', 'page');
            document.querySelector('.component-preview-skip-link-eksempel').classList.add('d-none');
            history.replaceState(null, null, window.location.origin + '/komponenter/skip-link/implementering/');
        });
        tabs[0].addEventListener("keydown", function(e) {
            let key = e.key;
            if (key === 'Enter' || key === ' ') {
                e.preventDefault();
                document.getElementById("skiplink-guidelines-section").classList.remove('d-none');
                document.getElementById("skiplink-code-section").classList.add('d-none');
                tabs[1].removeAttribute('aria-current');
                tabs[0].setAttribute('aria-current', 'page');
                document.querySelector('.component-preview-skip-link-eksempel').classList.remove('d-none');
                history.replaceState(null, null, window.location.origin + '/komponenter/skip-link/guidelines/');
            }
        });
        tabs[1].addEventListener("keydown", function(e) {
            let key = e.key;
            if (key === 'Enter' || key === ' ') {
                e.preventDefault();
                document.getElementById("skiplink-guidelines-section").classList.add('d-none');
                document.getElementById("skiplink-code-section").classList.remove('d-none');
                tabs[0].removeAttribute('aria-current');
                tabs[1].setAttribute('aria-current', 'page');
                document.querySelector('.component-preview-skip-link-eksempel').classList.add('d-none');
                history.replaceState(null, null, window.location.origin + '/komponenter/skip-link/implementering/');
            }
        });
    });
</script>