---
permalink: /mastertest
layout: demo
title: Test
---
<div class="container pt-9">
    <h1>Test</h1>
    <h2>Fonte og typografi</h2>
    <h3>Overskrifter</h3>
    {% include code/preview.html component="headings" %}
    <h3>Felt- og tabeloverskrifter (label og th)</h3>
    {% include code/preview.html component="labels" %}
    <h3>Manchettekst (lead paragraph)</h3>
    {% include code/preview.html component="lead_paragraph" %}
    <h3>Brødtekst (body copy)</h3>
    {% include code/preview.html component="inlinetext" %}
    <h3>Links</h3>
    {% include code/preview.html component="links" %}
    <h3>Skip link</h3>
    {% include code/preview.html component="skiplink" %}
    <h3>Stor tekst (display text)</h3>
    {% include code/preview.html component="displaytext" %}
    <h3>Lister</h3>
    {% include code/preview.html component="lists" classes="preview-lists" %}
    <h3>Hjælpetekst og fejlbeskeder</h3>
    {% include code/preview.html component="helptext" %}
    <h3>Linjelængde</h3>
    {% include code/preview.html component="line_length" %}
    <h3>Linjeafstand</h3>
    {% include code/preview.html component="line_spacing" %}
</div>
<div class="container">
    <h2>Grid</h2>
    <h3>Introduktion</h3>
    {% include code/preview.html component="grid--how-it-works" %}
    <h3>Responsive klasser - Klasser som rammer alle breakpoints</h3>
    {% include code/preview.html component="grid--all-breakpoints" %}
    <h3>Responsive klasser - Fra stablede kolonner til kolonner på række</h3>
    {% include code/preview.html component="grid--stacked-horizontal" %}
    <h3>Responsive klasser - Brug af forskellige kolonne-klasser</h3>
    {% include code/preview.html component="grid--mix-match" %}
    <h3>Responsive klasser - Kolonneombrydning</h3>
    {% include code/preview.html component="grid--column-wrapping" %}
    <h3>Indlejre</h3>
    {% include code/preview.html component="grid--nesting" %}
    <h3>Ingen afstand mellem kolonner (ingen gutter)</h3>
    {% include code/preview.html component="grid--no-gutters" %}
    <h3>'Auto' og 'Fill' kolonner - Specifik bredde på kun én kolonne</h3>
    {% include code/preview.html component="grid--one-column-width" %}
    <h3>'Auto' og 'Fill' kolonner - Individuel kolonnebredde efter indhold</h3>
    {% include code/preview.html component="grid--variable-width-content" %}
    <h3>Rækkefølge - Order-klasser</h3>
    {% include code/preview.html component="grid--ordering-visual" %}
    <h3>Rækkefølge - Forskyd kolonner</h3>
    {% include code/preview.html component="grid--offsets" %}
    {% include code/preview.html component="grid--offsets-reset" %}
    <h3>Hjælpeklasser</h3>
    <h4>Hjælpeklasser: Flexbox - Vertikal</h4>
    {% include code/preview.html component="grid--util-flex-vertical-align-01" %}
    <h4>Hjælpeklasser: Flexbox - Horisontal</h4>
    {% include code/preview.html component="grid--util-flex-horizontal-align" %}
    <h4>Hjælpeklasser: Margin</h4>
    {% include code/preview.html component="grid--util-margin" %}
</div>
<div class="container">
    <h2>Hjørner, streger, skygger</h2>
    <h3>Hjørner</h3>
    {% include code/preview.html component="border-radius" %}
    <h3>Streger</h3>
        <div class="component-preview ">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-6">
                        <p class="h5">Ydre-streger</p>
                        <p class="form-hint">Bruges til de yderste streger i et element, se fx tabeller.</p>
                        <div class="outer-border-example"></div>
                        
                        <p class="h5">Indre-streger</p>
                        <p class="form-hint">Bruges til indre streger i et element, se fx tabeller.</p>
                        <div class="inner-border-example"></div>
                        
                        <p class="h5">Knap-streger</p>
                        <p class="form-hint">Specifik streg til knapper.</p>
                        <div class="button-border-example"></div>
                        
                        <p class="h5">Horisontal ruler</p>
                        <p class="form-hint">Hr-tagget har samme farve som den Indre streg</p>
                        <hr>
                    </div>
                </div>
            </div>
        </div>
    <h3>Skygger</h3>
    {% include code/preview.html component="shadows" %}
</div>
<div class="container">
    <h2>Accordion</h2>
    {% include code/preview.html component="accordion" %}
    {% include code/preview.html component="accordion-border" %}
    {% include code/preview.html component="accordion-multi" %}
</div>
<div class="container">
    <h2>Badges</h2>
    {% include code/preview.html component="badges" %}
</div>
<div class="container">
    <h2>Beskeder</h2>
    {% include code/preview.html component="alerts" %}
    {% include code/preview.html component="alerts-icons" %}
    {% include code/preview.html component="alerts-texts" %}
</div>
<div class="container">
    <h2>Cards</h2>
    {% include code/preview.html component="cards-full-width" %}
    {% include code/preview.html component="cards-half-width" %}
    {% include code/preview.html component="cards-third-width" %}
</div>
<div class="container">
    <h2>Faneblade</h2>
    {% include code/preview.html component="tabnav" %}
</div>
<article>
<section>
    <div class="container">
        <h2>Footers</h2>
        <h3>Simpel</h3>
    </div>
    {% include code/demo.html component="footer-simple" %}
    {% include code/demo.html component="footer-three-columns" %}
    {% include code/demo.html component="footer-four-columns" %}
    {% include code/demo.html component="footer-complex" %}
    {% include code/demo.html component="footer-logo" %}
