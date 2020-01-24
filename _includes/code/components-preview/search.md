--- 
permalink: /preview-components/search.html
layout: example-contained 
title: Search.html
---
<div class="container">
    <div class="form-group search">
        <label for="input-type-text" class="sr-only">Søg efter
            indhold</label>
        <input class="form-input input-char-27" id="input-type-text"
            name="search-button" title="Search" type="search">
        <button class="button button-search">Søg</button>
    </div>

    <div class="form-group search">
        <label for="input-type-text-icon" class="sr-only">Søg efter
            indhold</label>
        <input class="form-input input-width-xs" id="input-type-text-icon"
            name="search-icon" title="Search" type="search">
        <button
            class="button button-search"><svg class="icon-svg m-0" focusable="false" aria-hidden="true"><use xlink:href="#magnify"></use></svg><span
                class="sr-only">Søg</span></button>
    </div>
</div>