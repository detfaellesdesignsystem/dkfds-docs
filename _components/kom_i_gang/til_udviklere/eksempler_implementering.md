---
permalink: /komigang/tiludviklere/eksempler-implementering/
parentlink: /komigang/tiludviklere/
layout: styleguide
title: Eksempler på implementering
category: Kom_i_gang_category
alertwarningtext: Eksemplerne på implementering af dkfds og dkfds-plugins på denne side er indsendt af brugere af Det Fælles designsystem. Det Fælles Designsystem supporterer ikke disse eksempler.
---
<section>
    <h2>Angular</h2>
    <p>For at bruge DKFDS med Angular CLI gøres følgende:</p>
    <p>I package.json lægges DKFDS og evt. også DKFDS­-plugins ind under dependencies.</p>
    <pre>
    "dependencies": {
        "dkfds": "^4.0.0",
        "dkfds-­plugins": "^4.0.0"
    </pre>
    <p>I angular.json udpeges styling alt efter hvilket tema der skal benyttes:</p>
    <pre>
    "styles": [
        "node_modules/dkfds/dist/css/dkfds-­virkdk.css",
        "node_modules/dkfds-­plugins/dist/css/dkfds­-datatables­-theme.min.css"
    </pre>
    <p>Bemærk, at DKFDS JavaScript ikke er implementeret i dette tilfælde. Man skal derfor selv finde en måde at tilføje JavaScript.</p>
</section>