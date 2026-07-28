export type FaqCategory =
  | 'Général'
  | 'Technique'
  | 'Licence'
  | 'Données'
  | 'Comptabilité'

export interface FaqItem {
  category: FaqCategory
  question: string
  answer: string
}

export const FAQ: FaqItem[] = [
  {
    category: 'Général',
    question: 'Pourquoi Notice fonctionne-t-il sans compte utilisateur ?',
    answer:
      "Parce que vos devis et factures n'ont pas besoin d'un compte cloud pour exister. Vous téléchargez, vous installez, vous travaillez. Pas d'email de confirmation, pas de mot de passe à gérer, pas de session qui expire. La seule étape en ligne est l'activation de la licence au premier lancement.",
  },
  {
    category: 'Technique',
    question: 'Puis-je utiliser Notice sans Internet ?',
    answer:
      "Oui, entièrement. Notice fonctionne 100 % hors ligne. Toutes vos données sont stockées sur votre ordinateur. La seule connexion utilisée est pour l'activation de la licence au premier lancement, puis périodiquement pour vérifier les mises à jour disponibles.",
  },
  {
    category: 'Données',
    question: 'Mes données quittent-elles mon ordinateur ?',
    answer:
      'Non. Vos devis, factures, clients, articles et données comptables restent sur votre ordinateur dans une base de données locale. Seul votre statut de licence est vérifié en ligne — jamais le contenu de vos documents.',
  },
  {
    category: 'Licence',
    question: 'Puis-je installer Notice sur plusieurs ordinateurs ?',
    answer:
      "Oui. Votre licence autorise l'installation sur 2 ordinateurs simultanément — par exemple votre PC de bureau et votre laptop. En cas de changement d'appareil, un remplacement de device est possible depuis l'application.",
  },
  {
    category: 'Licence',
    question: 'Comment fonctionne la licence ?',
    answer:
      "Après votre achat, vous recevez une clé de licence par email (format NOTICE-XXXX-XXXX-XXXX-XXXX). Cette clé est saisie au premier lancement de Notice. Elle est liée à votre entreprise (SIRET). La licence est à vie — vous ne payez qu'une seule fois.",
  },
  {
    category: 'Licence',
    question: "Que se passe-t-il après un changement d'ordinateur ?",
    answer:
      "Exportez vos données depuis l'ancien ordinateur (fichier .notice), installez Notice sur le nouveau, importez vos données. Votre licence peut être transférée via la procédure de remplacement d'appareil dans les paramètres.",
  },
  {
    category: 'Données',
    question: 'Comment fonctionne la sauvegarde ?',
    answer:
      "Notice effectue une sauvegarde automatique toutes les 4 heures dans un dossier de votre choix. Chaque sauvegarde est un fichier .notice (archive compressée) contenant votre base de données, vos pièces jointes et vos PDFs. Les 7 dernières sauvegardes sont conservées automatiquement.",
  },
  {
    category: 'Comptabilité',
    question: 'Notice est-il compatible Factur-X ?',
    answer:
      'Oui. Notice génère des factures électroniques au format Factur-X (PDF/A-3 avec XML embarqué), ainsi qu\'aux formats UBL 2.1 et CII. Ces formats sont conformes aux obligations de facturation électronique B2B.',
  },
  {
    category: 'Comptabilité',
    question: 'Comment envoyer mes factures électroniques ?',
    answer:
      "Notice génère le fichier Factur-X localement. Vous le déposez ensuite sur la plateforme de dépôt de votre choix. Notice ne vous impose aucune plateforme — vous êtes libre de choisir votre opérateur de dématérialisation.",
  },
  {
    category: 'Données',
    question: 'Puis-je récupérer mes données ?',
    answer:
      'Oui, à tout moment. Notice propose un export complet de vos données (base de données + PDFs + pièces jointes) en un fichier archive. Vous pouvez également exporter vos journaux comptables au format CSV ou Excel pour votre expert-comptable.',
  },
  {
    category: 'Licence',
    question: 'Existe-t-il un abonnement ?',
    answer:
      "Non. La licence Notice est à vie — vous payez une seule fois. Les mises à jour sont incluses pendant 1 an. Au-delà, vous continuez à utiliser la version en votre possession sans frais supplémentaires. Le renouvellement des mises à jour est entièrement optionnel.",
  },
]

export const FAQ_CATEGORIES: FaqCategory[] = [
  'Général',
  'Technique',
  'Licence',
  'Données',
  'Comptabilité',
]
