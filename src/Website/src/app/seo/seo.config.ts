import { SeoPage } from "./seo.model";

const DEFAULT_SEO = {
  image: "https://wom.social/assets/images/logo-og.png",
};

export const SEO_PAGES: SeoPage[] = [
  {
    path: "/",
    lang: "it",

    title: "WOM | Rewarding sociale per valorizzare il valore pubblico",

    description:
      "WOM è una piattaforma di rewarding sociale che riconosce il valore delle azioni positive, trasformando l'impatto sociale generato dalle persone in punti.",

    canonical: "https://wom.social/",

    index: true,
    sitemap: true,

    ...DEFAULT_SEO,
  },

  {
    path: "/platform/about",
    lang: "it",

    title: "Cos'è WOM | La piattaforma di rewarding sociale",

    description:
      "Scopri WOM, la piattaforma di rewarding sociale che rende visibile e misurabile il valore pubblico generato dalle azioni delle persone e delle comunità.",

    canonical: "https://wom.social/platform/about",

    index: true,
    sitemap: true,

    ...DEFAULT_SEO,
  },

  {
    path: "/platform/challenge",
    lang: "it",

    title: "Challenge WOM | Azioni positive e partecipazione",

    description:
      "Le challenge WOM incentivano comportamenti virtuosi e coinvolgono cittadini, merchant e instrument generando valore pubblico.",

    canonical: "https://wom.social/platform/challenge",

    index: true,
    sitemap: true,

    ...DEFAULT_SEO,
  },

  {
    path: "/platform/actions",
    lang: "it",

    title: "Azioni e strumenti WOM | Creare valore pubblico",

    description:
      "Scopri le azioni e gli strumenti WOM che permettono di riconoscere, misurare e valorizzare l'impatto sociale generato dalle comunità.",

    canonical: "https://wom.social/platform/actions",

    index: true,
    sitemap: true,

    ...DEFAULT_SEO,
  },

  {
    path: "/users",
    lang: "it",

    title: "WOM per cittadini, merchant e instrument",

    description:
      "Scopri come cittadini, merchant e instrument utilizzano WOM per riconoscere il valore delle azioni positive e partecipare alla creazione di valore pubblico.",

    canonical: "https://wom.social/users",

    index: true,
    sitemap: true,

    ...DEFAULT_SEO,
  },

  {
    path: "/users/people",
    lang: "it",

    title: "WOM per cittadini | Trasforma le azioni positive in valore",

    description:
      "Con WOM le persone possono trasformare il valore delle proprie azioni quotidiane in punti, contribuendo alla cittadinanza attiva e al benessere della comunità.",

    canonical: "https://wom.social/users/people",

    index: true,
    sitemap: true,

    ...DEFAULT_SEO,
  },

  {
    path: "/users/merchant",
    lang: "it",

    title: "WOM per esercenti | Coinvolgere la comunità",

    description:
      "Scopri come gli esercenti possono partecipare all'ecosistema WOM, valorizzare il proprio impegno e sostenere iniziative con impatto positivo sulla comunità.",

    canonical: "https://wom.social/users/merchant",

    index: true,
    sitemap: true,

    ...DEFAULT_SEO,
  },

  {
    path: "/users/instrument",
    lang: "it",

    title: "Instrument WOM | Valorizzare l'impatto sociale",

    description:
      "Scopri di più sugli instrument WOM: enti, organizzazioni e imprese che generano valore pubblico.",

    canonical: "https://wom.social/users/instrument",

    index: true,
    sitemap: true,

    ...DEFAULT_SEO,
  },

  {
    path: "/app/wom-pocket",
    lang: "it",

    title: "WOM Pocket | L'app per il rewarding sociale",

    description:
      "WOM Pocket è l'applicazione che permette agli utenti di raccogliere punti WOM e riconoscere il valore delle azioni positive per la comunità.",

    canonical: "https://wom.social/app/wom-pocket",

    index: true,
    sitemap: true,

    ...DEFAULT_SEO,
  },

  {
    path: "/app/wom-pos",
    lang: "it",

    title: "WOM POS | Rewarding per esercenti",

    description:
      "WOM POS permette agli esercenti di entrare nel sistema di rewarding WOM e partecipare alla valorizzazione delle azioni con impatto sociale.",

    canonical: "https://wom.social/app/wom-pos",

    index: true,
    sitemap: true,

    ...DEFAULT_SEO,
  },

  {
    path: "/app/wom-fit",
    lang: "it",

    title: "WOM Fit | Valorizzare attività e comportamenti virtuosi",

    description:
      "WOM Fit valorizza attività e comportamenti virtuosi trasformandoli in opportunità di partecipazione e riconoscimento attraverso il sistema WOM.",

    canonical: "https://wom.social/app/wom-fit",

    index: true,
    sitemap: true,

    ...DEFAULT_SEO,
  },
  {
    path: "/faq",
    lang: "it",

    title: "FAQ | WOM",

    description:
      "Trova le risposte alle domande frequenti su WOM, la piattaforma di rewarding sociale che riconosce il valore delle azioni positive.",

    canonical: "https://wom.social/faq",

    index: true,
    sitemap: true,

    ...DEFAULT_SEO,
  },

  {
    path: "/pesaro",
    lang: "it",

    title: "WOM Pesaro | Valorizzare il valore della comunità",

    description:
      "Scopri il progetto WOM a Pesaro e come cittadini, turisti, enti ed esercenti possono partecipare alla creazione di valore pubblico attraverso azioni positive.",

    canonical: "https://wom.social/pesaro",

    index: true,
    sitemap: false,

    ...DEFAULT_SEO,
  },

  {
    path: "/pesaro/albergatori",
    lang: "it",

    title: "WOM per albergatori | Pesaro",

    description:
      "Scopri come le strutture ricettive di Pesaro possono utilizzare WOM per coinvolgere visitatori e valorizzare il proprio contributo alla comunità.",

    canonical: "https://wom.social/pesaro/albergatori",

    index: true,
    sitemap: false,

    ...DEFAULT_SEO,
  },

  {
    path: "/pesaro/esercenti",
    lang: "it",

    title: "WOM per esercenti | Pesaro",

    description:
      "Scopri come gli esercenti di Pesaro possono aderire a WOM e partecipare a un sistema che valorizza il coinvolgimento e l'impatto sulla comunità.",

    canonical: "https://wom.social/pesaro/esercenti",

    index: true,
    sitemap: false,

    ...DEFAULT_SEO,
  },

  {
    path: "/pesaro/turisti",
    lang: "it",

    title: "WOM per turisti | Scoprire il territorio",

    description:
      "Scopri come i visitatori possono utilizzare WOM a Pesaro per partecipare a iniziative locali e contribuire alla valorizzazione del territorio.",

    canonical: "https://wom.social/pesaro/turisti",

    index: true,
    sitemap: false,

    ...DEFAULT_SEO,
  },

  {
    path: "/pesaro/cittadini",
    lang: "it",

    title: "WOM per cittadini | Partecipazione attiva a Pesaro",

    description:
      "Scopri come i cittadini di Pesaro possono partecipare alle iniziative WOM e trasformare le proprie azioni positive in valore riconosciuto.",

    canonical: "https://wom.social/pesaro/cittadini",

    index: true,
    sitemap: false,

    ...DEFAULT_SEO,
  },

  {
    path: "/pesaro2024/volontarx",
    lang: "it",

    title: "VolontarX | WOM e Pesaro 2024",

    description:
      "VolontarX è il progetto collegato a WOM e Pesaro 2024 dedicato alla valorizzazione della partecipazione volontaria e dell'impatto sociale.",

    canonical: "https://wom.social/pesaro2024/volontarx",

    index: true,
    sitemap: false,

    ...DEFAULT_SEO,
  },

  {
    path: "/projects/rete-delle-reti",
    lang: "it",

    title: "Rete delle Reti | WOM",

    description:
      "Scopri il progetto Rete delle Reti e il ruolo di WOM nella creazione di connessioni tra comunità, organizzazioni e iniziative di valore pubblico.",

    canonical: "https://wom.social/projects/rete-delle-reti",

    index: true,
    sitemap: false,

    ...DEFAULT_SEO,
  },

  {
    path: "/uniurb/sharper2024",
    lang: "it",

    title: "Sharper 2024 | WOM e Uniurb",

    description:
      "Scopri SHARPER 2024, l'iniziativa collegata a WOM e Uniurb dedicata alla partecipazione, alla divulgazione e al coinvolgimento della comunità.",

    canonical: "https://wom.social/uniurb/sharper2024",

    index: true,
    sitemap: false,

    ...DEFAULT_SEO,
  },
];
