--- 
permalink: /preview-components/borders.html
layout: example-contained 
title: Borders.html
---
  <div class="container">
      <div class="row">
          <div class="col-12 col-md-6">
              <h3 class="h5">Ydre-streger</h3>
              <p class="form-hint">Bruges til de yderste streger i et
                  element, se fx tabeller.</p>
              <div class="outer-border-example"></div>
          </div>
          <div class="col-12 col-md-6">
              <figure class="highlight">
                  <pre><code class="language-scss" data-lang="scss">border: 1px solid #747474;</code></pre>
              </figure>
          </div>
      </div>
      <div class="row">
          <div class="col-12 col-md-6">
              <h3 class="h5">Indre-streger</h3>
              <p class="form-hint">Bruges til indre streger i et element,
                  se fx tabeller.</p>
              <div class="inner-border-example"></div>
          </div>
          <div class="col-12 col-md-6">
              <figure class="highlight">
                  <pre><code class="language-scss" data-lang="scss">border: 1px solid #BFBFBF</code></pre>
              </figure>
          </div>
      </div>
      <div class="row">
          <div class="col-12 col-md-6">
              <h3 class="h5">Indre-indre-streger</h3>
              <p class="form-hint">Bruges til indre streger i et element,
                  som allerede er omkranset af indre steger, se fx
                  sidenavigation.</p>
              <div class="inner-inner-border-example"></div>
          </div>
          <div class="col-12 col-md-6">
              <figure class="highlight">
                  <pre><code class="language-scss" data-lang="scss">border: 1px solid #DCDCDC</code></pre>
              </figure>
          </div>
      </div>
      <div class="row">
          <div class="col-12 col-md-6">
              <h3 class="h5">Knap-streger</h3>
              <p class="form-hint">Specifik streg til knapper.</p>
              <div class="button-border-example"></div>
          </div>
          <div class="col-12 col-md-6 mt-4">
              <h4 class="h6 mb-0 mt-0">Virk tema:</h4>
              <figure class="highlight">
                  <pre><code class="language-scss" data-lang="scss">border: 2px solid #004993</code></pre>
              </figure>
              <h4 class="h6 mb-0 mt-2">Borger.dk tema:</h4>
              <figure class="highlight">
                  <pre><code class="language-scss" data-lang="scss">border: 2px solid #3C5C22</code></pre>
              </figure>
          </div>
      </div>
      <div class="row mt-8">
          <div class="col-12 col-md-6">
              <h3 class="h5">Horisontal ruler</h3>
              <p class="form-hint"><code>hr</code> elementet har samme
                  farve som den Indre streg</p>
              <hr />
          </div>
          <div class="col-12 col-md-6">
              <figure class="highlight">
                  <pre><code class="language-scss" data-lang="scss">border-top: 1px solid #BFBFBF</code></pre>
              </figure>
          </div>
      </div>
  </div>