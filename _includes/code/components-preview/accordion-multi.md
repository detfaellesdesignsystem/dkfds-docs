--- 
permalink: /preview-components/accordion-multi.html
layout: iframed 
title: Accordion-multi.html
---
<div class="container">

    <ul class="accordion " aria-multiselectable="true">

        <li>
            <button class="accordion-button" aria-expanded="false"
                aria-controls="m-a1">
                Lorem ipsum dolor sit amet
                <span class="accordion-icon ">
                    <span class="icon_text">Information</span>
                    <svg class="icon-svg " ><use xlink:href="#info"></use></svg>
                </span>
            </button>
            <div id="m-a1" class="accordion-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.</p>
            </div>
        </li>

        <li>
            <button class="accordion-button" aria-expanded="true"
                aria-describedby="error-message" aria-controls="m-a2">
                Consectetur adipiscing elit
                <span class="accordion-icon ">
                    <span class="icon_text">Fejl</span>
                    <svg class="icon-svg " ><use xlink:href="#close-circle-outline"></use></svg>
                </span>
            </button>
            <div id="m-a2" class="accordion-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.</p>
            </div>
        </li>

        <li>
            <button class="accordion-button" aria-expanded="false"
                aria-controls="m-a3">
                Sed do eiusmod tempor
                <span class="accordion-icon ">
                    <span class="icon_text">Advarsel</span>
                    <svg class="icon-svg " ><use xlink:href="#alert-outline"></use></svg>
                </span>
            </button>
            <div id="m-a3" class="accordion-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.</p>
            </div>
        </li>

        <li>
            <button class="accordion-button" aria-expanded="false"
                aria-controls="m-a4">
                Labore et dolore magna
                <span class="accordion-icon ">
                    <span class="icon_text">Success</span>
                    <svg class="icon-svg " ><use xlink:href="#acheck-circle-outline"></use></svg>
                </span>
            </button>
            <div id="m-a4" class="accordion-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.</p>
            </div>
        </li>

        <li>
            <button class="accordion-button" aria-expanded="false"
                aria-controls="m-a5">
                Ut enim ad minim veniam</button>
            <div id="m-a5" class="accordion-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.</p>
            </div>
        </li>

    </ul>

</div>