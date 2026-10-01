import Link from 'next/link'
import { CAPTURE } from '@/constants/documentation'
import { Button } from '@/components/ui/Button'
import { DocCallout } from '@/components/documentation/DocCallout'
import { DocCapture } from '@/components/documentation/DocCapture'
import { DocStep, DocSteps } from '@/components/documentation/DocStep'

function SectionBlock({
  id,
  children,
}: {
  id: string
  children: React.ReactNode
}) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-t border-separator py-12 first:border-t-0 first:pt-2 md:py-16"
    >
      {children}
    </section>
  )
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[1.5rem] font-semibold leading-tight text-fg sm:text-[1.75rem]">
      {children}
    </h2>
  )
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-10 text-lg font-semibold text-fg">{children}</h3>
  )
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 text-[15px] leading-relaxed text-fg-strong">{children}</p>
  )
}

function Code({ children }: { children: string }) {
  return (
    <code className="rounded-md bg-detail px-1.5 py-0.5 text-[13px] font-medium text-fg">
      {children}
    </code>
  )
}

export function DocumentationSections() {
  return (
    <div>
      <SectionBlock id="installer">
        <H2>Installer Notice</H2>
        <P>
          Notice est disponible sur Windows et macOS. Téléchargez
          l’installateur depuis le site Notice, puis suivez les étapes
          correspondant à votre ordinateur.
        </P>

        <H3>Télécharger Notice</H3>
        <P>
          Depuis la{' '}
          <Link href="/telecharger" className="font-medium text-primary hover:underline">
            page de téléchargement
          </Link>
          du site, choisissez la version correspondant à votre ordinateur.
        </P>

        <H3>Installer Notice sur Windows</H3>
        <P>
          Une fois le téléchargement terminé, ouvrez le dossier Téléchargements
          de votre ordinateur.
        </P>
        <DocSteps>
          <DocStep n={1}>
            <p>
              Ouvrez le fichier{' '}
              <Code>Notice-1.0.0-windows-x64-setup.exe</Code>.
            </p>
          </DocStep>
          <DocStep n={2}>
            <p>
              Windows peut vous demander l’autorisation d’apporter des
              modifications à votre ordinateur. Autorisez l’installation pour
              continuer.
            </p>
          </DocStep>
          <DocStep n={3}>
            <p>Vérifiez le dossier d’installation proposé, puis validez-le.</p>
            <DocCapture
              src={CAPTURE[1]}
              alt="Choix du dossier d’installation de Notice sur Windows"
              caption="Choisissez ou confirmez le dossier d’installation de Notice."
            />
          </DocStep>
          <DocStep n={4}>
            <p>
              Vous pouvez choisir d’ajouter une icône Notice sur votre bureau
              afin de retrouver plus rapidement le logiciel.
            </p>
            <DocCapture
              src={CAPTURE[2]}
              alt="Option d’ajout d’une icône Notice sur le bureau Windows"
            />
          </DocStep>
          <DocStep n={5}>
            <p>Cliquez sur « Installer » et laissez Notice s’installer.</p>
          </DocStep>
          <DocStep n={6}>
            <p>
              Lorsque l’installation est terminée, cliquez sur « Terminer ».
              Notice se lancera automatiquement.
            </p>
            <DocCapture
              src={CAPTURE[3]}
              alt="Fin de l’installation de Notice sur Windows"
            />
          </DocStep>
          <DocStep n={7}>
            <p>Vous arrivez alors sur l’écran d’accueil de Notice.</p>
            <DocCapture
              src={CAPTURE[4]}
              alt="Écran d’accueil de Notice après l’installation"
            />
          </DocStep>
        </DocSteps>

        <H3>Installer Notice sur macOS</H3>
        <P>
          Une fois le téléchargement terminé, ouvrez le dossier Téléchargements
          de votre Mac.
        </P>
        <DocSteps>
          <DocStep n={1}>
            <p>
              Ouvrez le fichier <Code>Notice-1.0.0-macos.dmg</Code>.
            </p>
          </DocStep>
          <DocStep n={2}>
            <p>
              Faites glisser l’icône Notice vers l’icône du dossier
              Applications.
            </p>
            <DocCapture
              src={CAPTURE[5]}
              alt="Installation de Notice sur macOS : glisser vers Applications"
            />
          </DocStep>
          <DocStep n={3}>
            <p>
              Ouvrez ensuite Notice depuis votre dossier Applications ou depuis
              la recherche d’applications de macOS.
            </p>
          </DocStep>
          <DocStep n={4}>
            <p>
              Notice s’ouvre sur le menu permettant de choisir votre mode de
              lancement.
            </p>
          </DocStep>
        </DocSteps>
      </SectionBlock>

      <SectionBlock id="modes">
        <H2>Choisir comment utiliser Notice</H2>
        <P>Au lancement de Notice, trois possibilités vous sont proposées.</P>

        <div className="mt-8 space-y-5">
          <div>
            <h3 className="text-base font-semibold text-fg">Avec une licence</h3>
            <p className="mt-1.5 text-[15px] leading-relaxed text-fg-strong">
              Activez Notice avec votre clé de licence et utilisez le logiciel
              avec les données de votre entreprise.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-fg">
              Découvrir la démo
            </h3>
            <p className="mt-1.5 text-[15px] leading-relaxed text-fg-strong">
              Explorez Notice avec des données fictives pour découvrir le
              fonctionnement du logiciel.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-fg">Essai gratuit</h3>
            <p className="mt-1.5 text-[15px] leading-relaxed text-fg-strong">
              Utilisez Notice avec vos propres données pendant 30 jours.
            </p>
          </div>
        </div>

        <DocCapture
          src={CAPTURE['5mac']}
          alt="Menu de choix du mode de lancement de Notice"
          caption="Au lancement, choisissez le mode dans lequel vous souhaitez utiliser Notice."
        />

        <P>
          Les modes démo et essai disposent d’un bouton « Quitter » permettant
          de revenir à ce menu à tout moment.
        </P>
      </SectionBlock>

      <SectionBlock id="demo">
        <H2>Découvrir Notice avec la démo</H2>
        <P>
          Le mode démo vous permet de parcourir Notice immédiatement, avec une
          base de données déjà remplie de données fictives.
        </P>
        <DocSteps>
          <DocStep n={1}>
            <p>
              Ouvrez Notice et cliquez sur « Découvrir la démo ».
            </p>
            <DocCapture
              src={CAPTURE['5mac']}
              alt="Choix du mode démo depuis le menu de lancement"
            />
          </DocStep>
          <DocStep n={2}>
            <p>
              Notice ouvre directement le tableau de bord avec des données
              fictives.
            </p>
            <DocCapture
              src={CAPTURE[6]}
              alt="Tableau de bord de Notice en mode démo"
            />
          </DocStep>
        </DocSteps>
        <P>
          Vous pouvez naviguer librement dans le logiciel afin de découvrir son
          fonctionnement et de voir comment les différentes informations sont
          liées entre elles.
        </P>
        <P>
          La démo contient des données fictives permettant notamment de
          parcourir les clients, les chantiers, les rendez-vous, les devis, les
          factures, les paiements et les rappels.
        </P>
        <DocCallout>
          <p>
            Le mode démo ne permet pas de créer vos propres données. Il sert
            uniquement à découvrir Notice.
          </p>
        </DocCallout>
        <P>
          Vous pouvez à tout moment revenir au menu de choix des modes en
          cliquant sur « Quitter la démo ».
        </P>
        <P>
          Depuis le bouton « Acheter Notice », vous pouvez également accéder au
          site pour acheter une licence.
        </P>
      </SectionBlock>

      <SectionBlock id="essai">
        <H2>Essayer Notice gratuitement pendant 30 jours</H2>
        <P>
          L’essai gratuit vous permet d’utiliser Notice avec les propres
          données de votre entreprise pendant 30 jours, dans les conditions
          normales d’utilisation du logiciel.
        </P>
        <p className="mt-5 text-[15px] font-medium leading-relaxed text-fg">
          30 jours · Vos propres données · Sans carte bancaire · Sans engagement
        </p>

        <H3>1. Lancer l’essai</H3>
        <P>
          Depuis le menu de choix des modes, cliquez sur « Essai gratuit ».
        </P>
        <DocCapture
          src={CAPTURE['5mac']}
          alt="Lancement de l’essai gratuit depuis le menu de Notice"
        />

        <H3>2. Renseigner le SIRET</H3>
        <P>Notice vous demande ensuite le SIRET de votre entreprise.</P>
        <DocCapture
          src={CAPTURE[7]}
          alt="Saisie du SIRET pour activer l’essai gratuit"
        />
        <DocCallout kind="important">
          <p>
            Un SIRET donne droit à un seul essai gratuit de 30 jours. L’essai
            n’est pas renouvelable. Réinstaller Notice ou utiliser un autre
            ordinateur avec le même SIRET ne permet pas de recommencer un essai
            : le décompte reste associé à cette entreprise.
          </p>
        </DocCallout>
        <P>Dès que l’essai est activé, le décompte des 30 jours commence.</P>
        <DocCallout>
          <p>
            Une connexion Internet est obligatoire à cette étape afin
            d’enregistrer et de valider l’essai sur les serveurs de Notice. Une
            fois l’essai activé, Notice peut être utilisé totalement hors ligne.
          </p>
        </DocCallout>
        <DocCallout>
          <p>Les données créées pendant l’essai restent conservées.</p>
        </DocCallout>

        <H3>3. Renseigner les informations de votre entreprise</H3>
        <DocCapture
          src={CAPTURE[8]}
          alt="Formulaire des informations de l’entreprise dans Notice"
        />
        <P>
          Renseignez les informations de votre entreprise demandées par Notice.
        </P>
        <P>
          Ces informations pourront ensuite être modifiées depuis la page
          Paramètres si nécessaire, à l’exception du SIRET.
        </P>
      </SectionBlock>

      <SectionBlock id="configurer">
        <H2>Configurer votre entreprise</H2>
        <P>
          Avant d’utiliser Notice, plusieurs paramètres permettent de préparer
          vos futurs documents et l’organisation de vos données.
        </P>

        <H3>Informations et numérotation</H3>
        <DocCapture
          src={CAPTURE[8]}
          alt="Informations de l’entreprise utilisées sur les documents"
        />
        <P>
          Renseignez les informations nécessaires au fonctionnement de votre
          entreprise et à la création de vos documents.
        </P>
        <DocCapture
          src={CAPTURE[9]}
          alt="Numérotation, conditions générales de vente et dossier de sauvegarde"
          caption="Renseignez la numérotation, les conditions générales et le dossier de sauvegarde."
        />
        <P>
          Portez une attention particulière à la numérotation et aux préfixes
          utilisés pour les différents types de documents. Une modification
          effectuée depuis les paramètres ne sera prise en compte qu’à partir
          de l’année suivante. La numérotation déjà utilisée pour l’année en
          cours n’est donc pas modifiée.
        </P>

        <H3>Conditions générales de vente</H3>
        <P>
          Vous pouvez également renseigner les conditions générales de vente
          utilisées par Notice. Ces conditions viennent en complément des
          informations et mentions rendues nécessaires par la législation
          applicable.
        </P>

        <H3>Choisir votre dossier de sauvegarde</H3>
        <P>
          Notice vous permet de choisir le dossier dans lequel seront
          enregistrées les sauvegardes ainsi que les documents exportés depuis
          le logiciel.
        </P>
        <P>
          Vous pourrez modifier ce dossier à tout moment depuis les paramètres
          de Notice.
        </P>
        <P>
          Vous pouvez choisir un dossier situé sur votre ordinateur, sur un
          disque dur externe ou dans un dossier synchronisé avec votre service
          de stockage cloud.
        </P>
        <P>
          Si vous choisissez un disque dur externe, celui-ci devra être
          connecté lorsque Notice devra y enregistrer une sauvegarde ou un
          export.
        </P>
        <DocCallout kind="important">
          <p>
            Vos données restent sur votre ordinateur et dans les emplacements
            de sauvegarde que vous avez choisis. Vous êtes responsable des
            données contenues dans votre dossier de sauvegarde et de leur
            conservation.
          </p>
        </DocCallout>

        <H3>Régime de TVA</H3>
        <DocCapture
          src={CAPTURE[10]}
          alt="Choix du régime de TVA de l’entreprise"
        />
        <P>
          Choisissez ensuite le régime de TVA correspondant à votre entreprise.
        </P>
        <P>
          Ce choix pourra être modifié ultérieurement depuis les paramètres de
          Notice.
        </P>

        <H3>Terminer</H3>
        <P>
          Une fois toutes les informations renseignées, vérifiez vos données
          puis cliquez sur « Accéder à Notice ».
        </P>
        <P>
          Notice ouvre alors le tableau de bord de votre entreprise avec une
          base de données vide, prête à être utilisée.
        </P>
      </SectionBlock>

      <SectionBlock id="premier-devis">
        <H2>Créer votre premier devis</H2>
        <P>
          Pour commencer à utiliser Notice, créez d’abord votre client puis son
          chantier avant de créer votre document.
        </P>

        <H3>1. Créer un client</H3>
        <DocCapture
          src={CAPTURE[11]}
          alt="Écran d’accueil pour créer un premier client"
        />
        <P>
          Lorsque votre base est encore vide, Notice vous invite à créer votre
          premier client. Vous pouvez également le faire depuis la page Clients.
        </P>
        <P>
          Choisissez s’il s’agit d’un professionnel ou d’un particulier, puis
          renseignez les informations demandées.
        </P>
        <DocCapture
          src={CAPTURE[12]}
          alt="Formulaire de création d’un client"
        />
        <DocCapture
          src={CAPTURE[13]}
          alt="Suite du formulaire de création d’un client"
        />
        <P>Validez ensuite la création du client.</P>

        <H3>2. Ouvrir la fiche client</H3>
        <DocCapture
          src={CAPTURE[14]}
          alt="Liste des clients et ouverture d’une fiche"
        />
        <P>
          Retrouvez le client depuis la page Clients, puis cliquez sur sa fiche.
        </P>

        <H3>3. Retrouver les informations du client</H3>
        <DocCapture
          src={CAPTURE[15]}
          alt="Informations d’un client dans Notice"
        />
        <P>
          La fiche client rassemble les informations du client et donne accès
          aux différentes actions disponibles.
        </P>
        <P>
          Depuis la fiche client, vous pouvez notamment accéder aux informations
          du client et à ses chantiers.
        </P>
        <DocCapture src={CAPTURE[16]} alt="Chantiers d’un client dans Notice" />
        <P>
          Lors de la création d’un client, un chantier principal est
          automatiquement créé avec l’adresse principale du client. Cette
          adresse n’est pas modifiable pour ce chantier principal.
        </P>
        <P>
          Vous pouvez ensuite créer d’autres chantiers pour ce même client,
          avec une adresse différente.
        </P>

        <H3>4. Créer un nouveau document</H3>
        <DocCapture
          src={CAPTURE[18]}
          alt="Création d’un nouveau document depuis la fiche client"
        />
        <P>
          Depuis la fiche client, cliquez sur « Nouveau document » puis
          choisissez le type de document souhaité.
        </P>
        <P>
          Vous pouvez choisir le client et le chantier concernés depuis le menu
          de recherche, puis compléter les informations du document.
        </P>

        <H3>5. Le document en brouillon</H3>
        <DocCapture
          src={CAPTURE[19]}
          alt="Document Notice en statut brouillon"
        />
        <P>Une fois créé, le document s’ouvre automatiquement.</P>
        <P>
          Tant qu’il n’a pas été envoyé au client, il reste en statut «
          Brouillon » et peut être modifié.
        </P>

        <H3>6. TVA et acompte</H3>
        <DocCapture
          src={CAPTURE[23]}
          alt="Régime de TVA et acompte sur un devis"
        />
        <P>
          Le régime de TVA disponible pour le document dépend du régime
          renseigné dans les paramètres de votre entreprise.
        </P>
        <P>
          Vous pouvez également ajouter un acompte au devis. Vous pouvez
          choisir un pourcentage ou renseigner directement un montant.
        </P>

        <H3>7. Ajouter les lignes du document</H3>
        <DocCapture
          src={CAPTURE[19]}
          alt="Lignes d’un devis dans Notice"
        />
        <P>
          Cliquez sur « Modifier les lignes » pour rendre la zone des lignes
          modifiable.
        </P>
        <P>
          Vous pouvez ajouter directement des prestations ou des matériaux au
          document, ou sélectionner un élément déjà présent dans votre
          bibliothèque.
        </P>

        <H3>8. Ajouter un élément à la bibliothèque</H3>
        <DocCapture
          src={CAPTURE[20]}
          alt="Bibliothèque de prestations et de matériaux"
        />
        <P>
          Vous pouvez créer une nouvelle prestation ou un nouveau matériau en
          renseignant les informations nécessaires.
        </P>
        <DocCapture
          src={CAPTURE[21]}
          alt="Ajout d’une prestation ou d’un matériau à la bibliothèque"
        />
        <P>
          Une fois enregistré, cet élément peut être ajouté à votre
          bibliothèque afin d’être réutilisé sur d’autres documents.
        </P>

        <H3>9. Envoyer ou exporter le document</H3>
        <P>
          Dès que votre devis ou votre facture contient au moins une ligne, il
          peut être envoyé.
        </P>
        <DocCapture
          src={CAPTURE[24]}
          alt="Actions d’envoi et d’export d’un document"
        />
        <P>
          Vous pouvez marquer le document comme envoyé au client. Le document
          devient alors non modifiable et reçoit son numéro final.
        </P>
        <P>Vous pouvez également télécharger le PDF du document.</P>
        <P>
          Vous pouvez enfin créer directement un email depuis Notice. Votre
          application de messagerie installée sur votre ordinateur s’ouvre avec
          un message prérempli et le document en pièce jointe.
        </P>

        <H3>10. Après l’envoi du devis</H3>
        <P>Une fois le devis envoyé, vous pouvez l’accepter ou le refuser.</P>
        <P>
          Lorsqu’un devis est accepté, vous pouvez créer la facture associée.
          La facture est créée en brouillon avec les mêmes informations
          concernant le client et le chantier, ainsi que les lignes du devis.
        </P>
        <P>
          Vous pouvez également enregistrer l’acompte associé au devis. Notice
          crée automatiquement le document lié correspondant.
        </P>
        <DocCapture src={CAPTURE[25]} alt="Documents liés à un devis" />
        <DocCapture
          src={CAPTURE[26]}
          alt="Suite des documents liés à un devis"
        />
        <P>
          Les documents liés sont accessibles depuis la page d’un document afin
          de retrouver facilement les éléments associés.
        </P>
      </SectionBlock>

      <SectionBlock id="factur-x">
        <H2>Exporter vos factures au format Factur-X</H2>
        <P>
          Notice permet de générer des factures au format Factur-X afin que
          vous puissiez ensuite utiliser le fichier avec la solution de
          transmission de votre choix.
        </P>

        <H3>Exporter une facture</H3>
        <DocCapture
          src={CAPTURE[28]}
          alt="Export d’une facture au format Factur-X"
        />
        <P>
          Depuis une facture envoyée et acquittée, cliquez sur « Exporter en
          Factur-X ». Notice génère alors le fichier correspondant.
        </P>
        <P>
          Le fichier généré est enregistré directement dans votre dossier de
          sauvegarde.
        </P>

        <H3>Exporter plusieurs factures</H3>
        <DocCapture
          src={CAPTURE[29]}
          alt="Préparation de l’envoi électronique depuis la comptabilité"
        />
        <P>
          Depuis l’onglet Comptabilité, cliquez sur « Préparer l’envoi
          électronique » pour préparer l’export de plusieurs factures.
        </P>
        <DocCapture
          src={CAPTURE[30]}
          alt="Sélection des factures à exporter en Factur-X"
        />
        <P>
          Sélectionnez ensuite les factures que vous souhaitez prendre en
          compte.
        </P>
        <P>
          Les fichiers générés sont enregistrés dans votre dossier de
          sauvegarde.
        </P>
      </SectionBlock>

      <SectionBlock id="sauvegardes">
        <H2>Sauvegarder et restaurer vos données</H2>
        <P>
          Les fonctionnalités de sauvegarde et de restauration sont accessibles
          depuis Paramètres → Sauvegarde.
        </P>
        <DocCapture
          src={CAPTURE[31]}
          alt="Écran de sauvegarde et de restauration dans Notice"
        />

        <H3>Les sauvegardes automatiques</H3>
        <P>
          Notice conserve automatiquement les sauvegardes prévues par le
          logiciel. Les trois sauvegardes automatiques les plus récentes sont
          conservées et peuvent être restaurées. Elles ne peuvent pas être
          supprimées depuis l’application.
        </P>

        <H3>Sauvegarder maintenant</H3>
        <P>
          Le bouton « Sauvegarder maintenant » permet de créer une nouvelle
          sauvegarde à l’instant souhaité.
        </P>
        <P>
          Les sauvegardes manuelles peuvent être supprimées ou restaurées
          depuis l’écran de sauvegarde.
        </P>

        <H3>Exporter toutes les données</H3>
        <P>
          Le bouton « Exporter toutes les données » crée une nouvelle
          sauvegarde complète, enregistrée dans votre dossier de sauvegarde.
        </P>

        <H3>Restaurer une sauvegarde</H3>
        <P>
          Le bouton « Restaurer » permet de restaurer une sauvegarde disponible
          dans votre dossier de sauvegarde.
        </P>
        <P>
          La liste des sauvegardes disponibles est construite à partir des
          sauvegardes présentes dans ce dossier.
        </P>
        <DocCallout kind="important">
          <p>
            Une sauvegarde associée à un SIRET différent de celui enregistré
            dans Notice ne peut pas être restaurée.
          </p>
          <p>
            Une sauvegarde associée à une autre clé d’activation ne peut pas
            être restaurée avec la clé actuellement utilisée. Dans ce cas, vous
            devrez utiliser la clé d’activation correspondante ou contacter le
            support.
          </p>
        </DocCallout>

        <H3>Importer une sauvegarde</H3>
        <P>
          Le bouton « Importer une sauvegarde » permet de restaurer une
          sauvegarde qui ne se trouve pas dans votre dossier de sauvegarde
          habituel.
        </P>
        <P>
          Cela permet notamment de restaurer une sauvegarde stockée dans un
          autre emplacement.
        </P>

        <DocCallout kind="important">
          <p>
            Les sauvegardes sont enregistrées dans les emplacements que vous
            avez choisis. Vous êtes responsable de la conservation de vos
            sauvegardes et de la sécurité des données qu’elles contiennent.
          </p>
        </DocCallout>
      </SectionBlock>

      <SectionBlock id="exports">
        <H2>Exporter vos données comptables</H2>
        <P>
          Depuis l’onglet Comptabilité, vous pouvez retrouver les encaissements,
          les factures ainsi que différents indicateurs de votre activité.
        </P>
        <DocCapture
          src={CAPTURE[32]}
          alt="Onglet Comptabilité et exports dans Notice"
        />
        <P>
          Notice permet également d’exporter plusieurs informations pour
          faciliter le suivi et le travail de comptabilité.
        </P>
        <ul className="mt-4 list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed text-fg-strong">
          <li>Journal des ventes</li>
          <li>Journal des encaissements</li>
          <li>TVA déclarée</li>
          <li>Liste des factures impayées</li>
          <li>Factur-X</li>
          <li>FEC simplifié</li>
        </ul>
        <DocCallout kind="important">
          <p>
            Ces exports constituent une aide au suivi de votre activité et au
            travail comptable. Ils ne constituent pas un dossier comptable
            certifié ou validé par l’État et ne remplacent pas les outils ou
            l’accompagnement nécessaires à votre comptabilité.
          </p>
        </DocCallout>
        <P>
          Les fichiers exportés sont enregistrés dans votre dossier de
          sauvegarde.
        </P>
      </SectionBlock>

      <SectionBlock id="rappels">
        <H2>Créer et gérer vos rappels</H2>
        <P>
          Notice permet de créer des rappels de plusieurs façons afin de vous
          aider à suivre les différentes étapes de votre activité.
        </P>

        <H3>Depuis l’onglet Rappels</H3>
        <DocCapture
          src={CAPTURE[37]}
          alt="Création d’un rappel depuis l’onglet Rappels"
        />
        <P>
          Depuis l’onglet Rappels, vous pouvez créer directement un rappel à
          l’aide du formulaire.
        </P>

        <H3>Depuis un chantier</H3>
        <DocCapture
          src={CAPTURE[38]}
          alt="Création d’un rappel à partir d’une date de visite de chantier"
        />
        <P>
          Lors de la création d’un chantier, vous pouvez renseigner une date de
          visite. Cette date permet de créer automatiquement un rappel.
        </P>

        <H3>Après l’acquittement d’une facture</H3>
        <DocCapture
          src={CAPTURE[39]}
          alt="Proposition de rappel de maintenance après l’acquittement d’une facture"
        />
        <P>
          Lorsqu’une facture est acquittée et qu’elle contient un matériel ou
          une prestation associés à un rappel de maintenance, Notice peut vous
          proposer de créer automatiquement ce rappel.
        </P>

        <H3>Gérer les rappels</H3>
        <P>
          Les rappels entraînent une notification sur votre ordinateur à
          l’heure indiquée. Vous pouvez ensuite les consulter, les modifier ou
          les valider depuis l’onglet Rappels.
        </P>
      </SectionBlock>

      <SectionBlock id="emails">
        <H2>Personnaliser les emails envoyés à vos clients</H2>
        <P>
          Lorsque vous choisissez d’envoyer un document par email depuis
          Notice, votre application de messagerie installée sur votre
          ordinateur s’ouvre avec un message prérempli et le document concerné
          en pièce jointe.
        </P>
        <DocCapture
          src={CAPTURE[35]}
          alt="Personnalisation des emails dans les paramètres de Notice"
        />
        <P>
          Si vous souhaitez personnaliser les messages utilisés par Notice,
          rendez-vous dans Paramètres → Emails.
        </P>
        <P>
          Pour chaque catégorie d’email, vous pouvez renseigner le message que
          vous souhaitez utiliser.
        </P>
        <P>
          Notice utilise des balises pour placer automatiquement les
          informations correspondantes aux endroits souhaités dans votre
          message.
        </P>
        <P>Vous n’êtes pas obligé d’utiliser toutes les balises disponibles.</P>
        <DocCallout>
          <p>
            Les emails sont envoyés depuis votre propre application de
            messagerie. Notice ne remplace pas votre logiciel de messagerie.
          </p>
        </DocCallout>
      </SectionBlock>

      <SectionBlock id="entreprise">
        <H2>Modifier les informations de votre entreprise</H2>
        <P>
          Certaines informations renseignées lors de la création de votre
          entreprise peuvent être modifiées depuis les paramètres de Notice.
        </P>

        <H3>Statut et informations de facturation</H3>
        <DocCapture
          src={CAPTURE[36]}
          alt="Paramètres de facturation de l’entreprise"
        />
        <P>
          Si votre situation ou votre statut d’entreprise évolue et que vous
          devez mettre à jour vos informations de facturation, rendez-vous dans
          Paramètres → Facturation.
        </P>
        <P>
          Le changement de statut n’affecte pas les devis et factures déjà
          envoyés ou payés.
        </P>
        <P>
          Il sera pris en compte pour les documents créés ensuite, ainsi que
          pour les documents encore en brouillon.
        </P>
        <DocCallout>
          <p>
            Le SIRET renseigné lors de la création de l’entreprise ne peut pas
            être modifié depuis cette configuration.
          </p>
        </DocCallout>
      </SectionBlock>

      <SectionBlock id="contact">
        <H2>Besoin d’aide ? Contactez-nous</H2>
        <P>
          Si vous rencontrez un problème avec Notice, souhaitez poser une
          question ou souhaitez nous faire part d’une suggestion, vous pouvez
          nous contacter directement depuis le logiciel ou depuis le site
          Notice.
        </P>

        <H3>Depuis Notice</H3>
        <P>
          Depuis l’onglet Paramètres, descendez jusqu’à la section « À propos
          », puis ouvrez « Nous contacter ».
        </P>
        <DocCapture
          src={CAPTURE[33]}
          alt="Accès à Nous contacter depuis Paramètres → À propos"
        />
        <P>Un formulaire de contact s’ouvre.</P>
        <DocCapture
          src={CAPTURE[34]}
          alt="Formulaire de contact dans Notice"
        />

        <H3>Signaler un problème technique</H3>
        <P>
          En cas d’erreur ou de comportement inattendu, vous pouvez joindre les
          journaux de diagnostic afin de nous aider à identifier l’origine du
          problème.
        </P>
        <DocCallout>
          <p>
            Les journaux envoyés ne contiennent pas vos données métier. Ils
            servent uniquement à fournir des informations techniques utiles au
            diagnostic.
          </p>
        </DocCallout>
        <P>
          Pensez à décrire précisément la situation : ce que vous faisiez, les
          étapes qui ont précédé le problème et ce qui s’est produit. Ces
          informations nous aideront à établir un diagnostic plus rapidement.
        </P>

        <H3>Envoyer le message</H3>
        <P>
          Lorsque vous validez le formulaire, votre application de messagerie
          installée sur votre ordinateur s’ouvre afin de préparer l’email. Vous
          pouvez vérifier le contenu avant de l’envoyer et échanger
          directement avec nous pour résoudre votre problème.
        </P>

        <H3>Depuis le site</H3>
        <P>
          Vous pouvez également nous contacter depuis le site Notice en
          utilisant le lien « Contact » présent dans le footer.
        </P>
        <div className="mt-6">
          <Button href="/contact">Nous contacter</Button>
        </div>
      </SectionBlock>

      <section className="border-t border-separator py-12 md:py-16">
        <h2 className="text-[1.5rem] font-semibold leading-tight text-fg sm:text-[1.75rem]">
          Vous ne trouvez pas la réponse à votre question ?
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-fg-strong">
          Consultez également la FAQ ou contactez-nous directement.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button href="/faq">Consulter la FAQ</Button>
          <Button href="/contact" variant="secondary">
            Nous contacter
          </Button>
        </div>
      </section>
    </div>
  )
}
