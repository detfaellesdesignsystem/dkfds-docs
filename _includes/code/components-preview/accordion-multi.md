--- 
permalink: /preview-components/accordion-multi.html
layout: iframed 
title: Accordion-multi.html
---
<div class="container">

    <ul class="accordion " aria-multiselectable="true">

        <li>
            <button class="accordion-button " aria-expanded="false"
                aria-controls="m-a1">
                Lorem ipsum dolor sit amet
                <span class="accordion-icon ">
                    <span class="icon_text">Information</span>
                    <svg class="icon-svg "  focusable="false" aria-hidden="true" ><use xlink:href="#info"></use></svg>
                </span>
            </button>

            <div id="m-a1" aria-hidden="true" class="accordion-content">

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.</p>
            </div>
        </li>

        <li>
            <button class="accordion-button  accordion-error "
                aria-expanded="true" aria-describedby="m-a2"
                aria-controls="m-a2">
                Consectetur adipiscing elit
                <span class="accordion-icon ">
                    <span class="icon_text">Fejl</span>
                    <svg class="icon-svg "  focusable="false" aria-hidden="true" ><use xlink:href="#close-circle-outline"></use></svg>
                </span>
            </button>

            <div id="m-a2" aria-hidden="false" class="accordion-content">

                <div class="alert alert-error" role="alert"
                    aria-label="Fejlbesked i accordion">
                    <div class="alert-body">
                        <p class="alert-text">Sed ut perspiciatis unde
                            omnis iste natus
                            error sit voluptatem accusantium doloremque
                            laudantium.</p>
                    </div>
                </div>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.</p>
            </div>
        </li>

        <li>
            <button class="accordion-button " aria-expanded="false"
                aria-controls="m-a3">
                Sed do eiusmod tempor
                <span class="accordion-icon ">
                    <span class="icon_text">Advarsel</span>
                    <svg class="icon-svg "  focusable="false" aria-hidden="true" ><use xlink:href="#alert-outline"></use></svg>
                </span>
            </button>

            <div id="m-a3" aria-hidden="true" class="accordion-content">

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.</p>
            </div>
        </li>

        <li>
            <button class="accordion-button " aria-expanded="false"
                aria-controls="m-a4">
                Labore et dolore magna
                <span class="accordion-icon ">
                    <span class="icon_text">Success</span>
                    <svg class="icon-svg "  focusable="false" aria-hidden="true" ><use xlink:href="#acheck-circle-outline"></use></svg>
                </span>
            </button>

            <div id="m-a4" aria-hidden="true" class="accordion-content">

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.</p>
            </div>
        </li>

        <li>
            <button class="accordion-button " aria-expanded="false"
                aria-controls="m-a5">
                Ut enim ad minim veniam</button>

            <div id="m-a5" aria-hidden="true" class="accordion-content">

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.</p>
            </div>
        </li>

    </ul>

</div>