---
permalink: /search/
layout: styleguide-search
search: true
title: Søgeresultater
---

<div id="search-form" class="search-form">
    <form method="get" action="/search/" id="searchForm" role="search">
      <div class="form-group search">
        <span class="form-error-message d-none" id="search-form-error" role="alert"></span>
        <input class="form-input input-char-27" id="search-input" name="q" type="search" required aria-label="Søg">
        <button class="button button-search" type="submit" id="searchbtn">Søg</button>
      </div>
    </form>
</div>

<div class="d-none" id="results-container">
    <p class="form-hint mb-0">Viser <span id="results-count"></span> resultater for "<span id="results-text"></span>"</p>
    <div id="results">
    </div>
    <div class="page-navigation">
        <a id="previous-page" class="d-none">Forrige side</a>
        <a id="next-page" class="d-none">Næste side</a>
    </div>
</div>
