export type Product = {
  slug: string;
  name: string;
  tag: string;
  tagline: string;
  hero: string; // gradient seed
  overview: string;
  objectives: string[];
  targets: string[];
  features: { icon: string; title: string; desc: string }[];
  screenshots: { title: string; kind: "crm" | "erp" | "gmao" | "pos" | "code" | "support" }[];
  benefits: { title: string; desc: string }[];
  useCases: { industry: string; scenario: string }[];
  stats: { label: string; value: number; suffix?: string }[];
  faq: { q: string; a: string }[];
};

export const products: Product[] = [
  {
    slug: "divalto-erp",
    name: "Divalto ERP",
    tag: "ERP",
    tagline:
      "L'ERP modulaire qui pilote toute votre entreprise — finance, ventes, achats, production et BI dans une seule plateforme.",
    hero: "from-blue-600 via-indigo-600 to-cyan-500",
    overview:
      "Divalto est un ERP français leader dédié aux PME et ETI. Sa plateforme modulaire couvre la totalité des processus de gestion : finance, comptabilité, achats, ventes, stocks, production, CRM, BI et mobilité. SIMSOFT intègre Divalto sur mesure pour adapter l'outil à vos métiers et accélérer votre transformation digitale.",
    objectives: [
      "Centraliser toutes les données métiers dans un référentiel unique",
      "Automatiser les processus financiers, commerciaux et logistiques",
      "Offrir un pilotage temps réel via tableaux de bord BI",
      "Préparer l'entreprise à l'industrie 4.0 et à la mobilité terrain",
    ],
    targets: ["PME industrielles", "Distribution & négoce", "Services B2B", "ETI multi-sites"],
    features: [
      { icon: "Boxes", title: "Gestion commerciale", desc: "Devis, commandes, facturation, CRM intégré et catalogue multi-tarifs." },
      { icon: "LineChart", title: "Finance & comptabilité", desc: "Comptabilité générale, analytique, budgétaire, multi-devises et IFRS." },
      { icon: "Truck", title: "Achats & stocks", desc: "Approvisionnements, WMS, traçabilité lots/séries et inventaires tournants." },
      { icon: "Cpu", title: "Production & MES", desc: "GPAO, ordonnancement, suivi atelier temps réel et calcul de coûts de revient." },
      { icon: "Globe2", title: "Mobilité Divalto Weavy", desc: "Applications mobiles offline pour commerciaux, techniciens et livreurs." },
      { icon: "LayoutGrid", title: "BI & tableaux de bord", desc: "Reporting drag & drop, KPI temps réel et data visualisation native." },
      { icon: "ShieldCheck", title: "Conformité réglementaire", desc: "Loi anti-fraude, FEC, facturation électronique et archivage légal." },
      { icon: "Zap", title: "API & intégrations", desc: "Connecteurs e-commerce, EDI, banques, plateformes logistiques et IA." },
    ],
    screenshots: [
      { title: "Tableau de bord financier", kind: "erp" },
      { title: "Pipeline commercial CRM", kind: "crm" },
      { title: "Suivi de production", kind: "gmao" },
    ],
    benefits: [
      { title: "+35% de productivité", desc: "Automatisation des tâches récurrentes et workflows métiers." },
      { title: "-40% de coûts admin.", desc: "Saisies multiples supprimées, factures dématérialisées." },
      { title: "ROI < 18 mois", desc: "Modèle modulaire : déployez ce dont vous avez besoin." },
      { title: "Visibilité 360°", desc: "Tableaux de bord temps réel partagés entre directions." },
    ],
    useCases: [
      { industry: "Industrie", scenario: "Fabricant de pièces mécaniques : GPAO + traçabilité lots." },
      { industry: "Négoce", scenario: "Distributeur multi-entrepôts : WMS + EDI fournisseurs." },
      { industry: "Services", scenario: "ESN : suivi affaires, temps passés et facturation." },
    ],
    stats: [
      { label: "Modules disponibles", value: 40, suffix: "+" },
      { label: "Clients en France & Maghreb", value: 13000, suffix: "+" },
      { label: "Années d'expertise", value: 35 },
      { label: "Satisfaction client", value: 96, suffix: "%" },
    ],
    faq: [
      { q: "Divalto est-il adapté à mon secteur ?", a: "Oui — Divalto propose des verticaux dédiés (industrie, négoce, services, BTP) et SIMSOFT personnalise les modules selon vos processus." },
      { q: "Quelle est la durée d'un projet Divalto ?", a: "Un déploiement standard prend 3 à 6 mois selon la complexité, avec une méthodologie agile par lots." },
      { q: "Peut-on héberger Divalto dans le cloud ?", a: "Oui, on-premise ou cloud privé. SIMSOFT propose un hébergement managé en Tunisie ou en Europe." },
      { q: "Y a-t-il une application mobile ?", a: "Divalto Weavy fournit des apps natives offline pour les forces de vente, techniciens et livreurs." },
    ],
  },
  {
    slug: "firstparc",
    name: "FirstParc GMAO",
    tag: "GMAO",
    tagline:
      "La GMAO nouvelle génération pour piloter votre maintenance préventive, curative et la performance de vos actifs.",
    hero: "from-emerald-600 via-teal-600 to-cyan-500",
    overview:
      "FirstParc est une solution de Gestion de Maintenance Assistée par Ordinateur (GMAO) complète et mobile. Elle pilote la maintenance préventive, curative et conditionnelle de votre parc d'équipements, optimise la disponibilité des actifs et réduit drastiquement les coûts de maintenance.",
    objectives: [
      "Réduire les arrêts machines non planifiés",
      "Optimiser la durée de vie des équipements",
      "Digitaliser les interventions terrain",
      "Mesurer la performance (MTBF, MTTR, OEE)",
    ],
    targets: ["Industrie manufacturière", "Facility management", "Transport & flotte", "Hôpitaux & collectivités"],
    features: [
      { icon: "Wrench", title: "Maintenance préventive", desc: "Planification automatique basée sur le temps, l'usage ou la condition." },
      { icon: "Zap", title: "Maintenance curative", desc: "Gestion des demandes, ordres de travail et historique d'interventions." },
      { icon: "Globe2", title: "Mobilité technicien", desc: "App mobile offline avec photos, signature, lecture QR/NFC et géoloc." },
      { icon: "Boxes", title: "Gestion des stocks", desc: "Pièces détachées, seuils mini-maxi, demandes d'achat automatiques." },
      { icon: "LineChart", title: "Indicateurs MTBF/MTTR", desc: "Dashboards de performance, taux de disponibilité, coûts par équipement." },
      { icon: "ShieldCheck", title: "Sécurité & conformité", desc: "Permis de travail, LOTO, plans de prévention et audits réglementaires." },
      { icon: "Cpu", title: "IoT & maintenance prédictive", desc: "Connecteurs capteurs, alertes seuils et déclenchement automatique d'OT." },
      { icon: "Headphones", title: "Portail demandeurs", desc: "Portail web simple pour signaler une panne ou suivre une demande." },
    ],
    screenshots: [
      { title: "Planning des interventions", kind: "gmao" },
      { title: "Application mobile technicien", kind: "support" },
      { title: "KPI disponibilité parc", kind: "erp" },
    ],
    benefits: [
      { title: "-30% de pannes", desc: "La préventive bien planifiée évite la majorité des arrêts." },
      { title: "+25% productivité tech.", desc: "Mobilité, OT digitaux, fini les bons papier." },
      { title: "-20% coûts pièces", desc: "Stock optimisé et standardisation des références." },
      { title: "Conformité ISO 55001", desc: "Traçabilité complète et reporting automatisé." },
    ],
    useCases: [
      { industry: "Industrie agro", scenario: "Maintenance ligne d'embouteillage avec capteurs IoT." },
      { industry: "Hôpital", scenario: "Maintenance biomédicale et contrôles réglementaires." },
      { industry: "Immobilier", scenario: "Multi-sites : ascenseurs, CVC, sécurité incendie." },
    ],
    stats: [
      { label: "Équipements gérés", value: 250000, suffix: "+" },
      { label: "Techniciens mobiles", value: 8500, suffix: "+" },
      { label: "Réduction temps d'arrêt", value: 30, suffix: "%" },
      { label: "Taux d'adoption", value: 94, suffix: "%" },
    ],
    faq: [
      { q: "FirstParc fonctionne-t-il sans connexion ?", a: "Oui, l'app mobile fonctionne en mode offline et se synchronise dès le retour réseau." },
      { q: "Peut-on connecter des capteurs IoT ?", a: "FirstParc dispose d'API et de connecteurs MQTT pour ingérer des données capteurs en temps réel." },
      { q: "Intégration avec un ERP existant ?", a: "Oui, FirstParc s'intègre nativement à Divalto, SAP, Sage et tout ERP via API REST." },
      { q: "Combien de temps pour démarrer ?", a: "Un POC sur un atelier pilote se fait en 4 à 6 semaines." },
    ],
  },
  {
    slug: "wavesoft",
    name: "WaveSoft",
    tag: "Gestion",
    tagline:
      "La suite de gestion commerciale et comptable conçue pour les TPE/PME ambitieuses.",
    hero: "from-violet-600 via-purple-600 to-fuchsia-500",
    overview:
      "WaveSoft est une suite logicielle complète qui couvre la gestion commerciale, la comptabilité, la paie et le CRM des TPE et PME. Modulaire, simple à prendre en main et 100% conforme à la réglementation française, elle accompagne la croissance de votre entreprise sans complexité inutile.",
    objectives: [
      "Maîtriser le cycle devis → facture → encaissement",
      "Automatiser la comptabilité et la déclaration de TVA",
      "Gérer les stocks et les achats avec précision",
      "Fidéliser les clients grâce au CRM intégré",
    ],
    targets: ["TPE en croissance", "PME multi-utilisateurs", "Cabinets comptables", "Commerce de détail & gros"],
    features: [
      { icon: "LineChart", title: "Gestion commerciale", desc: "Devis, commandes, BL, factures avec relances automatiques." },
      { icon: "Boxes", title: "Stocks & achats", desc: "Multi-dépôts, inventaires, traçabilité, gestion fournisseurs." },
      { icon: "ShieldCheck", title: "Comptabilité NF525", desc: "Comptabilité générale, analytique, FEC, EDI TVA." },
      { icon: "Headphones", title: "CRM & relation client", desc: "Fiches clients 360°, historique, opportunités, tâches." },
      { icon: "Globe2", title: "WaveSoft Cloud", desc: "Accès SaaS sécurisé, sauvegardes quotidiennes, dispo 24/7." },
      { icon: "Zap", title: "E-commerce", desc: "Connecteurs PrestaShop, WooCommerce, Shopify et marketplaces." },
      { icon: "Award", title: "Paie & RH", desc: "Module paie complet, DSN, gestion congés et notes de frais." },
      { icon: "LayoutGrid", title: "Tableaux de bord", desc: "Indicateurs visuels CA, marge, trésorerie, top clients/produits." },
    ],
    screenshots: [
      { title: "Édition de facture", kind: "erp" },
      { title: "Vue CRM client 360°", kind: "crm" },
      { title: "Tableau de bord dirigeant", kind: "erp" },
    ],
    benefits: [
      { title: "Gain de temps x3", desc: "Automatisation devis-facture-compta en une seule chaîne." },
      { title: "Trésorerie maîtrisée", desc: "Relances, paiements en ligne et prévisionnel intégrés." },
      { title: "Conformité totale", desc: "NF525, FEC, facturation électronique 2026 prêts." },
      { title: "Évolutif", desc: "On ajoute des modules au rythme de votre croissance." },
    ],
    useCases: [
      { industry: "Artisanat", scenario: "Devis chantier, facturation et suivi de trésorerie." },
      { industry: "Négoce", scenario: "Multi-dépôts, gestion fournisseurs et marges produit." },
      { industry: "Services", scenario: "Facturation récurrente et abonnements clients." },
    ],
    stats: [
      { label: "Entreprises clientes", value: 18000, suffix: "+" },
      { label: "Factures émises/jour", value: 120000, suffix: "+" },
      { label: "Temps gagné en compta", value: 60, suffix: "%" },
      { label: "Note satisfaction", value: 47, suffix: "/50" },
    ],
    faq: [
      { q: "WaveSoft est-il cloud ou local ?", a: "Les deux : version on-premise classique ou WaveSoft Cloud en SaaS." },
      { q: "La facturation électronique 2026 est-elle prête ?", a: "Oui, WaveSoft est compatible PPF et plateformes PDP agréées." },
      { q: "Y a-t-il un module paie ?", a: "Oui, paie complète avec DSN, conventions collectives et coffre-fort numérique." },
      { q: "Combien d'utilisateurs simultanés ?", a: "De 1 à 100+ utilisateurs avec gestion fine des droits." },
    ],
  },
  {
    slug: "quorion",
    name: "Quorion POS",
    tag: "POS",
    tagline:
      "Les solutions d'encaissement professionnelles allemandes pour retail, restauration et hôtellerie.",
    hero: "from-amber-500 via-orange-600 to-red-500",
    overview:
      "Quorion est un fabricant allemand de caisses enregistreuses tactiles haut de gamme. Robustes, certifiées NF525 et entièrement configurables, les solutions Quorion répondent aux exigences du retail, de la restauration et de l'hôtellerie. SIMSOFT distribue, installe et personnalise Quorion en Tunisie.",
    objectives: [
      "Encaisser rapidement avec une interface tactile intuitive",
      "Garantir la conformité fiscale (NF525)",
      "Centraliser les ventes multi-sites",
      "Connecter le POS à votre ERP / e-commerce",
    ],
    targets: ["Restauration & cafés", "Boulangeries & food retail", "Boutiques mode & spécialisées", "Hôtellerie & loisirs"],
    features: [
      { icon: "LayoutGrid", title: "Caisses tactiles robustes", desc: "Matériel allemand fanless, garantie 3 ans, IP54." },
      { icon: "Zap", title: "Encaissement rapide", desc: "Interface configurable, raccourcis, multi-paiements." },
      { icon: "ShieldCheck", title: "Conformité NF525", desc: "Inaltérabilité, archivage, conservation 10 ans." },
      { icon: "Globe2", title: "Multi-sites cloud", desc: "Console centrale Q-Cloud : ventes, stocks, prix en temps réel." },
      { icon: "Boxes", title: "Gestion stocks & menus", desc: "Recettes, déclinaisons, allergènes, modificateurs." },
      { icon: "LineChart", title: "Reporting analytique", desc: "CA par produit, vendeur, heure, comparaisons multi-périodes." },
      { icon: "Truck", title: "Click & collect", desc: "Connecteur commande en ligne, KDS cuisine, écrans clients." },
      { icon: "Headphones", title: "Support local SIMSOFT", desc: "Installation, formation et maintenance partout en Tunisie." },
    ],
    screenshots: [
      { title: "Interface caisse tactile", kind: "pos" },
      { title: "Plan de salle restaurant", kind: "pos" },
      { title: "Dashboard multi-sites", kind: "erp" },
    ],
    benefits: [
      { title: "Encaissement 2× plus rapide", desc: "Interface optimisée pour le rush." },
      { title: "Erreurs caisse divisées par 4", desc: "Workflow guidé, contrôles automatiques." },
      { title: "Pilotage temps réel", desc: "Suivez votre CA depuis votre smartphone." },
      { title: "Matériel durable", desc: "Durée de vie moyenne > 8 ans en environnement intensif." },
    ],
    useCases: [
      { industry: "Restaurant", scenario: "Plan de salle, envoi cuisine, paiement par addition." },
      { industry: "Boulangerie", scenario: "Vente rapide, fidélité client, gestion fournées." },
      { industry: "Retail mode", scenario: "Tailles/couleurs, fidélité, étiquettes électroniques." },
    ],
    stats: [
      { label: "Caisses installées dans le monde", value: 300000, suffix: "+" },
      { label: "Pays distribués", value: 100, suffix: "+" },
      { label: "Années d'expérience", value: 35 },
      { label: "Disponibilité matériel", value: 999, suffix: "‰" },
    ],
    faq: [
      { q: "Quorion est-il certifié en Tunisie ?", a: "Oui, conforme aux exigences fiscales locales et NF525 pour l'export." },
      { q: "Peut-on connecter Quorion à un ERP ?", a: "Oui, connecteurs natifs Divalto, WaveSoft, Sage et API ouverte." },
      { q: "Quelles options de paiement ?", a: "Espèces, CB, tickets restaurant, mobile money, QR codes." },
      { q: "Y a-t-il une app mobile ?", a: "Oui, prise de commande tablette et application managériale." },
    ],
  },
  {
    slug: "developpement-specifique",
    name: "Développement spécifique",
    tag: "Custom",
    tagline:
      "Des logiciels métiers sur mesure conçus autour de vos processus — web, mobile, IA et intégration.",
    hero: "from-pink-600 via-rose-600 to-orange-500",
    overview:
      "Quand les progiciels du marché ne répondent pas à vos enjeux métiers, SIMSOFT conçoit, développe et maintient des applications sur mesure. Notre équipe pluridisciplinaire (UX, dev, data, IA) couvre tout le cycle de vie : cadrage, prototypage, build, run et évolutions.",
    objectives: [
      "Digitaliser des processus uniques à fort enjeu",
      "Interconnecter vos systèmes existants",
      "Exploiter vos données via IA et data science",
      "Livrer rapidement grâce à l'agilité",
    ],
    targets: ["Grands comptes", "Scale-ups & start-ups", "ETI à processus uniques", "Acteurs publics"],
    features: [
      { icon: "Cpu", title: "Applications web & mobile", desc: "React, Next.js, TanStack, React Native, Flutter." },
      { icon: "Globe2", title: "Intégration & API", desc: "REST, GraphQL, EDI, ESB, micro-services événementiels." },
      { icon: "LineChart", title: "Data & BI", desc: "Pipelines, data warehouses, dashboards Power BI / Metabase." },
      { icon: "Sparkles", title: "IA & LLM", desc: "Chatbots, RAG, vision, NLP, automatisation intelligente." },
      { icon: "ShieldCheck", title: "DevSecOps", desc: "CI/CD, infra as code, monitoring, sécurité OWASP." },
      { icon: "Award", title: "UX/UI Design", desc: "Recherche utilisateur, design system, prototypage Figma." },
      { icon: "Zap", title: "Méthode agile", desc: "Sprints 2 semaines, démos régulières, transparence totale." },
      { icon: "Headphones", title: "TMA dédiée", desc: "Tierce Maintenance Applicative, SLA, évolutions continues." },
    ],
    screenshots: [
      { title: "Application métier custom", kind: "code" },
      { title: "Dashboard data temps réel", kind: "erp" },
      { title: "Assistant IA intégré", kind: "support" },
    ],
    benefits: [
      { title: "Avantage concurrentiel", desc: "Un outil unique, taillé pour votre process." },
      { title: "Code 100% à vous", desc: "Propriété intellectuelle transférée, pas de vendor lock-in." },
      { title: "Time-to-market réduit", desc: "MVP en 6 à 12 semaines avec notre framework interne." },
      { title: "Évolutif & maintenable", desc: "Architecture moderne, tests, documentation." },
    ],
    useCases: [
      { industry: "Logistique", scenario: "Portail de suivi colis temps réel multi-transporteurs." },
      { industry: "Finance", scenario: "Plateforme de scoring crédit avec IA." },
      { industry: "Santé", scenario: "App mobile patient + back-office médecin sécurisé." },
    ],
    stats: [
      { label: "Projets livrés", value: 180, suffix: "+" },
      { label: "Sprints exécutés/an", value: 600, suffix: "+" },
      { label: "Disponibilité SLA", value: 999, suffix: "‰" },
      { label: "NPS clients", value: 72 },
    ],
    faq: [
      { q: "Comment se déroule un projet sur mesure ?", a: "Cadrage (2 sem), prototype (2-4 sem), build par sprints, mise en prod et TMA." },
      { q: "Quelles technologies utilisez-vous ?", a: "Stack moderne : React/Next, Node, Python, Postgres, Kubernetes, Azure/AWS." },
      { q: "À qui appartient le code source ?", a: "Au client. Livraison sur votre repo Git, sans dépendance à SIMSOFT." },
      { q: "Faites-vous de la maintenance ?", a: "Oui, contrats TMA avec SLA garantis (P1 < 2h)." },
    ],
  },
  {
    slug: "assistance-technique",
    name: "Assistance technique",
    tag: "Support",
    tagline:
      "Support, infogérance et maintenance applicative en continu — vos systèmes toujours opérationnels.",
    hero: "from-sky-600 via-blue-600 to-indigo-500",
    overview:
      "SIMSOFT propose un service d'assistance technique 24/7 couvrant vos ERP, GMAO, POS, infrastructure et applications métiers. Nos ingénieurs certifiés interviennent à distance et sur site, avec des SLA garantis et un portail self-service moderne.",
    objectives: [
      "Garantir la continuité de service",
      "Réduire le délai de résolution des incidents",
      "Anticiper les pannes via la supervision proactive",
      "Faire monter en compétences vos équipes",
    ],
    targets: ["Clients Divalto / WaveSoft / FirstParc", "PME sans DSI interne", "ETI multi-sites", "Acteurs critiques 24/7"],
    features: [
      { icon: "Headphones", title: "Helpdesk multicanal", desc: "Téléphone, email, chat, portail — réponse en moins de 15 min." },
      { icon: "Zap", title: "SLA garantis", desc: "P1 < 2h, P2 < 4h, disponibilité 99,9% contractuelle." },
      { icon: "Globe2", title: "Intervention à distance", desc: "Prise en main sécurisée, scripts d'automatisation, télémaintenance." },
      { icon: "Truck", title: "Intervention sur site", desc: "Techniciens présents partout en Tunisie sous 24h." },
      { icon: "ShieldCheck", title: "Supervision proactive", desc: "Monitoring infra, alertes seuils, intervention avant l'incident." },
      { icon: "Cpu", title: "Infogérance applicative", desc: "Gestion des mises à jour, patchs sécurité, sauvegardes." },
      { icon: "Award", title: "Formation & coaching", desc: "Sessions personnalisées et e-learning pour vos key users." },
      { icon: "LineChart", title: "Reporting transparent", desc: "Tickets, SLA, root causes — accessibles en temps réel." },
    ],
    screenshots: [
      { title: "Portail tickets self-service", kind: "support" },
      { title: "Tableau supervision live", kind: "erp" },
      { title: "Chat support intégré", kind: "support" },
    ],
    benefits: [
      { title: "Disponibilité 99,9%", desc: "Vos systèmes critiques restent opérationnels." },
      { title: "Coûts maîtrisés", desc: "Forfait mensuel sans surprise, alternatif à un recrutement DSI." },
      { title: "Réactivité maximale", desc: "Équipe locale, francophone, dédiée à votre compte." },
      { title: "Sérénité totale", desc: "Vous vous concentrez sur votre métier, on s'occupe du reste." },
    ],
    useCases: [
      { industry: "Industrie", scenario: "Astreinte 24/7 sur ERP de production." },
      { industry: "Retail", scenario: "Support multi-magasins Quorion + Divalto." },
      { industry: "Services", scenario: "Infogérance complète : serveurs, postes, applis." },
    ],
    stats: [
      { label: "Tickets traités/an", value: 12000, suffix: "+" },
      { label: "Temps moyen résolution", value: 47, suffix: " min" },
      { label: "Satisfaction client", value: 98, suffix: "%" },
      { label: "Ingénieurs certifiés", value: 35 },
    ],
    faq: [
      { q: "Faut-il être client SIMSOFT pour bénéficier du support ?", a: "Non, nous supportons aussi des environnements installés par d'autres prestataires." },
      { q: "Le support est-il 24/7 ?", a: "Oui, option astreinte 24/7/365 disponible avec SLA renforcés." },
      { q: "Quelle langue parle le support ?", a: "Français, arabe et anglais." },
      { q: "Y a-t-il un portail client ?", a: "Oui, portail web moderne pour ouvrir, suivre et historiser tous vos tickets." },
    ],
  },
];

export const productSlugs = products.map((p) => p.slug);
export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const getAdjacent = (slug: string) => {
  const i = products.findIndex((p) => p.slug === slug);
  if (i < 0) return { prev: null, next: null };
  return {
    prev: products[(i - 1 + products.length) % products.length],
    next: products[(i + 1) % products.length],
  };
};
