--- 
permalink: /preview-components/modal.html
layout: iframed 
title: Modal.html
---
<div class="container">
    <button class="button button-primary" data-toggle="modal"
        data-target="#modal-active-id">Åben modal (aktiv)</button>
    <br>
    <br>
    <button class="button button-primary" data-toggle="modal"
        data-target="#modal-passive-id">Åben modal (passiv)</button>
    <div class="styleguide-spacer-modals"></div>
</div>

<div class="modal bg-modal" id="modal-active-id" tabindex="-1"
    role="dialog" aria-labelledby="modal-active-id-heading"
    aria-modal="true">
    <div tabindex="0"></div>
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title h2" id="modal-active-id-heading">
                    Modal</h1>
                <button type="button" class="close button button-secondary"
                    data-dismiss="modal">
                    Luk
                </button>
            </div>
            <div class="modal-body">
                <p>Modalens indhold. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat</p>
            </div>
            <div class="modal-footer">
                <button class="button button-primary"
                    aria-label="Fx bekræft handling">Primærknap</button><button
                    class="button button-secondary" data-micromodal-close
                    aria-label="Fx lukker modal vinduet">Sekundærknap</button>
            </div>
        </div>
    </div>
    <div tabindex="0"></div>
</div>

<div class="modal bg-modal" id="modal-passive-id" tabindex="-1"
    role="dialog" aria-labelledby="modal-passive-id-heading"
    aria-modal="true">
    <div tabindex="0"></div>
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title h2" id="modal-passive-id-heading">
                    Modal</h1>
                <button type="button" class="close button button-secondary"
                    data-dismiss="modal">
                    Luk
                </button>
            </div>
            <div class="modal-body">
                <p>Modalens indhold. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat</p>
            </div>
            <div class="modal-footer">

            </div>
        </div>
    </div>
    <div tabindex="0"></div>
</div>