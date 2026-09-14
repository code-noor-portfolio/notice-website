'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  type User,
} from 'firebase/auth'
import { getFirebaseAuth, isFirebaseConfigured } from '@/lib/firebase/client'
import { createAdminApi, type AdminApi } from '@/lib/admin/api'
import { mapFirebaseAuthError } from '@/lib/admin/errors'

type AdminAuthState = {
  ready: boolean
  user: User | null
  isAdmin: boolean
  claimChecked: boolean
  configError: string | null
  api: AdminApi | null
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  getIdToken: () => Promise<string>
  refreshClaims: () => Promise<boolean>
}

const AdminAuthContext = createContext<AdminAuthState | null>(null)

async function readAdminClaim(user: User, force = false): Promise<boolean> {
  const result = await user.getIdTokenResult(force)
  return result.claims.admin === true
}

export function AdminAuthProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const [isAdmin, setIsAdmin] = useState(false)
  const [claimChecked, setClaimChecked] = useState(false)
  const [configError, setConfigError] = useState<string | null>(null)

  useEffect(() => {
    if (!isFirebaseConfigured()) {
      setConfigError(
        'Configuration Firebase manquante (NEXT_PUBLIC_FIREBASE_*).'
      )
      setReady(true)
      return
    }

    const auth = getFirebaseAuth()
    const unsub = onAuthStateChanged(auth, async (next) => {
      setUser(next)
      if (!next) {
        setIsAdmin(false)
        setClaimChecked(true)
        setReady(true)
        return
      }
      try {
        const admin = await readAdminClaim(next, true)
        setIsAdmin(admin)
      } catch {
        setIsAdmin(false)
      } finally {
        setClaimChecked(true)
        setReady(true)
      }
    })
    return () => unsub()
  }, [])

  const getIdToken = useCallback(async () => {
    if (!user) {
      throw new Error('Non authentifié')
    }
    return user.getIdToken(/* forceRefresh */ false)
  }, [user])

  const refreshClaims = useCallback(async () => {
    if (!user) {
      setIsAdmin(false)
      return false
    }
    const admin = await readAdminClaim(user, true)
    setIsAdmin(admin)
    return admin
  }, [user])

  const login = useCallback(async (email: string, password: string) => {
    if (!isFirebaseConfigured()) {
      throw new Error(
        'Configuration Firebase manquante (NEXT_PUBLIC_FIREBASE_*).'
      )
    }
    try {
      const cred = await signInWithEmailAndPassword(
        getFirebaseAuth(),
        email.trim(),
        password
      )
      const admin = await readAdminClaim(cred.user, true)
      setIsAdmin(admin)
      setClaimChecked(true)
      if (!admin) {
        await signOut(getFirebaseAuth())
        throw new Error(
          'Accès refusé : ce compte n’a pas les droits administrateur Notice.'
        )
      }
    } catch (err) {
      if (err instanceof Error && err.message.startsWith('Accès refusé')) {
        throw err
      }
      const code =
        typeof err === 'object' && err && 'code' in err
          ? String((err as { code: string }).code)
          : undefined
      throw new Error(mapFirebaseAuthError(code))
    }
  }, [])

  const logout = useCallback(async () => {
    if (isFirebaseConfigured()) {
      await signOut(getFirebaseAuth())
    }
    setIsAdmin(false)
  }, [])

  const api = useMemo(
    () => (user && isAdmin ? createAdminApi(getIdToken) : null),
    [user, isAdmin, getIdToken]
  )

  const value = useMemo(
    () => ({
      ready,
      user,
      isAdmin,
      claimChecked,
      configError,
      api,
      login,
      logout,
      getIdToken,
      refreshClaims,
    }),
    [
      ready,
      user,
      isAdmin,
      claimChecked,
      configError,
      api,
      login,
      logout,
      getIdToken,
      refreshClaims,
    ]
  )

  return (
    <AdminAuthContext.Provider value={value}>
      {children}
    </AdminAuthContext.Provider>
  )
}

export function useAdminAuth(): AdminAuthState {
  const ctx = useContext(AdminAuthContext)
  if (!ctx) {
    throw new Error('useAdminAuth must be used within AdminAuthProvider')
  }
  return ctx
}
