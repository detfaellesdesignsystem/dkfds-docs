--- 
permalink: /preview-components/example-aes-page-2.html
layout: iframed 
title: Example-aes-page-2.html
---
<header class="header" role="banner">

    <!--1A: Portal header -->
    <div class="portal-header">
        <div class="container portal-header-inner">
            <a href="javascript:void(0);" title="Hjem"
                class="logo alert-leave">
                <span class="d-none d-print-block">Portalnavn</span>
            </a>
            <button
                class="button button-secondary button-menu-open js-menu-open ml-auto d-print-none"
                aria-haspopup="menu" title="Åben mobil menu">Menu</button>

            <!-- 1B: Portal header: info + actions-->
            <div class="portal-info">

                <p class="user">
                    <b class="username">Christian Emil Vestergaard Christiansen<br><span class="weight-normal">Forsikringens Forsikringsfirma</span></b>
                </p>

                <a href="#"
                    class="button button-secondary alert-leave d-print-none"
                    role="button">
                    Log af
                </a>
            </div>
        </div>
    </div>

    <!--2A: Solutiuon header -->
    <div class="solution-header header-end">
        <div class="container solution-header-inner">
            <div class="solution-heading">
                <a href="#" title="Hjem" class="alert-leave2">
                    Vejledende udtalelse fra AES i privat erstatningssag
                </a>
            </div>

            <!--2B: Solution header: Authority name + text-->
            <div class="solution-info d-print-none">
                <!-- nav-secondary -->

                <h6 class="h5 authority-name"> Styrelsen for Eksempler</h6>

                <p>Support: 72 20 60 00 <span class='d-print-none'>· <a
                            href="javascript:void(0);"
                            data-micromodal-trigger="modal-contact"
                            class="function-link d-inline-block"><svg class="icon-svg" aria-hidden="true" tabindex="-1" focusable="false"><use xlink:href="#card-text-outline"></use></svg>Kontakt</a></span>
                </p>

            </div>
        </div>
    </div>

    <div class="overlay"></div>
    <nav role="navigation" class=" nav">
        <!-- collapsible-->
        <button
            class="button button-tertiary button-menu-close js-menu-close"
            title="Luk mobil menu"><svg class="icon-svg "  focusable="true" aria-hidden="true" tabindex="-1"><use xlink:href="#close"></use></svg>Luk</button>

        <div class="portal-info-mobile">
            <p class="user">
                <b>Christian Emil Vestergaard Christiansen</b><br>Forsikringens Forsikringsfirma</p>
                <a href="#" class="button button-secondary button-signout">
                    Log af
                </a>
        </div>

        <div class="solution-info-mobile">
            <p><b>Erhvervsministeriet</b></p>
            <p>Support: 72 20 60 00 <br><a href="javascript:void(0);"
                    data-micromodal-trigger="modal-contact"
                    class="function-link d-inline-block"><svg class="icon-svg" aria-hidden="true" focusable="false" tabindex="-1"><use xlink:href="#card-text-outline"></use></svg>Kontakt</a>
            </p>
        </div>

        <div class="navbar">
            <div class="navbar-inner navbar-context-actions container">
                <div class="nav-actions">
                    <a href=""
                        class="function-link"><svg class="icon-svg "  focusable="true" aria-hidden="true" tabindex="-1"><use xlink:href="#save"></use></svg>Gem
                        kladde</a>
                </div>
            </div>
        </div>

    </nav> <!-- collapsible nav end-->
</header>

