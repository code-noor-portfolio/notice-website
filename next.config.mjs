/** @type {import('next').NextConfig} */
const nextConfig = {
  // API Routes + Resend — hébergement Node (Vercel), pas d'export statique GH Pages
  async redirects() {
    const achatClosed =
      process.env.NODE_ENV === 'development'
        ? []
        : [
            { source: '/acheter', destination: '/', permanent: false },
            { source: '/acheter/succes', destination: '/', permanent: false },
          ]

    return [
      { source: '/cgu', destination: '/cgv', permanent: false },
      // Vitrine : pas de tunnel d’achat en production ; ouvert en `next dev` (branche Stripe).
      ...achatClosed,
      { source: '/telecharger', destination: '/', permanent: false },
    ]
  },
}

export default nextConfig
