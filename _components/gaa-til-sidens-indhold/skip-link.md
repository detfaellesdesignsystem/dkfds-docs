---
permalink: "/komponenter/skip-link/guidelines/"
redirect_from:
- "/komponenter/skip-link/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Gå til sidens indhold (Skip-link)
lead: "Skip-links anvendes til at give brugere, der navigerer med tastatur, en bedre oplevelse. Brugerens første tryk på tab-tasten vil få et skjult link til at komme frem, der lader brugeren skippe menuen og gå direkte til sidens indhold."
previewimage: "skip-link-eksempel"
previewimageTitle: "Eksempel på skip-link"
previewimageImage: "skiplink"
headings: Skiplink
anchorlinks: false
description: "Skip-links anvendes til at give brugere, der navigerer med tastatur, en bedre oplevelse."
tags: 
tabs: true
---

{% assign headingsGuidelines = site.data.headings[page.headings] %}

[---- Sådan bruges komponenten -------------------------------------]: # 
<h2 id="{{ headingsGuidelines[0].id }}">{{ headingsGuidelines[0].h2 }}</h2>

### Anvendes til

Skip-link skal anvendes på alle sider.

Skip-linket gør det muligt for brugere, der anvender tasturet til navigation, at navigere direkte til sidens indhold.

### Anvendes ikke til

Andre former for navigation.

### Vejledning

Et skip-link er et skjult link, der kun vises, når en bruger navigerer på siden ved at bruge tastaturet.

Når brugeren trykker på linket (med tastatur eller mus) sættes fokus på første indholdselement på den aktuelle side.

Det vil sige at brugere, der anvender tastaturet til at navigere siden med, kan undgå at få læst alle menupunkter op, før de får adgang til selve indholdet.

<!--split-->

## Installation

### HTML Struktur

{% include code/syntax.html component="skiplink" copybutton=true %}

Skip-link `<a>` elementet indsættes som første, klikbare element i `<body>`. Elementet skal være det første element, der kommer i fokus på siden ved brug af tastaturet bortset fra en eventuel {% include links/component-guideline-link.html linktext="cookiemeddelelse" %} (GOV.UK, Skip link).

Skip-link gør brug af anchorlink `#main-content`, man skal derfor huske at sætte `id="main-content"` på det element, der omkranser indholdet på siden.

{:#ref}
## Referencer

{:.nobullet-list}
- {% include links/external-link.html linktext="GOV.UK Design System - Skip link" %}

<!--split-->

<script>
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("skiplink-code-section").classList.add('d-none');
        document.title = 'Gå til sidens indhold (Skip-link) | Retningslinjer | Det Fælles Designsystem';
        let tabs = document.querySelectorAll('.tab-button');
        tabs[0].addEventListener("click", function(e) {
            e.preventDefault();
            document.getElementById("skiplink-guidelines-section").classList.remove('d-none');
            document.getElementById("skiplink-code-section").classList.add('d-none');
            tabs[1].removeAttribute('aria-current');
            tabs[0].setAttribute('aria-current', 'page');
            document.querySelector('.component-preview-skip-link-eksempel').classList.remove('d-none');
            history.replaceState(null, null, window.location.origin + '/komponenter/skip-link/guidelines/');
            document.title = 'Gå til sidens indhold (Skip-link) | Retningslinjer | Det Fælles Designsystem';
        });
        tabs[1].addEventListener("click", function(e) {
            e.preventDefault();
            document.getElementById("skiplink-guidelines-section").classList.add('d-none');
            document.getElementById("skiplink-code-section").classList.remove('d-none');
            tabs[0].removeAttribute('aria-current');
            tabs[1].setAttribute('aria-current', 'page');
            document.querySelector('.component-preview-skip-link-eksempel').classList.add('d-none');
            history.replaceState(null, null, window.location.origin + '/komponenter/skip-link/implementering/');
            document.title = 'Gå til sidens indhold (Skip-link) | Kode | Det Fælles Designsystem';
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
                document.title = 'Gå til sidens indhold (Skip-link) | Retningslinjer | Det Fælles Designsystem';
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
                document.title = 'Gå til sidens indhold (Skip-link) | Kode | Det Fælles Designsystem';
            }
        });
    });
</script>