---
permalink: "/design/ikoner/ikoner-og-deres-betydning/"
layout: styleguide
title: Udvalgte ikoner og deres betydning
category: Design_category
subcategory: Design
parentlink: "/design/ikoner/"
description: Find det ikon du har brug for. Meld det ikon du har behov for ind og vær med til at udvide listen.
lead: Find det ikon du har brug for. Meld det ikon du har behov for ind og vær med til at udvide listen.
tags:
- icon
- svg
- svg use
- inline svg
redirect_from: []
anchor: false
subnav: []

---

<div class="search-container form-group">
    <label class="form-label " for="icon-search-input">
        Find dit ikon
    </label>
    <span class="form-hint" id="icon-search-input-hint">
        Skriv navnet på ikonet du leder efter  i feltet, så ændres listen
    </span>
    <input class="form-input" required name="icon-search-input" type="text" aria-describedby="icon-search-input-hint" id="icon-search-input" />
</div>

<div aria-live="polite">
<section class="icon-section">
  <h2 class="h5">Konventionelle ikoner</h2>
  <p>Må ikke bruges til andre formål end de specificerede.</p>
  
  <div class="container">
    <div class="icon-list row">
          {% include icon.html icon="open-in-new" keywords="open in new, new window, external, ekstern, eksternt link" label="Eksternt link (åbner ny side/fane)" %}
          {% include icon.html icon="home" keywords="hus, hjem, home, forside, house, home" label="Forside (Hjem)" %}
          {% include icon.html icon="save" keywords="save, gem, disc, diskette" label="Gem" %}
          {% include icon.html icon="print" keywords="print, printer, udskriv" label="Print (udskriv)" %}
          {% include icon.html icon="delete" keywords="skraldespand, bin, trash, delete, slet, fjern" label="Slet" %}
          {% include icon.html icon="search" keywords="lup, search, søg" label="Søg" %}
    </div>
  </div>
</section>

<section class="icon-section">
  <h2 class="h5 mb-4">Beskeder (feedback)</h2>
  <div class="container">
    <div class="icon-list row">
          {% include icon.html icon="report-problem" keywords="warning, advarsel, report, problem, report problem" label="Advarsel" %}
          {% include icon.html icon="highlight-off" keywords="error, fejl" label="Fejl" %}
          {% include icon.html icon="info" keywords="information, info" label="Hjælp" %}
          {% include icon.html icon="help" keywords="help, hjælp" label="Information" %}
          {% include icon.html icon="check-circle" keywords="flueben, check, success, succes, done" label="Succes" %}
    </div>
  </div>
</section>

<section class="icon-section">
  <h2 class="h5 mb-4">Navigation</h2>
  <div class="container">
    <div class="icon-list row">
          {% include icon.html icon="more-horiz" keywords="more, vertical, mere" label="Flere menupunkter (horisontalt)" %}
          {% include icon.html icon="arrow-right" keywords="right, højre, frem, pil, arrow" label="Frem (højre)" %}
          {% include icon.html icon="menu" keywords="hamburger, menu" label="Menu" %}
          {% include icon.html icon="more-vert" keywords="" label="Overflowmenu (vertikalt)" %}
          {% include icon.html icon="chevron-left" keywords="næste, next, side" label="Paginering forrige" %}
          {% include icon.html icon="first-page" keywords="start, første, side" label="Paginering første" %}
          {% include icon.html icon="chevron-right" keywords="forrige, previous, prev, side" label="Paginering næste" %}
          {% include icon.html icon="last-page" keywords="sidste, slut, side" label="Paginering sidste" %}
          {% include icon.html icon="arrow-forward" keywords="pil, højre, arrow, frem, forward" label="Pil frem (højre)" %}
          {% include icon.html icon="arrow-downward" keywords="pil, ned, arrow" label="Pil ned" %}
          {% include icon.html icon="arrow-upward" keywords="pil, op, arrow" label="Pil op" %}
          {% include icon.html icon="arrow-back" keywords="pil, arrow, tilbage, back" label="Pil tilbage (venstre)" %}
          {% include icon.html icon="arrow-left" keywords="pil, arrow, back, tilbage" label="Tilbage (venstre)" %}
          {% include icon.html icon="subdirectory-arrow-right" keywords="højre" label="Undermenu højre" %}
          {% include icon.html icon="subdirectory-arrow-left" keywords="venstre" label="Undermenu venstre" %}
    </div>
  </div>
</section>

