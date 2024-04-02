---
permalink: "/faellesskab/roadmap/"
layout: styleguide
category: Faellesskab_category
subcategory: Fællesskab
title: Roadmap
description:
headings: Roadmap
anchorlinks: false
tags:
---

{% assign headings = site.data.headings[page.headings] %}

Det Fælles Designsystem er bygget på forskning og erfaring fra FDS-teamet, andre designsystemer ({% include links/external-link.html linktext="US Web Design System" %} og {% include links/external-link.html linktext="Gov.UK Design System" %}) samt input fra anvendere af FDS.

Mangler der noget på listen? {% include links/external-link.html linktext="Opret et issue på GitHub" %}.

Her er en liste over komponenter, mønstre og opdateringer, der aktuelt findes i Det Fælles Designsystems backlog.

Sagerne kan være:

- <span class="badge badge-small badge-info">Foreslået</span>
- <span class="badge badge-small badge-warning">I gang</span>
- <span class="badge badge-small badge-success">Gennemført</span>
- <span class="badge badge-small badge-error">Annulleret</span>

[---- Nye komponenter -------------------------------------]: # 
<h2 id="{{ headings[0].id }}">{{ headings[0].h2 }}</h2>

{% include roadmap.html title="Felter med prefix og suffix" status="Gennemført" link="/komponenter/inputfelter/guidelines/#prefix-og-suffix" %}
{% include roadmap.html title="Karakterbegrænsning på inputfelt/tekstområde" status="Gennemført" link="/komponenter/inputfelter/guidelines/#karakterbegraensning" %}
{% include roadmap.html title="Modalvindue som kræver handling" status="Gennemført" link="/komponenter/modal/guidelines/#kraever-handling" %}
{% include roadmap.html title="Multiselect dropdown" status="I gang" %}
{% include roadmap.html title="Notifikationsprik" status="I gang" %}
{% include roadmap.html title="Paginering" status="Gennemført" link="/komponenter/paginering/guidelines/" %}
{% include roadmap.html title="Processindikator" status="Foreslået" %}
{% include roadmap.html title="Redigering af felter i tabeller" status="Foreslået" %}
{% include roadmap.html title="Retningslinjer for validering" status="I gang" %}
{% include roadmap.html title="Sortering i tabeller" status="Gennemført" link="/komponenter/tables/guidelines/#sortering-i-tabeller" %}
{% include roadmap.html title="Strukturerede lister" status="Gennemført" link="/komponenter/tables/guidelines/#strukturerede-lister" %}
{% include roadmap.html title="Søgefelt med autoudfyldelse" status="Foreslået" %}
{% include roadmap.html title="Søgning i tabeller" status="Gennemført" link="/komponenter/tables/guidelines/#søgning-i-tabeller" %}
{% include roadmap.html title="Tilbage til toppen" status="Gennemført" link="/komponenter/tilbage-til-top/guidelines/" %}
{% include roadmap.html title="Tiles" status="Annulleret" %}
{% include roadmap.html title="Toggle switch" status="Gennemført" link="/komponenter/toggle/guidelines/" %}
{% include roadmap.html title="Trinindikator med angivelse af fejl" status="Gennemført" link="/komponenter/trinindikator/guidelines/#med-fejl" %}
{% include roadmap.html title="Valgbar rækker i tabeller" status="Gennemført" link="/komponenter/tables/guidelines/#valgbare-rækker" %}

[---- Eksempelløsningerr -------------------------------------]: # 
<h2 id="{{ headings[1].id }}">{{ headings[1].h2 }}</h2>

{% include roadmap.html title="404 - Siden blev ikke fundet" status="I gang" %}
{% include roadmap.html title="Generiske eksempelløsninger" status="Gennemført" link="/eksempler/selvbetjeningsloesninger/" %}
{% include roadmap.html title="Komplekse eksempelløsninger" status="Foreslået" %}

[---- Patterns -------------------------------------]: # 
<h2 id="{{ headings[2].id }}">{{ headings[2].h2 }}</h2>

{% include roadmap.html title="Adresse" status="Foreslået" %}
{% include roadmap.html title="Angivelse af e-mail" status="Foreslået" %}
{% include roadmap.html title="Avanceret søgefunktion" status="Foreslået" %}
{% include roadmap.html title="Du er ved at forlade siden" status="Annulleret" %}
{% include roadmap.html title="Kontekstnært hjælpepanel" status="Foreslået" %}
{% include roadmap.html title="Session udløber" status="Gennemført" link="/eksempler/patterns/session-udloeber/" %}
{% include roadmap.html title="Skift fuldmagt" status="Foreslået" %}
{% include roadmap.html title="Telefonnummer" status="Gennemført" link="/eksempler/patterns/angivelse-af-telefonnummer/" %}
{% include roadmap.html title="Tekstfelt med hentet data" status="Foreslået" %}
{% include roadmap.html title="Tidsangivelse" status="Foreslået" %}

[---- Andet -------------------------------------]: # 
<h2 id="{{ headings[3].id }}">{{ headings[3].h2 }}</h2>

{% include roadmap.html title="Vejledning til datavisualisering og infografik" status="Gennemført" link="/design/datavisualisering-infografik/" %}