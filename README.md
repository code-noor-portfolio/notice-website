# Notice — Site vitrine

Site public de **Notice** (devis & facturation pour artisans).

- Domaine : [notice.code-noor.com](https://notice.code-noor.com)
- App : Next.js 14 (App Router) + API Routes
- Email : Resend (`/api/purchase`, `/api/contact`)
- Hébergement prévu : **Vercel** (API Routes) — pas GitHub Pages

## Architecture actuelle (volontairement légère)

```
Acheter (paiement simulé)
  → POST /api/purchase
  → génère une clé temporaire NOTICE-XXXX-…
  → Resend envoie l’email
```

**Pas de Firebase / Cloud Functions / Firestore pour l’instant.**  
Quand le système de licences sera finalisé :

```
Stripe Checkout (test puis live)
  → webhook Cloud Function
  → LicenseService.issue → Firestore
  → Resend
```

Jusque-là, on évite de figer l’infra Google.

## Développement

```bash
cp .env.example .env.local
# renseigner RESEND_API_KEY

npm install
npm run dev
```

Ouvrir http://localhost:3000 — tester `/acheter`.

## Variables d’environnement

| Variable | Rôle |
|----------|------|
| `RESEND_API_KEY` | Envoi email (obligatoire pour l’achat) |
| `RESEND_FROM` | Expéditeur (domaine vérifié chez Resend) |
| `NEXT_PUBLIC_SITE_URL` | Liens dans les emails |
| `NEXT_PUBLIC_STRIPE_ENABLED` | `false` jusqu’au branchement Stripe test |

## Déploiement (Vercel)

1. Importer le repo `notice-website` dans Vercel
2. Ajouter les env vars (`RESEND_API_KEY`, etc.)
3. Domaine custom : `notice.code-noor.com` (CNAME vers Vercel dans le DNS)

Le workflow GitHub `CI` ne fait que `npm run build` — le deploy est géré par Vercel.

## Structure utile

```
src/app/api/purchase/route.ts   ← faux paiement + email
src/app/api/contact/route.ts
src/lib/license.ts              ← générateur temporaire (à retirer plus tard)
src/lib/email.ts                ← Resend
src/lib/stripe.ts               ← stubs Checkout
```
