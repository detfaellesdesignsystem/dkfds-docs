---
permalink: /eksempler/templates/
redirect_from:
- /eksempler/kvittering/
- /eksempler/opsummeringsside/
layout: styleguide
category: Eksempler_category
subcategory: Eksempler
title: Templates
lead: Templates er best practice designløsninger til specifikke sidetyper.
description: Visning af sidetyper, der går igen på tværs af løsninger
headings: Templates
anchorlinks: true
tags:
---

{% assign headings = site.data.headings[page.headings] %}

[---- Dashboard -------------------------------------]: # 
<h2 id="{{ headings[0].id }}">{{ headings[0].h2 }}</h2>

<div class="row screenshot-gallery d-none">
  <div class="col-12 col-sm-6 col-md-4 mb-6">
    <a href="/pages/eksempler/dashboard/dashboard-1/?r=/eksempler/templates/%23dashboard" title="Dashboard" class="screenshot d-block"></a>
  </div>
</div>

[---- Opgaveliste -------------------------------------]: # 
<h2 id="{{ headings[1].id }}">{{ headings[1].h2 }}</h2>

<div class="row screenshot-gallery d-none">
  <div class="col-12 col-sm-6 col-md-4 mb-6">
    <a href="/pages/eksempler/opgaveliste/?r=/eksempler/templates/%23opgaveliste" title="Eksempelside på opgaveliste" class="screenshot d-block"></a>
  </div>
</div>

[---- Vedhæft filer -------------------------------------]: # 
<h2 id="{{ headings[2].id }}">{{ headings[2].h2 }}</h2>

<div class="row screenshot-gallery">
  <div class="col-12 col-sm-6 col-md-4 mb-6">
  <h3 class="h4">Vedhæft fil</h3>
    <a href="/pages/eksempler/vedhaeft-fil/fil-1/?r=/eksempler/templates/%23vedhaeft-filer" title="Eksempelside: Vedhæft fil" class="screenshot d-block"></a>
  </div>
  <div class="col-12 col-sm-6 col-md-4 mb-6">
    <h3 class="h4">Liste af vedhæftede filer</h3>
    <a href="/pages/eksempler/vedhaeft-fil/fil-2/?r=/eksempler/templates/%23vedhaeft-filer" title="Eksempelside: Liste af vedhæftede filer" class="screenshot d-block"></a>
  </div>
  <div class="col-12 col-sm-6 col-md-4 mb-6">
    <h3 class="h4">Fejl i vedhæftede filer</h3>
    <a href="/pages/eksempler/vedhaeft-fil/fil-3/?r=/eksempler/templates/%23vedhaeft-filer" title="Eksempelside: Fejl i vedhæftede filer" class="screenshot d-block"></a>
  </div>
</div>

[---- Opsummering -------------------------------------]: # 
<h2 id="{{ headings[3].id }}">{{ headings[3].h2 }}</h2>

<div class="row screenshot-gallery d-none">
  <div class="col-12 col-sm-6 col-md-4 mb-6">
    <h3 class="h4">Opsummering 1</h3>
    <a href="/pages/eksempler/opsummering/opsummering-1/?r=/eksempler/templates/%23opsummering" title="Eksempelside: Opsummering 1" class="screenshot d-block"></a>
  </div>
  <div class="col-12 col-sm-6 col-md-4 mb-6">
    <h3 class="h4">Opsummering 2</h3>
    <a href="/pages/eksempler/opsummering/opsummering-2/?r=/eksempler/templates/%23opsummering" title="Eksempelside: Opsummering 2" class="screenshot d-block"></a>
  </div>
</div>

[---- Kvittering -------------------------------------]: # 
<h2 id="{{ headings[4].id }}">{{ headings[4].h2 }}</h2>

<div class="row screenshot-gallery d-none">
  <div class="col-12 col-sm-6 col-md-4 mb-6">
    <h3 class="h4">Kvittering 1</h3>
    <a href="/pages/eksempler/kvittering/kvittering-1/?r=/eksempler/templates/%23kvittering" title="Eksempelside: Kvittering 1" class="screenshot d-block"></a>
  </div>
  <div class="col-12 col-sm-6 col-md-4 mb-6">
    <h3 class="h4">Kvittering 2</h3>
    <a href="/pages/eksempler/kvittering/kvittering-2/?r=/eksempler/templates/%23kvittering" title="Eksempelside: Kvittering 2" class="screenshot d-block"></a>
  </div>
</div>

[---- Fejl -------------------------------------]: # 
<h2 id="{{ headings[5].id }}">{{ headings[5].h2 }}</h2>

<div class="row screenshot-gallery d-none">
  <div class="col-12 col-sm-6 col-md-4 mb-6">
    <h3 class="h4">Formular med fejl</h3>
    <a href="/pages/eksempler/formular-med-fejl/formular-med-fejl-1/?r=/eksempler/templates/%23formular-med-fejl" title="Eksempelside: Formular med fejl" class="screenshot d-block"></a>
  </div>
  <div class="col-12 col-sm-6 col-md-4 mb-6">
    <h3 class="h4">Fejl i tidligere trin</h3>
    <a href="/pages/eksempler/trinindikator-med-fejl/trinindikator-med-fejl-1/?r=/eksempler/templates/%23formular-med-fejl" title="Eksempelside: Opsummeringsside med fejl" class="screenshot d-block"></a>
  </div>
</div>