--- 
permalink: /preview-components/example-praktikplads-page-4.html
layout: iframed 
title: Example-praktikplads-page-4.html
---
<header class="header" role="banner">

    <!--1A: Portal header -->
    <div class="portal-header d-print-none">
        <div class="container portal-header-inner">
            <a href="javascript:void(0);" title="Hjem"
                aria-label="logo link" class="logo alert-leave"></a>
            <button
                class="button button-secondary button-menu-open js-menu-open ml-auto d-print-none"
                aria-haspopup="menu" title="Åben mobil menu">Menu</button>

            <!-- 1B: Portal header: info + actions-->
            <div class="portal-info">

                <p class="user"><b class="username">Jens Jensen</b> </p>

                <a href="#" class="button button-secondary alert-leave"
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
                <a href="#" title="Hjem" aria-label="logo link"
                    class="alert-leave2">
                    Praktikplads AUB
                </a>
            </div>

            <!--2B: Solution header: Authority name + text-->
            <div class="solution-info">
                <!-- nav-secondary -->

                <h6 class="h5 authority-name"> Styrelsen for Eksempler</h6>

                <p><a href="javascript:void(0);"
                        data-micromodal-trigger="modal-contact"
                        class="function-link d-inline-block"><svg class="icon-svg" aria-hidden="true"><use xlink:href="#card-text-outline"></use></svg>Kontakt</a>
                </p>

            </div>
        </div>
    </div>

    <div class="overlay"></div>
    <nav role="navigation" class=" nav">
        <!-- collapsible-->
        <button
            class="button button-tertiary button-menu-close js-menu-close"
            title="Luk mobil menu"><svg class="icon-svg "  focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#close"></use></svg>Luk</button>

        <!-- 3: Main navigation-->
        <div class="navbar navbar-primary">
            <!--3A: Main navigation-->
            <div class="navbar-inner container">
                <ul class="nav-primary">
                    <li>
                        <a href="/pages/eksempler/praktikplads/praktikplads-1"
                            class="current nav-link" title="Designsystem">
                            <span>2021</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link" title="2020">
                            <span>2020</span>
                        </a>
                    </li>
                    <li>
                        <div class="overflow-menu">
                            <button
                                class="button-overflow-menu js-dropdown js-dropdown--responsive-collapse"
                                data-js-target="#headeroverflow1"
                                aria-haspopup="true" aria-expanded="false">
                                <span>2019</span>
                            </button>
                            <div class="overflow-menu-inner"
                                id="headeroverflow1" aria-hidden="true">
                                <ul class="overflow-list">
                                    <li>
                                        <a
                                            href="/pages/eksempler/praktikplads/praktikplads-2">Revision
                                            3:
                                            Regulering<br> oprettet 01-12-2019</a>
                                    </li>
                                    <li>
                                        <a
                                            href="/pages/eksempler/praktikplads/praktikplads-2">Revision
                                            2:
                                            Regulering<br> oprettet 01-09-2019</a>
                                    </li>
                                    <li>
                                        <a
                                            href="/pages/eksempler/praktikplads/praktikplads-2">Revision
                                            1:
                                            Opgørelse<br> oprettet 01-06-2019</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="#" class="nav-link" title="2018">
                            <span>2018</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 3: Main navigation end-->
        <!-- Nav actions-->
        <div class="navbar">
            <div class="navbar-inner navbar-context-actions container">
                <div class="nav-actions">
                    <a href="#"
                        class="function-link"><svg class="icon-svg "  focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#printer"></use></svg>Udskriv</a>
                    <a href=""
                        class="function-link"><svg class="icon-svg "  focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#help-circle-outline"></use></svg>Hjælp</a>
                </div>
            </div>
        </div>

        <div class="portal-info-mobile">
            <p class="user"><b>Christian Emil Vestergaard Christiansen</b>
            </p>
            <a href="#" class="button button-secondary button-signout">
                Log af
            </a>
        </div>

        <div class="solution-info-mobile">
            <p><b>Erhvervsministeriet</b></p>
            <p><a href="javascript:void(0);"
                    data-micromodal-trigger="modal-contact"
                    class="function-link d-inline-block"><svg class="icon-svg" aria-hidden="true"><use xlink:href="#card-text-outline"></use></svg>Kontakt</a>
            </p>
        </div>

    </nav> <!-- collapsible nav end-->
</header>

<main class="container page-container">
    <header class="page-header">
        <h1>Erhvervsuddannede medarbejdere i 2021</h1>
    </header>
    <section class="page-content">
        <div class="mt-6">

            <div class="form-group">
                <label class="form-label " for="id-search-keyword">Søg via
                    nøgleord</label>

                <input class="form-input  input-width-m " placeholder=""
                    id="id-search-keyword" value=""
                    name="Input til søg via nøgleord" type="text">
            </div>

        </div>
        <div class="mt-5">

            <div class="form-group">
                <label class="form-label " for="select-education">Vælg
                    uddannelse</label>
                <select class="input-width-m form-select"
                    name="Vælg uddannelse" id="select-education">
                    <option value>- Vælg -</option>

                </select>
            </div>

        </div>
        <div class="form-group">
            <fieldset>
                <legend class="form-label">Sagen handler om</legend>
                <ul class="nobullet-list">
                    <li>

                        <input id="id-view1" type="radio"
                            name="Vælg visning" value="Elevpoint"
                            class="form-radio   " />
                        <label for="id-view1" class="">Elevpoint </label>

                    </li>
                    <li>

                        <input id="id-view2" type="radio"
                            name="Vælg visning" value="Aftaleperiode"
                            class="form-radio   " checked />
                        <label for="id-view2" class="">Aftaleperiode
                        </label>

                    </li>
                </ul>
            </fieldset>
        </div>
    </section>
</main>

<footer>
    <div class="footer">
        <div class="container">
            <div class="align-text-left">
                <ul class="unstyled-list inline-list">
                    <li><span
                            class="h5 weight-semibold">Eksempelstyrelsen</span>
                    </li>
                    <li><a class="function-link"
                            href="mailto:support@example.dk">support@example.dk</a>
                    </li>
                    <li><a class="function-link" href="tel:12 34 56 78">12
                            34 56 78</a></li>
                    <li><a href="#"
                            class="function-link">Tilgængelighedserklæring</a>
                    </li>
                    <li><a href="#" class="function-link">Privatlivspolitik
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