import {
  Users,
  Building2,
  BookOpen,
  FileText,
  FileCheck,
  CreditCard,
  FileX,
  LayoutDashboard,
  HardDrive,
} from 'lucide-react'

export const FEATURES = [
  {
    category: 'Clients',
    title: 'Gérez tous vos clients en un seul endroit.',
    description:
      "Particuliers ou professionnels, retrouvez en un clic l'historique complet de chaque client, ses chantiers et tous ses documents.",
    points: [
      'Coordonnées complètes avec SIREN/TVA',
      'Plusieurs adresses par client',
      'Historique documents et paiements',
      'Notes internes privées',
      'Recherche instantanée',
    ],
    icon: Users,
    screenshot: '/screens/clients.webp',
  },
  {
    category: 'Chantiers',
    title: 'Organisez vos interventions par chantier.',
    description:
      "Chaque client peut avoir plusieurs chantiers. Tous les documents, photos et pièces jointes sont organisés par lieu d'intervention.",
    points: [
      'Un client, plusieurs chantiers',
      'Pièces jointes et photos avant/après',
      "Suivi de l'avancement",
      'Historique des interventions',
      'Adresse chantier distincte',
    ],
    icon: Building2,
    screenshot: '/screens/chantiers.webp',
  },
  {
    category: 'Catalogue',
    title: "Vos prestations en 1 clic, à chaque devis.",
    description:
      "Enregistrez une fois vos tarifs de main d'œuvre, déplacements et matériaux. Ajoutez-les à vos devis sans jamais ressaisir.",
    points: [
      'Prestations et matériaux',
      'Gestion TVA par article',
      'Unités : heure, m², forfait, unité',
      'Rappels de maintenance automatiques',
      'Favoris et catégories',
    ],
    icon: BookOpen,
    screenshot: '/screens/catalogue.webp',
  },
  {
    category: 'Devis',
    title: 'Un devis professionnel en moins de 2 minutes.',
    description:
      'Créez des devis depuis votre catalogue, ajoutez vos conditions particulières, et envoyez un PDF conforme aux obligations légales françaises.',
    points: [
      'Création depuis le catalogue',
      'Duplication en 1 clic',
      'Gestion des acomptes demandés',
      'PDF conforme droit français',
      'Signature client (bloc dédié)',
    ],
    icon: FileText,
    screenshot: '/screens/devis.webp',
  },
  {
    category: 'Factures',
    title: 'De la facture au paiement, sans ressaisie.',
    description:
      'Convertissez un devis accepté en facture en 1 clic. La numérotation est automatique, chronologique et immuable.',
    points: [
      'Conversion devis → facture en 1 clic',
      'Numérotation chronologique automatique',
      'Facture verrouillée après émission',
      'Export Factur-X (PDF/A-3)',
      'Mentions légales incluses',
    ],
    icon: FileCheck,
    screenshot: '/screens/factures.webp',
  },
  {
    category: 'Paiements',
    title: 'Suivez chaque euro encaissé.',
    description:
      "Enregistrez les paiements au fil de l'eau — acomptes, paiements partiels, soldes. Notice calcule automatiquement le reste à payer.",
    points: [
      'Paiements partiels et complets',
      'Plusieurs modes de paiement',
      'Détection automatique du trop-perçu',
      'Mention "Acquittée" sur le PDF',
      'Historique des encaissements',
    ],
    icon: CreditCard,
    screenshot: '/screens/paiements.webp',
  },
  {
    category: 'Avoirs',
    title: 'Gérez les remboursements simplement.',
    description:
      "En cas de trop-perçu ou d'annulation, créez un avoir total ou partiel lié à la facture d'origine.",
    points: [
      'Avoir total ou partiel',
      'Lié automatiquement à la facture',
      'PDF avoir conforme',
      'Historique traçable',
      'Remboursement documenté',
    ],
    icon: FileX,
    screenshot: '/screens/avoirs.webp',
  },
  {
    category: 'Tableau de bord',
    title: "Votre activité d'un seul regard.",
    description:
      "Chaque matin, visualisez votre chiffre d'affaires, vos devis en attente et vos factures impayées sans ouvrir un seul fichier.",
    points: [
      'CA du mois en temps réel',
      'Devis en attente de réponse',
      'Factures impayées avec alertes',
      'Rappels du jour',
      'Documents récents',
    ],
    icon: LayoutDashboard,
    screenshot: '/screens/dashboard.webp',
  },
  {
    category: 'Sauvegardes',
    title: 'Vos données protégées, automatiquement.',
    description:
      'Notice sauvegarde silencieusement toutes vos données toutes les 4 heures. En cas de problème, restaurez en quelques clics.',
    points: [
      'Sauvegarde automatique toutes les 4h',
      'Fichier unique .notice',
      'Restauration en quelques clics',
      '7 sauvegardes conservées',
      'Dossier de sauvegarde configurable',
    ],
    icon: HardDrive,
    screenshot: '/screens/sauvegardes.webp',
  },
]