<main class="container page-container">

    <div class="overflow-menu  overflow-menu--open-right ">
        <button class="button-overflow-menu js-dropdown "
            data-js-target="#overflow_steps" aria-haspopup="true"
            aria-expanded="false">
            Trin 2 af 9
            <svg class="icon-svg" aria-hidden="true" focusable="false" tabindex="-1"><use xlink:href="#menu-down"></use></svg>
            <span class="sr-only">Åbner overflow menu</span>
        </button>
        <div class="overflow-menu-inner" id="overflow_steps"
            aria-hidden="true">

            <ul class='sidenav-list'>
                <li>
                    <a href='/pages/eksempler/AES-erstatningssag/aes-1'>
                        1. Oplysninger om afsender
                        <span class='sidenav-icon'>
                            <svg class='icon-svg' aria-hidden='true' focusable='false' tabindex='-1'><use xlink:href='#check'></use></svg>
                        </span>
                    </a>
                </li>
                <li>
                    <a href='/pages/eksempler/AES-erstatningssag/aes-2'
                        class='active'>
                        2. Hvis AES har spørgsmål til sagen
                    </a>
                </li>
                <li>
                    <a href='/pages/eksempler/AES-erstatningssag/aes-3'>
                        3. Oplysninger om skadelidte
                    </a>
                </li>
                <li>
                    <a href='/pages/eksempler/AES-erstatningssag/aes-4'>
                        4. Sagens natur
                    </a>
                </li>
                <li>
                    <a href='/pages/eksempler/AES-erstatningssag/aes-5'>
                        5. Oplysninger om sagen
                    </a>
                </li>
                <li>
                    <a href='/pages/eksempler/AES-erstatningssag/aes-6'>
                        6. Tilføj dokumentation for første undersøgelse af
                        skaden
                    </a>
                </li>
                <li>
                    <a href='/pages/eksempler/AES-erstatningssag/aes-7'>
                        7. Tilføj dokumentation fra sagen
                    </a>
                </li>
                <li>
                    <a href='/pages/eksempler/AES-erstatningssag/aes-8'>
                        8. Tilføj kommentarer til sagen
                    </a>
                </li>
                <li>
                    <a href='/pages/eksempler/AES-erstatningssag/aes-9'>
                        9. Opsummering
                    </a>
                </li>
            </ul>

        </div>
    </div>

    <fieldset>
        <legend>
            <h1>Hvis AES har spørgsmål til sagen</h1>
        </legend>

        <div class="form-group">
            <label class="form-label "
                for="id-company-contact">Virksomhedens
                kontaktperson</label>

            <input class="form-input  input-width-m "
                placeholder="Svend Pedersen" id="id-company-contact"
                value="" name="Input til virksomhedens kontaktperson"
                type="text" readonly>
        </div>

        <button href="#"
            class="button button-secondary mt-4 d-print-none"><svg class="icon-svg "  focusable="true" aria-hidden="true" tabindex="-1"><use xlink:href="#add"></use></svg>
            Vælg en anden kontaktperson</button>
        <div class="mt-5">

            <div class="form-group">
                <label class="form-label "
                    for="id-company-number">Telefonummer til
                    kontaktperson</label>

                <input class="form-input  input-width-xs " placeholder=""
                    id="id-company-number" value=""
                    name="Telefonummer til kontaktperson" type="text">
            </div>

        </div>
    </fieldset>
    <nav class="page-navigation d-print-none">
        <a href="/pages/eksempler/AES-erstatningssag/aes-3"
            class="button button-primary">Næste</a>
        <a href="/pages/eksempler/AES-erstatningssag/aes-1"
            class="button button-quaternary"><svg class="icon-svg" aria-hidden="true" focusable="false" tabindex="-1"><use xlink:href="#menu-left"></use></svg>Tilbage</a>
    </nav>
</main>

<footer>
    <div class="footer">
        <div class="container">
            <div class="align-text-left">
                <ul class="unstyled-list inline-list">
                    <li class=""><span
                            class="h5 weight-semibold">Eksempelstyrelsen</span>
                    </li>
                    <li class=""><a class="function-link"
                            href="mailto:support@example.dk">support@example.dk</a>
                    </li>
                    <li class=""><a class="function-link"
                            href="tel:12 34 56 78">12 34 56 78</a></li>
                    <li class="d-print-none"><a href="#"
                            class="function-link">Tilgængelighedserklæring</a>
                    </li>
                    <li class="d-print-none"><a href="#"
                            class="function-link">Privatlivspolitik
                            (cookies)</a></li>
                </ul>
            </div>
        </div>
    </div>
</footer>

<div class="modal" id="modal-contact" aria-hidden="true">
    <div class="modal__overlay bg-modal" tabindex="-1"
        data-micromodal-close>
        <div class="modal__container" role="dialog" aria-modal="true"
            aria-labelledby="modal-contact-1">
            <header class="modal__header">
                <h1 class="modal__title h2" id="modal-contact-1">
                    Kontakt
                </h1>
            </header>
            <main class="modal__content">
                <div class="alert alert-warning" role="alert"
                    aria-label="Beskedbox der viser en advarsel">
                    <div class="alert-body">
                        <h3 class="alert-heading">Vi har noget information
                            af advarende karakter</h3>
                        <p class="alert-text">Noget tekst, der forklarer
                            det af advarende karakter, som brugeren bør
                            vide inden denne ringer eller skriver. Noget
                            tekst, der forklarer det af advarende karakter,
                            som brugeren bør vide inden denne ringer eller
                            skriver.</p>
                    </div>
                </div>
                <h3>En form for support</h3>
                <p>Hvis du har spørgsmål om:</p>
                <ul>
                    <li>En ting som denne</li>
                    <li>Et andet emne som dette</li>
                </ul>
                <p>Kan du ringe direkte til: 12 34 56 78</p>
                <p>Telefonen er åben:</p>
                <p class="m-0">
                    Mandag:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                    kl. 9-17</p>
                <p class="m-0">
                    Tirsdag-torsdag:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp kl. 9-17
                </p>
                <p class="m-0">
                    Fredag:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                    kl. kl. 9-14</p>
            </main>

            <button class="modal__close button button-secondary"
                aria-label="Close modal" data-micromodal-close>Luk</button>
        </div>
    </div>
</div>