'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Check, Loader2 } from 'lucide-react'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (!name || !email.includes('@') || !message) {
      setError('Veuillez remplir les champs obligatoires.')
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok) {
        throw new Error(json.error || 'Envoi impossible')
      }
      setDone(true)
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Impossible d’envoyer le message.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="section-padding pt-28 bg-slate-50 min-h-screen">
      <div className="container-content max-w-lg">
        <h1 className="text-3xl font-bold text-slate-text mb-2">Contact</h1>
        <p className="text-slate-secondary text-sm mb-8">
          Support :{' '}
          <a
            href="mailto:support@notice.code-noor.com"
            className="text-navy-500 hover:underline"
          >
            support@notice.code-noor.com
          </a>
        </p>

        <div className="bg-white rounded-2xl border border-slate-border p-8">
          {done ? (
            <div className="text-center py-6">
              <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-3">
                <Check className="text-success" size={22} />
              </div>
              <p className="text-sm text-slate-secondary">
                Message envoyé. Nous vous répondrons à {email}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1.5" htmlFor="name">
                  Nom *
                </label>
                <input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-slate-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5" htmlFor="email">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-slate-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy-500"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1.5"
                  htmlFor="subject"
                >
                  Sujet
                </label>
                <input
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full border border-slate-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy-500"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1.5"
                  htmlFor="message"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="w-full border border-slate-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy-500"
                  required
                />
              </div>
              {error && <p className="text-sm text-red-500">{error}</p>}
              <Button type="submit" size="lg" className="w-full" disabled={loading}>
                {loading ? (
                  <Loader2 className="animate-spin" size={18} />
                ) : (
                  'Envoyer'
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