<section class="icon-section">
  <h2 class="h5 mb-4">Tilstande</h2>
  <div class="container">
    <div class="icon-list row">
          {% include icon.html icon="arrow-right" keywords="pil, højre, lukket, luk, detalje" label="Detalje lukket" %}
          {% include icon.html icon="arrow-drop-down" keywords="pil, ned, detalje, åben" label="Detalje åben / Fold dropdown/overflow ud" %}
          {% include icon.html icon="arrow-drop-up" keywords="" label="Fold dropdown/overflow ind" %}
          {% include icon.html icon="zoom-out" keywords="" label="Formindsk" %}
          {% include icon.html icon="zoom-in" keywords="" label="Forstør" %}
          {% include icon.html icon="fullscreen" keywords="" label="Fuld skærm" %}
          {% include icon.html icon="remove" keywords="" label="Luk accordion (minus)" %}
          {% include icon.html icon="fullscreen-exit" keywords="" label="Luk fuld skærm" %}
          {% include icon.html icon="sort" keywords="" label="Ikke sorteret" %}
          {% include icon.html icon="lock-open" keywords="" label="Log af (åben hængelås)" %}
          {% include icon.html icon="lock" keywords="" label="Log på (lukket hængelås)" %}
          {% include icon.html icon="visibility-off" keywords="" label="Skjul" %}
          {% include icon.html icon="sort-by-alpha" keywords="" label="Sortér alfabetisk" %}
          {% include icon.html icon="sort-descending" keywords="" label="Sortér faldende" %}
          {% include icon.html icon="sort-ascending" keywords="" label="Sortér stigende" %}
          {% include icon.html icon="expand-more" keywords="" label="Udvid (chevron)" %}
          {% include icon.html icon="expand-less" keywords="" label="Indskrænk (chevron)" %}
          {% include icon.html icon="visibility" keywords="" label="Vis" %}
          {% include icon.html icon="add" keywords="" label="Åbn accordion (plus)" %}
    </div>
  </div>
</section>
<section class="icon-section">
  <h2 class="h5 mb-4">Filtyper</h2>
  <div class="container">
    <div class="icon-list row">
          {% include icon.html icon="file-image" keywords="" label="Billede" %}
          {% include icon.html icon="file-excel" keywords="" label="Excel" %}
          {% include icon.html icon="file-pdf" keywords="" label="PDF" %}
          {% include icon.html icon="file-word" keywords="" label="Word" %}
    </div>
  </div>
</section>
<section class="icon-section">
  <h2 class="h5 mb-4">Funktionalitet</h2>
  <div class="container">
    <div class="icon-list row">
          {% include icon.html icon="close" keywords="" label="Annuller (luk)" %}
          {% include icon.html icon="hourglass-empty" keywords="" label="Afventer" %}
          {% include icon.html icon="calculator" keywords="" label="Beregner (lommeregner)" %}
          {% include icon.html icon="reply" keywords="" label="Besvar" %}
          {% include icon.html icon="chat" keywords="" label="Chat" %}
          {% include icon.html icon="insert-invitation" keywords="" label="Dato / kalender" %}
          {% include icon.html icon="share" keywords="" label="Del" %}
          {% include icon.html icon="file-download" keywords="" label="Download" %}
          {% include icon.html icon="download-done" keywords="" label="Download afsluttet" %}
          {% include icon.html icon="email" keywords="" label="Email" %}
          {% include icon.html icon="feedback" keywords="" label="Feedback" %}
          {% include icon.html icon="person-remove" keywords="" label="Fjern person/bruger" %}
          {% include icon.html icon="flag" keywords="" label="Flag fyldt" %}
          {% include icon.html icon="outline-flag" keywords="" label="Flag tomt" %}
          {% include icon.html icon="open-with" keywords="" label="Flyt" %}
          {% include icon.html icon="credit-card" keywords="" label="Indbetaling (kreditkort)" %}
          {% include icon.html icon="settings" keywords="" label="Indstillinger" %}
          {% include icon.html icon="photo-camera" keywords="" label="Kamera (tag billede)" %}
          {% include icon.html icon="card-text" keywords="" label="Kontaktoplysninger" %}
          {% include icon.html icon="content-copy" keywords="" label="Kopi" %}
          {% include icon.html icon="playlist-add-check" keywords="" label="Liste gennemført" %}
          {% include icon.html icon="folder" keywords="" label="Mappe" %}
          {% include icon.html icon="notifications" keywords="" label="Notifikation/besked" %}
          {% include icon.html icon="refresh" keywords="" label="Opdater (genindlæs)" %}
          {% include icon.html icon="create-new-folder" keywords="" label="Opret mappe" %}
          {% include icon.html icon="apps" keywords="" label="Oversigt (overblik)" %}
          {% include icon.html icon="location-on" keywords="" label="Placering (adresse)" %}
          {% include icon.html icon="mode" keywords="" label="Rediger" %}
          {% include icon.html icon="send" keywords="" label="Send" %}
          {% include icon.html icon="language" keywords="" label="Sprog (globe)" %}
          {% include icon.html icon="grade" keywords="" label="Stjerne fyldt (markeret)" %}
          {% include icon.html icon="grade-outline" keywords="" label="Stjerne tom (ikke-markeret)" %}
          {% include icon.html icon="contact-support" keywords="" label="Support" %}
          {% include icon.html icon="cached" keywords="" label="Synkroniser (refresh)" %}
          {% include icon.html icon="query-builder" keywords="" label="Tid (tidsinterval)" %}
          {% include icon.html icon="add-a-photo" keywords="" label="Tilføj billede" %}
          {% include icon.html icon="note-add" keywords="" label="Tilføj dokument" %}
          {% include icon.html icon="playlist-add" keywords="" label="Tilføj til liste" %}
          {% include icon.html icon="person-add-alt-1" keywords="" label="Tilføj person/bruger" %}
          {% include icon.html icon="done" keywords="" label="Udført (korrekt, gennemført)" %}
          {% include icon.html icon="upload" keywords="" label="Upload (eksporter)" %}
          {% include icon.html icon="attach-file" keywords="" label="Vedhæft (bilag)" %}
          {% include icon.html icon="forward" keywords="" label="Videresend" %}
          {% include icon.html icon="view-headline" keywords="" label="Vis i liste form" %}
          {% include icon.html icon="vertical-split" keywords="" label="Vis i liste form og vindue" %}
          {% include icon.html icon="palette" keywords="" label="Vælg tema (palette)" %}
          {% include icon.html icon="folder-open" keywords="" label="Åben mappe" %}
    </div>
  </div>
