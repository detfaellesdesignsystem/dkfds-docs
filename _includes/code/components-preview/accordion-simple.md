--- 
permalink: /preview-components/accordion-simple.html
layout: example-contained 
title: Accordion-simple.html
---
<ul class="accordion">
    <li>
        <button class="accordion-button" aria-expanded="false"
            aria-controls="a1">
            Lorem ipsum dolor sit amet
            <span class="accordion-icon">
                <span class="icon_text">Information</span>
                <svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#info"></use></svg>
            </span>
        </button>
        <div id="a1" aria-hidden="true" class="accordion-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>
    </li>
</ul>