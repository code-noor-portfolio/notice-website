'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SITE } from '@/constants/site'
import { cn } from '@/lib/utils'

const TYPES = [
  'J’ai une question',
  'Je souhaite des renseignements',
  'Je rencontre un problème avec Notice',
  'Je souhaite signaler un problème',
  'Je souhaite faire une suggestion',
  'Autre demande',
] as const

const SYSTEMES = ['Windows', 'macOS', 'Je ne sais pas'] as const

const PROBLEM_TYPES = new Set<string>([
  'Je rencontre un problème avec Notice',
  'Je souhaite signaler un problème',
])

const FIELD =
  'w-full rounded-lg border bg-surface px-4 py-2.5 text-[15px] text-fg placeholder:text-fg-tertiary transition-colors duration-150 focus:border-primary'

type Errors = Partial<Record<'type' | 'name' | 'email' | 'message', string>>

export function buildMailto(values: {
  type: string
  name: string
  email: string
  subject: string
  message: string
  version: string
  system: string
  problem: string
}) {
  const subjectLine = values.subject
    ? `[Notice] ${values.type} — ${values.subject}`
    : `[Notice] ${values.type}`

  const lines = [
    'Bonjour,',
    '',
    'Type de demande :',
    values.type,
    '',
    'Nom :',
    values.name,
    '',
    'Email :',
    values.email,
    '',
    'Sujet :',
    values.subject,
    '',
    'Message :',
    values.message,
  ]

  if (PROBLEM_TYPES.has(values.type)) {
    lines.push('', 'Version de Notice :', values.version, '', 'Système :', values.system)
    if (values.problem) {
      lines.push('', 'Description du problème :', values.problem)
    }
  }

  lines.push('', 'Merci.')

  return `mailto:${SITE.email}?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(lines.join('\n'))}`
}

export function Formulaire() {
  const [type, setType] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [version, setVersion] = useState('')
  const [system, setSystem] = useState('')
  const [problem, setProblem] = useState('')
  const [errors, setErrors] = useState<Errors>({})

  const showProblemFields = PROBLEM_TYPES.has(type)

  const validate = (): Errors => {
    const next: Errors = {}
    if (!type) next.type = 'Veuillez choisir un type de demande.'
    if (!name.trim()) next.name = 'Veuillez indiquer votre nom.'
    if (!email.trim() || !email.includes('@')) {
      next.email = 'Veuillez indiquer une adresse email valide.'
    }
    if (!message.trim()) next.message = 'Veuillez décrire votre demande.'
    return next
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length > 0) {
      const first = Object.keys(next)[0]
      document.getElementById(first)?.focus()
      return
    }

    window.location.href = buildMailto({
      type,
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
      version: version.trim(),
      system,
      problem: problem.trim(),
    })
  }

  return (
    <Section id="formulaire" className="scroll-mt-24 bg-detail">
      <Container>
        <form
          onSubmit={onSubmit}
          noValidate
          className="mx-auto max-w-2xl"
        >
          <div>
            <label htmlFor="type" className="block text-[15px] font-medium text-fg">
              Comment pouvons-nous vous aider ?
            </label>
            <select
              id="type"
              required
              value={type}
              onChange={(event) => {
                setType(event.target.value)
                setErrors((current) => ({ ...current, type: undefined }))
              }}
              aria-invalid={Boolean(errors.type)}
              aria-describedby={errors.type ? 'type-error' : undefined}
              className={cn(FIELD, 'mt-2', errors.type ? 'border-primary' : 'border-border')}
            >
              <option value="">Choisissez un type de demande</option>
              {TYPES.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            {errors.type ? (
              <p id="type-error" className="mt-1.5 text-sm text-fg">
                {errors.type}
              </p>
            ) : null}
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <Field
              id="name"
              label="Nom"
              required
              value={name}
              placeholder="Votre nom"
              error={errors.name}
              onChange={(value) => {
                setName(value)
                setErrors((current) => ({ ...current, name: undefined }))
              }}
            />
            <Field
              id="email"
              label="Adresse email"
              type="email"
              required
              value={email}
              placeholder="votre@email.com"
              error={errors.email}
              onChange={(value) => {
                setEmail(value)
                setErrors((current) => ({ ...current, email: undefined }))
              }}
            />
          </div>

          <div className="mt-8 space-y-5">
            <Field
              id="subject"
              label="Sujet"
              value={subject}
              placeholder="Sujet de votre message"
              onChange={setSubject}
            />
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-fg">
                Message
                <span className="text-fg-secondary"> *</span>
              </label>
              <textarea
                id="message"
                required
                rows={6}
                value={message}
                placeholder="Décrivez votre demande..."
                onChange={(event) => {
                  setMessage(event.target.value)
                  setErrors((current) => ({ ...current, message: undefined }))
                }}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className={cn(
                  FIELD,
                  'mt-1.5 resize-y',
                  errors.message ? 'border-primary' : 'border-border'
                )}
              />
              {errors.message ? (
                <p id="message-error" className="mt-1.5 text-sm text-fg">
                  {errors.message}
                </p>
              ) : null}
            </div>
          </div>

          <AnimatePresence initial={false}>
            {showProblemFields ? (
              <motion.div
                key="probleme"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="overflow-hidden"
              >
                <div className="mt-8 space-y-5 border-t border-border pt-8">
                  <Field
                    id="version"
                    label="Version de Notice"
                    value={version}
                    placeholder="Exemple : 1.0.2"
                    onChange={setVersion}
                  />
                  <div>
                    <label htmlFor="system" className="block text-sm font-medium text-fg">
                      Système utilisé
                    </label>
                    <select
                      id="system"
                      value={system}
                      onChange={(event) => setSystem(event.target.value)}
                      className={cn(FIELD, 'mt-1.5 border-border')}
                    >
                      <option value="">Choisissez un système</option>
                      {SYSTEMES.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="problem" className="block text-sm font-medium text-fg">
                      Description du problème
                    </label>
                    <textarea
                      id="problem"
                      rows={4}
                      value={problem}
                      placeholder="Que s’est-il passé ? Qu’attendiez-vous et qu’avez-vous obtenu ?"
                      onChange={(event) => setProblem(event.target.value)}
                      className={cn(FIELD, 'mt-1.5 resize-y border-border')}
                    />
                  </div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>

          <p className="mt-10 text-[15px] leading-relaxed text-fg-secondary">
            En cliquant sur « Préparer mon message », votre application de
            messagerie va s’ouvrir avec les informations que vous avez saisies
            déjà préremplies. Vous pourrez vérifier le message puis l’envoyer
            depuis votre propre messagerie.
          </p>

          <div className="mt-5">
            <Button type="submit" size="lg">
              Préparer mon message
            </Button>
          </div>
        </form>
      </Container>
    </Section>
  )
}

function Field({
  id,
  label,
  value,
  placeholder,
  onChange,
  type = 'text',
  required,
  error,
}: {
  id: string
  label: string
  value: string
  placeholder: string
  onChange: (value: string) => void
  type?: 'text' | 'email'
  required?: boolean
  error?: string
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-fg">
        {label}
        {required ? <span className="text-fg-secondary"> *</span> : null}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        placeholder={placeholder}
        autoComplete={id === 'email' ? 'email' : id === 'name' ? 'name' : undefined}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(FIELD, 'mt-1.5', error ? 'border-primary' : 'border-border')}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-fg">
          {error}
        </p>
      ) : null}
    </div>
  )
}
