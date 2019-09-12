class TestFDS{
    constructor(DKFDS){
        this.DKFDS = DKFDS;

        this.setEvents();
    }

    setEvents(){
        let that = this;
        let none = 'none';
        let accordionButton = document.getElementById('newAccordionTrigger');
        accordionButton.addEventListener('click', function(event){
            let id = 'myNewAccordion';
            let accordion = that.createAccordion(id);
            let container = document.getElementById('newAccordion');
            container.innerHTML = accordion;
            new that.DKFDS.Accordion(document.getElementById(id));
            accordionButton.style.display = none;
        });

        let overflowMenuButton = document.getElementById('newOverflowMenuTrigger');
        overflowMenuButton.addEventListener('click', function(event){
            let id = 'myNewOverflowMenu';
            let overflowMenu = that.createOverflowMenu(id);
            let container = document.getElementById('newOverflowMenu');
            container.innerHTML = overflowMenu;
            new that.DKFDS.Dropdown(document.getElementById(id));
            overflowMenuButton.style.display = none;
        });
        let collapseButton = document.getElementById('newCollapseTrigger');
        collapseButton.addEventListener('click', function(event){
            let id = 'myNewCollapse';
            let collapse = that.createCollapse(id);
            let container = document.getElementById('newCollapse');
            container.innerHTML = collapse;
            new that.DKFDS.Collapse(document.getElementById(id));
            collapseButton.style.display = none;
        });
        let collapseRadioButton = document.getElementById('newCollapseRadioTrigger');
        collapseRadioButton.addEventListener('click', function(event){
            let id = 'myNewCollapseRadio';
            let collapseRadio = that.createCollapseRadio(id);
            let container = document.getElementById('newCollapseRadio');
            container.innerHTML = collapseRadio;
            new that.DKFDS.RadioToggleGroup(document.getElementById(id));
            collapseRadioButton.style.display = none;
        });
        let collapseCheckboxButton = document.getElementById('newCollapseCheckboxTrigger');
        collapseCheckboxButton.addEventListener('click', function(event){
            let id = 'myNewCollapseCheckbox';
            let collapseCheckbox = that.createCollapseCheckbox(id);
            let container = document.getElementById('newCollapseCheckbox');
            container.innerHTML = collapseCheckbox;
            new that.DKFDS.CheckboxToggleContent(document.getElementById(id));
            collapseCheckboxButton.style.display = none;
        });
        let tableButton = document.getElementById('newTableTrigger');
        tableButton.addEventListener('click', function(event){
            let id = 'myNewTable';
            let table = that.createTable(id);
            let container = document.getElementById('newTable');
            container.innerHTML = table;
            new that.DKFDS.ResponsiveTable(document.getElementById(id));
            tableButton.style.display = none;
        });
        let tsbnavButton = document.getElementById('newTabnavTrigger');
        tsbnavButton.addEventListener('click', function(event){
            let id = 'myNewTabnav';
            let tsbnav = that.createTabnav(id);
            let container = document.getElementById('newTabnav');
            container.innerHTML = tsbnav;
            new that.DKFDS.Tabnav(document.getElementById(id));
            tsbnavButton.style.display = none;
        });
        let tooltipButton = document.getElementById('newTooltipTrigger');
        tooltipButton.addEventListener('click', function(event){
            let id = 'myNewTooltip';
            let tooltip = that.createTooltip(id);
            let container = document.getElementById('newTooltip');
            container.innerHTML = tooltip;
            new that.DKFDS.Tooltip(document.getElementById(id));
            tooltipButton.style.display = none;
        });

    }
    createTooltip(id){
        return "<a href=\"javascript:void(0)\" id='"+id+"' class=\"js-tooltip\"\n" +
            "        data-tooltip=\"Dette er en hjælpetekst i en popover\"><svg class=\"icon-svg \"  focusable=\"false\" aria-hidden=\"true\" ><use xlink:href=\"#help-circle-outline\"></use></svg></a>";
    }

    createTabnav(id){
        return "<ul class=\"tabnav\" id='"+id+"'>\n" +
            "\n" +
            "        <li>\n" +
            "            <a href=\"#tab11\" class=\" tabnav-item\" aria-expanded=\"false\">\n" +
            "                <span>Tabnav 1</span>\n" +
            "\n" +
            "            </a>\n" +
            "\n" +
            "            <section class=\"tabnav-panel\" aria-hidden=\"true\" id=\"tab11\">\n" +
            "                <h2>Tabnav 1</h2>\n" +
            "                <p>Mauris tempor, tellus a laoreet finibus, neque metus\n" +
            "                    hendrerit augue, ac lacinia nisl dolor et augue. Ut\n" +
            "                    lorem massa, consequat ut orci sit amet, maximus dictum\n" +
            "                    orci. Mauris pharetra nunc sed augue bibendum semper.\n" +
            "                    Donec in cursus orci. Ut sed posuere elit, quis semper\n" +
            "                    turpis. Curabitur malesuada nisi nec nisl facilisis\n" +
            "                    ornare. Praesent vestibulum, velit id sollicitudin\n" +
            "                    auctor, ipsum lacus auctor nisl, in lacinia sem massa\n" +
            "                    eget urna.</p>\n" +
            "            </section>\n" +
            "        </li>\n" +
            "\n" +
            "        <li>\n" +
            "            <a href=\"#tab21\" class=\"active tabnav-item\"\n" +
            "                aria-expanded=\"true\">\n" +
            "                <span>Tabnav 2</span>\n" +
            "                <span class=\"sr-only\">(valgt)</span>\n" +
            "            </a>\n" +
            "\n" +
            "            <section class=\"tabnav-panel\" aria-hidden=\"false\" id=\"tab21\">\n" +
            "                <h2>Tabnav 2</h2>\n" +
            "                <p>Mauris tempor, tellus a laoreet finibus, neque metus\n" +
            "                    hendrerit augue, ac lacinia nisl dolor et augue. Ut\n" +
            "                    lorem massa, consequat ut orci sit amet, maximus dictum\n" +
            "                    orci. Mauris pharetra nunc sed augue bibendum semper.\n" +
            "                    Donec in cursus orci. Ut sed posuere elit, quis semper\n" +
            "                    turpis. Curabitur malesuada nisi nec nisl facilisis\n" +
            "                    ornare. Praesent vestibulum, velit id sollicitudin\n" +
            "                    auctor, ipsum lacus auctor nisl, in lacinia sem massa\n" +
            "                    eget urna.</p>\n" +
            "            </section>\n" +
            "        </li>\n" +
            "\n" +
            "        <li>\n" +
            "            <a href=\"#tab31\" class=\" tabnav-item\" aria-expanded=\"false\">\n" +
            "                <span>Tabnav 3</span>\n" +
            "\n" +
            "            </a>\n" +
            "\n" +
            "            <section class=\"tabnav-panel\" aria-hidden=\"true\" id=\"tab31\">\n" +
            "                <h2>Tabnav 3</h2>\n" +
            "                <p>Mauris tempor, tellus a laoreet finibus, neque metus\n" +
            "                    hendrerit augue, ac lacinia nisl dolor et augue. Ut\n" +
            "                    lorem massa, consequat ut orci sit amet, maximus dictum\n" +
            "                    orci. Mauris pharetra nunc sed augue bibendum semper.\n" +
            "                    Donec in cursus orci. Ut sed posuere elit, quis semper\n" +
            "                    turpis. Curabitur malesuada nisi nec nisl facilisis\n" +
            "                    ornare. Praesent vestibulum, velit id sollicitudin\n" +
            "                    auctor, ipsum lacus auctor nisl, in lacinia sem massa\n" +
            "                    eget urna.</p>\n" +
            "            </section>\n" +
            "        </li>\n" +
            "    </ul>\n";
    }
    createTable(id){
        return "<table class=\"table table--borderless table--responsive-headers\" id='"+id+"'>\n" +
            "        <thead>\n" +
            "            <tr>\n" +
            "                <th>Affaldstype</th>\n" +
            "                <th>Farvekode</th>\n" +
            "                <th>Beskrivelse</th>\n" +
            "                <th>Hvor ender det?</th>\n" +
            "            </tr>\n" +
            "        </thead>\n" +
            "        <tbody>\n" +
            "            <tr>\n" +
            "                <td>Dagrenovation</td>\n" +
            "                <td>Grøn</td>\n" +
            "                <td>Madaffald, samt papir, pap eller plastik der ikke kan\n" +
            "                    genanvendes, fordi der er madrester eller andet snask\n" +
            "                    på.</td>\n" +
            "                <td>Alt det affald, du smider ud i din primære\n" +
            "                    skraldespand, som er dagrenovationen, bliver hentet og\n" +
            "                    kørt på forbrændingen. </td>\n" +
            "            </tr>\n" +
            "            <tr>\n" +
            "                <td>Bioaffald og kompost</td>\n" +
            "                <td>Beige</td>\n" +
            "                <td>Alt madaffald uden fødevareemballage.</td>\n" +
            "                <td>Bioaffaldet kommes i bionedbrydelige poser, som bliver\n" +
            "                    komposteret til muld.</td>\n" +
            "            </tr>\n" +
            "            <tr>\n" +
            "                <td>Glas</td>\n" +
            "                <td>Hvid</td>\n" +
            "                <td>Alle typer glas og flasker.</td>\n" +
            "                <td>De hele vinflasker rengøres og genbruges af vinhuse,\n" +
            "                    mens glasskårene bliver smeltet om til nyt glas.</td>\n" +
            "            </tr>\n" +
            "            <tr>\n" +
            "                <td>Elektronik</td>\n" +
            "                <td>Orange</td>\n" +
            "                <td>Genstande der har brugt strøm.</td>\n" +
            "                <td>Det elektroniske affald bliver typisk kørt til et\n" +
            "                    demonteringsanlæg, hvor det bliver skilt ad, så de\n" +
            "                    forskellige dele kan genanvendes separat.</td>\n" +
            "            </tr>\n" +
            "        </tbody>\n" +
            "    </table>";
    }
    createCollapseCheckbox(id){
        return "<input id=\""+id+"\" type=\"checkbox\" name=\"Name\"\n" +
            "                        value=\"Value\"\n" +
            "                        class=\"form-checkbox  checkbox-large js-checkbox-toggle-content\"\n" +
            "                        data-js-target='#collapse-check12'\n" +
            "                        aria-controls='collapse-check1'\n" +
            "                        aria-expanded='false' />\n" +
            "                    <label for=\""+id+"\" class=\"\">Checkbox viser\n" +
            "                        indhold</label>\n" +
            "\n" +
            "                    <div id=\"collapse-check12\" aria-hidden=\"true\"\n" +
            "                        class=\"box-border-l collapsed\">\n" +
            "                        <div class=\"py-4\">\n" +
            "                            <p>Dette indhold bliver vist når checkboxen er\n" +
            "                                valgt.</p>\n" +
            "                        </div>\n" +
            "                    </div>";
    }
    createCollapseRadio(id){
        return "<div class=\"js-radio-toggle-group\" id='"+id+"'>\n" +
            "    <fieldset>\n" +
            "        <legend>\n" +
            "            <h2 class=\"h4\">Vælg en radioknap</h2>\n" +
            "        </legend>\n" +
            "        <ul class=\"nobullet-list\">\n" +
            "            <li>\n" +
            "\n" +
            "                <input id=\"id-radio1\" type=\"radio\" name=\"radio-group1\"\n" +
            "                    value=\"Value\" class=\"form-radio  radio-large \" checked\n" +
            "                    data-js-target='#collapse-radio1'\n" +
            "                    aria-controls='collapse-radio1'\n" +
            "                    aria-expanded='false' />\n" +
            "                <label for=\"id-radio1\" class=\"\">Radioknap viser indhold\n" +
            "                    <span class=\"sr-only\">Udfyld informationer\n" +
            "                        herunder</span></label>\n" +
            "\n" +
            "                <div id=\"collapse-radio1\" aria-hidden=\"true\"\n" +
            "                    class=\"box-border-l collapsed\">\n" +
            "                    <div class=\"py-4\">\n" +
            "\n" +
            "                        <div class=\"form-group\">\n" +
            "                            <label class=\"form-label \"\n" +
            "                                for=\"textinput1\">Inputfelt med\n" +
            "                                label</label>\n" +
            "\n" +
            "                            <input class=\"form-input  input-width-m \"\n" +
            "                                placeholder=\"\" id=\"textinput1\" value=\"\"\n" +
            "                                name=\"text1\" type=\"text\">\n" +
            "                        </div>\n" +
            "\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "            </li>\n" +
            "            <li>\n" +
            "\n" +
            "                <input id=\"id-radio2\" type=\"radio\" name=\"radio-group1\"\n" +
            "                    value=\"Value\" class=\"form-radio  radio-large \"\n" +
            "                    data-js-target='#collapse-radio2' />\n" +
            "                <label for=\"id-radio2\" class=\"\">Radioknap viser indhold\n" +
            "                    <span class=\"sr-only\">Udfyld informationer\n" +
            "                        herunder</span></label>\n" +
            "\n" +
            "                <div id=\"collapse-radio2\" aria-hidden=\"true\"\n" +
            "                    class=\"box-border-l collapsed\">\n" +
            "                    <div class=\"py-4\">\n" +
            "\n" +
            "                        <div class=\"form-group\">\n" +
            "                            <label class=\"form-label \"\n" +
            "                                for=\"textinput2\">Inputfelt med\n" +
            "                                label</label>\n" +
            "\n" +
            "                            <input class=\"form-input  input-width-m \"\n" +
            "                                placeholder=\"\" id=\"textinput2\" value=\"\"\n" +
            "                                name=\"text2\" type=\"text\">\n" +
            "                        </div>\n" +
            "\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "            </li>\n" +
            "        </ul>\n" +
            "    </fieldset>\n" +
            "</div>";
    }
    createCollapse(id){
        return "<button class=\"button button-secondary js-collapse\"\n" +
            "        data-js-target='#collapse12' id='"+id+"' aria-controls='collapse1'\n" +
            "        aria-expanded='false'>Vis indhold</button>\n" +
            "    <div id=\"collapse12\" aria-hidden=\"true\"\n" +
            "        class=\"box-border-l mt-4 collapsed\">\n" +
            "        <div class=\"py-4\">\n" +
            "            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed\n" +
            "                do eiusmod tempor incididunt ut labore et dolore magna\n" +
            "                aliqua.</p>\n" +
            "        </div>\n" +
            "    </div>";
    }

    createOverflowMenu(id){
        return "\n" +
            "    <div class=\"overflow-menu  overflow-menu--open-right \">\n" +
            "        <button class=\"button-overflow-menu js-dropdown \"\n" +
            "            data-js-target=\"#overflow11\" id='"+id+"' aria-haspopup=\"true\"\n" +
            "            aria-expanded=\"false\">\n" +
            "            Overflow menu\n" +
            "            <svg class=\"icon-svg\" aria-hidden=\"true\" focusable=\"false\" tabindex=\"-1\"><use xlink:href=\"#dots-vertical\"></use></svg>\n" +
            "            <span class=\"sr-only\">Åbner overflow menu</span>\n" +
            "        </button>\n" +
            "        <div class=\"overflow-menu-inner\" id=\"overflow11\" aria-hidden=\"true\">\n" +
            "\n" +
            "            <ul class='overflow-list'>\n" +
            "                <li><button>Option 1</button></li>\n" +
            "                <li><button>Option 2</button></li>\n" +
            "                <li><a href='#'>Option 3 as link</a></li>\n" +
            "                <li><button>Option 4 is longer text</button></li>\n" +
            "            </ul>\n" +
            "\n" +
            "        </div>\n" +
            "    </div>";
    }

    createAccordion(id){
        return " <ul class=\"accordion \" id='"+id+"'>\n" +
            "\n" +
            "        <li>\n" +
            "            <button class=\"accordion-button \" aria-expanded=\"false\"\n" +
            "                aria-controls=\"a11\">\n" +
            "                Lorem ipsum dolor sit amet\n" +
            "                <span class=\"accordion-icon \">\n" +
            "                    <span class=\"icon_text\">Information</span>\n" +
            "                    <svg class=\"icon-svg \"  focusable=\"false\" aria-hidden=\"true\" ><use xlink:href=\"#info\"></use></svg>\n" +
            "                </span>\n" +
            "            </button>\n" +
            "\n" +
            "            <div id=\"a11\" aria-hidden=\"true\" class=\"accordion-content\">\n" +
            "\n" +
            "                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n" +
            "                    sed do eiusmod tempor incididunt ut labore et dolore\n" +
            "                    magna aliqua. Ut enim ad minim veniam, quis nostrud\n" +
            "                    exercitation ullamco laboris nisi ut aliquip ex ea\n" +
            "                    commodo consequat.</p>\n" +
            "            </div>\n" +
            "        </li>\n" +
            "\n" +
            "        <li>\n" +
            "            <button class=\"accordion-button  accordion-error \"\n" +
            "                aria-expanded=\"true\" aria-describedby=\"a2\"\n" +
            "                aria-controls=\"a21\">\n" +
            "                Consectetur adipiscing elit\n" +
            "                <span class=\"accordion-icon \">\n" +
            "                    <span class=\"icon_text\">Fejl</span>\n" +
            "                    <svg class=\"icon-svg \"  focusable=\"false\" aria-hidden=\"true\" ><use xlink:href=\"#close-circle-outline\"></use></svg>\n" +
            "                </span>\n" +
            "            </button>\n" +
            "\n" +
            "            <div id=\"a21\" aria-hidden=\"false\" class=\"accordion-content\">\n" +
            "\n" +
            "                <div class=\"alert alert-error\" role=\"alert\"\n" +
            "                    aria-label=\"Fejlbesked i accordion\">\n" +
            "                    <div class=\"alert-body\">\n" +
            "                        <p class=\"alert-text\">Sed ut perspiciatis unde\n" +
            "                            omnis iste natus\n" +
            "                            error sit voluptatem accusantium doloremque\n" +
            "                            laudantium.</p>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "\n" +
            "                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n" +
            "                    sed do eiusmod tempor incididunt ut labore et dolore\n" +
            "                    magna aliqua. Ut enim ad minim veniam, quis nostrud\n" +
            "                    exercitation ullamco laboris nisi ut aliquip ex ea\n" +
            "                    commodo consequat.</p>\n" +
            "            </div>\n" +
            "        </li>\n" +
            "\n" +
            "        <li>\n" +
            "            <button class=\"accordion-button \" aria-expanded=\"false\"\n" +
            "                aria-controls=\"a31\">\n" +
            "                Sed do eiusmod tempor\n" +
            "                <span class=\"accordion-icon \">\n" +
            "                    <span class=\"icon_text\">Advarsel</span>\n" +
            "                    <svg class=\"icon-svg \"  focusable=\"false\" aria-hidden=\"true\" ><use xlink:href=\"#alert-outline\"></use></svg>\n" +
            "                </span>\n" +
            "            </button>\n" +
            "\n" +
            "            <div id=\"a31\" aria-hidden=\"true\" class=\"accordion-content\">\n" +
            "\n" +
            "                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n" +
            "                    sed do eiusmod tempor incididunt ut labore et dolore\n" +
            "                    magna aliqua. Ut enim ad minim veniam, quis nostrud\n" +
            "                    exercitation ullamco laboris nisi ut aliquip ex ea\n" +
            "                    commodo consequat.</p>\n" +
            "            </div>\n" +
            "        </li>\n" +
            "    </ul>";
    }
}
module.exports = TestFDS;