</section>

<section class="icon-section">
  <h2 class="h5 mb-4">Illustrative</h2>
  <div class="container">
    <div class="icon-list row">
          {% include icon.html icon="coronavirus" keywords="" label="Corona (Covid-19)" %}
          {% include icon.html icon="list-alt" keywords="" label="Opgørelse / Resumé / Opsummering" %}
          {% include icon.html icon="assignment" keywords="" label="Opgave" %}
          {% include icon.html icon="payments" keywords="" label="Penge/Betaling/Opkrævning" %}
          {% include icon.html icon="database" keywords="" label="Data" %}
          {% include icon.html icon="assessment" keywords="" label="Analyse" %}
          {% include icon.html icon="map" keywords="" label="Kort" %}
          {% include icon.html icon="link" keywords="" label="Links" %}
          {% include icon.html icon="person" keywords="" label="Person (bruger)" %}
          {% include icon.html icon="shopping-cart" keywords="" label="Kurv (afventer køb)" %}
          {% include icon.html icon="videocam" keywords="" label="Videokamera" %}
          {% include icon.html icon="headphones" keywords="" label="Headset" %}
          {% include icon.html icon="desktop-windows" keywords="" label="Desktop" %}
          {% include icon.html icon="laptop" keywords="" label="Labtop" %}
          {% include icon.html icon="phone-iphone" keywords="" label="Mobiltelefon" %}
          {% include icon.html icon="mouse" keywords="" label="Mus" %}
          {% include icon.html icon="accessibility-new" keywords="" label="Tilgængelighed" %}
          {% include icon.html icon="format-list-bulleted" keywords="" label="Liste" %}
          {% include icon.html icon="format-list-checks" keywords="" label="Tjekliste" %}
          {% include icon.html icon="bookmark-border" keywords="" label="Bogmærke" %}
          {% include icon.html icon="bookmarks" keywords="" label="Bogmærker" %}
          {% include icon.html icon="card-account-details" keywords="" label="Kontaktoplysninger" %}
          {% include icon.html icon="people-alt" keywords="" label="Personer (brugere)" %}
          {% include icon.html icon="groups" keywords="" label="Gruppe (møde)" %}
          {% include icon.html icon="forum" keywords="" label="Forum" %}
          {% include icon.html icon="insert-drive-file" keywords="" label="Dokument (sag)" %}
          {% include icon.html icon="domain" keywords="" label="Virksomhed" %}
          {% include icon.html icon="face" keywords="" label="Elev" %}
          {% include icon.html icon="engineering" keywords="" label="Erhverv/Erhversuddannet" %}
          {% include icon.html icon="acccount-circle" keywords="" label="Brugerprofil" %}
          {% include icon.html icon="how-to-reg" keywords="" label="Fuldmagtsprofil (3. part)" %}
          {% include icon.html icon="support-agent" keywords="" label="Supporter (telefonrådgiver)" %}
          {% include icon.html icon="local-shipping" keywords="" label="Lastbil (transport)" %}
          {% include icon.html icon="agriculture" keywords="" label="Traktor (landmand)" %}
          {% include icon.html icon="school" keywords="" label="Studerende (studie)" %}
          {% include icon.html icon="construction" keywords="" label="Håndværk (bygge- og anlægsarbejde)" %}
          {% include icon.html icon="science" keywords="" label="Videnskab (kemi)" %}
          {% include icon.html icon="drive-eta" keywords="" label="Bil (transport)" %}
          {% include icon.html icon="tune" keywords="" label="Parameter (finjustering)" %}
    </div>
  </div>
