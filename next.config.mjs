/** @type {import('next').NextConfig} */
const nextConfig = {
  // API Routes + Resend — hébergement Node (Vercel), pas d'export statique GH Pages
  async redirects() {
    return [
      { source: '/cgu', destination: '/cgv', permanent: false },
      // Vitrine : pas de tunnel d’achat ni de téléchargement pour l’instant.
      { source: '/acheter', destination: '/', permanent: false },
      { source: '/acheter/succes', destination: '/', permanent: false },
      { source: '/telecharger', destination: '/', permanent: false },
    ]
  },
}

export default nextConfig