</section>
</article>
<div class="container">
    <h2>Formular-elementer</h2>
    <h3>Felter</h3>
    {% include code/preview.html component="text-input" %}
    <h3>Feltbredde</h3>
    {% include code/preview.html component="text-input-width" %}
    <h3>Textområde</h3>
    {% include code/preview.html component="text-area" %}
    <h3>Dropdown-menu</h3>
    {% include code/preview.html component="select" classes="preview-dropdown" %}
    <h3>Tjekboks</h3>
    {% include code/preview.html component="checkbox" %}
    <h3>Radioknap</h3>
    {% include code/preview.html component="radiobutton" %}
    <h3>Datofelt</h3>
    {% include code/preview.html component="date-input" %}
    <h3>Vedhæft fil</h3>
    {% include code/preview.html component="file-input" %}
    <h3>Fieldset</h3>
    {% include code/preview.html component="fieldset" %}
</div>
<section>
    <div class="container">
        <h2>Headers</h2>
        <h3>Standard header</h3>
    </div>
    <article>
    {% include code/demo.html component="header-simple" %}
    </article>
    <article>
    {% include code/demo.html component="header-medium" %}
    </article>
    <article>
    {% include code/demo.html component="header-full" %}
    </article>
</section>
<div class="container">
  <h2>Knapper</h2>
  {% include code/preview.html component="buttons-primary" %}
  {% include code/preview.html component="buttons-secondary" %}
  {% include code/preview.html component="buttons-secondary" %}
  {% include code/preview.html component="buttons-back" %}
  {% include code/preview.html component="buttons-only-icon" %}
  {% include code/preview.html component="buttons-with-icon" %}
  {% include code/preview.html component="buttons-fileupload" %}
</div>
<div class="container">
  <h2>Modalvinduer</h2>
  {% include code/preview.html component="modal" %}
</div>
<div class="container">
  <h2>Overflow menu</h2>
  
  {% include code/preview.html component="overflow-menu" %}
  {% include code/preview.html component="overflow-menu-left" %}
</div>
<div class="container">
    <h2>Sidenavigation</h2>
    <h3>Ét niveau</h3>
    {% include code/preview.html component="sidenav-normal-level1" %}
    <h3>2 niveauer</h3>
    {% include code/preview.html component="sidenav-normal-level2" %}
    <h3>3 niveauer</h3>
    {% include code/preview.html component="sidenav-normal-level3" %}
    <h3>Ét niveau</h3>
    {% include code/preview.html component="sidenav-information-level1" %}
    <h3>2 niveauer</h3>
    {% include code/preview.html component="sidenav-information-level2" %}
    <h3>3 niveauer</h3>
    {% include code/preview.html component="sidenav-information-level3" %}
</div>
<div class="container">
  <h2>Skjul og vis (Collapse)</h2>
  <h3>Radioknap - skjul og vis indhold</h3>
  {% include code/preview.html component="radio-toggle-content" %}
  <h3>Checkbox - skjul og vis indhold</h3>
  {% include code/preview.html component="checkbox-toggle-content" %}
  <h3>Generel skjul og vis indhold funktionalitet</h3>
  {% include code/preview.html component="basic-collapse" %}
</div>
<div class="container">
  <h2>Spinner</h2>
  {% include code/preview.html component="spinner" %}
</div>
<div class="container">
  <h2>Søgefelt</h2>
  {% include code/preview.html component="search" classes="preview-search-bar" %}
</div>
<div class="container">
  <h2>Tabeller</h2>
  <h3>Standard</h3>
  {% include code/preview.html component="table" %}
  <h3>Uden ramme</h3>
  {% include code/preview.html component="table--borderless" %}
  <h3>Zebralinier</h3>
  {% include code/preview.html component="table--bordered-zebra" %}
  <h3>Responsiv</h3>
  {% include code/preview.html component="table--responsive" %}
  <h3>Forskellig liniehøjde</h3>
  {% include code/preview.html component="table--lineheight" %}
  <h3>Med titel i venstre kolonne</h3>
  {% include code/preview.html component="table--body-headers" %}
</div>
<div class="container">
  <h2>Tags</h2>
  {% include code/preview.html component="tags" %}
  {% include code/preview.html component="tags-icon" %}
</div>
<div class="container">
  <h2>Tooltip og popover</h2>
  {% include code/preview.html component="tooltip-button" %}
  {% include code/preview.html component="tooltip-icon" %}
  {% include code/preview.html component="popover-icon" %}
  {% include code/preview.html component="tooltip-position" %}
</div>
<div class="container">
  <h2>Trinindikatorer</h2>
  <h3>Trinindikator i overflow-menu</h3>
  {% include code/preview.html component="tringuide-overflowmenu" %}
  <h3>Trinindikator - responsivt i overflow-menu</h3>
  {% include code/preview.html component="tringuide-responsive-overflowmenu" %}
  <h3>Klikbar trinindikator</h3>
  {% include code/preview.html component="tringuide-clickable" %}
  <h3>Låst trinindikator</h3>
  {% include code/preview.html component="tringuide-locked" %}
  <h3>Trinindikator med information</h3>
  {% include code/preview.html component="tringuide-information" %}
  <h3></h3>
</div>
<div class="container">
  <h2>Datatables</h2>
  {% include code/preview.html component="datatables" %}
</div>
<div class="container">
  <h2>Multiselect</h2>
  {% include code/preview.html component="selectwoo-multiselect" %}
</div>
<div class="container">
  <h2>Pikaday</h2>
  {% include code/preview.html component="date-input-datepicker" %}
</div>