</section>

<section class="icon-section">
  <h2 class="h5 mb-4">Tekstredigering</h2>
  <div class="container">
    <div class="icon-list row">
          {% include icon.html icon="text-format" keywords="" label="Formater tekst" %}
          {% include icon.html icon="format-size" keywords="" label="Tekststørrelse" %}
          {% include icon.html icon="format-bold" keywords="" label="Fed" %}
          {% include icon.html icon="format-italic" keywords="" label="Kursiv" %}
          {% include icon.html icon="format-underlined" keywords="" label="Understregning" %}
          {% include icon.html icon="format-color-text" keywords="" label="Farve" %}
          {% include icon.html icon="format-color-fill" keywords="" label="Baggrundsfarve" %}
          {% include icon.html icon="format-clear" keywords="" label="Ryd tekstformaterering" %}
          {% include icon.html icon="format-list-bulleted" keywords="" label="Punktopstilling" %}
          {% include icon.html icon="format-list-numbered" keywords="" label="Punktopstilling nummerisk" %}
          {% include icon.html icon="format-indent-increase" keywords="" label="Indryk højre" %}
          {% include icon.html icon="format-indent-decrease" keywords="" label="Indryk venstre" %}
          {% include icon.html icon="format-align-left" keywords="" label="Vensrestil tekst" %}
          {% include icon.html icon="format-align-center" keywords="" label="Centreret tekst" %}
          {% include icon.html icon="format-align-right" keywords="" label="Højrestillet tekst" %}
          {% include icon.html icon="format-align-justify" keywords="" label="Lige marginer" %}
    </div>
  </div>
</section>
</div>


<p><a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues" class="icon-link">Efterspørg eller giv feedback på et ikon på vores FDS GitHub side<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a></p>

<script>
    let searchTerm, selectedIcon
    const searchInput = document.getElementById("icon-search-input");

    const searchableItems = []
    let currentItems = []

    function initSearch() {
      var icons = document.getElementsByClassName("icon-box");
      for (var i = 0; i < icons.length; i++) {
        const itemName = icons[i].dataset.iconName.toLowerCase();
        let itemKeywords = icons[i].dataset.iconKeywords.toLowerCase().trim();
        searchableItems[itemName] = itemKeywords;
      }
    }

    initSearch();
    searchInput.addEventListener("keyup" , handleInput);
    

    function handleInput(e) {
      let searchTerm = searchInput.value.toLowerCase();

      for (i in searchableItems) {
        var icon = searchableItems[i];
        let iconsFound = document.querySelectorAll('.icon-box[data-icon-name='+i+']');
        console.log(iconsFound);
        if(i.includes(searchTerm) || icon.includes(searchTerm)){
          for(let iF = 0; iF < iconsFound.length; iF++){
              iconsFound[iF].parentNode.classList.remove('d-none');
          }
        } else{
          for(let iF = 0; iF < iconsFound.length; iF++){
              iconsFound[iF].parentNode.classList.add('d-none');
          }
        } 
      }

      let iconLists = document.getElementsByClassName('icon-section');
      for(let iL = 0; iL < iconLists.length; iL++){
        let totalNumberOfIcons = iconLists[iL].getElementsByClassName('icon-container');
        let totalNumberOfIconsHidden = iconLists[iL].querySelectorAll('.icon-container.d-none');
        if(totalNumberOfIcons.length === totalNumberOfIconsHidden.length){
          iconLists[iL].classList.add('d-none');
        } else{
          iconLists[iL].classList.remove('d-none');
        }
      }

    }

   /* document.addEventListener('mousedown', function (event) {
      if (!event.target.matches('.icon-container')) return;
      selectedIcon = event.target.dataset.name.toLowerCase();
      
      let allElements = Array.from(document.querySelectorAll('.icon-box'))
      for (let element of allElements) {
        element.classList.remove('active')
      }

      event.target.classList.add('active');
      
      console.log(selectedIcon)
    }, false);*/
</script>